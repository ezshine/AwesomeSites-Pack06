class o{constructor(e,i,t,l,s,h=!1){this.views=e,this.startTimer=i,this.endTimer=t,this.openCallback=l,this.closeCallback=s,this.isSvgElement=h,this.counter=0,this._isShowing=!1,this._isHiding=!1}show(){this.counter=0,this._isShowing=!0,this._isHiding=!1}hide(){this.counter=0,this._isHiding=!0,this._isShowing=!1}destroy(){this.views=null,this.openCallback=null,this.closeCallback=null}render(){this._isShowing?this.doShow():this._isHiding&&this.doHide()}resetViews(e){this.views=e}doShow(){let e=this.views.length,i,t,l=this.counter/this.startTimer;this.counter++,this.counter>=this.startTimer&&(this._isShowing=!1,typeof this.openCallback=="function"&&this.openCallback());for(let s=0;s<e;s++)i=this.views[s],this._isShowing?this.counter%2==0&&(t=Math.random(),t<l?this.isSvgElement?i.classList.add("visible"):i.style.visibility="visible":this.isSvgElement?i.classList.remove("visible"):i.style.visibility="hidden"):this.isSvgElement?i.classList.add("visible"):i.style.visibility="visible"}doHide(){let e=this.views.length,i,t,l=this.counter/this.endTimer;this.counter++,this.counter>=this.endTimer&&(typeof this.closeCallback=="function"&&this.closeCallback(),this._isHiding=!1);for(let s=0;s<e;s++)i=this.views[s],this._isHiding?this.counter%2==0&&(t=Math.random(),t<l?this.isSvgElement?i.classList.remove("visible"):i.style.visibility="hidden":this.isSvgElement?i.classList.add("visible"):i.style.visibility="visible"):this.isSvgElement?i.classList.remove("visible"):i.style.visibility="hidden"}isHiding(){return this._isHiding}isShowing(){return this._isShowing}}export{o as S};