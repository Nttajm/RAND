const dbnm_output = document.querySelector('.dbnm-scripts');

const scripts = [
    '$ > / i ** registry',
    '$ > reg i weBCkit --all',
    '$ > Webc Valcal',
    '$ > Webc Valcal --all',
    '$ > Webc --no-cache',
    'WebC$ validating connection...',
    'WebC$ verifying with outlet...',
    'WebC$ HTTP conection established (200)',
    `$ > Webc get().val(["all", '.csx', '.js', '.css', '.html', '.json',])`,
    `$ > WebC get().key ?= AsAdmin()`.replace(/</g, '&lt;').replace(/>/g, '&gt;'),
    `WebC$ Collecting all files...`,
    `WebC$ verifying with outlet`,
    `WebC$ HTTP conection established (200)`,
    `$ > WeBC setInit('index.html') as index`,
    'WebC$ index.html set as index',
    `$ > WebC run() as production`,
    'WebC$ loading index...',
];

function printScripts(number, delay) {
    setTimeout(() => {
        dbnm_output.innerHTML += `<div class="dbnm-script">${scripts[number]}</div>`;
        const lastScript = dbnm_output.querySelector('.dbnm-script:last-child');
        if (lastScript) {
            lastScript.scrollIntoView({ behavior: 'smooth' });
        }
    }, delay * number * 2);
}

function startScripts() {
    dbnm_output.innerHTML = '';
    printScripts(0, 100);
    printScripts(1, 100);
    printScripts(2, 100);
    printScripts(3, 300);
    printScripts(4, 100);
    printScripts(5, 100);
    printScripts(6, 100);
    printScripts(7, 100);
    printScripts(8, 100);
    printScripts(9, 100);
    printScripts(10, 100);
    printScripts(11, 100);
    printScripts(12, 100);
    printScripts(13, 100);
    printScripts(14, 100);
    printScripts(15, 100);
    printScripts(16, 100);
}

startScripts();


function replaceClassTimed(elemName, oldClass, newClass, after) {
    setTimeout(() => {
        const element = document.querySelector(elemName);
        if (element) {
            element.classList.remove(oldClass);
            element.classList.add(newClass);
        }
    }, after);
}


