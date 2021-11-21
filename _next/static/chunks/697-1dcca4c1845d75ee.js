"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[697],{3589:function(e,t,r){r.d(t,{Z:function(){return u}});var n=r(3892);function a(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var u=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.senju_regular_expression=/^jp.ac.dendai\/(?<buildingNumber>[1-5])(?<floorNumber>1?[0-9])(?<roomNumber>[0-2][0-9][AB]?)-(?<seatNumber>[^-]+)$/,this.hatoyama_regular_expression=/^jp.ac.dendai\/2(?<buildingNumber>[01][0-9])(?<floorNumber>[01][0-9])(?<roomNumber>[0-9][0-9])-(?<seatNumber>[^-]+)$/,this.qrData=t}var t,r,u;return t=e,(r=[{key:"validateQrData",value:function(){return this.senju_regular_expression.test(this.qrData)||this.hatoyama_regular_expression.test(this.qrData)}},{key:"parseQrData",value:function(){var e=this.qrData.match(this.getLogCampus()===n.V.senju?this.senju_regular_expression:this.hatoyama_regular_expression).groups;return{buildingNumber:String(Number(e.buildingNumber)),floorNumber:String(Number(e.floorNumber)),roomNumber:(Number(e.buildingNumber)<10?String(Number(e.buildingNumber)):"")+String(Number(e.floorNumber))+e.roomNumber,seatNumber:e.seatNumber}}},{key:"getLogCampus",value:function(){return this.senju_regular_expression.test(this.qrData)?n.V.senju:this.hatoyama_regular_expression.test(this.qrData)?n.V.hatoyama:void 0}}])&&a(t.prototype,r),u&&a(t,u),e}()},813:function(e,t,r){r.d(t,{DB:function(){return f}});var n=r(5666),a=r.n(n),u=r(8957),o=r(6040);function i(e){var t;if("function"===typeof Symbol){if(Symbol.asyncIterator&&null!=(t=e[Symbol.asyncIterator]))return t.call(e);if(Symbol.iterator&&null!=(t=e[Symbol.iterator]))return t.call(e)}throw new TypeError("Object is not async iterable")}function s(e,t,r,n,a,u,o){try{var i=e[u](o),s=i.value}catch(c){return void r(c)}i.done?t(s):Promise.resolve(s).then(n,a)}function c(e){return function(){var t=this,r=arguments;return new Promise((function(n,a){var u=e.apply(t,r);function o(e){s(u,n,a,o,i,"next",e)}function i(e){s(u,n,a,o,i,"throw",e)}o(void 0)}))}}function l(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var f=function(){function e(t,r){var n=void 0===r?1:r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.name=t,this.version=n}var t,r,n;return t=e,(r=[{key:"openDB",value:function(){return c(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,u.X3)(this.name,this.version,{upgrade:function(e){e.createObjectStore("log",{keyPath:"date"})}});case 2:this.db=e.sent;case 3:case"end":return e.stop()}}),e,this)})).bind(this))()}},{key:"add",value:function(e){return c(a().mark((function t(){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.db.add("log",e);case 2:case"end":return t.stop()}}),t,this)})).bind(this))()}},{key:"addMulti",value:function(e){return c(a().mark((function t(){var r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=this.db.transaction("log","readwrite"),t.next=3,Promise.all(e.map((function(e){r.store.add(e).catch((function(e){console.log(e)}))})));case 3:return t.next=5,r.done;case 5:case"end":return t.stop()}}),t,this)})).bind(this))()}},{key:"get",value:function(e){return c(a().mark((function t(){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.db.get("log",e);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t,this)})).bind(this))()}},{key:"getAll",value:function(){return c(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.db.getAll("log");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)})).bind(this))()}},{key:"getPeriod",value:function(e){return c(a().mark((function t(){var r,n,u,s,c,l,f,h,b,m;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.db.getAllKeys("log");case 2:r=t.sent.reverse(),n=new Date,u=[],s=!1,c=!1,t.prev=6,f=i(r);case 8:return t.next=10,f.next();case 10:if(!(s=!(h=t.sent).done)){t.next=25;break}if(b=h.value,m=b,!(e===o.zk||e>=Math.abs(n.valueOf()-m.valueOf())/864e5)){t.next=21;break}return t.t0=u,t.next=17,this.get(m);case 17:t.t1=t.sent,t.t0.push.call(t.t0,t.t1),t.next=22;break;case 21:return t.abrupt("break",25);case 22:s=!1,t.next=8;break;case 25:t.next=31;break;case 27:t.prev=27,t.t2=t.catch(6),c=!0,l=t.t2;case 31:if(t.prev=31,t.prev=32,!s||null==f.return){t.next=36;break}return t.next=36,l.return();case 36:if(t.prev=36,!c){t.next=39;break}throw l;case 39:return t.finish(36);case 40:return t.finish(31);case 41:return t.abrupt("return",u.reverse());case 42:case"end":return t.stop()}}),t,this,[[6,27,31,41],[32,,36,40]])})).bind(this))()}},{key:"getLatest",value:function(){return c(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getPeriod(1);case 2:return e.abrupt("return",e.sent.reverse()[0]);case 3:case"end":return e.stop()}}),e,this)})).bind(this))()}},{key:"deleteDB",value:function(){return c(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.db.clear("log");case 2:case"end":return e.stop()}}),e,this)})).bind(this))()}},{key:"count",value:function(){return c(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.db.count("log");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)})).bind(this))()}}])&&l(t.prototype,r),n&&l(t,n),e}()},3692:function(e,t,r){r.d(t,{p6:function(){return i},qr:function(){return s},JT:function(){return c},WV:function(){return f},Wl:function(){return h},ft:function(){return b},PN:function(){return m}});var n=r(6040),a=r(3892),u=r(3589),o=r(8862);function i(e,t){if("undefined"===typeof e||(r=e,!(null!=(n=Date)&&"undefined"!==typeof Symbol&&n[Symbol.hasInstance]?n[Symbol.hasInstance](r):r instanceof n)))return"";var r,n,a=e.getFullYear(),u=e.getMonth()+1,o=["\u65e5","\u6708","\u706b","\u6c34","\u6728","\u91d1","\u571f"][e.getDay()],i=e.getDate(),s=e.getHours(),c=e.getMinutes();return t?"".concat(i,"\u65e5 ").concat(s,":").concat(("00"+c).slice(-2)):"".concat(a,"\u5e74").concat(u,"\u6708").concat(i,"\u65e5").concat(o,"\u66dc\u65e5 ").concat(s,":").concat(("00"+c).slice(-2))}function s(e){var t=[];return e.forEach((function(e,r){e||t.push(n.h4[r].id)})),t}function c(e){return 0===e.length?"\u30ed\u30b0\u30c7\u30fc\u30bf\u306f\u3042\u308a\u307e\u305b\u3093\u3002":e.map((function(e){return'"'.concat(e.label,'",').concat(e.date.getFullYear(),"/").concat(l(e.date.getMonth()+1),"/").concat(l(e.date.getDate()),",").concat(l(e.date.getHours()),":").concat(l(e.date.getMinutes()),":").concat(l(e.date.getSeconds()),',"').concat(e.code,'"')})).join("\n")}var l=function(e){return("00"+e).slice(-2)};function f(e){var t=/^"(?<label>[^"]*)",\s?(?<date>.+),\s?(?<time>.+),\s?"(?<code>jp.ac.dendai\/[^"]+)"$/;if(t.test(e)){var r=e.match(t).groups,n=new u.Z(r.code);if(n.parseQrData){var o=r.date.match(/^(?<year>[0-9]{4})\/(?<month>[0-1][0-9])\/(?<date>[0-3][0-9])$/).groups,i=r.time.match(/^(?<hour>[0-2][0-9]):(?<minute>[0-5][0-9]):(?<sec>[0-5][0-9])$/).groups;return{label:r.label,code:r.code,date:new Date(Number(o.year),Number(o.month)-1,Number(o.date),Number(i.hour),Number(i.minute),Number(i.sec)),type:a.h.normal,campus:n.getLogCampus()}}}return null}function h(e){var t=new o.E(e);return t.isUseLog()?t.successText():"Error: \u30ed\u30b0\u3092\u8aad\u307f\u8fbc\u3081\u307e\u305b\u3093\u3067\u3057\u305f"}function b(e,t){var r=new o.E(e);if(r.isUseLog()){var n=window.location.href,a=r.tweetText(t);return"https://twitter.com/intent/tweet?text=".concat(a,"&url=").concat(n,"&hashtags=").concat("Logcation")}}function m(e){return e===n.zk?"\u5168\u671f\u9593":"\u904e\u53bb".concat(Math.floor(e),"\u65e5")}},8862:function(e,t,r){r.d(t,{E:function(){return i}});var n=r(3589),a={1201:"\u4e39\u7fbd\u30db\u30fc\u30eb",2305:"\u5b66\u751f\u539a\u751f",201:"\u30d7\u30ec\u30bc\u30f3\u30c6\u30fc\u30b7\u30e7\u30f3\u30db\u30fc\u30eb",203:"\u7b2c1\u30e1\u30c7\u30a3\u30a2\u30eb\u30fc\u30e0",204:"\u7b2c2\u30e1\u30c7\u30a3\u30a2\u30eb\u30fc\u30e0"},u=r(3692);function o(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var i=function(){function e(t){if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.code=t.code,this.date=t.date,this.campus=t.campus,this.label=t.label,this.logUtil=new n.Z(this.code),this.isUseLog()){var r=this.logUtil.parseQrData();this.buildingNumber=r.buildingNumber,this.floorNumber=r.floorNumber,this.roomNumber=r.roomNumber,this.seatNumber=r.seatNumber}}var t,r,i;return t=e,(r=[{key:"isUseLog",value:function(){return this.logUtil.validateQrData()}},{key:"roomName",value:function(){return this.roomNumber in a?a[this.roomNumber]:"".concat(this.roomNumber,"\u6559\u5ba4")}},{key:"tweetText",value:function(e){return"I'm at ".concat(this.roomName(),"%0d%0d\u5408\u8a08\u30ed\u30b0\u6570: ").concat(e,"%0d").concat(this.additionalText(e),"%0d")}},{key:"successText",value:function(){return"".concat(this.buildingNumber,"\u53f7\u9928 ").concat(this.floorNumber,"\u968e ").concat(this.roomName())}},{key:"historyTableText",value:function(e,t){return{date:(0,u.p6)(this.date,e),building:parseInt(this.buildingNumber),floor:parseInt(this.floorNumber),room:t?this.roomName():"".concat(this.roomNumber,"\u6559\u5ba4"),seat:this.seatNumber,campus:this.campus}}},{key:"additionalText",value:function(e){return 42===e?"\u751f\u547d\u3001\u5b87\u5b99\u3001\u305d\u3057\u3066\u4e07\u7269\u306b\u3064\u3044\u3066\u306e\u7a76\u6975\u306e\u7591\u554f\u306e\u7b54\u3048\uff01":334===e?"\u306a\u3093\u3067\u3084\uff01\u962a\u795e\u95a2\u4fc2\u306a\u3044\u3084\u308d\uff01":0===(e&e-1)||e%10===0?"\u30ad\u30ea\u756a\uff01\uff01\uff01":1===e?"\u306f\u3058\u3081\u3066\u306e\u30ed\u30b0\uff01":e<5?"\u9811\u5f35\u3063\u3066\u3044\u308b\uff01":e<10?"\u51c4\u3044\uff01\uff01\uff01":e<20?"\u3081\u3063\u3061\u3083\u51c4\u3044\uff01\uff01\uff01":"\u958b\u767a\u8005\u3082\u3073\u3063\u304f\u308a\uff01"}}])&&o(t.prototype,r),i&&o(t,i),e}()}}]);