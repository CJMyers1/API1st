function firstCall() {
    URL = 'https://iskarr.github.io/austindonovan.github.io/api/business.json';
}

fetch('https://iskarr.github.io/austindonovan.github.io/api/business.json')
    .then((Response) => Response.json())
    .then((jsObject) => {
        console.log(jsObject);
    })