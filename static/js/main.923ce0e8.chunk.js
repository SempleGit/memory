(this.webpackJsonpmemory=this.webpackJsonpmemory||[]).push([[0],{11:function(e,t,a){},12:function(e,t,a){"use strict";a.r(t);var c=a(0),i=a(1),r=a.n(i),n=a(4),s=a.n(n),o=(a(10),a(11),a(2)),m=a.p+"static/media/one.edcd120b.jpg",d=a.p+"static/media/two.97a5b2b3.jpg",b=a.p+"static/media/three.e1381a14.jpg",j=a.p+"static/media/four.0e31b7cf.jpg",l=a.p+"static/media/five.2203641c.jpg",u=a.p+"static/media/six.de60beea.jpg",g=a.p+"static/media/seven.c2f42323.jpg",p=a.p+"static/media/eight.d69a4036.jpg",h=a.p+"static/media/nine.0200397f.jpg",O=a.p+"static/media/ten.a90f8ad9.jpg",f=function(e){var t=Object(i.useState)([{img:m,alt:"cat with mask on",cardNumber:1},{img:d,alt:"cat with a white chest looking at the camera",cardNumber:2},{img:b,alt:"gray tabby cat",cardNumber:3},{img:j,alt:"gray kitten looking sweet",cardNumber:4},{img:l,alt:"blue-eyed baby kitty",cardNumber:5},{img:u,alt:"long-haired kitty in the snow",cardNumber:6},{img:g,alt:"kitten sleeping on its back",cardNumber:7},{img:p,alt:"majestic cat laying on a bed",cardNumber:8},{img:h,alt:"orange tabby basking in the sun",cardNumber:9},{img:O,alt:"kitten pawing toward the screen",cardNumber:10}]),a=Object(o.a)(t,1)[0];var r=function(){for(var e=a.slice(),t=e.length-1;t>0;t--){var c=Math.floor(Math.random()*(t+1)),i=[e[c],e[t]];e[t]=i[0],e[c]=i[1]}return e}().map((function(t){var a=t.cardNumber,i=t.img,r=t.alt;return Object(c.jsx)("div",{onClick:function(){return e.onClick(a)},className:"card",children:Object(c.jsx)("img",{src:i,alt:r})},a)}));return Object(c.jsx)("div",{className:"card-display",children:r})},N=function(e){return Object(c.jsxs)("div",{className:"game-over",children:[Object(c.jsxs)("p",{children:["Final Score: ",e.score]}),Object(c.jsx)("button",{onClick:e.resetGame,children:"New Game"})]})},k=function(e){return Object(c.jsx)("div",{className:"scoreboard",children:Object(c.jsxs)("p",{children:["Your Score: ",e.score]})})};var v=function(){var e=Object(i.useState)(0),t=Object(o.a)(e,2),a=t[0],r=t[1],n=Object(i.useState)(new Set),s=Object(o.a)(n,2),m=s[0],d=s[1],b=Object(i.useState)(!1),j=Object(o.a)(b,2),l=j[0],u=j[1];return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)("h1",{children:"The goal is to select as many images in a row, without selecting the same image twice."}),Object(c.jsx)(k,{score:a}),l?Object(c.jsx)(N,{score:a,resetGame:function(){r(0),d(new Set),u(!1)}}):Object(c.jsx)(f,{onClick:function(e){m.has(e)?u(!0):(d((function(t){return t.add(e)})),r((function(e){return++e})))}})]})};s.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(v,{})}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.923ce0e8.chunk.js.map