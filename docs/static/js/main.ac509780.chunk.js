(this.webpackJsonpdmt2=this.webpackJsonpdmt2||[]).push([[0],{37:function(e,t,n){e.exports=n(65)},47:function(e,t,n){},55:function(e,t,n){},56:function(e,t,n){},57:function(e,t,n){},58:function(e,t,n){},59:function(e,t,n){},60:function(e,t,n){},62:function(e,t,n){},63:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(16),l=n.n(c),i=n(4),u=n(10),o=n(3),s=(n(46),n(5)),m=n(70),d=n(69),h=(n(47),{returnButton:{name:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f",link:"/",icon:d.a},menuButtons:[{name:"\u0412\u0445\u043e\u0434",link:"/signin"},{name:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f",link:"/signup"},{name:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u043f\u0440\u0438\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435",link:"/adventure/create"},{name:"\u041c\u043e\u0438 \u043f\u0440\u0438\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f",link:"/adventure/list"},{name:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u043f\u0435\u0440\u0441\u043e\u043d\u0430\u0436\u0430",link:"/adventure/view/Djadame/character/create"},{name:"a_a char",link:"/adventure/view/Djadame/character/view/a_a"}]}),f=Object(i.b)(null,null)((function(e){var t=r.a.useState(!1),n=Object(o.a)(t,2),c=n[0],l=n[1],i=e.clientWindowResolution,s=i.width,d=i.height,f=s<d?.8*s:.8*d;Object(a.useEffect)((function(){document.getElementsByClassName("main-menu-container")[0].addEventListener("touchmove",(function(e){return e.preventDefault()}),!1)}),[]);var p=function(e,t){return e.map((function(n,a){var c=360/e.length;return r.a.createElement("div",{className:"main-menu__item",style:{transform:"rotate(".concat(a*c,"deg)"),width:t/2-6,height:t/3,marginLeft:-t/4+3}},r.a.createElement("div",{className:"main-menu-item-container",style:{transform:"rotate(-".concat(a*c,"deg)"),width:t/3.5,height:t/3.5}},r.a.createElement(u.b,{to:n.link,onClick:function(){l(!1)}},n.name)))}))};return r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,{onClickAway:function(){return l(!1)}},r.a.createElement("div",{className:c?"main-menu-container opened":"main-menu-container",onClick:c?function(){}:function(){return l(!c)},style:c?{width:f,height:f,maxHeight:f}:{}},c&&function(e){var t,n=e/4,a=e/5;return r.a.createElement("div",{className:"main-menu"},p(h.menuButtons,e),r.a.createElement("div",{className:"main-menu-item-container",style:{width:n,height:n}},r.a.createElement(u.b,{to:"/",onClick:function(){l(!1)}},null===(t=h.returnButton.icon)||void 0===t?void 0:t.call(null,{style:{width:a,height:a}}))))}(f))))})),p=n(18),E=n(13),v=n.n(E);n(49),n(51);v.a.initializeApp({apiKey:"AIzaSyCBJLGUwm3Gudef3OmMpTr4_kuAKojdHKI",authDomain:"dnd-master-tools.firebaseapp.com",databaseURL:"https://dnd-master-tools.firebaseio.com",projectId:"dnd-master-tools",storageBucket:"dnd-master-tools.appspot.com",messagingSenderId:"338033505662"});var g=v.a,b=(n(55),{name:"",description:"",image:"",playersList:[],dungeonMaster:"",charactersList:[],notes:[]}),O=Object(i.b)(null,null)((function(){var e=Object(a.useState)(""),t=Object(o.a)(e,2),n=t[0],c=t[1],l=Object(a.useState)([""]),i=Object(o.a)(l,2),u=i[0],m=i[1],d=Object(s.e)(),h=[];return r.a.createElement("div",{className:"adventure-create"},r.a.createElement("span",null,"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043f\u0440\u0438\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f*"),r.a.createElement("input",{onChange:function(e){return b.name=e.target.value}}),r.a.createElement("span",null,"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u043f\u0440\u0438\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f"),r.a.createElement("textarea",{onChange:function(e){return b.description=e.target.value}}),r.a.createElement("span",null,"\u041a\u0430\u0440\u0442\u0438\u043d\u043a\u0430 \u043f\u0440\u0438\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f"),r.a.createElement("input",{placeholder:"url",onChange:function(e){return b.image=e.target.value}}),r.a.createElement("span",null,"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0438\u0433\u0440\u043e\u043a\u0430"),r.a.createElement("div",null,r.a.createElement("input",{placeholder:"email",value:n,onChange:function(e){c(e.target.value)}}),r.a.createElement("button",{onClick:function(){b.playersList.push(n),c("")}},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c")),r.a.createElement("h4",null,"\u0418\u0433\u0440\u043e\u043a\u0438*:"),b.playersList.map((function(e){return r.a.createElement("span",null,e)})),r.a.createElement("h4",null,"Dungeon Master*:"),b.playersList[0],r.a.createElement("button",{onClick:function(){var e;0===b.name.length&&h.push("Adventure name should not be empty"),0===b.playersList.length&&h.push("Players list should not be empty"),m(h),console.log("[currentErrors]:",h),0===h.length&&(b.dungeonMaster=b.playersList[0],(e=b,v.a.firestore().collection("adventures").doc(e.name).set(Object(p.a)({},e))).then((function(e){return console.log("[AdventureCreate response]:",e)})),d.push("/adventure/list"))}},"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u043f\u0440\u0438\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435"),r.a.createElement("span",null,"Errors:"),u.map((function(e){return r.a.createElement("span",null,e)})))})),j=(n(56),Object(i.b)(null,null)((function(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),n=t[0],c=t[1];return v.a.firestore().collection("adventures").get().then((function(e){return e.docs.map((function(e){return e.data()}))})).then((function(e){c(e)})),Object(a.useEffect)((function(){})),r.a.createElement("div",{className:"adventure-list"},"Advenure List here",n.map((function(e){return r.a.createElement(u.b,{to:"view/".concat(e.name)},e.name)})))}))),w=(n(57),Object(i.b)(null,null)((function(e){var t=e.match.params.id,n=Object(s.e)();return r.a.createElement("div",{className:"adventure-view"},r.a.createElement("span",null,"Adventure id ",t),r.a.createElement(u.b,{to:"".concat(t,"/character/view/a_a")},"a_a"),r.a.createElement("button",{onClick:function(){return n.push("/adventure/view/".concat(t,"/character/create"))}},"Create character"))}))),C=(n(58),Object(i.b)(null,null)((function(e){var t=Object(a.useState)(!0),n=Object(o.a)(t,2),c=n[0],l=n[1];return Object(a.useEffect)((function(){console.log("[CharacterCreate WORKS!!!]",null)}),[c]),r.a.createElement("div",{className:"character-create"},r.a.createElement("button",{onClick:function(){return l(!c)}},"CharacterCreate WORKS!!!"))}))),S=(n(59),Object(i.b)(null,null)((function(e){var t=Object(a.useState)(!0),n=Object(o.a)(t,2),c=n[0],l=n[1],i=Object(a.useState)(),u=Object(o.a)(i,2),s=u[0],m=u[1],d=e.match.params.id;return Object(a.useEffect)((function(){var e;(e=d,v.a.firestore().collection("playerCharacters").doc(e).get().then((function(e){return e.data()}))).then((function(e){return m(e)})),console.log("[characterData]",null),console.log("[CharacterView WORKS!!!]",null)}),[d]),r.a.createElement("div",{className:"character-view"},r.a.createElement("button",{onClick:function(){return l(!c)}},"CharacterView WORKS!!!"),r.a.createElement("div",null,"THIS CHARACTER IS ",r.a.createElement("b",null,d)),r.a.createElement("pre",null,JSON.stringify(s,null,2)))}))),y=(n(60),n(33)),A=n.n(y),_={SET_USER:"SET_USER"},k=_,R=function(e){return function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return{type:e,payload:t}}(k.SET_USER,e)},N=function(e){return function(t){var n;return A.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:n={email:e.email},t(R(n));case 2:case"end":return a.stop()}}))}},T=Object(i.b)((function(e){return{userData:e.userData}}),{setUser:N})((function(e){var t=Object(a.useState)(""),n=Object(o.a)(t,2),c=n[0],l=n[1],i=document.getElementsByTagName("body")[0].clientWidth,u=document.getElementsByTagName("body")[0].clientHeight;return Object(a.useEffect)((function(){e.setUser({email:c})}),[c]),g.auth().onAuthStateChanged((function(){var e;l((null===(e=g.auth().currentUser)||void 0===e?void 0:e.email)||"")})),r.a.createElement("div",{className:"home"},r.a.createElement("h1",null,"Current user - [",c,"]"),r.a.createElement("button",{onClick:function(){return alert(e.userData.email)}},"Alert user data email from store"),r.a.createElement("button",{onClick:function(){return g.auth().signOut()}},"Sign out"),r.a.createElement("button",{onClick:function(){return alert(i)}},"Show client width"),r.a.createElement("button",{onClick:function(){return alert(u)}},"Show client height"))})),U=(n(62),Object(i.b)(null,{setUser:N})((function(e){var t=Object(a.useState)(""),n=Object(o.a)(t,2),c=n[0],l=n[1],i=Object(a.useState)(""),u=Object(o.a)(i,2),m=u[0],d=u[1],h=Object(a.useState)([]),f=Object(o.a)(h,2),p=f[0],E=f[1],g=Object(s.e)();return r.a.createElement("div",{className:"sign-in"},r.a.createElement("span",null,"E-mail"),r.a.createElement("input",{value:c,onChange:function(e){var t=e.target.value;l(t)}}),r.a.createElement("span",null,"Password"),r.a.createElement("input",{type:"password",value:m,onChange:function(e){var t=e.target.value;d(t)}}),p.map((function(e){return r.a.createElement("span",null,e)})),r.a.createElement("button",{onClick:function(){0===p.length&&function(e,t){return v.a.auth().signInWithEmailAndPassword(e,t).catch((function(e){return e}))}(c,m).then((function(t){if(t.message&&E([t.message]),t.user){var n={email:t.user.email};E(["User successfully signed in"]),e.setUser(n),g.push("/")}}))}},"Sign Up"))}))),P=(n(63),Object(i.b)(null,{setUser:N})((function(e){var t=Object(a.useState)(""),n=Object(o.a)(t,2),c=n[0],l=n[1],i=Object(a.useState)(""),u=Object(o.a)(i,2),m=u[0],d=u[1],h=Object(a.useState)([]),f=Object(o.a)(h,2),p=f[0],E=f[1],g=Object(s.e)();return Object(a.useEffect)((function(){!function(){var e=[];/\S+@\S+\.\S+/.test(String(c).toLowerCase())||e.push("The email address is badly formatted."),m.length<6&&e.push("Password should be at least 6 characters."),E(e),console.log("[validationErrors]:",e)}()}),[c,m]),r.a.createElement("div",{className:"sign-up"},r.a.createElement("span",null,"E-mail"),r.a.createElement("input",{value:c,onChange:function(e){var t=e.target.value;l(t)}}),r.a.createElement("span",null,"Password"),r.a.createElement("input",{type:"password",value:m,onChange:function(e){var t=e.target.value;d(t)}}),p.map((function(e){return r.a.createElement("span",null,e)})),r.a.createElement("button",{onClick:function(){0===p.length&&function(e,t){return v.a.auth().createUserWithEmailAndPassword(e,t).catch((function(e){return e}))}(c,m).then((function(t){if(t.message&&E([t.message]),t.user){var n={email:t.user.email};E(["User successfully created and signed in"]),e.setUser(n),g.push("/")}}))}},"Sign Up"))}))),D=function(){var e=Object(a.useState)({width:0,height:0}),t=Object(o.a)(e,2),n=t[0],c=t[1],l=function(){var e=document.getElementsByTagName("body")[0];c({width:e.clientWidth,height:e.clientHeight})};Object(a.useEffect)((function(){return window.onresize=l,l(),function(){window.onresize=null}}),[]);var i={display:"flex",flexDirection:"column",width:n.width,minWidth:n.width,maxWidth:n.width,height:n.height,minHeight:n.height,maxHeight:n.height,border:"1px solid red",overflow:"auto"},u={display:"flex",flexDirection:"column",width:n.width,minWidth:n.width,maxWidth:n.width,height:n.height-42,minHeight:n.height-42,maxHeight:n.height-42,overflow:"auto"};return r.a.createElement("div",{style:i},r.a.createElement("div",{style:u},r.a.createElement(s.a,{exact:!0,path:"/",component:T}),r.a.createElement(s.a,{path:"/signin",component:U}),r.a.createElement(s.a,{path:"/signup",component:P}),r.a.createElement(s.a,{path:"/adventure/create",component:O}),r.a.createElement(s.a,{path:"/adventure/list",component:j}),r.a.createElement(s.a,{exact:!0,path:"/adventure/view/:id",component:w}),r.a.createElement(s.a,{path:"/adventure/view/:id/character/create",component:C}),r.a.createElement(s.a,{path:"/adventure/view/:id/character/view/:id",component:S})),r.a.createElement(f,{clientWindowResolution:n}))},L=(n(64),n(14)),I=n(34),x=n(35),B=n.n(x),W=n(36),H={email:""},K=Object(L.combineReducers)({userData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0,n=_.SET_USER;return t.type===n?Object(p.a)({},t.payload):e}}),M=[W.a],G=Object({NODE_ENV:"production",PUBLIC_URL:"/dmt2",REACT_APP_API_KEY:"AIzaSyCBJLGUwm3Gudef3OmMpTr4_kuAKojdHKI",REACT_APP_AUTH_DOMAIN:"dnd-master-tools.firebaseapp.com",REACT_APP_DATABASE_URL:"https://dnd-master-tools.firebaseio.com",REACT_APP_MESSAGING_SENDER_ID:"338033505662",REACT_APP_PROJECT_ID:"dnd-master-tools",REACT_APP_STORAGE_BUCKET:"dnd-master-tools.appspot.com"}).REACT_APP_NODE_ENV;G&&"development"===G&&M.push(B.a);var J=Object(L.createStore)(K,{},Object(I.composeWithDevTools)(L.applyMiddleware.apply(void 0,M)));l.a.render(r.a.createElement((function(){return r.a.createElement(i.a,{store:J},r.a.createElement(u.a,{basename:"/dmt2"},r.a.createElement(D,null)))}),null),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.ac509780.chunk.js.map