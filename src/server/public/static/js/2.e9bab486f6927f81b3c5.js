(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"+if1":function(t,e,n){"use strict";n.d(e,"a",function(){return a}),n.d(e,"b",function(){return i});var a=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"login-success"}},[e("van-icon",{attrs:{name:"success"}}),this._v(" "),e("p",[this._v("登录成功")]),this._v(" "),e("van-button",{attrs:{id:"backToHome",size:"large"},on:{click:this.backToHome}},[this._v("回到首页")])],1)},i=[]},0:function(t,e,n){t.exports=n("MDog")},"0nu6":function(t,e,n){"use strict";n.r(e);var a=n("Mg7r"),i=n.n(a);for(var s in a)"default"!==s&&function(t){n.d(e,t,function(){return a[t]})}(s);var o=n("lP92"),r=n("JFUb");var u=function(t){n("gilp")},c=Object(r.a)(i.a,o.a,o.b,!1,u,"data-v-37148740",null);e.default=c.exports},"2RbH":function(t,e,n){"use strict";n.r(e);var a=n("giVQ"),i=n.n(a);for(var s in a)"default"!==s&&function(t){n.d(e,t,function(){return a[t]})}(s);var o=n("+if1"),r=n("JFUb");var u=function(t){n("B65C")},c=Object(r.a)(i.a,o.a,o.b,!1,u,"data-v-6ecb59f7",null);e.default=c.exports},"2lLy":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"LoginSuccess",methods:{goToLogin:function(){this.$router.push({path:"/login"})}}}},"4EGB":function(t,e,n){"use strict";!function(t,e){var n=e.documentElement,a=t.devicePixelRatio||1;function i(){var t=n.clientWidth/10;n.style.fontSize=t+"px"}if(function t(){e.body?e.body.style.fontSize=12*a+"px":e.addEventListener("DOMContentLoaded",t)}(),i(),t.addEventListener("resize",i),t.addEventListener("pageshow",function(t){t.persisted&&i()}),a>=2){var s=e.createElement("body"),o=e.createElement("div");o.style.border=".5px solid transparent",s.appendChild(o),n.appendChild(s),1===o.offsetHeight&&n.classList.add("hairlines"),n.removeChild(s)}}(window,document)},"4oiO":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"AllMyNots",data:function(){return{listOfNotes:[]}},methods:{getAllNotes:function(){var t=this;this.axios.get("/api/listallnotes").then(function(e){console.log(e.data),t.listOfNotes=e.data})},onClickLight:function(){window.history.go(-1)}},created:function(){this.getAllNotes()}}},"7fvF":function(t,e,n){"use strict";n.d(e,"a",function(){return a}),n.d(e,"b",function(){return i});var a=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},i=[]},"9YyY":function(t,e,n){"use strict";n.d(e,"a",function(){return a}),n.d(e,"b",function(){return i});var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"register"}},[n("van-nav-bar",{attrs:{title:"注册","left-text":"返回","right-text":"登录","left-arrow":""},on:{"click-right":t.onClickRight}}),t._v(" "),n("van-cell-group",{staticClass:"cell-group"},[n("van-field",{attrs:{label:"用户名",placeholder:"请输入用户名",required:""},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}}),t._v(" "),n("van-field",{attrs:{label:"密码",type:"password",placeholder:"请输入密码",required:""},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),t._v(" "),n("van-button",{attrs:{id:"submit",size:"large"},on:{click:t.submit}},[t._v("注册")])],1)},i=[]},"9vCR":function(t,e,n){"use strict";n.d(e,"a",function(){return a}),n.d(e,"b",function(){return i});var a=function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("404")])},i=[]},B65C:function(t,e){},Bftn:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"LoginSuccess",methods:{seeMyNotes:function(){this.$router.push({path:"/allmynotes"})},goToHome:function(){this.$router.push({path:"/"})}}}},CNRE:function(t,e,n){"use strict";n.r(e);var a=n("wqCG"),i=n.n(a);for(var s in a)"default"!==s&&function(t){n.d(e,t,function(){return a[t]})}(s);var o=n("7fvF"),r=n("JFUb");var u=function(t){n("TEFr")},c=Object(r.a)(i.a,o.a,o.b,!1,u,null,null);e.default=c.exports},GJvR:function(t,e){},I4Dg:function(t,e,n){"use strict";n.r(e);var a=n("oJj8"),i=n.n(a);for(var s in a)"default"!==s&&function(t){n.d(e,t,function(){return a[t]})}(s);var o=n("9vCR"),r=n("JFUb");var u=function(t){n("pL8M")},c=Object(r.a)(i.a,o.a,o.b,!1,u,"data-v-14075a32",null);e.default=c.exports},IvlK:function(t,e,n){"use strict";n.d(e,"a",function(){return a}),n.d(e,"b",function(){return i});var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"all-my-notes"}},[n("van-nav-bar",{attrs:{title:"登录","left-text":"返回","left-arrow":""},on:{"click-left":t.onClickLight}}),t._v(" "),t._l(t.listOfNotes,function(e){return n("div",{attrs:{id:"panel-wrap"}},[n("van-panel",{staticClass:"panel",attrs:{title:e.date}},[n("div",{staticClass:"panel-content"},[t._v(t._s(e.content))])])],1)})],2)},i=[]},MDog:function(t,e,n){"use strict";var a=f(n("oCYn")),i=f(n("L2JU")),s=f(n("CNRE")),o=f(n("SEu5"));n("4EGB");var r=f(n("zOZW"));n("9d8Q"),n("hZCq");var u=f(n("vDqi")),c=f(n("p/7L")),l=f(n("Kyfw"));function f(t){return t&&t.__esModule?t:{default:t}}a.default.use(i.default),a.default.use(l.default),a.default.use(c.default,u.default),a.default.use(r.default),a.default.config.productionTip=!1,a.default.axios.interceptors.response.use(function(t){return t},function(t){if(t.response)switch(t.response.status){case 401:sessionStorage.isLogin=!1,d.commit("logout"),o.default.push({path:"/login",query:{redirect:o.default.currentRoute.fullPath}})}return Promise.reject(t.response.data)});var d=new i.default.Store({state:{isLogin:null},mutations:{logout:function(t){t.isLogin=!1},isLogin:function(t){t.isLogin=!0}}});new a.default({el:"#app",router:o.default,store:d,components:{App:s.default},template:"<App/>",created:function(){}})},Mg7r:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"Login",data:function(){return{username:"",password:""}},methods:{submit:function(){var t=this;this.axios({method:"post",url:"/user/login",data:{user:{username:this.username,password:this.password}}}).then(function(e){console.log(e);var n=e.data;if(n.userid){localStorage.isLogin=!0,t.$store.commit("isLogin"),sessionStorage.userid=n.userid,t.$router.push({path:"/"})}else alert(n.error)})},onClickRight:function(){this.$router.push({path:"/register"})},onClickLight:function(){window.history.go(-1)}}}},POfS:function(t,e){},SEu5:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=d(n("oCYn")),i=d(n("jE9Z")),s=d(n("rQwl")),o=d(n("nXPv")),r=d(n("0nu6")),u=(d(n("2RbH")),d(n("yJkN"))),c=d(n("qndQ")),l=d(n("hMor")),f=d(n("I4Dg"));function d(t){return t&&t.__esModule?t:{default:t}}a.default.use(i.default),e.default=new i.default({routes:[{path:"/",name:"Isinput",component:s.default},{path:"/register",name:"Register",component:o.default},{path:"/login",name:"Login",component:r.default},{path:"/submitsuccess",name:"SubmitSuccess",component:c.default,meta:{requiresAuth:!0}},{path:"/registersuccess",name:"RegisterSuccess",component:u.default,meta:{requiresAuth:!0}},{path:"/allmynotes",name:"AllMyNotes",component:l.default,meta:{requiresAuth:!0}},{path:"*",name:"PageNotFound",component:f.default}]})},TEFr:function(t,e){},TEKk:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"Register",data:function(){return{username:"",password:""}},methods:{submit:function(){var t=this;this.axios({method:"post",url:"/user/register",data:{user:{username:t.username,password:t.password}}}).then(function(e){console.log(e);var n=e.data;n.isRegister?t.$router.push({path:"/registersuccess"}):alert(n.error)})},onClickRight:function(){this.$router.push({path:"/login"})}}}},VbCC:function(t,e,n){"use strict";n.d(e,"a",function(){return a}),n.d(e,"b",function(){return i});var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"submit-success"}},[n("van-icon",{attrs:{name:"success"}}),t._v(" "),n("p",[t._v("提交成功")]),t._v(" "),n("van-button",{attrs:{id:"see-my-notes",size:"large"},on:{click:t.seeMyNotes}},[t._v("查看我的notes")]),t._v(" "),n("van-button",{attrs:{id:"go-to-home",size:"large"},on:{click:t.goToHome}},[t._v("再写一条note")])],1)},i=[]},giVQ:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"LoginSuccess",methods:{backToHome:function(){this.$router.push({path:"/"})}}}},gilp:function(t,e){},hMor:function(t,e,n){"use strict";n.r(e);var a=n("4oiO"),i=n.n(a);for(var s in a)"default"!==s&&function(t){n.d(e,t,function(){return a[t]})}(s);var o=n("IvlK"),r=n("JFUb");var u=function(t){n("y2+j")},c=Object(r.a)(i.a,o.a,o.b,!1,u,"data-v-4af2c2cc",null);e.default=c.exports},"k1r/":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"Isinput",data:function(){return{input:""}},methods:{isLogin:function(){var t=this;this.axios.get("/user/isLogin").then(function(e){var n=e.data;if(localStorage.isLogin=n.loginStatus,1==n.loginStatus)return t.$store.commit("isLogin");t.$store.commit("logout")})},logout:function(){var t=this;this.axios.get("/user/logout").then(function(e){var n=e.data;localStorage.isLogin=n.loginStatus,t.$store.commit("logout"),console.log(localStorage.isLogin)})},submit:function(){var t=this;this.axios({method:"post",url:"/api/submitpost",data:{content:t.input}}).then(function(e){console.log(1==e.data.status),e.data.status&&t.$router.push({path:"/SubmitSuccess"})})}},created:function(){this.isLogin()},computed:{login:function(){return this.$store.state.isLogin}}}},lP92:function(t,e,n){"use strict";n.d(e,"a",function(){return a}),n.d(e,"b",function(){return i});var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"login"}},[n("van-nav-bar",{attrs:{title:"登录","left-text":"返回","right-text":"注册","left-arrow":""},on:{"click-right":t.onClickRight,"click-left":t.onClickLight}}),t._v(" "),n("van-cell-group",{staticClass:"cell-group"},[n("van-field",{attrs:{label:"用户名",placeholder:"请输入用户名"},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}}),t._v(" "),n("van-field",{attrs:{label:"密码",type:"password",placeholder:"请输入密码"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),t._v(" "),n("van-button",{attrs:{id:"submit",size:"large"},on:{click:t.submit}},[t._v("登录")])],1)},i=[]},nXPv:function(t,e,n){"use strict";n.r(e);var a=n("TEKk"),i=n.n(a);for(var s in a)"default"!==s&&function(t){n.d(e,t,function(){return a[t]})}(s);var o=n("9YyY"),r=n("JFUb");var u=function(t){n("oYpv")},c=Object(r.a)(i.a,o.a,o.b,!1,u,"data-v-6d006945",null);e.default=c.exports},oJj8:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"404"}},oYpv:function(t,e){},pL8M:function(t,e){},qndQ:function(t,e,n){"use strict";n.r(e);var a=n("Bftn"),i=n.n(a);for(var s in a)"default"!==s&&function(t){n.d(e,t,function(){return a[t]})}(s);var o=n("VbCC"),r=n("JFUb");var u=function(t){n("POfS")},c=Object(r.a)(i.a,o.a,o.b,!1,u,"data-v-65a673fa",null);e.default=c.exports},rQwl:function(t,e,n){"use strict";n.r(e);var a=n("k1r/"),i=n.n(a);for(var s in a)"default"!==s&&function(t){n.d(e,t,function(){return a[t]})}(s);var o=n("sbG/"),r=n("JFUb");var u=function(t){n("uTN7")},c=Object(r.a)(i.a,o.a,o.b,!1,u,"data-v-400f1852",null);e.default=c.exports},"sbG/":function(t,e,n){"use strict";n.d(e,"a",function(){return a}),n.d(e,"b",function(){return i});var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"is-input"}},[n("h1",[t._v("notes")]),t._v(" "),n("div",{staticClass:"input-wrap"},[n("van-cell-group",[n("van-field",{attrs:{type:"textarea",placeholder:"请输入内容",rows:"4",autosize:""},model:{value:t.input,callback:function(e){t.input=e},expression:"input"}})],1),t._v(" "),n("van-button",{attrs:{id:"submit",size:"large"},on:{click:t.submit}},[t._v("提交")]),t._v(" "),n("div",{staticClass:"small-btn-wrap"},[n("router-link",{staticClass:"small-btn",attrs:{to:{name:"AllMyNotes"}}},[t._v("我的notes")])],1),t._v(" "),t.login?n("div",{staticClass:"user-btn-wrap"},[n("a",{staticClass:"small-btn",on:{click:t.logout}},[t._v("登出")])]):n("div",{staticClass:"user-btn-wrap"},[n("router-link",{staticClass:"small-btn",attrs:{to:{name:"Login"}}},[t._v("登录")]),t._v(" "),n("span",[t._v("|")]),t._v(" "),n("router-link",{staticClass:"small-btn",attrs:{to:{name:"Register"}}},[t._v("注册")])],1)],1)])},i=[]},uTN7:function(t,e){},uXpn:function(t,e,n){"use strict";n.d(e,"a",function(){return a}),n.d(e,"b",function(){return i});var a=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"register-success"}},[e("van-icon",{attrs:{name:"success"}}),this._v(" "),e("p",[this._v("注册成功")]),this._v(" "),e("van-button",{attrs:{id:"goToLogin",size:"large"},on:{click:this.goToLogin}},[this._v("前往登录")])],1)},i=[]},wqCG:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"App"}},"y2+j":function(t,e){},yJkN:function(t,e,n){"use strict";n.r(e);var a=n("2lLy"),i=n.n(a);for(var s in a)"default"!==s&&function(t){n.d(e,t,function(){return a[t]})}(s);var o=n("uXpn"),r=n("JFUb");var u=function(t){n("GJvR")},c=Object(r.a)(i.a,o.a,o.b,!1,u,"data-v-5a2f764c",null);e.default=c.exports}},[[0,0,1]]]);
//# sourceMappingURL=2.e9bab486f6927f81b3c5.js.map