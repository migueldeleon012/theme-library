import babel from 'rollup-plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import external from 'rollup-plugin-peer-deps-external';
import typescript from '@rollup/plugin-typescript';
import sucrase from '@rollup/plugin-sucrase';
import { terser } from 'rollup-plugin-terser';
import postcss from 'rollup-plugin-postcss';
import commonjs from '@rollup/plugin-commonjs';

export default [
  {
    input: './src/index.ts',
    output: [
      {
        file: 'dist/index.js',
        format: 'cjs',
      },
      {
        file: 'dist/index.es.js',
        format: 'es',
        exports: 'named',
      },
    ],
    plugins: [
      postcss({
        plugins: [],
        minimize: true,
      }),
      resolve(),
      commonjs({
        include: /node_modules/,
        namedExports: {
          'prop-types': ['PropTypes'],
        },
      }),
      babel({
        exclude: 'node_modules/**',
        presets: ['@babel/preset-react'],
      }),
      typescript({ tsconfig: './tsconfig.json' }),
      sucrase({
        exclude: ['node_modules/**'],
        transforms: ['typescript', 'jsx'],
      }),
      external(),
      terser(),
    ],
  },
];
