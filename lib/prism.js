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
	let languages = []
	if (language == "php") {
		languages.push("markup-templating")
	}
	languages.push(language)
	for (let lang of languages) {
		const module = await import(`prismjs/components/prism-${lang + '.js'}`)
		loadedLanguages.add(lang);
	}
	
	
	return module
}

loadLanguages.silent = false;

module.exports = loadLanguages;
