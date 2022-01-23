/** @type {import('next').NextConfig} */
import { join } from 'path';
export const eslint = {
  dirs: ['src'],
};
export const images = {
  path: 'https://sub.id/images/',
};
export const sassOptions = {
  includePaths: [join(__dirname, 'styles')],
};
export const reactStrictMode = true;
export function webpack(config) {
  config.module.rules.push({
    test: /\.svg$/i,
    issuer: /\.[jt]sx?$/,
    use: [
      {
        loader: '@svgr/webpack',
        options: {
          typescript: true,
          icon: true,
        },
      },
    ],
  });

  return config;
}
