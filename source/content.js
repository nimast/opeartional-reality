import hljs from 'highlight.js';

hljs.addPlugin({
	'after:highlightElement': ({ el, result }) => {
		// move the language from the result into the dataset
		// el.dataset.language = result.language;
		console.log(el);
	}
});

const languages = [
	"python",
	"html",
	"bash",
	"css",
	"ruby",
	"java",
	"javascript",
	"php",
	"sql",
	"c#",
	"c",
	"arduino"
]

function getRandomLanguage() {
	return languages[Math.floor(Math.random() * languages.length)];
}

function updateUI() {
	for (const element of document.querySelectorAll('p')) {
		element.className = getRandomLanguage();
		hljs.highlightElement(element);
	}

	for (const element of document.querySelectorAll('i')) {
		element.className = getRandomLanguage();
		hljs.highlightElement(element);
	}

	for (const element of document.querySelectorAll('span')) {
		element.className = getRandomLanguage();
		hljs.highlightElement(element);
	}

	for (const element of document.querySelectorAll('tr.mslg')) {
		element.className = getRandomLanguage();
		hljs.highlightElement(element);
	}
}

async function init() {

	document.addEventListener('DOMContentLoaded', event => {
		updateUI();
	});

	updateUI();

	// const observer = new MutationObserver(updateUI);
	// const observeFragment = (): void => {
	// 	const ajaxFiles = select('#files ~ include-fragment[src*="/file-list/"]');
	// 	if (ajaxFiles) {
	// 		observer.observe(ajaxFiles.parentNode!, {
	// 			childList: true
	// 		});
	// 	}
	// };
	//
	// await elementReady('[aria-labelledby="files"]');
	//
	// updateUI();
	// observeFragment();
	document.addEventListener('pjax:end', updateUI); // Update on page change
	// document.addEventListener('pjax:end', observeFragment);
}

init();
