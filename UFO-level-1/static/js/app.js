// from data.js
var tableData = data;

filteredData = tableData.filter(function(item){
    return true;
});


d3.select("#filter-btn").on("click", function(){
    var datetimeElement = d3.select("#datetime")
    var inputValue = datetimeElement.property("value");

    filteredData = tableData.filter(function(item){
        if(inputValue == "") return true;
        return item.datetime == inputValue;
    });
    createRows();
});


function createRows(){
    //remove all old rows
    d3.select("#table-body").selectAll("tr").remove();

    //loop over all the data to create the new rows based on the filteredData
    filteredData.forEach(function(item){
        var tbody = d3.select("#table-body");
        var row = tbody.append("tr"); //create row

        var cell = row.append("td"); //create date column
        cell.text(item.datetime);

        var cell = row.append("td"); //create city column
        cell.text(item.city);

        var cell = row.append("td");
        cell.text(item.state);

        var cell = row.append("td");
        cell.text(item.country);

        var cell = row.append("td");
        cell.text(item.shape);

        var cell = row.append("td");
        cell.text(item.durationMinutes);

        var cell = row.append("td");
        cell.text(item.comments);

    });
}

createRows();

