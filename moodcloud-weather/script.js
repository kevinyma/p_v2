var filename = "mood-cloud-log.csv";

// moved these variables into the global scope so that both buildGrid
// and updateGrid have access to these objects.

var dayNameFormat = d3.time.format("%A");

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
    var minuteSlider = $("#slider2");


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

    minuteSlider.rangeSlider({
        bounds: {
            min: 0, 
            max: 1440
        },

        defaultValues: {
            min: 0,
            max: 1440
        },
        // convert minutes to time in the string format: MM:HH AM
        formatter:function(val){
            return minutesToTime(val);
        }
        });
    // binding to valuesChanging instead of valuesChanged so that updates occur almost instantaneously
    daySlider.on("valuesChanging", function (e, data) {
        startDate = data.values.min;
        endDate = data.values.max;
        updateGrid();
    });

    minuteSlider.on("valuesChanging", function (e, data) {
        startTime = data.values.min;
        endTime = data.values.max;
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
    var counter = 0;

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
    //for each individual date, output
   

    csvData.forEach(function (v,i,a) {
        if ((v.time > startDate) && (v.time < endDate)){
                if (daysOfWeek.length==0 || arrayContains(dayNameFormat(v.time), daysOfWeek)){
                    if (startTime < (v.time.getHours()*60 + v.time.getMinutes()) && (v.time.getHours()*60 + v.time.getMinutes()) < endTime){
                        if (!(Number.isNaN(v.valence)) && !(Number.isNaN(v.arousal))) {
                            grid[v.arousal - 1][v.valence - 1].entries += 1;
                            counter++; 

                        }
                    }
                }
        }
    });
    document.getElementById("total").innerHTML = counter;
    document.getElementById("percent").innerHTML = (counter/28242 *100).toFixed(0) + "%";

    return grid.reduce(function (a, b){
        return a.concat(b);
    });
}

function arrayContains(needle, haystack)
{
    return (haystack.indexOf(needle) > -1);
}

function minutesToTime(val){
            var period = "";
            var minutes = parseInt(val%60, 10);
            var hours = parseInt(val/60, 10);
            if (hours<10) {
                hours = "0"+hours;
            }
            if (minutes<10) {
                minutes = "0"+minutes;
            }
            if (hours < 12) {
                period = "AM";
                }
            else if (hours == 24){
                period = "AM";
                hours = hours-12;
                }
            else {
                period = "PM";
                hours = hours-12;
                }
            if (hours=="00"){
                hours = "12";
            }
            var time = hours + ":" +minutes + " " + period;
            return time;
}

function compareTimes(input1, input2){
    var input2minutes = input2.time.getHour() * 60 + input2.time.getMinute;
    if (input1 < input2minutes) {
        return "earlier";
    }else {
        return "later";
    }
}

