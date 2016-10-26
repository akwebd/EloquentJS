//Build a table.
//Write a function builTable that, given an array of objects that all have the same set of properties, builds up a DOM structure representing a table.

  function buildTable(data) {
      console.log(data[0]);
      var headers = Object.keys(data[0]);
      //table structure elements
      var table = document.createElement("TABLE");
      var row = document.createElement("TR");
      var cellH = document.createElement("TH");
      var cell = document.createElement("TD");
      headers.forEach(function(column){
          cellH.innerHTML = '';
          var textItem = document.createTextNode(column);
          cellH.appendChild(textItem);
          row.appendChild(cellH);
      });
      table.appendChild(row);
      
/*      for(var i = 0; data.lenght; i++){
          row.innerHTML = '';
          for(var y = 0; headers.length; y++){
              var item = document.createElement("td", data[i].headers[y]);
              row.appendChild(item);
          }
          table.appendChild(row);
      } */  
      return table;
  }