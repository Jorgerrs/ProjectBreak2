const basicInfo = require('./basicInfo');
const components = require('./components');
const tasks = require('./products');

module.exports = {
    ...basicInfo,
    ...components,
    ...products
};
