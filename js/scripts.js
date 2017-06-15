//scripts

const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.strokeStyle = '#BADA55';
ctx.lineJoin = 'square';
ctx.lineCap = 'round';
ctx.shadowBlur=10;
ctx.shadowColor="gold";
ctx.lineWidth = 100;
ctx.globalCompositeOperation = '';
let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;

function draw(e) {
  if (!isDrawing) return; // stop the fn from running when they are not moused down
  console.log(e);
  ctx.strokeStyle = `hsl(${hue}, 0%, 50%)`;
  ctx.beginPath();
  // start from
  ctx.moveTo(lastX, lastY);
  // go to
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  [lastX, lastY] = [e.offsetX, e.offsetY];

  hue++;
  if (hue >= 360) {
    hue = 0;
  }
  if (ctx.lineWidth >= 100 || ctx.lineWidth <= 50) {
    direction = !direction;
  }

  if(direction) {
    ctx.lineWidth++;
  } else {
    ctx.lineWidth--;
  }

}

canvas.addEventListener('mousedown', (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
});
    
    
// Store the current transformation matrix
ctx.save();

// Use the identity matrix while clearing the canvas
ctx.setTransform(1, 0, 0, 1, 0, 0);
ctx.clearRect(0, 0, canvas.width, canvas.height);

// Restore the transform
ctx.restore();    
    
    
canvas.addEventListener('dblclick', (e) => {
    isDrawing = false;
    ctx.clearRect(0,0,canvas.width,canvas.height);
});
    

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);

 
// lineCap change options
  var eleCap = document.getElementById('lineCap'),
      index = eleCap.selectedIndex,
      lineCap = eleCap.options[index].value;

  eleCap.addEventListener('change',function(){
    ctx.lineCap = eleCap.options[eleCap.selectedIndex].value;
//    ctx.clearRect(0, 0, 600, 300);
//    drawScreen();
  });
  
    console.log('ctx.lineCap');
//
    
    
    
    
    
// Change Global Compostion
    
  var eleComp = document.getElementById('globalComp'),
      index = eleComp.selectedIndex,
      globalComp = eleCap.options[index].value;

  eleComp.addEventListener('change',function(){
    ctx.globalCompositeOperation = eleComp.options[eleComp.selectedIndex].value;
//        ctx.clearRect(0, 0, 600, 300);
//    drawScreen();
  });
    
    

$('#select')
.dropdown()
;