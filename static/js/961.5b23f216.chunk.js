"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[961],{961:function(e,t,n){n.r(t);var r=n(861),a=n(439),s=n(757),i=n.n(s),c=n(414),u=n(791),o=n(689),l=n(87),p=n(390),d=n(184),v=(0,u.lazy)((function(){return n.e(247).then(n.bind(n,247))})),f=(0,u.lazy)((function(){return n.e(186).then(n.bind(n,186))}));t.default=function(){var e,t,n,s,h,x=(0,o.UO)().movieId,m=(0,u.useState)(1),j=(0,a.Z)(m,2),w=j[0],g=j[1],b=(0,o.TH)(),k=(0,u.useRef)(null!==(e=null===b||void 0===b||null===(t=b.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/");(0,u.useEffect)((function(){if(x){var e=function(){var e=(0,r.Z)(i().mark((function e(){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,p.GM)(x);case 3:t=e.sent,g(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}}),[x]);var y,_=Math.floor(10*(null===w||void 0===w?void 0:w.vote_average)),Z=null===w||void 0===w||null===(n=w.genres)||void 0===n||null===(s=n.map((function(e){return e.name})))||void 0===s?void 0:s.join(", "),U=null===w||void 0===w||null===(h=w.release_date)||void 0===h?void 0:h.slice(0,4);return y=!!w.poster_path&&"https://image.tmdb.org/t/p/w342".concat(w.poster_path),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(l.rU,{to:k.current,children:" Go back"}),(0,d.jsxs)("div",{style:{display:"flex",gap:"10px"},children:[(0,d.jsx)("div",{children:(0,d.jsx)("img",{style:{width:"240px",height:"380px"},src:y||"https://media.istockphoto.com/id/1392182937/vector/no-image-available-photo-coming-soon.jpg?s=612x612&w=0&k=20&c=3vGh4yj0O2b4tPtjpK-q-Qg0wGHsjseL2HT-pIyJiuc=",alt:w.title})}),(0,d.jsxs)("div",{children:[(0,d.jsxs)("h1",{children:[w.title," (",U,")"]}),(0,d.jsxs)("p",{children:["User score: ",_,"%"]}),(0,d.jsx)("h2",{children:"Overview"}),(0,d.jsx)("p",{children:w.overview}),(0,d.jsx)("h3",{children:"Genres"}),(0,d.jsx)("p",{children:Z})]})]}),(0,d.jsx)("h4",{children:"Additional information"}),(0,d.jsxs)("div",{children:[(0,d.jsx)(l.rU,{to:"cast",children:"Cast"}),(0,d.jsx)(l.rU,{style:{marginLeft:"10px"},to:"reviews",children:"Reviews"})]}),(0,d.jsx)(u.Suspense,{fallback:(0,d.jsx)(c.a,{}),children:(0,d.jsxs)(o.Z5,{children:[(0,d.jsx)(o.AW,{path:"cast",element:(0,d.jsx)(v,{})}),(0,d.jsx)(o.AW,{path:"reviews",element:(0,d.jsx)(f,{})})]})})]})}},390:function(e,t,n){n.d(t,{$_:function(){return u},$m:function(){return p},GM:function(){return o},Ib:function(){return l},zg:function(){return c}});var r=n(861),a=n(757),s=n.n(a),i=n(340).Z.create({baseURL:"https://api.themoviedb.org/3",params:{language:"en-US",api_key:"989563dd1f865a35d8f87302bbcd611b"}}),c=function(){var e=(0,r.Z)(s().mark((function e(){var t,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("/trending/all/day");case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=(0,r.Z)(s().mark((function e(t){var n,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("/search/movie",{params:{query:t}});case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o=function(){var e=(0,r.Z)(s().mark((function e(t){var n,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("/movie/".concat(t));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(s().mark((function e(t){var n,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("/movie/".concat(t,"/casts"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(s().mark((function e(t){var n,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("/movie/".concat(t,"/reviews"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=961.5b23f216.chunk.js.map