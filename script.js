const sheetID = '1HPuYNytvYN-vVzfNxhzincWE5gCAGkepdA5GvO7Gmvw';
const base = `https://docs.google.com/spreadsheets/d/${sheetID}/gviz/tq?`;
const sheetName ='Participants';
const sheetName2 = 'Leaderboard';
const query = encodeURIComponent('select B,C,D');
const url = `${base}&sheet=${sheetName}&tq=${query}`;
const url2 = `${base}&sheet=${sheetName2}&tq=${query}`;

var partData;
var leadData;
 
fetch(url)
.then(res => res.text())
.then(rep => {
    const partData = JSON.parse(rep.substring(47).slice(0,-2));
    console.log(jsData);
    
})