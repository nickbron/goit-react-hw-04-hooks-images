(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{38:function(e,t,n){},84:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(6),c=n.n(o),i=(n(38),n(7)),s=n.n(i),p=n(12),l=n(8),u=n(11),d=(n(40),n(3));var b=Object(d.a)("header",{target:"e1khanco4"})({name:"geu48e",styles:"top:0;left:0;position:sticky;z-index:1100;display:flex;justify-content:center;align-items:center;padding-right:24px;padding-left:24px;padding-top:12px;padding-bottom:12px;color:#fff;background-color:#3f51b5;box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0, 0, 0, 0.12)"}),f=Object(d.a)("form",{target:"e1khanco3"})({name:"1rcv33n",styles:"display:flex;align-items:center;max-width:600px;background-color:#fff;border-radius:3px;overflow:hidden"}),g=Object(d.a)("button",{target:"e1khanco2"})({name:"1a3m8tj",styles:"display:inline-block;width:48px;height:48px;border:0;background-image:url('https://image.flaticon.com/icons/svg/149/149852.svg');background-size:40%;background-repeat:no-repeat;background-position:center;opacity:0.6;transition:opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);cursor:pointer;outline:none;&:hover{opacity:1;}"}),m=Object(d.a)("span",{target:"e1khanco1"})({name:"jnnlmv",styles:"position:absolute;width:1px;height:1px;padding:0;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;clip-path:inset(50%);border:0"}),x=Object(d.a)("input",{target:"e1khanco0"})({name:"g6sr3k",styles:"display:inline-block;width:100%;font:inherit;font-size:20px;border:none;outline:none;padding-left:4px;padding-right:4px;&::placeholder{font:inherit;font-size:18px;}"}),h=n(1),j=function(e){var t=e.onSearch;return Object(h.jsx)(b,{children:Object(h.jsxs)(f,{onSubmit:function(e){e.preventDefault(),""!==e.target.elements.pictureName.value.trim()?t(e.target.elements.pictureName.value):u.b.error("\u0414\u043b\u044f \u043f\u043e\u0438\u0441\u043a\u0430 \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435")},autoComplete:"off",children:[Object(h.jsx)(g,{type:"submit",children:Object(h.jsx)(m,{children:"Search"})}),Object(h.jsx)(x,{name:"pictureName",className:"SearchForm-input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"})]})})},O=n(13),v=n.n(O);v.a.defaults.baseURL="https://pixabay.com/api/",v.a.defaults.params={image_type:"photo",key:"22624023-cde2aba775d295bec8b1b2952",per_page:12,safesearch:!0};var w=function(){var e=Object(p.a)(s.a.mark((function e(t,n){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.get("",{params:{q:t,page:n}});case 2:return a=e.sent,e.abrupt("return",a.data.hits);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();var y=Object(d.a)("li",{target:"e1af4p3x1"})({name:"ia8atm",styles:"border-radius:2px;box-shadow:0px 1px 3px 0px rgba(0, 0, 0, 0.2),0px 1px 1px 0px rgba(0, 0, 0, 0.14),0px 2px 1px -1px rgba(0, 0, 0, 0.12)"}),k=Object(d.a)("img",{target:"e1af4p3x0"})({name:"1plt1o8",styles:"width:100%;height:260px;object-fit:cover;transition:transform 250ms cubic-bezier(0.4, 0, 0.2, 1);&:hover{transform:scale(1.03);cursor:zoom-in;}"}),S=function(e){var t=e.item,n=e.imageLarge,a=e.onSelect;return Object(h.jsx)(y,{children:Object(h.jsx)(k,{src:t.webformatURL,alt:"",onClick:function(){return a(n)}})},t.id)};var L=Object(d.a)("ul",{target:"eqr0ccf0"})({name:"1bhb8yv",styles:"display:grid;max-width:calc(100vw - 48px);grid-template-columns:repeat(auto-fill, minmax(320px, 1fr));grid-gap:16px;margin-top:0;margin-bottom:0;padding:0;list-style:none;margin-left:auto;margin-right:auto"}),C=function(e){var t=e.pic,n=e.onSelect;return Object(h.jsx)(L,{children:t.map((function(e){return Object(h.jsx)(S,{item:e,imageLarge:e.largeImageURL,onSelect:n},e.webformatURL)}))})};var z=Object(d.a)("button",{target:"e29pg7m0"})({name:"wpzo6k",styles:"border:none;background:rgb(0, 166, 243);color:#ffffff;border-radius:15px;padding:15px 35px;margin:0 auto;display:block"}),F=function(e){var t=e.onClick;return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(z,{type:"button",onClick:t,children:"Load more"})})};var R=Object(d.a)("div",{target:"e1d5aw6f1"})({name:"v6xvz3",styles:"position:fixed;top:0;left:0;width:100vw;height:100vh;display:flex;justify-content:center;align-items:center;background-color:rgba(0, 0, 0, 0.8)"}),U=Object(d.a)("div",{target:"e1d5aw6f0"})({name:"sve88p",styles:"max-width:calc(100vw - 48px);max-height:calc(100vh - 24px)"}),E=document.querySelector("#modal-root");function N(e){Object(a.useEffect)((function(){return window.addEventListener("keydown",t),function(){window.removeEventListener("keydown",t)}}));var t=function(t){"Escape"===t.code&&e.onClose()};return Object(o.createPortal)(Object(h.jsx)(R,{onClick:function(t){t.target===t.currentTarget&&e.onClose()},children:Object(h.jsx)(U,{children:e.children})}),E)}var I,q=n(26),B=n(27),P=n(32),T=n(31),H=n(28),J=n.n(H),_=n(29),A=n(30).a.div(I||(I=Object(_.a)(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin-right: -50%;\n  transform: translate(-50%, -50%);\n"]))),D=function(e){Object(P.a)(n,e);var t=Object(T.a)(n);function n(){return Object(q.a)(this,n),t.apply(this,arguments)}return Object(B.a)(n,[{key:"render",value:function(){return Object(h.jsx)(A,{children:Object(h.jsx)(J.a,{type:"Puff",color:"#00BFFF",height:100,width:100,timeout:3e3})})}}]),n}(a.Component);function M(){var e=Object(a.useState)(""),t=Object(l.a)(e,2),n=t[0],r=t[1],o=Object(a.useState)([]),c=Object(l.a)(o,2),i=c[0],d=c[1],b=Object(a.useState)(1),f=Object(l.a)(b,2),g=f[0],m=f[1],x=Object(a.useState)(null),O=Object(l.a)(x,2),v=O[0],y=O[1],k=Object(a.useState)(!1),S=Object(l.a)(k,2),L=S[0],z=S[1],R=function(){z(!L)};return Object(a.useEffect)((function(){var e=function(){var e=Object(p.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w(n,g);case 2:return t=e.sent,0===(a=t.map((function(e){return{id:e.id,largeImageURL:e.largeImageURL,webformatURL:e.webformatURL}}))).length&&u.b.error("\u041f\u043e \u0434\u0430\u043d\u043d\u043e\u043c\u0443 \u0437\u0430\u043f\u0440\u043e\u0441\u0443 \u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e"),e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();if(""!==n.trim()){var t=e();window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"}),t.then((function(e){d(e)}))}}),[g,n]),Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(j,{onSearch:function(e){r(e)}}),i.length>0&&Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(D,{}),Object(h.jsx)(C,{pic:i,onSelect:function(e){y(e),R()}}),";",Object(h.jsx)(F,{onClick:function(){m((function(e){return e+1}))}}),L&&Object(h.jsx)(N,{onClose:R,children:Object(h.jsx)("img",{src:v,alt:""})})]}),Object(h.jsx)(u.a,{position:"top-right",autoClose:3e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0})]})}c.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(M,{})}),document.getElementById("root"))}},[[84,1,2]]]);
//# sourceMappingURL=main.a3d0a148.chunk.js.map