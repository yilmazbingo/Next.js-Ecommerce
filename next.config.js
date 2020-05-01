const withSass = require("@zeit/next-sass");
const withCSS = require("@zeit/next-css");

// const nextConfig = {
//   webpack: (config, { dev, isServer, defaultLoaders }) => {
//     defaultLoaders.babel.options.babelPresetPlugins.push("inline-react-svg");
//     console.log("defaultloaders", defaultLoaders);
//     config.module.rules.push({
//       test: /\.svg$/,

//       include: [require("path").resolve(__dirname, "assets")],
//       use: [
//         {
//           loader: "babel-loader",
//         },
//         {
//           loader: "react-svg-loader",
//           options: { jsx: true },
//   options: {
//     jsx: true,
//     svgo: {
//       plugins: [
//         {
//           cleanupIDs: {
//             prefix: {
//               toString() {
//                 this.counter = this.counter || 0;
//                 return `id-${this.counter++}`;
//               },
//             },
//           },
//         },
//         {
//           removeTitle: true,
//         },
//       ],
//     },
//         },
//       ],
//     });

//     return config;
//   },
// };

module.exports = withCSS(withSass());
