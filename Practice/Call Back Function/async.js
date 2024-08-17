function fetchData(callback) {
    setTimeout(() => {
        console.log("Data fetched");
        callback();
    }, 2000);
}

function processData() {
    console.log("Processing data");
}

// Passing processData as a callback to fetchData
fetchData(processData);
