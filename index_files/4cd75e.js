/*! For license information please see 4cd75e.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{234:function(e,t,s){"use strict";var o=s(8),n=s(0),l=s(5),a=o(s(683));const c=(0,n.querySelectorAll)("input[data-autocomplete]");(0,l.forEach)(c,e=>{new a.default({selector:e,minChars:3,delay:150,cache:!0,source:(t,s)=>{fetch(e.dataset.autocomplete+"?query="+t,{headers:{"X-Requested-With":"XMLHttpRequest"},credentials:"include"}).then(e=>e.json()).then(e=>{e.results.length?s(e.results):s([{name:"Не найдено :(",type:"fake"}])})},renderItem:e=>"fake"!==e.type?'<a class="autocomplete-suggestion" title="'+e.name+'" href="'+e.link+'" data-val="'+e.name+'"><span class="autocomplete-suggestion__name"><span>'+e.name+'</span></span><span class="autocomplete-suggestion__type">'+e.type+"</span></a>":'<span class="autocomplete-suggestion">'+e.name+"</span>",onSelect:(e,t,s)=>{window.location.href=s.href}})})},5:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.filter=function(e,t){(0,n.isString)(e)&&(e=(0,o.querySelectorAll)(e));return[].filter.call(e,t)},t.forEach=function(e,t){(0,n.isString)(e)&&(e=(0,o.querySelectorAll)(e));[].forEach.call(e,t)};var o=s(0),n=s(3)},683:function(e,t,s){"use strict";var o,n=function(e){function t(e,t){return e.classList?e.classList.contains(t):new RegExp("\\b"+t+"\\b").test(e.className)}function s(e,t,s){e.attachEvent?e.attachEvent("on"+t,s):e.addEventListener(t,s)}function o(e,t,s){e.detachEvent?e.detachEvent("on"+t,s):e.removeEventListener(t,s)}function n(e,o,n,l){s(l||document,o,(function(s){for(var o,l=s.target||s.srcElement;l&&!(o=t(l,e));)l=l.parentElement;o&&n.call(l,s)}))}if(document.querySelector){var l={selector:0,source:0,minChars:3,delay:150,offsetLeft:0,offsetTop:1,cache:1,menuClass:"",renderItem:function(e,t){t=t.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&");var s=new RegExp("("+t.split(" ").join("|")+")","gi");return'<div class="autocomplete-suggestion" data-val="'+e+'">'+e.replace(s,"<b>$1</b>")+"</div>"},onSelect:function(){}};for(var a in e)e.hasOwnProperty(a)&&(l[a]=e[a]);for(var c="object"==typeof l.selector?[l.selector]:document.querySelectorAll(l.selector),u=0;u<c.length;u++){var r=c[u];r.sc=document.createElement("div"),r.sc.className="autocomplete-suggestions "+l.menuClass,r.autocompleteAttr=r.getAttribute("autocomplete"),r.setAttribute("autocomplete","off"),r.cache={},r.last_val="",r.updateSC=function(e,t){var s=r.getBoundingClientRect();if(r.sc.style.left=Math.round(s.left+(window.pageXOffset||document.documentElement.scrollLeft)+l.offsetLeft)+"px",r.sc.style.top=Math.round(s.bottom+(window.pageYOffset||document.documentElement.scrollTop)+l.offsetTop)+"px",r.sc.style.width=Math.round(s.right-s.left)+"px",!e&&(r.sc.style.display="block",r.sc.maxHeight||(r.sc.maxHeight=parseInt((window.getComputedStyle?getComputedStyle(r.sc,null):r.sc.currentStyle).maxHeight)),r.sc.suggestionHeight||(r.sc.suggestionHeight=r.sc.querySelector(".autocomplete-suggestion").offsetHeight),r.sc.suggestionHeight))if(t){var o=r.sc.scrollTop,n=t.getBoundingClientRect().top-r.sc.getBoundingClientRect().top;n+r.sc.suggestionHeight-r.sc.maxHeight>0?r.sc.scrollTop=n+r.sc.suggestionHeight+o-r.sc.maxHeight:0>n&&(r.sc.scrollTop=n+o)}else r.sc.scrollTop=0},s(window,"resize",r.updateSC),document.body.appendChild(r.sc),n("autocomplete-suggestion","mouseleave",(function(){var e=r.sc.querySelector(".autocomplete-suggestion.selected");e&&setTimeout((function(){e.className=e.className.replace("selected","")}),20)}),r.sc),n("autocomplete-suggestion","mouseover",(function(){var e=r.sc.querySelector(".autocomplete-suggestion.selected");e&&(e.className=e.className.replace("selected","")),this.className+=" selected"}),r.sc),n("autocomplete-suggestion","mousedown",(function(e){if(t(this,"autocomplete-suggestion")){var s=this.getAttribute("data-val");r.value=s,l.onSelect(e,s,this),r.sc.style.display="none"}}),r.sc),r.blurHandler=function(){try{var e=document.querySelector(".autocomplete-suggestions:hover")}catch(t){e=0}e?r!==document.activeElement&&setTimeout((function(){r.focus()}),20):(r.last_val=r.value,r.sc.style.display="none",setTimeout((function(){r.sc.style.display="none"}),350))},s(r,"blur",r.blurHandler);var i=function(e){var t=r.value;if(r.cache[t]=e,e.length&&t.length>=l.minChars){for(var s="",o=0;o<e.length;o++)s+=l.renderItem(e[o],t);r.sc.innerHTML=s,r.updateSC(0)}else r.sc.style.display="none"};r.keydownHandler=function(e){var t,s=window.event?e.keyCode:e.which;if((40==s||38==s)&&r.sc.innerHTML)return(o=r.sc.querySelector(".autocomplete-suggestion.selected"))?(t=40==s?o.nextSibling:o.previousSibling)?(o.className=o.className.replace("selected",""),t.className+=" selected",r.value=t.getAttribute("data-val")):(o.className=o.className.replace("selected",""),r.value=r.last_val,t=0):((t=40==s?r.sc.querySelector(".autocomplete-suggestion"):r.sc.childNodes[r.sc.childNodes.length-1]).className+=" selected",r.value=t.getAttribute("data-val")),r.updateSC(0,t),!1;if(27==s)r.value=r.last_val,r.sc.style.display="none";else if(13==s||9==s){var o;(o=r.sc.querySelector(".autocomplete-suggestion.selected"))&&"none"!=r.sc.style.display&&(l.onSelect(e,o.getAttribute("data-val"),o),setTimeout((function(){r.sc.style.display="none"}),20))}},s(r,"keydown",r.keydownHandler),r.keyupHandler=function(e){var t=window.event?e.keyCode:e.which;if(!t||(35>t||t>40)&&13!=t&&27!=t){var s=r.value;if(s.length>=l.minChars){if(s!=r.last_val){if(r.last_val=s,clearTimeout(r.timer),l.cache){if(s in r.cache)return void i(r.cache[s]);for(var o=1;o<s.length-l.minChars;o++){var n=s.slice(0,s.length-o);if(n in r.cache&&!r.cache[n].length)return void i([])}}r.timer=setTimeout((function(){l.source(s,i)}),l.delay)}}else r.last_val=s,r.sc.style.display="none"}},s(r,"keyup",r.keyupHandler),r.focusHandler=function(e){r.last_val="\n",r.keyupHandler(e)},l.minChars||s(r,"focus",r.focusHandler)}this.destroy=function(){for(var e=0;e<c.length;e++){var t=c[e];o(window,"resize",t.updateSC),o(t,"blur",t.blurHandler),o(t,"focus",t.focusHandler),o(t,"keydown",t.keydownHandler),o(t,"keyup",t.keyupHandler),t.autocompleteAttr?t.setAttribute("autocomplete",t.autocompleteAttr):t.removeAttribute("autocomplete"),document.body.removeChild(t.sc),t=null}}}};void 0===(o=function(){return n}.call(t,s,t,e))||(e.exports=o)},8:function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports}}]);