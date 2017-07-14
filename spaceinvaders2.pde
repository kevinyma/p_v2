String direction = "down";
color nightBg = color(100,80,130);
int pixel = 15;
void setup(){
  size(595,450);
  background(255);
  noStroke();
  frameRate(2);
  int invaderSize = 105;
  int padding = 35;
  
  for (int j = 0; j< 3; j++){
    for (int i = 0; i< 4; i++){
      color black = 0;
      color randomColor = color(int(random(190,245)),int(random(150,190)),int(random(160,245)));
      color brightRandomColor = color(int(random(80,200)),int(random(70,200)),int(random(130,200)));
      Invader invader = new Invader(black, i*(invaderSize+padding)+padding, j*(invaderSize+padding)+padding, invaderSize, pixel);
      invader.display();
    }
  }
}

void draw(){
  //if (direction=="down"){
  //pixel--;
  //} else{
  //pixel++;
  //}
  //setup();
  //if(pixel == 1){
  //  direction="up";
  //} if (pixel == 16){
  //  direction="down";
  //}
}

void mouseClicked() {
  setup();
}

class Invader {
  float xPos;
  float yPos;
  color c;
  int invaderSize;
  int pixel;
  boolean[][] data;
  
  Invader(color _c, float _x, float _y, int _invaderSize, int _pixel) {
    c = _c;
    xPos = _x;
    yPos = _y;
    invaderSize = _invaderSize;
    pixel = _pixel;
    data = new boolean[pixel][pixel];
    for (int j= 0; j<pixel; j++){
      for (int i= 0; i<round((float)pixel/2); i++){
        boolean dataEntry = (random(1)>0.5)?true:false;
        data[j][i] = dataEntry;
        data[j][pixel - 1 - i] = dataEntry;
      }
    }
  }
  void display() {
    for (int j= 0; j<pixel; j++){
      for (int i= 0; i<pixel; i++){
        if ( data[j][i]==true){
          fill(c);
          rect(xPos+i*invaderSize/pixel, yPos+j*invaderSize/pixel, invaderSize/pixel, invaderSize/pixel);
        }   
      }
    }
  }
}