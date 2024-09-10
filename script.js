const sheetID = '1HPuYNytvYN-vVzfNxhzincWE5gCAGkepdA5GvO7Gmvw';
const base = `https://docs.google.com/spreadsheets/d/${sheetID}/gviz/tq?`;
const sheetName ='Participants';
const sheetName2 = 'Leaderboard';
const query = encodeURIComponent('select *');
const url = `${base}&sheet=${sheetName}&tq=${query}`;
const url2 = `${base}&sheet=${sheetName2}&tq=${query}`;

 

fetch(url)
.then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Error:', error);
  });      