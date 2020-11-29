(this["webpackJsonpcovid-19"]=this["webpackJsonpcovid-19"]||[]).push([[0],{102:function(e,t,c){},199:function(e,t,c){},200:function(e,t,c){},202:function(e,t,c){"use strict";c.r(t);var n=c(3),a=c(0),s=c(7),r=c.n(s),o=(c(96),c(11)),i=(c(97),c(237)),l=c(238),d=c(239),u=c(229),j=c(233),h=c(21),b=c(234);c(98);var f=function(e){var t=e.title,c=e.cases,a=e.total,s=e.active,r=e.isRed,o=Object(h.a)(e,["title","cases","total","active","isRed"]);return Object(n.jsx)(u.a,{onClick:o.onClick,className:"infoBox ".concat(s&&"infoBox--selected"," ").concat(r&&"infoBox--red"),children:Object(n.jsxs)(j.a,{children:[Object(n.jsx)(b.a,{color:"textSecondary",gutterBottom:!0,children:t}),Object(n.jsx)("h2",{className:"infoBox__cases ".concat(!r&&"infoBox__cases--green"),children:c}),Object(n.jsxs)(b.a,{className:"infoBox__total",color:"textSecondary",children:[a," Total"]})]})})},O=(c(102),c(83)),v=c(12),x=c.n(v),p={legend:{display:!1},elements:{point:{radius:0}},maintainAspectRatio:!1,tooltips:{mode:"index",intersect:!1,callbacks:{label:function(e,t){return x()(e.value).format("+0,0")}}},scales:{xAxes:[{type:"time",time:{parser:"MM/DD/YY",tooltipFormat:"ll"}}],yAxes:[{gridLines:{display:!1},ticks:{callback:function(e,t,c){return x()(e).format("0a")}}}]}};var m=function(){var e=Object(a.useState)({}),t=Object(o.a)(e,2),c=t[0],s=t[1];return Object(a.useEffect)((function(){fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=120").then((function(e){return e.json()})).then((function(e){var t=function(e,t){var c,n=[];for(var a in e.cases){if(c){var s={x:a,y:e[t][a]-c};n.push(s)}c=e[t][a]}return n}(e,"cases");s(t)}))}),[]),Object(n.jsx)("div",{className:"linegraph",children:(null===c||void 0===c?void 0:c.length)>0&&Object(n.jsx)(O.Line,{options:p,data:{datasets:[{backgroundColor:"rgba(204, 16, 52, 0.5)",borderColor:"#CC1034",data:c}]}})})};c(199);var g=function(e){var t=e.countries;return Object(n.jsx)("div",{className:"table",children:Object(n.jsx)("table",{children:Object(n.jsx)("tbody",{children:t.map((function(e,t){return Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:e.country}),Object(n.jsx)("td",{children:Object(n.jsx)("strong",{children:x()(e.cases).format("0,0")})})]},t)}))})})})},y=c(84),C=c(240),_=c(235),N={cases:{hex:"#CC1034",rgb:"rgb(204, 16, 52)",half_op:"rgba(204, 16, 52, 0.5)",multiplier:800},recovered:{hex:"#7dd71d",rgb:"rgb(125, 215, 29)",half_op:"rgba(125, 215, 29, 0.5)",multiplier:1200},deaths:{hex:"#fb4443",rgb:"rgb(251, 68, 67)",half_op:"rgba(251, 68, 67, 0.5)",multiplier:2e3}},k=function(e){return e?"+".concat(x()(e).format("0.0a")):"+0"},S=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"cases";return e.map((function(e,c){return Object(n.jsx)(C.a,{center:[e.countryInfo.lat,e.countryInfo.long],color:N[t].hex,fillColor:N[t].hex,fillOpacity:.4,radius:Math.sqrt(e[t])*N[t].multiplier,children:Object(n.jsx)(_.a,{children:Object(n.jsxs)("div",{className:"info-container",children:[Object(n.jsx)("div",{className:"info-flag",style:{backgroundImage:"url(".concat(e.countryInfo.flag,")")}}),Object(n.jsx)("div",{className:"info-name",children:e.country}),Object(n.jsxs)("div",{className:"info-confirmed",children:["Cases: ",x()(e.cases).format("0,0")]}),Object(n.jsxs)("div",{className:"info-recovered",children:["Recovered: ",x()(e.recovered).format("0,0")]}),Object(n.jsxs)("div",{className:"info-deaths",children:["Deaths: ",x()(e.deaths).format("0,0")]})]})})},c)}))},w=c(236),I=c(241);c(200);var B=function(e){var t=e.countries,c=e.casesType,a=e.center,s=e.zoom;return Object(n.jsx)("div",{className:"map",children:Object(n.jsxs)(w.a,{center:a,zoom:s,children:[Object(n.jsx)(I.a,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}),S(t,c)]})})},R=(c(201),function(){var e=Object(a.useState)("worldwide"),t=Object(o.a)(e,2),c=t[0],s=t[1],r=Object(a.useState)({}),h=Object(o.a)(r,2),b=h[0],O=h[1],v=Object(a.useState)([]),p=Object(o.a)(v,2),C=p[0],_=p[1],N=Object(a.useState)([]),S=Object(o.a)(N,2),w=S[0],I=S[1],R=Object(a.useState)([]),D=Object(o.a)(R,2),T=D[0],F=D[1],L=Object(a.useState)("cases"),z=Object(o.a)(L,2),E=z[0],M=z[1],A=Object(a.useState)({lat:34.80746,lng:-40.4796}),J=Object(o.a)(A,2),P=J[0],W=J[1],Y=Object(a.useState)(3),q=Object(o.a)(Y,2),V=q[0],G=q[1];Object(a.useEffect)((function(){fetch("https://disease.sh/v3/covid-19/all").then((function(e){return e.json()})).then((function(e){O(e)}))}),[]),Object(a.useEffect)((function(){fetch("https://disease.sh/v3/covid-19/countries").then((function(e){return e.json()})).then((function(e){var t=e.map((function(e){return{name:e.country,value:e.countryInfo.iso2}})),c=function(e){return Object(y.a)(e).sort((function(e,t){return e.cases>t.cases?-1:1}))}(e);_(t),I(e),F(c)}))}),[]);return Object(n.jsxs)("div",{className:"app",children:[Object(n.jsxs)("div",{className:"app__left",children:[Object(n.jsxs)("div",{className:"app__header",children:[Object(n.jsx)("h1",{children:"COVID-19 Tracker"}),Object(n.jsx)(i.a,{className:"app__dropdown",children:Object(n.jsxs)(l.a,{variant:"outlined",value:c,onChange:function(e){var t=e.target.value,c="worldwide"===t?"https://disease.sh/v3/covid-19/all":"https://disease.sh/v3/covid-19/countries/".concat(t);fetch(c).then((function(e){return e.json()})).then((function(e){s(t),O(e),W([e.countryInfo.lat,e.countryInfo.long]),G(4)}))},children:[Object(n.jsx)(d.a,{value:"worldwide",children:"Worldwide"},-1),C.map((function(e,t){return Object(n.jsx)(d.a,{value:e.value,children:e.name},t)}))]})})]}),Object(n.jsxs)("div",{className:"app__stats",children:[Object(n.jsx)(f,{onClick:function(e){return M("cases")},title:"Coronavirus Cases",isRed:!0,active:"cases"===E,cases:k(b.todayCases),total:x()(b.cases).format("0.0a")}),Object(n.jsx)(f,{onClick:function(e){return M("recovered")},title:"Recovered",active:"recovered"===E,cases:k(b.todayRecovered),total:x()(b.recovered).format("0.0a")}),Object(n.jsx)(f,{onClick:function(e){return M("deaths")},title:"Deaths",isRed:!0,active:"deaths"===E,cases:k(b.todayDeaths),total:x()(b.deaths).format("0.0a")})]}),Object(n.jsx)(B,{countries:w,casesType:E,center:P,zoom:V})]}),Object(n.jsx)(u.a,{className:"app__right",children:Object(n.jsx)(j.a,{children:Object(n.jsxs)("div",{className:"app__information",children:[Object(n.jsx)("h3",{children:"Live Cases by Country"}),Object(n.jsx)(g,{countries:T}),Object(n.jsxs)("h3",{children:["Worldwide new ",E]}),Object(n.jsx)(m,{casesType:E})]})})})]})}),D=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,243)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),n(e),a(e),s(e),r(e)}))};r.a.render(Object(n.jsx)(R,{}),document.getElementById("root")),D()},96:function(e,t,c){},97:function(e,t,c){},98:function(e,t,c){}},[[202,1,2]]]);
//# sourceMappingURL=main.db22f5d5.chunk.js.map