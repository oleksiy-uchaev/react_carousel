(this.webpackJsonpreact_carousel=this.webpackJsonpreact_carousel||[]).push([[0],{13:function(t,e,i){},14:function(t,e,i){},16:function(t,e,i){"use strict";i.r(e);var n=i(8),a=i.n(n),s=i(2),r=i(3),o=i(5),c=i(4),l=i(1),u=i.n(l),m=(i(13),i(14),i(6)),p=i(0),h=function(t){Object(o.a)(i,t);var e=Object(c.a)(i);function i(){var t;Object(s.a)(this,i);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={gallery:[].concat(Object(m.a)(t.props.images),Object(m.a)(t.props.images),Object(m.a)(t.props.images))},t}return Object(r.a)(i,[{key:"render",value:function(){var t=this.props,e=t.itemWidth,i=t.frameSize,n=t.animationName,a=t.infiniteAuto,s=t.duration,r=this.state.gallery;return Object(p.jsx)("div",{className:"Carousel__container",children:Object(p.jsx)("div",{className:"Carousel__frame",style:{width:i*e},children:Object(p.jsx)("ul",{className:"Carousel__list",style:{padding:0},children:r.map((function(t){return Object(p.jsx)("li",{className:"Carousel__list--item",style:{animation:"\n                    ".concat(n,"\n                    ").concat(s,"ms\n                    linear\n                    ").concat(a?"infinite":"forwards","\n                  ")},children:Object(p.jsx)("img",{src:t,alt:t.slice(6,7),style:{width:e}},t.toString())})}))})})})}}]),i}(u.a.Component),f=h,d=function(t){Object(o.a)(i,t);var e=Object(c.a)(i);function i(){var t;Object(s.a)(this,i);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={animationName:"",vector:-1,from:0,to:0},t.getDistance=function(){return t.props.itemWidth*t.props.step},t.getFrameLimit=function(){return t.props.itemWidth*(t.props.images.length-t.props.frameSize)},t.getLimit=function(){return t.props.itemWidth*t.props.images.length*t.state.vector},t.setStepsLeft=function(){var e=t.state.to,i=t.getDistance()+e,n=e,a=i>0?0:i;t.setAnimationSteps(n,a)},t.setStepsRight=function(){var e=t.state,i=e.to,n=e.vector,a=t.getFrameLimit(),s=t.getDistance()*n,r=(a-Math.abs(i))*n,o=i,c=o+(s<r?r:s);t.setAnimationSteps(o,c)},t.setInfiniteStepsRight=function(){var e=t.state,i=e.vector,n=e.to,a=t.getDistance(),s=t.getLimit(),r=n,o=(a+Math.abs(n))*i;o<2*s&&(r-=s,o-=s),t.setAnimationSteps(r,o)},t.setInfiniteStepsLeft=function(){var e=t.state.to,i=t.getLimit(),n=0===e?2*i:e,a=n+t.getDistance();a>0&&(n+=i,a+=i),t.setAnimationSteps(n,a)},t.setAutoInfinitLeft=function(){var e=t.getLimit();t.setState({from:0,to:0}),t.setAnimationSteps(0,e)},t.setAutoInfinitRight=function(){var e=t.getLimit();t.setAnimationSteps(e,0)},t.rightButtonHandler=function(){return t.props.infiniteAuto?t.setAutoInfinitRight():t.props.infinite?t.setInfiniteStepsRight():t.setStepsRight()},t.leftButtonHandler=function(){return t.props.infiniteAuto?t.setAutoInfinitLeft():t.props.infinite?t.setInfiniteStepsLeft():t.setStepsLeft()},t}return Object(r.a)(i,[{key:"componentDidUpdate",value:function(t){t.itemWidth===this.props.itemWidth&&t.infiniteAuto===this.props.infiniteAuto||this.setState({from:0,to:0}),document.documentElement.style.setProperty("--from","".concat(this.state.from,"px")),document.documentElement.style.setProperty("--to","".concat(this.state.to,"px"))}},{key:"setAnimationSteps",value:function(t,e){this.setState((function(i){return{animationName:"scroll"===i.animationName?"nextScroll":"scroll",from:t,to:e}}))}},{key:"render",value:function(){var t=this.state.animationName,e=this.props,i=e.images,n=e.itemWidth,a=e.duration,s=e.frameSize,r=e.infiniteAuto;return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("div",{className:"Carousel__GalleryBorder",children:Object(p.jsx)(f,{images:i,itemWidth:n,animationName:t,infiniteAuto:r,duration:a,frameSize:s})}),Object(p.jsxs)("div",{className:"Carousel__buttons",children:[Object(p.jsx)("button",{type:"button",className:"Carousel__buttons--button",onClick:this.leftButtonHandler,children:r?"Rotate left":"Prev"}),Object(p.jsx)("button",{type:"button",className:"Carousel__buttons--button",onClick:this.rightButtonHandler,children:r?"Rotate right":"Next"})]})]})}}]),i}(u.a.Component),g=d,b=function(t){Object(o.a)(i,t);var e=Object(c.a)(i);function i(){var t;Object(s.a)(this,i);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={infiniteAuto:!1,infinite:!1,duration:1e3,itemWidth:130,frameSize:3,step:3},t.frameSizeHandler=function(e){t.setState({frameSize:Number(e.target.value)})},t.itemWidthHandler=function(e){t.setState({itemWidth:Number(e.target.value)})},t.stepHandler=function(e){t.setState({step:Number(e.target.value)})},t.durationHandler=function(e){t.setState((function(t){return{duration:t.infiniteAuto?3*Number(e.target.value):Number(e.target.value)}}))},t.infiniteHandler=function(e){t.setState({infinite:e.target.checked,infiniteAuto:!1})},t.autoInfiniteHandler=function(e){t.setState({infiniteAuto:e.target.checked,infinite:!1})},t}return Object(r.a)(i,[{key:"render",value:function(){var t=this.state,e=t.step,i=t.frameSize,n=t.itemWidth,a=t.duration,s=t.infinite,r=t.infiniteAuto;return Object(p.jsxs)("div",{className:"Carousel",children:[Object(p.jsx)(g,{step:e,infinite:s,infiniteAuto:r,duration:a,itemWidth:n,frameSize:i,images:this.props.images}),Object(p.jsxs)("div",{className:"Carousel__check",children:[Object(p.jsx)("label",{htmlFor:"infinite",className:"Carousel__check--label",children:"Infinite steps"}),Object(p.jsx)("input",{className:"Carousel__check--checkbox",id:"infinite",name:"infinite",type:"checkbox",checked:s,onChange:this.infiniteHandler}),Object(p.jsx)("label",{htmlFor:"autoInfinite",className:"Carousel__check--label",children:"Auto-infinite"}),Object(p.jsx)("input",{className:"Carousel__check--checkbox",id:"autoInfinite",name:"autoInfinite",type:"checkbox",checked:r,onChange:this.autoInfiniteHandler})]}),Object(p.jsxs)("div",{className:"Carousel__setting",children:[Object(p.jsxs)("div",{className:"Carousel__setting--label",children:[Object(p.jsx)("label",{htmlFor:"step",className:r?"disabled":"",children:"Step:"}),Object(p.jsx)("label",{htmlFor:"itemWidth",children:"Image size:"}),Object(p.jsx)("label",{htmlFor:"frameSize",children:"Fraim size:"}),Object(p.jsx)("label",{htmlFor:"duration",children:" Duration:"})]}),Object(p.jsxs)("div",{className:"Carousel__setting--slider",children:[Object(p.jsx)("input",{id:"step",name:"step",type:"range",step:"1",max:"10",min:"1",defaultValue:"3",onChange:this.stepHandler,disabled:r&&!0}),Object(p.jsx)("input",{id:"itemWidth",name:"itemWidth",type:"range",step:"10",min:"100",max:"200",defaultValue:"130",onChange:this.itemWidthHandler}),Object(p.jsx)("input",{id:"frameSize",name:"frameSize",type:"range",step:"1",max:"10",min:"1",defaultValue:"3",onChange:this.frameSizeHandler}),Object(p.jsx)("input",{id:"duration",name:"duration",type:"range",step:"250",max:"2000",min:"250",defaultValue:"1000",onChange:this.durationHandler})]})]})]})}}]),i}(u.a.Component),j=b,O=function(t){Object(o.a)(i,t);var e=Object(c.a)(i);function i(){var t;Object(s.a)(this,i);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={images:["./img/1.png","./img/2.png","./img/3.png","./img/4.png","./img/5.png","./img/6.png","./img/7.png","./img/8.png","./img/9.png","./img/10.png"]},t}return Object(r.a)(i,[{key:"render",value:function(){var t=this.state.images;return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsxs)("h1",{children:["Carousel with ",t.length," images"]}),Object(p.jsx)(j,{images:this.state.images})]})}}]),i}(u.a.Component),v=O;a.a.render(Object(p.jsx)(v,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.2bac6127.chunk.js.map