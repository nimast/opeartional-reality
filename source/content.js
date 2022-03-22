import hljs from 'highlight.js';

async function init() {
	// Hljs.configure({
	// 	cssSelector: 'p'
	// });
	//
	// hljs.highlightAll();

	document.addEventListener('DOMContentLoaded', event => {
		for (const element of document.querySelectorAll('p')) {
			element.className = 'python';
			hljs.highlightElement(element);
		}
	});

	// Document.querySelectorAll('p').forEach((el) => {
	// 	hljs.highlightElement(el);
	// });

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
	// document.addEventListener('pjax:end', updateUI); // Update on page change
	// document.addEventListener('pjax:end', observeFragment);
}

init();
