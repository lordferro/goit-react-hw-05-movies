"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[820],{429:function(t,e,n){var r=n(689),i=n(87),a=n(184);e.Z=function(t){var e=t.state,n=(0,r.TH)(),c=function(){var t;if("/"===(null===(t=e.from)||void 0===t?void 0:t.pathname))return"movies/"}(),o=e.movies;return(0,a.jsx)("ul",{children:o.map((function(t){return(0,a.jsxs)("li",{children:[(0,a.jsx)(i.rU,{state:{from:n},to:"".concat(c?c+t.id:t.id),children:t.original_title}),";"]},t.id)}))})}},426:function(t,e,n){n.d(e,{Tq:function(){return i},cB:function(){return o},cL:function(){return u},kw:function(){return a},lk:function(){return c}});var r="ba0ad73f76c4f815c78bb333b0b1b2be",i=function(){return"https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(r)},a=function(t){return"https://api.themoviedb.org/3/search/movie?api_key=".concat(r,"&query=").concat(t)},c=function(t){return"https://api.themoviedb.org/3/movie/".concat(t,"?api_key=").concat(r)},o=function(t){return"https://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=").concat(r)},u=function(t){return"https://api.themoviedb.org/3/movie/".concat(t,"/reviews?api_key=").concat(r)}},820:function(t,e,n){n.r(e);var r=n(861),i=n(439),a=n(757),c=n.n(a),o=n(243),u=n(429),s=n(426),f=n(791),l=n(689),v=n(87),p=n(184);e.default=function(){var t,e=(0,f.useState)([]),n=(0,i.Z)(e,2),a=n[0],h=n[1],d=(0,l.TH)(),m=(0,v.lr)(),b=(0,i.Z)(m,2),g=b[0],y=b[1],k=null!==(t=g.get("query"))&&void 0!==t?t:"";return(0,f.useEffect)((function(){if(""!==k){var t=function(){var t=(0,r.Z)(c().mark((function t(){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.Z.get((0,s.kw)(k));case 3:0===(e=t.sent).data.results.length&&alert("Please check your query, beacause we find nothing"),h(e.data.results),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}}();t()}}),[k]),(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)("form",{onSubmit:function(t){if(t.preventDefault(),""===t.target[0].value)return alert("please enter your query "),y({});y({query:t.target[0].value}),t.target[0].value=""},children:[(0,p.jsx)("input",{type:"text",defaultValue:""}),(0,p.jsx)("button",{type:"submit",children:"Search"})]}),(0,p.jsx)(u.Z,{state:{movies:a,from:d}})]})}}}]);
//# sourceMappingURL=820.9fd4bce9.chunk.js.map