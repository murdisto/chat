(function(e){function s(s){for(var n,a,i=s[0],u=s[1],c=s[2],m=0,f=[];m<i.length;m++)a=i[m],r[a]&&f.push(r[a][0]),r[a]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);l&&l(s);while(f.length)f.shift()();return o.push.apply(o,c||[]),t()}function t(){for(var e,s=0;s<o.length;s++){for(var t=o[s],n=!0,i=1;i<t.length;i++){var u=t[i];0!==r[u]&&(n=!1)}n&&(o.splice(s--,1),e=a(a.s=t[0]))}return e}var n={},r={app:0},o=[];function a(s){if(n[s])return n[s].exports;var t=n[s]={i:s,l:!1,exports:{}};return e[s].call(t.exports,t,t.exports,a),t.l=!0,t.exports}a.m=e,a.c=n,a.d=function(e,s,t){a.o(e,s)||Object.defineProperty(e,s,{enumerable:!0,get:t})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,s){if(1&s&&(e=a(e)),8&s)return e;if(4&s&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(a.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&s&&"string"!=typeof e)for(var n in e)a.d(t,n,function(s){return e[s]}.bind(null,n));return t},a.n=function(e){var s=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(s,"a",s),s},a.o=function(e,s){return Object.prototype.hasOwnProperty.call(e,s)},a.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=s,i=i.slice();for(var c=0;c<i.length;c++)s(i[c]);var l=u;o.push([0,"chunk-vendors"]),t()})({0:function(e,s,t){e.exports=t("56d7")},1:function(e,s){},"56d7":function(e,s,t){"use strict";t.r(s);var n=t("2b0e"),r=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{attrs:{id:"app"}},[t("header",[t("h1",[e._v("Chat Room")]),t("p",{staticClass:"username"},[e._v("Username: "+e._s(e.username))]),t("p",{staticClass:"online"},[e._v("Online: "+e._s(e.users.length))])]),t("main",[t("ChatRoom",{attrs:{messages:e.messages},on:{sendMessage:this.sendMessage}})],1)])},o=[],a=t("8055"),i=t.n(a),u=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("section",{staticClass:"chat-window"},[t("div",{staticClass:"messages"},e._l(e.messages,function(s){return t("div",{key:s.index,staticClass:"message"},[t("div",{staticClass:"username"},[e._v(e._s(s.username)+":")]),t("br"),t("div",{staticClass:"message-text"},[e._v(e._s(s.msg))])])}),0),t("form",{staticClass:"input-container",on:{submit:e.sendMessage}},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.msg,expression:"msg"}],attrs:{type:"text"},domProps:{value:e.msg},on:{input:function(s){s.target.composing||(e.msg=s.target.value)}}}),t("button",{attrs:{disabled:!e.msg},on:{click:e.sendMessage}},[e._v("Send >")])])])},c=[],l={name:"chatroom",props:["messages"],data:function(){return{msg:""}},methods:{sendMessage:function(){this.msg?(this.$emit("sendMessage",this.msg),this.msg=""):alert("Please enter a message")}}},m=l,f=(t("c804"),t("2877")),p=Object(f["a"])(m,u,c,!1,null,"379984b5",null),d=p.exports,g={name:"app",components:{ChatRoom:d},data:function(){return{username:"",socket:i()("http://localhost:3000"),messages:[],users:[]}},methods:{joinServer:function(){var e=this;this.socket.on("loggedIn",function(s){e.messages=s.messages,e.users=s.users,e.socket.emit("newuser",e.username)}),this.listen()},listen:function(){var e=this;this.socket.on("userOnline",function(s){e.users.push(s)}),this.socket.on("userLeft",function(s){e.users.splice(e.users.indexOf(s),1)}),this.socket.on("msg",function(s){e.messages.push(s)})},sendMessage:function(e){this.socket.emit("msg",e)}},mounted:function(){this.username=prompt("What is your name?","Anonymous"),!this.username&&(this.username="Anonymous"),this.joinServer()}},h=g,v=(t("5c0b"),Object(f["a"])(h,r,o,!1,null,null,null)),b=v.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(e){return e(b)}}).$mount("#app")},"5c0b":function(e,s,t){"use strict";var n=t("5e27"),r=t.n(n);r.a},"5e27":function(e,s,t){},8234:function(e,s,t){},c804:function(e,s,t){"use strict";var n=t("8234"),r=t.n(n);r.a}});
//# sourceMappingURL=app.1a28953f.js.map