(function(e){function t(t){for(var o,r,a=t[0],l=t[1],u=t[2],d=0,p=[];d<a.length;d++)r=a[d],Object.prototype.hasOwnProperty.call(c,r)&&c[r]&&p.push(c[r][0]),c[r]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);s&&s(t);while(p.length)p.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],o=!0,a=1;a<n.length;a++){var l=n[a];0!==c[l]&&(o=!1)}o&&(i.splice(t--,1),e=r(r.s=n[0]))}return e}var o={},c={app:0},i=[];function r(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=o,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/REPO_NAME/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],l=a.push.bind(a);a.push=t,a=a.slice();for(var u=0;u<a.length;u++)t(a[u]);var s=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"01d0":function(e,t,n){},2302:function(e,t,n){},4475:function(e,t,n){"use strict";n("01d0")},"54f3":function(e,t,n){e.exports=n.p+"img/x.ff078b0f.svg"},bd19:function(e,t,n){"use strict";n("f3d3")},bf9f:function(e,t,n){e.exports=n.p+"img/circle.b85b85cf.svg"},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("7a23"),c={class:"container"};function i(e,t,n,i,r,a){var l=Object(o["resolveComponent"])("ItemInput"),u=Object(o["resolveComponent"])("ListItem"),s=Object(o["resolveComponent"])("draggable");return Object(o["openBlock"])(),Object(o["createBlock"])("main",c,[Object(o["createVNode"])(l,{onOnAddItem:e.addItem},null,8,["onOnAddItem"]),Object(o["createVNode"])(s,{modelValue:e.data.itemList,"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.data.itemList=t}),"item-key":"id",handle:".handle"},{item:Object(o["withCtx"])((function(t){var n=t.element;return[Object(o["createVNode"])(u,{model:n,onOnToggle:function(t){return e.toggleItemStatus(n.id)},onOnDelete:function(t){return e.deleteItem(n.id)},onOnEdit:function(t){return e.editItem(t,n.id)}},null,8,["model","onOnToggle","onOnDelete","onOnEdit"])]})),_:1},8,["modelValue"])])}var r=n("2909"),a=(n("13d5"),n("99af"),n("d81d"),n("4de4"),n("7db0"),n("b76a")),l=n.n(a),u=n("e7e5"),s=n.n(u),d=n("bf9f"),p=n.n(d),f=n("f15c"),m=n.n(f),b=n("54f3"),O=n.n(b),g=Object(o["withScopeId"])("data-v-66ed4304");Object(o["pushScopeId"])("data-v-66ed4304");var v={class:"app-list-item"},j=Object(o["createVNode"])("img",{class:"app-list-item-button handle",alt:"grip",src:s.a},null,-1),h=Object(o["createVNode"])("div",{class:"app-list-item-content-end"},null,-1);Object(o["popScopeId"])();var k=g((function(e,t,n,c,i,r){return Object(o["openBlock"])(),Object(o["createBlock"])("div",v,[j,e.model.status?(Object(o["openBlock"])(),Object(o["createBlock"])("img",{key:1,class:"app-list-item-button",alt:"checkbox-checked",src:m.a,onClick:t[2]||(t[2]=function(){return e.emitOnToggle&&e.emitOnToggle.apply(e,arguments)})})):(Object(o["openBlock"])(),Object(o["createBlock"])("img",{key:0,class:"app-list-item-button",alt:"checkbox-unchecked",src:p.a,onClick:t[1]||(t[1]=function(){return e.emitOnToggle&&e.emitOnToggle.apply(e,arguments)})})),Object(o["createVNode"])("div",{class:"app-list-item-content",contenteditable:"true",onKeydown:t[3]||(t[3]=Object(o["withKeys"])((function(t){return e.emitOnEdit(t)}),["enter"])),onBlur:t[4]||(t[4]=function(t){return e.emitOnEdit(t)})},Object(o["toDisplayString"])(e.model.content),33),h,e.model.status?(Object(o["openBlock"])(),Object(o["createBlock"])("img",{key:2,class:"app-list-item-button",alt:"delete",src:O.a,onClick:t[5]||(t[5]=function(){return e.emitOnDelete&&e.emitOnDelete.apply(e,arguments)})})):Object(o["createCommentVNode"])("",!0)])})),y=Object(o["defineComponent"])({emits:["onToggle","onDelete","onEdit"],props:{model:{required:!0,default:{id:0,content:"default task",status:!1}}},setup:function(e,t){var n=t.emit;function o(){n("onToggle")}function c(){n("onDelete")}function i(e){var t=e.target;n("onEdit",t.innerText),t.blur()}return{emitOnToggle:o,emitOnDelete:c,emitOnEdit:i}}});n("4475");y.render=k,y.__scopeId="data-v-66ed4304";var I=y,w={class:"sticky-top"},N={class:"navbar container"},L={class:"w-100"},x={class:"input-group"},S={ref:"input",type:"text",class:"form-control",placeholder:"Enter New Task...","aria-label":"New task field",autocomplete:"off"},A={class:"input-group-append"};function T(e,t,n,c,i,r){return Object(o["openBlock"])(),Object(o["createBlock"])("header",w,[Object(o["createVNode"])("nav",N,[Object(o["createVNode"])("form",L,[Object(o["createVNode"])("div",x,[Object(o["createVNode"])("input",S,null,512),Object(o["createVNode"])("div",A,[Object(o["createVNode"])("button",{class:"btn btn-primary",type:"submit",onClick:t[1]||(t[1]=Object(o["withModifiers"])((function(){return e.onAddItem&&e.onAddItem.apply(e,arguments)}),["prevent"]))}," Add ")])])])])])}var V=Object(o["defineComponent"])({emits:{onAddItem:function(e){var t=e.content;return""!==t||(alert("Please specify task!"),!1)}},setup:function(e,t){var n=t.emit,c=Object(o["ref"])();function i(){c.value.value="",c.value.focus()}function r(){n("onAddItem",c.value.value),i()}return{input:c,resetInput:i,onAddItem:r}}});n("bd19");V.render=T;var B=V,C=Object(o["defineComponent"])({name:"App",components:{ListItem:I,ItemInput:B,draggable:l.a},watch:{data:{handler:function(e){localStorage.itemList=JSON.stringify(e.itemList)},deep:!0}},setup:function(){var e=Object(o["reactive"])({itemList:[{id:0,content:"Unchecked Task",status:!1},{id:1,content:"Another Unchecked Task",status:!1},{id:2,content:"Checked Task",status:!0}]});function t(){var t=1;return e.itemList.length>0&&(t=e.itemList.reduce((function(e,t){return e.id>t.id?e:t})).id+1),t}function n(n){""!=n&&(e.itemList=[{id:t(),content:n,status:!1}].concat(Object(r["a"])(e.itemList)))}function c(t){e.itemList=e.itemList.map((function(e){return e.id===t&&(e.status=!e.status),e}))}function i(t){e.itemList=e.itemList.filter((function(e){return e.id!==t}))}function a(t,n){e.itemList.find((function(e){return e.id===n})).content=t}return Object(o["onMounted"])((function(){localStorage.itemList&&(e.itemList=JSON.parse(localStorage.itemList))})),{data:e,getNextItemId:t,addItem:n,toggleItemStatus:c,deleteItem:i,editItem:a}}});n("dcb1");C.render=i;var E=C,_=n("9483");Object(_["a"])("".concat("/REPO_NAME/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),Object(o["createApp"])(E).mount("#app")},dcb1:function(e,t,n){"use strict";n("2302")},e7e5:function(e,t,n){e.exports=n.p+"img/grip-vertical.78f00cda.svg"},f15c:function(e,t,n){e.exports=n.p+"img/check-circle.0b99c64a.svg"},f3d3:function(e,t,n){}});
//# sourceMappingURL=app.066cb0bf.js.map