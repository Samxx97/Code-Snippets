const components = require('prismjs/components');
const getLoader = require('prismjs/dependencies');


/**
 * The set of all languages which have been loaded using the below function.
 *
 * @type {Set<string>}
 */
const loadedLanguages = new Set();

/**
 * Loads the given languages and adds them to the current Prism instance.
 *
 * If no languages are provided, __all__ Prism languages will be loaded.
 *
 * @param {string|string[]} [languages]
 * @returns {void}
 */
async function loadLanguages(language) {
	if (language in loadLanguages) {
		return 
	}
	
	const module = await import(`prismjs/components/prism-${language + '.js'}`)
	loadedLanguages.add(language);
	return module
}

loadLanguages.silent = false;

module.exports = loadLanguages;
