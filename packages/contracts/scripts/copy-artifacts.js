const fs = require('fs-extra')
const path = require('path');
const cwd = process.cwd();

const CONTRACT_NAMES = require('../MAIN_CONTRACTS');

const TYPES_PATH = './build/Contracts';
const CONTRACTS_PATH = './contracts/';
const TS_PATH = '../artifacts/src/ts/';
const JSON_PATH = '../artifacts/src/json/';

fs.ensureDirSync(TS_PATH);
fs.ensureDirSync(JSON_PATH);

const template =
`/**
 *
 * This is an auto-generated file from running 'yarn generate-artifacts'
 *
*/`;

const walkSync = (dir, filenames = [], filelist = []) => {
    fs.readdirSync(dir).forEach(file => {
      filelist = fs.statSync(path.join(dir, file)).isDirectory()
        ? walkSync(path.join(dir, file), filelist)
        : filelist.concat({
            file: file,
            name: file.split(".")[0],
            path: path.join(dir, file)
        })
    });

    return filelist.filter((item) => filenames.includes(item.name));
  }

async function copyFiles() {
    const files = walkSync(TYPES_PATH, CONTRACT_NAMES);
    files.map((file) => {
        fs.copyFileSync(file.path, `../artifacts/src/json/${file.file}`);
        fs.writeFileSync(`../artifacts/src/ts/${file.name}.ts`, `export const ${file.name} = ${fs.readFileSync(file.path)}`);
    });

    const exports = files.map(item => {
        return `export { ${item.name} } from './ts/${item.name}';`
    }).join('\n');

    const file =  `${template}\n\n${exports}`;
    fs.writeFileSync(`../artifacts/src/index.ts`, file);

    console.log(files);
}

copyFiles();