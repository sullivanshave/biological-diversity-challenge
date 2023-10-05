const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

d3.json(url).then(function(data) {
    console.log(data);
}   );

function init() {
    let dropdown = d3.select("#selDataset");
    d3.json(url).then(function(data) {
        console.log(data);
        data.names.forEach(function(name) {
            dropdown.append("option").text(name).property("value");
        });
    });

    let firstSample = data.names[0];
    buildCharts(firstSample);
    buildMetadata(firstSample);
    buildGauge(firstSample);
    buildBubble(firstSample);
};


function buildMetadata(sample) {}