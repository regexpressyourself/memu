(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{162:function(e,a){a.GENRELIST=["rock","electronic","alternative","indie","pop","metal","alternative rock","jazz","classic rock","ambient","experimental","folk","punk","indie rock","hard rock","hip-hop","instrumental","singer-songwriter","black metal","dance","progressive rock","death metal","heavy metal","hardcore","soul","chillout","electronica","classical","industrial","soundtrack","rap","blues","punk rock","thrash metal","acoustic","metalcore","psychedelic","post-rock","progressive metal","funk","hip hop","new wave","trance","house","reggae","trip-hop","post-punk","techno","electro","indie pop","rnb","country","power metal","downtempo","emo","post-hardcore","doom metal","oldies","psychedelic rock","gothic metal","synthpop","russian","gothic","grunge","britpop","swedish","noise","screamo","lounge","grindcore","nu metal","j-pop","polish","pop rock","chill","blues rock","avant-garde","new age","ska","drum and bass","progressive","shoegaze","darkwave","pop punk","dubstep","canadian","ebm","world","folk metal","easy listening","deathcore","j-rock","industrial metal","alternative metal","gothic rock","hardcore punk","disco","latin","lo-fi","dub","atmospheric","stoner rock","folk rock","drone","christian","celtic","sludge","garage rock","contemporary classical","electropop","smooth jazz","dream pop","psytrance","fusion","art rock","underground hip-hop","soft rock","acid jazz","swing","australian","neofolk","irish","baroque","k-pop","speed metal","korean","neoclassical","alt-country","rockabilly","rock n roll","glam rock","progressive trance","synth pop","video game music","space rock","americana","rock and roll","melodic hardcore","noise rock","atmospheric black metal","breakbeat","dark electro","emocore","goth","krautrock","composer","nu jazz","world music","post rock","post-metal","southern rock","rhythm and blues","smooth","russian rock","mathcore","club","medieval","breakcore","melodic metal","mpb","glitch","industrial rock","trip hop","rapcore","deep house","r&b","indie folk","bossa nova","opera","dancehall","gangsta rap","progressive house","experimental rock","pagan metal","groove metal","progressive death metal","dnb","dreamy","crust","eurodance","melodic black metal","vocal trance","drum n bass","symphonic black metal","electroclash","hiphop","vocal jazz","jrock","math rock","good","jazz fusion","african","nu-metal","avantgarde","psychobilly","crossover","hair metal","melodic","post-grunge","goregrind"]},165:function(e,a,t){e.exports=t.p+"static/media/sm.2a3978c5.png"},175:function(e,a,t){e.exports=t.p+"static/media/wailto-logo.4450519c.png"},201:function(e,a,t){e.exports=t(423)},206:function(e,a,t){},208:function(e,a,t){},225:function(e,a,t){},236:function(e,a,t){},237:function(e,a,t){},241:function(e,a,t){},242:function(e,a,t){},243:function(e,a,t){},421:function(e,a,t){},422:function(e,a,t){},423:function(e,a,t){"use strict";t.r(a);var n=t(1),r=t.n(n),l=t(25),c=t.n(l),o=(t(206),t(207),t(208),t(11)),s=t(161),m=t.n(s),i=t(2);function u(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,n)}return t}function d(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?u(t,!0).forEach(function(a){Object(i.a)(e,a,t[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(t).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})}return e}var p=r.a.createContext(),E={timeStart:null,timeEnd:null,unixTimeStart:null,unixTimeEnd:null,username:localStorage.getItem("wt-username")||"",genre:null,appState:"home"},h=function(e){var a=new Date(e.getTime());return a.setDate(a.getDate()),a.setHours(23),a.setMinutes(59),a.setSeconds(59),a};function g(e,a){switch(e.timeEnd=h(e.timeEnd),e.unixTimeStart=Math.round(e.timeStart.getTime()/1e3),e.unixTimeEnd=Math.round(e.timeEnd.getTime()/1e3),a.type){case"USERNAME":return"zookeeprr"!==a.username&&localStorage.setItem("wt-username",a.username),d({},e,{username:a.username});case"TIME_START":var t=Math.round(a.timeStart.getTime()/1e3);return d({},e,{timeStart:a.timeStart,unixTimeStart:t});case"TIME_END":var n=h(a.timeEnd),r=Math.round(n.getTime()/1e3);return d({},e,{timeEnd:n,unixTimeEnd:r});case"APP_STATE":return d({},e,{appState:a.appState});case"GENRE":return d({},e,{genre:a.genre});default:return E}}var b=r.a.createContext();function f(e,a){return{history:a.history}}var y=t(424),v=t(425),_=t(426),k=t(427);t(225);var N=function(){var e=Object(n.useContext)(p).configDispatch,a=[{componentState:"hour",title:"Songs By Hour",subtitle:"Learn what hours of the day have the most songs",image:r.a.createElement(y.a,null)},{componentState:"dow",title:"Songs By Day of Week",subtitle:"See listening history for each day of the week.",image:r.a.createElement(v.a,null)},{componentState:"date",title:"Songs By Date",subtitle:"See a daily breakdown of listening history",image:r.a.createElement(_.a,null)},{componentState:"history",title:"Full History",subtitle:"Every song in your selected date range",image:r.a.createElement(k.a,null)}].map(function(a){return r.a.createElement("div",{key:a.title,className:"dashboard__module",onClick:function(t){e({type:"APP_STATE",appState:a.componentState})}},r.a.createElement("div",{className:"dashboard__module__heading"},r.a.createElement("div",{className:"dashboard__module__image"},a.image),r.a.createElement("p",{className:"dashboard__module__title"},a.title)),r.a.createElement("hr",null),r.a.createElement("p",{className:"dashboard__module__subtitle"},a.subtitle))});return r.a.createElement("section",{className:"dashboard"},a)},S=t(97),w=t.n(S),j=t(428),O=t(429),D=t(430),T=(t(236),t(237),t(13)),L=t(162),M=t(176);var x=function(e){var a=Object(n.useContext)(p),t=a.config,l=a.configDispatch,c=Object(n.useState)(t.username),s=Object(o.a)(c,2),m=s[0],i=s[1],u=Object(n.useState)(t.genre),d=Object(o.a)(u,2),E=d[0],h=d[1],g=Object(n.useState)(t.timeStart),b=Object(o.a)(g,2),f=b[0],y=b[1],v=Object(n.useState)(t.timeEnd),_=Object(o.a)(v,2),k=_[0],N=_[1],S=Object(n.useState)(t.timeStart),x=Object(o.a)(S,2),C=x[0],A=x[1],z=Object(n.useState)(t.timeEnd),I=Object(o.a)(z,2),P=I[0],q=I[1],F=Object(n.useState)(null),W=Object(o.a)(F,2),Y=W[0],R=W[1],J=Object(n.useState)(null),G=Object(o.a)(J,2),B=G[0],H=G[1],K=Object(n.useState)(r.a.createElement(j.a,null)),U=Object(o.a)(K,2),V=U[0],Q=U[1],X=Object(n.useState)(!1),Z=Object(o.a)(X,2),$=Z[0],ee=Z[1],ae=L.GENRELIST.map(function(e){return{value:e,label:e}});ae.unshift({value:"any",label:"any genre"}),e.showMessages&&(Y||B||(ee(!0),H(r.a.createElement("div",{className:"introduce-message"},r.a.createElement("p",{className:"help-title"},"Let's Get Started!"),r.a.createElement("p",{className:"help-link"},"Click the button to start:"),r.a.createElement("p",{className:"help-subtext"},r.a.createElement(T.b,{to:"/"},r.a.createElement("span",{id:"about-link",className:"clickable"},"\u2014\xa0More info\xa0\u2014"))))))),Object(n.useEffect)(function(){i(t.username)},[t.username]),Object(n.useEffect)(function(){Y?e.showMessages&&H(r.a.createElement("div",null,r.a.createElement("p",{className:"help-title"},"Look up Last.fm data"),r.a.createElement("p",{className:"help-link"},r.a.createElement("span",{className:"clickable use-mine",onClick:function(a){document.querySelector(".nav__heading--username").classList.add("atn--font-color"),document.querySelector(".username-input").classList.add("atn--border-color"),A(e.defaultStart),q(e.defaultEnd);for(var t=function(e){setTimeout(function(){i("zookeeprr".substring(0,e))},50*e)},n=1;n<="zookeeprr".length;n++)t(n)}},"Or see mine!")),r.a.createElement("p",{className:"help-subtext"},r.a.createElement(T.b,{to:"/"},r.a.createElement("span",{id:"about-link",className:"clickable"},"\u2014\xa0More info\xa0\u2014"))))):H(null)},[e.showMessages,e.defaultStart,e.defaultEnd,Y]),Object(n.useEffect)(function(){"zookeeprr"===m?(document.querySelector(".nav__heading--username").classList.add("atn--font-color"),document.querySelector(".username-input").classList.add("atn--border-color")):"zookeeprr".includes(m)||(document.querySelector(".nav__heading--username").classList.remove("atn--font-color"),document.querySelector(".username-input").classList.remove("atn--border-color"))},[m]),Object(n.useEffect)(function(){Y?(Q(r.a.createElement(O.a,null)),document.querySelector(".nav").classList.remove("nav--collapsed"),document.querySelector(".nav").classList.add("nav--uncollapsed"),document.querySelector(".recharts-wrapper")&&(document.querySelector(".recharts-wrapper").style.zIndex="-1")):null!==Y&&(Q(r.a.createElement(j.a,null)),document.querySelector(".recharts-wrapper")&&(document.querySelector(".recharts-wrapper").style.zIndex="1"),document.querySelector(".nav").classList.add("nav--collapsed"),document.querySelector(".nav").classList.remove("nav--uncollapsed"),e.showMessages&&H(r.a.createElement("div",null,r.a.createElement("p",{className:"help-title"},"Let's Get Started!"),r.a.createElement("p",{className:"help-link"},"Click the button to start:"),r.a.createElement("p",{className:"help-subtext"},r.a.createElement(T.b,{to:"/"},r.a.createElement("span",{id:"about-link",className:"clickable"},"\u2014\xa0More info\xa0\u2014"))))))},[Y,f,k,t.username,e.showMessages,e.defaultStart,e.defaultEnd]);var te=e.showBack?r.a.createElement("button",{className:"nav__back-btn",onClick:function(e){l({type:"APP_STATE",appState:"dashboard"})}},r.a.createElement(D.a,null)):null;return r.a.createElement("header",{className:"main-header"},r.a.createElement("div",{className:"main-header__inner"},r.a.createElement("nav",{className:"nav"},r.a.createElement("div",{className:"nav__username input-wrapper"},r.a.createElement("label",{className:"nav__heading nav__heading--username",htmlFor:"username"},"Username\xa0",r.a.createElement("a",{href:"https://www.last.fm/join",rel:"noopener noreferrer",target:"_blank"},r.a.createElement("span",{className:"clickable header-help-link"},"(Need a username?)"))),r.a.createElement("span",{className:"required-reminder"},"\xa0\u2014\xa0please enter a username"),r.a.createElement("input",{name:"username",className:"username-input",placeholder:"Last.fm username",type:"text",value:m,onChange:function(e){return i(e.target.value)}})),r.a.createElement("div",{className:"input-wrapper input-wrapper--start-date"},r.a.createElement("label",{className:"nav__heading"},"Start date:"),r.a.createElement(w.a,{style:{width:"100%"},dayPickerProps:{selectedDays:f,disabledDays:function(e){return e>k||e<(new Date).setDate((new Date).getDate()-62)}},value:C,placeholder:"YYYY-M-D",onDayChange:function(e){y(e)}})),r.a.createElement("div",{className:"input-wrapper input-wrapper--end-date"},r.a.createElement("label",{className:"nav__heading"},"End date:"),r.a.createElement(w.a,{style:{width:"100%"},dayPickerProps:{selectedDays:k,disabledDays:function(e){return e>new Date||e<f}},value:P,placeholder:"YYYY-M-D",onDayChange:function(e){N(e)}})),r.a.createElement("div",{className:"input-wrapper input-wrapper--horizontal"},r.a.createElement("label",{className:"nav__heading"},"Genre: (optional)"),r.a.createElement(M.a,{onChange:function(e){h(e.value)},options:ae})),r.a.createElement("button",{className:"submit-btn",onClick:function(e){if(!m)return document.querySelector(".nav__username").classList.add("nav__username--invalid"),document.querySelector(".nav__heading--username").classList.add("atn--font-color"),document.querySelector(".username-input").classList.add("atn--border-color"),void setTimeout(function(){document.querySelector(".nav__heading--username").classList.remove("atn--font-color"),document.querySelector(".username-input").classList.remove("atn--border-color")},1e3);document.querySelector(".nav__username").classList.remove("nav__username--invalid"),l({type:"TIME_START",timeStart:f}),l({type:"TIME_END",timeEnd:k}),l({type:"USERNAME",username:m}),l({type:"GENRE",genre:E}),R(!1)}},"What Am I Listening to?")),r.a.createElement("div",{className:"main-header__bottom"},r.a.createElement("div",null,B||te),r.a.createElement("button",{className:"nav__toggle-btn ".concat($?"animated":""),onClick:function(e){R(!Y)}},V))))},C=t(431),A=(t(241),t(165)),z=t.n(A);var I=function(e){var a=r.a.createElement("span",{className:"logo-font"},"WAILto");return r.a.createElement("footer",null,r.a.createElement("div",null,r.a.createElement(T.b,{className:"footer-img",to:"/"},r.a.createElement("p",{className:"css-logo"},r.a.createElement("span",{className:"css-logo__wail"},"WAIL"),r.a.createElement("span",{className:"css-logo__to"},"to")))),r.a.createElement("div",null,r.a.createElement("p",{className:"footer-p"},r.a.createElement("a",{href:"https://github.com/regexpressyourself/wailto",className:"footer-gh-link",rel:"noopener noreferrer",target:"_blank"},r.a.createElement(C.a,null),a," \xa0is 100% open source"))),r.a.createElement("div",{className:"smessina-info"},r.a.createElement("p",{className:"footer-p"},r.a.createElement("a",{href:"https://smessina.com",rel:"noopener noreferrer",target:"_blank"},"Sam Messina",r.a.createElement("br",null),"\xa9 ",(new Date).getFullYear())),r.a.createElement("p",null,r.a.createElement("a",{className:"footer-img",href:"https://smessina.com",rel:"noopener noreferrer",target:"_blank"},r.a.createElement("img",{className:"sm-fav",src:z.a,alt:"smessina.com"})))))};t(242);var P=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"loading"},"Loading",r.a.createElement("span",null,"."),r.a.createElement("span",null,"."),r.a.createElement("span",null,".")))};t(243);var q=function(e){for(var a=[],t=0;t<e.genres.length;t++)e.genres[t]&&(t!==e.genres.length-1?a.push(e.genres[t]+", "):a.push(e.genres[t]));var n=null;return a.length&&(n=r.a.createElement(r.a.Fragment,null,r.a.createElement("hr",null),r.a.createElement("p",{className:"song-item__genres"},a))),r.a.createElement("div",{className:"song-item"},r.a.createElement("div",{className:"song-item__info"},r.a.createElement("img",{className:"song-item__img",alt:"album cover",src:e.image}),r.a.createElement("div",null,r.a.createElement("p",{className:"song-item__info__title"},e.name),r.a.createElement("p",{className:"song-item__info__content"},r.a.createElement("span",{className:"song-item__info__content__artist"},e.artist),r.a.createElement("br",null),"\u2014 ",e.album))),r.a.createElement("div",{className:"song-item__right"},r.a.createElement("p",{className:"song-item__date"},e.date.dowName,"\xa0",e.date.date,"\xa0",e.date.time),n))},F=(t(53),function(){return["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]}),W=function(e){var a="am";return e>=12&&(e-=12,a="pm"),0===e&&(e=12),e+a},Y=function(e){var a=new Date(1e3*e),t=a.getFullYear(),n=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][a.getMonth()],r=a.getDate(),l=a.getDay(),c=F()[a.getDay()],o=a.getHours(),s="0"+a.getMinutes();s=s.substr(-2);var m="0"+a.getSeconds();m=m.substr(-2);var i="am";o>=12&&(i="pm");var u=o%12+":"+s+i;return{date:"".concat(n," ").concat(r,", ").concat(t),time:u,month:n,day:r,dow:l,dowName:c,year:t,hour:o,minutes:s,seconds:m}},R=function(e){var a=e,t=a.getFullYear(),n=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][a.getMonth()],r=a.getDate(),l=a.getDay(),c=F()[a.getDay()],o=a.getHours(),s="0"+a.getMinutes();s=s.substr(-2);var m="0"+a.getSeconds();m=m.substr(-2);var i="am";o>=12&&(i="pm");var u=o%12+":"+s+i;return{date:"".concat(n," ").concat(r,", ").concat(t),time:u,month:n,day:r,dow:l,dowName:c,year:t,hour:o,minutes:s,seconds:m}},J=function(e,a){for(var t=[];e<a;){var n=e.getFullYear(),r=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][e.getMonth()],l=e.getDate(),c="".concat(r," ").concat(l,", ").concat(n);t.push(c),e.setDate(e.getDate()+1)}return t};function G(e,a,t){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,r=new Array(a),l=!0,c=!1,o=void 0;try{for(var s,m=t[Symbol.iterator]();!(l=(s=m.next()).done);l=!0){var i=s.value;if(!n||"any"===n||[i.genre1,i.genre2,i.genre3,i.genre4].includes(n)){var u=i.date,d=Y(u)[e];r[d]?r[d].push(i):r[d]=[i]}}}catch(p){c=!0,o=p}finally{try{l||null==m.return||m.return()}finally{if(c)throw o}}return r}var B=function(e){var a=Object(n.useContext)(b).history.history.map(function(e){var a=Y(e.date);return console.log([e.genre1,e.genre2,e.genre3,e.genre4]),r.a.createElement(q,{key:e.id+e.date,image:e.image,album:e.album,artist:e.artist,name:e.name,genres:[e.genre1,e.genre2,e.genre3,e.genre4],date:a})}).reverse();return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"chart-heading"},"Every Song In History"),a)},H=t(10);var K=function(e){for(var a=Object(n.useContext)(b).history,t=Object(n.useContext)(p).config,l=[],c=new Date(t.timeEnd),o=new Date(t.timeStart),s=J(o,c),m=G("date",s.length,a.history,t.genre),i=0;i<s.length;i++)l.push({name:s[i],"Song Count":m[s[i]]?m[s[i]].length:0});return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"chart-container"},r.a.createElement("h1",{className:"chart-heading"},"Song Listens",r.a.createElement("br",null)," ",r.a.createElement("span",{className:"per"},"\u2014by\u2014")," ",r.a.createElement("br",null),"Date"),r.a.createElement(H.e,null,r.a.createElement(H.b,{data:l},r.a.createElement(H.g,{dataKey:"name"}),r.a.createElement(H.h,null),r.a.createElement(H.f,null),r.a.createElement(H.a,{type:"monotone",dataKey:"Song Count",stroke:"#7f4782",fill:"#aa5c9f"})))))};var U=function(e){for(var a=Object(n.useContext)(b).history,t=Object(n.useContext)(p).config,l=[],c=G("dow",7,a.history,t.genre),o=0;o<=6;o++)l.push({name:"".concat(F()[o],"s"),"Song Count":c[o]?c[o].length:0});return console.log(l),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"chart-container"},r.a.createElement("h1",{className:"chart-heading"},"Song Listens",r.a.createElement("br",null)," ",r.a.createElement("span",{className:"per"},"\u2014by\u2014")," ",r.a.createElement("br",null),"Day of Week"),r.a.createElement(H.e,null,r.a.createElement(H.b,{data:l},r.a.createElement(H.g,{dataKey:"name"}),r.a.createElement(H.h,null),r.a.createElement(H.f,null),r.a.createElement(H.a,{type:"monotone",dataKey:"Song Count",stroke:"#7f4782",fill:"#aa5c9f"})))))};var V=function(e){for(var a=Object(n.useContext)(b).history,t=Object(n.useContext)(p).config,l=[],c=G("hour",24,a.history,t.genre),o=0;o<=23;o++)l.push({name:W(o),"Song Count":c[o]?c[o].length:0});return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"chart-container"},r.a.createElement("h1",{className:"chart-heading"},"Song Listens",r.a.createElement("br",null)," ",r.a.createElement("span",{className:"per"},"\u2014by\u2014")," ",r.a.createElement("br",null),"Hour of Day"),r.a.createElement(H.e,null,r.a.createElement(H.b,{data:l},r.a.createElement(H.g,{dataKey:"name"}),r.a.createElement(H.h,null),r.a.createElement(H.f,null),r.a.createElement(H.a,{type:"monotone",dataKey:"Song Count",stroke:"#7f4782",fill:"#aa5c9f"})))))};t(421);var Q=function(){var e=new Date,a=new Date,t=new Date;t.setDate(e.getDate()-1),a.setDate(e.getDate()-8);var l={timeStart:a,timeEnd:t,username:localStorage.getItem("wt-username")||""},c=Object(n.useReducer)(g,l),s=Object(o.a)(c,2),i=s[0],u=s[1],d=Object(n.useReducer)(f,{}),E=Object(o.a)(d,2),h=E[0],y=E[1];window.location.href.includes("zookeeprr")&&(u({type:"TIME_START",timeStart:l.timeStart}),u({type:"TIME_END",timeEnd:l.timeEnd}),u({type:"USERNAME",username:"zookeeprr"}));var v=Object(n.useState)(i.appState),_=Object(o.a)(v,2),k=_[0],S=_[1],w=Object(n.useState)(null),j=Object(o.a)(w,2),O=j[0],D=j[1],T=Object(n.useState)(null),L=Object(o.a)(T,2),M=L[0],C=L[1],A=k||"tutorial"===!k||"updating"===!k,z=A?r.a.createElement(I,null):null;return Object(n.useEffect)(function(){S(i.appState)},[i.appState]),Object(n.useEffect)(function(){i.username&&i.unixTimeEnd&&i.unixTimeStart&&(u({type:"APP_STATE",appState:"updating"}),"zookeeprr"===i.username?C(r.a.createElement("section",{className:"user-info"},r.a.createElement("p",{className:"user-info__username"},i.username),r.a.createElement("div",null,r.a.createElement("p",{className:"user-info__dates"},R(i.timeStart).date,"\xa0 \u2014 \xa0",R(i.timeEnd).date)),r.a.createElement("div",{className:"user-info__zookeeprr-info"},r.a.createElement("p",null,"Welcome to my dashboard! That's me, ",r.a.createElement("strong",null,"zookeeprr"),"."),r.a.createElement("p",null,"Check out some of my own music trends and history over the last week."),r.a.createElement("p",{className:"judgement-free"},"Remember, this is a judgement free zone.",r.a.createElement("br",null),r.a.createElement("span",{className:"shh"},"Yup, there will never be any Jonas Brothers on here. Definitely not."," ",r.a.createElement("span",{"aria-label":"see no evil",role:"img"},"\ud83d\ude48")))))):C(r.a.createElement("section",{className:"user-info"},r.a.createElement("p",{className:"user-info__username"},i.username),r.a.createElement("div",null,r.a.createElement("p",{className:"user-info__dates"},R(i.timeStart).date,"\xa0 \u2014 \xa0",R(i.timeEnd).date)))),m.a.get("/history",{params:{username:i.username,to:i.unixTimeEnd,from:i.unixTimeStart}}).then(function(e){y({history:e.data}),u({type:"APP_STATE",appState:"dashboard"})}).catch(function(e){console.error(e)}))},[i.username,i.unixTimeEnd,i.unixTimeStart]),Object(n.useEffect)(function(){switch(k){case"updating":D(r.a.createElement(P,null));break;case"dashboard":D(r.a.createElement(N,null));break;case"dow":D(r.a.createElement(U,null));break;case"date":D(r.a.createElement(K,null));break;case"hour":D(r.a.createElement(V,null));break;case"history":D(r.a.createElement(B,null));break;case"tutorial":default:D(null)}},[k]),r.a.createElement(r.a.Fragment,null,r.a.createElement("main",{className:"app ".concat(A?"":"app--unpopulated")},r.a.createElement(p.Provider,{value:{config:i,configDispatch:u}},r.a.createElement(b.Provider,{value:{history:h,historyDispatch:y}},M,O,r.a.createElement(x,{defaultStart:l.timeStart,defaultEnd:l.timeEnd,showMessages:!i.username.length,showBack:!!O&&"dashboard"!==k})))),z)};t(422);var X=function(){var e=r.a.createElement("span",{className:"logo-font"},"WAILto");return r.a.createElement(r.a.Fragment,null,r.a.createElement("section",{className:"home__header"},r.a.createElement("p",{className:"css-logo"},r.a.createElement("span",{className:"css-logo__wail"},"WAIL"),r.a.createElement("span",{className:"css-logo__to"},"to")),r.a.createElement("h1",null,"What Am I Listening To?"),r.a.createElement("div",{className:"header__btn-container"},r.a.createElement(T.b,{className:"btn-link btn-link--1",to:"/app"},r.a.createElement("button",{className:"btn"},"Get Started")),r.a.createElement("div",{className:"btn-link btn-link--2",onClick:function(e){document.querySelector("#get-started").scrollIntoView({behavior:"smooth",block:"start"})}},r.a.createElement("button",{className:"btn"},"Learn More"))),r.a.createElement(H.e,null,r.a.createElement(H.d,{data:[{"":0},{"":50},{"":35},{"":66},{"":90},{"":60},{"":84}]},"}>",r.a.createElement(H.c,{type:"monotone",dot:{stroke:"#aa5c9f",strokeWidth:4,r:10},dataKey:"",stroke:"#aa5c9f",strokeWidth:10})))),r.a.createElement("main",{className:"home"},r.a.createElement("section",{className:"home__body"},r.a.createElement("h2",null,"What Is ",r.a.createElement("span",{className:"logo-font"},e),"?"),r.a.createElement("p",null,r.a.createElement("span",{className:"body__p-header"},e)," (or"," ",r.a.createElement("strong",null,r.a.createElement("em",null,"What Am I Listening To")),") is a way to analyze your music listening history.",r.a.createElement("br",null),r.a.createElement("br",null),"Learn about your music listening trends, daily breakdowns, and history."),r.a.createElement("br",null),r.a.createElement("div",{className:"header__btn-container"},r.a.createElement(T.b,{className:"btn-link btn-link--1",to:"/app"},r.a.createElement("button",{className:"btn"},"Check It Out"))),r.a.createElement("br",null),r.a.createElement("h2",{id:"get-started"},"Get Started."),r.a.createElement("p",null,r.a.createElement("span",{className:"body__p-header"},r.a.createElement("span",{className:"logo-font"},"1. SIGN UP")," with Last.fm.")," ",r.a.createElement("br",null),r.a.createElement("a",{href:"https://www.last.fm/join",rel:"noopener noreferrer",target:"_blank"},"(You can do that here)")),r.a.createElement("p",null,"Now, I totally understand if you don't need another service in your life. Feel free to check out"," ",r.a.createElement(T.b,{to:"/zookeeprr"},"my account's dashboard")," if you just want to check out ",e),r.a.createElement("p",{className:"home__body__123"},r.a.createElement("span",{className:"body__p-header"},r.a.createElement("span",{className:"logo-font"},"2. CONNECT")," your music player to Last.fm."," "),r.a.createElement("br",null),"(They support a ton of players."," ",r.a.createElement("a",{href:"https://www.last.fm/about/trackmymusic",rel:"noopener noreferrer",target:"_blank"},"Find yours here."),") This will enable"," ",r.a.createElement("strong",null,r.a.createElement("em",null,"scrobbling"))," ","with Last.fm."),r.a.createElement("p",null,"Scrobbling allows ",e," to access your history for analysis. According to Last.fm:"),r.a.createElement("blockquote",null,"Scrobbling is when Last.fm tracks the music you listen to and automatically adds it to your music profile."),r.a.createElement("p",{className:"home__body__123"},r.a.createElement("span",{className:"body__p-header"},r.a.createElement("span",{className:"logo-font"},"3. Listen")," to some music!")),r.a.createElement("p",null,e," needs at least a day of history to really get interesting. In the meantime, feel free to check out"," ",r.a.createElement(T.b,{to:"/zookeeprr"},"my account's dashboard"),"."),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("h2",null,"What Have You Been Listening To?"),r.a.createElement("p",{className:"home__body__123"},r.a.createElement("span",{className:"body__p-header"},r.a.createElement("span",{className:"logo-font"},"Ready")," to see what your music listening looks like?")),r.a.createElement("div",{className:"header__btn-container"},r.a.createElement(T.b,{className:"btn-link btn-link--1",to:"/app"},r.a.createElement("button",{className:"btn"},"Find Out Now"))))),r.a.createElement(I,null))},Z=t(175),$=t.n(Z);var ee=function(){return r.a.createElement("section",{className:"home__body"},r.a.createElement("img",{src:$.a,alt:"WAILto"}))},ae=t(30);var te=function(){return r.a.createElement(T.a,null,r.a.createElement(ae.a,{path:"/",exact:!0,component:X}),r.a.createElement(ae.a,{path:"/(app|zookeeprr)",component:Q}),r.a.createElement(ae.a,{path:"/about",component:ee}))};c.a.render(r.a.createElement(te,null),document.getElementById("root"))},53:function(e,a,t){}},[[201,1,2]]]);
//# sourceMappingURL=main.ad51bcc1.chunk.js.map