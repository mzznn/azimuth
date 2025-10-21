const c=document.getElementById('c'),ctx=c.getContext('2d',{alpha:false});
let w,h,mx=0,my=0,tx=0,ty=0,t=0,hue=0,targetHue=0;

function resize(){
  w=c.width=innerWidth;
  h=c.height=innerHeight;
  tx=w/2;
  ty=h/2;
}

addEventListener('resize',resize);
addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY});
addEventListener('click',()=>targetHue=Math.random()*160);

resize();

function draw(){
  tx+=(mx-tx)*0.05;
  ty+=(my-ty)*0.05;
  hue+=(targetHue-hue)*0.03;
  t+=0.01;
  
  const g=ctx.createRadialGradient(tx,ty,0,tx,ty,Math.max(w,h));
  g.addColorStop(0,`hsl(${(hue+t*20)%360},90%,70%)`);
  g.addColorStop(0.5,`hsl(${(hue+t*20+120)%360},70%,100%)`);
  g.addColorStop(1,`hsl(${(hue+t*20+240)%360},70%,90%)`);
  
  ctx.fillStyle=g;
  ctx.fillRect(0,0,w,h);
  
  requestAnimationFrame(draw);
}

draw();