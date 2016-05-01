





var data = [
[{"arousal":4,"entries":2,"valence":1},
{"arousal":4,"entries":5,"valence":2},
{"arousal":4,"entries":100,"valence":3},
{"arousal":4,"entries":47,"valence":4},

],
[{"arousal":3,"entries":10,"valence":1},
{"arousal":3,"entries":5, "valence":2},
{"arousal":3,"entries":3, "valence":3},
{"arousal":3,"entries":30, "valence":4},
],

[{"arousal":2,"entries":5,"valence":1},
{"arousal":2,"entries":82,"valence":2},
{"arousal":2,"entries":64,"valence":3},
{"arousal":2,"entries":23,"valence":4},
],

[{"arousal":1,"entries":20,"valence":1},
{"arousal":1,"entries":12,"valence":2},
{"arousal":1,"entries":71,"valence":3},
{"arousal":1,"entries":99,"valence":4},
]
];


/**
 *   buildGrid    Setup a grid:
 *   Rows = # of nested arrays, Columns = # of items in each nested array 
 *   @param id           div id tag starting with #
 *   @param width        width of the grid in pixels
 *   @param height       height of the grid in pixels
 *   @param square       true/false if you want the height to
 *                           match the (calculated first) width
 */
function buildGrid(id, width, height, square, dims, pData) {
    //format the data
    var _data = buildData(width, height, square, dims, pData);
    //console.log(_data);
    //"#E42217", --save red for just the zero-centile column
    //"#FFFFFF",
    
    //var sortedData = sortArray3(_data);

    var maxNum = d3.max(sortArray(_data), function (d, i) {
                        return d[0].patients;
                    }),
        domainScale = [0, 1, Math.round(maxNum/5), Math.round(maxNum/4), Math.round(maxNum/3), Math.round(maxNum/2),  maxNum],
      //  colorRange = ["#FFFFFF", "#E1F2CF", "#C2E49D", "#94D057","#73b040", "#446621"];
//colorRange = ["#FF2E35", "#FF5136", "#FF783F", "#FF9D48", "#FFBE51", "#FFDD5A", "#FFF962", "#EBFF6B", "#D6FF74", "#C3FF7D", "#B3FF86", "#A6FF8F"];
colorRange = ["#A6FF8F", "#B3FF86", "#C3FF7D", "#D6FF74", "#EBFF6B", "#FFF962", "#FFDD5A", "#FFBE51", "#FF9D48", "#FF783F", "#FF5136", "#FF2E35"];
        

//colorRange = ["#ACFF79", "#86FF77", "#75FF8D", "#73FFB1", "#71FFD7", "#70FFFE", "#6DD7FF", "#6CAEFF", "#6983FF", "#7768FF", "#9F66FF"];







    //  "#659730",
    var color = d3.scale.quantile() //color definitions for the number "gravity"
    .domain(domainScale)
        .range(colorRange);

     var tip = d3.tip()
                .attr('class', 'd3-tip')
                .html(function (d) { return "<span style=\"bg-color:red;font-size:12px; color:white; opacity:.8;\">" + d + " entries</span>"; });
    

    var grid = d3.select(id).append("svg")
        .attr("width", width)
        .attr("height", height)
        .attr("class", "grid")
        .call(tip);

    var row = grid.selectAll(".row")
        .data(_data)
        .enter().append("svg:g")

        .attr("class", "row");

    var col = row.selectAll(".cell")
        .data(function (d) {
        return d ;
    })
        .enter().append("svg:rect")
        .attr("class", "cell")
        .attr("x", function (d) {
        return d.x;
    })
        .attr("y", function (d) {
        return d.y;
    })
        .attr("width", function (d) {
        return d.width;
    })
        .attr("height", function (d) {
        return d.height;
    })
         .on('mouseover', function (d) {
        d3.select(this)
            .style('stroke', 'rgb(255,0,0)')
            .style('stroke-width', '5px')
            .style('border', '1px solid #FFFFFF')
            .style('padding', '2px');
         tip.show(d.patients);
      })
         .on('mouseout', function (d) {
         d3.select(this)
             .style('stroke', '#555')
             .style('stroke-width', '1px')
             .style('border', '1px solid #DDDDDD')
             .style('padding', '1px');
         tip.hide(d.patients);
     })
    .on('click', function () {
        console.log(d3.select(this));
    })
        .style("fill", function (d) {
        return color(d.patients);
    })
        .style("stroke", '#555');
    
    
    var text = row.selectAll(".label")
        .data(function (d) {
        return d;
    })
        .enter().append("svg:text")
        .transition()
        .duration(3500)
        .delay(500)
        .attr("x", function (d) {
        return d.x + d.width / 2;
    })
        .attr("y", function (d) {
        return d.y + d.height / 2;
    })
        .attr("text-anchor", "middle")
        .attr("dy", ".35em")
        .text(function (d) {
        return d.patients;
    });
    
    
    
    /////Legend definition


        var legendBoxDim = 18;
        var legendDim = [655, d3.max(_data, function (d, i) { return d[i].y; }) / 4];
        //console.log("Legend dimensions", legendDim);
        var legend = grid.append('g')
        .attr('class', 'legend')
        .attr('transform', 'rotate(90, 740, 175)'); // 

        //translate(' + (width-10) + ', -3)
        legend.selectAll("rect")
          .data(color.range().map(function (shade) {
              var d = color.invertExtent(shade);
              return d;
    }))
          .enter().append("rect")
            .transition()
            .duration(2500)
            .delay(500)
            .attr("height", legendBoxDim*2)//width of colored legend box
            .attr("x", function (d) {
                legendDim[0] += legendBoxDim;
                return legendDim[0];
            })
            .attr("y", (height/2))
            .attr("width", legendBoxDim)
        .style("fill", function (d) { return d < 0 ? "#E42217" : color(d[0]); });

        var xStart = 421,
            yStart = -257;

        legend.selectAll("text")
            .data(color.domain().map(function (v, i) {
                var d = {};
                d.value = color.domain()[i];
                d.x = xStart;
                d.y = yStart;
               // console.log("color invert", v);
                xStart += legendBoxDim / 2 ;
                yStart -= legendBoxDim / 2;
                return d;
    }))
            .enter()
            .append("text")
            .attr("class", "caption")
        //.attr("y", y.range()[1]) translate(' + d.position + ' ,-3) 
        .attr('transform', function (d) {
            return 'rotate(-90, ' + d.x + ', ' + d.y + ')';
    })
        .text(function (d) {
            return d.value < 0 ? "<0" : d.value;
    });


        // top label for the y axis
    grid.append("text")
    .attr("x", 0)
    .attr("y", 20)
    .style("text-anchor", "left")
    .text("Arousal");

        //build side labels for the y axis
    var nextStartY = dims[0] + 5; //20 + 15 + Math.round(dims[0]/2)
    for (var obj in _data) {

        grid.append("text")
            .attr("x", 20)
            .attr("y", (nextStartY + ((nextStartY - 5) * obj)))
            .style("text-anchor", "left")
            .text(_data[obj][0].suites);

    }

        // build label for the x axis
        // use the length of the first nested array to determine how many (aka range)
    var nextStartX = dims[0]-5,
        nextStartY = height - 2;
    for (var i = 1; i < (_data[0].length + 1); i++) {
        grid.append("text")
            .attr("x", function(){
                var ret = nextStartX+30;
                nextStartX += 59; //(i === 0 ? (ret + 55) : (ret + 60));
                return ret;})
            .attr("y", nextStartY-30)
            .style("text-anchor", "bottom")
        .text((i>0?(i ):i)); //special req to account for "less than 10%"

    }

    grid.append("text")
    .attr("x", nextStartX +=20)
    .attr("y", nextStartY -= 30)
    .style("text-anchor", "left")
    .text("Valence");
   /* }*/
    

}
        //////////////////////////////////////////////////////////////////////// 

function buildData(gridWidth, gridHeight, square, dims, ds) {
    var _data = [];
    var gridItemWidth = dims[0];
    var gridItemHeight = (square) ? gridItemWidth : dims[1];
    var startX = gridItemWidth;// / 2;
    var startY = gridItemHeight / 2;
    var stepX = gridItemWidth;
    var stepY = gridItemHeight;
    var xpos = startX;
    var ypos = startY;
    var newValue = 0;
    var prctg = 0;
    var arousal = 0;
        
    
    //parent array
    for (var index_a = 0; index_a < ds.length; index_a++) {
        _data.push([]);
        //nested array
        for (var index_b = 0; index_b < ds[index_a].length; index_b++) {
            
            arousal = ds[index_a][index_b].arousal;
            newValue = ds[index_a][index_b].entries;
            prctg = ds[index_a][index_b].valence;
            
            
            _data[index_a].push({
                suites: arousal,
                patients: newValue,
                width: gridItemWidth,
                height: gridItemHeight,
                x: xpos,
                y: ypos,
                percentage: prctg
            });
            xpos += stepX;
        }
        xpos = startX;
        ypos += stepY;
        
    }

    return _data;
}

            //Sorting via the array container
                 function sortArray(arry) {
                     var retArry = []
                     for (var obj in arry) {

                         retArry.push(arry[obj].sort(function (a, b) { return sortArray2(a, b); }));
                     }
                     return retArry.filter(function (d) {
                         return d[0];
                     });
                 }
                 //sort the nested array, decending on patients to find highest number
                 function sortArray2(a, b) {
                     return d3.descending(a.patients, b.patients);
                 }

buildGrid('.grid', 770, 340,  true, [59], data);