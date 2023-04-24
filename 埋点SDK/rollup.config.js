import ts from 'rollup-plugin-typescript2'
import path from 'path'
import dts from 'rollup-plugin-dts'
import { fileURLToPath } from 'url';
const __filenameNew = fileURLToPath(import.meta.url);
const __dirnameNew = path.dirname(__filenameNew);
export default [{
  //入口文件
  input: './src/core/index.ts',
  output: [
    //打包esModule
    {
      file: path.resolve(__dirnameNew, './dist/index.esm.js'),
      format: 'es'
    },
    //打包cjs
    {
      file: path.resolve(__dirnameNew, './dist/index.cjs.js'),
      format: 'cjs'
    },
    // 打包AMD CMD UMD
    {
      file: path.resolve(__dirnameNew, './dist/index.js'),
      format: 'umd',
      name: 'tracker'
    }
  ],
  //配置ts
  plugins: [
    ts(),
  ]
}, {
  //打包声明文件
  input: './src/core/index.ts',
  output: {
    file: path.resolve(__dirnameNew, './dist/index.d.ts'),
    format: 'es'
  },
  plugins: [dts()]
}]