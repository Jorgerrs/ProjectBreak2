const basicInfo = require('./basicInfo');
const components = require('./components');
const products = require('./products');

module.exports = {
    ...basicInfo,
    ...components,
    ...products
};
