let video;

function setup() {
  createCanvas(400, 300);
  video = createVideo("video.mp4")
  video.size(400,300);
  video.loop();
  video.hide();
}

function draw() {
  video.loadPixels();
  for(let i=0; i < video.pixels.length; i += 4){
    video.pixels[i] = 255 - video.pixels[i];
    video.pixels[i+1] = 100 - video.pixels[i+1];
    video.pixels[i+2] = 255 - video.pixels[i+2];
}
  video.updatePixels();
  image(video,0,0,width,height);
}