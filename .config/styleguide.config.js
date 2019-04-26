/* eslint-disable */
const webpackConfig = require('./webpack.js');
const path = require('path');

module.exports = {
  components: '../src/client/components/**/[A-Z]*.tsx',
  defaultExample: true,
  propsParser: require('react-docgen-typescript').parse,
  styleguideDir: 'docs',
  webpackConfig,
  pagePerSection: true,
  /*ribbon: {
    url: 'http://example.com/',
    text: 'Fork me on BitBucket',
  },*/
  getComponentPathLine(componentPath) {
    const name = path.basename(componentPath, '.tsx');
    const dir = path.dirname(componentPath);
    return `import { ${name} } from '${dir.replace('../src/', '~')}/${name}';`;
  },
};
