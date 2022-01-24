/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');

 const eslint = {
  dirs: ['src'],
};
 const images = {
  path: 'https://sub.id/images/',
};
 const sassOptions = {
  includePaths: [path.join(__dirname, 'styles')],
};
 const reactStrictMode = true;
 const typescript = {
  ignoreBuildErrors: true
}

module.exports = eslint;
module.exports = images;
module.exports = sassOptions;
module.exports = reactStrictMode;
module.exports = typescript


