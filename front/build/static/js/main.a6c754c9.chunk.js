(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{162:function(e,t,a){},167:function(e,t){t.GENRELIST=["rock","electronic","alternative","indie","pop","metal","alternative rock","jazz","classic rock","ambient","experimental","folk","punk","indie rock","hard rock","hip-hop","instrumental","singer-songwriter","black metal","dance","progressive rock","death metal","heavy metal","hardcore","soul","chillout","electronica","classical","industrial","soundtrack","rap","blues","punk rock","thrash metal","acoustic","metalcore","psychedelic","post-rock","progressive metal","funk","hip hop","new wave","trance","house","reggae","trip-hop","post-punk","techno","electro","indie pop","rnb","country","power metal","downtempo","emo","post-hardcore","doom metal","oldies","psychedelic rock","gothic metal","synthpop","russian","gothic","grunge","britpop","swedish","noise","screamo","lounge","grindcore","nu metal","j-pop","polish","pop rock","chill","blues rock","avant-garde","new age","ska","drum and bass","progressive","shoegaze","darkwave","pop punk","dubstep","canadian","ebm","world","folk metal","easy listening","deathcore","j-rock","industrial metal","alternative metal","gothic rock","hardcore punk","disco","latin","lo-fi","dub","atmospheric","stoner rock","folk rock","drone","christian","celtic","sludge","garage rock","contemporary classical","electropop","smooth jazz","dream pop","psytrance","fusion","art rock","underground hip-hop","soft rock","acid jazz","swing","australian","neofolk","irish","baroque","k-pop","speed metal","korean","neoclassical","alt-country","rockabilly","rock n roll","glam rock","progressive trance","synth pop","video game music","space rock","americana","rock and roll","melodic hardcore","noise rock","atmospheric black metal","breakbeat","dark electro","emocore","goth","krautrock","composer","nu jazz","world music","post rock","post-metal","southern rock","rhythm and blues","smooth","russian rock","mathcore","club","medieval","breakcore","melodic metal","mpb","glitch","industrial rock","trip hop","rapcore","deep house","r&b","indie folk","bossa nova","opera","dancehall","gangsta rap","progressive house","experimental rock","pagan metal","groove metal","progressive death metal","dnb","dreamy","crust","eurodance","melodic black metal","vocal trance","drum n bass","symphonic black metal","electroclash","hiphop","vocal jazz","jrock","math rock","good","jazz fusion","african","nu-metal","avantgarde","psychobilly","crossover","hair metal","melodic","post-grunge","goregrind"]},169:function(e,t,a){e.exports=a.p+"static/media/sm.2a3978c5.png"},203:function(e,t,a){e.exports=a(430)},208:function(e,t,a){},210:function(e,t,a){},227:function(e,t,a){},240:function(e,t,a){},242:function(e,t,a){},243:function(e,t,a){},244:function(e,t,a){},245:function(e,t,a){},250:function(e,t,a){},428:function(e,t,a){},429:function(e,t,a){},430:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(20),c=a.n(l),o=(a(208),a(209),a(210),a(7)),s=a(163),m=a.n(s),i=a(164);function u(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function d(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?u(a,!0).forEach(function(t){Object(i.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):u(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var g=r.a.createContext(),p={timeStart:localStorage.getItem("wt-timeStart")||new Date,timeEnd:localStorage.getItem("wt-timeEnd")||new Date,unixTimeStart:null,unixTimeEnd:null,username:localStorage.getItem("wt-username")||"",genre:localStorage.getItem("wt-genre")||"",triggerStateUpdate:!1,appState:"home",configState:1},E=function(e){return"string"===typeof e?new Date(e):e},b=function(e,t){if(!e.timeStart||!e.timeEnd)return e;switch(e.timeEnd=E(e.timeEnd),e.timeStart=E(e.timeStart),e.prevTimeStart=E(e.prevTimeStart),e.unixTimeStart=Math.round(e.timeStart.getTime()/1e3),e.unixTimeEnd=Math.round(e.timeEnd.getTime()/1e3),t.type){case"USERNAME":return localStorage.setItem("wt-username",t.username),d({},e,{username:t.username});case"PREV_TIME_START":var a=Math.round(E(t.prevTimeStart.getTime())/1e3);return localStorage.setItem("wt-prevTimeStart",t.prevTimeStart),d({},e,{prevTimeStart:t.prevTimeStart,unixPrevTimeStart:a});case"TIME_START":var n=Math.round(E(t.timeStart).getTime()/1e3);return localStorage.setItem("wt-timeStart",t.timeStart),d({},e,{timeStart:t.timeStart,unixTimeStart:n});case"TIME_END":var r=function(e){var t=new Date(e.getTime());return t.setDate(t.getDate()),t.setHours(23),t.setMinutes(59),t.setSeconds(59),t}(E(t.timeEnd)),l=Math.round(r.getTime()/1e3);return localStorage.setItem("wt-timeEnd",t.timeEnd),d({},e,{timeEnd:r,unixTimeEnd:l});case"GENRE":return localStorage.setItem("wt-genre",t.genre),d({},e,{genre:t.genre});case"GENRE2":var c=t.genre2;return null!==c&&"null"!==c||(c=null),localStorage.setItem("wt-genre2",c),d({},e,{genre2:c});case"APP_STATE":return d({},e,{appState:t.appState});case"TRIGGER_STATE_UPDATE":return d({},e,{triggerStateUpdate:t.triggerStateUpdate});default:return p}},h=r.a.createContext(),f=function(e,t){return{songHistory:t.songHistory}},y=a(28),v=a(431),S=a(432),_=a(433),k=a(434),N=(a(227),Object(y.e)(function(e){var t=e.history,a=[{componentState:"hour",title:"Songs By Hour",subtitle:"Learn what hours of the day have the most songs",image:r.a.createElement(v.a,null)},{componentState:"dow",title:"Songs By Day of Week",subtitle:"See listening history for each day of the week.",image:r.a.createElement(S.a,null)},{componentState:"date",title:"Songs By Date",subtitle:"See a daily breakdown of listening history",image:r.a.createElement(_.a,null)},{componentState:"history",title:"Full History",subtitle:"Every song in your selected date range",image:r.a.createElement(k.a,null)}].map(function(e){return r.a.createElement("div",{key:e.title,className:"dashboard__module",onClick:function(a){t.push("dashboard/".concat(e.componentState))}},r.a.createElement("div",{className:"dashboard__module__heading"},r.a.createElement("div",{className:"dashboard__module__image"},e.image),r.a.createElement("p",{className:"dashboard__module__title"},e.title)),r.a.createElement("hr",null),r.a.createElement("p",{className:"dashboard__module__subtitle"},e.subtitle))});return r.a.createElement("section",{className:"dashboard"},a)})),w=a(436),O=a(437),j=a(435),T=Object(y.e)(function(e){var t=e.history;return r.a.createElement("button",{className:"nav__back-btn",onClick:function(e){t.goBack()}},r.a.createElement(j.a,null))}),D=a(10),L=function(e){var t=e.message,a=e.history,l=Object(n.useContext)(g).configDispatch,c=r.a.createElement("div",{className:"introduce-message"},r.a.createElement("p",{className:"help-title"},"Let's Get Started!"),r.a.createElement("p",{className:"help-link"},"Click the button to start:"),r.a.createElement("p",{className:"help-subtext"},r.a.createElement(D.b,{to:"/"},r.a.createElement("span",{id:"about-link",className:"clickable"},"\u2014\xa0More info\xa0\u2014")))),o=r.a.createElement("div",null,r.a.createElement("p",{className:"help-title"},"Look up Last.fm data"),r.a.createElement("p",{className:"help-link help-link--use-mine"},r.a.createElement("span",{className:"clickable use-mine",onClick:function(e){document.querySelector(".nav__heading--username").classList.add("atn--font-color"),document.querySelector(".username-input").classList.add("atn--border-color"),l({type:"USERNAME",username:"zookeeprr"}),"dashboard"!==window.location.href&&a.push("/dashboard")}},"Or see mine!")),r.a.createElement("p",{className:"help-subtext"},r.a.createElement(D.b,{to:"/"},r.a.createElement("span",{id:"about-link",className:"clickable"},"\u2014\xa0More info\xa0\u2014"))));switch(t){case"tutorial":return o;case"default":return c;default:return null}},I=function(e){e?(document.querySelector(".nav__heading--username").classList.add("atn--font-color"),document.querySelector(".username-input").classList.add("atn--border-color")):(document.querySelector(".nav__heading--username").classList.remove("atn--font-color"),document.querySelector(".username-input").classList.remove("atn--border-color"))},x=function(){var e=Object(n.useContext)(g),t=e.config,a=e.configDispatch,l=Object(n.useState)(t.username),c=Object(o.a)(l,2),s=c[0],m=c[1];return Object(n.useEffect)(function(){"zookeeprr"===t.username?function(){I(!0);for(var e=function(e){setTimeout(function(){m("zookeeprr".substring(0,e))},50*e)},t=1;t<="zookeeprr".length;t++)e(t)}():(I(!1),m(t.username))},[t.username]),r.a.createElement("div",{className:"nav__username input-wrapper"},r.a.createElement("label",{className:"nav__heading nav__heading--username",htmlFor:"username"},"Username\xa0",r.a.createElement("a",{href:"https://www.last.fm/join",rel:"noopener noreferrer",target:"_blank"},r.a.createElement("span",{className:"clickable header-help-link"},"(Need a username?)"))),r.a.createElement("span",{className:"required-reminder"},"\xa0\u2014\xa0please enter a username"),r.a.createElement("input",{name:"username",className:"username-input",placeholder:"Last.fm username",type:"text",value:s,onChange:function(e){a({type:"USERNAME",username:e.target.value})}}))},M=a(99),A=a.n(M),C=function(e){var t=new Date(e),a=""+(t.getMonth()+1),n=""+t.getDate(),r=t.getFullYear();return a.length<2&&(a="0"+a),n.length<2&&(n="0"+n),[r,a,n].join("-")},P=function(){var e=Object(n.useContext)(g),t=e.config,a=e.configDispatch;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"nav__date-pickers nav__date-pickers--dates"},r.a.createElement("div",{className:"input-wrapper input-wrapper--start-date"},r.a.createElement("label",{className:"nav__heading"},"Start date:"),r.a.createElement(A.a,{style:{width:"100%"},dayPickerProps:{selectedDays:t.timeStart,disabledDays:function(e){return e>t.timeEnd||e<(new Date).setDate((new Date).getDate()-62)}},value:C(t.timeStart),placeholder:"YYYY-M-D",onDayChange:function(e){return e>t.timeEnd?t.timeEnd:e<(new Date).setDate((new Date).getDate()-62)?(new Date).setDate((new Date).getDate()-62):void(e&&a({type:"TIME_START",timeStart:e}))}})),r.a.createElement("div",{className:"input-wrapper input-wrapper--end-date"},r.a.createElement("label",{className:"nav__heading"},"End date:"),r.a.createElement(A.a,{style:{width:"100%"},dayPickerProps:{selectedDays:t.timeEnd,disabledDays:function(e){return e>new Date||e<t.timeStart}},value:C(t.timeEnd),placeholder:"YYYY-M-D",onDayChange:function(e){e&&a({type:"TIME_END",timeEnd:e})}}))))},R=a(103),H=a(167),G=function(e,t){return!!e&&("any genre"!==e||!(!t||"any genre"===t))},q=function(e,t){return!(!e||!t||"any genre"===t)},z=function(e,t){return G(e,t)?e:"song count"},F=function(e,t){return q(e,t)?t:null},U=(a(240),function(){var e=Object(n.useContext)(g),t=e.config,a=e.configDispatch,l=Object(n.useState)(!1),c=Object(o.a)(l,2),s=c[0],m=c[1],i=Object(n.useState)("none"),u=Object(o.a)(i,2),d=u[0],p=u[1],E=Object(n.useState)("none"),b=Object(o.a)(E,2),h=b[0],f=b[1],y=Object(n.useState)(!1),v=Object(o.a)(y,2),S=v[0],_=v[1],k=Object(n.useState)("none"),N=Object(o.a)(k,2),w=N[0],O=N[1],j=Object(n.useState)("none"),T=Object(o.a)(j,2),D=T[0],L=T[1],I=H.GENRELIST.map(function(e){return{value:e,label:e}});return I.unshift({value:"any genre",label:"any genre"}),Object(n.useEffect)(function(){G(t.genre,t.genre2)?m(!0):m(!1),q(t.genre,t.genre2)?_(!0):_(!1)},[t.genre,t.genre2]),Object(n.useEffect)(function(){s||S||(p("none"),O("none"),f("block"),L("none")),s&&(p("block"),O("none"),f("none"),L("block")),s&&S&&(p("block"),O("block"),f("none"),L("none"))},[s,S]),r.a.createElement("div",{className:"nav__date-pickers"},r.a.createElement("div",{className:"input-wrapper input-wrapper--start-date"},r.a.createElement("span",{className:"btn genre-toggle genre-toggle--1",style:{display:h},onClick:function(e){m(!0)}},"Filter Genre?"),r.a.createElement("label",{style:{display:d},className:"nav__heading"},"Genre:"),r.a.createElement("div",{style:{display:d}},r.a.createElement(R.a,{value:{value:t.genre,label:t.genre},onChange:function(e){a({type:"GENRE",genre:e.value})},options:I}))),r.a.createElement("div",{className:"input-wrapper input-wrapper--end-date"},r.a.createElement("span",{className:"genre-toggle genre-toggle--2",style:{display:D},onClick:function(e){_(!0)}},"Compare Genre?"),r.a.createElement("label",{style:{display:w},className:"nav__heading"},"2",r.a.createElement("sup",null,"nd")," Genre:"),r.a.createElement("div",{style:{display:w}},r.a.createElement(R.a,{value:{value:t.genre2,label:t.genre2},onChange:function(e){"any genre"===e.value?(_(!1),a({type:"GENRE2",genre2:"any genre"})):a({type:"GENRE2",genre2:e.value})},options:I}))))}),W=(a(242),a(243),function(e){e?(document.querySelector(".nav").classList.remove("nav--collapsed"),document.querySelector(".nav").classList.add("nav--uncollapsed")):document.querySelector(".nav").classList.contains("nav--uncollapsed")&&(document.querySelector(".nav").classList.remove("nav--uncollapsed"),document.querySelector(".nav").classList.add("nav--collapsed"))}),Y=Object(y.e)(function(e){var t=e.history,a=e.showMessages,l=e.showBack,c=e.defaultStart,s=e.defaultEnd,m=Object(n.useContext)(g),i=m.config,u=m.configDispatch,d=Object(n.useState)(null),p=Object(o.a)(d,2),E=p[0],b=p[1],h=Object(n.useState)(null),f=Object(o.a)(h,2),y=f[0],v=f[1],S=Object(n.useState)(r.a.createElement(w.a,null)),_=Object(o.a)(S,2),k=_[0],N=_[1],j=Object(n.useState)(!localStorage.getItem("wt-username")),D=Object(o.a)(j,2),I=D[0],M=D[1],A=function(e){return 13===(e.which||e.keyCode)&&C(),!1},C=function(){i.username?(b(!1),window.location.href.includes("dashboard")?u({type:"APP_STATE",appState:i.appState}):t.push("/dashboard"),u({type:"TRIGGER_STATE_UPDATE",triggerStateUpdate:!0})):function(e){if(e)return document.querySelector(".nav__username").classList.add("nav__username--invalid"),document.querySelector(".nav__heading--username").classList.add("atn--font-color"),document.querySelector(".username-input").classList.add("atn--border-color"),void setTimeout(function(){document.querySelector(".nav__heading--username").classList.remove("atn--font-color"),document.querySelector(".username-input").classList.remove("atn--border-color")},1e3);document.querySelector(".nav__username").classList.contains("nav__username--invalid")&&document.querySelector(".nav__username").classList.remove("nav__username--invalid")}(!0)};return Object(n.useEffect)(function(){E?document.addEventListener("keypress",A):document.removeEventListener("keypress",A)},[E]),Object(n.useEffect)(function(){E?(N(r.a.createElement(O.a,null)),W(!0),v(a?"tutorial":null)):(N(r.a.createElement(w.a,null)),W(!1),v(a?"default":null))},[E,a,c,s]),r.a.createElement("header",{className:"main-header"},r.a.createElement("div",{className:"main-header__inner"},r.a.createElement("nav",{className:"nav"},r.a.createElement(x,null),r.a.createElement(P,null),r.a.createElement(U,null),r.a.createElement("button",{className:"submit-btn",onClick:function(e){C()}},"What Am I Listening to?")),r.a.createElement("div",{className:"main-header__bottom"},r.a.createElement(L,{defaultStart:c,defaultEnd:s,message:y,history:t}),l?r.a.createElement(T,null):r.a.createElement("span",null),r.a.createElement("button",{className:"nav__toggle-btn ".concat(I?"animated":""),onClick:function(e){b(!E),M(!1)}},k))))}),J=a(438),K=(a(244),a(169)),B=a.n(K),V=function(){var e=r.a.createElement("span",{className:"logo-font"},"WAILto");return r.a.createElement("footer",null,r.a.createElement("div",null,r.a.createElement(D.b,{className:"footer-img",to:"/"},r.a.createElement("p",{className:"css-logo"},r.a.createElement("span",{className:"css-logo__wail"},"WAIL"),r.a.createElement("span",{className:"css-logo__to"},"to")))),r.a.createElement("div",null,r.a.createElement("p",{className:"footer-p"},r.a.createElement("a",{href:"https://github.com/regexpressyourself/wailto",className:"footer-gh-link",rel:"noopener noreferrer",target:"_blank"},r.a.createElement(J.a,null),e," \xa0is 100% open source"))),r.a.createElement("div",{className:"smessina-info"},r.a.createElement("p",{className:"footer-p"},r.a.createElement("a",{href:"https://smessina.com",rel:"noopener noreferrer",target:"_blank"},"Sam Messina",r.a.createElement("br",null),"\xa9 ",(new Date).getFullYear())),r.a.createElement("p",null,r.a.createElement("a",{className:"footer-img",href:"https://smessina.com",rel:"noopener noreferrer",target:"_blank"},r.a.createElement("img",{className:"sm-fav",src:B.a,alt:"smessina.com"})))))},Q=(a(245),function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"loading"},"Loading",r.a.createElement("span",null,"."),r.a.createElement("span",null,"."),r.a.createElement("span",null,".")))}),X=function(e){var t="am";return e>=12&&(e-=12,t="pm"),0===e&&(e=12),e+t},Z=function(e){var t=new Date(1e3*e),a=t.getFullYear(),n=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][t.getMonth()],r=t.getDate(),l=t.getDay(),c=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][t.getDay()],o=t.getHours(),s="0"+t.getMinutes();s=s.substr(-2);var m="0"+t.getSeconds();m=m.substr(-2);var i="am";o>=12&&(i="pm");var u=o%12+":"+s+i;return{date:"".concat(n," ").concat(r,", ").concat(a),time:u,month:n,day:r,dow:l,dowName:c,year:a,hour:o,minutes:s,seconds:m}},$=function(e){var t=e,a=t.getFullYear(),n=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][t.getMonth()],r=t.getDate(),l=t.getDay(),c=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][t.getDay()],o=t.getHours(),s="0"+t.getMinutes();s=s.substr(-2);var m="0"+t.getSeconds();m=m.substr(-2);var i="am";o>=12&&(i="pm");var u=o%12+":"+s+i;return{date:"".concat(n," ").concat(r,", ").concat(a),time:u,month:n,day:r,dow:l,dowName:c,year:a,hour:o,minutes:s,seconds:m}},ee=function(e,t,a){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return function(e,t,a){var n=new Array(t),r=!0,l=!1,c=void 0;try{for(var o,s=e[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){var m=o.value,i=m.date,u=Z(i)[a];n[u]?n[u].push(m):n[u]=[m]}}catch(d){l=!0,c=d}finally{try{r||null==s.return||s.return()}finally{if(l)throw c}}return n}(a=a.filter(function(e){return function(e,t){return"any genre"===t?e:t&&![e.genre1,e.genre2,e.genre3,e.genre4].includes(t)?null:e}(e,n)}),t,e)},te=function(){var e=Object(n.useContext)(g).config,t=Object(n.useState)(null),a=Object(o.a)(t,2),l=a[0],c=a[1];return Object(n.useEffect)(function(){var t=G(e.genre,e.genre2),a=q(e.genre,e.genre2);c(t&&a?r.a.createElement("div",null,r.a.createElement("p",{className:"user-info__more-info"},r.a.createElement("span",{className:"genre"},e.genre),"\xa0 & \xa0",r.a.createElement("span",{className:"genre2"},e.genre2))):t?r.a.createElement("div",null,r.a.createElement("p",{className:"user-info__more-info"},e.genre)):null)},[e.genre,e.genre2]),r.a.createElement("section",{className:"user-info"},r.a.createElement("p",{className:"user-info__username"},e.username),r.a.createElement("div",null,r.a.createElement("p",{className:"user-info__more-info"},$(e.timeStart).date,"\xa0 \u2014 \xa0",$(e.timeEnd).date)),l)},ae=a(63),ne=a.n(ae),re=(a(250),function(e){for(var t=e.genres,a=e.image,n=e.name,l=e.artist,c=e.album,o=e.date,s=[],m=0;m<t.length;m++)t[m]&&(m!==t.length-1?s.push(t[m]+", "):s.push(t[m]));var i=null;return t.length&&(i=r.a.createElement(r.a.Fragment,null,r.a.createElement("hr",null),r.a.createElement("p",{className:"song-item__genres"},s))),r.a.createElement("div",{className:"song-item"},r.a.createElement("div",{className:"song-item__info"},r.a.createElement(ne.a,null,r.a.createElement("img",{className:"song-item__img",alt:"album cover",src:a})),r.a.createElement("div",null,r.a.createElement("p",{className:"song-item__info__title"},n),r.a.createElement("p",{className:"song-item__info__content"},r.a.createElement("span",{className:"song-item__info__content__artist"},l),r.a.createElement("br",null),"\u2014 ",c))),r.a.createElement("div",{className:"song-item__right"},r.a.createElement("p",{className:"song-item__date"},o.dowName,"\xa0",o.date,"\xa0",o.time),i))}),le=(a(51),function(){var e=Object(n.useContext)(h).songHistory,t=Object(n.useContext)(g).config,a=Object(n.useState)(null),l=Object(o.a)(a,2),c=l[0],s=l[1];return Object(n.useEffect)(function(){s(e.songHistory.map(function(e){var a=Z(e.date),n=[e.genre1,e.genre2,e.genre3,e.genre4];if(t.genre&&"any genre"!==t.genre&&!n.includes(t.genre)){if(!t.genre2||"any genre"===t.genre2)return null;if(!n.includes(t.genre2))return null}return r.a.createElement(ne.a,{height:100},r.a.createElement(re,{key:e.id+e.date,image:e.image,album:e.album,artist:e.artist,name:e.name,genres:n,date:a}))}).reverse())},[t.genre,t.genre2,t.timeStart,t.timeEnd,e.songHistory]),r.a.createElement("div",{className:"chart-container"},r.a.createElement("h1",{className:"chart-heading"},"Every Song In History"),c)}),ce=a(8),oe=function(){var e=Object(n.useContext)(h).songHistory,t=Object(n.useContext)(g).config,a=Object(n.useState)(null),l=Object(o.a)(a,2),c=l[0],s=l[1],m=Object(n.useState)(z(t.genre,t.genre2)),i=Object(o.a)(m,2),u=i[0],d=i[1],p=Object(n.useState)(F(t.genre,t.genre2)),E=Object(o.a)(p,2),b=E[0],f=E[1],y=Object(n.useState)(new Date(t.timeEnd)),v=Object(o.a)(y,2),S=v[0],_=v[1],k=Object(n.useState)(new Date(t.timeStart)),N=Object(o.a)(k,2),w=N[0],O=N[1],j=Object(n.useState)(function(e,t){for(var a=[];e<t;){var n=e.getFullYear(),r=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][e.getMonth()],l=e.getDate(),c="".concat(r," ").concat(l,", ").concat(n);a.push(c),e.setDate(e.getDate()+1)}return a}(w,S)),T=Object(o.a)(j,1)[0];return Object(n.useEffect)(function(){_(new Date(t.timeEnd)),O(new Date(t.timeStart))},[t.timeEnd,t.timeStart]),Object(n.useEffect)(function(){var a={},n=z(t.genre,t.genre2),r=F(t.genre,t.genre2);d(n),f(r),a[n]=ee("date",T.length,e.songHistory,t.genre),a[r]=ee("date",T.length,e.songHistory,t.genre2);for(var l=[],c=0;c<T.length;c++){var o={name:T[c]};o[n]=a[n][T[c]]?a[n][T[c]].length:0,o[r]=a[r][T[c]]?a[r][T[c]].length:0,l.push(o)}s(l)},[T,e.songHistory,t.genre,t.genre2]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"chart-container"},r.a.createElement("h1",{className:"chart-heading"},"Song Listens",r.a.createElement("br",null)," ",r.a.createElement("span",{className:"per"},"\u2014by\u2014")," ",r.a.createElement("br",null),"Date"),r.a.createElement(ce.e,null,r.a.createElement(ce.b,{data:c},r.a.createElement(ce.g,{dataKey:"name"}),r.a.createElement(ce.h,null),r.a.createElement(ce.f,null),r.a.createElement(ce.a,{type:"monotone",dataKey:u,stroke:"#7f4782",fill:"#aa5c9f"}),b?r.a.createElement(ce.a,{type:"monotone",dataKey:b,stroke:"#fd8b7b",fill:"#e2598b"}):null))))},se=function(){var e=Object(n.useContext)(h).songHistory,t=Object(n.useContext)(g).config,a=Object(n.useState)(null),l=Object(o.a)(a,2),c=l[0],s=l[1],m=Object(n.useState)(z(t.genre,t.genre2)),i=Object(o.a)(m,2),u=i[0],d=i[1],p=Object(n.useState)(F(t.genre,t.genre2)),E=Object(o.a)(p,2),b=E[0],f=E[1];return Object(n.useEffect)(function(){var a={},n=z(t.genre,t.genre2),r=F(t.genre,t.genre2);d(n),f(r),a[n]=ee("dow",7,e.songHistory,t.genre),t.genre2&&(a[r]=ee("dow",7,e.songHistory,t.genre2));for(var l=[],c=0;c<=6;c++){var o={name:"".concat(["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][c],"s")};o[n]=a[n][c]?a[n][c].length:0,o[r]=a[r]&&a[r][c]?a[r][c].length:0,l.push(o)}s(l)},[e.songHistory,t.genre,t.genre2]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"chart-container"},r.a.createElement("h1",{className:"chart-heading"},"Song Listens",r.a.createElement("br",null)," ",r.a.createElement("span",{className:"per"},"\u2014by\u2014")," ",r.a.createElement("br",null),"Day of Week"),r.a.createElement(ce.e,null,r.a.createElement(ce.b,{data:c},r.a.createElement(ce.g,{dataKey:"name"}),r.a.createElement(ce.h,null),r.a.createElement(ce.f,null),r.a.createElement(ce.a,{type:"monotone",dataKey:u,stroke:"#7f4782",fill:"#aa5c9f"}),b?r.a.createElement(ce.a,{type:"monotone",dataKey:b,stroke:"#fd8b7b",fill:"#e2598b"}):null))))},me=function(){var e=Object(n.useContext)(h).songHistory,t=Object(n.useContext)(g).config,a=Object(n.useState)(null),l=Object(o.a)(a,2),c=l[0],s=l[1],m=Object(n.useState)(z(t.genre,t.genre2)),i=Object(o.a)(m,2),u=i[0],d=i[1],p=Object(n.useState)(F(t.genre,t.genre2)),E=Object(o.a)(p,2),b=E[0],f=E[1];return Object(n.useEffect)(function(){var a={},n=z(t.genre,t.genre2),r=F(t.genre,t.genre2);d(n),f(r),a[n]=ee("hour",24,e.songHistory,t.genre),t.genre2&&(a[r]=ee("hour",24,e.songHistory,t.genre2));for(var l=[],c=0;c<=23;c++){var o={name:X(c)};o[n]=a[n][c]?a[n][c].length:0,o[r]=a[r]&&a[r][c]?a[r][c].length:0,l.push(o)}s(l)},[e.songHistory,t.genre,t.genre2]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"chart-container"},r.a.createElement("h1",{className:"chart-heading"},"Song Listens",r.a.createElement("br",null)," ",r.a.createElement("span",{className:"per"},"\u2014by\u2014")," ",r.a.createElement("br",null),"Hour of Day"),r.a.createElement(ce.e,null,r.a.createElement(ce.b,{data:c},r.a.createElement(ce.g,{dataKey:"name"}),r.a.createElement(ce.h,null),r.a.createElement(ce.f,null),r.a.createElement(ce.a,{type:"monotone",dataKey:u,stroke:"#7f4782",fill:"#aa5c9f"}),b?r.a.createElement(ce.a,{type:"monotone",dataKey:b,stroke:"#fd8b7b",fill:"#e2598b"}):null))))},ie=(a(162),a(428),function(e){var t=e.errorMessage;return r.a.createElement("div",{className:"error-page-wrapper"},r.a.createElement("section",{className:"home__header home__header--error"},r.a.createElement("p",{className:"css-logo css-logo--error"},r.a.createElement("span",{className:"css-logo__wail"},"Oops!")),r.a.createElement("h1",null,"Somethine went wrong!"),r.a.createElement("p",{className:"server-message"},"Our servers are saying it's something to do with:"),r.a.createElement("p",{className:"server-message server-message--code"},r.a.createElement("code",null,t)),r.a.createElement("div",{className:"header__btn-container"},r.a.createElement(D.b,{className:"btn-link btn-link--1",to:"/app"},r.a.createElement("button",{className:"btn"},"Go Back To Safety")),r.a.createElement("div",{className:"btn-link btn-link--2",onClick:function(e){window.location.href="https://smessina.com"}},r.a.createElement("button",{className:"btn"},"Speak To The Dev"))),r.a.createElement(ce.e,null,r.a.createElement(ce.d,{data:[{"":90},{"":50},{"":66},{"":79},{"":50},{"":40},{"":0}]},"}>",r.a.createElement(ce.c,{type:"monotone",dot:{stroke:"#aa5c9f",strokeWidth:4,r:10},dataKey:"",stroke:"#aa5c9f",strokeWidth:10})))))}),ue=(a(429),function(e){var t=e.appState,a=e.history;window.scrollTo(0,0);var l=new Date,c=new Date,s=new Date;s.setDate(l.getDate()-1),c.setDate(l.getDate()-8);var i="null"===localStorage.getItem("wt-genre2")?null:localStorage.getItem("wt-genre2"),u={timeStart:localStorage.getItem("wt-timeStart")||c,timeEnd:localStorage.getItem("wt-timeEnd")||s,username:localStorage.getItem("wt-username")||"",genre:localStorage.getItem("wt-genre")||"",genre2:i||""},d=Object(n.useReducer)(b,u),p=Object(o.a)(d,2),E=p[0],y=p[1],v=Object(n.useReducer)(f,{}),S=Object(o.a)(v,2),_=S[0],k=S[1];window.location.href.includes("zookeeprr")&&(console.log("zoo"),y({type:"TIME_START",timeStart:u.timeStart}),y({type:"TIME_END",timeEnd:u.timeEnd}),y({type:"GENRE",genre:u.genre}),y({type:"USERNAME",username:"zookeeprr"}),y({type:"APP_STATE",appState:"dashboard"}),y({type:"TRIGGER_STATE_UPDATE",triggerStateUpdate:!0}),a.replace("/dashboard"));var w=Object(n.useState)(null),O=Object(o.a)(w,2),j=O[0],T=O[1],D=Object(n.useState)(null),L=Object(o.a)(D,2),I=L[0],x=L[1],M=E.appState||"tutorial"===!E.appState||"updating"===!E.appState,A=M?r.a.createElement(V,null):null;return Object(n.useEffect)(function(){t&&t!==E.appState&&(y({type:"APP_STATE",appState:t}),y({type:"TRIGGER_STATE_UPDATE",triggerStateUpdate:!0})),E.triggerStateUpdate&&(T(r.a.createElement(Q,null)),x(r.a.createElement(te,null)),m.a.get("/history",{params:{username:E.username,to:E.unixTimeEnd,from:E.unixTimeStart}}).then(function(e){switch(k({songHistory:e.data}),E.appState){case"updating":T(r.a.createElement(Q,null));break;case"dashboard":T(r.a.createElement(N,null));break;case"dow":T(r.a.createElement(se,null));break;case"date":T(r.a.createElement(oe,null));break;case"hour":T(r.a.createElement(me,null));break;case"history":T(r.a.createElement(le,null));break;case"tutorial":default:T(null)}y({type:"TRIGGER_STATE_UPDATE",triggerStateUpdate:!1})}).catch(function(e){try{document.querySelector("footer").style.display="none",document.querySelector(".main-header").style.display="none",document.querySelector(".user-info").style.display="none"}catch(e){}502!==e.response.status?T(r.a.createElement(ie,{errorMessage:"Actually we have no idea. Our bad. Maybe the server's down?"})):T(r.a.createElement(ie,{errorMessage:e.response.data}))}))},[t,E.triggerStateUpdate,E.appState,E.username,E.unixTimeEnd,E.unixTimeStart]),r.a.createElement(r.a.Fragment,null,r.a.createElement("main",{className:"app ".concat(M?"":"app--unpopulated")},r.a.createElement(g.Provider,{value:{config:E,configDispatch:y}},r.a.createElement(h.Provider,{value:{songHistory:_,songHistoryDispatch:k}},I,j,r.a.createElement(Y,{defaultStart:u.timeStart,defaultEnd:u.timeEnd,showMessages:!E.appState||"home"===E.appState,showBack:"dow"===E.appState||"date"===E.appState||"hour"===E.appState||"history"===E.appState})))),A)}),de=function(){var e=r.a.createElement("span",{className:"logo-font"},"WAILto");return r.a.createElement(r.a.Fragment,null,r.a.createElement("section",{className:"home__header"},r.a.createElement("p",{className:"css-logo"},r.a.createElement("span",{className:"css-logo__wail"},"WAIL"),r.a.createElement("span",{className:"css-logo__to"},"to")),r.a.createElement("h1",null,"What Am I Listening To?"),r.a.createElement("div",{className:"header__btn-container"},r.a.createElement(D.b,{className:"btn-link btn-link--1",to:"/app"},r.a.createElement("button",{className:"btn"},"Get Started")),r.a.createElement("div",{className:"btn-link btn-link--2",onClick:function(e){document.querySelector("#get-started").scrollIntoView({behavior:"smooth",block:"start"})}},r.a.createElement("button",{className:"btn"},"Learn More"))),r.a.createElement(ce.e,null,r.a.createElement(ce.d,{data:[{"":0},{"":50},{"":35},{"":66},{"":90},{"":60},{"":84}]},"}>",r.a.createElement(ce.c,{type:"monotone",dot:{stroke:"#aa5c9f",strokeWidth:4,r:10},dataKey:"",stroke:"#aa5c9f",strokeWidth:10})))),r.a.createElement("main",{className:"home"},r.a.createElement("div",{className:"header__btn-container"},r.a.createElement(D.b,{className:"btn-link btn-link--1",to:"/zookeeprr"},r.a.createElement("button",{className:"btn"},"Demo ",e,r.a.createElement("br",null),r.a.createElement("span",{className:"sub-button"},"(spoiler: it's my account)")))),r.a.createElement("section",{className:"home__body"},r.a.createElement("h2",null,"What Is ",r.a.createElement("span",{className:"logo-font"},e),"?"),r.a.createElement("p",null,r.a.createElement("span",{className:"body__p-header"},e)," (or"," ",r.a.createElement("strong",null,r.a.createElement("em",null,"What Am I Listening To")),") is a way to analyze your music listening history.",r.a.createElement("br",null),r.a.createElement("br",null),"Learn about your music listening trends, daily breakdowns, and history."),r.a.createElement("br",null),r.a.createElement("div",{className:"header__btn-container"},r.a.createElement(D.b,{className:"btn-link btn-link--1",to:"/app"},r.a.createElement("button",{className:"btn"},"Check It Out"))),r.a.createElement("br",null),r.a.createElement("h2",{id:"get-started"},"Get Started."),r.a.createElement("p",null,r.a.createElement("span",{className:"body__p-header"},r.a.createElement("span",{className:"logo-font"},"1. SIGN UP")," with Last.fm.")," ",r.a.createElement("br",null),r.a.createElement("a",{href:"https://www.last.fm/join",rel:"noopener noreferrer",target:"_blank"},"(You can do that here)")),r.a.createElement("p",null,"Now, I totally understand if you don't need another service in your life. Feel free to check out ",r.a.createElement(D.b,{to:"/zookeeprr"},"my account's dashboard")," if you just want to check out ",e),r.a.createElement("p",{className:"home__body__123"},r.a.createElement("span",{className:"body__p-header"},r.a.createElement("span",{className:"logo-font"},"2. CONNECT")," your music player to Last.fm."," "),r.a.createElement("br",null),"(They support a ton of players."," ",r.a.createElement("a",{href:"https://www.last.fm/about/trackmymusic",rel:"noopener noreferrer",target:"_blank"},"Find yours here."),") This will enable"," ",r.a.createElement("strong",null,r.a.createElement("em",null,"scrobbling"))," ","with Last.fm."),r.a.createElement("p",null,"Scrobbling allows ",e," to access your history for analysis. According to Last.fm:"),r.a.createElement("blockquote",null,"Scrobbling is when Last.fm tracks the music you listen to and automatically adds it to your music profile."),r.a.createElement("p",{className:"home__body__123"},r.a.createElement("span",{className:"body__p-header"},r.a.createElement("span",{className:"logo-font"},"3. Listen")," to some music!")),r.a.createElement("p",null,e," needs at least a day of history to really get interesting. In the meantime, feel free to check out ",r.a.createElement(D.b,{to:"/zookeeprr"},"my account's dashboard"),"."),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("h2",null,"What Have You Been Listening To?"),r.a.createElement("p",{className:"home__body__123"},r.a.createElement("span",{className:"body__p-header"},r.a.createElement("span",{className:"logo-font"},"Ready")," to see what your music listening looks like?")),r.a.createElement("div",{className:"header__btn-container"},r.a.createElement(D.b,{className:"btn-link btn-link--1",to:"/app"},r.a.createElement("button",{className:"btn"},"Find Out Now"))))),r.a.createElement(V,null))},ge=function(){return r.a.createElement(D.a,null,r.a.createElement(y.a,{exact:!0,path:"/",component:de}),r.a.createElement(y.a,{exact:!0,path:"/error",component:Error}),r.a.createElement(y.a,{exact:!0,path:"/(app|zookeeprr)",render:function(e){return r.a.createElement(ue,e)}}),r.a.createElement(y.a,{exact:!0,path:"/dashboard",render:function(e){return r.a.createElement(ue,Object.assign({},e,{appState:"dashboard"}))}}),r.a.createElement(y.a,{exact:!0,path:"/dashboard/dow",render:function(e){return r.a.createElement(ue,Object.assign({},e,{appState:"dow"}))}}),r.a.createElement(y.a,{exact:!0,path:"/dashboard/date",render:function(e){return r.a.createElement(ue,Object.assign({},e,{appState:"date"}))}}),r.a.createElement(y.a,{exact:!0,path:"/dashboard/hour",render:function(e){return r.a.createElement(ue,Object.assign({},e,{appState:"hour"}))}}),r.a.createElement(y.a,{exact:!0,path:"/dashboard/week",render:function(e){return r.a.createElement(ue,Object.assign({},e,{appState:"week"}))}}),r.a.createElement(y.a,{exact:!0,path:"/dashboard/history",render:function(e){return r.a.createElement(ue,Object.assign({},e,{appState:"history"}))}}))};c.a.render(r.a.createElement(ge,null),document.getElementById("root"))},51:function(e,t,a){}},[[203,1,2]]]);
//# sourceMappingURL=main.a6c754c9.chunk.js.map