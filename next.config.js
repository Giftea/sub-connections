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
  // !! WARN !!
  // Dangerously allow production builds to successfully complete even if
  // your project has type errors.
  // !! WARN !!
  ignoreBuildErrors: true
}
//  function webpack(config) {
//   config.module.rules.push({
//     test: /\.svg$/i,
//     issuer: /\.[jt]sx?$/,
//     use: [
//       {
//         loader: '@svgr/webpack',
//         options: {
//           typescript: true,
//           icon: true,
//         },
//       },
//     ],
//   });

//   return config;
// }

module.exports = eslint;
module.exports = images;
module.exports = sassOptions;
module.exports = reactStrictMode;
module.exports = typescript


