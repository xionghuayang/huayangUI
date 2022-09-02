/*
 * @Author: huayang
 * @Description:
 * @Date: 2022-07-25 19:57:44
 * @LastEditTime: 2022-09-02 12:17:27
 * @FilePath: \huayang_ui\.eslintrc.cjs
 */
module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true
	},
	extends: [
		"eslint:recommended",
		"plugin:vue/vue3-essential",
		"plugin:@typescript-eslint/recommended",
		"prettier",
		"plugin:prettier/recommended"
	],
	parser: "vue-eslint-parser",
	parserOptions: {
		ecmaVersion: "latest",
		parser: "@typescript-eslint/parser",
		sourceType: "module",
		ecmaFeatures: {
			jsx: true
		}
	},
	plugins: ["vue", "@typescript-eslint", "prettier"],
	// off warn error
	rules: {
		"prettier/prettier": "error",
		indent: ["error", "tab", { SwitchCase: 1 }],
		"linebreak-style": ["off", "unix"],
		quotes: ["error", "double"],
		semi: ["error", "always"],
		"no-useless-escape": "off",

		"@typescript-eslint/no-explicit-any": "off", // 禁止使用 any 类型
		"@typescript-eslint/no-namespace": "off", // 禁止使用自定义 TypeScript 模块和命名空间。
		"@typescript-eslint/no-non-null-assertion": "off", // 不允许使用后缀运算符的非空断言(!)
		"@typescript-eslint/ban-types": "off", // 禁止使用特定类型
		"@typescript-eslint/no-empty-function": "off", // 禁止使用空函数

		"vue/no-v-html": "off", // 禁止使用 v-html
		"vue/multi-word-component-names": "off", // 要求组件名称始终为 “-” 链接的单词
		"vue/no-mutating-props": "off" // 不允许组件 prop的改变
	}
};
