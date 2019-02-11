import t from"../pfelement/pfelement.js";const e={ENTER:13,DOWN:40,UP:38,ESC:27};let n=!1;class i extends t{get html(){return'<style>:host {\n  display: block;\n  position: relative; }\n\n.input-box-wrapper {\n  position: relative;\n  display: flex; }\n\n.sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  border: 0; }\n\n#input-box-wrapper ::slotted(input) {\n  width: 100%;\n  flex: 1;\n  box-shadow: inset 0 0px 0px rgba(0, 0, 0, 0.075) !important;\n  padding-left: 10px;\n  padding-right: 30px;\n  border-radius: 0;\n  background-color: #fff;\n  border: 1px solid var(--pfe-theme--color--surface--border, #dfdfdf);\n  font-size: 16px;\n  \n  height: 40px;\n  transition: border-color ease-in-out 0.15s,box-shadow ease-in-out 0.15s;\n  opacity: 1;\n  outline: 0; }\n\n#input-box-wrapper ::slotted(input:disabled),\nbutton:disabled {\n  cursor: not-allowed;\n  background-color: transparent;\n  color: #ccc;\n  opacity: 0.5; }\n\n#input-box-wrapper button:focus,\n#input-box-wrapper ::slotted(input:focus) {\n  border-color: #66afe9;\n  outline: 0; }\n\n#input-box-wrapper ::slotted(input),\nbutton {\n  -webkit-appearance: none; }\n\n#input-box-wrapper ::slotted([type="search"]::-ms-clear) {\n  display: none; }\n\n#input-box-wrapper ::slotted(input[type="search"]::-webkit-search-cancel-button),\n#input-box-wrapper ::slotted(input[type="search"]::-webkit-search-decoration) {\n  -webkit-appearance: none; }\n\nbutton {\n  color: #cccccc;\n  background-color: transparent;\n  border: none;\n  position: absolute;\n  top: 0px;\n  bottom: 0px;\n  padding: 0px;\n  margin: 0px;\n  cursor: pointer; }\n\nbutton.clear-search {\n  right: 30px;\n  width: 20px;\n  margin: 2px 1px;\n  background-color: #fff; }\n\nbutton.clear-search svg {\n  width: 12px;\n  stroke: #ccc; }\n\nbutton.clear-search:hover svg,\nbutton.clear-search:focus svg {\n  opacity: 1;\n  stroke: #06c; }\n\nbutton[disabled].clear-search:hover svg,\nbutton[disabled].clear-search:focus svg {\n  stroke: #ccc; }\n\nbutton.search-button {\n  right: 1px;\n  width: 30px; }\n\nbutton.search-button svg {\n  fill: #06c;\n  width: 16px; }\n\nbutton.search-button:hover svg,\nbutton.search-button:focus svg {\n  fill: #004080; }\n\nbutton.clear-search:hover {\n  color: #ccc; }\n\nbutton.search-button:disabled svg {\n  fill: #ccc; }\n\n.loading {\n  position: absolute;\n  width: 30px;\n  right: 52px;\n  top: 0px;\n  bottom: 0px; }\n\n.loading svg {\n  width: 26px;\n  padding-top: 7px; }</style>\n  <div id="input-box-wrapper">\n    <slot></slot>\n\n    <span class="loading" aria-hidden="true" hidden>\n        <svg viewBox="0 0 40 40" enable-background="new 0 0 40 40">\n          <path opacity="0.2" fill="#000" d="M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,14.946,14.946\n          s14.946-6.691,14.946-14.946C35.146,11.861,28.455,5.169,20.201,5.169z M20.201,31.749c-6.425,0-11.634-5.208-11.634-11.634\n          c0-6.425,5.209-11.634,11.634-11.634c6.425,0,11.633,5.209,11.633,11.634C31.834,26.541,26.626,31.749,20.201,31.749z"/>\n          <path fill="#000" d="M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0\n          C22.32,8.481,24.301,9.057,26.013,10.047z">\n          <animateTransform attributeType="xml"\n            attributeName="transform"\n            type="rotate"\n            from="0 20 20"\n            to="360 20 20"\n            dur="0.5s"\n            repeatCount="indefinite"/>\n          </path>\n        </svg>\n    </span>\n\n    <button class="clear-search" type="button" aria-label="clear search query" hidden>\n      <svg viewBox="0 0 40 40" enable-background="new 0 0 40 40">\n        <line x1="5" y1="5" x2="35" y2="35" stroke-width="10" stroke-linecap="round" stroke-miterlimit="10"></line>\n        <line x1="35" y1="5" x2="5" y2="35" stroke-width="10" stroke-linecap="round" stroke-miterlimit="10"></line>\n      </svg>\n    </button>\n\n    <button class="search-button" type="button" aria-label="Search" disabled>\n      <svg viewBox="0 0 512 512">\n        <path d="M256.233,5.756c-71.07,15.793-141.44,87.863-155.834,159.233c-11.495,57.076,0.3,111.153,27.688,154.335L6.339,441.172\n      c-8.596,8.596-8.596,22.391,0,30.987l33.286,33.286c8.596,8.596,22.391,8.596,30.987,0L192.26,383.796\n      c43.282,27.688,97.559,39.683,154.734,28.188c79.167-15.893,142.04-77.067,159.632-155.934\n      C540.212,104.314,407.968-27.93,256.233,5.756z M435.857,208.37c0,72.869-59.075,131.944-131.944,131.944\n      S171.969,281.239,171.969,208.37S231.043,76.426,303.913,76.426S435.857,135.501,435.857,208.37z"/>\n      </svg>\n    </button>\n</div>\n<pfe-search-droplist id="dropdown"></pfe-search-droplist>'}static get tag(){return"pfe-autocomplete"}get templateUrl(){return"pfe-autocomplete.html"}get styleUrl(){return"pfe-autocomplete.scss"}constructor(){super(i)}connectedCallback(){super.connectedCallback(),this.loading=!1,this.debounce=this.debounce||300;let t=this.shadowRoot.querySelector("slot").assignedNodes().filter(t=>t.nodeType===Node.ELEMENT_NODE);this._input=t[0],this._input.addEventListener("input",this._inputChanged.bind(this)),this._input.addEventListener("blur",this._closeDroplist.bind(this)),this._input.setAttribute("role","combobox"),this._input.setAttribute("aria-label","Search"),this._input.setAttribute("aria-autocomplete","both"),this._input.setAttribute("aria-haspopup","true"),this._input.setAttribute("type","search"),this._input.setAttribute("autocomplete","off"),this._input.setAttribute("autocorrect","off"),this._input.setAttribute("autocapitalize","off"),this._input.setAttribute("spellcheck","false"),this._clearBtn=this.shadowRoot.querySelector(".clear-search"),this._clearBtn.addEventListener("click",this._clear.bind(this)),this._searchBtn=this.shadowRoot.querySelector(".search-button"),this._searchBtn.addEventListener("click",this._search.bind(this)),this._dropdown=this.shadowRoot.querySelector("#dropdown"),this._dropdown.data=[],this.activeIndex=null,this.addEventListener("keyup",this._inputKeyUp.bind(this)),this.addEventListener("pfe-search-event",this._closeDroplist.bind(this)),this.addEventListener("pfe-option-selected",this._optionSelected.bind(this))}disconnectedCallback(){this.removeEventListener("keyup",this._inputKeyUp),this.removeEventListener("pfe-search-event",this._closeDroplist),this.removeEventListener("pfe-option-selected",this._optionSelected),this._input.removeEventListener("input",this._inputChanged),this._input.removeEventListener("blur",this._closeDroplist),this._clearBtn.removeEventListener("click",this._clear),this._searchBtn.removeEventListener("click",this._search)}static get observedAttributes(){return["init-value","loading","is-disabled"]}attributeChangedCallback(t,e,n){super.attributeChangedCallback();let i=this.shadowRoot.querySelector("slot").assignedNodes().filter(t=>t.nodeType===Node.ELEMENT_NODE)[0],s=this.shadowRoot.querySelector(".clear-search"),o=this.shadowRoot.querySelector(".search-button");switch(t){case"loading":this.loading&&""!==i.value?this.shadowRoot.querySelector(".loading").removeAttribute("hidden"):this.shadowRoot.querySelector(".loading").setAttribute("hidden","");break;case"init-value":this["init-value"]!==n&&(i.value=n,""===n||this.isDisabled?(o.setAttribute("disabled",""),s.setAttribute("hidden","")):(o.removeAttribute("disabled"),s.removeAttribute("hidden")));break;case"is-disabled":this.isDisabled?(s.setAttribute("disabled",""),o.setAttribute("disabled",""),i.setAttribute("disabled","")):(s.removeAttribute("disabled"),o.removeAttribute("disabled"),i.removeAttribute("disabled"))}}get selectedValue(){return this.getAttribute("selected-value")}set selectedValue(t){this.setAttribute("selected-value",t)}set isDisabled(t){t?this.setAttribute("is-disabled",""):this.removeAttribute("is-disabled")}get isDisabled(){return this.hasAttribute("is-disabled")}set loading(t){Boolean(t)?this.setAttribute("loading",""):this.removeAttribute("loading")}get loading(){return this.hasAttribute("loading")}get initValue(){return this.getAttribute("init-value")}set initValue(t){this.setAttribute("init-value",t)}get debounce(){return this.getAttribute("debounce")}set debounce(t){this.setAttribute("debounce",t)}_inputChanged(){if(""===this._input.value)return this._searchBtn.setAttribute("disabled",""),this._clearBtn.setAttribute("hidden",""),void this._reset();this._input.hasAttribute("disabled")||this._searchBtn.removeAttribute("disabled"),this._clearBtn.removeAttribute("hidden"),!1===n&&(n=!0,window.setTimeout(()=>{this._sendAutocompleteRequest(this._input.value),n=!1},this.debounce))}_clear(){this._input.value="",this._clearBtn.setAttribute("hidden",""),this._searchBtn.setAttribute("disabled",""),this._input.focus()}_search(){this._doSearch(this._input.value)}_closeDroplist(){this._dropdown.open=null,this._dropdown.removeAttribute("active-index")}_openDroplist(){this.activeIndex=null,this._dropdown.setAttribute("open",!0),this._dropdown.setAttribute("active-index",null)}_optionSelected(t){let e=t.detail.optionValue;this._input.value=e,this._doSearch(e)}_doSearch(t){this.dispatchEvent(new CustomEvent("pfe-search-event",{detail:{searchValue:t},bubbles:!0,composed:!0})),this._reset(),this.selectedValue=t}_sendAutocompleteRequest(t){this.autocompleteRequest&&this.autocompleteRequest({query:t},this._autocompleteCallback.bind(this))}_autocompleteCallback(t){this._dropdown.data=t,this._dropdown.reflow=!0,0!==t.length?this._openDroplist():this._closeDroplist()}_reset(){this._dropdown.activeIndex=null,this._input.setAttribute("aria-activedescendant",""),this._dropdown.data=[],this._closeDroplist()}_activeOption(t){if(null!==t&&"null"!==t)return this._dropdown.shadowRoot.querySelector("li:nth-child("+(parseInt(t,10)+1)+")").innerHTML}_inputKeyUp(t){let n=t.keyCode;if(0===this._dropdown.data.length&&n!==e.DOWN&&n!==e.UP&&n!==e.ENTER&&n!==e.ESC)return;let i=this._dropdown.activeIndex,s=this._dropdown.data.length;if(n==e.ESC)this._closeDroplist();else if(n===e.UP){if(!this._dropdown.open)return;i=null===i||"null"===i?s:parseInt(i,10),(i-=1)<0&&(i=s-1),this._input.value=this._activeOption(i)}else if(n===e.DOWN){if(!this._dropdown.open)return;i=null===i||"null"===i?-1:parseInt(i,10),(i+=1)>s-1&&(i=0),this._input.value=this._activeOption(i)}else if(n===e.ENTER){let t=this._input.value;return void this._doSearch(t)}null!==i&&"null"!==i?this._input.setAttribute("aria-activedescendant","option-"+i):this._input.setAttribute("aria-activedescendant",""),this.activeIndex=i,this._dropdown.activeIndex=i}}class s extends t{get html(){return'<style>:host {\n  position: relative;\n  display: none;\n  font-family: var(--pfe-theme--font-family);\n  font-size: var(--pfe-theme--font-size);\n  line-height: var(--pfe-theme--line-height); }\n\n:host([open]) {\n  display: block; }\n\n.sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  border: 0; }\n\n.droplist {\n  position: absolute;\n  top: 100%;\n  left: 0px;\n  right: 0px;\n  max-height: 250px;\n  z-index: 9999;\n  overflow-y: scroll;\n  overflow-x: hidden;\n  border: 1px solid #ccc;\n  background-color: #fff; }\n\nul {\n  font-family: var(--pfe-theme--font-family);\n  font-size: var(--pfe-theme--font-size);\n  line-height: var(--pfe-theme--line-height);\n  border-top: none;\n  margin: 0px;\n  padding: 0px;\n  list-style: none;\n  cursor: pointer; }\n  ul li {\n    display: list-item;\n    cursor: pointer;\n    padding: 10px;\n    margin: 0px;\n     }\n    ul li.active {\n      background-color: var(--pfe-theme--color--surface--lighter, #ececec); }</style>\n  <div class="suggestions-aria-help sr-only" aria-hidden="false" role="status"></div>\n<div class="droplist">\n  <ul role="listbox" tabindex="-1">\n  </ul>\n</div>'}static get tag(){return"pfe-search-droplist"}get templateUrl(){return"pfe-search-droplist.html"}get styleUrl(){return"pfe-search-droplist.scss"}constructor(){super(s)}connectedCallback(){super.connectedCallback(),this._ariaAnnounce=this.shadowRoot.querySelector(".suggestions-aria-help"),this.activeIndex=null,this._ul=this.shadowRoot.querySelector("ul"),this._ul.addEventListener("mousedown",this._optionSelected.bind(this))}disconnectedCallback(){this._ul.removeEventListener("mousedown",this._optionSelected)}_optionSelected(t){"LI"===t.target.tagName&&this.dispatchEvent(new CustomEvent("pfe-option-selected",{detail:{optionValue:t.target.innerText},bubbles:!0,composed:!0}))}_renderOptions(){this.reflow="";let t=this.data;this._ariaAnnounce.innerHTML=`There are ${t.length} suggestions. Use the up and down arrows to browse.`,this._ariaAnnounce.setAttribute("aria-live","polite"),this._ul.innerHTML=`${t.map((t,e)=>`<li id="option-${e}" role="option" tabindex="-1" value="${t}">${t}</li>`).join("")}`}static get observedAttributes(){return["open","reflow","active-index"]}attributeChangedCallback(t,e,n){super.attributeChangedCallback(),this[name]!==n&&(this[name]=n),"active-index"===t&&e!==n&&this._activeIndexChanged(),"reflow"===t&&this._renderOptions()}_activeIndexChanged(){if(!this.data||0===this.data.length||null===this.activeIndex||"null"===this.activeIndex)return;this._ul.querySelector(".active")&&this._ul.querySelector(".active").classList.remove("active");let t=this._ul.querySelector("li:nth-child("+(parseInt(this.activeIndex,10)+1)+")");t.classList.add("active");let e=this.shadowRoot.querySelector(".droplist"),n=t.offsetHeight;n+=parseInt(window.getComputedStyle(t).getPropertyValue("margin-bottom"),10),e.scrollTop=t.offsetTop-e.offsetHeight+n}get open(){return this.hasAttribute("open")}set open(t){(t=Boolean(t))?this.setAttribute("open",""):this.removeAttribute("open")}get activeIndex(){return this.getAttribute("active-index")}set activeIndex(t){this.setAttribute("active-index",t)}get reflow(){return this.hasAttribute("reflow")}set reflow(t){(t=Boolean(t))?this.setAttribute("reflow",""):this.removeAttribute("reflow")}}t.create(s),t.create(i);export default i;
//# sourceMappingURL=pfe-autocomplete.js.map
