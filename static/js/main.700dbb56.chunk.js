(this["webpackJsonpcrud-firestore"]=this["webpackJsonpcrud-firestore"]||[]).push([[0],{25:function(e,t,r){},29:function(e,t,r){"use strict";r.r(t);var a=r(6),n=r.n(a),c=r(19),s=r.n(c),o=(r(25),r(20)),i=r(7),u=r.n(i),l=r(14),d=r(11),b=r(12),f=r(16);r(30);f.a.initializeApp({apiKey:"AIzaSyBRiJFT3UyP9oOZqeKlFO19icMfLY-2XCQ",authDomain:"crud-firestore-f1a04.firebaseapp.com",databaseURL:"https://crud-firestore-f1a04-default-rtdb.firebaseio.com",projectId:"crud-firestore-f1a04",storageBucket:"crud-firestore-f1a04.appspot.com",messagingSenderId:"192188096017",appId:"1:192188096017:web:023b92b15853a37a0c1bb0"});var p=r(2);var j=function(){var e=n.a.useState([]),t=Object(b.a)(e,2),r=t[0],a=t[1],c=n.a.useState(""),s=Object(b.a)(c,2),i=s[0],j=s[1],m=n.a.useState(!1),h=Object(b.a)(m,2),x=h[0],v=h[1],O=n.a.useState(""),g=Object(b.a)(O,2),k=g[0],w=g[1];n.a.useEffect((function(){(function(){var e=Object(d.a)(u.a.mark((function e(){var t,r,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=f.a.firestore(),e.next=4,t.collection("tareas").get();case 4:r=e.sent,console.log(r.docs),n=r.docs.map((function(e){return Object(l.a)({id:e.id},e.data())})),console.log(n),a(n),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}})()()}),[]);var N=function(){var e=Object(d.a)(u.a.mark((function e(t){var n,c,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),i.trim()){e.next=4;break}return console.log("Vacio"),e.abrupt("return");case 4:return e.prev=4,n=f.a.firestore(),c={tarea:i,fecha:Date.now()},e.next=9,n.collection("tareas").add(c);case 9:s=e.sent,a([].concat(Object(o.a)(r),[Object(l.a)(Object(l.a)({},c),{},{id:s.id})])),j(""),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(4),console.log("error");case 17:case"end":return e.stop()}}),e,null,[[4,14]])})));return function(t){return e.apply(this,arguments)}}(),y=function(){var e=Object(d.a)(u.a.mark((function e(t){var n,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=f.a.firestore(),e.next=4,n.collection("tareas").doc(t).delete();case 4:c=r.filter((function(e){return e.id!==t})),a(c),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),S=function(){var e=Object(d.a)(u.a.mark((function e(t){var n,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),i.trim()){e.next=4;break}return console.log("Vacio"),e.abrupt("return");case 4:return e.prev=4,n=f.a.firestore(),e.next=8,n.collection("tareas").doc(k).update({tarea:i});case 8:c=r.map((function(e){return e.id===k?{id:e.id,fecha:e.fecha,tarea:i}:e})),a(c),v(!1),j(""),w(""),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(4),console.log(e.t0);case 18:case"end":return e.stop()}}),e,null,[[4,15]])})));return function(t){return e.apply(this,arguments)}}();return Object(p.jsxs)("div",{className:"container mt-3",children:[Object(p.jsxs)("div",{className:"row my-2",children:[Object(p.jsx)("h2",{children:"To do list :)"}),Object(p.jsx)("hr",{})]}),Object(p.jsxs)("div",{className:"row",children:[Object(p.jsxs)("div",{className:"col-md-6 mb-3 mb-md-0",children:[Object(p.jsx)("h3",{children:"Tareas"}),Object(p.jsx)("ul",{className:"list-group",children:r.map((function(e){return Object(p.jsxs)("li",{className:"list-group-item",children:[e.tarea,Object(p.jsx)("button",{className:"btn btn-warning btn-sm float-end mx-2",onClick:function(){return function(e){v(!0),j(e.tarea),w(e.id)}(e)},children:"Editar"}),Object(p.jsx)("button",{className:"btn btn-danger btn-sm float-end mx-2",onClick:function(){return y(e.id)},children:"Eliminar"})]},e.id)}))})]}),Object(p.jsxs)("div",{className:"col-md-6",children:[Object(p.jsx)("h3",{children:x?"Editar":"Agregar"}),Object(p.jsxs)("form",{action:"",onSubmit:x?S:N,children:[Object(p.jsx)("input",{type:"text",placeholder:"Ingrese la tarea",className:"form-control mb-2",onChange:function(e){return j(e.target.value)},value:i}),Object(p.jsx)("div",{className:"d-grid",children:x?Object(p.jsx)("button",{className:"btn btn-warning btn-block",type:"submit",children:"Editar"}):Object(p.jsx)("button",{className:"btn btn-dark btn-block",type:"submit",children:"Agregar"})})]})]})]})]})};s.a.render(Object(p.jsx)(n.a.StrictMode,{children:Object(p.jsx)(j,{})}),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.700dbb56.chunk.js.map