var A=Object.defineProperty;var G=(i,t,e)=>t in i?A(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var s=(i,t,e)=>(G(i,typeof t!="symbol"?t+"":t,e),e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const p of a.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&n(p)}).observe(document,{childList:!0,subtree:!0});function e(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(o){if(o.ep)return;o.ep=!0;const a=e(o);fetch(o.href,a)}})();const O="/LF-SE-TS-CAR-GAME/assets/carsSprite-CD-xaeLd.png",R=new Image;R.src=O;const d={rootDiv:document.getElementById("game-container"),inGame:!1,carsSprite:R};d.rootDiv&&(d.rootDiv.style.height="100vh",d.rootDiv.style.width="100%");class g{constructor(t,e){s(this,"x");s(this,"y");this.x=t,this.y=e}}class L{constructor(t,e){s(this,"startingPoint");s(this,"endingPoint");this.startingPoint=t,this.endingPoint=e}draw(t){t.beginPath(),t.moveTo(this.startingPoint.x,this.startingPoint.y),t.lineTo(this.endingPoint.x,this.endingPoint.y),t.stroke(),t.closePath()}}const D=.9*window.innerHeight;let I;window.innerWidth>760?I=.3*window.innerWidth:I=window.innerWidth;const W=3,N=10,x=I/W,$=new g(x*1,0),F=new g(x*1,D),_=new g(x*2,0),q=new g(x*2,D),h={windowHeight:D,windowWidth:I,line:[new L($,F),new L(_,q)],widthDifference:x,movingInterval:null,offset:N},V=.4*h.widthDifference,P=200,C=.3*h.widthDifference,l={position:new g(h.widthDifference*1+C,h.windowHeight-P-C),width:V,height:P,positionIndex:1,offset:C,movingInterval:null,playerScore:0,bulletsRemaining:5,bankBalance:0},z={truck:{height:300,speed:8},car:{height:200,speed:8}},K=.4*h.widthDifference,u={position:new g(0,0),width:K,vtyp:z},y={police:{x:382,y:30,width:56,height:159},van:{x:60,y:30,width:67,height:160}};class X{constructor(t,e,n,o,a){s(this,"position");s(this,"width");s(this,"height");s(this,"speed");s(this,"positionIndex");this.position=t,this.width=e,this.height=n,this.speed=o,this.positionIndex=a}draw(t){this.width=y.van.width,this.height=y.van.height,t.drawImage(d.carsSprite,y.van.x,y.van.y,this.width,this.height,this.position.x,this.position.y,this.width,this.height)}move(){this.position.y+=this.speed}update(){this.move()}}function b(i,t){const e=Math.ceil(i),n=Math.floor(t);return Math.floor(Math.random()*(n-e+1)+e)}const Y="/LF-SE-TS-CAR-GAME/assets/coins-removebg-preview-C9kY_nwS.png",T=new Image;T.src=Y;const c={coinsImage:T,x:6,y:11,width:48,height:48,spriteNumbers:6};class J{constructor(t,e,n,o,a,p){s(this,"position");s(this,"width");s(this,"height");s(this,"speed");s(this,"positionIndex");s(this,"animationIndex");this.position=t,this.width=e,this.height=n,this.speed=o,this.positionIndex=a,this.animationIndex=p}draw(t){this.width=c.width,this.height=c.height,t.drawImage(c.coinsImage,c.x+c.width,c.y,this.width,this.height,this.position.x,this.position.y,this.width,this.height)}move(){this.position.y+=this.speed}update(){this.move()}hide(){this.position.y=h.windowHeight}}class Q{constructor(t,e,n,o){s(this,"width");s(this,"height");s(this,"x");s(this,"y");this.x=t,this.y=e,this.width=n,this.height=o}draw(t){t.strokeRect(this.x,this.y,this.width,this.height)}}function U(i){const t=document.createElement("div");t.style.width=`${window.innerWidth*.2}px`,t.style.height=`${window.innerWidth*.2}px`,t.style.position="absolute",t.style.top="50%",t.style.left="50%",t.style.transform="translate(-50%,-50%)",t.style.textAlign="center",t.style.backgroundColor="#eee",t.style.boxShadow="0 .2rem 1.2rem .2rem rgba(20,20,20,0.3)",t.style.borderRadius="5px";const e=document.createElement("h1");e.innerHTML="GAME OVER";const n=document.createElement("h1");n.innerHTML=`Score:${i}`;const o=document.createElement("button");o.value="Go Home",o.innerHTML="Go Home",o.className="go-home-btn",o.addEventListener("click",()=>{B()}),t.appendChild(e),t.appendChild(n),t.appendChild(o),d.rootDiv&&(d.rootDiv.appendChild(t),j())}class Z{constructor(t,e,n,o=1){s(this,"position");s(this,"width");s(this,"height");s(this,"body");s(this,"positionIndex");s(this,"score");s(this,"bulletsRemaining");s(this,"bankBalance");this.position=t,this.width=e,this.height=n,this.body=new Q(this.position.x,this.position.y,this.width,this.height),this.positionIndex=o,this.score=0,this.bulletsRemaining=l.bulletsRemaining,this.bankBalance=l.bankBalance}draw(t){this.width=y.police.width,this.height=y.police.height,t.drawImage(d.carsSprite,y.police.x,y.police.y,this.width,this.height,this.position.x,this.position.y,this.width,this.height)}move(t,e,n){const o=this.position.x;let a;t?this.positionIndex>0&&this.positionIndex--:this.positionIndex<2&&this.positionIndex++;const p=e*this.positionIndex+n;p>o?a=1:a=-1,h.movingInterval=setInterval(()=>{this.position.x+=a,this.update(),this.position.x*a>p*a&&clearInterval(h.movingInterval)},2)}update(){this.body.x=this.position.x}checkCollision(t,e){t.forEach(n=>{document.body.style.backgroundColor="white",n.position.y+n.height>=this.position.y&&n.position.y<=this.position.y+this.height&&n.position.x+n.width>=this.position.x&&n.position.x+n.width<=this.position.x+n.width+this.width&&(d.inGame=!1,document.body.style.backgroundColor="red",U(this.score))}),e.forEach(n=>{n.position.y+n.height>=this.position.y&&n.position.x+n.width>=this.position.x&&n.position.x+n.width<=this.position.x+n.width+this.width&&(n.hide(),this.bankBalance+=10)})}}function j(){r.positionIndex=l.positionIndex,r.score=l.playerScore,r.bulletsRemaining=l.bulletsRemaining}const r=new Z(l.position,l.width,l.height);class tt{constructor(t,e,n,o,a,p){s(this,"position");s(this,"width");s(this,"height");s(this,"speed");s(this,"positionIndex");s(this,"animationIndex");this.position=t,this.width=e,this.height=n,this.speed=o,this.positionIndex=a,this.animationIndex=p}draw(t){this.width=c.width,this.height=c.height,t.drawImage(c.coinsImage,c.x+c.width,c.y,this.width,this.height,this.position.x,this.position.y,this.width/2,this.height/2)}move(){this.position.y-=this.speed}update(){this.move()}hide(){this.position.y=h.windowHeight}checkCollision(t){t.forEach(e=>{document.body.style.backgroundColor="white",e.position.y+e.height>=this.position.y&&e.position.y<=this.position.y+this.height&&e.position.x+e.width>=this.position.x&&e.position.x+e.width<=this.position.x+e.width+this.width&&(e.position.y=h.windowHeight)})}}const f=document.createElement("canvas"),E=document.createElement("h1");E.style.backgroundColor="wheat";const M=document.createElement("h1");M.style.backgroundColor="wheat";const H=document.createElement("h1");H.style.backgroundColor="wheat";function it(){d.rootDiv&&(d.rootDiv.innerHTML="",d.rootDiv.appendChild(E),d.rootDiv.appendChild(M),d.rootDiv.appendChild(H),d.rootDiv.appendChild(f))}const m=f.getContext("2d");let w=[],v=[],k=[];function et(){let i;i=b(0,2);for(let n=0;n<10&&(i=b(0,2),w.filter(o=>o.positionIndex===i).length!==0);n++);const t="truck";r.score>10&&(u.vtyp[t].speed+=Math.exp(-r.score/10)*3);const e=new X(new g(i*h.widthDifference+l.offset,-u.vtyp[t].height),u.width,u.vtyp[t].height,u.vtyp[t].speed,i);w.push(e)}function nt(){let i;i=b(0,2);for(let e=0;e<10&&(i=b(0,2),w.filter(n=>n.positionIndex===i).length!==0);e++);const t=new J(new g(i*h.widthDifference+l.offset,-c.height),c.width,c.height,u.vtyp.truck.speed,i,0);v.push(t)}setInterval(()=>{w.length<3&&et(),v.length<5&&nt(),w=w.filter(i=>i.position.y<h.windowHeight?!0:(r.score++,!1)),v=v.filter(i=>i.position.y<h.windowHeight?!0:(r.score++,!1)),k=k.filter(i=>i.position.y<0)},u.vtyp.truck.speed*76);function S(){m.clearRect(0,0,h.windowWidth,h.windowHeight),h.line.forEach(i=>{i.draw(m)}),w.forEach(i=>{i.update(),i.draw(m)}),v.forEach(i=>{i.update(),i.draw(m)}),k.forEach(i=>{i.update(),i.draw(m),i.checkCollision(w)}),r.update(),r.draw(m),r.checkCollision(w,v),E.innerHTML=`score: ${r.score}`,M.innerHTML=`BulletsRemaining: ${r.bulletsRemaining}`,H.innerHTML=`Bank Balance: ${r.bankBalance}`,d.inGame?requestAnimationFrame(S):(w=[],v=[])}function ot(){d.rootDiv&&(d.rootDiv.innerHTML=""),it(),d.inGame=!0;const i=h.windowWidth,t=h.windowHeight;f.width=i,f.height=t,f.style.display="block",f.style.margin="0 auto",f.style.backgroundColor="rgba(125,125,125,0.9)",f.addEventListener("click",e=>{e.offsetX<h.windowWidth/2?(clearInterval(h.movingInterval),r.move(!0,h.widthDifference,l.offset)):(clearInterval(h.movingInterval),r.move(!1,h.widthDifference,l.offset))}),window.addEventListener("keypress",e=>{if(d.inGame)switch(e.key){case"a":clearInterval(h.movingInterval),r.move(!0,h.widthDifference,l.offset);break;case"d":clearInterval(h.movingInterval),r.move(!1,h.widthDifference,l.offset);break;case"w":if(r.bulletsRemaining>0){r.bulletsRemaining--;const n=new tt(new g(r.position.x,r.position.y+Math.floor(r.width/2)),c.width,c.height,u.vtyp.truck.speed,r.positionIndex,0);k.push(n)}break;case"r":r.bankBalance>100&&(r.bulletsRemaining++,r.bankBalance-=100);break}}),r.body.draw(m);for(let e=0;e<h.line.length;e++)h.line[e].draw(m);S()}function B(){if(d.rootDiv){d.rootDiv.innerHTML="";const i=document.createElement("div");i.style.display="flex",i.style.height="100vh",i.style.width="100%",i.style.justifyContent="center",i.style.alignItems="center",i.style.position="relative",i.className="home-page";const t=document.createElement("button");t.style.position="absolute",t.style.top="50%",t.style.left="50%",t.style.transform="translate(-50%,-50%)",t.value="Start Game",t.innerHTML="Start Game",t.className="start-btn",t.addEventListener("click",()=>{ot(),d.inGame=!0});const e=document.createElement("p");e.innerHTML=`Press'w' or click of left &nbsp 
                                side to move left And`,i.appendChild(t),d.rootDiv.appendChild(i)}}B();
