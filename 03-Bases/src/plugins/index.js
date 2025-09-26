
const { getUUID } = require('../plugins/get-uuid.plugin.js');
const { getAge } = require('../plugins/get-age.plugin.js');
const { http } = require('../plugins/http-client.plugin.js')

module.exports = {
    getUUID,
    getAge,
    http,
};