var url = "https://sheets.googleapis.com/v4/spreadsheets/1HPuYNytvYN-vVzfNxhzincWE5gCAGkepdA5GvO7Gmvw/values/UnrankedPlayers!B2:D25?key=AIzaSyApwsCEntAZOeNC5vljDqUWCUsSe3JZnHc&includeGridData=true";  

axios.get(url)
  .then(function (response) {
    console.log(response);                                                                                                                                                    
  })
  .catch(function (error) {
    console.log(error);                                                                                                                                                       
  });             