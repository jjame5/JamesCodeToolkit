/*
 * @name Load and Display Image
 * @description Images can be loaded and displayed to the screen at their
 * actual size or any other size.
 * <p><em><span class="small"> To run this example locally, you will need an 
 * image file, and a running <a href="https://github.com/processing/p5.js/wiki/Local-server">
 * local server</a>.</span></em></p>

 */
// Declare variable 'img'.

function setup() {
  createCanvas(720, 400);
  let img = loadImage('data/moonwalk.jpg'); // Load the image
   image(img, 0, 0);
  // Displays the image at point (0, height/2) at half size
  image(img, 0, height / 2, img.width / 2, img.height / 2);
}

function draw() {
  // Displays the image at its actual size at point (0,0)
 
}
