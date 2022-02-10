var words = [
    "Welcome to ConclaveX",
    "Metaverse Loading...",
    "NITT the Pride of India",
  ],
  part,
  i = 0,
  offset = 0,
  len = words.length,
  forwards = true,
  skip_count = 0,
  skip_delay = 15,
  speed = 100;
var wordflick = function () {
  console.log("working");
  setInterval(function () {
    if (forwards) {
      if (offset >= words[i].length) {
        ++skip_count;
        if (skip_count == skip_delay) {
          forwards = false;
          skip_count = 0;
        }
      }
    } else {
      if (offset == 0) {
        forwards = true;
        i++;
        offset = 0;
        if (i >= len) {
          i = 0;
        }
      }
    }
    part = words[i].substr(0, offset);
    if (skip_count == 0) {
      if (forwards) {
        offset++;
      } else {
        offset--;
      }
    }
    document.querySelector(".word").innerHTML = part;
  }, speed);
};

// $(document).ready(function () {
//   wordflick();
// });

addEventListener("load", wordflick);

const runOnTime = function () {
  //get and store canvas & context
  let canvas = document.querySelector("canvas");
  let ctx = canvas.getContext("2d");
  let h = window.innerHeight;
  let w = window.innerWidth;
  //set dims to window
  canvas.height = h;
  canvas.width = w;
  // Generate snowflakes
  var mf = 225; // max flakes
  var flakes = [];
  // loop through the empty flakes
  for (var i = 0; i < mf; i++) {
    flakes.push({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 2 + 1, //min of 1px and max 5px
      d: Math.random() + 0.4, // density of flakes
    });
  }
  //draw flakes
  function drawFlakes() {
    ctx.clearRect(0, 0, w, h);
    ctx.fillStyle = "yellow";
    ctx.beginPath();
    for (var i = 0; i < mf; i++) {
      var f = flakes[i];
      ctx.moveTo(f.x, f.y);
      ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2, true);
    }
    ctx.fill();
    moveFlakes();
  }
  //animate the flakes
  var angle = 0;
  function moveFlakes() {
    angle += 0.01;
    for (var i = 0; i < mf; i++) {
      //store the current flake
      var f = flakes[i];
      //Upadte Y and X coordinate of each snow
      f.y += Math.pow(f.d, 2) + 1;
      f.x += Math.sin(angle) * 2;
      //if the snow reach to the bottom send it to the top again
      if (f.y > h) {
        flakes[i] = { x: Math.random() * w, y: 0, r: f.r, d: f.d };
      }
    }
  }
  setInterval(drawFlakes, 20);
};

addEventListener("load", runOnTime);
