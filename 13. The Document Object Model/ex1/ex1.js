//Build a table.
//1. Write a function builTable that, given an array of objects that all have the same set of properties, builds up a DOM structure representing a table.
//2. Righ-align cells containing numbers
  function buildTable(data) {
      var headers = Object.keys(data[0]);
      var table = document.createElement("TABLE");
      var row = document.createElement("TR");
      headers.forEach(function(column){
          var cellH = document.createElement("TH");
          var textItem = document.createTextNode(column);
          cellH.appendChild(textItem);
          row.appendChild(cellH);
      });
      table.appendChild(row);  
      
      data.forEach(function(item){
          var row = document.createElement("TR");
          headers.forEach(function(header){
              var cell = document.createElement("TD");
              var textItem = document.createTextNode(item[header]);
              cell.appendChild(textItem); //to right align numeric values
              if(!isNaN(item[header]))
                  cell.style.textAlign = "right";
              row.appendChild(cell);
          });
          table.appendChild(row);
      }); 
      return table;
  }