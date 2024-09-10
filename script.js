const sheetID = '1HPuYNytvYN-vVzfNxhzincWE5gCAGkepdA5GvO7Gmvw';
const base = `https://docs.google.com/spreadsheets/d/${sheetID}/gviz/tq?`;
const sheetName ='Participants';
const sheetName2 = 'Leaderboard';
const query = encodeURIComponent('select *');
const url = `${base}&sheet=${sheetName}&tq=${query}`;
const url2 = `${base}&sheet=${sheetName2}&tq=${query}`;

 
fetch(url)
.then(res => res.text())
.then(rep => {
    const jsData = JSON.parse(rep.substring(47).slice(0,-2));
    console.log(jsData);
    const colz = [];
    jsData.table.cols.forEach((heading)=>{
        if(heading.label) {
            colz.push(heading.label);
        }
    })
})