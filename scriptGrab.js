// --- Results from Wunderkind Looker --- //
let wkndArray = [];
let allData = document.querySelector('pre').innerText;
let colRegex = /(convert2|pushdata),\w+/ig;
let colTrim = /(convert2|pushdata),/i;
let matchResults = allData.match(colRegex);
for (result of matchResults) {
    let trimResult = result.replace(colTrim,'');
    wkndArray.push(trimResult)
}
//console.log(matchedArray)


// -- Results from Google Analytics --- //
let gaArray = [];
let dataTable = document.querySelector("table._GAr"); //document.querySelector("table._GAr")
let rows = dataTable.querySelector('tbody').children;
for (row of rows) {
    let idColumn = row.querySelector('tr > .ID-dimension-data-0 > span._GApu').innerText
    gaArray.push(idColumn);
}
//console.log(gaArray);


// -- Paste an Array Into Google Sheets --- //
let pasteArray = ['101444268', '101478799', '101488550', '101488695', '101451217', '101441477', '101450291', '101453821', '101453946', '101445916', '101453756', '101442391', '101452654', '101444793', '101470235', '101466382', '101454274', '101443277', '101444826', '101455124', '101453333', '101452948', '101453328', '101453823', '101455008', '101443020', '101447146', '101447623', '101453346', '101453559', '101474394', '101446851', '101453330', '101458047', '101446016', '101446676', '101477984', '101454238', '101441552', '101442377', '101445457', '101446257', '101447741', '101461834', '101452421', '101441720', '101447071', '101445516', '101452513', '101451375'];
