
import typescript from 'rollup-plugin-typescript2'
import resolve from '@rollup/plugin-node-resolve'
import pkg from './package.json'
// export default {


//     input: 'src/index.tsx',
//     output: [
//         {
//             file: pkg.main,
//             format: 'cjs',
//             exports: 'named',
//             sourcemap: true,
//             strict: false,
//             name: 'main'
//         }
//     ],
//     plugins: [sass({ insert: true }), typescript()],
//     external: ['react', 'react-dom']

// }



// export default {
//     input: 'src/index.tsx',
//     output: {
//         file: 'bundle.js',
//         format: 'cjs'
//     },
//     plugins: [resolve(), typescript()]
// }

export default [{

    input: 'src/index.tsx',
    output: {
        file: 'dist/index.d.ts',
        format: 'cjs'
    },
    plugins: [typescript(), pkg],
    external: ['react', 'react-dom']

},
{

    input: 'src/button.tsx',
    output: {
        file: 'dist/button.d.ts',
        format: 'cjs'
    },
    plugins: [typescript(), pkg],
    external: ['react', 'react-dom']

},
]