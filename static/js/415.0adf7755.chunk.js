"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[415],{130:function(e,t,n){var r=n(87),a=n(184);t.Z=function(e){var t=e.movies;return(0,a.jsx)("ul",{children:t.map((function(e){var t=e.id,n=e.original_title;return(0,a.jsx)(r.rU,{to:"/movies/".concat(t),children:(0,a.jsx)("li",{children:(0,a.jsx)("p",{children:n})})},t)}))})}},415:function(e,t,n){n.r(t);var r=n(861),a=n(439),c=n(757),u=n.n(c),o=n(791),s=n(409),i=n(130),p=n(835),l=n(184);t.default=function(){var e=(0,o.useState)(""),t=(0,a.Z)(e,2),n=t[0],c=t[1],v=(0,o.useState)(!1),f=(0,a.Z)(v,2),h=f[0],d=f[1],g=(0,o.useState)(null),m=(0,a.Z)(g,2),x=m[0],w=m[1];(0,o.useEffect)((function(){k()}),[]);var k=function(){var e=(0,r.Z)(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,d(!0),e.next=4,(0,s.wr)();case 4:t=e.sent,c(t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),w(e.t0);case 11:return e.prev=11,d(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})));return function(){return e.apply(this,arguments)}}();return(0,l.jsx)("div",{children:(0,l.jsxs)("section",{children:[(0,l.jsx)("h1",{children:"Trending Today"}),x&&!h&&(0,l.jsx)("p",{children:"Sorry, try again"}),h&&(0,l.jsx)(p.Z,{}),n.length>0&&(0,l.jsx)(i.Z,{movies:n})]})})}},409:function(e,t,n){n.d(t,{Hx:function(){return l},WK:function(){return v},Y5:function(){return i},uV:function(){return p},wr:function(){return s}});var r=n(861),a=n(757),c=n.n(a),u=n(243),o="b45b1c12fd7958738751591d9e5171e0",s=function(){var e=(0,r.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(o,"&language=en-US"));case 3:return t=e.sent,e.abrupt("return",t.data.results);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=").concat(o,"&language=en-US"));case 3:return n=e.sent,e.abrupt("return",n.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=").concat(o,"&language=en-US"));case 3:return n=e.sent,e.abrupt("return",n.data.cast);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"/reviews?api_key=").concat(o,"&language=en-US"));case 3:return n=e.sent,e.abrupt("return",n.data.results);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("https://api.themoviedb.org/3/search/movie?query=".concat(t,"&api_key=").concat(o,"&language=en-US"));case 3:return n=e.sent,e.abrupt("return",n.data.results);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=415.0adf7755.chunk.js.map