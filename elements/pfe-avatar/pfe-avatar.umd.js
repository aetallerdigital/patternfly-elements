!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("../pfelement/pfelement.umd")):"function"==typeof define&&define.amd?define(["../pfelement/pfelement.umd"],e):t.PfeAvatar=e(t.PFElement)}(this,function(e){"use strict";function u(t,e,r){return r<0&&(r+=1),1<r&&(r-=1),6*r<1?t+6*(e-t)*r:2*r<1?e:3*r<2?t+(e-t)*(2/3-r)*6:t}e=e&&e.hasOwnProperty("default")?e.default:e;var r=function(){function n(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),t}}(),i=function t(e,r,n){null===e&&(e=Function.prototype);var a=Object.getOwnPropertyDescriptor(e,r);if(void 0===a){var i=Object.getPrototypeOf(e);return null===i?void 0:t(i,r,n)}if("value"in a)return a.value;var o=a.get;return void 0!==o?o.call(n):void 0},s=function(t){if(Array.isArray(t)){for(var e=0,r=Array(t.length);e<t.length;e++)r[e]=t[e];return r}return Array.from(t)},t=function(t){function a(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(a.__proto__||Object.getPrototypeOf(a)).call(this,a))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(a,e),r(a,[{key:"html",get:function(){return'<style>:host {\n  --pfe-avatar--width: 128px;\n  display: block;\n  position: relative;\n  width: var(--pfe-avatar--width);\n  height: var(--pfe-avatar--width); }\n  :host canvas {\n    width: 100%;\n    height: 100%;\n    image-rendering: optimizeSpeed;\n    \n    image-rendering: -moz-crisp-edges;\n    \n    image-rendering: -webkit-optimize-contrast;\n    \n    image-rendering: -o-crisp-edges;\n    \n    image-rendering: pixelated;\n    \n    -ms-interpolation-mode: nearest-neighbor;\n     }\n\n:host([pfe-shape="rounded"]) img,\n:host([pfe-shape="rounded"]) canvas {\n  border-radius: calc(var(--pfe-avatar--width) / 8 + 1px); }\n\n:host([pfe-shape="circle"]) img,\n:host([pfe-shape="circle"]) canvas {\n  border-radius: 50%; }\n\n:host([pfe-src]) canvas {\n  display: none; }\n\n:host([pfe-src]) img {\n  display: block;\n  width: 100%;\n  height: 100%;\n  object-fit: cover; }\n\n:host(:not([pfe-src])) img {\n  display: none; }\n\n:host([hidden]) {\n  display: none; }</style>\n  <canvas></canvas>\n<img>'}},{key:"templateUrl",get:function(){return"pfe-avatar.html"}},{key:"styleUrl",get:function(){return"pfe-avatar.scss"}},{key:"name",get:function(){return this.getAttribute("pfe-name")},set:function(t){return this.setAttribute("pfe-name",t)}},{key:"src",get:function(){return this.getAttribute("pfe-src")},set:function(t){return this.setAttribute("pfe-src",t)}},{key:"pattern",get:function(){return this.getAttribute("pfe-pattern")||a.patterns.squares},set:function(t){if(a.patterns[t])return this.setAttribute("pfe-pattern",t);this.log('invalid pattern "'+t+'", valid patterns are: '+Object.values(a.patterns))}}],[{key:"tag",get:function(){return"pfe-avatar"}},{key:"observedAttributes",get:function(){return["pfe-name","pfe-pattern","pfe-src","pfe-shape"]}},{key:"patterns",get:function(){return{triangles:"triangles",squares:"squares"}}},{key:"defaultColors",get:function(){return"#67accf #448087 #709c6b #a35252 #826cbb"}}]),r(a,[{key:"connectedCallback",value:function(){i(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"connectedCallback",this).call(this),this._initCanvas(),this.dispatchEvent(new CustomEvent(a.tag+":connected",{bubbles:!1}))}},{key:"attributeChangedCallback",value:function(t,e,r){var n=this;i(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"attributeChangedCallback",this).apply(this,arguments),this.connected?this.update():this.addEventListener(a.tag+":connected",function(){return n.update()})}},{key:"_initCanvas",value:function(){this._canvas=this.shadowRoot.querySelector("canvas");var t=this.var("--pfe-avatar--width").replace(/px$/,"");this._canvas.width=t,this._canvas.height=t,this._squareSize=this._canvas.width/8,this._triangleSize=this._canvas.width/4,this._ctx=this._canvas.getContext("2d")}},{key:"update",value:function(){if(this.hasAttribute("pfe-src"))this.shadowRoot.querySelector("img").src=this.src;else{var t=function(t){for(var e=5381,r=t.length;r;)e=33*e^t.charCodeAt(--r);return e>>>0}(this.name).toString(2),e=t.split("").map(function(t){return Number(t)});this._colorIndex=Math.floor(a.colors.length*parseInt(t,2)/Math.pow(2,32)),this.color1=a.colors[this._colorIndex].color1,this.color2=a.colors[this._colorIndex].color2,this._clear(),this._drawBackground(),this.pattern===a.patterns.squares?this._drawSquarePattern(e):this.pattern===a.patterns.triangles&&this._drawTrianglePattern(e)}}},{key:"_clear",value:function(){this._ctx.clearRect(0,0,this._canvas.width,this._canvas.height)}},{key:"_drawBackground",value:function(){this._ctx.fillStyle=this.color1,this._ctx.fillRect(0,0,this._canvas.width,this._canvas.height)}},{key:"_drawSquarePattern",value:function(t){if(this._ctx.fillStyle=this.color2,this._ctx)for(var e=t.length;e--;)t[e]&&this._drawMirroredSquare(e%4,Math.floor(e/4))}},{key:"_drawMirroredSquare",value:function(t,e){this._ctx&&(this._drawSquare(t,e),this._drawSquare(7-t,e))}},{key:"_drawSquare",value:function(t,e){this._ctx.fillRect(this._squareSize*t,this._squareSize*e,this._squareSize,this._squareSize)}},{key:"_drawTrianglePattern",value:function(t){if(this._ctx.fillStyle=this.color2,this._ctx)for(var e=t.length;e--;)if(t[e]){var r=Math.floor(e/2)%2,n=Math.floor(e/4),a=[r,n],i=[r,n],o=[r,n];switch(e%4){case 0:i[1]++,o[0]++,o[1]++;break;case 1:i[0]++,o[0]++,o[1]++;break;case 2:i[0]++,o[1]++;break;case 3:a[0]++,i[0]++,i[1]++,o[1]++}this._drawMirroredTriangle(a,i,o)}}},{key:"_drawMirroredTriangle",value:function(t,e,r){this._ctx&&(this._drawTriangle(t,e,r),this._drawTriangle([4-t[0],t[1]],[4-e[0],e[1]],[4-r[0],r[1]]))}},{key:"_drawTriangle",value:function(t,e,r){var n,a,i,o=this;this._ctx.beginPath(),(n=this._ctx).moveTo.apply(n,s(t.map(function(t){return t*o._triangleSize}))),(a=this._ctx).lineTo.apply(a,s(e.map(function(t){return t*o._triangleSize}))),(i=this._ctx).lineTo.apply(i,s(r.map(function(t){return t*o._triangleSize}))),this._ctx.closePath(),this._ctx.fill(),this._ctx.fill()}},{key:"_drawGradient",value:function(){var t=this._ctx.createLinearGradient(0,this._canvas.height,this._canvas.width,0),e=this.color2,r=e,n=e;/^#[A-f0-9]{3}$/.test(e)?(r+="c",n+="0"):/^#[A-f0-9]{6}$/.test(e)&&(r+="cc",n+="00"),t.addColorStop(0,r),t.addColorStop(1,n),t.addColorStop(1,r),this._ctx.fillStyle=t,this._ctx.fillRect(0,0,this._canvas.width,this._canvas.height)}}],[{key:"_registerColors",value:function(){var a=this;return this.colors=[],(this.var("--pfe-avatar--colors")||this.defaultColors).split(/\s+/).forEach(function(t){var e=void 0;switch(t.length){case 4:if(e=/^#([A-f0-9])([A-f0-9])([A-f0-9])$/.exec(t)){e.shift();var r=e.map(function(t){return parseInt(t+t,16)});a._registerColor(r)}else a.log("[pfe-avatar] invalid color "+t);break;case 7:if(e=/^#([A-f0-9]{2})([A-f0-9]{2})([A-f0-9]{2})$/.exec(t)){e.shift();var n=e.map(function(t){return parseInt(t,16)});a._registerColor(n)}else a.log("[pfe-avatar] invalid color "+t)}}),this.colors}},{key:"_registerColor",value:function(t){a.colors.push({color1:"rgb("+t.join(",")+")",color2:"rgb("+this._adjustColor(t).join(",")+")"})}},{key:"_adjustColor",value:function(t){var e=function(t,e,r){var n,a=void 0,i=void 0,o=Math.max(0,Math.min(255,t))/255,s=Math.max(0,Math.min(255,e))/255,c=Math.max(0,Math.min(255,r))/255,l=Math.min(Math.min(o,s),c),h=Math.max(Math.max(o,s),c),u=h-l;if(n=(h+l)/2,0===u)i=a=0;else{i=n<.5?u/(h+l):u/(2-h-l);var f=((h-o)/6+u/2)/u,p=((h-s)/6+u/2)/u,d=((h-c)/6+u/2)/u;o==h?a=d-p:s==h?a=1/3+f-d:c==h&&(a=2/3+p-f),a<0?a+=1:1<a&&(a-=1)}return[a,i,n]}.apply(void 0,s(t));return e[2]+=.1<e[2]?-.1:.1,function(t,e,r){var n=void 0,a=void 0,i=void 0,o=Math.max(0,Math.min(1,t)),s=Math.max(0,Math.min(1,e)),c=Math.max(0,Math.min(1,r));if(0==s)i=a=n=255*c;else{var l,h=void 0;n=255*u(l=2*c-(h=c<.5?c*(1+s):c+s-s*c),h,o+1/3),a=255*u(l,h,o),i=255*u(l,h,o-1/3)}return[n,a,i]}.apply(void 0,s(e))}}]),a}();return t._registerColors(),e.create(t),t});
//# sourceMappingURL=pfe-avatar.umd.js.map
