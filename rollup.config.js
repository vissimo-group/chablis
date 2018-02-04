import babel from 'rollup-plugin-babel';
import json from 'rollup-plugin-json';
import uglify from 'rollup-plugin-uglify';
import sourceMaps from 'rollup-plugin-sourcemaps';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import pkg from './package.json';

const commonPlugins = [
  resolve({
    extensions: ['.js', '.jsx'],
  }),
  json(),
  sourceMaps(),
  uglify({
    sourceMap: true,
  }),
  commonjs(),
  babel({
    exclude: 'node_modules/**',
    plugins: ['external-helpers'],
  }),
];

export default {
  input: 'src/index.js',
  external: ['react'].concat(Object.keys(pkg.dependencies)),
  plugins: commonPlugins,
  output: {
    file: 'dist/chablis.js',
    globals: { react: 'React' },
    sourcemap: true,
    format: 'cjs',
  },
};
