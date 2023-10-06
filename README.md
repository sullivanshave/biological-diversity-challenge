# biological-diversity-challenge

## Background Information

This challenge is inspired by the [Belly Button Biodiversity](http://robdunnlab.com/projects/belly-button-biodiversity/) project. The abstract of the project is the following:


 *The belly button is one of the habitats closest to us, and yet it remains relatively unexplored. In January 2011, we launched Belly Button Biodiversity to investigate the microbes inhabiting our navels and the factors that might influence the microscopic life calling this protected, moist patch of skin home. In addition to inspiring scientific curiosity, Belly Button Biodiversity inspired conversations about the beneficial roles microbes play in our daily lives.*


 ## Instructions

 1. Use the D3 Library to read in the `samples.json` file from the [URL](https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json).

 1. Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.
    - Use `sample_values` as the values for the bar chart.
    - Use `otu_ids` as the labels for the bar chart.
    - Use `otu_labels` as the hovertext for the chart.

1. Create a bubble chart that displays each sample.
    - Use `otu_ids` for the x values.
    - Use `sample_values` for the y values.
    - Use `sample_values` for the marker size.
    - Use `otu_ids` for the marker colors.
    - Use `otu_labels` for the text values.

1. Display the sample metadata, i.e., an individual's demographic information.

1. Display each key-value pair from the metadata JSON object somewhere on the page.

1. Update all the plots when a new sample is selected. Additionally, you are welcome to create any layout that you would like for your dashboard. An example dashboard is shown as follows:

1. Deploy your app to a free static page hosting service, such as GitHub Pages. Submit the links to your deployment and your GitHub repo. Ensure that your repository has regular commits and a thorough README.md file
