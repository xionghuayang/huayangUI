/*
 * @Author: huayang
 * @Description: 
 * @Date: 2022-08-30 17:53:41
 * @LastEditTime: 2022-08-31 10:59:19
 * @FilePath: \huayang_ui\config\unocss.ts
 */
import { presetUno, presetAttributify, presetIcons } from "unocss";
import Unocss from "unocss/vite";

const colors = [
  "white",
  "black",
  "gray",
  "red",
  "yellow",
  "green",
  "blue",
  "indigo",
  "purple",
  "pink",
];

const safelist = [
  ...colors.map((v) => `bg-${v}-100`),
  ...colors.map((v) => `bg-${v}-300`),
  ...colors.map((v) => `bg-${v}-400`),
  ...colors.map((v) => `bg-${v}-500`),
  ...colors.map((v) => `bg-${v}-700`),
  ...colors.map((v) => `hover:bg-${v}-100`),
  ...colors.map((v) => `hover:bg-${v}-300`),
  ...colors.map((v) => `hover:bg-${v}-400`),
  ...colors.map((v) => `hover:bg-${v}-500`),
  ...colors.map((v) => `hover:bg-${v}-700`),
  ...colors.map((v) => `border-${v}-400`),
  ...colors.map((v) => `border-${v}-500`),
  ...colors.map((v) => `text-${v}-500`),
  ...colors.map((v) => `hover:text-${v}-500`),
  'text-white',
  ...Array.from({ length: 20 }, (_, i) => `w-${i + 1}`),
  ...Array.from({ length: 20 }, (_, i) => `h-${i + 1}`),
  ...Array.from({ length: 8 }, (_, i) => `px-${i + 1}`),
  ...Array.from({ length: 8 }, (_, i) => `py-${i + 1}`),
  ...["xs", "sm", "base", "lg", "xl", "2xl", "3xl"].map((v) => `text-${v}`),
  ...["rounded-full", "rounded-lg"],
  ...[
    "search",
    "edit",
    "check",
    "message",
    "star-off",
    "delete",
    "add",
    "share",
  ].map((v) => `i-ic-baseline-${v}`),
  // ...[
  //   'apple',
  //   'search'
  // ].map((v) => `i-ep-${v}`)
];

export default () =>
  Unocss({
    presets: [presetUno(), presetAttributify(), presetIcons()],
    safelist,
    rules: [
      ['f-c', {display: 'flex', 'justify-content': 'center', 'align-items': 'center'}]
    ]
  });