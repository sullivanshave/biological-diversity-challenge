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
    console.log(firstSample);


    buildBarChart(firstSample);
    buildMetadata(firstSample);
    buildBubbleChart(firstSample);
};


function buildBarChart(sample) {
    d3.json(url).then(function(data) {
        let samples = data.samples;
        let resultArray = samples.filter(function(data) {
            return data.id === sample;
        });

        let result = resultArray[0];
        let otu_ids = result.otu_ids;
        let otu_labels = result.otu_labels;
        let sample_values = result.sample_values;

        console.log(otu_ids);
        console.log(otu_labels);
        console.log(sample_values);

        let yticks = otu_ids.slice(0, 10).map(function(otuID) {
            return `OTU ${otuID}`;
        }).reverse();

        let xticks = sample_values.slice(0, 10).reverse();

        let labels = otu_labels.slice(0, 10).reverse();

        let trace = {
            x: xticks,
            y: yticks,
            text: labels,
            type: "bar",
            orientation: "h"
        };

        let layout = {
            title: "Top 10 OTUs Found per Individual",
            margin: { t: 30, l: 150 }
        };

        Plotly.newPlot("bar", [trace], layout);

});} 

function buildMetadata(sample) {
    d3.json(url).then(function(data) {
        let metadata = data.metadata;
        let resultArray = metadata.filter(function(data) {
            return data.id === sample;
        });
        let result = resultArray[0];
        let PANEL = d3.select("#sample-metadata");
        PANEL.html("");
        Object.entries(result).forEach(function([key, value]) {
            PANEL.append("h6").text(`${key.toUpperCase()}: ${value}`);
        });
    });
};


function buildBubbleChart(sample) {
    d3.json(url).then(function(data) {
        let samples = data.samples;
        let resultArray = samples.filter(function(data) {
            return data.id === sample;
        });

        let result = resultArray[0];
        let otu_ids = result.otu_ids;
        let otu_labels = result.otu_labels;
        let sample_values = result.sample_values;

        let trace = {
            x: otu_ids,
            y: sample_values,
            mode: "markers",
            marker: {
                size: sample_values,
                color: otu_ids
            },
            text: otu_labels
        };

        let layout = {
            title: "Bacteria Cultures per Sample",
            xaxis: { title: "OTU ID" },
            height: 600,
            width: 1000
        };

        Plotly.newPlot("bubble", [trace], layout);
    });


}

function optionChanged(value) { 

    console.log(value); 

    buildMetadata(value);
    buildBarChart(value);
    buildBubbleChart(value);
};

init();