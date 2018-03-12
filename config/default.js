//用于默认配置项
//设置者：叶振
//功能：entry,loader，output
const path = require('path');
let sdd = {
    src: path.resolve(__dirname, '../src'),
    components: path.resolve(__dirname, '../src/components')
}
module.exports = {
    sdd
};