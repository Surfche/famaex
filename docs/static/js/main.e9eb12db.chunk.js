(this.webpackJsonpfamaex=this.webpackJsonpfamaex||[]).push([[0],{11:function(e,t,a){},12:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(4),l=a.n(c),o=(a(11),function(){return r.a.createElement("header",{className:"header"},r.a.createElement("h1",{className:"header__h1"},"Informes"))}),u=a(1),s=a(5),i=a(2),m=Object(n.createContext)(),f=function(e){var t=Object(n.useState)([]),a=Object(i.a)(t,2),c=a[0],l=a[1];return Object(n.useEffect)((function(){fetch("https://5dfb6cf80301690014b8fb0a.mockapi.io/api/v1/reports").then((function(e){return e.json()})).then((function(e){return l(e)}))}),[]),r.a.createElement(m.Provider,{value:{articles:c}},e.children)},d=function(){var e=Object(n.useContext)(m).articles,t=Object(n.useState)({order:"id"}),a=Object(i.a)(t,2),c=a[0],l=a[1],o=function(){return"id"===c.order?e.sort((function(e,t){return new Date(e.createdAt)-new Date(t.createdAt)})):e.sort((function(e,t){return e.id-t.id}))};return r.a.createElement("div",{className:"articles"},e.map((function(e,t){return r.a.createElement("div",{key:e.id,className:"articles__".concat(t)},r.a.createElement("h2",{className:"articles__title"},e.name),r.a.createElement("p",{className:"articles__text"},e.Text))})),r.a.createElement("div",{className:"select",value:!0},r.a.createElement("select",{name:"order",onChange:function(e){l(Object(s.a)({},c,Object(u.a)({},e.target.name,e.target.value))),o()}},r.a.createElement("option",{value:"id"},"Ordenar por ID"),r.a.createElement("option",{value:"date"},"Ordenar por fecha"))))},E=function(){return r.a.createElement("footer",{className:"footer"},r.a.createElement("a",{href:"!#"},"Footer"),r.a.createElement("span",null," | "),r.a.createElement("a",{href:"!#"},"con"),r.a.createElement("span",null," | "),r.a.createElement("a",{href:"!#"},"Algunos"),r.a.createElement("span",null," | "),r.a.createElement("a",{href:"!#"},"Links"))};var h=function(){return r.a.createElement(f,null,r.a.createElement(o,null),r.a.createElement(d,null),r.a.createElement(E,null))};l.a.render(r.a.createElement(h,null),document.getElementById("root"))},6:function(e,t,a){e.exports=a(12)}},[[6,1,2]]]);
//# sourceMappingURL=main.e9eb12db.chunk.js.map