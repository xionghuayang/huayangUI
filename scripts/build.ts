import * as fs from "fs-extra";
import * as path from "path";
import { config } from "../vite.config";
import { build, InlineConfig, defineConfig, UserConfig } from "vite";
const buildAll = async () => {
  // const inline: InlineConfig =
  //   viteConfig;

  // 全量打包
  let allConfig = JSON.parse(JSON.stringify(config))
  await build(defineConfig(allConfig as UserConfig) as InlineConfig);
  // await build(defineConfig({}))

  // 复制 Package.json 文件
  const packageJson = require("../package.json");
  packageJson.main = "huayang-ui.umd.js";
  packageJson.module = "huayang-ui.esm.js";
  fs.outputFile(
    path.resolve(config.build.outDir, `package.json`),
    JSON.stringify(packageJson, null, 2)
  );

  // 拷贝 README.md文件
  fs.copyFileSync(
    path.resolve("./README.md"),
    path.resolve(config.build.outDir + "/README.md")
  );

  const srcDir = path.resolve(__dirname, "../src/");
  let _outDir = config.build.outDir;
  fs.readdirSync(srcDir)
    .filter((name) => {
      // 只要目录不要文件，且里面包含index.ts
      const componentDir = path.resolve(srcDir, name);
      const isDir = fs.lstatSync(componentDir).isDirectory();
      return isDir && fs.readdirSync(componentDir).includes("index.ts");
    })
    .forEach(async (name) => {
      // console.log('_outDir--------------------------------',_outDir, name)
      const outDir = path.resolve(_outDir, name);
      const custom = {
        lib: {
          entry: path.resolve(srcDir, name),
          name, // 导出模块名
          fileName: `index`,
          formats: [`es`, `umd`],
        },
        outDir,
      };
      let newConfig = JSON.parse(JSON.stringify(config))

      Object.assign(newConfig.build, custom);
      // console.log('config-----------------',newConfig)
      await build(defineConfig(newConfig as UserConfig) as InlineConfig);

      fs.outputFile(
        path.resolve(outDir, `package.json`),
        `{
          "name": "huayang-ui-vite/${name}",
          "main": "index.umd.js",
          "module": "index.umd.js"
}`,
        `utf-8`
      );
    });
};

buildAll();