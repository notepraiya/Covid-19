(this["webpackJsonpcovid-19"]=this["webpackJsonpcovid-19"]||[]).push([[0],{101:function(e,t,n){},105:function(e,t,n){},202:function(e,t,n){},203:function(e,t,n){},205:function(e,t,n){"use strict";n.r(t);var a=n(3),c=n(0),s=n(8),o=n.n(s),r=n(11),i=n(14),l=n(88),d=n(244),j=n(243),u=n(245),f=n(246),b=n(247),h=n(248),m=n(235),O=n(239),x=n(22),v=n(240);n(101);var p=function(e){var t=e.title,n=e.cases,c=e.total,s=e.active,o=e.isRed,r=Object(x.a)(e,["title","cases","total","active","isRed"]);return Object(a.jsx)(m.a,{onClick:r.onClick,className:"infoBox ".concat(s&&"infoBox--selected"," ").concat(o&&"infoBox--red"),children:Object(a.jsxs)(O.a,{children:[Object(a.jsx)(v.a,{color:"textSecondary",gutterBottom:!0,children:t}),Object(a.jsx)("h2",{className:"infoBox__cases ".concat(!o&&"infoBox__cases--green"),children:n}),Object(a.jsxs)(v.a,{className:"infoBox__total",color:"textSecondary",children:[c," Total"]})]})})},g=(n(105),n(87)),y=n(12),C=n.n(y),N={legend:{display:!1},elements:{point:{radius:0}},maintainAspectRatio:!1,tooltips:{mode:"index",intersect:!1,callbacks:{label:function(e,t){return C()(e.value).format("+0,0")}}},scales:{xAxes:[{type:"time",time:{parser:"MM/DD/YY",tooltipFormat:"ll"}}],yAxes:[{gridLines:{display:!1},ticks:{callback:function(e,t,n){return C()(e).format("0a")}}}]}};var k=function(){var e=Object(c.useState)({}),t=Object(r.a)(e,2),n=t[0],s=t[1];return Object(c.useEffect)((function(){fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=120").then((function(e){return e.json()})).then((function(e){var t=function(e,t){var n,a=[];for(var c in e.cases){if(n){var s={x:c,y:e[t][c]-n};a.push(s)}n=e[t][c]}return a}(e,"cases");s(t)}))}),[]),Object(a.jsx)("div",{className:"linegraph",children:(null===n||void 0===n?void 0:n.length)>0&&Object(a.jsx)(g.Line,{options:N,data:{datasets:[{backgroundColor:"rgba(204, 16, 52, 0.5)",borderColor:"#CC1034",data:n}]}})})};n(202);var w=function(e){var t=e.countries;return Object(a.jsx)("div",{className:"table",children:Object(a.jsx)("table",{children:Object(a.jsx)("tbody",{children:t.map((function(e,t){return Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:e.country}),Object(a.jsx)("td",{children:Object(a.jsx)("strong",{children:C()(e.cases).format("0,0")})})]},t)}))})})})},S=n(89),I=n(249),B=n(241),D={cases:{hex:"#CC1034",rgb:"rgb(204, 16, 52)",half_op:"rgba(204, 16, 52, 0.5)",multiplier:800},recovered:{hex:"#7dd71d",rgb:"rgb(125, 215, 29)",half_op:"rgba(125, 215, 29, 0.5)",multiplier:1200},deaths:{hex:"#fb4443",rgb:"rgb(251, 68, 67)",half_op:"rgba(251, 68, 67, 0.5)",multiplier:2e3}},F=function(e){return e?"+".concat(C()(e).format("0.0a")):"+0"},A=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"cases";return e.map((function(e,n){return Object(a.jsx)(I.a,{center:[e.countryInfo.lat,e.countryInfo.long],color:D[t].hex,fillColor:D[t].hex,fillOpacity:.4,radius:Math.sqrt(e[t])*D[t].multiplier,children:Object(a.jsx)(B.a,{children:Object(a.jsxs)("div",{className:"info-container",children:[Object(a.jsx)("div",{className:"info-flag",style:{backgroundImage:"url(".concat(e.countryInfo.flag,")")}}),Object(a.jsx)("div",{className:"info-name",children:e.country}),Object(a.jsxs)("div",{className:"info-confirmed",children:["Cases: ",C()(e.cases).format("0,0")]}),Object(a.jsxs)("div",{className:"info-recovered",children:["Recovered: ",C()(e.recovered).format("0,0")]}),Object(a.jsxs)("div",{className:"info-deaths",children:["Deaths: ",C()(e.deaths).format("0,0")]})]})})},n)}))},z=n(242),T=n(250);n(203);var _=function(e){var t=e.countries,n=e.casesType,c=e.center,s=e.zoom;return Object(a.jsx)("div",{className:"map",children:Object(a.jsxs)(z.a,{center:c,zoom:s,children:[Object(a.jsx)(T.a,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}),A(t,n)]})})},R=(n(204),Object(l.a)({overrides:{MuiCssBaseline:{"@global":{html:{MozOsxFontSmoothing:"grayscale",WebkitFontSmoothing:"antialiased"}}}},palette:{primary:{main:"#0DD8AB",light:"#36DDB8",dark:"#3A645B",contrastText:"#1A1A1A"}},typography:{h1:{fontFamily:["Anton","sans-serif"].join(",")}}})),M=Object(j.a)((function(e){var t;return t={app:{fontFamily:["Anton","sans-serif"].join(","),display:"flex",justifyContent:"space-evenly",backgroundColor:e.palette.grey.A300,padding:20}},Object(i.a)(t,e.breakpoints.down("md"),{app:{flexDirection:"column"}}),Object(i.a)(t,"left",{flex:.9}),Object(i.a)(t,"header",{display:"flex",alignItems:"center",marginBottom:20,justifyContent:"space-between","& h1":{color:e.palette.secondary.dark,fontSize:"2.5rem",fontFamily:["Yanone Kaffeesatz","sans-serif"].join(","),fontWeight:700}}),Object(i.a)(t,"dropdown",{backgroundColor:"white"}),Object(i.a)(t,"stats",{display:"flex",justifyContent:"space-between"}),Object(i.a)(t,"right",{width:300}),Object(i.a)(t,"information",{"& h3":{color:e.palette.secondary.main,fontFamily:["Yanone Kaffeesatz","sans-serif"].join(","),fontWeight:700,fontSize:"1.4rem",marginTop:"1rem"},"& p":{marginTop:"3rem"}}),Object(i.a)(t,"menuItem",{fontFamily:["Yanone Kaffeesatz","sans-serif"].join(",")}),t})),L=function(){var e=M(),t=Object(c.useState)("worldwide"),n=Object(r.a)(t,2),s=n[0],o=n[1],i=Object(c.useState)({}),l=Object(r.a)(i,2),j=l[0],x=l[1],v=Object(c.useState)([]),g=Object(r.a)(v,2),y=g[0],N=g[1],I=Object(c.useState)([]),B=Object(r.a)(I,2),D=B[0],A=B[1],z=Object(c.useState)([]),T=Object(r.a)(z,2),L=T[0],W=T[1],Y=Object(c.useState)("cases"),E=Object(r.a)(Y,2),K=E[0],J=E[1],P=Object(c.useState)([34.80746,-40.4796]),q=Object(r.a)(P,2),V=q[0],G=q[1],H=Object(c.useState)(3),Q=Object(r.a)(H,2),U=Q[0],X=Q[1];Object(c.useEffect)((function(){fetch("https://disease.sh/v3/covid-19/all").then((function(e){return e.json()})).then((function(e){x(e)}))}),[]),Object(c.useEffect)((function(){fetch("https://disease.sh/v3/covid-19/countries").then((function(e){return e.json()})).then((function(e){var t=e.map((function(e){return{name:e.country,value:e.countryInfo.iso2}})),n=function(e){return Object(S.a)(e).sort((function(e,t){return e.cases>t.cases?-1:1}))}(e);N(t),A(e),W(n)}))}),[]);return Object(a.jsxs)(d.a,{theme:R,children:[Object(a.jsx)(u.a,{}),Object(a.jsxs)("div",{className:e.app,children:[Object(a.jsxs)("div",{className:e.left,children:[Object(a.jsxs)("div",{className:e.header,children:[Object(a.jsx)("h1",{children:"COVID-19 Dashboard"}),Object(a.jsx)(f.a,{className:e.dropdown,children:Object(a.jsxs)(b.a,{variant:"outlined",value:s,onChange:function(e){var t=e.target.value,n="worldwide"===t?"https://disease.sh/v3/covid-19/all":"https://disease.sh/v3/covid-19/countries/".concat(t);fetch(n).then((function(e){return e.json()})).then((function(e){o(t),x(e),console.log("data.countryInfo.lat => "+e.countryInfo.lat),console.log("data.countryInfo.long => "+e.countryInfo.long),G([31.80746,-20.4796]),X(4)}))},children:[Object(a.jsx)(h.a,{value:"worldwide",className:e.menuItem,children:"Worldwide"},-1),y.map((function(e,t){return Object(a.jsx)(h.a,{value:e.value,children:e.name},t)}))]})})]}),Object(a.jsxs)("div",{className:e.stats,children:[Object(a.jsx)(p,{onClick:function(e){return J("cases")},title:"Coronavirus Cases",isRed:!0,active:"cases"===K,cases:F(j.todayCases),total:C()(j.cases).format("0.0a")}),Object(a.jsx)(p,{onClick:function(e){return J("recovered")},title:"Recovered",active:"recovered"===K,cases:F(j.todayRecovered),total:C()(j.recovered).format("0.0a")}),Object(a.jsx)(p,{onClick:function(e){return J("deaths")},title:"Deaths",isRed:!0,active:"deaths"===K,cases:F(j.todayDeaths),total:C()(j.deaths).format("0.0a")})]}),Object(a.jsx)(_,{countries:D,casesType:K,center:V,zoom:U})]}),Object(a.jsx)(m.a,{className:e.right,children:Object(a.jsx)(O.a,{children:Object(a.jsxs)("div",{className:e.information,children:[Object(a.jsx)("h3",{children:"Live Cases by Country"}),Object(a.jsx)(w,{countries:L}),Object(a.jsx)("p",{}),Object(a.jsxs)("h3",{children:["Worldwide new ",K]}),Object(a.jsx)(k,{casesType:K})]})})})]})]})},W=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,251)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),a(e),c(e),s(e),o(e)}))};o.a.render(Object(a.jsx)(L,{}),document.getElementById("root")),W()}},[[205,1,2]]]);
//# sourceMappingURL=main.8a5c6ebb.chunk.js.map