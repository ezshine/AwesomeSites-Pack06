class l{constructor(e,i,t){this.baseWidth=e,this.baseHeight=i,this.bodyElement=t,this.resizeHandler(),window.addEventListener("resize",this.resizeHandler.bind(this))}resizeHandler(){let e=window.innerWidth/this.baseWidth,i=window.innerHeight/this.baseHeight,t=Math.min(e,i);if(t=Math.min(t*.85,1.3),t>1){let s=1/t*100;this.bodyElement.style.width=this.bodyElement.style.height=s+"%",this.bodyElement.style.transform=`scale(${t})`}else this.bodyElement.style.width=this.bodyElement.style.height="100%",this.bodyElement.style.transform="scale(1)"}}export{l as B};