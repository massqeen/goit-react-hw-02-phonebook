(this.webpackJsonpreactstudying=this.webpackJsonpreactstudying||[]).push([[0],{12:function(t,e,n){t.exports={indigo:"#a8c3e6","indigo-accent":"#669fe8",red:"#f44336","red-accent":"#d32f2f",green:"#4caf50",black:"#2a2a2a",white:"#fff",LH:"16px",editor:"ContactEditor_editor__3C2Pj",input:"ContactEditor_input__2cglR",button:"ContactEditor_button__nUcJ0 _extensions_buttons__36DHQ"}},17:function(t,e,n){t.exports={Container:"Container_Container__1Og4m"}},18:function(t,e,n){t.exports={list:"ContactList_list__3Um4W _extensions_lists__Mp17V"}},21:function(t){t.exports=JSON.parse('[{"id":"id-1","name":"Rosie Simpson","number":"459-12-56"},{"id":"id-2","name":"Hermione Kline","number":"443-89-12"},{"id":"id-3","name":"Eden Clements","number":"645-17-79"},{"id":"id-4","name":"Annie Copeland","number":"227-91-26"}]')},25:function(t,e,n){t.exports=n(42)},30:function(t,e,n){},42:function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),r=n(15),i=n.n(r),c=(n(30),n(23)),s=n(8),l=n(9),u=n(11),m=n(10),d=n(16),f=n.n(d),h=n(17),b=n.n(h),v=function(t){var e=t.children;return o.a.createElement("div",{className:b.a.Container},e)},g=n(18),p=n.n(g),C=n(5),_=n.n(C),E=function(t){var e=t.name,n=t.number,a=t.id,r=void 0===a?"":a,i=t.onDeleteContact;return o.a.createElement("li",{className:_.a.item},o.a.createElement("p",{className:_.a.text},e,": "),o.a.createElement("p",{className:_.a.text},n),o.a.createElement("button",{type:"button",className:_.a.btn,onClick:function(){return i(r)}},"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"))},w=function(t){var e=t.contacts,n=void 0===e?[]:e,a=t.onDeleteContact;return o.a.createElement("ul",{className:p.a.list},n.map((function(t){var e=t.id,n=t.name,r=t.number;return o.a.createElement(E,{key:e,name:n,number:r,onDeleteContact:a,id:e})})))},y=n(19),S=n(12),k=n.n(S),x=n(24),O=(n(39),n(22));var j=function(t){var e=t.submitted,n=t.onChange,r=Object(a.useState)("+380"),i=Object(x.a)(r,2),c=i[0],s=i[1];return Object(a.useEffect)((function(){e&&s("+380")})),o.a.createElement(O.a,{placeholder:"Enter phone number",country:"UA",value:c,onChange:function(t){n(t),s(t)},style:{marginBottom:"10px"}})},N=function(t){Object(u.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))).state={name:"",number:"",submitted:!1},t.handleChange=function(e){var n=e.target,a=n.name,o=n.value;return t.setState(Object(y.a)({},a,o))},t.handleChangePhone=function(e){return t.setState({number:e})},t.handleSubmit=function(e){e.preventDefault();var n=t.state,a=n.name,o=n.number;t.props.onSubmit(a,o),t.setState({name:"",number:"",submitted:!0}),t.resetSubmitted()},t}return Object(l.a)(n,[{key:"resetSubmitted",value:function(){var t=this;setTimeout((function(){return t.setState({submitted:!1})}),1e3)}},{key:"render",value:function(){var t=this.state.submitted;return o.a.createElement("form",{className:k.a.editor,onSubmit:this.handleSubmit},o.a.createElement("input",{type:"text",className:k.a.input,value:this.state.name,onChange:this.handleChange,placeholder:"\u0418\u043c\u044f \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0430",name:"name",minLength:"2",required:!0}),o.a.createElement(j,{submitted:t,onChange:this.handleChangePhone}),o.a.createElement("button",{type:"submit",className:k.a.button},"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"))}}]),n}(a.Component),A=function(t){var e=t.value,n=void 0===e?"":e,a=t.onChange;return o.a.createElement("label",null,"\u0424\u0438\u043b\u044c\u0442\u0440 \u043f\u043e \u0438\u043c\u0435\u043d\u0438:",o.a.createElement("input",{type:"text",value:n,onChange:a,style:{marginLeft:"1em",marginBottom:"1em"}}))},D=n(21),W=function(t){var e=t.totalContacts,n=void 0===e?0:e,a=t.visibleContacts,r=void 0===a?0:a;return o.a.createElement("div",null,o.a.createElement("p",null,"\u0412\u0441\u0435\u0433\u043e \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u043e\u0432: ",n),o.a.createElement("p",null,"\u041f\u043e\u043a\u0430\u0437\u0430\u043d\u043e \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u043e\u0432: ",r))},L=function(t){Object(u.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))).state={contacts:D,filter:""},t.addContact=function(e,n){var a={id:f.a.generate(),name:e,number:n};t.isContact(e)?alert("".concat(e," is already in contacts")):t.setState((function(t){var e=t.contacts;return{contacts:[a].concat(Object(c.a)(e))}}))},t.deleteContact=function(e){return t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.changeFilter=function(e){return t.setState({filter:e.currentTarget.value})},t.getVisibleContacts=function(){var e=t.state,n=e.filter,a=e.contacts,o=n.toLowerCase();return a.filter((function(t){return t.name.toLowerCase().includes(o)}))},t}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("contacts");t&&this.setState({contacts:JSON.parse(t)})}},{key:"isContact",value:function(t){return this.state.contacts.filter((function(e){return e.name===t})).length>0}},{key:"componentDidUpdate",value:function(t,e,n){e.contacts!==this.state.contacts&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){var t=this.state,e=t.contacts,n=t.filter,a=this.getVisibleContacts(),r=e.length,i=a.length;return o.a.createElement(v,null,o.a.createElement("h1",null,"\u0422\u0435\u043b\u0435\u0444\u043e\u043d\u043d\u0430\u044f \u043a\u043d\u0438\u0433\u0430"),o.a.createElement(W,{totalContacts:r,visibleContacts:i}),o.a.createElement(N,{onSubmit:this.addContact}),i>0&&o.a.createElement(A,{value:n,onChange:this.changeFilter}),o.a.createElement(w,{contacts:a,onDeleteContact:this.deleteContact}))}}]),n}(a.Component),U=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function I(t,e){navigator.serviceWorker.register(t).then((function(t){t.onupdatefound=function(){var n=t.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),e&&e.onUpdate&&e.onUpdate(t)):(console.log("Content is cached for offline use."),e&&e.onSuccess&&e.onSuccess(t)))})}})).catch((function(t){console.error("Error during service worker registration:",t)}))}i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(L,null)),document.getElementById("root")),function(t){if("serviceWorker"in navigator){if(new URL("/goit-react-hw-02-phonebook",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/goit-react-hw-02-phonebook","/service-worker.js");U?(!function(t,e){fetch(t,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(t){t.unregister().then((function(){window.location.reload()}))})):I(t,e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e,t),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):I(e,t)}))}}()},5:function(t,e,n){t.exports={indigo:"#a8c3e6","indigo-accent":"#669fe8",red:"#f44336","red-accent":"#d32f2f",green:"#4caf50",black:"#2a2a2a",white:"#fff",item:"ContactItem_item__1wF2P",text:"ContactItem_text__3EbOA",btn:"ContactItem_btn__1xweq _extensions_buttons__36DHQ"}}},[[25,1,2]]]);
//# sourceMappingURL=main.ac231a01.chunk.js.map