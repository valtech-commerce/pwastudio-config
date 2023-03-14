//--------------------------------------------------------
//-- Read config
//--------------------------------------------------------
const path = require("node:path");
const { fsSync } = require("@valtech-commerce/fs");

module.exports = (filename) => {
	return fsSync.readYaml(path.join(__dirname, "..", "config", filename));
};
