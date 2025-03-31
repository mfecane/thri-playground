var Kg=Object.defineProperty;var Zg=(n,e,t)=>e in n?Kg(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var P=(n,e,t)=>Zg(n,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Yh(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const _t={},rs=[],ii=()=>{},Jg=()=>!1,el=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),qh=n=>n.startsWith("onUpdate:"),tn=Object.assign,$h=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},Qg=Object.prototype.hasOwnProperty,ut=(n,e)=>Qg.call(n,e),je=Array.isArray,ss=n=>tl(n)==="[object Map]",mp=n=>tl(n)==="[object Set]",qe=n=>typeof n=="function",Lt=n=>typeof n=="string",Ji=n=>typeof n=="symbol",St=n=>n!==null&&typeof n=="object",gp=n=>(St(n)||qe(n))&&qe(n.then)&&qe(n.catch),_p=Object.prototype.toString,tl=n=>_p.call(n),e_=n=>tl(n).slice(8,-1),vp=n=>tl(n)==="[object Object]",Kh=n=>Lt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,js=Yh(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),nl=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},t_=/-(\w)/g,Un=nl(n=>n.replace(t_,(e,t)=>t?t.toUpperCase():"")),n_=/\B([A-Z])/g,Cr=nl(n=>n.replace(n_,"-$1").toLowerCase()),il=nl(n=>n.charAt(0).toUpperCase()+n.slice(1)),bl=nl(n=>n?`on${il(n)}`:""),qi=(n,e)=>!Object.is(n,e),wl=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},xp=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},i_=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let Gu;const rl=()=>Gu||(Gu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Zh(n){if(je(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],r=Lt(i)?o_(i):Zh(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(Lt(n)||St(n))return n}const r_=/;(?![^(]*\))/g,s_=/:([^]+)/,a_=/\/\*[^]*?\*\//g;function o_(n){const e={};return n.replace(a_,"").split(r_).forEach(t=>{if(t){const i=t.split(s_);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Jh(n){let e="";if(Lt(n))e=n;else if(je(n))for(let t=0;t<n.length;t++){const i=Jh(n[t]);i&&(e+=i+" ")}else if(St(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const l_="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",c_=Yh(l_);function yp(n){return!!n||n===""}const Mp=n=>!!(n&&n.__v_isRef===!0),qr=n=>Lt(n)?n:n==null?"":je(n)||St(n)&&(n.toString===_p||!qe(n.toString))?Mp(n)?qr(n.value):JSON.stringify(n,Sp,2):String(n),Sp=(n,e)=>Mp(e)?Sp(n,e.value):ss(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,r],s)=>(t[Tl(i,s)+" =>"]=r,t),{})}:mp(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>Tl(t))}:Ji(e)?Tl(e):St(e)&&!je(e)&&!vp(e)?String(e):e,Tl=(n,e="")=>{var t;return Ji(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let vn;class h_{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=vn,!e&&vn&&(this.index=(vn.scopes||(vn.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=vn;try{return vn=this,e()}finally{vn=t}}}on(){vn=this}off(){vn=this.parent}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function u_(){return vn}let gt;const Al=new WeakSet;class Ep{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,vn&&vn.active&&vn.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Al.has(this)&&(Al.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||wp(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Wu(this),Tp(this);const e=gt,t=Xn;gt=this,Xn=!0;try{return this.fn()}finally{Ap(this),gt=e,Xn=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)tu(e);this.deps=this.depsTail=void 0,Wu(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Al.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Oc(this)&&this.run()}get dirty(){return Oc(this)}}let bp=0,Ys,qs;function wp(n,e=!1){if(n.flags|=8,e){n.next=qs,qs=n;return}n.next=Ys,Ys=n}function Qh(){bp++}function eu(){if(--bp>0)return;if(qs){let e=qs;for(qs=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;Ys;){let e=Ys;for(Ys=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function Tp(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Ap(n){let e,t=n.depsTail,i=t;for(;i;){const r=i.prevDep;i.version===-1?(i===t&&(t=r),tu(i),d_(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}n.deps=e,n.depsTail=t}function Oc(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Cp(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function Cp(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===aa))return;n.globalVersion=aa;const e=n.dep;if(n.flags|=2,e.version>0&&!n.isSSR&&n.deps&&!Oc(n)){n.flags&=-3;return}const t=gt,i=Xn;gt=n,Xn=!0;try{Tp(n);const r=n.fn(n._value);(e.version===0||qi(r,n._value))&&(n._value=r,e.version++)}catch(r){throw e.version++,r}finally{gt=t,Xn=i,Ap(n),n.flags&=-3}}function tu(n,e=!1){const{dep:t,prevSub:i,nextSub:r}=n;if(i&&(i.nextSub=r,n.prevSub=void 0),r&&(r.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let s=t.computed.deps;s;s=s.nextDep)tu(s,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function d_(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let Xn=!0;const Rp=[];function Qi(){Rp.push(Xn),Xn=!1}function er(){const n=Rp.pop();Xn=n===void 0?!0:n}function Wu(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=gt;gt=void 0;try{e()}finally{gt=t}}}let aa=0;class f_{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class nu{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!gt||!Xn||gt===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==gt)t=this.activeLink=new f_(gt,this),gt.deps?(t.prevDep=gt.depsTail,gt.depsTail.nextDep=t,gt.depsTail=t):gt.deps=gt.depsTail=t,Pp(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=gt.depsTail,t.nextDep=void 0,gt.depsTail.nextDep=t,gt.depsTail=t,gt.deps===t&&(gt.deps=i)}return t}trigger(e){this.version++,aa++,this.notify(e)}notify(e){Qh();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{eu()}}}function Pp(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)Pp(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const Bc=new WeakMap,Sr=Symbol(""),kc=Symbol(""),oa=Symbol("");function $t(n,e,t){if(Xn&&gt){let i=Bc.get(n);i||Bc.set(n,i=new Map);let r=i.get(t);r||(i.set(t,r=new nu),r.map=i,r.key=t),r.track()}}function yi(n,e,t,i,r,s){const a=Bc.get(n);if(!a){aa++;return}const o=l=>{l&&l.trigger()};if(Qh(),e==="clear")a.forEach(o);else{const l=je(n),c=l&&Kh(t);if(l&&t==="length"){const u=Number(i);a.forEach((h,d)=>{(d==="length"||d===oa||!Ji(d)&&d>=u)&&o(h)})}else switch((t!==void 0||a.has(void 0))&&o(a.get(t)),c&&o(a.get(oa)),e){case"add":l?c&&o(a.get("length")):(o(a.get(Sr)),ss(n)&&o(a.get(kc)));break;case"delete":l||(o(a.get(Sr)),ss(n)&&o(a.get(kc)));break;case"set":ss(n)&&o(a.get(Sr));break}}eu()}function Ir(n){const e=ht(n);return e===n?e:($t(e,"iterate",oa),In(n)?e:e.map(Kt))}function sl(n){return $t(n=ht(n),"iterate",oa),n}const p_={__proto__:null,[Symbol.iterator](){return Cl(this,Symbol.iterator,Kt)},concat(...n){return Ir(this).concat(...n.map(e=>je(e)?Ir(e):e))},entries(){return Cl(this,"entries",n=>(n[1]=Kt(n[1]),n))},every(n,e){return ci(this,"every",n,e,void 0,arguments)},filter(n,e){return ci(this,"filter",n,e,t=>t.map(Kt),arguments)},find(n,e){return ci(this,"find",n,e,Kt,arguments)},findIndex(n,e){return ci(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return ci(this,"findLast",n,e,Kt,arguments)},findLastIndex(n,e){return ci(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return ci(this,"forEach",n,e,void 0,arguments)},includes(...n){return Rl(this,"includes",n)},indexOf(...n){return Rl(this,"indexOf",n)},join(n){return Ir(this).join(n)},lastIndexOf(...n){return Rl(this,"lastIndexOf",n)},map(n,e){return ci(this,"map",n,e,void 0,arguments)},pop(){return Ds(this,"pop")},push(...n){return Ds(this,"push",n)},reduce(n,...e){return Xu(this,"reduce",n,e)},reduceRight(n,...e){return Xu(this,"reduceRight",n,e)},shift(){return Ds(this,"shift")},some(n,e){return ci(this,"some",n,e,void 0,arguments)},splice(...n){return Ds(this,"splice",n)},toReversed(){return Ir(this).toReversed()},toSorted(n){return Ir(this).toSorted(n)},toSpliced(...n){return Ir(this).toSpliced(...n)},unshift(...n){return Ds(this,"unshift",n)},values(){return Cl(this,"values",Kt)}};function Cl(n,e,t){const i=sl(n),r=i[e]();return i!==n&&!In(n)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.value&&(s.value=t(s.value)),s}),r}const m_=Array.prototype;function ci(n,e,t,i,r,s){const a=sl(n),o=a!==n&&!In(n),l=a[e];if(l!==m_[e]){const h=l.apply(n,s);return o?Kt(h):h}let c=t;a!==n&&(o?c=function(h,d){return t.call(this,Kt(h),d,n)}:t.length>2&&(c=function(h,d){return t.call(this,h,d,n)}));const u=l.call(a,c,i);return o&&r?r(u):u}function Xu(n,e,t,i){const r=sl(n);let s=t;return r!==n&&(In(n)?t.length>3&&(s=function(a,o,l){return t.call(this,a,o,l,n)}):s=function(a,o,l){return t.call(this,a,Kt(o),l,n)}),r[e](s,...i)}function Rl(n,e,t){const i=ht(n);$t(i,"iterate",oa);const r=i[e](...t);return(r===-1||r===!1)&&su(t[0])?(t[0]=ht(t[0]),i[e](...t)):r}function Ds(n,e,t=[]){Qi(),Qh();const i=ht(n)[e].apply(n,t);return eu(),er(),i}const g_=Yh("__proto__,__v_isRef,__isVue"),Dp=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Ji));function __(n){Ji(n)||(n=String(n));const e=ht(this);return $t(e,"has",n),e.hasOwnProperty(n)}class Ip{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const r=this._isReadonly,s=this._isShallow;if(t==="__v_isReactive")return!r;if(t==="__v_isReadonly")return r;if(t==="__v_isShallow")return s;if(t==="__v_raw")return i===(r?s?A_:Fp:s?Np:Up).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const a=je(e);if(!r){let l;if(a&&(l=p_[t]))return l;if(t==="hasOwnProperty")return __}const o=Reflect.get(e,t,Qt(e)?e:i);return(Ji(t)?Dp.has(t):g_(t))||(r||$t(e,"get",t),s)?o:Qt(o)?a&&Kh(t)?o:o.value:St(o)?r?Bp(o):al(o):o}}class Lp extends Ip{constructor(e=!1){super(!1,e)}set(e,t,i,r){let s=e[t];if(!this._isShallow){const l=Er(s);if(!In(i)&&!Er(i)&&(s=ht(s),i=ht(i)),!je(e)&&Qt(s)&&!Qt(i))return l?!1:(s.value=i,!0)}const a=je(e)&&Kh(t)?Number(t)<e.length:ut(e,t),o=Reflect.set(e,t,i,Qt(e)?e:r);return e===ht(r)&&(a?qi(i,s)&&yi(e,"set",t,i):yi(e,"add",t,i)),o}deleteProperty(e,t){const i=ut(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&i&&yi(e,"delete",t,void 0),r}has(e,t){const i=Reflect.has(e,t);return(!Ji(t)||!Dp.has(t))&&$t(e,"has",t),i}ownKeys(e){return $t(e,"iterate",je(e)?"length":Sr),Reflect.ownKeys(e)}}class v_ extends Ip{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const x_=new Lp,y_=new v_,M_=new Lp(!0);const Hc=n=>n,Oa=n=>Reflect.getPrototypeOf(n);function S_(n,e,t){return function(...i){const r=this.__v_raw,s=ht(r),a=ss(s),o=n==="entries"||n===Symbol.iterator&&a,l=n==="keys"&&a,c=r[n](...i),u=t?Hc:e?zc:Kt;return!e&&$t(s,"iterate",l?kc:Sr),{next(){const{value:h,done:d}=c.next();return d?{value:h,done:d}:{value:o?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function Ba(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function E_(n,e){const t={get(r){const s=this.__v_raw,a=ht(s),o=ht(r);n||(qi(r,o)&&$t(a,"get",r),$t(a,"get",o));const{has:l}=Oa(a),c=e?Hc:n?zc:Kt;if(l.call(a,r))return c(s.get(r));if(l.call(a,o))return c(s.get(o));s!==a&&s.get(r)},get size(){const r=this.__v_raw;return!n&&$t(ht(r),"iterate",Sr),Reflect.get(r,"size",r)},has(r){const s=this.__v_raw,a=ht(s),o=ht(r);return n||(qi(r,o)&&$t(a,"has",r),$t(a,"has",o)),r===o?s.has(r):s.has(r)||s.has(o)},forEach(r,s){const a=this,o=a.__v_raw,l=ht(o),c=e?Hc:n?zc:Kt;return!n&&$t(l,"iterate",Sr),o.forEach((u,h)=>r.call(s,c(u),c(h),a))}};return tn(t,n?{add:Ba("add"),set:Ba("set"),delete:Ba("delete"),clear:Ba("clear")}:{add(r){!e&&!In(r)&&!Er(r)&&(r=ht(r));const s=ht(this);return Oa(s).has.call(s,r)||(s.add(r),yi(s,"add",r,r)),this},set(r,s){!e&&!In(s)&&!Er(s)&&(s=ht(s));const a=ht(this),{has:o,get:l}=Oa(a);let c=o.call(a,r);c||(r=ht(r),c=o.call(a,r));const u=l.call(a,r);return a.set(r,s),c?qi(s,u)&&yi(a,"set",r,s):yi(a,"add",r,s),this},delete(r){const s=ht(this),{has:a,get:o}=Oa(s);let l=a.call(s,r);l||(r=ht(r),l=a.call(s,r)),o&&o.call(s,r);const c=s.delete(r);return l&&yi(s,"delete",r,void 0),c},clear(){const r=ht(this),s=r.size!==0,a=r.clear();return s&&yi(r,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=S_(r,n,e)}),t}function iu(n,e){const t=E_(n,e);return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(ut(t,r)&&r in i?t:i,r,s)}const b_={get:iu(!1,!1)},w_={get:iu(!1,!0)},T_={get:iu(!0,!1)};const Up=new WeakMap,Np=new WeakMap,Fp=new WeakMap,A_=new WeakMap;function C_(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function R_(n){return n.__v_skip||!Object.isExtensible(n)?0:C_(e_(n))}function al(n){return Er(n)?n:ru(n,!1,x_,b_,Up)}function Op(n){return ru(n,!1,M_,w_,Np)}function Bp(n){return ru(n,!0,y_,T_,Fp)}function ru(n,e,t,i,r){if(!St(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const s=r.get(n);if(s)return s;const a=R_(n);if(a===0)return n;const o=new Proxy(n,a===2?i:t);return r.set(n,o),o}function as(n){return Er(n)?as(n.__v_raw):!!(n&&n.__v_isReactive)}function Er(n){return!!(n&&n.__v_isReadonly)}function In(n){return!!(n&&n.__v_isShallow)}function su(n){return n?!!n.__v_raw:!1}function ht(n){const e=n&&n.__v_raw;return e?ht(e):n}function P_(n){return!ut(n,"__v_skip")&&Object.isExtensible(n)&&xp(n,"__v_skip",!0),n}const Kt=n=>St(n)?al(n):n,zc=n=>St(n)?Bp(n):n;function Qt(n){return n?n.__v_isRef===!0:!1}function D_(n){return kp(n,!1)}function I_(n){return kp(n,!0)}function kp(n,e){return Qt(n)?n:new L_(n,e)}class L_{constructor(e,t){this.dep=new nu,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:ht(e),this._value=t?e:Kt(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||In(e)||Er(e);e=i?e:ht(e),qi(e,t)&&(this._rawValue=e,this._value=i?e:Kt(e),this.dep.trigger())}}function Rn(n){return Qt(n)?n.value:n}const U_={get:(n,e,t)=>e==="__v_raw"?n:Rn(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const r=n[e];return Qt(r)&&!Qt(t)?(r.value=t,!0):Reflect.set(n,e,t,i)}};function Hp(n){return as(n)?n:new Proxy(n,U_)}class N_{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new nu(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=aa-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&gt!==this)return wp(this,!0),!0}get value(){const e=this.dep.track();return Cp(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function F_(n,e,t=!1){let i,r;return qe(n)?i=n:(i=n.get,r=n.set),new N_(i,r,t)}const ka={},No=new WeakMap;let _r;function O_(n,e=!1,t=_r){if(t){let i=No.get(t);i||No.set(t,i=[]),i.push(n)}}function B_(n,e,t=_t){const{immediate:i,deep:r,once:s,scheduler:a,augmentJob:o,call:l}=t,c=x=>r?x:In(x)||r===!1||r===0?ji(x,1):ji(x);let u,h,d,f,g=!1,_=!1;if(Qt(n)?(h=()=>n.value,g=In(n)):as(n)?(h=()=>c(n),g=!0):je(n)?(_=!0,g=n.some(x=>as(x)||In(x)),h=()=>n.map(x=>{if(Qt(x))return x.value;if(as(x))return c(x);if(qe(x))return l?l(x,2):x()})):qe(n)?e?h=l?()=>l(n,2):n:h=()=>{if(d){Qi();try{d()}finally{er()}}const x=_r;_r=u;try{return l?l(n,3,[f]):n(f)}finally{_r=x}}:h=ii,e&&r){const x=h,I=r===!0?1/0:r;h=()=>ji(x(),I)}const m=u_(),p=()=>{u.stop(),m&&m.active&&$h(m.effects,u)};if(s&&e){const x=e;e=(...I)=>{x(...I),p()}}let w=_?new Array(n.length).fill(ka):ka;const M=x=>{if(!(!(u.flags&1)||!u.dirty&&!x))if(e){const I=u.run();if(r||g||(_?I.some((U,R)=>qi(U,w[R])):qi(I,w))){d&&d();const U=_r;_r=u;try{const R=[I,w===ka?void 0:_&&w[0]===ka?[]:w,f];l?l(e,3,R):e(...R),w=I}finally{_r=U}}}else u.run()};return o&&o(M),u=new Ep(h),u.scheduler=a?()=>a(M,!1):M,f=x=>O_(x,!1,u),d=u.onStop=()=>{const x=No.get(u);if(x){if(l)l(x,4);else for(const I of x)I();No.delete(u)}},e?i?M(!0):w=u.run():a?a(M.bind(null,!0),!0):u.run(),p.pause=u.pause.bind(u),p.resume=u.resume.bind(u),p.stop=p,p}function ji(n,e=1/0,t){if(e<=0||!St(n)||n.__v_skip||(t=t||new Set,t.has(n)))return n;if(t.add(n),e--,Qt(n))ji(n.value,e,t);else if(je(n))for(let i=0;i<n.length;i++)ji(n[i],e,t);else if(mp(n)||ss(n))n.forEach(i=>{ji(i,e,t)});else if(vp(n)){for(const i in n)ji(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&ji(n[i],e,t)}return n}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Aa(n,e,t,i){try{return i?n(...i):n()}catch(r){ol(r,e,t)}}function si(n,e,t,i){if(qe(n)){const r=Aa(n,e,t,i);return r&&gp(r)&&r.catch(s=>{ol(s,e,t)}),r}if(je(n)){const r=[];for(let s=0;s<n.length;s++)r.push(si(n[s],e,t,i));return r}}function ol(n,e,t,i=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||_t;if(e){let o=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;o;){const u=o.ec;if(u){for(let h=0;h<u.length;h++)if(u[h](n,l,c)===!1)return}o=o.parent}if(s){Qi(),Aa(s,null,10,[n,l,c]),er();return}}k_(n,t,r,i,a)}function k_(n,e,t,i=!0,r=!1){if(r)throw n;console.error(n)}const cn=[];let Jn=-1;const os=[];let Vi=null,$r=0;const zp=Promise.resolve();let Fo=null;function Vp(n){const e=Fo||zp;return n?e.then(this?n.bind(this):n):e}function H_(n){let e=Jn+1,t=cn.length;for(;e<t;){const i=e+t>>>1,r=cn[i],s=la(r);s<n||s===n&&r.flags&2?e=i+1:t=i}return e}function au(n){if(!(n.flags&1)){const e=la(n),t=cn[cn.length-1];!t||!(n.flags&2)&&e>=la(t)?cn.push(n):cn.splice(H_(e),0,n),n.flags|=1,Gp()}}function Gp(){Fo||(Fo=zp.then(Xp))}function z_(n){je(n)?os.push(...n):Vi&&n.id===-1?Vi.splice($r+1,0,n):n.flags&1||(os.push(n),n.flags|=1),Gp()}function ju(n,e,t=Jn+1){for(;t<cn.length;t++){const i=cn[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;cn.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Wp(n){if(os.length){const e=[...new Set(os)].sort((t,i)=>la(t)-la(i));if(os.length=0,Vi){Vi.push(...e);return}for(Vi=e,$r=0;$r<Vi.length;$r++){const t=Vi[$r];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}Vi=null,$r=0}}const la=n=>n.id==null?n.flags&2?-1:1/0:n.id;function Xp(n){try{for(Jn=0;Jn<cn.length;Jn++){const e=cn[Jn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Aa(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Jn<cn.length;Jn++){const e=cn[Jn];e&&(e.flags&=-2)}Jn=-1,cn.length=0,Wp(),Fo=null,(cn.length||os.length)&&Xp()}}let Wn=null,jp=null;function Oo(n){const e=Wn;return Wn=n,jp=n&&n.type.__scopeId||null,e}function Bo(n,e=Wn,t){if(!e||n._n)return n;const i=(...r)=>{i._d&&nd(-1);const s=Oo(e);let a;try{a=n(...r)}finally{Oo(s),i._d&&nd(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function cr(n,e,t,i){const r=n.dirs,s=e&&e.dirs;for(let a=0;a<r.length;a++){const o=r[a];s&&(o.oldValue=s[a].value);let l=o.dir[i];l&&(Qi(),si(l,t,8,[n.el,o,n,e]),er())}}const V_=Symbol("_vte"),G_=n=>n.__isTeleport;function ou(n,e){n.shapeFlag&6&&n.component?(n.transition=e,ou(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}/*! #__NO_SIDE_EFFECTS__ */function ll(n,e){return qe(n)?tn({name:n.name},e,{setup:n}):n}function Yp(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function ko(n,e,t,i,r=!1){if(je(n)){n.forEach((g,_)=>ko(g,e&&(je(e)?e[_]:e),t,i,r));return}if($s(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&ko(n,e,t,i.component.subTree);return}const s=i.shapeFlag&4?uu(i.component):i.el,a=r?null:s,{i:o,r:l}=n,c=e&&e.r,u=o.refs===_t?o.refs={}:o.refs,h=o.setupState,d=ht(h),f=h===_t?()=>!1:g=>ut(d,g);if(c!=null&&c!==l&&(Lt(c)?(u[c]=null,f(c)&&(h[c]=null)):Qt(c)&&(c.value=null)),qe(l))Aa(l,o,12,[a,u]);else{const g=Lt(l),_=Qt(l);if(g||_){const m=()=>{if(n.f){const p=g?f(l)?h[l]:u[l]:l.value;r?je(p)&&$h(p,s):je(p)?p.includes(s)||p.push(s):g?(u[l]=[s],f(l)&&(h[l]=u[l])):(l.value=[s],n.k&&(u[n.k]=l.value))}else g?(u[l]=a,f(l)&&(h[l]=a)):_&&(l.value=a,n.k&&(u[n.k]=a))};a?(m.id=-1,_n(m,t)):m()}}}rl().requestIdleCallback;rl().cancelIdleCallback;const $s=n=>!!n.type.__asyncLoader,qp=n=>n.type.__isKeepAlive;function W_(n,e){$p(n,"a",e)}function X_(n,e){$p(n,"da",e)}function $p(n,e,t=Jt){const i=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(cl(e,i,t),t){let r=t.parent;for(;r&&r.parent;)qp(r.parent.vnode)&&j_(i,e,t,r),r=r.parent}}function j_(n,e,t,i){const r=cl(e,n,i,!0);Jp(()=>{$h(i[e],r)},t)}function cl(n,e,t=Jt,i=!1){if(t){const r=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...a)=>{Qi();const o=Ca(t),l=si(e,t,n,a);return o(),er(),l});return i?r.unshift(s):r.push(s),s}}const Ci=n=>(e,t=Jt)=>{(!ha||n==="sp")&&cl(n,(...i)=>e(...i),t)},Y_=Ci("bm"),Kp=Ci("m"),q_=Ci("bu"),$_=Ci("u"),Zp=Ci("bum"),Jp=Ci("um"),K_=Ci("sp"),Z_=Ci("rtg"),J_=Ci("rtc");function Q_(n,e=Jt){cl("ec",n,e)}const ev="components";function tv(n,e){return iv(ev,n,!0,e)||n}const nv=Symbol.for("v-ndc");function iv(n,e,t=!0,i=!1){const r=Wn||Jt;if(r){const s=r.type;{const o=Gv(s,!1);if(o&&(o===e||o===Un(e)||o===il(Un(e))))return s}const a=Yu(r[n]||s[n],e)||Yu(r.appContext[n],e);return!a&&i?s:a}}function Yu(n,e){return n&&(n[e]||n[Un(e)]||n[il(Un(e))])}function Pl(n,e,t,i){let r;const s=t,a=je(n);if(a||Lt(n)){const o=a&&as(n);let l=!1;o&&(l=!In(n),n=sl(n)),r=new Array(n.length);for(let c=0,u=n.length;c<u;c++)r[c]=e(l?Kt(n[c]):n[c],c,void 0,s)}else if(typeof n=="number"){r=new Array(n);for(let o=0;o<n;o++)r[o]=e(o+1,o,void 0,s)}else if(St(n))if(n[Symbol.iterator])r=Array.from(n,(o,l)=>e(o,l,void 0,s));else{const o=Object.keys(n);r=new Array(o.length);for(let l=0,c=o.length;l<c;l++){const u=o[l];r[l]=e(n[u],u,l,s)}}else r=[];return r}const Vc=n=>n?xm(n)?uu(n):Vc(n.parent):null,Ks=tn(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Vc(n.parent),$root:n=>Vc(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>em(n),$forceUpdate:n=>n.f||(n.f=()=>{au(n.update)}),$nextTick:n=>n.n||(n.n=Vp.bind(n.proxy)),$watch:n=>bv.bind(n)}),Dl=(n,e)=>n!==_t&&!n.__isScriptSetup&&ut(n,e),rv={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:r,props:s,accessCache:a,type:o,appContext:l}=n;let c;if(e[0]!=="$"){const f=a[e];if(f!==void 0)switch(f){case 1:return i[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(Dl(i,e))return a[e]=1,i[e];if(r!==_t&&ut(r,e))return a[e]=2,r[e];if((c=n.propsOptions[0])&&ut(c,e))return a[e]=3,s[e];if(t!==_t&&ut(t,e))return a[e]=4,t[e];Gc&&(a[e]=0)}}const u=Ks[e];let h,d;if(u)return e==="$attrs"&&$t(n.attrs,"get",""),u(n);if((h=o.__cssModules)&&(h=h[e]))return h;if(t!==_t&&ut(t,e))return a[e]=4,t[e];if(d=l.config.globalProperties,ut(d,e))return d[e]},set({_:n},e,t){const{data:i,setupState:r,ctx:s}=n;return Dl(r,e)?(r[e]=t,!0):i!==_t&&ut(i,e)?(i[e]=t,!0):ut(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:r,propsOptions:s}},a){let o;return!!t[a]||n!==_t&&ut(n,a)||Dl(e,a)||(o=s[0])&&ut(o,a)||ut(i,a)||ut(Ks,a)||ut(r.config.globalProperties,a)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:ut(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function qu(n){return je(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let Gc=!0;function sv(n){const e=em(n),t=n.proxy,i=n.ctx;Gc=!1,e.beforeCreate&&$u(e.beforeCreate,n,"bc");const{data:r,computed:s,methods:a,watch:o,provide:l,inject:c,created:u,beforeMount:h,mounted:d,beforeUpdate:f,updated:g,activated:_,deactivated:m,beforeDestroy:p,beforeUnmount:w,destroyed:M,unmounted:x,render:I,renderTracked:U,renderTriggered:R,errorCaptured:O,serverPrefetch:T,expose:b,inheritAttrs:D,components:te,directives:X,filters:ae}=e;if(c&&av(c,i,null),a)for(const Q in a){const V=a[Q];qe(V)&&(i[Q]=V.bind(t))}if(r){const Q=r.call(t,t);St(Q)&&(n.data=al(Q))}if(Gc=!0,s)for(const Q in s){const V=s[Q],me=qe(V)?V.bind(t,t):qe(V.get)?V.get.bind(t,t):ii,Se=!qe(V)&&qe(V.set)?V.set.bind(t):ii,De=Vn({get:me,set:Se});Object.defineProperty(i,Q,{enumerable:!0,configurable:!0,get:()=>De.value,set:Ue=>De.value=Ue})}if(o)for(const Q in o)Qp(o[Q],i,t,Q);if(l){const Q=qe(l)?l.call(t):l;Reflect.ownKeys(Q).forEach(V=>{bo(V,Q[V])})}u&&$u(u,n,"c");function J(Q,V){je(V)?V.forEach(me=>Q(me.bind(t))):V&&Q(V.bind(t))}if(J(Y_,h),J(Kp,d),J(q_,f),J($_,g),J(W_,_),J(X_,m),J(Q_,O),J(J_,U),J(Z_,R),J(Zp,w),J(Jp,x),J(K_,T),je(b))if(b.length){const Q=n.exposed||(n.exposed={});b.forEach(V=>{Object.defineProperty(Q,V,{get:()=>t[V],set:me=>t[V]=me})})}else n.exposed||(n.exposed={});I&&n.render===ii&&(n.render=I),D!=null&&(n.inheritAttrs=D),te&&(n.components=te),X&&(n.directives=X),T&&Yp(n)}function av(n,e,t=ii){je(n)&&(n=Wc(n));for(const i in n){const r=n[i];let s;St(r)?"default"in r?s=Ei(r.from||i,r.default,!0):s=Ei(r.from||i):s=Ei(r),Qt(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:a=>s.value=a}):e[i]=s}}function $u(n,e,t){si(je(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function Qp(n,e,t,i){let r=i.includes(".")?pm(t,i):()=>t[i];if(Lt(n)){const s=e[n];qe(s)&&wo(r,s)}else if(qe(n))wo(r,n.bind(t));else if(St(n))if(je(n))n.forEach(s=>Qp(s,e,t,i));else{const s=qe(n.handler)?n.handler.bind(t):e[n.handler];qe(s)&&wo(r,s,n)}}function em(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:a}}=n.appContext,o=s.get(e);let l;return o?l=o:!r.length&&!t&&!i?l=e:(l={},r.length&&r.forEach(c=>Ho(l,c,a,!0)),Ho(l,e,a)),St(e)&&s.set(e,l),l}function Ho(n,e,t,i=!1){const{mixins:r,extends:s}=e;s&&Ho(n,s,t,!0),r&&r.forEach(a=>Ho(n,a,t,!0));for(const a in e)if(!(i&&a==="expose")){const o=ov[a]||t&&t[a];n[a]=o?o(n[a],e[a]):e[a]}return n}const ov={data:Ku,props:Zu,emits:Zu,methods:Vs,computed:Vs,beforeCreate:sn,created:sn,beforeMount:sn,mounted:sn,beforeUpdate:sn,updated:sn,beforeDestroy:sn,beforeUnmount:sn,destroyed:sn,unmounted:sn,activated:sn,deactivated:sn,errorCaptured:sn,serverPrefetch:sn,components:Vs,directives:Vs,watch:cv,provide:Ku,inject:lv};function Ku(n,e){return e?n?function(){return tn(qe(n)?n.call(this,this):n,qe(e)?e.call(this,this):e)}:e:n}function lv(n,e){return Vs(Wc(n),Wc(e))}function Wc(n){if(je(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function sn(n,e){return n?[...new Set([].concat(n,e))]:e}function Vs(n,e){return n?tn(Object.create(null),n,e):e}function Zu(n,e){return n?je(n)&&je(e)?[...new Set([...n,...e])]:tn(Object.create(null),qu(n),qu(e??{})):e}function cv(n,e){if(!n)return e;if(!e)return n;const t=tn(Object.create(null),n);for(const i in e)t[i]=sn(n[i],e[i]);return t}function tm(){return{app:null,config:{isNativeTag:Jg,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let hv=0;function uv(n,e){return function(i,r=null){qe(i)||(i=tn({},i)),r!=null&&!St(r)&&(r=null);const s=tm(),a=new WeakSet,o=[];let l=!1;const c=s.app={_uid:hv++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:Xv,get config(){return s.config},set config(u){},use(u,...h){return a.has(u)||(u&&qe(u.install)?(a.add(u),u.install(c,...h)):qe(u)&&(a.add(u),u(c,...h))),c},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),c},component(u,h){return h?(s.components[u]=h,c):s.components[u]},directive(u,h){return h?(s.directives[u]=h,c):s.directives[u]},mount(u,h,d){if(!l){const f=c._ceVNode||hn(i,r);return f.appContext=s,d===!0?d="svg":d===!1&&(d=void 0),n(f,u,d),l=!0,c._container=u,u.__vue_app__=c,uu(f.component)}},onUnmount(u){o.push(u)},unmount(){l&&(si(o,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,h){return s.provides[u]=h,c},runWithContext(u){const h=ls;ls=c;try{return u()}finally{ls=h}}};return c}}let ls=null;function bo(n,e){if(Jt){let t=Jt.provides;const i=Jt.parent&&Jt.parent.provides;i===t&&(t=Jt.provides=Object.create(i)),t[n]=e}}function Ei(n,e,t=!1){const i=Jt||Wn;if(i||ls){const r=ls?ls._context.provides:i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&n in r)return r[n];if(arguments.length>1)return t&&qe(e)?e.call(i&&i.proxy):e}}const nm={},im=()=>Object.create(nm),rm=n=>Object.getPrototypeOf(n)===nm;function dv(n,e,t,i=!1){const r={},s=im();n.propsDefaults=Object.create(null),sm(n,e,r,s);for(const a in n.propsOptions[0])a in r||(r[a]=void 0);t?n.props=i?r:Op(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function fv(n,e,t,i){const{props:r,attrs:s,vnode:{patchFlag:a}}=n,o=ht(r),[l]=n.propsOptions;let c=!1;if((i||a>0)&&!(a&16)){if(a&8){const u=n.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(hl(n.emitsOptions,d))continue;const f=e[d];if(l)if(ut(s,d))f!==s[d]&&(s[d]=f,c=!0);else{const g=Un(d);r[g]=Xc(l,o,g,f,n,!1)}else f!==s[d]&&(s[d]=f,c=!0)}}}else{sm(n,e,r,s)&&(c=!0);let u;for(const h in o)(!e||!ut(e,h)&&((u=Cr(h))===h||!ut(e,u)))&&(l?t&&(t[h]!==void 0||t[u]!==void 0)&&(r[h]=Xc(l,o,h,void 0,n,!0)):delete r[h]);if(s!==o)for(const h in s)(!e||!ut(e,h))&&(delete s[h],c=!0)}c&&yi(n.attrs,"set","")}function sm(n,e,t,i){const[r,s]=n.propsOptions;let a=!1,o;if(e)for(let l in e){if(js(l))continue;const c=e[l];let u;r&&ut(r,u=Un(l))?!s||!s.includes(u)?t[u]=c:(o||(o={}))[u]=c:hl(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,a=!0)}if(s){const l=ht(t),c=o||_t;for(let u=0;u<s.length;u++){const h=s[u];t[h]=Xc(r,l,h,c[h],n,!ut(c,h))}}return a}function Xc(n,e,t,i,r,s){const a=n[t];if(a!=null){const o=ut(a,"default");if(o&&i===void 0){const l=a.default;if(a.type!==Function&&!a.skipFactory&&qe(l)){const{propsDefaults:c}=r;if(t in c)i=c[t];else{const u=Ca(r);i=c[t]=l.call(null,e),u()}}else i=l;r.ce&&r.ce._setProp(t,i)}a[0]&&(s&&!o?i=!1:a[1]&&(i===""||i===Cr(t))&&(i=!0))}return i}const pv=new WeakMap;function am(n,e,t=!1){const i=t?pv:e.propsCache,r=i.get(n);if(r)return r;const s=n.props,a={},o=[];let l=!1;if(!qe(n)){const u=h=>{l=!0;const[d,f]=am(h,e,!0);tn(a,d),f&&o.push(...f)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!s&&!l)return St(n)&&i.set(n,rs),rs;if(je(s))for(let u=0;u<s.length;u++){const h=Un(s[u]);Ju(h)&&(a[h]=_t)}else if(s)for(const u in s){const h=Un(u);if(Ju(h)){const d=s[u],f=a[h]=je(d)||qe(d)?{type:d}:tn({},d),g=f.type;let _=!1,m=!0;if(je(g))for(let p=0;p<g.length;++p){const w=g[p],M=qe(w)&&w.name;if(M==="Boolean"){_=!0;break}else M==="String"&&(m=!1)}else _=qe(g)&&g.name==="Boolean";f[0]=_,f[1]=m,(_||ut(f,"default"))&&o.push(h)}}const c=[a,o];return St(n)&&i.set(n,c),c}function Ju(n){return n[0]!=="$"&&!js(n)}const om=n=>n[0]==="_"||n==="$stable",lu=n=>je(n)?n.map(Qn):[Qn(n)],mv=(n,e,t)=>{if(e._n)return e;const i=Bo((...r)=>lu(e(...r)),t);return i._c=!1,i},lm=(n,e,t)=>{const i=n._ctx;for(const r in n){if(om(r))continue;const s=n[r];if(qe(s))e[r]=mv(r,s,i);else if(s!=null){const a=lu(s);e[r]=()=>a}}},cm=(n,e)=>{const t=lu(e);n.slots.default=()=>t},hm=(n,e,t)=>{for(const i in e)(t||i!=="_")&&(n[i]=e[i])},gv=(n,e,t)=>{const i=n.slots=im();if(n.vnode.shapeFlag&32){const r=e._;r?(hm(i,e,t),t&&xp(i,"_",r,!0)):lm(e,i)}else e&&cm(n,e)},_v=(n,e,t)=>{const{vnode:i,slots:r}=n;let s=!0,a=_t;if(i.shapeFlag&32){const o=e._;o?t&&o===1?s=!1:hm(r,e,t):(s=!e.$stable,lm(e,r)),a=e}else e&&(cm(n,e),a={default:1});if(s)for(const o in r)!om(o)&&a[o]==null&&delete r[o]},_n=Dv;function vv(n){return xv(n)}function xv(n,e){const t=rl();t.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:a,createText:o,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:d,setScopeId:f=ii,insertStaticContent:g}=n,_=(A,C,y,ie=null,K=null,j=null,ee=void 0,de=null,Z=!!C.dynamicChildren)=>{if(A===C)return;A&&!Is(A,C)&&(ie=F(A),Ue(A,K,j,!0),A=null),C.patchFlag===-2&&(Z=!1,C.dynamicChildren=null);const{type:S,ref:v,shapeFlag:L}=C;switch(S){case ul:m(A,C,y,ie);break;case br:p(A,C,y,ie);break;case Ll:A==null&&w(C,y,ie,ee);break;case Cn:te(A,C,y,ie,K,j,ee,de,Z);break;default:L&1?I(A,C,y,ie,K,j,ee,de,Z):L&6?X(A,C,y,ie,K,j,ee,de,Z):(L&64||L&128)&&S.process(A,C,y,ie,K,j,ee,de,Z,he)}v!=null&&K&&ko(v,A&&A.ref,j,C||A,!C)},m=(A,C,y,ie)=>{if(A==null)i(C.el=o(C.children),y,ie);else{const K=C.el=A.el;C.children!==A.children&&c(K,C.children)}},p=(A,C,y,ie)=>{A==null?i(C.el=l(C.children||""),y,ie):C.el=A.el},w=(A,C,y,ie)=>{[A.el,A.anchor]=g(A.children,C,y,ie,A.el,A.anchor)},M=({el:A,anchor:C},y,ie)=>{let K;for(;A&&A!==C;)K=d(A),i(A,y,ie),A=K;i(C,y,ie)},x=({el:A,anchor:C})=>{let y;for(;A&&A!==C;)y=d(A),r(A),A=y;r(C)},I=(A,C,y,ie,K,j,ee,de,Z)=>{C.type==="svg"?ee="svg":C.type==="math"&&(ee="mathml"),A==null?U(C,y,ie,K,j,ee,de,Z):T(A,C,K,j,ee,de,Z)},U=(A,C,y,ie,K,j,ee,de)=>{let Z,S;const{props:v,shapeFlag:L,transition:z,dirs:Y}=A;if(Z=A.el=a(A.type,j,v&&v.is,v),L&8?u(Z,A.children):L&16&&O(A.children,Z,null,ie,K,Il(A,j),ee,de),Y&&cr(A,null,ie,"created"),R(Z,A,A.scopeId,ee,ie),v){for(const ve in v)ve!=="value"&&!js(ve)&&s(Z,ve,null,v[ve],j,ie);"value"in v&&s(Z,"value",null,v.value,j),(S=v.onVnodeBeforeMount)&&Kn(S,ie,A)}Y&&cr(A,null,ie,"beforeMount");const G=yv(K,z);G&&z.beforeEnter(Z),i(Z,C,y),((S=v&&v.onVnodeMounted)||G||Y)&&_n(()=>{S&&Kn(S,ie,A),G&&z.enter(Z),Y&&cr(A,null,ie,"mounted")},K)},R=(A,C,y,ie,K)=>{if(y&&f(A,y),ie)for(let j=0;j<ie.length;j++)f(A,ie[j]);if(K){let j=K.subTree;if(C===j||gm(j.type)&&(j.ssContent===C||j.ssFallback===C)){const ee=K.vnode;R(A,ee,ee.scopeId,ee.slotScopeIds,K.parent)}}},O=(A,C,y,ie,K,j,ee,de,Z=0)=>{for(let S=Z;S<A.length;S++){const v=A[S]=de?Gi(A[S]):Qn(A[S]);_(null,v,C,y,ie,K,j,ee,de)}},T=(A,C,y,ie,K,j,ee)=>{const de=C.el=A.el;let{patchFlag:Z,dynamicChildren:S,dirs:v}=C;Z|=A.patchFlag&16;const L=A.props||_t,z=C.props||_t;let Y;if(y&&hr(y,!1),(Y=z.onVnodeBeforeUpdate)&&Kn(Y,y,C,A),v&&cr(C,A,y,"beforeUpdate"),y&&hr(y,!0),(L.innerHTML&&z.innerHTML==null||L.textContent&&z.textContent==null)&&u(de,""),S?b(A.dynamicChildren,S,de,y,ie,Il(C,K),j):ee||V(A,C,de,null,y,ie,Il(C,K),j,!1),Z>0){if(Z&16)D(de,L,z,y,K);else if(Z&2&&L.class!==z.class&&s(de,"class",null,z.class,K),Z&4&&s(de,"style",L.style,z.style,K),Z&8){const G=C.dynamicProps;for(let ve=0;ve<G.length;ve++){const fe=G[ve],xe=L[fe],He=z[fe];(He!==xe||fe==="value")&&s(de,fe,xe,He,K,y)}}Z&1&&A.children!==C.children&&u(de,C.children)}else!ee&&S==null&&D(de,L,z,y,K);((Y=z.onVnodeUpdated)||v)&&_n(()=>{Y&&Kn(Y,y,C,A),v&&cr(C,A,y,"updated")},ie)},b=(A,C,y,ie,K,j,ee)=>{for(let de=0;de<C.length;de++){const Z=A[de],S=C[de],v=Z.el&&(Z.type===Cn||!Is(Z,S)||Z.shapeFlag&70)?h(Z.el):y;_(Z,S,v,null,ie,K,j,ee,!0)}},D=(A,C,y,ie,K)=>{if(C!==y){if(C!==_t)for(const j in C)!js(j)&&!(j in y)&&s(A,j,C[j],null,K,ie);for(const j in y){if(js(j))continue;const ee=y[j],de=C[j];ee!==de&&j!=="value"&&s(A,j,de,ee,K,ie)}"value"in y&&s(A,"value",C.value,y.value,K)}},te=(A,C,y,ie,K,j,ee,de,Z)=>{const S=C.el=A?A.el:o(""),v=C.anchor=A?A.anchor:o("");let{patchFlag:L,dynamicChildren:z,slotScopeIds:Y}=C;Y&&(de=de?de.concat(Y):Y),A==null?(i(S,y,ie),i(v,y,ie),O(C.children||[],y,v,K,j,ee,de,Z)):L>0&&L&64&&z&&A.dynamicChildren?(b(A.dynamicChildren,z,y,K,j,ee,de),(C.key!=null||K&&C===K.subTree)&&um(A,C,!0)):V(A,C,y,v,K,j,ee,de,Z)},X=(A,C,y,ie,K,j,ee,de,Z)=>{C.slotScopeIds=de,A==null?C.shapeFlag&512?K.ctx.activate(C,y,ie,ee,Z):ae(C,y,ie,K,j,ee,Z):oe(A,C,Z)},ae=(A,C,y,ie,K,j,ee)=>{const de=A.component=Bv(A,ie,K);if(qp(A)&&(de.ctx.renderer=he),kv(de,!1,ee),de.asyncDep){if(K&&K.registerDep(de,J,ee),!A.el){const Z=de.subTree=hn(br);p(null,Z,C,y)}}else J(de,A,C,y,K,j,ee)},oe=(A,C,y)=>{const ie=C.component=A.component;if(Rv(A,C,y))if(ie.asyncDep&&!ie.asyncResolved){Q(ie,C,y);return}else ie.next=C,ie.update();else C.el=A.el,ie.vnode=C},J=(A,C,y,ie,K,j,ee)=>{const de=()=>{if(A.isMounted){let{next:L,bu:z,u:Y,parent:G,vnode:ve}=A;{const be=dm(A);if(be){L&&(L.el=ve.el,Q(A,L,ee)),be.asyncDep.then(()=>{A.isUnmounted||de()});return}}let fe=L,xe;hr(A,!1),L?(L.el=ve.el,Q(A,L,ee)):L=ve,z&&wl(z),(xe=L.props&&L.props.onVnodeBeforeUpdate)&&Kn(xe,G,L,ve),hr(A,!0);const He=ed(A),pe=A.subTree;A.subTree=He,_(pe,He,h(pe.el),F(pe),A,K,j),L.el=He.el,fe===null&&Pv(A,He.el),Y&&_n(Y,K),(xe=L.props&&L.props.onVnodeUpdated)&&_n(()=>Kn(xe,G,L,ve),K)}else{let L;const{el:z,props:Y}=C,{bm:G,m:ve,parent:fe,root:xe,type:He}=A,pe=$s(C);hr(A,!1),G&&wl(G),!pe&&(L=Y&&Y.onVnodeBeforeMount)&&Kn(L,fe,C),hr(A,!0);{xe.ce&&xe.ce._injectChildStyle(He);const be=A.subTree=ed(A);_(null,be,y,ie,A,K,j),C.el=be.el}if(ve&&_n(ve,K),!pe&&(L=Y&&Y.onVnodeMounted)){const be=C;_n(()=>Kn(L,fe,be),K)}(C.shapeFlag&256||fe&&$s(fe.vnode)&&fe.vnode.shapeFlag&256)&&A.a&&_n(A.a,K),A.isMounted=!0,C=y=ie=null}};A.scope.on();const Z=A.effect=new Ep(de);A.scope.off();const S=A.update=Z.run.bind(Z),v=A.job=Z.runIfDirty.bind(Z);v.i=A,v.id=A.uid,Z.scheduler=()=>au(v),hr(A,!0),S()},Q=(A,C,y)=>{C.component=A;const ie=A.vnode.props;A.vnode=C,A.next=null,fv(A,C.props,ie,y),_v(A,C.children,y),Qi(),ju(A),er()},V=(A,C,y,ie,K,j,ee,de,Z=!1)=>{const S=A&&A.children,v=A?A.shapeFlag:0,L=C.children,{patchFlag:z,shapeFlag:Y}=C;if(z>0){if(z&128){Se(S,L,y,ie,K,j,ee,de,Z);return}else if(z&256){me(S,L,y,ie,K,j,ee,de,Z);return}}Y&8?(v&16&&Me(S,K,j),L!==S&&u(y,L)):v&16?Y&16?Se(S,L,y,ie,K,j,ee,de,Z):Me(S,K,j,!0):(v&8&&u(y,""),Y&16&&O(L,y,ie,K,j,ee,de,Z))},me=(A,C,y,ie,K,j,ee,de,Z)=>{A=A||rs,C=C||rs;const S=A.length,v=C.length,L=Math.min(S,v);let z;for(z=0;z<L;z++){const Y=C[z]=Z?Gi(C[z]):Qn(C[z]);_(A[z],Y,y,null,K,j,ee,de,Z)}S>v?Me(A,K,j,!0,!1,L):O(C,y,ie,K,j,ee,de,Z,L)},Se=(A,C,y,ie,K,j,ee,de,Z)=>{let S=0;const v=C.length;let L=A.length-1,z=v-1;for(;S<=L&&S<=z;){const Y=A[S],G=C[S]=Z?Gi(C[S]):Qn(C[S]);if(Is(Y,G))_(Y,G,y,null,K,j,ee,de,Z);else break;S++}for(;S<=L&&S<=z;){const Y=A[L],G=C[z]=Z?Gi(C[z]):Qn(C[z]);if(Is(Y,G))_(Y,G,y,null,K,j,ee,de,Z);else break;L--,z--}if(S>L){if(S<=z){const Y=z+1,G=Y<v?C[Y].el:ie;for(;S<=z;)_(null,C[S]=Z?Gi(C[S]):Qn(C[S]),y,G,K,j,ee,de,Z),S++}}else if(S>z)for(;S<=L;)Ue(A[S],K,j,!0),S++;else{const Y=S,G=S,ve=new Map;for(S=G;S<=z;S++){const ye=C[S]=Z?Gi(C[S]):Qn(C[S]);ye.key!=null&&ve.set(ye.key,S)}let fe,xe=0;const He=z-G+1;let pe=!1,be=0;const Fe=new Array(He);for(S=0;S<He;S++)Fe[S]=0;for(S=Y;S<=L;S++){const ye=A[S];if(xe>=He){Ue(ye,K,j,!0);continue}let Ge;if(ye.key!=null)Ge=ve.get(ye.key);else for(fe=G;fe<=z;fe++)if(Fe[fe-G]===0&&Is(ye,C[fe])){Ge=fe;break}Ge===void 0?Ue(ye,K,j,!0):(Fe[Ge-G]=S+1,Ge>=be?be=Ge:pe=!0,_(ye,C[Ge],y,null,K,j,ee,de,Z),xe++)}const ze=pe?Mv(Fe):rs;for(fe=ze.length-1,S=He-1;S>=0;S--){const ye=G+S,Ge=C[ye],Ye=ye+1<v?C[ye+1].el:ie;Fe[S]===0?_(null,Ge,y,Ye,K,j,ee,de,Z):pe&&(fe<0||S!==ze[fe]?De(Ge,y,Ye,2):fe--)}}},De=(A,C,y,ie,K=null)=>{const{el:j,type:ee,transition:de,children:Z,shapeFlag:S}=A;if(S&6){De(A.component.subTree,C,y,ie);return}if(S&128){A.suspense.move(C,y,ie);return}if(S&64){ee.move(A,C,y,he);return}if(ee===Cn){i(j,C,y);for(let L=0;L<Z.length;L++)De(Z[L],C,y,ie);i(A.anchor,C,y);return}if(ee===Ll){M(A,C,y);return}if(ie!==2&&S&1&&de)if(ie===0)de.beforeEnter(j),i(j,C,y),_n(()=>de.enter(j),K);else{const{leave:L,delayLeave:z,afterLeave:Y}=de,G=()=>i(j,C,y),ve=()=>{L(j,()=>{G(),Y&&Y()})};z?z(j,G,ve):ve()}else i(j,C,y)},Ue=(A,C,y,ie=!1,K=!1)=>{const{type:j,props:ee,ref:de,children:Z,dynamicChildren:S,shapeFlag:v,patchFlag:L,dirs:z,cacheIndex:Y}=A;if(L===-2&&(K=!1),de!=null&&ko(de,null,y,A,!0),Y!=null&&(C.renderCache[Y]=void 0),v&256){C.ctx.deactivate(A);return}const G=v&1&&z,ve=!$s(A);let fe;if(ve&&(fe=ee&&ee.onVnodeBeforeUnmount)&&Kn(fe,C,A),v&6)ge(A.component,y,ie);else{if(v&128){A.suspense.unmount(y,ie);return}G&&cr(A,null,C,"beforeUnmount"),v&64?A.type.remove(A,C,y,he,ie):S&&!S.hasOnce&&(j!==Cn||L>0&&L&64)?Me(S,C,y,!1,!0):(j===Cn&&L&384||!K&&v&16)&&Me(Z,C,y),ie&&$e(A)}(ve&&(fe=ee&&ee.onVnodeUnmounted)||G)&&_n(()=>{fe&&Kn(fe,C,A),G&&cr(A,null,C,"unmounted")},y)},$e=A=>{const{type:C,el:y,anchor:ie,transition:K}=A;if(C===Cn){re(y,ie);return}if(C===Ll){x(A);return}const j=()=>{r(y),K&&!K.persisted&&K.afterLeave&&K.afterLeave()};if(A.shapeFlag&1&&K&&!K.persisted){const{leave:ee,delayLeave:de}=K,Z=()=>ee(y,j);de?de(A.el,j,Z):Z()}else j()},re=(A,C)=>{let y;for(;A!==C;)y=d(A),r(A),A=y;r(C)},ge=(A,C,y)=>{const{bum:ie,scope:K,job:j,subTree:ee,um:de,m:Z,a:S}=A;Qu(Z),Qu(S),ie&&wl(ie),K.stop(),j&&(j.flags|=8,Ue(ee,A,C,y)),de&&_n(de,C),_n(()=>{A.isUnmounted=!0},C),C&&C.pendingBranch&&!C.isUnmounted&&A.asyncDep&&!A.asyncResolved&&A.suspenseId===C.pendingId&&(C.deps--,C.deps===0&&C.resolve())},Me=(A,C,y,ie=!1,K=!1,j=0)=>{for(let ee=j;ee<A.length;ee++)Ue(A[ee],C,y,ie,K)},F=A=>{if(A.shapeFlag&6)return F(A.component.subTree);if(A.shapeFlag&128)return A.suspense.next();const C=d(A.anchor||A.el),y=C&&C[V_];return y?d(y):C};let se=!1;const ce=(A,C,y)=>{A==null?C._vnode&&Ue(C._vnode,null,null,!0):_(C._vnode||null,A,C,null,null,null,y),C._vnode=A,se||(se=!0,ju(),Wp(),se=!1)},he={p:_,um:Ue,m:De,r:$e,mt:ae,mc:O,pc:V,pbc:b,n:F,o:n};return{render:ce,hydrate:void 0,createApp:uv(ce)}}function Il({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function hr({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function yv(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function um(n,e,t=!1){const i=n.children,r=e.children;if(je(i)&&je(r))for(let s=0;s<i.length;s++){const a=i[s];let o=r[s];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=r[s]=Gi(r[s]),o.el=a.el),!t&&o.patchFlag!==-2&&um(a,o)),o.type===ul&&(o.el=a.el)}}function Mv(n){const e=n.slice(),t=[0];let i,r,s,a,o;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(r=t[t.length-1],n[r]<c){e[i]=r,t.push(i);continue}for(s=0,a=t.length-1;s<a;)o=s+a>>1,n[t[o]]<c?s=o+1:a=o;c<n[t[s]]&&(s>0&&(e[i]=t[s-1]),t[s]=i)}}for(s=t.length,a=t[s-1];s-- >0;)t[s]=a,a=e[a];return t}function dm(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:dm(e)}function Qu(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}const Sv=Symbol.for("v-scx"),Ev=()=>Ei(Sv);function wo(n,e,t){return fm(n,e,t)}function fm(n,e,t=_t){const{immediate:i,deep:r,flush:s,once:a}=t,o=tn({},t),l=e&&i||!e&&s!=="post";let c;if(ha){if(s==="sync"){const f=Ev();c=f.__watcherHandles||(f.__watcherHandles=[])}else if(!l){const f=()=>{};return f.stop=ii,f.resume=ii,f.pause=ii,f}}const u=Jt;o.call=(f,g,_)=>si(f,u,g,_);let h=!1;s==="post"?o.scheduler=f=>{_n(f,u&&u.suspense)}:s!=="sync"&&(h=!0,o.scheduler=(f,g)=>{g?f():au(f)}),o.augmentJob=f=>{e&&(f.flags|=4),h&&(f.flags|=2,u&&(f.id=u.uid,f.i=u))};const d=B_(n,e,o);return ha&&(c?c.push(d):l&&d()),d}function bv(n,e,t){const i=this.proxy,r=Lt(n)?n.includes(".")?pm(i,n):()=>i[n]:n.bind(i,i);let s;qe(e)?s=e:(s=e.handler,t=e);const a=Ca(this),o=fm(r,s.bind(i),t);return a(),o}function pm(n,e){const t=e.split(".");return()=>{let i=n;for(let r=0;r<t.length&&i;r++)i=i[t[r]];return i}}const wv=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${Un(e)}Modifiers`]||n[`${Cr(e)}Modifiers`];function Tv(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||_t;let r=t;const s=e.startsWith("update:"),a=s&&wv(i,e.slice(7));a&&(a.trim&&(r=t.map(u=>Lt(u)?u.trim():u)),a.number&&(r=t.map(i_)));let o,l=i[o=bl(e)]||i[o=bl(Un(e))];!l&&s&&(l=i[o=bl(Cr(e))]),l&&si(l,n,6,r);const c=i[o+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[o])return;n.emitted[o]=!0,si(c,n,6,r)}}function mm(n,e,t=!1){const i=e.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let a={},o=!1;if(!qe(n)){const l=c=>{const u=mm(c,e,!0);u&&(o=!0,tn(a,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!o?(St(n)&&i.set(n,null),null):(je(s)?s.forEach(l=>a[l]=null):tn(a,s),St(n)&&i.set(n,a),a)}function hl(n,e){return!n||!el(e)?!1:(e=e.slice(2).replace(/Once$/,""),ut(n,e[0].toLowerCase()+e.slice(1))||ut(n,Cr(e))||ut(n,e))}function ed(n){const{type:e,vnode:t,proxy:i,withProxy:r,propsOptions:[s],slots:a,attrs:o,emit:l,render:c,renderCache:u,props:h,data:d,setupState:f,ctx:g,inheritAttrs:_}=n,m=Oo(n);let p,w;try{if(t.shapeFlag&4){const x=r||i,I=x;p=Qn(c.call(I,x,u,h,f,d,g)),w=o}else{const x=e;p=Qn(x.length>1?x(h,{attrs:o,slots:a,emit:l}):x(h,null)),w=e.props?o:Av(o)}}catch(x){Zs.length=0,ol(x,n,1),p=hn(br)}let M=p;if(w&&_!==!1){const x=Object.keys(w),{shapeFlag:I}=M;x.length&&I&7&&(s&&x.some(qh)&&(w=Cv(w,s)),M=us(M,w,!1,!0))}return t.dirs&&(M=us(M,null,!1,!0),M.dirs=M.dirs?M.dirs.concat(t.dirs):t.dirs),t.transition&&ou(M,t.transition),p=M,Oo(m),p}const Av=n=>{let e;for(const t in n)(t==="class"||t==="style"||el(t))&&((e||(e={}))[t]=n[t]);return e},Cv=(n,e)=>{const t={};for(const i in n)(!qh(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function Rv(n,e,t){const{props:i,children:r,component:s}=n,{props:a,children:o,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?td(i,a,c):!!a;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(a[d]!==i[d]&&!hl(c,d))return!0}}}else return(r||o)&&(!o||!o.$stable)?!0:i===a?!1:i?a?td(i,a,c):!0:!!a;return!1}function td(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==n[s]&&!hl(t,s))return!0}return!1}function Pv({vnode:n,parent:e},t){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=e.vnode).el=t,e=e.parent;else break}}const gm=n=>n.__isSuspense;function Dv(n,e){e&&e.pendingBranch?je(n)?e.effects.push(...n):e.effects.push(n):z_(n)}const Cn=Symbol.for("v-fgt"),ul=Symbol.for("v-txt"),br=Symbol.for("v-cmt"),Ll=Symbol.for("v-stc"),Zs=[];let yn=null;function An(n=!1){Zs.push(yn=n?null:[])}function Iv(){Zs.pop(),yn=Zs[Zs.length-1]||null}let ca=1;function nd(n,e=!1){ca+=n,n<0&&yn&&e&&(yn.hasOnce=!0)}function _m(n){return n.dynamicChildren=ca>0?yn||rs:null,Iv(),ca>0&&yn&&yn.push(n),n}function hi(n,e,t,i,r,s){return _m(jt(n,e,t,i,r,s,!0))}function cu(n,e,t,i,r){return _m(hn(n,e,t,i,r,!0))}function zo(n){return n?n.__v_isVNode===!0:!1}function Is(n,e){return n.type===e.type&&n.key===e.key}const vm=({key:n})=>n??null,To=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?Lt(n)||Qt(n)||qe(n)?{i:Wn,r:n,k:e,f:!!t}:n:null);function jt(n,e=null,t=null,i=0,r=null,s=n===Cn?0:1,a=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&vm(e),ref:e&&To(e),scopeId:jp,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Wn};return o?(hu(l,t),s&128&&n.normalize(l)):t&&(l.shapeFlag|=Lt(t)?8:16),ca>0&&!a&&yn&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&yn.push(l),l}const hn=Lv;function Lv(n,e=null,t=null,i=0,r=null,s=!1){if((!n||n===nv)&&(n=br),zo(n)){const o=us(n,e,!0);return t&&hu(o,t),ca>0&&!s&&yn&&(o.shapeFlag&6?yn[yn.indexOf(n)]=o:yn.push(o)),o.patchFlag=-2,o}if(Wv(n)&&(n=n.__vccOpts),e){e=Uv(e);let{class:o,style:l}=e;o&&!Lt(o)&&(e.class=Jh(o)),St(l)&&(su(l)&&!je(l)&&(l=tn({},l)),e.style=Zh(l))}const a=Lt(n)?1:gm(n)?128:G_(n)?64:St(n)?4:qe(n)?2:0;return jt(n,e,t,i,r,a,s,!0)}function Uv(n){return n?su(n)||rm(n)?tn({},n):n:null}function us(n,e,t=!1,i=!1){const{props:r,ref:s,patchFlag:a,children:o,transition:l}=n,c=e?Nv(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&vm(c),ref:e&&e.ref?t&&s?je(s)?s.concat(To(e)):[s,To(e)]:To(e):s,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:o,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==Cn?a===-1?16:a|16:a,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&us(n.ssContent),ssFallback:n.ssFallback&&us(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&ou(u,l.clone(u)),u}function jc(n=" ",e=0){return hn(ul,null,n,e)}function id(n="",e=!1){return e?(An(),cu(br,null,n)):hn(br,null,n)}function Qn(n){return n==null||typeof n=="boolean"?hn(br):je(n)?hn(Cn,null,n.slice()):zo(n)?Gi(n):hn(ul,null,String(n))}function Gi(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:us(n)}function hu(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(je(e))t=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),hu(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!rm(e)?e._ctx=Wn:r===3&&Wn&&(Wn.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else qe(e)?(e={default:e,_ctx:Wn},t=32):(e=String(e),i&64?(t=16,e=[jc(e)]):t=8);n.children=e,n.shapeFlag|=t}function Nv(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=Jh([e.class,i.class]));else if(r==="style")e.style=Zh([e.style,i.style]);else if(el(r)){const s=e[r],a=i[r];a&&s!==a&&!(je(s)&&s.includes(a))&&(e[r]=s?[].concat(s,a):a)}else r!==""&&(e[r]=i[r])}return e}function Kn(n,e,t,i=null){si(n,e,7,[t,i])}const Fv=tm();let Ov=0;function Bv(n,e,t){const i=n.type,r=(e?e.appContext:n.appContext)||Fv,s={uid:Ov++,vnode:n,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new h_(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:am(i,r),emitsOptions:mm(i,r),emit:null,emitted:null,propsDefaults:_t,inheritAttrs:i.inheritAttrs,ctx:_t,data:_t,props:_t,attrs:_t,slots:_t,refs:_t,setupState:_t,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=Tv.bind(null,s),n.ce&&n.ce(s),s}let Jt=null,Vo,Yc;{const n=rl(),e=(t,i)=>{let r;return(r=n[t])||(r=n[t]=[]),r.push(i),s=>{r.length>1?r.forEach(a=>a(s)):r[0](s)}};Vo=e("__VUE_INSTANCE_SETTERS__",t=>Jt=t),Yc=e("__VUE_SSR_SETTERS__",t=>ha=t)}const Ca=n=>{const e=Jt;return Vo(n),n.scope.on(),()=>{n.scope.off(),Vo(e)}},rd=()=>{Jt&&Jt.scope.off(),Vo(null)};function xm(n){return n.vnode.shapeFlag&4}let ha=!1;function kv(n,e=!1,t=!1){e&&Yc(e);const{props:i,children:r}=n.vnode,s=xm(n);dv(n,i,s,e),gv(n,r,t);const a=s?Hv(n,e):void 0;return e&&Yc(!1),a}function Hv(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,rv);const{setup:i}=t;if(i){Qi();const r=n.setupContext=i.length>1?Vv(n):null,s=Ca(n),a=Aa(i,n,0,[n.props,r]),o=gp(a);if(er(),s(),(o||n.sp)&&!$s(n)&&Yp(n),o){if(a.then(rd,rd),e)return a.then(l=>{sd(n,l)}).catch(l=>{ol(l,n,0)});n.asyncDep=a}else sd(n,a)}else ym(n)}function sd(n,e,t){qe(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:St(e)&&(n.setupState=Hp(e)),ym(n)}function ym(n,e,t){const i=n.type;n.render||(n.render=i.render||ii);{const r=Ca(n);Qi();try{sv(n)}finally{er(),r()}}}const zv={get(n,e){return $t(n,"get",""),n[e]}};function Vv(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,zv),slots:n.slots,emit:n.emit,expose:e}}function uu(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(Hp(P_(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in Ks)return Ks[t](n)},has(e,t){return t in e||t in Ks}})):n.proxy}function Gv(n,e=!0){return qe(n)?n.displayName||n.name:n.name||e&&n.__name}function Wv(n){return qe(n)&&"__vccOpts"in n}const Vn=(n,e)=>F_(n,e,ha);function Mm(n,e,t){const i=arguments.length;return i===2?St(e)&&!je(e)?zo(e)?hn(n,null,[e]):hn(n,e):hn(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&zo(t)&&(t=[t]),hn(n,e,t))}const Xv="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let qc;const ad=typeof window<"u"&&window.trustedTypes;if(ad)try{qc=ad.createPolicy("vue",{createHTML:n=>n})}catch{}const Sm=qc?n=>qc.createHTML(n):n=>n,jv="http://www.w3.org/2000/svg",Yv="http://www.w3.org/1998/Math/MathML",xi=typeof document<"u"?document:null,od=xi&&xi.createElement("template"),qv={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const r=e==="svg"?xi.createElementNS(jv,n):e==="mathml"?xi.createElementNS(Yv,n):t?xi.createElement(n,{is:t}):xi.createElement(n);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>xi.createTextNode(n),createComment:n=>xi.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>xi.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,r,s){const a=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{od.innerHTML=Sm(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const o=od.content;if(i==="svg"||i==="mathml"){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}e.insertBefore(o,t)}return[a?a.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},$v=Symbol("_vtc");function Kv(n,e,t){const i=n[$v];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const ld=Symbol("_vod"),Zv=Symbol("_vsh"),Jv=Symbol(""),Qv=/(^|;)\s*display\s*:/;function e0(n,e,t){const i=n.style,r=Lt(t);let s=!1;if(t&&!r){if(e)if(Lt(e))for(const a of e.split(";")){const o=a.slice(0,a.indexOf(":")).trim();t[o]==null&&Ao(i,o,"")}else for(const a in e)t[a]==null&&Ao(i,a,"");for(const a in t)a==="display"&&(s=!0),Ao(i,a,t[a])}else if(r){if(e!==t){const a=i[Jv];a&&(t+=";"+a),i.cssText=t,s=Qv.test(t)}}else e&&n.removeAttribute("style");ld in n&&(n[ld]=s?i.display:"",n[Zv]&&(i.display="none"))}const cd=/\s*!important$/;function Ao(n,e,t){if(je(t))t.forEach(i=>Ao(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=t0(n,e);cd.test(t)?n.setProperty(Cr(i),t.replace(cd,""),"important"):n[i]=t}}const hd=["Webkit","Moz","ms"],Ul={};function t0(n,e){const t=Ul[e];if(t)return t;let i=Un(e);if(i!=="filter"&&i in n)return Ul[e]=i;i=il(i);for(let r=0;r<hd.length;r++){const s=hd[r]+i;if(s in n)return Ul[e]=s}return e}const ud="http://www.w3.org/1999/xlink";function dd(n,e,t,i,r,s=c_(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(ud,e.slice(6,e.length)):n.setAttributeNS(ud,e,t):t==null||s&&!yp(t)?n.removeAttribute(e):n.setAttribute(e,s?"":Ji(t)?String(t):t)}function fd(n,e,t,i,r){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?Sm(t):t);return}const s=n.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const o=s==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(o!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let a=!1;if(t===""||t==null){const o=typeof n[e];o==="boolean"?t=yp(t):t==null&&o==="string"?(t="",a=!0):o==="number"&&(t=0,a=!0)}try{n[e]=t}catch{}a&&n.removeAttribute(r||e)}function n0(n,e,t,i){n.addEventListener(e,t,i)}function i0(n,e,t,i){n.removeEventListener(e,t,i)}const pd=Symbol("_vei");function r0(n,e,t,i,r=null){const s=n[pd]||(n[pd]={}),a=s[e];if(i&&a)a.value=i;else{const[o,l]=s0(e);if(i){const c=s[e]=l0(i,r);n0(n,o,c,l)}else a&&(i0(n,o,a,l),s[e]=void 0)}}const md=/(?:Once|Passive|Capture)$/;function s0(n){let e;if(md.test(n)){e={};let i;for(;i=n.match(md);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Cr(n.slice(2)),e]}let Nl=0;const a0=Promise.resolve(),o0=()=>Nl||(a0.then(()=>Nl=0),Nl=Date.now());function l0(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;si(c0(i,t.value),e,5,[i])};return t.value=n,t.attached=o0(),t}function c0(n,e){if(je(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const gd=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,h0=(n,e,t,i,r,s)=>{const a=r==="svg";e==="class"?Kv(n,i,a):e==="style"?e0(n,t,i):el(e)?qh(e)||r0(n,e,t,i,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):u0(n,e,i,a))?(fd(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&dd(n,e,i,a,s,e!=="value")):n._isVueCE&&(/[A-Z]/.test(e)||!Lt(i))?fd(n,Un(e),i,s,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),dd(n,e,i,a))};function u0(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&gd(e)&&qe(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=n.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return gd(e)&&Lt(t)?!1:e in n}const d0=tn({patchProp:h0},qv);let _d;function f0(){return _d||(_d=vv(d0))}const p0=(...n)=>{const e=f0().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=g0(i);if(!r)return;const s=e._component;!qe(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const a=t(r,!1,m0(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),a},e};function m0(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function g0(n){return Lt(n)?document.querySelector(n):n}/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Kr=typeof document<"u";function Em(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function _0(n){return n.__esModule||n[Symbol.toStringTag]==="Module"||n.default&&Em(n.default)}const ct=Object.assign;function Fl(n,e){const t={};for(const i in e){const r=e[i];t[i]=jn(r)?r.map(n):n(r)}return t}const Js=()=>{},jn=Array.isArray,bm=/#/g,v0=/&/g,x0=/\//g,y0=/=/g,M0=/\?/g,wm=/\+/g,S0=/%5B/g,E0=/%5D/g,Tm=/%5E/g,b0=/%60/g,Am=/%7B/g,w0=/%7C/g,Cm=/%7D/g,T0=/%20/g;function du(n){return encodeURI(""+n).replace(w0,"|").replace(S0,"[").replace(E0,"]")}function A0(n){return du(n).replace(Am,"{").replace(Cm,"}").replace(Tm,"^")}function $c(n){return du(n).replace(wm,"%2B").replace(T0,"+").replace(bm,"%23").replace(v0,"%26").replace(b0,"`").replace(Am,"{").replace(Cm,"}").replace(Tm,"^")}function C0(n){return $c(n).replace(y0,"%3D")}function R0(n){return du(n).replace(bm,"%23").replace(M0,"%3F")}function P0(n){return n==null?"":R0(n).replace(x0,"%2F")}function ua(n){try{return decodeURIComponent(""+n)}catch{}return""+n}const D0=/\/$/,I0=n=>n.replace(D0,"");function Ol(n,e,t="/"){let i,r={},s="",a="";const o=e.indexOf("#");let l=e.indexOf("?");return o<l&&o>=0&&(l=-1),l>-1&&(i=e.slice(0,l),s=e.slice(l+1,o>-1?o:e.length),r=n(s)),o>-1&&(i=i||e.slice(0,o),a=e.slice(o,e.length)),i=F0(i??e,t),{fullPath:i+(s&&"?")+s+a,path:i,query:r,hash:ua(a)}}function L0(n,e){const t=e.query?n(e.query):"";return e.path+(t&&"?")+t+(e.hash||"")}function vd(n,e){return!e||!n.toLowerCase().startsWith(e.toLowerCase())?n:n.slice(e.length)||"/"}function U0(n,e,t){const i=e.matched.length-1,r=t.matched.length-1;return i>-1&&i===r&&ds(e.matched[i],t.matched[r])&&Rm(e.params,t.params)&&n(e.query)===n(t.query)&&e.hash===t.hash}function ds(n,e){return(n.aliasOf||n)===(e.aliasOf||e)}function Rm(n,e){if(Object.keys(n).length!==Object.keys(e).length)return!1;for(const t in n)if(!N0(n[t],e[t]))return!1;return!0}function N0(n,e){return jn(n)?xd(n,e):jn(e)?xd(e,n):n===e}function xd(n,e){return jn(e)?n.length===e.length&&n.every((t,i)=>t===e[i]):n.length===1&&n[0]===e}function F0(n,e){if(n.startsWith("/"))return n;if(!n)return e;const t=e.split("/"),i=n.split("/"),r=i[i.length-1];(r===".."||r===".")&&i.push("");let s=t.length-1,a,o;for(a=0;a<i.length;a++)if(o=i[a],o!==".")if(o==="..")s>1&&s--;else break;return t.slice(0,s).join("/")+"/"+i.slice(a).join("/")}const Ui={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var da;(function(n){n.pop="pop",n.push="push"})(da||(da={}));var Qs;(function(n){n.back="back",n.forward="forward",n.unknown=""})(Qs||(Qs={}));function O0(n){if(!n)if(Kr){const e=document.querySelector("base");n=e&&e.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),I0(n)}const B0=/^[^#]+#/;function k0(n,e){return n.replace(B0,"#")+e}function H0(n,e){const t=document.documentElement.getBoundingClientRect(),i=n.getBoundingClientRect();return{behavior:e.behavior,left:i.left-t.left-(e.left||0),top:i.top-t.top-(e.top||0)}}const dl=()=>({left:window.scrollX,top:window.scrollY});function z0(n){let e;if("el"in n){const t=n.el,i=typeof t=="string"&&t.startsWith("#"),r=typeof t=="string"?i?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!r)return;e=H0(r,n)}else e=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function yd(n,e){return(history.state?history.state.position-e:-1)+n}const Kc=new Map;function V0(n,e){Kc.set(n,e)}function G0(n){const e=Kc.get(n);return Kc.delete(n),e}let W0=()=>location.protocol+"//"+location.host;function Pm(n,e){const{pathname:t,search:i,hash:r}=e,s=n.indexOf("#");if(s>-1){let o=r.includes(n.slice(s))?n.slice(s).length:1,l=r.slice(o);return l[0]!=="/"&&(l="/"+l),vd(l,"")}return vd(t,n)+i+r}function X0(n,e,t,i){let r=[],s=[],a=null;const o=({state:d})=>{const f=Pm(n,location),g=t.value,_=e.value;let m=0;if(d){if(t.value=f,e.value=d,a&&a===g){a=null;return}m=_?d.position-_.position:0}else i(f);r.forEach(p=>{p(t.value,g,{delta:m,type:da.pop,direction:m?m>0?Qs.forward:Qs.back:Qs.unknown})})};function l(){a=t.value}function c(d){r.push(d);const f=()=>{const g=r.indexOf(d);g>-1&&r.splice(g,1)};return s.push(f),f}function u(){const{history:d}=window;d.state&&d.replaceState(ct({},d.state,{scroll:dl()}),"")}function h(){for(const d of s)d();s=[],window.removeEventListener("popstate",o),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",o),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:h}}function Md(n,e,t,i=!1,r=!1){return{back:n,current:e,forward:t,replaced:i,position:window.history.length,scroll:r?dl():null}}function j0(n){const{history:e,location:t}=window,i={value:Pm(n,t)},r={value:e.state};r.value||s(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(l,c,u){const h=n.indexOf("#"),d=h>-1?(t.host&&document.querySelector("base")?n:n.slice(h))+l:W0()+n+l;try{e[u?"replaceState":"pushState"](c,"",d),r.value=c}catch(f){console.error(f),t[u?"replace":"assign"](d)}}function a(l,c){const u=ct({},e.state,Md(r.value.back,l,r.value.forward,!0),c,{position:r.value.position});s(l,u,!0),i.value=l}function o(l,c){const u=ct({},r.value,e.state,{forward:l,scroll:dl()});s(u.current,u,!0);const h=ct({},Md(i.value,l,null),{position:u.position+1},c);s(l,h,!1),i.value=l}return{location:i,state:r,push:o,replace:a}}function Y0(n){n=O0(n);const e=j0(n),t=X0(n,e.state,e.location,e.replace);function i(s,a=!0){a||t.pauseListeners(),history.go(s)}const r=ct({location:"",base:n,go:i,createHref:k0.bind(null,n)},e,t);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function q0(n){return n=location.host?n||location.pathname+location.search:"",n.includes("#")||(n+="#"),Y0(n)}function $0(n){return typeof n=="string"||n&&typeof n=="object"}function Dm(n){return typeof n=="string"||typeof n=="symbol"}const Im=Symbol("");var Sd;(function(n){n[n.aborted=4]="aborted",n[n.cancelled=8]="cancelled",n[n.duplicated=16]="duplicated"})(Sd||(Sd={}));function fs(n,e){return ct(new Error,{type:n,[Im]:!0},e)}function ui(n,e){return n instanceof Error&&Im in n&&(e==null||!!(n.type&e))}const Ed="[^/]+?",K0={sensitive:!1,strict:!1,start:!0,end:!0},Z0=/[.+*?^${}()[\]/\\]/g;function J0(n,e){const t=ct({},K0,e),i=[];let r=t.start?"^":"";const s=[];for(const c of n){const u=c.length?[]:[90];t.strict&&!c.length&&(r+="/");for(let h=0;h<c.length;h++){const d=c[h];let f=40+(t.sensitive?.25:0);if(d.type===0)h||(r+="/"),r+=d.value.replace(Z0,"\\$&"),f+=40;else if(d.type===1){const{value:g,repeatable:_,optional:m,regexp:p}=d;s.push({name:g,repeatable:_,optional:m});const w=p||Ed;if(w!==Ed){f+=10;try{new RegExp(`(${w})`)}catch(x){throw new Error(`Invalid custom RegExp for param "${g}" (${w}): `+x.message)}}let M=_?`((?:${w})(?:/(?:${w}))*)`:`(${w})`;h||(M=m&&c.length<2?`(?:/${M})`:"/"+M),m&&(M+="?"),r+=M,f+=20,m&&(f+=-8),_&&(f+=-20),w===".*"&&(f+=-50)}u.push(f)}i.push(u)}if(t.strict&&t.end){const c=i.length-1;i[c][i[c].length-1]+=.7000000000000001}t.strict||(r+="/?"),t.end?r+="$":t.strict&&!r.endsWith("/")&&(r+="(?:/|$)");const a=new RegExp(r,t.sensitive?"":"i");function o(c){const u=c.match(a),h={};if(!u)return null;for(let d=1;d<u.length;d++){const f=u[d]||"",g=s[d-1];h[g.name]=f&&g.repeatable?f.split("/"):f}return h}function l(c){let u="",h=!1;for(const d of n){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const f of d)if(f.type===0)u+=f.value;else if(f.type===1){const{value:g,repeatable:_,optional:m}=f,p=g in c?c[g]:"";if(jn(p)&&!_)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const w=jn(p)?p.join("/"):p;if(!w)if(m)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${g}"`);u+=w}}return u||"/"}return{re:a,score:i,keys:s,parse:o,stringify:l}}function Q0(n,e){let t=0;for(;t<n.length&&t<e.length;){const i=e[t]-n[t];if(i)return i;t++}return n.length<e.length?n.length===1&&n[0]===80?-1:1:n.length>e.length?e.length===1&&e[0]===80?1:-1:0}function Lm(n,e){let t=0;const i=n.score,r=e.score;for(;t<i.length&&t<r.length;){const s=Q0(i[t],r[t]);if(s)return s;t++}if(Math.abs(r.length-i.length)===1){if(bd(i))return 1;if(bd(r))return-1}return r.length-i.length}function bd(n){const e=n[n.length-1];return n.length>0&&e[e.length-1]<0}const ex={type:0,value:""},tx=/[a-zA-Z0-9_]/;function nx(n){if(!n)return[[]];if(n==="/")return[[ex]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function e(f){throw new Error(`ERR (${t})/"${c}": ${f}`)}let t=0,i=t;const r=[];let s;function a(){s&&r.push(s),s=[]}let o=0,l,c="",u="";function h(){c&&(t===0?s.push({type:0,value:c}):t===1||t===2||t===3?(s.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function d(){c+=l}for(;o<n.length;){if(l=n[o++],l==="\\"&&t!==2){i=t,t=4;continue}switch(t){case 0:l==="/"?(c&&h(),a()):l===":"?(h(),t=1):d();break;case 4:d(),t=i;break;case 1:l==="("?t=2:tx.test(l)?d():(h(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&o--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:t=3:u+=l;break;case 3:h(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&o--,u="";break;default:e("Unknown state");break}}return t===2&&e(`Unfinished custom RegExp for param "${c}"`),h(),a(),r}function ix(n,e,t){const i=J0(nx(n.path),t),r=ct(i,{record:n,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function rx(n,e){const t=[],i=new Map;e=Cd({strict:!1,end:!0,sensitive:!1},e);function r(h){return i.get(h)}function s(h,d,f){const g=!f,_=Td(h);_.aliasOf=f&&f.record;const m=Cd(e,h),p=[_];if("alias"in h){const x=typeof h.alias=="string"?[h.alias]:h.alias;for(const I of x)p.push(Td(ct({},_,{components:f?f.record.components:_.components,path:I,aliasOf:f?f.record:_})))}let w,M;for(const x of p){const{path:I}=x;if(d&&I[0]!=="/"){const U=d.record.path,R=U[U.length-1]==="/"?"":"/";x.path=d.record.path+(I&&R+I)}if(w=ix(x,d,m),f?f.alias.push(w):(M=M||w,M!==w&&M.alias.push(w),g&&h.name&&!Ad(w)&&a(h.name)),Um(w)&&l(w),_.children){const U=_.children;for(let R=0;R<U.length;R++)s(U[R],w,f&&f.children[R])}f=f||w}return M?()=>{a(M)}:Js}function a(h){if(Dm(h)){const d=i.get(h);d&&(i.delete(h),t.splice(t.indexOf(d),1),d.children.forEach(a),d.alias.forEach(a))}else{const d=t.indexOf(h);d>-1&&(t.splice(d,1),h.record.name&&i.delete(h.record.name),h.children.forEach(a),h.alias.forEach(a))}}function o(){return t}function l(h){const d=ox(h,t);t.splice(d,0,h),h.record.name&&!Ad(h)&&i.set(h.record.name,h)}function c(h,d){let f,g={},_,m;if("name"in h&&h.name){if(f=i.get(h.name),!f)throw fs(1,{location:h});m=f.record.name,g=ct(wd(d.params,f.keys.filter(M=>!M.optional).concat(f.parent?f.parent.keys.filter(M=>M.optional):[]).map(M=>M.name)),h.params&&wd(h.params,f.keys.map(M=>M.name))),_=f.stringify(g)}else if(h.path!=null)_=h.path,f=t.find(M=>M.re.test(_)),f&&(g=f.parse(_),m=f.record.name);else{if(f=d.name?i.get(d.name):t.find(M=>M.re.test(d.path)),!f)throw fs(1,{location:h,currentLocation:d});m=f.record.name,g=ct({},d.params,h.params),_=f.stringify(g)}const p=[];let w=f;for(;w;)p.unshift(w.record),w=w.parent;return{name:m,path:_,params:g,matched:p,meta:ax(p)}}n.forEach(h=>s(h));function u(){t.length=0,i.clear()}return{addRoute:s,resolve:c,removeRoute:a,clearRoutes:u,getRoutes:o,getRecordMatcher:r}}function wd(n,e){const t={};for(const i of e)i in n&&(t[i]=n[i]);return t}function Td(n){const e={path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:n.aliasOf,beforeEnter:n.beforeEnter,props:sx(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function sx(n){const e={},t=n.props||!1;if("component"in n)e.default=t;else for(const i in n.components)e[i]=typeof t=="object"?t[i]:t;return e}function Ad(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function ax(n){return n.reduce((e,t)=>ct(e,t.meta),{})}function Cd(n,e){const t={};for(const i in n)t[i]=i in e?e[i]:n[i];return t}function ox(n,e){let t=0,i=e.length;for(;t!==i;){const s=t+i>>1;Lm(n,e[s])<0?i=s:t=s+1}const r=lx(n);return r&&(i=e.lastIndexOf(r,i-1)),i}function lx(n){let e=n;for(;e=e.parent;)if(Um(e)&&Lm(n,e)===0)return e}function Um({record:n}){return!!(n.name||n.components&&Object.keys(n.components).length||n.redirect)}function cx(n){const e={};if(n===""||n==="?")return e;const i=(n[0]==="?"?n.slice(1):n).split("&");for(let r=0;r<i.length;++r){const s=i[r].replace(wm," "),a=s.indexOf("="),o=ua(a<0?s:s.slice(0,a)),l=a<0?null:ua(s.slice(a+1));if(o in e){let c=e[o];jn(c)||(c=e[o]=[c]),c.push(l)}else e[o]=l}return e}function Rd(n){let e="";for(let t in n){const i=n[t];if(t=C0(t),i==null){i!==void 0&&(e+=(e.length?"&":"")+t);continue}(jn(i)?i.map(s=>s&&$c(s)):[i&&$c(i)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+t,s!=null&&(e+="="+s))})}return e}function hx(n){const e={};for(const t in n){const i=n[t];i!==void 0&&(e[t]=jn(i)?i.map(r=>r==null?null:""+r):i==null?i:""+i)}return e}const ux=Symbol(""),Pd=Symbol(""),fu=Symbol(""),Nm=Symbol(""),Zc=Symbol("");function Ls(){let n=[];function e(i){return n.push(i),()=>{const r=n.indexOf(i);r>-1&&n.splice(r,1)}}function t(){n=[]}return{add:e,list:()=>n.slice(),reset:t}}function Wi(n,e,t,i,r,s=a=>a()){const a=i&&(i.enterCallbacks[r]=i.enterCallbacks[r]||[]);return()=>new Promise((o,l)=>{const c=d=>{d===!1?l(fs(4,{from:t,to:e})):d instanceof Error?l(d):$0(d)?l(fs(2,{from:e,to:d})):(a&&i.enterCallbacks[r]===a&&typeof d=="function"&&a.push(d),o())},u=s(()=>n.call(i&&i.instances[r],e,t,c));let h=Promise.resolve(u);n.length<3&&(h=h.then(c)),h.catch(d=>l(d))})}function Bl(n,e,t,i,r=s=>s()){const s=[];for(const a of n)for(const o in a.components){let l=a.components[o];if(!(e!=="beforeRouteEnter"&&!a.instances[o]))if(Em(l)){const u=(l.__vccOpts||l)[e];u&&s.push(Wi(u,t,i,a,o,r))}else{let c=l();s.push(()=>c.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${o}" at "${a.path}"`);const h=_0(u)?u.default:u;a.mods[o]=u,a.components[o]=h;const f=(h.__vccOpts||h)[e];return f&&Wi(f,t,i,a,o,r)()}))}}return s}function Dd(n){const e=Ei(fu),t=Ei(Nm),i=Vn(()=>{const l=Rn(n.to);return e.resolve(l)}),r=Vn(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],h=t.matched;if(!u||!h.length)return-1;const d=h.findIndex(ds.bind(null,u));if(d>-1)return d;const f=Id(l[c-2]);return c>1&&Id(u)===f&&h[h.length-1].path!==f?h.findIndex(ds.bind(null,l[c-2])):d}),s=Vn(()=>r.value>-1&&mx(t.params,i.value.params)),a=Vn(()=>r.value>-1&&r.value===t.matched.length-1&&Rm(t.params,i.value.params));function o(l={}){if(px(l)){const c=e[Rn(n.replace)?"replace":"push"](Rn(n.to)).catch(Js);return n.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>c),c}return Promise.resolve()}return{route:i,href:Vn(()=>i.value.href),isActive:s,isExactActive:a,navigate:o}}function dx(n){return n.length===1?n[0]:n}const fx=ll({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Dd,setup(n,{slots:e}){const t=al(Dd(n)),{options:i}=Ei(fu),r=Vn(()=>({[Ld(n.activeClass,i.linkActiveClass,"router-link-active")]:t.isActive,[Ld(n.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const s=e.default&&dx(e.default(t));return n.custom?s:Mm("a",{"aria-current":t.isExactActive?n.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:r.value},s)}}}),Go=fx;function px(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const e=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return n.preventDefault&&n.preventDefault(),!0}}function mx(n,e){for(const t in e){const i=e[t],r=n[t];if(typeof i=="string"){if(i!==r)return!1}else if(!jn(r)||r.length!==i.length||i.some((s,a)=>s!==r[a]))return!1}return!0}function Id(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const Ld=(n,e,t)=>n??e??t,gx=ll({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:e,slots:t}){const i=Ei(Zc),r=Vn(()=>n.route||i.value),s=Ei(Pd,0),a=Vn(()=>{let c=Rn(s);const{matched:u}=r.value;let h;for(;(h=u[c])&&!h.components;)c++;return c}),o=Vn(()=>r.value.matched[a.value]);bo(Pd,Vn(()=>a.value+1)),bo(ux,o),bo(Zc,r);const l=D_();return wo(()=>[l.value,o.value,n.name],([c,u,h],[d,f,g])=>{u&&(u.instances[h]=c,f&&f!==u&&c&&c===d&&(u.leaveGuards.size||(u.leaveGuards=f.leaveGuards),u.updateGuards.size||(u.updateGuards=f.updateGuards))),c&&u&&(!f||!ds(u,f)||!d)&&(u.enterCallbacks[h]||[]).forEach(_=>_(c))},{flush:"post"}),()=>{const c=r.value,u=n.name,h=o.value,d=h&&h.components[u];if(!d)return Ud(t.default,{Component:d,route:c});const f=h.props[u],g=f?f===!0?c.params:typeof f=="function"?f(c):f:null,m=Mm(d,ct({},g,e,{onVnodeUnmounted:p=>{p.component.isUnmounted&&(h.instances[u]=null)},ref:l}));return Ud(t.default,{Component:m,route:c})||m}}});function Ud(n,e){if(!n)return null;const t=n(e);return t.length===1?t[0]:t}const _x=gx;function vx(n){const e=rx(n.routes,n),t=n.parseQuery||cx,i=n.stringifyQuery||Rd,r=n.history,s=Ls(),a=Ls(),o=Ls(),l=I_(Ui);let c=Ui;Kr&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Fl.bind(null,F=>""+F),h=Fl.bind(null,P0),d=Fl.bind(null,ua);function f(F,se){let ce,he;return Dm(F)?(ce=e.getRecordMatcher(F),he=se):he=F,e.addRoute(he,ce)}function g(F){const se=e.getRecordMatcher(F);se&&e.removeRoute(se)}function _(){return e.getRoutes().map(F=>F.record)}function m(F){return!!e.getRecordMatcher(F)}function p(F,se){if(se=ct({},se||l.value),typeof F=="string"){const y=Ol(t,F,se.path),ie=e.resolve({path:y.path},se),K=r.createHref(y.fullPath);return ct(y,ie,{params:d(ie.params),hash:ua(y.hash),redirectedFrom:void 0,href:K})}let ce;if(F.path!=null)ce=ct({},F,{path:Ol(t,F.path,se.path).path});else{const y=ct({},F.params);for(const ie in y)y[ie]==null&&delete y[ie];ce=ct({},F,{params:h(y)}),se.params=h(se.params)}const he=e.resolve(ce,se),Oe=F.hash||"";he.params=u(d(he.params));const A=L0(i,ct({},F,{hash:A0(Oe),path:he.path})),C=r.createHref(A);return ct({fullPath:A,hash:Oe,query:i===Rd?hx(F.query):F.query||{}},he,{redirectedFrom:void 0,href:C})}function w(F){return typeof F=="string"?Ol(t,F,l.value.path):ct({},F)}function M(F,se){if(c!==F)return fs(8,{from:se,to:F})}function x(F){return R(F)}function I(F){return x(ct(w(F),{replace:!0}))}function U(F){const se=F.matched[F.matched.length-1];if(se&&se.redirect){const{redirect:ce}=se;let he=typeof ce=="function"?ce(F):ce;return typeof he=="string"&&(he=he.includes("?")||he.includes("#")?he=w(he):{path:he},he.params={}),ct({query:F.query,hash:F.hash,params:he.path!=null?{}:F.params},he)}}function R(F,se){const ce=c=p(F),he=l.value,Oe=F.state,A=F.force,C=F.replace===!0,y=U(ce);if(y)return R(ct(w(y),{state:typeof y=="object"?ct({},Oe,y.state):Oe,force:A,replace:C}),se||ce);const ie=ce;ie.redirectedFrom=se;let K;return!A&&U0(i,he,ce)&&(K=fs(16,{to:ie,from:he}),De(he,he,!0,!1)),(K?Promise.resolve(K):b(ie,he)).catch(j=>ui(j)?ui(j,2)?j:Se(j):V(j,ie,he)).then(j=>{if(j){if(ui(j,2))return R(ct({replace:C},w(j.to),{state:typeof j.to=="object"?ct({},Oe,j.to.state):Oe,force:A}),se||ie)}else j=te(ie,he,!0,C,Oe);return D(ie,he,j),j})}function O(F,se){const ce=M(F,se);return ce?Promise.reject(ce):Promise.resolve()}function T(F){const se=re.values().next().value;return se&&typeof se.runWithContext=="function"?se.runWithContext(F):F()}function b(F,se){let ce;const[he,Oe,A]=xx(F,se);ce=Bl(he.reverse(),"beforeRouteLeave",F,se);for(const y of he)y.leaveGuards.forEach(ie=>{ce.push(Wi(ie,F,se))});const C=O.bind(null,F,se);return ce.push(C),Me(ce).then(()=>{ce=[];for(const y of s.list())ce.push(Wi(y,F,se));return ce.push(C),Me(ce)}).then(()=>{ce=Bl(Oe,"beforeRouteUpdate",F,se);for(const y of Oe)y.updateGuards.forEach(ie=>{ce.push(Wi(ie,F,se))});return ce.push(C),Me(ce)}).then(()=>{ce=[];for(const y of A)if(y.beforeEnter)if(jn(y.beforeEnter))for(const ie of y.beforeEnter)ce.push(Wi(ie,F,se));else ce.push(Wi(y.beforeEnter,F,se));return ce.push(C),Me(ce)}).then(()=>(F.matched.forEach(y=>y.enterCallbacks={}),ce=Bl(A,"beforeRouteEnter",F,se,T),ce.push(C),Me(ce))).then(()=>{ce=[];for(const y of a.list())ce.push(Wi(y,F,se));return ce.push(C),Me(ce)}).catch(y=>ui(y,8)?y:Promise.reject(y))}function D(F,se,ce){o.list().forEach(he=>T(()=>he(F,se,ce)))}function te(F,se,ce,he,Oe){const A=M(F,se);if(A)return A;const C=se===Ui,y=Kr?history.state:{};ce&&(he||C?r.replace(F.fullPath,ct({scroll:C&&y&&y.scroll},Oe)):r.push(F.fullPath,Oe)),l.value=F,De(F,se,ce,C),Se()}let X;function ae(){X||(X=r.listen((F,se,ce)=>{if(!ge.listening)return;const he=p(F),Oe=U(he);if(Oe){R(ct(Oe,{replace:!0,force:!0}),he).catch(Js);return}c=he;const A=l.value;Kr&&V0(yd(A.fullPath,ce.delta),dl()),b(he,A).catch(C=>ui(C,12)?C:ui(C,2)?(R(ct(w(C.to),{force:!0}),he).then(y=>{ui(y,20)&&!ce.delta&&ce.type===da.pop&&r.go(-1,!1)}).catch(Js),Promise.reject()):(ce.delta&&r.go(-ce.delta,!1),V(C,he,A))).then(C=>{C=C||te(he,A,!1),C&&(ce.delta&&!ui(C,8)?r.go(-ce.delta,!1):ce.type===da.pop&&ui(C,20)&&r.go(-1,!1)),D(he,A,C)}).catch(Js)}))}let oe=Ls(),J=Ls(),Q;function V(F,se,ce){Se(F);const he=J.list();return he.length?he.forEach(Oe=>Oe(F,se,ce)):console.error(F),Promise.reject(F)}function me(){return Q&&l.value!==Ui?Promise.resolve():new Promise((F,se)=>{oe.add([F,se])})}function Se(F){return Q||(Q=!F,ae(),oe.list().forEach(([se,ce])=>F?ce(F):se()),oe.reset()),F}function De(F,se,ce,he){const{scrollBehavior:Oe}=n;if(!Kr||!Oe)return Promise.resolve();const A=!ce&&G0(yd(F.fullPath,0))||(he||!ce)&&history.state&&history.state.scroll||null;return Vp().then(()=>Oe(F,se,A)).then(C=>C&&z0(C)).catch(C=>V(C,F,se))}const Ue=F=>r.go(F);let $e;const re=new Set,ge={currentRoute:l,listening:!0,addRoute:f,removeRoute:g,clearRoutes:e.clearRoutes,hasRoute:m,getRoutes:_,resolve:p,options:n,push:x,replace:I,go:Ue,back:()=>Ue(-1),forward:()=>Ue(1),beforeEach:s.add,beforeResolve:a.add,afterEach:o.add,onError:J.add,isReady:me,install(F){const se=this;F.component("RouterLink",Go),F.component("RouterView",_x),F.config.globalProperties.$router=se,Object.defineProperty(F.config.globalProperties,"$route",{enumerable:!0,get:()=>Rn(l)}),Kr&&!$e&&l.value===Ui&&($e=!0,x(r.location).catch(Oe=>{}));const ce={};for(const Oe in Ui)Object.defineProperty(ce,Oe,{get:()=>l.value[Oe],enumerable:!0});F.provide(fu,se),F.provide(Nm,Op(ce)),F.provide(Zc,l);const he=F.unmount;re.add(F),F.unmount=function(){re.delete(F),re.size<1&&(c=Ui,X&&X(),X=null,l.value=Ui,$e=!1,Q=!1),he()}}};function Me(F){return F.reduce((se,ce)=>se.then(()=>T(ce)),Promise.resolve())}return ge}function xx(n,e){const t=[],i=[],r=[],s=Math.max(e.matched.length,n.matched.length);for(let a=0;a<s;a++){const o=e.matched[a];o&&(n.matched.find(c=>ds(c,o))?i.push(o):t.push(o));const l=n.matched[a];l&&(e.matched.find(c=>ds(c,l))||r.push(l))}return[t,i,r]}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const pu="175",cs={ROTATE:0,DOLLY:1,PAN:2},es={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},yx=0,Nd=1,Mx=2,Ri=1,Sx=2,vi=3,ai=0,en=1,xn=2,Pt=0,Mn=1,Fd=2,Od=3,Bd=4,Ex=5,xr=100,bx=101,wx=102,Tx=103,Ax=104,Cx=200,Rx=201,Px=202,Dx=203,Jc=204,Qc=205,Ix=206,Lx=207,Ux=208,Nx=209,Fx=210,Ox=211,Bx=212,kx=213,Hx=214,eh=0,th=1,nh=2,ps=3,ih=4,rh=5,sh=6,ah=7,fl=0,zx=1,Vx=2,$i=0,Fm=1,Om=2,Bm=3,km=4,Hm=5,zm=6,Vm=7,kd="attached",Gx="detached",Gm=300,ms=301,gs=302,Wo=303,oh=304,pl=306,fa=1e3,Mi=1001,lh=1002,Sn=1003,Wx=1004,Ha=1005,ti=1006,kl=1007,Mr=1008,wi=1009,Wm=1010,Xm=1011,pa=1012,mu=1013,wr=1014,ni=1015,Ms=1016,gu=1017,_u=1018,ma=1020,jm=35902,Ym=1021,qm=1022,fn=1023,$m=1024,Km=1025,ga=1026,_a=1027,Zm=1028,vu=1029,Jm=1030,xu=1031,yu=1033,Co=33776,Ro=33777,Po=33778,Do=33779,ch=35840,hh=35841,uh=35842,dh=35843,fh=36196,ph=37492,mh=37496,gh=37808,_h=37809,vh=37810,xh=37811,yh=37812,Mh=37813,Sh=37814,Eh=37815,bh=37816,wh=37817,Th=37818,Ah=37819,Ch=37820,Rh=37821,Io=36492,Ph=36494,Dh=36495,Qm=36283,Ih=36284,Lh=36285,Uh=36286,Xo=2300,Nh=2301,Hl=2302,Hd=2400,zd=2401,Vd=2402,Xx=2500,jx=3200,Ra=3201,ml=0,Yx=1,Yi="",st="srgb",Ct="srgb-linear",jo="linear",ft="srgb",Lr=7680,Gd=519,qx=512,$x=513,Kx=514,eg=515,Zx=516,Jx=517,Qx=518,ey=519,Wd=35044,Xd="300 es",Si=2e3,Yo=2001;class Rr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Wt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let jd=1234567;const ea=Math.PI/180,_s=180/Math.PI;function tr(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Wt[n&255]+Wt[n>>8&255]+Wt[n>>16&255]+Wt[n>>24&255]+"-"+Wt[e&255]+Wt[e>>8&255]+"-"+Wt[e>>16&15|64]+Wt[e>>24&255]+"-"+Wt[t&63|128]+Wt[t>>8&255]+"-"+Wt[t>>16&255]+Wt[t>>24&255]+Wt[i&255]+Wt[i>>8&255]+Wt[i>>16&255]+Wt[i>>24&255]).toLowerCase()}function Je(n,e,t){return Math.max(e,Math.min(t,n))}function Mu(n,e){return(n%e+e)%e}function ty(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function ny(n,e,t){return n!==e?(t-n)/(e-n):0}function ta(n,e,t){return(1-t)*n+t*e}function iy(n,e,t,i){return ta(n,e,1-Math.exp(-t*i))}function ry(n,e=1){return e-Math.abs(Mu(n,e*2)-e)}function sy(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function ay(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function oy(n,e){return n+Math.floor(Math.random()*(e-n+1))}function ly(n,e){return n+Math.random()*(e-n)}function cy(n){return n*(.5-Math.random())}function hy(n){n!==void 0&&(jd=n);let e=jd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function uy(n){return n*ea}function dy(n){return n*_s}function fy(n){return(n&n-1)===0&&n!==0}function py(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function my(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function gy(n,e,t,i,r){const s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+i)/2),u=a((e+i)/2),h=s((e-i)/2),d=a((e-i)/2),f=s((i-e)/2),g=a((i-e)/2);switch(r){case"XYX":n.set(o*u,l*h,l*d,o*c);break;case"YZY":n.set(l*d,o*u,l*h,o*c);break;case"ZXZ":n.set(l*h,l*d,o*u,o*c);break;case"XZX":n.set(o*u,l*g,l*f,o*c);break;case"YXY":n.set(l*f,o*u,l*g,o*c);break;case"ZYZ":n.set(l*g,l*f,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Zr(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function an(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Yt={DEG2RAD:ea,RAD2DEG:_s,generateUUID:tr,clamp:Je,euclideanModulo:Mu,mapLinear:ty,inverseLerp:ny,lerp:ta,damp:iy,pingpong:ry,smoothstep:sy,smootherstep:ay,randInt:oy,randFloat:ly,randFloatSpread:cy,seededRandom:hy,degToRad:uy,radToDeg:dy,isPowerOfTwo:fy,ceilPowerOfTwo:py,floorPowerOfTwo:my,setQuaternionFromProperEuler:gy,normalize:an,denormalize:Zr};class Pe{constructor(e=0,t=0){Pe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Je(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Je(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Xe{constructor(e,t,i,r,s,a,o,l,c){Xe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c)}set(e,t,i,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],h=i[7],d=i[2],f=i[5],g=i[8],_=r[0],m=r[3],p=r[6],w=r[1],M=r[4],x=r[7],I=r[2],U=r[5],R=r[8];return s[0]=a*_+o*w+l*I,s[3]=a*m+o*M+l*U,s[6]=a*p+o*x+l*R,s[1]=c*_+u*w+h*I,s[4]=c*m+u*M+h*U,s[7]=c*p+u*x+h*R,s[2]=d*_+f*w+g*I,s[5]=d*m+f*M+g*U,s[8]=d*p+f*x+g*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-i*s*u+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*a-o*c,d=o*l-u*s,f=c*s-a*l,g=t*h+i*d+r*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=h*_,e[1]=(r*c-u*i)*_,e[2]=(o*i-r*a)*_,e[3]=d*_,e[4]=(u*t-r*l)*_,e[5]=(r*s-o*t)*_,e[6]=f*_,e[7]=(i*l-c*t)*_,e[8]=(a*t-i*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(zl.makeScale(e,t)),this}rotate(e){return this.premultiply(zl.makeRotation(-e)),this}translate(e,t){return this.premultiply(zl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const zl=new Xe;function tg(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function va(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function _y(){const n=va("canvas");return n.style.display="block",n}const Yd={};function Lo(n){n in Yd||(Yd[n]=!0,console.warn(n))}function vy(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}function xy(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function yy(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const qd=new Xe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),$d=new Xe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function My(){const n={enabled:!0,workingColorSpace:Ct,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===ft&&(r.r=bi(r.r),r.g=bi(r.g),r.b=bi(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ft&&(r.r=hs(r.r),r.g=hs(r.g),r.b=hs(r.b))),r},fromWorkingColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},toWorkingColorSpace:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Yi?jo:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Ct]:{primaries:e,whitePoint:i,transfer:jo,toXYZ:qd,fromXYZ:$d,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:st},outputColorSpaceConfig:{drawingBufferColorSpace:st}},[st]:{primaries:e,whitePoint:i,transfer:ft,toXYZ:qd,fromXYZ:$d,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:st}}}),n}const Ze=My();function bi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function hs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Ur;class Sy{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Ur===void 0&&(Ur=va("canvas")),Ur.width=e.width,Ur.height=e.height;const r=Ur.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Ur}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=va("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=bi(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(bi(t[i]/255)*255):t[i]=bi(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Ey=0;class Su{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ey++}),this.uuid=tr(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Vl(r[a].image)):s.push(Vl(r[a]))}else s=Vl(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Vl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Sy.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let by=0;class Vt extends Rr{constructor(e=Vt.DEFAULT_IMAGE,t=Vt.DEFAULT_MAPPING,i=Mi,r=Mi,s=ti,a=Mr,o=fn,l=wi,c=Vt.DEFAULT_ANISOTROPY,u=Yi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:by++}),this.uuid=tr(),this.name="",this.source=new Su(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Pe(0,0),this.repeat=new Pe(1,1),this.center=new Pe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Gm)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case fa:e.x=e.x-Math.floor(e.x);break;case Mi:e.x=e.x<0?0:1;break;case lh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case fa:e.y=e.y-Math.floor(e.y);break;case Mi:e.y=e.y<0?0:1;break;case lh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Vt.DEFAULT_IMAGE=null;Vt.DEFAULT_MAPPING=Gm;Vt.DEFAULT_ANISOTROPY=1;class tt{constructor(e=0,t=0,i=0,r=1){tt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(c+1)/2,x=(f+1)/2,I=(p+1)/2,U=(u+d)/4,R=(h+_)/4,O=(g+m)/4;return M>x&&M>I?M<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(M),r=U/i,s=R/i):x>I?x<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),i=U/r,s=O/r):I<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(I),i=R/s,r=O/s),this.set(i,r,s,t),this}let w=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(d-u)*(d-u));return Math.abs(w)<.001&&(w=1),this.x=(m-g)/w,this.y=(h-_)/w,this.z=(d-u)/w,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this.z=Je(this.z,e.z,t.z),this.w=Je(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this.z=Je(this.z,e,t),this.w=Je(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Je(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class wy extends Rr{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new tt(0,0,e,t),this.scissorTest=!1,this.viewport=new tt(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ti,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Vt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Su(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class wt extends wy{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class ng extends Vt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Sn,this.minFilter=Sn,this.wrapR=Mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ty extends Vt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Sn,this.minFilter=Sn,this.wrapR=Mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class qt{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let l=i[r+0],c=i[r+1],u=i[r+2],h=i[r+3];const d=s[a+0],f=s[a+1],g=s[a+2],_=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=_;return}if(h!==_||l!==d||c!==f||u!==g){let m=1-o;const p=l*d+c*f+u*g+h*_,w=p>=0?1:-1,M=1-p*p;if(M>Number.EPSILON){const I=Math.sqrt(M),U=Math.atan2(I,p*w);m=Math.sin(m*U)/I,o=Math.sin(o*U)/I}const x=o*w;if(l=l*m+d*x,c=c*m+f*x,u=u*m+g*x,h=h*m+_*x,m===1-o){const I=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=I,c*=I,u*=I,h*=I}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],u=i[r+3],h=s[a],d=s[a+1],f=s[a+2],g=s[a+3];return e[t]=o*g+u*h+l*f-c*d,e[t+1]=l*g+u*d+c*h-o*f,e[t+2]=c*g+u*f+o*d-l*h,e[t+3]=u*g-o*h-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(r/2),h=o(s/2),d=l(i/2),f=l(r/2),g=l(s/2);switch(a){case"XYZ":this._x=d*u*h+c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h-d*f*g;break;case"YXZ":this._x=d*u*h+c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h+d*f*g;break;case"ZXY":this._x=d*u*h-c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h-d*f*g;break;case"ZYX":this._x=d*u*h-c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h+d*f*g;break;case"YZX":this._x=d*u*h+c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h-d*f*g;break;case"XZY":this._x=d*u*h-c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=i+o+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(s-c)*f,this._z=(a-r)*f}else if(i>o&&i>h){const f=2*Math.sqrt(1+i-o-h);this._w=(u-l)/f,this._x=.25*f,this._y=(r+a)/f,this._z=(s+c)/f}else if(o>h){const f=2*Math.sqrt(1+o-i-h);this._w=(s-c)/f,this._x=(r+a)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+h-i-o);this._w=(a-r)/f,this._x=(s+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Je(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-i*c,this._z=s*u+a*c+i*l-r*o,this._w=a*u-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const f=1-t;return this._w=f*a+t*this._w,this._x=f*i+t*this._x,this._y=f*r+t*this._y,this._z=f*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=a*h+this._w*d,this._x=i*h+this._x*d,this._y=r*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(e=0,t=0,i=0){N.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Kd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Kd.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),u=2*(o*t-s*r),h=2*(s*i-a*t);return this.x=t+l*c+a*h-o*u,this.y=i+l*u+o*c-s*h,this.z=r+l*h+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this.z=Je(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this.z=Je(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Je(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Gl.copy(this).projectOnVector(e),this.sub(Gl)}reflect(e){return this.sub(Gl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Je(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Gl=new N,Kd=new qt;class Ss{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(On.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(On.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=On.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,On):On.fromBufferAttribute(s,a),On.applyMatrix4(e.matrixWorld),this.expandByPoint(On);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),za.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),za.copy(i.boundingBox)),za.applyMatrix4(e.matrixWorld),this.union(za)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,On),On.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Us),Va.subVectors(this.max,Us),Nr.subVectors(e.a,Us),Fr.subVectors(e.b,Us),Or.subVectors(e.c,Us),Ni.subVectors(Fr,Nr),Fi.subVectors(Or,Fr),ur.subVectors(Nr,Or);let t=[0,-Ni.z,Ni.y,0,-Fi.z,Fi.y,0,-ur.z,ur.y,Ni.z,0,-Ni.x,Fi.z,0,-Fi.x,ur.z,0,-ur.x,-Ni.y,Ni.x,0,-Fi.y,Fi.x,0,-ur.y,ur.x,0];return!Wl(t,Nr,Fr,Or,Va)||(t=[1,0,0,0,1,0,0,0,1],!Wl(t,Nr,Fr,Or,Va))?!1:(Ga.crossVectors(Ni,Fi),t=[Ga.x,Ga.y,Ga.z],Wl(t,Nr,Fr,Or,Va))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,On).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(On).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(di[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),di[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),di[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),di[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),di[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),di[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),di[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),di[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(di),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const di=[new N,new N,new N,new N,new N,new N,new N,new N],On=new N,za=new Ss,Nr=new N,Fr=new N,Or=new N,Ni=new N,Fi=new N,ur=new N,Us=new N,Va=new N,Ga=new N,dr=new N;function Wl(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){dr.fromArray(n,s);const o=r.x*Math.abs(dr.x)+r.y*Math.abs(dr.y)+r.z*Math.abs(dr.z),l=e.dot(dr),c=t.dot(dr),u=i.dot(dr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Ay=new Ss,Ns=new N,Xl=new N;class Es{constructor(e=new N,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Ay.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ns.subVectors(e,this.center);const t=Ns.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Ns,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Xl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ns.copy(e.center).add(Xl)),this.expandByPoint(Ns.copy(e.center).sub(Xl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const fi=new N,jl=new N,Wa=new N,Oi=new N,Yl=new N,Xa=new N,ql=new N;class gl{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,fi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=fi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(fi.copy(this.origin).addScaledVector(this.direction,t),fi.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){jl.copy(e).add(t).multiplyScalar(.5),Wa.copy(t).sub(e).normalize(),Oi.copy(this.origin).sub(jl);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Wa),o=Oi.dot(this.direction),l=-Oi.dot(Wa),c=Oi.lengthSq(),u=Math.abs(1-a*a);let h,d,f,g;if(u>0)if(h=a*l-o,d=a*o-l,g=s*u,h>=0)if(d>=-g)if(d<=g){const _=1/u;h*=_,d*=_,f=h*(h+a*d+2*o)+d*(a*h+d+2*l)+c}else d=s,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;else d=-s,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;else d<=-g?(h=Math.max(0,-(-a*s+o)),d=h>0?-s:Math.min(Math.max(-s,-l),s),f=-h*h+d*(d+2*l)+c):d<=g?(h=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+c):(h=Math.max(0,-(a*s+o)),d=h>0?s:Math.min(Math.max(-s,-l),s),f=-h*h+d*(d+2*l)+c);else d=a>0?-s:s,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(jl).addScaledVector(Wa,d),f}intersectSphere(e,t){fi.subVectors(e.center,this.origin);const i=fi.dot(this.direction),r=fi.dot(fi)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),h>=0?(o=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,fi)!==null}intersectTriangle(e,t,i,r,s){Yl.subVectors(t,e),Xa.subVectors(i,e),ql.crossVectors(Yl,Xa);let a=this.direction.dot(ql),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Oi.subVectors(this.origin,e);const l=o*this.direction.dot(Xa.crossVectors(Oi,Xa));if(l<0)return null;const c=o*this.direction.dot(Yl.cross(Oi));if(c<0||l+c>a)return null;const u=-o*Oi.dot(ql);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ne{constructor(e,t,i,r,s,a,o,l,c,u,h,d,f,g,_,m){Ne.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c,u,h,d,f,g,_,m)}set(e,t,i,r,s,a,o,l,c,u,h,d,f,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=s,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ne().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Br.setFromMatrixColumn(e,0).length(),s=1/Br.setFromMatrixColumn(e,1).length(),a=1/Br.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=a*u,f=a*h,g=o*u,_=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=f+g*c,t[5]=d-_*c,t[9]=-o*l,t[2]=_-d*c,t[6]=g+f*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*u,f=l*h,g=c*u,_=c*h;t[0]=d+_*o,t[4]=g*o-f,t[8]=a*c,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=f*o-g,t[6]=_+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*u,f=l*h,g=c*u,_=c*h;t[0]=d-_*o,t[4]=-a*h,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*u,t[9]=_-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*u,f=a*h,g=o*u,_=o*h;t[0]=l*u,t[4]=g*c-f,t[8]=d*c+_,t[1]=l*h,t[5]=_*c+d,t[9]=f*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,f=a*c,g=o*l,_=o*c;t[0]=l*u,t[4]=_-d*h,t[8]=g*h+f,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=f*h+g,t[10]=d-_*h}else if(e.order==="XZY"){const d=a*l,f=a*c,g=o*l,_=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+_,t[5]=a*u,t[9]=f*h-g,t[2]=g*h-f,t[6]=o*u,t[10]=_*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Cy,e,Ry)}lookAt(e,t,i){const r=this.elements;return mn.subVectors(e,t),mn.lengthSq()===0&&(mn.z=1),mn.normalize(),Bi.crossVectors(i,mn),Bi.lengthSq()===0&&(Math.abs(i.z)===1?mn.x+=1e-4:mn.z+=1e-4,mn.normalize(),Bi.crossVectors(i,mn)),Bi.normalize(),ja.crossVectors(mn,Bi),r[0]=Bi.x,r[4]=ja.x,r[8]=mn.x,r[1]=Bi.y,r[5]=ja.y,r[9]=mn.y,r[2]=Bi.z,r[6]=ja.z,r[10]=mn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],h=i[5],d=i[9],f=i[13],g=i[2],_=i[6],m=i[10],p=i[14],w=i[3],M=i[7],x=i[11],I=i[15],U=r[0],R=r[4],O=r[8],T=r[12],b=r[1],D=r[5],te=r[9],X=r[13],ae=r[2],oe=r[6],J=r[10],Q=r[14],V=r[3],me=r[7],Se=r[11],De=r[15];return s[0]=a*U+o*b+l*ae+c*V,s[4]=a*R+o*D+l*oe+c*me,s[8]=a*O+o*te+l*J+c*Se,s[12]=a*T+o*X+l*Q+c*De,s[1]=u*U+h*b+d*ae+f*V,s[5]=u*R+h*D+d*oe+f*me,s[9]=u*O+h*te+d*J+f*Se,s[13]=u*T+h*X+d*Q+f*De,s[2]=g*U+_*b+m*ae+p*V,s[6]=g*R+_*D+m*oe+p*me,s[10]=g*O+_*te+m*J+p*Se,s[14]=g*T+_*X+m*Q+p*De,s[3]=w*U+M*b+x*ae+I*V,s[7]=w*R+M*D+x*oe+I*me,s[11]=w*O+M*te+x*J+I*Se,s[15]=w*T+M*X+x*Q+I*De,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],f=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+s*l*h-r*c*h-s*o*d+i*c*d+r*o*f-i*l*f)+_*(+t*l*f-t*c*d+s*a*d-r*a*f+r*c*u-s*l*u)+m*(+t*c*h-t*o*f-s*a*h+i*a*f+s*o*u-i*c*u)+p*(-r*o*u-t*l*h+t*o*d+r*a*h-i*a*d+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],f=e[11],g=e[12],_=e[13],m=e[14],p=e[15],w=h*m*c-_*d*c+_*l*f-o*m*f-h*l*p+o*d*p,M=g*d*c-u*m*c-g*l*f+a*m*f+u*l*p-a*d*p,x=u*_*c-g*h*c+g*o*f-a*_*f-u*o*p+a*h*p,I=g*h*l-u*_*l-g*o*d+a*_*d+u*o*m-a*h*m,U=t*w+i*M+r*x+s*I;if(U===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/U;return e[0]=w*R,e[1]=(_*d*s-h*m*s-_*r*f+i*m*f+h*r*p-i*d*p)*R,e[2]=(o*m*s-_*l*s+_*r*c-i*m*c-o*r*p+i*l*p)*R,e[3]=(h*l*s-o*d*s-h*r*c+i*d*c+o*r*f-i*l*f)*R,e[4]=M*R,e[5]=(u*m*s-g*d*s+g*r*f-t*m*f-u*r*p+t*d*p)*R,e[6]=(g*l*s-a*m*s-g*r*c+t*m*c+a*r*p-t*l*p)*R,e[7]=(a*d*s-u*l*s+u*r*c-t*d*c-a*r*f+t*l*f)*R,e[8]=x*R,e[9]=(g*h*s-u*_*s-g*i*f+t*_*f+u*i*p-t*h*p)*R,e[10]=(a*_*s-g*o*s+g*i*c-t*_*c-a*i*p+t*o*p)*R,e[11]=(u*o*s-a*h*s-u*i*c+t*h*c+a*i*f-t*o*f)*R,e[12]=I*R,e[13]=(u*_*r-g*h*r+g*i*d-t*_*d-u*i*m+t*h*m)*R,e[14]=(g*o*r-a*_*r-g*i*l+t*_*l+a*i*m-t*o*m)*R,e[15]=(a*h*r-u*o*r+u*i*l-t*h*l-a*i*d+t*o*d)*R,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+i,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,h=o+o,d=s*c,f=s*u,g=s*h,_=a*u,m=a*h,p=o*h,w=l*c,M=l*u,x=l*h,I=i.x,U=i.y,R=i.z;return r[0]=(1-(_+p))*I,r[1]=(f+x)*I,r[2]=(g-M)*I,r[3]=0,r[4]=(f-x)*U,r[5]=(1-(d+p))*U,r[6]=(m+w)*U,r[7]=0,r[8]=(g+M)*R,r[9]=(m-w)*R,r[10]=(1-(d+_))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Br.set(r[0],r[1],r[2]).length();const a=Br.set(r[4],r[5],r[6]).length(),o=Br.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Bn.copy(this);const c=1/s,u=1/a,h=1/o;return Bn.elements[0]*=c,Bn.elements[1]*=c,Bn.elements[2]*=c,Bn.elements[4]*=u,Bn.elements[5]*=u,Bn.elements[6]*=u,Bn.elements[8]*=h,Bn.elements[9]*=h,Bn.elements[10]*=h,t.setFromRotationMatrix(Bn),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,r,s,a,o=Si){const l=this.elements,c=2*s/(t-e),u=2*s/(i-r),h=(t+e)/(t-e),d=(i+r)/(i-r);let f,g;if(o===Si)f=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===Yo)f=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=Si){const l=this.elements,c=1/(t-e),u=1/(i-r),h=1/(a-s),d=(t+e)*c,f=(i+r)*u;let g,_;if(o===Si)g=(a+s)*h,_=-2*h;else if(o===Yo)g=s*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Br=new N,Bn=new Ne,Cy=new N(0,0,0),Ry=new N(1,1,1),Bi=new N,ja=new N,mn=new N,Zd=new Ne,Jd=new qt;class Nt{constructor(e=0,t=0,i=0,r=Nt.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],h=r[2],d=r[6],f=r[10];switch(t){case"XYZ":this._y=Math.asin(Je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Je(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Je(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Je(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Je(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Zd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Zd,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Jd.setFromEuler(this),this.setFromQuaternion(Jd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Nt.DEFAULT_ORDER="XYZ";class ig{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Py=0;const Qd=new N,kr=new qt,pi=new Ne,Ya=new N,Fs=new N,Dy=new N,Iy=new qt,ef=new N(1,0,0),tf=new N(0,1,0),nf=new N(0,0,1),rf={type:"added"},Ly={type:"removed"},Hr={type:"childadded",child:null},$l={type:"childremoved",child:null};class Mt extends Rr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Py++}),this.uuid=tr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Mt.DEFAULT_UP.clone();const e=new N,t=new Nt,i=new qt,r=new N(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ne},normalMatrix:{value:new Xe}}),this.matrix=new Ne,this.matrixWorld=new Ne,this.matrixAutoUpdate=Mt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ig,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return kr.setFromAxisAngle(e,t),this.quaternion.multiply(kr),this}rotateOnWorldAxis(e,t){return kr.setFromAxisAngle(e,t),this.quaternion.premultiply(kr),this}rotateX(e){return this.rotateOnAxis(ef,e)}rotateY(e){return this.rotateOnAxis(tf,e)}rotateZ(e){return this.rotateOnAxis(nf,e)}translateOnAxis(e,t){return Qd.copy(e).applyQuaternion(this.quaternion),this.position.add(Qd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ef,e)}translateY(e){return this.translateOnAxis(tf,e)}translateZ(e){return this.translateOnAxis(nf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(pi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Ya.copy(e):Ya.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Fs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pi.lookAt(Fs,Ya,this.up):pi.lookAt(Ya,Fs,this.up),this.quaternion.setFromRotationMatrix(pi),r&&(pi.extractRotation(r.matrixWorld),kr.setFromRotationMatrix(pi),this.quaternion.premultiply(kr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(rf),Hr.child=e,this.dispatchEvent(Hr),Hr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ly),$l.child=e,this.dispatchEvent($l),$l.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),pi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),pi.multiply(e.parent.matrixWorld)),e.applyMatrix4(pi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(rf),Hr.child=e,this.dispatchEvent(Hr),Hr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fs,e,Dy),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fs,Iy,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),d=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=r,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Mt.DEFAULT_UP=new N(0,1,0);Mt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const kn=new N,mi=new N,Kl=new N,gi=new N,zr=new N,Vr=new N,sf=new N,Zl=new N,Jl=new N,Ql=new N,ec=new tt,tc=new tt,nc=new tt;class Gn{constructor(e=new N,t=new N,i=new N){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),kn.subVectors(e,t),r.cross(kn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){kn.subVectors(r,t),mi.subVectors(i,t),Kl.subVectors(e,t);const a=kn.dot(kn),o=kn.dot(mi),l=kn.dot(Kl),c=mi.dot(mi),u=mi.dot(Kl),h=a*c-o*o;if(h===0)return s.set(0,0,0),null;const d=1/h,f=(c*l-o*u)*d,g=(a*u-o*l)*d;return s.set(1-f-g,g,f)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,gi)===null?!1:gi.x>=0&&gi.y>=0&&gi.x+gi.y<=1}static getInterpolation(e,t,i,r,s,a,o,l){return this.getBarycoord(e,t,i,r,gi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,gi.x),l.addScaledVector(a,gi.y),l.addScaledVector(o,gi.z),l)}static getInterpolatedAttribute(e,t,i,r,s,a){return ec.setScalar(0),tc.setScalar(0),nc.setScalar(0),ec.fromBufferAttribute(e,t),tc.fromBufferAttribute(e,i),nc.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(ec,s.x),a.addScaledVector(tc,s.y),a.addScaledVector(nc,s.z),a}static isFrontFacing(e,t,i,r){return kn.subVectors(i,t),mi.subVectors(e,t),kn.cross(mi).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return kn.subVectors(this.c,this.b),mi.subVectors(this.a,this.b),kn.cross(mi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Gn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Gn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return Gn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Gn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Gn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;zr.subVectors(r,i),Vr.subVectors(s,i),Zl.subVectors(e,i);const l=zr.dot(Zl),c=Vr.dot(Zl);if(l<=0&&c<=0)return t.copy(i);Jl.subVectors(e,r);const u=zr.dot(Jl),h=Vr.dot(Jl);if(u>=0&&h<=u)return t.copy(r);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(i).addScaledVector(zr,a);Ql.subVectors(e,s);const f=zr.dot(Ql),g=Vr.dot(Ql);if(g>=0&&f<=g)return t.copy(s);const _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(i).addScaledVector(Vr,o);const m=u*g-f*h;if(m<=0&&h-u>=0&&f-g>=0)return sf.subVectors(s,r),o=(h-u)/(h-u+(f-g)),t.copy(r).addScaledVector(sf,o);const p=1/(m+_+d);return a=_*p,o=d*p,t.copy(i).addScaledVector(zr,a).addScaledVector(Vr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const rg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ki={h:0,s:0,l:0},qa={h:0,s:0,l:0};function ic(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}let Ce=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=st){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=Ze.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ze.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=Ze.workingColorSpace){if(e=Mu(e,1),t=Je(t,0,1),i=Je(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=ic(a,s,e+1/3),this.g=ic(a,s,e),this.b=ic(a,s,e-1/3)}return Ze.toWorkingColorSpace(this,r),this}setStyle(e,t=st){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=st){const i=rg[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=bi(e.r),this.g=bi(e.g),this.b=bi(e.b),this}copyLinearToSRGB(e){return this.r=hs(e.r),this.g=hs(e.g),this.b=hs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=st){return Ze.fromWorkingColorSpace(Xt.copy(this),e),Math.round(Je(Xt.r*255,0,255))*65536+Math.round(Je(Xt.g*255,0,255))*256+Math.round(Je(Xt.b*255,0,255))}getHexString(e=st){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ze.workingColorSpace){Ze.fromWorkingColorSpace(Xt.copy(this),t);const i=Xt.r,r=Xt.g,s=Xt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Ze.workingColorSpace){return Ze.fromWorkingColorSpace(Xt.copy(this),t),e.r=Xt.r,e.g=Xt.g,e.b=Xt.b,e}getStyle(e=st){Ze.fromWorkingColorSpace(Xt.copy(this),e);const t=Xt.r,i=Xt.g,r=Xt.b;return e!==st?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(ki),this.setHSL(ki.h+e,ki.s+t,ki.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ki),e.getHSL(qa);const i=ta(ki.h,qa.h,t),r=ta(ki.s,qa.s,t),s=ta(ki.l,qa.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};const Xt=new Ce;Ce.NAMES=rg;let Uy=0;class nr extends Rr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Uy++}),this.uuid=tr(),this.name="",this.type="Material",this.blending=Mn,this.side=ai,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Jc,this.blendDst=Qc,this.blendEquation=xr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ce(0,0,0),this.blendAlpha=0,this.depthFunc=ps,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Gd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Lr,this.stencilZFail=Lr,this.stencilZPass=Lr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Mn&&(i.blending=this.blending),this.side!==ai&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Jc&&(i.blendSrc=this.blendSrc),this.blendDst!==Qc&&(i.blendDst=this.blendDst),this.blendEquation!==xr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ps&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Gd&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Lr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Lr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Lr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Pa extends nr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Nt,this.combine=fl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const It=new N,$a=new Pe;let Ny=0;class ri{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ny++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Wd,this.updateRanges=[],this.gpuType=ni,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)$a.fromBufferAttribute(this,t),$a.applyMatrix3(e),this.setXY(t,$a.x,$a.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)It.fromBufferAttribute(this,t),It.applyMatrix3(e),this.setXYZ(t,It.x,It.y,It.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)It.fromBufferAttribute(this,t),It.applyMatrix4(e),this.setXYZ(t,It.x,It.y,It.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)It.fromBufferAttribute(this,t),It.applyNormalMatrix(e),this.setXYZ(t,It.x,It.y,It.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)It.fromBufferAttribute(this,t),It.transformDirection(e),this.setXYZ(t,It.x,It.y,It.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Zr(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=an(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Zr(t,this.array)),t}setX(e,t){return this.normalized&&(t=an(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Zr(t,this.array)),t}setY(e,t){return this.normalized&&(t=an(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Zr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=an(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Zr(t,this.array)),t}setW(e,t){return this.normalized&&(t=an(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=an(t,this.array),i=an(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=an(t,this.array),i=an(i,this.array),r=an(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=an(t,this.array),i=an(i,this.array),r=an(r,this.array),s=an(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Wd&&(e.usage=this.usage),e}}class Eu extends ri{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class sg extends ri{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Zt extends ri{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Fy=0;const Tn=new Ne,rc=new Mt,Gr=new N,gn=new Ss,Os=new Ss,Bt=new N;class Ln extends Rr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Fy++}),this.uuid=tr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(tg(e)?sg:Eu)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Xe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Tn.makeRotationFromQuaternion(e),this.applyMatrix4(Tn),this}rotateX(e){return Tn.makeRotationX(e),this.applyMatrix4(Tn),this}rotateY(e){return Tn.makeRotationY(e),this.applyMatrix4(Tn),this}rotateZ(e){return Tn.makeRotationZ(e),this.applyMatrix4(Tn),this}translate(e,t,i){return Tn.makeTranslation(e,t,i),this.applyMatrix4(Tn),this}scale(e,t,i){return Tn.makeScale(e,t,i),this.applyMatrix4(Tn),this}lookAt(e){return rc.lookAt(e),rc.updateMatrix(),this.applyMatrix4(rc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Gr).negate(),this.translate(Gr.x,Gr.y,Gr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Zt(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ss);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];gn.setFromBufferAttribute(s),this.morphTargetsRelative?(Bt.addVectors(this.boundingBox.min,gn.min),this.boundingBox.expandByPoint(Bt),Bt.addVectors(this.boundingBox.max,gn.max),this.boundingBox.expandByPoint(Bt)):(this.boundingBox.expandByPoint(gn.min),this.boundingBox.expandByPoint(gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Es);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(e){const i=this.boundingSphere.center;if(gn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Os.setFromBufferAttribute(o),this.morphTargetsRelative?(Bt.addVectors(gn.min,Os.min),gn.expandByPoint(Bt),Bt.addVectors(gn.max,Os.max),gn.expandByPoint(Bt)):(gn.expandByPoint(Os.min),gn.expandByPoint(Os.max))}gn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Bt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Bt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Bt.fromBufferAttribute(o,c),l&&(Gr.fromBufferAttribute(e,c),Bt.add(Gr)),r=Math.max(r,i.distanceToSquared(Bt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ri(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let O=0;O<i.count;O++)o[O]=new N,l[O]=new N;const c=new N,u=new N,h=new N,d=new Pe,f=new Pe,g=new Pe,_=new N,m=new N;function p(O,T,b){c.fromBufferAttribute(i,O),u.fromBufferAttribute(i,T),h.fromBufferAttribute(i,b),d.fromBufferAttribute(s,O),f.fromBufferAttribute(s,T),g.fromBufferAttribute(s,b),u.sub(c),h.sub(c),f.sub(d),g.sub(d);const D=1/(f.x*g.y-g.x*f.y);isFinite(D)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(h,-f.y).multiplyScalar(D),m.copy(h).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(D),o[O].add(_),o[T].add(_),o[b].add(_),l[O].add(m),l[T].add(m),l[b].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let O=0,T=w.length;O<T;++O){const b=w[O],D=b.start,te=b.count;for(let X=D,ae=D+te;X<ae;X+=3)p(e.getX(X+0),e.getX(X+1),e.getX(X+2))}const M=new N,x=new N,I=new N,U=new N;function R(O){I.fromBufferAttribute(r,O),U.copy(I);const T=o[O];M.copy(T),M.sub(I.multiplyScalar(I.dot(T))).normalize(),x.crossVectors(U,T);const D=x.dot(l[O])<0?-1:1;a.setXYZW(O,M.x,M.y,M.z,D)}for(let O=0,T=w.length;O<T;++O){const b=w[O],D=b.start,te=b.count;for(let X=D,ae=D+te;X<ae;X+=3)R(e.getX(X+0)),R(e.getX(X+1)),R(e.getX(X+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ri(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);const r=new N,s=new N,a=new N,o=new N,l=new N,c=new N,u=new N,h=new N;if(e)for(let d=0,f=e.count;d<f;d+=3){const g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),o.add(u),l.add(u),c.add(u),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Bt.fromBufferAttribute(e,t),Bt.normalize(),e.setXYZ(t,Bt.x,Bt.y,Bt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,h=o.normalized,d=new c.constructor(l.length*u);let f=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?f=l[_]*o.data.stride+o.offset:f=l[_]*u;for(let p=0;p<u;p++)d[g++]=c[f++]}return new ri(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ln,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,h=c.length;u<h;u++){const d=c[u],f=e(d,i);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const f=c[h];u.push(f.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const af=new Ne,fr=new gl,Ka=new Es,of=new N,Za=new N,Ja=new N,Qa=new N,sc=new N,eo=new N,lf=new N,to=new N;class kt extends Mt{constructor(e=new Ln,t=new Pa){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){eo.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],h=s[l];u!==0&&(sc.fromBufferAttribute(h,e),a?eo.addScaledVector(sc,u):eo.addScaledVector(sc.sub(t),u))}t.add(eo)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ka.copy(i.boundingSphere),Ka.applyMatrix4(s),fr.copy(e.ray).recast(e.near),!(Ka.containsPoint(fr.origin)===!1&&(fr.intersectSphere(Ka,of)===null||fr.origin.distanceToSquared(of)>(e.far-e.near)**2))&&(af.copy(s).invert(),fr.copy(e.ray).applyMatrix4(af),!(i.boundingBox!==null&&fr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,fr)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,d=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=a[m.materialIndex],w=Math.max(m.start,f.start),M=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let x=w,I=M;x<I;x+=3){const U=o.getX(x),R=o.getX(x+1),O=o.getX(x+2);r=no(this,p,e,i,c,u,h,U,R,O),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const w=o.getX(m),M=o.getX(m+1),x=o.getX(m+2);r=no(this,a,e,i,c,u,h,w,M,x),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=a[m.materialIndex],w=Math.max(m.start,f.start),M=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let x=w,I=M;x<I;x+=3){const U=x,R=x+1,O=x+2;r=no(this,p,e,i,c,u,h,U,R,O),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const w=m,M=m+1,x=m+2;r=no(this,a,e,i,c,u,h,w,M,x),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function Oy(n,e,t,i,r,s,a,o){let l;if(e.side===en?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===ai,o),l===null)return null;to.copy(o),to.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(to);return c<t.near||c>t.far?null:{distance:c,point:to.clone(),object:n}}function no(n,e,t,i,r,s,a,o,l,c){n.getVertexPosition(o,Za),n.getVertexPosition(l,Ja),n.getVertexPosition(c,Qa);const u=Oy(n,e,t,i,Za,Ja,Qa,lf);if(u){const h=new N;Gn.getBarycoord(lf,Za,Ja,Qa,h),r&&(u.uv=Gn.getInterpolatedAttribute(r,o,l,c,h,new Pe)),s&&(u.uv1=Gn.getInterpolatedAttribute(s,o,l,c,h,new Pe)),a&&(u.normal=Gn.getInterpolatedAttribute(a,o,l,c,h,new N),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new N,materialIndex:0};Gn.getNormal(Za,Ja,Qa,d.normal),u.face=d,u.barycoord=h}return u}class Ti extends Ln{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],h=[];let d=0,f=0;g("z","y","x",-1,-1,i,t,e,a,s,0),g("z","y","x",1,-1,i,t,-e,a,s,1),g("x","z","y",1,1,e,i,t,r,a,2),g("x","z","y",1,-1,e,i,-t,r,a,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Zt(c,3)),this.setAttribute("normal",new Zt(u,3)),this.setAttribute("uv",new Zt(h,2));function g(_,m,p,w,M,x,I,U,R,O,T){const b=x/R,D=I/O,te=x/2,X=I/2,ae=U/2,oe=R+1,J=O+1;let Q=0,V=0;const me=new N;for(let Se=0;Se<J;Se++){const De=Se*D-X;for(let Ue=0;Ue<oe;Ue++){const $e=Ue*b-te;me[_]=$e*w,me[m]=De*M,me[p]=ae,c.push(me.x,me.y,me.z),me[_]=0,me[m]=0,me[p]=U>0?1:-1,u.push(me.x,me.y,me.z),h.push(Ue/R),h.push(1-Se/O),Q+=1}}for(let Se=0;Se<O;Se++)for(let De=0;De<R;De++){const Ue=d+De+oe*Se,$e=d+De+oe*(Se+1),re=d+(De+1)+oe*(Se+1),ge=d+(De+1)+oe*Se;l.push(Ue,$e,ge),l.push($e,re,ge),V+=6}o.addGroup(f,V,T),f+=V,d+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ti(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function vs(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function on(n){const e={};for(let t=0;t<n.length;t++){const i=vs(n[t]);for(const r in i)e[r]=i[r]}return e}function By(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function ag(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ze.workingColorSpace}const _l={clone:vs,merge:on};var ky=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Hy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class at extends nr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ky,this.fragmentShader=Hy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=vs(e.uniforms),this.uniformsGroups=By(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class og extends Mt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ne,this.projectionMatrix=new Ne,this.projectionMatrixInverse=new Ne,this.coordinateSystem=Si}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Hi=new N,cf=new Pe,hf=new Pe;class Et extends og{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=_s*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ea*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return _s*2*Math.atan(Math.tan(ea*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Hi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Hi.x,Hi.y).multiplyScalar(-e/Hi.z),Hi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Hi.x,Hi.y).multiplyScalar(-e/Hi.z)}getViewSize(e,t){return this.getViewBounds(e,cf,hf),t.subVectors(hf,cf)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ea*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Wr=-90,Xr=1;class zy extends Mt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Et(Wr,Xr,e,t);r.layers=this.layers,this.add(r);const s=new Et(Wr,Xr,e,t);s.layers=this.layers,this.add(s);const a=new Et(Wr,Xr,e,t);a.layers=this.layers,this.add(a);const o=new Et(Wr,Xr,e,t);o.layers=this.layers,this.add(o);const l=new Et(Wr,Xr,e,t);l.layers=this.layers,this.add(l);const c=new Et(Wr,Xr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===Si)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Yo)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,a),e.setRenderTarget(i,2,r),e.render(t,o),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class lg extends Vt{constructor(e=[],t=ms,i,r,s,a,o,l,c,u){super(e,t,i,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Vy extends wt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new lg(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:ti}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ti(5,5,5),s=new at({name:"CubemapFromEquirect",uniforms:vs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:en,blending:Pt});s.uniforms.tEquirect.value=t;const a=new kt(r,s),o=t.minFilter;return t.minFilter===Mr&&(t.minFilter=ti),new zy(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}class Dn extends Mt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Gy={type:"move"};class ac{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Dn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Dn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Dn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,i),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Gy)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Dn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class oi extends Mt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Nt,this.environmentIntensity=1,this.environmentRotation=new Nt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const uf=new N,df=new tt,ff=new tt,Wy=new N,pf=new Ne,io=new N,oc=new Es,mf=new Ne,lc=new gl;class Xy extends kt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=kd,this.bindMatrix=new Ne,this.bindMatrixInverse=new Ne,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Ss),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,io),this.boundingBox.expandByPoint(io)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Es),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,io),this.boundingSphere.expandByPoint(io)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const i=this.material,r=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),oc.copy(this.boundingSphere),oc.applyMatrix4(r),e.ray.intersectsSphere(oc)!==!1&&(mf.copy(r).invert(),lc.copy(e.ray).applyMatrix4(mf),!(this.boundingBox!==null&&lc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,lc)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new tt,t=this.geometry.attributes.skinWeight;for(let i=0,r=t.count;i<r;i++){e.fromBufferAttribute(t,i);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===kd?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Gx?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,r=this.geometry;df.fromBufferAttribute(r.attributes.skinIndex,e),ff.fromBufferAttribute(r.attributes.skinWeight,e),uf.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const a=ff.getComponent(s);if(a!==0){const o=df.getComponent(s);pf.multiplyMatrices(i.bones[o].matrixWorld,i.boneInverses[o]),t.addScaledVector(Wy.copy(uf).applyMatrix4(pf),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Fh extends Mt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class jy extends Vt{constructor(e=null,t=1,i=1,r,s,a,o,l,c=Sn,u=Sn,h,d){super(null,a,o,l,c,u,r,s,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const gf=new Ne,Yy=new Ne;class bu{constructor(e=[],t=[]){this.uuid=tr(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,r=this.bones.length;i<r;i++)this.boneInverses.push(new Ne)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new Ne;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,r=this.boneTexture;for(let s=0,a=e.length;s<a;s++){const o=e[s]?e[s].matrixWorld:Yy;gf.multiplyMatrices(o,t[s]),gf.toArray(i,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new bu(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new jy(t,e,e,fn,ni);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,r=e.bones.length;i<r;i++){const s=e.bones[i];let a=t[s];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),a=new Fh),this.bones.push(a),this.boneInverses.push(new Ne().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let r=0,s=t.length;r<s;r++){const a=t[r];e.bones.push(a.uuid);const o=i[r];e.boneInverses.push(o.toArray())}return e}}const cc=new N,qy=new N,$y=new Xe;class Xi{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=cc.subVectors(i,t).cross(qy.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(cc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||$y.getNormalMatrix(e),r=this.coplanarPoint(cc).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const pr=new Es,ro=new N;class wu{constructor(e=new Xi,t=new Xi,i=new Xi,r=new Xi,s=new Xi,a=new Xi){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Si){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],u=r[5],h=r[6],d=r[7],f=r[8],g=r[9],_=r[10],m=r[11],p=r[12],w=r[13],M=r[14],x=r[15];if(i[0].setComponents(l-s,d-c,m-f,x-p).normalize(),i[1].setComponents(l+s,d+c,m+f,x+p).normalize(),i[2].setComponents(l+a,d+u,m+g,x+w).normalize(),i[3].setComponents(l-a,d-u,m-g,x-w).normalize(),i[4].setComponents(l-o,d-h,m-_,x-M).normalize(),t===Si)i[5].setComponents(l+o,d+h,m+_,x+M).normalize();else if(t===Yo)i[5].setComponents(o,h,_,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),pr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),pr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(pr)}intersectsSprite(e){return pr.center.set(0,0,0),pr.radius=.7071067811865476,pr.applyMatrix4(e.matrixWorld),this.intersectsSphere(pr)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(ro.x=r.normal.x>0?e.max.x:e.min.x,ro.y=r.normal.y>0?e.max.y:e.min.y,ro.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ro)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class cg extends nr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ce(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const qo=new N,$o=new N,_f=new Ne,Bs=new gl,so=new Es,hc=new N,vf=new N;class Ky extends Mt{constructor(e=new Ln,t=new cg){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)qo.fromBufferAttribute(t,r-1),$o.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=qo.distanceTo($o);e.setAttribute("lineDistance",new Zt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),so.copy(i.boundingSphere),so.applyMatrix4(r),so.radius+=s,e.ray.intersectsSphere(so)===!1)return;_f.copy(r).invert(),Bs.copy(e.ray).applyMatrix4(_f);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=i.index,d=i.attributes.position;if(u!==null){const f=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let _=f,m=g-1;_<m;_+=c){const p=u.getX(_),w=u.getX(_+1),M=ao(this,e,Bs,l,p,w,_);M&&t.push(M)}if(this.isLineLoop){const _=u.getX(g-1),m=u.getX(f),p=ao(this,e,Bs,l,_,m,g-1);p&&t.push(p)}}else{const f=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let _=f,m=g-1;_<m;_+=c){const p=ao(this,e,Bs,l,_,_+1,_);p&&t.push(p)}if(this.isLineLoop){const _=ao(this,e,Bs,l,g-1,f,g-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function ao(n,e,t,i,r,s,a){const o=n.geometry.attributes.position;if(qo.fromBufferAttribute(o,r),$o.fromBufferAttribute(o,s),t.distanceSqToSegment(qo,$o,hc,vf)>i)return;hc.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(hc);if(!(c<e.near||c>e.far))return{distance:c,point:vf.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}class hg extends Vt{constructor(e,t,i=wr,r,s,a,o=Sn,l=Sn,c,u=ga){if(u!==ga&&u!==_a)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,r,s,a,o,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Su(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Zy{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,r=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),s+=i.distanceTo(r),t.push(s),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const i=this.getLengths();let r=0;const s=i.length;let a;t?a=t:a=e*i[s-1];let o=0,l=s-1,c;for(;o<=l;)if(r=Math.floor(o+(l-o)/2),c=i[r]-a,c<0)o=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===a)return r/(s-1);const u=i[r],d=i[r+1]-u,f=(a-u)/d;return(r+f)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const a=this.getPoint(r),o=this.getPoint(s),l=t||(a.isVector2?new Pe:new N);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){const i=new N,r=[],s=[],a=[],o=new N,l=new Ne;for(let f=0;f<=e;f++){const g=f/e;r[f]=this.getTangentAt(g,new N)}s[0]=new N,a[0]=new N;let c=Number.MAX_VALUE;const u=Math.abs(r[0].x),h=Math.abs(r[0].y),d=Math.abs(r[0].z);u<=c&&(c=u,i.set(1,0,0)),h<=c&&(c=h,i.set(0,1,0)),d<=c&&i.set(0,0,1),o.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],o),a[0].crossVectors(r[0],s[0]);for(let f=1;f<=e;f++){if(s[f]=s[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(r[f-1],r[f]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(Je(r[f-1].dot(r[f]),-1,1));s[f].applyMatrix4(l.makeRotationAxis(o,g))}a[f].crossVectors(r[f],s[f])}if(t===!0){let f=Math.acos(Je(s[0].dot(s[e]),-1,1));f/=e,r[0].dot(o.crossVectors(s[0],s[e]))>0&&(f=-f);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(r[g],f*g)),a[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}function Jy(n,e,t=2){const i=e&&e.length,r=i?e[0]*t:n.length;let s=ug(n,0,r,t,!0);const a=[];if(!s||s.next===s.prev)return a;let o,l,c;if(i&&(s=iM(n,e,s,t)),n.length>80*t){o=1/0,l=1/0;let u=-1/0,h=-1/0;for(let d=t;d<r;d+=t){const f=n[d],g=n[d+1];f<o&&(o=f),g<l&&(l=g),f>u&&(u=f),g>h&&(h=g)}c=Math.max(u-o,h-l),c=c!==0?32767/c:0}return xa(s,a,t,o,l,c,0),a}function ug(n,e,t,i,r){let s;if(r===pM(n,e,t,i)>0)for(let a=e;a<t;a+=i)s=xf(a/i|0,n[a],n[a+1],s);else for(let a=t-i;a>=e;a-=i)s=xf(a/i|0,n[a],n[a+1],s);return s&&xs(s,s.next)&&(Ma(s),s=s.next),s}function Tr(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(xs(t,t.next)||bt(t.prev,t,t.next)===0)){if(Ma(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function xa(n,e,t,i,r,s,a){if(!n)return;!a&&s&&lM(n,i,r,s);let o=n;for(;n.prev!==n.next;){const l=n.prev,c=n.next;if(s?eM(n,i,r,s):Qy(n)){e.push(l.i,n.i,c.i),Ma(n),n=c.next,o=c.next;continue}if(n=c,n===o){a?a===1?(n=tM(Tr(n),e),xa(n,e,t,i,r,s,2)):a===2&&nM(n,e,t,i,r,s):xa(Tr(n),e,t,i,r,s,1);break}}}function Qy(n){const e=n.prev,t=n,i=n.next;if(bt(e,t,i)>=0)return!1;const r=e.x,s=t.x,a=i.x,o=e.y,l=t.y,c=i.y,u=Math.min(r,s,a),h=Math.min(o,l,c),d=Math.max(r,s,a),f=Math.max(o,l,c);let g=i.next;for(;g!==e;){if(g.x>=u&&g.x<=d&&g.y>=h&&g.y<=f&&Gs(r,o,s,l,a,c,g.x,g.y)&&bt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function eM(n,e,t,i){const r=n.prev,s=n,a=n.next;if(bt(r,s,a)>=0)return!1;const o=r.x,l=s.x,c=a.x,u=r.y,h=s.y,d=a.y,f=Math.min(o,l,c),g=Math.min(u,h,d),_=Math.max(o,l,c),m=Math.max(u,h,d),p=Oh(f,g,e,t,i),w=Oh(_,m,e,t,i);let M=n.prevZ,x=n.nextZ;for(;M&&M.z>=p&&x&&x.z<=w;){if(M.x>=f&&M.x<=_&&M.y>=g&&M.y<=m&&M!==r&&M!==a&&Gs(o,u,l,h,c,d,M.x,M.y)&&bt(M.prev,M,M.next)>=0||(M=M.prevZ,x.x>=f&&x.x<=_&&x.y>=g&&x.y<=m&&x!==r&&x!==a&&Gs(o,u,l,h,c,d,x.x,x.y)&&bt(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;M&&M.z>=p;){if(M.x>=f&&M.x<=_&&M.y>=g&&M.y<=m&&M!==r&&M!==a&&Gs(o,u,l,h,c,d,M.x,M.y)&&bt(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;x&&x.z<=w;){if(x.x>=f&&x.x<=_&&x.y>=g&&x.y<=m&&x!==r&&x!==a&&Gs(o,u,l,h,c,d,x.x,x.y)&&bt(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function tM(n,e){let t=n;do{const i=t.prev,r=t.next.next;!xs(i,r)&&fg(i,t,t.next,r)&&ya(i,r)&&ya(r,i)&&(e.push(i.i,t.i,r.i),Ma(t),Ma(t.next),t=n=r),t=t.next}while(t!==n);return Tr(t)}function nM(n,e,t,i,r,s){let a=n;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&uM(a,o)){let l=pg(a,o);a=Tr(a,a.next),l=Tr(l,l.next),xa(a,e,t,i,r,s,0),xa(l,e,t,i,r,s,0);return}o=o.next}a=a.next}while(a!==n)}function iM(n,e,t,i){const r=[];for(let s=0,a=e.length;s<a;s++){const o=e[s]*i,l=s<a-1?e[s+1]*i:n.length,c=ug(n,o,l,i,!1);c===c.next&&(c.steiner=!0),r.push(hM(c))}r.sort(rM);for(let s=0;s<r.length;s++)t=sM(r[s],t);return t}function rM(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){const i=(n.next.y-n.y)/(n.next.x-n.x),r=(e.next.y-e.y)/(e.next.x-e.x);t=i-r}return t}function sM(n,e){const t=aM(n,e);if(!t)return e;const i=pg(t,n);return Tr(i,i.next),Tr(t,t.next)}function aM(n,e){let t=e;const i=n.x,r=n.y;let s=-1/0,a;if(xs(n,t))return t;do{if(xs(n,t.next))return t.next;if(r<=t.y&&r>=t.next.y&&t.next.y!==t.y){const h=t.x+(r-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(h<=i&&h>s&&(s=h,a=t.x<t.next.x?t:t.next,h===i))return a}t=t.next}while(t!==e);if(!a)return null;const o=a,l=a.x,c=a.y;let u=1/0;t=a;do{if(i>=t.x&&t.x>=l&&i!==t.x&&dg(r<c?i:s,r,l,c,r<c?s:i,r,t.x,t.y)){const h=Math.abs(r-t.y)/(i-t.x);ya(t,n)&&(h<u||h===u&&(t.x>a.x||t.x===a.x&&oM(a,t)))&&(a=t,u=h)}t=t.next}while(t!==o);return a}function oM(n,e){return bt(n.prev,n,e.prev)<0&&bt(e.next,n,n.next)<0}function lM(n,e,t,i){let r=n;do r.z===0&&(r.z=Oh(r.x,r.y,e,t,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==n);r.prevZ.nextZ=null,r.prevZ=null,cM(r)}function cM(n){let e,t=1;do{let i=n,r;n=null;let s=null;for(e=0;i;){e++;let a=i,o=0;for(let c=0;c<t&&(o++,a=a.nextZ,!!a);c++);let l=t;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||i.z<=a.z)?(r=i,i=i.nextZ,o--):(r=a,a=a.nextZ,l--),s?s.nextZ=r:n=r,r.prevZ=s,s=r;i=a}s.nextZ=null,t*=2}while(e>1);return n}function Oh(n,e,t,i,r){return n=(n-t)*r|0,e=(e-i)*r|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function hM(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function dg(n,e,t,i,r,s,a,o){return(r-a)*(e-o)>=(n-a)*(s-o)&&(n-a)*(i-o)>=(t-a)*(e-o)&&(t-a)*(s-o)>=(r-a)*(i-o)}function Gs(n,e,t,i,r,s,a,o){return!(n===a&&e===o)&&dg(n,e,t,i,r,s,a,o)}function uM(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!dM(n,e)&&(ya(n,e)&&ya(e,n)&&fM(n,e)&&(bt(n.prev,n,e.prev)||bt(n,e.prev,e))||xs(n,e)&&bt(n.prev,n,n.next)>0&&bt(e.prev,e,e.next)>0)}function bt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function xs(n,e){return n.x===e.x&&n.y===e.y}function fg(n,e,t,i){const r=lo(bt(n,e,t)),s=lo(bt(n,e,i)),a=lo(bt(t,i,n)),o=lo(bt(t,i,e));return!!(r!==s&&a!==o||r===0&&oo(n,t,e)||s===0&&oo(n,i,e)||a===0&&oo(t,n,i)||o===0&&oo(t,e,i))}function oo(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function lo(n){return n>0?1:n<0?-1:0}function dM(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&fg(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function ya(n,e){return bt(n.prev,n,n.next)<0?bt(n,e,n.next)>=0&&bt(n,n.prev,e)>=0:bt(n,e,n.prev)<0||bt(n,n.next,e)<0}function fM(n,e){let t=n,i=!1;const r=(n.x+e.x)/2,s=(n.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function pg(n,e){const t=Bh(n.i,n.x,n.y),i=Bh(e.i,e.x,e.y),r=n.next,s=e.prev;return n.next=e,e.prev=n,t.next=r,r.prev=t,i.next=t,t.prev=i,s.next=i,i.prev=s,i}function xf(n,e,t,i){const r=Bh(n,e,t);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function Ma(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Bh(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function pM(n,e,t,i){let r=0;for(let s=e,a=t-i;s<t;s+=i)r+=(n[a]-n[s])*(n[s+1]+n[a+1]),a=s;return r}class mM{static triangulate(e,t,i=2){return Jy(e,t,i)}}class Tu{static area(e){const t=e.length;let i=0;for(let r=t-1,s=0;s<t;r=s++)i+=e[r].x*e[s].y-e[s].x*e[r].y;return i*.5}static isClockWise(e){return Tu.area(e)<0}static triangulateShape(e,t){const i=[],r=[],s=[];yf(e),Mf(i,e);let a=e.length;t.forEach(yf);for(let l=0;l<t.length;l++)r.push(a),a+=t[l].length,Mf(i,t[l]);const o=mM.triangulate(i,r);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}}function yf(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function Mf(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class bs extends Ln{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(r),c=o+1,u=l+1,h=e/o,d=t/l,f=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const w=p*d-a;for(let M=0;M<c;M++){const x=M*h-s;g.push(x,-w,0),_.push(0,0,1),m.push(M/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let w=0;w<o;w++){const M=w+c*p,x=w+c*(p+1),I=w+1+c*(p+1),U=w+1+c*p;f.push(M,x,U),f.push(x,I,U)}this.setIndex(f),this.setAttribute("position",new Zt(g,3)),this.setAttribute("normal",new Zt(_,3)),this.setAttribute("uv",new Zt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bs(e.width,e.height,e.widthSegments,e.heightSegments)}}class gM extends at{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Sa extends nr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ce(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ml,this.normalScale=new Pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Nt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ai extends Sa{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Pe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Je(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ce(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ce(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ce(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class co extends nr{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ce(16777215),this.specular=new Ce(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ml,this.normalScale=new Pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Nt,this.combine=fl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class _M extends nr{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ml,this.normalScale=new Pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Nt,this.combine=fl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Da extends nr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=jx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class vM extends nr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function ho(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function xM(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function yM(n){function e(r,s){return n[r]-n[s]}const t=n.length,i=new Array(t);for(let r=0;r!==t;++r)i[r]=r;return i.sort(e),i}function Sf(n,e,t){const i=n.length,r=new n.constructor(i);for(let s=0,a=0;a!==i;++s){const o=t[s]*e;for(let l=0;l!==e;++l)r[a++]=n[o+l]}return r}function mg(n,e,t,i){let r=1,s=n[0];for(;s!==void 0&&s[i]===void 0;)s=n[r++];if(s===void 0)return;let a=s[i];if(a!==void 0)if(Array.isArray(a))do a=s[i],a!==void 0&&(e.push(s.time),t.push(...a)),s=n[r++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[i],a!==void 0&&(e.push(s.time),a.toArray(t,t.length)),s=n[r++];while(s!==void 0);else do a=s[i],a!==void 0&&(e.push(s.time),t.push(a)),s=n[r++];while(s!==void 0)}class vl{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,r=t[i],s=t[i-1];n:{e:{let a;t:{i:if(!(e<r)){for(let o=i+2;;){if(r===void 0){if(e<s)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(s=r,r=t[++i],e<r)break e}a=t.length;break t}if(!(e>=s)){const o=t[1];e<o&&(i=2,s=o);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(r=s,s=t[--i-1],e>=s)break e}a=i,i=0;break t}break n}for(;i<a;){const o=i+a>>>1;e<t[o]?a=o:i=o+1}if(r=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let a=0;a!==r;++a)t[a]=i[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class MM extends vl{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Hd,endingEnd:Hd}}intervalChanged_(e,t,i){const r=this.parameterPositions;let s=e-2,a=e+1,o=r[s],l=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case zd:s=e,o=2*t-i;break;case Vd:s=r.length-2,o=t+r[s]-r[s+1];break;default:s=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case zd:a=e,l=2*i-t;break;case Vd:a=1,l=i+r[1]-r[0];break;default:a=e-1,l=t}const c=(i-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-i),this._offsetPrev=s*u,this._offsetNext=a*u}interpolate_(e,t,i,r){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(i-t)/(r-t),_=g*g,m=_*g,p=-d*m+2*d*_-d*g,w=(1+d)*m+(-1.5-2*d)*_+(-.5+d)*g+1,M=(-1-f)*m+(1.5+f)*_+.5*g,x=f*m-f*_;for(let I=0;I!==o;++I)s[I]=p*a[u+I]+w*a[c+I]+M*a[l+I]+x*a[h+I];return s}}class SM extends vl{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(i-t)/(r-t),h=1-u;for(let d=0;d!==o;++d)s[d]=a[c+d]*h+a[l+d]*u;return s}}class EM extends vl{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}}class Yn{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ho(t,this.TimeBufferType),this.values=ho(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:ho(e.times,Array),values:ho(e.values,Array)};const r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new EM(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new SM(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new MM(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Xo:t=this.InterpolantFactoryMethodDiscrete;break;case Nh:t=this.InterpolantFactoryMethodLinear;break;case Hl:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Xo;case this.InterpolantFactoryMethodLinear:return Nh;case this.InterpolantFactoryMethodSmooth:return Hl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){const i=this.times,r=i.length;let s=0,a=r-1;for(;s!==r&&i[s]<e;)++s;for(;a!==-1&&i[a]>t;)--a;if(++a,s!==0||a!==r){s>=a&&(a=Math.max(a,1),s=a-1);const o=this.getValueSize();this.times=i.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,r=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){const l=i[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(r!==void 0&&xM(r))for(let o=0,l=r.length;o!==l;++o){const c=r[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===Hl,s=e.length-1;let a=1;for(let o=1;o<s;++o){let l=!1;const c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(r)l=!0;else{const h=o*i,d=h-i,f=h+i;for(let g=0;g!==i;++g){const _=t[h+g];if(_!==t[d+g]||_!==t[f+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];const h=o*i,d=a*i;for(let f=0;f!==i;++f)t[d+f]=t[h+f]}++a}}if(s>0){e[a]=e[s];for(let o=s*i,l=a*i,c=0;c!==i;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}}Yn.prototype.ValueTypeName="";Yn.prototype.TimeBufferType=Float32Array;Yn.prototype.ValueBufferType=Float32Array;Yn.prototype.DefaultInterpolation=Nh;class ws extends Yn{constructor(e,t,i){super(e,t,i)}}ws.prototype.ValueTypeName="bool";ws.prototype.ValueBufferType=Array;ws.prototype.DefaultInterpolation=Xo;ws.prototype.InterpolantFactoryMethodLinear=void 0;ws.prototype.InterpolantFactoryMethodSmooth=void 0;class gg extends Yn{constructor(e,t,i,r){super(e,t,i,r)}}gg.prototype.ValueTypeName="color";class Ea extends Yn{constructor(e,t,i,r){super(e,t,i,r)}}Ea.prototype.ValueTypeName="number";class bM extends vl{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-t)/(r-t);let c=e*o;for(let u=c+o;c!==u;c+=4)qt.slerpFlat(s,0,a,c-o,a,c,l);return s}}class ys extends Yn{constructor(e,t,i,r){super(e,t,i,r)}InterpolantFactoryMethodLinear(e){return new bM(this.times,this.values,this.getValueSize(),e)}}ys.prototype.ValueTypeName="quaternion";ys.prototype.InterpolantFactoryMethodSmooth=void 0;class Ts extends Yn{constructor(e,t,i){super(e,t,i)}}Ts.prototype.ValueTypeName="string";Ts.prototype.ValueBufferType=Array;Ts.prototype.DefaultInterpolation=Xo;Ts.prototype.InterpolantFactoryMethodLinear=void 0;Ts.prototype.InterpolantFactoryMethodSmooth=void 0;class ba extends Yn{constructor(e,t,i,r){super(e,t,i,r)}}ba.prototype.ValueTypeName="vector";class wM{constructor(e="",t=-1,i=[],r=Xx){this.name=e,this.tracks=i,this.duration=t,this.blendMode=r,this.uuid=tr(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,r=1/(e.fps||1);for(let a=0,o=i.length;a!==o;++a)t.push(AM(i[a]).scale(r));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],i=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,a=i.length;s!==a;++s)t.push(Yn.toJSON(i[s]));return r}static CreateFromMorphTargetSequence(e,t,i,r){const s=t.length,a=[];for(let o=0;o<s;o++){let l=[],c=[];l.push((o+s-1)%s,o,(o+1)%s),c.push(0,1,0);const u=yM(l);l=Sf(l,1,u),c=Sf(c,1,u),!r&&l[0]===0&&(l.push(s),c.push(c[0])),a.push(new Ea(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/i))}return new this(e,-1,a)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const r=e;i=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<i.length;r++)if(i[r].name===t)return i[r];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const r={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],u=c.name.match(s);if(u&&u.length>1){const h=u[1];let d=r[h];d||(r[h]=d=[]),d.push(c)}}const a=[];for(const o in r)a.push(this.CreateFromMorphTargetSequence(o,r[o],t,i));return a}static parseAnimation(e,t){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(h,d,f,g,_){if(f.length!==0){const m=[],p=[];mg(f,m,p,g),m.length!==0&&_.push(new h(d,m,p))}},r=[],s=e.name||"default",a=e.fps||30,o=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const d=c[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let _=0;_<d[g].morphTargets.length;_++)f[d[g].morphTargets[_]]=-1;for(const _ in f){const m=[],p=[];for(let w=0;w!==d[g].morphTargets.length;++w){const M=d[g];m.push(M.time),p.push(M.morphTarget===_?1:0)}r.push(new Ea(".morphTargetInfluence["+_+"]",m,p))}l=f.length*a}else{const f=".bones["+t[h].name+"]";i(ba,f+".position",d,"pos",r),i(ys,f+".quaternion",d,"rot",r),i(ba,f+".scale",d,"scl",r)}}return r.length===0?null:new this(s,l,r,o)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,r=e.length;i!==r;++i){const s=this.tracks[i];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function TM(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ea;case"vector":case"vector2":case"vector3":case"vector4":return ba;case"color":return gg;case"quaternion":return ys;case"bool":case"boolean":return ws;case"string":return Ts}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function AM(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=TM(n.type);if(n.times===void 0){const t=[],i=[];mg(n.keys,t,i,"value"),n.times=t,n.values=i}return e.parse!==void 0?e.parse(n):new e(n.name,n.times,n.values,n.interpolation)}const Ko={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class CM{constructor(e,t,i){const r=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){o++,s===!1&&r.onStart!==void 0&&r.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,r.onProgress!==void 0&&r.onProgress(u,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){const f=c[h],g=c[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null}}}const RM=new CM;class Ar{constructor(e){this.manager=e!==void 0?e:RM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Ar.DEFAULT_MATERIAL_NAME="__DEFAULT";const _i={};class PM extends Error{constructor(e,t){super(e),this.response=t}}class DM extends Ar{constructor(e){super(e),this.mimeType="",this.responseType=""}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Ko.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(_i[e]!==void 0){_i[e].push({onLoad:t,onProgress:i,onError:r});return}_i[e]=[],_i[e].push({onLoad:t,onProgress:i,onError:r});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=_i[e],h=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0;let _=0;const m=new ReadableStream({start(p){w();function w(){h.read().then(({done:M,value:x})=>{if(M)p.close();else{_+=x.byteLength;const I=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:f});for(let U=0,R=u.length;U<R;U++){const O=u[U];O.onProgress&&O.onProgress(I)}p.enqueue(x),w()}},M=>{p.error(M)})}}});return new Response(m)}else throw new PM(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return c.json();default:if(o==="")return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(o),d=h&&h[1]?h[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(g=>f.decode(g))}}}).then(c=>{Ko.add(e,c);const u=_i[e];delete _i[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onLoad&&f.onLoad(c)}}).catch(c=>{const u=_i[e];if(u===void 0)throw this.manager.itemError(e),c;delete _i[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class IM extends Ar{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=Ko.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;const o=va("img");function l(){u(),Ko.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(h){u(),r&&r(h),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}}class nn extends Ar{constructor(e){super(e)}load(e,t,i,r){const s=new Vt,a=new IM(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}}class xl extends Mt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ce(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const uc=new Ne,Ef=new N,bf=new N;class Au{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Pe(512,512),this.map=null,this.mapPass=null,this.matrix=new Ne,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new wu,this._frameExtents=new Pe(1,1),this._viewportCount=1,this._viewports=[new tt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Ef.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ef),bf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(bf),t.updateMatrixWorld(),uc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(uc),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(uc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class LM extends Au{constructor(){super(new Et(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,i=_s*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(i!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=i,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class UM extends xl{constructor(e,t,i=0,r=Math.PI/3,s=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Mt.DEFAULT_UP),this.updateMatrix(),this.target=new Mt,this.distance=i,this.angle=r,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new LM}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const wf=new Ne,ks=new N,dc=new N;class NM extends Au{constructor(){super(new Et(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Pe(4,2),this._viewportCount=6,this._viewports=[new tt(2,1,1,1),new tt(0,1,1,1),new tt(3,1,1,1),new tt(1,1,1,1),new tt(3,0,1,1),new tt(1,0,1,1)],this._cubeDirections=[new N(1,0,0),new N(-1,0,0),new N(0,0,1),new N(0,0,-1),new N(0,1,0),new N(0,-1,0)],this._cubeUps=[new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,0,1),new N(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),ks.setFromMatrixPosition(e.matrixWorld),i.position.copy(ks),dc.copy(i.position),dc.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(dc),i.updateMatrixWorld(),r.makeTranslation(-ks.x,-ks.y,-ks.z),wf.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(wf)}}class Zo extends xl{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new NM}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Cu extends og{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class FM extends Au{constructor(){super(new Cu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ir extends xl{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Mt.DEFAULT_UP),this.updateMatrix(),this.target=new Mt,this.shadow=new FM}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class rr extends xl{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class OM{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class BM extends Et{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e,this.index=0}}class kM{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Tf(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Tf();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Tf(){return performance.now()}const Ru="\\[\\]\\.:\\/",HM=new RegExp("["+Ru+"]","g"),Pu="[^"+Ru+"]",zM="[^"+Ru.replace("\\.","")+"]",VM=/((?:WC+[\/:])*)/.source.replace("WC",Pu),GM=/(WCOD+)?/.source.replace("WCOD",zM),WM=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Pu),XM=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Pu),jM=new RegExp("^"+VM+GM+WM+XM+"$"),YM=["material","materials","bones","map"];class qM{constructor(e,t,i){const r=i||rt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class rt{constructor(e,t,i){this.path=t,this.parsedPath=i||rt.parseTrackName(t),this.node=rt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new rt.Composite(e,t,i):new rt(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(HM,"")}static parseTrackName(e){const t=jM.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const s=i.nodeName.substring(r+1);YM.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(s){for(let a=0;a<s.length;a++){const o=s[a];if(o.name===t||o.uuid===t)return o;const l=i(o.children);if(l)return l}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)e[t++]=i[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,r=t.propertyName;let s=t.propertyIndex;if(e||(e=rt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const a=e[r];if(a===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}rt.Composite=qM;rt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};rt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};rt.prototype.GetterByBindingType=[rt.prototype._getValue_direct,rt.prototype._getValue_array,rt.prototype._getValue_arrayElement,rt.prototype._getValue_toArray];rt.prototype.SetterByBindingTypeAndVersioning=[[rt.prototype._setValue_direct,rt.prototype._setValue_direct_setNeedsUpdate,rt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[rt.prototype._setValue_array,rt.prototype._setValue_array_setNeedsUpdate,rt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[rt.prototype._setValue_arrayElement,rt.prototype._setValue_arrayElement_setNeedsUpdate,rt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[rt.prototype._setValue_fromArray,rt.prototype._setValue_fromArray_setNeedsUpdate,rt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Af{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Je(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Je(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class $M extends Rr{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function Cf(n,e,t,i){const r=KM(i);switch(t){case Ym:return n*e;case $m:return n*e;case Km:return n*e*2;case Zm:return n*e/r.components*r.byteLength;case vu:return n*e/r.components*r.byteLength;case Jm:return n*e*2/r.components*r.byteLength;case xu:return n*e*2/r.components*r.byteLength;case qm:return n*e*3/r.components*r.byteLength;case fn:return n*e*4/r.components*r.byteLength;case yu:return n*e*4/r.components*r.byteLength;case Co:case Ro:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Po:case Do:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case hh:case dh:return Math.max(n,16)*Math.max(e,8)/4;case ch:case uh:return Math.max(n,8)*Math.max(e,8)/2;case fh:case ph:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case mh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case gh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case _h:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case vh:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case xh:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case yh:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Mh:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Sh:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Eh:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case bh:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case wh:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Th:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Ah:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Ch:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Rh:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Io:case Ph:case Dh:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Qm:case Ih:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Lh:case Uh:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function KM(n){switch(n){case wi:case Wm:return{byteLength:1,components:1};case pa:case Xm:case Ms:return{byteLength:2,components:1};case gu:case _u:return{byteLength:2,components:4};case wr:case mu:case ni:return{byteLength:4,components:1};case jm:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:pu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=pu);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function _g(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function ZM(n){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,h=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,u),o.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function i(o,l,c){const u=l.array,h=l.updateRanges;if(n.bindBuffer(c,o),h.length===0)n.bufferSubData(c,0,u);else{h.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<h.length;f++){const g=h[d],_=h[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,h[d]=_)}h.length=d+1;for(let f=0,g=h.length;f<g;f++){const _=h[f];n.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var JM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,QM=`#ifdef USE_ALPHAHASH
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
#endif`,eS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,tS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,nS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,iS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,rS=`#ifdef USE_AOMAP
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
#endif`,sS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,aS=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,oS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,lS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,cS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,hS=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,uS=`#ifdef USE_IRIDESCENCE
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
#endif`,dS=`#ifdef USE_BUMPMAP
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
#endif`,fS=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,pS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,mS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,gS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,_S=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,vS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,xS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,yS=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,MS=`#define PI 3.141592653589793
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
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
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
} // validated`,SS=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ES=`vec3 transformedNormal = objectNormal;
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
#endif`,bS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,wS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,TS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,AS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,CS="gl_FragColor = linearToOutputTexel( gl_FragColor );",RS=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,PS=`#ifdef USE_ENVMAP
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
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,DS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,IS=`#ifdef USE_ENVMAP
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
#endif`,LS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,US=`#ifdef USE_ENVMAP
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
#endif`,NS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,FS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,OS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,BS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,kS=`#ifdef USE_GRADIENTMAP
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
}`,HS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,zS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,VS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,GS=`uniform bool receiveShadow;
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
#endif`,WS=`#ifdef USE_ENVMAP
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
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
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
#endif`,XS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,jS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,YS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,qS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,$S=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,KS=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
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
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ZS=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif`,JS=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
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
#endif`,QS=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,eE=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,tE=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nE=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,iE=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,rE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,sE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,aE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,oE=`#if defined( USE_POINTS_UV )
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
#endif`,lE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,cE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,hE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,uE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,dE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fE=`#ifdef USE_MORPHTARGETS
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
#endif`,pE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,gE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,_E=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,yE=`#ifdef USE_NORMALMAP
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
#endif`,ME=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,SE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,EE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,bE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,wE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,TE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,AE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,CE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,RE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,PE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,DE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,IE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,LE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
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
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
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
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,UE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,NE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,FE=`float getShadowMask() {
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,OE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,BE=`#ifdef USE_SKINNING
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
#endif`,kE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,HE=`#ifdef USE_SKINNING
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
#endif`,zE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,VE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,GE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,WE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,XE=`#ifdef USE_TRANSMISSION
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
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,jE=`#ifdef USE_TRANSMISSION
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
#endif`,YE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$E=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,KE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ZE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,JE=`uniform sampler2D t2D;
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
}`,QE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,eb=`#ifdef ENVMAP_TYPE_CUBE
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
}`,tb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ib=`#include <common>
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
}`,rb=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,sb=`#define DISTANCE
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
}`,ab=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
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
	gl_FragColor = packDepthToRGBA( dist );
}`,ob=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,lb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cb=`uniform float scale;
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
}`,hb=`uniform vec3 diffuse;
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
}`,ub=`#include <common>
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
}`,db=`uniform vec3 diffuse;
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
}`,fb=`#define LAMBERT
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
}`,pb=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,mb=`#define MATCAP
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
}`,gb=`#define MATCAP
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
}`,_b=`#define NORMAL
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
}`,vb=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,xb=`#define PHONG
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
}`,yb=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,Mb=`#define STANDARD
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
}`,Sb=`#define STANDARD
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
#include <packing>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,Eb=`#define TOON
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
}`,bb=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,wb=`uniform float size;
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
}`,Tb=`uniform vec3 diffuse;
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
}`,Ab=`#include <common>
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
}`,Cb=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,Rb=`uniform float rotation;
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
}`,Pb=`uniform vec3 diffuse;
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
}`,Qe={alphahash_fragment:JM,alphahash_pars_fragment:QM,alphamap_fragment:eS,alphamap_pars_fragment:tS,alphatest_fragment:nS,alphatest_pars_fragment:iS,aomap_fragment:rS,aomap_pars_fragment:sS,batching_pars_vertex:aS,batching_vertex:oS,begin_vertex:lS,beginnormal_vertex:cS,bsdfs:hS,iridescence_fragment:uS,bumpmap_pars_fragment:dS,clipping_planes_fragment:fS,clipping_planes_pars_fragment:pS,clipping_planes_pars_vertex:mS,clipping_planes_vertex:gS,color_fragment:_S,color_pars_fragment:vS,color_pars_vertex:xS,color_vertex:yS,common:MS,cube_uv_reflection_fragment:SS,defaultnormal_vertex:ES,displacementmap_pars_vertex:bS,displacementmap_vertex:wS,emissivemap_fragment:TS,emissivemap_pars_fragment:AS,colorspace_fragment:CS,colorspace_pars_fragment:RS,envmap_fragment:PS,envmap_common_pars_fragment:DS,envmap_pars_fragment:IS,envmap_pars_vertex:LS,envmap_physical_pars_fragment:WS,envmap_vertex:US,fog_vertex:NS,fog_pars_vertex:FS,fog_fragment:OS,fog_pars_fragment:BS,gradientmap_pars_fragment:kS,lightmap_pars_fragment:HS,lights_lambert_fragment:zS,lights_lambert_pars_fragment:VS,lights_pars_begin:GS,lights_toon_fragment:XS,lights_toon_pars_fragment:jS,lights_phong_fragment:YS,lights_phong_pars_fragment:qS,lights_physical_fragment:$S,lights_physical_pars_fragment:KS,lights_fragment_begin:ZS,lights_fragment_maps:JS,lights_fragment_end:QS,logdepthbuf_fragment:eE,logdepthbuf_pars_fragment:tE,logdepthbuf_pars_vertex:nE,logdepthbuf_vertex:iE,map_fragment:rE,map_pars_fragment:sE,map_particle_fragment:aE,map_particle_pars_fragment:oE,metalnessmap_fragment:lE,metalnessmap_pars_fragment:cE,morphinstance_vertex:hE,morphcolor_vertex:uE,morphnormal_vertex:dE,morphtarget_pars_vertex:fE,morphtarget_vertex:pE,normal_fragment_begin:mE,normal_fragment_maps:gE,normal_pars_fragment:_E,normal_pars_vertex:vE,normal_vertex:xE,normalmap_pars_fragment:yE,clearcoat_normal_fragment_begin:ME,clearcoat_normal_fragment_maps:SE,clearcoat_pars_fragment:EE,iridescence_pars_fragment:bE,opaque_fragment:wE,packing:TE,premultiplied_alpha_fragment:AE,project_vertex:CE,dithering_fragment:RE,dithering_pars_fragment:PE,roughnessmap_fragment:DE,roughnessmap_pars_fragment:IE,shadowmap_pars_fragment:LE,shadowmap_pars_vertex:UE,shadowmap_vertex:NE,shadowmask_pars_fragment:FE,skinbase_vertex:OE,skinning_pars_vertex:BE,skinning_vertex:kE,skinnormal_vertex:HE,specularmap_fragment:zE,specularmap_pars_fragment:VE,tonemapping_fragment:GE,tonemapping_pars_fragment:WE,transmission_fragment:XE,transmission_pars_fragment:jE,uv_pars_fragment:YE,uv_pars_vertex:qE,uv_vertex:$E,worldpos_vertex:KE,background_vert:ZE,background_frag:JE,backgroundCube_vert:QE,backgroundCube_frag:eb,cube_vert:tb,cube_frag:nb,depth_vert:ib,depth_frag:rb,distanceRGBA_vert:sb,distanceRGBA_frag:ab,equirect_vert:ob,equirect_frag:lb,linedashed_vert:cb,linedashed_frag:hb,meshbasic_vert:ub,meshbasic_frag:db,meshlambert_vert:fb,meshlambert_frag:pb,meshmatcap_vert:mb,meshmatcap_frag:gb,meshnormal_vert:_b,meshnormal_frag:vb,meshphong_vert:xb,meshphong_frag:yb,meshphysical_vert:Mb,meshphysical_frag:Sb,meshtoon_vert:Eb,meshtoon_frag:bb,points_vert:wb,points_frag:Tb,shadow_vert:Ab,shadow_frag:Cb,sprite_vert:Rb,sprite_frag:Pb},Ee={common:{diffuse:{value:new Ce(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xe}},envmap:{envMap:{value:null},envMapRotation:{value:new Xe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xe},normalScale:{value:new Pe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ce(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ce(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0},uvTransform:{value:new Xe}},sprite:{diffuse:{value:new Ce(16777215)},opacity:{value:1},center:{value:new Pe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}}},ei={basic:{uniforms:on([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.fog]),vertexShader:Qe.meshbasic_vert,fragmentShader:Qe.meshbasic_frag},lambert:{uniforms:on([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new Ce(0)}}]),vertexShader:Qe.meshlambert_vert,fragmentShader:Qe.meshlambert_frag},phong:{uniforms:on([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new Ce(0)},specular:{value:new Ce(1118481)},shininess:{value:30}}]),vertexShader:Qe.meshphong_vert,fragmentShader:Qe.meshphong_frag},standard:{uniforms:on([Ee.common,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.roughnessmap,Ee.metalnessmap,Ee.fog,Ee.lights,{emissive:{value:new Ce(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag},toon:{uniforms:on([Ee.common,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.gradientmap,Ee.fog,Ee.lights,{emissive:{value:new Ce(0)}}]),vertexShader:Qe.meshtoon_vert,fragmentShader:Qe.meshtoon_frag},matcap:{uniforms:on([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,{matcap:{value:null}}]),vertexShader:Qe.meshmatcap_vert,fragmentShader:Qe.meshmatcap_frag},points:{uniforms:on([Ee.points,Ee.fog]),vertexShader:Qe.points_vert,fragmentShader:Qe.points_frag},dashed:{uniforms:on([Ee.common,Ee.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qe.linedashed_vert,fragmentShader:Qe.linedashed_frag},depth:{uniforms:on([Ee.common,Ee.displacementmap]),vertexShader:Qe.depth_vert,fragmentShader:Qe.depth_frag},normal:{uniforms:on([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,{opacity:{value:1}}]),vertexShader:Qe.meshnormal_vert,fragmentShader:Qe.meshnormal_frag},sprite:{uniforms:on([Ee.sprite,Ee.fog]),vertexShader:Qe.sprite_vert,fragmentShader:Qe.sprite_frag},background:{uniforms:{uvTransform:{value:new Xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qe.background_vert,fragmentShader:Qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xe}},vertexShader:Qe.backgroundCube_vert,fragmentShader:Qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qe.cube_vert,fragmentShader:Qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qe.equirect_vert,fragmentShader:Qe.equirect_frag},distanceRGBA:{uniforms:on([Ee.common,Ee.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qe.distanceRGBA_vert,fragmentShader:Qe.distanceRGBA_frag},shadow:{uniforms:on([Ee.lights,Ee.fog,{color:{value:new Ce(0)},opacity:{value:1}}]),vertexShader:Qe.shadow_vert,fragmentShader:Qe.shadow_frag}};ei.physical={uniforms:on([ei.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xe},clearcoatNormalScale:{value:new Pe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xe},sheen:{value:0},sheenColor:{value:new Ce(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xe},transmissionSamplerSize:{value:new Pe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xe},attenuationDistance:{value:0},attenuationColor:{value:new Ce(0)},specularColor:{value:new Ce(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xe},anisotropyVector:{value:new Pe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xe}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag};const uo={r:0,b:0,g:0},mr=new Nt,Db=new Ne;function Ib(n,e,t,i,r,s,a){const o=new Ce(0);let l=s===!0?0:1,c,u,h=null,d=0,f=null;function g(M){let x=M.isScene===!0?M.background:null;return x&&x.isTexture&&(x=(M.backgroundBlurriness>0?t:e).get(x)),x}function _(M){let x=!1;const I=g(M);I===null?p(o,l):I&&I.isColor&&(p(I,1),x=!0);const U=n.xr.getEnvironmentBlendMode();U==="additive"?i.buffers.color.setClear(0,0,0,1,a):U==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(M,x){const I=g(x);I&&(I.isCubeTexture||I.mapping===pl)?(u===void 0&&(u=new kt(new Ti(1,1,1),new at({name:"BackgroundCubeMaterial",uniforms:vs(ei.backgroundCube.uniforms),vertexShader:ei.backgroundCube.vertexShader,fragmentShader:ei.backgroundCube.fragmentShader,side:en,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(U,R,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),mr.copy(x.backgroundRotation),mr.x*=-1,mr.y*=-1,mr.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(mr.y*=-1,mr.z*=-1),u.material.uniforms.envMap.value=I,u.material.uniforms.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Db.makeRotationFromEuler(mr)),u.material.toneMapped=Ze.getTransfer(I.colorSpace)!==ft,(h!==I||d!==I.version||f!==n.toneMapping)&&(u.material.needsUpdate=!0,h=I,d=I.version,f=n.toneMapping),u.layers.enableAll(),M.unshift(u,u.geometry,u.material,0,0,null)):I&&I.isTexture&&(c===void 0&&(c=new kt(new bs(2,2),new at({name:"BackgroundMaterial",uniforms:vs(ei.background.uniforms),vertexShader:ei.background.vertexShader,fragmentShader:ei.background.fragmentShader,side:ai,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=I,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=Ze.getTransfer(I.colorSpace)!==ft,I.matrixAutoUpdate===!0&&I.updateMatrix(),c.material.uniforms.uvTransform.value.copy(I.matrix),(h!==I||d!==I.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,h=I,d=I.version,f=n.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function p(M,x){M.getRGB(uo,ag(n)),i.buffers.color.setClear(uo.r,uo.g,uo.b,x,a)}function w(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(M,x=1){o.set(M),l=x,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,p(o,l)},render:_,addToRenderList:m,dispose:w}}function Lb(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,a=!1;function o(b,D,te,X,ae){let oe=!1;const J=h(X,te,D);s!==J&&(s=J,c(s.object)),oe=f(b,X,te,ae),oe&&g(b,X,te,ae),ae!==null&&e.update(ae,n.ELEMENT_ARRAY_BUFFER),(oe||a)&&(a=!1,x(b,D,te,X),ae!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(ae).buffer))}function l(){return n.createVertexArray()}function c(b){return n.bindVertexArray(b)}function u(b){return n.deleteVertexArray(b)}function h(b,D,te){const X=te.wireframe===!0;let ae=i[b.id];ae===void 0&&(ae={},i[b.id]=ae);let oe=ae[D.id];oe===void 0&&(oe={},ae[D.id]=oe);let J=oe[X];return J===void 0&&(J=d(l()),oe[X]=J),J}function d(b){const D=[],te=[],X=[];for(let ae=0;ae<t;ae++)D[ae]=0,te[ae]=0,X[ae]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:te,attributeDivisors:X,object:b,attributes:{},index:null}}function f(b,D,te,X){const ae=s.attributes,oe=D.attributes;let J=0;const Q=te.getAttributes();for(const V in Q)if(Q[V].location>=0){const Se=ae[V];let De=oe[V];if(De===void 0&&(V==="instanceMatrix"&&b.instanceMatrix&&(De=b.instanceMatrix),V==="instanceColor"&&b.instanceColor&&(De=b.instanceColor)),Se===void 0||Se.attribute!==De||De&&Se.data!==De.data)return!0;J++}return s.attributesNum!==J||s.index!==X}function g(b,D,te,X){const ae={},oe=D.attributes;let J=0;const Q=te.getAttributes();for(const V in Q)if(Q[V].location>=0){let Se=oe[V];Se===void 0&&(V==="instanceMatrix"&&b.instanceMatrix&&(Se=b.instanceMatrix),V==="instanceColor"&&b.instanceColor&&(Se=b.instanceColor));const De={};De.attribute=Se,Se&&Se.data&&(De.data=Se.data),ae[V]=De,J++}s.attributes=ae,s.attributesNum=J,s.index=X}function _(){const b=s.newAttributes;for(let D=0,te=b.length;D<te;D++)b[D]=0}function m(b){p(b,0)}function p(b,D){const te=s.newAttributes,X=s.enabledAttributes,ae=s.attributeDivisors;te[b]=1,X[b]===0&&(n.enableVertexAttribArray(b),X[b]=1),ae[b]!==D&&(n.vertexAttribDivisor(b,D),ae[b]=D)}function w(){const b=s.newAttributes,D=s.enabledAttributes;for(let te=0,X=D.length;te<X;te++)D[te]!==b[te]&&(n.disableVertexAttribArray(te),D[te]=0)}function M(b,D,te,X,ae,oe,J){J===!0?n.vertexAttribIPointer(b,D,te,ae,oe):n.vertexAttribPointer(b,D,te,X,ae,oe)}function x(b,D,te,X){_();const ae=X.attributes,oe=te.getAttributes(),J=D.defaultAttributeValues;for(const Q in oe){const V=oe[Q];if(V.location>=0){let me=ae[Q];if(me===void 0&&(Q==="instanceMatrix"&&b.instanceMatrix&&(me=b.instanceMatrix),Q==="instanceColor"&&b.instanceColor&&(me=b.instanceColor)),me!==void 0){const Se=me.normalized,De=me.itemSize,Ue=e.get(me);if(Ue===void 0)continue;const $e=Ue.buffer,re=Ue.type,ge=Ue.bytesPerElement,Me=re===n.INT||re===n.UNSIGNED_INT||me.gpuType===mu;if(me.isInterleavedBufferAttribute){const F=me.data,se=F.stride,ce=me.offset;if(F.isInstancedInterleavedBuffer){for(let he=0;he<V.locationSize;he++)p(V.location+he,F.meshPerAttribute);b.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=F.meshPerAttribute*F.count)}else for(let he=0;he<V.locationSize;he++)m(V.location+he);n.bindBuffer(n.ARRAY_BUFFER,$e);for(let he=0;he<V.locationSize;he++)M(V.location+he,De/V.locationSize,re,Se,se*ge,(ce+De/V.locationSize*he)*ge,Me)}else{if(me.isInstancedBufferAttribute){for(let F=0;F<V.locationSize;F++)p(V.location+F,me.meshPerAttribute);b.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let F=0;F<V.locationSize;F++)m(V.location+F);n.bindBuffer(n.ARRAY_BUFFER,$e);for(let F=0;F<V.locationSize;F++)M(V.location+F,De/V.locationSize,re,Se,De*ge,De/V.locationSize*F*ge,Me)}}else if(J!==void 0){const Se=J[Q];if(Se!==void 0)switch(Se.length){case 2:n.vertexAttrib2fv(V.location,Se);break;case 3:n.vertexAttrib3fv(V.location,Se);break;case 4:n.vertexAttrib4fv(V.location,Se);break;default:n.vertexAttrib1fv(V.location,Se)}}}}w()}function I(){O();for(const b in i){const D=i[b];for(const te in D){const X=D[te];for(const ae in X)u(X[ae].object),delete X[ae];delete D[te]}delete i[b]}}function U(b){if(i[b.id]===void 0)return;const D=i[b.id];for(const te in D){const X=D[te];for(const ae in X)u(X[ae].object),delete X[ae];delete D[te]}delete i[b.id]}function R(b){for(const D in i){const te=i[D];if(te[b.id]===void 0)continue;const X=te[b.id];for(const ae in X)u(X[ae].object),delete X[ae];delete te[b.id]}}function O(){T(),a=!0,s!==r&&(s=r,c(s.object))}function T(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:O,resetDefaultState:T,dispose:I,releaseStatesOfGeometry:U,releaseStatesOfProgram:R,initAttributes:_,enableAttribute:m,disableUnusedAttributes:w}}function Ub(n,e,t){let i;function r(c){i=c}function s(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function a(c,u,h){h!==0&&(n.drawArraysInstanced(i,c,u,h),t.update(u,i,h))}function o(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,h);let f=0;for(let g=0;g<h;g++)f+=u[g];t.update(f,i,1)}function l(c,u,h,d){if(h===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)a(c[g],u[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(i,c,0,u,0,d,0,h);let g=0;for(let _=0;_<h;_++)g+=u[_]*d[_];t.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Nb(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(R){return!(R!==fn&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const O=R===Ms&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==wi&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==ni&&!O)}function l(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),w=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),M=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),I=g>0,U=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:w,maxVaryings:M,maxFragmentUniforms:x,vertexTextures:I,maxSamples:U}}function Fb(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new Xi,o=new Xe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||i!==0||r;return r=d,i=h.length,f},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){const g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,p=n.get(h);if(!r||g===null||g.length===0||s&&!m)s?u(null):c();else{const w=s?0:i,M=w*4;let x=p.clippingState||null;l.value=x,x=u(g,d,M,f);for(let I=0;I!==M;++I)x[I]=t[I];p.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,d,f,g){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=f+_*4,w=d.matrixWorldInverse;o.getNormalMatrix(w),(m===null||m.length<p)&&(m=new Float32Array(p));for(let M=0,x=f;M!==_;++M,x+=4)a.copy(h[M]).applyMatrix4(w,o),a.normal.toArray(m,x),m[x+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function Ob(n){let e=new WeakMap;function t(a,o){return o===Wo?a.mapping=ms:o===oh&&(a.mapping=gs),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===Wo||o===oh)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Vy(l.height);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",r),t(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const ts=4,Rf=[.125,.215,.35,.446,.526,.582],yr=20,fc=new Cu,Pf=new Ce;let pc=null,mc=0,gc=0,_c=!1;const vr=(1+Math.sqrt(5))/2,jr=1/vr,Df=[new N(-vr,jr,0),new N(vr,jr,0),new N(-jr,0,vr),new N(jr,0,vr),new N(0,vr,-jr),new N(0,vr,jr),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)],Bb=new N;class If{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100,s={}){const{size:a=256,position:o=Bb}=s;pc=this._renderer.getRenderTarget(),mc=this._renderer.getActiveCubeFace(),gc=this._renderer.getActiveMipmapLevel(),_c=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Nf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Uf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(pc,mc,gc),this._renderer.xr.enabled=_c,e.scissorTest=!1,fo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ms||e.mapping===gs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),pc=this._renderer.getRenderTarget(),mc=this._renderer.getActiveCubeFace(),gc=this._renderer.getActiveMipmapLevel(),_c=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:ti,minFilter:ti,generateMipmaps:!1,type:Ms,format:fn,colorSpace:Ct,depthBuffer:!1},r=Lf(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Lf(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=kb(s)),this._blurMaterial=Hb(s,e,t)}return r}_compileMaterial(e){const t=new kt(this._lodPlanes[0],e);this._renderer.compile(t,fc)}_sceneToCubeUV(e,t,i,r,s){const l=new Et(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(Pf),h.toneMapping=$i,h.autoClear=!1;const g=new Pa({name:"PMREM.Background",side:en,depthWrite:!1,depthTest:!1}),_=new kt(new Ti,g);let m=!1;const p=e.background;p?p.isColor&&(g.color.copy(p),e.background=null,m=!0):(g.color.copy(Pf),m=!0);for(let w=0;w<6;w++){const M=w%3;M===0?(l.up.set(0,c[w],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[w],s.y,s.z)):M===1?(l.up.set(0,0,c[w]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[w],s.z)):(l.up.set(0,c[w],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[w]));const x=this._cubeSize;fo(r,M*x,w>2?x:0,x,x),h.setRenderTarget(r),m&&h.render(_,l),h.render(e,l)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=f,h.autoClear=d,e.background=p}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===ms||e.mapping===gs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Nf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Uf());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new kt(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;fo(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,fc)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Df[(r-s-1)%Df.length];this._blur(e,s-1,s,a,o)}t.autoClear=i}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new kt(this._lodPlanes[r],c),d=c.uniforms,f=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*yr-1),_=s/g,m=isFinite(s)?1+Math.floor(u*_):yr;m>yr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${yr}`);const p=[];let w=0;for(let R=0;R<yr;++R){const O=R/_,T=Math.exp(-O*O/2);p.push(T),R===0?w+=T:R<m&&(w+=2*T)}for(let R=0;R<p.length;R++)p[R]=p[R]/w;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:M}=this;d.dTheta.value=g,d.mipInt.value=M-i;const x=this._sizeLods[r],I=3*x*(r>M-ts?r-M+ts:0),U=4*(this._cubeSize-x);fo(t,I,U,3*x,2*x),l.setRenderTarget(t),l.render(h,fc)}}function kb(n){const e=[],t=[],i=[];let r=n;const s=n-ts+1+Rf.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let l=1/o;a>n-ts?l=Rf[a-n+ts-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,g=6,_=3,m=2,p=1,w=new Float32Array(_*g*f),M=new Float32Array(m*g*f),x=new Float32Array(p*g*f);for(let U=0;U<f;U++){const R=U%3*2/3-1,O=U>2?0:-1,T=[R,O,0,R+2/3,O,0,R+2/3,O+1,0,R,O,0,R+2/3,O+1,0,R,O+1,0];w.set(T,_*g*U),M.set(d,m*g*U);const b=[U,U,U,U,U,U];x.set(b,p*g*U)}const I=new Ln;I.setAttribute("position",new ri(w,_)),I.setAttribute("uv",new ri(M,m)),I.setAttribute("faceIndex",new ri(x,p)),e.push(I),r>ts&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Lf(n,e,t){const i=new wt(n,e,t);return i.texture.mapping=pl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function fo(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function Hb(n,e,t){const i=new Float32Array(yr),r=new N(0,1,0);return new at({name:"SphericalGaussianBlur",defines:{n:yr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Du(),fragmentShader:`

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
		`,blending:Pt,depthTest:!1,depthWrite:!1})}function Uf(){return new at({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Du(),fragmentShader:`

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
		`,blending:Pt,depthTest:!1,depthWrite:!1})}function Nf(){return new at({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Du(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Pt,depthTest:!1,depthWrite:!1})}function Du(){return`

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
	`}function zb(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===Wo||l===oh,u=l===ms||l===gs;if(c||u){let h=e.get(o);const d=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new If(n)),h=c?t.fromEquirectangular(o,h):t.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{const f=o.image;return c&&f&&f.height>0||u&&f&&r(f)?(t===null&&(t=new If(n)),h=c?t.fromEquirectangular(o):t.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",s),h.texture):null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function Vb(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&Lo("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Gb(n,e,t,i){const r={},s=new WeakMap;function a(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",a),delete r[d.id];const f=s.get(d);f&&(e.remove(f),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(h,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,t.memory.geometries++),d}function l(h){const d=h.attributes;for(const f in d)e.update(d[f],n.ARRAY_BUFFER)}function c(h){const d=[],f=h.index,g=h.attributes.position;let _=0;if(f!==null){const w=f.array;_=f.version;for(let M=0,x=w.length;M<x;M+=3){const I=w[M+0],U=w[M+1],R=w[M+2];d.push(I,U,U,R,R,I)}}else if(g!==void 0){const w=g.array;_=g.version;for(let M=0,x=w.length/3-1;M<x;M+=3){const I=M+0,U=M+1,R=M+2;d.push(I,U,U,R,R,I)}}else return;const m=new(tg(d)?sg:Eu)(d,1);m.version=_;const p=s.get(h);p&&e.remove(p),s.set(h,m)}function u(h){const d=s.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&c(h)}else c(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function Wb(n,e,t){let i;function r(d){i=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function l(d,f){n.drawElements(i,f,s,d*a),t.update(f,i,1)}function c(d,f,g){g!==0&&(n.drawElementsInstanced(i,f,s,d*a,g),t.update(f,i,g))}function u(d,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,s,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,i,1)}function h(d,f,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/a,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(i,f,0,s,d,0,_,0,g);let p=0;for(let w=0;w<g;w++)p+=f[w]*_[w];t.update(p,i,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function Xb(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function jb(n,e,t){const i=new WeakMap,r=new tt;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let d=i.get(o);if(d===void 0||d.count!==h){let b=function(){O.dispose(),i.delete(o),o.removeEventListener("dispose",b)};var f=b;d!==void 0&&d.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],w=o.morphAttributes.normal||[],M=o.morphAttributes.color||[];let x=0;g===!0&&(x=1),_===!0&&(x=2),m===!0&&(x=3);let I=o.attributes.position.count*x,U=1;I>e.maxTextureSize&&(U=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const R=new Float32Array(I*U*4*h),O=new ng(R,I,U,h);O.type=ni,O.needsUpdate=!0;const T=x*4;for(let D=0;D<h;D++){const te=p[D],X=w[D],ae=M[D],oe=I*U*4*D;for(let J=0;J<te.count;J++){const Q=J*T;g===!0&&(r.fromBufferAttribute(te,J),R[oe+Q+0]=r.x,R[oe+Q+1]=r.y,R[oe+Q+2]=r.z,R[oe+Q+3]=0),_===!0&&(r.fromBufferAttribute(X,J),R[oe+Q+4]=r.x,R[oe+Q+5]=r.y,R[oe+Q+6]=r.z,R[oe+Q+7]=0),m===!0&&(r.fromBufferAttribute(ae,J),R[oe+Q+8]=r.x,R[oe+Q+9]=r.y,R[oe+Q+10]=r.z,R[oe+Q+11]=ae.itemSize===4?r.w:1)}}d={count:h,texture:O,size:new Pe(I,U)},i.set(o,d),o.addEventListener("dispose",b)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:s}}function Yb(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,h=e.get(l,u);if(r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return h}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}const vg=new Vt,Ff=new hg(1,1),xg=new ng,yg=new Ty,Mg=new lg,Of=[],Bf=[],kf=new Float32Array(16),Hf=new Float32Array(9),zf=new Float32Array(4);function As(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Of[r];if(s===void 0&&(s=new Float32Array(r),Of[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function Ft(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Ot(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function yl(n,e){let t=Bf[e];t===void 0&&(t=new Int32Array(e),Bf[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function qb(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function $b(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;n.uniform2fv(this.addr,e),Ot(t,e)}}function Kb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ft(t,e))return;n.uniform3fv(this.addr,e),Ot(t,e)}}function Zb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;n.uniform4fv(this.addr,e),Ot(t,e)}}function Jb(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ft(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Ot(t,e)}else{if(Ft(t,i))return;zf.set(i),n.uniformMatrix2fv(this.addr,!1,zf),Ot(t,i)}}function Qb(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ft(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Ot(t,e)}else{if(Ft(t,i))return;Hf.set(i),n.uniformMatrix3fv(this.addr,!1,Hf),Ot(t,i)}}function ew(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ft(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Ot(t,e)}else{if(Ft(t,i))return;kf.set(i),n.uniformMatrix4fv(this.addr,!1,kf),Ot(t,i)}}function tw(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function nw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;n.uniform2iv(this.addr,e),Ot(t,e)}}function iw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ft(t,e))return;n.uniform3iv(this.addr,e),Ot(t,e)}}function rw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;n.uniform4iv(this.addr,e),Ot(t,e)}}function sw(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function aw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;n.uniform2uiv(this.addr,e),Ot(t,e)}}function ow(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ft(t,e))return;n.uniform3uiv(this.addr,e),Ot(t,e)}}function lw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;n.uniform4uiv(this.addr,e),Ot(t,e)}}function cw(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Ff.compareFunction=eg,s=Ff):s=vg,t.setTexture2D(e||s,r)}function hw(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||yg,r)}function uw(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Mg,r)}function dw(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||xg,r)}function fw(n){switch(n){case 5126:return qb;case 35664:return $b;case 35665:return Kb;case 35666:return Zb;case 35674:return Jb;case 35675:return Qb;case 35676:return ew;case 5124:case 35670:return tw;case 35667:case 35671:return nw;case 35668:case 35672:return iw;case 35669:case 35673:return rw;case 5125:return sw;case 36294:return aw;case 36295:return ow;case 36296:return lw;case 35678:case 36198:case 36298:case 36306:case 35682:return cw;case 35679:case 36299:case 36307:return hw;case 35680:case 36300:case 36308:case 36293:return uw;case 36289:case 36303:case 36311:case 36292:return dw}}function pw(n,e){n.uniform1fv(this.addr,e)}function mw(n,e){const t=As(e,this.size,2);n.uniform2fv(this.addr,t)}function gw(n,e){const t=As(e,this.size,3);n.uniform3fv(this.addr,t)}function _w(n,e){const t=As(e,this.size,4);n.uniform4fv(this.addr,t)}function vw(n,e){const t=As(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function xw(n,e){const t=As(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function yw(n,e){const t=As(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Mw(n,e){n.uniform1iv(this.addr,e)}function Sw(n,e){n.uniform2iv(this.addr,e)}function Ew(n,e){n.uniform3iv(this.addr,e)}function bw(n,e){n.uniform4iv(this.addr,e)}function ww(n,e){n.uniform1uiv(this.addr,e)}function Tw(n,e){n.uniform2uiv(this.addr,e)}function Aw(n,e){n.uniform3uiv(this.addr,e)}function Cw(n,e){n.uniform4uiv(this.addr,e)}function Rw(n,e,t){const i=this.cache,r=e.length,s=yl(t,r);Ft(i,s)||(n.uniform1iv(this.addr,s),Ot(i,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||vg,s[a])}function Pw(n,e,t){const i=this.cache,r=e.length,s=yl(t,r);Ft(i,s)||(n.uniform1iv(this.addr,s),Ot(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||yg,s[a])}function Dw(n,e,t){const i=this.cache,r=e.length,s=yl(t,r);Ft(i,s)||(n.uniform1iv(this.addr,s),Ot(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Mg,s[a])}function Iw(n,e,t){const i=this.cache,r=e.length,s=yl(t,r);Ft(i,s)||(n.uniform1iv(this.addr,s),Ot(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||xg,s[a])}function Lw(n){switch(n){case 5126:return pw;case 35664:return mw;case 35665:return gw;case 35666:return _w;case 35674:return vw;case 35675:return xw;case 35676:return yw;case 5124:case 35670:return Mw;case 35667:case 35671:return Sw;case 35668:case 35672:return Ew;case 35669:case 35673:return bw;case 5125:return ww;case 36294:return Tw;case 36295:return Aw;case 36296:return Cw;case 35678:case 36198:case 36298:case 36306:case 35682:return Rw;case 35679:case 36299:case 36307:return Pw;case 35680:case 36300:case 36308:case 36293:return Dw;case 36289:case 36303:case 36311:case 36292:return Iw}}class Uw{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=fw(t.type)}}class Nw{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Lw(t.type)}}class Fw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const vc=/(\w+)(\])?(\[|\.)?/g;function Vf(n,e){n.seq.push(e),n.map[e.id]=e}function Ow(n,e,t){const i=n.name,r=i.length;for(vc.lastIndex=0;;){const s=vc.exec(i),a=vc.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Vf(t,c===void 0?new Uw(o,n,e):new Nw(o,n,e));break}else{let h=t.map[o];h===void 0&&(h=new Fw(o),Vf(t,h)),t=h}}}class Uo{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);Ow(s,a,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function Gf(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const Bw=37297;let kw=0;function Hw(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const Wf=new Xe;function zw(n){Ze._getMatrix(Wf,Ze.workingColorSpace,n);const e=`mat3( ${Wf.elements.map(t=>t.toFixed(4))} )`;switch(Ze.getTransfer(n)){case jo:return[e,"LinearTransferOETF"];case ft:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Xf(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+Hw(n.getShaderSource(e),a)}else return r}function Vw(n,e){const t=zw(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Gw(n,e){let t;switch(e){case Fm:t="Linear";break;case Om:t="Reinhard";break;case Bm:t="Cineon";break;case km:t="ACESFilmic";break;case zm:t="AgX";break;case Vm:t="Neutral";break;case Hm:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const po=new N;function Ww(){Ze.getLuminanceCoefficients(po);const n=po.x.toFixed(4),e=po.y.toFixed(4),t=po.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Xw(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ws).join(`
`)}function jw(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Yw(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Ws(n){return n!==""}function jf(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Yf(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const qw=/^[ \t]*#include +<([\w\d./]+)>/gm;function kh(n){return n.replace(qw,Kw)}const $w=new Map;function Kw(n,e){let t=Qe[e];if(t===void 0){const i=$w.get(e);if(i!==void 0)t=Qe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return kh(t)}const Zw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function qf(n){return n.replace(Zw,Jw)}function Jw(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function $f(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Qw(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Ri?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Sx?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===vi&&(e="SHADOWMAP_TYPE_VSM"),e}function eT(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case ms:case gs:e="ENVMAP_TYPE_CUBE";break;case pl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function tT(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case gs:e="ENVMAP_MODE_REFRACTION";break}return e}function nT(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case fl:e="ENVMAP_BLENDING_MULTIPLY";break;case zx:e="ENVMAP_BLENDING_MIX";break;case Vx:e="ENVMAP_BLENDING_ADD";break}return e}function iT(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function rT(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=Qw(t),c=eT(t),u=tT(t),h=nT(t),d=iT(t),f=Xw(t),g=jw(s),_=r.createProgram();let m,p,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ws).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ws).join(`
`),p.length>0&&(p+=`
`)):(m=[$f(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ws).join(`
`),p=[$f(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==$i?"#define TONE_MAPPING":"",t.toneMapping!==$i?Qe.tonemapping_pars_fragment:"",t.toneMapping!==$i?Gw("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Qe.colorspace_pars_fragment,Vw("linearToOutputTexel",t.outputColorSpace),Ww(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ws).join(`
`)),a=kh(a),a=jf(a,t),a=Yf(a,t),o=kh(o),o=jf(o,t),o=Yf(o,t),a=qf(a),o=qf(o),t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Xd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Xd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const M=w+m+a,x=w+p+o,I=Gf(r,r.VERTEX_SHADER,M),U=Gf(r,r.FRAGMENT_SHADER,x);r.attachShader(_,I),r.attachShader(_,U),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function R(D){if(n.debug.checkShaderErrors){const te=r.getProgramInfoLog(_).trim(),X=r.getShaderInfoLog(I).trim(),ae=r.getShaderInfoLog(U).trim();let oe=!0,J=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(oe=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,_,I,U);else{const Q=Xf(r,I,"vertex"),V=Xf(r,U,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+te+`
`+Q+`
`+V)}else te!==""?console.warn("THREE.WebGLProgram: Program Info Log:",te):(X===""||ae==="")&&(J=!1);J&&(D.diagnostics={runnable:oe,programLog:te,vertexShader:{log:X,prefix:m},fragmentShader:{log:ae,prefix:p}})}r.deleteShader(I),r.deleteShader(U),O=new Uo(r,_),T=Yw(r,_)}let O;this.getUniforms=function(){return O===void 0&&R(this),O};let T;this.getAttributes=function(){return T===void 0&&R(this),T};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=r.getProgramParameter(_,Bw)),b},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=kw++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=I,this.fragmentShader=U,this}let sT=0;class aT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new oT(e),t.set(e,i)),i}}class oT{constructor(e){this.id=sT++,this.code=e,this.usedTimes=0}}function lT(n,e,t,i,r,s,a){const o=new ig,l=new aT,c=new Set,u=[],h=r.logarithmicDepthBuffer,d=r.vertexTextures;let f=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(T){return c.add(T),T===0?"uv":`uv${T}`}function m(T,b,D,te,X){const ae=te.fog,oe=X.geometry,J=T.isMeshStandardMaterial?te.environment:null,Q=(T.isMeshStandardMaterial?t:e).get(T.envMap||J),V=Q&&Q.mapping===pl?Q.image.height:null,me=g[T.type];T.precision!==null&&(f=r.getMaxPrecision(T.precision),f!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",f,"instead."));const Se=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,De=Se!==void 0?Se.length:0;let Ue=0;oe.morphAttributes.position!==void 0&&(Ue=1),oe.morphAttributes.normal!==void 0&&(Ue=2),oe.morphAttributes.color!==void 0&&(Ue=3);let $e,re,ge,Me;if(me){const dt=ei[me];$e=dt.vertexShader,re=dt.fragmentShader}else $e=T.vertexShader,re=T.fragmentShader,l.update(T),ge=l.getVertexShaderID(T),Me=l.getFragmentShaderID(T);const F=n.getRenderTarget(),se=n.state.buffers.depth.getReversed(),ce=X.isInstancedMesh===!0,he=X.isBatchedMesh===!0,Oe=!!T.map,A=!!T.matcap,C=!!Q,y=!!T.aoMap,ie=!!T.lightMap,K=!!T.bumpMap,j=!!T.normalMap,ee=!!T.displacementMap,de=!!T.emissiveMap,Z=!!T.metalnessMap,S=!!T.roughnessMap,v=T.anisotropy>0,L=T.clearcoat>0,z=T.dispersion>0,Y=T.iridescence>0,G=T.sheen>0,ve=T.transmission>0,fe=v&&!!T.anisotropyMap,xe=L&&!!T.clearcoatMap,He=L&&!!T.clearcoatNormalMap,pe=L&&!!T.clearcoatRoughnessMap,be=Y&&!!T.iridescenceMap,Fe=Y&&!!T.iridescenceThicknessMap,ze=G&&!!T.sheenColorMap,ye=G&&!!T.sheenRoughnessMap,Ge=!!T.specularMap,Ye=!!T.specularColorMap,mt=!!T.specularIntensityMap,B=ve&&!!T.transmissionMap,Te=ve&&!!T.thicknessMap,ne=!!T.gradientMap,ue=!!T.alphaMap,Re=T.alphaTest>0,Ae=!!T.alphaHash,Ke=!!T.extensions;let Tt=$i;T.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(Tt=n.toneMapping);const Gt={shaderID:me,shaderType:T.type,shaderName:T.name,vertexShader:$e,fragmentShader:re,defines:T.defines,customVertexShaderID:ge,customFragmentShaderID:Me,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:f,batching:he,batchingColor:he&&X._colorsTexture!==null,instancing:ce,instancingColor:ce&&X.instanceColor!==null,instancingMorph:ce&&X.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:F===null?n.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:Ct,alphaToCoverage:!!T.alphaToCoverage,map:Oe,matcap:A,envMap:C,envMapMode:C&&Q.mapping,envMapCubeUVHeight:V,aoMap:y,lightMap:ie,bumpMap:K,normalMap:j,displacementMap:d&&ee,emissiveMap:de,normalMapObjectSpace:j&&T.normalMapType===Yx,normalMapTangentSpace:j&&T.normalMapType===ml,metalnessMap:Z,roughnessMap:S,anisotropy:v,anisotropyMap:fe,clearcoat:L,clearcoatMap:xe,clearcoatNormalMap:He,clearcoatRoughnessMap:pe,dispersion:z,iridescence:Y,iridescenceMap:be,iridescenceThicknessMap:Fe,sheen:G,sheenColorMap:ze,sheenRoughnessMap:ye,specularMap:Ge,specularColorMap:Ye,specularIntensityMap:mt,transmission:ve,transmissionMap:B,thicknessMap:Te,gradientMap:ne,opaque:T.transparent===!1&&T.blending===Mn&&T.alphaToCoverage===!1,alphaMap:ue,alphaTest:Re,alphaHash:Ae,combine:T.combine,mapUv:Oe&&_(T.map.channel),aoMapUv:y&&_(T.aoMap.channel),lightMapUv:ie&&_(T.lightMap.channel),bumpMapUv:K&&_(T.bumpMap.channel),normalMapUv:j&&_(T.normalMap.channel),displacementMapUv:ee&&_(T.displacementMap.channel),emissiveMapUv:de&&_(T.emissiveMap.channel),metalnessMapUv:Z&&_(T.metalnessMap.channel),roughnessMapUv:S&&_(T.roughnessMap.channel),anisotropyMapUv:fe&&_(T.anisotropyMap.channel),clearcoatMapUv:xe&&_(T.clearcoatMap.channel),clearcoatNormalMapUv:He&&_(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:pe&&_(T.clearcoatRoughnessMap.channel),iridescenceMapUv:be&&_(T.iridescenceMap.channel),iridescenceThicknessMapUv:Fe&&_(T.iridescenceThicknessMap.channel),sheenColorMapUv:ze&&_(T.sheenColorMap.channel),sheenRoughnessMapUv:ye&&_(T.sheenRoughnessMap.channel),specularMapUv:Ge&&_(T.specularMap.channel),specularColorMapUv:Ye&&_(T.specularColorMap.channel),specularIntensityMapUv:mt&&_(T.specularIntensityMap.channel),transmissionMapUv:B&&_(T.transmissionMap.channel),thicknessMapUv:Te&&_(T.thicknessMap.channel),alphaMapUv:ue&&_(T.alphaMap.channel),vertexTangents:!!oe.attributes.tangent&&(j||v),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,pointsUvs:X.isPoints===!0&&!!oe.attributes.uv&&(Oe||ue),fog:!!ae,useFog:T.fog===!0,fogExp2:!!ae&&ae.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:se,skinning:X.isSkinnedMesh===!0,morphTargets:oe.morphAttributes.position!==void 0,morphNormals:oe.morphAttributes.normal!==void 0,morphColors:oe.morphAttributes.color!==void 0,morphTargetsCount:De,morphTextureStride:Ue,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:T.dithering,shadowMapEnabled:n.shadowMap.enabled&&D.length>0,shadowMapType:n.shadowMap.type,toneMapping:Tt,decodeVideoTexture:Oe&&T.map.isVideoTexture===!0&&Ze.getTransfer(T.map.colorSpace)===ft,decodeVideoTextureEmissive:de&&T.emissiveMap.isVideoTexture===!0&&Ze.getTransfer(T.emissiveMap.colorSpace)===ft,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===xn,flipSided:T.side===en,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Ke&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ke&&T.extensions.multiDraw===!0||he)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Gt.vertexUv1s=c.has(1),Gt.vertexUv2s=c.has(2),Gt.vertexUv3s=c.has(3),c.clear(),Gt}function p(T){const b=[];if(T.shaderID?b.push(T.shaderID):(b.push(T.customVertexShaderID),b.push(T.customFragmentShaderID)),T.defines!==void 0)for(const D in T.defines)b.push(D),b.push(T.defines[D]);return T.isRawShaderMaterial===!1&&(w(b,T),M(b,T),b.push(n.outputColorSpace)),b.push(T.customProgramCacheKey),b.join()}function w(T,b){T.push(b.precision),T.push(b.outputColorSpace),T.push(b.envMapMode),T.push(b.envMapCubeUVHeight),T.push(b.mapUv),T.push(b.alphaMapUv),T.push(b.lightMapUv),T.push(b.aoMapUv),T.push(b.bumpMapUv),T.push(b.normalMapUv),T.push(b.displacementMapUv),T.push(b.emissiveMapUv),T.push(b.metalnessMapUv),T.push(b.roughnessMapUv),T.push(b.anisotropyMapUv),T.push(b.clearcoatMapUv),T.push(b.clearcoatNormalMapUv),T.push(b.clearcoatRoughnessMapUv),T.push(b.iridescenceMapUv),T.push(b.iridescenceThicknessMapUv),T.push(b.sheenColorMapUv),T.push(b.sheenRoughnessMapUv),T.push(b.specularMapUv),T.push(b.specularColorMapUv),T.push(b.specularIntensityMapUv),T.push(b.transmissionMapUv),T.push(b.thicknessMapUv),T.push(b.combine),T.push(b.fogExp2),T.push(b.sizeAttenuation),T.push(b.morphTargetsCount),T.push(b.morphAttributeCount),T.push(b.numDirLights),T.push(b.numPointLights),T.push(b.numSpotLights),T.push(b.numSpotLightMaps),T.push(b.numHemiLights),T.push(b.numRectAreaLights),T.push(b.numDirLightShadows),T.push(b.numPointLightShadows),T.push(b.numSpotLightShadows),T.push(b.numSpotLightShadowsWithMaps),T.push(b.numLightProbes),T.push(b.shadowMapType),T.push(b.toneMapping),T.push(b.numClippingPlanes),T.push(b.numClipIntersection),T.push(b.depthPacking)}function M(T,b){o.disableAll(),b.supportsVertexTextures&&o.enable(0),b.instancing&&o.enable(1),b.instancingColor&&o.enable(2),b.instancingMorph&&o.enable(3),b.matcap&&o.enable(4),b.envMap&&o.enable(5),b.normalMapObjectSpace&&o.enable(6),b.normalMapTangentSpace&&o.enable(7),b.clearcoat&&o.enable(8),b.iridescence&&o.enable(9),b.alphaTest&&o.enable(10),b.vertexColors&&o.enable(11),b.vertexAlphas&&o.enable(12),b.vertexUv1s&&o.enable(13),b.vertexUv2s&&o.enable(14),b.vertexUv3s&&o.enable(15),b.vertexTangents&&o.enable(16),b.anisotropy&&o.enable(17),b.alphaHash&&o.enable(18),b.batching&&o.enable(19),b.dispersion&&o.enable(20),b.batchingColor&&o.enable(21),T.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reverseDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),T.push(o.mask)}function x(T){const b=g[T.type];let D;if(b){const te=ei[b];D=_l.clone(te.uniforms)}else D=T.uniforms;return D}function I(T,b){let D;for(let te=0,X=u.length;te<X;te++){const ae=u[te];if(ae.cacheKey===b){D=ae,++D.usedTimes;break}}return D===void 0&&(D=new rT(n,b,T,s),u.push(D)),D}function U(T){if(--T.usedTimes===0){const b=u.indexOf(T);u[b]=u[u.length-1],u.pop(),T.destroy()}}function R(T){l.remove(T)}function O(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:I,releaseProgram:U,releaseShaderCache:R,programs:u,dispose:O}}function cT(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,l){n.get(a)[o]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function hT(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Kf(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Zf(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(h,d,f,g,_,m){let p=n[e];return p===void 0?(p={id:h.id,object:h,geometry:d,material:f,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},n[e]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=_,p.group=m),e++,p}function o(h,d,f,g,_,m){const p=a(h,d,f,g,_,m);f.transmission>0?i.push(p):f.transparent===!0?r.push(p):t.push(p)}function l(h,d,f,g,_,m){const p=a(h,d,f,g,_,m);f.transmission>0?i.unshift(p):f.transparent===!0?r.unshift(p):t.unshift(p)}function c(h,d){t.length>1&&t.sort(h||hT),i.length>1&&i.sort(d||Kf),r.length>1&&r.sort(d||Kf)}function u(){for(let h=e,d=n.length;h<d;h++){const f=n[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function uT(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new Zf,n.set(i,[a])):r>=s.length?(a=new Zf,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function dT(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new N,color:new Ce};break;case"SpotLight":t={position:new N,direction:new N,color:new Ce,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new Ce,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new Ce,groundColor:new Ce};break;case"RectAreaLight":t={color:new Ce,position:new N,halfWidth:new N,halfHeight:new N};break}return n[e.id]=t,t}}}function fT(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let pT=0;function mT(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function gT(n){const e=new dT,t=fT(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new N);const r=new N,s=new Ne,a=new Ne;function o(c){let u=0,h=0,d=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,w=0,M=0,x=0,I=0,U=0,R=0;c.sort(mT);for(let T=0,b=c.length;T<b;T++){const D=c[T],te=D.color,X=D.intensity,ae=D.distance,oe=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)u+=te.r*X,h+=te.g*X,d+=te.b*X;else if(D.isLightProbe){for(let J=0;J<9;J++)i.probe[J].addScaledVector(D.sh.coefficients[J],X);R++}else if(D.isDirectionalLight){const J=e.get(D);if(J.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const Q=D.shadow,V=t.get(D);V.shadowIntensity=Q.intensity,V.shadowBias=Q.bias,V.shadowNormalBias=Q.normalBias,V.shadowRadius=Q.radius,V.shadowMapSize=Q.mapSize,i.directionalShadow[f]=V,i.directionalShadowMap[f]=oe,i.directionalShadowMatrix[f]=D.shadow.matrix,w++}i.directional[f]=J,f++}else if(D.isSpotLight){const J=e.get(D);J.position.setFromMatrixPosition(D.matrixWorld),J.color.copy(te).multiplyScalar(X),J.distance=ae,J.coneCos=Math.cos(D.angle),J.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),J.decay=D.decay,i.spot[_]=J;const Q=D.shadow;if(D.map&&(i.spotLightMap[I]=D.map,I++,Q.updateMatrices(D),D.castShadow&&U++),i.spotLightMatrix[_]=Q.matrix,D.castShadow){const V=t.get(D);V.shadowIntensity=Q.intensity,V.shadowBias=Q.bias,V.shadowNormalBias=Q.normalBias,V.shadowRadius=Q.radius,V.shadowMapSize=Q.mapSize,i.spotShadow[_]=V,i.spotShadowMap[_]=oe,x++}_++}else if(D.isRectAreaLight){const J=e.get(D);J.color.copy(te).multiplyScalar(X),J.halfWidth.set(D.width*.5,0,0),J.halfHeight.set(0,D.height*.5,0),i.rectArea[m]=J,m++}else if(D.isPointLight){const J=e.get(D);if(J.color.copy(D.color).multiplyScalar(D.intensity),J.distance=D.distance,J.decay=D.decay,D.castShadow){const Q=D.shadow,V=t.get(D);V.shadowIntensity=Q.intensity,V.shadowBias=Q.bias,V.shadowNormalBias=Q.normalBias,V.shadowRadius=Q.radius,V.shadowMapSize=Q.mapSize,V.shadowCameraNear=Q.camera.near,V.shadowCameraFar=Q.camera.far,i.pointShadow[g]=V,i.pointShadowMap[g]=oe,i.pointShadowMatrix[g]=D.shadow.matrix,M++}i.point[g]=J,g++}else if(D.isHemisphereLight){const J=e.get(D);J.skyColor.copy(D.color).multiplyScalar(X),J.groundColor.copy(D.groundColor).multiplyScalar(X),i.hemi[p]=J,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ee.LTC_FLOAT_1,i.rectAreaLTC2=Ee.LTC_FLOAT_2):(i.rectAreaLTC1=Ee.LTC_HALF_1,i.rectAreaLTC2=Ee.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=d;const O=i.hash;(O.directionalLength!==f||O.pointLength!==g||O.spotLength!==_||O.rectAreaLength!==m||O.hemiLength!==p||O.numDirectionalShadows!==w||O.numPointShadows!==M||O.numSpotShadows!==x||O.numSpotMaps!==I||O.numLightProbes!==R)&&(i.directional.length=f,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=w,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=x+I-U,i.spotLightMap.length=I,i.numSpotLightShadowsWithMaps=U,i.numLightProbes=R,O.directionalLength=f,O.pointLength=g,O.spotLength=_,O.rectAreaLength=m,O.hemiLength=p,O.numDirectionalShadows=w,O.numPointShadows=M,O.numSpotShadows=x,O.numSpotMaps=I,O.numLightProbes=R,i.version=pT++)}function l(c,u){let h=0,d=0,f=0,g=0,_=0;const m=u.matrixWorldInverse;for(let p=0,w=c.length;p<w;p++){const M=c[p];if(M.isDirectionalLight){const x=i.directional[h];x.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(m),h++}else if(M.isSpotLight){const x=i.spot[f];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(m),f++}else if(M.isRectAreaLight){const x=i.rectArea[g];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(m),a.identity(),s.copy(M.matrixWorld),s.premultiply(m),a.extractRotation(s),x.halfWidth.set(M.width*.5,0,0),x.halfHeight.set(0,M.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),g++}else if(M.isPointLight){const x=i.point[d];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(m),d++}else if(M.isHemisphereLight){const x=i.hemi[_];x.direction.setFromMatrixPosition(M.matrixWorld),x.direction.transformDirection(m),_++}}}return{setup:o,setupView:l,state:i}}function Jf(n){const e=new gT(n),t=[],i=[];function r(u){c.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function a(u){i.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function _T(n){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Jf(n),e.set(r,[o])):s>=a.length?(o=new Jf(n),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const vT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,xT=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function yT(n,e,t){let i=new wu;const r=new Pe,s=new Pe,a=new tt,o=new Da({depthPacking:Ra}),l=new vM,c={},u=t.maxTextureSize,h={[ai]:en,[en]:ai,[xn]:xn},d=new at({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Pe},radius:{value:4}},vertexShader:vT,fragmentShader:xT}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new Ln;g.setAttribute("position",new ri(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new kt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ri;let p=this.type;this.render=function(U,R,O){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||U.length===0)return;const T=n.getRenderTarget(),b=n.getActiveCubeFace(),D=n.getActiveMipmapLevel(),te=n.state;te.setBlending(Pt),te.buffers.color.setClear(1,1,1,1),te.buffers.depth.setTest(!0),te.setScissorTest(!1);const X=p!==vi&&this.type===vi,ae=p===vi&&this.type!==vi;for(let oe=0,J=U.length;oe<J;oe++){const Q=U[oe],V=Q.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;r.copy(V.mapSize);const me=V.getFrameExtents();if(r.multiply(me),s.copy(V.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/me.x),r.x=s.x*me.x,V.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/me.y),r.y=s.y*me.y,V.mapSize.y=s.y)),V.map===null||X===!0||ae===!0){const De=this.type!==vi?{minFilter:Sn,magFilter:Sn}:{};V.map!==null&&V.map.dispose(),V.map=new wt(r.x,r.y,De),V.map.texture.name=Q.name+".shadowMap",V.camera.updateProjectionMatrix()}n.setRenderTarget(V.map),n.clear();const Se=V.getViewportCount();for(let De=0;De<Se;De++){const Ue=V.getViewport(De);a.set(s.x*Ue.x,s.y*Ue.y,s.x*Ue.z,s.y*Ue.w),te.viewport(a),V.updateMatrices(Q,De),i=V.getFrustum(),x(R,O,V.camera,Q,this.type)}V.isPointLightShadow!==!0&&this.type===vi&&w(V,O),V.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(T,b,D)};function w(U,R){const O=e.update(_);d.defines.VSM_SAMPLES!==U.blurSamples&&(d.defines.VSM_SAMPLES=U.blurSamples,f.defines.VSM_SAMPLES=U.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),U.mapPass===null&&(U.mapPass=new wt(r.x,r.y)),d.uniforms.shadow_pass.value=U.map.texture,d.uniforms.resolution.value=U.mapSize,d.uniforms.radius.value=U.radius,n.setRenderTarget(U.mapPass),n.clear(),n.renderBufferDirect(R,null,O,d,_,null),f.uniforms.shadow_pass.value=U.mapPass.texture,f.uniforms.resolution.value=U.mapSize,f.uniforms.radius.value=U.radius,n.setRenderTarget(U.map),n.clear(),n.renderBufferDirect(R,null,O,f,_,null)}function M(U,R,O,T){let b=null;const D=O.isPointLight===!0?U.customDistanceMaterial:U.customDepthMaterial;if(D!==void 0)b=D;else if(b=O.isPointLight===!0?l:o,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const te=b.uuid,X=R.uuid;let ae=c[te];ae===void 0&&(ae={},c[te]=ae);let oe=ae[X];oe===void 0&&(oe=b.clone(),ae[X]=oe,R.addEventListener("dispose",I)),b=oe}if(b.visible=R.visible,b.wireframe=R.wireframe,T===vi?b.side=R.shadowSide!==null?R.shadowSide:R.side:b.side=R.shadowSide!==null?R.shadowSide:h[R.side],b.alphaMap=R.alphaMap,b.alphaTest=R.alphaTest,b.map=R.map,b.clipShadows=R.clipShadows,b.clippingPlanes=R.clippingPlanes,b.clipIntersection=R.clipIntersection,b.displacementMap=R.displacementMap,b.displacementScale=R.displacementScale,b.displacementBias=R.displacementBias,b.wireframeLinewidth=R.wireframeLinewidth,b.linewidth=R.linewidth,O.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const te=n.properties.get(b);te.light=O}return b}function x(U,R,O,T,b){if(U.visible===!1)return;if(U.layers.test(R.layers)&&(U.isMesh||U.isLine||U.isPoints)&&(U.castShadow||U.receiveShadow&&b===vi)&&(!U.frustumCulled||i.intersectsObject(U))){U.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,U.matrixWorld);const X=e.update(U),ae=U.material;if(Array.isArray(ae)){const oe=X.groups;for(let J=0,Q=oe.length;J<Q;J++){const V=oe[J],me=ae[V.materialIndex];if(me&&me.visible){const Se=M(U,me,T,b);U.onBeforeShadow(n,U,R,O,X,Se,V),n.renderBufferDirect(O,null,X,Se,U,V),U.onAfterShadow(n,U,R,O,X,Se,V)}}}else if(ae.visible){const oe=M(U,ae,T,b);U.onBeforeShadow(n,U,R,O,X,oe,null),n.renderBufferDirect(O,null,X,oe,U,null),U.onAfterShadow(n,U,R,O,X,oe,null)}}const te=U.children;for(let X=0,ae=te.length;X<ae;X++)x(te[X],R,O,T,b)}function I(U){U.target.removeEventListener("dispose",I);for(const O in c){const T=c[O],b=U.target.uuid;b in T&&(T[b].dispose(),delete T[b])}}}const MT={[eh]:th,[nh]:sh,[ih]:ah,[ps]:rh,[th]:eh,[sh]:nh,[ah]:ih,[rh]:ps};function ST(n,e){function t(){let B=!1;const Te=new tt;let ne=null;const ue=new tt(0,0,0,0);return{setMask:function(Re){ne!==Re&&!B&&(n.colorMask(Re,Re,Re,Re),ne=Re)},setLocked:function(Re){B=Re},setClear:function(Re,Ae,Ke,Tt,Gt){Gt===!0&&(Re*=Tt,Ae*=Tt,Ke*=Tt),Te.set(Re,Ae,Ke,Tt),ue.equals(Te)===!1&&(n.clearColor(Re,Ae,Ke,Tt),ue.copy(Te))},reset:function(){B=!1,ne=null,ue.set(-1,0,0,0)}}}function i(){let B=!1,Te=!1,ne=null,ue=null,Re=null;return{setReversed:function(Ae){if(Te!==Ae){const Ke=e.get("EXT_clip_control");Ae?Ke.clipControlEXT(Ke.LOWER_LEFT_EXT,Ke.ZERO_TO_ONE_EXT):Ke.clipControlEXT(Ke.LOWER_LEFT_EXT,Ke.NEGATIVE_ONE_TO_ONE_EXT),Te=Ae;const Tt=Re;Re=null,this.setClear(Tt)}},getReversed:function(){return Te},setTest:function(Ae){Ae?F(n.DEPTH_TEST):se(n.DEPTH_TEST)},setMask:function(Ae){ne!==Ae&&!B&&(n.depthMask(Ae),ne=Ae)},setFunc:function(Ae){if(Te&&(Ae=MT[Ae]),ue!==Ae){switch(Ae){case eh:n.depthFunc(n.NEVER);break;case th:n.depthFunc(n.ALWAYS);break;case nh:n.depthFunc(n.LESS);break;case ps:n.depthFunc(n.LEQUAL);break;case ih:n.depthFunc(n.EQUAL);break;case rh:n.depthFunc(n.GEQUAL);break;case sh:n.depthFunc(n.GREATER);break;case ah:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ue=Ae}},setLocked:function(Ae){B=Ae},setClear:function(Ae){Re!==Ae&&(Te&&(Ae=1-Ae),n.clearDepth(Ae),Re=Ae)},reset:function(){B=!1,ne=null,ue=null,Re=null,Te=!1}}}function r(){let B=!1,Te=null,ne=null,ue=null,Re=null,Ae=null,Ke=null,Tt=null,Gt=null;return{setTest:function(dt){B||(dt?F(n.STENCIL_TEST):se(n.STENCIL_TEST))},setMask:function(dt){Te!==dt&&!B&&(n.stencilMask(dt),Te=dt)},setFunc:function(dt,Nn,li){(ne!==dt||ue!==Nn||Re!==li)&&(n.stencilFunc(dt,Nn,li),ne=dt,ue=Nn,Re=li)},setOp:function(dt,Nn,li){(Ae!==dt||Ke!==Nn||Tt!==li)&&(n.stencilOp(dt,Nn,li),Ae=dt,Ke=Nn,Tt=li)},setLocked:function(dt){B=dt},setClear:function(dt){Gt!==dt&&(n.clearStencil(dt),Gt=dt)},reset:function(){B=!1,Te=null,ne=null,ue=null,Re=null,Ae=null,Ke=null,Tt=null,Gt=null}}}const s=new t,a=new i,o=new r,l=new WeakMap,c=new WeakMap;let u={},h={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,w=null,M=null,x=null,I=null,U=null,R=new Ce(0,0,0),O=0,T=!1,b=null,D=null,te=null,X=null,ae=null;const oe=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let J=!1,Q=0;const V=n.getParameter(n.VERSION);V.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(V)[1]),J=Q>=1):V.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),J=Q>=2);let me=null,Se={};const De=n.getParameter(n.SCISSOR_BOX),Ue=n.getParameter(n.VIEWPORT),$e=new tt().fromArray(De),re=new tt().fromArray(Ue);function ge(B,Te,ne,ue){const Re=new Uint8Array(4),Ae=n.createTexture();n.bindTexture(B,Ae),n.texParameteri(B,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(B,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ke=0;Ke<ne;Ke++)B===n.TEXTURE_3D||B===n.TEXTURE_2D_ARRAY?n.texImage3D(Te,0,n.RGBA,1,1,ue,0,n.RGBA,n.UNSIGNED_BYTE,Re):n.texImage2D(Te+Ke,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Re);return Ae}const Me={};Me[n.TEXTURE_2D]=ge(n.TEXTURE_2D,n.TEXTURE_2D,1),Me[n.TEXTURE_CUBE_MAP]=ge(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Me[n.TEXTURE_2D_ARRAY]=ge(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Me[n.TEXTURE_3D]=ge(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),F(n.DEPTH_TEST),a.setFunc(ps),K(!1),j(Nd),F(n.CULL_FACE),y(Pt);function F(B){u[B]!==!0&&(n.enable(B),u[B]=!0)}function se(B){u[B]!==!1&&(n.disable(B),u[B]=!1)}function ce(B,Te){return h[B]!==Te?(n.bindFramebuffer(B,Te),h[B]=Te,B===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=Te),B===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=Te),!0):!1}function he(B,Te){let ne=f,ue=!1;if(B){ne=d.get(Te),ne===void 0&&(ne=[],d.set(Te,ne));const Re=B.textures;if(ne.length!==Re.length||ne[0]!==n.COLOR_ATTACHMENT0){for(let Ae=0,Ke=Re.length;Ae<Ke;Ae++)ne[Ae]=n.COLOR_ATTACHMENT0+Ae;ne.length=Re.length,ue=!0}}else ne[0]!==n.BACK&&(ne[0]=n.BACK,ue=!0);ue&&n.drawBuffers(ne)}function Oe(B){return g!==B?(n.useProgram(B),g=B,!0):!1}const A={[xr]:n.FUNC_ADD,[bx]:n.FUNC_SUBTRACT,[wx]:n.FUNC_REVERSE_SUBTRACT};A[Tx]=n.MIN,A[Ax]=n.MAX;const C={[Cx]:n.ZERO,[Rx]:n.ONE,[Px]:n.SRC_COLOR,[Jc]:n.SRC_ALPHA,[Fx]:n.SRC_ALPHA_SATURATE,[Ux]:n.DST_COLOR,[Ix]:n.DST_ALPHA,[Dx]:n.ONE_MINUS_SRC_COLOR,[Qc]:n.ONE_MINUS_SRC_ALPHA,[Nx]:n.ONE_MINUS_DST_COLOR,[Lx]:n.ONE_MINUS_DST_ALPHA,[Ox]:n.CONSTANT_COLOR,[Bx]:n.ONE_MINUS_CONSTANT_COLOR,[kx]:n.CONSTANT_ALPHA,[Hx]:n.ONE_MINUS_CONSTANT_ALPHA};function y(B,Te,ne,ue,Re,Ae,Ke,Tt,Gt,dt){if(B===Pt){_===!0&&(se(n.BLEND),_=!1);return}if(_===!1&&(F(n.BLEND),_=!0),B!==Ex){if(B!==m||dt!==T){if((p!==xr||x!==xr)&&(n.blendEquation(n.FUNC_ADD),p=xr,x=xr),dt)switch(B){case Mn:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Fd:n.blendFunc(n.ONE,n.ONE);break;case Od:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Bd:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case Mn:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Fd:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Od:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Bd:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}w=null,M=null,I=null,U=null,R.set(0,0,0),O=0,m=B,T=dt}return}Re=Re||Te,Ae=Ae||ne,Ke=Ke||ue,(Te!==p||Re!==x)&&(n.blendEquationSeparate(A[Te],A[Re]),p=Te,x=Re),(ne!==w||ue!==M||Ae!==I||Ke!==U)&&(n.blendFuncSeparate(C[ne],C[ue],C[Ae],C[Ke]),w=ne,M=ue,I=Ae,U=Ke),(Tt.equals(R)===!1||Gt!==O)&&(n.blendColor(Tt.r,Tt.g,Tt.b,Gt),R.copy(Tt),O=Gt),m=B,T=!1}function ie(B,Te){B.side===xn?se(n.CULL_FACE):F(n.CULL_FACE);let ne=B.side===en;Te&&(ne=!ne),K(ne),B.blending===Mn&&B.transparent===!1?y(Pt):y(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),a.setFunc(B.depthFunc),a.setTest(B.depthTest),a.setMask(B.depthWrite),s.setMask(B.colorWrite);const ue=B.stencilWrite;o.setTest(ue),ue&&(o.setMask(B.stencilWriteMask),o.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),o.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),de(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?F(n.SAMPLE_ALPHA_TO_COVERAGE):se(n.SAMPLE_ALPHA_TO_COVERAGE)}function K(B){b!==B&&(B?n.frontFace(n.CW):n.frontFace(n.CCW),b=B)}function j(B){B!==yx?(F(n.CULL_FACE),B!==D&&(B===Nd?n.cullFace(n.BACK):B===Mx?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):se(n.CULL_FACE),D=B}function ee(B){B!==te&&(J&&n.lineWidth(B),te=B)}function de(B,Te,ne){B?(F(n.POLYGON_OFFSET_FILL),(X!==Te||ae!==ne)&&(n.polygonOffset(Te,ne),X=Te,ae=ne)):se(n.POLYGON_OFFSET_FILL)}function Z(B){B?F(n.SCISSOR_TEST):se(n.SCISSOR_TEST)}function S(B){B===void 0&&(B=n.TEXTURE0+oe-1),me!==B&&(n.activeTexture(B),me=B)}function v(B,Te,ne){ne===void 0&&(me===null?ne=n.TEXTURE0+oe-1:ne=me);let ue=Se[ne];ue===void 0&&(ue={type:void 0,texture:void 0},Se[ne]=ue),(ue.type!==B||ue.texture!==Te)&&(me!==ne&&(n.activeTexture(ne),me=ne),n.bindTexture(B,Te||Me[B]),ue.type=B,ue.texture=Te)}function L(){const B=Se[me];B!==void 0&&B.type!==void 0&&(n.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function z(){try{n.compressedTexImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Y(){try{n.compressedTexImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function G(){try{n.texSubImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ve(){try{n.texSubImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function fe(){try{n.compressedTexSubImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function xe(){try{n.compressedTexSubImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function He(){try{n.texStorage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function pe(){try{n.texStorage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function be(){try{n.texImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Fe(){try{n.texImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ze(B){$e.equals(B)===!1&&(n.scissor(B.x,B.y,B.z,B.w),$e.copy(B))}function ye(B){re.equals(B)===!1&&(n.viewport(B.x,B.y,B.z,B.w),re.copy(B))}function Ge(B,Te){let ne=c.get(Te);ne===void 0&&(ne=new WeakMap,c.set(Te,ne));let ue=ne.get(B);ue===void 0&&(ue=n.getUniformBlockIndex(Te,B.name),ne.set(B,ue))}function Ye(B,Te){const ue=c.get(Te).get(B);l.get(Te)!==ue&&(n.uniformBlockBinding(Te,ue,B.__bindingPointIndex),l.set(Te,ue))}function mt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},me=null,Se={},h={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,w=null,M=null,x=null,I=null,U=null,R=new Ce(0,0,0),O=0,T=!1,b=null,D=null,te=null,X=null,ae=null,$e.set(0,0,n.canvas.width,n.canvas.height),re.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:F,disable:se,bindFramebuffer:ce,drawBuffers:he,useProgram:Oe,setBlending:y,setMaterial:ie,setFlipSided:K,setCullFace:j,setLineWidth:ee,setPolygonOffset:de,setScissorTest:Z,activeTexture:S,bindTexture:v,unbindTexture:L,compressedTexImage2D:z,compressedTexImage3D:Y,texImage2D:be,texImage3D:Fe,updateUBOMapping:Ge,uniformBlockBinding:Ye,texStorage2D:He,texStorage3D:pe,texSubImage2D:G,texSubImage3D:ve,compressedTexSubImage2D:fe,compressedTexSubImage3D:xe,scissor:ze,viewport:ye,reset:mt}}function ET(n,e,t,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Pe,u=new WeakMap;let h;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(S,v){return f?new OffscreenCanvas(S,v):va("canvas")}function _(S,v,L){let z=1;const Y=Z(S);if((Y.width>L||Y.height>L)&&(z=L/Math.max(Y.width,Y.height)),z<1)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap||typeof VideoFrame<"u"&&S instanceof VideoFrame){const G=Math.floor(z*Y.width),ve=Math.floor(z*Y.height);h===void 0&&(h=g(G,ve));const fe=v?g(G,ve):h;return fe.width=G,fe.height=ve,fe.getContext("2d").drawImage(S,0,0,G,ve),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Y.width+"x"+Y.height+") to ("+G+"x"+ve+")."),fe}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Y.width+"x"+Y.height+")."),S;return S}function m(S){return S.generateMipmaps}function p(S){n.generateMipmap(S)}function w(S){return S.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:S.isWebGL3DRenderTarget?n.TEXTURE_3D:S.isWebGLArrayRenderTarget||S.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function M(S,v,L,z,Y=!1){if(S!==null){if(n[S]!==void 0)return n[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let G=v;if(v===n.RED&&(L===n.FLOAT&&(G=n.R32F),L===n.HALF_FLOAT&&(G=n.R16F),L===n.UNSIGNED_BYTE&&(G=n.R8)),v===n.RED_INTEGER&&(L===n.UNSIGNED_BYTE&&(G=n.R8UI),L===n.UNSIGNED_SHORT&&(G=n.R16UI),L===n.UNSIGNED_INT&&(G=n.R32UI),L===n.BYTE&&(G=n.R8I),L===n.SHORT&&(G=n.R16I),L===n.INT&&(G=n.R32I)),v===n.RG&&(L===n.FLOAT&&(G=n.RG32F),L===n.HALF_FLOAT&&(G=n.RG16F),L===n.UNSIGNED_BYTE&&(G=n.RG8)),v===n.RG_INTEGER&&(L===n.UNSIGNED_BYTE&&(G=n.RG8UI),L===n.UNSIGNED_SHORT&&(G=n.RG16UI),L===n.UNSIGNED_INT&&(G=n.RG32UI),L===n.BYTE&&(G=n.RG8I),L===n.SHORT&&(G=n.RG16I),L===n.INT&&(G=n.RG32I)),v===n.RGB_INTEGER&&(L===n.UNSIGNED_BYTE&&(G=n.RGB8UI),L===n.UNSIGNED_SHORT&&(G=n.RGB16UI),L===n.UNSIGNED_INT&&(G=n.RGB32UI),L===n.BYTE&&(G=n.RGB8I),L===n.SHORT&&(G=n.RGB16I),L===n.INT&&(G=n.RGB32I)),v===n.RGBA_INTEGER&&(L===n.UNSIGNED_BYTE&&(G=n.RGBA8UI),L===n.UNSIGNED_SHORT&&(G=n.RGBA16UI),L===n.UNSIGNED_INT&&(G=n.RGBA32UI),L===n.BYTE&&(G=n.RGBA8I),L===n.SHORT&&(G=n.RGBA16I),L===n.INT&&(G=n.RGBA32I)),v===n.RGB&&L===n.UNSIGNED_INT_5_9_9_9_REV&&(G=n.RGB9_E5),v===n.RGBA){const ve=Y?jo:Ze.getTransfer(z);L===n.FLOAT&&(G=n.RGBA32F),L===n.HALF_FLOAT&&(G=n.RGBA16F),L===n.UNSIGNED_BYTE&&(G=ve===ft?n.SRGB8_ALPHA8:n.RGBA8),L===n.UNSIGNED_SHORT_4_4_4_4&&(G=n.RGBA4),L===n.UNSIGNED_SHORT_5_5_5_1&&(G=n.RGB5_A1)}return(G===n.R16F||G===n.R32F||G===n.RG16F||G===n.RG32F||G===n.RGBA16F||G===n.RGBA32F)&&e.get("EXT_color_buffer_float"),G}function x(S,v){let L;return S?v===null||v===wr||v===ma?L=n.DEPTH24_STENCIL8:v===ni?L=n.DEPTH32F_STENCIL8:v===pa&&(L=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===wr||v===ma?L=n.DEPTH_COMPONENT24:v===ni?L=n.DEPTH_COMPONENT32F:v===pa&&(L=n.DEPTH_COMPONENT16),L}function I(S,v){return m(S)===!0||S.isFramebufferTexture&&S.minFilter!==Sn&&S.minFilter!==ti?Math.log2(Math.max(v.width,v.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?v.mipmaps.length:1}function U(S){const v=S.target;v.removeEventListener("dispose",U),O(v),v.isVideoTexture&&u.delete(v)}function R(S){const v=S.target;v.removeEventListener("dispose",R),b(v)}function O(S){const v=i.get(S);if(v.__webglInit===void 0)return;const L=S.source,z=d.get(L);if(z){const Y=z[v.__cacheKey];Y.usedTimes--,Y.usedTimes===0&&T(S),Object.keys(z).length===0&&d.delete(L)}i.remove(S)}function T(S){const v=i.get(S);n.deleteTexture(v.__webglTexture);const L=S.source,z=d.get(L);delete z[v.__cacheKey],a.memory.textures--}function b(S){const v=i.get(S);if(S.depthTexture&&(S.depthTexture.dispose(),i.remove(S.depthTexture)),S.isWebGLCubeRenderTarget)for(let z=0;z<6;z++){if(Array.isArray(v.__webglFramebuffer[z]))for(let Y=0;Y<v.__webglFramebuffer[z].length;Y++)n.deleteFramebuffer(v.__webglFramebuffer[z][Y]);else n.deleteFramebuffer(v.__webglFramebuffer[z]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[z])}else{if(Array.isArray(v.__webglFramebuffer))for(let z=0;z<v.__webglFramebuffer.length;z++)n.deleteFramebuffer(v.__webglFramebuffer[z]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let z=0;z<v.__webglColorRenderbuffer.length;z++)v.__webglColorRenderbuffer[z]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[z]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const L=S.textures;for(let z=0,Y=L.length;z<Y;z++){const G=i.get(L[z]);G.__webglTexture&&(n.deleteTexture(G.__webglTexture),a.memory.textures--),i.remove(L[z])}i.remove(S)}let D=0;function te(){D=0}function X(){const S=D;return S>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+r.maxTextures),D+=1,S}function ae(S){const v=[];return v.push(S.wrapS),v.push(S.wrapT),v.push(S.wrapR||0),v.push(S.magFilter),v.push(S.minFilter),v.push(S.anisotropy),v.push(S.internalFormat),v.push(S.format),v.push(S.type),v.push(S.generateMipmaps),v.push(S.premultiplyAlpha),v.push(S.flipY),v.push(S.unpackAlignment),v.push(S.colorSpace),v.join()}function oe(S,v){const L=i.get(S);if(S.isVideoTexture&&ee(S),S.isRenderTargetTexture===!1&&S.version>0&&L.__version!==S.version){const z=S.image;if(z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{re(L,S,v);return}}t.bindTexture(n.TEXTURE_2D,L.__webglTexture,n.TEXTURE0+v)}function J(S,v){const L=i.get(S);if(S.version>0&&L.__version!==S.version){re(L,S,v);return}t.bindTexture(n.TEXTURE_2D_ARRAY,L.__webglTexture,n.TEXTURE0+v)}function Q(S,v){const L=i.get(S);if(S.version>0&&L.__version!==S.version){re(L,S,v);return}t.bindTexture(n.TEXTURE_3D,L.__webglTexture,n.TEXTURE0+v)}function V(S,v){const L=i.get(S);if(S.version>0&&L.__version!==S.version){ge(L,S,v);return}t.bindTexture(n.TEXTURE_CUBE_MAP,L.__webglTexture,n.TEXTURE0+v)}const me={[fa]:n.REPEAT,[Mi]:n.CLAMP_TO_EDGE,[lh]:n.MIRRORED_REPEAT},Se={[Sn]:n.NEAREST,[Wx]:n.NEAREST_MIPMAP_NEAREST,[Ha]:n.NEAREST_MIPMAP_LINEAR,[ti]:n.LINEAR,[kl]:n.LINEAR_MIPMAP_NEAREST,[Mr]:n.LINEAR_MIPMAP_LINEAR},De={[qx]:n.NEVER,[ey]:n.ALWAYS,[$x]:n.LESS,[eg]:n.LEQUAL,[Kx]:n.EQUAL,[Qx]:n.GEQUAL,[Zx]:n.GREATER,[Jx]:n.NOTEQUAL};function Ue(S,v){if(v.type===ni&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===ti||v.magFilter===kl||v.magFilter===Ha||v.magFilter===Mr||v.minFilter===ti||v.minFilter===kl||v.minFilter===Ha||v.minFilter===Mr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(S,n.TEXTURE_WRAP_S,me[v.wrapS]),n.texParameteri(S,n.TEXTURE_WRAP_T,me[v.wrapT]),(S===n.TEXTURE_3D||S===n.TEXTURE_2D_ARRAY)&&n.texParameteri(S,n.TEXTURE_WRAP_R,me[v.wrapR]),n.texParameteri(S,n.TEXTURE_MAG_FILTER,Se[v.magFilter]),n.texParameteri(S,n.TEXTURE_MIN_FILTER,Se[v.minFilter]),v.compareFunction&&(n.texParameteri(S,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(S,n.TEXTURE_COMPARE_FUNC,De[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Sn||v.minFilter!==Ha&&v.minFilter!==Mr||v.type===ni&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){const L=e.get("EXT_texture_filter_anisotropic");n.texParameterf(S,L.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function $e(S,v){let L=!1;S.__webglInit===void 0&&(S.__webglInit=!0,v.addEventListener("dispose",U));const z=v.source;let Y=d.get(z);Y===void 0&&(Y={},d.set(z,Y));const G=ae(v);if(G!==S.__cacheKey){Y[G]===void 0&&(Y[G]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,L=!0),Y[G].usedTimes++;const ve=Y[S.__cacheKey];ve!==void 0&&(Y[S.__cacheKey].usedTimes--,ve.usedTimes===0&&T(v)),S.__cacheKey=G,S.__webglTexture=Y[G].texture}return L}function re(S,v,L){let z=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(z=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(z=n.TEXTURE_3D);const Y=$e(S,v),G=v.source;t.bindTexture(z,S.__webglTexture,n.TEXTURE0+L);const ve=i.get(G);if(G.version!==ve.__version||Y===!0){t.activeTexture(n.TEXTURE0+L);const fe=Ze.getPrimaries(Ze.workingColorSpace),xe=v.colorSpace===Yi?null:Ze.getPrimaries(v.colorSpace),He=v.colorSpace===Yi||fe===xe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,He);let pe=_(v.image,!1,r.maxTextureSize);pe=de(v,pe);const be=s.convert(v.format,v.colorSpace),Fe=s.convert(v.type);let ze=M(v.internalFormat,be,Fe,v.colorSpace,v.isVideoTexture);Ue(z,v);let ye;const Ge=v.mipmaps,Ye=v.isVideoTexture!==!0,mt=ve.__version===void 0||Y===!0,B=G.dataReady,Te=I(v,pe);if(v.isDepthTexture)ze=x(v.format===_a,v.type),mt&&(Ye?t.texStorage2D(n.TEXTURE_2D,1,ze,pe.width,pe.height):t.texImage2D(n.TEXTURE_2D,0,ze,pe.width,pe.height,0,be,Fe,null));else if(v.isDataTexture)if(Ge.length>0){Ye&&mt&&t.texStorage2D(n.TEXTURE_2D,Te,ze,Ge[0].width,Ge[0].height);for(let ne=0,ue=Ge.length;ne<ue;ne++)ye=Ge[ne],Ye?B&&t.texSubImage2D(n.TEXTURE_2D,ne,0,0,ye.width,ye.height,be,Fe,ye.data):t.texImage2D(n.TEXTURE_2D,ne,ze,ye.width,ye.height,0,be,Fe,ye.data);v.generateMipmaps=!1}else Ye?(mt&&t.texStorage2D(n.TEXTURE_2D,Te,ze,pe.width,pe.height),B&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,pe.width,pe.height,be,Fe,pe.data)):t.texImage2D(n.TEXTURE_2D,0,ze,pe.width,pe.height,0,be,Fe,pe.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Ye&&mt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Te,ze,Ge[0].width,Ge[0].height,pe.depth);for(let ne=0,ue=Ge.length;ne<ue;ne++)if(ye=Ge[ne],v.format!==fn)if(be!==null)if(Ye){if(B)if(v.layerUpdates.size>0){const Re=Cf(ye.width,ye.height,v.format,v.type);for(const Ae of v.layerUpdates){const Ke=ye.data.subarray(Ae*Re/ye.data.BYTES_PER_ELEMENT,(Ae+1)*Re/ye.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ne,0,0,Ae,ye.width,ye.height,1,be,Ke)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ne,0,0,0,ye.width,ye.height,pe.depth,be,ye.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ne,ze,ye.width,ye.height,pe.depth,0,ye.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ye?B&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ne,0,0,0,ye.width,ye.height,pe.depth,be,Fe,ye.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ne,ze,ye.width,ye.height,pe.depth,0,be,Fe,ye.data)}else{Ye&&mt&&t.texStorage2D(n.TEXTURE_2D,Te,ze,Ge[0].width,Ge[0].height);for(let ne=0,ue=Ge.length;ne<ue;ne++)ye=Ge[ne],v.format!==fn?be!==null?Ye?B&&t.compressedTexSubImage2D(n.TEXTURE_2D,ne,0,0,ye.width,ye.height,be,ye.data):t.compressedTexImage2D(n.TEXTURE_2D,ne,ze,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ye?B&&t.texSubImage2D(n.TEXTURE_2D,ne,0,0,ye.width,ye.height,be,Fe,ye.data):t.texImage2D(n.TEXTURE_2D,ne,ze,ye.width,ye.height,0,be,Fe,ye.data)}else if(v.isDataArrayTexture)if(Ye){if(mt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Te,ze,pe.width,pe.height,pe.depth),B)if(v.layerUpdates.size>0){const ne=Cf(pe.width,pe.height,v.format,v.type);for(const ue of v.layerUpdates){const Re=pe.data.subarray(ue*ne/pe.data.BYTES_PER_ELEMENT,(ue+1)*ne/pe.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ue,pe.width,pe.height,1,be,Fe,Re)}v.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,pe.width,pe.height,pe.depth,be,Fe,pe.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,ze,pe.width,pe.height,pe.depth,0,be,Fe,pe.data);else if(v.isData3DTexture)Ye?(mt&&t.texStorage3D(n.TEXTURE_3D,Te,ze,pe.width,pe.height,pe.depth),B&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,pe.width,pe.height,pe.depth,be,Fe,pe.data)):t.texImage3D(n.TEXTURE_3D,0,ze,pe.width,pe.height,pe.depth,0,be,Fe,pe.data);else if(v.isFramebufferTexture){if(mt)if(Ye)t.texStorage2D(n.TEXTURE_2D,Te,ze,pe.width,pe.height);else{let ne=pe.width,ue=pe.height;for(let Re=0;Re<Te;Re++)t.texImage2D(n.TEXTURE_2D,Re,ze,ne,ue,0,be,Fe,null),ne>>=1,ue>>=1}}else if(Ge.length>0){if(Ye&&mt){const ne=Z(Ge[0]);t.texStorage2D(n.TEXTURE_2D,Te,ze,ne.width,ne.height)}for(let ne=0,ue=Ge.length;ne<ue;ne++)ye=Ge[ne],Ye?B&&t.texSubImage2D(n.TEXTURE_2D,ne,0,0,be,Fe,ye):t.texImage2D(n.TEXTURE_2D,ne,ze,be,Fe,ye);v.generateMipmaps=!1}else if(Ye){if(mt){const ne=Z(pe);t.texStorage2D(n.TEXTURE_2D,Te,ze,ne.width,ne.height)}B&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,be,Fe,pe)}else t.texImage2D(n.TEXTURE_2D,0,ze,be,Fe,pe);m(v)&&p(z),ve.__version=G.version,v.onUpdate&&v.onUpdate(v)}S.__version=v.version}function ge(S,v,L){if(v.image.length!==6)return;const z=$e(S,v),Y=v.source;t.bindTexture(n.TEXTURE_CUBE_MAP,S.__webglTexture,n.TEXTURE0+L);const G=i.get(Y);if(Y.version!==G.__version||z===!0){t.activeTexture(n.TEXTURE0+L);const ve=Ze.getPrimaries(Ze.workingColorSpace),fe=v.colorSpace===Yi?null:Ze.getPrimaries(v.colorSpace),xe=v.colorSpace===Yi||ve===fe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);const He=v.isCompressedTexture||v.image[0].isCompressedTexture,pe=v.image[0]&&v.image[0].isDataTexture,be=[];for(let ue=0;ue<6;ue++)!He&&!pe?be[ue]=_(v.image[ue],!0,r.maxCubemapSize):be[ue]=pe?v.image[ue].image:v.image[ue],be[ue]=de(v,be[ue]);const Fe=be[0],ze=s.convert(v.format,v.colorSpace),ye=s.convert(v.type),Ge=M(v.internalFormat,ze,ye,v.colorSpace),Ye=v.isVideoTexture!==!0,mt=G.__version===void 0||z===!0,B=Y.dataReady;let Te=I(v,Fe);Ue(n.TEXTURE_CUBE_MAP,v);let ne;if(He){Ye&&mt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Te,Ge,Fe.width,Fe.height);for(let ue=0;ue<6;ue++){ne=be[ue].mipmaps;for(let Re=0;Re<ne.length;Re++){const Ae=ne[Re];v.format!==fn?ze!==null?Ye?B&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Re,0,0,Ae.width,Ae.height,ze,Ae.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Re,Ge,Ae.width,Ae.height,0,Ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ye?B&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Re,0,0,Ae.width,Ae.height,ze,ye,Ae.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Re,Ge,Ae.width,Ae.height,0,ze,ye,Ae.data)}}}else{if(ne=v.mipmaps,Ye&&mt){ne.length>0&&Te++;const ue=Z(be[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Te,Ge,ue.width,ue.height)}for(let ue=0;ue<6;ue++)if(pe){Ye?B&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,be[ue].width,be[ue].height,ze,ye,be[ue].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,Ge,be[ue].width,be[ue].height,0,ze,ye,be[ue].data);for(let Re=0;Re<ne.length;Re++){const Ke=ne[Re].image[ue].image;Ye?B&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Re+1,0,0,Ke.width,Ke.height,ze,ye,Ke.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Re+1,Ge,Ke.width,Ke.height,0,ze,ye,Ke.data)}}else{Ye?B&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,ze,ye,be[ue]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,Ge,ze,ye,be[ue]);for(let Re=0;Re<ne.length;Re++){const Ae=ne[Re];Ye?B&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Re+1,0,0,ze,ye,Ae.image[ue]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Re+1,Ge,ze,ye,Ae.image[ue])}}}m(v)&&p(n.TEXTURE_CUBE_MAP),G.__version=Y.version,v.onUpdate&&v.onUpdate(v)}S.__version=v.version}function Me(S,v,L,z,Y,G){const ve=s.convert(L.format,L.colorSpace),fe=s.convert(L.type),xe=M(L.internalFormat,ve,fe,L.colorSpace),He=i.get(v),pe=i.get(L);if(pe.__renderTarget=v,!He.__hasExternalTextures){const be=Math.max(1,v.width>>G),Fe=Math.max(1,v.height>>G);Y===n.TEXTURE_3D||Y===n.TEXTURE_2D_ARRAY?t.texImage3D(Y,G,xe,be,Fe,v.depth,0,ve,fe,null):t.texImage2D(Y,G,xe,be,Fe,0,ve,fe,null)}t.bindFramebuffer(n.FRAMEBUFFER,S),j(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,z,Y,pe.__webglTexture,0,K(v)):(Y===n.TEXTURE_2D||Y>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Y<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,z,Y,pe.__webglTexture,G),t.bindFramebuffer(n.FRAMEBUFFER,null)}function F(S,v,L){if(n.bindRenderbuffer(n.RENDERBUFFER,S),v.depthBuffer){const z=v.depthTexture,Y=z&&z.isDepthTexture?z.type:null,G=x(v.stencilBuffer,Y),ve=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,fe=K(v);j(v)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,fe,G,v.width,v.height):L?n.renderbufferStorageMultisample(n.RENDERBUFFER,fe,G,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,G,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ve,n.RENDERBUFFER,S)}else{const z=v.textures;for(let Y=0;Y<z.length;Y++){const G=z[Y],ve=s.convert(G.format,G.colorSpace),fe=s.convert(G.type),xe=M(G.internalFormat,ve,fe,G.colorSpace),He=K(v);L&&j(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,He,xe,v.width,v.height):j(v)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,He,xe,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,xe,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function se(S,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,S),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const z=i.get(v.depthTexture);z.__renderTarget=v,(!z.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),oe(v.depthTexture,0);const Y=z.__webglTexture,G=K(v);if(v.depthTexture.format===ga)j(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Y,0,G):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Y,0);else if(v.depthTexture.format===_a)j(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Y,0,G):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Y,0);else throw new Error("Unknown depthTexture format")}function ce(S){const v=i.get(S),L=S.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==S.depthTexture){const z=S.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),z){const Y=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,z.removeEventListener("dispose",Y)};z.addEventListener("dispose",Y),v.__depthDisposeCallback=Y}v.__boundDepthTexture=z}if(S.depthTexture&&!v.__autoAllocateDepthBuffer){if(L)throw new Error("target.depthTexture not supported in Cube render targets");se(v.__webglFramebuffer,S)}else if(L){v.__webglDepthbuffer=[];for(let z=0;z<6;z++)if(t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[z]),v.__webglDepthbuffer[z]===void 0)v.__webglDepthbuffer[z]=n.createRenderbuffer(),F(v.__webglDepthbuffer[z],S,!1);else{const Y=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,G=v.__webglDepthbuffer[z];n.bindRenderbuffer(n.RENDERBUFFER,G),n.framebufferRenderbuffer(n.FRAMEBUFFER,Y,n.RENDERBUFFER,G)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=n.createRenderbuffer(),F(v.__webglDepthbuffer,S,!1);else{const z=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Y=v.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Y),n.framebufferRenderbuffer(n.FRAMEBUFFER,z,n.RENDERBUFFER,Y)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function he(S,v,L){const z=i.get(S);v!==void 0&&Me(z.__webglFramebuffer,S,S.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),L!==void 0&&ce(S)}function Oe(S){const v=S.texture,L=i.get(S),z=i.get(v);S.addEventListener("dispose",R);const Y=S.textures,G=S.isWebGLCubeRenderTarget===!0,ve=Y.length>1;if(ve||(z.__webglTexture===void 0&&(z.__webglTexture=n.createTexture()),z.__version=v.version,a.memory.textures++),G){L.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(v.mipmaps&&v.mipmaps.length>0){L.__webglFramebuffer[fe]=[];for(let xe=0;xe<v.mipmaps.length;xe++)L.__webglFramebuffer[fe][xe]=n.createFramebuffer()}else L.__webglFramebuffer[fe]=n.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){L.__webglFramebuffer=[];for(let fe=0;fe<v.mipmaps.length;fe++)L.__webglFramebuffer[fe]=n.createFramebuffer()}else L.__webglFramebuffer=n.createFramebuffer();if(ve)for(let fe=0,xe=Y.length;fe<xe;fe++){const He=i.get(Y[fe]);He.__webglTexture===void 0&&(He.__webglTexture=n.createTexture(),a.memory.textures++)}if(S.samples>0&&j(S)===!1){L.__webglMultisampledFramebuffer=n.createFramebuffer(),L.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,L.__webglMultisampledFramebuffer);for(let fe=0;fe<Y.length;fe++){const xe=Y[fe];L.__webglColorRenderbuffer[fe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,L.__webglColorRenderbuffer[fe]);const He=s.convert(xe.format,xe.colorSpace),pe=s.convert(xe.type),be=M(xe.internalFormat,He,pe,xe.colorSpace,S.isXRRenderTarget===!0),Fe=K(S);n.renderbufferStorageMultisample(n.RENDERBUFFER,Fe,be,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.RENDERBUFFER,L.__webglColorRenderbuffer[fe])}n.bindRenderbuffer(n.RENDERBUFFER,null),S.depthBuffer&&(L.__webglDepthRenderbuffer=n.createRenderbuffer(),F(L.__webglDepthRenderbuffer,S,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(G){t.bindTexture(n.TEXTURE_CUBE_MAP,z.__webglTexture),Ue(n.TEXTURE_CUBE_MAP,v);for(let fe=0;fe<6;fe++)if(v.mipmaps&&v.mipmaps.length>0)for(let xe=0;xe<v.mipmaps.length;xe++)Me(L.__webglFramebuffer[fe][xe],S,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,xe);else Me(L.__webglFramebuffer[fe],S,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);m(v)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ve){for(let fe=0,xe=Y.length;fe<xe;fe++){const He=Y[fe],pe=i.get(He);t.bindTexture(n.TEXTURE_2D,pe.__webglTexture),Ue(n.TEXTURE_2D,He),Me(L.__webglFramebuffer,S,He,n.COLOR_ATTACHMENT0+fe,n.TEXTURE_2D,0),m(He)&&p(n.TEXTURE_2D)}t.unbindTexture()}else{let fe=n.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(fe=S.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(fe,z.__webglTexture),Ue(fe,v),v.mipmaps&&v.mipmaps.length>0)for(let xe=0;xe<v.mipmaps.length;xe++)Me(L.__webglFramebuffer[xe],S,v,n.COLOR_ATTACHMENT0,fe,xe);else Me(L.__webglFramebuffer,S,v,n.COLOR_ATTACHMENT0,fe,0);m(v)&&p(fe),t.unbindTexture()}S.depthBuffer&&ce(S)}function A(S){const v=S.textures;for(let L=0,z=v.length;L<z;L++){const Y=v[L];if(m(Y)){const G=w(S),ve=i.get(Y).__webglTexture;t.bindTexture(G,ve),p(G),t.unbindTexture()}}}const C=[],y=[];function ie(S){if(S.samples>0){if(j(S)===!1){const v=S.textures,L=S.width,z=S.height;let Y=n.COLOR_BUFFER_BIT;const G=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ve=i.get(S),fe=v.length>1;if(fe)for(let xe=0;xe<v.length;xe++)t.bindFramebuffer(n.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+xe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ve.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+xe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ve.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ve.__webglFramebuffer);for(let xe=0;xe<v.length;xe++){if(S.resolveDepthBuffer&&(S.depthBuffer&&(Y|=n.DEPTH_BUFFER_BIT),S.stencilBuffer&&S.resolveStencilBuffer&&(Y|=n.STENCIL_BUFFER_BIT)),fe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ve.__webglColorRenderbuffer[xe]);const He=i.get(v[xe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,He,0)}n.blitFramebuffer(0,0,L,z,0,0,L,z,Y,n.NEAREST),l===!0&&(C.length=0,y.length=0,C.push(n.COLOR_ATTACHMENT0+xe),S.depthBuffer&&S.resolveDepthBuffer===!1&&(C.push(G),y.push(G),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,y)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,C))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),fe)for(let xe=0;xe<v.length;xe++){t.bindFramebuffer(n.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+xe,n.RENDERBUFFER,ve.__webglColorRenderbuffer[xe]);const He=i.get(v[xe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ve.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+xe,n.TEXTURE_2D,He,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ve.__webglMultisampledFramebuffer)}else if(S.depthBuffer&&S.resolveDepthBuffer===!1&&l){const v=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}}function K(S){return Math.min(r.maxSamples,S.samples)}function j(S){const v=i.get(S);return S.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function ee(S){const v=a.render.frame;u.get(S)!==v&&(u.set(S,v),S.update())}function de(S,v){const L=S.colorSpace,z=S.format,Y=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||L!==Ct&&L!==Yi&&(Ze.getTransfer(L)===ft?(z!==fn||Y!==wi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",L)),v}function Z(S){return typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement?(c.width=S.naturalWidth||S.width,c.height=S.naturalHeight||S.height):typeof VideoFrame<"u"&&S instanceof VideoFrame?(c.width=S.displayWidth,c.height=S.displayHeight):(c.width=S.width,c.height=S.height),c}this.allocateTextureUnit=X,this.resetTextureUnits=te,this.setTexture2D=oe,this.setTexture2DArray=J,this.setTexture3D=Q,this.setTextureCube=V,this.rebindTextures=he,this.setupRenderTarget=Oe,this.updateRenderTargetMipmap=A,this.updateMultisampleRenderTarget=ie,this.setupDepthRenderbuffer=ce,this.setupFrameBufferTexture=Me,this.useMultisampledRTT=j}function bT(n,e){function t(i,r=Yi){let s;const a=Ze.getTransfer(r);if(i===wi)return n.UNSIGNED_BYTE;if(i===gu)return n.UNSIGNED_SHORT_4_4_4_4;if(i===_u)return n.UNSIGNED_SHORT_5_5_5_1;if(i===jm)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Wm)return n.BYTE;if(i===Xm)return n.SHORT;if(i===pa)return n.UNSIGNED_SHORT;if(i===mu)return n.INT;if(i===wr)return n.UNSIGNED_INT;if(i===ni)return n.FLOAT;if(i===Ms)return n.HALF_FLOAT;if(i===Ym)return n.ALPHA;if(i===qm)return n.RGB;if(i===fn)return n.RGBA;if(i===$m)return n.LUMINANCE;if(i===Km)return n.LUMINANCE_ALPHA;if(i===ga)return n.DEPTH_COMPONENT;if(i===_a)return n.DEPTH_STENCIL;if(i===Zm)return n.RED;if(i===vu)return n.RED_INTEGER;if(i===Jm)return n.RG;if(i===xu)return n.RG_INTEGER;if(i===yu)return n.RGBA_INTEGER;if(i===Co||i===Ro||i===Po||i===Do)if(a===ft)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Co)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ro)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Po)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Do)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Co)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ro)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Po)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Do)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ch||i===hh||i===uh||i===dh)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===ch)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===hh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===uh)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===dh)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===fh||i===ph||i===mh)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===fh||i===ph)return a===ft?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===mh)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===gh||i===_h||i===vh||i===xh||i===yh||i===Mh||i===Sh||i===Eh||i===bh||i===wh||i===Th||i===Ah||i===Ch||i===Rh)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===gh)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===_h)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===vh)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===xh)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===yh)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Mh)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Sh)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Eh)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===bh)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===wh)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Th)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ah)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ch)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Rh)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Io||i===Ph||i===Dh)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Io)return a===ft?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ph)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Dh)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Qm||i===Ih||i===Lh||i===Uh)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Io)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Ih)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Lh)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Uh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ma?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const wT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,TT=`
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

}`;class AT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new Vt,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new at({vertexShader:wT,fragmentShader:TT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new kt(new bs(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class CT extends Rr{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,d=null,f=null,g=null;const _=new AT,m=t.getContextAttributes();let p=null,w=null;const M=[],x=[],I=new Pe;let U=null;const R=new Et;R.viewport=new tt;const O=new Et;O.viewport=new tt;const T=[R,O],b=new BM;let D=null,te=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(re){let ge=M[re];return ge===void 0&&(ge=new ac,M[re]=ge),ge.getTargetRaySpace()},this.getControllerGrip=function(re){let ge=M[re];return ge===void 0&&(ge=new ac,M[re]=ge),ge.getGripSpace()},this.getHand=function(re){let ge=M[re];return ge===void 0&&(ge=new ac,M[re]=ge),ge.getHandSpace()};function X(re){const ge=x.indexOf(re.inputSource);if(ge===-1)return;const Me=M[ge];Me!==void 0&&(Me.update(re.inputSource,re.frame,c||a),Me.dispatchEvent({type:re.type,data:re.inputSource}))}function ae(){r.removeEventListener("select",X),r.removeEventListener("selectstart",X),r.removeEventListener("selectend",X),r.removeEventListener("squeeze",X),r.removeEventListener("squeezestart",X),r.removeEventListener("squeezeend",X),r.removeEventListener("end",ae),r.removeEventListener("inputsourceschange",oe);for(let re=0;re<M.length;re++){const ge=x[re];ge!==null&&(x[re]=null,M[re].disconnect(ge))}D=null,te=null,_.reset(),e.setRenderTarget(p),f=null,d=null,h=null,r=null,w=null,$e.stop(),i.isPresenting=!1,e.setPixelRatio(U),e.setSize(I.width,I.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(re){s=re,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(re){o=re,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(re){c=re},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(re){if(r=re,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",X),r.addEventListener("selectstart",X),r.addEventListener("selectend",X),r.addEventListener("squeeze",X),r.addEventListener("squeezestart",X),r.addEventListener("squeezeend",X),r.addEventListener("end",ae),r.addEventListener("inputsourceschange",oe),m.xrCompatible!==!0&&await t.makeXRCompatible(),U=e.getPixelRatio(),e.getSize(I),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Me=null,F=null,se=null;m.depth&&(se=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Me=m.stencil?_a:ga,F=m.stencil?ma:wr);const ce={colorFormat:t.RGBA8,depthFormat:se,scaleFactor:s};h=new XRWebGLBinding(r,t),d=h.createProjectionLayer(ce),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),w=new wt(d.textureWidth,d.textureHeight,{format:fn,type:wi,depthTexture:new hg(d.textureWidth,d.textureHeight,F,void 0,void 0,void 0,void 0,void 0,void 0,Me),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const Me={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(r,t,Me),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),w=new wt(f.framebufferWidth,f.framebufferHeight,{format:fn,type:wi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),$e.setContext(r),$e.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function oe(re){for(let ge=0;ge<re.removed.length;ge++){const Me=re.removed[ge],F=x.indexOf(Me);F>=0&&(x[F]=null,M[F].disconnect(Me))}for(let ge=0;ge<re.added.length;ge++){const Me=re.added[ge];let F=x.indexOf(Me);if(F===-1){for(let ce=0;ce<M.length;ce++)if(ce>=x.length){x.push(Me),F=ce;break}else if(x[ce]===null){x[ce]=Me,F=ce;break}if(F===-1)break}const se=M[F];se&&se.connect(Me)}}const J=new N,Q=new N;function V(re,ge,Me){J.setFromMatrixPosition(ge.matrixWorld),Q.setFromMatrixPosition(Me.matrixWorld);const F=J.distanceTo(Q),se=ge.projectionMatrix.elements,ce=Me.projectionMatrix.elements,he=se[14]/(se[10]-1),Oe=se[14]/(se[10]+1),A=(se[9]+1)/se[5],C=(se[9]-1)/se[5],y=(se[8]-1)/se[0],ie=(ce[8]+1)/ce[0],K=he*y,j=he*ie,ee=F/(-y+ie),de=ee*-y;if(ge.matrixWorld.decompose(re.position,re.quaternion,re.scale),re.translateX(de),re.translateZ(ee),re.matrixWorld.compose(re.position,re.quaternion,re.scale),re.matrixWorldInverse.copy(re.matrixWorld).invert(),se[10]===-1)re.projectionMatrix.copy(ge.projectionMatrix),re.projectionMatrixInverse.copy(ge.projectionMatrixInverse);else{const Z=he+ee,S=Oe+ee,v=K-de,L=j+(F-de),z=A*Oe/S*Z,Y=C*Oe/S*Z;re.projectionMatrix.makePerspective(v,L,z,Y,Z,S),re.projectionMatrixInverse.copy(re.projectionMatrix).invert()}}function me(re,ge){ge===null?re.matrixWorld.copy(re.matrix):re.matrixWorld.multiplyMatrices(ge.matrixWorld,re.matrix),re.matrixWorldInverse.copy(re.matrixWorld).invert()}this.updateCamera=function(re){if(r===null)return;let ge=re.near,Me=re.far;_.texture!==null&&(_.depthNear>0&&(ge=_.depthNear),_.depthFar>0&&(Me=_.depthFar)),b.near=O.near=R.near=ge,b.far=O.far=R.far=Me,(D!==b.near||te!==b.far)&&(r.updateRenderState({depthNear:b.near,depthFar:b.far}),D=b.near,te=b.far),R.layers.mask=re.layers.mask|2,O.layers.mask=re.layers.mask|4,b.layers.mask=R.layers.mask|O.layers.mask;const F=re.parent,se=b.cameras;me(b,F);for(let ce=0;ce<se.length;ce++)me(se[ce],F);se.length===2?V(b,R,O):b.projectionMatrix.copy(R.projectionMatrix),Se(re,b,F)};function Se(re,ge,Me){Me===null?re.matrix.copy(ge.matrixWorld):(re.matrix.copy(Me.matrixWorld),re.matrix.invert(),re.matrix.multiply(ge.matrixWorld)),re.matrix.decompose(re.position,re.quaternion,re.scale),re.updateMatrixWorld(!0),re.projectionMatrix.copy(ge.projectionMatrix),re.projectionMatrixInverse.copy(ge.projectionMatrixInverse),re.isPerspectiveCamera&&(re.fov=_s*2*Math.atan(1/re.projectionMatrix.elements[5]),re.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(re){l=re,d!==null&&(d.fixedFoveation=re),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=re)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(b)};let De=null;function Ue(re,ge){if(u=ge.getViewerPose(c||a),g=ge,u!==null){const Me=u.views;f!==null&&(e.setRenderTargetFramebuffer(w,f.framebuffer),e.setRenderTarget(w));let F=!1;Me.length!==b.cameras.length&&(b.cameras.length=0,F=!0);for(let he=0;he<Me.length;he++){const Oe=Me[he];let A=null;if(f!==null)A=f.getViewport(Oe);else{const y=h.getViewSubImage(d,Oe);A=y.viewport,he===0&&(e.setRenderTargetTextures(w,y.colorTexture,y.depthStencilTexture),e.setRenderTarget(w))}let C=T[he];C===void 0&&(C=new Et,C.layers.enable(he),C.viewport=new tt,T[he]=C),C.matrix.fromArray(Oe.transform.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale),C.projectionMatrix.fromArray(Oe.projectionMatrix),C.projectionMatrixInverse.copy(C.projectionMatrix).invert(),C.viewport.set(A.x,A.y,A.width,A.height),he===0&&(b.matrix.copy(C.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),F===!0&&b.cameras.push(C)}const se=r.enabledFeatures;if(se&&se.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&h){const he=h.getDepthInformation(Me[0]);he&&he.isValid&&he.texture&&_.init(e,he,r.renderState)}}for(let Me=0;Me<M.length;Me++){const F=x[Me],se=M[Me];F!==null&&se!==void 0&&se.update(F,ge,c||a)}De&&De(re,ge),ge.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ge}),g=null}const $e=new _g;$e.setAnimationLoop(Ue),this.setAnimationLoop=function(re){De=re},this.dispose=function(){}}}const gr=new Nt,RT=new Ne;function PT(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,ag(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,w,M,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),h(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,x)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,w,M):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===en&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===en&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const w=e.get(p),M=w.envMap,x=w.envMapRotation;M&&(m.envMap.value=M,gr.copy(x),gr.x*=-1,gr.y*=-1,gr.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(gr.y*=-1,gr.z*=-1),m.envMapRotation.value.setFromMatrix4(RT.makeRotationFromEuler(gr)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,w,M){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*w,m.scale.value=M*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,w){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===en&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const w=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function DT(n,e,t,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(w,M){const x=M.program;i.uniformBlockBinding(w,x)}function c(w,M){let x=r[w.id];x===void 0&&(g(w),x=u(w),r[w.id]=x,w.addEventListener("dispose",m));const I=M.program;i.updateUBOMapping(w,I);const U=e.render.frame;s[w.id]!==U&&(d(w),s[w.id]=U)}function u(w){const M=h();w.__bindingPointIndex=M;const x=n.createBuffer(),I=w.__size,U=w.usage;return n.bindBuffer(n.UNIFORM_BUFFER,x),n.bufferData(n.UNIFORM_BUFFER,I,U),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,M,x),x}function h(){for(let w=0;w<o;w++)if(a.indexOf(w)===-1)return a.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(w){const M=r[w.id],x=w.uniforms,I=w.__cache;n.bindBuffer(n.UNIFORM_BUFFER,M);for(let U=0,R=x.length;U<R;U++){const O=Array.isArray(x[U])?x[U]:[x[U]];for(let T=0,b=O.length;T<b;T++){const D=O[T];if(f(D,U,T,I)===!0){const te=D.__offset,X=Array.isArray(D.value)?D.value:[D.value];let ae=0;for(let oe=0;oe<X.length;oe++){const J=X[oe],Q=_(J);typeof J=="number"||typeof J=="boolean"?(D.__data[0]=J,n.bufferSubData(n.UNIFORM_BUFFER,te+ae,D.__data)):J.isMatrix3?(D.__data[0]=J.elements[0],D.__data[1]=J.elements[1],D.__data[2]=J.elements[2],D.__data[3]=0,D.__data[4]=J.elements[3],D.__data[5]=J.elements[4],D.__data[6]=J.elements[5],D.__data[7]=0,D.__data[8]=J.elements[6],D.__data[9]=J.elements[7],D.__data[10]=J.elements[8],D.__data[11]=0):(J.toArray(D.__data,ae),ae+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,te,D.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(w,M,x,I){const U=w.value,R=M+"_"+x;if(I[R]===void 0)return typeof U=="number"||typeof U=="boolean"?I[R]=U:I[R]=U.clone(),!0;{const O=I[R];if(typeof U=="number"||typeof U=="boolean"){if(O!==U)return I[R]=U,!0}else if(O.equals(U)===!1)return O.copy(U),!0}return!1}function g(w){const M=w.uniforms;let x=0;const I=16;for(let R=0,O=M.length;R<O;R++){const T=Array.isArray(M[R])?M[R]:[M[R]];for(let b=0,D=T.length;b<D;b++){const te=T[b],X=Array.isArray(te.value)?te.value:[te.value];for(let ae=0,oe=X.length;ae<oe;ae++){const J=X[ae],Q=_(J),V=x%I,me=V%Q.boundary,Se=V+me;x+=me,Se!==0&&I-Se<Q.storage&&(x+=I-Se),te.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),te.__offset=x,x+=Q.storage}}}const U=x%I;return U>0&&(x+=I-U),w.__size=x,w.__cache={},this}function _(w){const M={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(M.boundary=4,M.storage=4):w.isVector2?(M.boundary=8,M.storage=8):w.isVector3||w.isColor?(M.boundary=16,M.storage=12):w.isVector4?(M.boundary=16,M.storage=16):w.isMatrix3?(M.boundary=48,M.storage=48):w.isMatrix4?(M.boundary=64,M.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),M}function m(w){const M=w.target;M.removeEventListener("dispose",m);const x=a.indexOf(M.__bindingPointIndex);a.splice(x,1),n.deleteBuffer(r[M.id]),delete r[M.id],delete s[M.id]}function p(){for(const w in r)n.deleteBuffer(r[w]);a=[],r={},s={}}return{bind:l,update:c,dispose:p}}class Pi{constructor(e={}){const{canvas:t=_y(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=a;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const w=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=$i,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const x=this;let I=!1;this._outputColorSpace=st;let U=0,R=0,O=null,T=-1,b=null;const D=new tt,te=new tt;let X=null;const ae=new Ce(0);let oe=0,J=t.width,Q=t.height,V=1,me=null,Se=null;const De=new tt(0,0,J,Q),Ue=new tt(0,0,J,Q);let $e=!1;const re=new wu;let ge=!1,Me=!1;const F=new Ne,se=new Ne,ce=new N,he=new tt,Oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let A=!1;function C(){return O===null?V:1}let y=i;function ie(E,k){return t.getContext(E,k)}try{const E={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${pu}`),t.addEventListener("webglcontextlost",ue,!1),t.addEventListener("webglcontextrestored",Re,!1),t.addEventListener("webglcontextcreationerror",Ae,!1),y===null){const k="webgl2";if(y=ie(k,E),y===null)throw ie(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let K,j,ee,de,Z,S,v,L,z,Y,G,ve,fe,xe,He,pe,be,Fe,ze,ye,Ge,Ye,mt,B;function Te(){K=new Vb(y),K.init(),Ye=new bT(y,K),j=new Nb(y,K,e,Ye),ee=new ST(y,K),j.reverseDepthBuffer&&d&&ee.buffers.depth.setReversed(!0),de=new Xb(y),Z=new cT,S=new ET(y,K,ee,Z,j,Ye,de),v=new Ob(x),L=new zb(x),z=new ZM(y),mt=new Lb(y,z),Y=new Gb(y,z,de,mt),G=new Yb(y,Y,z,de),ze=new jb(y,j,S),pe=new Fb(Z),ve=new lT(x,v,L,K,j,mt,pe),fe=new PT(x,Z),xe=new uT,He=new _T(K),Fe=new Ib(x,v,L,ee,G,f,l),be=new yT(x,G,j),B=new DT(y,de,j,ee),ye=new Ub(y,K,de),Ge=new Wb(y,K,de),de.programs=ve.programs,x.capabilities=j,x.extensions=K,x.properties=Z,x.renderLists=xe,x.shadowMap=be,x.state=ee,x.info=de}Te();const ne=new CT(x,y);this.xr=ne,this.getContext=function(){return y},this.getContextAttributes=function(){return y.getContextAttributes()},this.forceContextLoss=function(){const E=K.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=K.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(E){E!==void 0&&(V=E,this.setSize(J,Q,!1))},this.getSize=function(E){return E.set(J,Q)},this.setSize=function(E,k,q=!0){if(ne.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}J=E,Q=k,t.width=Math.floor(E*V),t.height=Math.floor(k*V),q===!0&&(t.style.width=E+"px",t.style.height=k+"px"),this.setViewport(0,0,E,k)},this.getDrawingBufferSize=function(E){return E.set(J*V,Q*V).floor()},this.setDrawingBufferSize=function(E,k,q){J=E,Q=k,V=q,t.width=Math.floor(E*q),t.height=Math.floor(k*q),this.setViewport(0,0,E,k)},this.getCurrentViewport=function(E){return E.copy(D)},this.getViewport=function(E){return E.copy(De)},this.setViewport=function(E,k,q,$){E.isVector4?De.set(E.x,E.y,E.z,E.w):De.set(E,k,q,$),ee.viewport(D.copy(De).multiplyScalar(V).round())},this.getScissor=function(E){return E.copy(Ue)},this.setScissor=function(E,k,q,$){E.isVector4?Ue.set(E.x,E.y,E.z,E.w):Ue.set(E,k,q,$),ee.scissor(te.copy(Ue).multiplyScalar(V).round())},this.getScissorTest=function(){return $e},this.setScissorTest=function(E){ee.setScissorTest($e=E)},this.setOpaqueSort=function(E){me=E},this.setTransparentSort=function(E){Se=E},this.getClearColor=function(E){return E.copy(Fe.getClearColor())},this.setClearColor=function(){Fe.setClearColor(...arguments)},this.getClearAlpha=function(){return Fe.getClearAlpha()},this.setClearAlpha=function(){Fe.setClearAlpha(...arguments)},this.clear=function(E=!0,k=!0,q=!0){let $=0;if(E){let H=!1;if(O!==null){const _e=O.texture.format;H=_e===yu||_e===xu||_e===vu}if(H){const _e=O.texture.type,we=_e===wi||_e===wr||_e===pa||_e===ma||_e===gu||_e===_u,Ie=Fe.getClearColor(),Le=Fe.getClearAlpha(),We=Ie.r,Ve=Ie.g,Be=Ie.b;we?(g[0]=We,g[1]=Ve,g[2]=Be,g[3]=Le,y.clearBufferuiv(y.COLOR,0,g)):(_[0]=We,_[1]=Ve,_[2]=Be,_[3]=Le,y.clearBufferiv(y.COLOR,0,_))}else $|=y.COLOR_BUFFER_BIT}k&&($|=y.DEPTH_BUFFER_BIT),q&&($|=y.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),y.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ue,!1),t.removeEventListener("webglcontextrestored",Re,!1),t.removeEventListener("webglcontextcreationerror",Ae,!1),Fe.dispose(),xe.dispose(),He.dispose(),Z.dispose(),v.dispose(),L.dispose(),G.dispose(),mt.dispose(),B.dispose(),ve.dispose(),ne.dispose(),ne.removeEventListener("sessionstart",Fu),ne.removeEventListener("sessionend",Ou),or.stop()};function ue(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function Re(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;const E=de.autoReset,k=be.enabled,q=be.autoUpdate,$=be.needsUpdate,H=be.type;Te(),de.autoReset=E,be.enabled=k,be.autoUpdate=q,be.needsUpdate=$,be.type=H}function Ae(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Ke(E){const k=E.target;k.removeEventListener("dispose",Ke),Tt(k)}function Tt(E){Gt(E),Z.remove(E)}function Gt(E){const k=Z.get(E).programs;k!==void 0&&(k.forEach(function(q){ve.releaseProgram(q)}),E.isShaderMaterial&&ve.releaseShaderCache(E))}this.renderBufferDirect=function(E,k,q,$,H,_e){k===null&&(k=Oe);const we=H.isMesh&&H.matrixWorld.determinant()<0,Ie=Wg(E,k,q,$,H);ee.setMaterial($,we);let Le=q.index,We=1;if($.wireframe===!0){if(Le=Y.getWireframeAttribute(q),Le===void 0)return;We=2}const Ve=q.drawRange,Be=q.attributes.position;let nt=Ve.start*We,ot=(Ve.start+Ve.count)*We;_e!==null&&(nt=Math.max(nt,_e.start*We),ot=Math.min(ot,(_e.start+_e.count)*We)),Le!==null?(nt=Math.max(nt,0),ot=Math.min(ot,Le.count)):Be!=null&&(nt=Math.max(nt,0),ot=Math.min(ot,Be.count));const Dt=ot-nt;if(Dt<0||Dt===1/0)return;mt.setup(H,$,Ie,q,Le);let At,it=ye;if(Le!==null&&(At=z.get(Le),it=Ge,it.setIndex(At)),H.isMesh)$.wireframe===!0?(ee.setLineWidth($.wireframeLinewidth*C()),it.setMode(y.LINES)):it.setMode(y.TRIANGLES);else if(H.isLine){let ke=$.linewidth;ke===void 0&&(ke=1),ee.setLineWidth(ke*C()),H.isLineSegments?it.setMode(y.LINES):H.isLineLoop?it.setMode(y.LINE_LOOP):it.setMode(y.LINE_STRIP)}else H.isPoints?it.setMode(y.POINTS):H.isSprite&&it.setMode(y.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)Lo("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),it.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(K.get("WEBGL_multi_draw"))it.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const ke=H._multiDrawStarts,zt=H._multiDrawCounts,lt=H._multiDrawCount,Fn=Le?z.get(Le).bytesPerElement:1,Dr=Z.get($).currentProgram.getUniforms();for(let pn=0;pn<lt;pn++)Dr.setValue(y,"_gl_DrawID",pn),it.render(ke[pn]/Fn,zt[pn])}else if(H.isInstancedMesh)it.renderInstances(nt,Dt,H.count);else if(q.isInstancedBufferGeometry){const ke=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,zt=Math.min(q.instanceCount,ke);it.renderInstances(nt,Dt,zt)}else it.render(nt,Dt)};function dt(E,k,q){E.transparent===!0&&E.side===xn&&E.forceSinglePass===!1?(E.side=en,E.needsUpdate=!0,Fa(E,k,q),E.side=ai,E.needsUpdate=!0,Fa(E,k,q),E.side=xn):Fa(E,k,q)}this.compile=function(E,k,q=null){q===null&&(q=E),p=He.get(q),p.init(k),M.push(p),q.traverseVisible(function(H){H.isLight&&H.layers.test(k.layers)&&(p.pushLight(H),H.castShadow&&p.pushShadow(H))}),E!==q&&E.traverseVisible(function(H){H.isLight&&H.layers.test(k.layers)&&(p.pushLight(H),H.castShadow&&p.pushShadow(H))}),p.setupLights();const $=new Set;return E.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const _e=H.material;if(_e)if(Array.isArray(_e))for(let we=0;we<_e.length;we++){const Ie=_e[we];dt(Ie,q,H),$.add(Ie)}else dt(_e,q,H),$.add(_e)}),p=M.pop(),$},this.compileAsync=function(E,k,q=null){const $=this.compile(E,k,q);return new Promise(H=>{function _e(){if($.forEach(function(we){Z.get(we).currentProgram.isReady()&&$.delete(we)}),$.size===0){H(E);return}setTimeout(_e,10)}K.get("KHR_parallel_shader_compile")!==null?_e():setTimeout(_e,10)})};let Nn=null;function li(E){Nn&&Nn(E)}function Fu(){or.stop()}function Ou(){or.start()}const or=new _g;or.setAnimationLoop(li),typeof self<"u"&&or.setContext(self),this.setAnimationLoop=function(E){Nn=E,ne.setAnimationLoop(E),E===null?or.stop():or.start()},ne.addEventListener("sessionstart",Fu),ne.addEventListener("sessionend",Ou),this.render=function(E,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),ne.enabled===!0&&ne.isPresenting===!0&&(ne.cameraAutoUpdate===!0&&ne.updateCamera(k),k=ne.getCamera()),E.isScene===!0&&E.onBeforeRender(x,E,k,O),p=He.get(E,M.length),p.init(k),M.push(p),se.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),re.setFromProjectionMatrix(se),Me=this.localClippingEnabled,ge=pe.init(this.clippingPlanes,Me),m=xe.get(E,w.length),m.init(),w.push(m),ne.enabled===!0&&ne.isPresenting===!0){const _e=x.xr.getDepthSensingMesh();_e!==null&&Sl(_e,k,-1/0,x.sortObjects)}Sl(E,k,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(me,Se),A=ne.enabled===!1||ne.isPresenting===!1||ne.hasDepthSensing()===!1,A&&Fe.addToRenderList(m,E),this.info.render.frame++,ge===!0&&pe.beginShadows();const q=p.state.shadowsArray;be.render(q,E,k),ge===!0&&pe.endShadows(),this.info.autoReset===!0&&this.info.reset();const $=m.opaque,H=m.transmissive;if(p.setupLights(),k.isArrayCamera){const _e=k.cameras;if(H.length>0)for(let we=0,Ie=_e.length;we<Ie;we++){const Le=_e[we];ku($,H,E,Le)}A&&Fe.render(E);for(let we=0,Ie=_e.length;we<Ie;we++){const Le=_e[we];Bu(m,E,Le,Le.viewport)}}else H.length>0&&ku($,H,E,k),A&&Fe.render(E),Bu(m,E,k);O!==null&&R===0&&(S.updateMultisampleRenderTarget(O),S.updateRenderTargetMipmap(O)),E.isScene===!0&&E.onAfterRender(x,E,k),mt.resetDefaultState(),T=-1,b=null,M.pop(),M.length>0?(p=M[M.length-1],ge===!0&&pe.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,w.pop(),w.length>0?m=w[w.length-1]:m=null};function Sl(E,k,q,$){if(E.visible===!1)return;if(E.layers.test(k.layers)){if(E.isGroup)q=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(k);else if(E.isLight)p.pushLight(E),E.castShadow&&p.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||re.intersectsSprite(E)){$&&he.setFromMatrixPosition(E.matrixWorld).applyMatrix4(se);const we=G.update(E),Ie=E.material;Ie.visible&&m.push(E,we,Ie,q,he.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||re.intersectsObject(E))){const we=G.update(E),Ie=E.material;if($&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),he.copy(E.boundingSphere.center)):(we.boundingSphere===null&&we.computeBoundingSphere(),he.copy(we.boundingSphere.center)),he.applyMatrix4(E.matrixWorld).applyMatrix4(se)),Array.isArray(Ie)){const Le=we.groups;for(let We=0,Ve=Le.length;We<Ve;We++){const Be=Le[We],nt=Ie[Be.materialIndex];nt&&nt.visible&&m.push(E,we,nt,q,he.z,Be)}}else Ie.visible&&m.push(E,we,Ie,q,he.z,null)}}const _e=E.children;for(let we=0,Ie=_e.length;we<Ie;we++)Sl(_e[we],k,q,$)}function Bu(E,k,q,$){const H=E.opaque,_e=E.transmissive,we=E.transparent;p.setupLightsView(q),ge===!0&&pe.setGlobalState(x.clippingPlanes,q),$&&ee.viewport(D.copy($)),H.length>0&&Na(H,k,q),_e.length>0&&Na(_e,k,q),we.length>0&&Na(we,k,q),ee.buffers.depth.setTest(!0),ee.buffers.depth.setMask(!0),ee.buffers.color.setMask(!0),ee.setPolygonOffset(!1)}function ku(E,k,q,$){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[$.id]===void 0&&(p.state.transmissionRenderTarget[$.id]=new wt(1,1,{generateMipmaps:!0,type:K.has("EXT_color_buffer_half_float")||K.has("EXT_color_buffer_float")?Ms:wi,minFilter:Mr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ze.workingColorSpace}));const _e=p.state.transmissionRenderTarget[$.id],we=$.viewport||D;_e.setSize(we.z*x.transmissionResolutionScale,we.w*x.transmissionResolutionScale);const Ie=x.getRenderTarget();x.setRenderTarget(_e),x.getClearColor(ae),oe=x.getClearAlpha(),oe<1&&x.setClearColor(16777215,.5),x.clear(),A&&Fe.render(q);const Le=x.toneMapping;x.toneMapping=$i;const We=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),p.setupLightsView($),ge===!0&&pe.setGlobalState(x.clippingPlanes,$),Na(E,q,$),S.updateMultisampleRenderTarget(_e),S.updateRenderTargetMipmap(_e),K.has("WEBGL_multisampled_render_to_texture")===!1){let Ve=!1;for(let Be=0,nt=k.length;Be<nt;Be++){const ot=k[Be],Dt=ot.object,At=ot.geometry,it=ot.material,ke=ot.group;if(it.side===xn&&Dt.layers.test($.layers)){const zt=it.side;it.side=en,it.needsUpdate=!0,Hu(Dt,q,$,At,it,ke),it.side=zt,it.needsUpdate=!0,Ve=!0}}Ve===!0&&(S.updateMultisampleRenderTarget(_e),S.updateRenderTargetMipmap(_e))}x.setRenderTarget(Ie),x.setClearColor(ae,oe),We!==void 0&&($.viewport=We),x.toneMapping=Le}function Na(E,k,q){const $=k.isScene===!0?k.overrideMaterial:null;for(let H=0,_e=E.length;H<_e;H++){const we=E[H],Ie=we.object,Le=we.geometry,We=we.group;let Ve=we.material;Ve.allowOverride===!0&&$!==null&&(Ve=$),Ie.layers.test(q.layers)&&Hu(Ie,k,q,Le,Ve,We)}}function Hu(E,k,q,$,H,_e){E.onBeforeRender(x,k,q,$,H,_e),E.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),H.onBeforeRender(x,k,q,$,E,_e),H.transparent===!0&&H.side===xn&&H.forceSinglePass===!1?(H.side=en,H.needsUpdate=!0,x.renderBufferDirect(q,k,$,H,E,_e),H.side=ai,H.needsUpdate=!0,x.renderBufferDirect(q,k,$,H,E,_e),H.side=xn):x.renderBufferDirect(q,k,$,H,E,_e),E.onAfterRender(x,k,q,$,H,_e)}function Fa(E,k,q){k.isScene!==!0&&(k=Oe);const $=Z.get(E),H=p.state.lights,_e=p.state.shadowsArray,we=H.state.version,Ie=ve.getParameters(E,H.state,_e,k,q),Le=ve.getProgramCacheKey(Ie);let We=$.programs;$.environment=E.isMeshStandardMaterial?k.environment:null,$.fog=k.fog,$.envMap=(E.isMeshStandardMaterial?L:v).get(E.envMap||$.environment),$.envMapRotation=$.environment!==null&&E.envMap===null?k.environmentRotation:E.envMapRotation,We===void 0&&(E.addEventListener("dispose",Ke),We=new Map,$.programs=We);let Ve=We.get(Le);if(Ve!==void 0){if($.currentProgram===Ve&&$.lightsStateVersion===we)return Vu(E,Ie),Ve}else Ie.uniforms=ve.getUniforms(E),E.onBeforeCompile(Ie,x),Ve=ve.acquireProgram(Ie,Le),We.set(Le,Ve),$.uniforms=Ie.uniforms;const Be=$.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Be.clippingPlanes=pe.uniform),Vu(E,Ie),$.needsLights=jg(E),$.lightsStateVersion=we,$.needsLights&&(Be.ambientLightColor.value=H.state.ambient,Be.lightProbe.value=H.state.probe,Be.directionalLights.value=H.state.directional,Be.directionalLightShadows.value=H.state.directionalShadow,Be.spotLights.value=H.state.spot,Be.spotLightShadows.value=H.state.spotShadow,Be.rectAreaLights.value=H.state.rectArea,Be.ltc_1.value=H.state.rectAreaLTC1,Be.ltc_2.value=H.state.rectAreaLTC2,Be.pointLights.value=H.state.point,Be.pointLightShadows.value=H.state.pointShadow,Be.hemisphereLights.value=H.state.hemi,Be.directionalShadowMap.value=H.state.directionalShadowMap,Be.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Be.spotShadowMap.value=H.state.spotShadowMap,Be.spotLightMatrix.value=H.state.spotLightMatrix,Be.spotLightMap.value=H.state.spotLightMap,Be.pointShadowMap.value=H.state.pointShadowMap,Be.pointShadowMatrix.value=H.state.pointShadowMatrix),$.currentProgram=Ve,$.uniformsList=null,Ve}function zu(E){if(E.uniformsList===null){const k=E.currentProgram.getUniforms();E.uniformsList=Uo.seqWithValue(k.seq,E.uniforms)}return E.uniformsList}function Vu(E,k){const q=Z.get(E);q.outputColorSpace=k.outputColorSpace,q.batching=k.batching,q.batchingColor=k.batchingColor,q.instancing=k.instancing,q.instancingColor=k.instancingColor,q.instancingMorph=k.instancingMorph,q.skinning=k.skinning,q.morphTargets=k.morphTargets,q.morphNormals=k.morphNormals,q.morphColors=k.morphColors,q.morphTargetsCount=k.morphTargetsCount,q.numClippingPlanes=k.numClippingPlanes,q.numIntersection=k.numClipIntersection,q.vertexAlphas=k.vertexAlphas,q.vertexTangents=k.vertexTangents,q.toneMapping=k.toneMapping}function Wg(E,k,q,$,H){k.isScene!==!0&&(k=Oe),S.resetTextureUnits();const _e=k.fog,we=$.isMeshStandardMaterial?k.environment:null,Ie=O===null?x.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:Ct,Le=($.isMeshStandardMaterial?L:v).get($.envMap||we),We=$.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Ve=!!q.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Be=!!q.morphAttributes.position,nt=!!q.morphAttributes.normal,ot=!!q.morphAttributes.color;let Dt=$i;$.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(Dt=x.toneMapping);const At=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,it=At!==void 0?At.length:0,ke=Z.get($),zt=p.state.lights;if(ge===!0&&(Me===!0||E!==b)){const rn=E===b&&$.id===T;pe.setState($,E,rn)}let lt=!1;$.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==zt.state.version||ke.outputColorSpace!==Ie||H.isBatchedMesh&&ke.batching===!1||!H.isBatchedMesh&&ke.batching===!0||H.isBatchedMesh&&ke.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&ke.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&ke.instancing===!1||!H.isInstancedMesh&&ke.instancing===!0||H.isSkinnedMesh&&ke.skinning===!1||!H.isSkinnedMesh&&ke.skinning===!0||H.isInstancedMesh&&ke.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&ke.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&ke.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&ke.instancingMorph===!1&&H.morphTexture!==null||ke.envMap!==Le||$.fog===!0&&ke.fog!==_e||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==pe.numPlanes||ke.numIntersection!==pe.numIntersection)||ke.vertexAlphas!==We||ke.vertexTangents!==Ve||ke.morphTargets!==Be||ke.morphNormals!==nt||ke.morphColors!==ot||ke.toneMapping!==Dt||ke.morphTargetsCount!==it)&&(lt=!0):(lt=!0,ke.__version=$.version);let Fn=ke.currentProgram;lt===!0&&(Fn=Fa($,k,H));let Dr=!1,pn=!1,Ps=!1;const yt=Fn.getUniforms(),bn=ke.uniforms;if(ee.useProgram(Fn.program)&&(Dr=!0,pn=!0,Ps=!0),$.id!==T&&(T=$.id,pn=!0),Dr||b!==E){ee.buffers.depth.getReversed()?(F.copy(E.projectionMatrix),xy(F),yy(F),yt.setValue(y,"projectionMatrix",F)):yt.setValue(y,"projectionMatrix",E.projectionMatrix),yt.setValue(y,"viewMatrix",E.matrixWorldInverse);const un=yt.map.cameraPosition;un!==void 0&&un.setValue(y,ce.setFromMatrixPosition(E.matrixWorld)),j.logarithmicDepthBuffer&&yt.setValue(y,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&yt.setValue(y,"isOrthographic",E.isOrthographicCamera===!0),b!==E&&(b=E,pn=!0,Ps=!0)}if(H.isSkinnedMesh){yt.setOptional(y,H,"bindMatrix"),yt.setOptional(y,H,"bindMatrixInverse");const rn=H.skeleton;rn&&(rn.boneTexture===null&&rn.computeBoneTexture(),yt.setValue(y,"boneTexture",rn.boneTexture,S))}H.isBatchedMesh&&(yt.setOptional(y,H,"batchingTexture"),yt.setValue(y,"batchingTexture",H._matricesTexture,S),yt.setOptional(y,H,"batchingIdTexture"),yt.setValue(y,"batchingIdTexture",H._indirectTexture,S),yt.setOptional(y,H,"batchingColorTexture"),H._colorsTexture!==null&&yt.setValue(y,"batchingColorTexture",H._colorsTexture,S));const wn=q.morphAttributes;if((wn.position!==void 0||wn.normal!==void 0||wn.color!==void 0)&&ze.update(H,q,Fn),(pn||ke.receiveShadow!==H.receiveShadow)&&(ke.receiveShadow=H.receiveShadow,yt.setValue(y,"receiveShadow",H.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(bn.envMap.value=Le,bn.flipEnvMap.value=Le.isCubeTexture&&Le.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&k.environment!==null&&(bn.envMapIntensity.value=k.environmentIntensity),pn&&(yt.setValue(y,"toneMappingExposure",x.toneMappingExposure),ke.needsLights&&Xg(bn,Ps),_e&&$.fog===!0&&fe.refreshFogUniforms(bn,_e),fe.refreshMaterialUniforms(bn,$,V,Q,p.state.transmissionRenderTarget[E.id]),Uo.upload(y,zu(ke),bn,S)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(Uo.upload(y,zu(ke),bn,S),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&yt.setValue(y,"center",H.center),yt.setValue(y,"modelViewMatrix",H.modelViewMatrix),yt.setValue(y,"normalMatrix",H.normalMatrix),yt.setValue(y,"modelMatrix",H.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const rn=$.uniformsGroups;for(let un=0,El=rn.length;un<El;un++){const lr=rn[un];B.update(lr,Fn),B.bind(lr,Fn)}}return Fn}function Xg(E,k){E.ambientLightColor.needsUpdate=k,E.lightProbe.needsUpdate=k,E.directionalLights.needsUpdate=k,E.directionalLightShadows.needsUpdate=k,E.pointLights.needsUpdate=k,E.pointLightShadows.needsUpdate=k,E.spotLights.needsUpdate=k,E.spotLightShadows.needsUpdate=k,E.rectAreaLights.needsUpdate=k,E.hemisphereLights.needsUpdate=k}function jg(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(E,k,q){const $=Z.get(E);$.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,$.__autoAllocateDepthBuffer===!1&&($.__useRenderToTexture=!1),Z.get(E.texture).__webglTexture=k,Z.get(E.depthTexture).__webglTexture=$.__autoAllocateDepthBuffer?void 0:q,$.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,k){const q=Z.get(E);q.__webglFramebuffer=k,q.__useDefaultFramebuffer=k===void 0};const Yg=y.createFramebuffer();this.setRenderTarget=function(E,k=0,q=0){O=E,U=k,R=q;let $=!0,H=null,_e=!1,we=!1;if(E){const Le=Z.get(E);if(Le.__useDefaultFramebuffer!==void 0)ee.bindFramebuffer(y.FRAMEBUFFER,null),$=!1;else if(Le.__webglFramebuffer===void 0)S.setupRenderTarget(E);else if(Le.__hasExternalTextures)S.rebindTextures(E,Z.get(E.texture).__webglTexture,Z.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Be=E.depthTexture;if(Le.__boundDepthTexture!==Be){if(Be!==null&&Z.has(Be)&&(E.width!==Be.image.width||E.height!==Be.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");S.setupDepthRenderbuffer(E)}}const We=E.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(we=!0);const Ve=Z.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ve[k])?H=Ve[k][q]:H=Ve[k],_e=!0):E.samples>0&&S.useMultisampledRTT(E)===!1?H=Z.get(E).__webglMultisampledFramebuffer:Array.isArray(Ve)?H=Ve[q]:H=Ve,D.copy(E.viewport),te.copy(E.scissor),X=E.scissorTest}else D.copy(De).multiplyScalar(V).floor(),te.copy(Ue).multiplyScalar(V).floor(),X=$e;if(q!==0&&(H=Yg),ee.bindFramebuffer(y.FRAMEBUFFER,H)&&$&&ee.drawBuffers(E,H),ee.viewport(D),ee.scissor(te),ee.setScissorTest(X),_e){const Le=Z.get(E.texture);y.framebufferTexture2D(y.FRAMEBUFFER,y.COLOR_ATTACHMENT0,y.TEXTURE_CUBE_MAP_POSITIVE_X+k,Le.__webglTexture,q)}else if(we){const Le=Z.get(E.texture),We=k;y.framebufferTextureLayer(y.FRAMEBUFFER,y.COLOR_ATTACHMENT0,Le.__webglTexture,q,We)}else if(E!==null&&q!==0){const Le=Z.get(E.texture);y.framebufferTexture2D(y.FRAMEBUFFER,y.COLOR_ATTACHMENT0,y.TEXTURE_2D,Le.__webglTexture,q)}T=-1},this.readRenderTargetPixels=function(E,k,q,$,H,_e,we){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=Z.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&we!==void 0&&(Ie=Ie[we]),Ie){ee.bindFramebuffer(y.FRAMEBUFFER,Ie);try{const Le=E.texture,We=Le.format,Ve=Le.type;if(!j.textureFormatReadable(We)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!j.textureTypeReadable(Ve)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=E.width-$&&q>=0&&q<=E.height-H&&y.readPixels(k,q,$,H,Ye.convert(We),Ye.convert(Ve),_e)}finally{const Le=O!==null?Z.get(O).__webglFramebuffer:null;ee.bindFramebuffer(y.FRAMEBUFFER,Le)}}},this.readRenderTargetPixelsAsync=async function(E,k,q,$,H,_e,we){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ie=Z.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&we!==void 0&&(Ie=Ie[we]),Ie)if(k>=0&&k<=E.width-$&&q>=0&&q<=E.height-H){ee.bindFramebuffer(y.FRAMEBUFFER,Ie);const Le=E.texture,We=Le.format,Ve=Le.type;if(!j.textureFormatReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!j.textureTypeReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Be=y.createBuffer();y.bindBuffer(y.PIXEL_PACK_BUFFER,Be),y.bufferData(y.PIXEL_PACK_BUFFER,_e.byteLength,y.STREAM_READ),y.readPixels(k,q,$,H,Ye.convert(We),Ye.convert(Ve),0);const nt=O!==null?Z.get(O).__webglFramebuffer:null;ee.bindFramebuffer(y.FRAMEBUFFER,nt);const ot=y.fenceSync(y.SYNC_GPU_COMMANDS_COMPLETE,0);return y.flush(),await vy(y,ot,4),y.bindBuffer(y.PIXEL_PACK_BUFFER,Be),y.getBufferSubData(y.PIXEL_PACK_BUFFER,0,_e),y.deleteBuffer(Be),y.deleteSync(ot),_e}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,k=null,q=0){const $=Math.pow(2,-q),H=Math.floor(E.image.width*$),_e=Math.floor(E.image.height*$),we=k!==null?k.x:0,Ie=k!==null?k.y:0;S.setTexture2D(E,0),y.copyTexSubImage2D(y.TEXTURE_2D,q,0,0,we,Ie,H,_e),ee.unbindTexture()};const qg=y.createFramebuffer(),$g=y.createFramebuffer();this.copyTextureToTexture=function(E,k,q=null,$=null,H=0,_e=null){_e===null&&(H!==0?(Lo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),_e=H,H=0):_e=0);let we,Ie,Le,We,Ve,Be,nt,ot,Dt;const At=E.isCompressedTexture?E.mipmaps[_e]:E.image;if(q!==null)we=q.max.x-q.min.x,Ie=q.max.y-q.min.y,Le=q.isBox3?q.max.z-q.min.z:1,We=q.min.x,Ve=q.min.y,Be=q.isBox3?q.min.z:0;else{const wn=Math.pow(2,-H);we=Math.floor(At.width*wn),Ie=Math.floor(At.height*wn),E.isDataArrayTexture?Le=At.depth:E.isData3DTexture?Le=Math.floor(At.depth*wn):Le=1,We=0,Ve=0,Be=0}$!==null?(nt=$.x,ot=$.y,Dt=$.z):(nt=0,ot=0,Dt=0);const it=Ye.convert(k.format),ke=Ye.convert(k.type);let zt;k.isData3DTexture?(S.setTexture3D(k,0),zt=y.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(S.setTexture2DArray(k,0),zt=y.TEXTURE_2D_ARRAY):(S.setTexture2D(k,0),zt=y.TEXTURE_2D),y.pixelStorei(y.UNPACK_FLIP_Y_WEBGL,k.flipY),y.pixelStorei(y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),y.pixelStorei(y.UNPACK_ALIGNMENT,k.unpackAlignment);const lt=y.getParameter(y.UNPACK_ROW_LENGTH),Fn=y.getParameter(y.UNPACK_IMAGE_HEIGHT),Dr=y.getParameter(y.UNPACK_SKIP_PIXELS),pn=y.getParameter(y.UNPACK_SKIP_ROWS),Ps=y.getParameter(y.UNPACK_SKIP_IMAGES);y.pixelStorei(y.UNPACK_ROW_LENGTH,At.width),y.pixelStorei(y.UNPACK_IMAGE_HEIGHT,At.height),y.pixelStorei(y.UNPACK_SKIP_PIXELS,We),y.pixelStorei(y.UNPACK_SKIP_ROWS,Ve),y.pixelStorei(y.UNPACK_SKIP_IMAGES,Be);const yt=E.isDataArrayTexture||E.isData3DTexture,bn=k.isDataArrayTexture||k.isData3DTexture;if(E.isDepthTexture){const wn=Z.get(E),rn=Z.get(k),un=Z.get(wn.__renderTarget),El=Z.get(rn.__renderTarget);ee.bindFramebuffer(y.READ_FRAMEBUFFER,un.__webglFramebuffer),ee.bindFramebuffer(y.DRAW_FRAMEBUFFER,El.__webglFramebuffer);for(let lr=0;lr<Le;lr++)yt&&(y.framebufferTextureLayer(y.READ_FRAMEBUFFER,y.COLOR_ATTACHMENT0,Z.get(E).__webglTexture,H,Be+lr),y.framebufferTextureLayer(y.DRAW_FRAMEBUFFER,y.COLOR_ATTACHMENT0,Z.get(k).__webglTexture,_e,Dt+lr)),y.blitFramebuffer(We,Ve,we,Ie,nt,ot,we,Ie,y.DEPTH_BUFFER_BIT,y.NEAREST);ee.bindFramebuffer(y.READ_FRAMEBUFFER,null),ee.bindFramebuffer(y.DRAW_FRAMEBUFFER,null)}else if(H!==0||E.isRenderTargetTexture||Z.has(E)){const wn=Z.get(E),rn=Z.get(k);ee.bindFramebuffer(y.READ_FRAMEBUFFER,qg),ee.bindFramebuffer(y.DRAW_FRAMEBUFFER,$g);for(let un=0;un<Le;un++)yt?y.framebufferTextureLayer(y.READ_FRAMEBUFFER,y.COLOR_ATTACHMENT0,wn.__webglTexture,H,Be+un):y.framebufferTexture2D(y.READ_FRAMEBUFFER,y.COLOR_ATTACHMENT0,y.TEXTURE_2D,wn.__webglTexture,H),bn?y.framebufferTextureLayer(y.DRAW_FRAMEBUFFER,y.COLOR_ATTACHMENT0,rn.__webglTexture,_e,Dt+un):y.framebufferTexture2D(y.DRAW_FRAMEBUFFER,y.COLOR_ATTACHMENT0,y.TEXTURE_2D,rn.__webglTexture,_e),H!==0?y.blitFramebuffer(We,Ve,we,Ie,nt,ot,we,Ie,y.COLOR_BUFFER_BIT,y.NEAREST):bn?y.copyTexSubImage3D(zt,_e,nt,ot,Dt+un,We,Ve,we,Ie):y.copyTexSubImage2D(zt,_e,nt,ot,We,Ve,we,Ie);ee.bindFramebuffer(y.READ_FRAMEBUFFER,null),ee.bindFramebuffer(y.DRAW_FRAMEBUFFER,null)}else bn?E.isDataTexture||E.isData3DTexture?y.texSubImage3D(zt,_e,nt,ot,Dt,we,Ie,Le,it,ke,At.data):k.isCompressedArrayTexture?y.compressedTexSubImage3D(zt,_e,nt,ot,Dt,we,Ie,Le,it,At.data):y.texSubImage3D(zt,_e,nt,ot,Dt,we,Ie,Le,it,ke,At):E.isDataTexture?y.texSubImage2D(y.TEXTURE_2D,_e,nt,ot,we,Ie,it,ke,At.data):E.isCompressedTexture?y.compressedTexSubImage2D(y.TEXTURE_2D,_e,nt,ot,At.width,At.height,it,At.data):y.texSubImage2D(y.TEXTURE_2D,_e,nt,ot,we,Ie,it,ke,At);y.pixelStorei(y.UNPACK_ROW_LENGTH,lt),y.pixelStorei(y.UNPACK_IMAGE_HEIGHT,Fn),y.pixelStorei(y.UNPACK_SKIP_PIXELS,Dr),y.pixelStorei(y.UNPACK_SKIP_ROWS,pn),y.pixelStorei(y.UNPACK_SKIP_IMAGES,Ps),_e===0&&k.generateMipmaps&&y.generateMipmap(zt),ee.unbindTexture()},this.copyTextureToTexture3D=function(E,k,q=null,$=null,H=0){return Lo('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,k,q,$,H)},this.initRenderTarget=function(E){Z.get(E).__webglFramebuffer===void 0&&S.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?S.setTextureCube(E,0):E.isData3DTexture?S.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?S.setTexture2DArray(E,0):S.setTexture2D(E,0),ee.unbindTexture()},this.resetState=function(){U=0,R=0,O=null,ee.reset(),mt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Si}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Ze._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ze._getUnpackColorSpace()}}const Qf={type:"change"},Iu={type:"start"},Sg={type:"end"},mo=new gl,ep=new Xi,IT=Math.cos(70*Yt.DEG2RAD),Ut=new N,dn=2*Math.PI,pt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},xc=1e-6;class Di extends $M{constructor(e,t=null){super(e,t),this.state=pt.NONE,this.target=new N,this.cursor=new N,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:cs.ROTATE,MIDDLE:cs.DOLLY,RIGHT:cs.PAN},this.touches={ONE:es.ROTATE,TWO:es.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new N,this._lastQuaternion=new qt,this._lastTargetPosition=new N,this._quat=new qt().setFromUnitVectors(e.up,new N(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Af,this._sphericalDelta=new Af,this._scale=1,this._panOffset=new N,this._rotateStart=new Pe,this._rotateEnd=new Pe,this._rotateDelta=new Pe,this._panStart=new Pe,this._panEnd=new Pe,this._panDelta=new Pe,this._dollyStart=new Pe,this._dollyEnd=new Pe,this._dollyDelta=new Pe,this._dollyDirection=new N,this._mouse=new Pe,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=UT.bind(this),this._onPointerDown=LT.bind(this),this._onPointerUp=NT.bind(this),this._onContextMenu=VT.bind(this),this._onMouseWheel=BT.bind(this),this._onKeyDown=kT.bind(this),this._onTouchStart=HT.bind(this),this._onTouchMove=zT.bind(this),this._onMouseDown=FT.bind(this),this._onMouseMove=OT.bind(this),this._interceptControlDown=GT.bind(this),this._interceptControlUp=WT.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Qf),this.update(),this.state=pt.NONE}update(e=null){const t=this.object.position;Ut.copy(t).sub(this.target),Ut.applyQuaternion(this._quat),this._spherical.setFromVector3(Ut),this.autoRotate&&this.state===pt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=dn:i>Math.PI&&(i-=dn),r<-Math.PI?r+=dn:r>Math.PI&&(r-=dn),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=a!=this._spherical.radius}if(Ut.setFromSpherical(this._spherical),Ut.applyQuaternion(this._quatInverse),t.copy(this.target).add(Ut),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=Ut.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const o=new N(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const c=new N(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=Ut.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(mo.origin.copy(this.object.position),mo.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(mo.direction))<IT?this.object.lookAt(this.target):(ep.setFromNormalAndCoplanarPoint(this.object.up,this.target),mo.intersectPlane(ep,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>xc||8*(1-this._lastQuaternion.dot(this.object.quaternion))>xc||this._lastTargetPosition.distanceToSquared(this.target)>xc?(this.dispatchEvent(Qf),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?dn/60*this.autoRotateSpeed*e:dn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Ut.setFromMatrixColumn(t,0),Ut.multiplyScalar(-e),this._panOffset.add(Ut)}_panUp(e,t){this.screenSpacePanning===!0?Ut.setFromMatrixColumn(t,1):(Ut.setFromMatrixColumn(t,0),Ut.crossVectors(this.object.up,Ut)),Ut.multiplyScalar(e),this._panOffset.add(Ut)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;Ut.copy(r).sub(this.target);let s=Ut.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/i.clientHeight,this.object.matrix),this._panUp(2*t*s/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),r=e-i.left,s=t-i.top,a=i.width,o=i.height;this._mouse.x=r/a*2-1,this._mouse.y=-(s/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(dn*this._rotateDelta.x/t.clientHeight),this._rotateUp(dn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(dn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-dn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(dn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-dn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(i,r)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(i*i+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),s=.5*(e.pageY+i.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(dn*this._rotateDelta.x/t.clientHeight),this._rotateUp(dn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Pe,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function LT(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function UT(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function NT(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Sg),this.state=pt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function FT(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case cs.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=pt.DOLLY;break;case cs.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=pt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=pt.ROTATE}break;case cs.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=pt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=pt.PAN}break;default:this.state=pt.NONE}this.state!==pt.NONE&&this.dispatchEvent(Iu)}function OT(n){switch(this.state){case pt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case pt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case pt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function BT(n){this.enabled===!1||this.enableZoom===!1||this.state!==pt.NONE||(n.preventDefault(),this.dispatchEvent(Iu),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(Sg))}function kT(n){this.enabled!==!1&&this._handleKeyDown(n)}function HT(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case es.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=pt.TOUCH_ROTATE;break;case es.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=pt.TOUCH_PAN;break;default:this.state=pt.NONE}break;case 2:switch(this.touches.TWO){case es.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=pt.TOUCH_DOLLY_PAN;break;case es.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=pt.TOUCH_DOLLY_ROTATE;break;default:this.state=pt.NONE}break;default:this.state=pt.NONE}this.state!==pt.NONE&&this.dispatchEvent(Iu)}function zT(n){switch(this._trackPointer(n),this.state){case pt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case pt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case pt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case pt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=pt.NONE}}function VT(n){this.enabled!==!1&&n.preventDefault()}function GT(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function WT(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class Ii{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const XT=new Cu(-1,1,1,-1,0,1);class jT extends Ln{constructor(){super(),this.setAttribute("position",new Zt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Zt([0,2,0,0,2,0],2))}}const YT=new jT;class Li{constructor(e){this._mesh=new kt(YT,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,XT)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Ml extends Ii{constructor(e,t,i=null,r=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=r,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Ce}render(e,t,i){const r=e.autoClear;e.autoClear=!1;let s,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=r}}const Eg={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class qT extends Ii{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof at?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=_l.clone(e.uniforms),this.material=new at({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Li(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class tp extends Ii{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){const r=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),s.buffers.stencil.setFunc(r.ALWAYS,a,4294967295),s.buffers.stencil.setClear(o),s.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(r.EQUAL,1,4294967295),s.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),s.buffers.stencil.setLocked(!0)}}class $T extends Ii{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class Ki{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const i=e.getSize(new Pe);this._width=i.width,this._height=i.height,t=new wt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Ms}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new qT(Eg),this.copyPass.material.blending=Pt,this.clock=new kM}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let i=!1;for(let r=0,s=this.passes.length;r<s;r++){const a=this.passes[r];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),a.needsSwap){if(i){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}tp!==void 0&&(a instanceof tp?i=!0:a instanceof $T&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Pe);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const i=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(i,r),this.renderTarget2.setSize(i,r);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(i,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}/*!
fflate - fast JavaScript compression/decompression
<https://101arrowz.github.io/fflate>
Licensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE
version 0.8.2
*/var Pn=Uint8Array,ns=Uint16Array,KT=Int32Array,bg=new Pn([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),wg=new Pn([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),ZT=new Pn([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Tg=function(n,e){for(var t=new ns(31),i=0;i<31;++i)t[i]=e+=1<<n[i-1];for(var r=new KT(t[30]),i=1;i<30;++i)for(var s=t[i];s<t[i+1];++s)r[s]=s-t[i]<<5|i;return{b:t,r}},Ag=Tg(bg,2),Cg=Ag.b,JT=Ag.r;Cg[28]=258,JT[258]=28;var QT=Tg(wg,0),eA=QT.b,Hh=new ns(32768);for(var xt=0;xt<32768;++xt){var zi=(xt&43690)>>1|(xt&21845)<<1;zi=(zi&52428)>>2|(zi&13107)<<2,zi=(zi&61680)>>4|(zi&3855)<<4,Hh[xt]=((zi&65280)>>8|(zi&255)<<8)>>1}var na=function(n,e,t){for(var i=n.length,r=0,s=new ns(e);r<i;++r)n[r]&&++s[n[r]-1];var a=new ns(e);for(r=1;r<e;++r)a[r]=a[r-1]+s[r-1]<<1;var o;if(t){o=new ns(1<<e);var l=15-e;for(r=0;r<i;++r)if(n[r])for(var c=r<<4|n[r],u=e-n[r],h=a[n[r]-1]++<<u,d=h|(1<<u)-1;h<=d;++h)o[Hh[h]>>l]=c}else for(o=new ns(i),r=0;r<i;++r)n[r]&&(o[r]=Hh[a[n[r]-1]++]>>15-n[r]);return o},Ia=new Pn(288);for(var xt=0;xt<144;++xt)Ia[xt]=8;for(var xt=144;xt<256;++xt)Ia[xt]=9;for(var xt=256;xt<280;++xt)Ia[xt]=7;for(var xt=280;xt<288;++xt)Ia[xt]=8;var Rg=new Pn(32);for(var xt=0;xt<32;++xt)Rg[xt]=5;var tA=na(Ia,9,1),nA=na(Rg,5,1),yc=function(n){for(var e=n[0],t=1;t<n.length;++t)n[t]>e&&(e=n[t]);return e},Hn=function(n,e,t){var i=e/8|0;return(n[i]|n[i+1]<<8)>>(e&7)&t},Mc=function(n,e){var t=e/8|0;return(n[t]|n[t+1]<<8|n[t+2]<<16)>>(e&7)},iA=function(n){return(n+7)/8|0},rA=function(n,e,t){return(t==null||t>n.length)&&(t=n.length),new Pn(n.subarray(e,t))},sA=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],zn=function(n,e,t){var i=new Error(e||sA[n]);if(i.code=n,Error.captureStackTrace&&Error.captureStackTrace(i,zn),!t)throw i;return i},aA=function(n,e,t,i){var r=n.length,s=0;if(!r||e.f&&!e.l)return t||new Pn(0);var a=!t,o=a||e.i!=2,l=e.i;a&&(t=new Pn(r*3));var c=function(Oe){var A=t.length;if(Oe>A){var C=new Pn(Math.max(A*2,Oe));C.set(t),t=C}},u=e.f||0,h=e.p||0,d=e.b||0,f=e.l,g=e.d,_=e.m,m=e.n,p=r*8;do{if(!f){u=Hn(n,h,1);var w=Hn(n,h+1,3);if(h+=3,w)if(w==1)f=tA,g=nA,_=9,m=5;else if(w==2){var U=Hn(n,h,31)+257,R=Hn(n,h+10,15)+4,O=U+Hn(n,h+5,31)+1;h+=14;for(var T=new Pn(O),b=new Pn(19),D=0;D<R;++D)b[ZT[D]]=Hn(n,h+D*3,7);h+=R*3;for(var te=yc(b),X=(1<<te)-1,ae=na(b,te,1),D=0;D<O;){var oe=ae[Hn(n,h,X)];h+=oe&15;var M=oe>>4;if(M<16)T[D++]=M;else{var J=0,Q=0;for(M==16?(Q=3+Hn(n,h,3),h+=2,J=T[D-1]):M==17?(Q=3+Hn(n,h,7),h+=3):M==18&&(Q=11+Hn(n,h,127),h+=7);Q--;)T[D++]=J}}var V=T.subarray(0,U),me=T.subarray(U);_=yc(V),m=yc(me),f=na(V,_,1),g=na(me,m,1)}else zn(1);else{var M=iA(h)+4,x=n[M-4]|n[M-3]<<8,I=M+x;if(I>r){l&&zn(0);break}o&&c(d+x),t.set(n.subarray(M,I),d),e.b=d+=x,e.p=h=I*8,e.f=u;continue}if(h>p){l&&zn(0);break}}o&&c(d+131072);for(var Se=(1<<_)-1,De=(1<<m)-1,Ue=h;;Ue=h){var J=f[Mc(n,h)&Se],$e=J>>4;if(h+=J&15,h>p){l&&zn(0);break}if(J||zn(2),$e<256)t[d++]=$e;else if($e==256){Ue=h,f=null;break}else{var re=$e-254;if($e>264){var D=$e-257,ge=bg[D];re=Hn(n,h,(1<<ge)-1)+Cg[D],h+=ge}var Me=g[Mc(n,h)&De],F=Me>>4;Me||zn(3),h+=Me&15;var me=eA[F];if(F>3){var ge=wg[F];me+=Mc(n,h)&(1<<ge)-1,h+=ge}if(h>p){l&&zn(0);break}o&&c(d+131072);var se=d+re;if(d<me){var ce=s-me,he=Math.min(me,se);for(ce+d<0&&zn(3);d<he;++d)t[d]=i[ce+d]}for(;d<se;++d)t[d]=t[d-me]}}e.l=f,e.p=Ue,e.b=d,e.f=u,f&&(u=1,e.m=_,e.d=g,e.n=m)}while(!u);return d!=t.length&&a?rA(t,0,d):t.subarray(0,d)},oA=new Pn(0),lA=function(n,e){return((n[0]&15)!=8||n[0]>>4>7||(n[0]<<8|n[1])%31)&&zn(6,"invalid zlib data"),(n[1]>>5&1)==1&&zn(6,"invalid zlib data: "+(n[1]&32?"need":"unexpected")+" dictionary"),(n[1]>>3&4)+2};function cA(n,e){return aA(n.subarray(lA(n),-4),{i:2},e,e)}var hA=typeof TextDecoder<"u"&&new TextDecoder,uA=0;try{hA.decode(oA,{stream:!0}),uA=1}catch{}function Pg(n,e,t){const i=t.length-n-1;if(e>=t[i])return i-1;if(e<=t[n])return n;let r=n,s=i,a=Math.floor((r+s)/2);for(;e<t[a]||e>=t[a+1];)e<t[a]?s=a:r=a,a=Math.floor((r+s)/2);return a}function dA(n,e,t,i){const r=[],s=[],a=[];r[0]=1;for(let o=1;o<=t;++o){s[o]=e-i[n+1-o],a[o]=i[n+o]-e;let l=0;for(let c=0;c<o;++c){const u=a[c+1],h=s[o-c],d=r[c]/(u+h);r[c]=l+u*d,l=h*d}r[o]=l}return r}function fA(n,e,t,i){const r=Pg(n,i,e),s=dA(r,i,n,e),a=new tt(0,0,0,0);for(let o=0;o<=n;++o){const l=t[r-n+o],c=s[o],u=l.w*c;a.x+=l.x*u,a.y+=l.y*u,a.z+=l.z*u,a.w+=l.w*c}return a}function pA(n,e,t,i,r){const s=[];for(let h=0;h<=t;++h)s[h]=0;const a=[];for(let h=0;h<=i;++h)a[h]=s.slice(0);const o=[];for(let h=0;h<=t;++h)o[h]=s.slice(0);o[0][0]=1;const l=s.slice(0),c=s.slice(0);for(let h=1;h<=t;++h){l[h]=e-r[n+1-h],c[h]=r[n+h]-e;let d=0;for(let f=0;f<h;++f){const g=c[f+1],_=l[h-f];o[h][f]=g+_;const m=o[f][h-1]/o[h][f];o[f][h]=d+g*m,d=_*m}o[h][h]=d}for(let h=0;h<=t;++h)a[0][h]=o[h][t];for(let h=0;h<=t;++h){let d=0,f=1;const g=[];for(let _=0;_<=t;++_)g[_]=s.slice(0);g[0][0]=1;for(let _=1;_<=i;++_){let m=0;const p=h-_,w=t-_;h>=_&&(g[f][0]=g[d][0]/o[w+1][p],m=g[f][0]*o[p][w]);const M=p>=-1?1:-p,x=h-1<=w?_-1:t-h;for(let U=M;U<=x;++U)g[f][U]=(g[d][U]-g[d][U-1])/o[w+1][p+U],m+=g[f][U]*o[p+U][w];h<=w&&(g[f][_]=-g[d][_-1]/o[w+1][h],m+=g[f][_]*o[h][w]),a[_][h]=m;const I=d;d=f,f=I}}let u=t;for(let h=1;h<=i;++h){for(let d=0;d<=t;++d)a[h][d]*=u;u*=t-h}return a}function mA(n,e,t,i,r){const s=r<n?r:n,a=[],o=Pg(n,i,e),l=pA(o,i,n,s,e),c=[];for(let u=0;u<t.length;++u){const h=t[u].clone(),d=h.w;h.x*=d,h.y*=d,h.z*=d,c[u]=h}for(let u=0;u<=s;++u){const h=c[o-n].clone().multiplyScalar(l[u][0]);for(let d=1;d<=n;++d)h.add(c[o-n+d].clone().multiplyScalar(l[u][d]));a[u]=h}for(let u=s+1;u<=r+1;++u)a[u]=new tt(0,0,0);return a}function gA(n,e){let t=1;for(let r=2;r<=n;++r)t*=r;let i=1;for(let r=2;r<=e;++r)i*=r;for(let r=2;r<=n-e;++r)i*=r;return t/i}function _A(n){const e=n.length,t=[],i=[];for(let s=0;s<e;++s){const a=n[s];t[s]=new N(a.x,a.y,a.z),i[s]=a.w}const r=[];for(let s=0;s<e;++s){const a=t[s].clone();for(let o=1;o<=s;++o)a.sub(r[s-o].clone().multiplyScalar(gA(s,o)*i[o]));r[s]=a.divideScalar(i[0])}return r}function vA(n,e,t,i,r){const s=mA(n,e,t,i,r);return _A(s)}class xA extends Zy{constructor(e,t,i,r,s){super();const a=t?t.length-1:0,o=i?i.length:0;this.degree=e,this.knots=t,this.controlPoints=[],this.startKnot=r||0,this.endKnot=s||a;for(let l=0;l<o;++l){const c=i[l];this.controlPoints[l]=new tt(c.x,c.y,c.z,c.w)}}getPoint(e,t=new N){const i=t,r=this.knots[this.startKnot]+e*(this.knots[this.endKnot]-this.knots[this.startKnot]),s=fA(this.degree,this.knots,this.controlPoints,r);return s.w!==1&&s.divideScalar(s.w),i.set(s.x,s.y,s.z)}getTangent(e,t=new N){const i=t,r=this.knots[0]+e*(this.knots[this.knots.length-1]-this.knots[0]),s=vA(this.degree,this.knots,this.controlPoints,r,1);return i.copy(s[1]).normalize(),i}toJSON(){const e=super.toJSON();return e.degree=this.degree,e.knots=[...this.knots],e.controlPoints=this.controlPoints.map(t=>t.toArray()),e.startKnot=this.startKnot,e.endKnot=this.endKnot,e}fromJSON(e){return super.fromJSON(e),this.degree=e.degree,this.knots=[...e.knots],this.controlPoints=e.controlPoints.map(t=>new tt(t[0],t[1],t[2],t[3])),this.startKnot=e.startKnot,this.endKnot=e.endKnot,this}}let et,Rt,ln;class Cs extends Ar{constructor(e){super(e)}load(e,t,i,r){const s=this,a=s.path===""?OM.extractUrlBase(e):s.path,o=new DM(this.manager);o.setPath(s.path),o.setResponseType("arraybuffer"),o.setRequestHeader(s.requestHeader),o.setWithCredentials(s.withCredentials),o.load(e,function(l){try{t(s.parse(l,a))}catch(c){r?r(c):console.error(c),s.manager.itemError(e)}},i,r)}parse(e,t){if(wA(e))et=new bA().parse(e);else{const r=Lg(e);if(!TA(r))throw new Error("THREE.FBXLoader: Unknown format.");if(ip(r)<7e3)throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: "+ip(r));et=new EA().parse(r)}const i=new nn(this.manager).setPath(this.resourcePath||t).setCrossOrigin(this.crossOrigin);return new yA(i,this.manager).parse(et)}}class yA{constructor(e,t){this.textureLoader=e,this.manager=t}parse(){Rt=this.parseConnections();const e=this.parseImages(),t=this.parseTextures(e),i=this.parseMaterials(t),r=this.parseDeformers(),s=new MA().parse(r);return this.parseScene(r,s,i),ln}parseConnections(){const e=new Map;return"Connections"in et&&et.Connections.connections.forEach(function(i){const r=i[0],s=i[1],a=i[2];e.has(r)||e.set(r,{parents:[],children:[]});const o={ID:s,relationship:a};e.get(r).parents.push(o),e.has(s)||e.set(s,{parents:[],children:[]});const l={ID:r,relationship:a};e.get(s).children.push(l)}),e}parseImages(){const e={},t={};if("Video"in et.Objects){const i=et.Objects.Video;for(const r in i){const s=i[r],a=parseInt(r);if(e[a]=s.RelativeFilename||s.Filename,"Content"in s){const o=s.Content instanceof ArrayBuffer&&s.Content.byteLength>0,l=typeof s.Content=="string"&&s.Content!=="";if(o||l){const c=this.parseImage(i[r]);t[s.RelativeFilename||s.Filename]=c}}}}for(const i in e){const r=e[i];t[r]!==void 0?e[i]=t[r]:e[i]=e[i].split("\\").pop()}return e}parseImage(e){const t=e.Content,i=e.RelativeFilename||e.Filename,r=i.slice(i.lastIndexOf(".")+1).toLowerCase();let s;switch(r){case"bmp":s="image/bmp";break;case"jpg":case"jpeg":s="image/jpeg";break;case"png":s="image/png";break;case"tif":s="image/tiff";break;case"tga":this.manager.getHandler(".tga")===null&&console.warn("FBXLoader: TGA loader not found, skipping ",i),s="image/tga";break;default:console.warn('FBXLoader: Image type "'+r+'" is not supported.');return}if(typeof t=="string")return"data:"+s+";base64,"+t;{const a=new Uint8Array(t);return window.URL.createObjectURL(new Blob([a],{type:s}))}}parseTextures(e){const t=new Map;if("Texture"in et.Objects){const i=et.Objects.Texture;for(const r in i){const s=this.parseTexture(i[r],e);t.set(parseInt(r),s)}}return t}parseTexture(e,t){const i=this.loadTexture(e,t);i.ID=e.id,i.name=e.attrName;const r=e.WrapModeU,s=e.WrapModeV,a=r!==void 0?r.value:0,o=s!==void 0?s.value:0;if(i.wrapS=a===0?fa:Mi,i.wrapT=o===0?fa:Mi,"Scaling"in e){const l=e.Scaling.value;i.repeat.x=l[0],i.repeat.y=l[1]}if("Translation"in e){const l=e.Translation.value;i.offset.x=l[0],i.offset.y=l[1]}return i}loadTexture(e,t){const i=new Set(["tga","tif","tiff","exr","dds","hdr","ktx2"]),r=e.FileName.split(".").pop().toLowerCase(),s=i.has(r)?this.manager.getHandler(`.${r}`):this.textureLoader;if(!s)return console.warn(`FBXLoader: ${r.toUpperCase()} loader not found, creating placeholder texture for`,e.RelativeFilename),new Vt;const a=s.path;a||s.setPath(this.textureLoader.path);const o=Rt.get(e.id).children;let l;o!==void 0&&o.length>0&&t[o[0].ID]!==void 0&&(l=t[o[0].ID],(l.indexOf("blob:")===0||l.indexOf("data:")===0)&&s.setPath(void 0));const c=s.load(l);return s.setPath(a),c}parseMaterials(e){const t=new Map;if("Material"in et.Objects){const i=et.Objects.Material;for(const r in i){const s=this.parseMaterial(i[r],e);s!==null&&t.set(parseInt(r),s)}}return t}parseMaterial(e,t){const i=e.id,r=e.attrName;let s=e.ShadingModel;if(typeof s=="object"&&(s=s.value),!Rt.has(i))return null;const a=this.parseParameters(e,t,i);let o;switch(s.toLowerCase()){case"phong":o=new co;break;case"lambert":o=new _M;break;default:console.warn('THREE.FBXLoader: unknown material type "%s". Defaulting to MeshPhongMaterial.',s),o=new co;break}return o.setValues(a),o.name=r,o}parseParameters(e,t,i){const r={};e.BumpFactor&&(r.bumpScale=e.BumpFactor.value),e.Diffuse?r.color=Ze.toWorkingColorSpace(new Ce().fromArray(e.Diffuse.value),st):e.DiffuseColor&&(e.DiffuseColor.type==="Color"||e.DiffuseColor.type==="ColorRGB")&&(r.color=Ze.toWorkingColorSpace(new Ce().fromArray(e.DiffuseColor.value),st)),e.DisplacementFactor&&(r.displacementScale=e.DisplacementFactor.value),e.Emissive?r.emissive=Ze.toWorkingColorSpace(new Ce().fromArray(e.Emissive.value),st):e.EmissiveColor&&(e.EmissiveColor.type==="Color"||e.EmissiveColor.type==="ColorRGB")&&(r.emissive=Ze.toWorkingColorSpace(new Ce().fromArray(e.EmissiveColor.value),st)),e.EmissiveFactor&&(r.emissiveIntensity=parseFloat(e.EmissiveFactor.value)),r.opacity=1-(e.TransparencyFactor?parseFloat(e.TransparencyFactor.value):0),(r.opacity===1||r.opacity===0)&&(r.opacity=e.Opacity?parseFloat(e.Opacity.value):null,r.opacity===null&&(r.opacity=1-(e.TransparentColor?parseFloat(e.TransparentColor.value[0]):0))),r.opacity<1&&(r.transparent=!0),e.ReflectionFactor&&(r.reflectivity=e.ReflectionFactor.value),e.Shininess&&(r.shininess=e.Shininess.value),e.Specular?r.specular=Ze.toWorkingColorSpace(new Ce().fromArray(e.Specular.value),st):e.SpecularColor&&e.SpecularColor.type==="Color"&&(r.specular=Ze.toWorkingColorSpace(new Ce().fromArray(e.SpecularColor.value),st));const s=this;return Rt.get(i).children.forEach(function(a){const o=a.relationship;switch(o){case"Bump":r.bumpMap=s.getTexture(t,a.ID);break;case"Maya|TEX_ao_map":r.aoMap=s.getTexture(t,a.ID);break;case"DiffuseColor":case"Maya|TEX_color_map":r.map=s.getTexture(t,a.ID),r.map!==void 0&&(r.map.colorSpace=st);break;case"DisplacementColor":r.displacementMap=s.getTexture(t,a.ID);break;case"EmissiveColor":r.emissiveMap=s.getTexture(t,a.ID),r.emissiveMap!==void 0&&(r.emissiveMap.colorSpace=st);break;case"NormalMap":case"Maya|TEX_normal_map":r.normalMap=s.getTexture(t,a.ID);break;case"ReflectionColor":r.envMap=s.getTexture(t,a.ID),r.envMap!==void 0&&(r.envMap.mapping=Wo,r.envMap.colorSpace=st);break;case"SpecularColor":r.specularMap=s.getTexture(t,a.ID),r.specularMap!==void 0&&(r.specularMap.colorSpace=st);break;case"TransparentColor":case"TransparencyFactor":r.alphaMap=s.getTexture(t,a.ID),r.transparent=!0;break;case"AmbientColor":case"ShininessExponent":case"SpecularFactor":case"VectorDisplacementColor":default:console.warn("THREE.FBXLoader: %s map is not supported in three.js, skipping texture.",o);break}}),r}getTexture(e,t){return"LayeredTexture"in et.Objects&&t in et.Objects.LayeredTexture&&(console.warn("THREE.FBXLoader: layered textures are not supported in three.js. Discarding all but first layer."),t=Rt.get(t).children[0].ID),e.get(t)}parseDeformers(){const e={},t={};if("Deformer"in et.Objects){const i=et.Objects.Deformer;for(const r in i){const s=i[r],a=Rt.get(parseInt(r));if(s.attrType==="Skin"){const o=this.parseSkeleton(a,i);o.ID=r,a.parents.length>1&&console.warn("THREE.FBXLoader: skeleton attached to more than one geometry is not supported."),o.geometryID=a.parents[0].ID,e[r]=o}else if(s.attrType==="BlendShape"){const o={id:r};o.rawTargets=this.parseMorphTargets(a,i),o.id=r,a.parents.length>1&&console.warn("THREE.FBXLoader: morph target attached to more than one geometry is not supported."),t[r]=o}}}return{skeletons:e,morphTargets:t}}parseSkeleton(e,t){const i=[];return e.children.forEach(function(r){const s=t[r.ID];if(s.attrType!=="Cluster")return;const a={ID:r.ID,indices:[],weights:[],transformLink:new Ne().fromArray(s.TransformLink.a)};"Indexes"in s&&(a.indices=s.Indexes.a,a.weights=s.Weights.a),i.push(a)}),{rawBones:i,bones:[]}}parseMorphTargets(e,t){const i=[];for(let r=0;r<e.children.length;r++){const s=e.children[r],a=t[s.ID],o={name:a.attrName,initialWeight:a.DeformPercent,id:a.id,fullWeights:a.FullWeights.a};if(a.attrType!=="BlendShapeChannel")return;o.geoID=Rt.get(parseInt(s.ID)).children.filter(function(l){return l.relationship===void 0})[0].ID,i.push(o)}return i}parseScene(e,t,i){ln=new Dn;const r=this.parseModels(e.skeletons,t,i),s=et.Objects.Model,a=this;r.forEach(function(l){const c=s[l.ID];a.setLookAtProperties(l,c),Rt.get(l.ID).parents.forEach(function(h){const d=r.get(h.ID);d!==void 0&&d.add(l)}),l.parent===null&&ln.add(l)}),this.bindSkeleton(e.skeletons,t,r),this.addGlobalSceneSettings(),ln.traverse(function(l){if(l.userData.transformData){l.parent&&(l.userData.transformData.parentMatrix=l.parent.matrix,l.userData.transformData.parentMatrixWorld=l.parent.matrixWorld);const c=Ig(l.userData.transformData);l.applyMatrix4(c),l.updateWorldMatrix()}});const o=new SA().parse();ln.children.length===1&&ln.children[0].isGroup&&(ln.children[0].animations=o,ln=ln.children[0]),ln.animations=o}parseModels(e,t,i){const r=new Map,s=et.Objects.Model;for(const a in s){const o=parseInt(a),l=s[a],c=Rt.get(o);let u=this.buildSkeleton(c,e,o,l.attrName);if(!u){switch(l.attrType){case"Camera":u=this.createCamera(c);break;case"Light":u=this.createLight(c);break;case"Mesh":u=this.createMesh(c,t,i);break;case"NurbsCurve":u=this.createCurve(c,t);break;case"LimbNode":case"Root":u=new Fh;break;case"Null":default:u=new Dn;break}u.name=l.attrName?rt.sanitizeNodeName(l.attrName):"",u.userData.originalName=l.attrName,u.ID=o}this.getTransformData(u,l),r.set(o,u)}return r}buildSkeleton(e,t,i,r){let s=null;return e.parents.forEach(function(a){for(const o in t){const l=t[o];l.rawBones.forEach(function(c,u){if(c.ID===a.ID){const h=s;s=new Fh,s.matrixWorld.copy(c.transformLink),s.name=r?rt.sanitizeNodeName(r):"",s.userData.originalName=r,s.ID=i,l.bones[u]=s,h!==null&&s.add(h)}})}}),s}createCamera(e){let t,i;if(e.children.forEach(function(r){const s=et.Objects.NodeAttribute[r.ID];s!==void 0&&(i=s)}),i===void 0)t=new Mt;else{let r=0;i.CameraProjectionType!==void 0&&i.CameraProjectionType.value===1&&(r=1);let s=1;i.NearPlane!==void 0&&(s=i.NearPlane.value/1e3);let a=1e3;i.FarPlane!==void 0&&(a=i.FarPlane.value/1e3);let o=window.innerWidth,l=window.innerHeight;i.AspectWidth!==void 0&&i.AspectHeight!==void 0&&(o=i.AspectWidth.value,l=i.AspectHeight.value);const c=o/l;let u=45;i.FieldOfView!==void 0&&(u=i.FieldOfView.value);const h=i.FocalLength?i.FocalLength.value:null;switch(r){case 0:t=new Et(u,c,s,a),h!==null&&t.setFocalLength(h);break;case 1:console.warn("THREE.FBXLoader: Orthographic cameras not supported yet."),t=new Mt;break;default:console.warn("THREE.FBXLoader: Unknown camera type "+r+"."),t=new Mt;break}}return t}createLight(e){let t,i;if(e.children.forEach(function(r){const s=et.Objects.NodeAttribute[r.ID];s!==void 0&&(i=s)}),i===void 0)t=new Mt;else{let r;i.LightType===void 0?r=0:r=i.LightType.value;let s=16777215;i.Color!==void 0&&(s=Ze.toWorkingColorSpace(new Ce().fromArray(i.Color.value),st));let a=i.Intensity===void 0?1:i.Intensity.value/100;i.CastLightOnObject!==void 0&&i.CastLightOnObject.value===0&&(a=0);let o=0;i.FarAttenuationEnd!==void 0&&(i.EnableFarAttenuation!==void 0&&i.EnableFarAttenuation.value===0?o=0:o=i.FarAttenuationEnd.value);const l=1;switch(r){case 0:t=new Zo(s,a,o,l);break;case 1:t=new ir(s,a);break;case 2:let c=Math.PI/3;i.InnerAngle!==void 0&&(c=Yt.degToRad(i.InnerAngle.value));let u=0;i.OuterAngle!==void 0&&(u=Yt.degToRad(i.OuterAngle.value),u=Math.max(u,1)),t=new UM(s,a,o,c,u,l);break;default:console.warn("THREE.FBXLoader: Unknown light type "+i.LightType.value+", defaulting to a PointLight."),t=new Zo(s,a);break}i.CastShadows!==void 0&&i.CastShadows.value===1&&(t.castShadow=!0)}return t}createMesh(e,t,i){let r,s=null,a=null;const o=[];if(e.children.forEach(function(l){t.has(l.ID)&&(s=t.get(l.ID)),i.has(l.ID)&&o.push(i.get(l.ID))}),o.length>1?a=o:o.length>0?a=o[0]:(a=new co({name:Ar.DEFAULT_MATERIAL_NAME,color:13421772}),o.push(a)),"color"in s.attributes&&o.forEach(function(l){l.vertexColors=!0}),s.groups.length>0){let l=!1;for(let c=0,u=s.groups.length;c<u;c++){const h=s.groups[c];(h.materialIndex<0||h.materialIndex>=o.length)&&(h.materialIndex=o.length,l=!0)}if(l){const c=new co;o.push(c)}}return s.FBX_Deformer?(r=new Xy(s,a),r.normalizeSkinWeights()):r=new kt(s,a),r}createCurve(e,t){const i=e.children.reduce(function(s,a){return t.has(a.ID)&&(s=t.get(a.ID)),s},null),r=new cg({name:Ar.DEFAULT_MATERIAL_NAME,color:3342591,linewidth:1});return new Ky(i,r)}getTransformData(e,t){const i={};"InheritType"in t&&(i.inheritType=parseInt(t.InheritType.value)),"RotationOrder"in t?i.eulerOrder=wa(t.RotationOrder.value):i.eulerOrder=wa(0),"Lcl_Translation"in t&&(i.translation=t.Lcl_Translation.value),"PreRotation"in t&&(i.preRotation=t.PreRotation.value),"Lcl_Rotation"in t&&(i.rotation=t.Lcl_Rotation.value),"PostRotation"in t&&(i.postRotation=t.PostRotation.value),"Lcl_Scaling"in t&&(i.scale=t.Lcl_Scaling.value),"ScalingOffset"in t&&(i.scalingOffset=t.ScalingOffset.value),"ScalingPivot"in t&&(i.scalingPivot=t.ScalingPivot.value),"RotationOffset"in t&&(i.rotationOffset=t.RotationOffset.value),"RotationPivot"in t&&(i.rotationPivot=t.RotationPivot.value),e.userData.transformData=i}setLookAtProperties(e,t){"LookAtProperty"in t&&Rt.get(e.ID).children.forEach(function(r){if(r.relationship==="LookAtProperty"){const s=et.Objects.Model[r.ID];if("Lcl_Translation"in s){const a=s.Lcl_Translation.value;e.target!==void 0?(e.target.position.fromArray(a),ln.add(e.target)):e.lookAt(new N().fromArray(a))}}})}bindSkeleton(e,t,i){const r=this.parsePoseNodes();for(const s in e){const a=e[s];Rt.get(parseInt(a.ID)).parents.forEach(function(l){if(t.has(l.ID)){const c=l.ID;Rt.get(c).parents.forEach(function(h){i.has(h.ID)&&i.get(h.ID).bind(new bu(a.bones),r[h.ID])})}})}}parsePoseNodes(){const e={};if("Pose"in et.Objects){const t=et.Objects.Pose;for(const i in t)if(t[i].attrType==="BindPose"&&t[i].NbPoseNodes>0){const r=t[i].PoseNode;Array.isArray(r)?r.forEach(function(s){e[s.Node]=new Ne().fromArray(s.Matrix.a)}):e[r.Node]=new Ne().fromArray(r.Matrix.a)}}return e}addGlobalSceneSettings(){if("GlobalSettings"in et){if("AmbientColor"in et.GlobalSettings){const e=et.GlobalSettings.AmbientColor.value,t=e[0],i=e[1],r=e[2];if(t!==0||i!==0||r!==0){const s=new Ce().setRGB(t,i,r,st);ln.add(new rr(s,1))}}"UnitScaleFactor"in et.GlobalSettings&&(ln.userData.unitScaleFactor=et.GlobalSettings.UnitScaleFactor.value)}}}class MA{constructor(){this.negativeMaterialIndices=!1}parse(e){const t=new Map;if("Geometry"in et.Objects){const i=et.Objects.Geometry;for(const r in i){const s=Rt.get(parseInt(r)),a=this.parseGeometry(s,i[r],e);t.set(parseInt(r),a)}}return this.negativeMaterialIndices===!0&&console.warn("THREE.FBXLoader: The FBX file contains invalid (negative) material indices. The asset might not render as expected."),t}parseGeometry(e,t,i){switch(t.attrType){case"Mesh":return this.parseMeshGeometry(e,t,i);case"NurbsCurve":return this.parseNurbsGeometry(t)}}parseMeshGeometry(e,t,i){const r=i.skeletons,s=[],a=e.parents.map(function(h){return et.Objects.Model[h.ID]});if(a.length===0)return;const o=e.children.reduce(function(h,d){return r[d.ID]!==void 0&&(h=r[d.ID]),h},null);e.children.forEach(function(h){i.morphTargets[h.ID]!==void 0&&s.push(i.morphTargets[h.ID])});const l=a[0],c={};"RotationOrder"in l&&(c.eulerOrder=wa(l.RotationOrder.value)),"InheritType"in l&&(c.inheritType=parseInt(l.InheritType.value)),"GeometricTranslation"in l&&(c.translation=l.GeometricTranslation.value),"GeometricRotation"in l&&(c.rotation=l.GeometricRotation.value),"GeometricScaling"in l&&(c.scale=l.GeometricScaling.value);const u=Ig(c);return this.genGeometry(t,o,s,u)}genGeometry(e,t,i,r){const s=new Ln;e.attrName&&(s.name=e.attrName);const a=this.parseGeoNode(e,t),o=this.genBuffers(a),l=new Zt(o.vertex,3);if(l.applyMatrix4(r),s.setAttribute("position",l),o.colors.length>0&&s.setAttribute("color",new Zt(o.colors,3)),t&&(s.setAttribute("skinIndex",new Eu(o.weightsIndices,4)),s.setAttribute("skinWeight",new Zt(o.vertexWeights,4)),s.FBX_Deformer=t),o.normal.length>0){const c=new Xe().getNormalMatrix(r),u=new Zt(o.normal,3);u.applyNormalMatrix(c),s.setAttribute("normal",u)}if(o.uvs.forEach(function(c,u){const h=u===0?"uv":`uv${u}`;s.setAttribute(h,new Zt(o.uvs[u],2))}),a.material&&a.material.mappingType!=="AllSame"){let c=o.materialIndex[0],u=0;if(o.materialIndex.forEach(function(h,d){h!==c&&(s.addGroup(u,d-u,c),c=h,u=d)}),s.groups.length>0){const h=s.groups[s.groups.length-1],d=h.start+h.count;d!==o.materialIndex.length&&s.addGroup(d,o.materialIndex.length-d,c)}s.groups.length===0&&s.addGroup(0,o.materialIndex.length,o.materialIndex[0])}return this.addMorphTargets(s,e,i,r),s}parseGeoNode(e,t){const i={};if(i.vertexPositions=e.Vertices!==void 0?e.Vertices.a:[],i.vertexIndices=e.PolygonVertexIndex!==void 0?e.PolygonVertexIndex.a:[],e.LayerElementColor&&(i.color=this.parseVertexColors(e.LayerElementColor[0])),e.LayerElementMaterial&&(i.material=this.parseMaterialIndices(e.LayerElementMaterial[0])),e.LayerElementNormal&&(i.normal=this.parseNormals(e.LayerElementNormal[0])),e.LayerElementUV){i.uv=[];let r=0;for(;e.LayerElementUV[r];)e.LayerElementUV[r].UV&&i.uv.push(this.parseUVs(e.LayerElementUV[r])),r++}return i.weightTable={},t!==null&&(i.skeleton=t,t.rawBones.forEach(function(r,s){r.indices.forEach(function(a,o){i.weightTable[a]===void 0&&(i.weightTable[a]=[]),i.weightTable[a].push({id:s,weight:r.weights[o]})})})),i}genBuffers(e){const t={vertex:[],normal:[],colors:[],uvs:[],materialIndex:[],vertexWeights:[],weightsIndices:[]};let i=0,r=0,s=!1,a=[],o=[],l=[],c=[],u=[],h=[];const d=this;return e.vertexIndices.forEach(function(f,g){let _,m=!1;f<0&&(f=f^-1,m=!0);let p=[],w=[];if(a.push(f*3,f*3+1,f*3+2),e.color){const M=go(g,i,f,e.color);l.push(M[0],M[1],M[2])}if(e.skeleton){if(e.weightTable[f]!==void 0&&e.weightTable[f].forEach(function(M){w.push(M.weight),p.push(M.id)}),w.length>4){s||(console.warn("THREE.FBXLoader: Vertex has more than 4 skinning weights assigned to vertex. Deleting additional weights."),s=!0);const M=[0,0,0,0],x=[0,0,0,0];w.forEach(function(I,U){let R=I,O=p[U];x.forEach(function(T,b,D){if(R>T){D[b]=R,R=T;const te=M[b];M[b]=O,O=te}})}),p=M,w=x}for(;w.length<4;)w.push(0),p.push(0);for(let M=0;M<4;++M)u.push(w[M]),h.push(p[M])}if(e.normal){const M=go(g,i,f,e.normal);o.push(M[0],M[1],M[2])}e.material&&e.material.mappingType!=="AllSame"&&(_=go(g,i,f,e.material)[0],_<0&&(d.negativeMaterialIndices=!0,_=0)),e.uv&&e.uv.forEach(function(M,x){const I=go(g,i,f,M);c[x]===void 0&&(c[x]=[]),c[x].push(I[0]),c[x].push(I[1])}),r++,m&&(d.genFace(t,e,a,_,o,l,c,u,h,r),i++,r=0,a=[],o=[],l=[],c=[],u=[],h=[])}),t}getNormalNewell(e){const t=new N(0,0,0);for(let i=0;i<e.length;i++){const r=e[i],s=e[(i+1)%e.length];t.x+=(r.y-s.y)*(r.z+s.z),t.y+=(r.z-s.z)*(r.x+s.x),t.z+=(r.x-s.x)*(r.y+s.y)}return t.normalize(),t}getNormalTangentAndBitangent(e){const t=this.getNormalNewell(e),r=(Math.abs(t.z)>.5?new N(0,1,0):new N(0,0,1)).cross(t).normalize(),s=t.clone().cross(r).normalize();return{normal:t,tangent:r,bitangent:s}}flattenVertex(e,t,i){return new Pe(e.dot(t),e.dot(i))}genFace(e,t,i,r,s,a,o,l,c,u){let h;if(u>3){const d=[],f=t.baseVertexPositions||t.vertexPositions;for(let p=0;p<i.length;p+=3)d.push(new N(f[i[p]],f[i[p+1]],f[i[p+2]]));const{tangent:g,bitangent:_}=this.getNormalTangentAndBitangent(d),m=[];for(const p of d)m.push(this.flattenVertex(p,g,_));h=Tu.triangulateShape(m,[])}else h=[[0,1,2]];for(const[d,f,g]of h)e.vertex.push(t.vertexPositions[i[d*3]]),e.vertex.push(t.vertexPositions[i[d*3+1]]),e.vertex.push(t.vertexPositions[i[d*3+2]]),e.vertex.push(t.vertexPositions[i[f*3]]),e.vertex.push(t.vertexPositions[i[f*3+1]]),e.vertex.push(t.vertexPositions[i[f*3+2]]),e.vertex.push(t.vertexPositions[i[g*3]]),e.vertex.push(t.vertexPositions[i[g*3+1]]),e.vertex.push(t.vertexPositions[i[g*3+2]]),t.skeleton&&(e.vertexWeights.push(l[d*4]),e.vertexWeights.push(l[d*4+1]),e.vertexWeights.push(l[d*4+2]),e.vertexWeights.push(l[d*4+3]),e.vertexWeights.push(l[f*4]),e.vertexWeights.push(l[f*4+1]),e.vertexWeights.push(l[f*4+2]),e.vertexWeights.push(l[f*4+3]),e.vertexWeights.push(l[g*4]),e.vertexWeights.push(l[g*4+1]),e.vertexWeights.push(l[g*4+2]),e.vertexWeights.push(l[g*4+3]),e.weightsIndices.push(c[d*4]),e.weightsIndices.push(c[d*4+1]),e.weightsIndices.push(c[d*4+2]),e.weightsIndices.push(c[d*4+3]),e.weightsIndices.push(c[f*4]),e.weightsIndices.push(c[f*4+1]),e.weightsIndices.push(c[f*4+2]),e.weightsIndices.push(c[f*4+3]),e.weightsIndices.push(c[g*4]),e.weightsIndices.push(c[g*4+1]),e.weightsIndices.push(c[g*4+2]),e.weightsIndices.push(c[g*4+3])),t.color&&(e.colors.push(a[d*3]),e.colors.push(a[d*3+1]),e.colors.push(a[d*3+2]),e.colors.push(a[f*3]),e.colors.push(a[f*3+1]),e.colors.push(a[f*3+2]),e.colors.push(a[g*3]),e.colors.push(a[g*3+1]),e.colors.push(a[g*3+2])),t.material&&t.material.mappingType!=="AllSame"&&(e.materialIndex.push(r),e.materialIndex.push(r),e.materialIndex.push(r)),t.normal&&(e.normal.push(s[d*3]),e.normal.push(s[d*3+1]),e.normal.push(s[d*3+2]),e.normal.push(s[f*3]),e.normal.push(s[f*3+1]),e.normal.push(s[f*3+2]),e.normal.push(s[g*3]),e.normal.push(s[g*3+1]),e.normal.push(s[g*3+2])),t.uv&&t.uv.forEach(function(_,m){e.uvs[m]===void 0&&(e.uvs[m]=[]),e.uvs[m].push(o[m][d*2]),e.uvs[m].push(o[m][d*2+1]),e.uvs[m].push(o[m][f*2]),e.uvs[m].push(o[m][f*2+1]),e.uvs[m].push(o[m][g*2]),e.uvs[m].push(o[m][g*2+1])})}addMorphTargets(e,t,i,r){if(i.length===0)return;e.morphTargetsRelative=!0,e.morphAttributes.position=[];const s=this;i.forEach(function(a){a.rawTargets.forEach(function(o){const l=et.Objects.Geometry[o.geoID];l!==void 0&&s.genMorphGeometry(e,t,l,r,o.name)})})}genMorphGeometry(e,t,i,r,s){const a=t.Vertices!==void 0?t.Vertices.a:[],o=t.PolygonVertexIndex!==void 0?t.PolygonVertexIndex.a:[],l=i.Vertices!==void 0?i.Vertices.a:[],c=i.Indexes!==void 0?i.Indexes.a:[],u=e.attributes.position.count*3,h=new Float32Array(u);for(let _=0;_<c.length;_++){const m=c[_]*3;h[m]=l[_*3],h[m+1]=l[_*3+1],h[m+2]=l[_*3+2]}const d={vertexIndices:o,vertexPositions:h,baseVertexPositions:a},f=this.genBuffers(d),g=new Zt(f.vertex,3);g.name=s||i.attrName,g.applyMatrix4(r),e.morphAttributes.position.push(g)}parseNormals(e){const t=e.MappingInformationType,i=e.ReferenceInformationType,r=e.Normals.a;let s=[];return i==="IndexToDirect"&&("NormalIndex"in e?s=e.NormalIndex.a:"NormalsIndex"in e&&(s=e.NormalsIndex.a)),{dataSize:3,buffer:r,indices:s,mappingType:t,referenceType:i}}parseUVs(e){const t=e.MappingInformationType,i=e.ReferenceInformationType,r=e.UV.a;let s=[];return i==="IndexToDirect"&&(s=e.UVIndex.a),{dataSize:2,buffer:r,indices:s,mappingType:t,referenceType:i}}parseVertexColors(e){const t=e.MappingInformationType,i=e.ReferenceInformationType,r=e.Colors.a;let s=[];i==="IndexToDirect"&&(s=e.ColorIndex.a);for(let a=0,o=new Ce;a<r.length;a+=4)o.fromArray(r,a),Ze.toWorkingColorSpace(o,st),o.toArray(r,a);return{dataSize:4,buffer:r,indices:s,mappingType:t,referenceType:i}}parseMaterialIndices(e){const t=e.MappingInformationType,i=e.ReferenceInformationType;if(t==="NoMappingInformation")return{dataSize:1,buffer:[0],indices:[0],mappingType:"AllSame",referenceType:i};const r=e.Materials.a,s=[];for(let a=0;a<r.length;++a)s.push(a);return{dataSize:1,buffer:r,indices:s,mappingType:t,referenceType:i}}parseNurbsGeometry(e){const t=parseInt(e.Order);if(isNaN(t))return console.error("THREE.FBXLoader: Invalid Order %s given for geometry ID: %s",e.Order,e.id),new Ln;const i=t-1,r=e.KnotVector.a,s=[],a=e.Points.a;for(let h=0,d=a.length;h<d;h+=4)s.push(new tt().fromArray(a,h));let o,l;if(e.Form==="Closed")s.push(s[0]);else if(e.Form==="Periodic"){o=i,l=r.length-1-o;for(let h=0;h<i;++h)s.push(s[h])}const u=new xA(i,r,s,o,l).getPoints(s.length*12);return new Ln().setFromPoints(u)}}class SA{parse(){const e=[],t=this.parseClips();if(t!==void 0)for(const i in t){const r=t[i],s=this.addClip(r);e.push(s)}return e}parseClips(){if(et.Objects.AnimationCurve===void 0)return;const e=this.parseAnimationCurveNodes();this.parseAnimationCurves(e);const t=this.parseAnimationLayers(e);return this.parseAnimStacks(t)}parseAnimationCurveNodes(){const e=et.Objects.AnimationCurveNode,t=new Map;for(const i in e){const r=e[i];if(r.attrName.match(/S|R|T|DeformPercent/)!==null){const s={id:r.id,attr:r.attrName,curves:{}};t.set(s.id,s)}}return t}parseAnimationCurves(e){const t=et.Objects.AnimationCurve;for(const i in t){const r={id:t[i].id,times:t[i].KeyTime.a.map(AA),values:t[i].KeyValueFloat.a},s=Rt.get(r.id);if(s!==void 0){const a=s.parents[0].ID,o=s.parents[0].relationship;o.match(/X/)?e.get(a).curves.x=r:o.match(/Y/)?e.get(a).curves.y=r:o.match(/Z/)?e.get(a).curves.z=r:o.match(/DeformPercent/)&&e.has(a)&&(e.get(a).curves.morph=r)}}}parseAnimationLayers(e){const t=et.Objects.AnimationLayer,i=new Map;for(const r in t){const s=[],a=Rt.get(parseInt(r));a!==void 0&&(a.children.forEach(function(l,c){if(e.has(l.ID)){const u=e.get(l.ID);if(u.curves.x!==void 0||u.curves.y!==void 0||u.curves.z!==void 0){if(s[c]===void 0){const h=Rt.get(l.ID).parents.filter(function(d){return d.relationship!==void 0})[0].ID;if(h!==void 0){const d=et.Objects.Model[h.toString()];if(d===void 0){console.warn("THREE.FBXLoader: Encountered a unused curve.",l);return}const f={modelName:d.attrName?rt.sanitizeNodeName(d.attrName):"",ID:d.id,initialPosition:[0,0,0],initialRotation:[0,0,0],initialScale:[1,1,1]};ln.traverse(function(g){g.ID===d.id&&(f.transform=g.matrix,g.userData.transformData&&(f.eulerOrder=g.userData.transformData.eulerOrder))}),f.transform||(f.transform=new Ne),"PreRotation"in d&&(f.preRotation=d.PreRotation.value),"PostRotation"in d&&(f.postRotation=d.PostRotation.value),s[c]=f}}s[c]&&(s[c][u.attr]=u)}else if(u.curves.morph!==void 0){if(s[c]===void 0){const h=Rt.get(l.ID).parents.filter(function(p){return p.relationship!==void 0})[0].ID,d=Rt.get(h).parents[0].ID,f=Rt.get(d).parents[0].ID,g=Rt.get(f).parents[0].ID,_=et.Objects.Model[g],m={modelName:_.attrName?rt.sanitizeNodeName(_.attrName):"",morphName:et.Objects.Deformer[h].attrName};s[c]=m}s[c][u.attr]=u}}}),i.set(parseInt(r),s))}return i}parseAnimStacks(e){const t=et.Objects.AnimationStack,i={};for(const r in t){const s=Rt.get(parseInt(r)).children;s.length>1&&console.warn("THREE.FBXLoader: Encountered an animation stack with multiple layers, this is currently not supported. Ignoring subsequent layers.");const a=e.get(s[0].ID);i[r]={name:t[r].attrName,layer:a}}return i}addClip(e){let t=[];const i=this;return e.layer.forEach(function(r){t=t.concat(i.generateTracks(r))}),new wM(e.name,-1,t)}generateTracks(e){const t=[];let i=new N,r=new N;if(e.transform&&e.transform.decompose(i,new qt,r),i=i.toArray(),r=r.toArray(),e.T!==void 0&&Object.keys(e.T.curves).length>0){const s=this.generateVectorTrack(e.modelName,e.T.curves,i,"position");s!==void 0&&t.push(s)}if(e.R!==void 0&&Object.keys(e.R.curves).length>0){const s=this.generateRotationTrack(e.modelName,e.R.curves,e.preRotation,e.postRotation,e.eulerOrder);s!==void 0&&t.push(s)}if(e.S!==void 0&&Object.keys(e.S.curves).length>0){const s=this.generateVectorTrack(e.modelName,e.S.curves,r,"scale");s!==void 0&&t.push(s)}if(e.DeformPercent!==void 0){const s=this.generateMorphTrack(e);s!==void 0&&t.push(s)}return t}generateVectorTrack(e,t,i,r){const s=this.getTimesForAllAxes(t),a=this.getKeyframeTrackValues(s,t,i);return new ba(e+"."+r,s,a)}generateRotationTrack(e,t,i,r,s){let a,o;if(t.x!==void 0&&t.y!==void 0&&t.z!==void 0){const d=this.interpolateRotations(t.x,t.y,t.z,s);a=d[0],o=d[1]}const l=wa(0);i!==void 0&&(i=i.map(Yt.degToRad),i.push(l),i=new Nt().fromArray(i),i=new qt().setFromEuler(i)),r!==void 0&&(r=r.map(Yt.degToRad),r.push(l),r=new Nt().fromArray(r),r=new qt().setFromEuler(r).invert());const c=new qt,u=new Nt,h=[];if(!o||!a)return new ys(e+".quaternion",[0],[0]);for(let d=0;d<o.length;d+=3)u.set(o[d],o[d+1],o[d+2],s),c.setFromEuler(u),i!==void 0&&c.premultiply(i),r!==void 0&&c.multiply(r),d>2&&new qt().fromArray(h,(d-3)/3*4).dot(c)<0&&c.set(-c.x,-c.y,-c.z,-c.w),c.toArray(h,d/3*4);return new ys(e+".quaternion",a,h)}generateMorphTrack(e){const t=e.DeformPercent.curves.morph,i=t.values.map(function(s){return s/100}),r=ln.getObjectByName(e.modelName).morphTargetDictionary[e.morphName];return new Ea(e.modelName+".morphTargetInfluences["+r+"]",t.times,i)}getTimesForAllAxes(e){let t=[];if(e.x!==void 0&&(t=t.concat(e.x.times)),e.y!==void 0&&(t=t.concat(e.y.times)),e.z!==void 0&&(t=t.concat(e.z.times)),t=t.sort(function(i,r){return i-r}),t.length>1){let i=1,r=t[0];for(let s=1;s<t.length;s++){const a=t[s];a!==r&&(t[i]=a,r=a,i++)}t=t.slice(0,i)}return t}getKeyframeTrackValues(e,t,i){const r=i,s=[];let a=-1,o=-1,l=-1;return e.forEach(function(c){if(t.x&&(a=t.x.times.indexOf(c)),t.y&&(o=t.y.times.indexOf(c)),t.z&&(l=t.z.times.indexOf(c)),a!==-1){const u=t.x.values[a];s.push(u),r[0]=u}else s.push(r[0]);if(o!==-1){const u=t.y.values[o];s.push(u),r[1]=u}else s.push(r[1]);if(l!==-1){const u=t.z.values[l];s.push(u),r[2]=u}else s.push(r[2])}),s}interpolateRotations(e,t,i,r){const s=[],a=[];s.push(e.times[0]),a.push(Yt.degToRad(e.values[0])),a.push(Yt.degToRad(t.values[0])),a.push(Yt.degToRad(i.values[0]));for(let o=1;o<e.values.length;o++){const l=[e.values[o-1],t.values[o-1],i.values[o-1]];if(isNaN(l[0])||isNaN(l[1])||isNaN(l[2]))continue;const c=l.map(Yt.degToRad),u=[e.values[o],t.values[o],i.values[o]];if(isNaN(u[0])||isNaN(u[1])||isNaN(u[2]))continue;const h=u.map(Yt.degToRad),d=[u[0]-l[0],u[1]-l[1],u[2]-l[2]],f=[Math.abs(d[0]),Math.abs(d[1]),Math.abs(d[2])];if(f[0]>=180||f[1]>=180||f[2]>=180){const _=Math.max(...f)/180,m=new Nt(...c,r),p=new Nt(...h,r),w=new qt().setFromEuler(m),M=new qt().setFromEuler(p);w.dot(M)&&M.set(-M.x,-M.y,-M.z,-M.w);const x=e.times[o-1],I=e.times[o]-x,U=new qt,R=new Nt;for(let O=0;O<1;O+=1/_)U.copy(w.clone().slerp(M.clone(),O)),s.push(x+O*I),R.setFromQuaternion(U,r),a.push(R.x),a.push(R.y),a.push(R.z)}else s.push(e.times[o]),a.push(Yt.degToRad(e.values[o])),a.push(Yt.degToRad(t.values[o])),a.push(Yt.degToRad(i.values[o]))}return[s,a]}}class EA{getPrevNode(){return this.nodeStack[this.currentIndent-2]}getCurrentNode(){return this.nodeStack[this.currentIndent-1]}getCurrentProp(){return this.currentProp}pushStack(e){this.nodeStack.push(e),this.currentIndent+=1}popStack(){this.nodeStack.pop(),this.currentIndent-=1}setCurrentProp(e,t){this.currentProp=e,this.currentPropName=t}parse(e){this.currentIndent=0,this.allNodes=new Dg,this.nodeStack=[],this.currentProp=[],this.currentPropName="";const t=this,i=e.split(/[\r\n]+/);return i.forEach(function(r,s){const a=r.match(/^[\s\t]*;/),o=r.match(/^[\s\t]*$/);if(a||o)return;const l=r.match("^\\t{"+t.currentIndent+"}(\\w+):(.*){",""),c=r.match("^\\t{"+t.currentIndent+"}(\\w+):[\\s\\t\\r\\n](.*)"),u=r.match("^\\t{"+(t.currentIndent-1)+"}}");l?t.parseNodeBegin(r,l):c?t.parseNodeProperty(r,c,i[++s]):u?t.popStack():r.match(/^[^\s\t}]/)&&t.parseNodePropertyContinued(r)}),this.allNodes}parseNodeBegin(e,t){const i=t[1].trim().replace(/^"/,"").replace(/"$/,""),r=t[2].split(",").map(function(l){return l.trim().replace(/^"/,"").replace(/"$/,"")}),s={name:i},a=this.parseNodeAttr(r),o=this.getCurrentNode();this.currentIndent===0?this.allNodes.add(i,s):i in o?(i==="PoseNode"?o.PoseNode.push(s):o[i].id!==void 0&&(o[i]={},o[i][o[i].id]=o[i]),a.id!==""&&(o[i][a.id]=s)):typeof a.id=="number"?(o[i]={},o[i][a.id]=s):i!=="Properties70"&&(i==="PoseNode"?o[i]=[s]:o[i]=s),typeof a.id=="number"&&(s.id=a.id),a.name!==""&&(s.attrName=a.name),a.type!==""&&(s.attrType=a.type),this.pushStack(s)}parseNodeAttr(e){let t=e[0];e[0]!==""&&(t=parseInt(e[0]),isNaN(t)&&(t=e[0]));let i="",r="";return e.length>1&&(i=e[1].replace(/^(\w+)::/,""),r=e[2]),{id:t,name:i,type:r}}parseNodeProperty(e,t,i){let r=t[1].replace(/^"/,"").replace(/"$/,"").trim(),s=t[2].replace(/^"/,"").replace(/"$/,"").trim();r==="Content"&&s===","&&(s=i.replace(/"/g,"").replace(/,$/,"").trim());const a=this.getCurrentNode();if(a.name==="Properties70"){this.parseNodeSpecialProperty(e,r,s);return}if(r==="C"){const l=s.split(",").slice(1),c=parseInt(l[0]),u=parseInt(l[1]);let h=s.split(",").slice(3);h=h.map(function(d){return d.trim().replace(/^"/,"")}),r="connections",s=[c,u],RA(s,h),a[r]===void 0&&(a[r]=[])}r==="Node"&&(a.id=s),r in a&&Array.isArray(a[r])?a[r].push(s):r!=="a"?a[r]=s:a.a=s,this.setCurrentProp(a,r),r==="a"&&s.slice(-1)!==","&&(a.a=Ec(s))}parseNodePropertyContinued(e){const t=this.getCurrentNode();t.a+=e,e.slice(-1)!==","&&(t.a=Ec(t.a))}parseNodeSpecialProperty(e,t,i){const r=i.split('",').map(function(u){return u.trim().replace(/^\"/,"").replace(/\s/,"_")}),s=r[0],a=r[1],o=r[2],l=r[3];let c=r[4];switch(a){case"int":case"enum":case"bool":case"ULongLong":case"double":case"Number":case"FieldOfView":c=parseFloat(c);break;case"Color":case"ColorRGB":case"Vector3D":case"Lcl_Translation":case"Lcl_Rotation":case"Lcl_Scaling":c=Ec(c);break}this.getPrevNode()[s]={type:a,type2:o,flag:l,value:c},this.setCurrentProp(this.getPrevNode(),s)}}class bA{parse(e){const t=new np(e);t.skip(23);const i=t.getUint32();if(i<6400)throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: "+i);const r=new Dg;for(;!this.endOfContent(t);){const s=this.parseNode(t,i);s!==null&&r.add(s.name,s)}return r}endOfContent(e){return e.size()%16===0?(e.getOffset()+160+16&-16)>=e.size():e.getOffset()+160+16>=e.size()}parseNode(e,t){const i={},r=t>=7500?e.getUint64():e.getUint32(),s=t>=7500?e.getUint64():e.getUint32();t>=7500?e.getUint64():e.getUint32();const a=e.getUint8(),o=e.getString(a);if(r===0)return null;const l=[];for(let d=0;d<s;d++)l.push(this.parseProperty(e));const c=l.length>0?l[0]:"",u=l.length>1?l[1]:"",h=l.length>2?l[2]:"";for(i.singleProperty=s===1&&e.getOffset()===r;r>e.getOffset();){const d=this.parseNode(e,t);d!==null&&this.parseSubNode(o,i,d)}return i.propertyList=l,typeof c=="number"&&(i.id=c),u!==""&&(i.attrName=u),h!==""&&(i.attrType=h),o!==""&&(i.name=o),i}parseSubNode(e,t,i){if(i.singleProperty===!0){const r=i.propertyList[0];Array.isArray(r)?(t[i.name]=i,i.a=r):t[i.name]=r}else if(e==="Connections"&&i.name==="C"){const r=[];i.propertyList.forEach(function(s,a){a!==0&&r.push(s)}),t.connections===void 0&&(t.connections=[]),t.connections.push(r)}else if(i.name==="Properties70")Object.keys(i).forEach(function(s){t[s]=i[s]});else if(e==="Properties70"&&i.name==="P"){let r=i.propertyList[0],s=i.propertyList[1];const a=i.propertyList[2],o=i.propertyList[3];let l;r.indexOf("Lcl ")===0&&(r=r.replace("Lcl ","Lcl_")),s.indexOf("Lcl ")===0&&(s=s.replace("Lcl ","Lcl_")),s==="Color"||s==="ColorRGB"||s==="Vector"||s==="Vector3D"||s.indexOf("Lcl_")===0?l=[i.propertyList[4],i.propertyList[5],i.propertyList[6]]:l=i.propertyList[4],t[r]={type:s,type2:a,flag:o,value:l}}else t[i.name]===void 0?typeof i.id=="number"?(t[i.name]={},t[i.name][i.id]=i):t[i.name]=i:i.name==="PoseNode"?(Array.isArray(t[i.name])||(t[i.name]=[t[i.name]]),t[i.name].push(i)):t[i.name][i.id]===void 0&&(t[i.name][i.id]=i)}parseProperty(e){const t=e.getString(1);let i;switch(t){case"C":return e.getBoolean();case"D":return e.getFloat64();case"F":return e.getFloat32();case"I":return e.getInt32();case"L":return e.getInt64();case"R":return i=e.getUint32(),e.getArrayBuffer(i);case"S":return i=e.getUint32(),e.getString(i);case"Y":return e.getInt16();case"b":case"c":case"d":case"f":case"i":case"l":const r=e.getUint32(),s=e.getUint32(),a=e.getUint32();if(s===0)switch(t){case"b":case"c":return e.getBooleanArray(r);case"d":return e.getFloat64Array(r);case"f":return e.getFloat32Array(r);case"i":return e.getInt32Array(r);case"l":return e.getInt64Array(r)}const o=cA(new Uint8Array(e.getArrayBuffer(a))),l=new np(o.buffer);switch(t){case"b":case"c":return l.getBooleanArray(r);case"d":return l.getFloat64Array(r);case"f":return l.getFloat32Array(r);case"i":return l.getInt32Array(r);case"l":return l.getInt64Array(r)}break;default:throw new Error("THREE.FBXLoader: Unknown property type "+t)}}}class np{constructor(e,t){this.dv=new DataView(e),this.offset=0,this.littleEndian=t!==void 0?t:!0,this._textDecoder=new TextDecoder}getOffset(){return this.offset}size(){return this.dv.buffer.byteLength}skip(e){this.offset+=e}getBoolean(){return(this.getUint8()&1)===1}getBooleanArray(e){const t=[];for(let i=0;i<e;i++)t.push(this.getBoolean());return t}getUint8(){const e=this.dv.getUint8(this.offset);return this.offset+=1,e}getInt16(){const e=this.dv.getInt16(this.offset,this.littleEndian);return this.offset+=2,e}getInt32(){const e=this.dv.getInt32(this.offset,this.littleEndian);return this.offset+=4,e}getInt32Array(e){const t=[];for(let i=0;i<e;i++)t.push(this.getInt32());return t}getUint32(){const e=this.dv.getUint32(this.offset,this.littleEndian);return this.offset+=4,e}getInt64(){let e,t;return this.littleEndian?(e=this.getUint32(),t=this.getUint32()):(t=this.getUint32(),e=this.getUint32()),t&2147483648?(t=~t&4294967295,e=~e&4294967295,e===4294967295&&(t=t+1&4294967295),e=e+1&4294967295,-(t*4294967296+e)):t*4294967296+e}getInt64Array(e){const t=[];for(let i=0;i<e;i++)t.push(this.getInt64());return t}getUint64(){let e,t;return this.littleEndian?(e=this.getUint32(),t=this.getUint32()):(t=this.getUint32(),e=this.getUint32()),t*4294967296+e}getFloat32(){const e=this.dv.getFloat32(this.offset,this.littleEndian);return this.offset+=4,e}getFloat32Array(e){const t=[];for(let i=0;i<e;i++)t.push(this.getFloat32());return t}getFloat64(){const e=this.dv.getFloat64(this.offset,this.littleEndian);return this.offset+=8,e}getFloat64Array(e){const t=[];for(let i=0;i<e;i++)t.push(this.getFloat64());return t}getArrayBuffer(e){const t=this.dv.buffer.slice(this.offset,this.offset+e);return this.offset+=e,t}getString(e){const t=this.offset;let i=new Uint8Array(this.dv.buffer,t,e);this.skip(e);const r=i.indexOf(0);return r>=0&&(i=new Uint8Array(this.dv.buffer,t,r)),this._textDecoder.decode(i)}}class Dg{add(e,t){this[e]=t}}function wA(n){const e="Kaydara FBX Binary  \0";return n.byteLength>=e.length&&e===Lg(n,0,e.length)}function TA(n){const e=["K","a","y","d","a","r","a","\\","F","B","X","\\","B","i","n","a","r","y","\\","\\"];let t=0;function i(r){const s=n[r-1];return n=n.slice(t+r),t++,s}for(let r=0;r<e.length;++r)if(i(1)===e[r])return!1;return!0}function ip(n){const e=/FBXVersion: (\d+)/,t=n.match(e);if(t)return parseInt(t[1]);throw new Error("THREE.FBXLoader: Cannot find the version number for the file given.")}function AA(n){return n/46186158e3}const CA=[];function go(n,e,t,i){let r;switch(i.mappingType){case"ByPolygonVertex":r=n;break;case"ByPolygon":r=e;break;case"ByVertice":r=t;break;case"AllSame":r=i.indices[0];break;default:console.warn("THREE.FBXLoader: unknown attribute mapping type "+i.mappingType)}i.referenceType==="IndexToDirect"&&(r=i.indices[r]);const s=r*i.dataSize,a=s+i.dataSize;return PA(CA,i.buffer,s,a)}const Sc=new Nt,Yr=new N;function Ig(n){const e=new Ne,t=new Ne,i=new Ne,r=new Ne,s=new Ne,a=new Ne,o=new Ne,l=new Ne,c=new Ne,u=new Ne,h=new Ne,d=new Ne,f=n.inheritType?n.inheritType:0;n.translation&&e.setPosition(Yr.fromArray(n.translation));const g=wa(0);if(n.preRotation){const D=n.preRotation.map(Yt.degToRad);D.push(g),t.makeRotationFromEuler(Sc.fromArray(D))}if(n.rotation){const D=n.rotation.map(Yt.degToRad);D.push(n.eulerOrder||g),i.makeRotationFromEuler(Sc.fromArray(D))}if(n.postRotation){const D=n.postRotation.map(Yt.degToRad);D.push(g),r.makeRotationFromEuler(Sc.fromArray(D)),r.invert()}n.scale&&s.scale(Yr.fromArray(n.scale)),n.scalingOffset&&o.setPosition(Yr.fromArray(n.scalingOffset)),n.scalingPivot&&a.setPosition(Yr.fromArray(n.scalingPivot)),n.rotationOffset&&l.setPosition(Yr.fromArray(n.rotationOffset)),n.rotationPivot&&c.setPosition(Yr.fromArray(n.rotationPivot)),n.parentMatrixWorld&&(h.copy(n.parentMatrix),u.copy(n.parentMatrixWorld));const _=t.clone().multiply(i).multiply(r),m=new Ne;m.extractRotation(u);const p=new Ne;p.copyPosition(u);const w=p.clone().invert().multiply(u),M=m.clone().invert().multiply(w),x=s,I=new Ne;if(f===0)I.copy(m).multiply(_).multiply(M).multiply(x);else if(f===1)I.copy(m).multiply(M).multiply(_).multiply(x);else{const te=new Ne().scale(new N().setFromMatrixScale(h)).clone().invert(),X=M.clone().multiply(te);I.copy(m).multiply(_).multiply(X).multiply(x)}const U=c.clone().invert(),R=a.clone().invert();let O=e.clone().multiply(l).multiply(c).multiply(t).multiply(i).multiply(r).multiply(U).multiply(o).multiply(a).multiply(s).multiply(R);const T=new Ne().copyPosition(O),b=u.clone().multiply(T);return d.copyPosition(b),O=d.clone().multiply(I),O.premultiply(u.invert()),O}function wa(n){n=n||0;const e=["ZYX","YZX","XZY","ZXY","YXZ","XYZ"];return n===6?(console.warn("THREE.FBXLoader: unsupported Euler Order: Spherical XYZ. Animations and rotations may be incorrect."),e[0]):e[n]}function Ec(n){return n.split(",").map(function(t){return parseFloat(t)})}function Lg(n,e,t){return e===void 0&&(e=0),t===void 0&&(t=n.byteLength),new TextDecoder().decode(new Uint8Array(n,e,t))}function RA(n,e){for(let t=0,i=n.length,r=e.length;t<r;t++,i++)n[i]=e[t]}function PA(n,e,t,i){for(let r=t,s=0;r<i;r++,s++)n[s]=e[r];return n}const _o={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

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

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class DA extends Ii{constructor(){super(),this.uniforms=_l.clone(_o.uniforms),this.material=new gM({name:_o.name,uniforms:this.uniforms,vertexShader:_o.vertexShader,fragmentShader:_o.fragmentShader}),this._fsQuad=new Li(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Ze.getTransfer(this._outputColorSpace)===ft&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Fm?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Om?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Bm?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===km?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===zm?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Vm?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Hm&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class IA{constructor(){P(this,"SHADOW_MAP_WIDTH",2048);P(this,"SHADOW_MAP_HEIGHT",2048);P(this,"COLD_COLOR",new Ce(13100018));P(this,"renderer");P(this,"composer");P(this,"renderPass");P(this,"outputPass");P(this,"orbitControls");P(this,"textureLoader",new nn);P(this,"animId",-1);this.renderer=new Pi({antialias:!0}),this.composer=new Ki(this.renderer)}async init(){this.renderer.setSize(window.innerWidth,window.innerHeight),this.composer.setSize(window.innerWidth,window.innerHeight),this.renderer.setClearColor(0),this.renderer.setClearAlpha(1),this.renderer.autoClear=!1,document.body.appendChild(this.renderer.domElement);const e=new oi,t=new Et(45,window.innerWidth/window.innerHeight,.1,1e3);t.position.set(2,2,5),this.renderPass=new Ml(e,t),this.outputPass=new DA,this.composer.addPass(this.renderPass),this.composer.addPass(this.outputPass),this.orbitControls=new Di(t,this.renderer.domElement);const i=new Dn;e.add(new rr(16777215,.2));const r=new ir(this.COLD_COLOR,2);r.position.set(2,1.5,1),r.castShadow=!0,r.shadow.camera.top=2,r.shadow.camera.bottom=-2,r.shadow.camera.left=-2,r.shadow.camera.right=2,r.shadow.camera.near=.01,r.shadow.camera.far=5,r.shadow.bias=1e-4,r.shadow.mapSize.width=this.SHADOW_MAP_WIDTH,r.shadow.mapSize.height=this.SHADOW_MAP_HEIGHT,r.shadow.radius=50,r.shadow.blurSamples=32,i.add(r),e.add(i);const s=new Cs,a=new nn,o=await new Promise(d=>{s.load("assets/models/arm/arm.fbx",f=>d(f.children[0]))}),l=await new Promise(d=>{a.load("assets/models/arm/diffuse.png",f=>d(f))});l.colorSpace=st;const c=await new Promise(d=>{a.load("assets/models/arm/arm_OccMetRough.png",f=>d(f))});l.colorSpace=Ct;const u=await new Promise(d=>{a.load("assets/models/arm/arm_Normal.png",f=>d(f))});l.colorSpace=Ct;const h=new Ai;h.depthTest=!0,h.transparent=!0,h.alphaHash=!0,h.map=l,h.normalMap=u,h.roughnessMap=c,h.metalnessMap=c,h.sheen=.1,h.sheenRoughness=.2,h.sheenColor=new Ce(16777215),o.material=h,e.add(o)}async animate(){this.composer.render(),this.orbitControls.update(),this.composer.render(),requestAnimationFrame(async()=>await this.animate())}async onResize(e,t){this.renderer.setSize(e,t)}async destroy(){cancelAnimationFrame(this.animId),this.renderer.domElement.remove(),this.orbitControls.dispose(),this.renderer.dispose()}}var Ug=`varying vec2 vUv;

void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ng=`#include <packing>
#include <shadowmap_pars_fragment>

#define MAX_STEPS 60
#define MAX_DIST 8.0
#define SURF_DIST 0.0001
#define iTime time
#define TEXTURE_SIZE_3D 8.0

varying vec2 vUv;

uniform sampler2D depthTexture;
uniform sampler2D texture3d;
uniform sampler2D colorTexture;
uniform vec2 cameraNearFar;
uniform vec2 resolution;
uniform mat4 cameraWorldMatrix;
uniform mat4 cameraProjectionMatrixInverse;
uniform float time;
uniform float scale2;
uniform float scale3;
uniform vec3 lightPosition;
uniform float derivative;
uniform float density2;

uniform sampler2D shadowMap;
uniform mat4 directionalShadowMatrix;

float getDepth( const in vec2 screenPosition ) {
	#if DEPTH_PACKING == 1
		return unpackRGBAToDepth( texture2D( depthTexture, screenPosition ) );
	#else
		return texture2D( tDepth, screenPosition ).x;
	#endif
}

float getViewZ( const in float depth ) {
	#if PERSPECTIVE_CAMERA == 1
		return perspectiveDepthToViewZ( depth, cameraNearFar.x, cameraNearFar.y );
	#else
		return orthographicDepthToViewZ( depth, cameraNearFar.x, cameraNearFar.y );
	#endif
}

float rand(vec2 n) { 
	return fract(sin(dot(n, vec2(12.9898, 4.1414))) * 43758.5453);
}

vec3 sampleNoise3d(vec3 p) {
	vec3 pp = p / scale2;
	vec3 p2 = fract((pp + vec3(1.0)) / 2.0);
	float size = TEXTURE_SIZE_3D;
	float yIndex = p2.z * (size * size - 1.0);
	float row = floor(yIndex / size);
	float col = floor(yIndex - row * size);
	vec2 uv2 = (vec2(col, row) + p2.xy) / size;
    return texture(texture3d, uv2).rgb;
}

float Noise3d(in vec3 p) {
	
	vec3 shift = vec3(1.213 * sin(iTime / 4.0), 2.312 * cos(iTime / 5.341 + 7.145), 0.312 * cos(iTime / 7.1234 + 3.145));
	vec3 samplePoint = p + scale3 * (sampleNoise3d(p / 4.0 + shift));

	
	float noise = sampleNoise3d(samplePoint).r * sampleNoise3d(samplePoint.yzx).g * sampleNoise3d(samplePoint.zxy).b;

	
	
	
	
    return noise;
}

float getWorldShadow(vec3 point) {
	vec4 vDirectionalShadowCoord = directionalShadowMatrix * vec4(point, 1.0);
 	
	
	
	
	
	

	return getShadow(
		shadowMap, vec2(512.0, 512.0), 1.0, 0.0, 1.0, vDirectionalShadowCoord
	);
}

float densityFunction(vec3 point) {
	vec3 pp = point;
	
	float density = 0.1 + Noise3d(pp) * 0.2;
	
	
	
	density *= getWorldShadow(point);
	
	
    return density;
}

bool rayIntersectInfiniteCylinder(vec3 ro, vec3 rd, out float near, out float far) {
	vec3 rdp = vec3(rd.x, 0.0, rd.z);
	vec3 rop = vec3(ro.x, 0.0, ro.z);
	float b = dot(rdp, rop);
	float a = dot(rdp, rdp);
	float c = dot(rop, rop) - 6.0; 
	float det = b * b - a * c;
	if (det > 0.0) {
		float detsqrt = sqrt(det);
		near = (-b - detsqrt) /  a;
		far = (-b + detsqrt) /  a;
		return far > 0.0;
	}
	return false;
}

vec4 volumetricMarch(vec3 ro, vec3 rd, float depth) {
	vec4 sum = vec4(0.0);
	float step = min(0.1, depth / float(MAX_STEPS)); 

	
	step += rand(vUv) * 0.02;

	
	float density = density2;
	
	
	float near = 0.0, far = 0.0;
	
	
	if (!rayIntersectInfiniteCylinder(ro, rd, near, far)) {
		return vec4(0.0);
	}

	float dO = max(0.0, near);
	for(int i = 0; i < MAX_STEPS; i++) {

		
		
		if (dO > depth) {
			step = depth - dO;
			dO = depth;
			
		 	i = MAX_STEPS;
		}

		
		vec3 p = ro + rd * dO;
		float sample1 = densityFunction(p);

		
		if (sample1 > 0.05) {
			
			
			float light = smoothstep(6.0, 0.0, length(lightPosition - p));

			
			vec4 col = vec4(mix(vec3(0.2, 0.2, 0.3), vec3(0.6, 1.0, 1.1), light), 1.0);
            sum += col * density * step * sample1;
		}

		
		dO += step;

		
		if (dO > MAX_DIST || sum.a > 0.9 || dO > far) {
			break;
		}
	}
	return sum;
}

vec3 rayNoise(vec3 n) {
	float scale = 0.01;
	return scale * (vec3(rand(n.xy), rand(n.yz), rand(n.zx)) - vec3(0.5)); 
}

void main() {
	
    float viewZ = -getViewZ( getDepth( vUv ) );

	
	vec3 rayOrigin = cameraPosition;
	vec2 screenPos = ( gl_FragCoord.xy * 2.0 - resolution ) / resolution;
	vec4 ndcRay = vec4( screenPos.xy, 1.0, 1.0 );
	vec3 rayDirection = ( cameraWorldMatrix * cameraProjectionMatrixInverse * ndcRay ).xyz;

	
	rayDirection += rayNoise(rayDirection);

	
	gl_FragColor = volumetricMarch(rayOrigin, rayDirection, viewZ);
}`;let LA=Date.now();const vo={defines:{DEPTH_PACKING:1,PERSPECTIVE_CAMERA:1,USE_SHADOWMAP:1},uniforms:{colorTexture:{value:null},depthTexture:{value:null},cameraNearFar:{value:new Pe(.5,.5)},textureMatrix:{value:null},resolution:{value:null},cameraWorldMatrix:{value:null},cameraProjectionMatrixInverse:{value:null},cameraPosition:{value:null},time:{value:0},texture3d:{value:null},lightPosition:{value:null},density2:{value:null},shadowMap:{value:null},directionalShadowMatrix:{value:null},scale2:{value:0},scale3:{value:0},derivative:{value:0}},vertexShader:Ug,fragmentShader:Ng},bc=new at({uniforms:{smokeBuffer:{value:null},readBuffer:{value:null}},vertexShader:`varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`varying vec2 vUv;

		uniform sampler2D smokeBuffer;
		uniform sampler2D readBuffer;

		void main() {
			vec4 smoke = texture2D(smokeBuffer, vUv);
			// gl_FragColor.rgb = mix(texture2D(readBuffer, vUv).rgb, smoke.rgb, smoke.a);
			gl_FragColor.rgb = texture2D(readBuffer, vUv).rgb + smoke.rgb * smoke.a;
			gl_FragColor.a = 1.0;
		}`,depthTest:!1,depthWrite:!1,transparent:!0});let UA=class extends Ii{constructor(t,i,r,s){super();P(this,"depthMaterial");P(this,"smokeMaterial");P(this,"depthBuffer");P(this,"someBuffer");P(this,"downSampling",2);P(this,"fsQuad");P(this,"scale2",4);P(this,"scale3",1);P(this,"derivative",.4);P(this,"density",.7);P(this,"textureLoader",new nn);this.scene=t,this.camera=i,this.resolution=r,this.light=s,this.fsQuad=new Li,this.depthMaterial=new Da,this.depthMaterial.side=xn,this.depthMaterial.depthPacking=Ra,this.depthMaterial.blending=Pt,this.smokeMaterial=new at({defines:Object.assign({},vo.defines),uniforms:vo.uniforms,vertexShader:vo.vertexShader,fragmentShader:vo.fragmentShader,blending:Pt,depthTest:!1,depthWrite:!1}),this.smokeMaterial.uniforms.cameraNearFar.value.set(this.camera.near,this.camera.far),this.smokeMaterial.uniforms.resolution.value=new Pe(r.x/this.downSampling,r.y/this.downSampling),this.smokeMaterial.uniforms.cameraWorldMatrix.value=this.camera.matrixWorld,this.smokeMaterial.uniforms.cameraProjectionMatrixInverse.value=this.camera.projectionMatrixInverse.clone(),this.depthBuffer=new wt(this.resolution.x/this.downSampling,this.resolution.y/this.downSampling),this.depthBuffer.texture.name="Depth",this.depthBuffer.texture.generateMipmaps=!1,this.someBuffer=new wt(this.resolution.x/this.downSampling,this.resolution.y/this.downSampling),this.someBuffer.texture.name="Some buffer",this.someBuffer.texture.generateMipmaps=!1}async init(){const t=await new Promise(i=>this.textureLoader.load("assets/textures/3d-noise.png",r=>{r.colorSpace=Ct,i(r)}));this.smokeMaterial.uniforms.texture3d.value=t}render(t,i,r,s,a){t.setRenderTarget(this.depthBuffer),this.scene.background=new Ce(16777215),this.scene.overrideMaterial=this.depthMaterial,t.render(this.scene,this.camera),this.scene.background=null,this.scene.overrideMaterial=null,this.smokeMaterial.uniforms.depthTexture.value=this.depthBuffer.texture,this.smokeMaterial.uniforms.cameraPosition.value=this.camera.position,this.smokeMaterial.uniforms.time.value=(Date.now()-LA)/1e4,this.smokeMaterial.uniforms.shadowMap.value=this.light.shadow.map.texture,this.smokeMaterial.uniforms.directionalShadowMatrix.value=this.light.shadow.matrix,this.smokeMaterial.uniforms.lightPosition.value=this.light.position.normalize(),this.smokeMaterial.uniforms.derivative.value=this.derivative,this.smokeMaterial.uniforms.scale2.value=this.scale2,this.smokeMaterial.uniforms.scale3.value=this.scale3,this.smokeMaterial.uniforms.density2.value=this.density,this.fsQuad.material=this.smokeMaterial,t.setRenderTarget(this.someBuffer),t.clear(),this.fsQuad.render(t),this.renderToScreen&&(this.fsQuad.material=bc,bc.uniforms.readBuffer.value=r.texture,bc.uniforms.smokeBuffer.value=this.someBuffer.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t))}};function NA(n){if(!(typeof window>"u")){var e=document.createElement("style");return e.setAttribute("type","text/css"),e.innerHTML=n,document.head.appendChild(e),n}}function is(n,e){var t=n.__state.conversionName.toString(),i=Math.round(n.r),r=Math.round(n.g),s=Math.round(n.b),a=n.a,o=Math.round(n.h),l=n.s.toFixed(1),c=n.v.toFixed(1);if(e||t==="THREE_CHAR_HEX"||t==="SIX_CHAR_HEX"){for(var u=n.hex.toString(16);u.length<6;)u="0"+u;return"#"+u}else{if(t==="CSS_RGB")return"rgb("+i+","+r+","+s+")";if(t==="CSS_RGBA")return"rgba("+i+","+r+","+s+","+a+")";if(t==="HEX")return"0x"+n.hex.toString(16);if(t==="RGB_ARRAY")return"["+i+","+r+","+s+"]";if(t==="RGBA_ARRAY")return"["+i+","+r+","+s+","+a+"]";if(t==="RGB_OBJ")return"{r:"+i+",g:"+r+",b:"+s+"}";if(t==="RGBA_OBJ")return"{r:"+i+",g:"+r+",b:"+s+",a:"+a+"}";if(t==="HSV_OBJ")return"{h:"+o+",s:"+l+",v:"+c+"}";if(t==="HSVA_OBJ")return"{h:"+o+",s:"+l+",v:"+c+",a:"+a+"}"}return"unknown format"}var rp=Array.prototype.forEach,Hs=Array.prototype.slice,le={BREAK:{},extend:function(e){return this.each(Hs.call(arguments,1),function(t){var i=this.isObject(t)?Object.keys(t):[];i.forEach((function(r){this.isUndefined(t[r])||(e[r]=t[r])}).bind(this))},this),e},defaults:function(e){return this.each(Hs.call(arguments,1),function(t){var i=this.isObject(t)?Object.keys(t):[];i.forEach((function(r){this.isUndefined(e[r])&&(e[r]=t[r])}).bind(this))},this),e},compose:function(){var e=Hs.call(arguments);return function(){for(var t=Hs.call(arguments),i=e.length-1;i>=0;i--)t=[e[i].apply(this,t)];return t[0]}},each:function(e,t,i){if(e){if(rp&&e.forEach&&e.forEach===rp)e.forEach(t,i);else if(e.length===e.length+0){var r=void 0,s=void 0;for(r=0,s=e.length;r<s;r++)if(r in e&&t.call(i,e[r],r)===this.BREAK)return}else for(var a in e)if(t.call(i,e[a],a)===this.BREAK)return}},defer:function(e){setTimeout(e,0)},debounce:function(e,t,i){var r=void 0;return function(){var s=this,a=arguments;function o(){r=null,i||e.apply(s,a)}var l=i||!r;clearTimeout(r),r=setTimeout(o,t),l&&e.apply(s,a)}},toArray:function(e){return e.toArray?e.toArray():Hs.call(e)},isUndefined:function(e){return e===void 0},isNull:function(e){return e===null},isNaN:function(n){function e(t){return n.apply(this,arguments)}return e.toString=function(){return n.toString()},e}(function(n){return isNaN(n)}),isArray:Array.isArray||function(n){return n.constructor===Array},isObject:function(e){return e===Object(e)},isNumber:function(e){return e===e+0},isString:function(e){return e===e+""},isBoolean:function(e){return e===!1||e===!0},isFunction:function(e){return e instanceof Function}},FA=[{litmus:le.isString,conversions:{THREE_CHAR_HEX:{read:function(e){var t=e.match(/^#([A-F0-9])([A-F0-9])([A-F0-9])$/i);return t===null?!1:{space:"HEX",hex:parseInt("0x"+t[1].toString()+t[1].toString()+t[2].toString()+t[2].toString()+t[3].toString()+t[3].toString(),0)}},write:is},SIX_CHAR_HEX:{read:function(e){var t=e.match(/^#([A-F0-9]{6})$/i);return t===null?!1:{space:"HEX",hex:parseInt("0x"+t[1].toString(),0)}},write:is},CSS_RGB:{read:function(e){var t=e.match(/^rgb\(\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*\)/);return t===null?!1:{space:"RGB",r:parseFloat(t[1]),g:parseFloat(t[2]),b:parseFloat(t[3])}},write:is},CSS_RGBA:{read:function(e){var t=e.match(/^rgba\(\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*\)/);return t===null?!1:{space:"RGB",r:parseFloat(t[1]),g:parseFloat(t[2]),b:parseFloat(t[3]),a:parseFloat(t[4])}},write:is}}},{litmus:le.isNumber,conversions:{HEX:{read:function(e){return{space:"HEX",hex:e,conversionName:"HEX"}},write:function(e){return e.hex}}}},{litmus:le.isArray,conversions:{RGB_ARRAY:{read:function(e){return e.length!==3?!1:{space:"RGB",r:e[0],g:e[1],b:e[2]}},write:function(e){return[e.r,e.g,e.b]}},RGBA_ARRAY:{read:function(e){return e.length!==4?!1:{space:"RGB",r:e[0],g:e[1],b:e[2],a:e[3]}},write:function(e){return[e.r,e.g,e.b,e.a]}}}},{litmus:le.isObject,conversions:{RGBA_OBJ:{read:function(e){return le.isNumber(e.r)&&le.isNumber(e.g)&&le.isNumber(e.b)&&le.isNumber(e.a)?{space:"RGB",r:e.r,g:e.g,b:e.b,a:e.a}:!1},write:function(e){return{r:e.r,g:e.g,b:e.b,a:e.a}}},RGB_OBJ:{read:function(e){return le.isNumber(e.r)&&le.isNumber(e.g)&&le.isNumber(e.b)?{space:"RGB",r:e.r,g:e.g,b:e.b}:!1},write:function(e){return{r:e.r,g:e.g,b:e.b}}},HSVA_OBJ:{read:function(e){return le.isNumber(e.h)&&le.isNumber(e.s)&&le.isNumber(e.v)&&le.isNumber(e.a)?{space:"HSV",h:e.h,s:e.s,v:e.v,a:e.a}:!1},write:function(e){return{h:e.h,s:e.s,v:e.v,a:e.a}}},HSV_OBJ:{read:function(e){return le.isNumber(e.h)&&le.isNumber(e.s)&&le.isNumber(e.v)?{space:"HSV",h:e.h,s:e.s,v:e.v}:!1},write:function(e){return{h:e.h,s:e.s,v:e.v}}}}}],zs=void 0,xo=void 0,zh=function(){xo=!1;var e=arguments.length>1?le.toArray(arguments):arguments[0];return le.each(FA,function(t){if(t.litmus(e))return le.each(t.conversions,function(i,r){if(zs=i.read(e),xo===!1&&zs!==!1)return xo=zs,zs.conversionName=r,zs.conversion=i,le.BREAK}),le.BREAK}),xo},sp=void 0,Jo={hsv_to_rgb:function(e,t,i){var r=Math.floor(e/60)%6,s=e/60-Math.floor(e/60),a=i*(1-t),o=i*(1-s*t),l=i*(1-(1-s)*t),c=[[i,l,a],[o,i,a],[a,i,l],[a,o,i],[l,a,i],[i,a,o]][r];return{r:c[0]*255,g:c[1]*255,b:c[2]*255}},rgb_to_hsv:function(e,t,i){var r=Math.min(e,t,i),s=Math.max(e,t,i),a=s-r,o=void 0,l=void 0;if(s!==0)l=a/s;else return{h:NaN,s:0,v:0};return e===s?o=(t-i)/a:t===s?o=2+(i-e)/a:o=4+(e-t)/a,o/=6,o<0&&(o+=1),{h:o*360,s:l,v:s/255}},rgb_to_hex:function(e,t,i){var r=this.hex_with_component(0,2,e);return r=this.hex_with_component(r,1,t),r=this.hex_with_component(r,0,i),r},component_from_hex:function(e,t){return e>>t*8&255},hex_with_component:function(e,t,i){return i<<(sp=t*8)|e&~(255<<sp)}},OA=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},qn=function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")},$n=function(){function n(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,i){return t&&n(e.prototype,t),i&&n(e,i),e}}(),Zi=function n(e,t,i){e===null&&(e=Function.prototype);var r=Object.getOwnPropertyDescriptor(e,t);if(r===void 0){var s=Object.getPrototypeOf(e);return s===null?void 0:n(s,t,i)}else{if("value"in r)return r.value;var a=r.get;return a===void 0?void 0:a.call(i)}},sr=function(n,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(n,e):n.__proto__=e)},ar=function(n,e){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:n},Ht=function(){function n(){if(qn(this,n),this.__state=zh.apply(this,arguments),this.__state===!1)throw new Error("Failed to interpret color arguments");this.__state.a=this.__state.a||1}return $n(n,[{key:"toString",value:function(){return is(this)}},{key:"toHexString",value:function(){return is(this,!0)}},{key:"toOriginal",value:function(){return this.__state.conversion.write(this)}}]),n}();function Lu(n,e,t){Object.defineProperty(n,e,{get:function(){return this.__state.space==="RGB"?this.__state[e]:(Ht.recalculateRGB(this,e,t),this.__state[e])},set:function(r){this.__state.space!=="RGB"&&(Ht.recalculateRGB(this,e,t),this.__state.space="RGB"),this.__state[e]=r}})}function Uu(n,e){Object.defineProperty(n,e,{get:function(){return this.__state.space==="HSV"?this.__state[e]:(Ht.recalculateHSV(this),this.__state[e])},set:function(i){this.__state.space!=="HSV"&&(Ht.recalculateHSV(this),this.__state.space="HSV"),this.__state[e]=i}})}Ht.recalculateRGB=function(n,e,t){if(n.__state.space==="HEX")n.__state[e]=Jo.component_from_hex(n.__state.hex,t);else if(n.__state.space==="HSV")le.extend(n.__state,Jo.hsv_to_rgb(n.__state.h,n.__state.s,n.__state.v));else throw new Error("Corrupted color state")};Ht.recalculateHSV=function(n){var e=Jo.rgb_to_hsv(n.r,n.g,n.b);le.extend(n.__state,{s:e.s,v:e.v}),le.isNaN(e.h)?le.isUndefined(n.__state.h)&&(n.__state.h=0):n.__state.h=e.h};Ht.COMPONENTS=["r","g","b","h","s","v","hex","a"];Lu(Ht.prototype,"r",2);Lu(Ht.prototype,"g",1);Lu(Ht.prototype,"b",0);Uu(Ht.prototype,"h");Uu(Ht.prototype,"s");Uu(Ht.prototype,"v");Object.defineProperty(Ht.prototype,"a",{get:function(){return this.__state.a},set:function(e){this.__state.a=e}});Object.defineProperty(Ht.prototype,"hex",{get:function(){return this.__state.space!=="HEX"&&(this.__state.hex=Jo.rgb_to_hex(this.r,this.g,this.b),this.__state.space="HEX"),this.__state.hex},set:function(e){this.__state.space="HEX",this.__state.hex=e}});var Pr=function(){function n(e,t){qn(this,n),this.initialValue=e[t],this.domElement=document.createElement("div"),this.object=e,this.property=t,this.__onChange=void 0,this.__onFinishChange=void 0}return $n(n,[{key:"onChange",value:function(t){return this.__onChange=t,this}},{key:"onFinishChange",value:function(t){return this.__onFinishChange=t,this}},{key:"setValue",value:function(t){return this.object[this.property]=t,this.__onChange&&this.__onChange.call(this,t),this.updateDisplay(),this}},{key:"getValue",value:function(){return this.object[this.property]}},{key:"updateDisplay",value:function(){return this}},{key:"isModified",value:function(){return this.initialValue!==this.getValue()}}]),n}(),BA={HTMLEvents:["change"],MouseEvents:["click","mousemove","mousedown","mouseup","mouseover"],KeyboardEvents:["keydown"]},Fg={};le.each(BA,function(n,e){le.each(n,function(t){Fg[t]=e})});var kA=/(\d+(\.\d+)?)px/;function Zn(n){if(n==="0"||le.isUndefined(n))return 0;var e=n.match(kA);return le.isNull(e)?0:parseFloat(e[1])}var W={makeSelectable:function(e,t){e===void 0||e.style===void 0||(e.onselectstart=t?function(){return!1}:function(){},e.style.MozUserSelect=t?"auto":"none",e.style.KhtmlUserSelect=t?"auto":"none",e.unselectable=t?"on":"off")},makeFullscreen:function(e,t,i){var r=i,s=t;le.isUndefined(s)&&(s=!0),le.isUndefined(r)&&(r=!0),e.style.position="absolute",s&&(e.style.left=0,e.style.right=0),r&&(e.style.top=0,e.style.bottom=0)},fakeEvent:function(e,t,i,r){var s=i||{},a=Fg[t];if(!a)throw new Error("Event type "+t+" not supported.");var o=document.createEvent(a);switch(a){case"MouseEvents":{var l=s.x||s.clientX||0,c=s.y||s.clientY||0;o.initMouseEvent(t,s.bubbles||!1,s.cancelable||!0,window,s.clickCount||1,0,0,l,c,!1,!1,!1,!1,0,null);break}case"KeyboardEvents":{var u=o.initKeyboardEvent||o.initKeyEvent;le.defaults(s,{cancelable:!0,ctrlKey:!1,altKey:!1,shiftKey:!1,metaKey:!1,keyCode:void 0,charCode:void 0}),u(t,s.bubbles||!1,s.cancelable,window,s.ctrlKey,s.altKey,s.shiftKey,s.metaKey,s.keyCode,s.charCode);break}default:{o.initEvent(t,s.bubbles||!1,s.cancelable||!0);break}}le.defaults(o,r),e.dispatchEvent(o)},bind:function(e,t,i,r){var s=r||!1;return e.addEventListener?e.addEventListener(t,i,s):e.attachEvent&&e.attachEvent("on"+t,i),W},unbind:function(e,t,i,r){var s=r||!1;return e.removeEventListener?e.removeEventListener(t,i,s):e.detachEvent&&e.detachEvent("on"+t,i),W},addClass:function(e,t){if(e.className===void 0)e.className=t;else if(e.className!==t){var i=e.className.split(/ +/);i.indexOf(t)===-1&&(i.push(t),e.className=i.join(" ").replace(/^\s+/,"").replace(/\s+$/,""))}return W},removeClass:function(e,t){if(t)if(e.className===t)e.removeAttribute("class");else{var i=e.className.split(/ +/),r=i.indexOf(t);r!==-1&&(i.splice(r,1),e.className=i.join(" "))}else e.className=void 0;return W},hasClass:function(e,t){return new RegExp("(?:^|\\s+)"+t+"(?:\\s+|$)").test(e.className)||!1},getWidth:function(e){var t=getComputedStyle(e);return Zn(t["border-left-width"])+Zn(t["border-right-width"])+Zn(t["padding-left"])+Zn(t["padding-right"])+Zn(t.width)},getHeight:function(e){var t=getComputedStyle(e);return Zn(t["border-top-width"])+Zn(t["border-bottom-width"])+Zn(t["padding-top"])+Zn(t["padding-bottom"])+Zn(t.height)},getOffset:function(e){var t=e,i={left:0,top:0};if(t.offsetParent)do i.left+=t.offsetLeft,i.top+=t.offsetTop,t=t.offsetParent;while(t);return i},isActive:function(e){return e===document.activeElement&&(e.type||e.href)}},Og=function(n){sr(e,n);function e(t,i){qn(this,e);var r=ar(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,i)),s=r;r.__prev=r.getValue(),r.__checkbox=document.createElement("input"),r.__checkbox.setAttribute("type","checkbox");function a(){s.setValue(!s.__prev)}return W.bind(r.__checkbox,"change",a,!1),r.domElement.appendChild(r.__checkbox),r.updateDisplay(),r}return $n(e,[{key:"setValue",value:function(i){var r=Zi(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setValue",this).call(this,i);return this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue()),this.__prev=this.getValue(),r}},{key:"updateDisplay",value:function(){return this.getValue()===!0?(this.__checkbox.setAttribute("checked","checked"),this.__checkbox.checked=!0,this.__prev=!0):(this.__checkbox.checked=!1,this.__prev=!1),Zi(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(Pr),HA=function(n){sr(e,n);function e(t,i,r){qn(this,e);var s=ar(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,i)),a=r,o=s;if(s.__select=document.createElement("select"),le.isArray(a)){var l={};le.each(a,function(c){l[c]=c}),a=l}return le.each(a,function(c,u){var h=document.createElement("option");h.innerHTML=u,h.setAttribute("value",c),o.__select.appendChild(h)}),s.updateDisplay(),W.bind(s.__select,"change",function(){var c=this.options[this.selectedIndex].value;o.setValue(c)}),s.domElement.appendChild(s.__select),s}return $n(e,[{key:"setValue",value:function(i){var r=Zi(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setValue",this).call(this,i);return this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue()),r}},{key:"updateDisplay",value:function(){return W.isActive(this.__select)?this:(this.__select.value=this.getValue(),Zi(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this))}}]),e}(Pr),zA=function(n){sr(e,n);function e(t,i){qn(this,e);var r=ar(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,i)),s=r;function a(){s.setValue(s.__input.value)}function o(){s.__onFinishChange&&s.__onFinishChange.call(s,s.getValue())}return r.__input=document.createElement("input"),r.__input.setAttribute("type","text"),W.bind(r.__input,"keyup",a),W.bind(r.__input,"change",a),W.bind(r.__input,"blur",o),W.bind(r.__input,"keydown",function(l){l.keyCode===13&&this.blur()}),r.updateDisplay(),r.domElement.appendChild(r.__input),r}return $n(e,[{key:"updateDisplay",value:function(){return W.isActive(this.__input)||(this.__input.value=this.getValue()),Zi(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(Pr);function ap(n){var e=n.toString();return e.indexOf(".")>-1?e.length-e.indexOf(".")-1:0}var Bg=function(n){sr(e,n);function e(t,i,r){qn(this,e);var s=ar(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,i)),a=r||{};return s.__min=a.min,s.__max=a.max,s.__step=a.step,le.isUndefined(s.__step)?s.initialValue===0?s.__impliedStep=1:s.__impliedStep=Math.pow(10,Math.floor(Math.log(Math.abs(s.initialValue))/Math.LN10))/10:s.__impliedStep=s.__step,s.__precision=ap(s.__impliedStep),s}return $n(e,[{key:"setValue",value:function(i){var r=i;return this.__min!==void 0&&r<this.__min?r=this.__min:this.__max!==void 0&&r>this.__max&&(r=this.__max),this.__step!==void 0&&r%this.__step!==0&&(r=Math.round(r/this.__step)*this.__step),Zi(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setValue",this).call(this,r)}},{key:"min",value:function(i){return this.__min=i,this}},{key:"max",value:function(i){return this.__max=i,this}},{key:"step",value:function(i){return this.__step=i,this.__impliedStep=i,this.__precision=ap(i),this}}]),e}(Pr);function VA(n,e){var t=Math.pow(10,e);return Math.round(n*t)/t}var Qo=function(n){sr(e,n);function e(t,i,r){qn(this,e);var s=ar(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,i,r));s.__truncationSuspended=!1;var a=s,o=void 0;function l(){var g=parseFloat(a.__input.value);le.isNaN(g)||a.setValue(g)}function c(){a.__onFinishChange&&a.__onFinishChange.call(a,a.getValue())}function u(){c()}function h(g){var _=o-g.clientY;a.setValue(a.getValue()+_*a.__impliedStep),o=g.clientY}function d(){W.unbind(window,"mousemove",h),W.unbind(window,"mouseup",d),c()}function f(g){W.bind(window,"mousemove",h),W.bind(window,"mouseup",d),o=g.clientY}return s.__input=document.createElement("input"),s.__input.setAttribute("type","text"),W.bind(s.__input,"change",l),W.bind(s.__input,"blur",u),W.bind(s.__input,"mousedown",f),W.bind(s.__input,"keydown",function(g){g.keyCode===13&&(a.__truncationSuspended=!0,this.blur(),a.__truncationSuspended=!1,c())}),s.updateDisplay(),s.domElement.appendChild(s.__input),s}return $n(e,[{key:"updateDisplay",value:function(){return this.__input.value=this.__truncationSuspended?this.getValue():VA(this.getValue(),this.__precision),Zi(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(Bg);function op(n,e,t,i,r){return i+(r-i)*((n-e)/(t-e))}var Vh=function(n){sr(e,n);function e(t,i,r,s,a){qn(this,e);var o=ar(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,i,{min:r,max:s,step:a})),l=o;o.__background=document.createElement("div"),o.__foreground=document.createElement("div"),W.bind(o.__background,"mousedown",c),W.bind(o.__background,"touchstart",d),W.addClass(o.__background,"slider"),W.addClass(o.__foreground,"slider-fg");function c(_){document.activeElement.blur(),W.bind(window,"mousemove",u),W.bind(window,"mouseup",h),u(_)}function u(_){_.preventDefault();var m=l.__background.getBoundingClientRect();return l.setValue(op(_.clientX,m.left,m.right,l.__min,l.__max)),!1}function h(){W.unbind(window,"mousemove",u),W.unbind(window,"mouseup",h),l.__onFinishChange&&l.__onFinishChange.call(l,l.getValue())}function d(_){_.touches.length===1&&(W.bind(window,"touchmove",f),W.bind(window,"touchend",g),f(_))}function f(_){var m=_.touches[0].clientX,p=l.__background.getBoundingClientRect();l.setValue(op(m,p.left,p.right,l.__min,l.__max))}function g(){W.unbind(window,"touchmove",f),W.unbind(window,"touchend",g),l.__onFinishChange&&l.__onFinishChange.call(l,l.getValue())}return o.updateDisplay(),o.__background.appendChild(o.__foreground),o.domElement.appendChild(o.__background),o}return $n(e,[{key:"updateDisplay",value:function(){var i=(this.getValue()-this.__min)/(this.__max-this.__min);return this.__foreground.style.width=i*100+"%",Zi(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(Bg),kg=function(n){sr(e,n);function e(t,i,r){qn(this,e);var s=ar(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,i)),a=s;return s.__button=document.createElement("div"),s.__button.innerHTML=r===void 0?"Fire":r,W.bind(s.__button,"click",function(o){return o.preventDefault(),a.fire(),!1}),W.addClass(s.__button,"button"),s.domElement.appendChild(s.__button),s}return $n(e,[{key:"fire",value:function(){this.__onChange&&this.__onChange.call(this),this.getValue().call(this.object),this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue())}}]),e}(Pr),Gh=function(n){sr(e,n);function e(t,i){qn(this,e);var r=ar(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,i));r.__color=new Ht(r.getValue()),r.__temp=new Ht(0);var s=r;r.domElement=document.createElement("div"),W.makeSelectable(r.domElement,!1),r.__selector=document.createElement("div"),r.__selector.className="selector",r.__saturation_field=document.createElement("div"),r.__saturation_field.className="saturation-field",r.__field_knob=document.createElement("div"),r.__field_knob.className="field-knob",r.__field_knob_border="2px solid ",r.__hue_knob=document.createElement("div"),r.__hue_knob.className="hue-knob",r.__hue_field=document.createElement("div"),r.__hue_field.className="hue-field",r.__input=document.createElement("input"),r.__input.type="text",r.__input_textShadow="0 1px 1px ",W.bind(r.__input,"keydown",function(_){_.keyCode===13&&h.call(this)}),W.bind(r.__input,"blur",h),W.bind(r.__selector,"mousedown",function(){W.addClass(this,"drag").bind(window,"mouseup",function(){W.removeClass(s.__selector,"drag")})}),W.bind(r.__selector,"touchstart",function(){W.addClass(this,"drag").bind(window,"touchend",function(){W.removeClass(s.__selector,"drag")})});var a=document.createElement("div");le.extend(r.__selector.style,{width:"122px",height:"102px",padding:"3px",backgroundColor:"#222",boxShadow:"0px 1px 3px rgba(0,0,0,0.3)"}),le.extend(r.__field_knob.style,{position:"absolute",width:"12px",height:"12px",border:r.__field_knob_border+(r.__color.v<.5?"#fff":"#000"),boxShadow:"0px 1px 3px rgba(0,0,0,0.5)",borderRadius:"12px",zIndex:1}),le.extend(r.__hue_knob.style,{position:"absolute",width:"15px",height:"2px",borderRight:"4px solid #fff",zIndex:1}),le.extend(r.__saturation_field.style,{width:"100px",height:"100px",border:"1px solid #555",marginRight:"3px",display:"inline-block",cursor:"pointer"}),le.extend(a.style,{width:"100%",height:"100%",background:"none"}),lp(a,"top","rgba(0,0,0,0)","#000"),le.extend(r.__hue_field.style,{width:"15px",height:"100px",border:"1px solid #555",cursor:"ns-resize",position:"absolute",top:"3px",right:"3px"}),WA(r.__hue_field),le.extend(r.__input.style,{outline:"none",textAlign:"center",color:"#fff",border:0,fontWeight:"bold",textShadow:r.__input_textShadow+"rgba(0,0,0,0.7)"}),W.bind(r.__saturation_field,"mousedown",o),W.bind(r.__saturation_field,"touchstart",o),W.bind(r.__field_knob,"mousedown",o),W.bind(r.__field_knob,"touchstart",o),W.bind(r.__hue_field,"mousedown",l),W.bind(r.__hue_field,"touchstart",l);function o(_){f(_),W.bind(window,"mousemove",f),W.bind(window,"touchmove",f),W.bind(window,"mouseup",c),W.bind(window,"touchend",c)}function l(_){g(_),W.bind(window,"mousemove",g),W.bind(window,"touchmove",g),W.bind(window,"mouseup",u),W.bind(window,"touchend",u)}function c(){W.unbind(window,"mousemove",f),W.unbind(window,"touchmove",f),W.unbind(window,"mouseup",c),W.unbind(window,"touchend",c),d()}function u(){W.unbind(window,"mousemove",g),W.unbind(window,"touchmove",g),W.unbind(window,"mouseup",u),W.unbind(window,"touchend",u),d()}function h(){var _=zh(this.value);_!==!1?(s.__color.__state=_,s.setValue(s.__color.toOriginal())):this.value=s.__color.toString()}function d(){s.__onFinishChange&&s.__onFinishChange.call(s,s.__color.toOriginal())}r.__saturation_field.appendChild(a),r.__selector.appendChild(r.__field_knob),r.__selector.appendChild(r.__saturation_field),r.__selector.appendChild(r.__hue_field),r.__hue_field.appendChild(r.__hue_knob),r.domElement.appendChild(r.__input),r.domElement.appendChild(r.__selector),r.updateDisplay();function f(_){_.type.indexOf("touch")===-1&&_.preventDefault();var m=s.__saturation_field.getBoundingClientRect(),p=_.touches&&_.touches[0]||_,w=p.clientX,M=p.clientY,x=(w-m.left)/(m.right-m.left),I=1-(M-m.top)/(m.bottom-m.top);return I>1?I=1:I<0&&(I=0),x>1?x=1:x<0&&(x=0),s.__color.v=I,s.__color.s=x,s.setValue(s.__color.toOriginal()),!1}function g(_){_.type.indexOf("touch")===-1&&_.preventDefault();var m=s.__hue_field.getBoundingClientRect(),p=_.touches&&_.touches[0]||_,w=p.clientY,M=1-(w-m.top)/(m.bottom-m.top);return M>1?M=1:M<0&&(M=0),s.__color.h=M*360,s.setValue(s.__color.toOriginal()),!1}return r}return $n(e,[{key:"updateDisplay",value:function(){var i=zh(this.getValue());if(i!==!1){var r=!1;le.each(Ht.COMPONENTS,function(o){if(!le.isUndefined(i[o])&&!le.isUndefined(this.__color.__state[o])&&i[o]!==this.__color.__state[o])return r=!0,{}},this),r&&le.extend(this.__color.__state,i)}le.extend(this.__temp.__state,this.__color.__state),this.__temp.a=1;var s=this.__color.v<.5||this.__color.s>.5?255:0,a=255-s;le.extend(this.__field_knob.style,{marginLeft:100*this.__color.s-7+"px",marginTop:100*(1-this.__color.v)-7+"px",backgroundColor:this.__temp.toHexString(),border:this.__field_knob_border+"rgb("+s+","+s+","+s+")"}),this.__hue_knob.style.marginTop=(1-this.__color.h/360)*100+"px",this.__temp.s=1,this.__temp.v=1,lp(this.__saturation_field,"left","#fff",this.__temp.toHexString()),this.__input.value=this.__color.toString(),le.extend(this.__input.style,{backgroundColor:this.__color.toHexString(),color:"rgb("+s+","+s+","+s+")",textShadow:this.__input_textShadow+"rgba("+a+","+a+","+a+",.7)"})}}]),e}(Pr),GA=["-moz-","-o-","-webkit-","-ms-",""];function lp(n,e,t,i){n.style.background="",le.each(GA,function(r){n.style.cssText+="background: "+r+"linear-gradient("+e+", "+t+" 0%, "+i+" 100%); "})}function WA(n){n.style.background="",n.style.cssText+="background: -moz-linear-gradient(top,  #ff0000 0%, #ff00ff 17%, #0000ff 34%, #00ffff 50%, #00ff00 67%, #ffff00 84%, #ff0000 100%);",n.style.cssText+="background: -webkit-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",n.style.cssText+="background: -o-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",n.style.cssText+="background: -ms-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",n.style.cssText+="background: linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);"}var XA={load:function(e,t){var i=t||document,r=i.createElement("link");r.type="text/css",r.rel="stylesheet",r.href=e,i.getElementsByTagName("head")[0].appendChild(r)},inject:function(e,t){var i=t||document,r=document.createElement("style");r.type="text/css",r.innerHTML=e;var s=i.getElementsByTagName("head")[0];try{s.appendChild(r)}catch{}}},jA=`<div id="dg-save" class="dg dialogue">

  Here's the new load parameter for your <code>GUI</code>'s constructor:

  <textarea id="dg-new-constructor"></textarea>

  <div id="dg-save-locally">

    <input id="dg-local-storage" type="checkbox"/> Automatically save
    values to <code>localStorage</code> on exit.

    <div id="dg-local-explain">The values saved to <code>localStorage</code> will
      override those passed to <code>dat.GUI</code>'s constructor. This makes it
      easier to work incrementally, but <code>localStorage</code> is fragile,
      and your friends may not see the same values you do.

    </div>

  </div>

</div>`,YA=function(e,t){var i=e[t];return le.isArray(arguments[2])||le.isObject(arguments[2])?new HA(e,t,arguments[2]):le.isNumber(i)?le.isNumber(arguments[2])&&le.isNumber(arguments[3])?le.isNumber(arguments[4])?new Vh(e,t,arguments[2],arguments[3],arguments[4]):new Vh(e,t,arguments[2],arguments[3]):le.isNumber(arguments[4])?new Qo(e,t,{min:arguments[2],max:arguments[3],step:arguments[4]}):new Qo(e,t,{min:arguments[2],max:arguments[3]}):le.isString(i)?new zA(e,t):le.isFunction(i)?new kg(e,t,""):le.isBoolean(i)?new Og(e,t):null};function qA(n){setTimeout(n,1e3/60)}var $A=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||qA,KA=function(){function n(){qn(this,n),this.backgroundElement=document.createElement("div"),le.extend(this.backgroundElement.style,{backgroundColor:"rgba(0,0,0,0.8)",top:0,left:0,display:"none",zIndex:"1000",opacity:0,WebkitTransition:"opacity 0.2s linear",transition:"opacity 0.2s linear"}),W.makeFullscreen(this.backgroundElement),this.backgroundElement.style.position="fixed",this.domElement=document.createElement("div"),le.extend(this.domElement.style,{position:"fixed",display:"none",zIndex:"1001",opacity:0,WebkitTransition:"-webkit-transform 0.2s ease-out, opacity 0.2s linear",transition:"transform 0.2s ease-out, opacity 0.2s linear"}),document.body.appendChild(this.backgroundElement),document.body.appendChild(this.domElement);var e=this;W.bind(this.backgroundElement,"click",function(){e.hide()})}return $n(n,[{key:"show",value:function(){var t=this;this.backgroundElement.style.display="block",this.domElement.style.display="block",this.domElement.style.opacity=0,this.domElement.style.webkitTransform="scale(1.1)",this.layout(),le.defer(function(){t.backgroundElement.style.opacity=1,t.domElement.style.opacity=1,t.domElement.style.webkitTransform="scale(1)"})}},{key:"hide",value:function(){var t=this,i=function r(){t.domElement.style.display="none",t.backgroundElement.style.display="none",W.unbind(t.domElement,"webkitTransitionEnd",r),W.unbind(t.domElement,"transitionend",r),W.unbind(t.domElement,"oTransitionEnd",r)};W.bind(this.domElement,"webkitTransitionEnd",i),W.bind(this.domElement,"transitionend",i),W.bind(this.domElement,"oTransitionEnd",i),this.backgroundElement.style.opacity=0,this.domElement.style.opacity=0,this.domElement.style.webkitTransform="scale(1.1)"}},{key:"layout",value:function(){this.domElement.style.left=window.innerWidth/2-W.getWidth(this.domElement)/2+"px",this.domElement.style.top=window.innerHeight/2-W.getHeight(this.domElement)/2+"px"}}]),n}(),ZA=NA(`.dg ul{list-style:none;margin:0;padding:0;width:100%;clear:both}.dg.ac{position:fixed;top:0;left:0;right:0;height:0;z-index:0}.dg:not(.ac) .main{overflow:hidden}.dg.main{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear}.dg.main.taller-than-window{overflow-y:auto}.dg.main.taller-than-window .close-button{opacity:1;margin-top:-1px;border-top:1px solid #2c2c2c}.dg.main ul.closed .close-button{opacity:1 !important}.dg.main:hover .close-button,.dg.main .close-button.drag{opacity:1}.dg.main .close-button{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear;border:0;line-height:19px;height:20px;cursor:pointer;text-align:center;background-color:#000}.dg.main .close-button.close-top{position:relative}.dg.main .close-button.close-bottom{position:absolute}.dg.main .close-button:hover{background-color:#111}.dg.a{float:right;margin-right:15px;overflow-y:visible}.dg.a.has-save>ul.close-top{margin-top:0}.dg.a.has-save>ul.close-bottom{margin-top:27px}.dg.a.has-save>ul.closed{margin-top:0}.dg.a .save-row{top:0;z-index:1002}.dg.a .save-row.close-top{position:relative}.dg.a .save-row.close-bottom{position:fixed}.dg li{-webkit-transition:height .1s ease-out;-o-transition:height .1s ease-out;-moz-transition:height .1s ease-out;transition:height .1s ease-out;-webkit-transition:overflow .1s linear;-o-transition:overflow .1s linear;-moz-transition:overflow .1s linear;transition:overflow .1s linear}.dg li:not(.folder){cursor:auto;height:27px;line-height:27px;padding:0 4px 0 5px}.dg li.folder{padding:0;border-left:4px solid rgba(0,0,0,0)}.dg li.title{cursor:pointer;margin-left:-4px}.dg .closed li:not(.title),.dg .closed ul li,.dg .closed ul li>*{height:0;overflow:hidden;border:0}.dg .cr{clear:both;padding-left:3px;height:27px;overflow:hidden}.dg .property-name{cursor:default;float:left;clear:left;width:40%;overflow:hidden;text-overflow:ellipsis}.dg .cr.function .property-name{width:100%}.dg .c{float:left;width:60%;position:relative}.dg .c input[type=text]{border:0;margin-top:4px;padding:3px;width:100%;float:right}.dg .has-slider input[type=text]{width:30%;margin-left:0}.dg .slider{float:left;width:66%;margin-left:-5px;margin-right:0;height:19px;margin-top:4px}.dg .slider-fg{height:100%}.dg .c input[type=checkbox]{margin-top:7px}.dg .c select{margin-top:5px}.dg .cr.function,.dg .cr.function .property-name,.dg .cr.function *,.dg .cr.boolean,.dg .cr.boolean *{cursor:pointer}.dg .cr.color{overflow:visible}.dg .selector{display:none;position:absolute;margin-left:-9px;margin-top:23px;z-index:10}.dg .c:hover .selector,.dg .selector.drag{display:block}.dg li.save-row{padding:0}.dg li.save-row .button{display:inline-block;padding:0px 6px}.dg.dialogue{background-color:#222;width:460px;padding:15px;font-size:13px;line-height:15px}#dg-new-constructor{padding:10px;color:#222;font-family:Monaco, monospace;font-size:10px;border:0;resize:none;box-shadow:inset 1px 1px 1px #888;word-wrap:break-word;margin:12px 0;display:block;width:440px;overflow-y:scroll;height:100px;position:relative}#dg-local-explain{display:none;font-size:11px;line-height:17px;border-radius:3px;background-color:#333;padding:8px;margin-top:10px}#dg-local-explain code{font-size:10px}#dat-gui-save-locally{display:none}.dg{color:#eee;font:11px 'Lucida Grande', sans-serif;text-shadow:0 -1px 0 #111}.dg.main::-webkit-scrollbar{width:5px;background:#1a1a1a}.dg.main::-webkit-scrollbar-corner{height:0;display:none}.dg.main::-webkit-scrollbar-thumb{border-radius:5px;background:#676767}.dg li:not(.folder){background:#1a1a1a;border-bottom:1px solid #2c2c2c}.dg li.save-row{line-height:25px;background:#dad5cb;border:0}.dg li.save-row select{margin-left:5px;width:108px}.dg li.save-row .button{margin-left:5px;margin-top:1px;border-radius:2px;font-size:9px;line-height:7px;padding:4px 4px 5px 4px;background:#c5bdad;color:#fff;text-shadow:0 1px 0 #b0a58f;box-shadow:0 -1px 0 #b0a58f;cursor:pointer}.dg li.save-row .button.gears{background:#c5bdad url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAANCAYAAAB/9ZQ7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQJJREFUeNpiYKAU/P//PwGIC/ApCABiBSAW+I8AClAcgKxQ4T9hoMAEUrxx2QSGN6+egDX+/vWT4e7N82AMYoPAx/evwWoYoSYbACX2s7KxCxzcsezDh3evFoDEBYTEEqycggWAzA9AuUSQQgeYPa9fPv6/YWm/Acx5IPb7ty/fw+QZblw67vDs8R0YHyQhgObx+yAJkBqmG5dPPDh1aPOGR/eugW0G4vlIoTIfyFcA+QekhhHJhPdQxbiAIguMBTQZrPD7108M6roWYDFQiIAAv6Aow/1bFwXgis+f2LUAynwoIaNcz8XNx3Dl7MEJUDGQpx9gtQ8YCueB+D26OECAAQDadt7e46D42QAAAABJRU5ErkJggg==) 2px 1px no-repeat;height:7px;width:8px}.dg li.save-row .button:hover{background-color:#bab19e;box-shadow:0 -1px 0 #b0a58f}.dg li.folder{border-bottom:0}.dg li.title{padding-left:16px;background:#000 url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlI+hKgFxoCgAOw==) 6px 10px no-repeat;cursor:pointer;border-bottom:1px solid rgba(255,255,255,0.2)}.dg .closed li.title{background-image:url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlGIWqMCbWAEAOw==)}.dg .cr.boolean{border-left:3px solid #806787}.dg .cr.color{border-left:3px solid}.dg .cr.function{border-left:3px solid #e61d5f}.dg .cr.number{border-left:3px solid #2FA1D6}.dg .cr.number input[type=text]{color:#2FA1D6}.dg .cr.string{border-left:3px solid #1ed36f}.dg .cr.string input[type=text]{color:#1ed36f}.dg .cr.function:hover,.dg .cr.boolean:hover{background:#111}.dg .c input[type=text]{background:#303030;outline:none}.dg .c input[type=text]:hover{background:#3c3c3c}.dg .c input[type=text]:focus{background:#494949;color:#fff}.dg .c .slider{background:#303030;cursor:ew-resize}.dg .c .slider-fg{background:#2FA1D6;max-width:100%}.dg .c .slider:hover{background:#3c3c3c}.dg .c .slider:hover .slider-fg{background:#44abda}
`);XA.inject(ZA);var cp="dg",hp=72,up=20,Ta="Default",Xs=function(){try{return!!window.localStorage}catch{return!1}}(),ia=void 0,dp=!0,Jr=void 0,wc=!1,Hg=[],vt=function n(e){var t=this,i=e||{};this.domElement=document.createElement("div"),this.__ul=document.createElement("ul"),this.domElement.appendChild(this.__ul),W.addClass(this.domElement,cp),this.__folders={},this.__controllers=[],this.__rememberedObjects=[],this.__rememberedObjectIndecesToControllers=[],this.__listening=[],i=le.defaults(i,{closeOnTop:!1,autoPlace:!0,width:n.DEFAULT_WIDTH}),i=le.defaults(i,{resizable:i.autoPlace,hideable:i.autoPlace}),le.isUndefined(i.load)?i.load={preset:Ta}:i.preset&&(i.load.preset=i.preset),le.isUndefined(i.parent)&&i.hideable&&Hg.push(this),i.resizable=le.isUndefined(i.parent)&&i.resizable,i.autoPlace&&le.isUndefined(i.scrollable)&&(i.scrollable=!0);var r=Xs&&localStorage.getItem(Qr(this,"isLocal"))==="true",s=void 0,a=void 0;if(Object.defineProperties(this,{parent:{get:function(){return i.parent}},scrollable:{get:function(){return i.scrollable}},autoPlace:{get:function(){return i.autoPlace}},closeOnTop:{get:function(){return i.closeOnTop}},preset:{get:function(){return t.parent?t.getRoot().preset:i.load.preset},set:function(d){t.parent?t.getRoot().preset=d:i.load.preset=d,t1(this),t.revert()}},width:{get:function(){return i.width},set:function(d){i.width=d,jh(t,d)}},name:{get:function(){return i.name},set:function(d){i.name=d,a&&(a.innerHTML=i.name)}},closed:{get:function(){return i.closed},set:function(d){i.closed=d,i.closed?W.addClass(t.__ul,n.CLASS_CLOSED):W.removeClass(t.__ul,n.CLASS_CLOSED),this.onResize(),t.__closeButton&&(t.__closeButton.innerHTML=d?n.TEXT_OPEN:n.TEXT_CLOSED)}},load:{get:function(){return i.load}},useLocalStorage:{get:function(){return r},set:function(d){Xs&&(r=d,d?W.bind(window,"unload",s):W.unbind(window,"unload",s),localStorage.setItem(Qr(t,"isLocal"),d))}}}),le.isUndefined(i.parent)){if(this.closed=i.closed||!1,W.addClass(this.domElement,n.CLASS_MAIN),W.makeSelectable(this.domElement,!1),Xs&&r){t.useLocalStorage=!0;var o=localStorage.getItem(Qr(this,"gui"));o&&(i.load=JSON.parse(o))}this.__closeButton=document.createElement("div"),this.__closeButton.innerHTML=n.TEXT_CLOSED,W.addClass(this.__closeButton,n.CLASS_CLOSE_BUTTON),i.closeOnTop?(W.addClass(this.__closeButton,n.CLASS_CLOSE_TOP),this.domElement.insertBefore(this.__closeButton,this.domElement.childNodes[0])):(W.addClass(this.__closeButton,n.CLASS_CLOSE_BOTTOM),this.domElement.appendChild(this.__closeButton)),W.bind(this.__closeButton,"click",function(){t.closed=!t.closed})}else{i.closed===void 0&&(i.closed=!0);var l=document.createTextNode(i.name);W.addClass(l,"controller-name"),a=Nu(t,l);var c=function(d){return d.preventDefault(),t.closed=!t.closed,!1};W.addClass(this.__ul,n.CLASS_CLOSED),W.addClass(a,"title"),W.bind(a,"click",c),i.closed||(this.closed=!1)}i.autoPlace&&(le.isUndefined(i.parent)&&(dp&&(Jr=document.createElement("div"),W.addClass(Jr,cp),W.addClass(Jr,n.CLASS_AUTO_PLACE_CONTAINER),document.body.appendChild(Jr),dp=!1),Jr.appendChild(this.domElement),W.addClass(this.domElement,n.CLASS_AUTO_PLACE)),this.parent||jh(t,i.width)),this.__resizeHandler=function(){t.onResizeDebounced()},W.bind(window,"resize",this.__resizeHandler),W.bind(this.__ul,"webkitTransitionEnd",this.__resizeHandler),W.bind(this.__ul,"transitionend",this.__resizeHandler),W.bind(this.__ul,"oTransitionEnd",this.__resizeHandler),this.onResize(),i.resizable&&e1(this),s=function(){Xs&&localStorage.getItem(Qr(t,"isLocal"))==="true"&&localStorage.setItem(Qr(t,"gui"),JSON.stringify(t.getSaveObject()))},this.saveToLocalStorageIfPossible=s;function u(){var h=t.getRoot();h.width+=1,le.defer(function(){h.width-=1})}i.parent||u()};vt.toggleHide=function(){wc=!wc,le.each(Hg,function(n){n.domElement.style.display=wc?"none":""})};vt.CLASS_AUTO_PLACE="a";vt.CLASS_AUTO_PLACE_CONTAINER="ac";vt.CLASS_MAIN="main";vt.CLASS_CONTROLLER_ROW="cr";vt.CLASS_TOO_TALL="taller-than-window";vt.CLASS_CLOSED="closed";vt.CLASS_CLOSE_BUTTON="close-button";vt.CLASS_CLOSE_TOP="close-top";vt.CLASS_CLOSE_BOTTOM="close-bottom";vt.CLASS_DRAG="drag";vt.DEFAULT_WIDTH=245;vt.TEXT_CLOSED="Close Controls";vt.TEXT_OPEN="Open Controls";vt._keydownHandler=function(n){document.activeElement.type!=="text"&&(n.which===hp||n.keyCode===hp)&&vt.toggleHide()};W.bind(window,"keydown",vt._keydownHandler,!1);le.extend(vt.prototype,{add:function(e,t){return ra(this,e,t,{factoryArgs:Array.prototype.slice.call(arguments,2)})},addColor:function(e,t){return ra(this,e,t,{color:!0})},remove:function(e){this.__ul.removeChild(e.__li),this.__controllers.splice(this.__controllers.indexOf(e),1);var t=this;le.defer(function(){t.onResize()})},destroy:function(){if(this.parent)throw new Error("Only the root GUI should be removed with .destroy(). For subfolders, use gui.removeFolder(folder) instead.");this.autoPlace&&Jr.removeChild(this.domElement);var e=this;le.each(this.__folders,function(t){e.removeFolder(t)}),W.unbind(window,"keydown",vt._keydownHandler,!1),fp(this)},addFolder:function(e){if(this.__folders[e]!==void 0)throw new Error('You already have a folder in this GUI by the name "'+e+'"');var t={name:e,parent:this};t.autoPlace=this.autoPlace,this.load&&this.load.folders&&this.load.folders[e]&&(t.closed=this.load.folders[e].closed,t.load=this.load.folders[e]);var i=new vt(t);this.__folders[e]=i;var r=Nu(this,i.domElement);return W.addClass(r,"folder"),i},removeFolder:function(e){this.__ul.removeChild(e.domElement.parentElement),delete this.__folders[e.name],this.load&&this.load.folders&&this.load.folders[e.name]&&delete this.load.folders[e.name],fp(e);var t=this;le.each(e.__folders,function(i){e.removeFolder(i)}),le.defer(function(){t.onResize()})},open:function(){this.closed=!1},close:function(){this.closed=!0},hide:function(){this.domElement.style.display="none"},show:function(){this.domElement.style.display=""},onResize:function(){var e=this.getRoot();if(e.scrollable){var t=W.getOffset(e.__ul).top,i=0;le.each(e.__ul.childNodes,function(r){e.autoPlace&&r===e.__save_row||(i+=W.getHeight(r))}),window.innerHeight-t-up<i?(W.addClass(e.domElement,vt.CLASS_TOO_TALL),e.__ul.style.height=window.innerHeight-t-up+"px"):(W.removeClass(e.domElement,vt.CLASS_TOO_TALL),e.__ul.style.height="auto")}e.__resize_handle&&le.defer(function(){e.__resize_handle.style.height=e.__ul.offsetHeight+"px"}),e.__closeButton&&(e.__closeButton.style.width=e.width+"px")},onResizeDebounced:le.debounce(function(){this.onResize()},50),remember:function(){if(le.isUndefined(ia)&&(ia=new KA,ia.domElement.innerHTML=jA),this.parent)throw new Error("You can only call remember on a top level GUI.");var e=this;le.each(Array.prototype.slice.call(arguments),function(t){e.__rememberedObjects.length===0&&QA(e),e.__rememberedObjects.indexOf(t)===-1&&e.__rememberedObjects.push(t)}),this.autoPlace&&jh(this,this.width)},getRoot:function(){for(var e=this;e.parent;)e=e.parent;return e},getSaveObject:function(){var e=this.load;return e.closed=this.closed,this.__rememberedObjects.length>0&&(e.preset=this.preset,e.remembered||(e.remembered={}),e.remembered[this.preset]=yo(this)),e.folders={},le.each(this.__folders,function(t,i){e.folders[i]=t.getSaveObject()}),e},save:function(){this.load.remembered||(this.load.remembered={}),this.load.remembered[this.preset]=yo(this),Wh(this,!1),this.saveToLocalStorageIfPossible()},saveAs:function(e){this.load.remembered||(this.load.remembered={},this.load.remembered[Ta]=yo(this,!0)),this.load.remembered[e]=yo(this),this.preset=e,Xh(this,e,!0),this.saveToLocalStorageIfPossible()},revert:function(e){le.each(this.__controllers,function(t){this.getRoot().load.remembered?zg(e||this.getRoot(),t):t.setValue(t.initialValue),t.__onFinishChange&&t.__onFinishChange.call(t,t.getValue())},this),le.each(this.__folders,function(t){t.revert(t)}),e||Wh(this.getRoot(),!1)},listen:function(e){var t=this.__listening.length===0;this.__listening.push(e),t&&Vg(this.__listening)},updateDisplay:function(){le.each(this.__controllers,function(e){e.updateDisplay()}),le.each(this.__folders,function(e){e.updateDisplay()})}});function Nu(n,e,t){var i=document.createElement("li");return e&&i.appendChild(e),t?n.__ul.insertBefore(i,t):n.__ul.appendChild(i),n.onResize(),i}function fp(n){W.unbind(window,"resize",n.__resizeHandler),n.saveToLocalStorageIfPossible&&W.unbind(window,"unload",n.saveToLocalStorageIfPossible)}function Wh(n,e){var t=n.__preset_select[n.__preset_select.selectedIndex];e?t.innerHTML=t.value+"*":t.innerHTML=t.value}function JA(n,e,t){if(t.__li=e,t.__gui=n,le.extend(t,{options:function(a){if(arguments.length>1){var o=t.__li.nextElementSibling;return t.remove(),ra(n,t.object,t.property,{before:o,factoryArgs:[le.toArray(arguments)]})}if(le.isArray(a)||le.isObject(a)){var l=t.__li.nextElementSibling;return t.remove(),ra(n,t.object,t.property,{before:l,factoryArgs:[a]})}},name:function(a){return t.__li.firstElementChild.firstElementChild.innerHTML=a,t},listen:function(){return t.__gui.listen(t),t},remove:function(){return t.__gui.remove(t),t}}),t instanceof Vh){var i=new Qo(t.object,t.property,{min:t.__min,max:t.__max,step:t.__step});le.each(["updateDisplay","onChange","onFinishChange","step","min","max"],function(s){var a=t[s],o=i[s];t[s]=i[s]=function(){var l=Array.prototype.slice.call(arguments);return o.apply(i,l),a.apply(t,l)}}),W.addClass(e,"has-slider"),t.domElement.insertBefore(i.domElement,t.domElement.firstElementChild)}else if(t instanceof Qo){var r=function(a){if(le.isNumber(t.__min)&&le.isNumber(t.__max)){var o=t.__li.firstElementChild.firstElementChild.innerHTML,l=t.__gui.__listening.indexOf(t)>-1;t.remove();var c=ra(n,t.object,t.property,{before:t.__li.nextElementSibling,factoryArgs:[t.__min,t.__max,t.__step]});return c.name(o),l&&c.listen(),c}return a};t.min=le.compose(r,t.min),t.max=le.compose(r,t.max)}else t instanceof Og?(W.bind(e,"click",function(){W.fakeEvent(t.__checkbox,"click")}),W.bind(t.__checkbox,"click",function(s){s.stopPropagation()})):t instanceof kg?(W.bind(e,"click",function(){W.fakeEvent(t.__button,"click")}),W.bind(e,"mouseover",function(){W.addClass(t.__button,"hover")}),W.bind(e,"mouseout",function(){W.removeClass(t.__button,"hover")})):t instanceof Gh&&(W.addClass(e,"color"),t.updateDisplay=le.compose(function(s){return e.style.borderLeftColor=t.__color.toString(),s},t.updateDisplay),t.updateDisplay());t.setValue=le.compose(function(s){return n.getRoot().__preset_select&&t.isModified()&&Wh(n.getRoot(),!0),s},t.setValue)}function zg(n,e){var t=n.getRoot(),i=t.__rememberedObjects.indexOf(e.object);if(i!==-1){var r=t.__rememberedObjectIndecesToControllers[i];if(r===void 0&&(r={},t.__rememberedObjectIndecesToControllers[i]=r),r[e.property]=e,t.load&&t.load.remembered){var s=t.load.remembered,a=void 0;if(s[n.preset])a=s[n.preset];else if(s[Ta])a=s[Ta];else return;if(a[i]&&a[i][e.property]!==void 0){var o=a[i][e.property];e.initialValue=o,e.setValue(o)}}}}function ra(n,e,t,i){if(e[t]===void 0)throw new Error('Object "'+e+'" has no property "'+t+'"');var r=void 0;if(i.color)r=new Gh(e,t);else{var s=[e,t].concat(i.factoryArgs);r=YA.apply(n,s)}i.before instanceof Pr&&(i.before=i.before.__li),zg(n,r),W.addClass(r.domElement,"c");var a=document.createElement("span");W.addClass(a,"property-name"),a.innerHTML=r.property;var o=document.createElement("div");o.appendChild(a),o.appendChild(r.domElement);var l=Nu(n,o,i.before);return W.addClass(l,vt.CLASS_CONTROLLER_ROW),r instanceof Gh?W.addClass(l,"color"):W.addClass(l,OA(r.getValue())),JA(n,l,r),n.__controllers.push(r),r}function Qr(n,e){return document.location.href+"."+e}function Xh(n,e,t){var i=document.createElement("option");i.innerHTML=e,i.value=e,n.__preset_select.appendChild(i),t&&(n.__preset_select.selectedIndex=n.__preset_select.length-1)}function pp(n,e){e.style.display=n.useLocalStorage?"block":"none"}function QA(n){var e=n.__save_row=document.createElement("li");W.addClass(n.domElement,"has-save"),n.__ul.insertBefore(e,n.__ul.firstChild),W.addClass(e,"save-row");var t=document.createElement("span");t.innerHTML="&nbsp;",W.addClass(t,"button gears");var i=document.createElement("span");i.innerHTML="Save",W.addClass(i,"button"),W.addClass(i,"save");var r=document.createElement("span");r.innerHTML="New",W.addClass(r,"button"),W.addClass(r,"save-as");var s=document.createElement("span");s.innerHTML="Revert",W.addClass(s,"button"),W.addClass(s,"revert");var a=n.__preset_select=document.createElement("select");if(n.load&&n.load.remembered?le.each(n.load.remembered,function(h,d){Xh(n,d,d===n.preset)}):Xh(n,Ta,!1),W.bind(a,"change",function(){for(var h=0;h<n.__preset_select.length;h++)n.__preset_select[h].innerHTML=n.__preset_select[h].value;n.preset=this.value}),e.appendChild(a),e.appendChild(t),e.appendChild(i),e.appendChild(r),e.appendChild(s),Xs){var o=document.getElementById("dg-local-explain"),l=document.getElementById("dg-local-storage"),c=document.getElementById("dg-save-locally");c.style.display="block",localStorage.getItem(Qr(n,"isLocal"))==="true"&&l.setAttribute("checked","checked"),pp(n,o),W.bind(l,"change",function(){n.useLocalStorage=!n.useLocalStorage,pp(n,o)})}var u=document.getElementById("dg-new-constructor");W.bind(u,"keydown",function(h){h.metaKey&&(h.which===67||h.keyCode===67)&&ia.hide()}),W.bind(t,"click",function(){u.innerHTML=JSON.stringify(n.getSaveObject(),void 0,2),ia.show(),u.focus(),u.select()}),W.bind(i,"click",function(){n.save()}),W.bind(r,"click",function(){var h=prompt("Enter a new preset name.");h&&n.saveAs(h)}),W.bind(s,"click",function(){n.revert()})}function e1(n){var e=void 0;n.__resize_handle=document.createElement("div"),le.extend(n.__resize_handle.style,{width:"6px",marginLeft:"-3px",height:"200px",cursor:"ew-resize",position:"absolute"});function t(s){return s.preventDefault(),n.width+=e-s.clientX,n.onResize(),e=s.clientX,!1}function i(){W.removeClass(n.__closeButton,vt.CLASS_DRAG),W.unbind(window,"mousemove",t),W.unbind(window,"mouseup",i)}function r(s){return s.preventDefault(),e=s.clientX,W.addClass(n.__closeButton,vt.CLASS_DRAG),W.bind(window,"mousemove",t),W.bind(window,"mouseup",i),!1}W.bind(n.__resize_handle,"mousedown",r),W.bind(n.__closeButton,"mousedown",r),n.domElement.insertBefore(n.__resize_handle,n.domElement.firstElementChild)}function jh(n,e){n.domElement.style.width=e+"px",n.__save_row&&n.autoPlace&&(n.__save_row.style.width=e+"px"),n.__closeButton&&(n.__closeButton.style.width=e+"px")}function yo(n,e){var t={};return le.each(n.__rememberedObjects,function(i,r){var s={},a=n.__rememberedObjectIndecesToControllers[r];le.each(a,function(o,l){s[l]=e?o.initialValue:o.getValue()}),t[r]=s}),t}function t1(n){for(var e=0;e<n.__preset_select.length;e++)n.__preset_select[e].value===n.preset&&(n.__preset_select.selectedIndex=e)}function Vg(n){n.length!==0&&$A.call(window,function(){Vg(n)}),le.each(n,function(e){e.updateDisplay()})}var Rs=vt;class n1{constructor(){P(this,"SHADOW_MAP_WIDTH",2048);P(this,"SHADOW_MAP_HEIGHT",2048);P(this,"COLD_COLOR",new Ce(13100018));P(this,"renderer");P(this,"composer");P(this,"renderPass");P(this,"outputPass");P(this,"pass");P(this,"orbitControls");P(this,"textureLoader",new nn);P(this,"camera");P(this,"animId",-1);P(this,"gui");this.renderer=new Pi({antialias:!0}),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Ri,this.composer=new Ki(this.renderer)}async init(){this.renderer.setSize(window.innerWidth,window.innerHeight),this.composer.setSize(window.innerWidth,window.innerHeight),this.renderer.setClearColor(0),this.renderer.setClearAlpha(1),this.renderer.autoClear=!1,document.body.appendChild(this.renderer.domElement);const e=new oi;e.background=new Ce(.05,.05,.07),this.camera=new Et(45,window.innerWidth/window.innerHeight,.1,1e3),this.camera.position.set(2,0,2);const t=new Dn;e.add(new rr(16777215,.2));const i=new ir(this.COLD_COLOR,2);i.position.set(2,1.5,1),i.castShadow=!0,i.shadow.camera.top=2,i.shadow.camera.bottom=-2,i.shadow.camera.left=-2,i.shadow.camera.right=2,i.shadow.camera.near=.01,i.shadow.camera.far=5,i.shadow.bias=1e-4,i.shadow.mapSize.width=this.SHADOW_MAP_WIDTH,i.shadow.mapSize.height=this.SHADOW_MAP_HEIGHT,i.shadow.radius=50,i.shadow.blurSamples=32,t.add(i),e.add(t),this.renderPass=new Ml(e,this.camera),this.composer.addPass(this.renderPass),this.pass=new UA(e,this.camera,new Pe(window.innerWidth,window.innerHeight),i),await this.pass.init(),this.composer.addPass(this.pass),this.orbitControls=new Di(this.camera,this.renderer.domElement);const r=new Cs,s=new nn,a=await new Promise(h=>{r.load("assets/models/arm/arm.fbx",d=>h(d.children[0]))});a.scale.set(.1,.1,.1),a.castShadow=!0,a.receiveShadow=!0;const o=await new Promise(h=>{s.load("assets/models/arm/diffuse.png",d=>h(d))});o.colorSpace=st;const l=await new Promise(h=>{s.load("assets/models/arm/arm_OccMetRough.png",d=>h(d))});o.colorSpace=Ct;const c=await new Promise(h=>{s.load("assets/models/arm/arm_Normal.png",d=>h(d))});o.colorSpace=Ct;const u=new Ai;u.depthTest=!0,u.transparent=!0,u.map=o,u.normalMap=c,u.roughnessMap=l,u.metalnessMap=l,u.sheen=.1,u.sheenRoughness=.2,u.sheenColor=new Ce(16777215),a.material=u,e.add(a),this.gui=new Rs,this.gui.add(this.pass,"scale2",0,10),this.gui.add(this.pass,"scale3",0,1),this.gui.add(this.pass,"derivative",0,1),this.gui.add(this.pass,"density",0,1)}async animate(){this.renderer.clear(),this.composer.render(),this.orbitControls.update(),this.composer.render(),this.animId=requestAnimationFrame(async()=>await this.animate())}async onResize(e,t){this.renderer.setSize(e,t),this.composer.setSize(e,t),this.camera.aspect=e/t,this.camera.updateProjectionMatrix()}async destroy(){cancelAnimationFrame(this.animId),this.renderer.dispose(),this.renderer.domElement.remove(),this.gui.destroy()}}new at({uniforms:{smokeBuffer:{value:null},readBuffer:{value:null}},vertexShader:`varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`varying vec2 vUv;

		uniform sampler2D smokeBuffer;
		uniform sampler2D readBuffer;

		void main() {
			vec4 frame1 = texture2D(smokeBuffer, vUv);
            vec4 frame2 = texture2D(readBuffer, vUv);
			gl_FragColor.rgb = mix(frame1.rgb, frame2.rgb, 0.5) * 1.0;
			gl_FragColor.a = 1.0;
		}`,depthTest:!1,depthWrite:!1,transparent:!0});new at({uniforms:{readBuffer:{value:null}},vertexShader:`varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`varying vec2 vUv;

		uniform sampler2D smokeBuffer;
		uniform sampler2D readBuffer;

		void main() {
            gl_FragColor = texture2D(readBuffer, vUv);
		}`,depthTest:!1,depthWrite:!1,transparent:!0});new at({uniforms:{readBuffer:{value:null},holdBuffer:{value:null},mixx:{value:1}},vertexShader:`varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`varying vec2 vUv;

		uniform sampler2D holdBuffer;
		uniform sampler2D readBuffer;
        uniform float mixx;

		void main() {
			vec4 frame1 = texture2D(holdBuffer, vUv);
            vec4 frame2 = texture2D(readBuffer, vUv);
			gl_FragColor = mix(frame1, frame2, mixx);
			// gl_FragColor.a = 1.0;
			// gl_FragColor = mix(frame1, frame2, mixx);
		}`,depthTest:!1,depthWrite:!1,transparent:!0});class i1 extends Ii{constructor(t,i,r){super();P(this,"buffer1");P(this,"buffer2");P(this,"fsQuad");P(this,"renderCount",0);P(this,"minFrames",1);P(this,"maxFrames",1);P(this,"samplesPerFrame");P(this,"currentFrames",this.minFrames);P(this,"iterations",32);P(this,"copyUniforms");P(this,"copyShader",Eg);P(this,"copyMaterial");this.scene=t,this.camera=i,this.resolution=r,this.copyUniforms=_l.clone(this.copyShader.uniforms),this.copyMaterial=new at({uniforms:this.copyUniforms,vertexShader:this.copyShader.vertexShader,fragmentShader:this.copyShader.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,premultipliedAlpha:!0,blending:Mn}),this.fsQuad=new Li(this.copyMaterial),this.buffer1=new wt(this.resolution.x,this.resolution.y),this.buffer2=new wt(this.resolution.x,this.resolution.y)}async init(){}increase(){this.currentFrames++,this.currentFrames>this.maxFrames&&(this.currentFrames=this.maxFrames)}decrease(){this.currentFrames-=100,this.currentFrames<this.minFrames&&(this.currentFrames=this.minFrames)}render(t,i,r,s,a){for(let o=0;o<=this.iterations;++o)this.renderIteration(t,r);this.renderToScreen&&(t.setRenderTarget(null),this.copyUniforms.opacity.value=1,this.copyUniforms.tDiffuse.value=this.buffer2.texture,t.clear(),this.fsQuad.render(t))}renderIteration(t,i){this.renderCount++;const[r,s]=this.getJitter(this.renderCount%64);t.setRenderTarget(i),this.camera.projectionMatrix.elements[8]=r/this.resolution.x,this.camera.projectionMatrix.elements[9]=s/this.resolution.y,t.setClearAlpha(1),t.setClearColor(0),t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(this.buffer2),t.setClearColor(0,.5),this.copyUniforms.opacity.value=.5,this.copyUniforms.tDiffuse.value=i.texture,this.fsQuad.render(t),this.swapBuffers()}swapBuffers(){const t=this.buffer1;this.buffer1=this.buffer2,this.buffer2=t}getJitter(t){return[(this.halton(t,2)-.5)*2,(this.halton(t,3)-.5)*2]}halton(t,i){let r=0,s=1/i,a=t;for(;a>0;)r+=s*(a%i),a=Math.floor(a/i),s/=i;return r}}const r1=`
    float bayerDither4x4(vec2 uv) {
        int x = int(mod(uv.x * 4.0, 4.0));
        int y = int(mod(uv.y * 4.0, 4.0));
        int index = x + y * 4;
        float dither[16] = float[16](
            0.0,  8.0,  2.0, 10.0,
           12.0,  4.0, 14.0,  6.0,
            3.0, 11.0,  1.0,  9.0,
           15.0,  7.0, 13.0,  5.0
        );
        return dither[index] / 16.0;
    }

	float random2(vec2 uv, float time) {
		return fract(sin(dot(uv + vec2(time * 0.1, time * 0.07), vec2(12.9898 + time * 0.07, 78.233 + time * 0.1))) * 43758.5453);
	}

	float random(vec2 uv) {
		return fract(sin(dot(uv, vec2(12.9898 + time, 78.233 + time / 2.0))) * 43758.5453);
	}

	float random3(vec3 pos) {
		return fract(sin(dot(pos, vec3(127.1, 311.7, 74.7))) * 43758.5453);
	}

	float random4(vec3 pos) {
		pos = fract(pos * 0.3183099 + 0.1); // Spread values evenly
		pos *= 17.0;  
		return fract(pos.x * pos.y * pos.z * (pos.x + pos.y + pos.z));
	}
`,sa=new Ai({color:7453618,transparent:!0,opacity:.6});sa.onBeforeCompile=n=>{n.uniforms.time={value:0},n.fragmentShader=`
        uniform float time;
        ${n.fragmentShader}
    `,n.fragmentShader=n.fragmentShader.replace("#include <common>",`#include <common>
${r1}`),n.fragmentShader=n.fragmentShader.replace("vec4 diffuseColor = vec4( diffuse, opacity );",`vec4 diffuseColor = vec4( diffuse, 1.0 );

        float threshold = random4(vec3(gl_FragCoord.xy, time));
        if (threshold > opacity) discard;`),sa.userData.shader=n};class s1{constructor(){P(this,"SHADOW_MAP_WIDTH",2048);P(this,"SHADOW_MAP_HEIGHT",2048);P(this,"COLD_COLOR",new Ce(13100018));P(this,"renderer");P(this,"composer");P(this,"renderPass");P(this,"outputPass");P(this,"tPass");P(this,"orbitControls");P(this,"textureLoader",new nn);P(this,"camera");P(this,"start",performance.now());P(this,"prevCamPos",new N);this.renderer=new Pi({antialias:!0}),this.composer=new Ki(this.renderer)}async init(){this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setClearColor(0),this.renderer.setClearAlpha(1),this.renderer.autoClear=!1,document.body.appendChild(this.renderer.domElement);const e=new oi;this.camera=new Et(45,window.innerWidth/window.innerHeight,.1,1e3),this.camera.position.set(2,2,5),this.composer=new Ki(this.renderer),this.tPass=new i1(e,this.camera,new Pe(window.innerWidth,window.innerHeight)),this.composer.addPass(this.tPass),this.orbitControls=new Di(this.camera,this.renderer.domElement);const t=new Zo(16777215,20,10);t.position.set(2.5,3,2),e.add(t);const i=new Ti(2,2,2,1,1,1);new Pa({wireframe:!0}),new Ai({color:16777215,transparent:!0,opacity:.2,alphaHash:!0});const r=new kt(i,sa);e.add(r);const s=new Ti(1,1,1,1,1,1),a=new Ai({color:13421772}),o=new kt(s,a);e.add(o)}async animate(){if(sa.userData.shader){const e=performance.now()-this.start;sa.userData.shader.uniforms.time.value=e}this.camera.position.distanceTo(this.prevCamPos)>.001?this.tPass.decrease():this.tPass.increase(),this.composer.render(),this.orbitControls.update(),this.prevCamPos.copy(this.camera.position),requestAnimationFrame(async()=>await this.animate())}async onResize(e,t){this.renderer.setSize(e,t),this.composer.setSize(e,t),this.camera.aspect=e/t,this.camera.updateProjectionMatrix()}async destroy(){this.renderer.dispose()}}let a1=Date.now();const Mo={defines:{DEPTH_PACKING:1,PERSPECTIVE_CAMERA:1,USE_SHADOWMAP:1},uniforms:{colorTexture:{value:null},depthTexture:{value:null},cameraNearFar:{value:new Pe(.5,.5)},textureMatrix:{value:null},resolution:{value:null},cameraWorldMatrix:{value:null},cameraProjectionMatrixInverse:{value:null},cameraPosition:{value:null},time:{value:0},texture3d:{value:null},lightPosition:{value:null},density2:{value:null},shadowMap:{value:null},directionalShadowMatrix:{value:null},scale2:{value:0},scale3:{value:0},derivative:{value:0}},vertexShader:Ug,fragmentShader:Ng},Tc=new at({uniforms:{smokeBuffer:{value:null},readBuffer:{value:null}},vertexShader:`varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`varying vec2 vUv;

		uniform sampler2D smokeBuffer;
		uniform sampler2D readBuffer;

		void main() {
			vec4 smoke = texture2D(smokeBuffer, vUv);
			// gl_FragColor.rgb = mix(texture2D(readBuffer, vUv).rgb, smoke.rgb, smoke.a);
			gl_FragColor.rgb = texture2D(readBuffer, vUv).rgb + smoke.rgb * smoke.a;
			gl_FragColor.a = 1.0;
		}`,depthTest:!1,depthWrite:!1,transparent:!0});class o1 extends Ii{constructor(t,i,r,s){super();P(this,"depthMaterial");P(this,"smokeMaterial");P(this,"depthBuffer");P(this,"someBuffer");P(this,"downSampling",2);P(this,"fsQuad");P(this,"scale2",4);P(this,"scale3",1);P(this,"derivative",.4);P(this,"density",.7);P(this,"textureLoader",new nn);this.scene=t,this.camera=i,this.resolution=r,this.light=s,this.fsQuad=new Li,this.depthMaterial=new Da,this.depthMaterial.side=xn,this.depthMaterial.depthPacking=Ra,this.depthMaterial.blending=Pt,this.smokeMaterial=new at({defines:Object.assign({},Mo.defines),uniforms:Mo.uniforms,vertexShader:Mo.vertexShader,fragmentShader:Mo.fragmentShader,blending:Pt,depthTest:!1,depthWrite:!1}),this.smokeMaterial.uniforms.cameraNearFar.value.set(this.camera.near,this.camera.far),this.smokeMaterial.uniforms.resolution.value=new Pe(r.x/this.downSampling,r.y/this.downSampling),this.smokeMaterial.uniforms.cameraWorldMatrix.value=this.camera.matrixWorld,this.smokeMaterial.uniforms.cameraProjectionMatrixInverse.value=this.camera.projectionMatrixInverse.clone(),this.depthBuffer=new wt(this.resolution.x/this.downSampling,this.resolution.y/this.downSampling),this.depthBuffer.texture.name="Depth",this.depthBuffer.texture.generateMipmaps=!1,this.someBuffer=new wt(this.resolution.x/this.downSampling,this.resolution.y/this.downSampling),this.someBuffer.texture.name="Some buffer",this.someBuffer.texture.generateMipmaps=!1}async init(){const t=await new Promise(i=>this.textureLoader.load("assets/textures/3d-noise.png",r=>{r.colorSpace=Ct,i(r)}));this.smokeMaterial.uniforms.texture3d.value=t}render(t,i,r,s,a){t.setRenderTarget(this.depthBuffer),this.scene.background=new Ce(16777215),this.scene.overrideMaterial=this.depthMaterial,t.render(this.scene,this.camera),this.scene.background=null,this.scene.overrideMaterial=null,this.smokeMaterial.uniforms.depthTexture.value=this.depthBuffer.texture,this.smokeMaterial.uniforms.cameraPosition.value=this.camera.position,this.smokeMaterial.uniforms.time.value=(Date.now()-a1)/1e4,this.smokeMaterial.uniforms.shadowMap.value=this.light.shadow.map.texture,this.smokeMaterial.uniforms.directionalShadowMatrix.value=this.light.shadow.matrix,this.smokeMaterial.uniforms.lightPosition.value=this.light.position.normalize(),this.smokeMaterial.uniforms.derivative.value=this.derivative,this.smokeMaterial.uniforms.scale2.value=this.scale2,this.smokeMaterial.uniforms.scale3.value=this.scale3,this.smokeMaterial.uniforms.density2.value=this.density,this.fsQuad.material=this.smokeMaterial,t.setRenderTarget(this.someBuffer),t.clear(),this.fsQuad.render(t),this.renderToScreen&&(this.fsQuad.material=Tc,Tc.uniforms.readBuffer.value=r.texture,Tc.uniforms.smokeBuffer.value=this.someBuffer.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t))}}class La{constructor(){P(this,"container");P(this,"mode",0);P(this,"beginTime",(performance||Date).now());P(this,"prevTime",this.beginTime);P(this,"frames",0);P(this,"fpsPanel");P(this,"msPanel");P(this,"memPanel");this.container=document.createElement("div"),this.container.style.cssText=`
			position: fixed;
			bottom: 0px;
			right: 0px;
			cursor: pointer;
			opacity: 0.9;
			z-index: 10000;
			width: 80px;
			height: 48px;
		`,this.container.addEventListener("click",e=>{e.preventDefault(),this.showPanel(++this.mode%this.container.children.length)},!1),this.fpsPanel=this.addPanel(new Ac("FPS","#0ff","#002")),this.msPanel=this.addPanel(new Ac("MS","#0f0","#020")),globalThis.performance&&globalThis.performance.memory&&(this.memPanel=this.addPanel(new Ac("MB","#f08","#201"))),this.showPanel(0)}begin(){this.beginTime=(performance||Date).now()}end(){this.frames++;var e=(performance||Date).now();if(this.msPanel.update(e-this.beginTime,200),e>this.prevTime+1e3&&(this.fpsPanel.update(this.frames*1e3/(e-this.prevTime),100),this.prevTime=e,this.frames=0,this.memPanel)){var t=performance.memory;this.memPanel.update(t.usedJSHeapSize/1048576,t.jsHeapSizeLimit/1048576)}return e}update(){this.beginTime=this.end()}showPanel(e){for(var t=0;t<this.container.children.length;t++)this.container.children[t].style.display=t===e?"block":"none";this.mode=e}addPanel(e){return this.container.appendChild(e.canvas),e}}class Ac{constructor(e,t,i){P(this,"context");P(this,"canvas");P(this,"min",1/0);P(this,"max",0);P(this,"PR",Math.round(window.devicePixelRatio||1));P(this,"WIDTH",80*this.PR);P(this,"HEIGHT",48*this.PR);P(this,"TEXT_X",3*this.PR);P(this,"TEXT_Y",2*this.PR);P(this,"GRAPH_X",3*this.PR);P(this,"GRAPH_Y",15*this.PR);P(this,"GRAPH_WIDTH",74*this.PR);P(this,"GRAPH_HEIGHT",30*this.PR);this.name=e,this.fg=t,this.bg=i,this.canvas=document.createElement("canvas"),this.canvas.width=this.WIDTH,this.canvas.height=this.HEIGHT,this.canvas.style.cssText="width:80px;height:48px",this.context=this.canvas.getContext("2d"),this.context.font="bold "+9*this.PR+"px Helvetica,Arial,sans-serif",this.context.textBaseline="top",this.context.fillStyle=i,this.context.fillRect(0,0,this.WIDTH,this.HEIGHT),this.context.fillStyle=t,this.context.fillText(this.name,this.TEXT_X,this.TEXT_Y),this.context.fillRect(this.GRAPH_X,this.GRAPH_Y,this.GRAPH_WIDTH,this.GRAPH_HEIGHT),this.context.fillStyle=i,this.context.globalAlpha=.9,this.context.fillRect(this.GRAPH_X,this.GRAPH_Y,this.GRAPH_WIDTH,this.GRAPH_HEIGHT)}update(e,t){this.min=Math.min(this.min,e),this.max=Math.max(this.max,e),this.context.fillStyle=this.bg,this.context.globalAlpha=1,this.context.fillRect(0,0,this.WIDTH,this.GRAPH_Y),this.context.fillStyle=this.fg,this.context.fillText(Math.round(e)+" "+this.name+" ("+Math.round(this.min)+"-"+Math.round(this.max)+")",this.TEXT_X,this.TEXT_Y),this.context.drawImage(this.canvas,this.GRAPH_X+this.PR,this.GRAPH_Y,this.GRAPH_WIDTH-this.PR,this.GRAPH_HEIGHT,this.GRAPH_X,this.GRAPH_Y,this.GRAPH_WIDTH-this.PR,this.GRAPH_HEIGHT),this.context.fillRect(this.GRAPH_X+this.GRAPH_WIDTH-this.PR,this.GRAPH_Y,this.PR,this.GRAPH_HEIGHT),this.context.fillStyle=this.bg,this.context.globalAlpha=.9,this.context.fillRect(this.GRAPH_X+this.GRAPH_WIDTH-this.PR,this.GRAPH_Y,this.PR,Math.round((1-e/t)*this.GRAPH_HEIGHT))}}class l1{constructor(){P(this,"renderer");P(this,"composer");P(this,"pass");P(this,"camera");P(this,"stats");P(this,"scene");P(this,"light");P(this,"orbitControls");P(this,"animId",-1);P(this,"gui");this.renderer=new Pi({antialias:!0}),this.composer=new Ki(this.renderer)}async init(){this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Ri,this.scene=new oi,this.scene.background=new Ce(.05,.05,.07),this.camera=new Et(75,window.innerWidth/window.innerHeight,.1,1e3);const e=new kt(new Ti(1,1,1),new Sa({color:16777215}));e.castShadow=!0,e.receiveShadow=!0,e.position.set(0,.5,0),this.scene.add(e);const t=new kt(new bs(6,6),new Sa({color:13421772}));t.rotateOnAxis(new N(1,0,0),-Math.PI/2),t.position.set(0,-.5,0),t.receiveShadow=!0,this.scene.add(t),this.light=new ir(15136511,1),this.light.position.set(0,2,0),this.light.castShadow=!0,this.light.shadow.camera.near=.1,this.light.shadow.camera.far=8,this.light.shadow.camera.top=2,this.light.shadow.camera.bottom=-2,this.light.shadow.camera.left=-2,this.light.shadow.camera.right=2,this.scene.add(this.light),this.scene.add(new rr(16771814,.1)),this.camera.position.set(-3,1,3),this.orbitControls=new Di(this.camera,this.renderer.domElement),this.renderer.setSize(window.innerWidth,window.innerHeight),document.body.appendChild(this.renderer.domElement),this.composer=new Ki(this.renderer),this.composer.addPass(new Ml(this.scene,this.camera)),this.pass=new o1(this.scene,this.camera,new Pe(window.innerWidth,window.innerHeight),this.light),this.pass.init(),this.composer.addPass(this.pass),this.stats=new La,document.body.appendChild(this.stats.container),this.gui=new Rs,this.gui.add(this.pass,"scale2",0,10),this.gui.add(this.pass,"scale3",0,1),this.gui.add(this.pass,"derivative",0,1),this.gui.add(this.pass,"density",0,1)}async animate(){this.stats.begin();let e=performance.now()*.002;this.light.position.x=Math.sin(e*.1)*4,this.light.position.y=1,this.light.position.z=Math.cos(e*.1)*4,this.composer.render(),this.orbitControls.update(),this.stats.end(),this.animId=requestAnimationFrame(async()=>await this.animate())}async onResize(e,t){this.renderer.setSize(e,t),this.composer.setSize(e,t),this.camera.aspect=e/t,this.camera.updateProjectionMatrix()}async destroy(){cancelAnimationFrame(this.animId),this.renderer.dispose(),this.stats.container.remove(),this.renderer.domElement.remove(),this.gui.destroy()}}var c1=`#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>

varying vec4 projTexCoord;
varying vec4 vPosition;
uniform mat4 textureMatrix;

void main() {

    #include <skinbase_vertex>
    #include <begin_vertex>
    #include <morphtarget_vertex>
    #include <skinning_vertex>
    #include <project_vertex>

    vPosition = mvPosition;

    vec4 worldPosition = vec4(transformed, 1.0);

    #ifdef USE_INSTANCING

        worldPosition = instanceMatrix * worldPosition;

    #endif
    
    worldPosition = modelMatrix * worldPosition;

    projTexCoord = textureMatrix * worldPosition;

}`,h1=`#include <packing>

varying vec4 vPosition;
varying vec4 projTexCoord;
uniform sampler2D depthTexture;
uniform vec2 cameraNearFar;

void main() {
    float depth = unpackRGBAToDepth(texture2DProj(depthTexture, projTexCoord));
    float viewZ = -perspectiveDepthToViewZ(depth, cameraNearFar.x, cameraNearFar.y); 

    
    gl_FragColor.rgb = vec3(viewZ) / 10.0;
    gl_FragColor.a = 1.0;
}`;const Cc={uniforms:{depthTexture:{value:null},cameraNearFar:{value:new Pe(.5,.5)},textureMatrix:{value:null}},vertexShader:c1,fragmentShader:h1};class u1 extends Ii{constructor(t,i,r){super();P(this,"material");P(this,"depthBuffer");P(this,"depthMaterial");P(this,"textureMatrix",new Ne);P(this,"downSampling",4);this.scene=t,this.camera=i,this.resolution=r,this.material=new at({uniforms:Cc.uniforms,vertexShader:Cc.vertexShader,fragmentShader:Cc.fragmentShader,blending:Pt,depthTest:!1,depthWrite:!1}),this.depthMaterial=new Da,this.depthMaterial.side=xn,this.depthMaterial.depthPacking=Ra,this.depthMaterial.blending=Pt,this.depthBuffer=new wt(this.resolution.x/this.downSampling,this.resolution.y/this.downSampling),this.depthBuffer.texture.name="Depth",this.depthBuffer.texture.generateMipmaps=!1}updateTextureMatrix(){this.textureMatrix.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),this.textureMatrix.multiply(this.camera.projectionMatrix),this.textureMatrix.multiply(this.camera.matrixWorldInverse)}render(t,i,r,s,a){this.scene.overrideMaterial=this.depthMaterial,t.setRenderTarget(this.depthBuffer),t.render(this.scene,this.camera),this.scene.overrideMaterial=null,this.renderToScreen&&(this.scene.overrideMaterial=this.material,this.updateTextureMatrix(),this.material.uniforms.cameraNearFar.value.set(this.camera.near,this.camera.far),this.material.uniforms.depthTexture.value=this.depthBuffer.texture,this.material.uniforms.textureMatrix.value=this.textureMatrix,t.setRenderTarget(null),t.clear(),t.render(this.scene,this.camera),this.scene.overrideMaterial=null)}}class d1{constructor(){P(this,"renderer",new Pi({antialias:!0}));P(this,"composer",new Ki(this.renderer));P(this,"scene",new oi);P(this,"light",new Zo(16763320,2,20));P(this,"width",window.innerWidth);P(this,"height",window.innerHeight);P(this,"camera",new Et(75,this.width/this.height,.1,1e3));P(this,"controls",new Di(this.camera,this.renderer.domElement));P(this,"animId",-1);this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Ri,this.renderer.setSize(this.width,this.height)}async init(){this.scene=new oi,this.light.position.set(0,2,0),this.light.castShadow=!0,this.scene.add(this.light);const e=new kt(new Ti(1,1,1),new Sa({color:16777215}));e.castShadow=!0,e.receiveShadow=!0,this.scene.add(e);const t=new kt(new bs(4,4),new Sa({color:13421772}));t.rotateOnAxis(new N(1,0,0),-Math.PI/2),t.position.set(0,-.5,0),t.receiveShadow=!0,this.scene.add(t),this.camera.position.set(0,1,4),this.composer=new Ki(this.renderer),this.composer.addPass(new Ml(this.scene,this.camera)),this.composer.addPass(new u1(this.scene,this.camera,new Pe(this.width,this.height))),document.body.appendChild(this.renderer.domElement)}async animate(){try{let e=performance.now()*.002;this.light.position.x=Math.sin(e*.8)*1,this.light.position.y=2,this.light.position.z=Math.cos(e*.8)*1,this.composer.render(),this.controls.update(),this.animId=requestAnimationFrame(async()=>await this.animate())}catch(e){console.error(e)}}async onResize(e,t){this.width=e,this.height=t,this.renderer.setSize(this.width,this.height),this.composer.setSize(this.width,this.height),this.camera.aspect=this.width/this.height,this.camera.updateProjectionMatrix()}async destroy(){cancelAnimationFrame(this.animId),this.renderer.dispose(),this.renderer.domElement.remove()}}var Ua=(n=>(n.tattooRendering="tattoo-rendering",n.step1="Step1",n.step2="Step2",n.step3="Step3",n.step4="Step4",n.step5="Step5",n.temporalRenderer="temporal-renderer",n.fogRenderer="FogRenderer",n.depth="Depth",n))(Ua||{});class f1{constructor(e,t,i){this.id=e,this.className=t,this.description=i}}class p1{constructor(){P(this,"rendererList",{})}register(e,t,i,r){const s=new f1(e,t,r);i||(i="default"),this.rendererList[i]||(this.rendererList[i]=[]),this.rendererList[i].push(s)}getGroups(){return Object.keys(this.rendererList)}getRenderersByGroups(e){if(!(e in this.rendererList))throw new Error("Invalid renderer group");return this.rendererList[e]}getRendererById(e){let t=null;if(Object.keys(this.rendererList).forEach(i=>{const r=this.rendererList[i].find(s=>s.id===e)??null;r&&(t=r)}),!t)throw new Error("Invalid renderer ");return t}}const En=new p1;En.register("tattoo-rendering",IA,"Arm","Tattoo arm rendering");En.register("Step1",n1,"Arm");En.register("temporal-renderer",s1);En.register("FogRenderer",l1);En.register("Depth",d1);class m1{create(e){const t=En.getRendererById(e);if(!t)throw new Error("Incorrect renderer id");return new t.className}}class g1{constructor(){P(this,"activeRenderer",null);P(this,"factory",new m1)}async setRenderer(e){var t;(t=this.activeRenderer)==null||t.destroy(),this.activeRenderer=this.factory.create(e),await this.activeRenderer.init(),this.activeRenderer.animate()}clear(){var e;(e=this.activeRenderer)==null||e.destroy(),this.activeRenderer=null}onResize(e,t){var i;(i=this.activeRenderer)==null||i.onResize(e,t)}}const Rc=new g1,_1=ll({__name:"Renderer",props:{id:{}},setup(n){const e=n;function t(){Rc.onResize(window.innerWidth,window.innerHeight)}return Kp(()=>{Rc.setRenderer(e.id),window.addEventListener("resize",t)}),Zp(()=>{Rc.clear(),window.removeEventListener("resize",t)}),(i,r)=>(An(),cu(Rn(Go),{class:"closeButton",to:"/"},{default:Bo(()=>r[0]||(r[0]=[jt("svg",{class:"icon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 70.04 117.43"},[jt("path",{fill:"currentColor",d:"M67.92,7.31l-5.19-5.19c-2.83-2.83-7.42-2.83-10.25,0L2.94,51.61c-3.92,3.92-3.92,10.28,0,14.2l49.54,49.49c2.83,2.83,7.42,2.83,10.25,0l5.19-5.19c2.83-2.83,2.83-7.42,0-10.25L29.46,61.41c-1.49-1.49-1.49-3.9,0-5.39l38.46-38.46c2.83-2.83,2.83-7.42,0-10.25Z"})],-1)])),_:1}))}}),v1="/thri-playground/assets/images/me.jpg",x1={class:"container"},y1={key:0},M1={key:0},S1=ll({__name:"Landing",setup(n){const e=En.getGroups().filter(t=>t!=="default");return(t,i)=>(An(),hi("div",x1,[i[0]||(i[0]=jt("div",{class:"header"},[jt("img",{src:v1,alt:"",class:"me"}),jt("h1",null,"Mfecane's three.js playground"),jt("div",null,[jt("p",null," Welcome to this ever-expanding yet inherently incomplete digital repository—a record of my ongoing experiments with Three.js, fragment and vertex shaders, real-time rendering, and other computationally demanding graphical manipulations that may or may not produce visually interesting results. "),jt("p",null," Over an indeterminate span of time, I have spent countless hours—some productive, others frustratingly futile—constructing, deconstructing, and occasionally reconstructing 3D scenes, particle systems, and post-processing pipelines. These are all rendered in real time, provided your hardware meets the loosely defined and entirely arbitrary performance requirements necessary for a reasonable frame rate. "),jt("p",null,' Performance may fluctuate wildly. Some demos may crash frequently. The results may not always align with conventional notions of "good," "pleasing," or even "coherent." No promises are made regarding browser compatibility, mobile responsiveness, or the continued well-being of your GPU after prolonged exposure to unoptimized shader code. '),jt("p",null," Proceed with caution, moderate expectations, and the understanding that, at its core, this is just a website where I make triangles do things. ")])],-1)),(An(!0),hi(Cn,null,Pl(Rn(e),r=>(An(),hi("div",{key:r,class:"group"},[jt("h2",null,qr(r),1),jt("ul",null,[(An(!0),hi(Cn,null,Pl(Rn(En).getRenderersByGroups(r),s=>(An(),hi("li",{key:r},[hn(Rn(Go),{to:s.id},{default:Bo(()=>[jc(qr(s.id),1)]),_:2},1032,["to"]),s.description?(An(),hi("p",y1,qr(s.description),1)):id("",!0)]))),128))])]))),128)),jt("div",null,[jt("ul",null,[(An(!0),hi(Cn,null,Pl(Rn(En).getRenderersByGroups("default"),r=>(An(),hi("li",null,[hn(Rn(Go),{to:r.id},{default:Bo(()=>[jc(qr(r.id),1)]),_:2},1032,["to"]),r.description?(An(),hi("p",M1,qr(r.description),1)):id("",!0)]))),256))])])]))}}),E1=[{path:"/",component:S1},{path:"/:id",component:_1,props:!0}];var b1=`varying vec2 vUv;

void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,w1=`#include <packing>

varying vec2 vUv;

uniform sampler2D tDepth;
uniform float scale;

uniform vec2 cameraNearFar;

float getDepth(const in vec2 screenPosition) {
	#if DEPTH_PACKING == 1
	return unpackRGBAToDepth(texture2D(tDepth, screenPosition));
	#else
	return texture2D(tDepth, screenPosition).x;
	#endif
}

float getViewZ(const in float depth) {
	#if PERSPECTIVE_CAMERA == 1
	return perspectiveDepthToViewZ(depth, cameraNearFar.x, cameraNearFar.y);
	#else
	return orthographicDepthToViewZ(depth, cameraNearFar.x, cameraNearFar.y);
	#endif
}

void main() {
	
	float viewZ = -getViewZ(getDepth(vUv));

	
	gl_FragColor.rgb = vec3(viewZ / scale);

	gl_FragColor.a = 1.0;
}`;const Pc={uniforms:{tDepth:{value:null},cameraNearFar:{value:new Pe(.5,.5)},scale:{value:1}},vertexShader:b1,fragmentShader:w1};class T1{constructor(){P(this,"SHADOW_MAP_WIDTH",2048);P(this,"SHADOW_MAP_HEIGHT",2048);P(this,"COLD_COLOR",new Ce(13100018));P(this,"renderer");P(this,"pass");P(this,"orbitControls");P(this,"textureLoader",new nn);P(this,"camera");P(this,"animId",-1);P(this,"depthMaterial");P(this,"scene",new oi);P(this,"downSampling",1);P(this,"depthBuffer");P(this,"width",window.innerWidth);P(this,"height",window.innerHeight);P(this,"fsQuad",new Li);P(this,"stats",new La);P(this,"colorMap");P(this,"gui");P(this,"scale",1);P(this,"depthDispayMaterial",new at({defines:{DEPTH_PACKING:1,PERSPECTIVE_CAMERA:1},uniforms:Pc.uniforms,vertexShader:Pc.vertexShader,fragmentShader:Pc.fragmentShader,blending:Pt,depthTest:!1,depthWrite:!1}));this.renderer=new Pi({antialias:!0}),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Ri,this.depthMaterial=new Da,this.depthMaterial.side=xn,this.depthMaterial.depthPacking=Ra,this.depthMaterial.blending=Pt,this.scene.background=new Ce(.05,.05,.07),this.depthBuffer=new wt(this.width/this.downSampling,this.height/this.downSampling),this.depthBuffer.texture.name="Depth",this.depthBuffer.texture.generateMipmaps=!1,document.body.appendChild(this.stats.container),this.gui=new Rs,this.gui.add(this,"scale",0,10)}async init(){this.renderer.setSize(this.width,this.height),this.renderer.setClearColor(0),this.renderer.setClearAlpha(1),this.renderer.autoClear=!1,document.body.appendChild(this.renderer.domElement),this.camera=new Et(45,this.width/this.height,.1,1e3),this.camera.position.set(2,0,2);const e=new Dn;this.scene.add(new rr(16777215,.2));const t=new ir(this.COLD_COLOR,2);t.position.set(2,1.5,1),t.castShadow=!0,t.shadow.camera.top=2,t.shadow.camera.bottom=-2,t.shadow.camera.left=-2,t.shadow.camera.right=2,t.shadow.camera.near=.01,t.shadow.camera.far=5,t.shadow.bias=1e-4,t.shadow.mapSize.width=this.SHADOW_MAP_WIDTH,t.shadow.mapSize.height=this.SHADOW_MAP_HEIGHT,t.shadow.radius=50,t.shadow.blurSamples=32,e.add(t),this.scene.add(e),this.orbitControls=new Di(this.camera,this.renderer.domElement);const i=new Cs,r=new nn,s=await new Promise(c=>{i.load("assets/models/arm/arm.fbx",u=>c(u.children[0]))});s.scale.set(.1,.1,.1),s.castShadow=!0,s.receiveShadow=!0,this.colorMap=await new Promise(c=>{r.load("assets/models/arm/diffuse.png",u=>c(u))}),this.colorMap.colorSpace=st;const a=await new Promise(c=>{r.load("assets/models/arm/arm_OccMetRough.png",u=>c(u))});a.colorSpace=Ct;const o=await new Promise(c=>{r.load("assets/models/arm/arm_Normal.png",u=>c(u))});o.colorSpace=Ct;const l=new Ai;l.depthTest=!0,l.transparent=!0,l.map=this.colorMap,l.normalMap=o,l.roughnessMap=a,l.metalnessMap=a,l.sheen=.1,l.sheenRoughness=.2,l.sheenColor=new Ce(16777215),s.material=l,this.scene.add(s)}async animate(){try{this.stats.begin(),this.renderer.setRenderTarget(this.depthBuffer),this.scene.overrideMaterial=this.depthMaterial,this.renderer.clear(),this.renderer.render(this.scene,this.camera),this.renderer.setRenderTarget(null),this.fsQuad.material=this.depthDispayMaterial,this.depthDispayMaterial.uniforms.cameraNearFar.value.set(this.camera.near,this.camera.far),this.depthDispayMaterial.uniforms.tDepth.value=this.depthBuffer.texture,this.depthDispayMaterial.uniforms.scale.value=this.scale,this.fsQuad.render(this.renderer),this.orbitControls.update(),this.animId=requestAnimationFrame(async()=>await this.animate()),this.stats.end()}catch(e){console.error(e)}}async onResize(e,t){this.width=e,this.height=t,this.depthBuffer.setSize(this.width/this.downSampling,this.height/this.downSampling),this.renderer.setSize(this.width,this.height),this.camera.aspect=this.width/this.height,this.camera.updateProjectionMatrix()}async destroy(){cancelAnimationFrame(this.animId),this.renderer.dispose(),this.renderer.domElement.remove(),this.stats.container.remove(),this.gui.destroy()}}En.register(Ua.step2,T1,"Arm","depth visualization");var A1=`varying vec2 vUv;

void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,C1=`#include <packing>

varying vec2 vUv;

uniform sampler2D tDepth;
uniform float scale;

uniform vec2 cameraNearFar;

float getViewZ(const in float depth) {
	#if PERSPECTIVE_CAMERA == 1
	return perspectiveDepthToViewZ(depth, cameraNearFar.x, cameraNearFar.y);
	#else
	return orthographicDepthToViewZ(depth, cameraNearFar.x, cameraNearFar.y);
	#endif
}

void main() {
	
	vec4 smpl = texture2D(tDepth, vUv);

	float viewZ = -getViewZ(unpackRGBToDepth(smpl.rgb));

	
	gl_FragColor.rgb = vec3(viewZ / scale);

	gl_FragColor.a = smpl.a;
}`,R1=`#define USE_MAP 1
#define MAP_UV uv

#define STANDARD

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

varying vec2 vHighPrecisionZW;

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

	vHighPrecisionZW = gl_Position.zw;
}`,P1=`#define USE_MAP 1

#if DEPTH_PACKING == 3200

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

	
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;

	#if DEPTH_PACKING == 3200

		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );

	#elif DEPTH_PACKING == 3201

		gl_FragColor = packDepthToRGBA( fragCoordZ );

	#elif DEPTH_PACKING == 3202

		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), diffuseColor.a );

	#elif DEPTH_PACKING == 3203

		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );

	#endif

}`;const Dc={uniforms:{map:{value:null},mapTransform:{value:new Xe}},vertexShader:R1,fragmentShader:P1},Ic={uniforms:{tDepth:{value:null},cameraNearFar:{value:new Pe(.5,.5)},scale:{value:1}},vertexShader:A1,fragmentShader:C1};class D1{constructor(){P(this,"SHADOW_MAP_WIDTH",2048);P(this,"SHADOW_MAP_HEIGHT",2048);P(this,"COLD_COLOR",new Ce(13100018));P(this,"renderer");P(this,"orbitControls");P(this,"textureLoader",new nn);P(this,"camera");P(this,"animId",-1);P(this,"scene",new oi);P(this,"downSampling",1);P(this,"depthBuffer");P(this,"width",window.innerWidth);P(this,"height",window.innerHeight);P(this,"fsQuad",new Li);P(this,"stats",new La);P(this,"colorMap");P(this,"gui");P(this,"scale",1);P(this,"depthDispayMaterial",new at({defines:{PERSPECTIVE_CAMERA:1},uniforms:Ic.uniforms,vertexShader:Ic.vertexShader,fragmentShader:Ic.fragmentShader,transparent:!0,blending:Mn,depthTest:!1,depthWrite:!1}));P(this,"depthAndAlphaMaterial",new at({defines:{PERSPECTIVE_CAMERA:1,DEPTH_PACKING:3202},uniforms:Dc.uniforms,vertexShader:Dc.vertexShader,fragmentShader:Dc.fragmentShader,transparent:!0,blending:Mn,depthTest:!0,depthWrite:!0}));P(this,"mesh");this.renderer=new Pi({antialias:!0}),this.renderer.autoClear=!1,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Ri,this.depthBuffer=new wt(this.width/this.downSampling,this.height/this.downSampling),this.depthBuffer.texture.name="Depth",this.depthBuffer.texture.generateMipmaps=!1,document.body.appendChild(this.stats.container),this.gui=new Rs,this.gui.add(this,"scale",0,10),window.renderer=this.renderer}async init(){this.renderer.setSize(this.width,this.height),document.body.appendChild(this.renderer.domElement),this.camera=new Et(45,this.width/this.height,.1,1e3),this.camera.position.set(2,0,2);const e=new Dn;this.scene.add(new rr(16777215,.2));const t=new ir(this.COLD_COLOR,2);t.position.set(2,1.5,1),t.castShadow=!0,t.shadow.camera.top=2,t.shadow.camera.bottom=-2,t.shadow.camera.left=-2,t.shadow.camera.right=2,t.shadow.camera.near=.01,t.shadow.camera.far=5,t.shadow.bias=1e-4,t.shadow.mapSize.width=this.SHADOW_MAP_WIDTH,t.shadow.mapSize.height=this.SHADOW_MAP_HEIGHT,t.shadow.radius=50,t.shadow.blurSamples=32,e.add(t),this.scene.add(e),this.orbitControls=new Di(this.camera,this.renderer.domElement);const i=new Cs,r=new nn;this.mesh=await new Promise(l=>{i.load("assets/models/arm/arm.fbx",c=>l(c.children[0]))}),this.mesh.scale.set(.1,.1,.1),this.mesh.castShadow=!0,this.mesh.receiveShadow=!0,this.colorMap=await new Promise(l=>{r.load("assets/models/arm/diffuse.png",c=>l(c))}),this.colorMap.colorSpace=st;const s=await new Promise(l=>{r.load("assets/models/arm/arm_OccMetRough.png",c=>l(c))});s.colorSpace=Ct;const a=await new Promise(l=>{r.load("assets/models/arm/arm_Normal.png",c=>l(c))});a.colorSpace=Ct;const o=new Ai;o.depthTest=!0,o.transparent=!0,o.map=this.colorMap,o.normalMap=a,o.roughnessMap=s,o.metalnessMap=s,o.sheen=.1,o.sheenRoughness=.2,o.sheenColor=new Ce(16777215),this.mesh.material=o,this.depthAndAlphaMaterial.uniforms.map.value=this.colorMap,this.scene.add(this.mesh)}async animate(){this.stats.begin(),this.renderer.setRenderTarget(this.depthBuffer),this.scene.overrideMaterial=this.depthAndAlphaMaterial,this.renderer.setClearColor(0),this.renderer.setClearAlpha(0),this.renderer.clear(),this.renderer.render(this.scene,this.camera),this.renderer.setRenderTarget(null),this.renderer.setClearColor(0),this.renderer.setClearAlpha(1),this.renderer.clear(),this.fsQuad.material=this.depthDispayMaterial,this.depthDispayMaterial.uniforms.cameraNearFar.value.set(this.camera.near,this.camera.far),this.depthDispayMaterial.uniforms.tDepth.value=this.depthBuffer.texture,this.depthDispayMaterial.uniforms.scale.value=this.scale,this.fsQuad.render(this.renderer),this.orbitControls.update(),this.animId=requestAnimationFrame(async()=>await this.animate()),this.stats.end()}async onResize(e,t){this.width=e,this.height=t,this.depthBuffer.setSize(this.width/this.downSampling,this.height/this.downSampling),this.renderer.setSize(this.width,this.height),this.camera.aspect=this.width/this.height,this.camera.updateProjectionMatrix()}async destroy(){cancelAnimationFrame(this.animId),this.renderer.dispose(),this.renderer.domElement.remove(),this.stats.container.remove(),this.gui.destroy()}}En.register(Ua.step3,D1,"Arm","depth and alpha visualization");var I1=`varying vec2 vUv;

void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,L1=`#include <packing>

varying vec2 vUv;

uniform sampler2D tDepth;
uniform float scale;

uniform vec2 cameraNearFar;

float getViewZ(const in float depth) {
	#if PERSPECTIVE_CAMERA == 1
	return perspectiveDepthToViewZ(depth, cameraNearFar.x, cameraNearFar.y);
	#else
	return orthographicDepthToViewZ(depth, cameraNearFar.x, cameraNearFar.y);
	#endif
}

void main() {
	
	vec4 smpl = texture2D(tDepth, vUv);

	float viewZ = -getViewZ(unpackRGBToDepth(smpl.rgb));

	
	
	gl_FragColor.rgb = vec3(smpl.a);

	gl_FragColor.a = 1.0;
}`,U1=`#define USE_MAP 1
#define MAP_UV uv

#define STANDARD

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

varying vec2 vHighPrecisionZW;

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

	vHighPrecisionZW = gl_Position.zw;
}`,N1=`#define USE_MAP 1

#if DEPTH_PACKING == 3200

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

	
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;

	#if DEPTH_PACKING == 3200

		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), diffuseColor.a );

	#elif DEPTH_PACKING == 3201

		gl_FragColor = packDepthToRGBA( fragCoordZ );

	#elif DEPTH_PACKING == 3202

		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), diffuseColor.a );

	#elif DEPTH_PACKING == 3203

		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );

	#endif

}`,F1=`varying vec2 vUv;

void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,O1=`#include <packing>
#include <shadowmap_pars_fragment>

#define MAX_STEPS 60
#define MAX_DIST 8.0
#define SURF_DIST 0.0001
#define iTime time
#define TEXTURE_SIZE_3D 8.0

varying vec2 vUv;

uniform sampler2D tDepth;
uniform sampler2D texture3d;
uniform sampler2D colorTexture;
uniform vec2 cameraNearFar;
uniform vec2 resolution;
uniform mat4 cameraWorldMatrix;
uniform mat4 cameraProjectionMatrixInverse;
uniform float time;
uniform float scale2;
uniform float scale3;
uniform vec3 lightPosition;
uniform float density2;

uniform sampler2D shadowMap;
uniform mat4 directionalShadowMatrix;

float getViewZ(const in float depth) {
	#if PERSPECTIVE_CAMERA == 1
	return perspectiveDepthToViewZ(depth, cameraNearFar.x, cameraNearFar.y);
	#else
	return orthographicDepthToViewZ(depth, cameraNearFar.x, cameraNearFar.y);
	#endif
}

float rand(vec2 n) {
	return fract(sin(dot(n, vec2(12.9898, 4.1414))) * 43758.5453);
}

vec3 sampleNoise3d(vec3 p) {
	vec3 pp = p / scale2;
	vec3 p2 = fract((pp + vec3(1.0)) / 2.0);
	float size = TEXTURE_SIZE_3D;
	float yIndex = p2.z * (size * size - 1.0);
	float row = floor(yIndex / size);
	float col = floor(yIndex - row * size);
	vec2 uv2 = (vec2(col, row) + p2.xy) / size;
	return texture(texture3d, uv2).rgb;
}

float Noise3d(in vec3 p) {
	
	vec3 shift = vec3(1.213 * sin(iTime / 4.0), 2.312 * cos(iTime / 5.341 + 7.145), 0.312 * cos(iTime / 7.1234 + 3.145));
	vec3 samplePoint = p + scale3 * (sampleNoise3d(p / 4.0 + shift));

	
	float noise = sampleNoise3d(samplePoint).r * sampleNoise3d(samplePoint.yzx).g * sampleNoise3d(samplePoint.zxy).b;

	
	
	
	
	return noise;
}

float getWorldShadow(vec3 point) {
	vec4 vDirectionalShadowCoord = directionalShadowMatrix * vec4(point, 1.0);
 	
	
	
	
	
	

	return getShadow(shadowMap, vec2(512.0, 512.0), 1.0, 0.01, 0.2, vDirectionalShadowCoord);
}

float densityFunction(vec3 point) {
	vec3 pp = point;
	
	float density = 0.1 + Noise3d(pp) * 0.2;
	
	
	
	density *= getWorldShadow(point);
	
	
	return density - 0.01;
}

bool rayIntersectInfiniteCylinder(vec3 ro, vec3 rd, out float near, out float far) {
	vec3 rdp = vec3(rd.x, 0.0, rd.z);
	vec3 rop = vec3(ro.x, 0.0, ro.z);
	float b = dot(rdp, rop);
	float a = dot(rdp, rdp);
	float c = dot(rop, rop) - 6.0; 
	float det = b * b - a * c;
	if(det > 0.0) {
		float detsqrt = sqrt(det);
		near = (-b - detsqrt) / a;
		far = (-b + detsqrt) / a;
		return far > 0.0;
	}
	return false;
}

vec4 volumetricMarch(vec3 ro, vec3 rd, float depth, float alpha) {
	vec4 sum = vec4(0.0);
	float step = 0.1; 

	
	step += rand(vUv) * 0.02;

	
	float density = density2;

	
	float near = 0.0, far = 0.0;

	
	if(!rayIntersectInfiniteCylinder(ro, rd, near, far)) {
		return vec4(0.0);
	}

	float transparent_accumulate_factor = 1.0;

	float dO = max(0.0, near);
	for(int i = 0; i < MAX_STEPS; i++) {

		
		
		if(dO + step > depth) {
			
			
			
		 	
			transparent_accumulate_factor = 1.0 - alpha;
		}

		
		vec3 p = ro + rd * dO;
		float sample1 = densityFunction(p);

		
		if(sample1 > 0.06) {
			
			
			float light = smoothstep(6.0, 0.0, length(lightPosition - p));

			
			vec4 col = vec4(mix(vec3(0.1, 0.1, 0.1), vec3(0.6, 1.0, 1.1), light), 1.0);
			sum += col * density * step * sample1 * transparent_accumulate_factor;
		}

		
		dO += step;

		
		if(dO > MAX_DIST || sum.a > 0.9 || dO > far) {
			break;
		}
	}
	return sum;
}

vec3 rayNoise(vec3 n) {
	float scale = 0.01;
	return scale * (vec3(rand(n.xy), rand(n.yz), rand(n.zx)) - vec3(0.5));
}

void main() {
	
	vec4 smpl = texture2D(tDepth, vUv);
	float alpha = smpl.a;
	
	float viewZ = -getViewZ(unpackRGBToDepth(smpl.rgb));

	if(alpha < 0.01) {
		viewZ = cameraNearFar.y;
	}

	
	vec3 rayOrigin = cameraPosition;
	vec2 screenPos = (gl_FragCoord.xy * 2.0 - resolution) / resolution;
	vec4 ndcRay = vec4(screenPos.xy, 1.0, 1.0);
	vec3 rayDirection = (cameraWorldMatrix * cameraProjectionMatrixInverse * ndcRay).xyz;

	
	rayDirection += rayNoise(rayDirection);

	
	gl_FragColor = volumetricMarch(rayOrigin, rayDirection, viewZ, alpha);
}`;const Lc={uniforms:{map:{value:null},mapTransform:{value:new Xe}},vertexShader:U1,fragmentShader:N1},Uc={uniforms:{tDepth:{value:null},cameraNearFar:{value:new Pe(.5,.5)},scale:{value:1}},vertexShader:I1,fragmentShader:L1},So={defines:{DEPTH_PACKING:1,PERSPECTIVE_CAMERA:1,USE_SHADOWMAP:1},uniforms:{colorTexture:{value:null},tDepth:{value:null},cameraNearFar:{value:new Pe(.5,.5)},textureMatrix:{value:null},resolution:{value:null},cameraWorldMatrix:{value:null},cameraProjectionMatrixInverse:{value:null},cameraPosition:{value:null},time:{value:0},texture3d:{value:null},lightPosition:{value:null},density2:{value:null},shadowMap:{value:null},directionalShadowMatrix:{value:null},scale2:{value:0},scale3:{value:0}},vertexShader:F1,fragmentShader:O1};class B1{constructor(){P(this,"COLD_COLOR",new Ce(13100018));P(this,"renderer");P(this,"orbitControls");P(this,"textureLoader",new nn);P(this,"camera");P(this,"animId",-1);P(this,"scene",new oi);P(this,"downSampling",2);P(this,"depthBuffer");P(this,"smokeBuffer");P(this,"sceneBuffer");P(this,"width",window.innerWidth);P(this,"height",window.innerHeight);P(this,"fsQuad",new Li);P(this,"stats",new La);P(this,"colorMap");P(this,"gui");P(this,"scale",1);P(this,"depthDispayMaterial",new at({defines:{PERSPECTIVE_CAMERA:1},uniforms:Uc.uniforms,vertexShader:Uc.vertexShader,fragmentShader:Uc.fragmentShader,transparent:!0,blending:Mn,depthTest:!1,depthWrite:!1}));P(this,"depthAndAlphaMaterial",new at({defines:{PERSPECTIVE_CAMERA:1,DEPTH_PACKING:3202},uniforms:Lc.uniforms,vertexShader:Lc.vertexShader,fragmentShader:Lc.fragmentShader,transparent:!0,blending:Pt,depthTest:!0,depthWrite:!0}));P(this,"smokeMaterial",new at({defines:Object.assign({},So.defines),uniforms:So.uniforms,vertexShader:So.vertexShader,fragmentShader:So.fragmentShader,blending:Pt,depthTest:!1,depthWrite:!1}));P(this,"composeMaterial",new at({uniforms:{smokeBuffer:{value:null},readBuffer:{value:null}},vertexShader:`varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`varying vec2 vUv;

		uniform sampler2D smokeBuffer;
		uniform sampler2D readBuffer;

		void main() {
			vec4 smoke = texture2D(smokeBuffer, vUv);
			vec4 scene = texture2D(readBuffer, vUv);
			// gl_FragColor.rgb = mix(texture2D(readBuffer, vUv).rgb, smoke.rgb, smoke.a);
			gl_FragColor.rgb = scene.rgb + smoke.rgb;
			// gl_FragColor.rgb = scene.rgb;
			gl_FragColor.a = scene.a;
		}`,blending:Mn,transparent:!0,depthTest:!1,depthWrite:!1}));P(this,"mesh");P(this,"backsideMesh");P(this,"light");P(this,"startTime",0);P(this,"scale2",4);P(this,"scale3",1);P(this,"density",.4);P(this,"physicalMaterial",new Ai({side:ai,depthTest:!0,transparent:!0,sheen:.1,sheenRoughness:.2,sheenColor:new Ce(16777215)}));P(this,"backsideMaterial",new Pa({colorWrite:!1,depthWrite:!0,side:en}));this.renderer=new Pi({antialias:!0,premultipliedAlpha:!1}),this.renderer.autoClear=!1,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Ri,this.depthBuffer=new wt(this.width/this.downSampling,this.height/this.downSampling,{format:fn,generateMipmaps:!1}),this.depthBuffer.texture.name="Depth",this.depthBuffer.texture.generateMipmaps=!1,this.depthBuffer.texture.premultiplyAlpha=!1,this.smokeBuffer=new wt(this.width/this.downSampling,this.height/this.downSampling),this.smokeBuffer.texture.name="Smoke Buffer",this.smokeBuffer.texture.generateMipmaps=!1,this.smokeBuffer.texture.premultiplyAlpha=!1,this.sceneBuffer=new wt(this.width,this.height),this.sceneBuffer.texture.name="Scene Buffer",this.sceneBuffer.texture.generateMipmaps=!1,this.sceneBuffer.texture.premultiplyAlpha=!1,document.body.appendChild(this.stats.container),this.gui=new Rs,this.gui.add(this,"scale",0,10),this.gui.add(this,"scale2",0,10),this.gui.add(this,"scale3",0,1),this.gui.add(this,"density",0,.5),window.renderer=this.renderer}async init(){this.renderer.setSize(this.width,this.height),document.body.appendChild(this.renderer.domElement),this.camera=new Et(45,this.width/this.height,.1,1e3),this.camera.position.set(2,0,2);const e=new Dn;this.scene.add(new rr(16777215,.2)),this.light=new ir(this.COLD_COLOR,2),this.light.position.set(3,2,3),this.light.castShadow=!0,this.light.shadow.camera.top=1,this.light.shadow.camera.bottom=-1,this.light.shadow.camera.left=-1,this.light.shadow.camera.right=1,this.light.shadow.camera.near=.01,this.light.shadow.camera.far=5,e.add(this.light),this.scene.add(e),this.orbitControls=new Di(this.camera,this.renderer.domElement);const t=new Cs,i=new nn;this.mesh=await new Promise(o=>{t.load("assets/models/arm/arm.fbx",l=>o(l.children[0]))}),this.mesh.scale.set(.08,.08,.08),this.mesh.castShadow=!0,this.mesh.receiveShadow=!0,this.colorMap=await new Promise(o=>{i.load("assets/models/arm/diffuse.png",l=>o(l))}),this.colorMap.colorSpace=st;const r=await new Promise(o=>{i.load("assets/models/arm/arm_OccMetRough.png",l=>o(l))});r.colorSpace=Ct;const s=await new Promise(o=>{i.load("assets/models/arm/arm_Normal.png",l=>o(l))});s.colorSpace=Ct,this.physicalMaterial.map=this.colorMap,this.physicalMaterial.normalMap=s,this.physicalMaterial.roughnessMap=r,this.physicalMaterial.metalnessMap=r,this.mesh.material=this.physicalMaterial,this.mesh.renderOrder=2,this.backsideMesh=this.mesh.clone(),this.backsideMesh.renderOrder=1,this.backsideMesh.material=this.backsideMaterial,this.backsideMesh.castShadow=!1,this.backsideMesh.receiveShadow=!1,this.depthAndAlphaMaterial.uniforms.map.value=this.colorMap,this.scene.add(this.mesh),this.scene.add(this.backsideMesh),this.smokeMaterial.uniforms.cameraNearFar.value.set(this.camera.near,this.camera.far),this.smokeMaterial.uniforms.resolution.value=new Pe(this.width/this.downSampling,this.height/this.downSampling),this.smokeMaterial.uniforms.cameraWorldMatrix.value=this.camera.matrixWorld,this.smokeMaterial.uniforms.cameraProjectionMatrixInverse.value=this.camera.projectionMatrixInverse.clone();const a=await new Promise(o=>this.textureLoader.load("assets/textures/3d-noise.png",l=>{l.colorSpace=Ct,o(l)}));this.smokeMaterial.uniforms.texture3d.value=a,this.startTime=Date.now()}async animate(){this.stats.begin(),this.renderer.setRenderTarget(this.sceneBuffer),this.scene.background=new Ce(0),this.renderer.render(this.scene,this.camera),this.scene.background=null,this.renderer.setRenderTarget(this.depthBuffer),this.scene.overrideMaterial=this.depthAndAlphaMaterial,this.renderer.setClearColor(16777215),this.renderer.setClearAlpha(0),this.renderer.clear(),this.renderer.render(this.scene,this.camera),this.scene.overrideMaterial=null,this.scene.background=null,this.camera.updateMatrix(),this.camera.updateMatrixWorld(),this.smokeMaterial.uniforms.tDepth.value=this.depthBuffer.texture,this.smokeMaterial.uniforms.cameraPosition.value=this.camera.position,this.smokeMaterial.uniforms.time.value=(Date.now()-this.startTime)/4e3,this.light.shadow.camera.updateProjectionMatrix(),this.smokeMaterial.uniforms.shadowMap.value=this.light.shadow.map.texture,this.smokeMaterial.uniforms.directionalShadowMatrix.value=this.light.shadow.matrix,this.smokeMaterial.uniforms.lightPosition.value=this.light.position.normalize(),this.smokeMaterial.uniforms.scale2.value=this.scale2,this.smokeMaterial.uniforms.scale3.value=this.scale3,this.smokeMaterial.uniforms.density2.value=this.density,this.fsQuad.material=this.smokeMaterial,this.renderer.setRenderTarget(this.smokeBuffer),this.renderer.setClearColor(0),this.renderer.setClearAlpha(1),this.renderer.clear(),this.fsQuad.render(this.renderer),this.fsQuad.material=this.composeMaterial,this.composeMaterial.uniforms.readBuffer.value=this.sceneBuffer.texture,this.composeMaterial.uniforms.smokeBuffer.value=this.smokeBuffer.texture,this.renderer.setRenderTarget(null),this.renderer.setClearColor(16777215),this.renderer.setClearAlpha(1),this.renderer.clear(),this.fsQuad.render(this.renderer),this.orbitControls.update(),this.animId=requestAnimationFrame(async()=>await this.animate()),this.stats.end()}async onResize(e,t){this.width=e,this.height=t,this.depthBuffer.setSize(this.width/this.downSampling,this.height/this.downSampling),this.smokeBuffer.setSize(this.width/this.downSampling,this.height/this.downSampling),this.sceneBuffer.setSize(this.width,this.height),this.renderer.setSize(this.width,this.height),this.camera.aspect=this.width/this.height,this.camera.updateProjectionMatrix(),this.smokeMaterial.uniforms.resolution.value=new Pe(this.width/this.downSampling,this.height/this.downSampling),this.smokeMaterial.uniforms.cameraProjectionMatrixInverse.value=this.camera.projectionMatrixInverse}async destroy(){cancelAnimationFrame(this.animId),this.renderer.dispose(),this.renderer.domElement.remove(),this.stats.container.remove(),this.gui.destroy()}}En.register(Ua.step4,B1,"Arm","add some fog");var k1=`varying vec2 vUv;

void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,H1=`#include <packing>

varying vec2 vUv;

uniform sampler2D tDepth;
uniform float scale;

uniform vec2 cameraNearFar;

float getViewZ(const in float depth) {
	#if PERSPECTIVE_CAMERA == 1
	return perspectiveDepthToViewZ(depth, cameraNearFar.x, cameraNearFar.y);
	#else
	return orthographicDepthToViewZ(depth, cameraNearFar.x, cameraNearFar.y);
	#endif
}

void main() {
	
	vec4 smpl = texture2D(tDepth, vUv);

	float viewZ = -getViewZ(unpackRGBToDepth(smpl.rgb));

	
	
	gl_FragColor.rgb = vec3(smpl.a);

	gl_FragColor.a = 1.0;
}`,z1=`#define USE_MAP 1
#define MAP_UV uv

#define STANDARD

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

varying vec2 vHighPrecisionZW;

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

	vHighPrecisionZW = gl_Position.zw;
}`,V1=`#define USE_MAP 1

#if DEPTH_PACKING == 3200

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

	
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;

	#if DEPTH_PACKING == 3200

		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), diffuseColor.a );

	#elif DEPTH_PACKING == 3201

		gl_FragColor = packDepthToRGBA( fragCoordZ );

	#elif DEPTH_PACKING == 3202

		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), diffuseColor.a );

	#elif DEPTH_PACKING == 3203

		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );

	#endif

}`,G1=`varying vec2 vUv;

void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,W1=`#include <packing>
#include <shadowmap_pars_fragment>

#define MAX_STEPS 60
#define MAX_DIST 8.0
#define SURF_DIST 0.0001
#define iTime time
#define TEXTURE_SIZE_3D 8.0

varying vec2 vUv;

uniform sampler2D tDepth;
uniform sampler2D texture3d;
uniform sampler2D colorTexture;
uniform vec2 cameraNearFar;
uniform vec2 resolution;
uniform mat4 cameraWorldMatrix;
uniform mat4 cameraProjectionMatrixInverse;
uniform float time;
uniform float noise3dScale;
uniform vec3 lightPosition;
uniform float density2;

uniform sampler2D shadowMap;
uniform mat4 directionalShadowMatrix;

float getViewZ(const in float depth) {
	#if PERSPECTIVE_CAMERA == 1
	return perspectiveDepthToViewZ(depth, cameraNearFar.x, cameraNearFar.y);
	#else
	return orthographicDepthToViewZ(depth, cameraNearFar.x, cameraNearFar.y);
	#endif
}

float rand(vec2 n) {
	return fract(sin(dot(n, vec2(12.9898, 4.1414))) * 43758.5453);
}

vec3 sampleNoise3d(vec3 p) {
	vec3 pp = p / noise3dScale;
	vec3 p2 = fract((pp + vec3(1.0)) / 2.0);
	float size = TEXTURE_SIZE_3D;
	float yIndex = p2.z * (size * size - 1.0);
	float row = floor(yIndex / size);
	float col = floor(yIndex - row * size);
	vec2 uv2 = (vec2(col, row) + p2.xy) / size;
	return texture(texture3d, uv2).rgb;
}

float Noise3d(in vec3 p) {
	
	vec3 shift = vec3(1.213 * sin(iTime / 4.0), 2.312 * cos(iTime / 5.341 + 7.145), 0.312 * cos(iTime / 7.1234 + 3.145));
	vec3 samplePoint = p + (sampleNoise3d(p + shift));

	
	float noise = sampleNoise3d(samplePoint).r * sampleNoise3d(samplePoint.yzx).g * sampleNoise3d(samplePoint.zxy).b;

	
	
	
	
	return noise;
}

float getWorldShadow(vec3 point) {
	vec4 vDirectionalShadowCoord = directionalShadowMatrix * vec4(point, 1.0);
 	
	
	
	
	
	

	return getShadow(shadowMap, vec2(512.0, 512.0), 1.0, 0.0, 0.0, vDirectionalShadowCoord);
}

float densityFunction(vec3 point) {
	vec3 pp = point;
	
	float density = 0.1 + Noise3d(pp) * 0.2;
	
	
	
	density *= getWorldShadow(point);
	
	
	return density;
}

bool rayIntersectInfiniteCylinder(vec3 ro, vec3 rd, out float near, out float far) {
	vec3 rdp = vec3(rd.x, 0.0, rd.z);
	vec3 rop = vec3(ro.x, 0.0, ro.z);
	float b = dot(rdp, rop);
	float a = dot(rdp, rdp);
	float c = dot(rop, rop) - 6.0; 
	float det = b * b - a * c;
	if(det > 0.0) {
		float detsqrt = sqrt(det);
		near = (-b - detsqrt) / a;
		far = (-b + detsqrt) / a;
		return far > 0.0;
	}
	return false;
}

vec4 volumetricMarch(vec3 ro, vec3 rd, float depth, float alpha) {
	vec4 sum = vec4(0.0);
	float step = 0.1; 

	
	step += rand(vUv) * 0.02;

	
	float density = density2;

	
	float near = 0.0, far = 0.0;

	
	if(!rayIntersectInfiniteCylinder(ro, rd, near, far)) {
		return vec4(0.0);
	}

	float transparent_accumulate_factor = 1.0;

	float dO = max(0.0, near);
	for(int i = 0; i < MAX_STEPS; i++) {

		
		
		if(dO + step > depth) {
			
			
			
		 	
			transparent_accumulate_factor = 1.0 - alpha;
		}

		
		vec3 p = ro + rd * dO;
		float sample1 = densityFunction(p);

		
		if(sample1 > 0.06) {
			
			
			
			float light = smoothstep(20.0, 0.0, distance(lightPosition * 10.0, p));

			
			vec4 col = vec4(mix(vec3(0.1, 0.1, 0.1), vec3(0.6, 1.0, 1.1), light), 1.0);
			sum += col * density * step * sample1 * transparent_accumulate_factor;
		}

		
		dO += step;

		
		if(dO > MAX_DIST || sum.a > 0.9 || dO > far) {
			break;
		}
	}
	return sum;
}

vec3 rayNoise(vec3 n) {
	float scale = 0.01;
	return scale * (vec3(rand(n.xy), rand(n.yz), rand(n.zx)) - vec3(0.5));
}

void main() {
	
	vec4 smpl = texture2D(tDepth, vUv);
	float alpha = smpl.a;
	
	float viewZ = -getViewZ(unpackRGBToDepth(smpl.rgb));

	if(alpha < 0.01) {
		viewZ = cameraNearFar.y;
	}

	
	vec3 rayOrigin = cameraPosition;
	vec2 screenPos = (gl_FragCoord.xy * 2.0 - resolution) / resolution;
	vec4 ndcRay = vec4(screenPos.xy, 1.0, 1.0);
	vec3 rayDirection = (cameraWorldMatrix * cameraProjectionMatrixInverse * ndcRay).xyz;

	
	rayDirection += rayNoise(rayDirection);

	
	gl_FragColor = volumetricMarch(rayOrigin, rayDirection, viewZ, alpha);
}`;const Nc={uniforms:{map:{value:null},mapTransform:{value:new Xe}},vertexShader:z1,fragmentShader:V1},Fc={uniforms:{tDepth:{value:null},cameraNearFar:{value:new Pe(.5,.5)},scale:{value:1}},vertexShader:k1,fragmentShader:H1},Eo={defines:{DEPTH_PACKING:1,PERSPECTIVE_CAMERA:1,USE_SHADOWMAP:1},uniforms:{colorTexture:{value:null},tDepth:{value:null},cameraNearFar:{value:new Pe(.5,.5)},textureMatrix:{value:null},resolution:{value:null},cameraWorldMatrix:{value:null},cameraProjectionMatrixInverse:{value:null},cameraPosition:{value:null},time:{value:0},texture3d:{value:null},lightPosition:{value:null},density2:{value:null},shadowMap:{value:null},directionalShadowMatrix:{value:null},noise3dScale:{value:0}},vertexShader:G1,fragmentShader:W1};class X1{constructor(){P(this,"COLD_COLOR",new Ce(13100018));P(this,"renderer");P(this,"orbitControls");P(this,"textureLoader",new nn);P(this,"camera");P(this,"animId",-1);P(this,"scene",new oi);P(this,"downSampling",2);P(this,"depthBuffer");P(this,"smokeBuffer");P(this,"sceneBuffer");P(this,"width",window.innerWidth);P(this,"height",window.innerHeight);P(this,"fsQuad",new Li);P(this,"stats",new La);P(this,"colorMap");P(this,"gui");P(this,"scale",1);P(this,"depthDispayMaterial",new at({defines:{PERSPECTIVE_CAMERA:1},uniforms:Fc.uniforms,vertexShader:Fc.vertexShader,fragmentShader:Fc.fragmentShader,transparent:!0,blending:Mn,depthTest:!1,depthWrite:!1}));P(this,"depthAndAlphaMaterial",new at({defines:{PERSPECTIVE_CAMERA:1,DEPTH_PACKING:3202},uniforms:Nc.uniforms,vertexShader:Nc.vertexShader,fragmentShader:Nc.fragmentShader,transparent:!0,blending:Pt,depthTest:!0,depthWrite:!0}));P(this,"smokeMaterial",new at({defines:Object.assign({},Eo.defines),uniforms:Eo.uniforms,vertexShader:Eo.vertexShader,fragmentShader:Eo.fragmentShader,blending:Pt,depthTest:!1,depthWrite:!1}));P(this,"composeMaterial",new at({uniforms:{smokeBuffer:{value:null},readBuffer:{value:null}},vertexShader:`varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`varying vec2 vUv;

		uniform sampler2D smokeBuffer;
		uniform sampler2D readBuffer;

		void main() {
			vec4 smoke = texture2D(smokeBuffer, vUv);
			vec4 scene = texture2D(readBuffer, vUv);
			// gl_FragColor.rgb = mix(texture2D(readBuffer, vUv).rgb, smoke.rgb, smoke.a);
			gl_FragColor.rgb = scene.rgb + smoke.rgb;
			// gl_FragColor.rgb = scene.rgb;
			gl_FragColor.a = scene.a;
		}`,blending:Mn,transparent:!0,depthTest:!1,depthWrite:!1}));P(this,"mesh");P(this,"backsideMesh");P(this,"light");P(this,"startTime",0);P(this,"noise3dScale",2);P(this,"density",.3);P(this,"physicalMaterial",new Ai({side:ai,depthTest:!0,transparent:!0,sheen:.1,sheenRoughness:.2,sheenColor:new Ce(16777215)}));P(this,"backsideMaterial",new Pa({colorWrite:!1,depthWrite:!0,side:en}));this.renderer=new Pi({antialias:!0,premultipliedAlpha:!1}),this.renderer.autoClear=!1,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Ri,this.depthBuffer=new wt(this.width/this.downSampling,this.height/this.downSampling,{format:fn,generateMipmaps:!1}),this.depthBuffer.texture.name="Depth",this.depthBuffer.texture.generateMipmaps=!1,this.depthBuffer.texture.premultiplyAlpha=!1,this.smokeBuffer=new wt(this.width/this.downSampling,this.height/this.downSampling),this.smokeBuffer.texture.name="Smoke Buffer",this.smokeBuffer.texture.generateMipmaps=!1,this.smokeBuffer.texture.premultiplyAlpha=!1,this.sceneBuffer=new wt(this.width,this.height),this.sceneBuffer.texture.name="Scene Buffer",this.sceneBuffer.texture.generateMipmaps=!1,this.sceneBuffer.texture.premultiplyAlpha=!1,document.body.appendChild(this.stats.container),this.gui=new Rs,this.gui.add(this,"noise3dScale",0,6),this.gui.add(this,"density",0,.5),window.renderer=this.renderer}async init(){this.renderer.setSize(this.width,this.height),document.body.appendChild(this.renderer.domElement),this.camera=new Et(45,this.width/this.height,.1,1e3),this.camera.position.set(2,0,2);const e=new Dn;this.scene.add(new rr(16777215,.2)),this.light=new ir(this.COLD_COLOR,2),this.light.position.set(3,2,3),this.light.castShadow=!0,this.light.shadow.camera.top=1,this.light.shadow.camera.bottom=-1,this.light.shadow.camera.left=-1,this.light.shadow.camera.right=1,this.light.shadow.camera.near=.01,this.light.shadow.camera.far=5,e.add(this.light),this.scene.add(e),this.orbitControls=new Di(this.camera,this.renderer.domElement);const t=new Cs,i=new nn;this.mesh=await new Promise(o=>{t.load("assets/models/arm/arm.fbx",l=>o(l.children[0]))}),this.mesh.scale.set(.08,.08,.08),this.mesh.castShadow=!0,this.mesh.receiveShadow=!0,this.colorMap=await new Promise(o=>{i.load("assets/models/arm/diffuse.png",l=>o(l))}),this.colorMap.colorSpace=st;const r=await new Promise(o=>{i.load("assets/models/arm/arm_OccMetRough.png",l=>o(l))});r.colorSpace=Ct;const s=await new Promise(o=>{i.load("assets/models/arm/arm_Normal.png",l=>o(l))});s.colorSpace=Ct,this.physicalMaterial.map=this.colorMap,this.physicalMaterial.normalMap=s,this.physicalMaterial.roughnessMap=r,this.physicalMaterial.metalnessMap=r,this.mesh.material=this.physicalMaterial,this.mesh.renderOrder=2,this.backsideMesh=this.mesh.clone(),this.backsideMesh.renderOrder=1,this.backsideMesh.material=this.backsideMaterial,this.backsideMesh.castShadow=!1,this.backsideMesh.receiveShadow=!1,this.depthAndAlphaMaterial.uniforms.map.value=this.colorMap,this.scene.add(this.mesh),this.scene.add(this.backsideMesh),this.smokeMaterial.uniforms.cameraNearFar.value.set(this.camera.near,this.camera.far),this.smokeMaterial.uniforms.resolution.value=new Pe(this.width/this.downSampling,this.height/this.downSampling),this.smokeMaterial.uniforms.cameraWorldMatrix.value=this.camera.matrixWorld,this.smokeMaterial.uniforms.cameraProjectionMatrixInverse.value=this.camera.projectionMatrixInverse.clone();const a=await new Promise(o=>this.textureLoader.load("assets/textures/3d-noise.png",l=>{l.colorSpace=Ct,o(l)}));this.smokeMaterial.uniforms.texture3d.value=a,this.startTime=Date.now()}async animate(){this.stats.begin();let e=performance.now()*.002;this.light.position.x=Math.sin(e*.1)*2,this.light.position.y=.66,this.light.position.z=Math.cos(e*.1)*2,this.renderer.setRenderTarget(this.sceneBuffer),this.scene.background=new Ce(0),this.renderer.render(this.scene,this.camera),this.scene.background=null,this.renderer.setRenderTarget(this.depthBuffer),this.scene.overrideMaterial=this.depthAndAlphaMaterial,this.renderer.setClearColor(16777215),this.renderer.setClearAlpha(0),this.renderer.clear(),this.renderer.render(this.scene,this.camera),this.scene.overrideMaterial=null,this.scene.background=null,this.camera.updateMatrix(),this.camera.updateMatrixWorld(),this.smokeMaterial.uniforms.tDepth.value=this.depthBuffer.texture,this.smokeMaterial.uniforms.cameraPosition.value=this.camera.position,this.smokeMaterial.uniforms.time.value=(Date.now()-this.startTime)/4e3,this.light.shadow.camera.updateProjectionMatrix(),this.smokeMaterial.uniforms.shadowMap.value=this.light.shadow.map.texture,this.smokeMaterial.uniforms.directionalShadowMatrix.value=this.light.shadow.matrix,this.smokeMaterial.uniforms.lightPosition.value=this.light.position.normalize(),this.smokeMaterial.uniforms.noise3dScale.value=this.noise3dScale,this.smokeMaterial.uniforms.density2.value=this.density,this.fsQuad.material=this.smokeMaterial,this.renderer.setRenderTarget(this.smokeBuffer),this.renderer.setClearColor(0),this.renderer.setClearAlpha(1),this.renderer.clear(),this.fsQuad.render(this.renderer),this.fsQuad.material=this.composeMaterial,this.composeMaterial.uniforms.readBuffer.value=this.sceneBuffer.texture,this.composeMaterial.uniforms.smokeBuffer.value=this.smokeBuffer.texture,this.renderer.setRenderTarget(null),this.renderer.setClearColor(16777215),this.renderer.setClearAlpha(1),this.renderer.clear(),this.fsQuad.render(this.renderer),this.orbitControls.update(),this.animId=requestAnimationFrame(async()=>await this.animate()),this.stats.end()}async onResize(e,t){this.width=e,this.height=t,this.depthBuffer.setSize(this.width/this.downSampling,this.height/this.downSampling),this.smokeBuffer.setSize(this.width/this.downSampling,this.height/this.downSampling),this.sceneBuffer.setSize(this.width,this.height),this.renderer.setSize(this.width,this.height),this.camera.aspect=this.width/this.height,this.camera.updateProjectionMatrix(),this.smokeMaterial.uniforms.resolution.value=new Pe(this.width/this.downSampling,this.height/this.downSampling),this.smokeMaterial.uniforms.cameraProjectionMatrixInverse.value=this.camera.projectionMatrixInverse}async destroy(){cancelAnimationFrame(this.animId),this.renderer.dispose(),this.renderer.domElement.remove(),this.stats.container.remove(),this.gui.destroy()}}En.register(Ua.step5,X1,"Arm","add particles, tweaks fog");const j1=(n,e)=>{const t=n.__vccOpts||n;for(const[i,r]of e)t[i]=r;return t},Y1={};function q1(n,e){const t=tv("RouterView");return An(),cu(t)}const $1=j1(Y1,[["render",q1]]),Gg=p0($1),K1=vx({history:q0(),routes:E1});Gg.use(K1);Gg.mount("#app");
