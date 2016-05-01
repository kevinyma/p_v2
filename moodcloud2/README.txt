MOODCLOUD VISUALIZER

What is it?
-----------
Moodcloud visualizer is a tool written in Javascript D3 for generating heatmaps from Moodcloud 
data. 

To run locally 
--------------
D3 needs to be on a web server to be able to pull external data files. To run locally, set up 
a python SimpleHTTPServer on the folder, and run in browser.

To change the data set
----------------------
1. Put the csv file into the root folder.
2. Open "index.js" in the "js" folder. In line 1, change the var filename = "../mood-cloud-log.csv" 
to "../[name-of-new-data-set].csv"

