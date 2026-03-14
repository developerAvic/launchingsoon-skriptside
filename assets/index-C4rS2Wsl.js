(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var nd={exports:{}},Uo={};var Dg;function RS(){if(Dg)return Uo;Dg=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(s,l,c){var d=null;if(c!==void 0&&(d=""+c),l.key!==void 0&&(d=""+l.key),"key"in l){c={};for(var p in l)p!=="key"&&(c[p]=l[p])}else c=l;return l=c.ref,{$$typeof:o,type:s,key:d,ref:l!==void 0?l:null,props:c}}return Uo.Fragment=e,Uo.jsx=i,Uo.jsxs=i,Uo}var Ug;function CS(){return Ug||(Ug=1,nd.exports=RS()),nd.exports}var K=CS(),id={exports:{}},re={};var Lg;function wS(){if(Lg)return re;Lg=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),d=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),S=Symbol.for("react.activity"),_=Symbol.iterator;function M(P){return P===null||typeof P!="object"?null:(P=_&&P[_]||P["@@iterator"],typeof P=="function"?P:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,y={};function v(P,j,vt){this.props=P,this.context=j,this.refs=y,this.updater=vt||b}v.prototype.isReactComponent={},v.prototype.setState=function(P,j){if(typeof P!="object"&&typeof P!="function"&&P!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,P,j,"setState")},v.prototype.forceUpdate=function(P){this.updater.enqueueForceUpdate(this,P,"forceUpdate")};function C(){}C.prototype=v.prototype;function U(P,j,vt){this.props=P,this.context=j,this.refs=y,this.updater=vt||b}var D=U.prototype=new C;D.constructor=U,w(D,v.prototype),D.isPureReactComponent=!0;var I=Array.isArray;function B(){}var F={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function L(P,j,vt){var Rt=vt.ref;return{$$typeof:o,type:P,key:j,ref:Rt!==void 0?Rt:null,props:vt}}function lt(P,j){return L(P.type,j,P.props)}function G(P){return typeof P=="object"&&P!==null&&P.$$typeof===o}function Q(P){var j={"=":"=0",":":"=2"};return"$"+P.replace(/[=:]/g,function(vt){return j[vt]})}var rt=/\/+/g;function J(P,j){return typeof P=="object"&&P!==null&&P.key!=null?Q(""+P.key):j.toString(36)}function Y(P){switch(P.status){case"fulfilled":return P.value;case"rejected":throw P.reason;default:switch(typeof P.status=="string"?P.then(B,B):(P.status="pending",P.then(function(j){P.status==="pending"&&(P.status="fulfilled",P.value=j)},function(j){P.status==="pending"&&(P.status="rejected",P.reason=j)})),P.status){case"fulfilled":return P.value;case"rejected":throw P.reason}}throw P}function N(P,j,vt,Rt,Bt){var at=typeof P;(at==="undefined"||at==="boolean")&&(P=null);var xt=!1;if(P===null)xt=!0;else switch(at){case"bigint":case"string":case"number":xt=!0;break;case"object":switch(P.$$typeof){case o:case e:xt=!0;break;case x:return xt=P._init,N(xt(P._payload),j,vt,Rt,Bt)}}if(xt)return Bt=Bt(P),xt=Rt===""?"."+J(P,0):Rt,I(Bt)?(vt="",xt!=null&&(vt=xt.replace(rt,"$&/")+"/"),N(Bt,j,vt,"",function(Kt){return Kt})):Bt!=null&&(G(Bt)&&(Bt=lt(Bt,vt+(Bt.key==null||P&&P.key===Bt.key?"":(""+Bt.key).replace(rt,"$&/")+"/")+xt)),j.push(Bt)),1;xt=0;var Tt=Rt===""?".":Rt+":";if(I(P))for(var kt=0;kt<P.length;kt++)Rt=P[kt],at=Tt+J(Rt,kt),xt+=N(Rt,j,vt,at,Bt);else if(kt=M(P),typeof kt=="function")for(P=kt.call(P),kt=0;!(Rt=P.next()).done;)Rt=Rt.value,at=Tt+J(Rt,kt++),xt+=N(Rt,j,vt,at,Bt);else if(at==="object"){if(typeof P.then=="function")return N(Y(P),j,vt,Rt,Bt);throw j=String(P),Error("Objects are not valid as a React child (found: "+(j==="[object Object]"?"object with keys {"+Object.keys(P).join(", ")+"}":j)+"). If you meant to render a collection of children, use an array instead.")}return xt}function z(P,j,vt){if(P==null)return P;var Rt=[],Bt=0;return N(P,Rt,"","",function(at){return j.call(vt,at,Bt++)}),Rt}function ot(P){if(P._status===-1){var j=P._result;j=j(),j.then(function(vt){(P._status===0||P._status===-1)&&(P._status=1,P._result=vt)},function(vt){(P._status===0||P._status===-1)&&(P._status=2,P._result=vt)}),P._status===-1&&(P._status=0,P._result=j)}if(P._status===1)return P._result.default;throw P._result}var ht=typeof reportError=="function"?reportError:function(P){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var j=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof P=="object"&&P!==null&&typeof P.message=="string"?String(P.message):String(P),error:P});if(!window.dispatchEvent(j))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",P);return}console.error(P)},yt={map:z,forEach:function(P,j,vt){z(P,function(){j.apply(this,arguments)},vt)},count:function(P){var j=0;return z(P,function(){j++}),j},toArray:function(P){return z(P,function(j){return j})||[]},only:function(P){if(!G(P))throw Error("React.Children.only expected to receive a single React element child.");return P}};return re.Activity=S,re.Children=yt,re.Component=v,re.Fragment=i,re.Profiler=l,re.PureComponent=U,re.StrictMode=s,re.Suspense=m,re.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=F,re.__COMPILER_RUNTIME={__proto__:null,c:function(P){return F.H.useMemoCache(P)}},re.cache=function(P){return function(){return P.apply(null,arguments)}},re.cacheSignal=function(){return null},re.cloneElement=function(P,j,vt){if(P==null)throw Error("The argument must be a React element, but you passed "+P+".");var Rt=w({},P.props),Bt=P.key;if(j!=null)for(at in j.key!==void 0&&(Bt=""+j.key),j)!T.call(j,at)||at==="key"||at==="__self"||at==="__source"||at==="ref"&&j.ref===void 0||(Rt[at]=j[at]);var at=arguments.length-2;if(at===1)Rt.children=vt;else if(1<at){for(var xt=Array(at),Tt=0;Tt<at;Tt++)xt[Tt]=arguments[Tt+2];Rt.children=xt}return L(P.type,Bt,Rt)},re.createContext=function(P){return P={$$typeof:d,_currentValue:P,_currentValue2:P,_threadCount:0,Provider:null,Consumer:null},P.Provider=P,P.Consumer={$$typeof:c,_context:P},P},re.createElement=function(P,j,vt){var Rt,Bt={},at=null;if(j!=null)for(Rt in j.key!==void 0&&(at=""+j.key),j)T.call(j,Rt)&&Rt!=="key"&&Rt!=="__self"&&Rt!=="__source"&&(Bt[Rt]=j[Rt]);var xt=arguments.length-2;if(xt===1)Bt.children=vt;else if(1<xt){for(var Tt=Array(xt),kt=0;kt<xt;kt++)Tt[kt]=arguments[kt+2];Bt.children=Tt}if(P&&P.defaultProps)for(Rt in xt=P.defaultProps,xt)Bt[Rt]===void 0&&(Bt[Rt]=xt[Rt]);return L(P,at,Bt)},re.createRef=function(){return{current:null}},re.forwardRef=function(P){return{$$typeof:p,render:P}},re.isValidElement=G,re.lazy=function(P){return{$$typeof:x,_payload:{_status:-1,_result:P},_init:ot}},re.memo=function(P,j){return{$$typeof:h,type:P,compare:j===void 0?null:j}},re.startTransition=function(P){var j=F.T,vt={};F.T=vt;try{var Rt=P(),Bt=F.S;Bt!==null&&Bt(vt,Rt),typeof Rt=="object"&&Rt!==null&&typeof Rt.then=="function"&&Rt.then(B,ht)}catch(at){ht(at)}finally{j!==null&&vt.types!==null&&(j.types=vt.types),F.T=j}},re.unstable_useCacheRefresh=function(){return F.H.useCacheRefresh()},re.use=function(P){return F.H.use(P)},re.useActionState=function(P,j,vt){return F.H.useActionState(P,j,vt)},re.useCallback=function(P,j){return F.H.useCallback(P,j)},re.useContext=function(P){return F.H.useContext(P)},re.useDebugValue=function(){},re.useDeferredValue=function(P,j){return F.H.useDeferredValue(P,j)},re.useEffect=function(P,j){return F.H.useEffect(P,j)},re.useEffectEvent=function(P){return F.H.useEffectEvent(P)},re.useId=function(){return F.H.useId()},re.useImperativeHandle=function(P,j,vt){return F.H.useImperativeHandle(P,j,vt)},re.useInsertionEffect=function(P,j){return F.H.useInsertionEffect(P,j)},re.useLayoutEffect=function(P,j){return F.H.useLayoutEffect(P,j)},re.useMemo=function(P,j){return F.H.useMemo(P,j)},re.useOptimistic=function(P,j){return F.H.useOptimistic(P,j)},re.useReducer=function(P,j,vt){return F.H.useReducer(P,j,vt)},re.useRef=function(P){return F.H.useRef(P)},re.useState=function(P){return F.H.useState(P)},re.useSyncExternalStore=function(P,j,vt){return F.H.useSyncExternalStore(P,j,vt)},re.useTransition=function(){return F.H.useTransition()},re.version="19.2.4",re}var Ng;function zh(){return Ng||(Ng=1,id.exports=wS()),id.exports}var $e=zh(),ad={exports:{}},Lo={},sd={exports:{}},rd={};var Og;function DS(){return Og||(Og=1,(function(o){function e(N,z){var ot=N.length;N.push(z);t:for(;0<ot;){var ht=ot-1>>>1,yt=N[ht];if(0<l(yt,z))N[ht]=z,N[ot]=yt,ot=ht;else break t}}function i(N){return N.length===0?null:N[0]}function s(N){if(N.length===0)return null;var z=N[0],ot=N.pop();if(ot!==z){N[0]=ot;t:for(var ht=0,yt=N.length,P=yt>>>1;ht<P;){var j=2*(ht+1)-1,vt=N[j],Rt=j+1,Bt=N[Rt];if(0>l(vt,ot))Rt<yt&&0>l(Bt,vt)?(N[ht]=Bt,N[Rt]=ot,ht=Rt):(N[ht]=vt,N[j]=ot,ht=j);else if(Rt<yt&&0>l(Bt,ot))N[ht]=Bt,N[Rt]=ot,ht=Rt;else break t}}return z}function l(N,z){var ot=N.sortIndex-z.sortIndex;return ot!==0?ot:N.id-z.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;o.unstable_now=function(){return c.now()}}else{var d=Date,p=d.now();o.unstable_now=function(){return d.now()-p}}var m=[],h=[],x=1,S=null,_=3,M=!1,b=!1,w=!1,y=!1,v=typeof setTimeout=="function"?setTimeout:null,C=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;function D(N){for(var z=i(h);z!==null;){if(z.callback===null)s(h);else if(z.startTime<=N)s(h),z.sortIndex=z.expirationTime,e(m,z);else break;z=i(h)}}function I(N){if(w=!1,D(N),!b)if(i(m)!==null)b=!0,B||(B=!0,Q());else{var z=i(h);z!==null&&Y(I,z.startTime-N)}}var B=!1,F=-1,T=5,L=-1;function lt(){return y?!0:!(o.unstable_now()-L<T)}function G(){if(y=!1,B){var N=o.unstable_now();L=N;var z=!0;try{t:{b=!1,w&&(w=!1,C(F),F=-1),M=!0;var ot=_;try{e:{for(D(N),S=i(m);S!==null&&!(S.expirationTime>N&&lt());){var ht=S.callback;if(typeof ht=="function"){S.callback=null,_=S.priorityLevel;var yt=ht(S.expirationTime<=N);if(N=o.unstable_now(),typeof yt=="function"){S.callback=yt,D(N),z=!0;break e}S===i(m)&&s(m),D(N)}else s(m);S=i(m)}if(S!==null)z=!0;else{var P=i(h);P!==null&&Y(I,P.startTime-N),z=!1}}break t}finally{S=null,_=ot,M=!1}z=void 0}}finally{z?Q():B=!1}}}var Q;if(typeof U=="function")Q=function(){U(G)};else if(typeof MessageChannel<"u"){var rt=new MessageChannel,J=rt.port2;rt.port1.onmessage=G,Q=function(){J.postMessage(null)}}else Q=function(){v(G,0)};function Y(N,z){F=v(function(){N(o.unstable_now())},z)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(N){N.callback=null},o.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<N?Math.floor(1e3/N):5},o.unstable_getCurrentPriorityLevel=function(){return _},o.unstable_next=function(N){switch(_){case 1:case 2:case 3:var z=3;break;default:z=_}var ot=_;_=z;try{return N()}finally{_=ot}},o.unstable_requestPaint=function(){y=!0},o.unstable_runWithPriority=function(N,z){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var ot=_;_=N;try{return z()}finally{_=ot}},o.unstable_scheduleCallback=function(N,z,ot){var ht=o.unstable_now();switch(typeof ot=="object"&&ot!==null?(ot=ot.delay,ot=typeof ot=="number"&&0<ot?ht+ot:ht):ot=ht,N){case 1:var yt=-1;break;case 2:yt=250;break;case 5:yt=1073741823;break;case 4:yt=1e4;break;default:yt=5e3}return yt=ot+yt,N={id:x++,callback:z,priorityLevel:N,startTime:ot,expirationTime:yt,sortIndex:-1},ot>ht?(N.sortIndex=ot,e(h,N),i(m)===null&&N===i(h)&&(w?(C(F),F=-1):w=!0,Y(I,ot-ht))):(N.sortIndex=yt,e(m,N),b||M||(b=!0,B||(B=!0,Q()))),N},o.unstable_shouldYield=lt,o.unstable_wrapCallback=function(N){var z=_;return function(){var ot=_;_=z;try{return N.apply(this,arguments)}finally{_=ot}}}})(rd)),rd}var Pg;function US(){return Pg||(Pg=1,sd.exports=DS()),sd.exports}var od={exports:{}},An={};var zg;function LS(){if(zg)return An;zg=1;var o=zh();function e(m){var h="https://react.dev/errors/"+m;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var x=2;x<arguments.length;x++)h+="&args[]="+encodeURIComponent(arguments[x])}return"Minified React error #"+m+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,h,x){var S=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:S==null?null:""+S,children:m,containerInfo:h,implementation:x}}var d=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(m,h){if(m==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return An.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,An.createPortal=function(m,h){var x=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(e(299));return c(m,h,null,x)},An.flushSync=function(m){var h=d.T,x=s.p;try{if(d.T=null,s.p=2,m)return m()}finally{d.T=h,s.p=x,s.d.f()}},An.preconnect=function(m,h){typeof m=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,s.d.C(m,h))},An.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},An.preinit=function(m,h){if(typeof m=="string"&&h&&typeof h.as=="string"){var x=h.as,S=p(x,h.crossOrigin),_=typeof h.integrity=="string"?h.integrity:void 0,M=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;x==="style"?s.d.S(m,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:S,integrity:_,fetchPriority:M}):x==="script"&&s.d.X(m,{crossOrigin:S,integrity:_,fetchPriority:M,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},An.preinitModule=function(m,h){if(typeof m=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var x=p(h.as,h.crossOrigin);s.d.M(m,{crossOrigin:x,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&s.d.M(m)},An.preload=function(m,h){if(typeof m=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var x=h.as,S=p(x,h.crossOrigin);s.d.L(m,x,{crossOrigin:S,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},An.preloadModule=function(m,h){if(typeof m=="string")if(h){var x=p(h.as,h.crossOrigin);s.d.m(m,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:x,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else s.d.m(m)},An.requestFormReset=function(m){s.d.r(m)},An.unstable_batchedUpdates=function(m,h){return m(h)},An.useFormState=function(m,h,x){return d.H.useFormState(m,h,x)},An.useFormStatus=function(){return d.H.useHostTransitionStatus()},An.version="19.2.4",An}var Bg;function NS(){if(Bg)return od.exports;Bg=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),od.exports=LS(),od.exports}var Fg;function OS(){if(Fg)return Lo;Fg=1;var o=US(),e=zh(),i=NS();function s(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function d(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function p(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(c(t)!==t)throw Error(s(188))}function h(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(s(188));return n!==t?null:t}for(var a=t,r=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(r=u.return,r!==null){a=r;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return m(u),t;if(f===r)return m(u),n;f=f.sibling}throw Error(s(188))}if(a.return!==r.return)a=u,r=f;else{for(var g=!1,A=u.child;A;){if(A===a){g=!0,a=u,r=f;break}if(A===r){g=!0,r=u,a=f;break}A=A.sibling}if(!g){for(A=f.child;A;){if(A===a){g=!0,a=f,r=u;break}if(A===r){g=!0,r=f,a=u;break}A=A.sibling}if(!g)throw Error(s(189))}}if(a.alternate!==r)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?t:n}function x(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=x(t),n!==null)return n;t=t.sibling}return null}var S=Object.assign,_=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),b=Symbol.for("react.portal"),w=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),v=Symbol.for("react.profiler"),C=Symbol.for("react.consumer"),U=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),I=Symbol.for("react.suspense"),B=Symbol.for("react.suspense_list"),F=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),L=Symbol.for("react.activity"),lt=Symbol.for("react.memo_cache_sentinel"),G=Symbol.iterator;function Q(t){return t===null||typeof t!="object"?null:(t=G&&t[G]||t["@@iterator"],typeof t=="function"?t:null)}var rt=Symbol.for("react.client.reference");function J(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===rt?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case w:return"Fragment";case v:return"Profiler";case y:return"StrictMode";case I:return"Suspense";case B:return"SuspenseList";case L:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case b:return"Portal";case U:return t.displayName||"Context";case C:return(t._context.displayName||"Context")+".Consumer";case D:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case F:return n=t.displayName||null,n!==null?n:J(t.type)||"Memo";case T:n=t._payload,t=t._init;try{return J(t(n))}catch{}}return null}var Y=Array.isArray,N=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,z=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ot={pending:!1,data:null,method:null,action:null},ht=[],yt=-1;function P(t){return{current:t}}function j(t){0>yt||(t.current=ht[yt],ht[yt]=null,yt--)}function vt(t,n){yt++,ht[yt]=t.current,t.current=n}var Rt=P(null),Bt=P(null),at=P(null),xt=P(null);function Tt(t,n){switch(vt(at,n),vt(Bt,t),vt(Rt,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?$0(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=$0(n),t=tg(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}j(Rt),vt(Rt,t)}function kt(){j(Rt),j(Bt),j(at)}function Kt(t){t.memoizedState!==null&&vt(xt,t);var n=Rt.current,a=tg(n,t.type);n!==a&&(vt(Bt,t),vt(Rt,a))}function $t(t){Bt.current===t&&(j(Rt),j(Bt)),xt.current===t&&(j(xt),Ro._currentValue=ot)}var Ke,_e;function pe(t){if(Ke===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Ke=n&&n[1]||"",_e=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ke+t+_e}var De=!1;function oe(t,n){if(!t||De)return"";De=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(n){var _t=function(){throw Error()};if(Object.defineProperty(_t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(_t,[])}catch(ut){var st=ut}Reflect.construct(t,[],_t)}else{try{_t.call()}catch(ut){st=ut}t.call(_t.prototype)}}else{try{throw Error()}catch(ut){st=ut}(_t=t())&&typeof _t.catch=="function"&&_t.catch(function(){})}}catch(ut){if(ut&&st&&typeof ut.stack=="string")return[ut.stack,st.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=r.DetermineComponentFrameRoot(),g=f[0],A=f[1];if(g&&A){var H=g.split(`
`),nt=A.split(`
`);for(u=r=0;r<H.length&&!H[r].includes("DetermineComponentFrameRoot");)r++;for(;u<nt.length&&!nt[u].includes("DetermineComponentFrameRoot");)u++;if(r===H.length||u===nt.length)for(r=H.length-1,u=nt.length-1;1<=r&&0<=u&&H[r]!==nt[u];)u--;for(;1<=r&&0<=u;r--,u--)if(H[r]!==nt[u]){if(r!==1||u!==1)do if(r--,u--,0>u||H[r]!==nt[u]){var pt=`
`+H[r].replace(" at new "," at ");return t.displayName&&pt.includes("<anonymous>")&&(pt=pt.replace("<anonymous>",t.displayName)),pt}while(1<=r&&0<=u);break}}}finally{De=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?pe(a):""}function Ze(t,n){switch(t.tag){case 26:case 27:case 5:return pe(t.type);case 16:return pe("Lazy");case 13:return t.child!==n&&n!==null?pe("Suspense Fallback"):pe("Suspense");case 19:return pe("SuspenseList");case 0:case 15:return oe(t.type,!1);case 11:return oe(t.type.render,!1);case 1:return oe(t.type,!0);case 31:return pe("Activity");default:return""}}function V(t){try{var n="",a=null;do n+=Ze(t,a),a=t,t=t.return;while(t);return n}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var We=Object.prototype.hasOwnProperty,Me=o.unstable_scheduleCallback,Le=o.unstable_cancelCallback,qt=o.unstable_shouldYield,O=o.unstable_requestPaint,E=o.unstable_now,q=o.unstable_getCurrentPriorityLevel,mt=o.unstable_ImmediatePriority,St=o.unstable_UserBlockingPriority,dt=o.unstable_NormalPriority,Xt=o.unstable_LowPriority,wt=o.unstable_IdlePriority,Zt=o.log,te=o.unstable_setDisableYieldValue,bt=null,Mt=null;function Ot(t){if(typeof Zt=="function"&&te(t),Mt&&typeof Mt.setStrictMode=="function")try{Mt.setStrictMode(bt,t)}catch{}}var Nt=Math.clz32?Math.clz32:W,Pt=Math.log,ce=Math.LN2;function W(t){return t>>>=0,t===0?32:31-(Pt(t)/ce|0)|0}var Ct=256,At=262144,zt=4194304;function Et(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function ft(t,n,a){var r=t.pendingLanes;if(r===0)return 0;var u=0,f=t.suspendedLanes,g=t.pingedLanes;t=t.warmLanes;var A=r&134217727;return A!==0?(r=A&~f,r!==0?u=Et(r):(g&=A,g!==0?u=Et(g):a||(a=A&~t,a!==0&&(u=Et(a))))):(A=r&~f,A!==0?u=Et(A):g!==0?u=Et(g):a||(a=r&~t,a!==0&&(u=Et(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function It(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function ne(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Oe(){var t=zt;return zt<<=1,(zt&62914560)===0&&(zt=4194304),t}function be(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function Dn(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function _i(t,n,a,r,u,f){var g=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var A=t.entanglements,H=t.expirationTimes,nt=t.hiddenUpdates;for(a=g&~a;0<a;){var pt=31-Nt(a),_t=1<<pt;A[pt]=0,H[pt]=-1;var st=nt[pt];if(st!==null)for(nt[pt]=null,pt=0;pt<st.length;pt++){var ut=st[pt];ut!==null&&(ut.lane&=-536870913)}a&=~_t}r!==0&&Gr(t,r,0),f!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=f&~(g&~n))}function Gr(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var r=31-Nt(n);t.entangledLanes|=n,t.entanglements[r]=t.entanglements[r]|1073741824|a&261930}function Ps(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var r=31-Nt(a),u=1<<r;u&n|t[r]&n&&(t[r]|=n),a&=~u}}function Qo(t,n){var a=n&-n;return a=(a&42)!==0?1:zs(a),(a&(t.suspendedLanes|n))!==0?0:a}function zs(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Bs(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Di(){var t=z.p;return t!==0?t:(t=window.event,t===void 0?32:Eg(t.type))}function Fs(t,n){var a=z.p;try{return z.p=t,n()}finally{z.p=a}}var vi=Math.random().toString(36).slice(2),sn="__reactFiber$"+vi,hn="__reactProps$"+vi,qi="__reactContainer$"+vi,Ea="__reactEvents$"+vi,Jo="__reactListeners$"+vi,$o="__reactHandles$"+vi,tl="__reactResources$"+vi,as="__reactMarker$"+vi;function Vr(t){delete t[sn],delete t[hn],delete t[Ea],delete t[Jo],delete t[$o]}function ba(t){var n=t[sn];if(n)return n;for(var a=t.parentNode;a;){if(n=a[qi]||a[sn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=og(t);t!==null;){if(a=t[sn])return a;t=og(t)}return n}t=a,a=t.parentNode}return null}function Ta(t){if(t=t[sn]||t[qi]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function ss(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(s(33))}function R(t){var n=t[tl];return n||(n=t[tl]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function X(t){t[as]=!0}var ct=new Set,it={};function $(t,n){Dt(t,n),Dt(t+"Capture",n)}function Dt(t,n){for(it[t]=n,t=0;t<n.length;t++)ct.add(n[t])}var Ft=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ut={},Wt={};function jt(t){return We.call(Wt,t)?!0:We.call(Ut,t)?!1:Ft.test(t)?Wt[t]=!0:(Ut[t]=!0,!1)}function ee(t,n,a){if(jt(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var r=n.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function se(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function Ht(t,n,a,r){if(r===null)t.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+r)}}function ue(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function qe(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Ye(t,n,a){var r=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var u=r.get,f=r.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(g){a=""+g,f.call(this,g)}}),Object.defineProperty(t,n,{enumerable:r.enumerable}),{getValue:function(){return a},setValue:function(g){a=""+g},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Re(t){if(!t._valueTracker){var n=qe(t)?"checked":"value";t._valueTracker=Ye(t,n,""+t[n])}}function pn(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),r="";return t&&(r=qe(t)?t.checked?"true":"false":t.value),t=r,t!==a?(n.setValue(t),!0):!1}function Vt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Un=/[\n"\\]/g;function ie(t){return t.replace(Un,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Ln(t,n,a,r,u,f,g,A){t.name="",g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"?t.type=g:t.removeAttribute("type"),n!=null?g==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+ue(n)):t.value!==""+ue(n)&&(t.value=""+ue(n)):g!=="submit"&&g!=="reset"||t.removeAttribute("value"),n!=null?xi(t,g,ue(n)):a!=null?xi(t,g,ue(a)):r!=null&&t.removeAttribute("value"),u==null&&f!=null&&(t.defaultChecked=!!f),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?t.name=""+ue(A):t.removeAttribute("name")}function jn(t,n,a,r,u,f,g,A){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){Re(t);return}a=a!=null?""+ue(a):"",n=n!=null?""+ue(n):a,A||n===t.value||(t.value=n),t.defaultValue=n}r=r??u,r=typeof r!="function"&&typeof r!="symbol"&&!!r,t.checked=A?t.checked:!!r,t.defaultChecked=!!r,g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"&&(t.name=g),Re(t)}function xi(t,n,a){n==="number"&&Vt(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function Zn(t,n,a,r){if(t=t.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=n.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&r&&(t[a].defaultSelected=!0)}else{for(a=""+ue(a),n=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,r&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function Ne(t,n,a){if(n!=null&&(n=""+ue(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+ue(a):""}function rn(t,n,a,r){if(n==null){if(r!=null){if(a!=null)throw Error(s(92));if(Y(r)){if(1<r.length)throw Error(s(93));r=r[0]}a=r}a==null&&(a=""),n=a}a=ue(n),t.defaultValue=a,r=t.textContent,r===a&&r!==""&&r!==null&&(t.value=r),Re(t)}function Nn(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var on=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Si(t,n,a){var r=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?r?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":r?t.setProperty(n,a):typeof a!="number"||a===0||on.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function Yi(t,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(t=t.style,a!=null){for(var r in a)!a.hasOwnProperty(r)||n!=null&&n.hasOwnProperty(r)||(r.indexOf("--")===0?t.setProperty(r,""):r==="float"?t.cssFloat="":t[r]="");for(var u in n)r=n[u],n.hasOwnProperty(u)&&a[u]!==r&&Si(t,u,r)}else for(var f in n)n.hasOwnProperty(f)&&Si(t,f,n[f])}function Is(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ev=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),bv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function el(t){return bv.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function ji(){}var Jc=null;function $c(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Hs=null,Gs=null;function Jh(t){var n=Ta(t);if(n&&(t=n.stateNode)){var a=t[hn]||null;t:switch(t=n.stateNode,n.type){case"input":if(Ln(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+ie(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var r=a[n];if(r!==t&&r.form===t.form){var u=r[hn]||null;if(!u)throw Error(s(90));Ln(r,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)r=a[n],r.form===t.form&&pn(r)}break t;case"textarea":Ne(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&Zn(t,!!a.multiple,n,!1)}}}var tu=!1;function $h(t,n,a){if(tu)return t(n,a);tu=!0;try{var r=t(n);return r}finally{if(tu=!1,(Hs!==null||Gs!==null)&&(Vl(),Hs&&(n=Hs,t=Gs,Gs=Hs=null,Jh(n),t)))for(n=0;n<t.length;n++)Jh(t[n])}}function kr(t,n){var a=t.stateNode;if(a===null)return null;var r=a[hn]||null;if(r===null)return null;a=r[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var Zi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),eu=!1;if(Zi)try{var Xr={};Object.defineProperty(Xr,"passive",{get:function(){eu=!0}}),window.addEventListener("test",Xr,Xr),window.removeEventListener("test",Xr,Xr)}catch{eu=!1}var Aa=null,nu=null,nl=null;function tp(){if(nl)return nl;var t,n=nu,a=n.length,r,u="value"in Aa?Aa.value:Aa.textContent,f=u.length;for(t=0;t<a&&n[t]===u[t];t++);var g=a-t;for(r=1;r<=g&&n[a-r]===u[f-r];r++);return nl=u.slice(t,1<r?1-r:void 0)}function il(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function al(){return!0}function ep(){return!1}function Bn(t){function n(a,r,u,f,g){this._reactName=a,this._targetInst=u,this.type=r,this.nativeEvent=f,this.target=g,this.currentTarget=null;for(var A in t)t.hasOwnProperty(A)&&(a=t[A],this[A]=a?a(f):f[A]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?al:ep,this.isPropagationStopped=ep,this}return S(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=al)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=al)},persist:function(){},isPersistent:al}),n}var rs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},sl=Bn(rs),Wr=S({},rs,{view:0,detail:0}),Tv=Bn(Wr),iu,au,qr,rl=S({},Wr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ru,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==qr&&(qr&&t.type==="mousemove"?(iu=t.screenX-qr.screenX,au=t.screenY-qr.screenY):au=iu=0,qr=t),iu)},movementY:function(t){return"movementY"in t?t.movementY:au}}),np=Bn(rl),Av=S({},rl,{dataTransfer:0}),Rv=Bn(Av),Cv=S({},Wr,{relatedTarget:0}),su=Bn(Cv),wv=S({},rs,{animationName:0,elapsedTime:0,pseudoElement:0}),Dv=Bn(wv),Uv=S({},rs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Lv=Bn(Uv),Nv=S({},rs,{data:0}),ip=Bn(Nv),Ov={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Pv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},zv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Bv(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=zv[t])?!!n[t]:!1}function ru(){return Bv}var Fv=S({},Wr,{key:function(t){if(t.key){var n=Ov[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=il(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Pv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ru,charCode:function(t){return t.type==="keypress"?il(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?il(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Iv=Bn(Fv),Hv=S({},rl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ap=Bn(Hv),Gv=S({},Wr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ru}),Vv=Bn(Gv),kv=S({},rs,{propertyName:0,elapsedTime:0,pseudoElement:0}),Xv=Bn(kv),Wv=S({},rl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),qv=Bn(Wv),Yv=S({},rs,{newState:0,oldState:0}),jv=Bn(Yv),Zv=[9,13,27,32],ou=Zi&&"CompositionEvent"in window,Yr=null;Zi&&"documentMode"in document&&(Yr=document.documentMode);var Kv=Zi&&"TextEvent"in window&&!Yr,sp=Zi&&(!ou||Yr&&8<Yr&&11>=Yr),rp=" ",op=!1;function lp(t,n){switch(t){case"keyup":return Zv.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function cp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Vs=!1;function Qv(t,n){switch(t){case"compositionend":return cp(n);case"keypress":return n.which!==32?null:(op=!0,rp);case"textInput":return t=n.data,t===rp&&op?null:t;default:return null}}function Jv(t,n){if(Vs)return t==="compositionend"||!ou&&lp(t,n)?(t=tp(),nl=nu=Aa=null,Vs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return sp&&n.locale!=="ko"?null:n.data;default:return null}}var $v={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function up(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!$v[t.type]:n==="textarea"}function fp(t,n,a,r){Hs?Gs?Gs.push(r):Gs=[r]:Hs=r,n=Zl(n,"onChange"),0<n.length&&(a=new sl("onChange","change",null,a,r),t.push({event:a,listeners:n}))}var jr=null,Zr=null;function tx(t){Y0(t,0)}function ol(t){var n=ss(t);if(pn(n))return t}function dp(t,n){if(t==="change")return n}var hp=!1;if(Zi){var lu;if(Zi){var cu="oninput"in document;if(!cu){var pp=document.createElement("div");pp.setAttribute("oninput","return;"),cu=typeof pp.oninput=="function"}lu=cu}else lu=!1;hp=lu&&(!document.documentMode||9<document.documentMode)}function mp(){jr&&(jr.detachEvent("onpropertychange",gp),Zr=jr=null)}function gp(t){if(t.propertyName==="value"&&ol(Zr)){var n=[];fp(n,Zr,t,$c(t)),$h(tx,n)}}function ex(t,n,a){t==="focusin"?(mp(),jr=n,Zr=a,jr.attachEvent("onpropertychange",gp)):t==="focusout"&&mp()}function nx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ol(Zr)}function ix(t,n){if(t==="click")return ol(n)}function ax(t,n){if(t==="input"||t==="change")return ol(n)}function sx(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Kn=typeof Object.is=="function"?Object.is:sx;function Kr(t,n){if(Kn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),r=Object.keys(n);if(a.length!==r.length)return!1;for(r=0;r<a.length;r++){var u=a[r];if(!We.call(n,u)||!Kn(t[u],n[u]))return!1}return!0}function _p(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function vp(t,n){var a=_p(t);t=0;for(var r;a;){if(a.nodeType===3){if(r=t+a.textContent.length,t<=n&&r>=n)return{node:a,offset:n-t};t=r}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=_p(a)}}function xp(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?xp(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Sp(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=Vt(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=Vt(t.document)}return n}function uu(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var rx=Zi&&"documentMode"in document&&11>=document.documentMode,ks=null,fu=null,Qr=null,du=!1;function yp(t,n,a){var r=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;du||ks==null||ks!==Vt(r)||(r=ks,"selectionStart"in r&&uu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Qr&&Kr(Qr,r)||(Qr=r,r=Zl(fu,"onSelect"),0<r.length&&(n=new sl("onSelect","select",null,n,a),t.push({event:n,listeners:r}),n.target=ks)))}function os(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Xs={animationend:os("Animation","AnimationEnd"),animationiteration:os("Animation","AnimationIteration"),animationstart:os("Animation","AnimationStart"),transitionrun:os("Transition","TransitionRun"),transitionstart:os("Transition","TransitionStart"),transitioncancel:os("Transition","TransitionCancel"),transitionend:os("Transition","TransitionEnd")},hu={},Mp={};Zi&&(Mp=document.createElement("div").style,"AnimationEvent"in window||(delete Xs.animationend.animation,delete Xs.animationiteration.animation,delete Xs.animationstart.animation),"TransitionEvent"in window||delete Xs.transitionend.transition);function ls(t){if(hu[t])return hu[t];if(!Xs[t])return t;var n=Xs[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in Mp)return hu[t]=n[a];return t}var Ep=ls("animationend"),bp=ls("animationiteration"),Tp=ls("animationstart"),ox=ls("transitionrun"),lx=ls("transitionstart"),cx=ls("transitioncancel"),Ap=ls("transitionend"),Rp=new Map,pu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");pu.push("scrollEnd");function yi(t,n){Rp.set(t,n),$(n,[t])}var ll=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},si=[],Ws=0,mu=0;function cl(){for(var t=Ws,n=mu=Ws=0;n<t;){var a=si[n];si[n++]=null;var r=si[n];si[n++]=null;var u=si[n];si[n++]=null;var f=si[n];if(si[n++]=null,r!==null&&u!==null){var g=r.pending;g===null?u.next=u:(u.next=g.next,g.next=u),r.pending=u}f!==0&&Cp(a,u,f)}}function ul(t,n,a,r){si[Ws++]=t,si[Ws++]=n,si[Ws++]=a,si[Ws++]=r,mu|=r,t.lanes|=r,t=t.alternate,t!==null&&(t.lanes|=r)}function gu(t,n,a,r){return ul(t,n,a,r),fl(t)}function cs(t,n){return ul(t,null,null,n),fl(t)}function Cp(t,n,a){t.lanes|=a;var r=t.alternate;r!==null&&(r.lanes|=a);for(var u=!1,f=t.return;f!==null;)f.childLanes|=a,r=f.alternate,r!==null&&(r.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(u=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,u&&n!==null&&(u=31-Nt(a),t=f.hiddenUpdates,r=t[u],r===null?t[u]=[n]:r.push(n),n.lane=a|536870912),f):null}function fl(t){if(50<So)throw So=0,Af=null,Error(s(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var qs={};function ux(t,n,a,r){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Qn(t,n,a,r){return new ux(t,n,a,r)}function _u(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Ki(t,n){var a=t.alternate;return a===null?(a=Qn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function wp(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function dl(t,n,a,r,u,f){var g=0;if(r=t,typeof t=="function")_u(t)&&(g=1);else if(typeof t=="string")g=mS(t,a,Rt.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case L:return t=Qn(31,a,n,u),t.elementType=L,t.lanes=f,t;case w:return us(a.children,u,f,n);case y:g=8,u|=24;break;case v:return t=Qn(12,a,n,u|2),t.elementType=v,t.lanes=f,t;case I:return t=Qn(13,a,n,u),t.elementType=I,t.lanes=f,t;case B:return t=Qn(19,a,n,u),t.elementType=B,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case U:g=10;break t;case C:g=9;break t;case D:g=11;break t;case F:g=14;break t;case T:g=16,r=null;break t}g=29,a=Error(s(130,t===null?"null":typeof t,"")),r=null}return n=Qn(g,a,n,u),n.elementType=t,n.type=r,n.lanes=f,n}function us(t,n,a,r){return t=Qn(7,t,r,n),t.lanes=a,t}function vu(t,n,a){return t=Qn(6,t,null,n),t.lanes=a,t}function Dp(t){var n=Qn(18,null,null,0);return n.stateNode=t,n}function xu(t,n,a){return n=Qn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var Up=new WeakMap;function ri(t,n){if(typeof t=="object"&&t!==null){var a=Up.get(t);return a!==void 0?a:(n={value:t,source:n,stack:V(n)},Up.set(t,n),n)}return{value:t,source:n,stack:V(n)}}var Ys=[],js=0,hl=null,Jr=0,oi=[],li=0,Ra=null,Ui=1,Li="";function Qi(t,n){Ys[js++]=Jr,Ys[js++]=hl,hl=t,Jr=n}function Lp(t,n,a){oi[li++]=Ui,oi[li++]=Li,oi[li++]=Ra,Ra=t;var r=Ui;t=Li;var u=32-Nt(r)-1;r&=~(1<<u),a+=1;var f=32-Nt(n)+u;if(30<f){var g=u-u%5;f=(r&(1<<g)-1).toString(32),r>>=g,u-=g,Ui=1<<32-Nt(n)+u|a<<u|r,Li=f+t}else Ui=1<<f|a<<u|r,Li=t}function Su(t){t.return!==null&&(Qi(t,1),Lp(t,1,0))}function yu(t){for(;t===hl;)hl=Ys[--js],Ys[js]=null,Jr=Ys[--js],Ys[js]=null;for(;t===Ra;)Ra=oi[--li],oi[li]=null,Li=oi[--li],oi[li]=null,Ui=oi[--li],oi[li]=null}function Np(t,n){oi[li++]=Ui,oi[li++]=Li,oi[li++]=Ra,Ui=n.id,Li=n.overflow,Ra=t}var yn=null,ke=null,Se=!1,Ca=null,ci=!1,Mu=Error(s(519));function wa(t){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw $r(ri(n,t)),Mu}function Op(t){var n=t.stateNode,a=t.type,r=t.memoizedProps;switch(n[sn]=t,n[hn]=r,a){case"dialog":ge("cancel",n),ge("close",n);break;case"iframe":case"object":case"embed":ge("load",n);break;case"video":case"audio":for(a=0;a<Mo.length;a++)ge(Mo[a],n);break;case"source":ge("error",n);break;case"img":case"image":case"link":ge("error",n),ge("load",n);break;case"details":ge("toggle",n);break;case"input":ge("invalid",n),jn(n,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":ge("invalid",n);break;case"textarea":ge("invalid",n),rn(n,r.value,r.defaultValue,r.children)}a=r.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||r.suppressHydrationWarning===!0||Q0(n.textContent,a)?(r.popover!=null&&(ge("beforetoggle",n),ge("toggle",n)),r.onScroll!=null&&ge("scroll",n),r.onScrollEnd!=null&&ge("scrollend",n),r.onClick!=null&&(n.onclick=ji),n=!0):n=!1,n||wa(t,!0)}function Pp(t){for(yn=t.return;yn;)switch(yn.tag){case 5:case 31:case 13:ci=!1;return;case 27:case 3:ci=!0;return;default:yn=yn.return}}function Zs(t){if(t!==yn)return!1;if(!Se)return Pp(t),Se=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Gf(t.type,t.memoizedProps)),a=!a),a&&ke&&wa(t),Pp(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));ke=rg(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));ke=rg(t)}else n===27?(n=ke,ka(t.type)?(t=qf,qf=null,ke=t):ke=n):ke=yn?fi(t.stateNode.nextSibling):null;return!0}function fs(){ke=yn=null,Se=!1}function Eu(){var t=Ca;return t!==null&&(Gn===null?Gn=t:Gn.push.apply(Gn,t),Ca=null),t}function $r(t){Ca===null?Ca=[t]:Ca.push(t)}var bu=P(null),ds=null,Ji=null;function Da(t,n,a){vt(bu,n._currentValue),n._currentValue=a}function $i(t){t._currentValue=bu.current,j(bu)}function Tu(t,n,a){for(;t!==null;){var r=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),t===a)break;t=t.return}}function Au(t,n,a,r){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var f=u.dependencies;if(f!==null){var g=u.child;f=f.firstContext;t:for(;f!==null;){var A=f;f=u;for(var H=0;H<n.length;H++)if(A.context===n[H]){f.lanes|=a,A=f.alternate,A!==null&&(A.lanes|=a),Tu(f.return,a,t),r||(g=null);break t}f=A.next}}else if(u.tag===18){if(g=u.return,g===null)throw Error(s(341));g.lanes|=a,f=g.alternate,f!==null&&(f.lanes|=a),Tu(g,a,t),g=null}else g=u.child;if(g!==null)g.return=u;else for(g=u;g!==null;){if(g===t){g=null;break}if(u=g.sibling,u!==null){u.return=g.return,g=u;break}g=g.return}u=g}}function Ks(t,n,a,r){t=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var g=u.alternate;if(g===null)throw Error(s(387));if(g=g.memoizedProps,g!==null){var A=u.type;Kn(u.pendingProps.value,g.value)||(t!==null?t.push(A):t=[A])}}else if(u===xt.current){if(g=u.alternate,g===null)throw Error(s(387));g.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(Ro):t=[Ro])}u=u.return}t!==null&&Au(n,t,a,r),n.flags|=262144}function pl(t){for(t=t.firstContext;t!==null;){if(!Kn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function hs(t){ds=t,Ji=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Mn(t){return zp(ds,t)}function ml(t,n){return ds===null&&hs(t),zp(t,n)}function zp(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Ji===null){if(t===null)throw Error(s(308));Ji=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Ji=Ji.next=n;return a}var fx=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,r){t.push(r)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},dx=o.unstable_scheduleCallback,hx=o.unstable_NormalPriority,ln={$$typeof:U,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ru(){return{controller:new fx,data:new Map,refCount:0}}function to(t){t.refCount--,t.refCount===0&&dx(hx,function(){t.controller.abort()})}var eo=null,Cu=0,Qs=0,Js=null;function px(t,n){if(eo===null){var a=eo=[];Cu=0,Qs=Lf(),Js={status:"pending",value:void 0,then:function(r){a.push(r)}}}return Cu++,n.then(Bp,Bp),n}function Bp(){if(--Cu===0&&eo!==null){Js!==null&&(Js.status="fulfilled");var t=eo;eo=null,Qs=0,Js=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function mx(t,n){var a=[],r={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){r.status="fulfilled",r.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(r.status="rejected",r.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),r}var Fp=N.S;N.S=function(t,n){y0=E(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&px(t,n),Fp!==null&&Fp(t,n)};var ps=P(null);function wu(){var t=ps.current;return t!==null?t:Ve.pooledCache}function gl(t,n){n===null?vt(ps,ps.current):vt(ps,n.pool)}function Ip(){var t=wu();return t===null?null:{parent:ln._currentValue,pool:t}}var $s=Error(s(460)),Du=Error(s(474)),_l=Error(s(542)),vl={then:function(){}};function Hp(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Gp(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(ji,ji),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,kp(t),t;default:if(typeof n.status=="string")n.then(ji,ji);else{if(t=Ve,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=n,t.status="pending",t.then(function(r){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=r}},function(r){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=r}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,kp(t),t}throw gs=n,$s}}function ms(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(gs=a,$s):a}}var gs=null;function Vp(){if(gs===null)throw Error(s(459));var t=gs;return gs=null,t}function kp(t){if(t===$s||t===_l)throw Error(s(483))}var tr=null,no=0;function xl(t){var n=no;return no+=1,tr===null&&(tr=[]),Gp(tr,t,n)}function io(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function Sl(t,n){throw n.$$typeof===_?Error(s(525)):(t=Object.prototype.toString.call(n),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Xp(t){function n(Z,k){if(t){var et=Z.deletions;et===null?(Z.deletions=[k],Z.flags|=16):et.push(k)}}function a(Z,k){if(!t)return null;for(;k!==null;)n(Z,k),k=k.sibling;return null}function r(Z){for(var k=new Map;Z!==null;)Z.key!==null?k.set(Z.key,Z):k.set(Z.index,Z),Z=Z.sibling;return k}function u(Z,k){return Z=Ki(Z,k),Z.index=0,Z.sibling=null,Z}function f(Z,k,et){return Z.index=et,t?(et=Z.alternate,et!==null?(et=et.index,et<k?(Z.flags|=67108866,k):et):(Z.flags|=67108866,k)):(Z.flags|=1048576,k)}function g(Z){return t&&Z.alternate===null&&(Z.flags|=67108866),Z}function A(Z,k,et,gt){return k===null||k.tag!==6?(k=vu(et,Z.mode,gt),k.return=Z,k):(k=u(k,et),k.return=Z,k)}function H(Z,k,et,gt){var Qt=et.type;return Qt===w?pt(Z,k,et.props.children,gt,et.key):k!==null&&(k.elementType===Qt||typeof Qt=="object"&&Qt!==null&&Qt.$$typeof===T&&ms(Qt)===k.type)?(k=u(k,et.props),io(k,et),k.return=Z,k):(k=dl(et.type,et.key,et.props,null,Z.mode,gt),io(k,et),k.return=Z,k)}function nt(Z,k,et,gt){return k===null||k.tag!==4||k.stateNode.containerInfo!==et.containerInfo||k.stateNode.implementation!==et.implementation?(k=xu(et,Z.mode,gt),k.return=Z,k):(k=u(k,et.children||[]),k.return=Z,k)}function pt(Z,k,et,gt,Qt){return k===null||k.tag!==7?(k=us(et,Z.mode,gt,Qt),k.return=Z,k):(k=u(k,et),k.return=Z,k)}function _t(Z,k,et){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=vu(""+k,Z.mode,et),k.return=Z,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case M:return et=dl(k.type,k.key,k.props,null,Z.mode,et),io(et,k),et.return=Z,et;case b:return k=xu(k,Z.mode,et),k.return=Z,k;case T:return k=ms(k),_t(Z,k,et)}if(Y(k)||Q(k))return k=us(k,Z.mode,et,null),k.return=Z,k;if(typeof k.then=="function")return _t(Z,xl(k),et);if(k.$$typeof===U)return _t(Z,ml(Z,k),et);Sl(Z,k)}return null}function st(Z,k,et,gt){var Qt=k!==null?k.key:null;if(typeof et=="string"&&et!==""||typeof et=="number"||typeof et=="bigint")return Qt!==null?null:A(Z,k,""+et,gt);if(typeof et=="object"&&et!==null){switch(et.$$typeof){case M:return et.key===Qt?H(Z,k,et,gt):null;case b:return et.key===Qt?nt(Z,k,et,gt):null;case T:return et=ms(et),st(Z,k,et,gt)}if(Y(et)||Q(et))return Qt!==null?null:pt(Z,k,et,gt,null);if(typeof et.then=="function")return st(Z,k,xl(et),gt);if(et.$$typeof===U)return st(Z,k,ml(Z,et),gt);Sl(Z,et)}return null}function ut(Z,k,et,gt,Qt){if(typeof gt=="string"&&gt!==""||typeof gt=="number"||typeof gt=="bigint")return Z=Z.get(et)||null,A(k,Z,""+gt,Qt);if(typeof gt=="object"&&gt!==null){switch(gt.$$typeof){case M:return Z=Z.get(gt.key===null?et:gt.key)||null,H(k,Z,gt,Qt);case b:return Z=Z.get(gt.key===null?et:gt.key)||null,nt(k,Z,gt,Qt);case T:return gt=ms(gt),ut(Z,k,et,gt,Qt)}if(Y(gt)||Q(gt))return Z=Z.get(et)||null,pt(k,Z,gt,Qt,null);if(typeof gt.then=="function")return ut(Z,k,et,xl(gt),Qt);if(gt.$$typeof===U)return ut(Z,k,et,ml(k,gt),Qt);Sl(k,gt)}return null}function Gt(Z,k,et,gt){for(var Qt=null,Ce=null,Yt=k,fe=k=0,xe=null;Yt!==null&&fe<et.length;fe++){Yt.index>fe?(xe=Yt,Yt=null):xe=Yt.sibling;var we=st(Z,Yt,et[fe],gt);if(we===null){Yt===null&&(Yt=xe);break}t&&Yt&&we.alternate===null&&n(Z,Yt),k=f(we,k,fe),Ce===null?Qt=we:Ce.sibling=we,Ce=we,Yt=xe}if(fe===et.length)return a(Z,Yt),Se&&Qi(Z,fe),Qt;if(Yt===null){for(;fe<et.length;fe++)Yt=_t(Z,et[fe],gt),Yt!==null&&(k=f(Yt,k,fe),Ce===null?Qt=Yt:Ce.sibling=Yt,Ce=Yt);return Se&&Qi(Z,fe),Qt}for(Yt=r(Yt);fe<et.length;fe++)xe=ut(Yt,Z,fe,et[fe],gt),xe!==null&&(t&&xe.alternate!==null&&Yt.delete(xe.key===null?fe:xe.key),k=f(xe,k,fe),Ce===null?Qt=xe:Ce.sibling=xe,Ce=xe);return t&&Yt.forEach(function(ja){return n(Z,ja)}),Se&&Qi(Z,fe),Qt}function Jt(Z,k,et,gt){if(et==null)throw Error(s(151));for(var Qt=null,Ce=null,Yt=k,fe=k=0,xe=null,we=et.next();Yt!==null&&!we.done;fe++,we=et.next()){Yt.index>fe?(xe=Yt,Yt=null):xe=Yt.sibling;var ja=st(Z,Yt,we.value,gt);if(ja===null){Yt===null&&(Yt=xe);break}t&&Yt&&ja.alternate===null&&n(Z,Yt),k=f(ja,k,fe),Ce===null?Qt=ja:Ce.sibling=ja,Ce=ja,Yt=xe}if(we.done)return a(Z,Yt),Se&&Qi(Z,fe),Qt;if(Yt===null){for(;!we.done;fe++,we=et.next())we=_t(Z,we.value,gt),we!==null&&(k=f(we,k,fe),Ce===null?Qt=we:Ce.sibling=we,Ce=we);return Se&&Qi(Z,fe),Qt}for(Yt=r(Yt);!we.done;fe++,we=et.next())we=ut(Yt,Z,fe,we.value,gt),we!==null&&(t&&we.alternate!==null&&Yt.delete(we.key===null?fe:we.key),k=f(we,k,fe),Ce===null?Qt=we:Ce.sibling=we,Ce=we);return t&&Yt.forEach(function(AS){return n(Z,AS)}),Se&&Qi(Z,fe),Qt}function Ge(Z,k,et,gt){if(typeof et=="object"&&et!==null&&et.type===w&&et.key===null&&(et=et.props.children),typeof et=="object"&&et!==null){switch(et.$$typeof){case M:t:{for(var Qt=et.key;k!==null;){if(k.key===Qt){if(Qt=et.type,Qt===w){if(k.tag===7){a(Z,k.sibling),gt=u(k,et.props.children),gt.return=Z,Z=gt;break t}}else if(k.elementType===Qt||typeof Qt=="object"&&Qt!==null&&Qt.$$typeof===T&&ms(Qt)===k.type){a(Z,k.sibling),gt=u(k,et.props),io(gt,et),gt.return=Z,Z=gt;break t}a(Z,k);break}else n(Z,k);k=k.sibling}et.type===w?(gt=us(et.props.children,Z.mode,gt,et.key),gt.return=Z,Z=gt):(gt=dl(et.type,et.key,et.props,null,Z.mode,gt),io(gt,et),gt.return=Z,Z=gt)}return g(Z);case b:t:{for(Qt=et.key;k!==null;){if(k.key===Qt)if(k.tag===4&&k.stateNode.containerInfo===et.containerInfo&&k.stateNode.implementation===et.implementation){a(Z,k.sibling),gt=u(k,et.children||[]),gt.return=Z,Z=gt;break t}else{a(Z,k);break}else n(Z,k);k=k.sibling}gt=xu(et,Z.mode,gt),gt.return=Z,Z=gt}return g(Z);case T:return et=ms(et),Ge(Z,k,et,gt)}if(Y(et))return Gt(Z,k,et,gt);if(Q(et)){if(Qt=Q(et),typeof Qt!="function")throw Error(s(150));return et=Qt.call(et),Jt(Z,k,et,gt)}if(typeof et.then=="function")return Ge(Z,k,xl(et),gt);if(et.$$typeof===U)return Ge(Z,k,ml(Z,et),gt);Sl(Z,et)}return typeof et=="string"&&et!==""||typeof et=="number"||typeof et=="bigint"?(et=""+et,k!==null&&k.tag===6?(a(Z,k.sibling),gt=u(k,et),gt.return=Z,Z=gt):(a(Z,k),gt=vu(et,Z.mode,gt),gt.return=Z,Z=gt),g(Z)):a(Z,k)}return function(Z,k,et,gt){try{no=0;var Qt=Ge(Z,k,et,gt);return tr=null,Qt}catch(Yt){if(Yt===$s||Yt===_l)throw Yt;var Ce=Qn(29,Yt,null,Z.mode);return Ce.lanes=gt,Ce.return=Z,Ce}}}var _s=Xp(!0),Wp=Xp(!1),Ua=!1;function Uu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Lu(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function La(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Na(t,n,a){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,(Ue&2)!==0){var u=r.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),r.pending=n,n=fl(t),Cp(t,null,a),n}return ul(t,r,n,a),fl(t)}function ao(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var r=n.lanes;r&=t.pendingLanes,a|=r,n.lanes=a,Ps(t,a)}}function Nu(t,n){var a=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,a===r)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var g={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=g:f=f.next=g,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:r.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:r.shared,callbacks:r.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Ou=!1;function so(){if(Ou){var t=Js;if(t!==null)throw t}}function ro(t,n,a,r){Ou=!1;var u=t.updateQueue;Ua=!1;var f=u.firstBaseUpdate,g=u.lastBaseUpdate,A=u.shared.pending;if(A!==null){u.shared.pending=null;var H=A,nt=H.next;H.next=null,g===null?f=nt:g.next=nt,g=H;var pt=t.alternate;pt!==null&&(pt=pt.updateQueue,A=pt.lastBaseUpdate,A!==g&&(A===null?pt.firstBaseUpdate=nt:A.next=nt,pt.lastBaseUpdate=H))}if(f!==null){var _t=u.baseState;g=0,pt=nt=H=null,A=f;do{var st=A.lane&-536870913,ut=st!==A.lane;if(ut?(ve&st)===st:(r&st)===st){st!==0&&st===Qs&&(Ou=!0),pt!==null&&(pt=pt.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});t:{var Gt=t,Jt=A;st=n;var Ge=a;switch(Jt.tag){case 1:if(Gt=Jt.payload,typeof Gt=="function"){_t=Gt.call(Ge,_t,st);break t}_t=Gt;break t;case 3:Gt.flags=Gt.flags&-65537|128;case 0:if(Gt=Jt.payload,st=typeof Gt=="function"?Gt.call(Ge,_t,st):Gt,st==null)break t;_t=S({},_t,st);break t;case 2:Ua=!0}}st=A.callback,st!==null&&(t.flags|=64,ut&&(t.flags|=8192),ut=u.callbacks,ut===null?u.callbacks=[st]:ut.push(st))}else ut={lane:st,tag:A.tag,payload:A.payload,callback:A.callback,next:null},pt===null?(nt=pt=ut,H=_t):pt=pt.next=ut,g|=st;if(A=A.next,A===null){if(A=u.shared.pending,A===null)break;ut=A,A=ut.next,ut.next=null,u.lastBaseUpdate=ut,u.shared.pending=null}}while(!0);pt===null&&(H=_t),u.baseState=H,u.firstBaseUpdate=nt,u.lastBaseUpdate=pt,f===null&&(u.shared.lanes=0),Fa|=g,t.lanes=g,t.memoizedState=_t}}function qp(t,n){if(typeof t!="function")throw Error(s(191,t));t.call(n)}function Yp(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)qp(a[t],n)}var er=P(null),yl=P(0);function jp(t,n){t=la,vt(yl,t),vt(er,n),la=t|n.baseLanes}function Pu(){vt(yl,la),vt(er,er.current)}function zu(){la=yl.current,j(er),j(yl)}var Jn=P(null),ui=null;function Oa(t){var n=t.alternate;vt(en,en.current&1),vt(Jn,t),ui===null&&(n===null||er.current!==null||n.memoizedState!==null)&&(ui=t)}function Bu(t){vt(en,en.current),vt(Jn,t),ui===null&&(ui=t)}function Zp(t){t.tag===22?(vt(en,en.current),vt(Jn,t),ui===null&&(ui=t)):Pa()}function Pa(){vt(en,en.current),vt(Jn,Jn.current)}function $n(t){j(Jn),ui===t&&(ui=null),j(en)}var en=P(0);function Ml(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Xf(a)||Wf(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ta=0,le=null,Ie=null,cn=null,El=!1,nr=!1,vs=!1,bl=0,oo=0,ir=null,gx=0;function Qe(){throw Error(s(321))}function Fu(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!Kn(t[a],n[a]))return!1;return!0}function Iu(t,n,a,r,u,f){return ta=f,le=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,N.H=t===null||t.memoizedState===null?Lm:tf,vs=!1,f=a(r,u),vs=!1,nr&&(f=Qp(n,a,r,u)),Kp(t),f}function Kp(t){N.H=uo;var n=Ie!==null&&Ie.next!==null;if(ta=0,cn=Ie=le=null,El=!1,oo=0,ir=null,n)throw Error(s(300));t===null||un||(t=t.dependencies,t!==null&&pl(t)&&(un=!0))}function Qp(t,n,a,r){le=t;var u=0;do{if(nr&&(ir=null),oo=0,nr=!1,25<=u)throw Error(s(301));if(u+=1,cn=Ie=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}N.H=Nm,f=n(a,r)}while(nr);return f}function _x(){var t=N.H,n=t.useState()[0];return n=typeof n.then=="function"?lo(n):n,t=t.useState()[0],(Ie!==null?Ie.memoizedState:null)!==t&&(le.flags|=1024),n}function Hu(){var t=bl!==0;return bl=0,t}function Gu(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function Vu(t){if(El){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}El=!1}ta=0,cn=Ie=le=null,nr=!1,oo=bl=0,ir=null}function On(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return cn===null?le.memoizedState=cn=t:cn=cn.next=t,cn}function nn(){if(Ie===null){var t=le.alternate;t=t!==null?t.memoizedState:null}else t=Ie.next;var n=cn===null?le.memoizedState:cn.next;if(n!==null)cn=n,Ie=t;else{if(t===null)throw le.alternate===null?Error(s(467)):Error(s(310));Ie=t,t={memoizedState:Ie.memoizedState,baseState:Ie.baseState,baseQueue:Ie.baseQueue,queue:Ie.queue,next:null},cn===null?le.memoizedState=cn=t:cn=cn.next=t}return cn}function Tl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function lo(t){var n=oo;return oo+=1,ir===null&&(ir=[]),t=Gp(ir,t,n),n=le,(cn===null?n.memoizedState:cn.next)===null&&(n=n.alternate,N.H=n===null||n.memoizedState===null?Lm:tf),t}function Al(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return lo(t);if(t.$$typeof===U)return Mn(t)}throw Error(s(438,String(t)))}function ku(t){var n=null,a=le.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var r=le.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(n={data:r.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Tl(),le.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),r=0;r<t;r++)a[r]=lt;return n.index++,a}function ea(t,n){return typeof n=="function"?n(t):n}function Rl(t){var n=nn();return Xu(n,Ie,t)}function Xu(t,n,a){var r=t.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=a;var u=t.baseQueue,f=r.pending;if(f!==null){if(u!==null){var g=u.next;u.next=f.next,f.next=g}n.baseQueue=u=f,r.pending=null}if(f=t.baseState,u===null)t.memoizedState=f;else{n=u.next;var A=g=null,H=null,nt=n,pt=!1;do{var _t=nt.lane&-536870913;if(_t!==nt.lane?(ve&_t)===_t:(ta&_t)===_t){var st=nt.revertLane;if(st===0)H!==null&&(H=H.next={lane:0,revertLane:0,gesture:null,action:nt.action,hasEagerState:nt.hasEagerState,eagerState:nt.eagerState,next:null}),_t===Qs&&(pt=!0);else if((ta&st)===st){nt=nt.next,st===Qs&&(pt=!0);continue}else _t={lane:0,revertLane:nt.revertLane,gesture:null,action:nt.action,hasEagerState:nt.hasEagerState,eagerState:nt.eagerState,next:null},H===null?(A=H=_t,g=f):H=H.next=_t,le.lanes|=st,Fa|=st;_t=nt.action,vs&&a(f,_t),f=nt.hasEagerState?nt.eagerState:a(f,_t)}else st={lane:_t,revertLane:nt.revertLane,gesture:nt.gesture,action:nt.action,hasEagerState:nt.hasEagerState,eagerState:nt.eagerState,next:null},H===null?(A=H=st,g=f):H=H.next=st,le.lanes|=_t,Fa|=_t;nt=nt.next}while(nt!==null&&nt!==n);if(H===null?g=f:H.next=A,!Kn(f,t.memoizedState)&&(un=!0,pt&&(a=Js,a!==null)))throw a;t.memoizedState=f,t.baseState=g,t.baseQueue=H,r.lastRenderedState=f}return u===null&&(r.lanes=0),[t.memoizedState,r.dispatch]}function Wu(t){var n=nn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=t;var r=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var g=u=u.next;do f=t(f,g.action),g=g.next;while(g!==u);Kn(f,n.memoizedState)||(un=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,r]}function Jp(t,n,a){var r=le,u=nn(),f=Se;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var g=!Kn((Ie||u).memoizedState,a);if(g&&(u.memoizedState=a,un=!0),u=u.queue,ju(em.bind(null,r,u,t),[t]),u.getSnapshot!==n||g||cn!==null&&cn.memoizedState.tag&1){if(r.flags|=2048,ar(9,{destroy:void 0},tm.bind(null,r,u,a,n),null),Ve===null)throw Error(s(349));f||(ta&127)!==0||$p(r,n,a)}return a}function $p(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=le.updateQueue,n===null?(n=Tl(),le.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function tm(t,n,a,r){n.value=a,n.getSnapshot=r,nm(n)&&im(t)}function em(t,n,a){return a(function(){nm(n)&&im(t)})}function nm(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!Kn(t,a)}catch{return!0}}function im(t){var n=cs(t,2);n!==null&&Vn(n,t,2)}function qu(t){var n=On();if(typeof t=="function"){var a=t;if(t=a(),vs){Ot(!0);try{a()}finally{Ot(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ea,lastRenderedState:t},n}function am(t,n,a,r){return t.baseState=a,Xu(t,Ie,typeof r=="function"?r:ea)}function vx(t,n,a,r,u){if(Dl(t))throw Error(s(485));if(t=n.action,t!==null){var f={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(g){f.listeners.push(g)}};N.T!==null?a(!0):f.isTransition=!1,r(f),a=n.pending,a===null?(f.next=n.pending=f,sm(n,f)):(f.next=a.next,n.pending=a.next=f)}}function sm(t,n){var a=n.action,r=n.payload,u=t.state;if(n.isTransition){var f=N.T,g={};N.T=g;try{var A=a(u,r),H=N.S;H!==null&&H(g,A),rm(t,n,A)}catch(nt){Yu(t,n,nt)}finally{f!==null&&g.types!==null&&(f.types=g.types),N.T=f}}else try{f=a(u,r),rm(t,n,f)}catch(nt){Yu(t,n,nt)}}function rm(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(r){om(t,n,r)},function(r){return Yu(t,n,r)}):om(t,n,a)}function om(t,n,a){n.status="fulfilled",n.value=a,lm(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,sm(t,a)))}function Yu(t,n,a){var r=t.pending;if(t.pending=null,r!==null){r=r.next;do n.status="rejected",n.reason=a,lm(n),n=n.next;while(n!==r)}t.action=null}function lm(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function cm(t,n){return n}function um(t,n){if(Se){var a=Ve.formState;if(a!==null){t:{var r=le;if(Se){if(ke){e:{for(var u=ke,f=ci;u.nodeType!==8;){if(!f){u=null;break e}if(u=fi(u.nextSibling),u===null){u=null;break e}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){ke=fi(u.nextSibling),r=u.data==="F!";break t}}wa(r)}r=!1}r&&(n=a[0])}}return a=On(),a.memoizedState=a.baseState=n,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:cm,lastRenderedState:n},a.queue=r,a=wm.bind(null,le,r),r.dispatch=a,r=qu(!1),f=$u.bind(null,le,!1,r.queue),r=On(),u={state:n,dispatch:null,action:t,pending:null},r.queue=u,a=vx.bind(null,le,u,f,a),u.dispatch=a,r.memoizedState=t,[n,a,!1]}function fm(t){var n=nn();return dm(n,Ie,t)}function dm(t,n,a){if(n=Xu(t,n,cm)[0],t=Rl(ea)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var r=lo(n)}catch(g){throw g===$s?_l:g}else r=n;n=nn();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(le.flags|=2048,ar(9,{destroy:void 0},xx.bind(null,u,a),null)),[r,f,t]}function xx(t,n){t.action=n}function hm(t){var n=nn(),a=Ie;if(a!==null)return dm(n,a,t);nn(),n=n.memoizedState,a=nn();var r=a.queue.dispatch;return a.memoizedState=t,[n,r,!1]}function ar(t,n,a,r){return t={tag:t,create:a,deps:r,inst:n,next:null},n=le.updateQueue,n===null&&(n=Tl(),le.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(r=a.next,a.next=t,t.next=r,n.lastEffect=t),t}function pm(){return nn().memoizedState}function Cl(t,n,a,r){var u=On();le.flags|=t,u.memoizedState=ar(1|n,{destroy:void 0},a,r===void 0?null:r)}function wl(t,n,a,r){var u=nn();r=r===void 0?null:r;var f=u.memoizedState.inst;Ie!==null&&r!==null&&Fu(r,Ie.memoizedState.deps)?u.memoizedState=ar(n,f,a,r):(le.flags|=t,u.memoizedState=ar(1|n,f,a,r))}function mm(t,n){Cl(8390656,8,t,n)}function ju(t,n){wl(2048,8,t,n)}function Sx(t){le.flags|=4;var n=le.updateQueue;if(n===null)n=Tl(),le.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function gm(t){var n=nn().memoizedState;return Sx({ref:n,nextImpl:t}),function(){if((Ue&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function _m(t,n){return wl(4,2,t,n)}function vm(t,n){return wl(4,4,t,n)}function xm(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Sm(t,n,a){a=a!=null?a.concat([t]):null,wl(4,4,xm.bind(null,n,t),a)}function Zu(){}function ym(t,n){var a=nn();n=n===void 0?null:n;var r=a.memoizedState;return n!==null&&Fu(n,r[1])?r[0]:(a.memoizedState=[t,n],t)}function Mm(t,n){var a=nn();n=n===void 0?null:n;var r=a.memoizedState;if(n!==null&&Fu(n,r[1]))return r[0];if(r=t(),vs){Ot(!0);try{t()}finally{Ot(!1)}}return a.memoizedState=[r,n],r}function Ku(t,n,a){return a===void 0||(ta&1073741824)!==0&&(ve&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=E0(),le.lanes|=t,Fa|=t,a)}function Em(t,n,a,r){return Kn(a,n)?a:er.current!==null?(t=Ku(t,a,r),Kn(t,n)||(un=!0),t):(ta&42)===0||(ta&1073741824)!==0&&(ve&261930)===0?(un=!0,t.memoizedState=a):(t=E0(),le.lanes|=t,Fa|=t,n)}function bm(t,n,a,r,u){var f=z.p;z.p=f!==0&&8>f?f:8;var g=N.T,A={};N.T=A,$u(t,!1,n,a);try{var H=u(),nt=N.S;if(nt!==null&&nt(A,H),H!==null&&typeof H=="object"&&typeof H.then=="function"){var pt=mx(H,r);co(t,n,pt,ni(t))}else co(t,n,r,ni(t))}catch(_t){co(t,n,{then:function(){},status:"rejected",reason:_t},ni())}finally{z.p=f,g!==null&&A.types!==null&&(g.types=A.types),N.T=g}}function yx(){}function Qu(t,n,a,r){if(t.tag!==5)throw Error(s(476));var u=Tm(t).queue;bm(t,u,n,ot,a===null?yx:function(){return Am(t),a(r)})}function Tm(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:ot,baseState:ot,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ea,lastRenderedState:ot},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ea,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function Am(t){var n=Tm(t);n.next===null&&(n=t.alternate.memoizedState),co(t,n.next.queue,{},ni())}function Ju(){return Mn(Ro)}function Rm(){return nn().memoizedState}function Cm(){return nn().memoizedState}function Mx(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=ni();t=La(a);var r=Na(n,t,a);r!==null&&(Vn(r,n,a),ao(r,n,a)),n={cache:Ru()},t.payload=n;return}n=n.return}}function Ex(t,n,a){var r=ni();a={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Dl(t)?Dm(n,a):(a=gu(t,n,a,r),a!==null&&(Vn(a,t,r),Um(a,n,r)))}function wm(t,n,a){var r=ni();co(t,n,a,r)}function co(t,n,a,r){var u={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Dl(t))Dm(n,u);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var g=n.lastRenderedState,A=f(g,a);if(u.hasEagerState=!0,u.eagerState=A,Kn(A,g))return ul(t,n,u,0),Ve===null&&cl(),!1}catch{}if(a=gu(t,n,u,r),a!==null)return Vn(a,t,r),Um(a,n,r),!0}return!1}function $u(t,n,a,r){if(r={lane:2,revertLane:Lf(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Dl(t)){if(n)throw Error(s(479))}else n=gu(t,a,r,2),n!==null&&Vn(n,t,2)}function Dl(t){var n=t.alternate;return t===le||n!==null&&n===le}function Dm(t,n){nr=El=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function Um(t,n,a){if((a&4194048)!==0){var r=n.lanes;r&=t.pendingLanes,a|=r,n.lanes=a,Ps(t,a)}}var uo={readContext:Mn,use:Al,useCallback:Qe,useContext:Qe,useEffect:Qe,useImperativeHandle:Qe,useLayoutEffect:Qe,useInsertionEffect:Qe,useMemo:Qe,useReducer:Qe,useRef:Qe,useState:Qe,useDebugValue:Qe,useDeferredValue:Qe,useTransition:Qe,useSyncExternalStore:Qe,useId:Qe,useHostTransitionStatus:Qe,useFormState:Qe,useActionState:Qe,useOptimistic:Qe,useMemoCache:Qe,useCacheRefresh:Qe};uo.useEffectEvent=Qe;var Lm={readContext:Mn,use:Al,useCallback:function(t,n){return On().memoizedState=[t,n===void 0?null:n],t},useContext:Mn,useEffect:mm,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,Cl(4194308,4,xm.bind(null,n,t),a)},useLayoutEffect:function(t,n){return Cl(4194308,4,t,n)},useInsertionEffect:function(t,n){Cl(4,2,t,n)},useMemo:function(t,n){var a=On();n=n===void 0?null:n;var r=t();if(vs){Ot(!0);try{t()}finally{Ot(!1)}}return a.memoizedState=[r,n],r},useReducer:function(t,n,a){var r=On();if(a!==void 0){var u=a(n);if(vs){Ot(!0);try{a(n)}finally{Ot(!1)}}}else u=n;return r.memoizedState=r.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},r.queue=t,t=t.dispatch=Ex.bind(null,le,t),[r.memoizedState,t]},useRef:function(t){var n=On();return t={current:t},n.memoizedState=t},useState:function(t){t=qu(t);var n=t.queue,a=wm.bind(null,le,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:Zu,useDeferredValue:function(t,n){var a=On();return Ku(a,t,n)},useTransition:function(){var t=qu(!1);return t=bm.bind(null,le,t.queue,!0,!1),On().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var r=le,u=On();if(Se){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),Ve===null)throw Error(s(349));(ve&127)!==0||$p(r,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,mm(em.bind(null,r,f,t),[t]),r.flags|=2048,ar(9,{destroy:void 0},tm.bind(null,r,f,a,n),null),a},useId:function(){var t=On(),n=Ve.identifierPrefix;if(Se){var a=Li,r=Ui;a=(r&~(1<<32-Nt(r)-1)).toString(32)+a,n="_"+n+"R_"+a,a=bl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=gx++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:Ju,useFormState:um,useActionState:um,useOptimistic:function(t){var n=On();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=$u.bind(null,le,!0,a),a.dispatch=n,[t,n]},useMemoCache:ku,useCacheRefresh:function(){return On().memoizedState=Mx.bind(null,le)},useEffectEvent:function(t){var n=On(),a={impl:t};return n.memoizedState=a,function(){if((Ue&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},tf={readContext:Mn,use:Al,useCallback:ym,useContext:Mn,useEffect:ju,useImperativeHandle:Sm,useInsertionEffect:_m,useLayoutEffect:vm,useMemo:Mm,useReducer:Rl,useRef:pm,useState:function(){return Rl(ea)},useDebugValue:Zu,useDeferredValue:function(t,n){var a=nn();return Em(a,Ie.memoizedState,t,n)},useTransition:function(){var t=Rl(ea)[0],n=nn().memoizedState;return[typeof t=="boolean"?t:lo(t),n]},useSyncExternalStore:Jp,useId:Rm,useHostTransitionStatus:Ju,useFormState:fm,useActionState:fm,useOptimistic:function(t,n){var a=nn();return am(a,Ie,t,n)},useMemoCache:ku,useCacheRefresh:Cm};tf.useEffectEvent=gm;var Nm={readContext:Mn,use:Al,useCallback:ym,useContext:Mn,useEffect:ju,useImperativeHandle:Sm,useInsertionEffect:_m,useLayoutEffect:vm,useMemo:Mm,useReducer:Wu,useRef:pm,useState:function(){return Wu(ea)},useDebugValue:Zu,useDeferredValue:function(t,n){var a=nn();return Ie===null?Ku(a,t,n):Em(a,Ie.memoizedState,t,n)},useTransition:function(){var t=Wu(ea)[0],n=nn().memoizedState;return[typeof t=="boolean"?t:lo(t),n]},useSyncExternalStore:Jp,useId:Rm,useHostTransitionStatus:Ju,useFormState:hm,useActionState:hm,useOptimistic:function(t,n){var a=nn();return Ie!==null?am(a,Ie,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:ku,useCacheRefresh:Cm};Nm.useEffectEvent=gm;function ef(t,n,a,r){n=t.memoizedState,a=a(r,n),a=a==null?n:S({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var nf={enqueueSetState:function(t,n,a){t=t._reactInternals;var r=ni(),u=La(r);u.payload=n,a!=null&&(u.callback=a),n=Na(t,u,r),n!==null&&(Vn(n,t,r),ao(n,t,r))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var r=ni(),u=La(r);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Na(t,u,r),n!==null&&(Vn(n,t,r),ao(n,t,r))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=ni(),r=La(a);r.tag=2,n!=null&&(r.callback=n),n=Na(t,r,a),n!==null&&(Vn(n,t,a),ao(n,t,a))}};function Om(t,n,a,r,u,f,g){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,f,g):n.prototype&&n.prototype.isPureReactComponent?!Kr(a,r)||!Kr(u,f):!0}function Pm(t,n,a,r){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,r),n.state!==t&&nf.enqueueReplaceState(n,n.state,null)}function xs(t,n){var a=n;if("ref"in n){a={};for(var r in n)r!=="ref"&&(a[r]=n[r])}if(t=t.defaultProps){a===n&&(a=S({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}function zm(t){ll(t)}function Bm(t){console.error(t)}function Fm(t){ll(t)}function Ul(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(r){setTimeout(function(){throw r})}}function Im(t,n,a){try{var r=t.onCaughtError;r(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function af(t,n,a){return a=La(a),a.tag=3,a.payload={element:null},a.callback=function(){Ul(t,n)},a}function Hm(t){return t=La(t),t.tag=3,t}function Gm(t,n,a,r){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=r.value;t.payload=function(){return u(f)},t.callback=function(){Im(n,a,r)}}var g=a.stateNode;g!==null&&typeof g.componentDidCatch=="function"&&(t.callback=function(){Im(n,a,r),typeof u!="function"&&(Ia===null?Ia=new Set([this]):Ia.add(this));var A=r.stack;this.componentDidCatch(r.value,{componentStack:A!==null?A:""})})}function bx(t,n,a,r,u){if(a.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(n=a.alternate,n!==null&&Ks(n,a,u,!0),a=Jn.current,a!==null){switch(a.tag){case 31:case 13:return ui===null?kl():a.alternate===null&&Je===0&&(Je=3),a.flags&=-257,a.flags|=65536,a.lanes=u,r===vl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([r]):n.add(r),wf(t,r,u)),!1;case 22:return a.flags|=65536,r===vl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([r])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([r]):a.add(r)),wf(t,r,u)),!1}throw Error(s(435,a.tag))}return wf(t,r,u),kl(),!1}if(Se)return n=Jn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,r!==Mu&&(t=Error(s(422),{cause:r}),$r(ri(t,a)))):(r!==Mu&&(n=Error(s(423),{cause:r}),$r(ri(n,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,r=ri(r,a),u=af(t.stateNode,r,u),Nu(t,u),Je!==4&&(Je=2)),!1;var f=Error(s(520),{cause:r});if(f=ri(f,a),xo===null?xo=[f]:xo.push(f),Je!==4&&(Je=2),n===null)return!0;r=ri(r,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=af(a.stateNode,r,t),Nu(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Ia===null||!Ia.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=Hm(u),Gm(u,t,a,r),Nu(a,u),!1}a=a.return}while(a!==null);return!1}var sf=Error(s(461)),un=!1;function En(t,n,a,r){n.child=t===null?Wp(n,null,a,r):_s(n,t.child,a,r)}function Vm(t,n,a,r,u){a=a.render;var f=n.ref;if("ref"in r){var g={};for(var A in r)A!=="ref"&&(g[A]=r[A])}else g=r;return hs(n),r=Iu(t,n,a,g,f,u),A=Hu(),t!==null&&!un?(Gu(t,n,u),na(t,n,u)):(Se&&A&&Su(n),n.flags|=1,En(t,n,r,u),n.child)}function km(t,n,a,r,u){if(t===null){var f=a.type;return typeof f=="function"&&!_u(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Xm(t,n,f,r,u)):(t=dl(a.type,null,r,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!hf(t,u)){var g=f.memoizedProps;if(a=a.compare,a=a!==null?a:Kr,a(g,r)&&t.ref===n.ref)return na(t,n,u)}return n.flags|=1,t=Ki(f,r),t.ref=n.ref,t.return=n,n.child=t}function Xm(t,n,a,r,u){if(t!==null){var f=t.memoizedProps;if(Kr(f,r)&&t.ref===n.ref)if(un=!1,n.pendingProps=r=f,hf(t,u))(t.flags&131072)!==0&&(un=!0);else return n.lanes=t.lanes,na(t,n,u)}return rf(t,n,a,r,u)}function Wm(t,n,a,r){var u=r.children,f=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,t!==null){for(r=n.child=t.child,u=0;r!==null;)u=u|r.lanes|r.childLanes,r=r.sibling;r=u&~f}else r=0,n.child=null;return qm(t,n,f,a,r)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&gl(n,f!==null?f.cachePool:null),f!==null?jp(n,f):Pu(),Zp(n);else return r=n.lanes=536870912,qm(t,n,f!==null?f.baseLanes|a:a,a,r)}else f!==null?(gl(n,f.cachePool),jp(n,f),Pa(),n.memoizedState=null):(t!==null&&gl(n,null),Pu(),Pa());return En(t,n,u,a),n.child}function fo(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function qm(t,n,a,r,u){var f=wu();return f=f===null?null:{parent:ln._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},t!==null&&gl(n,null),Pu(),Zp(n),t!==null&&Ks(t,n,r,!0),n.childLanes=u,null}function Ll(t,n){return n=Ol({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function Ym(t,n,a){return _s(n,t.child,null,a),t=Ll(n,n.pendingProps),t.flags|=2,$n(n),n.memoizedState=null,t}function Tx(t,n,a){var r=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(Se){if(r.mode==="hidden")return t=Ll(n,r),n.lanes=536870912,fo(null,t);if(Bu(n),(t=ke)?(t=sg(t,ci),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Ra!==null?{id:Ui,overflow:Li}:null,retryLane:536870912,hydrationErrors:null},a=Dp(t),a.return=n,n.child=a,yn=n,ke=null)):t=null,t===null)throw wa(n);return n.lanes=536870912,null}return Ll(n,r)}var f=t.memoizedState;if(f!==null){var g=f.dehydrated;if(Bu(n),u)if(n.flags&256)n.flags&=-257,n=Ym(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(s(558));else if(un||Ks(t,n,a,!1),u=(a&t.childLanes)!==0,un||u){if(r=Ve,r!==null&&(g=Qo(r,a),g!==0&&g!==f.retryLane))throw f.retryLane=g,cs(t,g),Vn(r,t,g),sf;kl(),n=Ym(t,n,a)}else t=f.treeContext,ke=fi(g.nextSibling),yn=n,Se=!0,Ca=null,ci=!1,t!==null&&Np(n,t),n=Ll(n,r),n.flags|=4096;return n}return t=Ki(t.child,{mode:r.mode,children:r.children}),t.ref=n.ref,n.child=t,t.return=n,t}function Nl(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function rf(t,n,a,r,u){return hs(n),a=Iu(t,n,a,r,void 0,u),r=Hu(),t!==null&&!un?(Gu(t,n,u),na(t,n,u)):(Se&&r&&Su(n),n.flags|=1,En(t,n,a,u),n.child)}function jm(t,n,a,r,u,f){return hs(n),n.updateQueue=null,a=Qp(n,r,a,u),Kp(t),r=Hu(),t!==null&&!un?(Gu(t,n,f),na(t,n,f)):(Se&&r&&Su(n),n.flags|=1,En(t,n,a,f),n.child)}function Zm(t,n,a,r,u){if(hs(n),n.stateNode===null){var f=qs,g=a.contextType;typeof g=="object"&&g!==null&&(f=Mn(g)),f=new a(r,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=nf,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=r,f.state=n.memoizedState,f.refs={},Uu(n),g=a.contextType,f.context=typeof g=="object"&&g!==null?Mn(g):qs,f.state=n.memoizedState,g=a.getDerivedStateFromProps,typeof g=="function"&&(ef(n,a,g,r),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(g=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),g!==f.state&&nf.enqueueReplaceState(f,f.state,null),ro(n,r,f,u),so(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!0}else if(t===null){f=n.stateNode;var A=n.memoizedProps,H=xs(a,A);f.props=H;var nt=f.context,pt=a.contextType;g=qs,typeof pt=="object"&&pt!==null&&(g=Mn(pt));var _t=a.getDerivedStateFromProps;pt=typeof _t=="function"||typeof f.getSnapshotBeforeUpdate=="function",A=n.pendingProps!==A,pt||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(A||nt!==g)&&Pm(n,f,r,g),Ua=!1;var st=n.memoizedState;f.state=st,ro(n,r,f,u),so(),nt=n.memoizedState,A||st!==nt||Ua?(typeof _t=="function"&&(ef(n,a,_t,r),nt=n.memoizedState),(H=Ua||Om(n,a,H,r,st,nt,g))?(pt||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=nt),f.props=r,f.state=nt,f.context=g,r=H):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{f=n.stateNode,Lu(t,n),g=n.memoizedProps,pt=xs(a,g),f.props=pt,_t=n.pendingProps,st=f.context,nt=a.contextType,H=qs,typeof nt=="object"&&nt!==null&&(H=Mn(nt)),A=a.getDerivedStateFromProps,(nt=typeof A=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(g!==_t||st!==H)&&Pm(n,f,r,H),Ua=!1,st=n.memoizedState,f.state=st,ro(n,r,f,u),so();var ut=n.memoizedState;g!==_t||st!==ut||Ua||t!==null&&t.dependencies!==null&&pl(t.dependencies)?(typeof A=="function"&&(ef(n,a,A,r),ut=n.memoizedState),(pt=Ua||Om(n,a,pt,r,st,ut,H)||t!==null&&t.dependencies!==null&&pl(t.dependencies))?(nt||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(r,ut,H),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(r,ut,H)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||g===t.memoizedProps&&st===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||g===t.memoizedProps&&st===t.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=ut),f.props=r,f.state=ut,f.context=H,r=pt):(typeof f.componentDidUpdate!="function"||g===t.memoizedProps&&st===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||g===t.memoizedProps&&st===t.memoizedState||(n.flags|=1024),r=!1)}return f=r,Nl(t,n),r=(n.flags&128)!==0,f||r?(f=n.stateNode,a=r&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&r?(n.child=_s(n,t.child,null,u),n.child=_s(n,null,a,u)):En(t,n,a,u),n.memoizedState=f.state,t=n.child):t=na(t,n,u),t}function Km(t,n,a,r){return fs(),n.flags|=256,En(t,n,a,r),n.child}var of={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function lf(t){return{baseLanes:t,cachePool:Ip()}}function cf(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=ei),t}function Qm(t,n,a){var r=n.pendingProps,u=!1,f=(n.flags&128)!==0,g;if((g=f)||(g=t!==null&&t.memoizedState===null?!1:(en.current&2)!==0),g&&(u=!0,n.flags&=-129),g=(n.flags&32)!==0,n.flags&=-33,t===null){if(Se){if(u?Oa(n):Pa(),(t=ke)?(t=sg(t,ci),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Ra!==null?{id:Ui,overflow:Li}:null,retryLane:536870912,hydrationErrors:null},a=Dp(t),a.return=n,n.child=a,yn=n,ke=null)):t=null,t===null)throw wa(n);return Wf(t)?n.lanes=32:n.lanes=536870912,null}var A=r.children;return r=r.fallback,u?(Pa(),u=n.mode,A=Ol({mode:"hidden",children:A},u),r=us(r,u,a,null),A.return=n,r.return=n,A.sibling=r,n.child=A,r=n.child,r.memoizedState=lf(a),r.childLanes=cf(t,g,a),n.memoizedState=of,fo(null,r)):(Oa(n),uf(n,A))}var H=t.memoizedState;if(H!==null&&(A=H.dehydrated,A!==null)){if(f)n.flags&256?(Oa(n),n.flags&=-257,n=ff(t,n,a)):n.memoizedState!==null?(Pa(),n.child=t.child,n.flags|=128,n=null):(Pa(),A=r.fallback,u=n.mode,r=Ol({mode:"visible",children:r.children},u),A=us(A,u,a,null),A.flags|=2,r.return=n,A.return=n,r.sibling=A,n.child=r,_s(n,t.child,null,a),r=n.child,r.memoizedState=lf(a),r.childLanes=cf(t,g,a),n.memoizedState=of,n=fo(null,r));else if(Oa(n),Wf(A)){if(g=A.nextSibling&&A.nextSibling.dataset,g)var nt=g.dgst;g=nt,r=Error(s(419)),r.stack="",r.digest=g,$r({value:r,source:null,stack:null}),n=ff(t,n,a)}else if(un||Ks(t,n,a,!1),g=(a&t.childLanes)!==0,un||g){if(g=Ve,g!==null&&(r=Qo(g,a),r!==0&&r!==H.retryLane))throw H.retryLane=r,cs(t,r),Vn(g,t,r),sf;Xf(A)||kl(),n=ff(t,n,a)}else Xf(A)?(n.flags|=192,n.child=t.child,n=null):(t=H.treeContext,ke=fi(A.nextSibling),yn=n,Se=!0,Ca=null,ci=!1,t!==null&&Np(n,t),n=uf(n,r.children),n.flags|=4096);return n}return u?(Pa(),A=r.fallback,u=n.mode,H=t.child,nt=H.sibling,r=Ki(H,{mode:"hidden",children:r.children}),r.subtreeFlags=H.subtreeFlags&65011712,nt!==null?A=Ki(nt,A):(A=us(A,u,a,null),A.flags|=2),A.return=n,r.return=n,r.sibling=A,n.child=r,fo(null,r),r=n.child,A=t.child.memoizedState,A===null?A=lf(a):(u=A.cachePool,u!==null?(H=ln._currentValue,u=u.parent!==H?{parent:H,pool:H}:u):u=Ip(),A={baseLanes:A.baseLanes|a,cachePool:u}),r.memoizedState=A,r.childLanes=cf(t,g,a),n.memoizedState=of,fo(t.child,r)):(Oa(n),a=t.child,t=a.sibling,a=Ki(a,{mode:"visible",children:r.children}),a.return=n,a.sibling=null,t!==null&&(g=n.deletions,g===null?(n.deletions=[t],n.flags|=16):g.push(t)),n.child=a,n.memoizedState=null,a)}function uf(t,n){return n=Ol({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Ol(t,n){return t=Qn(22,t,null,n),t.lanes=0,t}function ff(t,n,a){return _s(n,t.child,null,a),t=uf(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function Jm(t,n,a){t.lanes|=n;var r=t.alternate;r!==null&&(r.lanes|=n),Tu(t.return,n,a)}function df(t,n,a,r,u,f){var g=t.memoizedState;g===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:a,tailMode:u,treeForkCount:f}:(g.isBackwards=n,g.rendering=null,g.renderingStartTime=0,g.last=r,g.tail=a,g.tailMode=u,g.treeForkCount=f)}function $m(t,n,a){var r=n.pendingProps,u=r.revealOrder,f=r.tail;r=r.children;var g=en.current,A=(g&2)!==0;if(A?(g=g&1|2,n.flags|=128):g&=1,vt(en,g),En(t,n,r,a),r=Se?Jr:0,!A&&t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Jm(t,a,n);else if(t.tag===19)Jm(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)t=a.alternate,t!==null&&Ml(t)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),df(n,!1,u,a,f,r);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&Ml(t)===null){n.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}df(n,!0,a,null,f,r);break;case"together":df(n,!1,null,null,void 0,r);break;default:n.memoizedState=null}return n.child}function na(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Fa|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(Ks(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(s(153));if(n.child!==null){for(t=n.child,a=Ki(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=Ki(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function hf(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&pl(t)))}function Ax(t,n,a){switch(n.tag){case 3:Tt(n,n.stateNode.containerInfo),Da(n,ln,t.memoizedState.cache),fs();break;case 27:case 5:Kt(n);break;case 4:Tt(n,n.stateNode.containerInfo);break;case 10:Da(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Bu(n),null;break;case 13:var r=n.memoizedState;if(r!==null)return r.dehydrated!==null?(Oa(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Qm(t,n,a):(Oa(n),t=na(t,n,a),t!==null?t.sibling:null);Oa(n);break;case 19:var u=(t.flags&128)!==0;if(r=(a&n.childLanes)!==0,r||(Ks(t,n,a,!1),r=(a&n.childLanes)!==0),u){if(r)return $m(t,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),vt(en,en.current),r)break;return null;case 22:return n.lanes=0,Wm(t,n,a,n.pendingProps);case 24:Da(n,ln,t.memoizedState.cache)}return na(t,n,a)}function t0(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)un=!0;else{if(!hf(t,a)&&(n.flags&128)===0)return un=!1,Ax(t,n,a);un=(t.flags&131072)!==0}else un=!1,Se&&(n.flags&1048576)!==0&&Lp(n,Jr,n.index);switch(n.lanes=0,n.tag){case 16:t:{var r=n.pendingProps;if(t=ms(n.elementType),n.type=t,typeof t=="function")_u(t)?(r=xs(t,r),n.tag=1,n=Zm(null,n,t,r,a)):(n.tag=0,n=rf(null,n,t,r,a));else{if(t!=null){var u=t.$$typeof;if(u===D){n.tag=11,n=Vm(null,n,t,r,a);break t}else if(u===F){n.tag=14,n=km(null,n,t,r,a);break t}}throw n=J(t)||t,Error(s(306,n,""))}}return n;case 0:return rf(t,n,n.type,n.pendingProps,a);case 1:return r=n.type,u=xs(r,n.pendingProps),Zm(t,n,r,u,a);case 3:t:{if(Tt(n,n.stateNode.containerInfo),t===null)throw Error(s(387));r=n.pendingProps;var f=n.memoizedState;u=f.element,Lu(t,n),ro(n,r,null,a);var g=n.memoizedState;if(r=g.cache,Da(n,ln,r),r!==f.cache&&Au(n,[ln],a,!0),so(),r=g.element,f.isDehydrated)if(f={element:r,isDehydrated:!1,cache:g.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=Km(t,n,r,a);break t}else if(r!==u){u=ri(Error(s(424)),n),$r(u),n=Km(t,n,r,a);break t}else for(t=n.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,ke=fi(t.firstChild),yn=n,Se=!0,Ca=null,ci=!0,a=Wp(n,null,r,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(fs(),r===u){n=na(t,n,a);break t}En(t,n,r,a)}n=n.child}return n;case 26:return Nl(t,n),t===null?(a=fg(n.type,null,n.pendingProps,null))?n.memoizedState=a:Se||(a=n.type,t=n.pendingProps,r=Kl(at.current).createElement(a),r[sn]=n,r[hn]=t,bn(r,a,t),X(r),n.stateNode=r):n.memoizedState=fg(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Kt(n),t===null&&Se&&(r=n.stateNode=lg(n.type,n.pendingProps,at.current),yn=n,ci=!0,u=ke,ka(n.type)?(qf=u,ke=fi(r.firstChild)):ke=u),En(t,n,n.pendingProps.children,a),Nl(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Se&&((u=r=ke)&&(r=nS(r,n.type,n.pendingProps,ci),r!==null?(n.stateNode=r,yn=n,ke=fi(r.firstChild),ci=!1,u=!0):u=!1),u||wa(n)),Kt(n),u=n.type,f=n.pendingProps,g=t!==null?t.memoizedProps:null,r=f.children,Gf(u,f)?r=null:g!==null&&Gf(u,g)&&(n.flags|=32),n.memoizedState!==null&&(u=Iu(t,n,_x,null,null,a),Ro._currentValue=u),Nl(t,n),En(t,n,r,a),n.child;case 6:return t===null&&Se&&((t=a=ke)&&(a=iS(a,n.pendingProps,ci),a!==null?(n.stateNode=a,yn=n,ke=null,t=!0):t=!1),t||wa(n)),null;case 13:return Qm(t,n,a);case 4:return Tt(n,n.stateNode.containerInfo),r=n.pendingProps,t===null?n.child=_s(n,null,r,a):En(t,n,r,a),n.child;case 11:return Vm(t,n,n.type,n.pendingProps,a);case 7:return En(t,n,n.pendingProps,a),n.child;case 8:return En(t,n,n.pendingProps.children,a),n.child;case 12:return En(t,n,n.pendingProps.children,a),n.child;case 10:return r=n.pendingProps,Da(n,n.type,r.value),En(t,n,r.children,a),n.child;case 9:return u=n.type._context,r=n.pendingProps.children,hs(n),u=Mn(u),r=r(u),n.flags|=1,En(t,n,r,a),n.child;case 14:return km(t,n,n.type,n.pendingProps,a);case 15:return Xm(t,n,n.type,n.pendingProps,a);case 19:return $m(t,n,a);case 31:return Tx(t,n,a);case 22:return Wm(t,n,a,n.pendingProps);case 24:return hs(n),r=Mn(ln),t===null?(u=wu(),u===null&&(u=Ve,f=Ru(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:r,cache:u},Uu(n),Da(n,ln,u)):((t.lanes&a)!==0&&(Lu(t,n),ro(n,null,null,a),so()),u=t.memoizedState,f=n.memoizedState,u.parent!==r?(u={parent:r,cache:r},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Da(n,ln,r)):(r=f.cache,Da(n,ln,r),r!==u.cache&&Au(n,[ln],a,!0))),En(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function ia(t){t.flags|=4}function pf(t,n,a,r,u){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(R0())t.flags|=8192;else throw gs=vl,Du}else t.flags&=-16777217}function e0(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!gg(n))if(R0())t.flags|=8192;else throw gs=vl,Du}function Pl(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Oe():536870912,t.lanes|=n,lr|=n)}function ho(t,n){if(!Se)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Xe(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,r=0;if(n)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,r|=u.subtreeFlags&65011712,r|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,r|=u.subtreeFlags,r|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=r,t.childLanes=a,n}function Rx(t,n,a){var r=n.pendingProps;switch(yu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Xe(n),null;case 1:return Xe(n),null;case 3:return a=n.stateNode,r=null,t!==null&&(r=t.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),$i(ln),kt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Zs(n)?ia(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Eu())),Xe(n),null;case 26:var u=n.type,f=n.memoizedState;return t===null?(ia(n),f!==null?(Xe(n),e0(n,f)):(Xe(n),pf(n,u,null,r,a))):f?f!==t.memoizedState?(ia(n),Xe(n),e0(n,f)):(Xe(n),n.flags&=-16777217):(t=t.memoizedProps,t!==r&&ia(n),Xe(n),pf(n,u,t,r,a)),null;case 27:if($t(n),a=at.current,u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==r&&ia(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return Xe(n),null}t=Rt.current,Zs(n)?Op(n):(t=lg(u,r,a),n.stateNode=t,ia(n))}return Xe(n),null;case 5:if($t(n),u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==r&&ia(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return Xe(n),null}if(f=Rt.current,Zs(n))Op(n);else{var g=Kl(at.current);switch(f){case 1:f=g.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=g.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=g.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=g.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=g.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof r.is=="string"?g.createElement("select",{is:r.is}):g.createElement("select"),r.multiple?f.multiple=!0:r.size&&(f.size=r.size);break;default:f=typeof r.is=="string"?g.createElement(u,{is:r.is}):g.createElement(u)}}f[sn]=n,f[hn]=r;t:for(g=n.child;g!==null;){if(g.tag===5||g.tag===6)f.appendChild(g.stateNode);else if(g.tag!==4&&g.tag!==27&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===n)break t;for(;g.sibling===null;){if(g.return===null||g.return===n)break t;g=g.return}g.sibling.return=g.return,g=g.sibling}n.stateNode=f;t:switch(bn(f,u,r),u){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break t;case"img":r=!0;break t;default:r=!1}r&&ia(n)}}return Xe(n),pf(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==r&&ia(n);else{if(typeof r!="string"&&n.stateNode===null)throw Error(s(166));if(t=at.current,Zs(n)){if(t=n.stateNode,a=n.memoizedProps,r=null,u=yn,u!==null)switch(u.tag){case 27:case 5:r=u.memoizedProps}t[sn]=n,t=!!(t.nodeValue===a||r!==null&&r.suppressHydrationWarning===!0||Q0(t.nodeValue,a)),t||wa(n,!0)}else t=Kl(t).createTextNode(r),t[sn]=n,n.stateNode=t}return Xe(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(r=Zs(n),a!==null){if(t===null){if(!r)throw Error(s(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(557));t[sn]=n}else fs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Xe(n),t=!1}else a=Eu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?($n(n),n):($n(n),null);if((n.flags&128)!==0)throw Error(s(558))}return Xe(n),null;case 13:if(r=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=Zs(n),r!==null&&r.dehydrated!==null){if(t===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[sn]=n}else fs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Xe(n),u=!1}else u=Eu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?($n(n),n):($n(n),null)}return $n(n),(n.flags&128)!==0?(n.lanes=a,n):(a=r!==null,t=t!==null&&t.memoizedState!==null,a&&(r=n.child,u=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(u=r.alternate.memoizedState.cachePool.pool),f=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(f=r.memoizedState.cachePool.pool),f!==u&&(r.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),Pl(n,n.updateQueue),Xe(n),null);case 4:return kt(),t===null&&zf(n.stateNode.containerInfo),Xe(n),null;case 10:return $i(n.type),Xe(n),null;case 19:if(j(en),r=n.memoizedState,r===null)return Xe(n),null;if(u=(n.flags&128)!==0,f=r.rendering,f===null)if(u)ho(r,!1);else{if(Je!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=Ml(t),f!==null){for(n.flags|=128,ho(r,!1),t=f.updateQueue,n.updateQueue=t,Pl(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)wp(a,t),a=a.sibling;return vt(en,en.current&1|2),Se&&Qi(n,r.treeForkCount),n.child}t=t.sibling}r.tail!==null&&E()>Hl&&(n.flags|=128,u=!0,ho(r,!1),n.lanes=4194304)}else{if(!u)if(t=Ml(f),t!==null){if(n.flags|=128,u=!0,t=t.updateQueue,n.updateQueue=t,Pl(n,t),ho(r,!0),r.tail===null&&r.tailMode==="hidden"&&!f.alternate&&!Se)return Xe(n),null}else 2*E()-r.renderingStartTime>Hl&&a!==536870912&&(n.flags|=128,u=!0,ho(r,!1),n.lanes=4194304);r.isBackwards?(f.sibling=n.child,n.child=f):(t=r.last,t!==null?t.sibling=f:n.child=f,r.last=f)}return r.tail!==null?(t=r.tail,r.rendering=t,r.tail=t.sibling,r.renderingStartTime=E(),t.sibling=null,a=en.current,vt(en,u?a&1|2:a&1),Se&&Qi(n,r.treeForkCount),t):(Xe(n),null);case 22:case 23:return $n(n),zu(),r=n.memoizedState!==null,t!==null?t.memoizedState!==null!==r&&(n.flags|=8192):r&&(n.flags|=8192),r?(a&536870912)!==0&&(n.flags&128)===0&&(Xe(n),n.subtreeFlags&6&&(n.flags|=8192)):Xe(n),a=n.updateQueue,a!==null&&Pl(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),r=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==a&&(n.flags|=2048),t!==null&&j(ps),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),$i(ln),Xe(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function Cx(t,n){switch(yu(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return $i(ln),kt(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return $t(n),null;case 31:if(n.memoizedState!==null){if($n(n),n.alternate===null)throw Error(s(340));fs()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if($n(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(s(340));fs()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return j(en),null;case 4:return kt(),null;case 10:return $i(n.type),null;case 22:case 23:return $n(n),zu(),t!==null&&j(ps),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return $i(ln),null;case 25:return null;default:return null}}function n0(t,n){switch(yu(n),n.tag){case 3:$i(ln),kt();break;case 26:case 27:case 5:$t(n);break;case 4:kt();break;case 31:n.memoizedState!==null&&$n(n);break;case 13:$n(n);break;case 19:j(en);break;case 10:$i(n.type);break;case 22:case 23:$n(n),zu(),t!==null&&j(ps);break;case 24:$i(ln)}}function po(t,n){try{var a=n.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var u=r.next;a=u;do{if((a.tag&t)===t){r=void 0;var f=a.create,g=a.inst;r=f(),g.destroy=r}a=a.next}while(a!==u)}}catch(A){ze(n,n.return,A)}}function za(t,n,a){try{var r=n.updateQueue,u=r!==null?r.lastEffect:null;if(u!==null){var f=u.next;r=f;do{if((r.tag&t)===t){var g=r.inst,A=g.destroy;if(A!==void 0){g.destroy=void 0,u=n;var H=a,nt=A;try{nt()}catch(pt){ze(u,H,pt)}}}r=r.next}while(r!==f)}}catch(pt){ze(n,n.return,pt)}}function i0(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{Yp(n,a)}catch(r){ze(t,t.return,r)}}}function a0(t,n,a){a.props=xs(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(r){ze(t,n,r)}}function mo(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var r=t.stateNode;break;case 30:r=t.stateNode;break;default:r=t.stateNode}typeof a=="function"?t.refCleanup=a(r):a.current=r}}catch(u){ze(t,n,u)}}function Ni(t,n){var a=t.ref,r=t.refCleanup;if(a!==null)if(typeof r=="function")try{r()}catch(u){ze(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){ze(t,n,u)}else a.current=null}function s0(t){var n=t.type,a=t.memoizedProps,r=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&r.focus();break t;case"img":a.src?r.src=a.src:a.srcSet&&(r.srcset=a.srcSet)}}catch(u){ze(t,t.return,u)}}function mf(t,n,a){try{var r=t.stateNode;Kx(r,t.type,a,n),r[hn]=n}catch(u){ze(t,t.return,u)}}function r0(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&ka(t.type)||t.tag===4}function gf(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||r0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&ka(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function _f(t,n,a){var r=t.tag;if(r===5||r===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=ji));else if(r!==4&&(r===27&&ka(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(_f(t,n,a),t=t.sibling;t!==null;)_f(t,n,a),t=t.sibling}function zl(t,n,a){var r=t.tag;if(r===5||r===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(r!==4&&(r===27&&ka(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(zl(t,n,a),t=t.sibling;t!==null;)zl(t,n,a),t=t.sibling}function o0(t){var n=t.stateNode,a=t.memoizedProps;try{for(var r=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);bn(n,r,a),n[sn]=t,n[hn]=a}catch(f){ze(t,t.return,f)}}var aa=!1,fn=!1,vf=!1,l0=typeof WeakSet=="function"?WeakSet:Set,xn=null;function wx(t,n){if(t=t.containerInfo,If=ic,t=Sp(t),uu(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var r=a.getSelection&&a.getSelection();if(r&&r.rangeCount!==0){a=r.anchorNode;var u=r.anchorOffset,f=r.focusNode;r=r.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var g=0,A=-1,H=-1,nt=0,pt=0,_t=t,st=null;e:for(;;){for(var ut;_t!==a||u!==0&&_t.nodeType!==3||(A=g+u),_t!==f||r!==0&&_t.nodeType!==3||(H=g+r),_t.nodeType===3&&(g+=_t.nodeValue.length),(ut=_t.firstChild)!==null;)st=_t,_t=ut;for(;;){if(_t===t)break e;if(st===a&&++nt===u&&(A=g),st===f&&++pt===r&&(H=g),(ut=_t.nextSibling)!==null)break;_t=st,st=_t.parentNode}_t=ut}a=A===-1||H===-1?null:{start:A,end:H}}else a=null}a=a||{start:0,end:0}}else a=null;for(Hf={focusedElem:t,selectionRange:a},ic=!1,xn=n;xn!==null;)if(n=xn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,xn=t;else for(;xn!==null;){switch(n=xn,f=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)u=t[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,r=a.stateNode;try{var Gt=xs(a.type,u);t=r.getSnapshotBeforeUpdate(Gt,f),r.__reactInternalSnapshotBeforeUpdate=t}catch(Jt){ze(a,a.return,Jt)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)kf(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":kf(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=n.sibling,t!==null){t.return=n.return,xn=t;break}xn=n.return}}function c0(t,n,a){var r=a.flags;switch(a.tag){case 0:case 11:case 15:ra(t,a),r&4&&po(5,a);break;case 1:if(ra(t,a),r&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(g){ze(a,a.return,g)}else{var u=xs(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(g){ze(a,a.return,g)}}r&64&&i0(a),r&512&&mo(a,a.return);break;case 3:if(ra(t,a),r&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Yp(t,n)}catch(g){ze(a,a.return,g)}}break;case 27:n===null&&r&4&&o0(a);case 26:case 5:ra(t,a),n===null&&r&4&&s0(a),r&512&&mo(a,a.return);break;case 12:ra(t,a);break;case 31:ra(t,a),r&4&&d0(t,a);break;case 13:ra(t,a),r&4&&h0(t,a),r&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=Fx.bind(null,a),aS(t,a))));break;case 22:if(r=a.memoizedState!==null||aa,!r){n=n!==null&&n.memoizedState!==null||fn,u=aa;var f=fn;aa=r,(fn=n)&&!f?oa(t,a,(a.subtreeFlags&8772)!==0):ra(t,a),aa=u,fn=f}break;case 30:break;default:ra(t,a)}}function u0(t){var n=t.alternate;n!==null&&(t.alternate=null,u0(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&Vr(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var je=null,Fn=!1;function sa(t,n,a){for(a=a.child;a!==null;)f0(t,n,a),a=a.sibling}function f0(t,n,a){if(Mt&&typeof Mt.onCommitFiberUnmount=="function")try{Mt.onCommitFiberUnmount(bt,a)}catch{}switch(a.tag){case 26:fn||Ni(a,n),sa(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:fn||Ni(a,n);var r=je,u=Fn;ka(a.type)&&(je=a.stateNode,Fn=!1),sa(t,n,a),bo(a.stateNode),je=r,Fn=u;break;case 5:fn||Ni(a,n);case 6:if(r=je,u=Fn,je=null,sa(t,n,a),je=r,Fn=u,je!==null)if(Fn)try{(je.nodeType===9?je.body:je.nodeName==="HTML"?je.ownerDocument.body:je).removeChild(a.stateNode)}catch(f){ze(a,n,f)}else try{je.removeChild(a.stateNode)}catch(f){ze(a,n,f)}break;case 18:je!==null&&(Fn?(t=je,ig(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),gr(t)):ig(je,a.stateNode));break;case 4:r=je,u=Fn,je=a.stateNode.containerInfo,Fn=!0,sa(t,n,a),je=r,Fn=u;break;case 0:case 11:case 14:case 15:za(2,a,n),fn||za(4,a,n),sa(t,n,a);break;case 1:fn||(Ni(a,n),r=a.stateNode,typeof r.componentWillUnmount=="function"&&a0(a,n,r)),sa(t,n,a);break;case 21:sa(t,n,a);break;case 22:fn=(r=fn)||a.memoizedState!==null,sa(t,n,a),fn=r;break;default:sa(t,n,a)}}function d0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{gr(t)}catch(a){ze(n,n.return,a)}}}function h0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{gr(t)}catch(a){ze(n,n.return,a)}}function Dx(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new l0),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new l0),n;default:throw Error(s(435,t.tag))}}function Bl(t,n){var a=Dx(t);n.forEach(function(r){if(!a.has(r)){a.add(r);var u=Ix.bind(null,t,r);r.then(u,u)}})}function In(t,n){var a=n.deletions;if(a!==null)for(var r=0;r<a.length;r++){var u=a[r],f=t,g=n,A=g;t:for(;A!==null;){switch(A.tag){case 27:if(ka(A.type)){je=A.stateNode,Fn=!1;break t}break;case 5:je=A.stateNode,Fn=!1;break t;case 3:case 4:je=A.stateNode.containerInfo,Fn=!0;break t}A=A.return}if(je===null)throw Error(s(160));f0(f,g,u),je=null,Fn=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)p0(n,t),n=n.sibling}var Mi=null;function p0(t,n){var a=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:In(n,t),Hn(t),r&4&&(za(3,t,t.return),po(3,t),za(5,t,t.return));break;case 1:In(n,t),Hn(t),r&512&&(fn||a===null||Ni(a,a.return)),r&64&&aa&&(t=t.updateQueue,t!==null&&(r=t.callbacks,r!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?r:a.concat(r))));break;case 26:var u=Mi;if(In(n,t),Hn(t),r&512&&(fn||a===null||Ni(a,a.return)),r&4){var f=a!==null?a.memoizedState:null;if(r=t.memoizedState,a===null)if(r===null)if(t.stateNode===null){t:{r=t.type,a=t.memoizedProps,u=u.ownerDocument||u;e:switch(r){case"title":f=u.getElementsByTagName("title")[0],(!f||f[as]||f[sn]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(r),u.head.insertBefore(f,u.querySelector("head > title"))),bn(f,r,a),f[sn]=t,X(f),r=f;break t;case"link":var g=pg("link","href",u).get(r+(a.href||""));if(g){for(var A=0;A<g.length;A++)if(f=g[A],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){g.splice(A,1);break e}}f=u.createElement(r),bn(f,r,a),u.head.appendChild(f);break;case"meta":if(g=pg("meta","content",u).get(r+(a.content||""))){for(A=0;A<g.length;A++)if(f=g[A],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){g.splice(A,1);break e}}f=u.createElement(r),bn(f,r,a),u.head.appendChild(f);break;default:throw Error(s(468,r))}f[sn]=t,X(f),r=f}t.stateNode=r}else mg(u,t.type,t.stateNode);else t.stateNode=hg(u,r,t.memoizedProps);else f!==r?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,r===null?mg(u,t.type,t.stateNode):hg(u,r,t.memoizedProps)):r===null&&t.stateNode!==null&&mf(t,t.memoizedProps,a.memoizedProps)}break;case 27:In(n,t),Hn(t),r&512&&(fn||a===null||Ni(a,a.return)),a!==null&&r&4&&mf(t,t.memoizedProps,a.memoizedProps);break;case 5:if(In(n,t),Hn(t),r&512&&(fn||a===null||Ni(a,a.return)),t.flags&32){u=t.stateNode;try{Nn(u,"")}catch(Gt){ze(t,t.return,Gt)}}r&4&&t.stateNode!=null&&(u=t.memoizedProps,mf(t,u,a!==null?a.memoizedProps:u)),r&1024&&(vf=!0);break;case 6:if(In(n,t),Hn(t),r&4){if(t.stateNode===null)throw Error(s(162));r=t.memoizedProps,a=t.stateNode;try{a.nodeValue=r}catch(Gt){ze(t,t.return,Gt)}}break;case 3:if($l=null,u=Mi,Mi=Ql(n.containerInfo),In(n,t),Mi=u,Hn(t),r&4&&a!==null&&a.memoizedState.isDehydrated)try{gr(n.containerInfo)}catch(Gt){ze(t,t.return,Gt)}vf&&(vf=!1,m0(t));break;case 4:r=Mi,Mi=Ql(t.stateNode.containerInfo),In(n,t),Hn(t),Mi=r;break;case 12:In(n,t),Hn(t);break;case 31:In(n,t),Hn(t),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,Bl(t,r)));break;case 13:In(n,t),Hn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Il=E()),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,Bl(t,r)));break;case 22:u=t.memoizedState!==null;var H=a!==null&&a.memoizedState!==null,nt=aa,pt=fn;if(aa=nt||u,fn=pt||H,In(n,t),fn=pt,aa=nt,Hn(t),r&8192)t:for(n=t.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||H||aa||fn||Ss(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){H=a=n;try{if(f=H.stateNode,u)g=f.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none";else{A=H.stateNode;var _t=H.memoizedProps.style,st=_t!=null&&_t.hasOwnProperty("display")?_t.display:null;A.style.display=st==null||typeof st=="boolean"?"":(""+st).trim()}}catch(Gt){ze(H,H.return,Gt)}}}else if(n.tag===6){if(a===null){H=n;try{H.stateNode.nodeValue=u?"":H.memoizedProps}catch(Gt){ze(H,H.return,Gt)}}}else if(n.tag===18){if(a===null){H=n;try{var ut=H.stateNode;u?ag(ut,!0):ag(H.stateNode,!1)}catch(Gt){ze(H,H.return,Gt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break t;for(;n.sibling===null;){if(n.return===null||n.return===t)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}r&4&&(r=t.updateQueue,r!==null&&(a=r.retryQueue,a!==null&&(r.retryQueue=null,Bl(t,a))));break;case 19:In(n,t),Hn(t),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,Bl(t,r)));break;case 30:break;case 21:break;default:In(n,t),Hn(t)}}function Hn(t){var n=t.flags;if(n&2){try{for(var a,r=t.return;r!==null;){if(r0(r)){a=r;break}r=r.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,f=gf(t);zl(t,f,u);break;case 5:var g=a.stateNode;a.flags&32&&(Nn(g,""),a.flags&=-33);var A=gf(t);zl(t,A,g);break;case 3:case 4:var H=a.stateNode.containerInfo,nt=gf(t);_f(t,nt,H);break;default:throw Error(s(161))}}catch(pt){ze(t,t.return,pt)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function m0(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;m0(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function ra(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)c0(t,n.alternate,n),n=n.sibling}function Ss(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:za(4,n,n.return),Ss(n);break;case 1:Ni(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&a0(n,n.return,a),Ss(n);break;case 27:bo(n.stateNode);case 26:case 5:Ni(n,n.return),Ss(n);break;case 22:n.memoizedState===null&&Ss(n);break;case 30:Ss(n);break;default:Ss(n)}t=t.sibling}}function oa(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var r=n.alternate,u=t,f=n,g=f.flags;switch(f.tag){case 0:case 11:case 15:oa(u,f,a),po(4,f);break;case 1:if(oa(u,f,a),r=f,u=r.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(nt){ze(r,r.return,nt)}if(r=f,u=r.updateQueue,u!==null){var A=r.stateNode;try{var H=u.shared.hiddenCallbacks;if(H!==null)for(u.shared.hiddenCallbacks=null,u=0;u<H.length;u++)qp(H[u],A)}catch(nt){ze(r,r.return,nt)}}a&&g&64&&i0(f),mo(f,f.return);break;case 27:o0(f);case 26:case 5:oa(u,f,a),a&&r===null&&g&4&&s0(f),mo(f,f.return);break;case 12:oa(u,f,a);break;case 31:oa(u,f,a),a&&g&4&&d0(u,f);break;case 13:oa(u,f,a),a&&g&4&&h0(u,f);break;case 22:f.memoizedState===null&&oa(u,f,a),mo(f,f.return);break;case 30:break;default:oa(u,f,a)}n=n.sibling}}function xf(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&to(a))}function Sf(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&to(t))}function Ei(t,n,a,r){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)g0(t,n,a,r),n=n.sibling}function g0(t,n,a,r){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Ei(t,n,a,r),u&2048&&po(9,n);break;case 1:Ei(t,n,a,r);break;case 3:Ei(t,n,a,r),u&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&to(t)));break;case 12:if(u&2048){Ei(t,n,a,r),t=n.stateNode;try{var f=n.memoizedProps,g=f.id,A=f.onPostCommit;typeof A=="function"&&A(g,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(H){ze(n,n.return,H)}}else Ei(t,n,a,r);break;case 31:Ei(t,n,a,r);break;case 13:Ei(t,n,a,r);break;case 23:break;case 22:f=n.stateNode,g=n.alternate,n.memoizedState!==null?f._visibility&2?Ei(t,n,a,r):go(t,n):f._visibility&2?Ei(t,n,a,r):(f._visibility|=2,sr(t,n,a,r,(n.subtreeFlags&10256)!==0||!1)),u&2048&&xf(g,n);break;case 24:Ei(t,n,a,r),u&2048&&Sf(n.alternate,n);break;default:Ei(t,n,a,r)}}function sr(t,n,a,r,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=t,g=n,A=a,H=r,nt=g.flags;switch(g.tag){case 0:case 11:case 15:sr(f,g,A,H,u),po(8,g);break;case 23:break;case 22:var pt=g.stateNode;g.memoizedState!==null?pt._visibility&2?sr(f,g,A,H,u):go(f,g):(pt._visibility|=2,sr(f,g,A,H,u)),u&&nt&2048&&xf(g.alternate,g);break;case 24:sr(f,g,A,H,u),u&&nt&2048&&Sf(g.alternate,g);break;default:sr(f,g,A,H,u)}n=n.sibling}}function go(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,r=n,u=r.flags;switch(r.tag){case 22:go(a,r),u&2048&&xf(r.alternate,r);break;case 24:go(a,r),u&2048&&Sf(r.alternate,r);break;default:go(a,r)}n=n.sibling}}var _o=8192;function rr(t,n,a){if(t.subtreeFlags&_o)for(t=t.child;t!==null;)_0(t,n,a),t=t.sibling}function _0(t,n,a){switch(t.tag){case 26:rr(t,n,a),t.flags&_o&&t.memoizedState!==null&&gS(a,Mi,t.memoizedState,t.memoizedProps);break;case 5:rr(t,n,a);break;case 3:case 4:var r=Mi;Mi=Ql(t.stateNode.containerInfo),rr(t,n,a),Mi=r;break;case 22:t.memoizedState===null&&(r=t.alternate,r!==null&&r.memoizedState!==null?(r=_o,_o=16777216,rr(t,n,a),_o=r):rr(t,n,a));break;default:rr(t,n,a)}}function v0(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function vo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];xn=r,S0(r,t)}v0(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)x0(t),t=t.sibling}function x0(t){switch(t.tag){case 0:case 11:case 15:vo(t),t.flags&2048&&za(9,t,t.return);break;case 3:vo(t);break;case 12:vo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Fl(t)):vo(t);break;default:vo(t)}}function Fl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];xn=r,S0(r,t)}v0(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:za(8,n,n.return),Fl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Fl(n));break;default:Fl(n)}t=t.sibling}}function S0(t,n){for(;xn!==null;){var a=xn;switch(a.tag){case 0:case 11:case 15:za(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var r=a.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:to(a.memoizedState.cache)}if(r=a.child,r!==null)r.return=a,xn=r;else t:for(a=t;xn!==null;){r=xn;var u=r.sibling,f=r.return;if(u0(r),r===a){xn=null;break t}if(u!==null){u.return=f,xn=u;break t}xn=f}}}var Ux={getCacheForType:function(t){var n=Mn(ln),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return Mn(ln).controller.signal}},Lx=typeof WeakMap=="function"?WeakMap:Map,Ue=0,Ve=null,me=null,ve=0,Pe=0,ti=null,Ba=!1,or=!1,yf=!1,la=0,Je=0,Fa=0,ys=0,Mf=0,ei=0,lr=0,xo=null,Gn=null,Ef=!1,Il=0,y0=0,Hl=1/0,Gl=null,Ia=null,mn=0,Ha=null,cr=null,ca=0,bf=0,Tf=null,M0=null,So=0,Af=null;function ni(){return(Ue&2)!==0&&ve!==0?ve&-ve:N.T!==null?Lf():Di()}function E0(){if(ei===0)if((ve&536870912)===0||Se){var t=At;At<<=1,(At&3932160)===0&&(At=262144),ei=t}else ei=536870912;return t=Jn.current,t!==null&&(t.flags|=32),ei}function Vn(t,n,a){(t===Ve&&(Pe===2||Pe===9)||t.cancelPendingCommit!==null)&&(ur(t,0),Ga(t,ve,ei,!1)),Dn(t,a),((Ue&2)===0||t!==Ve)&&(t===Ve&&((Ue&2)===0&&(ys|=a),Je===4&&Ga(t,ve,ei,!1)),Oi(t))}function b0(t,n,a){if((Ue&6)!==0)throw Error(s(327));var r=!a&&(n&127)===0&&(n&t.expiredLanes)===0||It(t,n),u=r?Px(t,n):Cf(t,n,!0),f=r;do{if(u===0){or&&!r&&Ga(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!Nx(a)){u=Cf(t,n,!1),f=!1;continue}if(u===2){if(f=n,t.errorRecoveryDisabledLanes&f)var g=0;else g=t.pendingLanes&-536870913,g=g!==0?g:g&536870912?536870912:0;if(g!==0){n=g;t:{var A=t;u=xo;var H=A.current.memoizedState.isDehydrated;if(H&&(ur(A,g).flags|=256),g=Cf(A,g,!1),g!==2){if(yf&&!H){A.errorRecoveryDisabledLanes|=f,ys|=f,u=4;break t}f=Gn,Gn=u,f!==null&&(Gn===null?Gn=f:Gn.push.apply(Gn,f))}u=g}if(f=!1,u!==2)continue}}if(u===1){ur(t,0),Ga(t,n,0,!0);break}t:{switch(r=t,f=u,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:Ga(r,n,ei,!Ba);break t;case 2:Gn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=Il+300-E(),10<u)){if(Ga(r,n,ei,!Ba),ft(r,0,!0)!==0)break t;ca=n,r.timeoutHandle=eg(T0.bind(null,r,a,Gn,Gl,Ef,n,ei,ys,lr,Ba,f,"Throttled",-0,0),u);break t}T0(r,a,Gn,Gl,Ef,n,ei,ys,lr,Ba,f,null,-0,0)}}break}while(!0);Oi(t)}function T0(t,n,a,r,u,f,g,A,H,nt,pt,_t,st,ut){if(t.timeoutHandle=-1,_t=n.subtreeFlags,_t&8192||(_t&16785408)===16785408){_t={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ji},_0(n,f,_t);var Gt=(f&62914560)===f?Il-E():(f&4194048)===f?y0-E():0;if(Gt=_S(_t,Gt),Gt!==null){ca=f,t.cancelPendingCommit=Gt(N0.bind(null,t,n,f,a,r,u,g,A,H,pt,_t,null,st,ut)),Ga(t,f,g,!nt);return}}N0(t,n,f,a,r,u,g,A,H)}function Nx(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var r=0;r<a.length;r++){var u=a[r],f=u.getSnapshot;u=u.value;try{if(!Kn(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ga(t,n,a,r){n&=~Mf,n&=~ys,t.suspendedLanes|=n,t.pingedLanes&=~n,r&&(t.warmLanes|=n),r=t.expirationTimes;for(var u=n;0<u;){var f=31-Nt(u),g=1<<f;r[f]=-1,u&=~g}a!==0&&Gr(t,a,n)}function Vl(){return(Ue&6)===0?(yo(0),!1):!0}function Rf(){if(me!==null){if(Pe===0)var t=me.return;else t=me,Ji=ds=null,Vu(t),tr=null,no=0,t=me;for(;t!==null;)n0(t.alternate,t),t=t.return;me=null}}function ur(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,$x(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),ca=0,Rf(),Ve=t,me=a=Ki(t.current,null),ve=n,Pe=0,ti=null,Ba=!1,or=It(t,n),yf=!1,lr=ei=Mf=ys=Fa=Je=0,Gn=xo=null,Ef=!1,(n&8)!==0&&(n|=n&32);var r=t.entangledLanes;if(r!==0)for(t=t.entanglements,r&=n;0<r;){var u=31-Nt(r),f=1<<u;n|=t[u],r&=~f}return la=n,cl(),a}function A0(t,n){le=null,N.H=uo,n===$s||n===_l?(n=Vp(),Pe=3):n===Du?(n=Vp(),Pe=4):Pe=n===sf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ti=n,me===null&&(Je=1,Ul(t,ri(n,t.current)))}function R0(){var t=Jn.current;return t===null?!0:(ve&4194048)===ve?ui===null:(ve&62914560)===ve||(ve&536870912)!==0?t===ui:!1}function C0(){var t=N.H;return N.H=uo,t===null?uo:t}function w0(){var t=N.A;return N.A=Ux,t}function kl(){Je=4,Ba||(ve&4194048)!==ve&&Jn.current!==null||(or=!0),(Fa&134217727)===0&&(ys&134217727)===0||Ve===null||Ga(Ve,ve,ei,!1)}function Cf(t,n,a){var r=Ue;Ue|=2;var u=C0(),f=w0();(Ve!==t||ve!==n)&&(Gl=null,ur(t,n)),n=!1;var g=Je;t:do try{if(Pe!==0&&me!==null){var A=me,H=ti;switch(Pe){case 8:Rf(),g=6;break t;case 3:case 2:case 9:case 6:Jn.current===null&&(n=!0);var nt=Pe;if(Pe=0,ti=null,fr(t,A,H,nt),a&&or){g=0;break t}break;default:nt=Pe,Pe=0,ti=null,fr(t,A,H,nt)}}Ox(),g=Je;break}catch(pt){A0(t,pt)}while(!0);return n&&t.shellSuspendCounter++,Ji=ds=null,Ue=r,N.H=u,N.A=f,me===null&&(Ve=null,ve=0,cl()),g}function Ox(){for(;me!==null;)D0(me)}function Px(t,n){var a=Ue;Ue|=2;var r=C0(),u=w0();Ve!==t||ve!==n?(Gl=null,Hl=E()+500,ur(t,n)):or=It(t,n);t:do try{if(Pe!==0&&me!==null){n=me;var f=ti;e:switch(Pe){case 1:Pe=0,ti=null,fr(t,n,f,1);break;case 2:case 9:if(Hp(f)){Pe=0,ti=null,U0(n);break}n=function(){Pe!==2&&Pe!==9||Ve!==t||(Pe=7),Oi(t)},f.then(n,n);break t;case 3:Pe=7;break t;case 4:Pe=5;break t;case 7:Hp(f)?(Pe=0,ti=null,U0(n)):(Pe=0,ti=null,fr(t,n,f,7));break;case 5:var g=null;switch(me.tag){case 26:g=me.memoizedState;case 5:case 27:var A=me;if(g?gg(g):A.stateNode.complete){Pe=0,ti=null;var H=A.sibling;if(H!==null)me=H;else{var nt=A.return;nt!==null?(me=nt,Xl(nt)):me=null}break e}}Pe=0,ti=null,fr(t,n,f,5);break;case 6:Pe=0,ti=null,fr(t,n,f,6);break;case 8:Rf(),Je=6;break t;default:throw Error(s(462))}}zx();break}catch(pt){A0(t,pt)}while(!0);return Ji=ds=null,N.H=r,N.A=u,Ue=a,me!==null?0:(Ve=null,ve=0,cl(),Je)}function zx(){for(;me!==null&&!qt();)D0(me)}function D0(t){var n=t0(t.alternate,t,la);t.memoizedProps=t.pendingProps,n===null?Xl(t):me=n}function U0(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=jm(a,n,n.pendingProps,n.type,void 0,ve);break;case 11:n=jm(a,n,n.pendingProps,n.type.render,n.ref,ve);break;case 5:Vu(n);default:n0(a,n),n=me=wp(n,la),n=t0(a,n,la)}t.memoizedProps=t.pendingProps,n===null?Xl(t):me=n}function fr(t,n,a,r){Ji=ds=null,Vu(n),tr=null,no=0;var u=n.return;try{if(bx(t,u,n,a,ve)){Je=1,Ul(t,ri(a,t.current)),me=null;return}}catch(f){if(u!==null)throw me=u,f;Je=1,Ul(t,ri(a,t.current)),me=null;return}n.flags&32768?(Se||r===1?t=!0:or||(ve&536870912)!==0?t=!1:(Ba=t=!0,(r===2||r===9||r===3||r===6)&&(r=Jn.current,r!==null&&r.tag===13&&(r.flags|=16384))),L0(n,t)):Xl(n)}function Xl(t){var n=t;do{if((n.flags&32768)!==0){L0(n,Ba);return}t=n.return;var a=Rx(n.alternate,n,la);if(a!==null){me=a;return}if(n=n.sibling,n!==null){me=n;return}me=n=t}while(n!==null);Je===0&&(Je=5)}function L0(t,n){do{var a=Cx(t.alternate,t);if(a!==null){a.flags&=32767,me=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){me=t;return}me=t=a}while(t!==null);Je=6,me=null}function N0(t,n,a,r,u,f,g,A,H){t.cancelPendingCommit=null;do Wl();while(mn!==0);if((Ue&6)!==0)throw Error(s(327));if(n!==null){if(n===t.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=mu,_i(t,a,f,g,A,H),t===Ve&&(me=Ve=null,ve=0),cr=n,Ha=t,ca=a,bf=f,Tf=u,M0=r,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,Hx(dt,function(){return F0(),null})):(t.callbackNode=null,t.callbackPriority=0),r=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||r){r=N.T,N.T=null,u=z.p,z.p=2,g=Ue,Ue|=4;try{wx(t,n,a)}finally{Ue=g,z.p=u,N.T=r}}mn=1,O0(),P0(),z0()}}function O0(){if(mn===1){mn=0;var t=Ha,n=cr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=N.T,N.T=null;var r=z.p;z.p=2;var u=Ue;Ue|=4;try{p0(n,t);var f=Hf,g=Sp(t.containerInfo),A=f.focusedElem,H=f.selectionRange;if(g!==A&&A&&A.ownerDocument&&xp(A.ownerDocument.documentElement,A)){if(H!==null&&uu(A)){var nt=H.start,pt=H.end;if(pt===void 0&&(pt=nt),"selectionStart"in A)A.selectionStart=nt,A.selectionEnd=Math.min(pt,A.value.length);else{var _t=A.ownerDocument||document,st=_t&&_t.defaultView||window;if(st.getSelection){var ut=st.getSelection(),Gt=A.textContent.length,Jt=Math.min(H.start,Gt),Ge=H.end===void 0?Jt:Math.min(H.end,Gt);!ut.extend&&Jt>Ge&&(g=Ge,Ge=Jt,Jt=g);var Z=vp(A,Jt),k=vp(A,Ge);if(Z&&k&&(ut.rangeCount!==1||ut.anchorNode!==Z.node||ut.anchorOffset!==Z.offset||ut.focusNode!==k.node||ut.focusOffset!==k.offset)){var et=_t.createRange();et.setStart(Z.node,Z.offset),ut.removeAllRanges(),Jt>Ge?(ut.addRange(et),ut.extend(k.node,k.offset)):(et.setEnd(k.node,k.offset),ut.addRange(et))}}}}for(_t=[],ut=A;ut=ut.parentNode;)ut.nodeType===1&&_t.push({element:ut,left:ut.scrollLeft,top:ut.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<_t.length;A++){var gt=_t[A];gt.element.scrollLeft=gt.left,gt.element.scrollTop=gt.top}}ic=!!If,Hf=If=null}finally{Ue=u,z.p=r,N.T=a}}t.current=n,mn=2}}function P0(){if(mn===2){mn=0;var t=Ha,n=cr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=N.T,N.T=null;var r=z.p;z.p=2;var u=Ue;Ue|=4;try{c0(t,n.alternate,n)}finally{Ue=u,z.p=r,N.T=a}}mn=3}}function z0(){if(mn===4||mn===3){mn=0,O();var t=Ha,n=cr,a=ca,r=M0;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?mn=5:(mn=0,cr=Ha=null,B0(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(Ia=null),Bs(a),n=n.stateNode,Mt&&typeof Mt.onCommitFiberRoot=="function")try{Mt.onCommitFiberRoot(bt,n,void 0,(n.current.flags&128)===128)}catch{}if(r!==null){n=N.T,u=z.p,z.p=2,N.T=null;try{for(var f=t.onRecoverableError,g=0;g<r.length;g++){var A=r[g];f(A.value,{componentStack:A.stack})}}finally{N.T=n,z.p=u}}(ca&3)!==0&&Wl(),Oi(t),u=t.pendingLanes,(a&261930)!==0&&(u&42)!==0?t===Af?So++:(So=0,Af=t):So=0,yo(0)}}function B0(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,to(n)))}function Wl(){return O0(),P0(),z0(),F0()}function F0(){if(mn!==5)return!1;var t=Ha,n=bf;bf=0;var a=Bs(ca),r=N.T,u=z.p;try{z.p=32>a?32:a,N.T=null,a=Tf,Tf=null;var f=Ha,g=ca;if(mn=0,cr=Ha=null,ca=0,(Ue&6)!==0)throw Error(s(331));var A=Ue;if(Ue|=4,x0(f.current),g0(f,f.current,g,a),Ue=A,yo(0,!1),Mt&&typeof Mt.onPostCommitFiberRoot=="function")try{Mt.onPostCommitFiberRoot(bt,f)}catch{}return!0}finally{z.p=u,N.T=r,B0(t,n)}}function I0(t,n,a){n=ri(a,n),n=af(t.stateNode,n,2),t=Na(t,n,2),t!==null&&(Dn(t,2),Oi(t))}function ze(t,n,a){if(t.tag===3)I0(t,t,a);else for(;n!==null;){if(n.tag===3){I0(n,t,a);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ia===null||!Ia.has(r))){t=ri(a,t),a=Hm(2),r=Na(n,a,2),r!==null&&(Gm(a,r,n,t),Dn(r,2),Oi(r));break}}n=n.return}}function wf(t,n,a){var r=t.pingCache;if(r===null){r=t.pingCache=new Lx;var u=new Set;r.set(n,u)}else u=r.get(n),u===void 0&&(u=new Set,r.set(n,u));u.has(a)||(yf=!0,u.add(a),t=Bx.bind(null,t,n,a),n.then(t,t))}function Bx(t,n,a){var r=t.pingCache;r!==null&&r.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Ve===t&&(ve&a)===a&&(Je===4||Je===3&&(ve&62914560)===ve&&300>E()-Il?(Ue&2)===0&&ur(t,0):Mf|=a,lr===ve&&(lr=0)),Oi(t)}function H0(t,n){n===0&&(n=Oe()),t=cs(t,n),t!==null&&(Dn(t,n),Oi(t))}function Fx(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),H0(t,a)}function Ix(t,n){var a=0;switch(t.tag){case 31:case 13:var r=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:r=t.stateNode;break;case 22:r=t.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(n),H0(t,a)}function Hx(t,n){return Me(t,n)}var ql=null,dr=null,Df=!1,Yl=!1,Uf=!1,Va=0;function Oi(t){t!==dr&&t.next===null&&(dr===null?ql=dr=t:dr=dr.next=t),Yl=!0,Df||(Df=!0,Vx())}function yo(t,n){if(!Uf&&Yl){Uf=!0;do for(var a=!1,r=ql;r!==null;){if(t!==0){var u=r.pendingLanes;if(u===0)var f=0;else{var g=r.suspendedLanes,A=r.pingedLanes;f=(1<<31-Nt(42|t)+1)-1,f&=u&~(g&~A),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,X0(r,f))}else f=ve,f=ft(r,r===Ve?f:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(f&3)===0||It(r,f)||(a=!0,X0(r,f));r=r.next}while(a);Uf=!1}}function Gx(){G0()}function G0(){Yl=Df=!1;var t=0;Va!==0&&Jx()&&(t=Va);for(var n=E(),a=null,r=ql;r!==null;){var u=r.next,f=V0(r,n);f===0?(r.next=null,a===null?ql=u:a.next=u,u===null&&(dr=a)):(a=r,(t!==0||(f&3)!==0)&&(Yl=!0)),r=u}mn!==0&&mn!==5||yo(t),Va!==0&&(Va=0)}function V0(t,n){for(var a=t.suspendedLanes,r=t.pingedLanes,u=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var g=31-Nt(f),A=1<<g,H=u[g];H===-1?((A&a)===0||(A&r)!==0)&&(u[g]=ne(A,n)):H<=n&&(t.expiredLanes|=A),f&=~A}if(n=Ve,a=ve,a=ft(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r=t.callbackNode,a===0||t===n&&(Pe===2||Pe===9)||t.cancelPendingCommit!==null)return r!==null&&r!==null&&Le(r),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||It(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(r!==null&&Le(r),Bs(a)){case 2:case 8:a=St;break;case 32:a=dt;break;case 268435456:a=wt;break;default:a=dt}return r=k0.bind(null,t),a=Me(a,r),t.callbackPriority=n,t.callbackNode=a,n}return r!==null&&r!==null&&Le(r),t.callbackPriority=2,t.callbackNode=null,2}function k0(t,n){if(mn!==0&&mn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Wl()&&t.callbackNode!==a)return null;var r=ve;return r=ft(t,t===Ve?r:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r===0?null:(b0(t,r,n),V0(t,E()),t.callbackNode!=null&&t.callbackNode===a?k0.bind(null,t):null)}function X0(t,n){if(Wl())return null;b0(t,n,!0)}function Vx(){tS(function(){(Ue&6)!==0?Me(mt,Gx):G0()})}function Lf(){if(Va===0){var t=Qs;t===0&&(t=Ct,Ct<<=1,(Ct&261888)===0&&(Ct=256)),Va=t}return Va}function W0(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:el(""+t)}function q0(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function kx(t,n,a,r,u){if(n==="submit"&&a&&a.stateNode===u){var f=W0((u[hn]||null).action),g=r.submitter;g&&(n=(n=g[hn]||null)?W0(n.formAction):g.getAttribute("formAction"),n!==null&&(f=n,g=null));var A=new sl("action","action",null,r,u);t.push({event:A,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(Va!==0){var H=g?q0(u,g):new FormData(u);Qu(a,{pending:!0,data:H,method:u.method,action:f},null,H)}}else typeof f=="function"&&(A.preventDefault(),H=g?q0(u,g):new FormData(u),Qu(a,{pending:!0,data:H,method:u.method,action:f},f,H))},currentTarget:u}]})}}for(var Nf=0;Nf<pu.length;Nf++){var Of=pu[Nf],Xx=Of.toLowerCase(),Wx=Of[0].toUpperCase()+Of.slice(1);yi(Xx,"on"+Wx)}yi(Ep,"onAnimationEnd"),yi(bp,"onAnimationIteration"),yi(Tp,"onAnimationStart"),yi("dblclick","onDoubleClick"),yi("focusin","onFocus"),yi("focusout","onBlur"),yi(ox,"onTransitionRun"),yi(lx,"onTransitionStart"),yi(cx,"onTransitionCancel"),yi(Ap,"onTransitionEnd"),Dt("onMouseEnter",["mouseout","mouseover"]),Dt("onMouseLeave",["mouseout","mouseover"]),Dt("onPointerEnter",["pointerout","pointerover"]),Dt("onPointerLeave",["pointerout","pointerover"]),$("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),$("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),$("onBeforeInput",["compositionend","keypress","textInput","paste"]),$("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),$("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),$("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Mo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),qx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Mo));function Y0(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var r=t[a],u=r.event;r=r.listeners;t:{var f=void 0;if(n)for(var g=r.length-1;0<=g;g--){var A=r[g],H=A.instance,nt=A.currentTarget;if(A=A.listener,H!==f&&u.isPropagationStopped())break t;f=A,u.currentTarget=nt;try{f(u)}catch(pt){ll(pt)}u.currentTarget=null,f=H}else for(g=0;g<r.length;g++){if(A=r[g],H=A.instance,nt=A.currentTarget,A=A.listener,H!==f&&u.isPropagationStopped())break t;f=A,u.currentTarget=nt;try{f(u)}catch(pt){ll(pt)}u.currentTarget=null,f=H}}}}function ge(t,n){var a=n[Ea];a===void 0&&(a=n[Ea]=new Set);var r=t+"__bubble";a.has(r)||(j0(n,t,2,!1),a.add(r))}function Pf(t,n,a){var r=0;n&&(r|=4),j0(a,t,r,n)}var jl="_reactListening"+Math.random().toString(36).slice(2);function zf(t){if(!t[jl]){t[jl]=!0,ct.forEach(function(a){a!=="selectionchange"&&(qx.has(a)||Pf(a,!1,t),Pf(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[jl]||(n[jl]=!0,Pf("selectionchange",!1,n))}}function j0(t,n,a,r){switch(Eg(n)){case 2:var u=SS;break;case 8:u=yS;break;default:u=Qf}a=u.bind(null,n,a,t),u=void 0,!eu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),r?u!==void 0?t.addEventListener(n,a,{capture:!0,passive:u}):t.addEventListener(n,a,!0):u!==void 0?t.addEventListener(n,a,{passive:u}):t.addEventListener(n,a,!1)}function Bf(t,n,a,r,u){var f=r;if((n&1)===0&&(n&2)===0&&r!==null)t:for(;;){if(r===null)return;var g=r.tag;if(g===3||g===4){var A=r.stateNode.containerInfo;if(A===u)break;if(g===4)for(g=r.return;g!==null;){var H=g.tag;if((H===3||H===4)&&g.stateNode.containerInfo===u)return;g=g.return}for(;A!==null;){if(g=ba(A),g===null)return;if(H=g.tag,H===5||H===6||H===26||H===27){r=f=g;continue t}A=A.parentNode}}r=r.return}$h(function(){var nt=f,pt=$c(a),_t=[];t:{var st=Rp.get(t);if(st!==void 0){var ut=sl,Gt=t;switch(t){case"keypress":if(il(a)===0)break t;case"keydown":case"keyup":ut=Iv;break;case"focusin":Gt="focus",ut=su;break;case"focusout":Gt="blur",ut=su;break;case"beforeblur":case"afterblur":ut=su;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ut=np;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ut=Rv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ut=Vv;break;case Ep:case bp:case Tp:ut=Dv;break;case Ap:ut=Xv;break;case"scroll":case"scrollend":ut=Tv;break;case"wheel":ut=qv;break;case"copy":case"cut":case"paste":ut=Lv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ut=ap;break;case"toggle":case"beforetoggle":ut=jv}var Jt=(n&4)!==0,Ge=!Jt&&(t==="scroll"||t==="scrollend"),Z=Jt?st!==null?st+"Capture":null:st;Jt=[];for(var k=nt,et;k!==null;){var gt=k;if(et=gt.stateNode,gt=gt.tag,gt!==5&&gt!==26&&gt!==27||et===null||Z===null||(gt=kr(k,Z),gt!=null&&Jt.push(Eo(k,gt,et))),Ge)break;k=k.return}0<Jt.length&&(st=new ut(st,Gt,null,a,pt),_t.push({event:st,listeners:Jt}))}}if((n&7)===0){t:{if(st=t==="mouseover"||t==="pointerover",ut=t==="mouseout"||t==="pointerout",st&&a!==Jc&&(Gt=a.relatedTarget||a.fromElement)&&(ba(Gt)||Gt[qi]))break t;if((ut||st)&&(st=pt.window===pt?pt:(st=pt.ownerDocument)?st.defaultView||st.parentWindow:window,ut?(Gt=a.relatedTarget||a.toElement,ut=nt,Gt=Gt?ba(Gt):null,Gt!==null&&(Ge=c(Gt),Jt=Gt.tag,Gt!==Ge||Jt!==5&&Jt!==27&&Jt!==6)&&(Gt=null)):(ut=null,Gt=nt),ut!==Gt)){if(Jt=np,gt="onMouseLeave",Z="onMouseEnter",k="mouse",(t==="pointerout"||t==="pointerover")&&(Jt=ap,gt="onPointerLeave",Z="onPointerEnter",k="pointer"),Ge=ut==null?st:ss(ut),et=Gt==null?st:ss(Gt),st=new Jt(gt,k+"leave",ut,a,pt),st.target=Ge,st.relatedTarget=et,gt=null,ba(pt)===nt&&(Jt=new Jt(Z,k+"enter",Gt,a,pt),Jt.target=et,Jt.relatedTarget=Ge,gt=Jt),Ge=gt,ut&&Gt)e:{for(Jt=Yx,Z=ut,k=Gt,et=0,gt=Z;gt;gt=Jt(gt))et++;gt=0;for(var Qt=k;Qt;Qt=Jt(Qt))gt++;for(;0<et-gt;)Z=Jt(Z),et--;for(;0<gt-et;)k=Jt(k),gt--;for(;et--;){if(Z===k||k!==null&&Z===k.alternate){Jt=Z;break e}Z=Jt(Z),k=Jt(k)}Jt=null}else Jt=null;ut!==null&&Z0(_t,st,ut,Jt,!1),Gt!==null&&Ge!==null&&Z0(_t,Ge,Gt,Jt,!0)}}t:{if(st=nt?ss(nt):window,ut=st.nodeName&&st.nodeName.toLowerCase(),ut==="select"||ut==="input"&&st.type==="file")var Ce=dp;else if(up(st))if(hp)Ce=ax;else{Ce=nx;var Yt=ex}else ut=st.nodeName,!ut||ut.toLowerCase()!=="input"||st.type!=="checkbox"&&st.type!=="radio"?nt&&Is(nt.elementType)&&(Ce=dp):Ce=ix;if(Ce&&(Ce=Ce(t,nt))){fp(_t,Ce,a,pt);break t}Yt&&Yt(t,st,nt),t==="focusout"&&nt&&st.type==="number"&&nt.memoizedProps.value!=null&&xi(st,"number",st.value)}switch(Yt=nt?ss(nt):window,t){case"focusin":(up(Yt)||Yt.contentEditable==="true")&&(ks=Yt,fu=nt,Qr=null);break;case"focusout":Qr=fu=ks=null;break;case"mousedown":du=!0;break;case"contextmenu":case"mouseup":case"dragend":du=!1,yp(_t,a,pt);break;case"selectionchange":if(rx)break;case"keydown":case"keyup":yp(_t,a,pt)}var fe;if(ou)t:{switch(t){case"compositionstart":var xe="onCompositionStart";break t;case"compositionend":xe="onCompositionEnd";break t;case"compositionupdate":xe="onCompositionUpdate";break t}xe=void 0}else Vs?lp(t,a)&&(xe="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(xe="onCompositionStart");xe&&(sp&&a.locale!=="ko"&&(Vs||xe!=="onCompositionStart"?xe==="onCompositionEnd"&&Vs&&(fe=tp()):(Aa=pt,nu="value"in Aa?Aa.value:Aa.textContent,Vs=!0)),Yt=Zl(nt,xe),0<Yt.length&&(xe=new ip(xe,t,null,a,pt),_t.push({event:xe,listeners:Yt}),fe?xe.data=fe:(fe=cp(a),fe!==null&&(xe.data=fe)))),(fe=Kv?Qv(t,a):Jv(t,a))&&(xe=Zl(nt,"onBeforeInput"),0<xe.length&&(Yt=new ip("onBeforeInput","beforeinput",null,a,pt),_t.push({event:Yt,listeners:xe}),Yt.data=fe)),kx(_t,t,nt,a,pt)}Y0(_t,n)})}function Eo(t,n,a){return{instance:t,listener:n,currentTarget:a}}function Zl(t,n){for(var a=n+"Capture",r=[];t!==null;){var u=t,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=kr(t,a),u!=null&&r.unshift(Eo(t,u,f)),u=kr(t,n),u!=null&&r.push(Eo(t,u,f))),t.tag===3)return r;t=t.return}return[]}function Yx(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Z0(t,n,a,r,u){for(var f=n._reactName,g=[];a!==null&&a!==r;){var A=a,H=A.alternate,nt=A.stateNode;if(A=A.tag,H!==null&&H===r)break;A!==5&&A!==26&&A!==27||nt===null||(H=nt,u?(nt=kr(a,f),nt!=null&&g.unshift(Eo(a,nt,H))):u||(nt=kr(a,f),nt!=null&&g.push(Eo(a,nt,H)))),a=a.return}g.length!==0&&t.push({event:n,listeners:g})}var jx=/\r\n?/g,Zx=/\u0000|\uFFFD/g;function K0(t){return(typeof t=="string"?t:""+t).replace(jx,`
`).replace(Zx,"")}function Q0(t,n){return n=K0(n),K0(t)===n}function He(t,n,a,r,u,f){switch(a){case"children":typeof r=="string"?n==="body"||n==="textarea"&&r===""||Nn(t,r):(typeof r=="number"||typeof r=="bigint")&&n!=="body"&&Nn(t,""+r);break;case"className":se(t,"class",r);break;case"tabIndex":se(t,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":se(t,a,r);break;case"style":Yi(t,r,f);break;case"data":if(n!=="object"){se(t,"data",r);break}case"src":case"href":if(r===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(a);break}r=el(""+r),t.setAttribute(a,r);break;case"action":case"formAction":if(typeof r=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&He(t,n,"name",u.name,u,null),He(t,n,"formEncType",u.formEncType,u,null),He(t,n,"formMethod",u.formMethod,u,null),He(t,n,"formTarget",u.formTarget,u,null)):(He(t,n,"encType",u.encType,u,null),He(t,n,"method",u.method,u,null),He(t,n,"target",u.target,u,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(a);break}r=el(""+r),t.setAttribute(a,r);break;case"onClick":r!=null&&(t.onclick=ji);break;case"onScroll":r!=null&&ge("scroll",t);break;case"onScrollEnd":r!=null&&ge("scrollend",t);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(u.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"multiple":t.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":t.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){t.removeAttribute("xlink:href");break}a=el(""+r),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,""+r):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":r===!0?t.setAttribute(a,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,r):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?t.setAttribute(a,r):t.removeAttribute(a);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?t.removeAttribute(a):t.setAttribute(a,r);break;case"popover":ge("beforetoggle",t),ge("toggle",t),ee(t,"popover",r);break;case"xlinkActuate":Ht(t,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":Ht(t,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":Ht(t,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":Ht(t,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":Ht(t,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":Ht(t,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":Ht(t,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":Ht(t,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":Ht(t,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":ee(t,"is",r);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Ev.get(a)||a,ee(t,a,r))}}function Ff(t,n,a,r,u,f){switch(a){case"style":Yi(t,r,f);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(u.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"children":typeof r=="string"?Nn(t,r):(typeof r=="number"||typeof r=="bigint")&&Nn(t,""+r);break;case"onScroll":r!=null&&ge("scroll",t);break;case"onScrollEnd":r!=null&&ge("scrollend",t);break;case"onClick":r!=null&&(t.onclick=ji);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!it.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=t[hn]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,u),typeof r=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,r,u);break t}a in t?t[a]=r:r===!0?t.setAttribute(a,""):ee(t,a,r)}}}function bn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ge("error",t),ge("load",t);var r=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var g=a[f];if(g!=null)switch(f){case"src":r=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:He(t,n,f,g,a,null)}}u&&He(t,n,"srcSet",a.srcSet,a,null),r&&He(t,n,"src",a.src,a,null);return;case"input":ge("invalid",t);var A=f=g=u=null,H=null,nt=null;for(r in a)if(a.hasOwnProperty(r)){var pt=a[r];if(pt!=null)switch(r){case"name":u=pt;break;case"type":g=pt;break;case"checked":H=pt;break;case"defaultChecked":nt=pt;break;case"value":f=pt;break;case"defaultValue":A=pt;break;case"children":case"dangerouslySetInnerHTML":if(pt!=null)throw Error(s(137,n));break;default:He(t,n,r,pt,a,null)}}jn(t,f,A,H,nt,g,u,!1);return;case"select":ge("invalid",t),r=g=f=null;for(u in a)if(a.hasOwnProperty(u)&&(A=a[u],A!=null))switch(u){case"value":f=A;break;case"defaultValue":g=A;break;case"multiple":r=A;default:He(t,n,u,A,a,null)}n=f,a=g,t.multiple=!!r,n!=null?Zn(t,!!r,n,!1):a!=null&&Zn(t,!!r,a,!0);return;case"textarea":ge("invalid",t),f=u=r=null;for(g in a)if(a.hasOwnProperty(g)&&(A=a[g],A!=null))switch(g){case"value":r=A;break;case"defaultValue":u=A;break;case"children":f=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(s(91));break;default:He(t,n,g,A,a,null)}rn(t,r,u,f);return;case"option":for(H in a)a.hasOwnProperty(H)&&(r=a[H],r!=null)&&(H==="selected"?t.selected=r&&typeof r!="function"&&typeof r!="symbol":He(t,n,H,r,a,null));return;case"dialog":ge("beforetoggle",t),ge("toggle",t),ge("cancel",t),ge("close",t);break;case"iframe":case"object":ge("load",t);break;case"video":case"audio":for(r=0;r<Mo.length;r++)ge(Mo[r],t);break;case"image":ge("error",t),ge("load",t);break;case"details":ge("toggle",t);break;case"embed":case"source":case"link":ge("error",t),ge("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(nt in a)if(a.hasOwnProperty(nt)&&(r=a[nt],r!=null))switch(nt){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:He(t,n,nt,r,a,null)}return;default:if(Is(n)){for(pt in a)a.hasOwnProperty(pt)&&(r=a[pt],r!==void 0&&Ff(t,n,pt,r,a,void 0));return}}for(A in a)a.hasOwnProperty(A)&&(r=a[A],r!=null&&He(t,n,A,r,a,null))}function Kx(t,n,a,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,g=null,A=null,H=null,nt=null,pt=null;for(ut in a){var _t=a[ut];if(a.hasOwnProperty(ut)&&_t!=null)switch(ut){case"checked":break;case"value":break;case"defaultValue":H=_t;default:r.hasOwnProperty(ut)||He(t,n,ut,null,r,_t)}}for(var st in r){var ut=r[st];if(_t=a[st],r.hasOwnProperty(st)&&(ut!=null||_t!=null))switch(st){case"type":f=ut;break;case"name":u=ut;break;case"checked":nt=ut;break;case"defaultChecked":pt=ut;break;case"value":g=ut;break;case"defaultValue":A=ut;break;case"children":case"dangerouslySetInnerHTML":if(ut!=null)throw Error(s(137,n));break;default:ut!==_t&&He(t,n,st,ut,r,_t)}}Ln(t,g,A,H,nt,pt,f,u);return;case"select":ut=g=A=st=null;for(f in a)if(H=a[f],a.hasOwnProperty(f)&&H!=null)switch(f){case"value":break;case"multiple":ut=H;default:r.hasOwnProperty(f)||He(t,n,f,null,r,H)}for(u in r)if(f=r[u],H=a[u],r.hasOwnProperty(u)&&(f!=null||H!=null))switch(u){case"value":st=f;break;case"defaultValue":A=f;break;case"multiple":g=f;default:f!==H&&He(t,n,u,f,r,H)}n=A,a=g,r=ut,st!=null?Zn(t,!!a,st,!1):!!r!=!!a&&(n!=null?Zn(t,!!a,n,!0):Zn(t,!!a,a?[]:"",!1));return;case"textarea":ut=st=null;for(A in a)if(u=a[A],a.hasOwnProperty(A)&&u!=null&&!r.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:He(t,n,A,null,r,u)}for(g in r)if(u=r[g],f=a[g],r.hasOwnProperty(g)&&(u!=null||f!=null))switch(g){case"value":st=u;break;case"defaultValue":ut=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==f&&He(t,n,g,u,r,f)}Ne(t,st,ut);return;case"option":for(var Gt in a)st=a[Gt],a.hasOwnProperty(Gt)&&st!=null&&!r.hasOwnProperty(Gt)&&(Gt==="selected"?t.selected=!1:He(t,n,Gt,null,r,st));for(H in r)st=r[H],ut=a[H],r.hasOwnProperty(H)&&st!==ut&&(st!=null||ut!=null)&&(H==="selected"?t.selected=st&&typeof st!="function"&&typeof st!="symbol":He(t,n,H,st,r,ut));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Jt in a)st=a[Jt],a.hasOwnProperty(Jt)&&st!=null&&!r.hasOwnProperty(Jt)&&He(t,n,Jt,null,r,st);for(nt in r)if(st=r[nt],ut=a[nt],r.hasOwnProperty(nt)&&st!==ut&&(st!=null||ut!=null))switch(nt){case"children":case"dangerouslySetInnerHTML":if(st!=null)throw Error(s(137,n));break;default:He(t,n,nt,st,r,ut)}return;default:if(Is(n)){for(var Ge in a)st=a[Ge],a.hasOwnProperty(Ge)&&st!==void 0&&!r.hasOwnProperty(Ge)&&Ff(t,n,Ge,void 0,r,st);for(pt in r)st=r[pt],ut=a[pt],!r.hasOwnProperty(pt)||st===ut||st===void 0&&ut===void 0||Ff(t,n,pt,st,r,ut);return}}for(var Z in a)st=a[Z],a.hasOwnProperty(Z)&&st!=null&&!r.hasOwnProperty(Z)&&He(t,n,Z,null,r,st);for(_t in r)st=r[_t],ut=a[_t],!r.hasOwnProperty(_t)||st===ut||st==null&&ut==null||He(t,n,_t,st,r,ut)}function J0(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Qx(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),r=0;r<a.length;r++){var u=a[r],f=u.transferSize,g=u.initiatorType,A=u.duration;if(f&&A&&J0(g)){for(g=0,A=u.responseEnd,r+=1;r<a.length;r++){var H=a[r],nt=H.startTime;if(nt>A)break;var pt=H.transferSize,_t=H.initiatorType;pt&&J0(_t)&&(H=H.responseEnd,g+=pt*(H<A?1:(A-nt)/(H-nt)))}if(--r,n+=8*(f+g)/(u.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var If=null,Hf=null;function Kl(t){return t.nodeType===9?t:t.ownerDocument}function $0(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function tg(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function Gf(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Vf=null;function Jx(){var t=window.event;return t&&t.type==="popstate"?t===Vf?!1:(Vf=t,!0):(Vf=null,!1)}var eg=typeof setTimeout=="function"?setTimeout:void 0,$x=typeof clearTimeout=="function"?clearTimeout:void 0,ng=typeof Promise=="function"?Promise:void 0,tS=typeof queueMicrotask=="function"?queueMicrotask:typeof ng<"u"?function(t){return ng.resolve(null).then(t).catch(eS)}:eg;function eS(t){setTimeout(function(){throw t})}function ka(t){return t==="head"}function ig(t,n){var a=n,r=0;do{var u=a.nextSibling;if(t.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(r===0){t.removeChild(u),gr(n);return}r--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")r++;else if(a==="html")bo(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,bo(a);for(var f=a.firstChild;f;){var g=f.nextSibling,A=f.nodeName;f[as]||A==="SCRIPT"||A==="STYLE"||A==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=g}}else a==="body"&&bo(t.ownerDocument.body);a=u}while(a);gr(n)}function ag(t,n){var a=t;t=0;do{var r=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),r&&r.nodeType===8)if(a=r.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=r}while(a)}function kf(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":kf(a),Vr(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function nS(t,n,a,r){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!r&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(r){if(!t[as])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=fi(t.nextSibling),t===null)break}return null}function iS(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=fi(t.nextSibling),t===null))return null;return t}function sg(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=fi(t.nextSibling),t===null))return null;return t}function Xf(t){return t.data==="$?"||t.data==="$~"}function Wf(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function aS(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var r=function(){n(),a.removeEventListener("DOMContentLoaded",r)};a.addEventListener("DOMContentLoaded",r),t._reactRetry=r}}function fi(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var qf=null;function rg(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return fi(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function og(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function lg(t,n,a){switch(n=Kl(a),t){case"html":if(t=n.documentElement,!t)throw Error(s(452));return t;case"head":if(t=n.head,!t)throw Error(s(453));return t;case"body":if(t=n.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function bo(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Vr(t)}var di=new Map,cg=new Set;function Ql(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var ua=z.d;z.d={f:sS,r:rS,D:oS,C:lS,L:cS,m:uS,X:dS,S:fS,M:hS};function sS(){var t=ua.f(),n=Vl();return t||n}function rS(t){var n=Ta(t);n!==null&&n.tag===5&&n.type==="form"?Am(n):ua.r(t)}var hr=typeof document>"u"?null:document;function ug(t,n,a){var r=hr;if(r&&typeof n=="string"&&n){var u=ie(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),cg.has(u)||(cg.add(u),t={rel:t,crossOrigin:a,href:n},r.querySelector(u)===null&&(n=r.createElement("link"),bn(n,"link",t),X(n),r.head.appendChild(n)))}}function oS(t){ua.D(t),ug("dns-prefetch",t,null)}function lS(t,n){ua.C(t,n),ug("preconnect",t,n)}function cS(t,n,a){ua.L(t,n,a);var r=hr;if(r&&t&&n){var u='link[rel="preload"][as="'+ie(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+ie(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+ie(a.imageSizes)+'"]')):u+='[href="'+ie(t)+'"]';var f=u;switch(n){case"style":f=pr(t);break;case"script":f=mr(t)}di.has(f)||(t=S({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),di.set(f,t),r.querySelector(u)!==null||n==="style"&&r.querySelector(To(f))||n==="script"&&r.querySelector(Ao(f))||(n=r.createElement("link"),bn(n,"link",t),X(n),r.head.appendChild(n)))}}function uS(t,n){ua.m(t,n);var a=hr;if(a&&t){var r=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+ie(r)+'"][href="'+ie(t)+'"]',f=u;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=mr(t)}if(!di.has(f)&&(t=S({rel:"modulepreload",href:t},n),di.set(f,t),a.querySelector(u)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Ao(f)))return}r=a.createElement("link"),bn(r,"link",t),X(r),a.head.appendChild(r)}}}function fS(t,n,a){ua.S(t,n,a);var r=hr;if(r&&t){var u=R(r).hoistableStyles,f=pr(t);n=n||"default";var g=u.get(f);if(!g){var A={loading:0,preload:null};if(g=r.querySelector(To(f)))A.loading=5;else{t=S({rel:"stylesheet",href:t,"data-precedence":n},a),(a=di.get(f))&&Yf(t,a);var H=g=r.createElement("link");X(H),bn(H,"link",t),H._p=new Promise(function(nt,pt){H.onload=nt,H.onerror=pt}),H.addEventListener("load",function(){A.loading|=1}),H.addEventListener("error",function(){A.loading|=2}),A.loading|=4,Jl(g,n,r)}g={type:"stylesheet",instance:g,count:1,state:A},u.set(f,g)}}}function dS(t,n){ua.X(t,n);var a=hr;if(a&&t){var r=R(a).hoistableScripts,u=mr(t),f=r.get(u);f||(f=a.querySelector(Ao(u)),f||(t=S({src:t,async:!0},n),(n=di.get(u))&&jf(t,n),f=a.createElement("script"),X(f),bn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(u,f))}}function hS(t,n){ua.M(t,n);var a=hr;if(a&&t){var r=R(a).hoistableScripts,u=mr(t),f=r.get(u);f||(f=a.querySelector(Ao(u)),f||(t=S({src:t,async:!0,type:"module"},n),(n=di.get(u))&&jf(t,n),f=a.createElement("script"),X(f),bn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(u,f))}}function fg(t,n,a,r){var u=(u=at.current)?Ql(u):null;if(!u)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=pr(a.href),a=R(u).hoistableStyles,r=a.get(n),r||(r={type:"style",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=pr(a.href);var f=R(u).hoistableStyles,g=f.get(t);if(g||(u=u.ownerDocument||u,g={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,g),(f=u.querySelector(To(t)))&&!f._p&&(g.instance=f,g.state.loading=5),di.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},di.set(t,a),f||pS(u,t,a,g.state))),n&&r===null)throw Error(s(528,""));return g}if(n&&r!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=mr(a),a=R(u).hoistableScripts,r=a.get(n),r||(r={type:"script",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function pr(t){return'href="'+ie(t)+'"'}function To(t){return'link[rel="stylesheet"]['+t+"]"}function dg(t){return S({},t,{"data-precedence":t.precedence,precedence:null})}function pS(t,n,a,r){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?r.loading=1:(n=t.createElement("link"),r.preload=n,n.addEventListener("load",function(){return r.loading|=1}),n.addEventListener("error",function(){return r.loading|=2}),bn(n,"link",a),X(n),t.head.appendChild(n))}function mr(t){return'[src="'+ie(t)+'"]'}function Ao(t){return"script[async]"+t}function hg(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var r=t.querySelector('style[data-href~="'+ie(a.href)+'"]');if(r)return n.instance=r,X(r),r;var u=S({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return r=(t.ownerDocument||t).createElement("style"),X(r),bn(r,"style",u),Jl(r,a.precedence,t),n.instance=r;case"stylesheet":u=pr(a.href);var f=t.querySelector(To(u));if(f)return n.state.loading|=4,n.instance=f,X(f),f;r=dg(a),(u=di.get(u))&&Yf(r,u),f=(t.ownerDocument||t).createElement("link"),X(f);var g=f;return g._p=new Promise(function(A,H){g.onload=A,g.onerror=H}),bn(f,"link",r),n.state.loading|=4,Jl(f,a.precedence,t),n.instance=f;case"script":return f=mr(a.src),(u=t.querySelector(Ao(f)))?(n.instance=u,X(u),u):(r=a,(u=di.get(f))&&(r=S({},a),jf(r,u)),t=t.ownerDocument||t,u=t.createElement("script"),X(u),bn(u,"link",r),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(r=n.instance,n.state.loading|=4,Jl(r,a.precedence,t));return n.instance}function Jl(t,n,a){for(var r=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=r.length?r[r.length-1]:null,f=u,g=0;g<r.length;g++){var A=r[g];if(A.dataset.precedence===n)f=A;else if(f!==u)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function Yf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function jf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var $l=null;function pg(t,n,a){if($l===null){var r=new Map,u=$l=new Map;u.set(a,r)}else u=$l,r=u.get(a),r||(r=new Map,u.set(a,r));if(r.has(t))return r;for(r.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var f=a[u];if(!(f[as]||f[sn]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var g=f.getAttribute(n)||"";g=t+g;var A=r.get(g);A?A.push(f):r.set(g,[f])}}return r}function mg(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function mS(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(t=n.disabled,typeof n.precedence=="string"&&t==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function gg(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function gS(t,n,a,r){if(a.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=pr(r.href),f=n.querySelector(To(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=tc.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=f,X(f);return}f=n.ownerDocument||n,r=dg(r),(u=di.get(u))&&Yf(r,u),f=f.createElement("link"),X(f);var g=f;g._p=new Promise(function(A,H){g.onload=A,g.onerror=H}),bn(f,"link",r),a.instance=f}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=tc.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var Zf=0;function _S(t,n){return t.stylesheets&&t.count===0&&nc(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var r=setTimeout(function(){if(t.stylesheets&&nc(t,t.stylesheets),t.unsuspend){var f=t.unsuspend;t.unsuspend=null,f()}},6e4+n);0<t.imgBytes&&Zf===0&&(Zf=62500*Qx());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&nc(t,t.stylesheets),t.unsuspend)){var f=t.unsuspend;t.unsuspend=null,f()}},(t.imgBytes>Zf?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(r),clearTimeout(u)}}:null}function tc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)nc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var ec=null;function nc(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,ec=new Map,n.forEach(vS,t),ec=null,tc.call(t))}function vS(t,n){if(!(n.state.loading&4)){var a=ec.get(t);if(a)var r=a.get(null);else{a=new Map,ec.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var g=u[f];(g.nodeName==="LINK"||g.getAttribute("media")!=="not all")&&(a.set(g.dataset.precedence,g),r=g)}r&&a.set(null,r)}u=n.instance,g=u.getAttribute("data-precedence"),f=a.get(g)||r,f===r&&a.set(null,u),a.set(g,u),this.count++,r=tc.bind(this),u.addEventListener("load",r),u.addEventListener("error",r),f?f.parentNode.insertBefore(u,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var Ro={$$typeof:U,Provider:null,Consumer:null,_currentValue:ot,_currentValue2:ot,_threadCount:0};function xS(t,n,a,r,u,f,g,A,H){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=be(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=be(0),this.hiddenUpdates=be(null),this.identifierPrefix=r,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=g,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=H,this.incompleteTransitions=new Map}function _g(t,n,a,r,u,f,g,A,H,nt,pt,_t){return t=new xS(t,n,a,g,H,nt,pt,_t,A),n=1,f===!0&&(n|=24),f=Qn(3,null,null,n),t.current=f,f.stateNode=t,n=Ru(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:r,isDehydrated:a,cache:n},Uu(f),t}function vg(t){return t?(t=qs,t):qs}function xg(t,n,a,r,u,f){u=vg(u),r.context===null?r.context=u:r.pendingContext=u,r=La(n),r.payload={element:a},f=f===void 0?null:f,f!==null&&(r.callback=f),a=Na(t,r,n),a!==null&&(Vn(a,t,n),ao(a,t,n))}function Sg(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function Kf(t,n){Sg(t,n),(t=t.alternate)&&Sg(t,n)}function yg(t){if(t.tag===13||t.tag===31){var n=cs(t,67108864);n!==null&&Vn(n,t,67108864),Kf(t,67108864)}}function Mg(t){if(t.tag===13||t.tag===31){var n=ni();n=zs(n);var a=cs(t,n);a!==null&&Vn(a,t,n),Kf(t,n)}}var ic=!0;function SS(t,n,a,r){var u=N.T;N.T=null;var f=z.p;try{z.p=2,Qf(t,n,a,r)}finally{z.p=f,N.T=u}}function yS(t,n,a,r){var u=N.T;N.T=null;var f=z.p;try{z.p=8,Qf(t,n,a,r)}finally{z.p=f,N.T=u}}function Qf(t,n,a,r){if(ic){var u=Jf(r);if(u===null)Bf(t,n,r,ac,a),bg(t,r);else if(ES(u,t,n,a,r))r.stopPropagation();else if(bg(t,r),n&4&&-1<MS.indexOf(t)){for(;u!==null;){var f=Ta(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var g=Et(f.pendingLanes);if(g!==0){var A=f;for(A.pendingLanes|=2,A.entangledLanes|=2;g;){var H=1<<31-Nt(g);A.entanglements[1]|=H,g&=~H}Oi(f),(Ue&6)===0&&(Hl=E()+500,yo(0))}}break;case 31:case 13:A=cs(f,2),A!==null&&Vn(A,f,2),Vl(),Kf(f,2)}if(f=Jf(r),f===null&&Bf(t,n,r,ac,a),f===u)break;u=f}u!==null&&r.stopPropagation()}else Bf(t,n,r,null,a)}}function Jf(t){return t=$c(t),$f(t)}var ac=null;function $f(t){if(ac=null,t=ba(t),t!==null){var n=c(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=d(n),t!==null)return t;t=null}else if(a===31){if(t=p(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return ac=t,null}function Eg(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(q()){case mt:return 2;case St:return 8;case dt:case Xt:return 32;case wt:return 268435456;default:return 32}default:return 32}}var td=!1,Xa=null,Wa=null,qa=null,Co=new Map,wo=new Map,Ya=[],MS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function bg(t,n){switch(t){case"focusin":case"focusout":Xa=null;break;case"dragenter":case"dragleave":Wa=null;break;case"mouseover":case"mouseout":qa=null;break;case"pointerover":case"pointerout":Co.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":wo.delete(n.pointerId)}}function Do(t,n,a,r,u,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:r,nativeEvent:f,targetContainers:[u]},n!==null&&(n=Ta(n),n!==null&&yg(n)),t):(t.eventSystemFlags|=r,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function ES(t,n,a,r,u){switch(n){case"focusin":return Xa=Do(Xa,t,n,a,r,u),!0;case"dragenter":return Wa=Do(Wa,t,n,a,r,u),!0;case"mouseover":return qa=Do(qa,t,n,a,r,u),!0;case"pointerover":var f=u.pointerId;return Co.set(f,Do(Co.get(f)||null,t,n,a,r,u)),!0;case"gotpointercapture":return f=u.pointerId,wo.set(f,Do(wo.get(f)||null,t,n,a,r,u)),!0}return!1}function Tg(t){var n=ba(t.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){t.blockedOn=n,Fs(t.priority,function(){Mg(a)});return}}else if(n===31){if(n=p(a),n!==null){t.blockedOn=n,Fs(t.priority,function(){Mg(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function sc(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=Jf(t.nativeEvent);if(a===null){a=t.nativeEvent;var r=new a.constructor(a.type,a);Jc=r,a.target.dispatchEvent(r),Jc=null}else return n=Ta(a),n!==null&&yg(n),t.blockedOn=a,!1;n.shift()}return!0}function Ag(t,n,a){sc(t)&&a.delete(n)}function bS(){td=!1,Xa!==null&&sc(Xa)&&(Xa=null),Wa!==null&&sc(Wa)&&(Wa=null),qa!==null&&sc(qa)&&(qa=null),Co.forEach(Ag),wo.forEach(Ag)}function rc(t,n){t.blockedOn===n&&(t.blockedOn=null,td||(td=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,bS)))}var oc=null;function Rg(t){oc!==t&&(oc=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){oc===t&&(oc=null);for(var n=0;n<t.length;n+=3){var a=t[n],r=t[n+1],u=t[n+2];if(typeof r!="function"){if($f(r||a)===null)continue;break}var f=Ta(a);f!==null&&(t.splice(n,3),n-=3,Qu(f,{pending:!0,data:u,method:a.method,action:r},r,u))}}))}function gr(t){function n(H){return rc(H,t)}Xa!==null&&rc(Xa,t),Wa!==null&&rc(Wa,t),qa!==null&&rc(qa,t),Co.forEach(n),wo.forEach(n);for(var a=0;a<Ya.length;a++){var r=Ya[a];r.blockedOn===t&&(r.blockedOn=null)}for(;0<Ya.length&&(a=Ya[0],a.blockedOn===null);)Tg(a),a.blockedOn===null&&Ya.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(r=0;r<a.length;r+=3){var u=a[r],f=a[r+1],g=u[hn]||null;if(typeof f=="function")g||Rg(a);else if(g){var A=null;if(f&&f.hasAttribute("formAction")){if(u=f,g=f[hn]||null)A=g.formAction;else if($f(u)!==null)continue}else A=g.action;typeof A=="function"?a[r+1]=A:(a.splice(r,3),r-=3),Rg(a)}}}function Cg(){function t(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(g){return u=g})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),r||setTimeout(a,20)}function a(){if(!r&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){r=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function ed(t){this._internalRoot=t}lc.prototype.render=ed.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,r=ni();xg(a,r,t,n,null,null)},lc.prototype.unmount=ed.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;xg(t.current,2,null,t,null,null),Vl(),n[qi]=null}};function lc(t){this._internalRoot=t}lc.prototype.unstable_scheduleHydration=function(t){if(t){var n=Di();t={blockedOn:null,target:t,priority:n};for(var a=0;a<Ya.length&&n!==0&&n<Ya[a].priority;a++);Ya.splice(a,0,t),a===0&&Tg(t)}};var wg=e.version;if(wg!=="19.2.4")throw Error(s(527,wg,"19.2.4"));z.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=h(n),t=t!==null?x(t):null,t=t===null?null:t.stateNode,t};var TS={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:N,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var cc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!cc.isDisabled&&cc.supportsFiber)try{bt=cc.inject(TS),Mt=cc}catch{}}return Lo.createRoot=function(t,n){if(!l(t))throw Error(s(299));var a=!1,r="",u=zm,f=Bm,g=Fm;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(g=n.onRecoverableError)),n=_g(t,1,!1,null,null,a,r,null,u,f,g,Cg),t[qi]=n.current,zf(t),new ed(n)},Lo.hydrateRoot=function(t,n,a){if(!l(t))throw Error(s(299));var r=!1,u="",f=zm,g=Bm,A=Fm,H=null;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(g=a.onCaughtError),a.onRecoverableError!==void 0&&(A=a.onRecoverableError),a.formState!==void 0&&(H=a.formState)),n=_g(t,1,!0,n,a??null,r,u,H,f,g,A,Cg),n.context=vg(null),a=n.current,r=ni(),r=zs(r),u=La(r),u.callback=null,Na(a,u,r),a=r,n.current.lanes=a,Dn(n,a),Oi(n),t[qi]=n.current,zf(t),new lc(n)},Lo.version="19.2.4",Lo}var Ig;function PS(){if(Ig)return ad.exports;Ig=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),ad.exports=OS(),ad.exports}var zS=PS();function ga(o=0){const e=$e.useRef(null);return $e.useEffect(()=>{const i=e.current;if(!i)return;const s=new IntersectionObserver(([l])=>{l.isIntersecting&&(setTimeout(()=>i.classList.add("visible"),o),s.disconnect())},{threshold:.1});return s.observe(i),()=>s.disconnect()},[o]),e}function BS(){const o=ga(0),e=ga(120);return K.jsx("section",{id:"about",className:"page-pad",style:{paddingTop:100,paddingBottom:100},children:K.jsxs("div",{className:"about-grid",style:{maxWidth:1280,margin:"0 auto"},children:[K.jsxs("div",{ref:o,className:"reveal-el",children:[K.jsx("p",{style:{fontSize:11,color:"rgba(168,216,234,0.7)",letterSpacing:"0.15em",marginBottom:14},children:"// ABOUT US"}),K.jsxs("h2",{style:{fontWeight:700,fontSize:"clamp(1.8rem,3vw,2.9rem)",letterSpacing:"-0.025em",lineHeight:1.15,marginBottom:22},children:["Code is our craft.",K.jsx("br",{}),K.jsx("span",{className:"grad-text",children:"Systems are our signature."})]}),K.jsx("p",{style:{color:"rgba(255,255,255,0.45)",fontSize:14,lineHeight:1.85,marginBottom:16},children:"Skriptside is a technology company built by engineers who care deeply about the quality of what they ship. We don't just write code — we architect solutions that stand the test of scale and time."}),K.jsx("p",{style:{color:"rgba(255,255,255,0.26)",fontSize:14,lineHeight:1.85},children:"Whether you're a startup finding product-market fit or an enterprise modernising legacy infrastructure, we bring the same precision and craft to every engagement."})]}),K.jsxs("div",{ref:e,className:"reveal-el",style:{borderRadius:20,border:"1px solid rgba(168,216,234,0.14)",background:"rgba(168,216,234,0.025)",padding:"28px 32px",fontSize:12.5,lineHeight:2.1,color:"rgba(255,255,255,0.28)"},children:[K.jsx("div",{style:{color:"rgba(168,216,234,0.45)",marginBottom:4},children:"// skriptside.config.ts"}),K.jsxs("div",{children:[K.jsx("span",{style:{color:"rgba(249,200,176,0.75)"},children:"const"})," ",K.jsx("span",{style:{color:"#fff"},children:"config"})," = {"]}),K.jsxs("div",{style:{paddingLeft:24},children:[K.jsx("span",{style:{color:"rgba(168,216,234,0.7)"},children:"company"}),":"," ",K.jsx("span",{style:{color:"rgba(168,216,234,0.95)"},children:'"Skriptside"'}),","]}),K.jsxs("div",{style:{paddingLeft:24},children:[K.jsx("span",{style:{color:"rgba(168,216,234,0.7)"},children:"focus"}),":"," ",K.jsx("span",{style:{color:"rgba(168,216,234,0.95)"},children:'"engineering excellence"'}),","]}),K.jsxs("div",{style:{paddingLeft:24},children:[K.jsx("span",{style:{color:"rgba(168,216,234,0.7)"},children:"values"}),": ["]}),["precision","scalability","ownership"].map(i=>K.jsxs("div",{style:{paddingLeft:48},children:[K.jsxs("span",{style:{color:"rgba(249,200,176,0.85)"},children:['"',i,'"']}),","]},i)),K.jsx("div",{style:{paddingLeft:24},children:"],"}),K.jsxs("div",{style:{paddingLeft:24},children:[K.jsx("span",{style:{color:"rgba(168,216,234,0.7)"},children:"ship"}),":"," ",K.jsx("span",{style:{color:"rgba(249,200,176,0.75)"},children:"() => "}),K.jsx("span",{className:"grad-text",style:{fontWeight:700},children:"true"})]}),K.jsx("div",{children:"}"})]})]})})}const FS="ash523531@gmail.com",IS=async()=>{if(!form.name.trim()||!form.email.trim()||!form.message.trim()){setError("Please fill in all fields.");return}if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)){setError("Please enter a valid email address.");return}setError(""),setSending(!0);try{const i=await(await fetch(`https://formsubmit.co/ajax/${FS}`,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({name:form.name,email:form.email,message:form.message,_subject:`New enquiry from ${form.name} — Skriptside`})})).json();i.success==="true"||i.success===!0?(setSent(!0),setForm({name:"",email:"",message:""})):setError("Something went wrong. Please try again or email us directly.")}catch{setError("Network error. Check your connection and try again.")}finally{setSending(!1)}};function HS(){const o=ga(0),e=ga(100),[i,s]=$e.useState({name:"",email:"",message:""}),[l,c]=$e.useState(!1),[d,p]=$e.useState(!1),[m,h]=$e.useState("");return K.jsx("section",{id:"contact",className:"page-pad",style:{paddingTop:100,paddingBottom:100},children:K.jsxs("div",{style:{maxWidth:660,margin:"0 auto"},children:[K.jsxs("div",{ref:o,className:"reveal-el",style:{textAlign:"center",marginBottom:52},children:[K.jsx("p",{style:{fontSize:11,color:"rgba(168,216,234,0.6)",letterSpacing:"0.15em",marginBottom:14},children:"// LET'S BUILD TOGETHER"}),K.jsxs("h2",{style:{fontWeight:700,fontSize:"clamp(2rem,3.5vw,3.4rem)",letterSpacing:"-0.025em",lineHeight:1.1,marginBottom:14},children:["Your next system",K.jsx("br",{}),K.jsx("span",{className:"grad-text",children:"starts here."})]}),K.jsx("p",{style:{color:"rgba(255,255,255,0.42)",fontSize:14,lineHeight:1.75},children:"Tell us what you're building. We'll tell you how we'd architect it."})]}),K.jsx("div",{ref:e,className:"reveal-el",style:{padding:"clamp(24px,4vw,44px) clamp(20px,4vw,48px)"},children:l?K.jsxs("div",{style:{textAlign:"center",padding:"40px 0",animation:"fadeUp 0.5s ease both"},children:[K.jsx("div",{className:"grad-text",style:{fontSize:52,marginBottom:16},children:"✓"}),K.jsx("h3",{style:{fontWeight:700,fontSize:20,marginBottom:8},children:"Message received."}),K.jsx("p",{style:{color:"rgba(255,255,255,0.42)",fontSize:14,marginBottom:6},children:"We'll be in touch within 24 hours."})]}):K.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:18},children:[K.jsxs("div",{children:[K.jsx("label",{style:{display:"block",fontSize:10,color:"rgba(255,255,255,0.35)",letterSpacing:"0.14em",marginBottom:8},children:"NAME"}),K.jsx("input",{type:"text",className:`input-field${m&&!i.name.trim()?" error":""}`,placeholder:"Your name",value:i.name,onChange:x=>{h(""),s(S=>({...S,name:x.target.value}))}})]}),K.jsxs("div",{children:[K.jsx("label",{style:{display:"block",fontSize:10,color:"rgba(255,255,255,0.35)",letterSpacing:"0.14em",marginBottom:8},children:"EMAIL"}),K.jsx("input",{type:"email",className:`input-field${m&&!i.email.trim()?" error":""}`,placeholder:"you@company.com",value:i.email,onChange:x=>{h(""),s(S=>({...S,email:x.target.value}))}})]}),K.jsxs("div",{children:[K.jsx("label",{style:{display:"block",fontSize:10,color:"rgba(255,255,255,0.35)",letterSpacing:"0.14em",marginBottom:8},children:"WHAT ARE YOU BUILDING?"}),K.jsx("textarea",{className:`input-field${m&&!i.message.trim()?" error":""}`,rows:5,placeholder:"Tell us about your project, timeline, and goals...",style:{resize:"none"},value:i.message,onChange:x=>{h(""),s(S=>({...S,message:x.target.value}))}})]}),m&&K.jsxs("p",{style:{fontSize:11,color:"rgba(249,150,150,0.9)",letterSpacing:"0.05em",animation:"fadeUp 0.3s ease both"},children:["⚠ ",m]}),K.jsx("button",{className:"cta-btn",disabled:d,style:{width:"50%",padding:"15px",borderRadius:12,marginTop:8,alignSelf:"center"},onClick:IS,children:d?K.jsxs(K.Fragment,{children:[K.jsx("span",{className:"spinner"}),K.jsx("span",{children:"Sending..."})]}):"Send Message →"})]})})]})})}const Bh="183",GS=0,Hg=1,VS=2,Pc=1,kS=2,Go=3,is=0,Wn=1,Fi=2,va=0,Ur=1,Gg=2,Vg=3,kg=4,XS=5,ws=100,WS=101,qS=102,YS=103,jS=104,ZS=200,KS=201,QS=202,JS=203,kd=204,Xd=205,$S=206,ty=207,ey=208,ny=209,iy=210,ay=211,sy=212,ry=213,oy=214,Wd=0,qd=1,Yd=2,Nr=3,jd=4,Zd=5,Kd=6,Qd=7,V_=0,ly=1,cy=2,Gi=0,k_=1,X_=2,W_=3,q_=4,Y_=5,j_=6,Z_=7,K_=300,Os=301,Or=302,ld=303,cd=304,Yc=306,Jd=1e3,_a=1001,$d=1002,Tn=1003,uy=1004,uc=1005,wn=1006,ud=1007,Ls=1008,gi=1009,Q_=1010,J_=1011,Xo=1012,Fh=1013,Xi=1014,Ii=1015,Sa=1016,Ih=1017,Hh=1018,Wo=1020,$_=35902,tv=35899,ev=1021,nv=1022,Ci=1023,ya=1026,Ns=1027,iv=1028,Gh=1029,Pr=1030,Vh=1031,kh=1033,zc=33776,Bc=33777,Fc=33778,Ic=33779,th=35840,eh=35841,nh=35842,ih=35843,ah=36196,sh=37492,rh=37496,oh=37488,lh=37489,ch=37490,uh=37491,fh=37808,dh=37809,hh=37810,ph=37811,mh=37812,gh=37813,_h=37814,vh=37815,xh=37816,Sh=37817,yh=37818,Mh=37819,Eh=37820,bh=37821,Th=36492,Ah=36494,Rh=36495,Ch=36283,wh=36284,Dh=36285,Uh=36286,fy=3200,dy=0,hy=1,es="",pi="srgb",zr="srgb-linear",Gc="linear",Be="srgb",_r=7680,Xg=519,py=512,my=513,gy=514,Xh=515,_y=516,vy=517,Wh=518,xy=519,Wg=35044,qg="300 es",Hi=2e3,Vc=2001;function Sy(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function kc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function yy(){const o=kc("canvas");return o.style.display="block",o}const Yg={};function jg(...o){const e="THREE."+o.shift();console.log(e,...o)}function av(o){const e=o[0];if(typeof e=="string"&&e.startsWith("TSL:")){const i=o[1];i&&i.isStackTrace?o[0]+=" "+i.getLocation():o[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return o}function ae(...o){o=av(o);const e="THREE."+o.shift();{const i=o[0];i&&i.isStackTrace?console.warn(i.getError(e)):console.warn(e,...o)}}function Te(...o){o=av(o);const e="THREE."+o.shift();{const i=o[0];i&&i.isStackTrace?console.error(i.getError(e)):console.error(e,...o)}}function Xc(...o){const e=o.join(" ");e in Yg||(Yg[e]=!0,ae(...o))}function My(o,e,i){return new Promise(function(s,l){function c(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}const Ey={[Wd]:qd,[Yd]:Kd,[jd]:Qd,[Nr]:Zd,[qd]:Wd,[Kd]:Yd,[Qd]:jd,[Zd]:Nr};class Fr{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(i)===-1&&s[e].push(i)}hasEventListener(e,i){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(i)!==-1}removeEventListener(e,i){const s=this._listeners;if(s===void 0)return;const l=s[e];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const s=i[e.type];if(s!==void 0){e.target=this;const l=s.slice(0);for(let c=0,d=l.length;c<d;c++)l[c].call(this,e);e.target=null}}}const Rn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],fd=Math.PI/180,Lh=180/Math.PI;function Yo(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Rn[o&255]+Rn[o>>8&255]+Rn[o>>16&255]+Rn[o>>24&255]+"-"+Rn[e&255]+Rn[e>>8&255]+"-"+Rn[e>>16&15|64]+Rn[e>>24&255]+"-"+Rn[i&63|128]+Rn[i>>8&255]+"-"+Rn[i>>16&255]+Rn[i>>24&255]+Rn[s&255]+Rn[s>>8&255]+Rn[s>>16&255]+Rn[s>>24&255]).toLowerCase()}function ye(o,e,i){return Math.max(e,Math.min(i,o))}function by(o,e){return(o%e+e)%e}function dd(o,e,i){return(1-i)*o+i*e}function No(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function kn(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class Ee{constructor(e=0,i=0){Ee.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,s=this.y,l=e.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=ye(this.x,e.x,i.x),this.y=ye(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=ye(this.x,e,i),this.y=ye(this.y,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(ye(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(ye(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y;return i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-e.x,d=this.y-e.y;return this.x=c*s-d*l+e.x,this.y=c*l+d*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ir{constructor(e=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=s,this._w=l}static slerpFlat(e,i,s,l,c,d,p){let m=s[l+0],h=s[l+1],x=s[l+2],S=s[l+3],_=c[d+0],M=c[d+1],b=c[d+2],w=c[d+3];if(S!==w||m!==_||h!==M||x!==b){let y=m*_+h*M+x*b+S*w;y<0&&(_=-_,M=-M,b=-b,w=-w,y=-y);let v=1-p;if(y<.9995){const C=Math.acos(y),U=Math.sin(C);v=Math.sin(v*C)/U,p=Math.sin(p*C)/U,m=m*v+_*p,h=h*v+M*p,x=x*v+b*p,S=S*v+w*p}else{m=m*v+_*p,h=h*v+M*p,x=x*v+b*p,S=S*v+w*p;const C=1/Math.sqrt(m*m+h*h+x*x+S*S);m*=C,h*=C,x*=C,S*=C}}e[i]=m,e[i+1]=h,e[i+2]=x,e[i+3]=S}static multiplyQuaternionsFlat(e,i,s,l,c,d){const p=s[l],m=s[l+1],h=s[l+2],x=s[l+3],S=c[d],_=c[d+1],M=c[d+2],b=c[d+3];return e[i]=p*b+x*S+m*M-h*_,e[i+1]=m*b+x*_+h*S-p*M,e[i+2]=h*b+x*M+p*_-m*S,e[i+3]=x*b-p*S-m*_-h*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,s,l){return this._x=e,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const s=e._x,l=e._y,c=e._z,d=e._order,p=Math.cos,m=Math.sin,h=p(s/2),x=p(l/2),S=p(c/2),_=m(s/2),M=m(l/2),b=m(c/2);switch(d){case"XYZ":this._x=_*x*S+h*M*b,this._y=h*M*S-_*x*b,this._z=h*x*b+_*M*S,this._w=h*x*S-_*M*b;break;case"YXZ":this._x=_*x*S+h*M*b,this._y=h*M*S-_*x*b,this._z=h*x*b-_*M*S,this._w=h*x*S+_*M*b;break;case"ZXY":this._x=_*x*S-h*M*b,this._y=h*M*S+_*x*b,this._z=h*x*b+_*M*S,this._w=h*x*S-_*M*b;break;case"ZYX":this._x=_*x*S-h*M*b,this._y=h*M*S+_*x*b,this._z=h*x*b-_*M*S,this._w=h*x*S+_*M*b;break;case"YZX":this._x=_*x*S+h*M*b,this._y=h*M*S+_*x*b,this._z=h*x*b-_*M*S,this._w=h*x*S-_*M*b;break;case"XZY":this._x=_*x*S-h*M*b,this._y=h*M*S-_*x*b,this._z=h*x*b+_*M*S,this._w=h*x*S+_*M*b;break;default:ae("Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const s=i/2,l=Math.sin(s);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,s=i[0],l=i[4],c=i[8],d=i[1],p=i[5],m=i[9],h=i[2],x=i[6],S=i[10],_=s+p+S;if(_>0){const M=.5/Math.sqrt(_+1);this._w=.25/M,this._x=(x-m)*M,this._y=(c-h)*M,this._z=(d-l)*M}else if(s>p&&s>S){const M=2*Math.sqrt(1+s-p-S);this._w=(x-m)/M,this._x=.25*M,this._y=(l+d)/M,this._z=(c+h)/M}else if(p>S){const M=2*Math.sqrt(1+p-s-S);this._w=(c-h)/M,this._x=(l+d)/M,this._y=.25*M,this._z=(m+x)/M}else{const M=2*Math.sqrt(1+S-s-p);this._w=(d-l)/M,this._x=(c+h)/M,this._y=(m+x)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let s=e.dot(i)+1;return s<1e-8?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ye(this.dot(e),-1,1)))}rotateTowards(e,i){const s=this.angleTo(e);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const s=e._x,l=e._y,c=e._z,d=e._w,p=i._x,m=i._y,h=i._z,x=i._w;return this._x=s*x+d*p+l*h-c*m,this._y=l*x+d*m+c*p-s*h,this._z=c*x+d*h+s*m-l*p,this._w=d*x-s*p-l*m-c*h,this._onChangeCallback(),this}slerp(e,i){let s=e._x,l=e._y,c=e._z,d=e._w,p=this.dot(e);p<0&&(s=-s,l=-l,c=-c,d=-d,p=-p);let m=1-i;if(p<.9995){const h=Math.acos(p),x=Math.sin(h);m=Math.sin(m*h)/x,i=Math.sin(i*h)/x,this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+d*i,this._onChangeCallback()}else this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+d*i,this.normalize();return this}slerpQuaternions(e,i,s){return this.copy(e).slerp(i,s)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class tt{constructor(e=0,i=0,s=0){tt.prototype.isVector3=!0,this.x=e,this.y=i,this.z=s}set(e,i,s){return s===void 0&&(s=this.z),this.x=e,this.y=i,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(Zg.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(Zg.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,c=e.elements,d=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*d,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*d,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*d,this}applyQuaternion(e){const i=this.x,s=this.y,l=this.z,c=e.x,d=e.y,p=e.z,m=e.w,h=2*(d*l-p*s),x=2*(p*i-c*l),S=2*(c*s-d*i);return this.x=i+m*h+d*S-p*x,this.y=s+m*x+p*h-c*S,this.z=l+m*S+c*x-d*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=ye(this.x,e.x,i.x),this.y=ye(this.y,e.y,i.y),this.z=ye(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=ye(this.x,e,i),this.y=ye(this.y,e,i),this.z=ye(this.z,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(ye(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const s=e.x,l=e.y,c=e.z,d=i.x,p=i.y,m=i.z;return this.x=l*m-c*p,this.y=c*d-s*m,this.z=s*p-l*d,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const s=e.dot(this)/i;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return hd.copy(this).projectOnVector(e),this.sub(hd)}reflect(e){return this.sub(hd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(ye(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y,l=this.z-e.z;return i*i+s*s+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,s){const l=Math.sin(i)*e;return this.x=l*Math.sin(s),this.y=Math.cos(i)*e,this.z=l*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,s){return this.x=e*Math.sin(i),this.y=s,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(e),this.y=i,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const hd=new tt,Zg=new Ir;class de{constructor(e,i,s,l,c,d,p,m,h){de.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,s,l,c,d,p,m,h)}set(e,i,s,l,c,d,p,m,h){const x=this.elements;return x[0]=e,x[1]=l,x[2]=p,x[3]=i,x[4]=c,x[5]=m,x[6]=s,x[7]=d,x[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(e,i,s){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,c=this.elements,d=s[0],p=s[3],m=s[6],h=s[1],x=s[4],S=s[7],_=s[2],M=s[5],b=s[8],w=l[0],y=l[3],v=l[6],C=l[1],U=l[4],D=l[7],I=l[2],B=l[5],F=l[8];return c[0]=d*w+p*C+m*I,c[3]=d*y+p*U+m*B,c[6]=d*v+p*D+m*F,c[1]=h*w+x*C+S*I,c[4]=h*y+x*U+S*B,c[7]=h*v+x*D+S*F,c[2]=_*w+M*C+b*I,c[5]=_*y+M*U+b*B,c[8]=_*v+M*D+b*F,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],d=e[4],p=e[5],m=e[6],h=e[7],x=e[8];return i*d*x-i*p*h-s*c*x+s*p*m+l*c*h-l*d*m}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],d=e[4],p=e[5],m=e[6],h=e[7],x=e[8],S=x*d-p*h,_=p*m-x*c,M=h*c-d*m,b=i*S+s*_+l*M;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/b;return e[0]=S*w,e[1]=(l*h-x*s)*w,e[2]=(p*s-l*d)*w,e[3]=_*w,e[4]=(x*i-l*m)*w,e[5]=(l*c-p*i)*w,e[6]=M*w,e[7]=(s*m-h*i)*w,e[8]=(d*i-s*c)*w,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,s,l,c,d,p){const m=Math.cos(c),h=Math.sin(c);return this.set(s*m,s*h,-s*(m*d+h*p)+d+e,-l*h,l*m,-l*(-h*d+m*p)+p+i,0,0,1),this}scale(e,i){return this.premultiply(pd.makeScale(e,i)),this}rotate(e){return this.premultiply(pd.makeRotation(-e)),this}translate(e,i){return this.premultiply(pd.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<9;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const pd=new de,Kg=new de().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Qg=new de().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ty(){const o={enabled:!0,workingColorSpace:zr,spaces:{},convert:function(l,c,d){return this.enabled===!1||c===d||!c||!d||(this.spaces[c].transfer===Be&&(l.r=xa(l.r),l.g=xa(l.g),l.b=xa(l.b)),this.spaces[c].primaries!==this.spaces[d].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===Be&&(l.r=Lr(l.r),l.g=Lr(l.g),l.b=Lr(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===es?Gc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,d){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return Xc("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return Xc("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,c)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return o.define({[zr]:{primaries:e,whitePoint:s,transfer:Gc,toXYZ:Kg,fromXYZ:Qg,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:pi},outputColorSpaceConfig:{drawingBufferColorSpace:pi}},[pi]:{primaries:e,whitePoint:s,transfer:Be,toXYZ:Kg,fromXYZ:Qg,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:pi}}}),o}const Ae=Ty();function xa(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Lr(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let vr;class Ay{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let s;if(e instanceof HTMLCanvasElement)s=e;else{vr===void 0&&(vr=kc("canvas")),vr.width=e.width,vr.height=e.height;const l=vr.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),s=vr}return s.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=kc("canvas");i.width=e.width,i.height=e.height;const s=i.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const l=s.getImageData(0,0,e.width,e.height),c=l.data;for(let d=0;d<c.length;d++)c[d]=xa(c[d]/255)*255;return s.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(xa(i[s]/255)*255):i[s]=xa(i[s]);return{data:i,width:e.width,height:e.height}}else return ae("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Ry=0;class qh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ry++}),this.uuid=Yo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?e.set(i.displayHeight,i.displayWidth,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let d=0,p=l.length;d<p;d++)l[d].isDataTexture?c.push(md(l[d].image)):c.push(md(l[d]))}else c=md(l);s.url=c}return i||(e.images[this.uuid]=s),s}}function md(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?Ay.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(ae("Texture: Unable to serialize Texture."),{})}let Cy=0;const gd=new tt;class zn extends Fr{constructor(e=zn.DEFAULT_IMAGE,i=zn.DEFAULT_MAPPING,s=_a,l=_a,c=wn,d=Ls,p=Ci,m=gi,h=zn.DEFAULT_ANISOTROPY,x=es){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Cy++}),this.uuid=Yo(),this.name="",this.source=new qh(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=d,this.anisotropy=h,this.format=p,this.internalFormat=null,this.type=m,this.offset=new Ee(0,0),this.repeat=new Ee(1,1),this.center=new Ee(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new de,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=x,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(gd).x}get height(){return this.source.getSize(gd).y}get depth(){return this.source.getSize(gd).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const s=e[i];if(s===void 0){ae(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ae(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==K_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Jd:e.x=e.x-Math.floor(e.x);break;case _a:e.x=e.x<0?0:1;break;case $d:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Jd:e.y=e.y-Math.floor(e.y);break;case _a:e.y=e.y<0?0:1;break;case $d:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}zn.DEFAULT_IMAGE=null;zn.DEFAULT_MAPPING=K_;zn.DEFAULT_ANISOTROPY=1;class an{constructor(e=0,i=0,s=0,l=1){an.prototype.isVector4=!0,this.x=e,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,s,l){return this.x=e,this.y=i,this.z=s,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,c=this.w,d=e.elements;return this.x=d[0]*i+d[4]*s+d[8]*l+d[12]*c,this.y=d[1]*i+d[5]*s+d[9]*l+d[13]*c,this.z=d[2]*i+d[6]*s+d[10]*l+d[14]*c,this.w=d[3]*i+d[7]*s+d[11]*l+d[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,s,l,c;const m=e.elements,h=m[0],x=m[4],S=m[8],_=m[1],M=m[5],b=m[9],w=m[2],y=m[6],v=m[10];if(Math.abs(x-_)<.01&&Math.abs(S-w)<.01&&Math.abs(b-y)<.01){if(Math.abs(x+_)<.1&&Math.abs(S+w)<.1&&Math.abs(b+y)<.1&&Math.abs(h+M+v-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const U=(h+1)/2,D=(M+1)/2,I=(v+1)/2,B=(x+_)/4,F=(S+w)/4,T=(b+y)/4;return U>D&&U>I?U<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(U),l=B/s,c=F/s):D>I?D<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(D),s=B/l,c=T/l):I<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(I),s=F/c,l=T/c),this.set(s,l,c,i),this}let C=Math.sqrt((y-b)*(y-b)+(S-w)*(S-w)+(_-x)*(_-x));return Math.abs(C)<.001&&(C=1),this.x=(y-b)/C,this.y=(S-w)/C,this.z=(_-x)/C,this.w=Math.acos((h+M+v-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=ye(this.x,e.x,i.x),this.y=ye(this.y,e.y,i.y),this.z=ye(this.z,e.z,i.z),this.w=ye(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=ye(this.x,e,i),this.y=ye(this.y,e,i),this.z=ye(this.z,e,i),this.w=ye(this.w,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(ye(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this.w=e.w+(i.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class wy extends Fr{constructor(e=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:wn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=s.depth,this.scissor=new an(0,0,e,i),this.scissorTest=!1,this.viewport=new an(0,0,e,i),this.textures=[];const l={width:e,height:i,depth:s.depth},c=new zn(l),d=s.count;for(let p=0;p<d;p++)this.textures[p]=c.clone(),this.textures[p].isRenderTargetTexture=!0,this.textures[p].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(e={}){const i={minFilter:wn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,s=1){if(this.width!==e||this.height!==i||this.depth!==s){this.width=e,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new qh(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Vi extends wy{constructor(e=1,i=1,s={}){super(e,i,s),this.isWebGLRenderTarget=!0}}class sv extends zn{constructor(e=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=Tn,this.minFilter=Tn,this.wrapR=_a,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Dy extends zn{constructor(e=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=Tn,this.minFilter=Tn,this.wrapR=_a,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class tn{constructor(e,i,s,l,c,d,p,m,h,x,S,_,M,b,w,y){tn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,s,l,c,d,p,m,h,x,S,_,M,b,w,y)}set(e,i,s,l,c,d,p,m,h,x,S,_,M,b,w,y){const v=this.elements;return v[0]=e,v[4]=i,v[8]=s,v[12]=l,v[1]=c,v[5]=d,v[9]=p,v[13]=m,v[2]=h,v[6]=x,v[10]=S,v[14]=_,v[3]=M,v[7]=b,v[11]=w,v[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new tn().fromArray(this.elements)}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(e){const i=this.elements,s=e.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,s){return this.determinant()===0?(e.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(e,i,s){return this.set(e.x,i.x,s.x,0,e.y,i.y,s.y,0,e.z,i.z,s.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const i=this.elements,s=e.elements,l=1/xr.setFromMatrixColumn(e,0).length(),c=1/xr.setFromMatrixColumn(e,1).length(),d=1/xr.setFromMatrixColumn(e,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*d,i[9]=s[9]*d,i[10]=s[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,s=e.x,l=e.y,c=e.z,d=Math.cos(s),p=Math.sin(s),m=Math.cos(l),h=Math.sin(l),x=Math.cos(c),S=Math.sin(c);if(e.order==="XYZ"){const _=d*x,M=d*S,b=p*x,w=p*S;i[0]=m*x,i[4]=-m*S,i[8]=h,i[1]=M+b*h,i[5]=_-w*h,i[9]=-p*m,i[2]=w-_*h,i[6]=b+M*h,i[10]=d*m}else if(e.order==="YXZ"){const _=m*x,M=m*S,b=h*x,w=h*S;i[0]=_+w*p,i[4]=b*p-M,i[8]=d*h,i[1]=d*S,i[5]=d*x,i[9]=-p,i[2]=M*p-b,i[6]=w+_*p,i[10]=d*m}else if(e.order==="ZXY"){const _=m*x,M=m*S,b=h*x,w=h*S;i[0]=_-w*p,i[4]=-d*S,i[8]=b+M*p,i[1]=M+b*p,i[5]=d*x,i[9]=w-_*p,i[2]=-d*h,i[6]=p,i[10]=d*m}else if(e.order==="ZYX"){const _=d*x,M=d*S,b=p*x,w=p*S;i[0]=m*x,i[4]=b*h-M,i[8]=_*h+w,i[1]=m*S,i[5]=w*h+_,i[9]=M*h-b,i[2]=-h,i[6]=p*m,i[10]=d*m}else if(e.order==="YZX"){const _=d*m,M=d*h,b=p*m,w=p*h;i[0]=m*x,i[4]=w-_*S,i[8]=b*S+M,i[1]=S,i[5]=d*x,i[9]=-p*x,i[2]=-h*x,i[6]=M*S+b,i[10]=_-w*S}else if(e.order==="XZY"){const _=d*m,M=d*h,b=p*m,w=p*h;i[0]=m*x,i[4]=-S,i[8]=h*x,i[1]=_*S+w,i[5]=d*x,i[9]=M*S-b,i[2]=b*S-M,i[6]=p*x,i[10]=w*S+_}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Uy,e,Ly)}lookAt(e,i,s){const l=this.elements;return ii.subVectors(e,i),ii.lengthSq()===0&&(ii.z=1),ii.normalize(),Za.crossVectors(s,ii),Za.lengthSq()===0&&(Math.abs(s.z)===1?ii.x+=1e-4:ii.z+=1e-4,ii.normalize(),Za.crossVectors(s,ii)),Za.normalize(),fc.crossVectors(ii,Za),l[0]=Za.x,l[4]=fc.x,l[8]=ii.x,l[1]=Za.y,l[5]=fc.y,l[9]=ii.y,l[2]=Za.z,l[6]=fc.z,l[10]=ii.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,c=this.elements,d=s[0],p=s[4],m=s[8],h=s[12],x=s[1],S=s[5],_=s[9],M=s[13],b=s[2],w=s[6],y=s[10],v=s[14],C=s[3],U=s[7],D=s[11],I=s[15],B=l[0],F=l[4],T=l[8],L=l[12],lt=l[1],G=l[5],Q=l[9],rt=l[13],J=l[2],Y=l[6],N=l[10],z=l[14],ot=l[3],ht=l[7],yt=l[11],P=l[15];return c[0]=d*B+p*lt+m*J+h*ot,c[4]=d*F+p*G+m*Y+h*ht,c[8]=d*T+p*Q+m*N+h*yt,c[12]=d*L+p*rt+m*z+h*P,c[1]=x*B+S*lt+_*J+M*ot,c[5]=x*F+S*G+_*Y+M*ht,c[9]=x*T+S*Q+_*N+M*yt,c[13]=x*L+S*rt+_*z+M*P,c[2]=b*B+w*lt+y*J+v*ot,c[6]=b*F+w*G+y*Y+v*ht,c[10]=b*T+w*Q+y*N+v*yt,c[14]=b*L+w*rt+y*z+v*P,c[3]=C*B+U*lt+D*J+I*ot,c[7]=C*F+U*G+D*Y+I*ht,c[11]=C*T+U*Q+D*N+I*yt,c[15]=C*L+U*rt+D*z+I*P,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[4],l=e[8],c=e[12],d=e[1],p=e[5],m=e[9],h=e[13],x=e[2],S=e[6],_=e[10],M=e[14],b=e[3],w=e[7],y=e[11],v=e[15],C=m*M-h*_,U=p*M-h*S,D=p*_-m*S,I=d*M-h*x,B=d*_-m*x,F=d*S-p*x;return i*(w*C-y*U+v*D)-s*(b*C-y*I+v*B)+l*(b*U-w*I+v*F)-c*(b*D-w*B+y*F)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,s){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=s),this}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],d=e[4],p=e[5],m=e[6],h=e[7],x=e[8],S=e[9],_=e[10],M=e[11],b=e[12],w=e[13],y=e[14],v=e[15],C=i*p-s*d,U=i*m-l*d,D=i*h-c*d,I=s*m-l*p,B=s*h-c*p,F=l*h-c*m,T=x*w-S*b,L=x*y-_*b,lt=x*v-M*b,G=S*y-_*w,Q=S*v-M*w,rt=_*v-M*y,J=C*rt-U*Q+D*G+I*lt-B*L+F*T;if(J===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const Y=1/J;return e[0]=(p*rt-m*Q+h*G)*Y,e[1]=(l*Q-s*rt-c*G)*Y,e[2]=(w*F-y*B+v*I)*Y,e[3]=(_*B-S*F-M*I)*Y,e[4]=(m*lt-d*rt-h*L)*Y,e[5]=(i*rt-l*lt+c*L)*Y,e[6]=(y*D-b*F-v*U)*Y,e[7]=(x*F-_*D+M*U)*Y,e[8]=(d*Q-p*lt+h*T)*Y,e[9]=(s*lt-i*Q-c*T)*Y,e[10]=(b*B-w*D+v*C)*Y,e[11]=(S*D-x*B-M*C)*Y,e[12]=(p*L-d*G-m*T)*Y,e[13]=(i*G-s*L+l*T)*Y,e[14]=(w*U-b*I-y*C)*Y,e[15]=(x*I-S*U+_*C)*Y,this}scale(e){const i=this.elements,s=e.x,l=e.y,c=e.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(e,i,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,d=e.x,p=e.y,m=e.z,h=c*d,x=c*p;return this.set(h*d+s,h*p-l*m,h*m+l*p,0,h*p+l*m,x*p+s,x*m-l*d,0,h*m-l*p,x*m+l*d,c*m*m+s,0,0,0,0,1),this}makeScale(e,i,s){return this.set(e,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,i,s,l,c,d){return this.set(1,s,c,0,e,1,d,0,i,l,1,0,0,0,0,1),this}compose(e,i,s){const l=this.elements,c=i._x,d=i._y,p=i._z,m=i._w,h=c+c,x=d+d,S=p+p,_=c*h,M=c*x,b=c*S,w=d*x,y=d*S,v=p*S,C=m*h,U=m*x,D=m*S,I=s.x,B=s.y,F=s.z;return l[0]=(1-(w+v))*I,l[1]=(M+D)*I,l[2]=(b-U)*I,l[3]=0,l[4]=(M-D)*B,l[5]=(1-(_+v))*B,l[6]=(y+C)*B,l[7]=0,l[8]=(b+U)*F,l[9]=(y-C)*F,l[10]=(1-(_+w))*F,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,s){const l=this.elements;e.x=l[12],e.y=l[13],e.z=l[14];const c=this.determinant();if(c===0)return s.set(1,1,1),i.identity(),this;let d=xr.set(l[0],l[1],l[2]).length();const p=xr.set(l[4],l[5],l[6]).length(),m=xr.set(l[8],l[9],l[10]).length();c<0&&(d=-d),bi.copy(this);const h=1/d,x=1/p,S=1/m;return bi.elements[0]*=h,bi.elements[1]*=h,bi.elements[2]*=h,bi.elements[4]*=x,bi.elements[5]*=x,bi.elements[6]*=x,bi.elements[8]*=S,bi.elements[9]*=S,bi.elements[10]*=S,i.setFromRotationMatrix(bi),s.x=d,s.y=p,s.z=m,this}makePerspective(e,i,s,l,c,d,p=Hi,m=!1){const h=this.elements,x=2*c/(i-e),S=2*c/(s-l),_=(i+e)/(i-e),M=(s+l)/(s-l);let b,w;if(m)b=c/(d-c),w=d*c/(d-c);else if(p===Hi)b=-(d+c)/(d-c),w=-2*d*c/(d-c);else if(p===Vc)b=-d/(d-c),w=-d*c/(d-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+p);return h[0]=x,h[4]=0,h[8]=_,h[12]=0,h[1]=0,h[5]=S,h[9]=M,h[13]=0,h[2]=0,h[6]=0,h[10]=b,h[14]=w,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,i,s,l,c,d,p=Hi,m=!1){const h=this.elements,x=2/(i-e),S=2/(s-l),_=-(i+e)/(i-e),M=-(s+l)/(s-l);let b,w;if(m)b=1/(d-c),w=d/(d-c);else if(p===Hi)b=-2/(d-c),w=-(d+c)/(d-c);else if(p===Vc)b=-1/(d-c),w=-c/(d-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+p);return h[0]=x,h[4]=0,h[8]=0,h[12]=_,h[1]=0,h[5]=S,h[9]=0,h[13]=M,h[2]=0,h[6]=0,h[10]=b,h[14]=w,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<16;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e[i+9]=s[9],e[i+10]=s[10],e[i+11]=s[11],e[i+12]=s[12],e[i+13]=s[13],e[i+14]=s[14],e[i+15]=s[15],e}}const xr=new tt,bi=new tn,Uy=new tt(0,0,0),Ly=new tt(1,1,1),Za=new tt,fc=new tt,ii=new tt,Jg=new tn,$g=new Ir;class Ma{constructor(e=0,i=0,s=0,l=Ma.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,s,l=this._order){return this._x=e,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,s=!0){const l=e.elements,c=l[0],d=l[4],p=l[8],m=l[1],h=l[5],x=l[9],S=l[2],_=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(ye(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-x,M),this._z=Math.atan2(-d,c)):(this._x=Math.atan2(_,h),this._z=0);break;case"YXZ":this._x=Math.asin(-ye(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(p,M),this._z=Math.atan2(m,h)):(this._y=Math.atan2(-S,c),this._z=0);break;case"ZXY":this._x=Math.asin(ye(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-S,M),this._z=Math.atan2(-d,h)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-ye(S,-1,1)),Math.abs(S)<.9999999?(this._x=Math.atan2(_,M),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-d,h));break;case"YZX":this._z=Math.asin(ye(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-x,h),this._y=Math.atan2(-S,c)):(this._x=0,this._y=Math.atan2(p,M));break;case"XZY":this._z=Math.asin(-ye(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(_,h),this._y=Math.atan2(p,c)):(this._x=Math.atan2(-x,M),this._y=0);break;default:ae("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,s){return Jg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Jg,i,s)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return $g.setFromEuler(this),this.setFromQuaternion($g,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ma.DEFAULT_ORDER="XYZ";let Yh=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Ny=0;const t_=new tt,Sr=new Ir,fa=new tn,dc=new tt,Oo=new tt,Oy=new tt,Py=new Ir,e_=new tt(1,0,0),n_=new tt(0,1,0),i_=new tt(0,0,1),a_={type:"added"},zy={type:"removed"},yr={type:"childadded",child:null},_d={type:"childremoved",child:null};class qn extends Fr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ny++}),this.uuid=Yo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=qn.DEFAULT_UP.clone();const e=new tt,i=new Ma,s=new Ir,l=new tt(1,1,1);function c(){s.setFromEuler(i,!1)}function d(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new tn},normalMatrix:{value:new de}}),this.matrix=new tn,this.matrixWorld=new tn,this.matrixAutoUpdate=qn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=qn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Yh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return Sr.setFromAxisAngle(e,i),this.quaternion.multiply(Sr),this}rotateOnWorldAxis(e,i){return Sr.setFromAxisAngle(e,i),this.quaternion.premultiply(Sr),this}rotateX(e){return this.rotateOnAxis(e_,e)}rotateY(e){return this.rotateOnAxis(n_,e)}rotateZ(e){return this.rotateOnAxis(i_,e)}translateOnAxis(e,i){return t_.copy(e).applyQuaternion(this.quaternion),this.position.add(t_.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(e_,e)}translateY(e){return this.translateOnAxis(n_,e)}translateZ(e){return this.translateOnAxis(i_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(fa.copy(this.matrixWorld).invert())}lookAt(e,i,s){e.isVector3?dc.copy(e):dc.set(e,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Oo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?fa.lookAt(Oo,dc,this.up):fa.lookAt(dc,Oo,this.up),this.quaternion.setFromRotationMatrix(fa),l&&(fa.extractRotation(l.matrixWorld),Sr.setFromRotationMatrix(fa),this.quaternion.premultiply(Sr.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(Te("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(a_),yr.child=e,this.dispatchEvent(yr),yr.child=null):Te("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(zy),_d.child=e,this.dispatchEvent(_d),_d.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),fa.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),fa.multiply(e.parent.matrixWorld)),e.applyMatrix4(fa),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(a_),yr.child=e,this.dispatchEvent(yr),yr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const d=this.children[s].getObjectByProperty(e,i);if(d!==void 0)return d}}getObjectsByProperty(e,i,s=[]){this[e]===i&&s.push(this);const l=this.children;for(let c=0,d=l.length;c<d;c++)l[c].getObjectsByProperty(e,i,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oo,e,Oy),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oo,Py,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const i=e.x,s=e.y,l=e.z,c=this.matrix.elements;c[12]+=i-c[0]*i-c[4]*s-c[8]*l,c[13]+=s-c[1]*i-c[5]*s-c[9]*l,c[14]+=l-c[2]*i-c[6]*s-c[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(e)}updateWorldMatrix(e,i){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,d=l.length;c<d;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",s={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),this.static!==!1&&(l.static=this.static),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(p=>({...p,boundingBox:p.boundingBox?p.boundingBox.toJSON():void 0,boundingSphere:p.boundingSphere?p.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(p=>({...p})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(p,m){return p[m.uuid]===void 0&&(p[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const p=this.geometry.parameters;if(p!==void 0&&p.shapes!==void 0){const m=p.shapes;if(Array.isArray(m))for(let h=0,x=m.length;h<x;h++){const S=m[h];c(e.shapes,S)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const p=[];for(let m=0,h=this.material.length;m<h;m++)p.push(c(e.materials,this.material[m]));l.material=p}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let p=0;p<this.children.length;p++)l.children.push(this.children[p].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let p=0;p<this.animations.length;p++){const m=this.animations[p];l.animations.push(c(e.animations,m))}}if(i){const p=d(e.geometries),m=d(e.materials),h=d(e.textures),x=d(e.images),S=d(e.shapes),_=d(e.skeletons),M=d(e.animations),b=d(e.nodes);p.length>0&&(s.geometries=p),m.length>0&&(s.materials=m),h.length>0&&(s.textures=h),x.length>0&&(s.images=x),S.length>0&&(s.shapes=S),_.length>0&&(s.skeletons=_),M.length>0&&(s.animations=M),b.length>0&&(s.nodes=b)}return s.object=l,s;function d(p){const m=[];for(const h in p){const x=p[h];delete x.metadata,m.push(x)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let s=0;s<e.children.length;s++){const l=e.children[s];this.add(l.clone())}return this}}qn.DEFAULT_UP=new tt(0,1,0);qn.DEFAULT_MATRIX_AUTO_UPDATE=!0;qn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class hc extends qn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const By={type:"move"};class vd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new hc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new hc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new tt,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new tt),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new hc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new tt,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new tt),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const s of e.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,s){let l=null,c=null,d=null;const p=this._targetRay,m=this._grip,h=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(h&&e.hand){d=!0;for(const w of e.hand.values()){const y=i.getJointPose(w,s),v=this._getHandJoint(h,w);y!==null&&(v.matrix.fromArray(y.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=y.radius),v.visible=y!==null}const x=h.joints["index-finger-tip"],S=h.joints["thumb-tip"],_=x.position.distanceTo(S.position),M=.02,b=.005;h.inputState.pinching&&_>M+b?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&_<=M-b&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));p!==null&&(l=i.getPose(e.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1,this.dispatchEvent(By)))}return p!==null&&(p.visible=l!==null),m!==null&&(m.visible=c!==null),h!==null&&(h.visible=d!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const s=new hc;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[i.jointName]=s,e.add(s)}return e.joints[i.jointName]}}const rv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ka={h:0,s:0,l:0},pc={h:0,s:0,l:0};function xd(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class Fe{constructor(e,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,s)}set(e,i,s){if(i===void 0&&s===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=pi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ae.colorSpaceToWorking(this,i),this}setRGB(e,i,s,l=Ae.workingColorSpace){return this.r=e,this.g=i,this.b=s,Ae.colorSpaceToWorking(this,l),this}setHSL(e,i,s,l=Ae.workingColorSpace){if(e=by(e,1),i=ye(i,0,1),s=ye(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,d=2*s-c;this.r=xd(d,c,e+1/3),this.g=xd(d,c,e),this.b=xd(d,c,e-1/3)}return Ae.colorSpaceToWorking(this,l),this}setStyle(e,i=pi){function s(c){c!==void 0&&parseFloat(c)<1&&ae("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const d=l[1],p=l[2];switch(d){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:ae("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],d=c.length;if(d===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(c,16),i);ae("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=pi){const s=rv[e.toLowerCase()];return s!==void 0?this.setHex(s,i):ae("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=xa(e.r),this.g=xa(e.g),this.b=xa(e.b),this}copyLinearToSRGB(e){return this.r=Lr(e.r),this.g=Lr(e.g),this.b=Lr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=pi){return Ae.workingToColorSpace(Cn.copy(this),e),Math.round(ye(Cn.r*255,0,255))*65536+Math.round(ye(Cn.g*255,0,255))*256+Math.round(ye(Cn.b*255,0,255))}getHexString(e=pi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Ae.workingColorSpace){Ae.workingToColorSpace(Cn.copy(this),i);const s=Cn.r,l=Cn.g,c=Cn.b,d=Math.max(s,l,c),p=Math.min(s,l,c);let m,h;const x=(p+d)/2;if(p===d)m=0,h=0;else{const S=d-p;switch(h=x<=.5?S/(d+p):S/(2-d-p),d){case s:m=(l-c)/S+(l<c?6:0);break;case l:m=(c-s)/S+2;break;case c:m=(s-l)/S+4;break}m/=6}return e.h=m,e.s=h,e.l=x,e}getRGB(e,i=Ae.workingColorSpace){return Ae.workingToColorSpace(Cn.copy(this),i),e.r=Cn.r,e.g=Cn.g,e.b=Cn.b,e}getStyle(e=pi){Ae.workingToColorSpace(Cn.copy(this),e);const i=Cn.r,s=Cn.g,l=Cn.b;return e!==pi?`color(${e} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(e,i,s){return this.getHSL(Ka),this.setHSL(Ka.h+e,Ka.s+i,Ka.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,s){return this.r=e.r+(i.r-e.r)*s,this.g=e.g+(i.g-e.g)*s,this.b=e.b+(i.b-e.b)*s,this}lerpHSL(e,i){this.getHSL(Ka),e.getHSL(pc);const s=dd(Ka.h,pc.h,i),l=dd(Ka.s,pc.s,i),c=dd(Ka.l,pc.l,i);return this.setHSL(s,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,s=this.g,l=this.b,c=e.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Cn=new Fe;Fe.NAMES=rv;class Fy extends qn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ma,this.environmentIntensity=1,this.environmentRotation=new Ma,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Ti=new tt,da=new tt,Sd=new tt,ha=new tt,Mr=new tt,Er=new tt,s_=new tt,yd=new tt,Md=new tt,Ed=new tt,bd=new an,Td=new an,Ad=new an;class Ri{constructor(e=new tt,i=new tt,s=new tt){this.a=e,this.b=i,this.c=s}static getNormal(e,i,s,l){l.subVectors(s,i),Ti.subVectors(e,i),l.cross(Ti);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,i,s,l,c){Ti.subVectors(l,i),da.subVectors(s,i),Sd.subVectors(e,i);const d=Ti.dot(Ti),p=Ti.dot(da),m=Ti.dot(Sd),h=da.dot(da),x=da.dot(Sd),S=d*h-p*p;if(S===0)return c.set(0,0,0),null;const _=1/S,M=(h*m-p*x)*_,b=(d*x-p*m)*_;return c.set(1-M-b,b,M)}static containsPoint(e,i,s,l){return this.getBarycoord(e,i,s,l,ha)===null?!1:ha.x>=0&&ha.y>=0&&ha.x+ha.y<=1}static getInterpolation(e,i,s,l,c,d,p,m){return this.getBarycoord(e,i,s,l,ha)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,ha.x),m.addScaledVector(d,ha.y),m.addScaledVector(p,ha.z),m)}static getInterpolatedAttribute(e,i,s,l,c,d){return bd.setScalar(0),Td.setScalar(0),Ad.setScalar(0),bd.fromBufferAttribute(e,i),Td.fromBufferAttribute(e,s),Ad.fromBufferAttribute(e,l),d.setScalar(0),d.addScaledVector(bd,c.x),d.addScaledVector(Td,c.y),d.addScaledVector(Ad,c.z),d}static isFrontFacing(e,i,s,l){return Ti.subVectors(s,i),da.subVectors(e,i),Ti.cross(da).dot(l)<0}set(e,i,s){return this.a.copy(e),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(e,i,s,l){return this.a.copy(e[i]),this.b.copy(e[s]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,s,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ti.subVectors(this.c,this.b),da.subVectors(this.a,this.b),Ti.cross(da).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ri.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Ri.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,s,l,c){return Ri.getInterpolation(e,this.a,this.b,this.c,i,s,l,c)}containsPoint(e){return Ri.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ri.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const s=this.a,l=this.b,c=this.c;let d,p;Mr.subVectors(l,s),Er.subVectors(c,s),yd.subVectors(e,s);const m=Mr.dot(yd),h=Er.dot(yd);if(m<=0&&h<=0)return i.copy(s);Md.subVectors(e,l);const x=Mr.dot(Md),S=Er.dot(Md);if(x>=0&&S<=x)return i.copy(l);const _=m*S-x*h;if(_<=0&&m>=0&&x<=0)return d=m/(m-x),i.copy(s).addScaledVector(Mr,d);Ed.subVectors(e,c);const M=Mr.dot(Ed),b=Er.dot(Ed);if(b>=0&&M<=b)return i.copy(c);const w=M*h-m*b;if(w<=0&&h>=0&&b<=0)return p=h/(h-b),i.copy(s).addScaledVector(Er,p);const y=x*b-M*S;if(y<=0&&S-x>=0&&M-b>=0)return s_.subVectors(c,l),p=(S-x)/(S-x+(M-b)),i.copy(l).addScaledVector(s_,p);const v=1/(y+w+_);return d=w*v,p=_*v,i.copy(s).addScaledVector(Mr,d).addScaledVector(Er,p)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class jo{constructor(e=new tt(1/0,1/0,1/0),i=new tt(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i+=3)this.expandByPoint(Ai.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,s=e.count;i<s;i++)this.expandByPoint(Ai.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const s=Ai.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let d=0,p=c.count;d<p;d++)e.isMesh===!0?e.getVertexPosition(d,Ai):Ai.fromBufferAttribute(c,d),Ai.applyMatrix4(e.matrixWorld),this.expandByPoint(Ai);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),mc.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),mc.copy(s.boundingBox)),mc.applyMatrix4(e.matrixWorld),this.union(mc)}const l=e.children;for(let c=0,d=l.length;c<d;c++)this.expandByObject(l[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ai),Ai.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,s;return e.normal.x>0?(i=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),i<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Po),gc.subVectors(this.max,Po),br.subVectors(e.a,Po),Tr.subVectors(e.b,Po),Ar.subVectors(e.c,Po),Qa.subVectors(Tr,br),Ja.subVectors(Ar,Tr),Ms.subVectors(br,Ar);let i=[0,-Qa.z,Qa.y,0,-Ja.z,Ja.y,0,-Ms.z,Ms.y,Qa.z,0,-Qa.x,Ja.z,0,-Ja.x,Ms.z,0,-Ms.x,-Qa.y,Qa.x,0,-Ja.y,Ja.x,0,-Ms.y,Ms.x,0];return!Rd(i,br,Tr,Ar,gc)||(i=[1,0,0,0,1,0,0,0,1],!Rd(i,br,Tr,Ar,gc))?!1:(_c.crossVectors(Qa,Ja),i=[_c.x,_c.y,_c.z],Rd(i,br,Tr,Ar,gc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ai).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ai).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(pa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),pa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),pa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),pa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),pa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),pa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),pa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),pa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(pa),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const pa=[new tt,new tt,new tt,new tt,new tt,new tt,new tt,new tt],Ai=new tt,mc=new jo,br=new tt,Tr=new tt,Ar=new tt,Qa=new tt,Ja=new tt,Ms=new tt,Po=new tt,gc=new tt,_c=new tt,Es=new tt;function Rd(o,e,i,s,l){for(let c=0,d=o.length-3;c<=d;c+=3){Es.fromArray(o,c);const p=l.x*Math.abs(Es.x)+l.y*Math.abs(Es.y)+l.z*Math.abs(Es.z),m=e.dot(Es),h=i.dot(Es),x=s.dot(Es);if(Math.max(-Math.max(m,h,x),Math.min(m,h,x))>p)return!1}return!0}const dn=new tt,vc=new Ee;let Iy=0;class ki{constructor(e,i,s=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Iy++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=s,this.usage=Wg,this.updateRanges=[],this.gpuType=Ii,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,s){e*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=i.array[s+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)vc.fromBufferAttribute(this,i),vc.applyMatrix3(e),this.setXY(i,vc.x,vc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)dn.fromBufferAttribute(this,i),dn.applyMatrix3(e),this.setXYZ(i,dn.x,dn.y,dn.z);return this}applyMatrix4(e){for(let i=0,s=this.count;i<s;i++)dn.fromBufferAttribute(this,i),dn.applyMatrix4(e),this.setXYZ(i,dn.x,dn.y,dn.z);return this}applyNormalMatrix(e){for(let i=0,s=this.count;i<s;i++)dn.fromBufferAttribute(this,i),dn.applyNormalMatrix(e),this.setXYZ(i,dn.x,dn.y,dn.z);return this}transformDirection(e){for(let i=0,s=this.count;i<s;i++)dn.fromBufferAttribute(this,i),dn.transformDirection(e),this.setXYZ(i,dn.x,dn.y,dn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let s=this.array[e*this.itemSize+i];return this.normalized&&(s=No(s,this.array)),s}setComponent(e,i,s){return this.normalized&&(s=kn(s,this.array)),this.array[e*this.itemSize+i]=s,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=No(i,this.array)),i}setX(e,i){return this.normalized&&(i=kn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=No(i,this.array)),i}setY(e,i){return this.normalized&&(i=kn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=No(i,this.array)),i}setZ(e,i){return this.normalized&&(i=kn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=No(i,this.array)),i}setW(e,i){return this.normalized&&(i=kn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,s){return e*=this.itemSize,this.normalized&&(i=kn(i,this.array),s=kn(s,this.array)),this.array[e+0]=i,this.array[e+1]=s,this}setXYZ(e,i,s,l){return e*=this.itemSize,this.normalized&&(i=kn(i,this.array),s=kn(s,this.array),l=kn(l,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this}setXYZW(e,i,s,l,c){return e*=this.itemSize,this.normalized&&(i=kn(i,this.array),s=kn(s,this.array),l=kn(l,this.array),c=kn(c,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Wg&&(e.usage=this.usage),e}}class ov extends ki{constructor(e,i,s){super(new Uint16Array(e),i,s)}}class lv extends ki{constructor(e,i,s){super(new Uint32Array(e),i,s)}}class gn extends ki{constructor(e,i,s){super(new Float32Array(e),i,s)}}const Hy=new jo,zo=new tt,Cd=new tt;class jc{constructor(e=new tt,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const s=this.center;i!==void 0?s.copy(i):Hy.setFromPoints(e).getCenter(s);let l=0;for(let c=0,d=e.length;c<d;c++)l=Math.max(l,s.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const s=this.center.distanceToSquared(e);return i.copy(e),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;zo.subVectors(e,this.center);const i=zo.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(zo,l/s),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Cd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(zo.copy(e.center).add(Cd)),this.expandByPoint(zo.copy(e.center).sub(Cd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Gy=0;const hi=new tn,wd=new qn,Rr=new tt,ai=new jo,Bo=new jo,Sn=new tt;class Yn extends Fr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Gy++}),this.uuid=Yo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Sy(e)?lv:ov)(e,1):this.index=e,this}setIndirect(e,i=0){return this.indirect=e,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,s=0){this.groups.push({start:e,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new de().getNormalMatrix(e);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return hi.makeRotationFromQuaternion(e),this.applyMatrix4(hi),this}rotateX(e){return hi.makeRotationX(e),this.applyMatrix4(hi),this}rotateY(e){return hi.makeRotationY(e),this.applyMatrix4(hi),this}rotateZ(e){return hi.makeRotationZ(e),this.applyMatrix4(hi),this}translate(e,i,s){return hi.makeTranslation(e,i,s),this.applyMatrix4(hi),this}scale(e,i,s){return hi.makeScale(e,i,s),this.applyMatrix4(hi),this}lookAt(e){return wd.lookAt(e),wd.updateMatrix(),this.applyMatrix4(wd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Rr).negate(),this.translate(Rr.x,Rr.y,Rr.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=e.length;l<c;l++){const d=e[l];s.push(d.x,d.y,d.z||0)}this.setAttribute("position",new gn(s,3))}else{const s=Math.min(e.length,i.count);for(let l=0;l<s;l++){const c=e[l];i.setXYZ(l,c.x,c.y,c.z||0)}e.length>i.count&&ae("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new jo);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Te("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new tt(-1/0,-1/0,-1/0),new tt(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];ai.setFromBufferAttribute(c),this.morphTargetsRelative?(Sn.addVectors(this.boundingBox.min,ai.min),this.boundingBox.expandByPoint(Sn),Sn.addVectors(this.boundingBox.max,ai.max),this.boundingBox.expandByPoint(Sn)):(this.boundingBox.expandByPoint(ai.min),this.boundingBox.expandByPoint(ai.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Te('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new jc);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Te("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new tt,1/0);return}if(e){const s=this.boundingSphere.center;if(ai.setFromBufferAttribute(e),i)for(let c=0,d=i.length;c<d;c++){const p=i[c];Bo.setFromBufferAttribute(p),this.morphTargetsRelative?(Sn.addVectors(ai.min,Bo.min),ai.expandByPoint(Sn),Sn.addVectors(ai.max,Bo.max),ai.expandByPoint(Sn)):(ai.expandByPoint(Bo.min),ai.expandByPoint(Bo.max))}ai.getCenter(s);let l=0;for(let c=0,d=e.count;c<d;c++)Sn.fromBufferAttribute(e,c),l=Math.max(l,s.distanceToSquared(Sn));if(i)for(let c=0,d=i.length;c<d;c++){const p=i[c],m=this.morphTargetsRelative;for(let h=0,x=p.count;h<x;h++)Sn.fromBufferAttribute(p,h),m&&(Rr.fromBufferAttribute(e,h),Sn.add(Rr)),l=Math.max(l,s.distanceToSquared(Sn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Te('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Te("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ki(new Float32Array(4*s.count),4));const d=this.getAttribute("tangent"),p=[],m=[];for(let T=0;T<s.count;T++)p[T]=new tt,m[T]=new tt;const h=new tt,x=new tt,S=new tt,_=new Ee,M=new Ee,b=new Ee,w=new tt,y=new tt;function v(T,L,lt){h.fromBufferAttribute(s,T),x.fromBufferAttribute(s,L),S.fromBufferAttribute(s,lt),_.fromBufferAttribute(c,T),M.fromBufferAttribute(c,L),b.fromBufferAttribute(c,lt),x.sub(h),S.sub(h),M.sub(_),b.sub(_);const G=1/(M.x*b.y-b.x*M.y);isFinite(G)&&(w.copy(x).multiplyScalar(b.y).addScaledVector(S,-M.y).multiplyScalar(G),y.copy(S).multiplyScalar(M.x).addScaledVector(x,-b.x).multiplyScalar(G),p[T].add(w),p[L].add(w),p[lt].add(w),m[T].add(y),m[L].add(y),m[lt].add(y))}let C=this.groups;C.length===0&&(C=[{start:0,count:e.count}]);for(let T=0,L=C.length;T<L;++T){const lt=C[T],G=lt.start,Q=lt.count;for(let rt=G,J=G+Q;rt<J;rt+=3)v(e.getX(rt+0),e.getX(rt+1),e.getX(rt+2))}const U=new tt,D=new tt,I=new tt,B=new tt;function F(T){I.fromBufferAttribute(l,T),B.copy(I);const L=p[T];U.copy(L),U.sub(I.multiplyScalar(I.dot(L))).normalize(),D.crossVectors(B,L);const G=D.dot(m[T])<0?-1:1;d.setXYZW(T,U.x,U.y,U.z,G)}for(let T=0,L=C.length;T<L;++T){const lt=C[T],G=lt.start,Q=lt.count;for(let rt=G,J=G+Q;rt<J;rt+=3)F(e.getX(rt+0)),F(e.getX(rt+1)),F(e.getX(rt+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new ki(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let _=0,M=s.count;_<M;_++)s.setXYZ(_,0,0,0);const l=new tt,c=new tt,d=new tt,p=new tt,m=new tt,h=new tt,x=new tt,S=new tt;if(e)for(let _=0,M=e.count;_<M;_+=3){const b=e.getX(_+0),w=e.getX(_+1),y=e.getX(_+2);l.fromBufferAttribute(i,b),c.fromBufferAttribute(i,w),d.fromBufferAttribute(i,y),x.subVectors(d,c),S.subVectors(l,c),x.cross(S),p.fromBufferAttribute(s,b),m.fromBufferAttribute(s,w),h.fromBufferAttribute(s,y),p.add(x),m.add(x),h.add(x),s.setXYZ(b,p.x,p.y,p.z),s.setXYZ(w,m.x,m.y,m.z),s.setXYZ(y,h.x,h.y,h.z)}else for(let _=0,M=i.count;_<M;_+=3)l.fromBufferAttribute(i,_+0),c.fromBufferAttribute(i,_+1),d.fromBufferAttribute(i,_+2),x.subVectors(d,c),S.subVectors(l,c),x.cross(S),s.setXYZ(_+0,x.x,x.y,x.z),s.setXYZ(_+1,x.x,x.y,x.z),s.setXYZ(_+2,x.x,x.y,x.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,s=e.count;i<s;i++)Sn.fromBufferAttribute(e,i),Sn.normalize(),e.setXYZ(i,Sn.x,Sn.y,Sn.z)}toNonIndexed(){function e(p,m){const h=p.array,x=p.itemSize,S=p.normalized,_=new h.constructor(m.length*x);let M=0,b=0;for(let w=0,y=m.length;w<y;w++){p.isInterleavedBufferAttribute?M=m[w]*p.data.stride+p.offset:M=m[w]*x;for(let v=0;v<x;v++)_[b++]=h[M++]}return new ki(_,x,S)}if(this.index===null)return ae("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Yn,s=this.index.array,l=this.attributes;for(const p in l){const m=l[p],h=e(m,s);i.setAttribute(p,h)}const c=this.morphAttributes;for(const p in c){const m=[],h=c[p];for(let x=0,S=h.length;x<S;x++){const _=h[x],M=e(_,s);m.push(M)}i.morphAttributes[p]=m}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let p=0,m=d.length;p<m;p++){const h=d[p];i.addGroup(h.start,h.count,h.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const h in m)m[h]!==void 0&&(e[h]=m[h]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const h=s[m];e.data.attributes[m]=h.toJSON(e.data)}const l={};let c=!1;for(const m in this.morphAttributes){const h=this.morphAttributes[m],x=[];for(let S=0,_=h.length;S<_;S++){const M=h[S];x.push(M.toJSON(e.data))}x.length>0&&(l[m]=x,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const p=this.boundingSphere;return p!==null&&(e.data.boundingSphere=p.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone());const l=e.attributes;for(const h in l){const x=l[h];this.setAttribute(h,x.clone(i))}const c=e.morphAttributes;for(const h in c){const x=[],S=c[h];for(let _=0,M=S.length;_<M;_++)x.push(S[_].clone(i));this.morphAttributes[h]=x}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let h=0,x=d.length;h<x;h++){const S=d[h];this.addGroup(S.start,S.count,S.materialIndex)}const p=e.boundingBox;p!==null&&(this.boundingBox=p.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let Vy=0;class Zo extends Fr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Vy++}),this.uuid=Yo(),this.name="",this.type="Material",this.blending=Ur,this.side=is,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=kd,this.blendDst=Xd,this.blendEquation=ws,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Fe(0,0,0),this.blendAlpha=0,this.depthFunc=Nr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Xg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=_r,this.stencilZFail=_r,this.stencilZPass=_r,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const s=e[i];if(s===void 0){ae(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ae(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Ur&&(s.blending=this.blending),this.side!==is&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==kd&&(s.blendSrc=this.blendSrc),this.blendDst!==Xd&&(s.blendDst=this.blendDst),this.blendEquation!==ws&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Nr&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Xg&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==_r&&(s.stencilFail=this.stencilFail),this.stencilZFail!==_r&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==_r&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const d=[];for(const p in c){const m=c[p];delete m.metadata,d.push(m)}return d}if(i){const c=l(e.textures),d=l(e.images);c.length>0&&(s.textures=c),d.length>0&&(s.images=d)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const ma=new tt,Dd=new tt,xc=new tt,$a=new tt,Ud=new tt,Sc=new tt,Ld=new tt;class jh{constructor(e=new tt,i=new tt(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ma)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=ma.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(ma.copy(this.origin).addScaledVector(this.direction,i),ma.distanceToSquared(e))}distanceSqToSegment(e,i,s,l){Dd.copy(e).add(i).multiplyScalar(.5),xc.copy(i).sub(e).normalize(),$a.copy(this.origin).sub(Dd);const c=e.distanceTo(i)*.5,d=-this.direction.dot(xc),p=$a.dot(this.direction),m=-$a.dot(xc),h=$a.lengthSq(),x=Math.abs(1-d*d);let S,_,M,b;if(x>0)if(S=d*m-p,_=d*p-m,b=c*x,S>=0)if(_>=-b)if(_<=b){const w=1/x;S*=w,_*=w,M=S*(S+d*_+2*p)+_*(d*S+_+2*m)+h}else _=c,S=Math.max(0,-(d*_+p)),M=-S*S+_*(_+2*m)+h;else _=-c,S=Math.max(0,-(d*_+p)),M=-S*S+_*(_+2*m)+h;else _<=-b?(S=Math.max(0,-(-d*c+p)),_=S>0?-c:Math.min(Math.max(-c,-m),c),M=-S*S+_*(_+2*m)+h):_<=b?(S=0,_=Math.min(Math.max(-c,-m),c),M=_*(_+2*m)+h):(S=Math.max(0,-(d*c+p)),_=S>0?c:Math.min(Math.max(-c,-m),c),M=-S*S+_*(_+2*m)+h);else _=d>0?-c:c,S=Math.max(0,-(d*_+p)),M=-S*S+_*(_+2*m)+h;return s&&s.copy(this.origin).addScaledVector(this.direction,S),l&&l.copy(Dd).addScaledVector(xc,_),M}intersectSphere(e,i){ma.subVectors(e.center,this.origin);const s=ma.dot(this.direction),l=ma.dot(ma)-s*s,c=e.radius*e.radius;if(l>c)return null;const d=Math.sqrt(c-l),p=s-d,m=s+d;return m<0?null:p<0?this.at(m,i):this.at(p,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/i;return s>=0?s:null}intersectPlane(e,i){const s=this.distanceToPlane(e);return s===null?null:this.at(s,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let s,l,c,d,p,m;const h=1/this.direction.x,x=1/this.direction.y,S=1/this.direction.z,_=this.origin;return h>=0?(s=(e.min.x-_.x)*h,l=(e.max.x-_.x)*h):(s=(e.max.x-_.x)*h,l=(e.min.x-_.x)*h),x>=0?(c=(e.min.y-_.y)*x,d=(e.max.y-_.y)*x):(c=(e.max.y-_.y)*x,d=(e.min.y-_.y)*x),s>d||c>l||((c>s||isNaN(s))&&(s=c),(d<l||isNaN(l))&&(l=d),S>=0?(p=(e.min.z-_.z)*S,m=(e.max.z-_.z)*S):(p=(e.max.z-_.z)*S,m=(e.min.z-_.z)*S),s>m||p>l)||((p>s||s!==s)&&(s=p),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(e){return this.intersectBox(e,ma)!==null}intersectTriangle(e,i,s,l,c){Ud.subVectors(i,e),Sc.subVectors(s,e),Ld.crossVectors(Ud,Sc);let d=this.direction.dot(Ld),p;if(d>0){if(l)return null;p=1}else if(d<0)p=-1,d=-d;else return null;$a.subVectors(this.origin,e);const m=p*this.direction.dot(Sc.crossVectors($a,Sc));if(m<0)return null;const h=p*this.direction.dot(Ud.cross($a));if(h<0||m+h>d)return null;const x=-p*$a.dot(Ld);return x<0?null:this.at(x/d,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ds extends Zo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ma,this.combine=V_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const r_=new tn,bs=new jh,yc=new jc,o_=new tt,Mc=new tt,Ec=new tt,bc=new tt,Nd=new tt,Tc=new tt,l_=new tt,Ac=new tt;class Xn extends qn{constructor(e=new Yn,i=new Ds){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=l.length;c<d;c++){const p=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}getVertexPosition(e,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,d=s.morphTargetsRelative;i.fromBufferAttribute(l,e);const p=this.morphTargetInfluences;if(c&&p){Tc.set(0,0,0);for(let m=0,h=c.length;m<h;m++){const x=p[m],S=c[m];x!==0&&(Nd.fromBufferAttribute(S,e),d?Tc.addScaledVector(Nd,x):Tc.addScaledVector(Nd.sub(i),x))}i.add(Tc)}return i}raycast(e,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),yc.copy(s.boundingSphere),yc.applyMatrix4(c),bs.copy(e.ray).recast(e.near),!(yc.containsPoint(bs.origin)===!1&&(bs.intersectSphere(yc,o_)===null||bs.origin.distanceToSquared(o_)>(e.far-e.near)**2))&&(r_.copy(c).invert(),bs.copy(e.ray).applyMatrix4(r_),!(s.boundingBox!==null&&bs.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,i,bs)))}_computeIntersections(e,i,s){let l;const c=this.geometry,d=this.material,p=c.index,m=c.attributes.position,h=c.attributes.uv,x=c.attributes.uv1,S=c.attributes.normal,_=c.groups,M=c.drawRange;if(p!==null)if(Array.isArray(d))for(let b=0,w=_.length;b<w;b++){const y=_[b],v=d[y.materialIndex],C=Math.max(y.start,M.start),U=Math.min(p.count,Math.min(y.start+y.count,M.start+M.count));for(let D=C,I=U;D<I;D+=3){const B=p.getX(D),F=p.getX(D+1),T=p.getX(D+2);l=Rc(this,v,e,s,h,x,S,B,F,T),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const b=Math.max(0,M.start),w=Math.min(p.count,M.start+M.count);for(let y=b,v=w;y<v;y+=3){const C=p.getX(y),U=p.getX(y+1),D=p.getX(y+2);l=Rc(this,d,e,s,h,x,S,C,U,D),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(d))for(let b=0,w=_.length;b<w;b++){const y=_[b],v=d[y.materialIndex],C=Math.max(y.start,M.start),U=Math.min(m.count,Math.min(y.start+y.count,M.start+M.count));for(let D=C,I=U;D<I;D+=3){const B=D,F=D+1,T=D+2;l=Rc(this,v,e,s,h,x,S,B,F,T),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const b=Math.max(0,M.start),w=Math.min(m.count,M.start+M.count);for(let y=b,v=w;y<v;y+=3){const C=y,U=y+1,D=y+2;l=Rc(this,d,e,s,h,x,S,C,U,D),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}}}function ky(o,e,i,s,l,c,d,p){let m;if(e.side===Wn?m=s.intersectTriangle(d,c,l,!0,p):m=s.intersectTriangle(l,c,d,e.side===is,p),m===null)return null;Ac.copy(p),Ac.applyMatrix4(o.matrixWorld);const h=i.ray.origin.distanceTo(Ac);return h<i.near||h>i.far?null:{distance:h,point:Ac.clone(),object:o}}function Rc(o,e,i,s,l,c,d,p,m,h){o.getVertexPosition(p,Mc),o.getVertexPosition(m,Ec),o.getVertexPosition(h,bc);const x=ky(o,e,i,s,Mc,Ec,bc,l_);if(x){const S=new tt;Ri.getBarycoord(l_,Mc,Ec,bc,S),l&&(x.uv=Ri.getInterpolatedAttribute(l,p,m,h,S,new Ee)),c&&(x.uv1=Ri.getInterpolatedAttribute(c,p,m,h,S,new Ee)),d&&(x.normal=Ri.getInterpolatedAttribute(d,p,m,h,S,new tt),x.normal.dot(s.direction)>0&&x.normal.multiplyScalar(-1));const _={a:p,b:m,c:h,normal:new tt,materialIndex:0};Ri.getNormal(Mc,Ec,bc,_.normal),x.face=_,x.barycoord=S}return x}class Xy extends zn{constructor(e=null,i=1,s=1,l,c,d,p,m,h=Tn,x=Tn,S,_){super(null,d,p,m,h,x,l,c,S,_),this.isDataTexture=!0,this.image={data:e,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Od=new tt,Wy=new tt,qy=new de;class Cs{constructor(e=new tt(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,s,l){return this.normal.set(e,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,s){const l=Od.subVectors(s,i).cross(Wy.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const s=e.delta(Od),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(e.start).addScaledVector(s,c)}intersectsLine(e){const i=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return i<0&&s>0||s<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const s=i||qy.getNormalMatrix(e),l=this.coplanarPoint(Od).applyMatrix4(e),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ts=new jc,Yy=new Ee(.5,.5),Cc=new tt;class cv{constructor(e=new Cs,i=new Cs,s=new Cs,l=new Cs,c=new Cs,d=new Cs){this.planes=[e,i,s,l,c,d]}set(e,i,s,l,c,d){const p=this.planes;return p[0].copy(e),p[1].copy(i),p[2].copy(s),p[3].copy(l),p[4].copy(c),p[5].copy(d),this}copy(e){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,i=Hi,s=!1){const l=this.planes,c=e.elements,d=c[0],p=c[1],m=c[2],h=c[3],x=c[4],S=c[5],_=c[6],M=c[7],b=c[8],w=c[9],y=c[10],v=c[11],C=c[12],U=c[13],D=c[14],I=c[15];if(l[0].setComponents(h-d,M-x,v-b,I-C).normalize(),l[1].setComponents(h+d,M+x,v+b,I+C).normalize(),l[2].setComponents(h+p,M+S,v+w,I+U).normalize(),l[3].setComponents(h-p,M-S,v-w,I-U).normalize(),s)l[4].setComponents(m,_,y,D).normalize(),l[5].setComponents(h-m,M-_,v-y,I-D).normalize();else if(l[4].setComponents(h-m,M-_,v-y,I-D).normalize(),i===Hi)l[5].setComponents(h+m,M+_,v+y,I+D).normalize();else if(i===Vc)l[5].setComponents(m,_,y,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ts.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Ts.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ts)}intersectsSprite(e){Ts.center.set(0,0,0);const i=Yy.distanceTo(e.center);return Ts.radius=.7071067811865476+i,Ts.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ts)}intersectsSphere(e){const i=this.planes,s=e.center,l=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Cc.x=l.normal.x>0?e.max.x:e.min.x,Cc.y=l.normal.y>0?e.max.y:e.min.y,Cc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(Cc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class uv extends Zo{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Fe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Wc=new tt,qc=new tt,c_=new tn,Fo=new jh,wc=new jc,Pd=new tt,u_=new tt;class jy extends qn{constructor(e=new Yn,i=new uv){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,s=[0];for(let l=1,c=i.count;l<c;l++)Wc.fromBufferAttribute(i,l-1),qc.fromBufferAttribute(i,l),s[l]=s[l-1],s[l]+=Wc.distanceTo(qc);e.setAttribute("lineDistance",new gn(s,1))}else ae("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,i){const s=this.geometry,l=this.matrixWorld,c=e.params.Line.threshold,d=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),wc.copy(s.boundingSphere),wc.applyMatrix4(l),wc.radius+=c,e.ray.intersectsSphere(wc)===!1)return;c_.copy(l).invert(),Fo.copy(e.ray).applyMatrix4(c_);const p=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=p*p,h=this.isLineSegments?2:1,x=s.index,_=s.attributes.position;if(x!==null){const M=Math.max(0,d.start),b=Math.min(x.count,d.start+d.count);for(let w=M,y=b-1;w<y;w+=h){const v=x.getX(w),C=x.getX(w+1),U=Dc(this,e,Fo,m,v,C,w);U&&i.push(U)}if(this.isLineLoop){const w=x.getX(b-1),y=x.getX(M),v=Dc(this,e,Fo,m,w,y,b-1);v&&i.push(v)}}else{const M=Math.max(0,d.start),b=Math.min(_.count,d.start+d.count);for(let w=M,y=b-1;w<y;w+=h){const v=Dc(this,e,Fo,m,w,w+1,w);v&&i.push(v)}if(this.isLineLoop){const w=Dc(this,e,Fo,m,b-1,M,b-1);w&&i.push(w)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=l.length;c<d;c++){const p=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}}function Dc(o,e,i,s,l,c,d){const p=o.geometry.attributes.position;if(Wc.fromBufferAttribute(p,l),qc.fromBufferAttribute(p,c),i.distanceSqToSegment(Wc,qc,Pd,u_)>s)return;Pd.applyMatrix4(o.matrixWorld);const h=e.ray.origin.distanceTo(Pd);if(!(h<e.near||h>e.far))return{distance:h,point:u_.clone().applyMatrix4(o.matrixWorld),index:d,face:null,faceIndex:null,barycoord:null,object:o}}class Zy extends jy{constructor(e,i){super(e,i),this.isLineLoop=!0,this.type="LineLoop"}}class fv extends zn{constructor(e=[],i=Os,s,l,c,d,p,m,h,x){super(e,i,s,l,c,d,p,m,h,x),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class qo extends zn{constructor(e,i,s=Xi,l,c,d,p=Tn,m=Tn,h,x=ya,S=1){if(x!==ya&&x!==Ns)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const _={width:e,height:i,depth:S};super(_,l,c,d,p,m,x,s,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new qh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class Ky extends qo{constructor(e,i=Xi,s=Os,l,c,d=Tn,p=Tn,m,h=ya){const x={width:e,height:e,depth:1},S=[x,x,x,x,x,x];super(e,e,i,s,l,c,d,p,m,h),this.image=S,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class dv extends zn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ko extends Yn{constructor(e=1,i=1,s=1,l=1,c=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:d};const p=this;l=Math.floor(l),c=Math.floor(c),d=Math.floor(d);const m=[],h=[],x=[],S=[];let _=0,M=0;b("z","y","x",-1,-1,s,i,e,d,c,0),b("z","y","x",1,-1,s,i,-e,d,c,1),b("x","z","y",1,1,e,s,i,l,d,2),b("x","z","y",1,-1,e,s,-i,l,d,3),b("x","y","z",1,-1,e,i,s,l,c,4),b("x","y","z",-1,-1,e,i,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new gn(h,3)),this.setAttribute("normal",new gn(x,3)),this.setAttribute("uv",new gn(S,2));function b(w,y,v,C,U,D,I,B,F,T,L){const lt=D/F,G=I/T,Q=D/2,rt=I/2,J=B/2,Y=F+1,N=T+1;let z=0,ot=0;const ht=new tt;for(let yt=0;yt<N;yt++){const P=yt*G-rt;for(let j=0;j<Y;j++){const vt=j*lt-Q;ht[w]=vt*C,ht[y]=P*U,ht[v]=J,h.push(ht.x,ht.y,ht.z),ht[w]=0,ht[y]=0,ht[v]=B>0?1:-1,x.push(ht.x,ht.y,ht.z),S.push(j/F),S.push(1-yt/T),z+=1}}for(let yt=0;yt<T;yt++)for(let P=0;P<F;P++){const j=_+P+Y*yt,vt=_+P+Y*(yt+1),Rt=_+(P+1)+Y*(yt+1),Bt=_+(P+1)+Y*yt;m.push(j,vt,Bt),m.push(vt,Rt,Bt),ot+=6}p.addGroup(M,ot,L),M+=ot,_+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ko(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Zh extends Yn{constructor(e=[],i=[],s=1,l=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:i,radius:s,detail:l};const c=[],d=[];p(l),h(s),x(),this.setAttribute("position",new gn(c,3)),this.setAttribute("normal",new gn(c.slice(),3)),this.setAttribute("uv",new gn(d,2)),l===0?this.computeVertexNormals():this.normalizeNormals();function p(C){const U=new tt,D=new tt,I=new tt;for(let B=0;B<i.length;B+=3)M(i[B+0],U),M(i[B+1],D),M(i[B+2],I),m(U,D,I,C)}function m(C,U,D,I){const B=I+1,F=[];for(let T=0;T<=B;T++){F[T]=[];const L=C.clone().lerp(D,T/B),lt=U.clone().lerp(D,T/B),G=B-T;for(let Q=0;Q<=G;Q++)Q===0&&T===B?F[T][Q]=L:F[T][Q]=L.clone().lerp(lt,Q/G)}for(let T=0;T<B;T++)for(let L=0;L<2*(B-T)-1;L++){const lt=Math.floor(L/2);L%2===0?(_(F[T][lt+1]),_(F[T+1][lt]),_(F[T][lt])):(_(F[T][lt+1]),_(F[T+1][lt+1]),_(F[T+1][lt]))}}function h(C){const U=new tt;for(let D=0;D<c.length;D+=3)U.x=c[D+0],U.y=c[D+1],U.z=c[D+2],U.normalize().multiplyScalar(C),c[D+0]=U.x,c[D+1]=U.y,c[D+2]=U.z}function x(){const C=new tt;for(let U=0;U<c.length;U+=3){C.x=c[U+0],C.y=c[U+1],C.z=c[U+2];const D=y(C)/2/Math.PI+.5,I=v(C)/Math.PI+.5;d.push(D,1-I)}b(),S()}function S(){for(let C=0;C<d.length;C+=6){const U=d[C+0],D=d[C+2],I=d[C+4],B=Math.max(U,D,I),F=Math.min(U,D,I);B>.9&&F<.1&&(U<.2&&(d[C+0]+=1),D<.2&&(d[C+2]+=1),I<.2&&(d[C+4]+=1))}}function _(C){c.push(C.x,C.y,C.z)}function M(C,U){const D=C*3;U.x=e[D+0],U.y=e[D+1],U.z=e[D+2]}function b(){const C=new tt,U=new tt,D=new tt,I=new tt,B=new Ee,F=new Ee,T=new Ee;for(let L=0,lt=0;L<c.length;L+=9,lt+=6){C.set(c[L+0],c[L+1],c[L+2]),U.set(c[L+3],c[L+4],c[L+5]),D.set(c[L+6],c[L+7],c[L+8]),B.set(d[lt+0],d[lt+1]),F.set(d[lt+2],d[lt+3]),T.set(d[lt+4],d[lt+5]),I.copy(C).add(U).add(D).divideScalar(3);const G=y(I);w(B,lt+0,C,G),w(F,lt+2,U,G),w(T,lt+4,D,G)}}function w(C,U,D,I){I<0&&C.x===1&&(d[U]=C.x-1),D.x===0&&D.z===0&&(d[U]=I/2/Math.PI+.5)}function y(C){return Math.atan2(C.z,-C.x)}function v(C){return Math.atan2(-C.y,Math.sqrt(C.x*C.x+C.z*C.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zh(e.vertices,e.indices,e.radius,e.detail)}}class Kh extends Zh{constructor(e=1,i=0){const s=(1+Math.sqrt(5))/2,l=[-1,s,0,1,s,0,-1,-s,0,1,-s,0,0,-1,s,0,1,s,0,-1,-s,0,1,-s,s,0,-1,s,0,1,-s,0,-1,-s,0,1],c=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(l,c,e,i),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:i}}static fromJSON(e){return new Kh(e.radius,e.detail)}}class Zc extends Yn{constructor(e=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:s,heightSegments:l};const c=e/2,d=i/2,p=Math.floor(s),m=Math.floor(l),h=p+1,x=m+1,S=e/p,_=i/m,M=[],b=[],w=[],y=[];for(let v=0;v<x;v++){const C=v*_-d;for(let U=0;U<h;U++){const D=U*S-c;b.push(D,-C,0),w.push(0,0,1),y.push(U/p),y.push(1-v/m)}}for(let v=0;v<m;v++)for(let C=0;C<p;C++){const U=C+h*v,D=C+h*(v+1),I=C+1+h*(v+1),B=C+1+h*v;M.push(U,D,B),M.push(D,I,B)}this.setIndex(M),this.setAttribute("position",new gn(b,3)),this.setAttribute("normal",new gn(w,3)),this.setAttribute("uv",new gn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zc(e.width,e.height,e.widthSegments,e.heightSegments)}}class Qh extends Yn{constructor(e=.5,i=1,s=32,l=1,c=0,d=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:i,thetaSegments:s,phiSegments:l,thetaStart:c,thetaLength:d},s=Math.max(3,s),l=Math.max(1,l);const p=[],m=[],h=[],x=[];let S=e;const _=(i-e)/l,M=new tt,b=new Ee;for(let w=0;w<=l;w++){for(let y=0;y<=s;y++){const v=c+y/s*d;M.x=S*Math.cos(v),M.y=S*Math.sin(v),m.push(M.x,M.y,M.z),h.push(0,0,1),b.x=(M.x/i+1)/2,b.y=(M.y/i+1)/2,x.push(b.x,b.y)}S+=_}for(let w=0;w<l;w++){const y=w*(s+1);for(let v=0;v<s;v++){const C=v+y,U=C,D=C+s+1,I=C+s+2,B=C+1;p.push(U,D,B),p.push(D,I,B)}}this.setIndex(p),this.setAttribute("position",new gn(m,3)),this.setAttribute("normal",new gn(h,3)),this.setAttribute("uv",new gn(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qh(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class ko extends Yn{constructor(e=1,i=32,s=16,l=0,c=Math.PI*2,d=0,p=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:i,heightSegments:s,phiStart:l,phiLength:c,thetaStart:d,thetaLength:p},i=Math.max(3,Math.floor(i)),s=Math.max(2,Math.floor(s));const m=Math.min(d+p,Math.PI);let h=0;const x=[],S=new tt,_=new tt,M=[],b=[],w=[],y=[];for(let v=0;v<=s;v++){const C=[],U=v/s;let D=0;v===0&&d===0?D=.5/i:v===s&&m===Math.PI&&(D=-.5/i);for(let I=0;I<=i;I++){const B=I/i;S.x=-e*Math.cos(l+B*c)*Math.sin(d+U*p),S.y=e*Math.cos(d+U*p),S.z=e*Math.sin(l+B*c)*Math.sin(d+U*p),b.push(S.x,S.y,S.z),_.copy(S).normalize(),w.push(_.x,_.y,_.z),y.push(B+D,1-U),C.push(h++)}x.push(C)}for(let v=0;v<s;v++)for(let C=0;C<i;C++){const U=x[v][C+1],D=x[v][C],I=x[v+1][C],B=x[v+1][C+1];(v!==0||d>0)&&M.push(U,D,B),(v!==s-1||m<Math.PI)&&M.push(D,I,B)}this.setIndex(M),this.setAttribute("position",new gn(b,3)),this.setAttribute("normal",new gn(w,3)),this.setAttribute("uv",new gn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ko(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function Br(o){const e={};for(const i in o){e[i]={};for(const s in o[i]){const l=o[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(ae("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][s]=null):e[i][s]=l.clone():Array.isArray(l)?e[i][s]=l.slice():e[i][s]=l}}return e}function Pn(o){const e={};for(let i=0;i<o.length;i++){const s=Br(o[i]);for(const l in s)e[l]=s[l]}return e}function Qy(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function hv(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ae.workingColorSpace}const Jy={clone:Br,merge:Pn};var $y=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,tM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Wi extends Zo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=$y,this.fragmentShader=tM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Br(e.uniforms),this.uniformsGroups=Qy(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?i.uniforms[l]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?i.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[l]={type:"m4",value:d.toArray()}:i.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class eM extends Wi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class nM extends Zo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=fy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class iM extends Zo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Uc=new tt,Lc=new Ir,Pi=new tt;class pv extends qn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new tn,this.projectionMatrix=new tn,this.projectionMatrixInverse=new tn,this.coordinateSystem=Hi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Uc,Lc,Pi),Pi.x===1&&Pi.y===1&&Pi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Uc,Lc,Pi.set(1,1,1)).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorld.decompose(Uc,Lc,Pi),Pi.x===1&&Pi.y===1&&Pi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Uc,Lc,Pi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ts=new tt,f_=new Ee,d_=new Ee;class mi extends pv{constructor(e=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=Lh*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(fd*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Lh*2*Math.atan(Math.tan(fd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,s){ts.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ts.x,ts.y).multiplyScalar(-e/ts.z),ts.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(ts.x,ts.y).multiplyScalar(-e/ts.z)}getViewSize(e,i){return this.getViewBounds(e,f_,d_),i.subVectors(d_,f_)}setViewOffset(e,i,s,l,c,d){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(fd*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const m=d.fullWidth,h=d.fullHeight;c+=d.offsetX*l/m,i-=d.offsetY*s/h,l*=d.width/m,s*=d.height/h}const p=this.filmOffset;p!==0&&(c+=e*p/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class mv extends pv{constructor(e=-1,i=1,s=1,l=-1,c=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=d,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,s,l,c,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-e,d=s+e,p=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,x=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=h*this.view.offsetX,d=c+h*this.view.width,p-=x*this.view.offsetY,m=p-x*this.view.height}this.projectionMatrix.makeOrthographic(c,d,p,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}const Cr=-90,wr=1;class aM extends qn{constructor(e,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new mi(Cr,wr,e,i);l.layers=this.layers,this.add(l);const c=new mi(Cr,wr,e,i);c.layers=this.layers,this.add(c);const d=new mi(Cr,wr,e,i);d.layers=this.layers,this.add(d);const p=new mi(Cr,wr,e,i);p.layers=this.layers,this.add(p);const m=new mi(Cr,wr,e,i);m.layers=this.layers,this.add(m);const h=new mi(Cr,wr,e,i);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[s,l,c,d,p,m]=i;for(const h of i)this.remove(h);if(e===Hi)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),p.up.set(0,1,0),p.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===Vc)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),p.up.set(0,-1,0),p.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of i)this.add(h),h.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,d,p,m,h,x]=this.children,S=e.getRenderTarget(),_=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),b=e.xr.enabled;e.xr.enabled=!1;const w=s.texture.generateMipmaps;s.texture.generateMipmaps=!1;let y=!1;e.isWebGLRenderer===!0?y=e.state.buffers.depth.getReversed():y=e.reversedDepthBuffer,e.setRenderTarget(s,0,l),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,c),e.setRenderTarget(s,1,l),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,d),e.setRenderTarget(s,2,l),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,p),e.setRenderTarget(s,3,l),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,m),e.setRenderTarget(s,4,l),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,h),s.texture.generateMipmaps=w,e.setRenderTarget(s,5,l),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,x),e.setRenderTarget(S,_,M),e.xr.enabled=b,s.texture.needsPMREMUpdate=!0}}class sM extends mi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const h_=new tn;class rM{constructor(e,i,s=0,l=1/0){this.ray=new jh(e,i),this.near=s,this.far=l,this.camera=null,this.layers=new Yh,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,i){this.ray.set(e,i)}setFromCamera(e,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(i.near+i.far)/(i.near-i.far)).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):Te("Raycaster: Unsupported camera type: "+i.type)}setFromXRController(e){return h_.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(h_),this}intersectObject(e,i=!0,s=[]){return Nh(e,this,s,i),s.sort(p_),s}intersectObjects(e,i=!0,s=[]){for(let l=0,c=e.length;l<c;l++)Nh(e[l],this,s,i);return s.sort(p_),s}}function p_(o,e){return o.distance-e.distance}function Nh(o,e,i,s){let l=!0;if(o.layers.test(e.layers)&&o.raycast(e,i)===!1&&(l=!1),l===!0&&s===!0){const c=o.children;for(let d=0,p=c.length;d<p;d++)Nh(c[d],e,i,!0)}}function m_(o,e,i,s){const l=oM(s);switch(i){case ev:return o*e;case iv:return o*e/l.components*l.byteLength;case Gh:return o*e/l.components*l.byteLength;case Pr:return o*e*2/l.components*l.byteLength;case Vh:return o*e*2/l.components*l.byteLength;case nv:return o*e*3/l.components*l.byteLength;case Ci:return o*e*4/l.components*l.byteLength;case kh:return o*e*4/l.components*l.byteLength;case zc:case Bc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Fc:case Ic:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case eh:case ih:return Math.max(o,16)*Math.max(e,8)/4;case th:case nh:return Math.max(o,8)*Math.max(e,8)/2;case ah:case sh:case oh:case lh:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case rh:case ch:case uh:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case fh:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case dh:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case hh:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case ph:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case mh:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case gh:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case _h:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case vh:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case xh:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case Sh:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case yh:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case Mh:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case Eh:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case bh:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case Th:case Ah:case Rh:return Math.ceil(o/4)*Math.ceil(e/4)*16;case Ch:case wh:return Math.ceil(o/4)*Math.ceil(e/4)*8;case Dh:case Uh:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function oM(o){switch(o){case gi:case Q_:return{byteLength:1,components:1};case Xo:case J_:case Sa:return{byteLength:2,components:1};case Ih:case Hh:return{byteLength:2,components:4};case Xi:case Fh:case Ii:return{byteLength:4,components:1};case $_:case tv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Bh}}));typeof window<"u"&&(window.__THREE__?ae("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Bh);function gv(){let o=null,e=!1,i=null,s=null;function l(c,d){i(c,d),s=o.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(s=o.requestAnimationFrame(l),e=!0)},stop:function(){o.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){o=c}}}function lM(o){const e=new WeakMap;function i(p,m){const h=p.array,x=p.usage,S=h.byteLength,_=o.createBuffer();o.bindBuffer(m,_),o.bufferData(m,h,x),p.onUploadCallback();let M;if(h instanceof Float32Array)M=o.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)M=o.HALF_FLOAT;else if(h instanceof Uint16Array)p.isFloat16BufferAttribute?M=o.HALF_FLOAT:M=o.UNSIGNED_SHORT;else if(h instanceof Int16Array)M=o.SHORT;else if(h instanceof Uint32Array)M=o.UNSIGNED_INT;else if(h instanceof Int32Array)M=o.INT;else if(h instanceof Int8Array)M=o.BYTE;else if(h instanceof Uint8Array)M=o.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)M=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:_,type:M,bytesPerElement:h.BYTES_PER_ELEMENT,version:p.version,size:S}}function s(p,m,h){const x=m.array,S=m.updateRanges;if(o.bindBuffer(h,p),S.length===0)o.bufferSubData(h,0,x);else{S.sort((M,b)=>M.start-b.start);let _=0;for(let M=1;M<S.length;M++){const b=S[_],w=S[M];w.start<=b.start+b.count+1?b.count=Math.max(b.count,w.start+w.count-b.start):(++_,S[_]=w)}S.length=_+1;for(let M=0,b=S.length;M<b;M++){const w=S[M];o.bufferSubData(h,w.start*x.BYTES_PER_ELEMENT,x,w.start,w.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(p){return p.isInterleavedBufferAttribute&&(p=p.data),e.get(p)}function c(p){p.isInterleavedBufferAttribute&&(p=p.data);const m=e.get(p);m&&(o.deleteBuffer(m.buffer),e.delete(p))}function d(p,m){if(p.isInterleavedBufferAttribute&&(p=p.data),p.isGLBufferAttribute){const x=e.get(p);(!x||x.version<p.version)&&e.set(p,{buffer:p.buffer,type:p.type,bytesPerElement:p.elementSize,version:p.version});return}const h=e.get(p);if(h===void 0)e.set(p,i(p,m));else if(h.version<p.version){if(h.size!==p.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(h.buffer,p,m),h.version=p.version}}return{get:l,remove:c,update:d}}var cM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,uM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,fM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,dM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,pM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,mM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,gM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,_M=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,vM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,xM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,SM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,yM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,MM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,EM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,bM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,TM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,AM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,RM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,CM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,wM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,DM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,UM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,LM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,NM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,OM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,PM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,zM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,BM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,FM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,IM="gl_FragColor = linearToOutputTexel( gl_FragColor );",HM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,GM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,VM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,kM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,XM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,WM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,qM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,YM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,jM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ZM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,KM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,QM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,JM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,$M=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,tE=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,eE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,nE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,iE=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,aE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,sE=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,rE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,oE=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lE=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,cE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,uE=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,fE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,dE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,mE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,gE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,_E=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,vE=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,SE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,yE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ME=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,EE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bE=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,TE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,AE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,RE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,CE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,DE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,UE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,LE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,NE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,OE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,PE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,zE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,BE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,FE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,IE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,HE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,GE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,VE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,kE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,XE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,WE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,qE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,YE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,jE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ZE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,KE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,QE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,JE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,$E=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,t1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,e1=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,n1=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,i1=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,a1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,s1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,r1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,o1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const l1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,c1=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,u1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,f1=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,d1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,h1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,p1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,m1=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,g1=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,_1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,v1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,x1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,S1=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,y1=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,M1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,E1=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,b1=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,T1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,A1=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,R1=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,C1=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,w1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,D1=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,U1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,L1=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,N1=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,O1=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,P1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,z1=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,B1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,F1=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,I1=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,H1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,G1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,he={alphahash_fragment:cM,alphahash_pars_fragment:uM,alphamap_fragment:fM,alphamap_pars_fragment:dM,alphatest_fragment:hM,alphatest_pars_fragment:pM,aomap_fragment:mM,aomap_pars_fragment:gM,batching_pars_vertex:_M,batching_vertex:vM,begin_vertex:xM,beginnormal_vertex:SM,bsdfs:yM,iridescence_fragment:MM,bumpmap_pars_fragment:EM,clipping_planes_fragment:bM,clipping_planes_pars_fragment:TM,clipping_planes_pars_vertex:AM,clipping_planes_vertex:RM,color_fragment:CM,color_pars_fragment:wM,color_pars_vertex:DM,color_vertex:UM,common:LM,cube_uv_reflection_fragment:NM,defaultnormal_vertex:OM,displacementmap_pars_vertex:PM,displacementmap_vertex:zM,emissivemap_fragment:BM,emissivemap_pars_fragment:FM,colorspace_fragment:IM,colorspace_pars_fragment:HM,envmap_fragment:GM,envmap_common_pars_fragment:VM,envmap_pars_fragment:kM,envmap_pars_vertex:XM,envmap_physical_pars_fragment:eE,envmap_vertex:WM,fog_vertex:qM,fog_pars_vertex:YM,fog_fragment:jM,fog_pars_fragment:ZM,gradientmap_pars_fragment:KM,lightmap_pars_fragment:QM,lights_lambert_fragment:JM,lights_lambert_pars_fragment:$M,lights_pars_begin:tE,lights_toon_fragment:nE,lights_toon_pars_fragment:iE,lights_phong_fragment:aE,lights_phong_pars_fragment:sE,lights_physical_fragment:rE,lights_physical_pars_fragment:oE,lights_fragment_begin:lE,lights_fragment_maps:cE,lights_fragment_end:uE,logdepthbuf_fragment:fE,logdepthbuf_pars_fragment:dE,logdepthbuf_pars_vertex:hE,logdepthbuf_vertex:pE,map_fragment:mE,map_pars_fragment:gE,map_particle_fragment:_E,map_particle_pars_fragment:vE,metalnessmap_fragment:xE,metalnessmap_pars_fragment:SE,morphinstance_vertex:yE,morphcolor_vertex:ME,morphnormal_vertex:EE,morphtarget_pars_vertex:bE,morphtarget_vertex:TE,normal_fragment_begin:AE,normal_fragment_maps:RE,normal_pars_fragment:CE,normal_pars_vertex:wE,normal_vertex:DE,normalmap_pars_fragment:UE,clearcoat_normal_fragment_begin:LE,clearcoat_normal_fragment_maps:NE,clearcoat_pars_fragment:OE,iridescence_pars_fragment:PE,opaque_fragment:zE,packing:BE,premultiplied_alpha_fragment:FE,project_vertex:IE,dithering_fragment:HE,dithering_pars_fragment:GE,roughnessmap_fragment:VE,roughnessmap_pars_fragment:kE,shadowmap_pars_fragment:XE,shadowmap_pars_vertex:WE,shadowmap_vertex:qE,shadowmask_pars_fragment:YE,skinbase_vertex:jE,skinning_pars_vertex:ZE,skinning_vertex:KE,skinnormal_vertex:QE,specularmap_fragment:JE,specularmap_pars_fragment:$E,tonemapping_fragment:t1,tonemapping_pars_fragment:e1,transmission_fragment:n1,transmission_pars_fragment:i1,uv_pars_fragment:a1,uv_pars_vertex:s1,uv_vertex:r1,worldpos_vertex:o1,background_vert:l1,background_frag:c1,backgroundCube_vert:u1,backgroundCube_frag:f1,cube_vert:d1,cube_frag:h1,depth_vert:p1,depth_frag:m1,distance_vert:g1,distance_frag:_1,equirect_vert:v1,equirect_frag:x1,linedashed_vert:S1,linedashed_frag:y1,meshbasic_vert:M1,meshbasic_frag:E1,meshlambert_vert:b1,meshlambert_frag:T1,meshmatcap_vert:A1,meshmatcap_frag:R1,meshnormal_vert:C1,meshnormal_frag:w1,meshphong_vert:D1,meshphong_frag:U1,meshphysical_vert:L1,meshphysical_frag:N1,meshtoon_vert:O1,meshtoon_frag:P1,points_vert:z1,points_frag:B1,shadow_vert:F1,shadow_frag:I1,sprite_vert:H1,sprite_frag:G1},Lt={common:{diffuse:{value:new Fe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new de},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new de}},envmap:{envMap:{value:null},envMapRotation:{value:new de},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new de}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new de}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new de},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new de},normalScale:{value:new Ee(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new de},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new de}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new de}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new de}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Fe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Fe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0},uvTransform:{value:new de}},sprite:{diffuse:{value:new Fe(16777215)},opacity:{value:1},center:{value:new Ee(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new de},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0}}},Bi={basic:{uniforms:Pn([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.fog]),vertexShader:he.meshbasic_vert,fragmentShader:he.meshbasic_frag},lambert:{uniforms:Pn([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new Fe(0)},envMapIntensity:{value:1}}]),vertexShader:he.meshlambert_vert,fragmentShader:he.meshlambert_frag},phong:{uniforms:Pn([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new Fe(0)},specular:{value:new Fe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:he.meshphong_vert,fragmentShader:he.meshphong_frag},standard:{uniforms:Pn([Lt.common,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.roughnessmap,Lt.metalnessmap,Lt.fog,Lt.lights,{emissive:{value:new Fe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:he.meshphysical_vert,fragmentShader:he.meshphysical_frag},toon:{uniforms:Pn([Lt.common,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.gradientmap,Lt.fog,Lt.lights,{emissive:{value:new Fe(0)}}]),vertexShader:he.meshtoon_vert,fragmentShader:he.meshtoon_frag},matcap:{uniforms:Pn([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,{matcap:{value:null}}]),vertexShader:he.meshmatcap_vert,fragmentShader:he.meshmatcap_frag},points:{uniforms:Pn([Lt.points,Lt.fog]),vertexShader:he.points_vert,fragmentShader:he.points_frag},dashed:{uniforms:Pn([Lt.common,Lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:he.linedashed_vert,fragmentShader:he.linedashed_frag},depth:{uniforms:Pn([Lt.common,Lt.displacementmap]),vertexShader:he.depth_vert,fragmentShader:he.depth_frag},normal:{uniforms:Pn([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,{opacity:{value:1}}]),vertexShader:he.meshnormal_vert,fragmentShader:he.meshnormal_frag},sprite:{uniforms:Pn([Lt.sprite,Lt.fog]),vertexShader:he.sprite_vert,fragmentShader:he.sprite_frag},background:{uniforms:{uvTransform:{value:new de},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:he.background_vert,fragmentShader:he.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new de}},vertexShader:he.backgroundCube_vert,fragmentShader:he.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:he.cube_vert,fragmentShader:he.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:he.equirect_vert,fragmentShader:he.equirect_frag},distance:{uniforms:Pn([Lt.common,Lt.displacementmap,{referencePosition:{value:new tt},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:he.distance_vert,fragmentShader:he.distance_frag},shadow:{uniforms:Pn([Lt.lights,Lt.fog,{color:{value:new Fe(0)},opacity:{value:1}}]),vertexShader:he.shadow_vert,fragmentShader:he.shadow_frag}};Bi.physical={uniforms:Pn([Bi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new de},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new de},clearcoatNormalScale:{value:new Ee(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new de},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new de},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new de},sheen:{value:0},sheenColor:{value:new Fe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new de},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new de},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new de},transmissionSamplerSize:{value:new Ee},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new de},attenuationDistance:{value:0},attenuationColor:{value:new Fe(0)},specularColor:{value:new Fe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new de},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new de},anisotropyVector:{value:new Ee},anisotropyMap:{value:null},anisotropyMapTransform:{value:new de}}]),vertexShader:he.meshphysical_vert,fragmentShader:he.meshphysical_frag};const Nc={r:0,b:0,g:0},As=new Ma,V1=new tn;function k1(o,e,i,s,l,c){const d=new Fe(0);let p=l===!0?0:1,m,h,x=null,S=0,_=null;function M(C){let U=C.isScene===!0?C.background:null;if(U&&U.isTexture){const D=C.backgroundBlurriness>0;U=e.get(U,D)}return U}function b(C){let U=!1;const D=M(C);D===null?y(d,p):D&&D.isColor&&(y(D,1),U=!0);const I=o.xr.getEnvironmentBlendMode();I==="additive"?i.buffers.color.setClear(0,0,0,1,c):I==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(o.autoClear||U)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function w(C,U){const D=M(U);D&&(D.isCubeTexture||D.mapping===Yc)?(h===void 0&&(h=new Xn(new Ko(1,1,1),new Wi({name:"BackgroundCubeMaterial",uniforms:Br(Bi.backgroundCube.uniforms),vertexShader:Bi.backgroundCube.vertexShader,fragmentShader:Bi.backgroundCube.fragmentShader,side:Wn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(I,B,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),As.copy(U.backgroundRotation),As.x*=-1,As.y*=-1,As.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(As.y*=-1,As.z*=-1),h.material.uniforms.envMap.value=D,h.material.uniforms.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=U.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(V1.makeRotationFromEuler(As)),h.material.toneMapped=Ae.getTransfer(D.colorSpace)!==Be,(x!==D||S!==D.version||_!==o.toneMapping)&&(h.material.needsUpdate=!0,x=D,S=D.version,_=o.toneMapping),h.layers.enableAll(),C.unshift(h,h.geometry,h.material,0,0,null)):D&&D.isTexture&&(m===void 0&&(m=new Xn(new Zc(2,2),new Wi({name:"BackgroundMaterial",uniforms:Br(Bi.background.uniforms),vertexShader:Bi.background.vertexShader,fragmentShader:Bi.background.fragmentShader,side:is,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(m)),m.material.uniforms.t2D.value=D,m.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,m.material.toneMapped=Ae.getTransfer(D.colorSpace)!==Be,D.matrixAutoUpdate===!0&&D.updateMatrix(),m.material.uniforms.uvTransform.value.copy(D.matrix),(x!==D||S!==D.version||_!==o.toneMapping)&&(m.material.needsUpdate=!0,x=D,S=D.version,_=o.toneMapping),m.layers.enableAll(),C.unshift(m,m.geometry,m.material,0,0,null))}function y(C,U){C.getRGB(Nc,hv(o)),i.buffers.color.setClear(Nc.r,Nc.g,Nc.b,U,c)}function v(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return d},setClearColor:function(C,U=1){d.set(C),p=U,y(d,p)},getClearAlpha:function(){return p},setClearAlpha:function(C){p=C,y(d,p)},render:b,addToRenderList:w,dispose:v}}function X1(o,e){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),s={},l=_(null);let c=l,d=!1;function p(G,Q,rt,J,Y){let N=!1;const z=S(G,J,rt,Q);c!==z&&(c=z,h(c.object)),N=M(G,J,rt,Y),N&&b(G,J,rt,Y),Y!==null&&e.update(Y,o.ELEMENT_ARRAY_BUFFER),(N||d)&&(d=!1,D(G,Q,rt,J),Y!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function m(){return o.createVertexArray()}function h(G){return o.bindVertexArray(G)}function x(G){return o.deleteVertexArray(G)}function S(G,Q,rt,J){const Y=J.wireframe===!0;let N=s[Q.id];N===void 0&&(N={},s[Q.id]=N);const z=G.isInstancedMesh===!0?G.id:0;let ot=N[z];ot===void 0&&(ot={},N[z]=ot);let ht=ot[rt.id];ht===void 0&&(ht={},ot[rt.id]=ht);let yt=ht[Y];return yt===void 0&&(yt=_(m()),ht[Y]=yt),yt}function _(G){const Q=[],rt=[],J=[];for(let Y=0;Y<i;Y++)Q[Y]=0,rt[Y]=0,J[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Q,enabledAttributes:rt,attributeDivisors:J,object:G,attributes:{},index:null}}function M(G,Q,rt,J){const Y=c.attributes,N=Q.attributes;let z=0;const ot=rt.getAttributes();for(const ht in ot)if(ot[ht].location>=0){const P=Y[ht];let j=N[ht];if(j===void 0&&(ht==="instanceMatrix"&&G.instanceMatrix&&(j=G.instanceMatrix),ht==="instanceColor"&&G.instanceColor&&(j=G.instanceColor)),P===void 0||P.attribute!==j||j&&P.data!==j.data)return!0;z++}return c.attributesNum!==z||c.index!==J}function b(G,Q,rt,J){const Y={},N=Q.attributes;let z=0;const ot=rt.getAttributes();for(const ht in ot)if(ot[ht].location>=0){let P=N[ht];P===void 0&&(ht==="instanceMatrix"&&G.instanceMatrix&&(P=G.instanceMatrix),ht==="instanceColor"&&G.instanceColor&&(P=G.instanceColor));const j={};j.attribute=P,P&&P.data&&(j.data=P.data),Y[ht]=j,z++}c.attributes=Y,c.attributesNum=z,c.index=J}function w(){const G=c.newAttributes;for(let Q=0,rt=G.length;Q<rt;Q++)G[Q]=0}function y(G){v(G,0)}function v(G,Q){const rt=c.newAttributes,J=c.enabledAttributes,Y=c.attributeDivisors;rt[G]=1,J[G]===0&&(o.enableVertexAttribArray(G),J[G]=1),Y[G]!==Q&&(o.vertexAttribDivisor(G,Q),Y[G]=Q)}function C(){const G=c.newAttributes,Q=c.enabledAttributes;for(let rt=0,J=Q.length;rt<J;rt++)Q[rt]!==G[rt]&&(o.disableVertexAttribArray(rt),Q[rt]=0)}function U(G,Q,rt,J,Y,N,z){z===!0?o.vertexAttribIPointer(G,Q,rt,Y,N):o.vertexAttribPointer(G,Q,rt,J,Y,N)}function D(G,Q,rt,J){w();const Y=J.attributes,N=rt.getAttributes(),z=Q.defaultAttributeValues;for(const ot in N){const ht=N[ot];if(ht.location>=0){let yt=Y[ot];if(yt===void 0&&(ot==="instanceMatrix"&&G.instanceMatrix&&(yt=G.instanceMatrix),ot==="instanceColor"&&G.instanceColor&&(yt=G.instanceColor)),yt!==void 0){const P=yt.normalized,j=yt.itemSize,vt=e.get(yt);if(vt===void 0)continue;const Rt=vt.buffer,Bt=vt.type,at=vt.bytesPerElement,xt=Bt===o.INT||Bt===o.UNSIGNED_INT||yt.gpuType===Fh;if(yt.isInterleavedBufferAttribute){const Tt=yt.data,kt=Tt.stride,Kt=yt.offset;if(Tt.isInstancedInterleavedBuffer){for(let $t=0;$t<ht.locationSize;$t++)v(ht.location+$t,Tt.meshPerAttribute);G.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=Tt.meshPerAttribute*Tt.count)}else for(let $t=0;$t<ht.locationSize;$t++)y(ht.location+$t);o.bindBuffer(o.ARRAY_BUFFER,Rt);for(let $t=0;$t<ht.locationSize;$t++)U(ht.location+$t,j/ht.locationSize,Bt,P,kt*at,(Kt+j/ht.locationSize*$t)*at,xt)}else{if(yt.isInstancedBufferAttribute){for(let Tt=0;Tt<ht.locationSize;Tt++)v(ht.location+Tt,yt.meshPerAttribute);G.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=yt.meshPerAttribute*yt.count)}else for(let Tt=0;Tt<ht.locationSize;Tt++)y(ht.location+Tt);o.bindBuffer(o.ARRAY_BUFFER,Rt);for(let Tt=0;Tt<ht.locationSize;Tt++)U(ht.location+Tt,j/ht.locationSize,Bt,P,j*at,j/ht.locationSize*Tt*at,xt)}}else if(z!==void 0){const P=z[ot];if(P!==void 0)switch(P.length){case 2:o.vertexAttrib2fv(ht.location,P);break;case 3:o.vertexAttrib3fv(ht.location,P);break;case 4:o.vertexAttrib4fv(ht.location,P);break;default:o.vertexAttrib1fv(ht.location,P)}}}}C()}function I(){L();for(const G in s){const Q=s[G];for(const rt in Q){const J=Q[rt];for(const Y in J){const N=J[Y];for(const z in N)x(N[z].object),delete N[z];delete J[Y]}}delete s[G]}}function B(G){if(s[G.id]===void 0)return;const Q=s[G.id];for(const rt in Q){const J=Q[rt];for(const Y in J){const N=J[Y];for(const z in N)x(N[z].object),delete N[z];delete J[Y]}}delete s[G.id]}function F(G){for(const Q in s){const rt=s[Q];for(const J in rt){const Y=rt[J];if(Y[G.id]===void 0)continue;const N=Y[G.id];for(const z in N)x(N[z].object),delete N[z];delete Y[G.id]}}}function T(G){for(const Q in s){const rt=s[Q],J=G.isInstancedMesh===!0?G.id:0,Y=rt[J];if(Y!==void 0){for(const N in Y){const z=Y[N];for(const ot in z)x(z[ot].object),delete z[ot];delete Y[N]}delete rt[J],Object.keys(rt).length===0&&delete s[Q]}}}function L(){lt(),d=!0,c!==l&&(c=l,h(c.object))}function lt(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:p,reset:L,resetDefaultState:lt,dispose:I,releaseStatesOfGeometry:B,releaseStatesOfObject:T,releaseStatesOfProgram:F,initAttributes:w,enableAttribute:y,disableUnusedAttributes:C}}function W1(o,e,i){let s;function l(h){s=h}function c(h,x){o.drawArrays(s,h,x),i.update(x,s,1)}function d(h,x,S){S!==0&&(o.drawArraysInstanced(s,h,x,S),i.update(x,s,S))}function p(h,x,S){if(S===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,h,0,x,0,S);let M=0;for(let b=0;b<S;b++)M+=x[b];i.update(M,s,1)}function m(h,x,S,_){if(S===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let b=0;b<h.length;b++)d(h[b],x[b],_[b]);else{M.multiDrawArraysInstancedWEBGL(s,h,0,x,0,_,0,S);let b=0;for(let w=0;w<S;w++)b+=x[w]*_[w];i.update(b,s,1)}}this.setMode=l,this.render=c,this.renderInstances=d,this.renderMultiDraw=p,this.renderMultiDrawInstances=m}function q1(o,e,i,s){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");l=o.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function d(F){return!(F!==Ci&&s.convert(F)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function p(F){const T=F===Sa&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(F!==gi&&s.convert(F)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==Ii&&!T)}function m(F){if(F==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=i.precision!==void 0?i.precision:"highp";const x=m(h);x!==h&&(ae("WebGLRenderer:",h,"not supported, using",x,"instead."),h=x);const S=i.logarithmicDepthBuffer===!0,_=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),M=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),b=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=o.getParameter(o.MAX_TEXTURE_SIZE),y=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),v=o.getParameter(o.MAX_VERTEX_ATTRIBS),C=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),U=o.getParameter(o.MAX_VARYING_VECTORS),D=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),I=o.getParameter(o.MAX_SAMPLES),B=o.getParameter(o.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:d,textureTypeReadable:p,precision:h,logarithmicDepthBuffer:S,reversedDepthBuffer:_,maxTextures:M,maxVertexTextures:b,maxTextureSize:w,maxCubemapSize:y,maxAttributes:v,maxVertexUniforms:C,maxVaryings:U,maxFragmentUniforms:D,maxSamples:I,samples:B}}function Y1(o){const e=this;let i=null,s=0,l=!1,c=!1;const d=new Cs,p=new de,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(S,_){const M=S.length!==0||_||s!==0||l;return l=_,s=S.length,M},this.beginShadows=function(){c=!0,x(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(S,_){i=x(S,_,0)},this.setState=function(S,_,M){const b=S.clippingPlanes,w=S.clipIntersection,y=S.clipShadows,v=o.get(S);if(!l||b===null||b.length===0||c&&!y)c?x(null):h();else{const C=c?0:s,U=C*4;let D=v.clippingState||null;m.value=D,D=x(b,_,U,M);for(let I=0;I!==U;++I)D[I]=i[I];v.clippingState=D,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=C}};function h(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function x(S,_,M,b){const w=S!==null?S.length:0;let y=null;if(w!==0){if(y=m.value,b!==!0||y===null){const v=M+w*4,C=_.matrixWorldInverse;p.getNormalMatrix(C),(y===null||y.length<v)&&(y=new Float32Array(v));for(let U=0,D=M;U!==w;++U,D+=4)d.copy(S[U]).applyMatrix4(C,p),d.normal.toArray(y,D),y[D+3]=d.constant}m.value=y,m.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,y}}const ns=4,g_=[.125,.215,.35,.446,.526,.582],Us=20,j1=256,Io=new mv,__=new Fe;let zd=null,Bd=0,Fd=0,Id=!1;const Z1=new tt;class v_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,s=.1,l=100,c={}){const{size:d=256,position:p=Z1}=c;zd=this._renderer.getRenderTarget(),Bd=this._renderer.getActiveCubeFace(),Fd=this._renderer.getActiveMipmapLevel(),Id=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,s,l,m,p),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=y_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=S_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(zd,Bd,Fd),this._renderer.xr.enabled=Id,e.scissorTest=!1,Dr(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Os||e.mapping===Or?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),zd=this._renderer.getRenderTarget(),Bd=this._renderer.getActiveCubeFace(),Fd=this._renderer.getActiveMipmapLevel(),Id=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:wn,minFilter:wn,generateMipmaps:!1,type:Sa,format:Ci,colorSpace:zr,depthBuffer:!1},l=x_(e,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=x_(e,i,s);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=K1(c)),this._blurMaterial=J1(c,e,i),this._ggxMaterial=Q1(c,e,i)}return l}_compileMaterial(e){const i=new Xn(new Yn,e);this._renderer.compile(i,Io)}_sceneToCubeUV(e,i,s,l,c){const m=new mi(90,1,i,s),h=[1,-1,1,1,1,1],x=[1,1,1,-1,-1,-1],S=this._renderer,_=S.autoClear,M=S.toneMapping;S.getClearColor(__),S.toneMapping=Gi,S.autoClear=!1,S.state.buffers.depth.getReversed()&&(S.setRenderTarget(l),S.clearDepth(),S.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Xn(new Ko,new Ds({name:"PMREM.Background",side:Wn,depthWrite:!1,depthTest:!1})));const w=this._backgroundBox,y=w.material;let v=!1;const C=e.background;C?C.isColor&&(y.color.copy(C),e.background=null,v=!0):(y.color.copy(__),v=!0);for(let U=0;U<6;U++){const D=U%3;D===0?(m.up.set(0,h[U],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+x[U],c.y,c.z)):D===1?(m.up.set(0,0,h[U]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+x[U],c.z)):(m.up.set(0,h[U],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+x[U]));const I=this._cubeSize;Dr(l,D*I,U>2?I:0,I,I),S.setRenderTarget(l),v&&S.render(w,m),S.render(e,m)}S.toneMapping=M,S.autoClear=_,e.background=C}_textureToCubeUV(e,i){const s=this._renderer,l=e.mapping===Os||e.mapping===Or;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=y_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=S_());const c=l?this._cubemapMaterial:this._equirectMaterial,d=this._lodMeshes[0];d.material=c;const p=c.uniforms;p.envMap.value=e;const m=this._cubeSize;Dr(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(d,Io)}_applyPMREM(e){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(e,c-1,c);i.autoClear=s}_applyGGXFilter(e,i,s){const l=this._renderer,c=this._pingPongRenderTarget,d=this._ggxMaterial,p=this._lodMeshes[s];p.material=d;const m=d.uniforms,h=s/(this._lodMeshes.length-1),x=i/(this._lodMeshes.length-1),S=Math.sqrt(h*h-x*x),_=0+h*1.25,M=S*_,{_lodMax:b}=this,w=this._sizeLods[s],y=3*w*(s>b-ns?s-b+ns:0),v=4*(this._cubeSize-w);m.envMap.value=e.texture,m.roughness.value=M,m.mipInt.value=b-i,Dr(c,y,v,3*w,2*w),l.setRenderTarget(c),l.render(p,Io),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=b-s,Dr(e,y,v,3*w,2*w),l.setRenderTarget(e),l.render(p,Io)}_blur(e,i,s,l,c){const d=this._pingPongRenderTarget;this._halfBlur(e,d,i,s,l,"latitudinal",c),this._halfBlur(d,e,s,s,l,"longitudinal",c)}_halfBlur(e,i,s,l,c,d,p){const m=this._renderer,h=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&Te("blur direction must be either latitudinal or longitudinal!");const x=3,S=this._lodMeshes[l];S.material=h;const _=h.uniforms,M=this._sizeLods[s]-1,b=isFinite(c)?Math.PI/(2*M):2*Math.PI/(2*Us-1),w=c/b,y=isFinite(c)?1+Math.floor(x*w):Us;y>Us&&ae(`sigmaRadians, ${c}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Us}`);const v=[];let C=0;for(let F=0;F<Us;++F){const T=F/w,L=Math.exp(-T*T/2);v.push(L),F===0?C+=L:F<y&&(C+=2*L)}for(let F=0;F<v.length;F++)v[F]=v[F]/C;_.envMap.value=e.texture,_.samples.value=y,_.weights.value=v,_.latitudinal.value=d==="latitudinal",p&&(_.poleAxis.value=p);const{_lodMax:U}=this;_.dTheta.value=b,_.mipInt.value=U-s;const D=this._sizeLods[l],I=3*D*(l>U-ns?l-U+ns:0),B=4*(this._cubeSize-D);Dr(i,I,B,3*D,2*D),m.setRenderTarget(i),m.render(S,Io)}}function K1(o){const e=[],i=[],s=[];let l=o;const c=o-ns+1+g_.length;for(let d=0;d<c;d++){const p=Math.pow(2,l);e.push(p);let m=1/p;d>o-ns?m=g_[d-o+ns-1]:d===0&&(m=0),i.push(m);const h=1/(p-2),x=-h,S=1+h,_=[x,x,S,x,S,S,x,x,S,S,x,S],M=6,b=6,w=3,y=2,v=1,C=new Float32Array(w*b*M),U=new Float32Array(y*b*M),D=new Float32Array(v*b*M);for(let B=0;B<M;B++){const F=B%3*2/3-1,T=B>2?0:-1,L=[F,T,0,F+2/3,T,0,F+2/3,T+1,0,F,T,0,F+2/3,T+1,0,F,T+1,0];C.set(L,w*b*B),U.set(_,y*b*B);const lt=[B,B,B,B,B,B];D.set(lt,v*b*B)}const I=new Yn;I.setAttribute("position",new ki(C,w)),I.setAttribute("uv",new ki(U,y)),I.setAttribute("faceIndex",new ki(D,v)),s.push(new Xn(I,null)),l>ns&&l--}return{lodMeshes:s,sizeLods:e,sigmas:i}}function x_(o,e,i){const s=new Vi(o,e,i);return s.texture.mapping=Yc,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Dr(o,e,i,s,l){o.viewport.set(e,i,s,l),o.scissor.set(e,i,s,l)}function Q1(o,e,i){return new Wi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:j1,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Kc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:va,depthTest:!1,depthWrite:!1})}function J1(o,e,i){const s=new Float32Array(Us),l=new tt(0,1,0);return new Wi({name:"SphericalGaussianBlur",defines:{n:Us,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Kc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:va,depthTest:!1,depthWrite:!1})}function S_(){return new Wi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Kc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:va,depthTest:!1,depthWrite:!1})}function y_(){return new Wi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Kc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:va,depthTest:!1,depthWrite:!1})}function Kc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class _v extends Vi{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},l=[s,s,s,s,s,s];this.texture=new fv(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new Ko(5,5,5),c=new Wi({name:"CubemapFromEquirect",uniforms:Br(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Wn,blending:va});c.uniforms.tEquirect.value=i;const d=new Xn(l,c),p=i.minFilter;return i.minFilter===Ls&&(i.minFilter=wn),new aM(1,10,this).update(e,d),i.minFilter=p,d.geometry.dispose(),d.material.dispose(),this}clear(e,i=!0,s=!0,l=!0){const c=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(i,s,l);e.setRenderTarget(c)}}function $1(o){let e=new WeakMap,i=new WeakMap,s=null;function l(_,M=!1){return _==null?null:M?d(_):c(_)}function c(_){if(_&&_.isTexture){const M=_.mapping;if(M===ld||M===cd)if(e.has(_)){const b=e.get(_).texture;return p(b,_.mapping)}else{const b=_.image;if(b&&b.height>0){const w=new _v(b.height);return w.fromEquirectangularTexture(o,_),e.set(_,w),_.addEventListener("dispose",h),p(w.texture,_.mapping)}else return null}}return _}function d(_){if(_&&_.isTexture){const M=_.mapping,b=M===ld||M===cd,w=M===Os||M===Or;if(b||w){let y=i.get(_);const v=y!==void 0?y.texture.pmremVersion:0;if(_.isRenderTargetTexture&&_.pmremVersion!==v)return s===null&&(s=new v_(o)),y=b?s.fromEquirectangular(_,y):s.fromCubemap(_,y),y.texture.pmremVersion=_.pmremVersion,i.set(_,y),y.texture;if(y!==void 0)return y.texture;{const C=_.image;return b&&C&&C.height>0||w&&C&&m(C)?(s===null&&(s=new v_(o)),y=b?s.fromEquirectangular(_):s.fromCubemap(_),y.texture.pmremVersion=_.pmremVersion,i.set(_,y),_.addEventListener("dispose",x),y.texture):null}}}return _}function p(_,M){return M===ld?_.mapping=Os:M===cd&&(_.mapping=Or),_}function m(_){let M=0;const b=6;for(let w=0;w<b;w++)_[w]!==void 0&&M++;return M===b}function h(_){const M=_.target;M.removeEventListener("dispose",h);const b=e.get(M);b!==void 0&&(e.delete(M),b.dispose())}function x(_){const M=_.target;M.removeEventListener("dispose",x);const b=i.get(M);b!==void 0&&(i.delete(M),b.dispose())}function S(){e=new WeakMap,i=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:l,dispose:S}}function tb(o){const e={};function i(s){if(e[s]!==void 0)return e[s];const l=o.getExtension(s);return e[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&Xc("WebGLRenderer: "+s+" extension not supported."),l}}}function eb(o,e,i,s){const l={},c=new WeakMap;function d(S){const _=S.target;_.index!==null&&e.remove(_.index);for(const b in _.attributes)e.remove(_.attributes[b]);_.removeEventListener("dispose",d),delete l[_.id];const M=c.get(_);M&&(e.remove(M),c.delete(_)),s.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,i.memory.geometries--}function p(S,_){return l[_.id]===!0||(_.addEventListener("dispose",d),l[_.id]=!0,i.memory.geometries++),_}function m(S){const _=S.attributes;for(const M in _)e.update(_[M],o.ARRAY_BUFFER)}function h(S){const _=[],M=S.index,b=S.attributes.position;let w=0;if(b===void 0)return;if(M!==null){const C=M.array;w=M.version;for(let U=0,D=C.length;U<D;U+=3){const I=C[U+0],B=C[U+1],F=C[U+2];_.push(I,B,B,F,F,I)}}else{const C=b.array;w=b.version;for(let U=0,D=C.length/3-1;U<D;U+=3){const I=U+0,B=U+1,F=U+2;_.push(I,B,B,F,F,I)}}const y=new(b.count>=65535?lv:ov)(_,1);y.version=w;const v=c.get(S);v&&e.remove(v),c.set(S,y)}function x(S){const _=c.get(S);if(_){const M=S.index;M!==null&&_.version<M.version&&h(S)}else h(S);return c.get(S)}return{get:p,update:m,getWireframeAttribute:x}}function nb(o,e,i){let s;function l(_){s=_}let c,d;function p(_){c=_.type,d=_.bytesPerElement}function m(_,M){o.drawElements(s,M,c,_*d),i.update(M,s,1)}function h(_,M,b){b!==0&&(o.drawElementsInstanced(s,M,c,_*d,b),i.update(M,s,b))}function x(_,M,b){if(b===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,M,0,c,_,0,b);let y=0;for(let v=0;v<b;v++)y+=M[v];i.update(y,s,1)}function S(_,M,b,w){if(b===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let v=0;v<_.length;v++)h(_[v]/d,M[v],w[v]);else{y.multiDrawElementsInstancedWEBGL(s,M,0,c,_,0,w,0,b);let v=0;for(let C=0;C<b;C++)v+=M[C]*w[C];i.update(v,s,1)}}this.setMode=l,this.setIndex=p,this.render=m,this.renderInstances=h,this.renderMultiDraw=x,this.renderMultiDrawInstances=S}function ib(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,d,p){switch(i.calls++,d){case o.TRIANGLES:i.triangles+=p*(c/3);break;case o.LINES:i.lines+=p*(c/2);break;case o.LINE_STRIP:i.lines+=p*(c-1);break;case o.LINE_LOOP:i.lines+=p*c;break;case o.POINTS:i.points+=p*c;break;default:Te("WebGLInfo: Unknown draw mode:",d);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:s}}function ab(o,e,i){const s=new WeakMap,l=new an;function c(d,p,m){const h=d.morphTargetInfluences,x=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,S=x!==void 0?x.length:0;let _=s.get(p);if(_===void 0||_.count!==S){let lt=function(){T.dispose(),s.delete(p),p.removeEventListener("dispose",lt)};var M=lt;_!==void 0&&_.texture.dispose();const b=p.morphAttributes.position!==void 0,w=p.morphAttributes.normal!==void 0,y=p.morphAttributes.color!==void 0,v=p.morphAttributes.position||[],C=p.morphAttributes.normal||[],U=p.morphAttributes.color||[];let D=0;b===!0&&(D=1),w===!0&&(D=2),y===!0&&(D=3);let I=p.attributes.position.count*D,B=1;I>e.maxTextureSize&&(B=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const F=new Float32Array(I*B*4*S),T=new sv(F,I,B,S);T.type=Ii,T.needsUpdate=!0;const L=D*4;for(let G=0;G<S;G++){const Q=v[G],rt=C[G],J=U[G],Y=I*B*4*G;for(let N=0;N<Q.count;N++){const z=N*L;b===!0&&(l.fromBufferAttribute(Q,N),F[Y+z+0]=l.x,F[Y+z+1]=l.y,F[Y+z+2]=l.z,F[Y+z+3]=0),w===!0&&(l.fromBufferAttribute(rt,N),F[Y+z+4]=l.x,F[Y+z+5]=l.y,F[Y+z+6]=l.z,F[Y+z+7]=0),y===!0&&(l.fromBufferAttribute(J,N),F[Y+z+8]=l.x,F[Y+z+9]=l.y,F[Y+z+10]=l.z,F[Y+z+11]=J.itemSize===4?l.w:1)}}_={count:S,texture:T,size:new Ee(I,B)},s.set(p,_),p.addEventListener("dispose",lt)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",d.morphTexture,i);else{let b=0;for(let y=0;y<h.length;y++)b+=h[y];const w=p.morphTargetsRelative?1:1-b;m.getUniforms().setValue(o,"morphTargetBaseInfluence",w),m.getUniforms().setValue(o,"morphTargetInfluences",h)}m.getUniforms().setValue(o,"morphTargetsTexture",_.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",_.size)}return{update:c}}function sb(o,e,i,s,l){let c=new WeakMap;function d(h){const x=l.render.frame,S=h.geometry,_=e.get(h,S);if(c.get(_)!==x&&(e.update(_),c.set(_,x)),h.isInstancedMesh&&(h.hasEventListener("dispose",m)===!1&&h.addEventListener("dispose",m),c.get(h)!==x&&(i.update(h.instanceMatrix,o.ARRAY_BUFFER),h.instanceColor!==null&&i.update(h.instanceColor,o.ARRAY_BUFFER),c.set(h,x))),h.isSkinnedMesh){const M=h.skeleton;c.get(M)!==x&&(M.update(),c.set(M,x))}return _}function p(){c=new WeakMap}function m(h){const x=h.target;x.removeEventListener("dispose",m),s.releaseStatesOfObject(x),i.remove(x.instanceMatrix),x.instanceColor!==null&&i.remove(x.instanceColor)}return{update:d,dispose:p}}const rb={[k_]:"LINEAR_TONE_MAPPING",[X_]:"REINHARD_TONE_MAPPING",[W_]:"CINEON_TONE_MAPPING",[q_]:"ACES_FILMIC_TONE_MAPPING",[j_]:"AGX_TONE_MAPPING",[Z_]:"NEUTRAL_TONE_MAPPING",[Y_]:"CUSTOM_TONE_MAPPING"};function ob(o,e,i,s,l){const c=new Vi(e,i,{type:o,depthBuffer:s,stencilBuffer:l}),d=new Vi(e,i,{type:Sa,depthBuffer:!1,stencilBuffer:!1}),p=new Yn;p.setAttribute("position",new gn([-1,3,0,-1,-1,0,3,-1,0],3)),p.setAttribute("uv",new gn([0,2,0,0,2,0],2));const m=new eM({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new Xn(p,m),x=new mv(-1,1,1,-1,0,1);let S=null,_=null,M=!1,b,w=null,y=[],v=!1;this.setSize=function(C,U){c.setSize(C,U),d.setSize(C,U);for(let D=0;D<y.length;D++){const I=y[D];I.setSize&&I.setSize(C,U)}},this.setEffects=function(C){y=C,v=y.length>0&&y[0].isRenderPass===!0;const U=c.width,D=c.height;for(let I=0;I<y.length;I++){const B=y[I];B.setSize&&B.setSize(U,D)}},this.begin=function(C,U){if(M||C.toneMapping===Gi&&y.length===0)return!1;if(w=U,U!==null){const D=U.width,I=U.height;(c.width!==D||c.height!==I)&&this.setSize(D,I)}return v===!1&&C.setRenderTarget(c),b=C.toneMapping,C.toneMapping=Gi,!0},this.hasRenderPass=function(){return v},this.end=function(C,U){C.toneMapping=b,M=!0;let D=c,I=d;for(let B=0;B<y.length;B++){const F=y[B];if(F.enabled!==!1&&(F.render(C,I,D,U),F.needsSwap!==!1)){const T=D;D=I,I=T}}if(S!==C.outputColorSpace||_!==C.toneMapping){S=C.outputColorSpace,_=C.toneMapping,m.defines={},Ae.getTransfer(S)===Be&&(m.defines.SRGB_TRANSFER="");const B=rb[_];B&&(m.defines[B]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=D.texture,C.setRenderTarget(w),C.render(h,x),w=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){c.dispose(),d.dispose(),p.dispose(),m.dispose()}}const vv=new zn,Oh=new qo(1,1),xv=new sv,Sv=new Dy,yv=new fv,M_=[],E_=[],b_=new Float32Array(16),T_=new Float32Array(9),A_=new Float32Array(4);function Hr(o,e,i){const s=o[0];if(s<=0||s>0)return o;const l=e*i;let c=M_[l];if(c===void 0&&(c=new Float32Array(l),M_[l]=c),e!==0){s.toArray(c,0);for(let d=1,p=0;d!==e;++d)p+=i,o[d].toArray(c,p)}return c}function _n(o,e){if(o.length!==e.length)return!1;for(let i=0,s=o.length;i<s;i++)if(o[i]!==e[i])return!1;return!0}function vn(o,e){for(let i=0,s=e.length;i<s;i++)o[i]=e[i]}function Qc(o,e){let i=E_[e];i===void 0&&(i=new Int32Array(e),E_[e]=i);for(let s=0;s!==e;++s)i[s]=o.allocateTextureUnit();return i}function lb(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function cb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(_n(i,e))return;o.uniform2fv(this.addr,e),vn(i,e)}}function ub(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(_n(i,e))return;o.uniform3fv(this.addr,e),vn(i,e)}}function fb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(_n(i,e))return;o.uniform4fv(this.addr,e),vn(i,e)}}function db(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(_n(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),vn(i,e)}else{if(_n(i,s))return;A_.set(s),o.uniformMatrix2fv(this.addr,!1,A_),vn(i,s)}}function hb(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(_n(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),vn(i,e)}else{if(_n(i,s))return;T_.set(s),o.uniformMatrix3fv(this.addr,!1,T_),vn(i,s)}}function pb(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(_n(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),vn(i,e)}else{if(_n(i,s))return;b_.set(s),o.uniformMatrix4fv(this.addr,!1,b_),vn(i,s)}}function mb(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function gb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(_n(i,e))return;o.uniform2iv(this.addr,e),vn(i,e)}}function _b(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(_n(i,e))return;o.uniform3iv(this.addr,e),vn(i,e)}}function vb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(_n(i,e))return;o.uniform4iv(this.addr,e),vn(i,e)}}function xb(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function Sb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(_n(i,e))return;o.uniform2uiv(this.addr,e),vn(i,e)}}function yb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(_n(i,e))return;o.uniform3uiv(this.addr,e),vn(i,e)}}function Mb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(_n(i,e))return;o.uniform4uiv(this.addr,e),vn(i,e)}}function Eb(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l);let c;this.type===o.SAMPLER_2D_SHADOW?(Oh.compareFunction=i.isReversedDepthBuffer()?Wh:Xh,c=Oh):c=vv,i.setTexture2D(e||c,l)}function bb(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(e||Sv,l)}function Tb(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(e||yv,l)}function Ab(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(e||xv,l)}function Rb(o){switch(o){case 5126:return lb;case 35664:return cb;case 35665:return ub;case 35666:return fb;case 35674:return db;case 35675:return hb;case 35676:return pb;case 5124:case 35670:return mb;case 35667:case 35671:return gb;case 35668:case 35672:return _b;case 35669:case 35673:return vb;case 5125:return xb;case 36294:return Sb;case 36295:return yb;case 36296:return Mb;case 35678:case 36198:case 36298:case 36306:case 35682:return Eb;case 35679:case 36299:case 36307:return bb;case 35680:case 36300:case 36308:case 36293:return Tb;case 36289:case 36303:case 36311:case 36292:return Ab}}function Cb(o,e){o.uniform1fv(this.addr,e)}function wb(o,e){const i=Hr(e,this.size,2);o.uniform2fv(this.addr,i)}function Db(o,e){const i=Hr(e,this.size,3);o.uniform3fv(this.addr,i)}function Ub(o,e){const i=Hr(e,this.size,4);o.uniform4fv(this.addr,i)}function Lb(o,e){const i=Hr(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function Nb(o,e){const i=Hr(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function Ob(o,e){const i=Hr(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function Pb(o,e){o.uniform1iv(this.addr,e)}function zb(o,e){o.uniform2iv(this.addr,e)}function Bb(o,e){o.uniform3iv(this.addr,e)}function Fb(o,e){o.uniform4iv(this.addr,e)}function Ib(o,e){o.uniform1uiv(this.addr,e)}function Hb(o,e){o.uniform2uiv(this.addr,e)}function Gb(o,e){o.uniform3uiv(this.addr,e)}function Vb(o,e){o.uniform4uiv(this.addr,e)}function kb(o,e,i){const s=this.cache,l=e.length,c=Qc(i,l);_n(s,c)||(o.uniform1iv(this.addr,c),vn(s,c));let d;this.type===o.SAMPLER_2D_SHADOW?d=Oh:d=vv;for(let p=0;p!==l;++p)i.setTexture2D(e[p]||d,c[p])}function Xb(o,e,i){const s=this.cache,l=e.length,c=Qc(i,l);_n(s,c)||(o.uniform1iv(this.addr,c),vn(s,c));for(let d=0;d!==l;++d)i.setTexture3D(e[d]||Sv,c[d])}function Wb(o,e,i){const s=this.cache,l=e.length,c=Qc(i,l);_n(s,c)||(o.uniform1iv(this.addr,c),vn(s,c));for(let d=0;d!==l;++d)i.setTextureCube(e[d]||yv,c[d])}function qb(o,e,i){const s=this.cache,l=e.length,c=Qc(i,l);_n(s,c)||(o.uniform1iv(this.addr,c),vn(s,c));for(let d=0;d!==l;++d)i.setTexture2DArray(e[d]||xv,c[d])}function Yb(o){switch(o){case 5126:return Cb;case 35664:return wb;case 35665:return Db;case 35666:return Ub;case 35674:return Lb;case 35675:return Nb;case 35676:return Ob;case 5124:case 35670:return Pb;case 35667:case 35671:return zb;case 35668:case 35672:return Bb;case 35669:case 35673:return Fb;case 5125:return Ib;case 36294:return Hb;case 36295:return Gb;case 36296:return Vb;case 35678:case 36198:case 36298:case 36306:case 35682:return kb;case 35679:case 36299:case 36307:return Xb;case 35680:case 36300:case 36308:case 36293:return Wb;case 36289:case 36303:case 36311:case 36292:return qb}}class jb{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.setValue=Rb(i.type)}}class Zb{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=Yb(i.type)}}class Kb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,s){const l=this.seq;for(let c=0,d=l.length;c!==d;++c){const p=l[c];p.setValue(e,i[p.id],s)}}}const Hd=/(\w+)(\])?(\[|\.)?/g;function R_(o,e){o.seq.push(e),o.map[e.id]=e}function Qb(o,e,i){const s=o.name,l=s.length;for(Hd.lastIndex=0;;){const c=Hd.exec(s),d=Hd.lastIndex;let p=c[1];const m=c[2]==="]",h=c[3];if(m&&(p=p|0),h===void 0||h==="["&&d+2===l){R_(i,h===void 0?new jb(p,o,e):new Zb(p,o,e));break}else{let S=i.map[p];S===void 0&&(S=new Kb(p),R_(i,S)),i=S}}}class Hc{constructor(e,i){this.seq=[],this.map={};const s=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let d=0;d<s;++d){const p=e.getActiveUniform(i,d),m=e.getUniformLocation(i,p.name);Qb(p,m,this)}const l=[],c=[];for(const d of this.seq)d.type===e.SAMPLER_2D_SHADOW||d.type===e.SAMPLER_CUBE_SHADOW||d.type===e.SAMPLER_2D_ARRAY_SHADOW?l.push(d):c.push(d);l.length>0&&(this.seq=l.concat(c))}setValue(e,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(e,s,l)}setOptional(e,i,s){const l=i[s];l!==void 0&&this.setValue(e,s,l)}static upload(e,i,s,l){for(let c=0,d=i.length;c!==d;++c){const p=i[c],m=s[p.id];m.needsUpdate!==!1&&p.setValue(e,m.value,l)}}static seqWithValue(e,i){const s=[];for(let l=0,c=e.length;l!==c;++l){const d=e[l];d.id in i&&s.push(d)}return s}}function C_(o,e,i){const s=o.createShader(e);return o.shaderSource(s,i),o.compileShader(s),s}const Jb=37297;let $b=0;function tT(o,e){const i=o.split(`
`),s=[],l=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let d=l;d<c;d++){const p=d+1;s.push(`${p===e?">":" "} ${p}: ${i[d]}`)}return s.join(`
`)}const w_=new de;function eT(o){Ae._getMatrix(w_,Ae.workingColorSpace,o);const e=`mat3( ${w_.elements.map(i=>i.toFixed(4))} )`;switch(Ae.getTransfer(o)){case Gc:return[e,"LinearTransferOETF"];case Be:return[e,"sRGBTransferOETF"];default:return ae("WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function D_(o,e,i){const s=o.getShaderParameter(e,o.COMPILE_STATUS),c=(o.getShaderInfoLog(e)||"").trim();if(s&&c==="")return"";const d=/ERROR: 0:(\d+)/.exec(c);if(d){const p=parseInt(d[1]);return i.toUpperCase()+`

`+c+`

`+tT(o.getShaderSource(e),p)}else return c}function nT(o,e){const i=eT(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const iT={[k_]:"Linear",[X_]:"Reinhard",[W_]:"Cineon",[q_]:"ACESFilmic",[j_]:"AgX",[Z_]:"Neutral",[Y_]:"Custom"};function aT(o,e){const i=iT[e];return i===void 0?(ae("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+o+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Oc=new tt;function sT(){Ae.getLuminanceCoefficients(Oc);const o=Oc.x.toFixed(4),e=Oc.y.toFixed(4),i=Oc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function rT(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Vo).join(`
`)}function oT(o){const e=[];for(const i in o){const s=o[i];s!==!1&&e.push("#define "+i+" "+s)}return e.join(`
`)}function lT(o,e){const i={},s=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=o.getActiveAttrib(e,l),d=c.name;let p=1;c.type===o.FLOAT_MAT2&&(p=2),c.type===o.FLOAT_MAT3&&(p=3),c.type===o.FLOAT_MAT4&&(p=4),i[d]={type:c.type,location:o.getAttribLocation(e,d),locationSize:p}}return i}function Vo(o){return o!==""}function U_(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function L_(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const cT=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ph(o){return o.replace(cT,fT)}const uT=new Map;function fT(o,e){let i=he[e];if(i===void 0){const s=uT.get(e);if(s!==void 0)i=he[s],ae('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return Ph(i)}const dT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function N_(o){return o.replace(dT,hT)}function hT(o,e,i,s){let l="";for(let c=parseInt(e);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function O_(o){let e=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const pT={[Pc]:"SHADOWMAP_TYPE_PCF",[Go]:"SHADOWMAP_TYPE_VSM"};function mT(o){return pT[o.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const gT={[Os]:"ENVMAP_TYPE_CUBE",[Or]:"ENVMAP_TYPE_CUBE",[Yc]:"ENVMAP_TYPE_CUBE_UV"};function _T(o){return o.envMap===!1?"ENVMAP_TYPE_CUBE":gT[o.envMapMode]||"ENVMAP_TYPE_CUBE"}const vT={[Or]:"ENVMAP_MODE_REFRACTION"};function xT(o){return o.envMap===!1?"ENVMAP_MODE_REFLECTION":vT[o.envMapMode]||"ENVMAP_MODE_REFLECTION"}const ST={[V_]:"ENVMAP_BLENDING_MULTIPLY",[ly]:"ENVMAP_BLENDING_MIX",[cy]:"ENVMAP_BLENDING_ADD"};function yT(o){return o.envMap===!1?"ENVMAP_BLENDING_NONE":ST[o.combine]||"ENVMAP_BLENDING_NONE"}function MT(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function ET(o,e,i,s){const l=o.getContext(),c=i.defines;let d=i.vertexShader,p=i.fragmentShader;const m=mT(i),h=_T(i),x=xT(i),S=yT(i),_=MT(i),M=rT(i),b=oT(c),w=l.createProgram();let y,v,C=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(Vo).join(`
`),y.length>0&&(y+=`
`),v=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(Vo).join(`
`),v.length>0&&(v+=`
`)):(y=[O_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+x:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Vo).join(`
`),v=[O_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+h:"",i.envMap?"#define "+x:"",i.envMap?"#define "+S:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Gi?"#define TONE_MAPPING":"",i.toneMapping!==Gi?he.tonemapping_pars_fragment:"",i.toneMapping!==Gi?aT("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",he.colorspace_pars_fragment,nT("linearToOutputTexel",i.outputColorSpace),sT(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Vo).join(`
`)),d=Ph(d),d=U_(d,i),d=L_(d,i),p=Ph(p),p=U_(p,i),p=L_(p,i),d=N_(d),p=N_(p),i.isRawShaderMaterial!==!0&&(C=`#version 300 es
`,y=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,v=["#define varying in",i.glslVersion===qg?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===qg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const U=C+y+d,D=C+v+p,I=C_(l,l.VERTEX_SHADER,U),B=C_(l,l.FRAGMENT_SHADER,D);l.attachShader(w,I),l.attachShader(w,B),i.index0AttributeName!==void 0?l.bindAttribLocation(w,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(w,0,"position"),l.linkProgram(w);function F(G){if(o.debug.checkShaderErrors){const Q=l.getProgramInfoLog(w)||"",rt=l.getShaderInfoLog(I)||"",J=l.getShaderInfoLog(B)||"",Y=Q.trim(),N=rt.trim(),z=J.trim();let ot=!0,ht=!0;if(l.getProgramParameter(w,l.LINK_STATUS)===!1)if(ot=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,w,I,B);else{const yt=D_(l,I,"vertex"),P=D_(l,B,"fragment");Te("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(w,l.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+Y+`
`+yt+`
`+P)}else Y!==""?ae("WebGLProgram: Program Info Log:",Y):(N===""||z==="")&&(ht=!1);ht&&(G.diagnostics={runnable:ot,programLog:Y,vertexShader:{log:N,prefix:y},fragmentShader:{log:z,prefix:v}})}l.deleteShader(I),l.deleteShader(B),T=new Hc(l,w),L=lT(l,w)}let T;this.getUniforms=function(){return T===void 0&&F(this),T};let L;this.getAttributes=function(){return L===void 0&&F(this),L};let lt=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return lt===!1&&(lt=l.getProgramParameter(w,Jb)),lt},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(w),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=$b++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=I,this.fragmentShader=B,this}let bT=0;class TT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,s=e.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),d=this._getShaderCacheForMaterial(e);return d.has(l)===!1&&(d.add(l),l.usedTimes++),d.has(c)===!1&&(d.add(c),c.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let s=i.get(e);return s===void 0&&(s=new Set,i.set(e,s)),s}_getShaderStage(e){const i=this.shaderCache;let s=i.get(e);return s===void 0&&(s=new AT(e),i.set(e,s)),s}}class AT{constructor(e){this.id=bT++,this.code=e,this.usedTimes=0}}function RT(o,e,i,s,l,c){const d=new Yh,p=new TT,m=new Set,h=[],x=new Map,S=s.logarithmicDepthBuffer;let _=s.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(T){return m.add(T),T===0?"uv":`uv${T}`}function w(T,L,lt,G,Q){const rt=G.fog,J=Q.geometry,Y=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?G.environment:null,N=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,z=e.get(T.envMap||Y,N),ot=z&&z.mapping===Yc?z.image.height:null,ht=M[T.type];T.precision!==null&&(_=s.getMaxPrecision(T.precision),_!==T.precision&&ae("WebGLProgram.getParameters:",T.precision,"not supported, using",_,"instead."));const yt=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,P=yt!==void 0?yt.length:0;let j=0;J.morphAttributes.position!==void 0&&(j=1),J.morphAttributes.normal!==void 0&&(j=2),J.morphAttributes.color!==void 0&&(j=3);let vt,Rt,Bt,at;if(ht){const be=Bi[ht];vt=be.vertexShader,Rt=be.fragmentShader}else vt=T.vertexShader,Rt=T.fragmentShader,p.update(T),Bt=p.getVertexShaderID(T),at=p.getFragmentShaderID(T);const xt=o.getRenderTarget(),Tt=o.state.buffers.depth.getReversed(),kt=Q.isInstancedMesh===!0,Kt=Q.isBatchedMesh===!0,$t=!!T.map,Ke=!!T.matcap,_e=!!z,pe=!!T.aoMap,De=!!T.lightMap,oe=!!T.bumpMap,Ze=!!T.normalMap,V=!!T.displacementMap,We=!!T.emissiveMap,Me=!!T.metalnessMap,Le=!!T.roughnessMap,qt=T.anisotropy>0,O=T.clearcoat>0,E=T.dispersion>0,q=T.iridescence>0,mt=T.sheen>0,St=T.transmission>0,dt=qt&&!!T.anisotropyMap,Xt=O&&!!T.clearcoatMap,wt=O&&!!T.clearcoatNormalMap,Zt=O&&!!T.clearcoatRoughnessMap,te=q&&!!T.iridescenceMap,bt=q&&!!T.iridescenceThicknessMap,Mt=mt&&!!T.sheenColorMap,Ot=mt&&!!T.sheenRoughnessMap,Nt=!!T.specularMap,Pt=!!T.specularColorMap,ce=!!T.specularIntensityMap,W=St&&!!T.transmissionMap,Ct=St&&!!T.thicknessMap,At=!!T.gradientMap,zt=!!T.alphaMap,Et=T.alphaTest>0,ft=!!T.alphaHash,It=!!T.extensions;let ne=Gi;T.toneMapped&&(xt===null||xt.isXRRenderTarget===!0)&&(ne=o.toneMapping);const Oe={shaderID:ht,shaderType:T.type,shaderName:T.name,vertexShader:vt,fragmentShader:Rt,defines:T.defines,customVertexShaderID:Bt,customFragmentShaderID:at,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:_,batching:Kt,batchingColor:Kt&&Q._colorsTexture!==null,instancing:kt,instancingColor:kt&&Q.instanceColor!==null,instancingMorph:kt&&Q.morphTexture!==null,outputColorSpace:xt===null?o.outputColorSpace:xt.isXRRenderTarget===!0?xt.texture.colorSpace:zr,alphaToCoverage:!!T.alphaToCoverage,map:$t,matcap:Ke,envMap:_e,envMapMode:_e&&z.mapping,envMapCubeUVHeight:ot,aoMap:pe,lightMap:De,bumpMap:oe,normalMap:Ze,displacementMap:V,emissiveMap:We,normalMapObjectSpace:Ze&&T.normalMapType===hy,normalMapTangentSpace:Ze&&T.normalMapType===dy,metalnessMap:Me,roughnessMap:Le,anisotropy:qt,anisotropyMap:dt,clearcoat:O,clearcoatMap:Xt,clearcoatNormalMap:wt,clearcoatRoughnessMap:Zt,dispersion:E,iridescence:q,iridescenceMap:te,iridescenceThicknessMap:bt,sheen:mt,sheenColorMap:Mt,sheenRoughnessMap:Ot,specularMap:Nt,specularColorMap:Pt,specularIntensityMap:ce,transmission:St,transmissionMap:W,thicknessMap:Ct,gradientMap:At,opaque:T.transparent===!1&&T.blending===Ur&&T.alphaToCoverage===!1,alphaMap:zt,alphaTest:Et,alphaHash:ft,combine:T.combine,mapUv:$t&&b(T.map.channel),aoMapUv:pe&&b(T.aoMap.channel),lightMapUv:De&&b(T.lightMap.channel),bumpMapUv:oe&&b(T.bumpMap.channel),normalMapUv:Ze&&b(T.normalMap.channel),displacementMapUv:V&&b(T.displacementMap.channel),emissiveMapUv:We&&b(T.emissiveMap.channel),metalnessMapUv:Me&&b(T.metalnessMap.channel),roughnessMapUv:Le&&b(T.roughnessMap.channel),anisotropyMapUv:dt&&b(T.anisotropyMap.channel),clearcoatMapUv:Xt&&b(T.clearcoatMap.channel),clearcoatNormalMapUv:wt&&b(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Zt&&b(T.clearcoatRoughnessMap.channel),iridescenceMapUv:te&&b(T.iridescenceMap.channel),iridescenceThicknessMapUv:bt&&b(T.iridescenceThicknessMap.channel),sheenColorMapUv:Mt&&b(T.sheenColorMap.channel),sheenRoughnessMapUv:Ot&&b(T.sheenRoughnessMap.channel),specularMapUv:Nt&&b(T.specularMap.channel),specularColorMapUv:Pt&&b(T.specularColorMap.channel),specularIntensityMapUv:ce&&b(T.specularIntensityMap.channel),transmissionMapUv:W&&b(T.transmissionMap.channel),thicknessMapUv:Ct&&b(T.thicknessMap.channel),alphaMapUv:zt&&b(T.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(Ze||qt),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:Q.isPoints===!0&&!!J.attributes.uv&&($t||zt),fog:!!rt,useFog:T.fog===!0,fogExp2:!!rt&&rt.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||J.attributes.normal===void 0&&Ze===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:S,reversedDepthBuffer:Tt,skinning:Q.isSkinnedMesh===!0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:P,morphTextureStride:j,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numLightProbes:L.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:T.dithering,shadowMapEnabled:o.shadowMap.enabled&&lt.length>0,shadowMapType:o.shadowMap.type,toneMapping:ne,decodeVideoTexture:$t&&T.map.isVideoTexture===!0&&Ae.getTransfer(T.map.colorSpace)===Be,decodeVideoTextureEmissive:We&&T.emissiveMap.isVideoTexture===!0&&Ae.getTransfer(T.emissiveMap.colorSpace)===Be,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Fi,flipSided:T.side===Wn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:It&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(It&&T.extensions.multiDraw===!0||Kt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Oe.vertexUv1s=m.has(1),Oe.vertexUv2s=m.has(2),Oe.vertexUv3s=m.has(3),m.clear(),Oe}function y(T){const L=[];if(T.shaderID?L.push(T.shaderID):(L.push(T.customVertexShaderID),L.push(T.customFragmentShaderID)),T.defines!==void 0)for(const lt in T.defines)L.push(lt),L.push(T.defines[lt]);return T.isRawShaderMaterial===!1&&(v(L,T),C(L,T),L.push(o.outputColorSpace)),L.push(T.customProgramCacheKey),L.join()}function v(T,L){T.push(L.precision),T.push(L.outputColorSpace),T.push(L.envMapMode),T.push(L.envMapCubeUVHeight),T.push(L.mapUv),T.push(L.alphaMapUv),T.push(L.lightMapUv),T.push(L.aoMapUv),T.push(L.bumpMapUv),T.push(L.normalMapUv),T.push(L.displacementMapUv),T.push(L.emissiveMapUv),T.push(L.metalnessMapUv),T.push(L.roughnessMapUv),T.push(L.anisotropyMapUv),T.push(L.clearcoatMapUv),T.push(L.clearcoatNormalMapUv),T.push(L.clearcoatRoughnessMapUv),T.push(L.iridescenceMapUv),T.push(L.iridescenceThicknessMapUv),T.push(L.sheenColorMapUv),T.push(L.sheenRoughnessMapUv),T.push(L.specularMapUv),T.push(L.specularColorMapUv),T.push(L.specularIntensityMapUv),T.push(L.transmissionMapUv),T.push(L.thicknessMapUv),T.push(L.combine),T.push(L.fogExp2),T.push(L.sizeAttenuation),T.push(L.morphTargetsCount),T.push(L.morphAttributeCount),T.push(L.numDirLights),T.push(L.numPointLights),T.push(L.numSpotLights),T.push(L.numSpotLightMaps),T.push(L.numHemiLights),T.push(L.numRectAreaLights),T.push(L.numDirLightShadows),T.push(L.numPointLightShadows),T.push(L.numSpotLightShadows),T.push(L.numSpotLightShadowsWithMaps),T.push(L.numLightProbes),T.push(L.shadowMapType),T.push(L.toneMapping),T.push(L.numClippingPlanes),T.push(L.numClipIntersection),T.push(L.depthPacking)}function C(T,L){d.disableAll(),L.instancing&&d.enable(0),L.instancingColor&&d.enable(1),L.instancingMorph&&d.enable(2),L.matcap&&d.enable(3),L.envMap&&d.enable(4),L.normalMapObjectSpace&&d.enable(5),L.normalMapTangentSpace&&d.enable(6),L.clearcoat&&d.enable(7),L.iridescence&&d.enable(8),L.alphaTest&&d.enable(9),L.vertexColors&&d.enable(10),L.vertexAlphas&&d.enable(11),L.vertexUv1s&&d.enable(12),L.vertexUv2s&&d.enable(13),L.vertexUv3s&&d.enable(14),L.vertexTangents&&d.enable(15),L.anisotropy&&d.enable(16),L.alphaHash&&d.enable(17),L.batching&&d.enable(18),L.dispersion&&d.enable(19),L.batchingColor&&d.enable(20),L.gradientMap&&d.enable(21),T.push(d.mask),d.disableAll(),L.fog&&d.enable(0),L.useFog&&d.enable(1),L.flatShading&&d.enable(2),L.logarithmicDepthBuffer&&d.enable(3),L.reversedDepthBuffer&&d.enable(4),L.skinning&&d.enable(5),L.morphTargets&&d.enable(6),L.morphNormals&&d.enable(7),L.morphColors&&d.enable(8),L.premultipliedAlpha&&d.enable(9),L.shadowMapEnabled&&d.enable(10),L.doubleSided&&d.enable(11),L.flipSided&&d.enable(12),L.useDepthPacking&&d.enable(13),L.dithering&&d.enable(14),L.transmission&&d.enable(15),L.sheen&&d.enable(16),L.opaque&&d.enable(17),L.pointsUvs&&d.enable(18),L.decodeVideoTexture&&d.enable(19),L.decodeVideoTextureEmissive&&d.enable(20),L.alphaToCoverage&&d.enable(21),T.push(d.mask)}function U(T){const L=M[T.type];let lt;if(L){const G=Bi[L];lt=Jy.clone(G.uniforms)}else lt=T.uniforms;return lt}function D(T,L){let lt=x.get(L);return lt!==void 0?++lt.usedTimes:(lt=new ET(o,L,T,l),h.push(lt),x.set(L,lt)),lt}function I(T){if(--T.usedTimes===0){const L=h.indexOf(T);h[L]=h[h.length-1],h.pop(),x.delete(T.cacheKey),T.destroy()}}function B(T){p.remove(T)}function F(){p.dispose()}return{getParameters:w,getProgramCacheKey:y,getUniforms:U,acquireProgram:D,releaseProgram:I,releaseShaderCache:B,programs:h,dispose:F}}function CT(){let o=new WeakMap;function e(d){return o.has(d)}function i(d){let p=o.get(d);return p===void 0&&(p={},o.set(d,p)),p}function s(d){o.delete(d)}function l(d,p,m){o.get(d)[p]=m}function c(){o=new WeakMap}return{has:e,get:i,remove:s,update:l,dispose:c}}function wT(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.materialVariant!==e.materialVariant?o.materialVariant-e.materialVariant:o.z!==e.z?o.z-e.z:o.id-e.id}function P_(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function z_(){const o=[];let e=0;const i=[],s=[],l=[];function c(){e=0,i.length=0,s.length=0,l.length=0}function d(_){let M=0;return _.isInstancedMesh&&(M+=2),_.isSkinnedMesh&&(M+=1),M}function p(_,M,b,w,y,v){let C=o[e];return C===void 0?(C={id:_.id,object:_,geometry:M,material:b,materialVariant:d(_),groupOrder:w,renderOrder:_.renderOrder,z:y,group:v},o[e]=C):(C.id=_.id,C.object=_,C.geometry=M,C.material=b,C.materialVariant=d(_),C.groupOrder=w,C.renderOrder=_.renderOrder,C.z=y,C.group=v),e++,C}function m(_,M,b,w,y,v){const C=p(_,M,b,w,y,v);b.transmission>0?s.push(C):b.transparent===!0?l.push(C):i.push(C)}function h(_,M,b,w,y,v){const C=p(_,M,b,w,y,v);b.transmission>0?s.unshift(C):b.transparent===!0?l.unshift(C):i.unshift(C)}function x(_,M){i.length>1&&i.sort(_||wT),s.length>1&&s.sort(M||P_),l.length>1&&l.sort(M||P_)}function S(){for(let _=e,M=o.length;_<M;_++){const b=o[_];if(b.id===null)break;b.id=null,b.object=null,b.geometry=null,b.material=null,b.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:m,unshift:h,finish:S,sort:x}}function DT(){let o=new WeakMap;function e(s,l){const c=o.get(s);let d;return c===void 0?(d=new z_,o.set(s,[d])):l>=c.length?(d=new z_,c.push(d)):d=c[l],d}function i(){o=new WeakMap}return{get:e,dispose:i}}function UT(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new tt,color:new Fe};break;case"SpotLight":i={position:new tt,direction:new tt,color:new Fe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new tt,color:new Fe,distance:0,decay:0};break;case"HemisphereLight":i={direction:new tt,skyColor:new Fe,groundColor:new Fe};break;case"RectAreaLight":i={color:new Fe,position:new tt,halfWidth:new tt,halfHeight:new tt};break}return o[e.id]=i,i}}}function LT(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let NT=0;function OT(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function PT(o){const e=new UT,i=LT(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new tt);const l=new tt,c=new tn,d=new tn;function p(h){let x=0,S=0,_=0;for(let L=0;L<9;L++)s.probe[L].set(0,0,0);let M=0,b=0,w=0,y=0,v=0,C=0,U=0,D=0,I=0,B=0,F=0;h.sort(OT);for(let L=0,lt=h.length;L<lt;L++){const G=h[L],Q=G.color,rt=G.intensity,J=G.distance;let Y=null;if(G.shadow&&G.shadow.map&&(G.shadow.map.texture.format===Pr?Y=G.shadow.map.texture:Y=G.shadow.map.depthTexture||G.shadow.map.texture),G.isAmbientLight)x+=Q.r*rt,S+=Q.g*rt,_+=Q.b*rt;else if(G.isLightProbe){for(let N=0;N<9;N++)s.probe[N].addScaledVector(G.sh.coefficients[N],rt);F++}else if(G.isDirectionalLight){const N=e.get(G);if(N.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const z=G.shadow,ot=i.get(G);ot.shadowIntensity=z.intensity,ot.shadowBias=z.bias,ot.shadowNormalBias=z.normalBias,ot.shadowRadius=z.radius,ot.shadowMapSize=z.mapSize,s.directionalShadow[M]=ot,s.directionalShadowMap[M]=Y,s.directionalShadowMatrix[M]=G.shadow.matrix,C++}s.directional[M]=N,M++}else if(G.isSpotLight){const N=e.get(G);N.position.setFromMatrixPosition(G.matrixWorld),N.color.copy(Q).multiplyScalar(rt),N.distance=J,N.coneCos=Math.cos(G.angle),N.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),N.decay=G.decay,s.spot[w]=N;const z=G.shadow;if(G.map&&(s.spotLightMap[I]=G.map,I++,z.updateMatrices(G),G.castShadow&&B++),s.spotLightMatrix[w]=z.matrix,G.castShadow){const ot=i.get(G);ot.shadowIntensity=z.intensity,ot.shadowBias=z.bias,ot.shadowNormalBias=z.normalBias,ot.shadowRadius=z.radius,ot.shadowMapSize=z.mapSize,s.spotShadow[w]=ot,s.spotShadowMap[w]=Y,D++}w++}else if(G.isRectAreaLight){const N=e.get(G);N.color.copy(Q).multiplyScalar(rt),N.halfWidth.set(G.width*.5,0,0),N.halfHeight.set(0,G.height*.5,0),s.rectArea[y]=N,y++}else if(G.isPointLight){const N=e.get(G);if(N.color.copy(G.color).multiplyScalar(G.intensity),N.distance=G.distance,N.decay=G.decay,G.castShadow){const z=G.shadow,ot=i.get(G);ot.shadowIntensity=z.intensity,ot.shadowBias=z.bias,ot.shadowNormalBias=z.normalBias,ot.shadowRadius=z.radius,ot.shadowMapSize=z.mapSize,ot.shadowCameraNear=z.camera.near,ot.shadowCameraFar=z.camera.far,s.pointShadow[b]=ot,s.pointShadowMap[b]=Y,s.pointShadowMatrix[b]=G.shadow.matrix,U++}s.point[b]=N,b++}else if(G.isHemisphereLight){const N=e.get(G);N.skyColor.copy(G.color).multiplyScalar(rt),N.groundColor.copy(G.groundColor).multiplyScalar(rt),s.hemi[v]=N,v++}}y>0&&(o.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Lt.LTC_FLOAT_1,s.rectAreaLTC2=Lt.LTC_FLOAT_2):(s.rectAreaLTC1=Lt.LTC_HALF_1,s.rectAreaLTC2=Lt.LTC_HALF_2)),s.ambient[0]=x,s.ambient[1]=S,s.ambient[2]=_;const T=s.hash;(T.directionalLength!==M||T.pointLength!==b||T.spotLength!==w||T.rectAreaLength!==y||T.hemiLength!==v||T.numDirectionalShadows!==C||T.numPointShadows!==U||T.numSpotShadows!==D||T.numSpotMaps!==I||T.numLightProbes!==F)&&(s.directional.length=M,s.spot.length=w,s.rectArea.length=y,s.point.length=b,s.hemi.length=v,s.directionalShadow.length=C,s.directionalShadowMap.length=C,s.pointShadow.length=U,s.pointShadowMap.length=U,s.spotShadow.length=D,s.spotShadowMap.length=D,s.directionalShadowMatrix.length=C,s.pointShadowMatrix.length=U,s.spotLightMatrix.length=D+I-B,s.spotLightMap.length=I,s.numSpotLightShadowsWithMaps=B,s.numLightProbes=F,T.directionalLength=M,T.pointLength=b,T.spotLength=w,T.rectAreaLength=y,T.hemiLength=v,T.numDirectionalShadows=C,T.numPointShadows=U,T.numSpotShadows=D,T.numSpotMaps=I,T.numLightProbes=F,s.version=NT++)}function m(h,x){let S=0,_=0,M=0,b=0,w=0;const y=x.matrixWorldInverse;for(let v=0,C=h.length;v<C;v++){const U=h[v];if(U.isDirectionalLight){const D=s.directional[S];D.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(y),S++}else if(U.isSpotLight){const D=s.spot[M];D.position.setFromMatrixPosition(U.matrixWorld),D.position.applyMatrix4(y),D.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(y),M++}else if(U.isRectAreaLight){const D=s.rectArea[b];D.position.setFromMatrixPosition(U.matrixWorld),D.position.applyMatrix4(y),d.identity(),c.copy(U.matrixWorld),c.premultiply(y),d.extractRotation(c),D.halfWidth.set(U.width*.5,0,0),D.halfHeight.set(0,U.height*.5,0),D.halfWidth.applyMatrix4(d),D.halfHeight.applyMatrix4(d),b++}else if(U.isPointLight){const D=s.point[_];D.position.setFromMatrixPosition(U.matrixWorld),D.position.applyMatrix4(y),_++}else if(U.isHemisphereLight){const D=s.hemi[w];D.direction.setFromMatrixPosition(U.matrixWorld),D.direction.transformDirection(y),w++}}}return{setup:p,setupView:m,state:s}}function B_(o){const e=new PT(o),i=[],s=[];function l(x){h.camera=x,i.length=0,s.length=0}function c(x){i.push(x)}function d(x){s.push(x)}function p(){e.setup(i)}function m(x){e.setupView(i,x)}const h={lightsArray:i,shadowsArray:s,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:h,setupLights:p,setupLightsView:m,pushLight:c,pushShadow:d}}function zT(o){let e=new WeakMap;function i(l,c=0){const d=e.get(l);let p;return d===void 0?(p=new B_(o),e.set(l,[p])):c>=d.length?(p=new B_(o),d.push(p)):p=d[c],p}function s(){e=new WeakMap}return{get:i,dispose:s}}const BT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,FT=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,IT=[new tt(1,0,0),new tt(-1,0,0),new tt(0,1,0),new tt(0,-1,0),new tt(0,0,1),new tt(0,0,-1)],HT=[new tt(0,-1,0),new tt(0,-1,0),new tt(0,0,1),new tt(0,0,-1),new tt(0,-1,0),new tt(0,-1,0)],F_=new tn,Ho=new tt,Gd=new tt;function GT(o,e,i){let s=new cv;const l=new Ee,c=new Ee,d=new an,p=new nM,m=new iM,h={},x=i.maxTextureSize,S={[is]:Wn,[Wn]:is,[Fi]:Fi},_=new Wi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ee},radius:{value:4}},vertexShader:BT,fragmentShader:FT}),M=_.clone();M.defines.HORIZONTAL_PASS=1;const b=new Yn;b.setAttribute("position",new ki(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new Xn(b,_),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Pc;let v=this.type;this.render=function(B,F,T){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||B.length===0)return;this.type===kS&&(ae("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Pc);const L=o.getRenderTarget(),lt=o.getActiveCubeFace(),G=o.getActiveMipmapLevel(),Q=o.state;Q.setBlending(va),Q.buffers.depth.getReversed()===!0?Q.buffers.color.setClear(0,0,0,0):Q.buffers.color.setClear(1,1,1,1),Q.buffers.depth.setTest(!0),Q.setScissorTest(!1);const rt=v!==this.type;rt&&F.traverse(function(J){J.material&&(Array.isArray(J.material)?J.material.forEach(Y=>Y.needsUpdate=!0):J.material.needsUpdate=!0)});for(let J=0,Y=B.length;J<Y;J++){const N=B[J],z=N.shadow;if(z===void 0){ae("WebGLShadowMap:",N,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;l.copy(z.mapSize);const ot=z.getFrameExtents();l.multiply(ot),c.copy(z.mapSize),(l.x>x||l.y>x)&&(l.x>x&&(c.x=Math.floor(x/ot.x),l.x=c.x*ot.x,z.mapSize.x=c.x),l.y>x&&(c.y=Math.floor(x/ot.y),l.y=c.y*ot.y,z.mapSize.y=c.y));const ht=o.state.buffers.depth.getReversed();if(z.camera._reversedDepth=ht,z.map===null||rt===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===Go){if(N.isPointLight){ae("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new Vi(l.x,l.y,{format:Pr,type:Sa,minFilter:wn,magFilter:wn,generateMipmaps:!1}),z.map.texture.name=N.name+".shadowMap",z.map.depthTexture=new qo(l.x,l.y,Ii),z.map.depthTexture.name=N.name+".shadowMapDepth",z.map.depthTexture.format=ya,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Tn,z.map.depthTexture.magFilter=Tn}else N.isPointLight?(z.map=new _v(l.x),z.map.depthTexture=new Ky(l.x,Xi)):(z.map=new Vi(l.x,l.y),z.map.depthTexture=new qo(l.x,l.y,Xi)),z.map.depthTexture.name=N.name+".shadowMap",z.map.depthTexture.format=ya,this.type===Pc?(z.map.depthTexture.compareFunction=ht?Wh:Xh,z.map.depthTexture.minFilter=wn,z.map.depthTexture.magFilter=wn):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Tn,z.map.depthTexture.magFilter=Tn);z.camera.updateProjectionMatrix()}const yt=z.map.isWebGLCubeRenderTarget?6:1;for(let P=0;P<yt;P++){if(z.map.isWebGLCubeRenderTarget)o.setRenderTarget(z.map,P),o.clear();else{P===0&&(o.setRenderTarget(z.map),o.clear());const j=z.getViewport(P);d.set(c.x*j.x,c.y*j.y,c.x*j.z,c.y*j.w),Q.viewport(d)}if(N.isPointLight){const j=z.camera,vt=z.matrix,Rt=N.distance||j.far;Rt!==j.far&&(j.far=Rt,j.updateProjectionMatrix()),Ho.setFromMatrixPosition(N.matrixWorld),j.position.copy(Ho),Gd.copy(j.position),Gd.add(IT[P]),j.up.copy(HT[P]),j.lookAt(Gd),j.updateMatrixWorld(),vt.makeTranslation(-Ho.x,-Ho.y,-Ho.z),F_.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),z._frustum.setFromProjectionMatrix(F_,j.coordinateSystem,j.reversedDepth)}else z.updateMatrices(N);s=z.getFrustum(),D(F,T,z.camera,N,this.type)}z.isPointLightShadow!==!0&&this.type===Go&&C(z,T),z.needsUpdate=!1}v=this.type,y.needsUpdate=!1,o.setRenderTarget(L,lt,G)};function C(B,F){const T=e.update(w);_.defines.VSM_SAMPLES!==B.blurSamples&&(_.defines.VSM_SAMPLES=B.blurSamples,M.defines.VSM_SAMPLES=B.blurSamples,_.needsUpdate=!0,M.needsUpdate=!0),B.mapPass===null&&(B.mapPass=new Vi(l.x,l.y,{format:Pr,type:Sa})),_.uniforms.shadow_pass.value=B.map.depthTexture,_.uniforms.resolution.value=B.mapSize,_.uniforms.radius.value=B.radius,o.setRenderTarget(B.mapPass),o.clear(),o.renderBufferDirect(F,null,T,_,w,null),M.uniforms.shadow_pass.value=B.mapPass.texture,M.uniforms.resolution.value=B.mapSize,M.uniforms.radius.value=B.radius,o.setRenderTarget(B.map),o.clear(),o.renderBufferDirect(F,null,T,M,w,null)}function U(B,F,T,L){let lt=null;const G=T.isPointLight===!0?B.customDistanceMaterial:B.customDepthMaterial;if(G!==void 0)lt=G;else if(lt=T.isPointLight===!0?m:p,o.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){const Q=lt.uuid,rt=F.uuid;let J=h[Q];J===void 0&&(J={},h[Q]=J);let Y=J[rt];Y===void 0&&(Y=lt.clone(),J[rt]=Y,F.addEventListener("dispose",I)),lt=Y}if(lt.visible=F.visible,lt.wireframe=F.wireframe,L===Go?lt.side=F.shadowSide!==null?F.shadowSide:F.side:lt.side=F.shadowSide!==null?F.shadowSide:S[F.side],lt.alphaMap=F.alphaMap,lt.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,lt.map=F.map,lt.clipShadows=F.clipShadows,lt.clippingPlanes=F.clippingPlanes,lt.clipIntersection=F.clipIntersection,lt.displacementMap=F.displacementMap,lt.displacementScale=F.displacementScale,lt.displacementBias=F.displacementBias,lt.wireframeLinewidth=F.wireframeLinewidth,lt.linewidth=F.linewidth,T.isPointLight===!0&&lt.isMeshDistanceMaterial===!0){const Q=o.properties.get(lt);Q.light=T}return lt}function D(B,F,T,L,lt){if(B.visible===!1)return;if(B.layers.test(F.layers)&&(B.isMesh||B.isLine||B.isPoints)&&(B.castShadow||B.receiveShadow&&lt===Go)&&(!B.frustumCulled||s.intersectsObject(B))){B.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,B.matrixWorld);const rt=e.update(B),J=B.material;if(Array.isArray(J)){const Y=rt.groups;for(let N=0,z=Y.length;N<z;N++){const ot=Y[N],ht=J[ot.materialIndex];if(ht&&ht.visible){const yt=U(B,ht,L,lt);B.onBeforeShadow(o,B,F,T,rt,yt,ot),o.renderBufferDirect(T,null,rt,yt,B,ot),B.onAfterShadow(o,B,F,T,rt,yt,ot)}}}else if(J.visible){const Y=U(B,J,L,lt);B.onBeforeShadow(o,B,F,T,rt,Y,null),o.renderBufferDirect(T,null,rt,Y,B,null),B.onAfterShadow(o,B,F,T,rt,Y,null)}}const Q=B.children;for(let rt=0,J=Q.length;rt<J;rt++)D(Q[rt],F,T,L,lt)}function I(B){B.target.removeEventListener("dispose",I);for(const T in h){const L=h[T],lt=B.target.uuid;lt in L&&(L[lt].dispose(),delete L[lt])}}}function VT(o,e){function i(){let W=!1;const Ct=new an;let At=null;const zt=new an(0,0,0,0);return{setMask:function(Et){At!==Et&&!W&&(o.colorMask(Et,Et,Et,Et),At=Et)},setLocked:function(Et){W=Et},setClear:function(Et,ft,It,ne,Oe){Oe===!0&&(Et*=ne,ft*=ne,It*=ne),Ct.set(Et,ft,It,ne),zt.equals(Ct)===!1&&(o.clearColor(Et,ft,It,ne),zt.copy(Ct))},reset:function(){W=!1,At=null,zt.set(-1,0,0,0)}}}function s(){let W=!1,Ct=!1,At=null,zt=null,Et=null;return{setReversed:function(ft){if(Ct!==ft){const It=e.get("EXT_clip_control");ft?It.clipControlEXT(It.LOWER_LEFT_EXT,It.ZERO_TO_ONE_EXT):It.clipControlEXT(It.LOWER_LEFT_EXT,It.NEGATIVE_ONE_TO_ONE_EXT),Ct=ft;const ne=Et;Et=null,this.setClear(ne)}},getReversed:function(){return Ct},setTest:function(ft){ft?xt(o.DEPTH_TEST):Tt(o.DEPTH_TEST)},setMask:function(ft){At!==ft&&!W&&(o.depthMask(ft),At=ft)},setFunc:function(ft){if(Ct&&(ft=Ey[ft]),zt!==ft){switch(ft){case Wd:o.depthFunc(o.NEVER);break;case qd:o.depthFunc(o.ALWAYS);break;case Yd:o.depthFunc(o.LESS);break;case Nr:o.depthFunc(o.LEQUAL);break;case jd:o.depthFunc(o.EQUAL);break;case Zd:o.depthFunc(o.GEQUAL);break;case Kd:o.depthFunc(o.GREATER);break;case Qd:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}zt=ft}},setLocked:function(ft){W=ft},setClear:function(ft){Et!==ft&&(Et=ft,Ct&&(ft=1-ft),o.clearDepth(ft))},reset:function(){W=!1,At=null,zt=null,Et=null,Ct=!1}}}function l(){let W=!1,Ct=null,At=null,zt=null,Et=null,ft=null,It=null,ne=null,Oe=null;return{setTest:function(be){W||(be?xt(o.STENCIL_TEST):Tt(o.STENCIL_TEST))},setMask:function(be){Ct!==be&&!W&&(o.stencilMask(be),Ct=be)},setFunc:function(be,Dn,_i){(At!==be||zt!==Dn||Et!==_i)&&(o.stencilFunc(be,Dn,_i),At=be,zt=Dn,Et=_i)},setOp:function(be,Dn,_i){(ft!==be||It!==Dn||ne!==_i)&&(o.stencilOp(be,Dn,_i),ft=be,It=Dn,ne=_i)},setLocked:function(be){W=be},setClear:function(be){Oe!==be&&(o.clearStencil(be),Oe=be)},reset:function(){W=!1,Ct=null,At=null,zt=null,Et=null,ft=null,It=null,ne=null,Oe=null}}}const c=new i,d=new s,p=new l,m=new WeakMap,h=new WeakMap;let x={},S={},_=new WeakMap,M=[],b=null,w=!1,y=null,v=null,C=null,U=null,D=null,I=null,B=null,F=new Fe(0,0,0),T=0,L=!1,lt=null,G=null,Q=null,rt=null,J=null;const Y=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let N=!1,z=0;const ot=o.getParameter(o.VERSION);ot.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(ot)[1]),N=z>=1):ot.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(ot)[1]),N=z>=2);let ht=null,yt={};const P=o.getParameter(o.SCISSOR_BOX),j=o.getParameter(o.VIEWPORT),vt=new an().fromArray(P),Rt=new an().fromArray(j);function Bt(W,Ct,At,zt){const Et=new Uint8Array(4),ft=o.createTexture();o.bindTexture(W,ft),o.texParameteri(W,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(W,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let It=0;It<At;It++)W===o.TEXTURE_3D||W===o.TEXTURE_2D_ARRAY?o.texImage3D(Ct,0,o.RGBA,1,1,zt,0,o.RGBA,o.UNSIGNED_BYTE,Et):o.texImage2D(Ct+It,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Et);return ft}const at={};at[o.TEXTURE_2D]=Bt(o.TEXTURE_2D,o.TEXTURE_2D,1),at[o.TEXTURE_CUBE_MAP]=Bt(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),at[o.TEXTURE_2D_ARRAY]=Bt(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),at[o.TEXTURE_3D]=Bt(o.TEXTURE_3D,o.TEXTURE_3D,1,1),c.setClear(0,0,0,1),d.setClear(1),p.setClear(0),xt(o.DEPTH_TEST),d.setFunc(Nr),oe(!1),Ze(Hg),xt(o.CULL_FACE),pe(va);function xt(W){x[W]!==!0&&(o.enable(W),x[W]=!0)}function Tt(W){x[W]!==!1&&(o.disable(W),x[W]=!1)}function kt(W,Ct){return S[W]!==Ct?(o.bindFramebuffer(W,Ct),S[W]=Ct,W===o.DRAW_FRAMEBUFFER&&(S[o.FRAMEBUFFER]=Ct),W===o.FRAMEBUFFER&&(S[o.DRAW_FRAMEBUFFER]=Ct),!0):!1}function Kt(W,Ct){let At=M,zt=!1;if(W){At=_.get(Ct),At===void 0&&(At=[],_.set(Ct,At));const Et=W.textures;if(At.length!==Et.length||At[0]!==o.COLOR_ATTACHMENT0){for(let ft=0,It=Et.length;ft<It;ft++)At[ft]=o.COLOR_ATTACHMENT0+ft;At.length=Et.length,zt=!0}}else At[0]!==o.BACK&&(At[0]=o.BACK,zt=!0);zt&&o.drawBuffers(At)}function $t(W){return b!==W?(o.useProgram(W),b=W,!0):!1}const Ke={[ws]:o.FUNC_ADD,[WS]:o.FUNC_SUBTRACT,[qS]:o.FUNC_REVERSE_SUBTRACT};Ke[YS]=o.MIN,Ke[jS]=o.MAX;const _e={[ZS]:o.ZERO,[KS]:o.ONE,[QS]:o.SRC_COLOR,[kd]:o.SRC_ALPHA,[iy]:o.SRC_ALPHA_SATURATE,[ey]:o.DST_COLOR,[$S]:o.DST_ALPHA,[JS]:o.ONE_MINUS_SRC_COLOR,[Xd]:o.ONE_MINUS_SRC_ALPHA,[ny]:o.ONE_MINUS_DST_COLOR,[ty]:o.ONE_MINUS_DST_ALPHA,[ay]:o.CONSTANT_COLOR,[sy]:o.ONE_MINUS_CONSTANT_COLOR,[ry]:o.CONSTANT_ALPHA,[oy]:o.ONE_MINUS_CONSTANT_ALPHA};function pe(W,Ct,At,zt,Et,ft,It,ne,Oe,be){if(W===va){w===!0&&(Tt(o.BLEND),w=!1);return}if(w===!1&&(xt(o.BLEND),w=!0),W!==XS){if(W!==y||be!==L){if((v!==ws||D!==ws)&&(o.blendEquation(o.FUNC_ADD),v=ws,D=ws),be)switch(W){case Ur:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Gg:o.blendFunc(o.ONE,o.ONE);break;case Vg:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case kg:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:Te("WebGLState: Invalid blending: ",W);break}else switch(W){case Ur:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Gg:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case Vg:Te("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case kg:Te("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Te("WebGLState: Invalid blending: ",W);break}C=null,U=null,I=null,B=null,F.set(0,0,0),T=0,y=W,L=be}return}Et=Et||Ct,ft=ft||At,It=It||zt,(Ct!==v||Et!==D)&&(o.blendEquationSeparate(Ke[Ct],Ke[Et]),v=Ct,D=Et),(At!==C||zt!==U||ft!==I||It!==B)&&(o.blendFuncSeparate(_e[At],_e[zt],_e[ft],_e[It]),C=At,U=zt,I=ft,B=It),(ne.equals(F)===!1||Oe!==T)&&(o.blendColor(ne.r,ne.g,ne.b,Oe),F.copy(ne),T=Oe),y=W,L=!1}function De(W,Ct){W.side===Fi?Tt(o.CULL_FACE):xt(o.CULL_FACE);let At=W.side===Wn;Ct&&(At=!At),oe(At),W.blending===Ur&&W.transparent===!1?pe(va):pe(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),d.setFunc(W.depthFunc),d.setTest(W.depthTest),d.setMask(W.depthWrite),c.setMask(W.colorWrite);const zt=W.stencilWrite;p.setTest(zt),zt&&(p.setMask(W.stencilWriteMask),p.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),p.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),We(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?xt(o.SAMPLE_ALPHA_TO_COVERAGE):Tt(o.SAMPLE_ALPHA_TO_COVERAGE)}function oe(W){lt!==W&&(W?o.frontFace(o.CW):o.frontFace(o.CCW),lt=W)}function Ze(W){W!==GS?(xt(o.CULL_FACE),W!==G&&(W===Hg?o.cullFace(o.BACK):W===VS?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Tt(o.CULL_FACE),G=W}function V(W){W!==Q&&(N&&o.lineWidth(W),Q=W)}function We(W,Ct,At){W?(xt(o.POLYGON_OFFSET_FILL),(rt!==Ct||J!==At)&&(rt=Ct,J=At,d.getReversed()&&(Ct=-Ct),o.polygonOffset(Ct,At))):Tt(o.POLYGON_OFFSET_FILL)}function Me(W){W?xt(o.SCISSOR_TEST):Tt(o.SCISSOR_TEST)}function Le(W){W===void 0&&(W=o.TEXTURE0+Y-1),ht!==W&&(o.activeTexture(W),ht=W)}function qt(W,Ct,At){At===void 0&&(ht===null?At=o.TEXTURE0+Y-1:At=ht);let zt=yt[At];zt===void 0&&(zt={type:void 0,texture:void 0},yt[At]=zt),(zt.type!==W||zt.texture!==Ct)&&(ht!==At&&(o.activeTexture(At),ht=At),o.bindTexture(W,Ct||at[W]),zt.type=W,zt.texture=Ct)}function O(){const W=yt[ht];W!==void 0&&W.type!==void 0&&(o.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function E(){try{o.compressedTexImage2D(...arguments)}catch(W){Te("WebGLState:",W)}}function q(){try{o.compressedTexImage3D(...arguments)}catch(W){Te("WebGLState:",W)}}function mt(){try{o.texSubImage2D(...arguments)}catch(W){Te("WebGLState:",W)}}function St(){try{o.texSubImage3D(...arguments)}catch(W){Te("WebGLState:",W)}}function dt(){try{o.compressedTexSubImage2D(...arguments)}catch(W){Te("WebGLState:",W)}}function Xt(){try{o.compressedTexSubImage3D(...arguments)}catch(W){Te("WebGLState:",W)}}function wt(){try{o.texStorage2D(...arguments)}catch(W){Te("WebGLState:",W)}}function Zt(){try{o.texStorage3D(...arguments)}catch(W){Te("WebGLState:",W)}}function te(){try{o.texImage2D(...arguments)}catch(W){Te("WebGLState:",W)}}function bt(){try{o.texImage3D(...arguments)}catch(W){Te("WebGLState:",W)}}function Mt(W){vt.equals(W)===!1&&(o.scissor(W.x,W.y,W.z,W.w),vt.copy(W))}function Ot(W){Rt.equals(W)===!1&&(o.viewport(W.x,W.y,W.z,W.w),Rt.copy(W))}function Nt(W,Ct){let At=h.get(Ct);At===void 0&&(At=new WeakMap,h.set(Ct,At));let zt=At.get(W);zt===void 0&&(zt=o.getUniformBlockIndex(Ct,W.name),At.set(W,zt))}function Pt(W,Ct){const zt=h.get(Ct).get(W);m.get(Ct)!==zt&&(o.uniformBlockBinding(Ct,zt,W.__bindingPointIndex),m.set(Ct,zt))}function ce(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),d.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),x={},ht=null,yt={},S={},_=new WeakMap,M=[],b=null,w=!1,y=null,v=null,C=null,U=null,D=null,I=null,B=null,F=new Fe(0,0,0),T=0,L=!1,lt=null,G=null,Q=null,rt=null,J=null,vt.set(0,0,o.canvas.width,o.canvas.height),Rt.set(0,0,o.canvas.width,o.canvas.height),c.reset(),d.reset(),p.reset()}return{buffers:{color:c,depth:d,stencil:p},enable:xt,disable:Tt,bindFramebuffer:kt,drawBuffers:Kt,useProgram:$t,setBlending:pe,setMaterial:De,setFlipSided:oe,setCullFace:Ze,setLineWidth:V,setPolygonOffset:We,setScissorTest:Me,activeTexture:Le,bindTexture:qt,unbindTexture:O,compressedTexImage2D:E,compressedTexImage3D:q,texImage2D:te,texImage3D:bt,updateUBOMapping:Nt,uniformBlockBinding:Pt,texStorage2D:wt,texStorage3D:Zt,texSubImage2D:mt,texSubImage3D:St,compressedTexSubImage2D:dt,compressedTexSubImage3D:Xt,scissor:Mt,viewport:Ot,reset:ce}}function kT(o,e,i,s,l,c,d){const p=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Ee,x=new WeakMap;let S;const _=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(O,E){return M?new OffscreenCanvas(O,E):kc("canvas")}function w(O,E,q){let mt=1;const St=qt(O);if((St.width>q||St.height>q)&&(mt=q/Math.max(St.width,St.height)),mt<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){const dt=Math.floor(mt*St.width),Xt=Math.floor(mt*St.height);S===void 0&&(S=b(dt,Xt));const wt=E?b(dt,Xt):S;return wt.width=dt,wt.height=Xt,wt.getContext("2d").drawImage(O,0,0,dt,Xt),ae("WebGLRenderer: Texture has been resized from ("+St.width+"x"+St.height+") to ("+dt+"x"+Xt+")."),wt}else return"data"in O&&ae("WebGLRenderer: Image in DataTexture is too big ("+St.width+"x"+St.height+")."),O;return O}function y(O){return O.generateMipmaps}function v(O){o.generateMipmap(O)}function C(O){return O.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:O.isWebGL3DRenderTarget?o.TEXTURE_3D:O.isWebGLArrayRenderTarget||O.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function U(O,E,q,mt,St=!1){if(O!==null){if(o[O]!==void 0)return o[O];ae("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let dt=E;if(E===o.RED&&(q===o.FLOAT&&(dt=o.R32F),q===o.HALF_FLOAT&&(dt=o.R16F),q===o.UNSIGNED_BYTE&&(dt=o.R8)),E===o.RED_INTEGER&&(q===o.UNSIGNED_BYTE&&(dt=o.R8UI),q===o.UNSIGNED_SHORT&&(dt=o.R16UI),q===o.UNSIGNED_INT&&(dt=o.R32UI),q===o.BYTE&&(dt=o.R8I),q===o.SHORT&&(dt=o.R16I),q===o.INT&&(dt=o.R32I)),E===o.RG&&(q===o.FLOAT&&(dt=o.RG32F),q===o.HALF_FLOAT&&(dt=o.RG16F),q===o.UNSIGNED_BYTE&&(dt=o.RG8)),E===o.RG_INTEGER&&(q===o.UNSIGNED_BYTE&&(dt=o.RG8UI),q===o.UNSIGNED_SHORT&&(dt=o.RG16UI),q===o.UNSIGNED_INT&&(dt=o.RG32UI),q===o.BYTE&&(dt=o.RG8I),q===o.SHORT&&(dt=o.RG16I),q===o.INT&&(dt=o.RG32I)),E===o.RGB_INTEGER&&(q===o.UNSIGNED_BYTE&&(dt=o.RGB8UI),q===o.UNSIGNED_SHORT&&(dt=o.RGB16UI),q===o.UNSIGNED_INT&&(dt=o.RGB32UI),q===o.BYTE&&(dt=o.RGB8I),q===o.SHORT&&(dt=o.RGB16I),q===o.INT&&(dt=o.RGB32I)),E===o.RGBA_INTEGER&&(q===o.UNSIGNED_BYTE&&(dt=o.RGBA8UI),q===o.UNSIGNED_SHORT&&(dt=o.RGBA16UI),q===o.UNSIGNED_INT&&(dt=o.RGBA32UI),q===o.BYTE&&(dt=o.RGBA8I),q===o.SHORT&&(dt=o.RGBA16I),q===o.INT&&(dt=o.RGBA32I)),E===o.RGB&&(q===o.UNSIGNED_INT_5_9_9_9_REV&&(dt=o.RGB9_E5),q===o.UNSIGNED_INT_10F_11F_11F_REV&&(dt=o.R11F_G11F_B10F)),E===o.RGBA){const Xt=St?Gc:Ae.getTransfer(mt);q===o.FLOAT&&(dt=o.RGBA32F),q===o.HALF_FLOAT&&(dt=o.RGBA16F),q===o.UNSIGNED_BYTE&&(dt=Xt===Be?o.SRGB8_ALPHA8:o.RGBA8),q===o.UNSIGNED_SHORT_4_4_4_4&&(dt=o.RGBA4),q===o.UNSIGNED_SHORT_5_5_5_1&&(dt=o.RGB5_A1)}return(dt===o.R16F||dt===o.R32F||dt===o.RG16F||dt===o.RG32F||dt===o.RGBA16F||dt===o.RGBA32F)&&e.get("EXT_color_buffer_float"),dt}function D(O,E){let q;return O?E===null||E===Xi||E===Wo?q=o.DEPTH24_STENCIL8:E===Ii?q=o.DEPTH32F_STENCIL8:E===Xo&&(q=o.DEPTH24_STENCIL8,ae("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Xi||E===Wo?q=o.DEPTH_COMPONENT24:E===Ii?q=o.DEPTH_COMPONENT32F:E===Xo&&(q=o.DEPTH_COMPONENT16),q}function I(O,E){return y(O)===!0||O.isFramebufferTexture&&O.minFilter!==Tn&&O.minFilter!==wn?Math.log2(Math.max(E.width,E.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?E.mipmaps.length:1}function B(O){const E=O.target;E.removeEventListener("dispose",B),T(E),E.isVideoTexture&&x.delete(E)}function F(O){const E=O.target;E.removeEventListener("dispose",F),lt(E)}function T(O){const E=s.get(O);if(E.__webglInit===void 0)return;const q=O.source,mt=_.get(q);if(mt){const St=mt[E.__cacheKey];St.usedTimes--,St.usedTimes===0&&L(O),Object.keys(mt).length===0&&_.delete(q)}s.remove(O)}function L(O){const E=s.get(O);o.deleteTexture(E.__webglTexture);const q=O.source,mt=_.get(q);delete mt[E.__cacheKey],d.memory.textures--}function lt(O){const E=s.get(O);if(O.depthTexture&&(O.depthTexture.dispose(),s.remove(O.depthTexture)),O.isWebGLCubeRenderTarget)for(let mt=0;mt<6;mt++){if(Array.isArray(E.__webglFramebuffer[mt]))for(let St=0;St<E.__webglFramebuffer[mt].length;St++)o.deleteFramebuffer(E.__webglFramebuffer[mt][St]);else o.deleteFramebuffer(E.__webglFramebuffer[mt]);E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer[mt])}else{if(Array.isArray(E.__webglFramebuffer))for(let mt=0;mt<E.__webglFramebuffer.length;mt++)o.deleteFramebuffer(E.__webglFramebuffer[mt]);else o.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&o.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let mt=0;mt<E.__webglColorRenderbuffer.length;mt++)E.__webglColorRenderbuffer[mt]&&o.deleteRenderbuffer(E.__webglColorRenderbuffer[mt]);E.__webglDepthRenderbuffer&&o.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const q=O.textures;for(let mt=0,St=q.length;mt<St;mt++){const dt=s.get(q[mt]);dt.__webglTexture&&(o.deleteTexture(dt.__webglTexture),d.memory.textures--),s.remove(q[mt])}s.remove(O)}let G=0;function Q(){G=0}function rt(){const O=G;return O>=l.maxTextures&&ae("WebGLTextures: Trying to use "+O+" texture units while this GPU supports only "+l.maxTextures),G+=1,O}function J(O){const E=[];return E.push(O.wrapS),E.push(O.wrapT),E.push(O.wrapR||0),E.push(O.magFilter),E.push(O.minFilter),E.push(O.anisotropy),E.push(O.internalFormat),E.push(O.format),E.push(O.type),E.push(O.generateMipmaps),E.push(O.premultiplyAlpha),E.push(O.flipY),E.push(O.unpackAlignment),E.push(O.colorSpace),E.join()}function Y(O,E){const q=s.get(O);if(O.isVideoTexture&&Me(O),O.isRenderTargetTexture===!1&&O.isExternalTexture!==!0&&O.version>0&&q.__version!==O.version){const mt=O.image;if(mt===null)ae("WebGLRenderer: Texture marked for update but no image data found.");else if(mt.complete===!1)ae("WebGLRenderer: Texture marked for update but image is incomplete");else{at(q,O,E);return}}else O.isExternalTexture&&(q.__webglTexture=O.sourceTexture?O.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,q.__webglTexture,o.TEXTURE0+E)}function N(O,E){const q=s.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&q.__version!==O.version){at(q,O,E);return}else O.isExternalTexture&&(q.__webglTexture=O.sourceTexture?O.sourceTexture:null);i.bindTexture(o.TEXTURE_2D_ARRAY,q.__webglTexture,o.TEXTURE0+E)}function z(O,E){const q=s.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&q.__version!==O.version){at(q,O,E);return}i.bindTexture(o.TEXTURE_3D,q.__webglTexture,o.TEXTURE0+E)}function ot(O,E){const q=s.get(O);if(O.isCubeDepthTexture!==!0&&O.version>0&&q.__version!==O.version){xt(q,O,E);return}i.bindTexture(o.TEXTURE_CUBE_MAP,q.__webglTexture,o.TEXTURE0+E)}const ht={[Jd]:o.REPEAT,[_a]:o.CLAMP_TO_EDGE,[$d]:o.MIRRORED_REPEAT},yt={[Tn]:o.NEAREST,[uy]:o.NEAREST_MIPMAP_NEAREST,[uc]:o.NEAREST_MIPMAP_LINEAR,[wn]:o.LINEAR,[ud]:o.LINEAR_MIPMAP_NEAREST,[Ls]:o.LINEAR_MIPMAP_LINEAR},P={[py]:o.NEVER,[xy]:o.ALWAYS,[my]:o.LESS,[Xh]:o.LEQUAL,[gy]:o.EQUAL,[Wh]:o.GEQUAL,[_y]:o.GREATER,[vy]:o.NOTEQUAL};function j(O,E){if(E.type===Ii&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===wn||E.magFilter===ud||E.magFilter===uc||E.magFilter===Ls||E.minFilter===wn||E.minFilter===ud||E.minFilter===uc||E.minFilter===Ls)&&ae("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(O,o.TEXTURE_WRAP_S,ht[E.wrapS]),o.texParameteri(O,o.TEXTURE_WRAP_T,ht[E.wrapT]),(O===o.TEXTURE_3D||O===o.TEXTURE_2D_ARRAY)&&o.texParameteri(O,o.TEXTURE_WRAP_R,ht[E.wrapR]),o.texParameteri(O,o.TEXTURE_MAG_FILTER,yt[E.magFilter]),o.texParameteri(O,o.TEXTURE_MIN_FILTER,yt[E.minFilter]),E.compareFunction&&(o.texParameteri(O,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(O,o.TEXTURE_COMPARE_FUNC,P[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Tn||E.minFilter!==uc&&E.minFilter!==Ls||E.type===Ii&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||s.get(E).__currentAnisotropy){const q=e.get("EXT_texture_filter_anisotropic");o.texParameterf(O,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),s.get(E).__currentAnisotropy=E.anisotropy}}}function vt(O,E){let q=!1;O.__webglInit===void 0&&(O.__webglInit=!0,E.addEventListener("dispose",B));const mt=E.source;let St=_.get(mt);St===void 0&&(St={},_.set(mt,St));const dt=J(E);if(dt!==O.__cacheKey){St[dt]===void 0&&(St[dt]={texture:o.createTexture(),usedTimes:0},d.memory.textures++,q=!0),St[dt].usedTimes++;const Xt=St[O.__cacheKey];Xt!==void 0&&(St[O.__cacheKey].usedTimes--,Xt.usedTimes===0&&L(E)),O.__cacheKey=dt,O.__webglTexture=St[dt].texture}return q}function Rt(O,E,q){return Math.floor(Math.floor(O/q)/E)}function Bt(O,E,q,mt){const dt=O.updateRanges;if(dt.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,E.width,E.height,q,mt,E.data);else{dt.sort((bt,Mt)=>bt.start-Mt.start);let Xt=0;for(let bt=1;bt<dt.length;bt++){const Mt=dt[Xt],Ot=dt[bt],Nt=Mt.start+Mt.count,Pt=Rt(Ot.start,E.width,4),ce=Rt(Mt.start,E.width,4);Ot.start<=Nt+1&&Pt===ce&&Rt(Ot.start+Ot.count-1,E.width,4)===Pt?Mt.count=Math.max(Mt.count,Ot.start+Ot.count-Mt.start):(++Xt,dt[Xt]=Ot)}dt.length=Xt+1;const wt=o.getParameter(o.UNPACK_ROW_LENGTH),Zt=o.getParameter(o.UNPACK_SKIP_PIXELS),te=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,E.width);for(let bt=0,Mt=dt.length;bt<Mt;bt++){const Ot=dt[bt],Nt=Math.floor(Ot.start/4),Pt=Math.ceil(Ot.count/4),ce=Nt%E.width,W=Math.floor(Nt/E.width),Ct=Pt,At=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,ce),o.pixelStorei(o.UNPACK_SKIP_ROWS,W),i.texSubImage2D(o.TEXTURE_2D,0,ce,W,Ct,At,q,mt,E.data)}O.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,wt),o.pixelStorei(o.UNPACK_SKIP_PIXELS,Zt),o.pixelStorei(o.UNPACK_SKIP_ROWS,te)}}function at(O,E,q){let mt=o.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(mt=o.TEXTURE_2D_ARRAY),E.isData3DTexture&&(mt=o.TEXTURE_3D);const St=vt(O,E),dt=E.source;i.bindTexture(mt,O.__webglTexture,o.TEXTURE0+q);const Xt=s.get(dt);if(dt.version!==Xt.__version||St===!0){i.activeTexture(o.TEXTURE0+q);const wt=Ae.getPrimaries(Ae.workingColorSpace),Zt=E.colorSpace===es?null:Ae.getPrimaries(E.colorSpace),te=E.colorSpace===es||wt===Zt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,te);let bt=w(E.image,!1,l.maxTextureSize);bt=Le(E,bt);const Mt=c.convert(E.format,E.colorSpace),Ot=c.convert(E.type);let Nt=U(E.internalFormat,Mt,Ot,E.colorSpace,E.isVideoTexture);j(mt,E);let Pt;const ce=E.mipmaps,W=E.isVideoTexture!==!0,Ct=Xt.__version===void 0||St===!0,At=dt.dataReady,zt=I(E,bt);if(E.isDepthTexture)Nt=D(E.format===Ns,E.type),Ct&&(W?i.texStorage2D(o.TEXTURE_2D,1,Nt,bt.width,bt.height):i.texImage2D(o.TEXTURE_2D,0,Nt,bt.width,bt.height,0,Mt,Ot,null));else if(E.isDataTexture)if(ce.length>0){W&&Ct&&i.texStorage2D(o.TEXTURE_2D,zt,Nt,ce[0].width,ce[0].height);for(let Et=0,ft=ce.length;Et<ft;Et++)Pt=ce[Et],W?At&&i.texSubImage2D(o.TEXTURE_2D,Et,0,0,Pt.width,Pt.height,Mt,Ot,Pt.data):i.texImage2D(o.TEXTURE_2D,Et,Nt,Pt.width,Pt.height,0,Mt,Ot,Pt.data);E.generateMipmaps=!1}else W?(Ct&&i.texStorage2D(o.TEXTURE_2D,zt,Nt,bt.width,bt.height),At&&Bt(E,bt,Mt,Ot)):i.texImage2D(o.TEXTURE_2D,0,Nt,bt.width,bt.height,0,Mt,Ot,bt.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){W&&Ct&&i.texStorage3D(o.TEXTURE_2D_ARRAY,zt,Nt,ce[0].width,ce[0].height,bt.depth);for(let Et=0,ft=ce.length;Et<ft;Et++)if(Pt=ce[Et],E.format!==Ci)if(Mt!==null)if(W){if(At)if(E.layerUpdates.size>0){const It=m_(Pt.width,Pt.height,E.format,E.type);for(const ne of E.layerUpdates){const Oe=Pt.data.subarray(ne*It/Pt.data.BYTES_PER_ELEMENT,(ne+1)*It/Pt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Et,0,0,ne,Pt.width,Pt.height,1,Mt,Oe)}E.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Et,0,0,0,Pt.width,Pt.height,bt.depth,Mt,Pt.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,Et,Nt,Pt.width,Pt.height,bt.depth,0,Pt.data,0,0);else ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else W?At&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,Et,0,0,0,Pt.width,Pt.height,bt.depth,Mt,Ot,Pt.data):i.texImage3D(o.TEXTURE_2D_ARRAY,Et,Nt,Pt.width,Pt.height,bt.depth,0,Mt,Ot,Pt.data)}else{W&&Ct&&i.texStorage2D(o.TEXTURE_2D,zt,Nt,ce[0].width,ce[0].height);for(let Et=0,ft=ce.length;Et<ft;Et++)Pt=ce[Et],E.format!==Ci?Mt!==null?W?At&&i.compressedTexSubImage2D(o.TEXTURE_2D,Et,0,0,Pt.width,Pt.height,Mt,Pt.data):i.compressedTexImage2D(o.TEXTURE_2D,Et,Nt,Pt.width,Pt.height,0,Pt.data):ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):W?At&&i.texSubImage2D(o.TEXTURE_2D,Et,0,0,Pt.width,Pt.height,Mt,Ot,Pt.data):i.texImage2D(o.TEXTURE_2D,Et,Nt,Pt.width,Pt.height,0,Mt,Ot,Pt.data)}else if(E.isDataArrayTexture)if(W){if(Ct&&i.texStorage3D(o.TEXTURE_2D_ARRAY,zt,Nt,bt.width,bt.height,bt.depth),At)if(E.layerUpdates.size>0){const Et=m_(bt.width,bt.height,E.format,E.type);for(const ft of E.layerUpdates){const It=bt.data.subarray(ft*Et/bt.data.BYTES_PER_ELEMENT,(ft+1)*Et/bt.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,ft,bt.width,bt.height,1,Mt,Ot,It)}E.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,bt.width,bt.height,bt.depth,Mt,Ot,bt.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Nt,bt.width,bt.height,bt.depth,0,Mt,Ot,bt.data);else if(E.isData3DTexture)W?(Ct&&i.texStorage3D(o.TEXTURE_3D,zt,Nt,bt.width,bt.height,bt.depth),At&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,bt.width,bt.height,bt.depth,Mt,Ot,bt.data)):i.texImage3D(o.TEXTURE_3D,0,Nt,bt.width,bt.height,bt.depth,0,Mt,Ot,bt.data);else if(E.isFramebufferTexture){if(Ct)if(W)i.texStorage2D(o.TEXTURE_2D,zt,Nt,bt.width,bt.height);else{let Et=bt.width,ft=bt.height;for(let It=0;It<zt;It++)i.texImage2D(o.TEXTURE_2D,It,Nt,Et,ft,0,Mt,Ot,null),Et>>=1,ft>>=1}}else if(ce.length>0){if(W&&Ct){const Et=qt(ce[0]);i.texStorage2D(o.TEXTURE_2D,zt,Nt,Et.width,Et.height)}for(let Et=0,ft=ce.length;Et<ft;Et++)Pt=ce[Et],W?At&&i.texSubImage2D(o.TEXTURE_2D,Et,0,0,Mt,Ot,Pt):i.texImage2D(o.TEXTURE_2D,Et,Nt,Mt,Ot,Pt);E.generateMipmaps=!1}else if(W){if(Ct){const Et=qt(bt);i.texStorage2D(o.TEXTURE_2D,zt,Nt,Et.width,Et.height)}At&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Mt,Ot,bt)}else i.texImage2D(o.TEXTURE_2D,0,Nt,Mt,Ot,bt);y(E)&&v(mt),Xt.__version=dt.version,E.onUpdate&&E.onUpdate(E)}O.__version=E.version}function xt(O,E,q){if(E.image.length!==6)return;const mt=vt(O,E),St=E.source;i.bindTexture(o.TEXTURE_CUBE_MAP,O.__webglTexture,o.TEXTURE0+q);const dt=s.get(St);if(St.version!==dt.__version||mt===!0){i.activeTexture(o.TEXTURE0+q);const Xt=Ae.getPrimaries(Ae.workingColorSpace),wt=E.colorSpace===es?null:Ae.getPrimaries(E.colorSpace),Zt=E.colorSpace===es||Xt===wt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Zt);const te=E.isCompressedTexture||E.image[0].isCompressedTexture,bt=E.image[0]&&E.image[0].isDataTexture,Mt=[];for(let ft=0;ft<6;ft++)!te&&!bt?Mt[ft]=w(E.image[ft],!0,l.maxCubemapSize):Mt[ft]=bt?E.image[ft].image:E.image[ft],Mt[ft]=Le(E,Mt[ft]);const Ot=Mt[0],Nt=c.convert(E.format,E.colorSpace),Pt=c.convert(E.type),ce=U(E.internalFormat,Nt,Pt,E.colorSpace),W=E.isVideoTexture!==!0,Ct=dt.__version===void 0||mt===!0,At=St.dataReady;let zt=I(E,Ot);j(o.TEXTURE_CUBE_MAP,E);let Et;if(te){W&&Ct&&i.texStorage2D(o.TEXTURE_CUBE_MAP,zt,ce,Ot.width,Ot.height);for(let ft=0;ft<6;ft++){Et=Mt[ft].mipmaps;for(let It=0;It<Et.length;It++){const ne=Et[It];E.format!==Ci?Nt!==null?W?At&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ft,It,0,0,ne.width,ne.height,Nt,ne.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ft,It,ce,ne.width,ne.height,0,ne.data):ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?At&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ft,It,0,0,ne.width,ne.height,Nt,Pt,ne.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ft,It,ce,ne.width,ne.height,0,Nt,Pt,ne.data)}}}else{if(Et=E.mipmaps,W&&Ct){Et.length>0&&zt++;const ft=qt(Mt[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,zt,ce,ft.width,ft.height)}for(let ft=0;ft<6;ft++)if(bt){W?At&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,0,0,Mt[ft].width,Mt[ft].height,Nt,Pt,Mt[ft].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,ce,Mt[ft].width,Mt[ft].height,0,Nt,Pt,Mt[ft].data);for(let It=0;It<Et.length;It++){const Oe=Et[It].image[ft].image;W?At&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ft,It+1,0,0,Oe.width,Oe.height,Nt,Pt,Oe.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ft,It+1,ce,Oe.width,Oe.height,0,Nt,Pt,Oe.data)}}else{W?At&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,0,0,Nt,Pt,Mt[ft]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,ce,Nt,Pt,Mt[ft]);for(let It=0;It<Et.length;It++){const ne=Et[It];W?At&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ft,It+1,0,0,Nt,Pt,ne.image[ft]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ft,It+1,ce,Nt,Pt,ne.image[ft])}}}y(E)&&v(o.TEXTURE_CUBE_MAP),dt.__version=St.version,E.onUpdate&&E.onUpdate(E)}O.__version=E.version}function Tt(O,E,q,mt,St,dt){const Xt=c.convert(q.format,q.colorSpace),wt=c.convert(q.type),Zt=U(q.internalFormat,Xt,wt,q.colorSpace),te=s.get(E),bt=s.get(q);if(bt.__renderTarget=E,!te.__hasExternalTextures){const Mt=Math.max(1,E.width>>dt),Ot=Math.max(1,E.height>>dt);St===o.TEXTURE_3D||St===o.TEXTURE_2D_ARRAY?i.texImage3D(St,dt,Zt,Mt,Ot,E.depth,0,Xt,wt,null):i.texImage2D(St,dt,Zt,Mt,Ot,0,Xt,wt,null)}i.bindFramebuffer(o.FRAMEBUFFER,O),We(E)?p.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,mt,St,bt.__webglTexture,0,V(E)):(St===o.TEXTURE_2D||St>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&St<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,mt,St,bt.__webglTexture,dt),i.bindFramebuffer(o.FRAMEBUFFER,null)}function kt(O,E,q){if(o.bindRenderbuffer(o.RENDERBUFFER,O),E.depthBuffer){const mt=E.depthTexture,St=mt&&mt.isDepthTexture?mt.type:null,dt=D(E.stencilBuffer,St),Xt=E.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;We(E)?p.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,V(E),dt,E.width,E.height):q?o.renderbufferStorageMultisample(o.RENDERBUFFER,V(E),dt,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,dt,E.width,E.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Xt,o.RENDERBUFFER,O)}else{const mt=E.textures;for(let St=0;St<mt.length;St++){const dt=mt[St],Xt=c.convert(dt.format,dt.colorSpace),wt=c.convert(dt.type),Zt=U(dt.internalFormat,Xt,wt,dt.colorSpace);We(E)?p.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,V(E),Zt,E.width,E.height):q?o.renderbufferStorageMultisample(o.RENDERBUFFER,V(E),Zt,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,Zt,E.width,E.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Kt(O,E,q){const mt=E.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(o.FRAMEBUFFER,O),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const St=s.get(E.depthTexture);if(St.__renderTarget=E,(!St.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),mt){if(St.__webglInit===void 0&&(St.__webglInit=!0,E.depthTexture.addEventListener("dispose",B)),St.__webglTexture===void 0){St.__webglTexture=o.createTexture(),i.bindTexture(o.TEXTURE_CUBE_MAP,St.__webglTexture),j(o.TEXTURE_CUBE_MAP,E.depthTexture);const te=c.convert(E.depthTexture.format),bt=c.convert(E.depthTexture.type);let Mt;E.depthTexture.format===ya?Mt=o.DEPTH_COMPONENT24:E.depthTexture.format===Ns&&(Mt=o.DEPTH24_STENCIL8);for(let Ot=0;Ot<6;Ot++)o.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ot,0,Mt,E.width,E.height,0,te,bt,null)}}else Y(E.depthTexture,0);const dt=St.__webglTexture,Xt=V(E),wt=mt?o.TEXTURE_CUBE_MAP_POSITIVE_X+q:o.TEXTURE_2D,Zt=E.depthTexture.format===Ns?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;if(E.depthTexture.format===ya)We(E)?p.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Zt,wt,dt,0,Xt):o.framebufferTexture2D(o.FRAMEBUFFER,Zt,wt,dt,0);else if(E.depthTexture.format===Ns)We(E)?p.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Zt,wt,dt,0,Xt):o.framebufferTexture2D(o.FRAMEBUFFER,Zt,wt,dt,0);else throw new Error("Unknown depthTexture format")}function $t(O){const E=s.get(O),q=O.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==O.depthTexture){const mt=O.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),mt){const St=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,mt.removeEventListener("dispose",St)};mt.addEventListener("dispose",St),E.__depthDisposeCallback=St}E.__boundDepthTexture=mt}if(O.depthTexture&&!E.__autoAllocateDepthBuffer)if(q)for(let mt=0;mt<6;mt++)Kt(E.__webglFramebuffer[mt],O,mt);else{const mt=O.texture.mipmaps;mt&&mt.length>0?Kt(E.__webglFramebuffer[0],O,0):Kt(E.__webglFramebuffer,O,0)}else if(q){E.__webglDepthbuffer=[];for(let mt=0;mt<6;mt++)if(i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[mt]),E.__webglDepthbuffer[mt]===void 0)E.__webglDepthbuffer[mt]=o.createRenderbuffer(),kt(E.__webglDepthbuffer[mt],O,!1);else{const St=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,dt=E.__webglDepthbuffer[mt];o.bindRenderbuffer(o.RENDERBUFFER,dt),o.framebufferRenderbuffer(o.FRAMEBUFFER,St,o.RENDERBUFFER,dt)}}else{const mt=O.texture.mipmaps;if(mt&&mt.length>0?i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=o.createRenderbuffer(),kt(E.__webglDepthbuffer,O,!1);else{const St=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,dt=E.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,dt),o.framebufferRenderbuffer(o.FRAMEBUFFER,St,o.RENDERBUFFER,dt)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function Ke(O,E,q){const mt=s.get(O);E!==void 0&&Tt(mt.__webglFramebuffer,O,O.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),q!==void 0&&$t(O)}function _e(O){const E=O.texture,q=s.get(O),mt=s.get(E);O.addEventListener("dispose",F);const St=O.textures,dt=O.isWebGLCubeRenderTarget===!0,Xt=St.length>1;if(Xt||(mt.__webglTexture===void 0&&(mt.__webglTexture=o.createTexture()),mt.__version=E.version,d.memory.textures++),dt){q.__webglFramebuffer=[];for(let wt=0;wt<6;wt++)if(E.mipmaps&&E.mipmaps.length>0){q.__webglFramebuffer[wt]=[];for(let Zt=0;Zt<E.mipmaps.length;Zt++)q.__webglFramebuffer[wt][Zt]=o.createFramebuffer()}else q.__webglFramebuffer[wt]=o.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){q.__webglFramebuffer=[];for(let wt=0;wt<E.mipmaps.length;wt++)q.__webglFramebuffer[wt]=o.createFramebuffer()}else q.__webglFramebuffer=o.createFramebuffer();if(Xt)for(let wt=0,Zt=St.length;wt<Zt;wt++){const te=s.get(St[wt]);te.__webglTexture===void 0&&(te.__webglTexture=o.createTexture(),d.memory.textures++)}if(O.samples>0&&We(O)===!1){q.__webglMultisampledFramebuffer=o.createFramebuffer(),q.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let wt=0;wt<St.length;wt++){const Zt=St[wt];q.__webglColorRenderbuffer[wt]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,q.__webglColorRenderbuffer[wt]);const te=c.convert(Zt.format,Zt.colorSpace),bt=c.convert(Zt.type),Mt=U(Zt.internalFormat,te,bt,Zt.colorSpace,O.isXRRenderTarget===!0),Ot=V(O);o.renderbufferStorageMultisample(o.RENDERBUFFER,Ot,Mt,O.width,O.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+wt,o.RENDERBUFFER,q.__webglColorRenderbuffer[wt])}o.bindRenderbuffer(o.RENDERBUFFER,null),O.depthBuffer&&(q.__webglDepthRenderbuffer=o.createRenderbuffer(),kt(q.__webglDepthRenderbuffer,O,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(dt){i.bindTexture(o.TEXTURE_CUBE_MAP,mt.__webglTexture),j(o.TEXTURE_CUBE_MAP,E);for(let wt=0;wt<6;wt++)if(E.mipmaps&&E.mipmaps.length>0)for(let Zt=0;Zt<E.mipmaps.length;Zt++)Tt(q.__webglFramebuffer[wt][Zt],O,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+wt,Zt);else Tt(q.__webglFramebuffer[wt],O,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0);y(E)&&v(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Xt){for(let wt=0,Zt=St.length;wt<Zt;wt++){const te=St[wt],bt=s.get(te);let Mt=o.TEXTURE_2D;(O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(Mt=O.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Mt,bt.__webglTexture),j(Mt,te),Tt(q.__webglFramebuffer,O,te,o.COLOR_ATTACHMENT0+wt,Mt,0),y(te)&&v(Mt)}i.unbindTexture()}else{let wt=o.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(wt=O.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(wt,mt.__webglTexture),j(wt,E),E.mipmaps&&E.mipmaps.length>0)for(let Zt=0;Zt<E.mipmaps.length;Zt++)Tt(q.__webglFramebuffer[Zt],O,E,o.COLOR_ATTACHMENT0,wt,Zt);else Tt(q.__webglFramebuffer,O,E,o.COLOR_ATTACHMENT0,wt,0);y(E)&&v(wt),i.unbindTexture()}O.depthBuffer&&$t(O)}function pe(O){const E=O.textures;for(let q=0,mt=E.length;q<mt;q++){const St=E[q];if(y(St)){const dt=C(O),Xt=s.get(St).__webglTexture;i.bindTexture(dt,Xt),v(dt),i.unbindTexture()}}}const De=[],oe=[];function Ze(O){if(O.samples>0){if(We(O)===!1){const E=O.textures,q=O.width,mt=O.height;let St=o.COLOR_BUFFER_BIT;const dt=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Xt=s.get(O),wt=E.length>1;if(wt)for(let te=0;te<E.length;te++)i.bindFramebuffer(o.FRAMEBUFFER,Xt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+te,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Xt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+te,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Xt.__webglMultisampledFramebuffer);const Zt=O.texture.mipmaps;Zt&&Zt.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Xt.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Xt.__webglFramebuffer);for(let te=0;te<E.length;te++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(St|=o.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(St|=o.STENCIL_BUFFER_BIT)),wt){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Xt.__webglColorRenderbuffer[te]);const bt=s.get(E[te]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,bt,0)}o.blitFramebuffer(0,0,q,mt,0,0,q,mt,St,o.NEAREST),m===!0&&(De.length=0,oe.length=0,De.push(o.COLOR_ATTACHMENT0+te),O.depthBuffer&&O.resolveDepthBuffer===!1&&(De.push(dt),oe.push(dt),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,oe)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,De))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),wt)for(let te=0;te<E.length;te++){i.bindFramebuffer(o.FRAMEBUFFER,Xt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+te,o.RENDERBUFFER,Xt.__webglColorRenderbuffer[te]);const bt=s.get(E[te]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Xt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+te,o.TEXTURE_2D,bt,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Xt.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.resolveDepthBuffer===!1&&m){const E=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[E])}}}function V(O){return Math.min(l.maxSamples,O.samples)}function We(O){const E=s.get(O);return O.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Me(O){const E=d.render.frame;x.get(O)!==E&&(x.set(O,E),O.update())}function Le(O,E){const q=O.colorSpace,mt=O.format,St=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||q!==zr&&q!==es&&(Ae.getTransfer(q)===Be?(mt!==Ci||St!==gi)&&ae("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Te("WebGLTextures: Unsupported texture color space:",q)),E}function qt(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(h.width=O.naturalWidth||O.width,h.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(h.width=O.displayWidth,h.height=O.displayHeight):(h.width=O.width,h.height=O.height),h}this.allocateTextureUnit=rt,this.resetTextureUnits=Q,this.setTexture2D=Y,this.setTexture2DArray=N,this.setTexture3D=z,this.setTextureCube=ot,this.rebindTextures=Ke,this.setupRenderTarget=_e,this.updateRenderTargetMipmap=pe,this.updateMultisampleRenderTarget=Ze,this.setupDepthRenderbuffer=$t,this.setupFrameBufferTexture=Tt,this.useMultisampledRTT=We,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function XT(o,e){function i(s,l=es){let c;const d=Ae.getTransfer(l);if(s===gi)return o.UNSIGNED_BYTE;if(s===Ih)return o.UNSIGNED_SHORT_4_4_4_4;if(s===Hh)return o.UNSIGNED_SHORT_5_5_5_1;if(s===$_)return o.UNSIGNED_INT_5_9_9_9_REV;if(s===tv)return o.UNSIGNED_INT_10F_11F_11F_REV;if(s===Q_)return o.BYTE;if(s===J_)return o.SHORT;if(s===Xo)return o.UNSIGNED_SHORT;if(s===Fh)return o.INT;if(s===Xi)return o.UNSIGNED_INT;if(s===Ii)return o.FLOAT;if(s===Sa)return o.HALF_FLOAT;if(s===ev)return o.ALPHA;if(s===nv)return o.RGB;if(s===Ci)return o.RGBA;if(s===ya)return o.DEPTH_COMPONENT;if(s===Ns)return o.DEPTH_STENCIL;if(s===iv)return o.RED;if(s===Gh)return o.RED_INTEGER;if(s===Pr)return o.RG;if(s===Vh)return o.RG_INTEGER;if(s===kh)return o.RGBA_INTEGER;if(s===zc||s===Bc||s===Fc||s===Ic)if(d===Be)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===zc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Bc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Fc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Ic)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===zc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Bc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Fc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Ic)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===th||s===eh||s===nh||s===ih)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===th)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===eh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===nh)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===ih)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===ah||s===sh||s===rh||s===oh||s===lh||s===ch||s===uh)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(s===ah||s===sh)return d===Be?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===rh)return d===Be?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(s===oh)return c.COMPRESSED_R11_EAC;if(s===lh)return c.COMPRESSED_SIGNED_R11_EAC;if(s===ch)return c.COMPRESSED_RG11_EAC;if(s===uh)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===fh||s===dh||s===hh||s===ph||s===mh||s===gh||s===_h||s===vh||s===xh||s===Sh||s===yh||s===Mh||s===Eh||s===bh)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(s===fh)return d===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===dh)return d===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===hh)return d===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===ph)return d===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===mh)return d===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===gh)return d===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===_h)return d===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===vh)return d===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===xh)return d===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Sh)return d===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===yh)return d===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Mh)return d===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Eh)return d===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===bh)return d===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Th||s===Ah||s===Rh)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(s===Th)return d===Be?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Ah)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Rh)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Ch||s===wh||s===Dh||s===Uh)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(s===Ch)return c.COMPRESSED_RED_RGTC1_EXT;if(s===wh)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Dh)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Uh)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Wo?o.UNSIGNED_INT_24_8:o[s]!==void 0?o[s]:null}return{convert:i}}const WT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,qT=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class YT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const s=new dv(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,s=new Wi({vertexShader:WT,fragmentShader:qT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Xn(new Zc(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class jT extends Fr{constructor(e,i){super();const s=this;let l=null,c=1,d=null,p="local-floor",m=1,h=null,x=null,S=null,_=null,M=null,b=null;const w=typeof XRWebGLBinding<"u",y=new YT,v={},C=i.getContextAttributes();let U=null,D=null;const I=[],B=[],F=new Ee;let T=null;const L=new mi;L.viewport=new an;const lt=new mi;lt.viewport=new an;const G=[L,lt],Q=new sM;let rt=null,J=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(at){let xt=I[at];return xt===void 0&&(xt=new vd,I[at]=xt),xt.getTargetRaySpace()},this.getControllerGrip=function(at){let xt=I[at];return xt===void 0&&(xt=new vd,I[at]=xt),xt.getGripSpace()},this.getHand=function(at){let xt=I[at];return xt===void 0&&(xt=new vd,I[at]=xt),xt.getHandSpace()};function Y(at){const xt=B.indexOf(at.inputSource);if(xt===-1)return;const Tt=I[xt];Tt!==void 0&&(Tt.update(at.inputSource,at.frame,h||d),Tt.dispatchEvent({type:at.type,data:at.inputSource}))}function N(){l.removeEventListener("select",Y),l.removeEventListener("selectstart",Y),l.removeEventListener("selectend",Y),l.removeEventListener("squeeze",Y),l.removeEventListener("squeezestart",Y),l.removeEventListener("squeezeend",Y),l.removeEventListener("end",N),l.removeEventListener("inputsourceschange",z);for(let at=0;at<I.length;at++){const xt=B[at];xt!==null&&(B[at]=null,I[at].disconnect(xt))}rt=null,J=null,y.reset();for(const at in v)delete v[at];e.setRenderTarget(U),M=null,_=null,S=null,l=null,D=null,Bt.stop(),s.isPresenting=!1,e.setPixelRatio(T),e.setSize(F.width,F.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(at){c=at,s.isPresenting===!0&&ae("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(at){p=at,s.isPresenting===!0&&ae("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||d},this.setReferenceSpace=function(at){h=at},this.getBaseLayer=function(){return _!==null?_:M},this.getBinding=function(){return S===null&&w&&(S=new XRWebGLBinding(l,i)),S},this.getFrame=function(){return b},this.getSession=function(){return l},this.setSession=async function(at){if(l=at,l!==null){if(U=e.getRenderTarget(),l.addEventListener("select",Y),l.addEventListener("selectstart",Y),l.addEventListener("selectend",Y),l.addEventListener("squeeze",Y),l.addEventListener("squeezestart",Y),l.addEventListener("squeezeend",Y),l.addEventListener("end",N),l.addEventListener("inputsourceschange",z),C.xrCompatible!==!0&&await i.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(F),w&&"createProjectionLayer"in XRWebGLBinding.prototype){let Tt=null,kt=null,Kt=null;C.depth&&(Kt=C.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Tt=C.stencil?Ns:ya,kt=C.stencil?Wo:Xi);const $t={colorFormat:i.RGBA8,depthFormat:Kt,scaleFactor:c};S=this.getBinding(),_=S.createProjectionLayer($t),l.updateRenderState({layers:[_]}),e.setPixelRatio(1),e.setSize(_.textureWidth,_.textureHeight,!1),D=new Vi(_.textureWidth,_.textureHeight,{format:Ci,type:gi,depthTexture:new qo(_.textureWidth,_.textureHeight,kt,void 0,void 0,void 0,void 0,void 0,void 0,Tt),stencilBuffer:C.stencil,colorSpace:e.outputColorSpace,samples:C.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}else{const Tt={antialias:C.antialias,alpha:!0,depth:C.depth,stencil:C.stencil,framebufferScaleFactor:c};M=new XRWebGLLayer(l,i,Tt),l.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),D=new Vi(M.framebufferWidth,M.framebufferHeight,{format:Ci,type:gi,colorSpace:e.outputColorSpace,stencilBuffer:C.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}D.isXRRenderTarget=!0,this.setFoveation(m),h=null,d=await l.requestReferenceSpace(p),Bt.setContext(l),Bt.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function z(at){for(let xt=0;xt<at.removed.length;xt++){const Tt=at.removed[xt],kt=B.indexOf(Tt);kt>=0&&(B[kt]=null,I[kt].disconnect(Tt))}for(let xt=0;xt<at.added.length;xt++){const Tt=at.added[xt];let kt=B.indexOf(Tt);if(kt===-1){for(let $t=0;$t<I.length;$t++)if($t>=B.length){B.push(Tt),kt=$t;break}else if(B[$t]===null){B[$t]=Tt,kt=$t;break}if(kt===-1)break}const Kt=I[kt];Kt&&Kt.connect(Tt)}}const ot=new tt,ht=new tt;function yt(at,xt,Tt){ot.setFromMatrixPosition(xt.matrixWorld),ht.setFromMatrixPosition(Tt.matrixWorld);const kt=ot.distanceTo(ht),Kt=xt.projectionMatrix.elements,$t=Tt.projectionMatrix.elements,Ke=Kt[14]/(Kt[10]-1),_e=Kt[14]/(Kt[10]+1),pe=(Kt[9]+1)/Kt[5],De=(Kt[9]-1)/Kt[5],oe=(Kt[8]-1)/Kt[0],Ze=($t[8]+1)/$t[0],V=Ke*oe,We=Ke*Ze,Me=kt/(-oe+Ze),Le=Me*-oe;if(xt.matrixWorld.decompose(at.position,at.quaternion,at.scale),at.translateX(Le),at.translateZ(Me),at.matrixWorld.compose(at.position,at.quaternion,at.scale),at.matrixWorldInverse.copy(at.matrixWorld).invert(),Kt[10]===-1)at.projectionMatrix.copy(xt.projectionMatrix),at.projectionMatrixInverse.copy(xt.projectionMatrixInverse);else{const qt=Ke+Me,O=_e+Me,E=V-Le,q=We+(kt-Le),mt=pe*_e/O*qt,St=De*_e/O*qt;at.projectionMatrix.makePerspective(E,q,mt,St,qt,O),at.projectionMatrixInverse.copy(at.projectionMatrix).invert()}}function P(at,xt){xt===null?at.matrixWorld.copy(at.matrix):at.matrixWorld.multiplyMatrices(xt.matrixWorld,at.matrix),at.matrixWorldInverse.copy(at.matrixWorld).invert()}this.updateCamera=function(at){if(l===null)return;let xt=at.near,Tt=at.far;y.texture!==null&&(y.depthNear>0&&(xt=y.depthNear),y.depthFar>0&&(Tt=y.depthFar)),Q.near=lt.near=L.near=xt,Q.far=lt.far=L.far=Tt,(rt!==Q.near||J!==Q.far)&&(l.updateRenderState({depthNear:Q.near,depthFar:Q.far}),rt=Q.near,J=Q.far),Q.layers.mask=at.layers.mask|6,L.layers.mask=Q.layers.mask&-5,lt.layers.mask=Q.layers.mask&-3;const kt=at.parent,Kt=Q.cameras;P(Q,kt);for(let $t=0;$t<Kt.length;$t++)P(Kt[$t],kt);Kt.length===2?yt(Q,L,lt):Q.projectionMatrix.copy(L.projectionMatrix),j(at,Q,kt)};function j(at,xt,Tt){Tt===null?at.matrix.copy(xt.matrixWorld):(at.matrix.copy(Tt.matrixWorld),at.matrix.invert(),at.matrix.multiply(xt.matrixWorld)),at.matrix.decompose(at.position,at.quaternion,at.scale),at.updateMatrixWorld(!0),at.projectionMatrix.copy(xt.projectionMatrix),at.projectionMatrixInverse.copy(xt.projectionMatrixInverse),at.isPerspectiveCamera&&(at.fov=Lh*2*Math.atan(1/at.projectionMatrix.elements[5]),at.zoom=1)}this.getCamera=function(){return Q},this.getFoveation=function(){if(!(_===null&&M===null))return m},this.setFoveation=function(at){m=at,_!==null&&(_.fixedFoveation=at),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=at)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(Q)},this.getCameraTexture=function(at){return v[at]};let vt=null;function Rt(at,xt){if(x=xt.getViewerPose(h||d),b=xt,x!==null){const Tt=x.views;M!==null&&(e.setRenderTargetFramebuffer(D,M.framebuffer),e.setRenderTarget(D));let kt=!1;Tt.length!==Q.cameras.length&&(Q.cameras.length=0,kt=!0);for(let _e=0;_e<Tt.length;_e++){const pe=Tt[_e];let De=null;if(M!==null)De=M.getViewport(pe);else{const Ze=S.getViewSubImage(_,pe);De=Ze.viewport,_e===0&&(e.setRenderTargetTextures(D,Ze.colorTexture,Ze.depthStencilTexture),e.setRenderTarget(D))}let oe=G[_e];oe===void 0&&(oe=new mi,oe.layers.enable(_e),oe.viewport=new an,G[_e]=oe),oe.matrix.fromArray(pe.transform.matrix),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale),oe.projectionMatrix.fromArray(pe.projectionMatrix),oe.projectionMatrixInverse.copy(oe.projectionMatrix).invert(),oe.viewport.set(De.x,De.y,De.width,De.height),_e===0&&(Q.matrix.copy(oe.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale)),kt===!0&&Q.cameras.push(oe)}const Kt=l.enabledFeatures;if(Kt&&Kt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&w){S=s.getBinding();const _e=S.getDepthInformation(Tt[0]);_e&&_e.isValid&&_e.texture&&y.init(_e,l.renderState)}if(Kt&&Kt.includes("camera-access")&&w){e.state.unbindTexture(),S=s.getBinding();for(let _e=0;_e<Tt.length;_e++){const pe=Tt[_e].camera;if(pe){let De=v[pe];De||(De=new dv,v[pe]=De);const oe=S.getCameraImage(pe);De.sourceTexture=oe}}}}for(let Tt=0;Tt<I.length;Tt++){const kt=B[Tt],Kt=I[Tt];kt!==null&&Kt!==void 0&&Kt.update(kt,xt,h||d)}vt&&vt(at,xt),xt.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:xt}),b=null}const Bt=new gv;Bt.setAnimationLoop(Rt),this.setAnimationLoop=function(at){vt=at},this.dispose=function(){}}}const Rs=new Ma,ZT=new tn;function KT(o,e){function i(y,v){y.matrixAutoUpdate===!0&&y.updateMatrix(),v.value.copy(y.matrix)}function s(y,v){v.color.getRGB(y.fogColor.value,hv(o)),v.isFog?(y.fogNear.value=v.near,y.fogFar.value=v.far):v.isFogExp2&&(y.fogDensity.value=v.density)}function l(y,v,C,U,D){v.isMeshBasicMaterial?c(y,v):v.isMeshLambertMaterial?(c(y,v),v.envMap&&(y.envMapIntensity.value=v.envMapIntensity)):v.isMeshToonMaterial?(c(y,v),S(y,v)):v.isMeshPhongMaterial?(c(y,v),x(y,v),v.envMap&&(y.envMapIntensity.value=v.envMapIntensity)):v.isMeshStandardMaterial?(c(y,v),_(y,v),v.isMeshPhysicalMaterial&&M(y,v,D)):v.isMeshMatcapMaterial?(c(y,v),b(y,v)):v.isMeshDepthMaterial?c(y,v):v.isMeshDistanceMaterial?(c(y,v),w(y,v)):v.isMeshNormalMaterial?c(y,v):v.isLineBasicMaterial?(d(y,v),v.isLineDashedMaterial&&p(y,v)):v.isPointsMaterial?m(y,v,C,U):v.isSpriteMaterial?h(y,v):v.isShadowMaterial?(y.color.value.copy(v.color),y.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function c(y,v){y.opacity.value=v.opacity,v.color&&y.diffuse.value.copy(v.color),v.emissive&&y.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(y.map.value=v.map,i(v.map,y.mapTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,i(v.alphaMap,y.alphaMapTransform)),v.bumpMap&&(y.bumpMap.value=v.bumpMap,i(v.bumpMap,y.bumpMapTransform),y.bumpScale.value=v.bumpScale,v.side===Wn&&(y.bumpScale.value*=-1)),v.normalMap&&(y.normalMap.value=v.normalMap,i(v.normalMap,y.normalMapTransform),y.normalScale.value.copy(v.normalScale),v.side===Wn&&y.normalScale.value.negate()),v.displacementMap&&(y.displacementMap.value=v.displacementMap,i(v.displacementMap,y.displacementMapTransform),y.displacementScale.value=v.displacementScale,y.displacementBias.value=v.displacementBias),v.emissiveMap&&(y.emissiveMap.value=v.emissiveMap,i(v.emissiveMap,y.emissiveMapTransform)),v.specularMap&&(y.specularMap.value=v.specularMap,i(v.specularMap,y.specularMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest);const C=e.get(v),U=C.envMap,D=C.envMapRotation;U&&(y.envMap.value=U,Rs.copy(D),Rs.x*=-1,Rs.y*=-1,Rs.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(Rs.y*=-1,Rs.z*=-1),y.envMapRotation.value.setFromMatrix4(ZT.makeRotationFromEuler(Rs)),y.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=v.reflectivity,y.ior.value=v.ior,y.refractionRatio.value=v.refractionRatio),v.lightMap&&(y.lightMap.value=v.lightMap,y.lightMapIntensity.value=v.lightMapIntensity,i(v.lightMap,y.lightMapTransform)),v.aoMap&&(y.aoMap.value=v.aoMap,y.aoMapIntensity.value=v.aoMapIntensity,i(v.aoMap,y.aoMapTransform))}function d(y,v){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,v.map&&(y.map.value=v.map,i(v.map,y.mapTransform))}function p(y,v){y.dashSize.value=v.dashSize,y.totalSize.value=v.dashSize+v.gapSize,y.scale.value=v.scale}function m(y,v,C,U){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,y.size.value=v.size*C,y.scale.value=U*.5,v.map&&(y.map.value=v.map,i(v.map,y.uvTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,i(v.alphaMap,y.alphaMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest)}function h(y,v){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,y.rotation.value=v.rotation,v.map&&(y.map.value=v.map,i(v.map,y.mapTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,i(v.alphaMap,y.alphaMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest)}function x(y,v){y.specular.value.copy(v.specular),y.shininess.value=Math.max(v.shininess,1e-4)}function S(y,v){v.gradientMap&&(y.gradientMap.value=v.gradientMap)}function _(y,v){y.metalness.value=v.metalness,v.metalnessMap&&(y.metalnessMap.value=v.metalnessMap,i(v.metalnessMap,y.metalnessMapTransform)),y.roughness.value=v.roughness,v.roughnessMap&&(y.roughnessMap.value=v.roughnessMap,i(v.roughnessMap,y.roughnessMapTransform)),v.envMap&&(y.envMapIntensity.value=v.envMapIntensity)}function M(y,v,C){y.ior.value=v.ior,v.sheen>0&&(y.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),y.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(y.sheenColorMap.value=v.sheenColorMap,i(v.sheenColorMap,y.sheenColorMapTransform)),v.sheenRoughnessMap&&(y.sheenRoughnessMap.value=v.sheenRoughnessMap,i(v.sheenRoughnessMap,y.sheenRoughnessMapTransform))),v.clearcoat>0&&(y.clearcoat.value=v.clearcoat,y.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(y.clearcoatMap.value=v.clearcoatMap,i(v.clearcoatMap,y.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,i(v.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(y.clearcoatNormalMap.value=v.clearcoatNormalMap,i(v.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===Wn&&y.clearcoatNormalScale.value.negate())),v.dispersion>0&&(y.dispersion.value=v.dispersion),v.iridescence>0&&(y.iridescence.value=v.iridescence,y.iridescenceIOR.value=v.iridescenceIOR,y.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(y.iridescenceMap.value=v.iridescenceMap,i(v.iridescenceMap,y.iridescenceMapTransform)),v.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=v.iridescenceThicknessMap,i(v.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),v.transmission>0&&(y.transmission.value=v.transmission,y.transmissionSamplerMap.value=C.texture,y.transmissionSamplerSize.value.set(C.width,C.height),v.transmissionMap&&(y.transmissionMap.value=v.transmissionMap,i(v.transmissionMap,y.transmissionMapTransform)),y.thickness.value=v.thickness,v.thicknessMap&&(y.thicknessMap.value=v.thicknessMap,i(v.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=v.attenuationDistance,y.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(y.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(y.anisotropyMap.value=v.anisotropyMap,i(v.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=v.specularIntensity,y.specularColor.value.copy(v.specularColor),v.specularColorMap&&(y.specularColorMap.value=v.specularColorMap,i(v.specularColorMap,y.specularColorMapTransform)),v.specularIntensityMap&&(y.specularIntensityMap.value=v.specularIntensityMap,i(v.specularIntensityMap,y.specularIntensityMapTransform))}function b(y,v){v.matcap&&(y.matcap.value=v.matcap)}function w(y,v){const C=e.get(v).light;y.referencePosition.value.setFromMatrixPosition(C.matrixWorld),y.nearDistance.value=C.shadow.camera.near,y.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function QT(o,e,i,s){let l={},c={},d=[];const p=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(C,U){const D=U.program;s.uniformBlockBinding(C,D)}function h(C,U){let D=l[C.id];D===void 0&&(b(C),D=x(C),l[C.id]=D,C.addEventListener("dispose",y));const I=U.program;s.updateUBOMapping(C,I);const B=e.render.frame;c[C.id]!==B&&(_(C),c[C.id]=B)}function x(C){const U=S();C.__bindingPointIndex=U;const D=o.createBuffer(),I=C.__size,B=C.usage;return o.bindBuffer(o.UNIFORM_BUFFER,D),o.bufferData(o.UNIFORM_BUFFER,I,B),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,U,D),D}function S(){for(let C=0;C<p;C++)if(d.indexOf(C)===-1)return d.push(C),C;return Te("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(C){const U=l[C.id],D=C.uniforms,I=C.__cache;o.bindBuffer(o.UNIFORM_BUFFER,U);for(let B=0,F=D.length;B<F;B++){const T=Array.isArray(D[B])?D[B]:[D[B]];for(let L=0,lt=T.length;L<lt;L++){const G=T[L];if(M(G,B,L,I)===!0){const Q=G.__offset,rt=Array.isArray(G.value)?G.value:[G.value];let J=0;for(let Y=0;Y<rt.length;Y++){const N=rt[Y],z=w(N);typeof N=="number"||typeof N=="boolean"?(G.__data[0]=N,o.bufferSubData(o.UNIFORM_BUFFER,Q+J,G.__data)):N.isMatrix3?(G.__data[0]=N.elements[0],G.__data[1]=N.elements[1],G.__data[2]=N.elements[2],G.__data[3]=0,G.__data[4]=N.elements[3],G.__data[5]=N.elements[4],G.__data[6]=N.elements[5],G.__data[7]=0,G.__data[8]=N.elements[6],G.__data[9]=N.elements[7],G.__data[10]=N.elements[8],G.__data[11]=0):(N.toArray(G.__data,J),J+=z.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,Q,G.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function M(C,U,D,I){const B=C.value,F=U+"_"+D;if(I[F]===void 0)return typeof B=="number"||typeof B=="boolean"?I[F]=B:I[F]=B.clone(),!0;{const T=I[F];if(typeof B=="number"||typeof B=="boolean"){if(T!==B)return I[F]=B,!0}else if(T.equals(B)===!1)return T.copy(B),!0}return!1}function b(C){const U=C.uniforms;let D=0;const I=16;for(let F=0,T=U.length;F<T;F++){const L=Array.isArray(U[F])?U[F]:[U[F]];for(let lt=0,G=L.length;lt<G;lt++){const Q=L[lt],rt=Array.isArray(Q.value)?Q.value:[Q.value];for(let J=0,Y=rt.length;J<Y;J++){const N=rt[J],z=w(N),ot=D%I,ht=ot%z.boundary,yt=ot+ht;D+=ht,yt!==0&&I-yt<z.storage&&(D+=I-yt),Q.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),Q.__offset=D,D+=z.storage}}}const B=D%I;return B>0&&(D+=I-B),C.__size=D,C.__cache={},this}function w(C){const U={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(U.boundary=4,U.storage=4):C.isVector2?(U.boundary=8,U.storage=8):C.isVector3||C.isColor?(U.boundary=16,U.storage=12):C.isVector4?(U.boundary=16,U.storage=16):C.isMatrix3?(U.boundary=48,U.storage=48):C.isMatrix4?(U.boundary=64,U.storage=64):C.isTexture?ae("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ae("WebGLRenderer: Unsupported uniform value type.",C),U}function y(C){const U=C.target;U.removeEventListener("dispose",y);const D=d.indexOf(U.__bindingPointIndex);d.splice(D,1),o.deleteBuffer(l[U.id]),delete l[U.id],delete c[U.id]}function v(){for(const C in l)o.deleteBuffer(l[C]);d=[],l={},c={}}return{bind:m,update:h,dispose:v}}const JT=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let zi=null;function $T(){return zi===null&&(zi=new Xy(JT,16,16,Pr,Sa),zi.name="DFG_LUT",zi.minFilter=wn,zi.magFilter=wn,zi.wrapS=_a,zi.wrapT=_a,zi.generateMipmaps=!1,zi.needsUpdate=!0),zi}class tA{constructor(e={}){const{canvas:i=yy(),context:s=null,depth:l=!0,stencil:c=!1,alpha:d=!1,antialias:p=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:h=!1,powerPreference:x="default",failIfMajorPerformanceCaveat:S=!1,reversedDepthBuffer:_=!1,outputBufferType:M=gi}=e;this.isWebGLRenderer=!0;let b;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");b=s.getContextAttributes().alpha}else b=d;const w=M,y=new Set([kh,Vh,Gh]),v=new Set([gi,Xi,Xo,Wo,Ih,Hh]),C=new Uint32Array(4),U=new Int32Array(4);let D=null,I=null;const B=[],F=[];let T=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Gi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const L=this;let lt=!1;this._outputColorSpace=pi;let G=0,Q=0,rt=null,J=-1,Y=null;const N=new an,z=new an;let ot=null;const ht=new Fe(0);let yt=0,P=i.width,j=i.height,vt=1,Rt=null,Bt=null;const at=new an(0,0,P,j),xt=new an(0,0,P,j);let Tt=!1;const kt=new cv;let Kt=!1,$t=!1;const Ke=new tn,_e=new tt,pe=new an,De={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let oe=!1;function Ze(){return rt===null?vt:1}let V=s;function We(R,X){return i.getContext(R,X)}try{const R={alpha:!0,depth:l,stencil:c,antialias:p,premultipliedAlpha:m,preserveDrawingBuffer:h,powerPreference:x,failIfMajorPerformanceCaveat:S};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Bh}`),i.addEventListener("webglcontextlost",It,!1),i.addEventListener("webglcontextrestored",ne,!1),i.addEventListener("webglcontextcreationerror",Oe,!1),V===null){const X="webgl2";if(V=We(X,R),V===null)throw We(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw Te("WebGLRenderer: "+R.message),R}let Me,Le,qt,O,E,q,mt,St,dt,Xt,wt,Zt,te,bt,Mt,Ot,Nt,Pt,ce,W,Ct,At,zt;function Et(){Me=new tb(V),Me.init(),Ct=new XT(V,Me),Le=new q1(V,Me,e,Ct),qt=new VT(V,Me),Le.reversedDepthBuffer&&_&&qt.buffers.depth.setReversed(!0),O=new ib(V),E=new CT,q=new kT(V,Me,qt,E,Le,Ct,O),mt=new $1(L),St=new lM(V),At=new X1(V,St),dt=new eb(V,St,O,At),Xt=new sb(V,dt,St,At,O),Pt=new ab(V,Le,q),Mt=new Y1(E),wt=new RT(L,mt,Me,Le,At,Mt),Zt=new KT(L,E),te=new DT,bt=new zT(Me),Nt=new k1(L,mt,qt,Xt,b,m),Ot=new GT(L,Xt,Le),zt=new QT(V,O,Le,qt),ce=new W1(V,Me,O),W=new nb(V,Me,O),O.programs=wt.programs,L.capabilities=Le,L.extensions=Me,L.properties=E,L.renderLists=te,L.shadowMap=Ot,L.state=qt,L.info=O}Et(),w!==gi&&(T=new ob(w,i.width,i.height,l,c));const ft=new jT(L,V);this.xr=ft,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const R=Me.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Me.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return vt},this.setPixelRatio=function(R){R!==void 0&&(vt=R,this.setSize(P,j,!1))},this.getSize=function(R){return R.set(P,j)},this.setSize=function(R,X,ct=!0){if(ft.isPresenting){ae("WebGLRenderer: Can't change size while VR device is presenting.");return}P=R,j=X,i.width=Math.floor(R*vt),i.height=Math.floor(X*vt),ct===!0&&(i.style.width=R+"px",i.style.height=X+"px"),T!==null&&T.setSize(i.width,i.height),this.setViewport(0,0,R,X)},this.getDrawingBufferSize=function(R){return R.set(P*vt,j*vt).floor()},this.setDrawingBufferSize=function(R,X,ct){P=R,j=X,vt=ct,i.width=Math.floor(R*ct),i.height=Math.floor(X*ct),this.setViewport(0,0,R,X)},this.setEffects=function(R){if(w===gi){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let X=0;X<R.length;X++)if(R[X].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(N)},this.getViewport=function(R){return R.copy(at)},this.setViewport=function(R,X,ct,it){R.isVector4?at.set(R.x,R.y,R.z,R.w):at.set(R,X,ct,it),qt.viewport(N.copy(at).multiplyScalar(vt).round())},this.getScissor=function(R){return R.copy(xt)},this.setScissor=function(R,X,ct,it){R.isVector4?xt.set(R.x,R.y,R.z,R.w):xt.set(R,X,ct,it),qt.scissor(z.copy(xt).multiplyScalar(vt).round())},this.getScissorTest=function(){return Tt},this.setScissorTest=function(R){qt.setScissorTest(Tt=R)},this.setOpaqueSort=function(R){Rt=R},this.setTransparentSort=function(R){Bt=R},this.getClearColor=function(R){return R.copy(Nt.getClearColor())},this.setClearColor=function(){Nt.setClearColor(...arguments)},this.getClearAlpha=function(){return Nt.getClearAlpha()},this.setClearAlpha=function(){Nt.setClearAlpha(...arguments)},this.clear=function(R=!0,X=!0,ct=!0){let it=0;if(R){let $=!1;if(rt!==null){const Dt=rt.texture.format;$=y.has(Dt)}if($){const Dt=rt.texture.type,Ft=v.has(Dt),Ut=Nt.getClearColor(),Wt=Nt.getClearAlpha(),jt=Ut.r,ee=Ut.g,se=Ut.b;Ft?(C[0]=jt,C[1]=ee,C[2]=se,C[3]=Wt,V.clearBufferuiv(V.COLOR,0,C)):(U[0]=jt,U[1]=ee,U[2]=se,U[3]=Wt,V.clearBufferiv(V.COLOR,0,U))}else it|=V.COLOR_BUFFER_BIT}X&&(it|=V.DEPTH_BUFFER_BIT),ct&&(it|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),it!==0&&V.clear(it)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",It,!1),i.removeEventListener("webglcontextrestored",ne,!1),i.removeEventListener("webglcontextcreationerror",Oe,!1),Nt.dispose(),te.dispose(),bt.dispose(),E.dispose(),mt.dispose(),Xt.dispose(),At.dispose(),zt.dispose(),wt.dispose(),ft.dispose(),ft.removeEventListener("sessionstart",zs),ft.removeEventListener("sessionend",Bs),Di.stop()};function It(R){R.preventDefault(),jg("WebGLRenderer: Context Lost."),lt=!0}function ne(){jg("WebGLRenderer: Context Restored."),lt=!1;const R=O.autoReset,X=Ot.enabled,ct=Ot.autoUpdate,it=Ot.needsUpdate,$=Ot.type;Et(),O.autoReset=R,Ot.enabled=X,Ot.autoUpdate=ct,Ot.needsUpdate=it,Ot.type=$}function Oe(R){Te("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function be(R){const X=R.target;X.removeEventListener("dispose",be),Dn(X)}function Dn(R){_i(R),E.remove(R)}function _i(R){const X=E.get(R).programs;X!==void 0&&(X.forEach(function(ct){wt.releaseProgram(ct)}),R.isShaderMaterial&&wt.releaseShaderCache(R))}this.renderBufferDirect=function(R,X,ct,it,$,Dt){X===null&&(X=De);const Ft=$.isMesh&&$.matrixWorld.determinant()<0,Ut=tl(R,X,ct,it,$);qt.setMaterial(it,Ft);let Wt=ct.index,jt=1;if(it.wireframe===!0){if(Wt=dt.getWireframeAttribute(ct),Wt===void 0)return;jt=2}const ee=ct.drawRange,se=ct.attributes.position;let Ht=ee.start*jt,ue=(ee.start+ee.count)*jt;Dt!==null&&(Ht=Math.max(Ht,Dt.start*jt),ue=Math.min(ue,(Dt.start+Dt.count)*jt)),Wt!==null?(Ht=Math.max(Ht,0),ue=Math.min(ue,Wt.count)):se!=null&&(Ht=Math.max(Ht,0),ue=Math.min(ue,se.count));const qe=ue-Ht;if(qe<0||qe===1/0)return;At.setup($,it,Ut,ct,Wt);let Ye,Re=ce;if(Wt!==null&&(Ye=St.get(Wt),Re=W,Re.setIndex(Ye)),$.isMesh)it.wireframe===!0?(qt.setLineWidth(it.wireframeLinewidth*Ze()),Re.setMode(V.LINES)):Re.setMode(V.TRIANGLES);else if($.isLine){let pn=it.linewidth;pn===void 0&&(pn=1),qt.setLineWidth(pn*Ze()),$.isLineSegments?Re.setMode(V.LINES):$.isLineLoop?Re.setMode(V.LINE_LOOP):Re.setMode(V.LINE_STRIP)}else $.isPoints?Re.setMode(V.POINTS):$.isSprite&&Re.setMode(V.TRIANGLES);if($.isBatchedMesh)if($._multiDrawInstances!==null)Xc("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Re.renderMultiDrawInstances($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount,$._multiDrawInstances);else if(Me.get("WEBGL_multi_draw"))Re.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{const pn=$._multiDrawStarts,Vt=$._multiDrawCounts,Un=$._multiDrawCount,ie=Wt?St.get(Wt).bytesPerElement:1,Ln=E.get(it).currentProgram.getUniforms();for(let jn=0;jn<Un;jn++)Ln.setValue(V,"_gl_DrawID",jn),Re.render(pn[jn]/ie,Vt[jn])}else if($.isInstancedMesh)Re.renderInstances(Ht,qe,$.count);else if(ct.isInstancedBufferGeometry){const pn=ct._maxInstanceCount!==void 0?ct._maxInstanceCount:1/0,Vt=Math.min(ct.instanceCount,pn);Re.renderInstances(Ht,qe,Vt)}else Re.render(Ht,qe)};function Gr(R,X,ct){R.transparent===!0&&R.side===Fi&&R.forceSinglePass===!1?(R.side=Wn,R.needsUpdate=!0,Ea(R,X,ct),R.side=is,R.needsUpdate=!0,Ea(R,X,ct),R.side=Fi):Ea(R,X,ct)}this.compile=function(R,X,ct=null){ct===null&&(ct=R),I=bt.get(ct),I.init(X),F.push(I),ct.traverseVisible(function($){$.isLight&&$.layers.test(X.layers)&&(I.pushLight($),$.castShadow&&I.pushShadow($))}),R!==ct&&R.traverseVisible(function($){$.isLight&&$.layers.test(X.layers)&&(I.pushLight($),$.castShadow&&I.pushShadow($))}),I.setupLights();const it=new Set;return R.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;const Dt=$.material;if(Dt)if(Array.isArray(Dt))for(let Ft=0;Ft<Dt.length;Ft++){const Ut=Dt[Ft];Gr(Ut,ct,$),it.add(Ut)}else Gr(Dt,ct,$),it.add(Dt)}),I=F.pop(),it},this.compileAsync=function(R,X,ct=null){const it=this.compile(R,X,ct);return new Promise($=>{function Dt(){if(it.forEach(function(Ft){E.get(Ft).currentProgram.isReady()&&it.delete(Ft)}),it.size===0){$(R);return}setTimeout(Dt,10)}Me.get("KHR_parallel_shader_compile")!==null?Dt():setTimeout(Dt,10)})};let Ps=null;function Qo(R){Ps&&Ps(R)}function zs(){Di.stop()}function Bs(){Di.start()}const Di=new gv;Di.setAnimationLoop(Qo),typeof self<"u"&&Di.setContext(self),this.setAnimationLoop=function(R){Ps=R,ft.setAnimationLoop(R),R===null?Di.stop():Di.start()},ft.addEventListener("sessionstart",zs),ft.addEventListener("sessionend",Bs),this.render=function(R,X){if(X!==void 0&&X.isCamera!==!0){Te("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(lt===!0)return;const ct=ft.enabled===!0&&ft.isPresenting===!0,it=T!==null&&(rt===null||ct)&&T.begin(L,rt);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),ft.enabled===!0&&ft.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(ft.cameraAutoUpdate===!0&&ft.updateCamera(X),X=ft.getCamera()),R.isScene===!0&&R.onBeforeRender(L,R,X,rt),I=bt.get(R,F.length),I.init(X),F.push(I),Ke.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),kt.setFromProjectionMatrix(Ke,Hi,X.reversedDepth),$t=this.localClippingEnabled,Kt=Mt.init(this.clippingPlanes,$t),D=te.get(R,B.length),D.init(),B.push(D),ft.enabled===!0&&ft.isPresenting===!0){const Ft=L.xr.getDepthSensingMesh();Ft!==null&&Fs(Ft,X,-1/0,L.sortObjects)}Fs(R,X,0,L.sortObjects),D.finish(),L.sortObjects===!0&&D.sort(Rt,Bt),oe=ft.enabled===!1||ft.isPresenting===!1||ft.hasDepthSensing()===!1,oe&&Nt.addToRenderList(D,R),this.info.render.frame++,Kt===!0&&Mt.beginShadows();const $=I.state.shadowsArray;if(Ot.render($,R,X),Kt===!0&&Mt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(it&&T.hasRenderPass())===!1){const Ft=D.opaque,Ut=D.transmissive;if(I.setupLights(),X.isArrayCamera){const Wt=X.cameras;if(Ut.length>0)for(let jt=0,ee=Wt.length;jt<ee;jt++){const se=Wt[jt];sn(Ft,Ut,R,se)}oe&&Nt.render(R);for(let jt=0,ee=Wt.length;jt<ee;jt++){const se=Wt[jt];vi(D,R,se,se.viewport)}}else Ut.length>0&&sn(Ft,Ut,R,X),oe&&Nt.render(R),vi(D,R,X)}rt!==null&&Q===0&&(q.updateMultisampleRenderTarget(rt),q.updateRenderTargetMipmap(rt)),it&&T.end(L),R.isScene===!0&&R.onAfterRender(L,R,X),At.resetDefaultState(),J=-1,Y=null,F.pop(),F.length>0?(I=F[F.length-1],Kt===!0&&Mt.setGlobalState(L.clippingPlanes,I.state.camera)):I=null,B.pop(),B.length>0?D=B[B.length-1]:D=null};function Fs(R,X,ct,it){if(R.visible===!1)return;if(R.layers.test(X.layers)){if(R.isGroup)ct=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(X);else if(R.isLight)I.pushLight(R),R.castShadow&&I.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||kt.intersectsSprite(R)){it&&pe.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Ke);const Ft=Xt.update(R),Ut=R.material;Ut.visible&&D.push(R,Ft,Ut,ct,pe.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||kt.intersectsObject(R))){const Ft=Xt.update(R),Ut=R.material;if(it&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),pe.copy(R.boundingSphere.center)):(Ft.boundingSphere===null&&Ft.computeBoundingSphere(),pe.copy(Ft.boundingSphere.center)),pe.applyMatrix4(R.matrixWorld).applyMatrix4(Ke)),Array.isArray(Ut)){const Wt=Ft.groups;for(let jt=0,ee=Wt.length;jt<ee;jt++){const se=Wt[jt],Ht=Ut[se.materialIndex];Ht&&Ht.visible&&D.push(R,Ft,Ht,ct,pe.z,se)}}else Ut.visible&&D.push(R,Ft,Ut,ct,pe.z,null)}}const Dt=R.children;for(let Ft=0,Ut=Dt.length;Ft<Ut;Ft++)Fs(Dt[Ft],X,ct,it)}function vi(R,X,ct,it){const{opaque:$,transmissive:Dt,transparent:Ft}=R;I.setupLightsView(ct),Kt===!0&&Mt.setGlobalState(L.clippingPlanes,ct),it&&qt.viewport(N.copy(it)),$.length>0&&hn($,X,ct),Dt.length>0&&hn(Dt,X,ct),Ft.length>0&&hn(Ft,X,ct),qt.buffers.depth.setTest(!0),qt.buffers.depth.setMask(!0),qt.buffers.color.setMask(!0),qt.setPolygonOffset(!1)}function sn(R,X,ct,it){if((ct.isScene===!0?ct.overrideMaterial:null)!==null)return;if(I.state.transmissionRenderTarget[it.id]===void 0){const Ht=Me.has("EXT_color_buffer_half_float")||Me.has("EXT_color_buffer_float");I.state.transmissionRenderTarget[it.id]=new Vi(1,1,{generateMipmaps:!0,type:Ht?Sa:gi,minFilter:Ls,samples:Math.max(4,Le.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ae.workingColorSpace})}const Dt=I.state.transmissionRenderTarget[it.id],Ft=it.viewport||N;Dt.setSize(Ft.z*L.transmissionResolutionScale,Ft.w*L.transmissionResolutionScale);const Ut=L.getRenderTarget(),Wt=L.getActiveCubeFace(),jt=L.getActiveMipmapLevel();L.setRenderTarget(Dt),L.getClearColor(ht),yt=L.getClearAlpha(),yt<1&&L.setClearColor(16777215,.5),L.clear(),oe&&Nt.render(ct);const ee=L.toneMapping;L.toneMapping=Gi;const se=it.viewport;if(it.viewport!==void 0&&(it.viewport=void 0),I.setupLightsView(it),Kt===!0&&Mt.setGlobalState(L.clippingPlanes,it),hn(R,ct,it),q.updateMultisampleRenderTarget(Dt),q.updateRenderTargetMipmap(Dt),Me.has("WEBGL_multisampled_render_to_texture")===!1){let Ht=!1;for(let ue=0,qe=X.length;ue<qe;ue++){const Ye=X[ue],{object:Re,geometry:pn,material:Vt,group:Un}=Ye;if(Vt.side===Fi&&Re.layers.test(it.layers)){const ie=Vt.side;Vt.side=Wn,Vt.needsUpdate=!0,qi(Re,ct,it,pn,Vt,Un),Vt.side=ie,Vt.needsUpdate=!0,Ht=!0}}Ht===!0&&(q.updateMultisampleRenderTarget(Dt),q.updateRenderTargetMipmap(Dt))}L.setRenderTarget(Ut,Wt,jt),L.setClearColor(ht,yt),se!==void 0&&(it.viewport=se),L.toneMapping=ee}function hn(R,X,ct){const it=X.isScene===!0?X.overrideMaterial:null;for(let $=0,Dt=R.length;$<Dt;$++){const Ft=R[$],{object:Ut,geometry:Wt,group:jt}=Ft;let ee=Ft.material;ee.allowOverride===!0&&it!==null&&(ee=it),Ut.layers.test(ct.layers)&&qi(Ut,X,ct,Wt,ee,jt)}}function qi(R,X,ct,it,$,Dt){R.onBeforeRender(L,X,ct,it,$,Dt),R.modelViewMatrix.multiplyMatrices(ct.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),$.onBeforeRender(L,X,ct,it,R,Dt),$.transparent===!0&&$.side===Fi&&$.forceSinglePass===!1?($.side=Wn,$.needsUpdate=!0,L.renderBufferDirect(ct,X,it,$,R,Dt),$.side=is,$.needsUpdate=!0,L.renderBufferDirect(ct,X,it,$,R,Dt),$.side=Fi):L.renderBufferDirect(ct,X,it,$,R,Dt),R.onAfterRender(L,X,ct,it,$,Dt)}function Ea(R,X,ct){X.isScene!==!0&&(X=De);const it=E.get(R),$=I.state.lights,Dt=I.state.shadowsArray,Ft=$.state.version,Ut=wt.getParameters(R,$.state,Dt,X,ct),Wt=wt.getProgramCacheKey(Ut);let jt=it.programs;it.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?X.environment:null,it.fog=X.fog;const ee=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;it.envMap=mt.get(R.envMap||it.environment,ee),it.envMapRotation=it.environment!==null&&R.envMap===null?X.environmentRotation:R.envMapRotation,jt===void 0&&(R.addEventListener("dispose",be),jt=new Map,it.programs=jt);let se=jt.get(Wt);if(se!==void 0){if(it.currentProgram===se&&it.lightsStateVersion===Ft)return $o(R,Ut),se}else Ut.uniforms=wt.getUniforms(R),R.onBeforeCompile(Ut,L),se=wt.acquireProgram(Ut,Wt),jt.set(Wt,se),it.uniforms=Ut.uniforms;const Ht=it.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Ht.clippingPlanes=Mt.uniform),$o(R,Ut),it.needsLights=Vr(R),it.lightsStateVersion=Ft,it.needsLights&&(Ht.ambientLightColor.value=$.state.ambient,Ht.lightProbe.value=$.state.probe,Ht.directionalLights.value=$.state.directional,Ht.directionalLightShadows.value=$.state.directionalShadow,Ht.spotLights.value=$.state.spot,Ht.spotLightShadows.value=$.state.spotShadow,Ht.rectAreaLights.value=$.state.rectArea,Ht.ltc_1.value=$.state.rectAreaLTC1,Ht.ltc_2.value=$.state.rectAreaLTC2,Ht.pointLights.value=$.state.point,Ht.pointLightShadows.value=$.state.pointShadow,Ht.hemisphereLights.value=$.state.hemi,Ht.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Ht.spotLightMatrix.value=$.state.spotLightMatrix,Ht.spotLightMap.value=$.state.spotLightMap,Ht.pointShadowMatrix.value=$.state.pointShadowMatrix),it.currentProgram=se,it.uniformsList=null,se}function Jo(R){if(R.uniformsList===null){const X=R.currentProgram.getUniforms();R.uniformsList=Hc.seqWithValue(X.seq,R.uniforms)}return R.uniformsList}function $o(R,X){const ct=E.get(R);ct.outputColorSpace=X.outputColorSpace,ct.batching=X.batching,ct.batchingColor=X.batchingColor,ct.instancing=X.instancing,ct.instancingColor=X.instancingColor,ct.instancingMorph=X.instancingMorph,ct.skinning=X.skinning,ct.morphTargets=X.morphTargets,ct.morphNormals=X.morphNormals,ct.morphColors=X.morphColors,ct.morphTargetsCount=X.morphTargetsCount,ct.numClippingPlanes=X.numClippingPlanes,ct.numIntersection=X.numClipIntersection,ct.vertexAlphas=X.vertexAlphas,ct.vertexTangents=X.vertexTangents,ct.toneMapping=X.toneMapping}function tl(R,X,ct,it,$){X.isScene!==!0&&(X=De),q.resetTextureUnits();const Dt=X.fog,Ft=it.isMeshStandardMaterial||it.isMeshLambertMaterial||it.isMeshPhongMaterial?X.environment:null,Ut=rt===null?L.outputColorSpace:rt.isXRRenderTarget===!0?rt.texture.colorSpace:zr,Wt=it.isMeshStandardMaterial||it.isMeshLambertMaterial&&!it.envMap||it.isMeshPhongMaterial&&!it.envMap,jt=mt.get(it.envMap||Ft,Wt),ee=it.vertexColors===!0&&!!ct.attributes.color&&ct.attributes.color.itemSize===4,se=!!ct.attributes.tangent&&(!!it.normalMap||it.anisotropy>0),Ht=!!ct.morphAttributes.position,ue=!!ct.morphAttributes.normal,qe=!!ct.morphAttributes.color;let Ye=Gi;it.toneMapped&&(rt===null||rt.isXRRenderTarget===!0)&&(Ye=L.toneMapping);const Re=ct.morphAttributes.position||ct.morphAttributes.normal||ct.morphAttributes.color,pn=Re!==void 0?Re.length:0,Vt=E.get(it),Un=I.state.lights;if(Kt===!0&&($t===!0||R!==Y)){const on=R===Y&&it.id===J;Mt.setState(it,R,on)}let ie=!1;it.version===Vt.__version?(Vt.needsLights&&Vt.lightsStateVersion!==Un.state.version||Vt.outputColorSpace!==Ut||$.isBatchedMesh&&Vt.batching===!1||!$.isBatchedMesh&&Vt.batching===!0||$.isBatchedMesh&&Vt.batchingColor===!0&&$.colorTexture===null||$.isBatchedMesh&&Vt.batchingColor===!1&&$.colorTexture!==null||$.isInstancedMesh&&Vt.instancing===!1||!$.isInstancedMesh&&Vt.instancing===!0||$.isSkinnedMesh&&Vt.skinning===!1||!$.isSkinnedMesh&&Vt.skinning===!0||$.isInstancedMesh&&Vt.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&Vt.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&Vt.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&Vt.instancingMorph===!1&&$.morphTexture!==null||Vt.envMap!==jt||it.fog===!0&&Vt.fog!==Dt||Vt.numClippingPlanes!==void 0&&(Vt.numClippingPlanes!==Mt.numPlanes||Vt.numIntersection!==Mt.numIntersection)||Vt.vertexAlphas!==ee||Vt.vertexTangents!==se||Vt.morphTargets!==Ht||Vt.morphNormals!==ue||Vt.morphColors!==qe||Vt.toneMapping!==Ye||Vt.morphTargetsCount!==pn)&&(ie=!0):(ie=!0,Vt.__version=it.version);let Ln=Vt.currentProgram;ie===!0&&(Ln=Ea(it,X,$));let jn=!1,xi=!1,Zn=!1;const Ne=Ln.getUniforms(),rn=Vt.uniforms;if(qt.useProgram(Ln.program)&&(jn=!0,xi=!0,Zn=!0),it.id!==J&&(J=it.id,xi=!0),jn||Y!==R){qt.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Ne.setValue(V,"projectionMatrix",R.projectionMatrix),Ne.setValue(V,"viewMatrix",R.matrixWorldInverse);const Si=Ne.map.cameraPosition;Si!==void 0&&Si.setValue(V,_e.setFromMatrixPosition(R.matrixWorld)),Le.logarithmicDepthBuffer&&Ne.setValue(V,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(it.isMeshPhongMaterial||it.isMeshToonMaterial||it.isMeshLambertMaterial||it.isMeshBasicMaterial||it.isMeshStandardMaterial||it.isShaderMaterial)&&Ne.setValue(V,"isOrthographic",R.isOrthographicCamera===!0),Y!==R&&(Y=R,xi=!0,Zn=!0)}if(Vt.needsLights&&(Un.state.directionalShadowMap.length>0&&Ne.setValue(V,"directionalShadowMap",Un.state.directionalShadowMap,q),Un.state.spotShadowMap.length>0&&Ne.setValue(V,"spotShadowMap",Un.state.spotShadowMap,q),Un.state.pointShadowMap.length>0&&Ne.setValue(V,"pointShadowMap",Un.state.pointShadowMap,q)),$.isSkinnedMesh){Ne.setOptional(V,$,"bindMatrix"),Ne.setOptional(V,$,"bindMatrixInverse");const on=$.skeleton;on&&(on.boneTexture===null&&on.computeBoneTexture(),Ne.setValue(V,"boneTexture",on.boneTexture,q))}$.isBatchedMesh&&(Ne.setOptional(V,$,"batchingTexture"),Ne.setValue(V,"batchingTexture",$._matricesTexture,q),Ne.setOptional(V,$,"batchingIdTexture"),Ne.setValue(V,"batchingIdTexture",$._indirectTexture,q),Ne.setOptional(V,$,"batchingColorTexture"),$._colorsTexture!==null&&Ne.setValue(V,"batchingColorTexture",$._colorsTexture,q));const Nn=ct.morphAttributes;if((Nn.position!==void 0||Nn.normal!==void 0||Nn.color!==void 0)&&Pt.update($,ct,Ln),(xi||Vt.receiveShadow!==$.receiveShadow)&&(Vt.receiveShadow=$.receiveShadow,Ne.setValue(V,"receiveShadow",$.receiveShadow)),(it.isMeshStandardMaterial||it.isMeshLambertMaterial||it.isMeshPhongMaterial)&&it.envMap===null&&X.environment!==null&&(rn.envMapIntensity.value=X.environmentIntensity),rn.dfgLUT!==void 0&&(rn.dfgLUT.value=$T()),xi&&(Ne.setValue(V,"toneMappingExposure",L.toneMappingExposure),Vt.needsLights&&as(rn,Zn),Dt&&it.fog===!0&&Zt.refreshFogUniforms(rn,Dt),Zt.refreshMaterialUniforms(rn,it,vt,j,I.state.transmissionRenderTarget[R.id]),Hc.upload(V,Jo(Vt),rn,q)),it.isShaderMaterial&&it.uniformsNeedUpdate===!0&&(Hc.upload(V,Jo(Vt),rn,q),it.uniformsNeedUpdate=!1),it.isSpriteMaterial&&Ne.setValue(V,"center",$.center),Ne.setValue(V,"modelViewMatrix",$.modelViewMatrix),Ne.setValue(V,"normalMatrix",$.normalMatrix),Ne.setValue(V,"modelMatrix",$.matrixWorld),it.isShaderMaterial||it.isRawShaderMaterial){const on=it.uniformsGroups;for(let Si=0,Yi=on.length;Si<Yi;Si++){const Is=on[Si];zt.update(Is,Ln),zt.bind(Is,Ln)}}return Ln}function as(R,X){R.ambientLightColor.needsUpdate=X,R.lightProbe.needsUpdate=X,R.directionalLights.needsUpdate=X,R.directionalLightShadows.needsUpdate=X,R.pointLights.needsUpdate=X,R.pointLightShadows.needsUpdate=X,R.spotLights.needsUpdate=X,R.spotLightShadows.needsUpdate=X,R.rectAreaLights.needsUpdate=X,R.hemisphereLights.needsUpdate=X}function Vr(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return Q},this.getRenderTarget=function(){return rt},this.setRenderTargetTextures=function(R,X,ct){const it=E.get(R);it.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,it.__autoAllocateDepthBuffer===!1&&(it.__useRenderToTexture=!1),E.get(R.texture).__webglTexture=X,E.get(R.depthTexture).__webglTexture=it.__autoAllocateDepthBuffer?void 0:ct,it.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,X){const ct=E.get(R);ct.__webglFramebuffer=X,ct.__useDefaultFramebuffer=X===void 0};const ba=V.createFramebuffer();this.setRenderTarget=function(R,X=0,ct=0){rt=R,G=X,Q=ct;let it=null,$=!1,Dt=!1;if(R){const Ut=E.get(R);if(Ut.__useDefaultFramebuffer!==void 0){qt.bindFramebuffer(V.FRAMEBUFFER,Ut.__webglFramebuffer),N.copy(R.viewport),z.copy(R.scissor),ot=R.scissorTest,qt.viewport(N),qt.scissor(z),qt.setScissorTest(ot),J=-1;return}else if(Ut.__webglFramebuffer===void 0)q.setupRenderTarget(R);else if(Ut.__hasExternalTextures)q.rebindTextures(R,E.get(R.texture).__webglTexture,E.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const ee=R.depthTexture;if(Ut.__boundDepthTexture!==ee){if(ee!==null&&E.has(ee)&&(R.width!==ee.image.width||R.height!==ee.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");q.setupDepthRenderbuffer(R)}}const Wt=R.texture;(Wt.isData3DTexture||Wt.isDataArrayTexture||Wt.isCompressedArrayTexture)&&(Dt=!0);const jt=E.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(jt[X])?it=jt[X][ct]:it=jt[X],$=!0):R.samples>0&&q.useMultisampledRTT(R)===!1?it=E.get(R).__webglMultisampledFramebuffer:Array.isArray(jt)?it=jt[ct]:it=jt,N.copy(R.viewport),z.copy(R.scissor),ot=R.scissorTest}else N.copy(at).multiplyScalar(vt).floor(),z.copy(xt).multiplyScalar(vt).floor(),ot=Tt;if(ct!==0&&(it=ba),qt.bindFramebuffer(V.FRAMEBUFFER,it)&&qt.drawBuffers(R,it),qt.viewport(N),qt.scissor(z),qt.setScissorTest(ot),$){const Ut=E.get(R.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+X,Ut.__webglTexture,ct)}else if(Dt){const Ut=X;for(let Wt=0;Wt<R.textures.length;Wt++){const jt=E.get(R.textures[Wt]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+Wt,jt.__webglTexture,ct,Ut)}}else if(R!==null&&ct!==0){const Ut=E.get(R.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Ut.__webglTexture,ct)}J=-1},this.readRenderTargetPixels=function(R,X,ct,it,$,Dt,Ft,Ut=0){if(!(R&&R.isWebGLRenderTarget)){Te("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Wt=E.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ft!==void 0&&(Wt=Wt[Ft]),Wt){qt.bindFramebuffer(V.FRAMEBUFFER,Wt);try{const jt=R.textures[Ut],ee=jt.format,se=jt.type;if(R.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Ut),!Le.textureFormatReadable(ee)){Te("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Le.textureTypeReadable(se)){Te("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=R.width-it&&ct>=0&&ct<=R.height-$&&V.readPixels(X,ct,it,$,Ct.convert(ee),Ct.convert(se),Dt)}finally{const jt=rt!==null?E.get(rt).__webglFramebuffer:null;qt.bindFramebuffer(V.FRAMEBUFFER,jt)}}},this.readRenderTargetPixelsAsync=async function(R,X,ct,it,$,Dt,Ft,Ut=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Wt=E.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ft!==void 0&&(Wt=Wt[Ft]),Wt)if(X>=0&&X<=R.width-it&&ct>=0&&ct<=R.height-$){qt.bindFramebuffer(V.FRAMEBUFFER,Wt);const jt=R.textures[Ut],ee=jt.format,se=jt.type;if(R.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Ut),!Le.textureFormatReadable(ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Le.textureTypeReadable(se))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ht=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,Ht),V.bufferData(V.PIXEL_PACK_BUFFER,Dt.byteLength,V.STREAM_READ),V.readPixels(X,ct,it,$,Ct.convert(ee),Ct.convert(se),0);const ue=rt!==null?E.get(rt).__webglFramebuffer:null;qt.bindFramebuffer(V.FRAMEBUFFER,ue);const qe=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await My(V,qe,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,Ht),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,Dt),V.deleteBuffer(Ht),V.deleteSync(qe),Dt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,X=null,ct=0){const it=Math.pow(2,-ct),$=Math.floor(R.image.width*it),Dt=Math.floor(R.image.height*it),Ft=X!==null?X.x:0,Ut=X!==null?X.y:0;q.setTexture2D(R,0),V.copyTexSubImage2D(V.TEXTURE_2D,ct,0,0,Ft,Ut,$,Dt),qt.unbindTexture()};const Ta=V.createFramebuffer(),ss=V.createFramebuffer();this.copyTextureToTexture=function(R,X,ct=null,it=null,$=0,Dt=0){let Ft,Ut,Wt,jt,ee,se,Ht,ue,qe;const Ye=R.isCompressedTexture?R.mipmaps[Dt]:R.image;if(ct!==null)Ft=ct.max.x-ct.min.x,Ut=ct.max.y-ct.min.y,Wt=ct.isBox3?ct.max.z-ct.min.z:1,jt=ct.min.x,ee=ct.min.y,se=ct.isBox3?ct.min.z:0;else{const rn=Math.pow(2,-$);Ft=Math.floor(Ye.width*rn),Ut=Math.floor(Ye.height*rn),R.isDataArrayTexture?Wt=Ye.depth:R.isData3DTexture?Wt=Math.floor(Ye.depth*rn):Wt=1,jt=0,ee=0,se=0}it!==null?(Ht=it.x,ue=it.y,qe=it.z):(Ht=0,ue=0,qe=0);const Re=Ct.convert(X.format),pn=Ct.convert(X.type);let Vt;X.isData3DTexture?(q.setTexture3D(X,0),Vt=V.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(q.setTexture2DArray(X,0),Vt=V.TEXTURE_2D_ARRAY):(q.setTexture2D(X,0),Vt=V.TEXTURE_2D),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,X.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,X.unpackAlignment);const Un=V.getParameter(V.UNPACK_ROW_LENGTH),ie=V.getParameter(V.UNPACK_IMAGE_HEIGHT),Ln=V.getParameter(V.UNPACK_SKIP_PIXELS),jn=V.getParameter(V.UNPACK_SKIP_ROWS),xi=V.getParameter(V.UNPACK_SKIP_IMAGES);V.pixelStorei(V.UNPACK_ROW_LENGTH,Ye.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Ye.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,jt),V.pixelStorei(V.UNPACK_SKIP_ROWS,ee),V.pixelStorei(V.UNPACK_SKIP_IMAGES,se);const Zn=R.isDataArrayTexture||R.isData3DTexture,Ne=X.isDataArrayTexture||X.isData3DTexture;if(R.isDepthTexture){const rn=E.get(R),Nn=E.get(X),on=E.get(rn.__renderTarget),Si=E.get(Nn.__renderTarget);qt.bindFramebuffer(V.READ_FRAMEBUFFER,on.__webglFramebuffer),qt.bindFramebuffer(V.DRAW_FRAMEBUFFER,Si.__webglFramebuffer);for(let Yi=0;Yi<Wt;Yi++)Zn&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,E.get(R).__webglTexture,$,se+Yi),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,E.get(X).__webglTexture,Dt,qe+Yi)),V.blitFramebuffer(jt,ee,Ft,Ut,Ht,ue,Ft,Ut,V.DEPTH_BUFFER_BIT,V.NEAREST);qt.bindFramebuffer(V.READ_FRAMEBUFFER,null),qt.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if($!==0||R.isRenderTargetTexture||E.has(R)){const rn=E.get(R),Nn=E.get(X);qt.bindFramebuffer(V.READ_FRAMEBUFFER,Ta),qt.bindFramebuffer(V.DRAW_FRAMEBUFFER,ss);for(let on=0;on<Wt;on++)Zn?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,rn.__webglTexture,$,se+on):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,rn.__webglTexture,$),Ne?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Nn.__webglTexture,Dt,qe+on):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Nn.__webglTexture,Dt),$!==0?V.blitFramebuffer(jt,ee,Ft,Ut,Ht,ue,Ft,Ut,V.COLOR_BUFFER_BIT,V.NEAREST):Ne?V.copyTexSubImage3D(Vt,Dt,Ht,ue,qe+on,jt,ee,Ft,Ut):V.copyTexSubImage2D(Vt,Dt,Ht,ue,jt,ee,Ft,Ut);qt.bindFramebuffer(V.READ_FRAMEBUFFER,null),qt.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else Ne?R.isDataTexture||R.isData3DTexture?V.texSubImage3D(Vt,Dt,Ht,ue,qe,Ft,Ut,Wt,Re,pn,Ye.data):X.isCompressedArrayTexture?V.compressedTexSubImage3D(Vt,Dt,Ht,ue,qe,Ft,Ut,Wt,Re,Ye.data):V.texSubImage3D(Vt,Dt,Ht,ue,qe,Ft,Ut,Wt,Re,pn,Ye):R.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,Dt,Ht,ue,Ft,Ut,Re,pn,Ye.data):R.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,Dt,Ht,ue,Ye.width,Ye.height,Re,Ye.data):V.texSubImage2D(V.TEXTURE_2D,Dt,Ht,ue,Ft,Ut,Re,pn,Ye);V.pixelStorei(V.UNPACK_ROW_LENGTH,Un),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,ie),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Ln),V.pixelStorei(V.UNPACK_SKIP_ROWS,jn),V.pixelStorei(V.UNPACK_SKIP_IMAGES,xi),Dt===0&&X.generateMipmaps&&V.generateMipmap(Vt),qt.unbindTexture()},this.initRenderTarget=function(R){E.get(R).__webglFramebuffer===void 0&&q.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?q.setTextureCube(R,0):R.isData3DTexture?q.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?q.setTexture2DArray(R,0):q.setTexture2D(R,0),qt.unbindTexture()},this.resetState=function(){G=0,Q=0,rt=null,qt.reset(),At.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Hi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Ae._getDrawingBufferColorSpace(e),i.unpackColorSpace=Ae._getUnpackColorSpace()}}const I_=[{label:"React",a:.5,t:.8,service:"Web Applications",desc:"Modern, performant UIs built with React & Next.js"},{label:"Node.js",a:1.8,t:-.5,service:"API & Backend Dev",desc:"Scalable REST & GraphQL APIs engineered for production"},{label:"Docker",a:3,t:.3,service:"Systems Architecture",desc:"Containerised, fault-tolerant distributed systems"},{label:"AWS",a:4.2,t:-.9,service:"Cloud Infrastructure",desc:"End-to-end cloud architecture on AWS & GCP"},{label:"Swift",a:.2,t:-1.1,service:"Mobile Apps",desc:"Native iOS & Android apps built to feel premium"},{label:"Postgres",a:2.4,t:1,service:"Data & Storage",desc:"Robust, optimised database design & migrations"},{label:"TypeScript",a:5.1,t:.6,service:"Full-Stack Dev",desc:"End-to-end type-safe codebases that scale cleanly"},{label:"Kubernetes",a:1.1,t:-.2,service:"DevOps & CI/CD",desc:"Automated pipelines, zero-downtime deployments"}];function eA({onNodeClick:o}){const e=$e.useRef(null),i=$e.useRef(o);return $e.useEffect(()=>{i.current=o},[o]),$e.useEffect(()=>{const s=e.current;if(!s)return;const l=s.clientWidth||500,c=s.clientHeight||500,d=new tA({antialias:!0,alpha:!0});d.setPixelRatio(Math.min(window.devicePixelRatio,2)),d.setSize(l,c),d.setClearColor(0,0),s.appendChild(d.domElement);const p=new Fy,m=new mi(45,l/c,.1,100);m.position.z=3.4;const h=new Xn(new Kh(1,5),new Ds({color:1718858,wireframe:!0,transparent:!0,opacity:.5}));p.add(h),p.add(new Xn(new ko(.96,32,32),new Ds({color:332058,transparent:!0,opacity:.7})));for(let J=0;J<3;J++){const Y=[],N=(J-1)*.45;for(let z=0;z<=80;z++){const ot=z/80*Math.PI*2;Y.push(new tt(Math.cos(ot)*Math.cos(N)*1.28,Math.sin(N)*1.28,Math.sin(ot)*Math.cos(N)*1.28))}p.add(new Zy(new Yn().setFromPoints(Y),new uv({color:1718858,transparent:!0,opacity:.25})))}const x=1.1,S=[],_=I_.map((J,Y)=>{const N=x*Math.cos(J.t)*Math.cos(J.a),z=x*Math.sin(J.t),ot=x*Math.cos(J.t)*Math.sin(J.a),ht=new Xn(new ko(.048,12,12),new Ds({color:Y%2===0?11065578:16369840}));ht.position.set(N,z,ot),ht.userData={idx:Y},h.add(ht);const yt=new Xn(new ko(.15,8,8),new Ds({transparent:!0,opacity:0,depthWrite:!1}));yt.position.set(N,z,ot),yt.userData={idx:Y},h.add(yt),S.push(yt);const P=new Xn(new Qh(.065,.095,16),new Ds({color:Y%2===0?11065578:16369840,transparent:!0,opacity:.3,side:Fi}));return P.position.set(N,z,ot),P.lookAt(0,0,0),h.add(P),ht}),M=new Ee(-999,-999),b=new rM;let w=!1,y=!1,v=0,C=0,U=0,D=0;const I=J=>{const Y=s.getBoundingClientRect();return{x:(J.clientX-Y.left)/Y.width*2-1,y:-((J.clientY-Y.top)/Y.height)*2+1}},B=J=>{const{x:Y,y:N}=I(J);if(M.set(Y,N),w){const z=J.clientX-v,ot=J.clientY-C;(Math.abs(z)>2||Math.abs(ot)>2)&&(y=!0),U+=z*.009,D+=ot*.004,v=J.clientX,C=J.clientY}},F=J=>{w=!0,y=!1,v=J.clientX,C=J.clientY},T=()=>{w=!1},L=J=>{if(y)return;const{x:Y,y:N}=I(J);b.setFromCamera(new Ee(Y,N),m);const z=b.intersectObjects(S,!1);i.current(z.length>0?I_[z[0].object.userData.idx]:null)};s.addEventListener("mousemove",B),s.addEventListener("mousedown",F),s.addEventListener("mouseup",T),s.addEventListener("click",L);let lt,G=0;const Q=()=>{lt=requestAnimationFrame(Q),G+=.005,w?(h.rotation.y+=(U-h.rotation.y)*.1,h.rotation.x+=(D-h.rotation.x)*.1):(h.rotation.y+=.003,h.rotation.x+=7e-4),b.setFromCamera(M,m);const J=b.intersectObjects(S,!1),Y=J.length>0;d.domElement.style.cursor=Y?"pointer":w?"grabbing":"grab",_.forEach((N,z)=>{const ot=Y&&J[0].object.userData.idx===z;N.scale.setScalar(ot?2.2:1+.18*Math.sin(G*1.8+z*.9)),N.material.color.set(ot?16777215:z%2===0?11065578:16369840)}),d.render(p,m)};Q();const rt=()=>{if(!s)return;const J=s.clientWidth,Y=s.clientHeight;m.aspect=J/Y,m.updateProjectionMatrix(),d.setSize(J,Y)};return window.addEventListener("resize",rt),()=>{cancelAnimationFrame(lt),s.removeEventListener("mousemove",B),s.removeEventListener("mousedown",F),s.removeEventListener("mouseup",T),s.removeEventListener("click",L),window.removeEventListener("resize",rt),d.domElement.parentNode===s&&s.removeChild(d.domElement),d.dispose()}},[]),K.jsx("div",{ref:e,style:{width:"100%",height:"100%",cursor:"grab"}})}function nA({words:o}){const[e,i]=$e.useState(0),[s,l]=$e.useState(""),[c,d]=$e.useState(!1);return $e.useEffect(()=>{const p=o[e],m=setTimeout(()=>{if(c){const h=p.slice(0,s.length-1);l(h),h===""&&(d(!1),i(x=>(x+1)%o.length))}else{const h=p.slice(0,s.length+1);l(h),h===p&&setTimeout(()=>d(!0),1600)}},c?42:88);return()=>clearTimeout(m)},[s,c,e,o]),K.jsxs("span",{className:"grad-text",children:[s,K.jsx("span",{style:{animation:"blink 1s step-end infinite"},children:"|"})]})}function iA(){const o=$e.useCallback(s=>i(s),[]),[e,i]=$e.useState(null);return K.jsxs("section",{style:{minHeight:"100vh",display:"flex",alignItems:"center",position:"relative",overflow:"hidden"},children:[K.jsxs("div",{style:{position:"absolute",inset:0,pointerEvents:"none",zIndex:0},children:[K.jsx("div",{style:{position:"absolute",top:"18%",left:"8%",width:520,height:520,borderRadius:"50%",background:"radial-gradient(circle,rgba(168,216,234,0.06),transparent 70%)"}}),K.jsx("div",{style:{position:"absolute",bottom:"12%",right:"6%",width:420,height:420,borderRadius:"50%",background:"radial-gradient(circle,rgba(249,200,176,0.06),transparent 70%)"}}),K.jsx("div",{style:{position:"absolute",inset:0,opacity:.025,backgroundImage:"repeating-linear-gradient(0deg,transparent,transparent 60px,#fff 60px,#fff 61px),repeating-linear-gradient(90deg,transparent,transparent 60px,#fff 60px,#fff 61px)"}})]}),K.jsxs("div",{className:"page-pad hero-grid",style:{position:"relative",zIndex:1,width:"100%",maxWidth:1280,margin:"0 auto",paddingTop:100,paddingBottom:60},children:[K.jsxs("div",{children:[K.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:8,padding:"6px 14px",borderRadius:999,border:"1px solid rgba(168,216,234,0.22)",background:"rgba(168,216,234,0.05)",marginBottom:32,animation:"fadeUp 0.7s ease 0s both"},children:[K.jsx("span",{style:{width:7,height:7,borderRadius:"50%",background:"#a8d8ea",display:"inline-block",animation:"pulseD 2s ease-in-out infinite"}}),K.jsx("span",{style:{fontSize:11,color:"rgba(168,216,234,0.8)",letterSpacing:"0.14em"},children:"AVAILABLE FOR PROJECTS"})]}),["We build the","systems behind"].map((s,l)=>K.jsx("h1",{style:{fontWeight:700,fontSize:"clamp(2.6rem,4.5vw,4.8rem)",lineHeight:1.06,letterSpacing:"-0.03em",marginBottom:6,animation:`fadeUp 0.7s ease ${.1+l*.1}s both`},children:s},l)),K.jsx("h1",{style:{fontWeight:700,fontSize:"clamp(2.6rem,4.5vw,4.8rem)",lineHeight:1.06,letterSpacing:"-0.03em",marginBottom:28,animation:"fadeUp 0.7s ease 0.3s both"},children:K.jsx(nA,{words:["your vision.","your product.","your growth.","your future."]})}),K.jsx("p",{style:{color:"rgba(255,255,255,0.45)",fontSize:16,lineHeight:1.78,maxWidth:460,marginBottom:40,animation:"fadeUp 0.7s ease 0.4s both"},children:"Skriptside architects, builds, and ships systems, web apps, and applications — engineered for scale, designed to last."}),K.jsxs("div",{style:{display:"flex",gap:14,flexWrap:"wrap",animation:"fadeUp 0.7s ease 0.5s both"},children:[K.jsx("a",{href:"#contact",className:"cta-btn",style:{padding:"13px 30px",borderRadius:11},children:"Start a Project"}),K.jsx("a",{href:"#services",className:"outline-btn",style:{padding:"13px 30px",borderRadius:11},children:"Our Services →"})]})]}),K.jsxs("div",{style:{position:"relative",height:520},children:[K.jsx(eA,{onNodeClick:o}),e&&K.jsxs("div",{style:{position:"absolute",top:20,left:"50%",transform:"translateX(-50%)",width:256,borderRadius:18,border:"1px solid rgba(168,216,234,0.25)",background:"rgba(0,0,0,0.92)",backdropFilter:"blur(20px)",padding:"18px 20px",pointerEvents:"none",animation:"tooltipIn 0.25s ease both",zIndex:20},children:[K.jsx("p",{style:{fontSize:10,color:"rgba(168,216,234,0.65)",letterSpacing:"0.14em",marginBottom:4},children:e.label}),K.jsx("h4",{style:{fontWeight:700,fontSize:13,color:"#fff",marginBottom:6},children:e.service}),K.jsx("p",{style:{fontSize:12,color:"rgba(255,255,255,0.45)",lineHeight:1.65},children:e.desc}),K.jsx("div",{style:{marginTop:12,height:1,background:"linear-gradient(90deg,rgba(168,216,234,0.4),transparent)"}})]}),K.jsx("p",{style:{position:"absolute",bottom:8,left:"50%",transform:"translateX(-50%)",fontSize:10,color:"rgba(255,255,255,0.18)",letterSpacing:"0.14em",whiteSpace:"nowrap"},children:"CLICK NODES TO EXPLORE"})]})]})]})}const aA=[{n:"01",title:"Discover",desc:"We dive into your problem space, goals, and constraints to map the right solution before writing a single line of code."},{n:"02",title:"Architect",desc:"We design the system first — scalability, security, and maintainability baked in from day one."},{n:"03",title:"Build & Ship",desc:"We execute with precision and speed, delivering production-ready systems with full docs and post-launch support."}];function sA(){const o=ga(0),e=ga(0),i=ga(100),s=ga(200);return K.jsx("section",{id:"process",className:"page-pad",style:{paddingTop:100,paddingBottom:100,borderTop:"1px solid rgba(255,255,255,0.06)"},children:K.jsxs("div",{style:{maxWidth:1280,margin:"0 auto"},children:[K.jsxs("div",{ref:o,className:"reveal-el",style:{marginBottom:72},children:[K.jsx("p",{style:{fontSize:11,color:"rgba(249,200,176,0.7)",letterSpacing:"0.15em",marginBottom:14},children:"// HOW WE WORK"}),K.jsxs("h2",{style:{fontWeight:700,fontSize:"clamp(2rem,3.5vw,3.4rem)",letterSpacing:"-0.025em",lineHeight:1.1},children:["Simple process.",K.jsx("br",{}),K.jsx("span",{className:"grad-text",children:"Exceptional outcomes."})]})]}),K.jsx("div",{className:"process-grid",children:aA.map((l,c)=>K.jsxs("div",{ref:[e,i,s][c],className:"reveal-el process-step",children:[K.jsx("div",{className:"grad-text",style:{fontWeight:700,fontSize:72,lineHeight:1,opacity:.18,marginBottom:20},children:l.n}),K.jsx("h3",{style:{fontWeight:700,fontSize:20,marginBottom:12,letterSpacing:"-0.01em"},children:l.title}),K.jsx("p",{style:{color:"rgba(255,255,255,0.42)",fontSize:14,lineHeight:1.8},children:l.desc})]},l.n))})]})})}const rA=[{icon:"⬡",title:"Systems Architecture",desc:"Scalable, fault-tolerant distributed systems built for the long run.",tags:["Distributed","Microservices"]},{icon:"◈",title:"Web Applications",desc:"SaaS platforms & consumer products engineered with precision.",tags:["React","Next.js"]},{icon:"◎",title:"Mobile Apps",desc:"Native iOS & Android experiences that feel genuinely premium.",tags:["iOS","Android"]},{icon:"⟁",title:"API & Backend Dev",desc:"Blazing-fast, secure backend systems at any scale.",tags:["REST","GraphQL"]}],oA=[{icon:"⬢",title:"Cloud Infrastructure",desc:"AWS & GCP architecture that scales without surprises.",tags:["AWS","GCP"]},{icon:"◇",title:"DevOps & CI/CD",desc:"Zero-downtime deployments and automated release pipelines.",tags:["Docker","K8s"]},{icon:"○",title:"UI/UX Engineering",desc:"Design systems and component libraries built to last.",tags:["Design","Systems"]},{icon:"△",title:"Data & Storage",desc:"Optimised database architecture and migration strategy.",tags:["Postgres","Redis"]}];function lA({s:o}){return K.jsxs("div",{className:"service-card",children:[K.jsx("div",{className:"grad-text",style:{fontSize:26,marginBottom:16},children:o.icon}),K.jsx("h3",{style:{fontWeight:700,fontSize:15,color:"#fff",marginBottom:10,lineHeight:1.3},children:o.title}),K.jsx("p",{style:{color:"rgba(255,255,255,0.42)",fontSize:13,lineHeight:1.75,marginBottom:18},children:o.desc}),K.jsx("div",{style:{display:"flex",gap:6,flexWrap:"wrap"},children:o.tags.map(e=>K.jsx("span",{style:{fontSize:11,padding:"3px 10px",borderRadius:999,border:"1px solid rgba(168,216,234,0.22)",color:"rgba(168,216,234,0.75)"},children:e},e))})]})}function H_({items:o,dir:e}){const i=[...o,...o,...o,...o];return K.jsx("div",{className:"marquee-wrap",style:{overflow:"hidden",padding:"6px 0"},children:K.jsx("div",{className:`marquee-row ${e==="left"?"marquee-left":"marquee-right"}`,children:i.map((s,l)=>K.jsx(lA,{s},l))})})}function cA(){const o=ga(0);return K.jsxs("section",{id:"services",style:{padding:"120px 0",overflow:"hidden"},children:[K.jsxs("div",{ref:o,className:"reveal-el page-pad",style:{maxWidth:1280,margin:"0 auto 56px"},children:[K.jsx("p",{style:{fontSize:11,color:"rgba(168,216,234,0.7)",letterSpacing:"0.15em",marginBottom:14},children:"// WHAT WE BUILD"}),K.jsxs("h2",{style:{fontWeight:700,fontSize:"clamp(2rem,3.5vw,3.4rem)",letterSpacing:"-0.025em",lineHeight:1.1},children:["Full-stack expertise,",K.jsx("br",{}),K.jsx("span",{className:"grad-text",children:"end-to-end delivery."})]})]}),K.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:18},children:[K.jsx(H_,{items:rA,dir:"left"}),K.jsx(H_,{items:oA,dir:"right"})]})]})}function uA(){return K.jsx("div",{style:{borderTop:"1px solid rgba(255,255,255,0.07)",borderBottom:"1px solid rgba(255,255,255,0.07)",padding:"14px 0",overflow:"hidden"},children:K.jsx("div",{className:"marquee-row marquee-left",children:["React","Next.js","TypeScript","Node.js","Python","PostgreSQL","Docker","AWS","GraphQL","Kubernetes","Redis","Go","Swift","Rust","Terraform","React","Next.js","TypeScript","Node.js","Python","PostgreSQL","Docker","AWS","GraphQL","Kubernetes","Redis","Go","Swift","Rust","Terraform"].map((o,e)=>K.jsxs("span",{style:{fontSize:12,fontWeight:600,letterSpacing:"0.1em",flexShrink:0,marginRight:40,color:e%3===0?"rgba(168,216,234,0.7)":e%3===1?"rgba(249,200,176,0.7)":"rgba(255,255,255,0.22)"},children:[o," ",K.jsx("span",{style:{opacity:.25,marginLeft:20},children:"·"})]},e))})})}const Mv=(...o)=>o.filter((e,i,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===i).join(" ").trim();const fA=o=>o.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();const dA=o=>o.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,i,s)=>s?s.toUpperCase():i.toLowerCase());const G_=o=>{const e=dA(o);return e.charAt(0).toUpperCase()+e.slice(1)};var hA={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const pA=o=>{for(const e in o)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1};const mA=$e.forwardRef(({color:o="currentColor",size:e=24,strokeWidth:i=2,absoluteStrokeWidth:s,className:l="",children:c,iconNode:d,...p},m)=>$e.createElement("svg",{ref:m,...hA,width:e,height:e,stroke:o,strokeWidth:s?Number(i)*24/Number(e):i,className:Mv("lucide",l),...!c&&!pA(p)&&{"aria-hidden":"true"},...p},[...d.map(([h,x])=>$e.createElement(h,x)),...Array.isArray(c)?c:[c]]));const wi=(o,e)=>{const i=$e.forwardRef(({className:s,...l},c)=>$e.createElement(mA,{ref:c,iconNode:e,className:Mv(`lucide-${fA(G_(o))}`,`lucide-${o}`,s),...l}));return i.displayName=G_(o),i};const gA=[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]],_A=wi("briefcase",gA);const vA=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],xA=wi("file-text",vA);const SA=[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]],yA=wi("github",SA);const MA=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],EA=wi("layers",MA);const bA=[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]],TA=wi("linkedin",bA);const AA=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",key:"1sd12s"}]],RA=wi("message-circle",AA);const CA=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],wA=wi("shield",CA);const DA=[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]],UA=wi("tag",DA);const LA=[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]],NA=wi("twitter",LA);const OA=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],PA=wi("users",OA);const zA=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],BA=wi("zap",zA),FA=[{label:"Features",icon:BA,href:"#"},{label:"Architecture",icon:EA,href:"#"},{label:"Pricing",icon:UA,href:"#"},{label:"Contact",icon:RA,href:"#contact"}],IA=[{label:"About",icon:PA,href:"#"},{label:"Blog",icon:xA,href:"#"},{label:"Careers",icon:_A,href:"#"},{label:"Privacy",icon:wA,href:"#"}],HA=[{label:"GitHub",icon:yA,href:"https://github.com"},{label:"LinkedIn",icon:TA,href:"https://linkedin.com"},{label:"Twitter",icon:NA,href:"https://twitter.com"}];function Vd({icon:o,label:e,href:i}){return K.jsxs("a",{href:i,className:"footer-link",children:[K.jsx(o,{size:16,className:"footer-icon"}),e]})}function GA(){return K.jsx("footer",{className:"footer",children:K.jsxs("div",{className:"footer-container",children:[K.jsxs("div",{className:"footer-grid",children:[K.jsxs("div",{className:"footer-brand",children:[K.jsxs("div",{className:"brand-row",children:[K.jsx("div",{className:"cta-btn",style:{width:34,height:34,borderRadius:9,fontWeight:700,fontSize:13,flexShrink:0},children:"S/"}),K.jsx("span",{className:"brand-name",children:"skriptside"})]}),K.jsx("p",{className:"brand-description",children:"We design and build scalable SaaS systems, modern web infrastructure, and high-performance digital products."})]}),K.jsxs("div",{className:"footer-column",children:[K.jsx("p",{className:"footer-title",children:"PRODUCT"}),K.jsx("div",{className:"footer-links",children:FA.map(o=>K.jsx(Vd,{...o},o.label))})]}),K.jsxs("div",{className:"footer-column",children:[K.jsx("p",{className:"footer-title",children:"COMPANY"}),K.jsx("div",{className:"footer-links",children:IA.map(o=>K.jsx(Vd,{...o},o.label))})]}),K.jsxs("div",{className:"footer-column",children:[K.jsx("p",{className:"footer-title",children:"LINKS"}),K.jsx("div",{className:"footer-links",children:HA.map(o=>K.jsx(Vd,{...o},o.label))})]})]}),K.jsxs("div",{className:"footer-bottom",children:[K.jsxs("span",{children:["© ",new Date().getFullYear()," Skriptside. All rights reserved."]}),K.jsxs("div",{className:"footer-legal",children:[K.jsx("a",{href:"#",children:"Terms"}),K.jsx("a",{href:"#",children:"Privacy"}),K.jsx("a",{href:"#",children:"Cookies"})]})]})]})})}function VA(){return K.jsxs("nav",{className:"page-pad",style:{position:"fixed",top:0,left:0,right:0,zIndex:100,display:"flex",alignItems:"center",justifyContent:"space-between",paddingTop:22,paddingBottom:22},children:[K.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10},children:[K.jsx("div",{className:"cta-btn",style:{width:34,height:34,borderRadius:9,fontWeight:700,fontSize:13,flexShrink:0},children:"S/"}),K.jsx("span",{style:{fontWeight:700,fontSize:17,letterSpacing:"-0.01em"},children:"skriptside"})]}),K.jsx("div",{className:"nav-links",children:["Services","Process","About","Contact"].map(o=>K.jsx("a",{href:`#${o.toLowerCase()}`,className:"nav-link",children:o},o))})]})}function kA(){const o={fontFamily:"'Gilroy',sans-serif"};return K.jsxs("div",{style:{background:"#000",color:"#fff",minHeight:"100vh",width:"100%",overflowX:"hidden",...o},children:[K.jsx(VA,{}),K.jsx(iA,{}),K.jsx(uA,{}),K.jsx(cA,{}),K.jsx(sA,{}),K.jsx(BS,{}),K.jsx(HS,{}),K.jsx(GA,{})]})}function XA(){return K.jsx("div",{children:K.jsx(kA,{})})}zS.createRoot(document.getElementById("root")).render(K.jsx($e.StrictMode,{children:K.jsx(XA,{})}));
