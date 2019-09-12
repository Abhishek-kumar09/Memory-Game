  $('.btn').click(function() {
    var pressed = this.innerHTML;
    makesound(pressed);
  })

let makesound  = function(key) {
  switch(key) {
    case 'g': var green = new Audio('sounds/green.mp3');
              green.play();
      break;
    case 'y' : var yellow = new Audio('sounds/yellow.mp3');
              yellow.play();
              break;
    case 'b' : var blue = new Audio('sounds/blue.mp3');
              blue.play();
              break;
    case 'r' : var red = new Audio('sounds/red.mp3');
              red.play();
              break;
              default : console.log("default switch error");
  }
}
