import { execSync } from 'child_process';
import fs from 'fs';

console.log('1. Build JS ...');
try {
  execSync('rollup -c', { stdio: 'inherit' });
} catch (error) {
  console.error('Rollup build failed:', error);
  process.exit(1);
}

console.log('2. Build CSS ...');
execSync('sass src/sweetalert2.scss dist/sweetalert2.css --no-source-map', { stdio: 'inherit' });
execSync('sass src/sweetalert2.scss dist/sweetalert2.min.css --no-source-map --style=compressed', { stdio: 'inherit' });

console.log('3. Build JS+CSS ...');
const css = fs.readFileSync('dist/sweetalert2.min.css', 'utf8');
const cssInJs = `"undefined"!=typeof document&&function(e,t){var n=e.createElement("style");if(e.getElementsByTagName("head")[0].appendChild(n),n.styleSheet)n.styleSheet.disabled||(n.styleSheet.cssText=t);else try{n.innerHTML=t}catch(e){n.innerText=t}}(document,"${css
  .trim()
  .replace(/"/g, '\\"')}");`;

['dist/sweetalert2.js', 'dist/sweetalert2.min.js', 'dist/sweetalert2.esm.js', 'dist/sweetalert2.esm.min.js'].forEach(file => {
  const js = fs.readFileSync(file, 'utf-8');
  fs.writeFileSync(file.replace('.js', '.all.js'), `${js}${cssInJs}`);
});

console.log('Build completed successfully!');
