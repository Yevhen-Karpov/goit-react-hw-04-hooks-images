(this["webpackJsonpgoit-react-hw-04-hooks-images"]=this["webpackJsonpgoit-react-hw-04-hooks-images"]||[]).push([[0],{18:function(e,t,a){e.exports={gallery:"ImageGallery_gallery__1V0X6",text:"ImageGallery_text__1sVlK"}},25:function(e,t,a){e.exports={overlay:"Modal_overlay__yYiMi",modal:"Modal_modal__1FwAK"}},26:function(e,t,a){e.exports={imageGalleryItem:"ImageGalleryItem_imageGalleryItem__10MoT",imageGalleryItemImage:"ImageGalleryItem_imageGalleryItemImage__1ib1z"}},38:function(e,t,a){e.exports={button:"Button_button__C52rx"}},39:function(e,t,a){e.exports={app:"App_app__1bTDA"}},76:function(e,t,a){},77:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(4),o=a.n(c),s=a(3),i=a(17),l=a(16),u=(a(44),a(8)),b=a.n(u),j=a(1);function m(e){var t=e.onSubmit,a=Object(r.useState)(""),n=Object(s.a)(a,2),c=n[0],o=n[1];return Object(j.jsx)("header",{className:b.a.searchbar,children:Object(j.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),""===c.trim())return i.b.error("\u041f\u043e\u043b\u0435 \u043d\u0435 \u0434\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u043f\u0443\u0441\u0442\u044b\u043c");t(c),o("")},className:b.a.form,children:[Object(j.jsx)("button",{type:"submit",className:b.a.button,children:Object(j.jsx)(l.a,{})}),Object(j.jsx)("input",{className:b.a.input,type:"text",name:"text",value:c,onChange:function(e){o(e.currentTarget.value.toLowerCase())},autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"})]})})}var p=a(5),d=a.n(p),f=a(19),h=a(7),x=a(15),O=a(25),v=a.n(O),g=document.querySelector("#modal-root");function _(e){var t=e.src,a=e.alt,n=e.onClose;Object(r.useEffect)((function(){return window.addEventListener("keydown",o),function(){window.removeEventListener("keydown",o)}}));var o=function(e){"Escape"===e.code&&n()};return Object(c.createPortal)(Object(j.jsx)("div",{className:v.a.overlay,onClick:function(e){e.currentTarget===e.target&&n()},children:Object(j.jsx)("div",{className:v.a.modal,children:Object(j.jsx)("img",{src:t,alt:a,width:960})})}),g)}var y=a(26),w=a.n(y);function S(e){var t=e.card,a=Object(r.useState)(!1),n=Object(s.a)(a,2),c=n[0],o=n[1],i=function(){o(!c)};return Object(j.jsxs)("li",{className:w.a.imageGalleryItem,children:[Object(j.jsx)("img",{onClick:i,src:t.webformatURL,alt:t.tags,className:w.a.imageGalleryItemImage}),c&&Object(j.jsx)(_,{onClose:i,src:t.largeImageURL,alt:t.tags})]},t.id)}function k(){return Object(j.jsxs)("div",{role:"alert",children:[Object(j.jsx)(l.b,{size:"32"}),"\u0417\u0430\u0433\u0440\u0443\u0436\u0430\u0435\u043c..."]})}var I=a(38),N=a.n(I);function C(e){var t=e.onClick;return Object(j.jsx)("button",{type:"button",className:N.a.button,onClick:function(){t(),x.animateScroll.scrollToBottom()},children:"Load more"})}var G=a(57),L="https://pixabay.com/api",E="23964778-a3e050be7e1391d793e3046e4";function A(){return(A=Object(h.a)(d.a.mark((function e(t,a){var r,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,G.get("".concat(L,"/?q=").concat(t,"&page=").concat(a,"&key=").concat(E,"&image_type=photo&orientation=horizontal&per_page=12"));case 3:return r=e.sent,n=r.data,e.abrupt("return",n);case 8:e.prev=8,e.t0=e.catch(0),console.error("\u041d\u0435\u0442 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u043e\u0432 \u043f\u043e\u0438\u0441\u043a\u0430 \u043f\u043e \u0434\u0430\u043d\u043d\u043e\u043c\u0443 \u0437\u0430\u043f\u0440\u043e\u0441\u0443");case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}var M={fetchApi:function(e,t){return A.apply(this,arguments)}},T=M,B=a(18),D=a.n(B);function F(e){var t=e.text,a=Object(r.useState)([]),n=Object(s.a)(a,2),c=n[0],o=n[1],i=Object(r.useState)("idle"),l=Object(s.a)(i,2),u=l[0],b=l[1],m=Object(r.useState)(1),p=Object(s.a)(m,2),O=p[0],v=p[1];Object(r.useEffect)((function(){t&&(v(1),o([]),b("pending"),g(),x.animateScroll.scrollToBottom())}),[t]);var g=function(){var e=Object(h.a)(d.a.mark((function e(){var a,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,T.fetchApi(t);case 3:a=e.sent,r=a.hits,o(Object(f.a)(r)),b("resolved"),v((function(e){return e+1})),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),b("rejected");case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}(),_=function(){var e=Object(h.a)(d.a.mark((function e(){var a,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,T.fetchApi(t,O);case 3:a=e.sent,r=a.hits,o([].concat(Object(f.a)(c),Object(f.a)(r))),b("resolved"),v((function(e){return e+1})),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),b("rejected");case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();return Object(j.jsxs)(j.Fragment,{children:["idle"===u&&Object(j.jsx)("p",{className:D.a.text,children:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u043b\u043e\u0432\u043e, \u0447\u0442\u043e\u0431\u044b \u043d\u0430\u0447\u0430\u0442\u044c \u043f\u043e\u0438\u0441\u043a."}),"pending"===u&&Object(j.jsx)(k,{}),!c.length&&"resolved"===u&&Object(j.jsx)("p",{className:D.a.text,children:"\u041d\u0435\u0442 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u043e\u0432 \u043f\u043e\u0438\u0441\u043a\u0430 \u043f\u043e \u0434\u0430\u043d\u043d\u043e\u043c\u0443 \u0437\u0430\u043f\u0440\u043e\u0441\u0443."}),0!==c.length&&"resolved"===u&&Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("ul",{className:D.a.gallery,children:c.map((function(e){return Object(j.jsx)(S,{card:e},e.id)}))}),Object(j.jsx)(C,{onClick:_})]})]})}function z(){var e=Object(r.useState)(""),t=Object(s.a)(e,2),a=t[0],n=t[1];return Object(j.jsxs)("div",{children:[Object(j.jsx)(m,{onSubmit:function(e){n(e)}}),Object(j.jsx)(F,{text:a}),Object(j.jsx)(i.a,{})]})}var q=a(39),J=a.n(q);a(76);o.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(z,{className:J.a.app})}),document.getElementById("root"))},8:function(e,t,a){e.exports={searchbar:"Searchbar_searchbar__3PEtc",form:"Searchbar_form__1QDQn",button:"Searchbar_button__11cep",buttonLabel:"Searchbar_buttonLabel__3g2YD",input:"Searchbar_input__2Z_WM"}}},[[77,1,2]]]);
//# sourceMappingURL=main.3e1f648b.chunk.js.map