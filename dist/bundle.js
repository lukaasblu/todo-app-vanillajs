!function(t){function e(n){if(i[n])return i[n].exports;var a=i[n]={exports:{},id:n,loaded:!1};return t[n].call(a.exports,a,a.exports,e),a.loaded=!0,a.exports}var i={};return e.m=t,e.c=i,e.p="/dist/",e(0)}([function(t,e,i){i(1),t.exports=i(3)},function(t,e){},,function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}var a=i(4),r=n(a);new r.default},function(t,e,i){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),r=i(5),d=[{id:"1",title:"Buy groceries for tonight's dinner",done:!1,date:new Date},{id:"2",title:"Complete the Todo app",done:!0,date:new Date},{id:"3",title:"Learn more about GraphQL",done:!1,date:new Date}],s=function(){function t(){n(this,t);var e=this;document.querySelector(".edit-popup").className+=" hide",this.list=document.querySelector(".items-list"),this.render(),document.querySelector(".btn-add").addEventListener("click",this.create.bind(this)),document.querySelector(".btn-update").addEventListener("click",this.update.bind(this)),document.addEventListener("click",function(t){t.target.classList.contains("btn-delete")&&e.remove(t),t.target.classList.contains("btn-edit")&&e.renderEditForm(t),t.target.classList.contains("btn-complete")&&e.toggleComplete(t)}),document.querySelector(".add-input").addEventListener("keyup",function(t){13===t.keyCode&&(t.preventDefault(),document.querySelector(".btn-add").click())}),document.querySelector(".edit-input").addEventListener("keyup",function(t){13===t.keyCode&&(t.preventDefault(),document.querySelector(".btn-update").click())})}return a(t,[{key:"render",value:function(){var t=this;this.list.innerHTML="",0===d.length?this.list.innerHTML='<span id="no-todos-text">Wow, such empty</span>':d.forEach(function(e){t.createDomElements(e.id),t.li.firstChild.firstChild.firstChild.insertAdjacentHTML("afterbegin",e.title),t.li.firstChild.childNodes[1].firstChild.insertAdjacentHTML("afterbegin",e.title),e.done&&t.li.firstChild.classList.add("done"),t.list.appendChild(t.li)})}},{key:"renderEditForm",value:function(t){var e=t.target.getAttribute("data-id");document.querySelector(".edit-popup").classList.remove("hide"),document.querySelector(".edit-popup").classList.add("show"),document.querySelector(".btn-update").setAttribute("data-id",e),d.forEach(function(t){t.id===e&&(document.querySelector(".edit-input").value=t.title)})}},{key:"createDomElements",value:function(t){this.li=document.createElement("li"),this.span=document.createElement("span"),this.btnsDiv=document.createElement("div"),this.editBtn=document.createElement("button"),this.deleteBtn=document.createElement("button"),this.completeBtn=document.createElement("button"),this.btnsDiv.classList.add("btns-container"),this.editBtn.className="btn-edit fas fa-pen",this.deleteBtn.className="btn-delete fas fa-trash-alt",this.completeBtn.className="btn-complete btn-turn-to-back fas fa-check",this.editBtn.setAttribute("data-id",t),this.deleteBtn.setAttribute("data-id",t),this.completeBtn.setAttribute("data-id",t),this.btnsDiv.appendChild(this.editBtn),this.btnsDiv.appendChild(this.completeBtn),this.btnsDiv.appendChild(this.deleteBtn),this.span.className="item-title",this.li.className="item",this.frontDiv=document.createElement("div"),this.backDiv=document.createElement("div"),this.innerDiv=document.createElement("div"),this.frontDiv.className="item-front",this.backDiv.className="item-back",this.innerDiv.className="item-inner",this.frontDiv.appendChild(this.span),this.frontDiv.appendChild(this.btnsDiv),this.backDiv.innerHTML='<span class="item-title-back"></span><div class="btns-container-back"><button data-id="'+t+'" class="btn-complete btn-turn-to-front fas fa-undo"></button><button data-id="'+t+'" class="btn-delete btn-complete-back fas fa-trash-alt"></button></div>',this.innerDiv.appendChild(this.frontDiv),this.innerDiv.appendChild(this.backDiv),this.li.appendChild(this.innerDiv),this.li.setAttribute("data-id",t)}},{key:"create",value:function(){var t=document.querySelector(".add-input").value;if((0,r.inputIsValid)(t)){var e={id:Date.now().toString(),title:t,done:!1,date:new Date};d.push(e),document.querySelector(".add-input").value="",this.render()}}},{key:"remove",value:function(t){var e=t.target.getAttribute("data-id");d=d.filter(function(t){return t.id!==e}),this.render()}},{key:"update",value:function(t){var e=t.target.getAttribute("data-id"),i=document.querySelector(".edit-input").value;(0,r.inputIsValid)(i)&&(d=d.map(function(t){return t.id===e&&(t.title=i),t}),document.querySelector(".edit-popup").classList.remove("show"),document.querySelector(".edit-popup").classList.add("hide"),this.render())}},{key:"toggleComplete",value:function(t){var e=t.target.getAttribute("data-id");d=d.map(function(t){if(t.id===e){t.done=!t.done;var i=(0,r.getElementsByAttribute)(document,"li","data-id",e);i[0].firstChild.classList.toggle("done")}return t})}}]),t}();e.default=s},function(t,e){"use strict";function i(t){var e=0===(t||"").trim().length,i=!e;return i}function n(t,e,i,n){for(var a,r,d="*"===e&&t.all?t.all:t.getElementsByTagName(e),s=[],o="undefined"!=typeof n?new RegExp("(^|\\s)"+n+"(\\s|$)","i"):null,l=0;l<d.length;l++)a=d[l],r=a.getAttribute&&a.getAttribute(i),"string"==typeof r&&r.length>0&&("undefined"==typeof n||o&&o.test(r))&&s.push(a);return s}Object.defineProperty(e,"__esModule",{value:!0}),e.inputIsValid=i,e.getElementsByAttribute=n}]);