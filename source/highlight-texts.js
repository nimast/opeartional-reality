import select from 'select-dom';
import elementReady from 'element-ready';
import hljs from 'highlight.js';

const ellipsisWidth = 70;

function updateUI() {}

async function init() {
	console.log(''
		+ '\n'
		+ '\n'
		+ '!!!!!!!!! '
		+ 'EXTENSION INIT CALLED!!!!');

	hljs.configure({
		cssSelector: 'p',
	});

	hljs.highlightAll();

	document.addEventListener('DOMContentLoaded', event => {
		for (const element of document.querySelectorAll('p')) {
			hljs.highlightElement(element);
		}
	});

	for (const element of document.querySelectorAll('p')) {
		hljs.highlightElement(element);
	}

	// Const observer = new MutationObserver(updateUI);
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

void init();

console.log('highlight text run!!!');
