import{c as n,e as s}from"./chunk-FDM6MZLR.js";var o=class extends s{getCurrentPosition(e){return n(this,null,function*(){return new Promise((t,a)=>{navigator.geolocation.getCurrentPosition(i=>{t(i)},i=>{a(i)},Object.assign({enableHighAccuracy:!1,timeout:1e4,maximumAge:0},e))})})}watchPosition(e,t){return n(this,null,function*(){return`${navigator.geolocation.watchPosition(i=>{t(i)},i=>{t(null,i)},Object.assign({enableHighAccuracy:!1,timeout:1e4,maximumAge:0},e))}`})}clearWatch(e){return n(this,null,function*(){window.navigator.geolocation.clearWatch(parseInt(e.id,10))})}checkPermissions(){return n(this,null,function*(){if(typeof navigator>"u"||!navigator.permissions)throw this.unavailable("Permissions API not available in this browser");let e=yield window.navigator.permissions.query({name:"geolocation"});return{location:e.state,coarseLocation:e.state}})}requestPermissions(){return n(this,null,function*(){throw this.unimplemented("Not implemented on web.")})}},m=new o;export{m as Geolocation,o as GeolocationWeb};
