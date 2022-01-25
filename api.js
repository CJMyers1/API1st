const firstCall = 'https://iskarr.github.io/austindonovan.github.io/api/business.json';

fetch(firstCall)
    .then((Response) => Response.json())
    .then((jsObject) => {
        console.log(jsObject);
    })