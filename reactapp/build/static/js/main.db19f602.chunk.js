(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{109:function(e,t,a){},194:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a.n(n),c=a(79),o=a.n(c),i=(a(88),a(19)),s=a(20),l=a(22),u=a(21),m=a(23),p=(a(89),a(90),a(14)),d=a.n(p),h=function(e){var t=e.currency,a=e.price;return r.a.createElement("div",{className:"column ".concat(t,"--section")},r.a.createElement("h5",null,"$",a),r.a.createElement("p",null,"1 ",t.toUpperCase()))},f=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={btcprice:0,ltcprice:0,ethprice:0},a.saveStateToLocalStorage=function(){localStorage.setItem("today-state",JSON.stringify(a.state))},a.restoreStateFromLocalStorage=function(){var e=JSON.parse(localStorage.getItem("today-state"));a.setState(e)},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"sendPricePusher",value:function(e){var t=this;d.a.post("https://node-pwa-app.firebaseapp.com/prices/new",{prices:e,token:this.state.token}).then(function(){t.setState({btcprice:e.BTC.USD,ethprice:e.ETH.USD,ltcprice:e.LTC.USD})}).catch(function(e){console.log(e)})}},{key:"componentWillMount",value:function(){}},{key:"componentDidMount",value:function(){var e=this;if(!navigator.onLine)return this.restoreStateFromLocalStorage();d.a.get("https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,LTC&tsyms=USD").then(function(t){var a=t.data,n=a.BTC,r=a.ETH,c=a.LTC;console.log(n),e.setState({btcprice:n.USD,ethprice:r.USD,ltcprice:c.USD},e.saveStateToLocalStorage)}).catch(console.error),this.cryptoSubscription=setInterval(function(){d.a.get("https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,LTC&tsyms=USD").then(function(t){var a=t.data;e.sendPricePusher(a)}).catch(console.error)},1e4)}},{key:"componentWillUnmount",value:function(){clearInterval(this.cryptoSubscription)}},{key:"render",value:function(){var e=this.state,t=e.ethprice,a=e.btcprice,n=e.ltcprice;return r.a.createElement("div",{className:"today--section container"},r.a.createElement("h2",null,"Current Price"),r.a.createElement("div",{className:"columns today--section__box"},r.a.createElement(h,{currency:"btc",price:a}),r.a.createElement(h,{currency:"eth",price:t}),r.a.createElement(h,{currency:"ltc",price:n})))}}]),t}(n.Component),v=a(80),y=(a(109),a(57)),g=a.n(y),E=function(e){var t=e.price;return r.a.createElement("div",{className:"history--section__box__inner"},r.a.createElement("h4",null,t.date),r.a.createElement("div",{className:"columns"},r.a.createElement("div",{className:"column"},r.a.createElement("p",null,"1 BTC = $",t.btc)),r.a.createElement("div",{className:"column"},r.a.createElement("p",null,"1 ETH = $",t.eth)),r.a.createElement("div",{className:"column"},r.a.createElement("p",null,"1 LTC = $",t.ltc))))};E.defaultProps={price:{date:"",btc:0,eth:0,ltc:0}};var b=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).saveStateToLocalStorage=function(){localStorage.setItem("history-state",JSON.stringify(e.state))},e.restoreStateFromLocalStorage=function(){var t=JSON.parse(localStorage.getItem("today-state"));console.log(t),e.setState(t)},e.getPriceForDay=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,a=arguments.length>1?arguments[1]:void 0,n=g()().subtract(t,"days").unix();d.a.all([e.getETHPrices(n),e.getBTCPrices(n),e.getLTCPrices(n)]).then(d.a.spread(function(t,r,c){var o={date:g.a.unix(n).format("MMMM Do YYYY"),eth:t.data.ETH.USD,btc:r.data.BTC.USD,ltc:c.data.LTC.USD};e.setState(Object(v.a)({},a,o),e.saveStateToLocalStorage)}))},e.getCurrencyPrice=function(e,t){return d.a.get("https://min-api.cryptocompare.com/data/pricehistorical?fsym=".concat(t,"&tsyms=USD&ts=").concat(e))},e.getETHPrices=function(t){return e.getCurrencyPrice(t,"ETH")},e.getBTCPrices=function(t){return e.getCurrencyPrice(t,"BTC")},e.getLTCPrices=function(t){return e.getCurrencyPrice(t,"LTC")},e.state={todayprice:{},yesterdayprice:{},twodaysprice:{},threedaysprice:{},fourdaysprice:{}},e}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){navigator.onLine||this.restoreStateFromLocalStorage();var e=["today","yesterday","twodays","threedays","fourdays"];for(var t in e)this.getPriceForDay(t,"".concat(e[t],"price"))}},{key:"render",value:function(){var e=this.state,t=e.todayprice,a=e.yesterdayprice,n=e.twodaysprice,c=e.threedaysprice,o=e.fourdaysprice;return console.log(this.state),r.a.createElement("div",{className:"history--section container"},r.a.createElement("h2",null,"History (Past 5 days)"),r.a.createElement("div",{className:"history--section__box"},r.a.createElement(E,{price:t}),r.a.createElement(E,{price:a}),r.a.createElement(E,{price:n}),r.a.createElement(E,{price:c}),r.a.createElement(E,{price:o})))}}]),t}(n.Component),S=a(58),T=a.n(S),w=a(81),C=a(59),k=a.n(C),N=function(){var e=Object(w.a)(T.a.mark(function e(){var t,a;return T.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=k.a.messaging(),e.next=4,t.requestPermission();case 4:return e.next=6,t.getToken();case 6:return a=e.sent,console.log("Token:",a),e.abrupt("return",a);case 11:e.prev=11,e.t0=e.catch(0),console.error(e.t0);case 14:case"end":return e.stop()}},e,null,[[0,11]])}));return function(){return e.apply(this,arguments)}}(),L=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).getToken=function(){N().then(function(t){e.setState({token:t})})},e.state={token:null},e}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"main-container"},r.a.createElement("div",{className:"topheader"},r.a.createElement("header",{className:"container"},r.a.createElement("nav",{className:"navbar"},r.a.createElement("div",{className:"navbar-brand"},r.a.createElement("span",{className:"navbar-item"},"Blockchain Currency Latest Prices")),r.a.createElement("div",{className:"navbar-end"},r.a.createElement("nav",{className:"navbar-item",onClick:this.getToken},"Want to receive Push Notifications ?"))))),r.a.createElement("section",{className:"results--section"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"Get to know about the latest block chain currency prices",r.a.createElement("br",null)," BTC, ETH and LTC")),r.a.createElement("div",{className:"results--section__inner"},r.a.createElement(f,null),r.a.createElement(b,null))))}}]),t}(n.Component),O=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function P(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}o.a.render(r.a.createElement(L,null),document.getElementById("root")),k.a.initializeApp({messagingSenderId:"848447013519"}),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("","/service-worker.js");O?function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):P(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e):P(e)})}}()},83:function(e,t,a){e.exports=a(194)},88:function(e,t,a){},89:function(e,t,a){},90:function(e,t,a){}},[[83,1,2]]]);
//# sourceMappingURL=main.db19f602.chunk.js.map