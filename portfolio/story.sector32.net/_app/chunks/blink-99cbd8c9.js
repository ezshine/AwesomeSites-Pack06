class r{constructor(i,t){this.view=i,this.intervals=t,this.arrayPosition=0,this.intervalCounter=0}destroy(){this.view=null,this.intervals=null}render(){let i=this.intervals[this.arrayPosition];this.intervalCounter++,this.intervalCounter>=i&&(this.arrayPosition++,this.arrayPosition>=this.intervals.length&&(this.arrayPosition=0),this.arrayPosition%2?this.view.style.visibility="hidden":this.view.style.visibility="visible",this.intervalCounter=0)}}export{r as B};