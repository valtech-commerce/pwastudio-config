//--------------------------------------------------------
//-- Calculate configurations
//--------------------------------------------------------
const path = require("node:path");
const { fsSync } = require("@valtech-commerce/fs");
const { ESLint } = require("eslint"); // eslint-disable-line node/no-extraneous-require
const sortJson = require("sort-json");
const stylelint = require("stylelint"); // eslint-disable-line node/no-extraneous-require

const root = path.join(__dirname, "..");
const configPath = path.join(root, "src", "config");

const writeFixture = (rawConfig, type) => {
	const config = sortJson(rawConfig, { depth: 100 });

	fsSync.writeJson(path.join(root, "fixtures", "config", `${type}.json`), config, { space: 2 });
};

const calculateESLint = async () => {
	const eslint = new ESLint({
		overrideConfig: {
			extends: path.join(configPath, "eslint.js"),
		},
		cwd: configPath,
		useEslintrc: false,
	});

	const config = await eslint.calculateConfigForFile(__filename);
	config.parser = config.parser ? config.parser.slice(root.length) : undefined;

	writeFixture(config, "eslint");
};

const calculateStylelint = async () => {
	const config = await stylelint.resolveConfig(path.join(root, "fixtures", "calculate.css"), {
		config: {
			extends: path.join(configPath, "stylelint.js"),
		},
		configBasedir: configPath,
	});

	config.plugins = config.plugins.map((pluginPath) => {
		return pluginPath.slice(root.length);
	});

	writeFixture(config, "stylelint");
};

(async () => {
	await calculateESLint();
	await calculateStylelint();
})();
