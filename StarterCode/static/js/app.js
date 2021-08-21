// from data.js
var tableData = data;
const tbody = d3.select("tbody");

function buildTable(data) {
    tbody.html("");
    data.forEach((dataRow) => {
        const row = tbody.append("tr");
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
                cell.text(val);
        }
    );
});
}

function handleClick() {
    const date = d3.select("#datetime").property("value");
    let filterdData = tableData;
    if (date) {
        filteredData = filteredData.filter(row => row.datetime === date);
    }
    buildTable(filteredData);
}

d3.selectAll("#filter-btn").on("click", handleClick);

buildTable(tableData);