(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{36:function(t,e,n){},38:function(t,e,n){},39:function(t,e,n){},40:function(t,e,n){},41:function(t,e,n){},45:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n.n(c),r=n(9),o=n.n(r),i=n(5),s=n(6),u=n.n(s),l=n(3),b={addContact:Object(l.b)("contacts/Add",(function(t){var e=t.name,n=t.number;return{payload:{id:u.a.generate(),name:e,number:n}}})),onDeleteContact:Object(l.b)("contacts/Delete"),changeFilter:Object(l.b)("contacts/changeFilter")},j=(n(36),n(1)),d=function(t,e){var n=t.toLowerCase();return e.filter((function(t){return t.name.toLowerCase().includes(n)}))},O=Object(i.b)((function(t){var e=t.contacts,n=e.filter,c=e.contactItems;return{contacts:d(n,c)}}),(function(t){return{onDeleteContact:function(e){return t(b.onDeleteContact(e))}}}))((function(t){var e=t.contacts,n=t.onDeleteContact;return Object(j.jsx)("ul",{className:"ContactList",children:!!e.length&&e.map((function(t){var e=t.id,c=t.name,a=t.number;return Object(j.jsxs)("li",{className:"ContactList_Item",children:[Object(j.jsx)("p",{className:"ContactList_Name",children:c}),Object(j.jsx)("p",{children:a}),Object(j.jsx)("button",{onClick:function(){return n(e)},children:"Delete"})]},e)}))})})),f=(n(38),Object(i.b)((function(t){return{filter:t.contacts.filter}}),(function(t){return{changeFilter:function(e){return t(b.changeFilter(e.currentTarget.value))}}}))((function(t){var e=t.filter,n=t.changeFilter;return Object(j.jsxs)("label",{className:"Filter_Input",children:["Find contacts by name",Object(j.jsx)("input",{type:"text",value:e,onChange:n})]})}))),m=n(16);n(39);var h=Object(i.b)((function(t){return{contacts:t.contacts.contactItems}}),(function(t){return{onSubmit:function(e){return t(b.addContact(e))}}}))((function(t){var e=t.onSubmit,n=t.contacts,a=Object(c.useState)(""),r=Object(m.a)(a,2),o=r[0],i=r[1],s=Object(c.useState)(""),l=Object(m.a)(s,2),b=l[0],d=l[1],O=u.a.generate(),f=u.a.generate();return Object(j.jsxs)("form",{className:"ContactForm",onSubmit:function(t){t.preventDefault(),n.find((function(t){return t.name.toLowerCase()===o.toLowerCase()}))?alert("".concat(o," is already in contacts")):(e({name:o,number:b}),i(""),d(""))},children:[Object(j.jsxs)("label",{className:"ContactForm_Input",htmlFor:O,children:["\u0418\u043c\u044f",Object(j.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:o,onChange:function(t){i(t.currentTarget.value)},id:O})]}),Object(j.jsxs)("label",{className:"ContactForm_Input",htmlFor:f,children:["\u0422\u0435\u043b\u0435\u0444\u043e\u043d",Object(j.jsx)("input",{type:"text",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:b,onChange:function(t){d(t.currentTarget.value)},id:f})]}),Object(j.jsx)("button",{type:"submit",children:"Add contact"})]})}));n(40);var p,C=function(){return Object(j.jsxs)("div",{className:"AppRoot",children:[Object(j.jsx)("h1",{className:"AppTitle",children:"Phonebook"}),Object(j.jsx)(h,{}),Object(j.jsx)("h2",{className:"AppTitle",children:"Contacts"}),Object(j.jsx)(f,{}),Object(j.jsx)(O,{})]})},x=(n(41),n(11)),g=n(2),v=n(17),F=n.n(v),y=n(4),A=n(18),N=n.n(A),k=n(12),w=Object(l.c)([],(p={},Object(k.a)(p,b.addContact,(function(t,e){var n=e.payload;return[].concat(Object(x.a)(t),[n])})),Object(k.a)(p,b.onDeleteContact,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),p)),D=Object(l.c)("",Object(k.a)({},b.changeFilter,(function(t,e){return e.payload}))),L=Object(g.b)({contactItems:w,filter:D}),I={key:"ContactsList",storage:N.a,blacklist:["filter"]},S=Object(g.b)({contacts:Object(y.g)(I,L)}),T=[].concat(Object(x.a)(Object(l.d)({serializableCheck:{ignoredActions:[y.a,y.f,y.b,y.c,y.d,y.e]}})),[F.a]),z=Object(l.a)({reducer:S,middleware:T,devTools:!1}),_={store:z,persistor:Object(y.h)(z)},q=n(19);o.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(i.a,{store:_.store,children:Object(j.jsx)(q.a,{loading:null,persistor:_.persistor,children:Object(j.jsx)(C,{})})})}),document.querySelector("#root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.c81abde8.chunk.js.map