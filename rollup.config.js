import path from "path";
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import livereload from 'rollup-plugin-livereload';
import { terser } from 'rollup-plugin-terser';
import sass from 'rollup-plugin-sass';
import babel from '@rollup/plugin-babel';
import hotcss from "rollup-plugin-hot-css";
import image from '@rollup/plugin-image';
import json from '@rollup/plugin-json';
import url from '@rollup/plugin-url';
import {writeFileSync} from "fs";

const production = !process.env.ROLLUP_WATCH;

export default {
    input: 'src/main.js',
    output: {
        sourcemap: true,
        format: 'iife',
        name: 'app',
        file: 'public/build/samplePWA.js'
    },
    plugins: [
        babel({
            babelHelpers: 'runtime',
            exclude: 'node_modules/**'
        }),
        hotcss({
            file: 'samplePWA.css',
            extensions: ['.css', '.scss'],
            loaders: ['scss'],
            hot: true
        }),
        sass({
            // insert: true
            output(styles, styleNodes) {
                writeFileSync('public/build/samplePWA.css', styles);
            }
        }),
        image(),
        json(),
     /*   url({
            include: ['**!/!*.otf'],
            limit: Infinity,
        }),*/
        resolve({
            browser: true
        }),
        commonjs(),
        !production && serve(),
        !production && livereload('public'),
        production && terser(),

    ],
    watch: {
        clearScreen: false
    }
};

function serve() {
    let started = false;

    return {
        writeBundle() {
            if (!started) {
                started = true;

                require('child_process').spawn('npm', ['run', 'start', '--', '--dev'], {
                    stdio: ['ignore', 'inherit', 'inherit'],
                    shell: true
                });
            }
        }
    };
}
