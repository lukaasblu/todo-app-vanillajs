!function(t){function e(i){if(n[i])return n[i].exports;var d=n[i]={exports:{},id:i,loaded:!1};return t[i].call(d.exports,d,d.exports,e),d.loaded=!0,d.exports}var n={};return e.m=t,e.c=n,e.p="/dist/",e(0)}([function(t,e,n){n(1),t.exports=n(3)},function(t,e){},,function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}var d=n(4),r=i(d);new r.default},function(t,e,n){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var d=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),r=n(5),a=[{id:"1",title:"Complete the Todo app",done:!1,date:new Date},{id:"2",title:"Cook dinner",done:!0,date:new Date},{id:"3",title:"Go to the gym",done:!1,date:new Date}],o=function(){function t(){i(this,t);var e=this;document.querySelector(".edit-popup").className+=" hide",this.list=document.querySelector(".items-list"),this.render(),document.querySelector(".btn-add").addEventListener("click",this.create.bind(this)),document.querySelector(".btn-update").addEventListener("click",this.update.bind(this)),document.addEventListener("click",function(t){t.target.classList.contains("btn-delete")&&e.remove(t),t.target.classList.contains("btn-edit")&&e.renderEditForm(t),t.target.classList.contains("btn-complete")&&e.toggleComplete(t)})}return d(t,[{key:"render",value:function(){var t=this;this.list.innerHTML="",a.forEach(function(e){t.createDomElements(e.id),t.li.firstChild.insertAdjacentHTML("afterbegin",e.title),e.done&&t.li.firstChild.classList.add("done"),t.list.appendChild(t.li)})}},{key:"renderEditForm",value:function(t){var e=t.target.getAttribute("data-id");document.querySelector(".edit-popup").classList.remove("hide"),document.querySelector(".edit-popup").classList.add("show"),document.querySelector(".btn-update").setAttribute("data-id",e),a.forEach(function(t){t.id===e&&(document.querySelector(".edit-input").value=t.title)})}},{key:"createDomElements",value:function(t){this.li=document.createElement("li"),this.span=document.createElement("span"),this.btnsDiv=document.createElement("div"),this.editBtn=document.createElement("button"),this.deleteBtn=document.createElement("button"),this.completeBtn=document.createElement("button"),this.btnsDiv.classList.add("btns-div"),this.editBtn.className="btn-edit fas fa-pen",this.deleteBtn.className="btn-delete fas fa-trash-alt",this.completeBtn.className="btn-complete fas fa-check",this.editBtn.setAttribute("data-id",t),this.deleteBtn.setAttribute("data-id",t),this.completeBtn.setAttribute("data-id",t),this.btnsDiv.appendChild(this.editBtn),this.btnsDiv.appendChild(this.completeBtn),this.btnsDiv.appendChild(this.deleteBtn),this.li.appendChild(this.span),this.li.appendChild(this.btnsDiv)}},{key:"create",value:function(){var t=document.querySelector(".add-input").value;if((0,r.inputIsValid)(t)){var e={id:Date.now().toString(),title:t,done:!1,date:new Date};a.push(e),document.querySelector(".add-input").value="",this.render()}}},{key:"remove",value:function(t){var e=t.target.getAttribute("data-id");a=a.filter(function(t){return t.id!==e}),this.render()}},{key:"update",value:function(t){var e=t.target.getAttribute("data-id"),n=document.querySelector(".edit-input").value;(0,r.inputIsValid)(n)&&(a=a.map(function(t){return t.id===e&&(t.title=n),t}),document.querySelector(".edit-popup").classList.remove("show"),document.querySelector(".edit-popup").classList.add("hide"),this.render())}},{key:"toggleComplete",value:function(t){var e=t.target.getAttribute("data-id");a=a.map(function(t){return t.id===e&&(t.done=!t.done),t}),this.render()}}]),t}();e.default=o},function(t,e){"use strict";function n(t){var e=0===(t||"").trim().length,n=!e;return n}Object.defineProperty(e,"__esModule",{value:!0}),e.inputIsValid=n}]);