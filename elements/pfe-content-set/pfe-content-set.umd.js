!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("../pfelement/pfelement.umd")):"function"==typeof define&&define.amd?define(["../pfelement/pfelement.umd"],t):e.PfeContentSet=t(e.PFElement)}(this,function(n){"use strict";n=n&&n.hasOwnProperty("default")?n.default:n;var r=function(){function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}}(),o=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)},e=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,t,{delayRender:!0}));return n.groupings=[],n._observer=new MutationObserver(function(){[].concat(o(n.querySelectorAll("pfe-content-set-group"))).forEach(function(e){var t={heading:e.querySelector("[pfe-heading]"),body:[].concat(o(e.querySelectorAll(":not([pfe-heading])")))};n.groupings.push(t)}),n.render()}),n._observer.observe(n,{attributes:!0,childList:!0}),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n),r(t,[{key:"html",get:function(){return"<style>:host {\n  display: block; }</style>\n  "+(this.isTab?"\n    <pfe-tabs "+(this.settings.variant?"pfe-variant="+this.settings.variant:"")+"\n    "+(this.orientation?this.orientation:"")+">\n      "+this.groupings.map(function(e){return'\n        <pfe-tab slot="tab">\n          '+e.heading.innerText+'\n        </pfe-tab>\n        <pfe-tab-panel slot="panel">\n          '+e.body.map(function(e){return e.outerHTML}).join("")+"\n        </pfe-tab-panel>\n      "}).join("")+"\n    </pfe-tabs>\n  ":"\n    <pfe-accordion "+(this.settings.color?"color="+this.settings.color:"")+">\n        "+this.groupings.map(function(e){return"\n        <pfe-accordion-header>\n          "+e.heading.outerHTML+"\n        </pfe-accordion-header>\n        <pfe-accordion-panel>\n            "+e.body.map(function(e){return e.outerHTML}).join("")+"\n        </pfe-accordion-panel>\n      "}).join("")+"\n    </pfe-accordion>\n  ")}},{key:"styleUrl",get:function(){return"pfe-content-set.css"}},{key:"templateUrl",get:function(){return"pfe-content-set.html"}},{key:"isTab",get:function(){return this.parentNode?768<this.parentNode.offsetWidth:768<window.outerWidth}},{key:"settings",get:function(){var e={},t=this.getAttribute("pfe-variant");return e.color="primary"===t?(e.variant=t,"striped"):"secondary"===t?(e.variant=t,"dark"):"lightest",e}},{key:"orientation",get:function(){if(this.hasAttribute("vertical"))return" vertical"}}],[{key:"tag",get:function(){return"pfe-content-set"}},{key:"observedAttributes",get:function(){return["pfe-vertical","selected-index","pfe-variant","theme","color"]}},{key:"cascadingAttributes",get:function(){return{vertical:"pfe-tabs","selected-index":"pfe-tabs","pfe-variant":"pfe-tabs",theme:"pfe-accordion",color:"pfe-accordion"}}},{key:"pfeType",get:function(){return n.pfeType.combo}}]),r(t,[{key:"connectedCallback",value:function(){(function e(t,n,r){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,n);if(void 0===o){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,n,r)}if("value"in o)return o.value;var a=o.get;return void 0!==a?a.call(r):void 0})(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"connectedCallback",this).call(this)}},{key:"disconnectedCallback",value:function(){this._observer.disconnect()}}]),t}();return n.create(e),e});
//# sourceMappingURL=pfe-content-set.umd.js.map
