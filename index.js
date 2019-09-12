document.addEventListener('keypress',function() {
  var gmarray = [];
  var clickedarray = [];
  var topush = randcolor();
  gmarray.push(topush);
  var level = 1;

  $('.btn').click(function() {
    var pressed = this.id;
    console.log(pressed);
    makesound(pressed);
    addAnimation(pressed);
    clickedarray.push(pressed);
    anonymous();
  })


function anonymous() {
if(gmarray.length === clickedarray.length) {
  if(gmarray[clickedarray.length-1] == clickedarray[clickedarray.length-1]) {
    level++;
    document.getElementById('level-title').innerHTML = "level " + level;
    clickedarray =[];
    gmarray.push(randcolor());

  }
  else {
    //gameover
    gameover();

  }
}
else {
  if(gmarray[clickedarray.length-1] == clickedarray[clickedarray.length-1]) {
  }
  else {
    //gameover
    gameover();
  }
}
}

function gameover() {
  gmarray =[];
  clickedarray =[];
  var audio = new Audio('sounds/wrong.mp3');
  audio.play();
  $('body').addClass('game-over');
  setTimeout(function () {
    $('body').removeClass('game-over');
    document.getElementById('level-title').innerHTML = "Game-Over";
  }, 100);
}
  // gmarray.push(randcolor());

  function randcolor() {
    var randno = Math.ceil(Math.random() * 4);
    switch (randno) {
      case 1: makesound('green');
        addAnimation('green');
        return 'green';
        break;
      case 2:
      makesound('yellow');
        addAnimation('yellow');
        return 'yellow';
        break;
      case 3: makesound('blue');
        addAnimation('blue');
        return 'blue';
        break;
      case 4: makesound('red');
        addAnimation('red');
        return 'red';
        break;
    }
  }





  function makesound(key) {
    switch (key) {
      case 'green':
        var green = new Audio('sounds/green.mp3');
        green.play();
        break;
      case 'yellow':
        var yellow = new Audio('sounds/yellow.mp3');
        yellow.play();
        break;
      case 'blue':
        var blue = new Audio('sounds/blue.mp3');
        blue.play();
        break;
      case 'red':
        var red = new Audio('sounds/red.mp3');
        red.play();
        break;
      default:
        console.log("default switch error");
    }
  }

  function addAnimation(key) {
    $(`#${key}`).addClass('pressed');
    setTimeout(function() {
      $(`#${key}`).removeClass('pressed');
    }, 100);
  }
});
