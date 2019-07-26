"use strict";var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var a in e=arguments[n])Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t}).apply(this,arguments)},__rest=this&&this.__rest||function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(t);a<r.length;a++)e.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(t,r[a])&&(n[r[a]]=t[r[a]])}return n};exports.__esModule=!0;var React=require("react"),device_1=require("./device"),navarManager_1=require("./navarManager");document.body.style.setProperty("--navar-background-color","#fff"),document.body.style.setProperty("--navar-mask-color","rgba(0,5,15,0.23)");var Render=function(t){var e=t.history,n=t.children,r=t.layout,a=t.renderFloat,o=t.style,i=__rest(t,["history","children","layout","renderFloat","style"]),s=React.useState(__assign({},e.from,{fix:1,gesturing:!1,instant:!0})),c=s[0],l=s[1],u=React.useRef({listenCache:new Set,listen:function(t){return u.listenCache.add(t),function(){u.listenCache.delete(t)}}}).current;React.useEffect(function(){e.update=l,c.gesturing||l(__assign({},e.from,{gesturing:!1,fix:1,instant:!0}))},[e]),React.useEffect(function(){c.instant&&!c.gesturing&&l(__assign({},e.to,{gesturing:!1,fix:1,instant:!1}))},[c]);var f=React.useCallback(function(e){u.listenCache.forEach(function(t){return t(e.target)})},[]),d=React.useMemo(function(){return n},[]);return React.createElement(React.Fragment,null,React.createElement("div",{style:{width:"100%",height:"100%",backgroundColor:"var(--navar-mask-color)",transition:c.instant?void 0:e.transition,opacity:1-c.x,position:"fixed",left:0,top:0,zIndex:r.zIndex-1}}),React.createElement("div",__assign({onScroll:a?f:void 0,style:__assign({width:"100%",height:"100%",backgroundColor:"var(--navar-background-color)",transition:c.instant?void 0:e.transition,transform:"translateX("+100*c.x+"%)",overflow:c.gesturing?"hidden":"auto",pointerEvents:c.gesturing?"none":void 0,WebkitOverflowScrolling:"touch",zIndex:r.zIndex,position:"fixed",left:0,top:0},o)},i),React.createElement("div",{style:{height:r.topHeight+r.topSafe}}),d,0<r.bottomHeight&&React.createElement("div",{style:{height:r.bottomSafe+r.bottomHeight}})),a&&a({anime:c,history:e,layout:r,onScroll:u.listen}))};exports.Navar=function(t){var e,n=t.path,r=t.children,a=t.layout,o=t.renderFloat;if(React.useContext(navarManager_1.navarManager.ctx).historys.forEach(function(t){t.path===n&&(e=t)}),void 0===e)return null;var i=__assign({zIndex:10*(e.index+1),bottomSafe:device_1.bottomSafe,topSafe:device_1.topSafe,topHeight:0,bottomHeight:0},a);return React.createElement(Render,{renderFloat:o,layout:i,history:e,children:r})};