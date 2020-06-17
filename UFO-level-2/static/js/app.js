// from data.js
var tableData = data;

filteredData = tableData.filter(function(item){
    return true;
});


d3.select("#filter-btn").on("click", function(){
    var datetimeElement = d3.select("#datetime")
    var datetimeValue = datetimeElement.property("value");

    var cityElement = d3.select("#city")
    var cityValue = cityElement.property("value");

    var stateElement = d3.select("#state")
    var stateValue = stateElement.property("value");

    var countryElement = d3.select("#country")
    var countryValue = countryElement.property("value");

    var shapeElement = d3.select("#shape")
    var shapeValue = shapeElement.property("value");

    filteredData = tableData.filter(function(item){
        return (item.datetime == datetimeValue  || datetimeValue == "") &&
        (item.city == cityValue  || cityValue == "") && 
        (item.state == stateValue  || stateValue == "") &&
        (item.country == countryValue  || countryValue == "") &&
        (item.shape == shapeValue  || shapeValue == "");
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

