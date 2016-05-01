var filename = "mood-cloud-log.csv";

// moved these variables into the global scope so that both buildGrid
// and updateGrid have access to these objects.

var startDate,
    endDate;
var startTime = 0;
var endTime = 24;

var daysOfWeek = [];

var csvData;

var width = 500;
var height = 340;

var gridDim = 59;
var grid;
var squares;
var text;

var dayNameFormat = d3.time.format("%A");
// var timeNameFormat = d3.time.format("%I:%M %p").parse("3:15 PM"); > d3.time.format("%I:%M %p")()
// console.log(timeNameFormat);



d3.csv(filename, function (d) {
    return {
        uniqueID: +d.uniqueID,
        imageID: +d.imageID,
        cellID: +d.cellID,
        pam_pa: +d.pam_pa,
        pam_na: +d.pam_na,
        arousal: parseInt(+d.arousal),
        valence: parseInt(+d.valence),
        time: new Date(d.easterntime)
    };

}, function (error, rows) {
    
    csvData = rows;

    // init Date slider
    startDate = csvData[0].time;
    endDate = csvData[csvData.length - 1].time;

    var daySlider = $("#slider");
    var hourSlider = $("#slider2");

    daySlider.dateRangeSlider({
        bounds: {
            min: startDate,
            max: endDate
        }, 
        defaultValues: {
            min: startDate,
            max: endDate
        }
    });

    // $("#slider2").rangeSlider({
    //     bounds: {
    //         min: 0, 
    //         max: 24
    //     }
    //     });

 hourSlider.slider({
        range: true,
        min: 0,
        max: 1439,
        values: [540, 1020],
        slide: slideTime
    });

function slideTime(event, ui){
    var val0 = $("#slider2").slider("values", 0),
        val1 = $("#slider2").slider("values", 1),
        minutes0 = parseInt(val0 % 60, 10),
        hours0 = parseInt(val0 / 60 % 24, 10),
        minutes1 = parseInt(val1 % 60, 10),
        hours1 = parseInt(val1 / 60 % 24, 10);
    startTimeLabel = getTime(hours0, minutes0);
    endTimeLabel = getTime(hours1, minutes1);
    $("#time").text(startTimeLabel + ' - ' + endTimeLabel);
    startTime = hours0;
    endTime = hours1;
    updateGrid();
}
function getTime(hours, minutes) {
    var time = null;
    minutes = minutes + "";
    if (hours < 12) {
        time = "AM";
    }
    else {
        time = "PM";
    }
    if (hours == 0) {
        hours = 12;
    }
    if (hours > 12) {
        hours = hours - 12;
    }
    if (minutes.length == 1) {
        minutes = "0" + minutes;
    }
    return hours + ":" + minutes + " " + time;
}

    // binding to valuesChanging instead of valuesChanged so that updates occur almost instantaneously
    daySlider.on("valuesChanging", function (e, data) {
        startDate = data.values.min;
        endDate = data.values.max;
        updateGrid();
    });

    $("#dayofweek").find(":checkbox").change(function() {
        daysOfWeek = $('input:checkbox:checked').map(function() {
            return this.value;
        }).get();
        updateGrid();
    });

    buildGrid();

    function buildGrid() {
        var data = generateData();

        var maxNum = d3.max(data.map(function(v, i, a) { return v.entries; })),
            domainScale = [0, Math.round(maxNum / 6), 2 * Math.round(maxNum / 6), 3 * Math.round(maxNum / 6), 4 * Math.round(maxNum / 6), 5 * Math.round(maxNum / 6), maxNum],
            colorRange = ["#A6FF8F", "#B3FF86", "#C3FF7D", "#D6FF74", "#EBFF6B", "#FFF962", "#FFDD5A", "#FFBE51", "#FF9D48", "#FF783F", "#FF5136", "#FF2E35"];
        
        var color = d3.scale.quantile()
            .domain(domainScale)
            .range(colorRange);

        grid = d3.selectAll(".grid")
            .append("svg")
            .attr("width", width)
            .attr("height", height)
            .attr("class", "grid");

        squares = grid.selectAll(".square")
            .data(data)
            .enter().append("svg:rect")
            .attr("class", "square")
            .attr("x", function(d){ return d.x; })
            .attr("y", function(d){ return d.y; })
            .attr("width", function(d){ return d.width })
            .attr("height", function(d){ return d.height })
            .attr("fill", function(d){ return color(d.entries); });

        text = grid.selectAll(".label")
            .data(data)
            .enter().append("svg:text")
            .attr("x", function (d) {
                return d.x + d.width / 2;
            })
            .attr("y", function (d) {
                return d.y + d.height / 2;
            })
            .attr("text-anchor", "middle")
            .attr("dy", ".35em")
            .text(function (d) {
                return d.entries;
            });


        //build side labels for the y axis
        var yValues = data.map(function(v, i, a) {
            return v.y;
        });

        yValues = yValues.reduce(function (prev, cur, i, a) {
            if (prev.indexOf(cur) < 0) {
                prev.push(cur);
            }
            return prev;
        }, []);

        yValues.sort(function(a, b){
            return a - b;
        });

        var yLabels = grid.selectAll(".yLabels");

        yLabels.data(yValues)
            .enter()
            .append("text")
            .attr("class", "yLabels")
            .attr("x", 100)
            .attr("y", function(d){ return d + (gridDim/2); })
            .text(function(d, i, a) { return 4 - i; })
            .attr("alignment-baseline", "middle");

        // build Y labels
        grid.append("text")
            .attr("x", 50)
            .attr("y", (d3.min(yValues) + d3.max(yValues) + gridDim)/2)
            .style("text-anchor", "right")
            .text("Arousal");

        var xValues = data.map(function(v, i, a) {
            return v.x;
        });

        xValues = xValues.reduce(function (prev, cur, i, a) {
            if (prev.indexOf(cur) < 0) {
                prev.push(cur);
            }
            return prev;
        }, []);

        var xLabels = grid.selectAll(".xLabels");

        xLabels.data(xValues)
            .enter()
            .append("text")
            .attr("class", "xLabels")
            .attr("x", function(d){ return d + (gridDim/2); })
            .attr("y", 285)
            .text(function(d, i, a) { return i + 1; })
            .attr("alignment-baseline", "middle")
            .attr("text-anchor", "center");

        grid.append("text")
            .attr("x", (d3.max(xValues) + d3.min(xValues))/2)
            .attr("y", 310)
            .attr("alignment-baseline", "middle")
            .text("Valence");

    }

    

    function updateGrid(){
        // regenerate new data based on the current startDate/ endDate values
        var data = generateData();

        // recalculate color range
        var maxNum = d3.max(data.map(function(v, i, a) { return v.entries; })),
            domainScale = [0, Math.round(maxNum / 6), 2 * Math.round(maxNum / 6), 3 * Math.round(maxNum / 6), 4 * Math.round(maxNum / 6), 5 * Math.round(maxNum / 6), maxNum],
            colorRange = ["#A6FF8F", "#B3FF86", "#C3FF7D", "#D6FF74", "#EBFF6B", "#FFF962", "#FFDD5A", "#FFBE51", "#FF9D48", "#FF783F", "#FF5136", "#FF2E35"];

        var color = d3.scale.quantile()
            .domain(domainScale)
            .range(colorRange);

        // update data
        squares.data(data);

        squares.transition()
            .duration(400)
            .attr("fill", function(d){ return color(d.entries);});

        text.data(data)
            .transition()
            .duration(400)
            .text(function(d) { return d.entries; });
    }
});

// generates a new grid using the current startDate/ endDate values
function generateData(){

    var grid = [];
    var startX = 118;
    var startY = 30;

    for (var m = 0; m < 4; m++) {
        grid.push([]);
        for (var n = 0; n < 4; n++) {
            grid[m].push({
                height: gridDim,
                width: gridDim,
                arousal: m + 1,
                valence: n + 1,
                entries: 0,
                x: (m * gridDim) + startX,
                y: ((3 - n) * gridDim) + startY
            });
        }
    }

    csvData.forEach(function (v,i,a) {
        if ((v.time > startDate) && (v.time < endDate)){
            // if (d3.time.format("%I:%M %p")(startTime) < d3.time.format("%I:%M %p")(v.time)){
                if (daysOfWeek.length==0 || arrayContains(dayNameFormat(v.time), daysOfWeek)){
                    if (startTime < v.time.getHours() && endTime > v.time.getHours()){
                        if (!(Number.isNaN(v.valence)) && !(Number.isNaN(v.arousal))) {
                            grid[v.arousal - 1][v.valence - 1].entries += 1;
                        }
                    }
                }
            // }
        }
    });

    return grid.reduce(function (a, b){
        return a.concat(b);
    });
}

function arrayContains(needle, haystack)
{
    return (haystack.indexOf(needle) > -1);
}

