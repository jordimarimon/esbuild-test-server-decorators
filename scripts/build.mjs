import esbuild from 'esbuild';
import path from 'path';
import fs from 'fs';

const {pathname: cwd} = new URL('..', import.meta.url);
const srcDir = path.join(cwd, 'src', 'bar.ts');
const code = fs.readFileSync(srcDir, 'utf-8');
const outDir = path.join(cwd, 'dist-esbuild');

const result = await esbuild.transform(code, {
    loader: 'ts',
    target: 'es2017',
    sourcefile: srcDir,
});

if (!fs.existsSync(outDir)){
    fs.mkdirSync(outDir);
}

fs.writeFileSync(path.join(outDir, 'bar.js'), result.code);
