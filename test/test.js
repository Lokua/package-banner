const pkg = require('../package.json');

const banner = require('../index');
const [fullBanner, minBanner] = [banner.build(pkg), banner.min(pkg)];

require('fs').readFile(`${__dirname}/../index.js`, 'utf8', (err, code) => {
  console.info(`${fullBanner}\n${code}`);
  console.info(`${minBanner}\n//let's pretend this is minified code`);
});
