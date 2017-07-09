color[][] data, newData;
int size = 5;
color[] neighbors = new color[8];

void setup() {
  noStroke();
  size(500, 500);
  frameRate(18);
  //background(255,255,255,190);
  data = new color[width/size][height/size];
  newData = new color[width/size][height/size];
  //first fill with white
  for (int i = 0; i < height/size; i++){
   for (int j = 0; j < width/size; j++){
     data[i][j] = color(255,255,255,90);
   }
  }
  //randomly generate colored dots
  float density = 0.15 * width/size * height/size; 
    for (int i = 0; i < density; i++) {
     data[int(random(width/size))][int(random(height/size))] = 
     //color(255,0,0);
     color(int(random(190,255)),int(random(0,200)),int(random(140,255)));
   }
}
void draw() {
  for (int i = 0; i < height/size; i++){
   for (int j = 0; j < width/size; j++){
     color[] neighbors = neighbors(i, j); //<>//
     newData[i][j] = neighbors[int(random(neighbors.length))];
   }
  }
  data = newData;
    drawPixels();
  
  //if (millis()/1000.0 > 3){
  //  noLoop();
  //}
}

color[] neighbors(int y, int x) {
  int north = (y - 1 + (height/size)) % (height/size); 
  int south = (y + 1 + (height/size)) % (height/size);
  int east = (x + 1 + (width/size)) % (width/size);
  int west = (x - 1 + (width/size)) % (width/size);
  neighbors[0] = data[north][x]; //north
  neighbors[1] = data[north][east];
  neighbors[2] = data[y][east]; //east
  neighbors[3] = data[south][east];
  neighbors[4] = data[south][x]; //south
  neighbors[5] = data[south][west];
  neighbors[6] = data[y][west]; //west
  neighbors[7] = data[north][west];
  return neighbors;
}

float avgRed(color[] colorArray){
  float redAvg = 0;
  for (int i=0; i<colorArray.length; i++){
    //look up bit shifting
    redAvg += colorArray[i] >> 16 & 0xFF;
  }
  redAvg /= colorArray.length;
  return redAvg;
}


//draws rectangles based on data
void drawPixels(){
  for (int i = 1; i < data.length-1; i++){
    for (int j = 1; j < data[0].length-1; j++){
      if (data[i][j] == color(0,0,0)) {
          data[i][j]  = color (255,255,255);
        }
      fill(data[i][j]);
      rect(j*size, i*size, size, size);
    }
  } 
  
}