(this.webpackJsonpvideoplatform=this.webpackJsonpvideoplatform||[]).push([[0],{129:function(n,t,e){},131:function(n,t,e){"use strict";e.r(t);var i=e(2),r=e(0),a=e(26),c=e.n(a),s=e(46),o=e(19),u=e.n(o),l=e(5),d=e(49),f=e(20),p=e(28),j=e(9),b=e(23),h=e.n(b),O=e(6),m=e(148),x=e(149),v=e(152),g=e(153),w=e(67),y=e.n(w),k=e(63),I=e.n(k);function A(){var n=Object(l.a)(["\n  width: 100%;\n  padding-left: 3rem;\n"]);return A=function(){return n},n}function M(){var n=Object(l.a)(["\n  display: flex;\n  position: absolute;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  margin-left: 1rem;\n"]);return M=function(){return n},n}function V(){var n=Object(l.a)(["\n  display: flex;\n  align-items: center;\n  width: 40%;\n  height: 3rem;\n  transition: background-color ease 0.7s;\n  &:hover {\n    background-color: #d63031;\n    transition: background-color ease 0.7s;\n  }\n"]);return V=function(){return n},n}function S(){var n=Object(l.a)(['\n  font-size: 1.5rem;\n  font-weight: bold;\n  font-family: "NanumBarunGothic", sans-serif;\n  color: white;\n']);return S=function(){return n},n}function B(){var n=Object(l.a)(["\n  display: flex;\n  justify-content: space-between;\n  position: relative;\n  background-color: red;\n"]);return B=function(){return n},n}var E=function(n){var t=Object(r.useState)(),e=Object(f.a)(t,2),a=e[0],c=e[1];return Object(i.jsx)(m.a,{position:"static",children:Object(i.jsxs)(L,{children:[Object(i.jsx)(I.a,{}),Object(i.jsxs)(G,{children:[Object(i.jsx)(R,{}),Object(i.jsx)(X,{placeholder:"\uac80\uc0c9...",onChange:function(n){c(n.target.value)},onKeyPress:function(t){"Enter"===t.key&&n.onSubmit(a)}})]}),Object(i.jsx)(C,{onClick:n.onGoHome,children:"JinTube \ud83c\udfac"})]})})},L=Object(O.a)(x.a)(B()),C=Object(O.a)(v.a)(S()),G=O.a.div(V()),R=Object(O.a)(y.a)(M()),X=Object(O.a)(g.a)(A()),z=e(150),N=e(132),P=e(68);function T(){var n=Object(l.a)(["\n  margin: 1rem;\n  padding: 0.7rem;\n"]);return T=function(){return n},n}function W(){var n=Object(l.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n"]);return W=function(){return n},n}function D(){var n=Object(l.a)(["\n  position: relative;\n  padding-bottom: 56.25%;\n  overflow: hidden;\n  margin: 1rem;\n"]);return D=function(){return n},n}function U(){var n=Object(l.a)(["\n  @media (min-width: 960px) {\n    width: 960px;\n  }\n  @media (max-width: 960px) {\n    width: 100%;\n  }\n"]);return U=function(){return n},n}var Z=O.a.section(U()),F=O.a.div(D()),H=Object(O.a)(P.a)(W()),J=Object(O.a)(N.a)(T()),K=function(n){var t=Object(r.useState)(null),e=Object(f.a)(t,2),a=e[0],c=e[1];Object(r.useEffect)((function(){null!=n.mainVideoId&&h.a.create({baseURL:"https://www.googleapis.com/youtube/v3/"}).get("/videos",{params:{part:"snippet,statistics",id:n.mainVideoId,key:"AIzaSyAWgs3aZE3PyX2p0tL776GoBgMt3XNx71M"}}).then((function(n){var t=n.data.items[0];c(t)}))}),[n.mainVideoId]);return null==a?Object(i.jsx)("div",{children:"\u23f3..."}):Object(i.jsxs)(Z,{children:[Object(i.jsx)(F,{children:Object(i.jsx)(H,{videoId:a.id,opts:{playerVars:{autoplay:0}},onReady:function(n){n.target.pauseVideo()}})}),Object(i.jsxs)(J,{elevation:6,children:[Object(i.jsx)(z.a,{style:{fontWeight:"bold"},variant:"h5",children:a.snippet.title}),Object(i.jsxs)(z.a,{align:"right",children:["\ud83d\udc4d ",a.statistics.likeCount," \ud83d\udc4e"," ",a.statistics.dislikeCount]}),Object(i.jsx)(z.a,{style:{fontWeight:"bold"},variant:"h6",children:a.snippet.channelTitle}),Object(i.jsxs)(z.a,{children:["\uc870\ud68c\uc218 ",a.statistics.viewCount,"\ud68c | \uac8c\uc2dc\uc77c"," ",a.snippet.publishedAt.split("-")[0]+a.snippet.publishedAt.split("-")[1]+a.snippet.publishedAt.split("-")[2].split("T")[0]]})]})]})};function q(){var n=Object(l.a)(['\n  display: -webkit-flex;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 2;\n  font-size: 1rem;\n  height: 3rem;\n  line-height: 1.5rem;\n  text-align: left;\n  overflow: hidden;\n  text-overflow: ellipsis;\n\n  font-weight: bold;\n  font-family: "NanumBarunGothic", sans-serif;\n']);return q=function(){return n},n}function _(){var n=Object(l.a)(["\n  width: 150px;\n  padding-left: 0.5rem;\n"]);return _=function(){return n},n}function Q(){var n=Object(l.a)(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  cursor: pointer;\n  margin-bottom: 0.5rem;\n"]);return Q=function(){return n},n}function Y(){var n=Object(l.a)(["\n  width: 300px;\n  padding: 1rem;\n  @media (max-width: 960px) {\n    display: none;\n  }\n"]);return Y=function(){return n},n}var $=O.a.section(Y()),nn=O.a.div(Q()),tn=O.a.div(_()),en=O.a.span(q()),rn=function(n){var t=n.mainVideoId,e=n.setMainVideoId,a=Object(r.useState)([]),c=Object(f.a)(a,2),s=c[0],o=c[1];Object(r.useEffect)((function(){h.a.create({baseURL:"https://www.googleapis.com/youtube/v3/"}).get("/search",{params:{part:"snippet",regionCode:"kr",relatedToVideoId:t,maxResults:7,type:"video",key:"AIzaSyAWgs3aZE3PyX2p0tL776GoBgMt3XNx71M"}}).then((function(n){var t=n.data.items;console.log("\uc11c\ube0c \ube44\ub514\uc624 \ud0d0\uc0c9",t),o(t)}))}));var u=s.map((function(n,t){return Object(i.jsxs)(nn,{children:[Object(i.jsx)("img",{style:{width:"150px"},alt:"thumbnail",src:n.snippet.thumbnails.medium.url,onMouseDown:function(){return e(n.id.videoId)}}),Object(i.jsxs)(tn,{children:[Object(i.jsxs)(en,{children:[n.snippet.title,"..."]}),Object(i.jsx)(z.a,{children:n.snippet.channelTitle})]})]},t)}));return Object(i.jsx)($,{children:u})},an=e(71),cn=e.n(an),sn=function(n){var t=Object(r.useState)(null),e=Object(f.a)(t,2),a=e[0],c=e[1];return Object(r.useEffect)((function(){var t=cn.a.parse(n.location.search).v;c(t)}),[]),Object(i.jsxs)(r.Fragment,{children:[Object(i.jsx)(K,{mainVideoId:a}),Object(i.jsx)(rn,{mainVideoId:a,setMainVideoId:c})]})},on=e(154),un=e(151);function ln(){var n=Object(l.a)(['\n  display: -webkit-flex;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 2;\n  font-size: 14;\n  height: 3rem;\n  line-height: 1.5rem;\n  text-align: left;\n  overflow: hidden;\n  text-overflow: ellipsis;\n\n  font-weight: bold;\n  font-family: "NanumBarunGothic", sans-serif;\n']);return ln=function(){return n},n}function dn(){var n=Object(l.a)(["\n  width: 100%;\n  padding-left: 0.5rem;\n"]);return dn=function(){return n},n}function fn(){var n=Object(l.a)(["\n  position: relative;\n  width: 100%;\n  cursor: pointer;\n"]);return fn=function(){return n},n}function pn(){var n=Object(l.a)(["\n  width: 3rem;\n"]);return pn=function(){return n},n}function jn(){var n=Object(l.a)(["\n  display: flex;\n  flex-direction: row;\n  margin-top: 0.5rem;\n"]);return jn=function(){return n},n}function bn(){var n=Object(l.a)(["\n  padding: 1rem;\n"]);return bn=function(){return n},n}function hn(){var n=Object(l.a)(["\n  width: 100%;\n  height: 100%;\n"]);return hn=function(){return n},n}var On=Object(O.a)(un.a)(hn()),mn=Object(O.a)(un.a)(bn()),xn=O.a.div(jn()),vn=O.a.div(pn()),gn=O.a.img(fn()),wn=O.a.div(dn()),yn=O.a.span(ln()),kn=function(n){var t=n.videos,e=n.channels,a=n.onClickVideo,c=t.map((function(n,t){return Object(i.jsxs)(mn,{item:!0,md:3,sm:4,xs:6,children:[Object(i.jsx)(gn,{alt:"thumbnail",src:n.snippet.thumbnails.medium.url,onMouseDown:function(){"object"===typeof n.id?a(n.id.videoId):a(n.id)}}),Object(i.jsxs)(xn,{container:!0,children:[Object(i.jsx)(vn,{children:Object(i.jsx)(on.a,{src:e[t].data.items[0].snippet.thumbnails.medium.url})}),Object(i.jsxs)(wn,{children:[Object(i.jsx)(un.a,{children:Object(i.jsx)(yn,{children:n.snippet.title})}),Object(i.jsxs)(un.a,{children:[Object(i.jsx)(z.a,{style:{textAlign:"left"},variant:"subtitle2",children:n.snippet.channelTitle}),Object(i.jsxs)(z.a,{style:{textAlign:"left"},variant:"subtitle2",children:["\uc870\ud68c\uc218 ",n.statistics.viewCount]})]})]})]})]})}));return Object(i.jsx)(On,{container:!0,justify:"space-around",children:0!==t.length?c:Object(i.jsx)(r.Fragment,{})})},In=e(72),An=e.n(In),Mn=e(73),Vn=e.n(Mn),Sn=e(74),Bn=e.n(Sn);function En(){var n=Object(l.a)(['\n  margin-left: 1rem;\n  font-size: 1.1rem;\n  font-family: "KOTRA_BOLD-Bold";\n']);return En=function(){return n},n}function Ln(){var n=Object(l.a)(["\n  display: flex;\n  justify-content: start;\n  align-items: center;\n  height: 4rem;\n  padding-left: 2rem;\n  cursor: pointer;\n"]);return Ln=function(){return n},n}function Cn(){var n=Object(l.a)(["\n  width: 15rem;\n  height: ",";\n  background-color: #fff;\n  border-top-right-radius: 2rem;\n  border-end-end-radius: 2rem;\n  box-shadow: 10px 10px 20px #f0f0f0, -10px -10px 20px #ffffff;\n  \n"]);return Cn=function(){return n},n}var Gn=O.a.div(Cn(),window.innerHeight),Rn=O.a.div(Ln()),Xn=O.a.div(En()),zn=function(){return Object(i.jsxs)(Gn,{children:[Object(i.jsxs)(Rn,{children:[Object(i.jsx)(An.a,{}),Object(i.jsx)(Xn,{children:"\ud648"})]}),Object(i.jsxs)(Rn,{children:[Object(i.jsx)(Vn.a,{}),Object(i.jsx)(Xn,{children:"\ud0d0\uc0c9"})]}),Object(i.jsxs)(Rn,{children:[Object(i.jsx)(Bn.a,{}),Object(i.jsx)(Xn,{children:"\uc124\uc815"})]})]})};function Nn(){var n=Object(l.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n"]);return Nn=function(){return n},n}function Pn(){return(Pn=Object(p.a)(u.a.mark((function n(t){return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Wn().then((function(n){Fn(n,t)}));case 2:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function Tn(){return(Tn=Object(p.a)(u.a.mark((function n(t,e){return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Un(t).then((function(n){Fn(n,e)}));case 2:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function Wn(){return Dn.apply(this,arguments)}function Dn(){return(Dn=Object(p.a)(u.a.mark((function n(){return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",h.a.create({baseURL:"https://www.googleapis.com/youtube/v3/"}).get("/videos",{params:{part:"snippet,statistics,recordingDetails,contentDetails",chart:"mostPopular",maxResults:12,regionCode:"kr",key:"AIzaSyAWgs3aZE3PyX2p0tL776GoBgMt3XNx71M"}}).then((function(n){return n.data.items})));case 1:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function Un(n){return Zn.apply(this,arguments)}function Zn(){return(Zn=Object(p.a)(u.a.mark((function n(t){return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",h.a.create({baseURL:"https://www.googleapis.com/youtube/v3/"}).get("/search",{params:{part:"snippet",maxResults:12,key:"AIzaSyAWgs3aZE3PyX2p0tL776GoBgMt3XNx71M",q:t}}).then((function(n){return n.data.items})));case 1:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function Fn(n,t){return Hn.apply(this,arguments)}function Hn(){return(Hn=Object(p.a)(u.a.mark((function n(t,e){var i;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:i=[],t.map((function(n){var r=n.snippet.channelId;h.a.create({baseURL:"https://www.googleapis.com/youtube/v3/"}).get("/channels",{params:{id:r,part:"id,snippet",key:"AIzaSyAWgs3aZE3PyX2p0tL776GoBgMt3XNx71M"}}).then((function(n){i.push(n),12===i.length&&e({videos:t,channels:i})}))}));case 2:case"end":return n.stop()}}),n)})))).apply(this,arguments)}var Jn=O.a.section(Nn()),Kn=function(){var n=Object(r.useState)({videos:[],channels:[]}),t=Object(f.a)(n,2),e=t[0],a=t[1],c=Object(j.f)();Object(r.useEffect)((function(){!function(n){Pn.apply(this,arguments)}(a)}),[]);var s=function(n){c.push("/watch?v=".concat(n))};return Object(i.jsxs)("main",{children:[Object(i.jsx)(E,{onGoHome:function(){c.push("/")},onSubmit:function(n){c.push("/"),function(n,t){Tn.apply(this,arguments)}(n,a)}}),Object(i.jsx)(Jn,{children:Object(i.jsxs)(j.c,{children:[Object(i.jsx)(j.a,{exact:!0,path:"/",render:function(n){return Object(i.jsxs)(r.Fragment,{children:[Object(i.jsx)(zn,{}),Object(i.jsx)(kn,Object(d.a)({videos:e.videos,channels:e.channels,onClickVideo:s},n))]})}}),Object(i.jsx)(j.a,{path:"/watch",render:function(n){return Object(i.jsx)(sn,Object(d.a)({},n))}})]})})]})};e(129);c.a.render(Object(i.jsx)(s.a,{children:Object(i.jsx)(Kn,{})}),document.getElementById("root"))}},[[131,1,2]]]);
//# sourceMappingURL=main.444a6dd3.chunk.js.map