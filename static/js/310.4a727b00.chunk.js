"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[310],{130:function(n,e,t){var r=t(87),a=t(184);e.Z=function(n){var e=n.movies;return(0,a.jsx)("ul",{children:e.map((function(n){var e=n.id,t=n.original_title;return(0,a.jsx)(r.rU,{to:"/movies/".concat(e),children:(0,a.jsx)("li",{children:(0,a.jsx)("p",{children:t})})},e)}))})}},310:function(n,e,t){t.r(e),t.d(e,{default:function(){return Z}});var r,a,c,u=t(861),o=t(439),i=t(757),s=t.n(i),p=t(791),l=t(87),h=t(409),f=t(130),d=t(835),v=t(168),g=t(867),x=g.ZP.form(r||(r=(0,v.Z)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  max-width: 500px;\n  background-color: #fff;\n  border-radius: 3px;\n  overflow: hidden;\n"]))),m=g.ZP.button(a||(a=(0,v.Z)(["\n  display: inline-block;\n  width: 70px;\n  height: 28px;\n  border: 0;\n  background-color: grey;\n  opacity: 0.6;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n  outline: none;\n  &:hover {\n    opacity: 1;\n  }\n"]))),y=g.ZP.input(c||(c=(0,v.Z)(["\n  display: inline-block;\n  width: 100%;\n  font: inherit;\n  font-size: 20px;\n  border: 1px solid grey;\n  outline: none;\n  padding-left: 4px;\n  padding-right: 4px;\n\n  &::placeholder {\n    font: inherit;\n    font-size: 18px;\n  }\n"]))),b=t(184),Z=function(){var n,e=(0,p.useState)(""),t=(0,o.Z)(e,2),r=t[0],a=t[1],c=(0,p.useState)(!1),i=(0,o.Z)(c,2),v=i[0],g=i[1],Z=(0,p.useState)(null),w=(0,o.Z)(Z,2),k=w[0],j=w[1],S=null!==(n=(0,l.lr)())&&void 0!==n?n:"",_=(0,o.Z)(S,2),C=_[0],U=_[1],Q=C.get("handleQueryChange");(0,p.useEffect)((function(){""!==Q&&Q&&z(Q)}),[Q]);var z=function(){var n=(0,u.Z)(s().mark((function n(e){var t;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,g(!0),n.next=4,(0,h.WK)(e);case 4:t=n.sent,a(t),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),j(n.t0);case 11:return n.prev=11,g(!1),n.finish(11);case 14:case"end":return n.stop()}}),n,null,[[0,8,11,14]])})));return function(e){return n.apply(this,arguments)}}();return(0,b.jsxs)("section",{children:[(0,b.jsxs)(x,{onSubmit:function(n){n.preventDefault();var e=n.currentTarget;U({handleQueryChange:e.elements.handleQueryChange.value}),e.reset()},children:[(0,b.jsx)(y,{type:"text",name:"handleQueryChange"}),(0,b.jsx)(m,{type:"submit",children:"Search"})]}),k&&!v&&(0,b.jsx)("p",{children:"Sorry, try again"}),v&&(0,b.jsx)(d.Z,{}),r.length>0&&(0,b.jsx)(f.Z,{movies:r})]})}},409:function(n,e,t){t.d(e,{Hx:function(){return l},WK:function(){return h},Y5:function(){return s},uV:function(){return p},wr:function(){return i}});var r=t(861),a=t(757),c=t.n(a),u=t(243),o="b45b1c12fd7958738751591d9e5171e0",i=function(){var n=(0,r.Z)(c().mark((function n(){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,u.Z.get("https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(o,"&language=en-US"));case 3:return e=n.sent,n.abrupt("return",e.data.results);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,u.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=").concat(o,"&language=en-US"));case 3:return t=n.sent,n.abrupt("return",t.data);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,u.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"/credits?api_key=").concat(o,"&language=en-US"));case 3:return t=n.sent,n.abrupt("return",t.data.cast);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,u.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"/reviews?api_key=").concat(o,"&language=en-US"));case 3:return t=n.sent,n.abrupt("return",t.data.results);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}(),h=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,u.Z.get("https://api.themoviedb.org/3/search/movie?query=".concat(e,"&api_key=").concat(o,"&language=en-US"));case 3:return t=n.sent,n.abrupt("return",t.data.results);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=310.4a727b00.chunk.js.map