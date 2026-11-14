import{r as O,a as Xp,u as Ah,c as Zp,g as em,N as ta,B as tm,R as nm,b as jo}from"./vendor-EA-lzgZ-.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=t(r);fetch(r.href,i)}})();var xh={exports:{}},qi={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sm=O,rm=Symbol.for("react.element"),im=Symbol.for("react.fragment"),om=Object.prototype.hasOwnProperty,am=sm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,lm={key:!0,ref:!0,__self:!0,__source:!0};function Rh(n,e,t){var s,r={},i=null,a=null;t!==void 0&&(i=""+t),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(a=e.ref);for(s in e)om.call(e,s)&&!lm.hasOwnProperty(s)&&(r[s]=e[s]);if(n&&n.defaultProps)for(s in e=n.defaultProps,e)r[s]===void 0&&(r[s]=e[s]);return{$$typeof:rm,type:n,key:i,ref:a,props:r,_owner:am.current}}qi.Fragment=im;qi.jsx=Rh;qi.jsxs=Rh;xh.exports=qi;var h=xh.exports,na={},kc=Xp;na.createRoot=kc.createRoot,na.hydrateRoot=kc.hydrateRoot;const cm=()=>{};var Dc={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sh=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let r=n.charCodeAt(s);r<128?e[t++]=r:r<2048?(e[t++]=r>>6|192,e[t++]=r&63|128):(r&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(n.charCodeAt(++s)&1023),e[t++]=r>>18|240,e[t++]=r>>12&63|128,e[t++]=r>>6&63|128,e[t++]=r&63|128):(e[t++]=r>>12|224,e[t++]=r>>6&63|128,e[t++]=r&63|128)}return e},um=function(n){const e=[];let t=0,s=0;for(;t<n.length;){const r=n[t++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=n[t++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=n[t++],a=n[t++],l=n[t++],u=((r&7)<<18|(i&63)<<12|(a&63)<<6|l&63)-65536;e[s++]=String.fromCharCode(55296+(u>>10)),e[s++]=String.fromCharCode(56320+(u&1023))}else{const i=n[t++],a=n[t++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|a&63)}}return e.join("")},Ph={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<n.length;r+=3){const i=n[r],a=r+1<n.length,l=a?n[r+1]:0,u=r+2<n.length,d=u?n[r+2]:0,g=i>>2,_=(i&3)<<4|l>>4;let E=(l&15)<<2|d>>6,A=d&63;u||(A=64,a||(E=64)),s.push(t[g],t[_],t[E],t[A])}return s.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Sh(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):um(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<n.length;){const i=t[n.charAt(r++)],l=r<n.length?t[n.charAt(r)]:0;++r;const d=r<n.length?t[n.charAt(r)]:64;++r;const _=r<n.length?t[n.charAt(r)]:64;if(++r,i==null||l==null||d==null||_==null)throw new hm;const E=i<<2|l>>4;if(s.push(E),d!==64){const A=l<<4&240|d>>2;if(s.push(A),_!==64){const S=d<<6&192|_;s.push(S)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class hm extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const dm=function(n){const e=Sh(n);return Ph.encodeByteArray(e,!0)},wi=function(n){return dm(n).replace(/\./g,"")},Ch=function(n){try{return Ph.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fm(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pm=()=>fm().__FIREBASE_DEFAULTS__,mm=()=>{if(typeof process>"u"||typeof Dc>"u")return;const n=Dc.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},gm=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Ch(n[1]);return e&&JSON.parse(e)},zi=()=>{try{return cm()||pm()||mm()||gm()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Nh=n=>{var e,t;return(t=(e=zi())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},kh=n=>{const e=Nh(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},Dh=()=>{var n;return(n=zi())===null||n===void 0?void 0:n.config},Oh=n=>{var e;return(e=zi())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _m{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xn(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function ka(n){return(await fetch(n,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vh(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",r=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},n);return[wi(JSON.stringify(t)),wi(JSON.stringify(a)),""].join(".")}const er={};function ym(){const n={prod:[],emulator:[]};for(const e of Object.keys(er))er[e]?n.emulator.push(e):n.prod.push(e);return n}function vm(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let Oc=!1;function Da(n,e){if(typeof window>"u"||typeof document>"u"||!Xn(window.location.host)||er[n]===e||er[n]||Oc)return;er[n]=e;function t(E){return`__firebase__banner__${E}`}const s="__firebase__banner",i=ym().prod.length>0;function a(){const E=document.getElementById(s);E&&E.remove()}function l(E){E.style.display="flex",E.style.background="#7faaf0",E.style.position="fixed",E.style.bottom="5px",E.style.left="5px",E.style.padding=".5em",E.style.borderRadius="5px",E.style.alignItems="center"}function u(E,A){E.setAttribute("width","24"),E.setAttribute("id",A),E.setAttribute("height","24"),E.setAttribute("viewBox","0 0 24 24"),E.setAttribute("fill","none"),E.style.marginLeft="-6px"}function d(){const E=document.createElement("span");return E.style.cursor="pointer",E.style.marginLeft="16px",E.style.fontSize="24px",E.innerHTML=" &times;",E.onclick=()=>{Oc=!0,a()},E}function g(E,A){E.setAttribute("id",A),E.innerText="Learn more",E.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",E.setAttribute("target","__blank"),E.style.paddingLeft="5px",E.style.textDecoration="underline"}function _(){const E=vm(s),A=t("text"),S=document.getElementById(A)||document.createElement("span"),x=t("learnmore"),R=document.getElementById(x)||document.createElement("a"),V=t("preprendIcon"),M=document.getElementById(V)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(E.created){const C=E.element;l(C),g(R,x);const j=d();u(M,V),C.append(M,S,R,j),document.body.appendChild(C)}i?(S.innerText="Preview backend disconnected.",M.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(M.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,S.innerText="Preview backend running in this workspace."),S.setAttribute("id",A)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",_):_()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Em(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(nt())}function Tm(){var n;const e=(n=zi())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function wm(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Im(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function bm(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Am(){const n=nt();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function xm(){return!Tm()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Rm(){try{return typeof indexedDB=="object"}catch{return!1}}function Sm(){return new Promise((n,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),t||self.indexedDB.deleteDatabase(s),n(!0)},r.onupgradeneeded=()=>{t=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pm="FirebaseError";class Bt extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=Pm,Object.setPrototypeOf(this,Bt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,yr.prototype.create)}}class yr{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],a=i?Cm(i,s):"Error",l=`${this.serviceName}: ${a} (${r}).`;return new Bt(r,l,s)}}function Cm(n,e){return n.replace(Nm,(t,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const Nm=/\{\$([^}]+)}/g;function km(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Hn(n,e){if(n===e)return!0;const t=Object.keys(n),s=Object.keys(e);for(const r of t){if(!s.includes(r))return!1;const i=n[r],a=e[r];if(Vc(i)&&Vc(a)){if(!Hn(i,a))return!1}else if(i!==a)return!1}for(const r of s)if(!t.includes(r))return!1;return!0}function Vc(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vr(n){const e=[];for(const[t,s]of Object.entries(n))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Ks(n){const e={};return n.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[r,i]=s.split("=");e[decodeURIComponent(r)]=decodeURIComponent(i)}}),e}function Qs(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function Dm(n,e){const t=new Om(n,e);return t.subscribe.bind(t)}class Om{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let r;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");Vm(e,["next","error","complete"])?r=e:r={next:e,error:t,complete:s},r.next===void 0&&(r.next=Lo),r.error===void 0&&(r.error=Lo),r.complete===void 0&&(r.complete=Lo);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Vm(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Lo(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ke(n){return n&&n._delegate?n._delegate:n}class In{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mm{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new _m;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:t});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Lm(e))try{this.getOrInitializeService({instanceIdentifier:Bn})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=Bn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Bn){return this.instances.has(e)}getOptions(e=Bn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[i,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);s===l&&a.resolve(r)}return r}onInit(e,t){var s;const r=this.normalizeInstanceIdentifier(t),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const a=this.instances.get(r);return a&&e(a,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const r of s)try{r(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:jm(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Bn){return this.component?this.component.multipleInstances?e:Bn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function jm(n){return n===Bn?void 0:n}function Lm(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fm{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Mm(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ie;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(ie||(ie={}));const Um={debug:ie.DEBUG,verbose:ie.VERBOSE,info:ie.INFO,warn:ie.WARN,error:ie.ERROR,silent:ie.SILENT},Bm=ie.INFO,$m={[ie.DEBUG]:"log",[ie.VERBOSE]:"log",[ie.INFO]:"info",[ie.WARN]:"warn",[ie.ERROR]:"error"},qm=(n,e,...t)=>{if(e<n.logLevel)return;const s=new Date().toISOString(),r=$m[e];if(r)console[r](`[${s}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Oa{constructor(e){this.name=e,this._logLevel=Bm,this._logHandler=qm,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ie))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Um[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ie.DEBUG,...e),this._logHandler(this,ie.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ie.VERBOSE,...e),this._logHandler(this,ie.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ie.INFO,...e),this._logHandler(this,ie.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ie.WARN,...e),this._logHandler(this,ie.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ie.ERROR,...e),this._logHandler(this,ie.ERROR,...e)}}const zm=(n,e)=>e.some(t=>n instanceof t);let Mc,jc;function Hm(){return Mc||(Mc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Wm(){return jc||(jc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Mh=new WeakMap,sa=new WeakMap,jh=new WeakMap,Fo=new WeakMap,Va=new WeakMap;function Gm(n){const e=new Promise((t,s)=>{const r=()=>{n.removeEventListener("success",i),n.removeEventListener("error",a)},i=()=>{t(_n(n.result)),r()},a=()=>{s(n.error),r()};n.addEventListener("success",i),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&Mh.set(t,n)}).catch(()=>{}),Va.set(e,n),e}function Km(n){if(sa.has(n))return;const e=new Promise((t,s)=>{const r=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",a),n.removeEventListener("abort",a)},i=()=>{t(),r()},a=()=>{s(n.error||new DOMException("AbortError","AbortError")),r()};n.addEventListener("complete",i),n.addEventListener("error",a),n.addEventListener("abort",a)});sa.set(n,e)}let ra={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return sa.get(n);if(e==="objectStoreNames")return n.objectStoreNames||jh.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return _n(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Qm(n){ra=n(ra)}function Ym(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=n.call(Uo(this),e,...t);return jh.set(s,e.sort?e.sort():[e]),_n(s)}:Wm().includes(n)?function(...e){return n.apply(Uo(this),e),_n(Mh.get(this))}:function(...e){return _n(n.apply(Uo(this),e))}}function Jm(n){return typeof n=="function"?Ym(n):(n instanceof IDBTransaction&&Km(n),zm(n,Hm())?new Proxy(n,ra):n)}function _n(n){if(n instanceof IDBRequest)return Gm(n);if(Fo.has(n))return Fo.get(n);const e=Jm(n);return e!==n&&(Fo.set(n,e),Va.set(e,n)),e}const Uo=n=>Va.get(n);function Xm(n,e,{blocked:t,upgrade:s,blocking:r,terminated:i}={}){const a=indexedDB.open(n,e),l=_n(a);return s&&a.addEventListener("upgradeneeded",u=>{s(_n(a.result),u.oldVersion,u.newVersion,_n(a.transaction),u)}),t&&a.addEventListener("blocked",u=>t(u.oldVersion,u.newVersion,u)),l.then(u=>{i&&u.addEventListener("close",()=>i()),r&&u.addEventListener("versionchange",d=>r(d.oldVersion,d.newVersion,d))}).catch(()=>{}),l}const Zm=["get","getKey","getAll","getAllKeys","count"],eg=["put","add","delete","clear"],Bo=new Map;function Lc(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Bo.get(e))return Bo.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,r=eg.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(r||Zm.includes(t)))return;const i=async function(a,...l){const u=this.transaction(a,r?"readwrite":"readonly");let d=u.store;return s&&(d=d.index(l.shift())),(await Promise.all([d[t](...l),r&&u.done]))[0]};return Bo.set(e,i),i}Qm(n=>({...n,get:(e,t,s)=>Lc(e,t)||n.get(e,t,s),has:(e,t)=>!!Lc(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tg{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(ng(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function ng(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ia="@firebase/app",Fc="0.13.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xt=new Oa("@firebase/app"),sg="@firebase/app-compat",rg="@firebase/analytics-compat",ig="@firebase/analytics",og="@firebase/app-check-compat",ag="@firebase/app-check",lg="@firebase/auth",cg="@firebase/auth-compat",ug="@firebase/database",hg="@firebase/data-connect",dg="@firebase/database-compat",fg="@firebase/functions",pg="@firebase/functions-compat",mg="@firebase/installations",gg="@firebase/installations-compat",_g="@firebase/messaging",yg="@firebase/messaging-compat",vg="@firebase/performance",Eg="@firebase/performance-compat",Tg="@firebase/remote-config",wg="@firebase/remote-config-compat",Ig="@firebase/storage",bg="@firebase/storage-compat",Ag="@firebase/firestore",xg="@firebase/ai",Rg="@firebase/firestore-compat",Sg="firebase",Pg="11.10.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oa="[DEFAULT]",Cg={[ia]:"fire-core",[sg]:"fire-core-compat",[ig]:"fire-analytics",[rg]:"fire-analytics-compat",[ag]:"fire-app-check",[og]:"fire-app-check-compat",[lg]:"fire-auth",[cg]:"fire-auth-compat",[ug]:"fire-rtdb",[hg]:"fire-data-connect",[dg]:"fire-rtdb-compat",[fg]:"fire-fn",[pg]:"fire-fn-compat",[mg]:"fire-iid",[gg]:"fire-iid-compat",[_g]:"fire-fcm",[yg]:"fire-fcm-compat",[vg]:"fire-perf",[Eg]:"fire-perf-compat",[Tg]:"fire-rc",[wg]:"fire-rc-compat",[Ig]:"fire-gcs",[bg]:"fire-gcs-compat",[Ag]:"fire-fst",[Rg]:"fire-fst-compat",[xg]:"fire-vertex","fire-js":"fire-js",[Sg]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const or=new Map,Ng=new Map,aa=new Map;function Uc(n,e){try{n.container.addComponent(e)}catch(t){Xt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Wn(n){const e=n.name;if(aa.has(e))return Xt.debug(`There were multiple attempts to register component ${e}.`),!1;aa.set(e,n);for(const t of or.values())Uc(t,n);for(const t of Ng.values())Uc(t,n);return!0}function Hi(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function yt(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kg={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},yn=new yr("app","Firebase",kg);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dg{constructor(e,t,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new In("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw yn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zn=Pg;function Lh(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const s=Object.assign({name:oa,automaticDataCollectionEnabled:!0},e),r=s.name;if(typeof r!="string"||!r)throw yn.create("bad-app-name",{appName:String(r)});if(t||(t=Dh()),!t)throw yn.create("no-options");const i=or.get(r);if(i){if(Hn(t,i.options)&&Hn(s,i.config))return i;throw yn.create("duplicate-app",{appName:r})}const a=new Fm(r);for(const u of aa.values())a.addComponent(u);const l=new Dg(t,s,a);return or.set(r,l),l}function Ma(n=oa){const e=or.get(n);if(!e&&n===oa&&Dh())return Lh();if(!e)throw yn.create("no-app",{appName:n});return e}function Bc(){return Array.from(or.values())}function Nt(n,e,t){var s;let r=(s=Cg[n])!==null&&s!==void 0?s:n;t&&(r+=`-${t}`);const i=r.match(/\s|\//),a=e.match(/\s|\//);if(i||a){const l=[`Unable to register library "${r}" with version "${e}":`];i&&l.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&a&&l.push("and"),a&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Xt.warn(l.join(" "));return}Wn(new In(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Og="firebase-heartbeat-database",Vg=1,ar="firebase-heartbeat-store";let $o=null;function Fh(){return $o||($o=Xm(Og,Vg,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(ar)}catch(t){console.warn(t)}}}}).catch(n=>{throw yn.create("idb-open",{originalErrorMessage:n.message})})),$o}async function Mg(n){try{const t=(await Fh()).transaction(ar),s=await t.objectStore(ar).get(Uh(n));return await t.done,s}catch(e){if(e instanceof Bt)Xt.warn(e.message);else{const t=yn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Xt.warn(t.message)}}}async function $c(n,e){try{const s=(await Fh()).transaction(ar,"readwrite");await s.objectStore(ar).put(e,Uh(n)),await s.done}catch(t){if(t instanceof Bt)Xt.warn(t.message);else{const s=yn.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Xt.warn(s.message)}}}function Uh(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jg=1024,Lg=30;class Fg{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Bg(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=qc();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:r}),this._heartbeatsCache.heartbeats.length>Lg){const a=$g(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){Xt.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=qc(),{heartbeatsToSend:s,unsentEntries:r}=Ug(this._heartbeatsCache.heartbeats),i=wi(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return Xt.warn(t),""}}}function qc(){return new Date().toISOString().substring(0,10)}function Ug(n,e=jg){const t=[];let s=n.slice();for(const r of n){const i=t.find(a=>a.agent===r.agent);if(i){if(i.dates.push(r.date),zc(t)>e){i.dates.pop();break}}else if(t.push({agent:r.agent,dates:[r.date]}),zc(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class Bg{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Rm()?Sm().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Mg(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const r=await this.read();return $c(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const r=await this.read();return $c(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function zc(n){return wi(JSON.stringify({version:2,heartbeats:n})).length}function $g(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let s=1;s<n.length;s++)n[s].date<t&&(t=n[s].date,e=s);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qg(n){Wn(new In("platform-logger",e=>new tg(e),"PRIVATE")),Wn(new In("heartbeat",e=>new Fg(e),"PRIVATE")),Nt(ia,Fc,n),Nt(ia,Fc,"esm2017"),Nt("fire-js","")}qg("");function ja(n,e){var t={};for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&e.indexOf(s)<0&&(t[s]=n[s]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(n);r<s.length;r++)e.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(n,s[r])&&(t[s[r]]=n[s[r]]);return t}function Bh(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const zg=Bh,$h=new yr("auth","Firebase",Bh());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ii=new Oa("@firebase/auth");function Hg(n,...e){Ii.logLevel<=ie.WARN&&Ii.warn(`Auth (${Zn}): ${n}`,...e)}function ci(n,...e){Ii.logLevel<=ie.ERROR&&Ii.error(`Auth (${Zn}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xt(n,...e){throw La(n,...e)}function kt(n,...e){return La(n,...e)}function qh(n,e,t){const s=Object.assign(Object.assign({},zg()),{[e]:t});return new yr("auth","Firebase",s).create(e,{appName:n.name})}function vn(n){return qh(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function La(n,...e){if(typeof n!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=n.name),n._errorFactory.create(t,...s)}return $h.create(n,...e)}function G(n,e,...t){if(!n)throw La(e,...t)}function Kt(n){const e="INTERNAL ASSERTION FAILED: "+n;throw ci(e),new Error(e)}function Zt(n,e){n||Kt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function la(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function Wg(){return Hc()==="http:"||Hc()==="https:"}function Hc(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gg(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Wg()||Im()||"connection"in navigator)?navigator.onLine:!0}function Kg(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er{constructor(e,t){this.shortDelay=e,this.longDelay=t,Zt(t>e,"Short delay should be less than long delay!"),this.isMobile=Em()||bm()}get(){return Gg()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fa(n,e){Zt(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zh{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Kt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Kt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Kt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qg={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yg=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Jg=new Er(3e4,6e4);function es(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Nn(n,e,t,s,r={}){return Hh(n,r,async()=>{let i={},a={};s&&(e==="GET"?a=s:i={body:JSON.stringify(s)});const l=vr(Object.assign({key:n.config.apiKey},a)).slice(1),u=await n._getAdditionalHeaders();u["Content-Type"]="application/json",n.languageCode&&(u["X-Firebase-Locale"]=n.languageCode);const d=Object.assign({method:e,headers:u},i);return wm()||(d.referrerPolicy="no-referrer"),n.emulatorConfig&&Xn(n.emulatorConfig.host)&&(d.credentials="include"),zh.fetch()(await Wh(n,n.config.apiHost,t,l),d)})}async function Hh(n,e,t){n._canInitEmulator=!1;const s=Object.assign(Object.assign({},Qg),e);try{const r=new Zg(n),i=await Promise.race([t(),r.promise]);r.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw Xr(n,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const l=i.ok?a.errorMessage:a.error.message,[u,d]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Xr(n,"credential-already-in-use",a);if(u==="EMAIL_EXISTS")throw Xr(n,"email-already-in-use",a);if(u==="USER_DISABLED")throw Xr(n,"user-disabled",a);const g=s[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw qh(n,g,d);xt(n,g)}}catch(r){if(r instanceof Bt)throw r;xt(n,"network-request-failed",{message:String(r)})}}async function Wi(n,e,t,s,r={}){const i=await Nn(n,e,t,s,r);return"mfaPendingCredential"in i&&xt(n,"multi-factor-auth-required",{_serverResponse:i}),i}async function Wh(n,e,t,s){const r=`${e}${t}?${s}`,i=n,a=i.config.emulator?Fa(n.config,r):`${n.config.apiScheme}://${r}`;return Yg.includes(t)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(a).toString():a}function Xg(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Zg{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(kt(this.auth,"network-request-failed")),Jg.get())})}}function Xr(n,e,t){const s={appName:n.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const r=kt(n,e,s);return r.customData._tokenResponse=t,r}function Wc(n){return n!==void 0&&n.enterprise!==void 0}class e_{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return Xg(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function t_(n,e){return Nn(n,"GET","/v2/recaptchaConfig",es(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function n_(n,e){return Nn(n,"POST","/v1/accounts:delete",e)}async function bi(n,e){return Nn(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tr(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function s_(n,e=!1){const t=ke(n),s=await t.getIdToken(e),r=Ua(s);G(r&&r.exp&&r.auth_time&&r.iat,t.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,a=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:tr(qo(r.auth_time)),issuedAtTime:tr(qo(r.iat)),expirationTime:tr(qo(r.exp)),signInProvider:a||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function qo(n){return Number(n)*1e3}function Ua(n){const[e,t,s]=n.split(".");if(e===void 0||t===void 0||s===void 0)return ci("JWT malformed, contained fewer than 3 sections"),null;try{const r=Ch(t);return r?JSON.parse(r):(ci("Failed to decode base64 JWT payload"),null)}catch(r){return ci("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function Gc(n){const e=Ua(n);return G(e,"internal-error"),G(typeof e.exp<"u","internal-error"),G(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lr(n,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof Bt&&r_(s)&&n.auth.currentUser===n&&await n.auth.signOut(),s}}function r_({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i_{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const r=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ca{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=tr(this.lastLoginAt),this.creationTime=tr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ai(n){var e;const t=n.auth,s=await n.getIdToken(),r=await lr(n,bi(t,{idToken:s}));G(r==null?void 0:r.users.length,t,"internal-error");const i=r.users[0];n._notifyReloadListener(i);const a=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Gh(i.providerUserInfo):[],l=a_(n.providerData,a),u=n.isAnonymous,d=!(n.email&&i.passwordHash)&&!(l!=null&&l.length),g=u?d:!1,_={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new ca(i.createdAt,i.lastLoginAt),isAnonymous:g};Object.assign(n,_)}async function o_(n){const e=ke(n);await Ai(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function a_(n,e){return[...n.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function Gh(n){return n.map(e=>{var{providerId:t}=e,s=ja(e,["providerId"]);return{providerId:t,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function l_(n,e){const t=await Hh(n,{},async()=>{const s=vr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=n.config,a=await Wh(n,r,"/v1/token",`key=${i}`),l=await n._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:l,body:s};return n.emulatorConfig&&Xn(n.emulatorConfig.host)&&(u.credentials="include"),zh.fetch()(a,u)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function c_(n,e){return Nn(n,"POST","/v2/accounts:revokeToken",es(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){G(e.idToken,"internal-error"),G(typeof e.idToken<"u","internal-error"),G(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Gc(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){G(e.length!==0,"internal-error");const t=Gc(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(G(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:r,expiresIn:i}=await l_(e,t);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:r,expirationTime:i}=t,a=new fs;return s&&(G(typeof s=="string","internal-error",{appName:e}),a.refreshToken=s),r&&(G(typeof r=="string","internal-error",{appName:e}),a.accessToken=r),i&&(G(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new fs,this.toJSON())}_performRefresh(){return Kt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cn(n,e){G(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class wt{constructor(e){var{uid:t,auth:s,stsTokenManager:r}=e,i=ja(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new i_(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new ca(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await lr(this,this.stsTokenManager.getToken(this.auth,e));return G(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return s_(this,e)}reload(){return o_(this)}_assign(e){this!==e&&(G(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new wt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){G(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await Ai(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(yt(this.auth.app))return Promise.reject(vn(this.auth));const e=await this.getIdToken();return await lr(this,n_(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var s,r,i,a,l,u,d,g;const _=(s=t.displayName)!==null&&s!==void 0?s:void 0,E=(r=t.email)!==null&&r!==void 0?r:void 0,A=(i=t.phoneNumber)!==null&&i!==void 0?i:void 0,S=(a=t.photoURL)!==null&&a!==void 0?a:void 0,x=(l=t.tenantId)!==null&&l!==void 0?l:void 0,R=(u=t._redirectEventId)!==null&&u!==void 0?u:void 0,V=(d=t.createdAt)!==null&&d!==void 0?d:void 0,M=(g=t.lastLoginAt)!==null&&g!==void 0?g:void 0,{uid:C,emailVerified:j,isAnonymous:L,providerData:F,stsTokenManager:I}=t;G(C&&I,e,"internal-error");const p=fs.fromJSON(this.name,I);G(typeof C=="string",e,"internal-error"),cn(_,e.name),cn(E,e.name),G(typeof j=="boolean",e,"internal-error"),G(typeof L=="boolean",e,"internal-error"),cn(A,e.name),cn(S,e.name),cn(x,e.name),cn(R,e.name),cn(V,e.name),cn(M,e.name);const m=new wt({uid:C,auth:e,email:E,emailVerified:j,displayName:_,isAnonymous:L,photoURL:S,phoneNumber:A,tenantId:x,stsTokenManager:p,createdAt:V,lastLoginAt:M});return F&&Array.isArray(F)&&(m.providerData=F.map(v=>Object.assign({},v))),R&&(m._redirectEventId=R),m}static async _fromIdTokenResponse(e,t,s=!1){const r=new fs;r.updateFromServerResponse(t);const i=new wt({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await Ai(i),i}static async _fromGetAccountInfoResponse(e,t,s){const r=t.users[0];G(r.localId!==void 0,"internal-error");const i=r.providerUserInfo!==void 0?Gh(r.providerUserInfo):[],a=!(r.email&&r.passwordHash)&&!(i!=null&&i.length),l=new fs;l.updateFromIdToken(s);const u=new wt({uid:r.localId,auth:e,stsTokenManager:l,isAnonymous:a}),d={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:i,metadata:new ca(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!(i!=null&&i.length)};return Object.assign(u,d),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kc=new Map;function Qt(n){Zt(n instanceof Function,"Expected a class definition");let e=Kc.get(n);return e?(Zt(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Kc.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kh{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Kh.type="NONE";const Qc=Kh;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ui(n,e,t){return`firebase:${n}:${e}:${t}`}class ps{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=ui(this.userKey,r.apiKey,i),this.fullPersistenceKey=ui("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await bi(this.auth,{idToken:e}).catch(()=>{});return t?wt._fromGetAccountInfoResponse(this.auth,t,e):null}return wt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new ps(Qt(Qc),e,s);const r=(await Promise.all(t.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let i=r[0]||Qt(Qc);const a=ui(s,e.config.apiKey,e.name);let l=null;for(const d of t)try{const g=await d._get(a);if(g){let _;if(typeof g=="string"){const E=await bi(e,{idToken:g}).catch(()=>{});if(!E)break;_=await wt._fromGetAccountInfoResponse(e,E,g)}else _=wt._fromJSON(e,g);d!==i&&(l=_),i=d;break}}catch{}const u=r.filter(d=>d._shouldAllowMigration);return!i._shouldAllowMigration||!u.length?new ps(i,e,s):(i=u[0],l&&await i._set(a,l.toJSON()),await Promise.all(t.map(async d=>{if(d!==i)try{await d._remove(a)}catch{}})),new ps(i,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yc(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Xh(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Qh(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ed(e))return"Blackberry";if(td(e))return"Webos";if(Yh(e))return"Safari";if((e.includes("chrome/")||Jh(e))&&!e.includes("edge/"))return"Chrome";if(Zh(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=n.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Qh(n=nt()){return/firefox\//i.test(n)}function Yh(n=nt()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Jh(n=nt()){return/crios\//i.test(n)}function Xh(n=nt()){return/iemobile/i.test(n)}function Zh(n=nt()){return/android/i.test(n)}function ed(n=nt()){return/blackberry/i.test(n)}function td(n=nt()){return/webos/i.test(n)}function Ba(n=nt()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function u_(n=nt()){var e;return Ba(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function h_(){return Am()&&document.documentMode===10}function nd(n=nt()){return Ba(n)||Zh(n)||td(n)||ed(n)||/windows phone/i.test(n)||Xh(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sd(n,e=[]){let t;switch(n){case"Browser":t=Yc(nt());break;case"Worker":t=`${Yc(nt())}-${n}`;break;default:t=n}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Zn}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d_{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=i=>new Promise((a,l)=>{try{const u=e(i);a(u)}catch(u){l(u)}});s.onAbort=t,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const r of t)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function f_(n,e={}){return Nn(n,"GET","/v2/passwordPolicy",es(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p_=6;class m_{constructor(e){var t,s,r,i;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=a.minPasswordLength)!==null&&t!==void 0?t:p_,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(r=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&r!==void 0?r:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,s,r,i,a,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(t=u.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),u.isValid&&(u.isValid=(s=u.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(r=u.containsLowercaseLetter)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsUppercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(a=u.containsNumericCharacter)!==null&&a!==void 0?a:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),r&&(t.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let r=0;r<e.length;r++)s=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,r,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g_{constructor(e,t,s,r){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Jc(this),this.idTokenSubscription=new Jc(this),this.beforeStateQueue=new d_(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=$h,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Qt(t)),this._initializationPromise=this.queue(async()=>{var s,r,i;if(!this._deleted&&(this.persistenceManager=await ps.create(this,e),(s=this._resolvePersistenceManagerAvailable)===null||s===void 0||s.call(this),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await bi(this,{idToken:e}),s=await wt._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(yt(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(l,l))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let r=s,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,l=r==null?void 0:r._redirectEventId,u=await this.tryRedirectSignIn(e);(!a||a===l)&&(u!=null&&u.user)&&(r=u.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(a){r=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return G(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Ai(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Kg()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(yt(this.app))return Promise.reject(vn(this));const t=e?ke(e):null;return t&&G(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&G(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return yt(this.app)?Promise.reject(vn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return yt(this.app)?Promise.reject(vn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Qt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await f_(this),t=new m_(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new yr("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await c_(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Qt(e)||this._popupRedirectResolver;G(t,this,"argument-error"),this.redirectPersistenceManager=await ps.create(this,[Qt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,r){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let a=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(G(l,this,"internal-error"),l.then(()=>{a||i(this.currentUser)}),typeof t=="function"){const u=e.addObserver(t,s,r);return()=>{a=!0,u()}}else{const u=e.addObserver(t);return()=>{a=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return G(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=sd(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(t["X-Firebase-Client"]=s);const r=await this._getAppCheckToken();return r&&(t["X-Firebase-AppCheck"]=r),t}async _getAppCheckToken(){var e;if(yt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&Hg(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Rs(n){return ke(n)}class Jc{constructor(e){this.auth=e,this.observer=null,this.addObserver=Dm(t=>this.observer=t)}get next(){return G(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Gi={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function __(n){Gi=n}function rd(n){return Gi.loadJS(n)}function y_(){return Gi.recaptchaEnterpriseScript}function v_(){return Gi.gapiScript}function E_(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class T_{constructor(){this.enterprise=new w_}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class w_{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const I_="recaptcha-enterprise",id="NO_RECAPTCHA";class b_{constructor(e){this.type=I_,this.auth=Rs(e)}async verify(e="verify",t=!1){async function s(i){if(!t){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(a,l)=>{t_(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const d=new e_(u);return i.tenantId==null?i._agentRecaptchaConfig=d:i._tenantRecaptchaConfigs[i.tenantId]=d,a(d.siteKey)}}).catch(u=>{l(u)})})}function r(i,a,l){const u=window.grecaptcha;Wc(u)?u.enterprise.ready(()=>{u.enterprise.execute(i,{action:e}).then(d=>{a(d)}).catch(()=>{a(id)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new T_().execute("siteKey",{action:"verify"}):new Promise((i,a)=>{s(this.auth).then(l=>{if(!t&&Wc(window.grecaptcha))r(l,i,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let u=y_();u.length!==0&&(u+=l),rd(u).then(()=>{r(l,i,a)}).catch(d=>{a(d)})}}).catch(l=>{a(l)})})}}async function Xc(n,e,t,s=!1,r=!1){const i=new b_(n);let a;if(r)a=id;else try{a=await i.verify(t)}catch{a=await i.verify(t,!0)}const l=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const u=l.phoneEnrollmentInfo.phoneNumber,d=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:u,recaptchaToken:d,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const u=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:u,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return s?Object.assign(l,{captchaResp:a}):Object.assign(l,{captchaResponse:a}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function Zc(n,e,t,s,r){var i;if(!((i=n._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const a=await Xc(n,e,t,t==="getOobCode");return s(n,a)}else return s(n,e).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await Xc(n,e,t,t==="getOobCode");return s(n,l)}else return Promise.reject(a)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A_(n,e){const t=Hi(n,"auth");if(t.isInitialized()){const r=t.getImmediate(),i=t.getOptions();if(Hn(i,e??{}))return r;xt(r,"already-initialized")}return t.initialize({options:e})}function x_(n,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(Qt);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function R_(n,e,t){const s=Rs(n);G(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!1,i=od(e),{host:a,port:l}=S_(e),u=l===null?"":`:${l}`,d={url:`${i}//${a}${u}/`},g=Object.freeze({host:a,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})});if(!s._canInitEmulator){G(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),G(Hn(d,s.config.emulator)&&Hn(g,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=d,s.emulatorConfig=g,s.settings.appVerificationDisabledForTesting=!0,Xn(a)?(ka(`${i}//${a}${u}`),Da("Auth",!0)):P_()}function od(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function S_(n){const e=od(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:eu(s.substr(i.length+1))}}else{const[i,a]=s.split(":");return{host:i,port:eu(a)}}}function eu(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function P_(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $a{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Kt("not implemented")}_getIdTokenResponse(e){return Kt("not implemented")}_linkToIdToken(e,t){return Kt("not implemented")}_getReauthenticationResolver(e){return Kt("not implemented")}}async function C_(n,e){return Nn(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function N_(n,e){return Wi(n,"POST","/v1/accounts:signInWithPassword",es(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function k_(n,e){return Wi(n,"POST","/v1/accounts:signInWithEmailLink",es(n,e))}async function D_(n,e){return Wi(n,"POST","/v1/accounts:signInWithEmailLink",es(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr extends $a{constructor(e,t,s,r=null){super("password",s),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new cr(e,t,"password")}static _fromEmailAndCode(e,t,s=null){return new cr(e,t,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Zc(e,t,"signInWithPassword",N_);case"emailLink":return k_(e,{email:this._email,oobCode:this._password});default:xt(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const s={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Zc(e,s,"signUpPassword",C_);case"emailLink":return D_(e,{idToken:t,email:this._email,oobCode:this._password});default:xt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ms(n,e){return Wi(n,"POST","/v1/accounts:signInWithIdp",es(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O_="http://localhost";class Gn extends $a{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Gn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):xt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r}=t,i=ja(t,["providerId","signInMethod"]);if(!s||!r)return null;const a=new Gn(s,r);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return ms(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,ms(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,ms(e,t)}buildRequest(){const e={requestUri:O_,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=vr(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V_(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function M_(n){const e=Ks(Qs(n)).link,t=e?Ks(Qs(e)).deep_link_id:null,s=Ks(Qs(n)).deep_link_id;return(s?Ks(Qs(s)).link:null)||s||t||e||n}class qa{constructor(e){var t,s,r,i,a,l;const u=Ks(Qs(e)),d=(t=u.apiKey)!==null&&t!==void 0?t:null,g=(s=u.oobCode)!==null&&s!==void 0?s:null,_=V_((r=u.mode)!==null&&r!==void 0?r:null);G(d&&g&&_,"argument-error"),this.apiKey=d,this.operation=_,this.code=g,this.continueUrl=(i=u.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(a=u.lang)!==null&&a!==void 0?a:null,this.tenantId=(l=u.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const t=M_(e);try{return new qa(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ss{constructor(){this.providerId=Ss.PROVIDER_ID}static credential(e,t){return cr._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const s=qa.parseLink(t);return G(s,"argument-error"),cr._fromEmailAndCode(e,s.code,s.tenantId)}}Ss.PROVIDER_ID="password";Ss.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ss.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ad{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr extends ad{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn extends Tr{constructor(){super("facebook.com")}static credential(e){return Gn._fromParams({providerId:hn.PROVIDER_ID,signInMethod:hn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return hn.credentialFromTaggedObject(e)}static credentialFromError(e){return hn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return hn.credential(e.oauthAccessToken)}catch{return null}}}hn.FACEBOOK_SIGN_IN_METHOD="facebook.com";hn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn extends Tr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Gn._fromParams({providerId:dn.PROVIDER_ID,signInMethod:dn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return dn.credentialFromTaggedObject(e)}static credentialFromError(e){return dn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return dn.credential(t,s)}catch{return null}}}dn.GOOGLE_SIGN_IN_METHOD="google.com";dn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn extends Tr{constructor(){super("github.com")}static credential(e){return Gn._fromParams({providerId:fn.PROVIDER_ID,signInMethod:fn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return fn.credentialFromTaggedObject(e)}static credentialFromError(e){return fn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return fn.credential(e.oauthAccessToken)}catch{return null}}}fn.GITHUB_SIGN_IN_METHOD="github.com";fn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn extends Tr{constructor(){super("twitter.com")}static credential(e,t){return Gn._fromParams({providerId:pn.PROVIDER_ID,signInMethod:pn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return pn.credentialFromTaggedObject(e)}static credentialFromError(e){return pn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return pn.credential(t,s)}catch{return null}}}pn.TWITTER_SIGN_IN_METHOD="twitter.com";pn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,r=!1){const i=await wt._fromIdTokenResponse(e,s,r),a=tu(s);return new vs({user:i,providerId:a,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const r=tu(s);return new vs({user:e,providerId:r,_tokenResponse:s,operationType:t})}}function tu(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xi extends Bt{constructor(e,t,s,r){var i;super(t.code,t.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,xi.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,r){return new xi(e,t,s,r)}}function ld(n,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?xi._fromErrorAndOperation(n,i,e,s):i})}async function j_(n,e,t=!1){const s=await lr(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return vs._forOperation(n,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function L_(n,e,t=!1){const{auth:s}=n;if(yt(s.app))return Promise.reject(vn(s));const r="reauthenticate";try{const i=await lr(n,ld(s,r,e,n),t);G(i.idToken,s,"internal-error");const a=Ua(i.idToken);G(a,s,"internal-error");const{sub:l}=a;return G(n.uid===l,s,"user-mismatch"),vs._forOperation(n,r,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&xt(s,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cd(n,e,t=!1){if(yt(n.app))return Promise.reject(vn(n));const s="signIn",r=await ld(n,s,e),i=await vs._fromIdTokenResponse(n,s,r);return t||await n._updateCurrentUser(i.user),i}async function F_(n,e){return cd(Rs(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function U_(n){const e=Rs(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function B_(n,e,t){return yt(n.app)?Promise.reject(vn(n)):F_(ke(n),Ss.credential(e,t)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&U_(n),s})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $_(n,e){return ke(n).setPersistence(e)}function q_(n,e,t,s){return ke(n).onIdTokenChanged(e,t,s)}function z_(n,e,t){return ke(n).beforeAuthStateChanged(e,t)}function H_(n,e,t,s){return ke(n).onAuthStateChanged(e,t,s)}function W_(n){return ke(n).signOut()}const Ri="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ud{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Ri,"1"),this.storage.removeItem(Ri),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G_=1e3,K_=10;class hd extends ud{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=nd(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),r=this.localCache[t];s!==r&&e(t,r,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,l,u)=>{this.notifyListeners(a,u)});return}const s=e.key;t?this.detachListener():this.stopPolling();const r=()=>{const a=this.storage.getItem(s);!t&&this.localCache[s]===a||this.notifyListeners(s,a)},i=this.storage.getItem(s);h_()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,K_):r()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},G_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}hd.type="LOCAL";const dd=hd;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fd extends ud{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}fd.type="SESSION";const pd=fd;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q_(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ki{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(r=>r.isListeningto(e));if(t)return t;const s=new Ki(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:r,data:i}=t.data,a=this.handlersMap[r];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const l=Array.from(a).map(async d=>d(t.origin,i)),u=await Q_(l);t.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:u})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ki.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function za(n="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y_{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,a;return new Promise((l,u)=>{const d=za("",20);r.port1.start();const g=setTimeout(()=>{u(new Error("unsupported_event"))},s);a={messageChannel:r,onMessage(_){const E=_;if(E.data.eventId===d)switch(E.data.status){case"ack":clearTimeout(g),i=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(E.data.response);break;default:clearTimeout(g),clearTimeout(i),u(new Error("invalid_response"));break}}},this.handlers.add(a),r.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:d,data:t},[r.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dt(){return window}function J_(n){Dt().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function md(){return typeof Dt().WorkerGlobalScope<"u"&&typeof Dt().importScripts=="function"}async function X_(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Z_(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function ey(){return md()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gd="firebaseLocalStorageDb",ty=1,Si="firebaseLocalStorage",_d="fbase_key";class wr{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Qi(n,e){return n.transaction([Si],e?"readwrite":"readonly").objectStore(Si)}function ny(){const n=indexedDB.deleteDatabase(gd);return new wr(n).toPromise()}function ua(){const n=indexedDB.open(gd,ty);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const s=n.result;try{s.createObjectStore(Si,{keyPath:_d})}catch(r){t(r)}}),n.addEventListener("success",async()=>{const s=n.result;s.objectStoreNames.contains(Si)?e(s):(s.close(),await ny(),e(await ua()))})})}async function nu(n,e,t){const s=Qi(n,!0).put({[_d]:e,value:t});return new wr(s).toPromise()}async function sy(n,e){const t=Qi(n,!1).get(e),s=await new wr(t).toPromise();return s===void 0?null:s.value}function su(n,e){const t=Qi(n,!0).delete(e);return new wr(t).toPromise()}const ry=800,iy=3;class yd{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ua(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>iy)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return md()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ki._getInstance(ey()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await X_(),!this.activeServiceWorker)return;this.sender=new Y_(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((t=s[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Z_()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ua();return await nu(e,Ri,"1"),await su(e,Ri),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>nu(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>sy(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>su(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=Qi(r,!1).getAll();return new wr(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),ry)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}yd.type="LOCAL";const oy=yd;new Er(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ay(n,e){return e?Qt(e):(G(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ha extends $a{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ms(e,this._buildIdpRequest())}_linkToIdToken(e,t){return ms(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return ms(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function ly(n){return cd(n.auth,new Ha(n),n.bypassAuthState)}function cy(n){const{auth:e,user:t}=n;return G(t,e,"internal-error"),L_(t,new Ha(n),n.bypassAuthState)}async function uy(n){const{auth:e,user:t}=n;return G(t,e,"internal-error"),j_(t,new Ha(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vd{constructor(e,t,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:r,tenantId:i,error:a,type:l}=e;if(a){this.reject(a);return}const u={auth:this.auth,requestUri:t,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return ly;case"linkViaPopup":case"linkViaRedirect":return uy;case"reauthViaPopup":case"reauthViaRedirect":return cy;default:xt(this.auth,"internal-error")}}resolve(e){Zt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Zt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hy=new Er(2e3,1e4);class ds extends vd{constructor(e,t,s,r,i){super(e,t,r,i),this.provider=s,this.authWindow=null,this.pollId=null,ds.currentPopupAction&&ds.currentPopupAction.cancel(),ds.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return G(e,this.auth,"internal-error"),e}async onExecution(){Zt(this.filter.length===1,"Popup operations only handle one event");const e=za();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(kt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(kt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ds.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if(!((s=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(kt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,hy.get())};e()}}ds.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dy="pendingRedirect",hi=new Map;class fy extends vd{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=hi.get(this.auth._key());if(!e){try{const s=await py(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}hi.set(this.auth._key(),e)}return this.bypassAuthState||hi.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function py(n,e){const t=_y(e),s=gy(n);if(!await s._isAvailable())return!1;const r=await s._get(t)==="true";return await s._remove(t),r}function my(n,e){hi.set(n._key(),e)}function gy(n){return Qt(n._redirectPersistence)}function _y(n){return ui(dy,n.config.apiKey,n.name)}async function yy(n,e,t=!1){if(yt(n.app))return Promise.reject(vn(n));const s=Rs(n),r=ay(s,e),a=await new fy(s,r,t).execute();return a&&!t&&(delete a.user._redirectEventId,await s._persistUserIfCurrent(a.user),await s._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vy=10*60*1e3;class Ey{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Ty(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!Ed(e)){const r=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";t.onError(kt(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=vy&&this.cachedEventUids.clear(),this.cachedEventUids.has(ru(e))}saveEventToCache(e){this.cachedEventUids.add(ru(e)),this.lastProcessedEventTime=Date.now()}}function ru(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Ed({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Ty(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ed(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wy(n,e={}){return Nn(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iy=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,by=/^https?/;async function Ay(n){if(n.config.emulator)return;const{authorizedDomains:e}=await wy(n);for(const t of e)try{if(xy(t))return}catch{}xt(n,"unauthorized-domain")}function xy(n){const e=la(),{protocol:t,hostname:s}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&s===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===s}if(!by.test(t))return!1;if(Iy.test(n))return s===n;const r=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ry=new Er(3e4,6e4);function iu(){const n=Dt().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Sy(n){return new Promise((e,t)=>{var s,r,i;function a(){iu(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{iu(),t(kt(n,"network-request-failed"))},timeout:Ry.get()})}if(!((r=(s=Dt().gapi)===null||s===void 0?void 0:s.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((i=Dt().gapi)===null||i===void 0)&&i.load)a();else{const l=E_("iframefcb");return Dt()[l]=()=>{gapi.load?a():t(kt(n,"network-request-failed"))},rd(`${v_()}?onload=${l}`).catch(u=>t(u))}}).catch(e=>{throw di=null,e})}let di=null;function Py(n){return di=di||Sy(n),di}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cy=new Er(5e3,15e3),Ny="__/auth/iframe",ky="emulator/auth/iframe",Dy={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Oy=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Vy(n){const e=n.config;G(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Fa(e,ky):`https://${n.config.authDomain}/${Ny}`,s={apiKey:e.apiKey,appName:n.name,v:Zn},r=Oy.get(n.config.apiHost);r&&(s.eid=r);const i=n._getFrameworks();return i.length&&(s.fw=i.join(",")),`${t}?${vr(s).slice(1)}`}async function My(n){const e=await Py(n),t=Dt().gapi;return G(t,n,"internal-error"),e.open({where:document.body,url:Vy(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Dy,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const a=kt(n,"network-request-failed"),l=Dt().setTimeout(()=>{i(a)},Cy.get());function u(){Dt().clearTimeout(l),r(s)}s.ping(u).then(u,()=>{i(a)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jy={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Ly=500,Fy=600,Uy="_blank",By="http://localhost";class ou{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function $y(n,e,t,s=Ly,r=Fy){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),a=Math.max((window.screen.availWidth-s)/2,0).toString();let l="";const u=Object.assign(Object.assign({},jy),{width:s.toString(),height:r.toString(),top:i,left:a}),d=nt().toLowerCase();t&&(l=Jh(d)?Uy:t),Qh(d)&&(e=e||By,u.scrollbars="yes");const g=Object.entries(u).reduce((E,[A,S])=>`${E}${A}=${S},`,"");if(u_(d)&&l!=="_self")return qy(e||"",l),new ou(null);const _=window.open(e||"",l,g);G(_,n,"popup-blocked");try{_.focus()}catch{}return new ou(_)}function qy(n,e){const t=document.createElement("a");t.href=n,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zy="__/auth/handler",Hy="emulator/auth/handler",Wy=encodeURIComponent("fac");async function au(n,e,t,s,r,i){G(n.config.authDomain,n,"auth-domain-config-required"),G(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:s,v:Zn,eventId:r};if(e instanceof ad){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",km(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[g,_]of Object.entries({}))a[g]=_}if(e instanceof Tr){const g=e.getScopes().filter(_=>_!=="");g.length>0&&(a.scopes=g.join(","))}n.tenantId&&(a.tid=n.tenantId);const l=a;for(const g of Object.keys(l))l[g]===void 0&&delete l[g];const u=await n._getAppCheckToken(),d=u?`#${Wy}=${encodeURIComponent(u)}`:"";return`${Gy(n)}?${vr(l).slice(1)}${d}`}function Gy({config:n}){return n.emulator?Fa(n,Hy):`https://${n.authDomain}/${zy}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zo="webStorageSupport";class Ky{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=pd,this._completeRedirectFn=yy,this._overrideRedirectResult=my}async _openPopup(e,t,s,r){var i;Zt((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const a=await au(e,t,s,la(),r);return $y(e,a,za())}async _openRedirect(e,t,s,r){await this._originValidation(e);const i=await au(e,t,s,la(),r);return J_(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:r,promise:i}=this.eventManagers[t];return r?Promise.resolve(r):(Zt(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await My(e),s=new Ey(e);return t.register("authEvent",r=>(G(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(zo,{type:zo},r=>{var i;const a=(i=r==null?void 0:r[0])===null||i===void 0?void 0:i[zo];a!==void 0&&t(!!a),xt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Ay(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return nd()||Yh()||Ba()}}const Qy=Ky;var lu="@firebase/auth",cu="1.10.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yy{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){G(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jy(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Xy(n){Wn(new In("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:l}=s.options;G(a&&!a.includes(":"),"invalid-api-key",{appName:s.name});const u={apiKey:a,authDomain:l,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:sd(n)},d=new g_(s,r,i,u);return x_(d,t),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),Wn(new In("auth-internal",e=>{const t=Rs(e.getProvider("auth").getImmediate());return(s=>new Yy(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Nt(lu,cu,Jy(n)),Nt(lu,cu,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zy=5*60,ev=Oh("authIdTokenMaxAge")||Zy;let uu=null;const tv=n=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>ev)return;const r=t==null?void 0:t.token;uu!==r&&(uu=r,await fetch(n,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function nv(n=Ma()){const e=Hi(n,"auth");if(e.isInitialized())return e.getImmediate();const t=A_(n,{popupRedirectResolver:Qy,persistence:[oy,dd,pd]}),s=Oh("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(s,location.origin);if(location.origin===i.origin){const a=tv(i.toString());z_(t,a,()=>a(t.currentUser)),q_(t,l=>a(l))}}const r=Nh("auth");return r&&R_(t,`http://${r}`),t}function sv(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}__({loadJS(n){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",n),s.onload=e,s.onerror=r=>{const i=kt("internal-error");i.customData=r,t(i)},s.type="text/javascript",s.charset="UTF-8",sv().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Xy("Browser");var rv="firebase",iv="11.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Nt(rv,iv,"app");var hu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var En,Td;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(I,p){function m(){}m.prototype=p.prototype,I.D=p.prototype,I.prototype=new m,I.prototype.constructor=I,I.C=function(v,T,b){for(var w=Array(arguments.length-2),te=2;te<arguments.length;te++)w[te-2]=arguments[te];return p.prototype[T].apply(v,w)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,t),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function r(I,p,m){m||(m=0);var v=Array(16);if(typeof p=="string")for(var T=0;16>T;++T)v[T]=p.charCodeAt(m++)|p.charCodeAt(m++)<<8|p.charCodeAt(m++)<<16|p.charCodeAt(m++)<<24;else for(T=0;16>T;++T)v[T]=p[m++]|p[m++]<<8|p[m++]<<16|p[m++]<<24;p=I.g[0],m=I.g[1],T=I.g[2];var b=I.g[3],w=p+(b^m&(T^b))+v[0]+3614090360&4294967295;p=m+(w<<7&4294967295|w>>>25),w=b+(T^p&(m^T))+v[1]+3905402710&4294967295,b=p+(w<<12&4294967295|w>>>20),w=T+(m^b&(p^m))+v[2]+606105819&4294967295,T=b+(w<<17&4294967295|w>>>15),w=m+(p^T&(b^p))+v[3]+3250441966&4294967295,m=T+(w<<22&4294967295|w>>>10),w=p+(b^m&(T^b))+v[4]+4118548399&4294967295,p=m+(w<<7&4294967295|w>>>25),w=b+(T^p&(m^T))+v[5]+1200080426&4294967295,b=p+(w<<12&4294967295|w>>>20),w=T+(m^b&(p^m))+v[6]+2821735955&4294967295,T=b+(w<<17&4294967295|w>>>15),w=m+(p^T&(b^p))+v[7]+4249261313&4294967295,m=T+(w<<22&4294967295|w>>>10),w=p+(b^m&(T^b))+v[8]+1770035416&4294967295,p=m+(w<<7&4294967295|w>>>25),w=b+(T^p&(m^T))+v[9]+2336552879&4294967295,b=p+(w<<12&4294967295|w>>>20),w=T+(m^b&(p^m))+v[10]+4294925233&4294967295,T=b+(w<<17&4294967295|w>>>15),w=m+(p^T&(b^p))+v[11]+2304563134&4294967295,m=T+(w<<22&4294967295|w>>>10),w=p+(b^m&(T^b))+v[12]+1804603682&4294967295,p=m+(w<<7&4294967295|w>>>25),w=b+(T^p&(m^T))+v[13]+4254626195&4294967295,b=p+(w<<12&4294967295|w>>>20),w=T+(m^b&(p^m))+v[14]+2792965006&4294967295,T=b+(w<<17&4294967295|w>>>15),w=m+(p^T&(b^p))+v[15]+1236535329&4294967295,m=T+(w<<22&4294967295|w>>>10),w=p+(T^b&(m^T))+v[1]+4129170786&4294967295,p=m+(w<<5&4294967295|w>>>27),w=b+(m^T&(p^m))+v[6]+3225465664&4294967295,b=p+(w<<9&4294967295|w>>>23),w=T+(p^m&(b^p))+v[11]+643717713&4294967295,T=b+(w<<14&4294967295|w>>>18),w=m+(b^p&(T^b))+v[0]+3921069994&4294967295,m=T+(w<<20&4294967295|w>>>12),w=p+(T^b&(m^T))+v[5]+3593408605&4294967295,p=m+(w<<5&4294967295|w>>>27),w=b+(m^T&(p^m))+v[10]+38016083&4294967295,b=p+(w<<9&4294967295|w>>>23),w=T+(p^m&(b^p))+v[15]+3634488961&4294967295,T=b+(w<<14&4294967295|w>>>18),w=m+(b^p&(T^b))+v[4]+3889429448&4294967295,m=T+(w<<20&4294967295|w>>>12),w=p+(T^b&(m^T))+v[9]+568446438&4294967295,p=m+(w<<5&4294967295|w>>>27),w=b+(m^T&(p^m))+v[14]+3275163606&4294967295,b=p+(w<<9&4294967295|w>>>23),w=T+(p^m&(b^p))+v[3]+4107603335&4294967295,T=b+(w<<14&4294967295|w>>>18),w=m+(b^p&(T^b))+v[8]+1163531501&4294967295,m=T+(w<<20&4294967295|w>>>12),w=p+(T^b&(m^T))+v[13]+2850285829&4294967295,p=m+(w<<5&4294967295|w>>>27),w=b+(m^T&(p^m))+v[2]+4243563512&4294967295,b=p+(w<<9&4294967295|w>>>23),w=T+(p^m&(b^p))+v[7]+1735328473&4294967295,T=b+(w<<14&4294967295|w>>>18),w=m+(b^p&(T^b))+v[12]+2368359562&4294967295,m=T+(w<<20&4294967295|w>>>12),w=p+(m^T^b)+v[5]+4294588738&4294967295,p=m+(w<<4&4294967295|w>>>28),w=b+(p^m^T)+v[8]+2272392833&4294967295,b=p+(w<<11&4294967295|w>>>21),w=T+(b^p^m)+v[11]+1839030562&4294967295,T=b+(w<<16&4294967295|w>>>16),w=m+(T^b^p)+v[14]+4259657740&4294967295,m=T+(w<<23&4294967295|w>>>9),w=p+(m^T^b)+v[1]+2763975236&4294967295,p=m+(w<<4&4294967295|w>>>28),w=b+(p^m^T)+v[4]+1272893353&4294967295,b=p+(w<<11&4294967295|w>>>21),w=T+(b^p^m)+v[7]+4139469664&4294967295,T=b+(w<<16&4294967295|w>>>16),w=m+(T^b^p)+v[10]+3200236656&4294967295,m=T+(w<<23&4294967295|w>>>9),w=p+(m^T^b)+v[13]+681279174&4294967295,p=m+(w<<4&4294967295|w>>>28),w=b+(p^m^T)+v[0]+3936430074&4294967295,b=p+(w<<11&4294967295|w>>>21),w=T+(b^p^m)+v[3]+3572445317&4294967295,T=b+(w<<16&4294967295|w>>>16),w=m+(T^b^p)+v[6]+76029189&4294967295,m=T+(w<<23&4294967295|w>>>9),w=p+(m^T^b)+v[9]+3654602809&4294967295,p=m+(w<<4&4294967295|w>>>28),w=b+(p^m^T)+v[12]+3873151461&4294967295,b=p+(w<<11&4294967295|w>>>21),w=T+(b^p^m)+v[15]+530742520&4294967295,T=b+(w<<16&4294967295|w>>>16),w=m+(T^b^p)+v[2]+3299628645&4294967295,m=T+(w<<23&4294967295|w>>>9),w=p+(T^(m|~b))+v[0]+4096336452&4294967295,p=m+(w<<6&4294967295|w>>>26),w=b+(m^(p|~T))+v[7]+1126891415&4294967295,b=p+(w<<10&4294967295|w>>>22),w=T+(p^(b|~m))+v[14]+2878612391&4294967295,T=b+(w<<15&4294967295|w>>>17),w=m+(b^(T|~p))+v[5]+4237533241&4294967295,m=T+(w<<21&4294967295|w>>>11),w=p+(T^(m|~b))+v[12]+1700485571&4294967295,p=m+(w<<6&4294967295|w>>>26),w=b+(m^(p|~T))+v[3]+2399980690&4294967295,b=p+(w<<10&4294967295|w>>>22),w=T+(p^(b|~m))+v[10]+4293915773&4294967295,T=b+(w<<15&4294967295|w>>>17),w=m+(b^(T|~p))+v[1]+2240044497&4294967295,m=T+(w<<21&4294967295|w>>>11),w=p+(T^(m|~b))+v[8]+1873313359&4294967295,p=m+(w<<6&4294967295|w>>>26),w=b+(m^(p|~T))+v[15]+4264355552&4294967295,b=p+(w<<10&4294967295|w>>>22),w=T+(p^(b|~m))+v[6]+2734768916&4294967295,T=b+(w<<15&4294967295|w>>>17),w=m+(b^(T|~p))+v[13]+1309151649&4294967295,m=T+(w<<21&4294967295|w>>>11),w=p+(T^(m|~b))+v[4]+4149444226&4294967295,p=m+(w<<6&4294967295|w>>>26),w=b+(m^(p|~T))+v[11]+3174756917&4294967295,b=p+(w<<10&4294967295|w>>>22),w=T+(p^(b|~m))+v[2]+718787259&4294967295,T=b+(w<<15&4294967295|w>>>17),w=m+(b^(T|~p))+v[9]+3951481745&4294967295,I.g[0]=I.g[0]+p&4294967295,I.g[1]=I.g[1]+(T+(w<<21&4294967295|w>>>11))&4294967295,I.g[2]=I.g[2]+T&4294967295,I.g[3]=I.g[3]+b&4294967295}s.prototype.u=function(I,p){p===void 0&&(p=I.length);for(var m=p-this.blockSize,v=this.B,T=this.h,b=0;b<p;){if(T==0)for(;b<=m;)r(this,I,b),b+=this.blockSize;if(typeof I=="string"){for(;b<p;)if(v[T++]=I.charCodeAt(b++),T==this.blockSize){r(this,v),T=0;break}}else for(;b<p;)if(v[T++]=I[b++],T==this.blockSize){r(this,v),T=0;break}}this.h=T,this.o+=p},s.prototype.v=function(){var I=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);I[0]=128;for(var p=1;p<I.length-8;++p)I[p]=0;var m=8*this.o;for(p=I.length-8;p<I.length;++p)I[p]=m&255,m/=256;for(this.u(I),I=Array(16),p=m=0;4>p;++p)for(var v=0;32>v;v+=8)I[m++]=this.g[p]>>>v&255;return I};function i(I,p){var m=l;return Object.prototype.hasOwnProperty.call(m,I)?m[I]:m[I]=p(I)}function a(I,p){this.h=p;for(var m=[],v=!0,T=I.length-1;0<=T;T--){var b=I[T]|0;v&&b==p||(m[T]=b,v=!1)}this.g=m}var l={};function u(I){return-128<=I&&128>I?i(I,function(p){return new a([p|0],0>p?-1:0)}):new a([I|0],0>I?-1:0)}function d(I){if(isNaN(I)||!isFinite(I))return _;if(0>I)return R(d(-I));for(var p=[],m=1,v=0;I>=m;v++)p[v]=I/m|0,m*=4294967296;return new a(p,0)}function g(I,p){if(I.length==0)throw Error("number format error: empty string");if(p=p||10,2>p||36<p)throw Error("radix out of range: "+p);if(I.charAt(0)=="-")return R(g(I.substring(1),p));if(0<=I.indexOf("-"))throw Error('number format error: interior "-" character');for(var m=d(Math.pow(p,8)),v=_,T=0;T<I.length;T+=8){var b=Math.min(8,I.length-T),w=parseInt(I.substring(T,T+b),p);8>b?(b=d(Math.pow(p,b)),v=v.j(b).add(d(w))):(v=v.j(m),v=v.add(d(w)))}return v}var _=u(0),E=u(1),A=u(16777216);n=a.prototype,n.m=function(){if(x(this))return-R(this).m();for(var I=0,p=1,m=0;m<this.g.length;m++){var v=this.i(m);I+=(0<=v?v:4294967296+v)*p,p*=4294967296}return I},n.toString=function(I){if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(S(this))return"0";if(x(this))return"-"+R(this).toString(I);for(var p=d(Math.pow(I,6)),m=this,v="";;){var T=j(m,p).g;m=V(m,T.j(p));var b=((0<m.g.length?m.g[0]:m.h)>>>0).toString(I);if(m=T,S(m))return b+v;for(;6>b.length;)b="0"+b;v=b+v}},n.i=function(I){return 0>I?0:I<this.g.length?this.g[I]:this.h};function S(I){if(I.h!=0)return!1;for(var p=0;p<I.g.length;p++)if(I.g[p]!=0)return!1;return!0}function x(I){return I.h==-1}n.l=function(I){return I=V(this,I),x(I)?-1:S(I)?0:1};function R(I){for(var p=I.g.length,m=[],v=0;v<p;v++)m[v]=~I.g[v];return new a(m,~I.h).add(E)}n.abs=function(){return x(this)?R(this):this},n.add=function(I){for(var p=Math.max(this.g.length,I.g.length),m=[],v=0,T=0;T<=p;T++){var b=v+(this.i(T)&65535)+(I.i(T)&65535),w=(b>>>16)+(this.i(T)>>>16)+(I.i(T)>>>16);v=w>>>16,b&=65535,w&=65535,m[T]=w<<16|b}return new a(m,m[m.length-1]&-2147483648?-1:0)};function V(I,p){return I.add(R(p))}n.j=function(I){if(S(this)||S(I))return _;if(x(this))return x(I)?R(this).j(R(I)):R(R(this).j(I));if(x(I))return R(this.j(R(I)));if(0>this.l(A)&&0>I.l(A))return d(this.m()*I.m());for(var p=this.g.length+I.g.length,m=[],v=0;v<2*p;v++)m[v]=0;for(v=0;v<this.g.length;v++)for(var T=0;T<I.g.length;T++){var b=this.i(v)>>>16,w=this.i(v)&65535,te=I.i(T)>>>16,Ie=I.i(T)&65535;m[2*v+2*T]+=w*Ie,M(m,2*v+2*T),m[2*v+2*T+1]+=b*Ie,M(m,2*v+2*T+1),m[2*v+2*T+1]+=w*te,M(m,2*v+2*T+1),m[2*v+2*T+2]+=b*te,M(m,2*v+2*T+2)}for(v=0;v<p;v++)m[v]=m[2*v+1]<<16|m[2*v];for(v=p;v<2*p;v++)m[v]=0;return new a(m,0)};function M(I,p){for(;(I[p]&65535)!=I[p];)I[p+1]+=I[p]>>>16,I[p]&=65535,p++}function C(I,p){this.g=I,this.h=p}function j(I,p){if(S(p))throw Error("division by zero");if(S(I))return new C(_,_);if(x(I))return p=j(R(I),p),new C(R(p.g),R(p.h));if(x(p))return p=j(I,R(p)),new C(R(p.g),p.h);if(30<I.g.length){if(x(I)||x(p))throw Error("slowDivide_ only works with positive integers.");for(var m=E,v=p;0>=v.l(I);)m=L(m),v=L(v);var T=F(m,1),b=F(v,1);for(v=F(v,2),m=F(m,2);!S(v);){var w=b.add(v);0>=w.l(I)&&(T=T.add(m),b=w),v=F(v,1),m=F(m,1)}return p=V(I,T.j(p)),new C(T,p)}for(T=_;0<=I.l(p);){for(m=Math.max(1,Math.floor(I.m()/p.m())),v=Math.ceil(Math.log(m)/Math.LN2),v=48>=v?1:Math.pow(2,v-48),b=d(m),w=b.j(p);x(w)||0<w.l(I);)m-=v,b=d(m),w=b.j(p);S(b)&&(b=E),T=T.add(b),I=V(I,w)}return new C(T,I)}n.A=function(I){return j(this,I).h},n.and=function(I){for(var p=Math.max(this.g.length,I.g.length),m=[],v=0;v<p;v++)m[v]=this.i(v)&I.i(v);return new a(m,this.h&I.h)},n.or=function(I){for(var p=Math.max(this.g.length,I.g.length),m=[],v=0;v<p;v++)m[v]=this.i(v)|I.i(v);return new a(m,this.h|I.h)},n.xor=function(I){for(var p=Math.max(this.g.length,I.g.length),m=[],v=0;v<p;v++)m[v]=this.i(v)^I.i(v);return new a(m,this.h^I.h)};function L(I){for(var p=I.g.length+1,m=[],v=0;v<p;v++)m[v]=I.i(v)<<1|I.i(v-1)>>>31;return new a(m,I.h)}function F(I,p){var m=p>>5;p%=32;for(var v=I.g.length-m,T=[],b=0;b<v;b++)T[b]=0<p?I.i(b+m)>>>p|I.i(b+m+1)<<32-p:I.i(b+m);return new a(T,I.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,Td=s,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=g,En=a}).apply(typeof hu<"u"?hu:typeof self<"u"?self:typeof window<"u"?window:{});var Zr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var wd,Ys,Id,fi,ha,bd,Ad,xd;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,c,f){return o==Array.prototype||o==Object.prototype||(o[c]=f.value),o};function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof Zr=="object"&&Zr];for(var c=0;c<o.length;++c){var f=o[c];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var s=t(this);function r(o,c){if(c)e:{var f=s;o=o.split(".");for(var y=0;y<o.length-1;y++){var P=o[y];if(!(P in f))break e;f=f[P]}o=o[o.length-1],y=f[o],c=c(y),c!=y&&c!=null&&e(f,o,{configurable:!0,writable:!0,value:c})}}function i(o,c){o instanceof String&&(o+="");var f=0,y=!1,P={next:function(){if(!y&&f<o.length){var N=f++;return{value:c(N,o[N]),done:!1}}return y=!0,{done:!0,value:void 0}}};return P[Symbol.iterator]=function(){return P},P}r("Array.prototype.values",function(o){return o||function(){return i(this,function(c,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},l=this||self;function u(o){var c=typeof o;return c=c!="object"?c:o?Array.isArray(o)?"array":c:"null",c=="array"||c=="object"&&typeof o.length=="number"}function d(o){var c=typeof o;return c=="object"&&o!=null||c=="function"}function g(o,c,f){return o.call.apply(o.bind,arguments)}function _(o,c,f){if(!o)throw Error();if(2<arguments.length){var y=Array.prototype.slice.call(arguments,2);return function(){var P=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(P,y),o.apply(c,P)}}return function(){return o.apply(c,arguments)}}function E(o,c,f){return E=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?g:_,E.apply(null,arguments)}function A(o,c){var f=Array.prototype.slice.call(arguments,1);return function(){var y=f.slice();return y.push.apply(y,arguments),o.apply(this,y)}}function S(o,c){function f(){}f.prototype=c.prototype,o.aa=c.prototype,o.prototype=new f,o.prototype.constructor=o,o.Qb=function(y,P,N){for(var U=Array(arguments.length-2),_e=2;_e<arguments.length;_e++)U[_e-2]=arguments[_e];return c.prototype[P].apply(y,U)}}function x(o){const c=o.length;if(0<c){const f=Array(c);for(let y=0;y<c;y++)f[y]=o[y];return f}return[]}function R(o,c){for(let f=1;f<arguments.length;f++){const y=arguments[f];if(u(y)){const P=o.length||0,N=y.length||0;o.length=P+N;for(let U=0;U<N;U++)o[P+U]=y[U]}else o.push(y)}}class V{constructor(c,f){this.i=c,this.j=f,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function M(o){return/^[\s\xa0]*$/.test(o)}function C(){var o=l.navigator;return o&&(o=o.userAgent)?o:""}function j(o){return j[" "](o),o}j[" "]=function(){};var L=C().indexOf("Gecko")!=-1&&!(C().toLowerCase().indexOf("webkit")!=-1&&C().indexOf("Edge")==-1)&&!(C().indexOf("Trident")!=-1||C().indexOf("MSIE")!=-1)&&C().indexOf("Edge")==-1;function F(o,c,f){for(const y in o)c.call(f,o[y],y,o)}function I(o,c){for(const f in o)c.call(void 0,o[f],f,o)}function p(o){const c={};for(const f in o)c[f]=o[f];return c}const m="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function v(o,c){let f,y;for(let P=1;P<arguments.length;P++){y=arguments[P];for(f in y)o[f]=y[f];for(let N=0;N<m.length;N++)f=m[N],Object.prototype.hasOwnProperty.call(y,f)&&(o[f]=y[f])}}function T(o){var c=1;o=o.split(":");const f=[];for(;0<c&&o.length;)f.push(o.shift()),c--;return o.length&&f.push(o.join(":")),f}function b(o){l.setTimeout(()=>{throw o},0)}function w(){var o=H;let c=null;return o.g&&(c=o.g,o.g=o.g.next,o.g||(o.h=null),c.next=null),c}class te{constructor(){this.h=this.g=null}add(c,f){const y=Ie.get();y.set(c,f),this.h?this.h.next=y:this.g=y,this.h=y}}var Ie=new V(()=>new De,o=>o.reset());class De{constructor(){this.next=this.g=this.h=null}set(c,f){this.h=c,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let Q,de=!1,H=new te,Pe=()=>{const o=l.Promise.resolve(void 0);Q=()=>{o.then(Z)}};var Z=()=>{for(var o;o=w();){try{o.h.call(o.g)}catch(f){b(f)}var c=Ie;c.j(o),100>c.h&&(c.h++,o.next=c.g,c.g=o)}de=!1};function J(){this.s=this.s,this.C=this.C}J.prototype.s=!1,J.prototype.ma=function(){this.s||(this.s=!0,this.N())},J.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function B(o,c){this.type=o,this.g=this.target=c,this.defaultPrevented=!1}B.prototype.h=function(){this.defaultPrevented=!0};var Ce=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var o=!1,c=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const f=()=>{};l.addEventListener("test",f,c),l.removeEventListener("test",f,c)}catch{}return o}();function ve(o,c){if(B.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var f=this.type=o.type,y=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=c,c=o.relatedTarget){if(L){e:{try{j(c.nodeName);var P=!0;break e}catch{}P=!1}P||(c=null)}}else f=="mouseover"?c=o.fromElement:f=="mouseout"&&(c=o.toElement);this.relatedTarget=c,y?(this.clientX=y.clientX!==void 0?y.clientX:y.pageX,this.clientY=y.clientY!==void 0?y.clientY:y.pageY,this.screenX=y.screenX||0,this.screenY=y.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:Ue[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&ve.aa.h.call(this)}}S(ve,B);var Ue={2:"touch",3:"pen",4:"mouse"};ve.prototype.h=function(){ve.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var ze="closure_listenable_"+(1e6*Math.random()|0),re=0;function ce(o,c,f,y,P){this.listener=o,this.proxy=null,this.src=c,this.type=f,this.capture=!!y,this.ha=P,this.key=++re,this.da=this.fa=!1}function ge(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function W(o){this.src=o,this.g={},this.h=0}W.prototype.add=function(o,c,f,y,P){var N=o.toString();o=this.g[N],o||(o=this.g[N]=[],this.h++);var U=xe(o,c,y,P);return-1<U?(c=o[U],f||(c.fa=!1)):(c=new ce(c,this.src,N,!!y,P),c.fa=f,o.push(c)),c};function Ee(o,c){var f=c.type;if(f in o.g){var y=o.g[f],P=Array.prototype.indexOf.call(y,c,void 0),N;(N=0<=P)&&Array.prototype.splice.call(y,P,1),N&&(ge(c),o.g[f].length==0&&(delete o.g[f],o.h--))}}function xe(o,c,f,y){for(var P=0;P<o.length;++P){var N=o[P];if(!N.da&&N.listener==c&&N.capture==!!f&&N.ha==y)return P}return-1}var he="closure_lm_"+(1e6*Math.random()|0),fe={};function se(o,c,f,y,P){if(Array.isArray(c)){for(var N=0;N<c.length;N++)se(o,c[N],f,y,P);return null}return f=ht(f),o&&o[ze]?o.K(c,f,d(y)?!!y.capture:!1,P):ut(o,c,f,!1,y,P)}function ut(o,c,f,y,P,N){if(!c)throw Error("Invalid event type");var U=d(P)?!!P.capture:!!P,_e=zt(o);if(_e||(o[he]=_e=new W(o)),f=_e.add(c,f,y,U,N),f.proxy)return f;if(y=ee(),f.proxy=y,y.src=o,y.listener=f,o.addEventListener)Ce||(P=U),P===void 0&&(P=!1),o.addEventListener(c.toString(),y,P);else if(o.attachEvent)o.attachEvent(qt(c.toString()),y);else if(o.addListener&&o.removeListener)o.addListener(y);else throw Error("addEventListener and attachEvent are unavailable.");return f}function ee(){function o(f){return c.call(o.src,o.listener,f)}const c=mt;return o}function Te(o,c,f,y,P){if(Array.isArray(c))for(var N=0;N<c.length;N++)Te(o,c[N],f,y,P);else y=d(y)?!!y.capture:!!y,f=ht(f),o&&o[ze]?(o=o.i,c=String(c).toString(),c in o.g&&(N=o.g[c],f=xe(N,f,y,P),-1<f&&(ge(N[f]),Array.prototype.splice.call(N,f,1),N.length==0&&(delete o.g[c],o.h--)))):o&&(o=zt(o))&&(c=o.g[c.toString()],o=-1,c&&(o=xe(c,f,y,P)),(f=-1<o?c[o]:null)&&pt(f))}function pt(o){if(typeof o!="number"&&o&&!o.da){var c=o.src;if(c&&c[ze])Ee(c.i,o);else{var f=o.type,y=o.proxy;c.removeEventListener?c.removeEventListener(f,y,o.capture):c.detachEvent?c.detachEvent(qt(f),y):c.addListener&&c.removeListener&&c.removeListener(y),(f=zt(c))?(Ee(f,o),f.h==0&&(f.src=null,c[he]=null)):ge(o)}}}function qt(o){return o in fe?fe[o]:fe[o]="on"+o}function mt(o,c){if(o.da)o=!0;else{c=new ve(c,this);var f=o.listener,y=o.ha||o.src;o.fa&&pt(o),o=f.call(y,c)}return o}function zt(o){return o=o[he],o instanceof W?o:null}var Oe="__closure_events_fn_"+(1e9*Math.random()>>>0);function ht(o){return typeof o=="function"?o:(o[Oe]||(o[Oe]=function(c){return o.handleEvent(c)}),o[Oe])}function ae(){J.call(this),this.i=new W(this),this.M=this,this.F=null}S(ae,J),ae.prototype[ze]=!0,ae.prototype.removeEventListener=function(o,c,f,y){Te(this,o,c,f,y)};function pe(o,c){var f,y=o.F;if(y)for(f=[];y;y=y.F)f.push(y);if(o=o.M,y=c.type||c,typeof c=="string")c=new B(c,o);else if(c instanceof B)c.target=c.target||o;else{var P=c;c=new B(y,o),v(c,P)}if(P=!0,f)for(var N=f.length-1;0<=N;N--){var U=c.g=f[N];P=it(U,y,!0,c)&&P}if(U=c.g=o,P=it(U,y,!0,c)&&P,P=it(U,y,!1,c)&&P,f)for(N=0;N<f.length;N++)U=c.g=f[N],P=it(U,y,!1,c)&&P}ae.prototype.N=function(){if(ae.aa.N.call(this),this.i){var o=this.i,c;for(c in o.g){for(var f=o.g[c],y=0;y<f.length;y++)ge(f[y]);delete o.g[c],o.h--}}this.F=null},ae.prototype.K=function(o,c,f,y){return this.i.add(String(o),c,!1,f,y)},ae.prototype.L=function(o,c,f,y){return this.i.add(String(o),c,!0,f,y)};function it(o,c,f,y){if(c=o.i.g[String(c)],!c)return!0;c=c.concat();for(var P=!0,N=0;N<c.length;++N){var U=c[N];if(U&&!U.da&&U.capture==f){var _e=U.listener,He=U.ha||U.src;U.fa&&Ee(o.i,U),P=_e.call(He,y)!==!1&&P}}return P&&!y.defaultPrevented}function ss(o,c,f){if(typeof o=="function")f&&(o=E(o,f));else if(o&&typeof o.handleEvent=="function")o=E(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:l.setTimeout(o,c||0)}function Os(o){o.g=ss(()=>{o.g=null,o.i&&(o.i=!1,Os(o))},o.l);const c=o.h;o.h=null,o.m.apply(null,c)}class sn extends J{constructor(c,f){super(),this.m=c,this.l=f,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:Os(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ye(o){J.call(this),this.h=o,this.g={}}S(Ye,J);var rn=[];function Vs(o){F(o.g,function(c,f){this.g.hasOwnProperty(f)&&pt(c)},o),o.g={}}Ye.prototype.N=function(){Ye.aa.N.call(this),Vs(this)},Ye.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var To=l.JSON.stringify,Rp=l.JSON.parse,Sp=class{stringify(o){return l.JSON.stringify(o,void 0)}parse(o){return l.JSON.parse(o,void 0)}};function wo(){}wo.prototype.h=null;function Bl(o){return o.h||(o.h=o.i())}function $l(){}var Ms={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Io(){B.call(this,"d")}S(Io,B);function bo(){B.call(this,"c")}S(bo,B);var jn={},ql=null;function jr(){return ql=ql||new ae}jn.La="serverreachability";function zl(o){B.call(this,jn.La,o)}S(zl,B);function js(o){const c=jr();pe(c,new zl(c))}jn.STAT_EVENT="statevent";function Hl(o,c){B.call(this,jn.STAT_EVENT,o),this.stat=c}S(Hl,B);function st(o){const c=jr();pe(c,new Hl(c,o))}jn.Ma="timingevent";function Wl(o,c){B.call(this,jn.Ma,o),this.size=c}S(Wl,B);function Ls(o,c){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){o()},c)}function Fs(){this.g=!0}Fs.prototype.xa=function(){this.g=!1};function Pp(o,c,f,y,P,N){o.info(function(){if(o.g)if(N)for(var U="",_e=N.split("&"),He=0;He<_e.length;He++){var ue=_e[He].split("=");if(1<ue.length){var Je=ue[0];ue=ue[1];var Xe=Je.split("_");U=2<=Xe.length&&Xe[1]=="type"?U+(Je+"="+ue+"&"):U+(Je+"=redacted&")}}else U=null;else U=N;return"XMLHTTP REQ ("+y+") [attempt "+P+"]: "+c+`
`+f+`
`+U})}function Cp(o,c,f,y,P,N,U){o.info(function(){return"XMLHTTP RESP ("+y+") [ attempt "+P+"]: "+c+`
`+f+`
`+N+" "+U})}function rs(o,c,f,y){o.info(function(){return"XMLHTTP TEXT ("+c+"): "+kp(o,f)+(y?" "+y:"")})}function Np(o,c){o.info(function(){return"TIMEOUT: "+c})}Fs.prototype.info=function(){};function kp(o,c){if(!o.g)return c;if(!c)return null;try{var f=JSON.parse(c);if(f){for(o=0;o<f.length;o++)if(Array.isArray(f[o])){var y=f[o];if(!(2>y.length)){var P=y[1];if(Array.isArray(P)&&!(1>P.length)){var N=P[0];if(N!="noop"&&N!="stop"&&N!="close")for(var U=1;U<P.length;U++)P[U]=""}}}}return To(f)}catch{return c}}var Lr={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Gl={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Ao;function Fr(){}S(Fr,wo),Fr.prototype.g=function(){return new XMLHttpRequest},Fr.prototype.i=function(){return{}},Ao=new Fr;function on(o,c,f,y){this.j=o,this.i=c,this.l=f,this.R=y||1,this.U=new Ye(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Kl}function Kl(){this.i=null,this.g="",this.h=!1}var Ql={},xo={};function Ro(o,c,f){o.L=1,o.v=qr(Ht(c)),o.m=f,o.P=!0,Yl(o,null)}function Yl(o,c){o.F=Date.now(),Ur(o),o.A=Ht(o.v);var f=o.A,y=o.R;Array.isArray(y)||(y=[String(y)]),uc(f.i,"t",y),o.C=0,f=o.j.J,o.h=new Kl,o.g=Sc(o.j,f?c:null,!o.m),0<o.O&&(o.M=new sn(E(o.Y,o,o.g),o.O)),c=o.U,f=o.g,y=o.ca;var P="readystatechange";Array.isArray(P)||(P&&(rn[0]=P.toString()),P=rn);for(var N=0;N<P.length;N++){var U=se(f,P[N],y||c.handleEvent,!1,c.h||c);if(!U)break;c.g[U.key]=U}c=o.H?p(o.H):{},o.m?(o.u||(o.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,c)):(o.u="GET",o.g.ea(o.A,o.u,null,c)),js(),Pp(o.i,o.u,o.A,o.l,o.R,o.m)}on.prototype.ca=function(o){o=o.target;const c=this.M;c&&Wt(o)==3?c.j():this.Y(o)},on.prototype.Y=function(o){try{if(o==this.g)e:{const Xe=Wt(this.g);var c=this.g.Ba();const as=this.g.Z();if(!(3>Xe)&&(Xe!=3||this.g&&(this.h.h||this.g.oa()||_c(this.g)))){this.J||Xe!=4||c==7||(c==8||0>=as?js(3):js(2)),So(this);var f=this.g.Z();this.X=f;t:if(Jl(this)){var y=_c(this.g);o="";var P=y.length,N=Wt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ln(this),Us(this);var U="";break t}this.h.i=new l.TextDecoder}for(c=0;c<P;c++)this.h.h=!0,o+=this.h.i.decode(y[c],{stream:!(N&&c==P-1)});y.length=0,this.h.g+=o,this.C=0,U=this.h.g}else U=this.g.oa();if(this.o=f==200,Cp(this.i,this.u,this.A,this.l,this.R,Xe,f),this.o){if(this.T&&!this.K){t:{if(this.g){var _e,He=this.g;if((_e=He.g?He.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!M(_e)){var ue=_e;break t}}ue=null}if(f=ue)rs(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Po(this,f);else{this.o=!1,this.s=3,st(12),Ln(this),Us(this);break e}}if(this.P){f=!0;let Tt;for(;!this.J&&this.C<U.length;)if(Tt=Dp(this,U),Tt==xo){Xe==4&&(this.s=4,st(14),f=!1),rs(this.i,this.l,null,"[Incomplete Response]");break}else if(Tt==Ql){this.s=4,st(15),rs(this.i,this.l,U,"[Invalid Chunk]"),f=!1;break}else rs(this.i,this.l,Tt,null),Po(this,Tt);if(Jl(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Xe!=4||U.length!=0||this.h.h||(this.s=1,st(16),f=!1),this.o=this.o&&f,!f)rs(this.i,this.l,U,"[Invalid Chunked Response]"),Ln(this),Us(this);else if(0<U.length&&!this.W){this.W=!0;var Je=this.j;Je.g==this&&Je.ba&&!Je.M&&(Je.j.info("Great, no buffering proxy detected. Bytes received: "+U.length),Vo(Je),Je.M=!0,st(11))}}else rs(this.i,this.l,U,null),Po(this,U);Xe==4&&Ln(this),this.o&&!this.J&&(Xe==4?bc(this.j,this):(this.o=!1,Ur(this)))}else Yp(this.g),f==400&&0<U.indexOf("Unknown SID")?(this.s=3,st(12)):(this.s=0,st(13)),Ln(this),Us(this)}}}catch{}finally{}};function Jl(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function Dp(o,c){var f=o.C,y=c.indexOf(`
`,f);return y==-1?xo:(f=Number(c.substring(f,y)),isNaN(f)?Ql:(y+=1,y+f>c.length?xo:(c=c.slice(y,y+f),o.C=y+f,c)))}on.prototype.cancel=function(){this.J=!0,Ln(this)};function Ur(o){o.S=Date.now()+o.I,Xl(o,o.I)}function Xl(o,c){if(o.B!=null)throw Error("WatchDog timer not null");o.B=Ls(E(o.ba,o),c)}function So(o){o.B&&(l.clearTimeout(o.B),o.B=null)}on.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(Np(this.i,this.A),this.L!=2&&(js(),st(17)),Ln(this),this.s=2,Us(this)):Xl(this,this.S-o)};function Us(o){o.j.G==0||o.J||bc(o.j,o)}function Ln(o){So(o);var c=o.M;c&&typeof c.ma=="function"&&c.ma(),o.M=null,Vs(o.U),o.g&&(c=o.g,o.g=null,c.abort(),c.ma())}function Po(o,c){try{var f=o.j;if(f.G!=0&&(f.g==o||Co(f.h,o))){if(!o.K&&Co(f.h,o)&&f.G==3){try{var y=f.Da.g.parse(c)}catch{y=null}if(Array.isArray(y)&&y.length==3){var P=y;if(P[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<o.F)Qr(f),Gr(f);else break e;Oo(f),st(18)}}else f.za=P[1],0<f.za-f.T&&37500>P[2]&&f.F&&f.v==0&&!f.C&&(f.C=Ls(E(f.Za,f),6e3));if(1>=tc(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else Un(f,11)}else if((o.K||f.g==o)&&Qr(f),!M(c))for(P=f.Da.g.parse(c),c=0;c<P.length;c++){let ue=P[c];if(f.T=ue[0],ue=ue[1],f.G==2)if(ue[0]=="c"){f.K=ue[1],f.ia=ue[2];const Je=ue[3];Je!=null&&(f.la=Je,f.j.info("VER="+f.la));const Xe=ue[4];Xe!=null&&(f.Aa=Xe,f.j.info("SVER="+f.Aa));const as=ue[5];as!=null&&typeof as=="number"&&0<as&&(y=1.5*as,f.L=y,f.j.info("backChannelRequestTimeoutMs_="+y)),y=f;const Tt=o.g;if(Tt){const Jr=Tt.g?Tt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Jr){var N=y.h;N.g||Jr.indexOf("spdy")==-1&&Jr.indexOf("quic")==-1&&Jr.indexOf("h2")==-1||(N.j=N.l,N.g=new Set,N.h&&(No(N,N.h),N.h=null))}if(y.D){const Mo=Tt.g?Tt.g.getResponseHeader("X-HTTP-Session-Id"):null;Mo&&(y.ya=Mo,be(y.I,y.D,Mo))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-o.F,f.j.info("Handshake RTT: "+f.R+"ms")),y=f;var U=o;if(y.qa=Rc(y,y.J?y.ia:null,y.W),U.K){nc(y.h,U);var _e=U,He=y.L;He&&(_e.I=He),_e.B&&(So(_e),Ur(_e)),y.g=U}else wc(y);0<f.i.length&&Kr(f)}else ue[0]!="stop"&&ue[0]!="close"||Un(f,7);else f.G==3&&(ue[0]=="stop"||ue[0]=="close"?ue[0]=="stop"?Un(f,7):Do(f):ue[0]!="noop"&&f.l&&f.l.ta(ue),f.v=0)}}js(4)}catch{}}var Op=class{constructor(o,c){this.g=o,this.map=c}};function Zl(o){this.l=o||10,l.PerformanceNavigationTiming?(o=l.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function ec(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function tc(o){return o.h?1:o.g?o.g.size:0}function Co(o,c){return o.h?o.h==c:o.g?o.g.has(c):!1}function No(o,c){o.g?o.g.add(c):o.h=c}function nc(o,c){o.h&&o.h==c?o.h=null:o.g&&o.g.has(c)&&o.g.delete(c)}Zl.prototype.cancel=function(){if(this.i=sc(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function sc(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let c=o.i;for(const f of o.g.values())c=c.concat(f.D);return c}return x(o.i)}function Vp(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(u(o)){for(var c=[],f=o.length,y=0;y<f;y++)c.push(o[y]);return c}c=[],f=0;for(y in o)c[f++]=o[y];return c}function Mp(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(u(o)||typeof o=="string"){var c=[];o=o.length;for(var f=0;f<o;f++)c.push(f);return c}c=[],f=0;for(const y in o)c[f++]=y;return c}}}function rc(o,c){if(o.forEach&&typeof o.forEach=="function")o.forEach(c,void 0);else if(u(o)||typeof o=="string")Array.prototype.forEach.call(o,c,void 0);else for(var f=Mp(o),y=Vp(o),P=y.length,N=0;N<P;N++)c.call(void 0,y[N],f&&f[N],o)}var ic=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function jp(o,c){if(o){o=o.split("&");for(var f=0;f<o.length;f++){var y=o[f].indexOf("="),P=null;if(0<=y){var N=o[f].substring(0,y);P=o[f].substring(y+1)}else N=o[f];c(N,P?decodeURIComponent(P.replace(/\+/g," ")):"")}}}function Fn(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof Fn){this.h=o.h,Br(this,o.j),this.o=o.o,this.g=o.g,$r(this,o.s),this.l=o.l;var c=o.i,f=new qs;f.i=c.i,c.g&&(f.g=new Map(c.g),f.h=c.h),oc(this,f),this.m=o.m}else o&&(c=String(o).match(ic))?(this.h=!1,Br(this,c[1]||"",!0),this.o=Bs(c[2]||""),this.g=Bs(c[3]||"",!0),$r(this,c[4]),this.l=Bs(c[5]||"",!0),oc(this,c[6]||"",!0),this.m=Bs(c[7]||"")):(this.h=!1,this.i=new qs(null,this.h))}Fn.prototype.toString=function(){var o=[],c=this.j;c&&o.push($s(c,ac,!0),":");var f=this.g;return(f||c=="file")&&(o.push("//"),(c=this.o)&&o.push($s(c,ac,!0),"@"),o.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&o.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&o.push("/"),o.push($s(f,f.charAt(0)=="/"?Up:Fp,!0))),(f=this.i.toString())&&o.push("?",f),(f=this.m)&&o.push("#",$s(f,$p)),o.join("")};function Ht(o){return new Fn(o)}function Br(o,c,f){o.j=f?Bs(c,!0):c,o.j&&(o.j=o.j.replace(/:$/,""))}function $r(o,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);o.s=c}else o.s=null}function oc(o,c,f){c instanceof qs?(o.i=c,qp(o.i,o.h)):(f||(c=$s(c,Bp)),o.i=new qs(c,o.h))}function be(o,c,f){o.i.set(c,f)}function qr(o){return be(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function Bs(o,c){return o?c?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function $s(o,c,f){return typeof o=="string"?(o=encodeURI(o).replace(c,Lp),f&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function Lp(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var ac=/[#\/\?@]/g,Fp=/[#\?:]/g,Up=/[#\?]/g,Bp=/[#\?@]/g,$p=/#/g;function qs(o,c){this.h=this.g=null,this.i=o||null,this.j=!!c}function an(o){o.g||(o.g=new Map,o.h=0,o.i&&jp(o.i,function(c,f){o.add(decodeURIComponent(c.replace(/\+/g," ")),f)}))}n=qs.prototype,n.add=function(o,c){an(this),this.i=null,o=is(this,o);var f=this.g.get(o);return f||this.g.set(o,f=[]),f.push(c),this.h+=1,this};function lc(o,c){an(o),c=is(o,c),o.g.has(c)&&(o.i=null,o.h-=o.g.get(c).length,o.g.delete(c))}function cc(o,c){return an(o),c=is(o,c),o.g.has(c)}n.forEach=function(o,c){an(this),this.g.forEach(function(f,y){f.forEach(function(P){o.call(c,P,y,this)},this)},this)},n.na=function(){an(this);const o=Array.from(this.g.values()),c=Array.from(this.g.keys()),f=[];for(let y=0;y<c.length;y++){const P=o[y];for(let N=0;N<P.length;N++)f.push(c[y])}return f},n.V=function(o){an(this);let c=[];if(typeof o=="string")cc(this,o)&&(c=c.concat(this.g.get(is(this,o))));else{o=Array.from(this.g.values());for(let f=0;f<o.length;f++)c=c.concat(o[f])}return c},n.set=function(o,c){return an(this),this.i=null,o=is(this,o),cc(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[c]),this.h+=1,this},n.get=function(o,c){return o?(o=this.V(o),0<o.length?String(o[0]):c):c};function uc(o,c,f){lc(o,c),0<f.length&&(o.i=null,o.g.set(is(o,c),x(f)),o.h+=f.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],c=Array.from(this.g.keys());for(var f=0;f<c.length;f++){var y=c[f];const N=encodeURIComponent(String(y)),U=this.V(y);for(y=0;y<U.length;y++){var P=N;U[y]!==""&&(P+="="+encodeURIComponent(String(U[y]))),o.push(P)}}return this.i=o.join("&")};function is(o,c){return c=String(c),o.j&&(c=c.toLowerCase()),c}function qp(o,c){c&&!o.j&&(an(o),o.i=null,o.g.forEach(function(f,y){var P=y.toLowerCase();y!=P&&(lc(this,y),uc(this,P,f))},o)),o.j=c}function zp(o,c){const f=new Fs;if(l.Image){const y=new Image;y.onload=A(ln,f,"TestLoadImage: loaded",!0,c,y),y.onerror=A(ln,f,"TestLoadImage: error",!1,c,y),y.onabort=A(ln,f,"TestLoadImage: abort",!1,c,y),y.ontimeout=A(ln,f,"TestLoadImage: timeout",!1,c,y),l.setTimeout(function(){y.ontimeout&&y.ontimeout()},1e4),y.src=o}else c(!1)}function Hp(o,c){const f=new Fs,y=new AbortController,P=setTimeout(()=>{y.abort(),ln(f,"TestPingServer: timeout",!1,c)},1e4);fetch(o,{signal:y.signal}).then(N=>{clearTimeout(P),N.ok?ln(f,"TestPingServer: ok",!0,c):ln(f,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(P),ln(f,"TestPingServer: error",!1,c)})}function ln(o,c,f,y,P){try{P&&(P.onload=null,P.onerror=null,P.onabort=null,P.ontimeout=null),y(f)}catch{}}function Wp(){this.g=new Sp}function Gp(o,c,f){const y=f||"";try{rc(o,function(P,N){let U=P;d(P)&&(U=To(P)),c.push(y+N+"="+encodeURIComponent(U))})}catch(P){throw c.push(y+"type="+encodeURIComponent("_badmap")),P}}function zr(o){this.l=o.Ub||null,this.j=o.eb||!1}S(zr,wo),zr.prototype.g=function(){return new Hr(this.l,this.j)},zr.prototype.i=function(o){return function(){return o}}({});function Hr(o,c){ae.call(this),this.D=o,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}S(Hr,ae),n=Hr.prototype,n.open=function(o,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=c,this.readyState=1,Hs(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(c.body=o),(this.D||l).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,zs(this)),this.readyState=0},n.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,Hs(this)),this.g&&(this.readyState=3,Hs(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;hc(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function hc(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}n.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var c=o.value?o.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!o.done}))&&(this.response=this.responseText+=c)}o.done?zs(this):Hs(this),this.readyState==3&&hc(this)}},n.Ra=function(o){this.g&&(this.response=this.responseText=o,zs(this))},n.Qa=function(o){this.g&&(this.response=o,zs(this))},n.ga=function(){this.g&&zs(this)};function zs(o){o.readyState=4,o.l=null,o.j=null,o.v=null,Hs(o)}n.setRequestHeader=function(o,c){this.u.append(o,c)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],c=this.h.entries();for(var f=c.next();!f.done;)f=f.value,o.push(f[0]+": "+f[1]),f=c.next();return o.join(`\r
`)};function Hs(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(Hr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function dc(o){let c="";return F(o,function(f,y){c+=y,c+=":",c+=f,c+=`\r
`}),c}function ko(o,c,f){e:{for(y in f){var y=!1;break e}y=!0}y||(f=dc(f),typeof o=="string"?f!=null&&encodeURIComponent(String(f)):be(o,c,f))}function Se(o){ae.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}S(Se,ae);var Kp=/^https?$/i,Qp=["POST","PUT"];n=Se.prototype,n.Ha=function(o){this.J=o},n.ea=function(o,c,f,y){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);c=c?c.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Ao.g(),this.v=this.o?Bl(this.o):Bl(Ao),this.g.onreadystatechange=E(this.Ea,this);try{this.B=!0,this.g.open(c,String(o),!0),this.B=!1}catch(N){fc(this,N);return}if(o=f||"",f=new Map(this.headers),y)if(Object.getPrototypeOf(y)===Object.prototype)for(var P in y)f.set(P,y[P]);else if(typeof y.keys=="function"&&typeof y.get=="function")for(const N of y.keys())f.set(N,y.get(N));else throw Error("Unknown input type for opt_headers: "+String(y));y=Array.from(f.keys()).find(N=>N.toLowerCase()=="content-type"),P=l.FormData&&o instanceof l.FormData,!(0<=Array.prototype.indexOf.call(Qp,c,void 0))||y||P||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[N,U]of f)this.g.setRequestHeader(N,U);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{gc(this),this.u=!0,this.g.send(o),this.u=!1}catch(N){fc(this,N)}};function fc(o,c){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=c,o.m=5,pc(o),Wr(o)}function pc(o){o.A||(o.A=!0,pe(o,"complete"),pe(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,pe(this,"complete"),pe(this,"abort"),Wr(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Wr(this,!0)),Se.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?mc(this):this.bb())},n.bb=function(){mc(this)};function mc(o){if(o.h&&typeof a<"u"&&(!o.v[1]||Wt(o)!=4||o.Z()!=2)){if(o.u&&Wt(o)==4)ss(o.Ea,0,o);else if(pe(o,"readystatechange"),Wt(o)==4){o.h=!1;try{const U=o.Z();e:switch(U){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var f;if(!(f=c)){var y;if(y=U===0){var P=String(o.D).match(ic)[1]||null;!P&&l.self&&l.self.location&&(P=l.self.location.protocol.slice(0,-1)),y=!Kp.test(P?P.toLowerCase():"")}f=y}if(f)pe(o,"complete"),pe(o,"success");else{o.m=6;try{var N=2<Wt(o)?o.g.statusText:""}catch{N=""}o.l=N+" ["+o.Z()+"]",pc(o)}}finally{Wr(o)}}}}function Wr(o,c){if(o.g){gc(o);const f=o.g,y=o.v[0]?()=>{}:null;o.g=null,o.v=null,c||pe(o,"ready");try{f.onreadystatechange=y}catch{}}}function gc(o){o.I&&(l.clearTimeout(o.I),o.I=null)}n.isActive=function(){return!!this.g};function Wt(o){return o.g?o.g.readyState:0}n.Z=function(){try{return 2<Wt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(o){if(this.g){var c=this.g.responseText;return o&&c.indexOf(o)==0&&(c=c.substring(o.length)),Rp(c)}};function _c(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function Yp(o){const c={};o=(o.g&&2<=Wt(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let y=0;y<o.length;y++){if(M(o[y]))continue;var f=T(o[y]);const P=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const N=c[P]||[];c[P]=N,N.push(f)}I(c,function(y){return y.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ws(o,c,f){return f&&f.internalChannelParams&&f.internalChannelParams[o]||c}function yc(o){this.Aa=0,this.i=[],this.j=new Fs,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ws("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ws("baseRetryDelayMs",5e3,o),this.cb=Ws("retryDelaySeedMs",1e4,o),this.Wa=Ws("forwardChannelMaxRetries",2,o),this.wa=Ws("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new Zl(o&&o.concurrentRequestLimit),this.Da=new Wp,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=yc.prototype,n.la=8,n.G=1,n.connect=function(o,c,f,y){st(0),this.W=o,this.H=c||{},f&&y!==void 0&&(this.H.OSID=f,this.H.OAID=y),this.F=this.X,this.I=Rc(this,null,this.W),Kr(this)};function Do(o){if(vc(o),o.G==3){var c=o.U++,f=Ht(o.I);if(be(f,"SID",o.K),be(f,"RID",c),be(f,"TYPE","terminate"),Gs(o,f),c=new on(o,o.j,c),c.L=2,c.v=qr(Ht(f)),f=!1,l.navigator&&l.navigator.sendBeacon)try{f=l.navigator.sendBeacon(c.v.toString(),"")}catch{}!f&&l.Image&&(new Image().src=c.v,f=!0),f||(c.g=Sc(c.j,null),c.g.ea(c.v)),c.F=Date.now(),Ur(c)}xc(o)}function Gr(o){o.g&&(Vo(o),o.g.cancel(),o.g=null)}function vc(o){Gr(o),o.u&&(l.clearTimeout(o.u),o.u=null),Qr(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&l.clearTimeout(o.s),o.s=null)}function Kr(o){if(!ec(o.h)&&!o.s){o.s=!0;var c=o.Ga;Q||Pe(),de||(Q(),de=!0),H.add(c,o),o.B=0}}function Jp(o,c){return tc(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=c.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=Ls(E(o.Ga,o,c),Ac(o,o.B)),o.B++,!0)}n.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const P=new on(this,this.j,o);let N=this.o;if(this.S&&(N?(N=p(N),v(N,this.S)):N=this.S),this.m!==null||this.O||(P.H=N,N=null),this.P)e:{for(var c=0,f=0;f<this.i.length;f++){t:{var y=this.i[f];if("__data__"in y.map&&(y=y.map.__data__,typeof y=="string")){y=y.length;break t}y=void 0}if(y===void 0)break;if(c+=y,4096<c){c=f;break e}if(c===4096||f===this.i.length-1){c=f+1;break e}}c=1e3}else c=1e3;c=Tc(this,P,c),f=Ht(this.I),be(f,"RID",o),be(f,"CVER",22),this.D&&be(f,"X-HTTP-Session-Id",this.D),Gs(this,f),N&&(this.O?c="headers="+encodeURIComponent(String(dc(N)))+"&"+c:this.m&&ko(f,this.m,N)),No(this.h,P),this.Ua&&be(f,"TYPE","init"),this.P?(be(f,"$req",c),be(f,"SID","null"),P.T=!0,Ro(P,f,null)):Ro(P,f,c),this.G=2}}else this.G==3&&(o?Ec(this,o):this.i.length==0||ec(this.h)||Ec(this))};function Ec(o,c){var f;c?f=c.l:f=o.U++;const y=Ht(o.I);be(y,"SID",o.K),be(y,"RID",f),be(y,"AID",o.T),Gs(o,y),o.m&&o.o&&ko(y,o.m,o.o),f=new on(o,o.j,f,o.B+1),o.m===null&&(f.H=o.o),c&&(o.i=c.D.concat(o.i)),c=Tc(o,f,1e3),f.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),No(o.h,f),Ro(f,y,c)}function Gs(o,c){o.H&&F(o.H,function(f,y){be(c,y,f)}),o.l&&rc({},function(f,y){be(c,y,f)})}function Tc(o,c,f){f=Math.min(o.i.length,f);var y=o.l?E(o.l.Na,o.l,o):null;e:{var P=o.i;let N=-1;for(;;){const U=["count="+f];N==-1?0<f?(N=P[0].g,U.push("ofs="+N)):N=0:U.push("ofs="+N);let _e=!0;for(let He=0;He<f;He++){let ue=P[He].g;const Je=P[He].map;if(ue-=N,0>ue)N=Math.max(0,P[He].g-100),_e=!1;else try{Gp(Je,U,"req"+ue+"_")}catch{y&&y(Je)}}if(_e){y=U.join("&");break e}}}return o=o.i.splice(0,f),c.D=o,y}function wc(o){if(!o.g&&!o.u){o.Y=1;var c=o.Fa;Q||Pe(),de||(Q(),de=!0),H.add(c,o),o.v=0}}function Oo(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=Ls(E(o.Fa,o),Ac(o,o.v)),o.v++,!0)}n.Fa=function(){if(this.u=null,Ic(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=Ls(E(this.ab,this),o)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,st(10),Gr(this),Ic(this))};function Vo(o){o.A!=null&&(l.clearTimeout(o.A),o.A=null)}function Ic(o){o.g=new on(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var c=Ht(o.qa);be(c,"RID","rpc"),be(c,"SID",o.K),be(c,"AID",o.T),be(c,"CI",o.F?"0":"1"),!o.F&&o.ja&&be(c,"TO",o.ja),be(c,"TYPE","xmlhttp"),Gs(o,c),o.m&&o.o&&ko(c,o.m,o.o),o.L&&(o.g.I=o.L);var f=o.g;o=o.ia,f.L=1,f.v=qr(Ht(c)),f.m=null,f.P=!0,Yl(f,o)}n.Za=function(){this.C!=null&&(this.C=null,Gr(this),Oo(this),st(19))};function Qr(o){o.C!=null&&(l.clearTimeout(o.C),o.C=null)}function bc(o,c){var f=null;if(o.g==c){Qr(o),Vo(o),o.g=null;var y=2}else if(Co(o.h,c))f=c.D,nc(o.h,c),y=1;else return;if(o.G!=0){if(c.o)if(y==1){f=c.m?c.m.length:0,c=Date.now()-c.F;var P=o.B;y=jr(),pe(y,new Wl(y,f)),Kr(o)}else wc(o);else if(P=c.s,P==3||P==0&&0<c.X||!(y==1&&Jp(o,c)||y==2&&Oo(o)))switch(f&&0<f.length&&(c=o.h,c.i=c.i.concat(f)),P){case 1:Un(o,5);break;case 4:Un(o,10);break;case 3:Un(o,6);break;default:Un(o,2)}}}function Ac(o,c){let f=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(f*=2),f*c}function Un(o,c){if(o.j.info("Error code "+c),c==2){var f=E(o.fb,o),y=o.Xa;const P=!y;y=new Fn(y||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Br(y,"https"),qr(y),P?zp(y.toString(),f):Hp(y.toString(),f)}else st(2);o.G=0,o.l&&o.l.sa(c),xc(o),vc(o)}n.fb=function(o){o?(this.j.info("Successfully pinged google.com"),st(2)):(this.j.info("Failed to ping google.com"),st(1))};function xc(o){if(o.G=0,o.ka=[],o.l){const c=sc(o.h);(c.length!=0||o.i.length!=0)&&(R(o.ka,c),R(o.ka,o.i),o.h.i.length=0,x(o.i),o.i.length=0),o.l.ra()}}function Rc(o,c,f){var y=f instanceof Fn?Ht(f):new Fn(f);if(y.g!="")c&&(y.g=c+"."+y.g),$r(y,y.s);else{var P=l.location;y=P.protocol,c=c?c+"."+P.hostname:P.hostname,P=+P.port;var N=new Fn(null);y&&Br(N,y),c&&(N.g=c),P&&$r(N,P),f&&(N.l=f),y=N}return f=o.D,c=o.ya,f&&c&&be(y,f,c),be(y,"VER",o.la),Gs(o,y),y}function Sc(o,c,f){if(c&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=o.Ca&&!o.pa?new Se(new zr({eb:f})):new Se(o.pa),c.Ha(o.J),c}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Pc(){}n=Pc.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Yr(){}Yr.prototype.g=function(o,c){return new dt(o,c)};function dt(o,c){ae.call(this),this.g=new yc(c),this.l=o,this.h=c&&c.messageUrlParams||null,o=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(o?o["X-WebChannel-Content-Type"]=c.messageContentType:o={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(o?o["X-WebChannel-Client-Profile"]=c.va:o={"X-WebChannel-Client-Profile":c.va}),this.g.S=o,(o=c&&c.Sb)&&!M(o)&&(this.g.m=o),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!M(c)&&(this.g.D=c,o=this.h,o!==null&&c in o&&(o=this.h,c in o&&delete o[c])),this.j=new os(this)}S(dt,ae),dt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},dt.prototype.close=function(){Do(this.g)},dt.prototype.o=function(o){var c=this.g;if(typeof o=="string"){var f={};f.__data__=o,o=f}else this.u&&(f={},f.__data__=To(o),o=f);c.i.push(new Op(c.Ya++,o)),c.G==3&&Kr(c)},dt.prototype.N=function(){this.g.l=null,delete this.j,Do(this.g),delete this.g,dt.aa.N.call(this)};function Cc(o){Io.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var c=o.__sm__;if(c){e:{for(const f in c){o=f;break e}o=void 0}(this.i=o)&&(o=this.i,c=c!==null&&o in c?c[o]:void 0),this.data=c}else this.data=o}S(Cc,Io);function Nc(){bo.call(this),this.status=1}S(Nc,bo);function os(o){this.g=o}S(os,Pc),os.prototype.ua=function(){pe(this.g,"a")},os.prototype.ta=function(o){pe(this.g,new Cc(o))},os.prototype.sa=function(o){pe(this.g,new Nc)},os.prototype.ra=function(){pe(this.g,"b")},Yr.prototype.createWebChannel=Yr.prototype.g,dt.prototype.send=dt.prototype.o,dt.prototype.open=dt.prototype.m,dt.prototype.close=dt.prototype.close,xd=function(){return new Yr},Ad=function(){return jr()},bd=jn,ha={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Lr.NO_ERROR=0,Lr.TIMEOUT=8,Lr.HTTP_ERROR=6,fi=Lr,Gl.COMPLETE="complete",Id=Gl,$l.EventType=Ms,Ms.OPEN="a",Ms.CLOSE="b",Ms.ERROR="c",Ms.MESSAGE="d",ae.prototype.listen=ae.prototype.K,Ys=$l,Se.prototype.listenOnce=Se.prototype.L,Se.prototype.getLastError=Se.prototype.Ka,Se.prototype.getLastErrorCode=Se.prototype.Ba,Se.prototype.getStatus=Se.prototype.Z,Se.prototype.getResponseJson=Se.prototype.Oa,Se.prototype.getResponseText=Se.prototype.oa,Se.prototype.send=Se.prototype.ea,Se.prototype.setWithCredentials=Se.prototype.Ha,wd=Se}).apply(typeof Zr<"u"?Zr:typeof self<"u"?self:typeof window<"u"?window:{});const du="@firebase/firestore",fu="4.8.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}et.UNAUTHENTICATED=new et(null),et.GOOGLE_CREDENTIALS=new et("google-credentials-uid"),et.FIRST_PARTY=new et("first-party-uid"),et.MOCK_USER=new et("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ps="11.10.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kn=new Oa("@firebase/firestore");function ls(){return Kn.logLevel}function q(n,...e){if(Kn.logLevel<=ie.DEBUG){const t=e.map(Wa);Kn.debug(`Firestore (${Ps}): ${n}`,...t)}}function en(n,...e){if(Kn.logLevel<=ie.ERROR){const t=e.map(Wa);Kn.error(`Firestore (${Ps}): ${n}`,...t)}}function bn(n,...e){if(Kn.logLevel<=ie.WARN){const t=e.map(Wa);Kn.warn(`Firestore (${Ps}): ${n}`,...t)}}function Wa(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K(n,e,t){let s="Unexpected state";typeof e=="string"?s=e:t=e,Rd(n,s,t)}function Rd(n,e,t){let s=`FIRESTORE (${Ps}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{s+=" CONTEXT: "+JSON.stringify(t)}catch{s+=" CONTEXT: "+t}throw en(s),new Error(s)}function me(n,e,t,s){let r="Unexpected state";typeof t=="string"?r=t:s=t,n||Rd(e,r,s)}function X(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class $ extends Bt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sd{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class ov{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(et.UNAUTHENTICATED))}shutdown(){}}class av{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class lv{constructor(e){this.t=e,this.currentUser=et.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){me(this.o===void 0,42304);let s=this.i;const r=u=>this.i!==s?(s=this.i,t(u)):Promise.resolve();let i=new qn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new qn,e.enqueueRetryable(()=>r(this.currentUser))};const a=()=>{const u=i;e.enqueueRetryable(async()=>{await u.promise,await r(this.currentUser)})},l=u=>{q("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(q("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new qn)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(s=>this.i!==e?(q("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(me(typeof s.accessToken=="string",31837,{l:s}),new Sd(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return me(e===null||typeof e=="string",2055,{h:e}),new et(e)}}class cv{constructor(e,t,s){this.P=e,this.T=t,this.I=s,this.type="FirstParty",this.user=et.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class uv{constructor(e,t,s){this.P=e,this.T=t,this.I=s}getToken(){return Promise.resolve(new cv(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(et.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class pu{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class hv{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,yt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){me(this.o===void 0,3512);const s=i=>{i.error!=null&&q("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.m;return this.m=i.token,q("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>s(i))};const r=i=>{q("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?r(i):q("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new pu(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(me(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new pu(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dv(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<n;s++)t[s]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pd(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ga{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const r=dv(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<t&&(s+=e.charAt(r[i]%62))}return s}}function ne(n,e){return n<e?-1:n>e?1:0}function da(n,e){let t=0;for(;t<n.length&&t<e.length;){const s=n.codePointAt(t),r=e.codePointAt(t);if(s!==r){if(s<128&&r<128)return ne(s,r);{const i=Pd(),a=fv(i.encode(mu(n,t)),i.encode(mu(e,t)));return a!==0?a:ne(s,r)}}t+=s>65535?2:1}return ne(n.length,e.length)}function mu(n,e){return n.codePointAt(e)>65535?n.substring(e,e+2):n.substring(e,e+1)}function fv(n,e){for(let t=0;t<n.length&&t<e.length;++t)if(n[t]!==e[t])return ne(n[t],e[t]);return ne(n.length,e.length)}function Es(n,e,t){return n.length===e.length&&n.every((s,r)=>t(s,e[r]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gu="__name__";class Pt{constructor(e,t,s){t===void 0?t=0:t>e.length&&K(637,{offset:t,range:e.length}),s===void 0?s=e.length-t:s>e.length-t&&K(1746,{length:s,range:e.length-t}),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return Pt.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Pt?e.forEach(s=>{t.push(s)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let r=0;r<s;r++){const i=Pt.compareSegments(e.get(r),t.get(r));if(i!==0)return i}return ne(e.length,t.length)}static compareSegments(e,t){const s=Pt.isNumericId(e),r=Pt.isNumericId(t);return s&&!r?-1:!s&&r?1:s&&r?Pt.extractNumericId(e).compare(Pt.extractNumericId(t)):da(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return En.fromString(e.substring(4,e.length-2))}}class we extends Pt{construct(e,t,s){return new we(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new $(k.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter(r=>r.length>0))}return new we(t)}static emptyPath(){return new we([])}}const pv=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ke extends Pt{construct(e,t,s){return new Ke(e,t,s)}static isValidIdentifier(e){return pv.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ke.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===gu}static keyField(){return new Ke([gu])}static fromServerFormat(e){const t=[];let s="",r=0;const i=()=>{if(s.length===0)throw new $(k.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let a=!1;for(;r<e.length;){const l=e[r];if(l==="\\"){if(r+1===e.length)throw new $(k.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[r+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new $(k.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=u,r+=2}else l==="`"?(a=!a,r++):l!=="."||a?(s+=l,r++):(i(),r++)}if(i(),a)throw new $(k.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ke(t)}static emptyPath(){return new Ke([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z{constructor(e){this.path=e}static fromPath(e){return new z(we.fromString(e))}static fromName(e){return new z(we.fromString(e).popFirst(5))}static empty(){return new z(we.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&we.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return we.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new z(new we(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cd(n,e,t){if(!t)throw new $(k.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function mv(n,e,t,s){if(e===!0&&s===!0)throw new $(k.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function _u(n){if(!z.isDocumentKey(n))throw new $(k.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function yu(n){if(z.isDocumentKey(n))throw new $(k.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Nd(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function Yi(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(s){return s.constructor?s.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":K(12329,{type:typeof n})}function Tn(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new $(k.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Yi(n);throw new $(k.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function je(n,e){const t={typeString:n};return e&&(t.value=e),t}function Ir(n,e){if(!Nd(n))throw new $(k.INVALID_ARGUMENT,"JSON must be an object");let t;for(const s in e)if(e[s]){const r=e[s].typeString,i="value"in e[s]?{value:e[s].value}:void 0;if(!(s in n)){t=`JSON missing required field: '${s}'`;break}const a=n[s];if(r&&typeof a!==r){t=`JSON field '${s}' must be a ${r}.`;break}if(i!==void 0&&a!==i.value){t=`Expected '${s}' field to equal '${i.value}'`;break}}if(t)throw new $(k.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vu=-62135596800,Eu=1e6;class Ae{static now(){return Ae.fromMillis(Date.now())}static fromDate(e){return Ae.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor((e-1e3*t)*Eu);return new Ae(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new $(k.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new $(k.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<vu)throw new $(k.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new $(k.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Eu}_compareTo(e){return this.seconds===e.seconds?ne(this.nanoseconds,e.nanoseconds):ne(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Ae._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Ir(e,Ae._jsonSchema))return new Ae(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-vu;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Ae._jsonSchemaVersion="firestore/timestamp/1.0",Ae._jsonSchema={type:je("string",Ae._jsonSchemaVersion),seconds:je("number"),nanoseconds:je("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{static fromTimestamp(e){return new Y(e)}static min(){return new Y(new Ae(0,0))}static max(){return new Y(new Ae(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ur=-1;function gv(n,e){const t=n.toTimestamp().seconds,s=n.toTimestamp().nanoseconds+1,r=Y.fromTimestamp(s===1e9?new Ae(t+1,0):new Ae(t,s));return new An(r,z.empty(),e)}function _v(n){return new An(n.readTime,n.key,ur)}class An{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new An(Y.min(),z.empty(),ur)}static max(){return new An(Y.max(),z.empty(),ur)}}function yv(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=z.comparator(n.documentKey,e.documentKey),t!==0?t:ne(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vv="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Ev{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cs(n){if(n.code!==k.FAILED_PRECONDITION||n.message!==vv)throw n;q("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&K(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new D((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(t,i).next(s,r)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof D?t:D.resolve(t)}catch(t){return D.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):D.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):D.reject(t)}static resolve(e){return new D((t,s)=>{t(e)})}static reject(e){return new D((t,s)=>{s(e)})}static waitFor(e){return new D((t,s)=>{let r=0,i=0,a=!1;e.forEach(l=>{++r,l.next(()=>{++i,a&&i===r&&t()},u=>s(u))}),a=!0,i===r&&t()})}static or(e){let t=D.resolve(!1);for(const s of e)t=t.next(r=>r?D.resolve(r):s());return t}static forEach(e,t){const s=[];return e.forEach((r,i)=>{s.push(t.call(this,r,i))}),this.waitFor(s)}static mapArray(e,t){return new D((s,r)=>{const i=e.length,a=new Array(i);let l=0;for(let u=0;u<i;u++){const d=u;t(e[d]).next(g=>{a[d]=g,++l,l===i&&s(a)},g=>r(g))}})}static doWhile(e,t){return new D((s,r)=>{const i=()=>{e()===!0?t().next(()=>{i()},r):s()};i()})}}function Tv(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Ns(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ji{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this._e(s),this.ae=s=>t.writeSequenceNumber(s))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ae&&this.ae(e),e}}Ji.ue=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ka=-1;function Xi(n){return n==null}function Pi(n){return n===0&&1/n==-1/0}function wv(n){return typeof n=="number"&&Number.isInteger(n)&&!Pi(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kd="";function Iv(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Tu(e)),e=bv(n.get(t),e);return Tu(e)}function bv(n,e){let t=e;const s=n.length;for(let r=0;r<s;r++){const i=n.charAt(r);switch(i){case"\0":t+="";break;case kd:t+="";break;default:t+=i}}return t}function Tu(n){return n+kd+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wu(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function kn(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Dd(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re{constructor(e,t){this.comparator=e,this.root=t||We.EMPTY}insert(e,t){return new Re(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,We.BLACK,null,null))}remove(e){return new Re(this.comparator,this.root.remove(e,this.comparator).copy(null,null,We.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return t+s.left.size;r<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,s)=>(e(t,s),!1))}toString(){const e=[];return this.inorderTraversal((t,s)=>(e.push(`${t}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ei(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ei(this.root,e,this.comparator,!1)}getReverseIterator(){return new ei(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ei(this.root,e,this.comparator,!0)}}class ei{constructor(e,t,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?s(e.key,t):1,t&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class We{constructor(e,t,s,r,i){this.key=e,this.value=t,this.color=s??We.RED,this.left=r??We.EMPTY,this.right=i??We.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,r,i){return new We(e??this.key,t??this.value,s??this.color,r??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,s),null):i===0?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return We.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),t(e,r.key)===0){if(r.right.isEmpty())return We.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,We.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,We.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw K(43730,{key:this.key,value:this.value});if(this.right.isRed())throw K(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw K(27949);return e+(this.isRed()?0:1)}}We.EMPTY=null,We.RED=!0,We.BLACK=!1;We.EMPTY=new class{constructor(){this.size=0}get key(){throw K(57766)}get value(){throw K(16141)}get color(){throw K(16727)}get left(){throw K(29726)}get right(){throw K(36894)}copy(e,t,s,r,i){return this}insert(e,t,s){return new We(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e{constructor(e){this.comparator=e,this.data=new Re(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,s)=>(e(t),!1))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Iu(this.data.getIterator())}getIteratorFrom(e){return new Iu(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(s=>{t=t.add(s)}),t}isEqual(e){if(!(e instanceof $e)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const r=t.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new $e(this.comparator);return t.data=e,t}}class Iu{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(e){this.fields=e,e.sort(Ke.comparator)}static empty(){return new ft([])}unionWith(e){let t=new $e(Ke.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new ft(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Es(this.fields,e.fields,(t,s)=>t.isEqual(s))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Od extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(r){try{return atob(r)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Od("Invalid base64 string: "+i):i}}(e);return new Qe(t)}static fromUint8Array(e){const t=function(r){let i="";for(let a=0;a<r.length;++a)i+=String.fromCharCode(r[a]);return i}(e);return new Qe(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const s=new Uint8Array(t.length);for(let r=0;r<t.length;r++)s[r]=t.charCodeAt(r);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ne(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Qe.EMPTY_BYTE_STRING=new Qe("");const Av=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function xn(n){if(me(!!n,39018),typeof n=="string"){let e=0;const t=Av.exec(n);if(me(!!t,46558,{timestamp:n}),t[1]){let r=t[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(n);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Ne(n.seconds),nanos:Ne(n.nanos)}}function Ne(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Rn(n){return typeof n=="string"?Qe.fromBase64String(n):Qe.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vd="server_timestamp",Md="__type__",jd="__previous_value__",Ld="__local_write_time__";function Qa(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[Md])===null||t===void 0?void 0:t.stringValue)===Vd}function Zi(n){const e=n.mapValue.fields[jd];return Qa(e)?Zi(e):e}function hr(n){const e=xn(n.mapValue.fields[Ld].timestampValue);return new Ae(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xv{constructor(e,t,s,r,i,a,l,u,d,g){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=d,this.isUsingEmulator=g}}const Ci="(default)";class dr{constructor(e,t){this.projectId=e,this.database=t||Ci}static empty(){return new dr("","")}get isDefaultDatabase(){return this.database===Ci}isEqual(e){return e instanceof dr&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fd="__type__",Rv="__max__",ti={mapValue:{}},Ud="__vector__",Ni="value";function Sn(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Qa(n)?4:Pv(n)?9007199254740991:Sv(n)?10:11:K(28295,{value:n})}function Ft(n,e){if(n===e)return!0;const t=Sn(n);if(t!==Sn(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return hr(n).isEqual(hr(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const a=xn(r.timestampValue),l=xn(i.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(r,i){return Rn(r.bytesValue).isEqual(Rn(i.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(r,i){return Ne(r.geoPointValue.latitude)===Ne(i.geoPointValue.latitude)&&Ne(r.geoPointValue.longitude)===Ne(i.geoPointValue.longitude)}(n,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return Ne(r.integerValue)===Ne(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const a=Ne(r.doubleValue),l=Ne(i.doubleValue);return a===l?Pi(a)===Pi(l):isNaN(a)&&isNaN(l)}return!1}(n,e);case 9:return Es(n.arrayValue.values||[],e.arrayValue.values||[],Ft);case 10:case 11:return function(r,i){const a=r.mapValue.fields||{},l=i.mapValue.fields||{};if(wu(a)!==wu(l))return!1;for(const u in a)if(a.hasOwnProperty(u)&&(l[u]===void 0||!Ft(a[u],l[u])))return!1;return!0}(n,e);default:return K(52216,{left:n})}}function fr(n,e){return(n.values||[]).find(t=>Ft(t,e))!==void 0}function Ts(n,e){if(n===e)return 0;const t=Sn(n),s=Sn(e);if(t!==s)return ne(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return ne(n.booleanValue,e.booleanValue);case 2:return function(i,a){const l=Ne(i.integerValue||i.doubleValue),u=Ne(a.integerValue||a.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(n,e);case 3:return bu(n.timestampValue,e.timestampValue);case 4:return bu(hr(n),hr(e));case 5:return da(n.stringValue,e.stringValue);case 6:return function(i,a){const l=Rn(i),u=Rn(a);return l.compareTo(u)}(n.bytesValue,e.bytesValue);case 7:return function(i,a){const l=i.split("/"),u=a.split("/");for(let d=0;d<l.length&&d<u.length;d++){const g=ne(l[d],u[d]);if(g!==0)return g}return ne(l.length,u.length)}(n.referenceValue,e.referenceValue);case 8:return function(i,a){const l=ne(Ne(i.latitude),Ne(a.latitude));return l!==0?l:ne(Ne(i.longitude),Ne(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return Au(n.arrayValue,e.arrayValue);case 10:return function(i,a){var l,u,d,g;const _=i.fields||{},E=a.fields||{},A=(l=_[Ni])===null||l===void 0?void 0:l.arrayValue,S=(u=E[Ni])===null||u===void 0?void 0:u.arrayValue,x=ne(((d=A==null?void 0:A.values)===null||d===void 0?void 0:d.length)||0,((g=S==null?void 0:S.values)===null||g===void 0?void 0:g.length)||0);return x!==0?x:Au(A,S)}(n.mapValue,e.mapValue);case 11:return function(i,a){if(i===ti.mapValue&&a===ti.mapValue)return 0;if(i===ti.mapValue)return 1;if(a===ti.mapValue)return-1;const l=i.fields||{},u=Object.keys(l),d=a.fields||{},g=Object.keys(d);u.sort(),g.sort();for(let _=0;_<u.length&&_<g.length;++_){const E=da(u[_],g[_]);if(E!==0)return E;const A=Ts(l[u[_]],d[g[_]]);if(A!==0)return A}return ne(u.length,g.length)}(n.mapValue,e.mapValue);default:throw K(23264,{le:t})}}function bu(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return ne(n,e);const t=xn(n),s=xn(e),r=ne(t.seconds,s.seconds);return r!==0?r:ne(t.nanos,s.nanos)}function Au(n,e){const t=n.values||[],s=e.values||[];for(let r=0;r<t.length&&r<s.length;++r){const i=Ts(t[r],s[r]);if(i)return i}return ne(t.length,s.length)}function ws(n){return fa(n)}function fa(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const s=xn(t);return`time(${s.seconds},${s.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Rn(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return z.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let s="[",r=!0;for(const i of t.values||[])r?r=!1:s+=",",s+=fa(i);return s+"]"}(n.arrayValue):"mapValue"in n?function(t){const s=Object.keys(t.fields||{}).sort();let r="{",i=!0;for(const a of s)i?i=!1:r+=",",r+=`${a}:${fa(t.fields[a])}`;return r+"}"}(n.mapValue):K(61005,{value:n})}function pi(n){switch(Sn(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Zi(n);return e?16+pi(e):16;case 5:return 2*n.stringValue.length;case 6:return Rn(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(s){return(s.values||[]).reduce((r,i)=>r+pi(i),0)}(n.arrayValue);case 10:case 11:return function(s){let r=0;return kn(s.fields,(i,a)=>{r+=i.length+pi(a)}),r}(n.mapValue);default:throw K(13486,{value:n})}}function xu(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function pa(n){return!!n&&"integerValue"in n}function Ya(n){return!!n&&"arrayValue"in n}function Ru(n){return!!n&&"nullValue"in n}function Su(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function mi(n){return!!n&&"mapValue"in n}function Sv(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[Fd])===null||t===void 0?void 0:t.stringValue)===Ud}function nr(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return kn(n.mapValue.fields,(t,s)=>e.mapValue.fields[t]=nr(s)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=nr(n.arrayValue.values[t]);return e}return Object.assign({},n)}function Pv(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===Rv}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(e){this.value=e}static empty(){return new lt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!mi(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=nr(t)}setAll(e){let t=Ke.emptyPath(),s={},r=[];e.forEach((a,l)=>{if(!t.isImmediateParentOf(l)){const u=this.getFieldsMap(t);this.applyChanges(u,s,r),s={},r=[],t=l.popLast()}a?s[l.lastSegment()]=nr(a):r.push(l.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,s,r)}delete(e){const t=this.field(e.popLast());mi(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Ft(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=t.mapValue.fields[e.get(s)];mi(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,s){kn(t,(r,i)=>e[r]=i);for(const r of s)delete e[r]}clone(){return new lt(nr(this.value))}}function Bd(n){const e=[];return kn(n.fields,(t,s)=>{const r=new Ke([t]);if(mi(s)){const i=Bd(s.mapValue).fields;if(i.length===0)e.push(r);else for(const a of i)e.push(r.child(a))}else e.push(r)}),new ft(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(e,t,s,r,i,a,l){this.key=e,this.documentType=t,this.version=s,this.readTime=r,this.createTime=i,this.data=a,this.documentState=l}static newInvalidDocument(e){return new tt(e,0,Y.min(),Y.min(),Y.min(),lt.empty(),0)}static newFoundDocument(e,t,s,r){return new tt(e,1,t,Y.min(),s,r,0)}static newNoDocument(e,t){return new tt(e,2,t,Y.min(),Y.min(),lt.empty(),0)}static newUnknownDocument(e,t){return new tt(e,3,t,Y.min(),Y.min(),lt.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Y.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=lt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=lt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Y.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof tt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new tt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki{constructor(e,t){this.position=e,this.inclusive=t}}function Pu(n,e,t){let s=0;for(let r=0;r<n.position.length;r++){const i=e[r],a=n.position[r];if(i.field.isKeyField()?s=z.comparator(z.fromName(a.referenceValue),t.key):s=Ts(a,t.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function Cu(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Ft(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr{constructor(e,t="asc"){this.field=e,this.dir=t}}function Cv(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $d{}class Me extends $d{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new kv(e,t,s):t==="array-contains"?new Vv(e,s):t==="in"?new Mv(e,s):t==="not-in"?new jv(e,s):t==="array-contains-any"?new Lv(e,s):new Me(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new Dv(e,s):new Ov(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Ts(t,this.value)):t!==null&&Sn(this.value)===Sn(t)&&this.matchesComparison(Ts(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return K(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Rt extends $d{constructor(e,t){super(),this.filters=e,this.op=t,this.he=null}static create(e,t){return new Rt(e,t)}matches(e){return qd(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function qd(n){return n.op==="and"}function zd(n){return Nv(n)&&qd(n)}function Nv(n){for(const e of n.filters)if(e instanceof Rt)return!1;return!0}function ma(n){if(n instanceof Me)return n.field.canonicalString()+n.op.toString()+ws(n.value);if(zd(n))return n.filters.map(e=>ma(e)).join(",");{const e=n.filters.map(t=>ma(t)).join(",");return`${n.op}(${e})`}}function Hd(n,e){return n instanceof Me?function(s,r){return r instanceof Me&&s.op===r.op&&s.field.isEqual(r.field)&&Ft(s.value,r.value)}(n,e):n instanceof Rt?function(s,r){return r instanceof Rt&&s.op===r.op&&s.filters.length===r.filters.length?s.filters.reduce((i,a,l)=>i&&Hd(a,r.filters[l]),!0):!1}(n,e):void K(19439)}function Wd(n){return n instanceof Me?function(t){return`${t.field.canonicalString()} ${t.op} ${ws(t.value)}`}(n):n instanceof Rt?function(t){return t.op.toString()+" {"+t.getFilters().map(Wd).join(" ,")+"}"}(n):"Filter"}class kv extends Me{constructor(e,t,s){super(e,t,s),this.key=z.fromName(s.referenceValue)}matches(e){const t=z.comparator(e.key,this.key);return this.matchesComparison(t)}}class Dv extends Me{constructor(e,t){super(e,"in",t),this.keys=Gd("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class Ov extends Me{constructor(e,t){super(e,"not-in",t),this.keys=Gd("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Gd(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(s=>z.fromName(s.referenceValue))}class Vv extends Me{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Ya(t)&&fr(t.arrayValue,this.value)}}class Mv extends Me{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&fr(this.value.arrayValue,t)}}class jv extends Me{constructor(e,t){super(e,"not-in",t)}matches(e){if(fr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!fr(this.value.arrayValue,t)}}class Lv extends Me{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Ya(t)||!t.arrayValue.values)&&t.arrayValue.values.some(s=>fr(this.value.arrayValue,s))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fv{constructor(e,t=null,s=[],r=[],i=null,a=null,l=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=a,this.endAt=l,this.Pe=null}}function Nu(n,e=null,t=[],s=[],r=null,i=null,a=null){return new Fv(n,e,t,s,r,i,a)}function Ja(n){const e=X(n);if(e.Pe===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(s=>ma(s)).join(","),t+="|ob:",t+=e.orderBy.map(s=>function(i){return i.field.canonicalString()+i.dir}(s)).join(","),Xi(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(s=>ws(s)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(s=>ws(s)).join(",")),e.Pe=t}return e.Pe}function Xa(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!Cv(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Hd(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Cu(n.startAt,e.startAt)&&Cu(n.endAt,e.endAt)}function ga(n){return z.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ks{constructor(e,t=null,s=[],r=[],i=null,a="F",l=null,u=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=a,this.startAt=l,this.endAt=u,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function Uv(n,e,t,s,r,i,a,l){return new ks(n,e,t,s,r,i,a,l)}function Za(n){return new ks(n)}function ku(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Kd(n){return n.collectionGroup!==null}function sr(n){const e=X(n);if(e.Te===null){e.Te=[];const t=new Set;for(const i of e.explicitOrderBy)e.Te.push(i),t.add(i.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new $e(Ke.comparator);return a.filters.forEach(u=>{u.getFlattenedFilters().forEach(d=>{d.isInequality()&&(l=l.add(d.field))})}),l})(e).forEach(i=>{t.has(i.canonicalString())||i.isKeyField()||e.Te.push(new pr(i,s))}),t.has(Ke.keyField().canonicalString())||e.Te.push(new pr(Ke.keyField(),s))}return e.Te}function Ot(n){const e=X(n);return e.Ie||(e.Ie=Bv(e,sr(n))),e.Ie}function Bv(n,e){if(n.limitType==="F")return Nu(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(r=>{const i=r.dir==="desc"?"asc":"desc";return new pr(r.field,i)});const t=n.endAt?new ki(n.endAt.position,n.endAt.inclusive):null,s=n.startAt?new ki(n.startAt.position,n.startAt.inclusive):null;return Nu(n.path,n.collectionGroup,e,n.filters,n.limit,t,s)}}function _a(n,e){const t=n.filters.concat([e]);return new ks(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function Di(n,e,t){return new ks(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function eo(n,e){return Xa(Ot(n),Ot(e))&&n.limitType===e.limitType}function Qd(n){return`${Ja(Ot(n))}|lt:${n.limitType}`}function cs(n){return`Query(target=${function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map(r=>Wd(r)).join(", ")}]`),Xi(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map(r=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(r)).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map(r=>ws(r)).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map(r=>ws(r)).join(",")),`Target(${s})`}(Ot(n))}; limitType=${n.limitType})`}function to(n,e){return e.isFoundDocument()&&function(s,r){const i=r.key.path;return s.collectionGroup!==null?r.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(i):z.isDocumentKey(s.path)?s.path.isEqual(i):s.path.isImmediateParentOf(i)}(n,e)&&function(s,r){for(const i of sr(s))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(n,e)&&function(s,r){for(const i of s.filters)if(!i.matches(r))return!1;return!0}(n,e)&&function(s,r){return!(s.startAt&&!function(a,l,u){const d=Pu(a,l,u);return a.inclusive?d<=0:d<0}(s.startAt,sr(s),r)||s.endAt&&!function(a,l,u){const d=Pu(a,l,u);return a.inclusive?d>=0:d>0}(s.endAt,sr(s),r))}(n,e)}function $v(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Yd(n){return(e,t)=>{let s=!1;for(const r of sr(n)){const i=qv(r,e,t);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function qv(n,e,t){const s=n.field.isKeyField()?z.comparator(e.key,t.key):function(i,a,l){const u=a.data.field(i),d=l.data.field(i);return u!==null&&d!==null?Ts(u,d):K(42886)}(n.field,e,t);switch(n.dir){case"asc":return s;case"desc":return-1*s;default:return K(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[t]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){kn(this.inner,(t,s)=>{for(const[r,i]of s)e(r,i)})}isEmpty(){return Dd(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zv=new Re(z.comparator);function tn(){return zv}const Jd=new Re(z.comparator);function Js(...n){let e=Jd;for(const t of n)e=e.insert(t.key,t);return e}function Xd(n){let e=Jd;return n.forEach((t,s)=>e=e.insert(t,s.overlayedDocument)),e}function $n(){return rr()}function Zd(){return rr()}function rr(){return new ts(n=>n.toString(),(n,e)=>n.isEqual(e))}const Hv=new Re(z.comparator),Wv=new $e(z.comparator);function oe(...n){let e=Wv;for(const t of n)e=e.add(t);return e}const Gv=new $e(ne);function Kv(){return Gv}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function el(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Pi(e)?"-0":e}}function ef(n){return{integerValue:""+n}}function Qv(n,e){return wv(e)?ef(e):el(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class no{constructor(){this._=void 0}}function Yv(n,e,t){return n instanceof mr?function(r,i){const a={fields:{[Md]:{stringValue:Vd},[Ld]:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&Qa(i)&&(i=Zi(i)),i&&(a.fields[jd]=i),{mapValue:a}}(t,e):n instanceof gr?nf(n,e):n instanceof _r?sf(n,e):function(r,i){const a=tf(r,i),l=Du(a)+Du(r.Ee);return pa(a)&&pa(r.Ee)?ef(l):el(r.serializer,l)}(n,e)}function Jv(n,e,t){return n instanceof gr?nf(n,e):n instanceof _r?sf(n,e):t}function tf(n,e){return n instanceof Oi?function(s){return pa(s)||function(i){return!!i&&"doubleValue"in i}(s)}(e)?e:{integerValue:0}:null}class mr extends no{}class gr extends no{constructor(e){super(),this.elements=e}}function nf(n,e){const t=rf(e);for(const s of n.elements)t.some(r=>Ft(r,s))||t.push(s);return{arrayValue:{values:t}}}class _r extends no{constructor(e){super(),this.elements=e}}function sf(n,e){let t=rf(e);for(const s of n.elements)t=t.filter(r=>!Ft(r,s));return{arrayValue:{values:t}}}class Oi extends no{constructor(e,t){super(),this.serializer=e,this.Ee=t}}function Du(n){return Ne(n.integerValue||n.doubleValue)}function rf(n){return Ya(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xv{constructor(e,t){this.field=e,this.transform=t}}function Zv(n,e){return n.field.isEqual(e.field)&&function(s,r){return s instanceof gr&&r instanceof gr||s instanceof _r&&r instanceof _r?Es(s.elements,r.elements,Ft):s instanceof Oi&&r instanceof Oi?Ft(s.Ee,r.Ee):s instanceof mr&&r instanceof mr}(n.transform,e.transform)}class e0{constructor(e,t){this.version=e,this.transformResults=t}}class bt{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new bt}static exists(e){return new bt(void 0,e)}static updateTime(e){return new bt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function gi(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class so{}function of(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new tl(n.key,bt.none()):new br(n.key,n.data,bt.none());{const t=n.data,s=lt.empty();let r=new $e(Ke.comparator);for(let i of e.fields)if(!r.has(i)){let a=t.field(i);a===null&&i.length>1&&(i=i.popLast(),a=t.field(i)),a===null?s.delete(i):s.set(i,a),r=r.add(i)}return new Dn(n.key,s,new ft(r.toArray()),bt.none())}}function t0(n,e,t){n instanceof br?function(r,i,a){const l=r.value.clone(),u=Vu(r.fieldTransforms,i,a.transformResults);l.setAll(u),i.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(n,e,t):n instanceof Dn?function(r,i,a){if(!gi(r.precondition,i))return void i.convertToUnknownDocument(a.version);const l=Vu(r.fieldTransforms,i,a.transformResults),u=i.data;u.setAll(af(r)),u.setAll(l),i.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(n,e,t):function(r,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function ir(n,e,t,s){return n instanceof br?function(i,a,l,u){if(!gi(i.precondition,a))return l;const d=i.value.clone(),g=Mu(i.fieldTransforms,u,a);return d.setAll(g),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null}(n,e,t,s):n instanceof Dn?function(i,a,l,u){if(!gi(i.precondition,a))return l;const d=Mu(i.fieldTransforms,u,a),g=a.data;return g.setAll(af(i)),g.setAll(d),a.convertToFoundDocument(a.version,g).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(_=>_.field))}(n,e,t,s):function(i,a,l){return gi(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l}(n,e,t)}function n0(n,e){let t=null;for(const s of n.fieldTransforms){const r=e.data.field(s.field),i=tf(s.transform,r||null);i!=null&&(t===null&&(t=lt.empty()),t.set(s.field,i))}return t||null}function Ou(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(s,r){return s===void 0&&r===void 0||!(!s||!r)&&Es(s,r,(i,a)=>Zv(i,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class br extends so{constructor(e,t,s,r=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Dn extends so{constructor(e,t,s,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function af(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const s=n.data.field(t);e.set(t,s)}}),e}function Vu(n,e,t){const s=new Map;me(n.length===t.length,32656,{Ae:t.length,Re:n.length});for(let r=0;r<t.length;r++){const i=n[r],a=i.transform,l=e.data.field(i.field);s.set(i.field,Jv(a,l,t[r]))}return s}function Mu(n,e,t){const s=new Map;for(const r of n){const i=r.transform,a=t.data.field(r.field);s.set(r.field,Yv(i,a,e))}return s}class tl extends so{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class s0 extends so{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r0{constructor(e,t,s,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&t0(i,e,s[r])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=ir(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=ir(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=Zd();return this.mutations.forEach(r=>{const i=e.get(r.key),a=i.overlayedDocument;let l=this.applyToLocalView(a,i.mutatedFields);l=t.has(r.key)?null:l;const u=of(a,l);u!==null&&s.set(r.key,u),a.isValidDocument()||a.convertToNoDocument(Y.min())}),s}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),oe())}isEqual(e){return this.batchId===e.batchId&&Es(this.mutations,e.mutations,(t,s)=>Ou(t,s))&&Es(this.baseMutations,e.baseMutations,(t,s)=>Ou(t,s))}}class nl{constructor(e,t,s,r){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=r}static from(e,t,s){me(e.mutations.length===s.length,58842,{Ve:e.mutations.length,me:s.length});let r=function(){return Hv}();const i=e.mutations;for(let a=0;a<i.length;a++)r=r.insert(i[a].key,s[a].version);return new nl(e,t,s,r)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i0{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o0{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ve,le;function a0(n){switch(n){case k.OK:return K(64938);case k.CANCELLED:case k.UNKNOWN:case k.DEADLINE_EXCEEDED:case k.RESOURCE_EXHAUSTED:case k.INTERNAL:case k.UNAVAILABLE:case k.UNAUTHENTICATED:return!1;case k.INVALID_ARGUMENT:case k.NOT_FOUND:case k.ALREADY_EXISTS:case k.PERMISSION_DENIED:case k.FAILED_PRECONDITION:case k.ABORTED:case k.OUT_OF_RANGE:case k.UNIMPLEMENTED:case k.DATA_LOSS:return!0;default:return K(15467,{code:n})}}function lf(n){if(n===void 0)return en("GRPC error has no .code"),k.UNKNOWN;switch(n){case Ve.OK:return k.OK;case Ve.CANCELLED:return k.CANCELLED;case Ve.UNKNOWN:return k.UNKNOWN;case Ve.DEADLINE_EXCEEDED:return k.DEADLINE_EXCEEDED;case Ve.RESOURCE_EXHAUSTED:return k.RESOURCE_EXHAUSTED;case Ve.INTERNAL:return k.INTERNAL;case Ve.UNAVAILABLE:return k.UNAVAILABLE;case Ve.UNAUTHENTICATED:return k.UNAUTHENTICATED;case Ve.INVALID_ARGUMENT:return k.INVALID_ARGUMENT;case Ve.NOT_FOUND:return k.NOT_FOUND;case Ve.ALREADY_EXISTS:return k.ALREADY_EXISTS;case Ve.PERMISSION_DENIED:return k.PERMISSION_DENIED;case Ve.FAILED_PRECONDITION:return k.FAILED_PRECONDITION;case Ve.ABORTED:return k.ABORTED;case Ve.OUT_OF_RANGE:return k.OUT_OF_RANGE;case Ve.UNIMPLEMENTED:return k.UNIMPLEMENTED;case Ve.DATA_LOSS:return k.DATA_LOSS;default:return K(39323,{code:n})}}(le=Ve||(Ve={}))[le.OK=0]="OK",le[le.CANCELLED=1]="CANCELLED",le[le.UNKNOWN=2]="UNKNOWN",le[le.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",le[le.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",le[le.NOT_FOUND=5]="NOT_FOUND",le[le.ALREADY_EXISTS=6]="ALREADY_EXISTS",le[le.PERMISSION_DENIED=7]="PERMISSION_DENIED",le[le.UNAUTHENTICATED=16]="UNAUTHENTICATED",le[le.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",le[le.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",le[le.ABORTED=10]="ABORTED",le[le.OUT_OF_RANGE=11]="OUT_OF_RANGE",le[le.UNIMPLEMENTED=12]="UNIMPLEMENTED",le[le.INTERNAL=13]="INTERNAL",le[le.UNAVAILABLE=14]="UNAVAILABLE",le[le.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l0=new En([4294967295,4294967295],0);function ju(n){const e=Pd().encode(n),t=new Td;return t.update(e),new Uint8Array(t.digest())}function Lu(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),r=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new En([t,s],0),new En([r,i],0)]}class sl{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new Xs(`Invalid padding: ${t}`);if(s<0)throw new Xs(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new Xs(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new Xs(`Invalid padding when bitmap length is 0: ${t}`);this.fe=8*e.length-t,this.ge=En.fromNumber(this.fe)}pe(e,t,s){let r=e.add(t.multiply(En.fromNumber(s)));return r.compare(l0)===1&&(r=new En([r.getBits(0),r.getBits(1)],0)),r.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;const t=ju(e),[s,r]=Lu(t);for(let i=0;i<this.hashCount;i++){const a=this.pe(s,r,i);if(!this.ye(a))return!1}return!0}static create(e,t,s){const r=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),a=new sl(i,r,t);return s.forEach(l=>a.insert(l)),a}insert(e){if(this.fe===0)return;const t=ju(e),[s,r]=Lu(t);for(let i=0;i<this.hashCount;i++){const a=this.pe(s,r,i);this.we(a)}}we(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class Xs extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ro{constructor(e,t,s,r,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const r=new Map;return r.set(e,Ar.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new ro(Y.min(),r,new Re(ne),tn(),oe())}}class Ar{constructor(e,t,s,r,i){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new Ar(s,t,oe(),oe(),oe())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i{constructor(e,t,s,r){this.Se=e,this.removedTargetIds=t,this.key=s,this.be=r}}class cf{constructor(e,t){this.targetId=e,this.De=t}}class uf{constructor(e,t,s=Qe.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=r}}class Fu{constructor(){this.ve=0,this.Ce=Uu(),this.Fe=Qe.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=oe(),t=oe(),s=oe();return this.Ce.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:s=s.add(r);break;default:K(38017,{changeType:i})}}),new Ar(this.Fe,this.Me,e,t,s)}ke(){this.xe=!1,this.Ce=Uu()}qe(e,t){this.xe=!0,this.Ce=this.Ce.insert(e,t)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,me(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class c0{constructor(e){this.We=e,this.Ge=new Map,this.ze=tn(),this.je=ni(),this.Je=ni(),this.He=new Re(ne)}Ye(e){for(const t of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(t,e.be):this.Xe(t,e.key,e.be);for(const t of e.removedTargetIds)this.Xe(t,e.key,e.be)}et(e){this.forEachTarget(e,t=>{const s=this.tt(t);switch(e.state){case 0:this.nt(t)&&s.Be(e.resumeToken);break;case 1:s.Ue(),s.Oe||s.ke(),s.Be(e.resumeToken);break;case 2:s.Ue(),s.Oe||this.removeTarget(t);break;case 3:this.nt(t)&&(s.Ke(),s.Be(e.resumeToken));break;case 4:this.nt(t)&&(this.rt(t),s.Be(e.resumeToken));break;default:K(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Ge.forEach((s,r)=>{this.nt(r)&&t(r)})}it(e){const t=e.targetId,s=e.De.count,r=this.st(t);if(r){const i=r.target;if(ga(i))if(s===0){const a=new z(i.path);this.Xe(t,a,tt.newNoDocument(a,Y.min()))}else me(s===1,20013,{expectedCount:s});else{const a=this.ot(t);if(a!==s){const l=this._t(e),u=l?this.ut(l,e,a):1;if(u!==0){this.rt(t);const d=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(t,d)}}}}}_t(e){const t=e.De.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:r=0},hashCount:i=0}=t;let a,l;try{a=Rn(s).toUint8Array()}catch(u){if(u instanceof Od)return bn("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new sl(a,r,i)}catch(u){return bn(u instanceof Xs?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.fe===0?null:l}ut(e,t,s){return t.De.count===s-this.ht(e,t.targetId)?0:2}ht(e,t){const s=this.We.getRemoteKeysForTarget(t);let r=0;return s.forEach(i=>{const a=this.We.lt(),l=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.Xe(t,i,null),r++)}),r}Pt(e){const t=new Map;this.Ge.forEach((i,a)=>{const l=this.st(a);if(l){if(i.current&&ga(l.target)){const u=new z(l.target.path);this.Tt(u).has(a)||this.It(a,u)||this.Xe(a,u,tt.newNoDocument(u,e))}i.Ne&&(t.set(a,i.Le()),i.ke())}});let s=oe();this.Je.forEach((i,a)=>{let l=!0;a.forEachWhile(u=>{const d=this.st(u);return!d||d.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(s=s.add(i))}),this.ze.forEach((i,a)=>a.setReadTime(e));const r=new ro(e,t,this.He,this.ze,s);return this.ze=tn(),this.je=ni(),this.Je=ni(),this.He=new Re(ne),r}Ze(e,t){if(!this.nt(e))return;const s=this.It(e,t.key)?2:0;this.tt(e).qe(t.key,s),this.ze=this.ze.insert(t.key,t),this.je=this.je.insert(t.key,this.Tt(t.key).add(e)),this.Je=this.Je.insert(t.key,this.dt(t.key).add(e))}Xe(e,t,s){if(!this.nt(e))return;const r=this.tt(e);this.It(e,t)?r.qe(t,1):r.Qe(t),this.Je=this.Je.insert(t,this.dt(t).delete(e)),this.Je=this.Je.insert(t,this.dt(t).add(e)),s&&(this.ze=this.ze.insert(t,s))}removeTarget(e){this.Ge.delete(e)}ot(e){const t=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let t=this.Ge.get(e);return t||(t=new Fu,this.Ge.set(e,t)),t}dt(e){let t=this.Je.get(e);return t||(t=new $e(ne),this.Je=this.Je.insert(e,t)),t}Tt(e){let t=this.je.get(e);return t||(t=new $e(ne),this.je=this.je.insert(e,t)),t}nt(e){const t=this.st(e)!==null;return t||q("WatchChangeAggregator","Detected inactive target",e),t}st(e){const t=this.Ge.get(e);return t&&t.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new Fu),this.We.getRemoteKeysForTarget(e).forEach(t=>{this.Xe(e,t,null)})}It(e,t){return this.We.getRemoteKeysForTarget(e).has(t)}}function ni(){return new Re(z.comparator)}function Uu(){return new Re(z.comparator)}const u0={asc:"ASCENDING",desc:"DESCENDING"},h0={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},d0={and:"AND",or:"OR"};class f0{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function ya(n,e){return n.useProto3Json||Xi(e)?e:{value:e}}function Vi(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function hf(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function p0(n,e){return Vi(n,e.toTimestamp())}function Vt(n){return me(!!n,49232),Y.fromTimestamp(function(t){const s=xn(t);return new Ae(s.seconds,s.nanos)}(n))}function rl(n,e){return va(n,e).canonicalString()}function va(n,e){const t=function(r){return new we(["projects",r.projectId,"databases",r.database])}(n).child("documents");return e===void 0?t:t.child(e)}function df(n){const e=we.fromString(n);return me(_f(e),10190,{key:e.toString()}),e}function Ea(n,e){return rl(n.databaseId,e.path)}function Ho(n,e){const t=df(e);if(t.get(1)!==n.databaseId.projectId)throw new $(k.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new $(k.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new z(pf(t))}function ff(n,e){return rl(n.databaseId,e)}function m0(n){const e=df(n);return e.length===4?we.emptyPath():pf(e)}function Ta(n){return new we(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function pf(n){return me(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function Bu(n,e,t){return{name:Ea(n,e),fields:t.value.mapValue.fields}}function g0(n,e){let t;if("targetChange"in e){e.targetChange;const s=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:K(39313,{state:d})}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(d,g){return d.useProto3Json?(me(g===void 0||typeof g=="string",58123),Qe.fromBase64String(g||"")):(me(g===void 0||g instanceof Buffer||g instanceof Uint8Array,16193),Qe.fromUint8Array(g||new Uint8Array))}(n,e.targetChange.resumeToken),a=e.targetChange.cause,l=a&&function(d){const g=d.code===void 0?k.UNKNOWN:lf(d.code);return new $(g,d.message||"")}(a);t=new uf(s,r,i,l||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=Ho(n,s.document.name),i=Vt(s.document.updateTime),a=s.document.createTime?Vt(s.document.createTime):Y.min(),l=new lt({mapValue:{fields:s.document.fields}}),u=tt.newFoundDocument(r,i,a,l),d=s.targetIds||[],g=s.removedTargetIds||[];t=new _i(d,g,u.key,u)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=Ho(n,s.document),i=s.readTime?Vt(s.readTime):Y.min(),a=tt.newNoDocument(r,i),l=s.removedTargetIds||[];t=new _i([],l,a.key,a)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=Ho(n,s.document),i=s.removedTargetIds||[];t=new _i([],i,r,null)}else{if(!("filter"in e))return K(11601,{At:e});{e.filter;const s=e.filter;s.targetId;const{count:r=0,unchangedNames:i}=s,a=new o0(r,i),l=s.targetId;t=new cf(l,a)}}return t}function _0(n,e){let t;if(e instanceof br)t={update:Bu(n,e.key,e.value)};else if(e instanceof tl)t={delete:Ea(n,e.key)};else if(e instanceof Dn)t={update:Bu(n,e.key,e.data),updateMask:x0(e.fieldMask)};else{if(!(e instanceof s0))return K(16599,{Rt:e.type});t={verify:Ea(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(s=>function(i,a){const l=a.transform;if(l instanceof mr)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof gr)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof _r)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Oi)return{fieldPath:a.field.canonicalString(),increment:l.Ee};throw K(20930,{transform:a.transform})}(0,s))),e.precondition.isNone||(t.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:p0(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:K(27497)}(n,e.precondition)),t}function y0(n,e){return n&&n.length>0?(me(e!==void 0,14353),n.map(t=>function(r,i){let a=r.updateTime?Vt(r.updateTime):Vt(i);return a.isEqual(Y.min())&&(a=Vt(i)),new e0(a,r.transformResults||[])}(t,e))):[]}function v0(n,e){return{documents:[ff(n,e.path)]}}function E0(n,e){const t={structuredQuery:{}},s=e.path;let r;e.collectionGroup!==null?(r=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(r=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=ff(n,r);const i=function(d){if(d.length!==0)return gf(Rt.create(d,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const a=function(d){if(d.length!==0)return d.map(g=>function(E){return{field:us(E.field),direction:I0(E.dir)}}(g))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);const l=ya(n,e.limit);return l!==null&&(t.structuredQuery.limit=l),e.startAt&&(t.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(e.endAt)),{Vt:t,parent:r}}function T0(n){let e=m0(n.parent);const t=n.structuredQuery,s=t.from?t.from.length:0;let r=null;if(s>0){me(s===1,65062);const g=t.from[0];g.allDescendants?r=g.collectionId:e=e.child(g.collectionId)}let i=[];t.where&&(i=function(_){const E=mf(_);return E instanceof Rt&&zd(E)?E.getFilters():[E]}(t.where));let a=[];t.orderBy&&(a=function(_){return _.map(E=>function(S){return new pr(hs(S.field),function(R){switch(R){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(S.direction))}(E))}(t.orderBy));let l=null;t.limit&&(l=function(_){let E;return E=typeof _=="object"?_.value:_,Xi(E)?null:E}(t.limit));let u=null;t.startAt&&(u=function(_){const E=!!_.before,A=_.values||[];return new ki(A,E)}(t.startAt));let d=null;return t.endAt&&(d=function(_){const E=!_.before,A=_.values||[];return new ki(A,E)}(t.endAt)),Uv(e,r,a,i,l,"F",u,d)}function w0(n,e){const t=function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return K(28987,{purpose:r})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function mf(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=hs(t.unaryFilter.field);return Me.create(s,"==",{doubleValue:NaN});case"IS_NULL":const r=hs(t.unaryFilter.field);return Me.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=hs(t.unaryFilter.field);return Me.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=hs(t.unaryFilter.field);return Me.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return K(61313);default:return K(60726)}}(n):n.fieldFilter!==void 0?function(t){return Me.create(hs(t.fieldFilter.field),function(r){switch(r){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return K(58110);default:return K(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return Rt.create(t.compositeFilter.filters.map(s=>mf(s)),function(r){switch(r){case"AND":return"and";case"OR":return"or";default:return K(1026)}}(t.compositeFilter.op))}(n):K(30097,{filter:n})}function I0(n){return u0[n]}function b0(n){return h0[n]}function A0(n){return d0[n]}function us(n){return{fieldPath:n.canonicalString()}}function hs(n){return Ke.fromServerFormat(n.fieldPath)}function gf(n){return n instanceof Me?function(t){if(t.op==="=="){if(Su(t.value))return{unaryFilter:{field:us(t.field),op:"IS_NAN"}};if(Ru(t.value))return{unaryFilter:{field:us(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Su(t.value))return{unaryFilter:{field:us(t.field),op:"IS_NOT_NAN"}};if(Ru(t.value))return{unaryFilter:{field:us(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:us(t.field),op:b0(t.op),value:t.value}}}(n):n instanceof Rt?function(t){const s=t.getFilters().map(r=>gf(r));return s.length===1?s[0]:{compositeFilter:{op:A0(t.op),filters:s}}}(n):K(54877,{filter:n})}function x0(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function _f(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn{constructor(e,t,s,r,i=Y.min(),a=Y.min(),l=Qe.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new gn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new gn(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new gn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new gn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R0{constructor(e){this.gt=e}}function S0(n){const e=T0({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Di(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P0{constructor(){this.Dn=new C0}addToCollectionParentIndex(e,t){return this.Dn.add(t),D.resolve()}getCollectionParents(e,t){return D.resolve(this.Dn.getEntries(t))}addFieldIndex(e,t){return D.resolve()}deleteFieldIndex(e,t){return D.resolve()}deleteAllFieldIndexes(e){return D.resolve()}createTargetIndexes(e,t){return D.resolve()}getDocumentsMatchingTarget(e,t){return D.resolve(null)}getIndexType(e,t){return D.resolve(0)}getFieldIndexes(e,t){return D.resolve([])}getNextCollectionGroupToUpdate(e){return D.resolve(null)}getMinOffset(e,t){return D.resolve(An.min())}getMinOffsetFromCollectionGroup(e,t){return D.resolve(An.min())}updateCollectionGroup(e,t,s){return D.resolve()}updateIndexEntries(e,t){return D.resolve()}}class C0{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),r=this.index[t]||new $e(we.comparator),i=!r.has(s);return this.index[t]=r.add(s),i}has(e){const t=e.lastSegment(),s=e.popLast(),r=this.index[t];return r&&r.has(s)}getEntries(e){return(this.index[e]||new $e(we.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $u={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},yf=41943040;class at{static withCacheSize(e){return new at(e,at.DEFAULT_COLLECTION_PERCENTILE,at.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */at.DEFAULT_COLLECTION_PERCENTILE=10,at.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,at.DEFAULT=new at(yf,at.DEFAULT_COLLECTION_PERCENTILE,at.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),at.DISABLED=new at(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Is{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new Is(0)}static ur(){return new Is(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qu="LruGarbageCollector",N0=1048576;function zu([n,e],[t,s]){const r=ne(n,t);return r===0?ne(e,s):r}class k0{constructor(e){this.Tr=e,this.buffer=new $e(zu),this.Ir=0}dr(){return++this.Ir}Er(e){const t=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();zu(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class D0{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){q(qu,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Ns(t)?q(qu,"Ignoring IndexedDB error during garbage collection: ",t):await Cs(t)}await this.Rr(3e5)})}}class O0{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.mr(e).next(s=>Math.floor(t/100*s))}nthSequenceNumber(e,t){if(t===0)return D.resolve(Ji.ue);const s=new k0(t);return this.Vr.forEachTarget(e,r=>s.Er(r.sequenceNumber)).next(()=>this.Vr.gr(e,r=>s.Er(r))).next(()=>s.maxValue)}removeTargets(e,t,s){return this.Vr.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(q("LruGarbageCollector","Garbage collection skipped; disabled"),D.resolve($u)):this.getCacheSize(e).next(s=>s<this.params.cacheSizeCollectionThreshold?(q("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),$u):this.pr(e,t))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,t){let s,r,i,a,l,u,d;const g=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(_=>(_>this.params.maximumSequenceNumbersToCollect?(q("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${_}`),r=this.params.maximumSequenceNumbersToCollect):r=_,a=Date.now(),this.nthSequenceNumber(e,r))).next(_=>(s=_,l=Date.now(),this.removeTargets(e,s,t))).next(_=>(i=_,u=Date.now(),this.removeOrphanedDocuments(e,s))).next(_=>(d=Date.now(),ls()<=ie.DEBUG&&q("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-g}ms
	Determined least recently used ${r} in `+(l-a)+`ms
	Removed ${i} targets in `+(u-l)+`ms
	Removed ${_} documents in `+(d-u)+`ms
Total Duration: ${d-g}ms`),D.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:i,documentsRemoved:_})))}}function V0(n,e){return new O0(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M0{constructor(){this.changes=new ts(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,tt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?D.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j0{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L0{constructor(e,t,s,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next(r=>(s=r,this.remoteDocumentCache.getEntry(e,t))).next(r=>(s!==null&&ir(s.mutation,r,ft.empty(),Ae.now()),r))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.getLocalViewOfDocuments(e,s,oe()).next(()=>s))}getLocalViewOfDocuments(e,t,s=oe()){const r=$n();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,s).next(i=>{let a=Js();return i.forEach((l,u)=>{a=a.insert(l,u.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const s=$n();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,oe()))}populateOverlays(e,t,s){const r=[];return s.forEach(i=>{t.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(e,r).next(i=>{i.forEach((a,l)=>{t.set(a,l)})})}computeViews(e,t,s,r){let i=tn();const a=rr(),l=function(){return rr()}();return t.forEach((u,d)=>{const g=s.get(d.key);r.has(d.key)&&(g===void 0||g.mutation instanceof Dn)?i=i.insert(d.key,d):g!==void 0?(a.set(d.key,g.mutation.getFieldMask()),ir(g.mutation,d,g.mutation.getFieldMask(),Ae.now())):a.set(d.key,ft.empty())}),this.recalculateAndSaveOverlays(e,i).next(u=>(u.forEach((d,g)=>a.set(d,g)),t.forEach((d,g)=>{var _;return l.set(d,new j0(g,(_=a.get(d))!==null&&_!==void 0?_:null))}),l))}recalculateAndSaveOverlays(e,t){const s=rr();let r=new Re((a,l)=>a-l),i=oe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const l of a)l.keys().forEach(u=>{const d=t.get(u);if(d===null)return;let g=s.get(u)||ft.empty();g=l.applyToLocalView(d,g),s.set(u,g);const _=(r.get(l.batchId)||oe()).add(u);r=r.insert(l.batchId,_)})}).next(()=>{const a=[],l=r.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),d=u.key,g=u.value,_=Zd();g.forEach(E=>{if(!i.has(E)){const A=of(t.get(E),s.get(E));A!==null&&_.set(E,A),i=i.add(E)}}),a.push(this.documentOverlayCache.saveOverlays(e,d,_))}return D.waitFor(a)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,t,s,r){return function(a){return z.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Kd(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,r):this.getDocumentsMatchingCollectionQuery(e,t,s,r)}getNextDocuments(e,t,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,r).next(i=>{const a=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,r-i.size):D.resolve($n());let l=ur,u=i;return a.next(d=>D.forEach(d,(g,_)=>(l<_.largestBatchId&&(l=_.largestBatchId),i.get(g)?D.resolve():this.remoteDocumentCache.getEntry(e,g).next(E=>{u=u.insert(g,E)}))).next(()=>this.populateOverlays(e,d,i)).next(()=>this.computeViews(e,u,d,oe())).next(g=>({batchId:l,changes:Xd(g)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new z(t)).next(s=>{let r=Js();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(e,t,s,r){const i=t.collectionGroup;let a=Js();return this.indexManager.getCollectionParents(e,i).next(l=>D.forEach(l,u=>{const d=function(_,E){return new ks(E,null,_.explicitOrderBy.slice(),_.filters.slice(),_.limit,_.limitType,_.startAt,_.endAt)}(t,u.child(i));return this.getDocumentsMatchingCollectionQuery(e,d,s,r).next(g=>{g.forEach((_,E)=>{a=a.insert(_,E)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,s,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next(a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,i,r))).next(a=>{i.forEach((u,d)=>{const g=d.getKey();a.get(g)===null&&(a=a.insert(g,tt.newInvalidDocument(g)))});let l=Js();return a.forEach((u,d)=>{const g=i.get(u);g!==void 0&&ir(g.mutation,d,ft.empty(),Ae.now()),to(t,d)&&(l=l.insert(u,d))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F0{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,t){return D.resolve(this.Br.get(t))}saveBundleMetadata(e,t){return this.Br.set(t.id,function(r){return{id:r.id,version:r.version,createTime:Vt(r.createTime)}}(t)),D.resolve()}getNamedQuery(e,t){return D.resolve(this.Lr.get(t))}saveNamedQuery(e,t){return this.Lr.set(t.name,function(r){return{name:r.name,query:S0(r.bundledQuery),readTime:Vt(r.readTime)}}(t)),D.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U0{constructor(){this.overlays=new Re(z.comparator),this.kr=new Map}getOverlay(e,t){return D.resolve(this.overlays.get(t))}getOverlays(e,t){const s=$n();return D.forEach(t,r=>this.getOverlay(e,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(e,t,s){return s.forEach((r,i)=>{this.wt(e,t,i)}),D.resolve()}removeOverlaysForBatchId(e,t,s){const r=this.kr.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.kr.delete(s)),D.resolve()}getOverlaysForCollection(e,t,s){const r=$n(),i=t.length+1,a=new z(t.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const u=l.getNext().value,d=u.getKey();if(!t.isPrefixOf(d.path))break;d.path.length===i&&u.largestBatchId>s&&r.set(u.getKey(),u)}return D.resolve(r)}getOverlaysForCollectionGroup(e,t,s,r){let i=new Re((d,g)=>d-g);const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===t&&d.largestBatchId>s){let g=i.get(d.largestBatchId);g===null&&(g=$n(),i=i.insert(d.largestBatchId,g)),g.set(d.getKey(),d)}}const l=$n(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((d,g)=>l.set(d,g)),!(l.size()>=r)););return D.resolve(l)}wt(e,t,s){const r=this.overlays.get(s.key);if(r!==null){const a=this.kr.get(r.largestBatchId).delete(s.key);this.kr.set(r.largestBatchId,a)}this.overlays=this.overlays.insert(s.key,new i0(t,s));let i=this.kr.get(t);i===void 0&&(i=oe(),this.kr.set(t,i)),this.kr.set(t,i.add(s.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B0{constructor(){this.sessionToken=Qe.EMPTY_BYTE_STRING}getSessionToken(e){return D.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,D.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class il{constructor(){this.qr=new $e(qe.Qr),this.$r=new $e(qe.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,t){const s=new qe(e,t);this.qr=this.qr.add(s),this.$r=this.$r.add(s)}Kr(e,t){e.forEach(s=>this.addReference(s,t))}removeReference(e,t){this.Wr(new qe(e,t))}Gr(e,t){e.forEach(s=>this.removeReference(s,t))}zr(e){const t=new z(new we([])),s=new qe(t,e),r=new qe(t,e+1),i=[];return this.$r.forEachInRange([s,r],a=>{this.Wr(a),i.push(a.key)}),i}jr(){this.qr.forEach(e=>this.Wr(e))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const t=new z(new we([])),s=new qe(t,e),r=new qe(t,e+1);let i=oe();return this.$r.forEachInRange([s,r],a=>{i=i.add(a.key)}),i}containsKey(e){const t=new qe(e,0),s=this.qr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class qe{constructor(e,t){this.key=e,this.Hr=t}static Qr(e,t){return z.comparator(e.key,t.key)||ne(e.Hr,t.Hr)}static Ur(e,t){return ne(e.Hr,t.Hr)||z.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $0{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.er=1,this.Yr=new $e(qe.Qr)}checkEmpty(e){return D.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,r){const i=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new r0(i,t,s,r);this.mutationQueue.push(a);for(const l of r)this.Yr=this.Yr.add(new qe(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return D.resolve(a)}lookupMutationBatch(e,t){return D.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,r=this.Xr(s),i=r<0?0:r;return D.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return D.resolve(this.mutationQueue.length===0?Ka:this.er-1)}getAllMutationBatches(e){return D.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new qe(t,0),r=new qe(t,Number.POSITIVE_INFINITY),i=[];return this.Yr.forEachInRange([s,r],a=>{const l=this.Zr(a.Hr);i.push(l)}),D.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new $e(ne);return t.forEach(r=>{const i=new qe(r,0),a=new qe(r,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([i,a],l=>{s=s.add(l.Hr)})}),D.resolve(this.ei(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,r=s.length+1;let i=s;z.isDocumentKey(i)||(i=i.child(""));const a=new qe(new z(i),0);let l=new $e(ne);return this.Yr.forEachWhile(u=>{const d=u.key.path;return!!s.isPrefixOf(d)&&(d.length===r&&(l=l.add(u.Hr)),!0)},a),D.resolve(this.ei(l))}ei(e){const t=[];return e.forEach(s=>{const r=this.Zr(s);r!==null&&t.push(r)}),t}removeMutationBatch(e,t){me(this.ti(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Yr;return D.forEach(t.mutations,r=>{const i=new qe(r.key,t.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.Yr=s})}rr(e){}containsKey(e,t){const s=new qe(t,0),r=this.Yr.firstAfterOrEqual(s);return D.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,D.resolve()}ti(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q0{constructor(e){this.ni=e,this.docs=function(){return new Re(z.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,r=this.docs.get(s),i=r?r.size:0,a=this.ni(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return D.resolve(s?s.document.mutableCopy():tt.newInvalidDocument(t))}getEntries(e,t){let s=tn();return t.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():tt.newInvalidDocument(r))}),D.resolve(s)}getDocumentsMatchingQuery(e,t,s,r){let i=tn();const a=t.path,l=new z(a.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:d,value:{document:g}}=u.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||yv(_v(g),s)<=0||(r.has(g.key)||to(t,g))&&(i=i.insert(g.key,g.mutableCopy()))}return D.resolve(i)}getAllFromCollectionGroup(e,t,s,r){K(9500)}ri(e,t){return D.forEach(this.docs,s=>t(s))}newChangeBuffer(e){return new z0(this)}getSize(e){return D.resolve(this.size)}}class z0 extends M0{constructor(e){super(),this.Or=e}applyChanges(e){const t=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?t.push(this.Or.addEntry(e,r)):this.Or.removeEntry(s)}),D.waitFor(t)}getFromCache(e,t){return this.Or.getEntry(e,t)}getAllFromCache(e,t){return this.Or.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H0{constructor(e){this.persistence=e,this.ii=new ts(t=>Ja(t),Xa),this.lastRemoteSnapshotVersion=Y.min(),this.highestTargetId=0,this.si=0,this.oi=new il,this.targetCount=0,this._i=Is.ar()}forEachTarget(e,t){return this.ii.forEach((s,r)=>t(r)),D.resolve()}getLastRemoteSnapshotVersion(e){return D.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return D.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),D.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.si&&(this.si=t),D.resolve()}hr(e){this.ii.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this._i=new Is(t),this.highestTargetId=t),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,t){return this.hr(t),this.targetCount+=1,D.resolve()}updateTargetData(e,t){return this.hr(t),D.resolve()}removeTargetData(e,t){return this.ii.delete(t.target),this.oi.zr(t.targetId),this.targetCount-=1,D.resolve()}removeTargets(e,t,s){let r=0;const i=[];return this.ii.forEach((a,l)=>{l.sequenceNumber<=t&&s.get(l.targetId)===null&&(this.ii.delete(a),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),r++)}),D.waitFor(i).next(()=>r)}getTargetCount(e){return D.resolve(this.targetCount)}getTargetData(e,t){const s=this.ii.get(t)||null;return D.resolve(s)}addMatchingKeys(e,t,s){return this.oi.Kr(t,s),D.resolve()}removeMatchingKeys(e,t,s){this.oi.Gr(t,s);const r=this.persistence.referenceDelegate,i=[];return r&&t.forEach(a=>{i.push(r.markPotentiallyOrphaned(e,a))}),D.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.oi.zr(t),D.resolve()}getMatchingKeysForTargetId(e,t){const s=this.oi.Jr(t);return D.resolve(s)}containsKey(e,t){return D.resolve(this.oi.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vf{constructor(e,t){this.ai={},this.overlays={},this.ui=new Ji(0),this.ci=!1,this.ci=!0,this.li=new B0,this.referenceDelegate=e(this),this.hi=new H0(this),this.indexManager=new P0,this.remoteDocumentCache=function(r){return new q0(r)}(s=>this.referenceDelegate.Pi(s)),this.serializer=new R0(t),this.Ti=new F0(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new U0,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.ai[e.toKey()];return s||(s=new $0(t,this.referenceDelegate),this.ai[e.toKey()]=s),s}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,t,s){q("MemoryPersistence","Starting transaction:",e);const r=new W0(this.ui.next());return this.referenceDelegate.Ii(),s(r).next(i=>this.referenceDelegate.di(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Ei(e,t){return D.or(Object.values(this.ai).map(s=>()=>s.containsKey(e,t)))}}class W0 extends Ev{constructor(e){super(),this.currentSequenceNumber=e}}class ol{constructor(e){this.persistence=e,this.Ai=new il,this.Ri=null}static Vi(e){return new ol(e)}get mi(){if(this.Ri)return this.Ri;throw K(60996)}addReference(e,t,s){return this.Ai.addReference(s,t),this.mi.delete(s.toString()),D.resolve()}removeReference(e,t,s){return this.Ai.removeReference(s,t),this.mi.add(s.toString()),D.resolve()}markPotentiallyOrphaned(e,t){return this.mi.add(t.toString()),D.resolve()}removeTarget(e,t){this.Ai.zr(t.targetId).forEach(r=>this.mi.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next(r=>{r.forEach(i=>this.mi.add(i.toString()))}).next(()=>s.removeTargetData(e,t))}Ii(){this.Ri=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return D.forEach(this.mi,s=>{const r=z.fromPath(s);return this.fi(e,r).next(i=>{i||t.removeEntry(r,Y.min())})}).next(()=>(this.Ri=null,t.apply(e)))}updateLimboDocument(e,t){return this.fi(e,t).next(s=>{s?this.mi.delete(t.toString()):this.mi.add(t.toString())})}Pi(e){return 0}fi(e,t){return D.or([()=>D.resolve(this.Ai.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class Mi{constructor(e,t){this.persistence=e,this.gi=new ts(s=>Iv(s.path),(s,r)=>s.isEqual(r)),this.garbageCollector=V0(this,t)}static Vi(e,t){return new Mi(e,t)}Ii(){}di(e){return D.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}mr(e){const t=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next(s=>t.next(r=>s+r))}yr(e){let t=0;return this.gr(e,s=>{t++}).next(()=>t)}gr(e,t){return D.forEach(this.gi,(s,r)=>this.Sr(e,s,r).next(i=>i?D.resolve():t(r)))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const r=this.persistence.getRemoteDocumentCache(),i=r.newChangeBuffer();return r.ri(e,a=>this.Sr(e,a,t).next(l=>{l||(s++,i.removeEntry(a,Y.min()))})).next(()=>i.apply(e)).next(()=>s)}markPotentiallyOrphaned(e,t){return this.gi.set(t,e.currentSequenceNumber),D.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.gi.set(s,e.currentSequenceNumber),D.resolve()}removeReference(e,t,s){return this.gi.set(s,e.currentSequenceNumber),D.resolve()}updateLimboDocument(e,t){return this.gi.set(t,e.currentSequenceNumber),D.resolve()}Pi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=pi(e.data.value)),t}Sr(e,t,s){return D.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const r=this.gi.get(t);return D.resolve(r!==void 0&&r>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class al{constructor(e,t,s,r){this.targetId=e,this.fromCache=t,this.Is=s,this.ds=r}static Es(e,t){let s=oe(),r=oe();for(const i of t.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new al(e,t.fromCache,s,r)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G0{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K0{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=function(){return xm()?8:Tv(nt())>0?6:4}()}initialize(e,t){this.gs=e,this.indexManager=t,this.As=!0}getDocumentsMatchingQuery(e,t,s,r){const i={result:null};return this.ps(e,t).next(a=>{i.result=a}).next(()=>{if(!i.result)return this.ys(e,t,r,s).next(a=>{i.result=a})}).next(()=>{if(i.result)return;const a=new G0;return this.ws(e,t,a).next(l=>{if(i.result=l,this.Rs)return this.Ss(e,t,a,l.size)})}).next(()=>i.result)}Ss(e,t,s,r){return s.documentReadCount<this.Vs?(ls()<=ie.DEBUG&&q("QueryEngine","SDK will not create cache indexes for query:",cs(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),D.resolve()):(ls()<=ie.DEBUG&&q("QueryEngine","Query:",cs(t),"scans",s.documentReadCount,"local documents and returns",r,"documents as results."),s.documentReadCount>this.fs*r?(ls()<=ie.DEBUG&&q("QueryEngine","The SDK decides to create cache indexes for query:",cs(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Ot(t))):D.resolve())}ps(e,t){if(ku(t))return D.resolve(null);let s=Ot(t);return this.indexManager.getIndexType(e,s).next(r=>r===0?null:(t.limit!==null&&r===1&&(t=Di(t,null,"F"),s=Ot(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next(i=>{const a=oe(...i);return this.gs.getDocuments(e,a).next(l=>this.indexManager.getMinOffset(e,s).next(u=>{const d=this.bs(t,l);return this.Ds(t,d,a,u.readTime)?this.ps(e,Di(t,null,"F")):this.vs(e,d,t,u)}))})))}ys(e,t,s,r){return ku(t)||r.isEqual(Y.min())?D.resolve(null):this.gs.getDocuments(e,s).next(i=>{const a=this.bs(t,i);return this.Ds(t,a,s,r)?D.resolve(null):(ls()<=ie.DEBUG&&q("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),cs(t)),this.vs(e,a,t,gv(r,ur)).next(l=>l))})}bs(e,t){let s=new $e(Yd(e));return t.forEach((r,i)=>{to(e,i)&&(s=s.add(i))}),s}Ds(e,t,s,r){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}ws(e,t,s){return ls()<=ie.DEBUG&&q("QueryEngine","Using full collection scan to execute query:",cs(t)),this.gs.getDocumentsMatchingQuery(e,t,An.min(),s)}vs(e,t,s,r){return this.gs.getDocumentsMatchingQuery(e,s,r).next(i=>(t.forEach(a=>{i=i.insert(a.key,a)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ll="LocalStore",Q0=3e8;class Y0{constructor(e,t,s,r){this.persistence=e,this.Cs=t,this.serializer=r,this.Fs=new Re(ne),this.Ms=new ts(i=>Ja(i),Xa),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(s)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new L0(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Fs))}}function J0(n,e,t,s){return new Y0(n,e,t,s)}async function Ef(n,e){const t=X(n);return await t.persistence.runTransaction("Handle user change","readonly",s=>{let r;return t.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,t.Ns(e),t.mutationQueue.getAllMutationBatches(s))).next(i=>{const a=[],l=[];let u=oe();for(const d of r){a.push(d.batchId);for(const g of d.mutations)u=u.add(g.key)}for(const d of i){l.push(d.batchId);for(const g of d.mutations)u=u.add(g.key)}return t.localDocuments.getDocuments(s,u).next(d=>({Bs:d,removedBatchIds:a,addedBatchIds:l}))})})}function X0(n,e){const t=X(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=e.batch.keys(),i=t.Os.newChangeBuffer({trackRemovals:!0});return function(l,u,d,g){const _=d.batch,E=_.keys();let A=D.resolve();return E.forEach(S=>{A=A.next(()=>g.getEntry(u,S)).next(x=>{const R=d.docVersions.get(S);me(R!==null,48541),x.version.compareTo(R)<0&&(_.applyToRemoteDocument(x,d),x.isValidDocument()&&(x.setReadTime(d.commitVersion),g.addEntry(x)))})}),A.next(()=>l.mutationQueue.removeMutationBatch(u,_))}(t,s,e,i).next(()=>i.apply(s)).next(()=>t.mutationQueue.performConsistencyCheck(s)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(s,r,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(l){let u=oe();for(let d=0;d<l.mutationResults.length;++d)l.mutationResults[d].transformResults.length>0&&(u=u.add(l.batch.mutations[d].key));return u}(e))).next(()=>t.localDocuments.getDocuments(s,r))})}function Tf(n){const e=X(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.hi.getLastRemoteSnapshotVersion(t))}function Z0(n,e){const t=X(n),s=e.snapshotVersion;let r=t.Fs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const a=t.Os.newChangeBuffer({trackRemovals:!0});r=t.Fs;const l=[];e.targetChanges.forEach((g,_)=>{const E=r.get(_);if(!E)return;l.push(t.hi.removeMatchingKeys(i,g.removedDocuments,_).next(()=>t.hi.addMatchingKeys(i,g.addedDocuments,_)));let A=E.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(_)!==null?A=A.withResumeToken(Qe.EMPTY_BYTE_STRING,Y.min()).withLastLimboFreeSnapshotVersion(Y.min()):g.resumeToken.approximateByteSize()>0&&(A=A.withResumeToken(g.resumeToken,s)),r=r.insert(_,A),function(x,R,V){return x.resumeToken.approximateByteSize()===0||R.snapshotVersion.toMicroseconds()-x.snapshotVersion.toMicroseconds()>=Q0?!0:V.addedDocuments.size+V.modifiedDocuments.size+V.removedDocuments.size>0}(E,A,g)&&l.push(t.hi.updateTargetData(i,A))});let u=tn(),d=oe();if(e.documentUpdates.forEach(g=>{e.resolvedLimboDocuments.has(g)&&l.push(t.persistence.referenceDelegate.updateLimboDocument(i,g))}),l.push(eE(i,a,e.documentUpdates).next(g=>{u=g.Ls,d=g.ks})),!s.isEqual(Y.min())){const g=t.hi.getLastRemoteSnapshotVersion(i).next(_=>t.hi.setTargetsMetadata(i,i.currentSequenceNumber,s));l.push(g)}return D.waitFor(l).next(()=>a.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,u,d)).next(()=>u)}).then(i=>(t.Fs=r,i))}function eE(n,e,t){let s=oe(),r=oe();return t.forEach(i=>s=s.add(i)),e.getEntries(n,s).next(i=>{let a=tn();return t.forEach((l,u)=>{const d=i.get(l);u.isFoundDocument()!==d.isFoundDocument()&&(r=r.add(l)),u.isNoDocument()&&u.version.isEqual(Y.min())?(e.removeEntry(l,u.readTime),a=a.insert(l,u)):!d.isValidDocument()||u.version.compareTo(d.version)>0||u.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(u),a=a.insert(l,u)):q(ll,"Ignoring outdated watch update for ",l,". Current version:",d.version," Watch version:",u.version)}),{Ls:a,ks:r}})}function tE(n,e){const t=X(n);return t.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=Ka),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function nE(n,e){const t=X(n);return t.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return t.hi.getTargetData(s,e).next(i=>i?(r=i,D.resolve(r)):t.hi.allocateTargetId(s).next(a=>(r=new gn(e,a,"TargetPurposeListen",s.currentSequenceNumber),t.hi.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=t.Fs.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(t.Fs=t.Fs.insert(s.targetId,s),t.Ms.set(e,s.targetId)),s})}async function wa(n,e,t){const s=X(n),r=s.Fs.get(e),i=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",i,a=>s.persistence.referenceDelegate.removeTarget(a,r))}catch(a){if(!Ns(a))throw a;q(ll,`Failed to update sequence numbers for target ${e}: ${a}`)}s.Fs=s.Fs.remove(e),s.Ms.delete(r.target)}function Hu(n,e,t){const s=X(n);let r=Y.min(),i=oe();return s.persistence.runTransaction("Execute query","readwrite",a=>function(u,d,g){const _=X(u),E=_.Ms.get(g);return E!==void 0?D.resolve(_.Fs.get(E)):_.hi.getTargetData(d,g)}(s,a,Ot(e)).next(l=>{if(l)return r=l.lastLimboFreeSnapshotVersion,s.hi.getMatchingKeysForTargetId(a,l.targetId).next(u=>{i=u})}).next(()=>s.Cs.getDocumentsMatchingQuery(a,e,t?r:Y.min(),t?i:oe())).next(l=>(sE(s,$v(e),l),{documents:l,qs:i})))}function sE(n,e,t){let s=n.xs.get(e)||Y.min();t.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),n.xs.set(e,s)}class Wu{constructor(){this.activeTargetIds=Kv()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class rE{constructor(){this.Fo=new Wu,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,t,s){this.Mo[e]=t}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new Wu,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iE{xo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gu="ConnectivityMonitor";class Ku{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){q(Gu,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){q(Gu,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let si=null;function Ia(){return si===null?si=function(){return 268435456+Math.round(2147483648*Math.random())}():si++,"0x"+si.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wo="RestConnection",oE={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class aE{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.$o=t+"://"+e.host,this.Uo=`projects/${s}/databases/${r}`,this.Ko=this.databaseId.database===Ci?`project_id=${s}`:`project_id=${s}&database_id=${r}`}Wo(e,t,s,r,i){const a=Ia(),l=this.Go(e,t.toUriEncodedString());q(Wo,`Sending RPC '${e}' ${a}:`,l,s);const u={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(u,r,i);const{host:d}=new URL(l),g=Xn(d);return this.jo(e,l,u,s,g).then(_=>(q(Wo,`Received RPC '${e}' ${a}: `,_),_),_=>{throw bn(Wo,`RPC '${e}' ${a} failed with error: `,_,"url: ",l,"request:",s),_})}Jo(e,t,s,r,i,a){return this.Wo(e,t,s,r,i)}zo(e,t,s){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ps}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((r,i)=>e[i]=r),s&&s.headers.forEach((r,i)=>e[i]=r)}Go(e,t){const s=oE[e];return`${this.$o}/v1/${t}:${s}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lE{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ze="WebChannelConnection";class cE extends aE{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,t,s,r,i){const a=Ia();return new Promise((l,u)=>{const d=new wd;d.setWithCredentials(!0),d.listenOnce(Id.COMPLETE,()=>{try{switch(d.getLastErrorCode()){case fi.NO_ERROR:const _=d.getResponseJson();q(Ze,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(_)),l(_);break;case fi.TIMEOUT:q(Ze,`RPC '${e}' ${a} timed out`),u(new $(k.DEADLINE_EXCEEDED,"Request time out"));break;case fi.HTTP_ERROR:const E=d.getStatus();if(q(Ze,`RPC '${e}' ${a} failed with status:`,E,"response text:",d.getResponseText()),E>0){let A=d.getResponseJson();Array.isArray(A)&&(A=A[0]);const S=A==null?void 0:A.error;if(S&&S.status&&S.message){const x=function(V){const M=V.toLowerCase().replace(/_/g,"-");return Object.values(k).indexOf(M)>=0?M:k.UNKNOWN}(S.status);u(new $(x,S.message))}else u(new $(k.UNKNOWN,"Server responded with status "+d.getStatus()))}else u(new $(k.UNAVAILABLE,"Connection failed."));break;default:K(9055,{c_:e,streamId:a,l_:d.getLastErrorCode(),h_:d.getLastError()})}}finally{q(Ze,`RPC '${e}' ${a} completed.`)}});const g=JSON.stringify(r);q(Ze,`RPC '${e}' ${a} sending request:`,r),d.send(t,"POST",g,s,15)})}P_(e,t,s){const r=Ia(),i=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=xd(),l=Ad(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(u.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(u.useFetchStreams=!0),this.zo(u.initMessageHeaders,t,s),u.encodeInitMessageHeaders=!0;const g=i.join("");q(Ze,`Creating RPC '${e}' stream ${r}: ${g}`,u);const _=a.createWebChannel(g,u);this.T_(_);let E=!1,A=!1;const S=new lE({Ho:R=>{A?q(Ze,`Not sending because RPC '${e}' stream ${r} is closed:`,R):(E||(q(Ze,`Opening RPC '${e}' stream ${r} transport.`),_.open(),E=!0),q(Ze,`RPC '${e}' stream ${r} sending:`,R),_.send(R))},Yo:()=>_.close()}),x=(R,V,M)=>{R.listen(V,C=>{try{M(C)}catch(j){setTimeout(()=>{throw j},0)}})};return x(_,Ys.EventType.OPEN,()=>{A||(q(Ze,`RPC '${e}' stream ${r} transport opened.`),S.s_())}),x(_,Ys.EventType.CLOSE,()=>{A||(A=!0,q(Ze,`RPC '${e}' stream ${r} transport closed`),S.__(),this.I_(_))}),x(_,Ys.EventType.ERROR,R=>{A||(A=!0,bn(Ze,`RPC '${e}' stream ${r} transport errored. Name:`,R.name,"Message:",R.message),S.__(new $(k.UNAVAILABLE,"The operation could not be completed")))}),x(_,Ys.EventType.MESSAGE,R=>{var V;if(!A){const M=R.data[0];me(!!M,16349);const C=M,j=(C==null?void 0:C.error)||((V=C[0])===null||V===void 0?void 0:V.error);if(j){q(Ze,`RPC '${e}' stream ${r} received error:`,j);const L=j.status;let F=function(m){const v=Ve[m];if(v!==void 0)return lf(v)}(L),I=j.message;F===void 0&&(F=k.INTERNAL,I="Unknown error status: "+L+" with message "+j.message),A=!0,S.__(new $(F,I)),_.close()}else q(Ze,`RPC '${e}' stream ${r} received:`,M),S.a_(M)}}),x(l,bd.STAT_EVENT,R=>{R.stat===ha.PROXY?q(Ze,`RPC '${e}' stream ${r} detected buffering proxy`):R.stat===ha.NOPROXY&&q(Ze,`RPC '${e}' stream ${r} detected no buffering proxy`)}),setTimeout(()=>{S.o_()},0),S}terminate(){this.u_.forEach(e=>e.close()),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter(t=>t===e)}}function Go(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function io(n){return new f0(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wf{constructor(e,t,s=1e3,r=1.5,i=6e4){this.Fi=e,this.timerId=t,this.d_=s,this.E_=r,this.A_=i,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const t=Math.floor(this.R_+this.p_()),s=Math.max(0,Date.now()-this.m_),r=Math.max(0,t-s);r>0&&q("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.R_} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,r,()=>(this.m_=Date.now(),e())),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qu="PersistentStream";class If{constructor(e,t,s,r,i,a,l,u){this.Fi=e,this.w_=s,this.S_=r,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new wf(e,t)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,()=>this.L_()))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():t&&t.code===k.RESOURCE_EXHAUSTED?(en(t.toString()),en("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):t&&t.code===k.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(t)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),t=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.b_===t&&this.W_(s,r)},s=>{e(()=>{const r=new $(k.UNKNOWN,"Fetching auth token failed: "+s.message);return this.G_(r)})})}W_(e,t){const s=this.K_(this.b_);this.stream=this.z_(e,t),this.stream.Zo(()=>{s(()=>this.listener.Zo())}),this.stream.e_(()=>{s(()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,()=>(this.x_()&&(this.state=3),Promise.resolve())),this.listener.e_()))}),this.stream.n_(r=>{s(()=>this.G_(r))}),this.stream.onMessage(r=>{s(()=>++this.C_==1?this.j_(r):this.onNext(r))})}O_(){this.state=5,this.F_.g_(async()=>{this.state=0,this.start()})}G_(e){return q(Qu,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return t=>{this.Fi.enqueueAndForget(()=>this.b_===e?t():(q(Qu,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class uE extends If{constructor(e,t,s,r,i,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,r,a),this.serializer=i}z_(e,t){return this.connection.P_("Listen",e,t)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const t=g0(this.serializer,e),s=function(i){if(!("targetChange"in i))return Y.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?Y.min():a.readTime?Vt(a.readTime):Y.min()}(e);return this.listener.J_(t,s)}H_(e){const t={};t.database=Ta(this.serializer),t.addTarget=function(i,a){let l;const u=a.target;if(l=ga(u)?{documents:v0(i,u)}:{query:E0(i,u).Vt},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=hf(i,a.resumeToken);const d=ya(i,a.expectedCount);d!==null&&(l.expectedCount=d)}else if(a.snapshotVersion.compareTo(Y.min())>0){l.readTime=Vi(i,a.snapshotVersion.toTimestamp());const d=ya(i,a.expectedCount);d!==null&&(l.expectedCount=d)}return l}(this.serializer,e);const s=w0(this.serializer,e);s&&(t.labels=s),this.k_(t)}Y_(e){const t={};t.database=Ta(this.serializer),t.removeTarget=e,this.k_(t)}}class hE extends If{constructor(e,t,s,r,i,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,r,a),this.serializer=i}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,t){return this.connection.P_("Write",e,t)}j_(e){return me(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,me(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){me(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const t=y0(e.writeResults,e.commitTime),s=Vt(e.commitTime);return this.listener.ta(s,t)}na(){const e={};e.database=Ta(this.serializer),this.k_(e)}X_(e){const t={streamToken:this.lastStreamToken,writes:e.map(s=>_0(this.serializer,s))};this.k_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dE{}class fE extends dE{constructor(e,t,s,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=r,this.ra=!1}ia(){if(this.ra)throw new $(k.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,s,r){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.connection.Wo(e,va(t,s),r,i,a)).catch(i=>{throw i.name==="FirebaseError"?(i.code===k.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new $(k.UNKNOWN,i.toString())})}Jo(e,t,s,r,i){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.Jo(e,va(t,s),r,a,l,i)).catch(a=>{throw a.name==="FirebaseError"?(a.code===k.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new $(k.UNKNOWN,a.toString())})}terminate(){this.ra=!0,this.connection.terminate()}}class pE{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve())))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(en(t),this._a=!1):q("OnlineStateTracker",t)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qn="RemoteStore";class mE{constructor(e,t,s,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=i,this.Ea.xo(a=>{s.enqueueAndForget(async()=>{ns(this)&&(q(Qn,"Restarting streams for network reachability change."),await async function(u){const d=X(u);d.Ia.add(4),await xr(d),d.Aa.set("Unknown"),d.Ia.delete(4),await oo(d)}(this))})}),this.Aa=new pE(s,r)}}async function oo(n){if(ns(n))for(const e of n.da)await e(!0)}async function xr(n){for(const e of n.da)await e(!1)}function bf(n,e){const t=X(n);t.Ta.has(e.targetId)||(t.Ta.set(e.targetId,e),dl(t)?hl(t):Ds(t).x_()&&ul(t,e))}function cl(n,e){const t=X(n),s=Ds(t);t.Ta.delete(e),s.x_()&&Af(t,e),t.Ta.size===0&&(s.x_()?s.B_():ns(t)&&t.Aa.set("Unknown"))}function ul(n,e){if(n.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Y.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Ds(n).H_(e)}function Af(n,e){n.Ra.$e(e),Ds(n).Y_(e)}function hl(n){n.Ra=new c0({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>n.Ta.get(e)||null,lt:()=>n.datastore.serializer.databaseId}),Ds(n).start(),n.Aa.aa()}function dl(n){return ns(n)&&!Ds(n).M_()&&n.Ta.size>0}function ns(n){return X(n).Ia.size===0}function xf(n){n.Ra=void 0}async function gE(n){n.Aa.set("Online")}async function _E(n){n.Ta.forEach((e,t)=>{ul(n,e)})}async function yE(n,e){xf(n),dl(n)?(n.Aa.la(e),hl(n)):n.Aa.set("Unknown")}async function vE(n,e,t){if(n.Aa.set("Online"),e instanceof uf&&e.state===2&&e.cause)try{await async function(r,i){const a=i.cause;for(const l of i.targetIds)r.Ta.has(l)&&(await r.remoteSyncer.rejectListen(l,a),r.Ta.delete(l),r.Ra.removeTarget(l))}(n,e)}catch(s){q(Qn,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await ji(n,s)}else if(e instanceof _i?n.Ra.Ye(e):e instanceof cf?n.Ra.it(e):n.Ra.et(e),!t.isEqual(Y.min()))try{const s=await Tf(n.localStore);t.compareTo(s)>=0&&await function(i,a){const l=i.Ra.Pt(a);return l.targetChanges.forEach((u,d)=>{if(u.resumeToken.approximateByteSize()>0){const g=i.Ta.get(d);g&&i.Ta.set(d,g.withResumeToken(u.resumeToken,a))}}),l.targetMismatches.forEach((u,d)=>{const g=i.Ta.get(u);if(!g)return;i.Ta.set(u,g.withResumeToken(Qe.EMPTY_BYTE_STRING,g.snapshotVersion)),Af(i,u);const _=new gn(g.target,u,d,g.sequenceNumber);ul(i,_)}),i.remoteSyncer.applyRemoteEvent(l)}(n,t)}catch(s){q(Qn,"Failed to raise snapshot:",s),await ji(n,s)}}async function ji(n,e,t){if(!Ns(e))throw e;n.Ia.add(1),await xr(n),n.Aa.set("Offline"),t||(t=()=>Tf(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{q(Qn,"Retrying IndexedDB access"),await t(),n.Ia.delete(1),await oo(n)})}function Rf(n,e){return e().catch(t=>ji(n,t,e))}async function ao(n){const e=X(n),t=Pn(e);let s=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:Ka;for(;EE(e);)try{const r=await tE(e.localStore,s);if(r===null){e.Pa.length===0&&t.B_();break}s=r.batchId,TE(e,r)}catch(r){await ji(e,r)}Sf(e)&&Pf(e)}function EE(n){return ns(n)&&n.Pa.length<10}function TE(n,e){n.Pa.push(e);const t=Pn(n);t.x_()&&t.Z_&&t.X_(e.mutations)}function Sf(n){return ns(n)&&!Pn(n).M_()&&n.Pa.length>0}function Pf(n){Pn(n).start()}async function wE(n){Pn(n).na()}async function IE(n){const e=Pn(n);for(const t of n.Pa)e.X_(t.mutations)}async function bE(n,e,t){const s=n.Pa.shift(),r=nl.from(s,e,t);await Rf(n,()=>n.remoteSyncer.applySuccessfulWrite(r)),await ao(n)}async function AE(n,e){e&&Pn(n).Z_&&await async function(s,r){if(function(a){return a0(a)&&a!==k.ABORTED}(r.code)){const i=s.Pa.shift();Pn(s).N_(),await Rf(s,()=>s.remoteSyncer.rejectFailedWrite(i.batchId,r)),await ao(s)}}(n,e),Sf(n)&&Pf(n)}async function Yu(n,e){const t=X(n);t.asyncQueue.verifyOperationInProgress(),q(Qn,"RemoteStore received new credentials");const s=ns(t);t.Ia.add(3),await xr(t),s&&t.Aa.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ia.delete(3),await oo(t)}async function xE(n,e){const t=X(n);e?(t.Ia.delete(2),await oo(t)):e||(t.Ia.add(2),await xr(t),t.Aa.set("Unknown"))}function Ds(n){return n.Va||(n.Va=function(t,s,r){const i=X(t);return i.ia(),new uE(s,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(n.datastore,n.asyncQueue,{Zo:gE.bind(null,n),e_:_E.bind(null,n),n_:yE.bind(null,n),J_:vE.bind(null,n)}),n.da.push(async e=>{e?(n.Va.N_(),dl(n)?hl(n):n.Aa.set("Unknown")):(await n.Va.stop(),xf(n))})),n.Va}function Pn(n){return n.ma||(n.ma=function(t,s,r){const i=X(t);return i.ia(),new hE(s,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(n.datastore,n.asyncQueue,{Zo:()=>Promise.resolve(),e_:wE.bind(null,n),n_:AE.bind(null,n),ea:IE.bind(null,n),ta:bE.bind(null,n)}),n.da.push(async e=>{e?(n.ma.N_(),await ao(n)):(await n.ma.stop(),n.Pa.length>0&&(q(Qn,`Stopping write stream with ${n.Pa.length} pending writes`),n.Pa=[]))})),n.ma}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fl{constructor(e,t,s,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new qn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,r,i){const a=Date.now()+s,l=new fl(e,t,a,r,i);return l.start(s),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new $(k.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function pl(n,e){if(en("AsyncQueue",`${e}: ${n}`),Ns(n))return new $(k.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs{static emptySet(e){return new gs(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||z.comparator(t.key,s.key):(t,s)=>z.comparator(t.key,s.key),this.keyedMap=Js(),this.sortedSet=new Re(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,s)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof gs)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const r=t.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new gs;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ju{constructor(){this.fa=new Re(z.comparator)}track(e){const t=e.doc.key,s=this.fa.get(t);s?e.type!==0&&s.type===3?this.fa=this.fa.insert(t,e):e.type===3&&s.type!==1?this.fa=this.fa.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.fa=this.fa.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.fa=this.fa.remove(t):e.type===1&&s.type===2?this.fa=this.fa.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):K(63341,{At:e,ga:s}):this.fa=this.fa.insert(t,e)}pa(){const e=[];return this.fa.inorderTraversal((t,s)=>{e.push(s)}),e}}class bs{constructor(e,t,s,r,i,a,l,u,d){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=d}static fromInitialDocuments(e,t,s,r,i){const a=[];return t.forEach(l=>{a.push({type:0,doc:l})}),new bs(e,t,gs.emptySet(t),a,s,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&eo(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let r=0;r<t.length;r++)if(t[r].type!==s[r].type||!t[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RE{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some(e=>e.ba())}}class SE{constructor(){this.queries=Xu(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(t,s){const r=X(t),i=r.queries;r.queries=Xu(),i.forEach((a,l)=>{for(const u of l.wa)u.onError(s)})})(this,new $(k.ABORTED,"Firestore shutting down"))}}function Xu(){return new ts(n=>Qd(n),eo)}async function PE(n,e){const t=X(n);let s=3;const r=e.query;let i=t.queries.get(r);i?!i.Sa()&&e.ba()&&(s=2):(i=new RE,s=e.ba()?0:1);try{switch(s){case 0:i.ya=await t.onListen(r,!0);break;case 1:i.ya=await t.onListen(r,!1);break;case 2:await t.onFirstRemoteStoreListen(r)}}catch(a){const l=pl(a,`Initialization of query '${cs(e.query)}' failed`);return void e.onError(l)}t.queries.set(r,i),i.wa.push(e),e.va(t.onlineState),i.ya&&e.Ca(i.ya)&&ml(t)}async function CE(n,e){const t=X(n),s=e.query;let r=3;const i=t.queries.get(s);if(i){const a=i.wa.indexOf(e);a>=0&&(i.wa.splice(a,1),i.wa.length===0?r=e.ba()?0:1:!i.Sa()&&e.ba()&&(r=2))}switch(r){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function NE(n,e){const t=X(n);let s=!1;for(const r of e){const i=r.query,a=t.queries.get(i);if(a){for(const l of a.wa)l.Ca(r)&&(s=!0);a.ya=r}}s&&ml(t)}function kE(n,e,t){const s=X(n),r=s.queries.get(e);if(r)for(const i of r.wa)i.onError(t);s.queries.delete(e)}function ml(n){n.Da.forEach(e=>{e.next()})}var ba,Zu;(Zu=ba||(ba={})).Fa="default",Zu.Cache="cache";class DE{constructor(e,t,s){this.query=e,this.Ma=t,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=s||{}}Ca(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new bs(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),t=!0):this.Ba(e,this.onlineState)&&(this.La(e),t=!0),this.Oa=e,t}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let t=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),t=!0),t}Ba(e,t){if(!e.fromCache||!this.ba())return!0;const s=t!=="Offline";return(!this.options.ka||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Na(e){if(e.docChanges.length>0)return!0;const t=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}La(e){e=bs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==ba.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cf{constructor(e){this.key=e}}class Nf{constructor(e){this.key=e}}class OE{constructor(e,t){this.query=e,this.Ha=t,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=oe(),this.mutatedKeys=oe(),this.Xa=Yd(e),this.eu=new gs(this.Xa)}get tu(){return this.Ha}nu(e,t){const s=t?t.ru:new Ju,r=t?t.eu:this.eu;let i=t?t.mutatedKeys:this.mutatedKeys,a=r,l=!1;const u=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,d=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((g,_)=>{const E=r.get(g),A=to(this.query,_)?_:null,S=!!E&&this.mutatedKeys.has(E.key),x=!!A&&(A.hasLocalMutations||this.mutatedKeys.has(A.key)&&A.hasCommittedMutations);let R=!1;E&&A?E.data.isEqual(A.data)?S!==x&&(s.track({type:3,doc:A}),R=!0):this.iu(E,A)||(s.track({type:2,doc:A}),R=!0,(u&&this.Xa(A,u)>0||d&&this.Xa(A,d)<0)&&(l=!0)):!E&&A?(s.track({type:0,doc:A}),R=!0):E&&!A&&(s.track({type:1,doc:E}),R=!0,(u||d)&&(l=!0)),R&&(A?(a=a.add(A),i=x?i.add(g):i.delete(g)):(a=a.delete(g),i=i.delete(g)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const g=this.query.limitType==="F"?a.last():a.first();a=a.delete(g.key),i=i.delete(g.key),s.track({type:1,doc:g})}return{eu:a,ru:s,Ds:l,mutatedKeys:i}}iu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,r){const i=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const a=e.ru.pa();a.sort((g,_)=>function(A,S){const x=R=>{switch(R){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return K(20277,{At:R})}};return x(A)-x(S)}(g.type,_.type)||this.Xa(g.doc,_.doc)),this.su(s),r=r!=null&&r;const l=t&&!r?this.ou():[],u=this.Za.size===0&&this.current&&!r?1:0,d=u!==this.Ya;return this.Ya=u,a.length!==0||d?{snapshot:new bs(this.query,e.eu,i,a,e.mutatedKeys,u===0,d,!1,!!s&&s.resumeToken.approximateByteSize()>0),_u:l}:{_u:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new Ju,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach(t=>this.Ha=this.Ha.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ha=this.Ha.delete(t)),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=oe(),this.eu.forEach(s=>{this.au(s.key)&&(this.Za=this.Za.add(s.key))});const t=[];return e.forEach(s=>{this.Za.has(s)||t.push(new Nf(s))}),this.Za.forEach(s=>{e.has(s)||t.push(new Cf(s))}),t}uu(e){this.Ha=e.qs,this.Za=oe();const t=this.nu(e.documents);return this.applyChanges(t,!0)}cu(){return bs.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const gl="SyncEngine";class VE{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class ME{constructor(e){this.key=e,this.lu=!1}}class jE{constructor(e,t,s,r,i,a){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.hu={},this.Pu=new ts(l=>Qd(l),eo),this.Tu=new Map,this.Iu=new Set,this.du=new Re(z.comparator),this.Eu=new Map,this.Au=new il,this.Ru={},this.Vu=new Map,this.mu=Is.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function LE(n,e,t=!0){const s=jf(n);let r;const i=s.Pu.get(e);return i?(s.sharedClientState.addLocalQueryTarget(i.targetId),r=i.view.cu()):r=await kf(s,e,t,!0),r}async function FE(n,e){const t=jf(n);await kf(t,e,!0,!1)}async function kf(n,e,t,s){const r=await nE(n.localStore,Ot(e)),i=r.targetId,a=n.sharedClientState.addLocalQueryTarget(i,t);let l;return s&&(l=await UE(n,e,i,a==="current",r.resumeToken)),n.isPrimaryClient&&t&&bf(n.remoteStore,r),l}async function UE(n,e,t,s,r){n.gu=(_,E,A)=>async function(x,R,V,M){let C=R.view.nu(V);C.Ds&&(C=await Hu(x.localStore,R.query,!1).then(({documents:I})=>R.view.nu(I,C)));const j=M&&M.targetChanges.get(R.targetId),L=M&&M.targetMismatches.get(R.targetId)!=null,F=R.view.applyChanges(C,x.isPrimaryClient,j,L);return th(x,R.targetId,F._u),F.snapshot}(n,_,E,A);const i=await Hu(n.localStore,e,!0),a=new OE(e,i.qs),l=a.nu(i.documents),u=Ar.createSynthesizedTargetChangeForCurrentChange(t,s&&n.onlineState!=="Offline",r),d=a.applyChanges(l,n.isPrimaryClient,u);th(n,t,d._u);const g=new VE(e,t,a);return n.Pu.set(e,g),n.Tu.has(t)?n.Tu.get(t).push(e):n.Tu.set(t,[e]),d.snapshot}async function BE(n,e,t){const s=X(n),r=s.Pu.get(e),i=s.Tu.get(r.targetId);if(i.length>1)return s.Tu.set(r.targetId,i.filter(a=>!eo(a,e))),void s.Pu.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(r.targetId),s.sharedClientState.isActiveQueryTarget(r.targetId)||await wa(s.localStore,r.targetId,!1).then(()=>{s.sharedClientState.clearQueryState(r.targetId),t&&cl(s.remoteStore,r.targetId),Aa(s,r.targetId)}).catch(Cs)):(Aa(s,r.targetId),await wa(s.localStore,r.targetId,!0))}async function $E(n,e){const t=X(n),s=t.Pu.get(e),r=t.Tu.get(s.targetId);t.isPrimaryClient&&r.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),cl(t.remoteStore,s.targetId))}async function qE(n,e,t){const s=YE(n);try{const r=await function(a,l){const u=X(a),d=Ae.now(),g=l.reduce((A,S)=>A.add(S.key),oe());let _,E;return u.persistence.runTransaction("Locally write mutations","readwrite",A=>{let S=tn(),x=oe();return u.Os.getEntries(A,g).next(R=>{S=R,S.forEach((V,M)=>{M.isValidDocument()||(x=x.add(V))})}).next(()=>u.localDocuments.getOverlayedDocuments(A,S)).next(R=>{_=R;const V=[];for(const M of l){const C=n0(M,_.get(M.key).overlayedDocument);C!=null&&V.push(new Dn(M.key,C,Bd(C.value.mapValue),bt.exists(!0)))}return u.mutationQueue.addMutationBatch(A,d,V,l)}).next(R=>{E=R;const V=R.applyToLocalDocumentSet(_,x);return u.documentOverlayCache.saveOverlays(A,R.batchId,V)})}).then(()=>({batchId:E.batchId,changes:Xd(_)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),function(a,l,u){let d=a.Ru[a.currentUser.toKey()];d||(d=new Re(ne)),d=d.insert(l,u),a.Ru[a.currentUser.toKey()]=d}(s,r.batchId,t),await Rr(s,r.changes),await ao(s.remoteStore)}catch(r){const i=pl(r,"Failed to persist write");t.reject(i)}}async function Df(n,e){const t=X(n);try{const s=await Z0(t.localStore,e);e.targetChanges.forEach((r,i)=>{const a=t.Eu.get(i);a&&(me(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1,22616),r.addedDocuments.size>0?a.lu=!0:r.modifiedDocuments.size>0?me(a.lu,14607):r.removedDocuments.size>0&&(me(a.lu,42227),a.lu=!1))}),await Rr(t,s,e)}catch(s){await Cs(s)}}function eh(n,e,t){const s=X(n);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const r=[];s.Pu.forEach((i,a)=>{const l=a.view.va(e);l.snapshot&&r.push(l.snapshot)}),function(a,l){const u=X(a);u.onlineState=l;let d=!1;u.queries.forEach((g,_)=>{for(const E of _.wa)E.va(l)&&(d=!0)}),d&&ml(u)}(s.eventManager,e),r.length&&s.hu.J_(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function zE(n,e,t){const s=X(n);s.sharedClientState.updateQueryState(e,"rejected",t);const r=s.Eu.get(e),i=r&&r.key;if(i){let a=new Re(z.comparator);a=a.insert(i,tt.newNoDocument(i,Y.min()));const l=oe().add(i),u=new ro(Y.min(),new Map,new Re(ne),a,l);await Df(s,u),s.du=s.du.remove(i),s.Eu.delete(e),_l(s)}else await wa(s.localStore,e,!1).then(()=>Aa(s,e,t)).catch(Cs)}async function HE(n,e){const t=X(n),s=e.batch.batchId;try{const r=await X0(t.localStore,e);Vf(t,s,null),Of(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await Rr(t,r)}catch(r){await Cs(r)}}async function WE(n,e,t){const s=X(n);try{const r=await function(a,l){const u=X(a);return u.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let g;return u.mutationQueue.lookupMutationBatch(d,l).next(_=>(me(_!==null,37113),g=_.keys(),u.mutationQueue.removeMutationBatch(d,_))).next(()=>u.mutationQueue.performConsistencyCheck(d)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(d,g,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,g)).next(()=>u.localDocuments.getDocuments(d,g))})}(s.localStore,e);Vf(s,e,t),Of(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await Rr(s,r)}catch(r){await Cs(r)}}function Of(n,e){(n.Vu.get(e)||[]).forEach(t=>{t.resolve()}),n.Vu.delete(e)}function Vf(n,e,t){const s=X(n);let r=s.Ru[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(t?i.reject(t):i.resolve(),r=r.remove(e)),s.Ru[s.currentUser.toKey()]=r}}function Aa(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const s of n.Tu.get(e))n.Pu.delete(s),t&&n.hu.pu(s,t);n.Tu.delete(e),n.isPrimaryClient&&n.Au.zr(e).forEach(s=>{n.Au.containsKey(s)||Mf(n,s)})}function Mf(n,e){n.Iu.delete(e.path.canonicalString());const t=n.du.get(e);t!==null&&(cl(n.remoteStore,t),n.du=n.du.remove(e),n.Eu.delete(t),_l(n))}function th(n,e,t){for(const s of t)s instanceof Cf?(n.Au.addReference(s.key,e),GE(n,s)):s instanceof Nf?(q(gl,"Document no longer in limbo: "+s.key),n.Au.removeReference(s.key,e),n.Au.containsKey(s.key)||Mf(n,s.key)):K(19791,{yu:s})}function GE(n,e){const t=e.key,s=t.path.canonicalString();n.du.get(t)||n.Iu.has(s)||(q(gl,"New document in limbo: "+t),n.Iu.add(s),_l(n))}function _l(n){for(;n.Iu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const e=n.Iu.values().next().value;n.Iu.delete(e);const t=new z(we.fromString(e)),s=n.mu.next();n.Eu.set(s,new ME(t)),n.du=n.du.insert(t,s),bf(n.remoteStore,new gn(Ot(Za(t.path)),s,"TargetPurposeLimboResolution",Ji.ue))}}async function Rr(n,e,t){const s=X(n),r=[],i=[],a=[];s.Pu.isEmpty()||(s.Pu.forEach((l,u)=>{a.push(s.gu(u,e,t).then(d=>{var g;if((d||t)&&s.isPrimaryClient){const _=d?!d.fromCache:(g=t==null?void 0:t.targetChanges.get(u.targetId))===null||g===void 0?void 0:g.current;s.sharedClientState.updateQueryState(u.targetId,_?"current":"not-current")}if(d){r.push(d);const _=al.Es(u.targetId,d);i.push(_)}}))}),await Promise.all(a),s.hu.J_(r),await async function(u,d){const g=X(u);try{await g.persistence.runTransaction("notifyLocalViewChanges","readwrite",_=>D.forEach(d,E=>D.forEach(E.Is,A=>g.persistence.referenceDelegate.addReference(_,E.targetId,A)).next(()=>D.forEach(E.ds,A=>g.persistence.referenceDelegate.removeReference(_,E.targetId,A)))))}catch(_){if(!Ns(_))throw _;q(ll,"Failed to update sequence numbers: "+_)}for(const _ of d){const E=_.targetId;if(!_.fromCache){const A=g.Fs.get(E),S=A.snapshotVersion,x=A.withLastLimboFreeSnapshotVersion(S);g.Fs=g.Fs.insert(E,x)}}}(s.localStore,i))}async function KE(n,e){const t=X(n);if(!t.currentUser.isEqual(e)){q(gl,"User change. New user:",e.toKey());const s=await Ef(t.localStore,e);t.currentUser=e,function(i,a){i.Vu.forEach(l=>{l.forEach(u=>{u.reject(new $(k.CANCELLED,a))})}),i.Vu.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Rr(t,s.Bs)}}function QE(n,e){const t=X(n),s=t.Eu.get(e);if(s&&s.lu)return oe().add(s.key);{let r=oe();const i=t.Tu.get(e);if(!i)return r;for(const a of i){const l=t.Pu.get(a);r=r.unionWith(l.view.tu)}return r}}function jf(n){const e=X(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Df.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=QE.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=zE.bind(null,e),e.hu.J_=NE.bind(null,e.eventManager),e.hu.pu=kE.bind(null,e.eventManager),e}function YE(n){const e=X(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=HE.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=WE.bind(null,e),e}class Li{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=io(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,t){return null}Fu(e,t){return null}vu(e){return J0(this.persistence,new K0,e.initialUser,this.serializer)}Du(e){return new vf(ol.Vi,this.serializer)}bu(e){return new rE}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Li.provider={build:()=>new Li};class JE extends Li{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,t){me(this.persistence.referenceDelegate instanceof Mi,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new D0(s,e.asyncQueue,t)}Du(e){const t=this.cacheSizeBytes!==void 0?at.withCacheSize(this.cacheSizeBytes):at.DEFAULT;return new vf(s=>Mi.Vi(s,t),this.serializer)}}class xa{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>eh(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=KE.bind(null,this.syncEngine),await xE(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new SE}()}createDatastore(e){const t=io(e.databaseInfo.databaseId),s=function(i){return new cE(i)}(e.databaseInfo);return function(i,a,l,u){return new fE(i,a,l,u)}(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return function(s,r,i,a,l){return new mE(s,r,i,a,l)}(this.localStore,this.datastore,e.asyncQueue,t=>eh(this.syncEngine,t,0),function(){return Ku.C()?new Ku:new iE}())}createSyncEngine(e,t){return function(r,i,a,l,u,d,g){const _=new jE(r,i,a,l,u,d);return g&&(_.fu=!0),_}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(r){const i=X(r);q(Qn,"RemoteStore shutting down."),i.Ia.add(5),await xr(i),i.Ea.shutdown(),i.Aa.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}xa.provider={build:()=>new xa};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XE{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):en("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cn="FirestoreClient";class ZE{constructor(e,t,s,r,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=r,this.user=et.UNAUTHENTICATED,this.clientId=Ga.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(s,async a=>{q(Cn,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(s,a=>(q(Cn,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new qn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=pl(t,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function Ko(n,e){n.asyncQueue.verifyOperationInProgress(),q(Cn,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let s=t.initialUser;n.setCredentialChangeListener(async r=>{s.isEqual(r)||(await Ef(e.localStore,r),s=r)}),e.persistence.setDatabaseDeletedListener(()=>{bn("Terminating Firestore due to IndexedDb database deletion"),n.terminate().then(()=>{q("Terminating Firestore due to IndexedDb database deletion completed successfully")}).catch(r=>{bn("Terminating Firestore due to IndexedDb database deletion failed",r)})}),n._offlineComponents=e}async function nh(n,e){n.asyncQueue.verifyOperationInProgress();const t=await eT(n);q(Cn,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(s=>Yu(e.remoteStore,s)),n.setAppCheckTokenChangeListener((s,r)=>Yu(e.remoteStore,r)),n._onlineComponents=e}async function eT(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){q(Cn,"Using user provided OfflineComponentProvider");try{await Ko(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(r){return r.name==="FirebaseError"?r.code===k.FAILED_PRECONDITION||r.code===k.UNIMPLEMENTED:!(typeof DOMException<"u"&&r instanceof DOMException)||r.code===22||r.code===20||r.code===11}(t))throw t;bn("Error using user provided cache. Falling back to memory cache: "+t),await Ko(n,new Li)}}else q(Cn,"Using default OfflineComponentProvider"),await Ko(n,new JE(void 0));return n._offlineComponents}async function Lf(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(q(Cn,"Using user provided OnlineComponentProvider"),await nh(n,n._uninitializedComponentsProvider._online)):(q(Cn,"Using default OnlineComponentProvider"),await nh(n,new xa))),n._onlineComponents}function tT(n){return Lf(n).then(e=>e.syncEngine)}async function sh(n){const e=await Lf(n),t=e.eventManager;return t.onListen=LE.bind(null,e.syncEngine),t.onUnlisten=BE.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=FE.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=$E.bind(null,e.syncEngine),t}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ff(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rh=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uf="firestore.googleapis.com",ih=!0;class oh{constructor(e){var t,s;if(e.host===void 0){if(e.ssl!==void 0)throw new $(k.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Uf,this.ssl=ih}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:ih;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=yf;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<N0)throw new $(k.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}mv("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Ff((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new $(k.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new $(k.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new $(k.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(s,r){return s.timeoutSeconds===r.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class lo{constructor(e,t,s,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new oh({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new $(k.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new $(k.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new oh(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new ov;switch(s.type){case"firstParty":return new uv(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new $(k.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const s=rh.get(t);s&&(q("ComponentProvider","Removing Datastore"),rh.delete(t),s.terminate())}(this),Promise.resolve()}}function nT(n,e,t,s={}){var r;n=Tn(n,lo);const i=Xn(e),a=n._getSettings(),l=Object.assign(Object.assign({},a),{emulatorOptions:n._getEmulatorOptions()}),u=`${e}:${t}`;i&&(ka(`https://${u}`),Da("Firestore",!0)),a.host!==Uf&&a.host!==u&&bn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const d=Object.assign(Object.assign({},a),{host:u,ssl:i,emulatorOptions:s});if(!Hn(d,l)&&(n._setSettings(d),s.mockUserToken)){let g,_;if(typeof s.mockUserToken=="string")g=s.mockUserToken,_=et.MOCK_USER;else{g=Vh(s.mockUserToken,(r=n._app)===null||r===void 0?void 0:r.options.projectId);const E=s.mockUserToken.sub||s.mockUserToken.user_id;if(!E)throw new $(k.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");_=new et(E)}n._authCredentials=new av(new Sd(g,_))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new On(this.firestore,e,this._query)}}class Le{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new wn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Le(this.firestore,e,this._key)}toJSON(){return{type:Le._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,s){if(Ir(t,Le._jsonSchema))return new Le(e,s||null,new z(we.fromString(t.referencePath)))}}Le._jsonSchemaVersion="firestore/documentReference/1.0",Le._jsonSchema={type:je("string",Le._jsonSchemaVersion),referencePath:je("string")};class wn extends On{constructor(e,t,s){super(e,t,Za(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Le(this.firestore,null,new z(e))}withConverter(e){return new wn(this.firestore,e,this._path)}}function yl(n,e,...t){if(n=ke(n),Cd("collection","path",e),n instanceof lo){const s=we.fromString(e,...t);return yu(s),new wn(n,null,s)}{if(!(n instanceof Le||n instanceof wn))throw new $(k.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(we.fromString(e,...t));return yu(s),new wn(n.firestore,null,s)}}function Sr(n,e,...t){if(n=ke(n),arguments.length===1&&(e=Ga.newId()),Cd("doc","path",e),n instanceof lo){const s=we.fromString(e,...t);return _u(s),new Le(n,null,new z(s))}{if(!(n instanceof Le||n instanceof wn))throw new $(k.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(we.fromString(e,...t));return _u(s),new Le(n.firestore,n instanceof wn?n.converter:null,new z(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ah="AsyncQueue";class lh{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new wf(this,"async_queue_retry"),this.oc=()=>{const s=Go();s&&q(ah,"Visibility state changed to "+s.visibilityState),this.F_.y_()},this._c=e;const t=Go();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const t=Go();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise(()=>{});const t=new qn;return this.uc(()=>this.Xu&&this.rc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Zu.push(e),this.cc()))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!Ns(e))throw e;q(ah,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_(()=>this.cc())}}uc(e){const t=this._c.then(()=>(this.nc=!0,e().catch(s=>{throw this.tc=s,this.nc=!1,en("INTERNAL UNHANDLED ERROR: ",ch(s)),s}).then(s=>(this.nc=!1,s))));return this._c=t,t}enqueueAfterDelay(e,t,s){this.ac(),this.sc.indexOf(e)>-1&&(t=0);const r=fl.createAndSchedule(this,e,t,s,i=>this.lc(i));return this.ec.push(r),r}ac(){this.tc&&K(47125,{hc:ch(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const t of this.ec)if(t.timerId===e)return!0;return!1}Ic(e){return this.Pc().then(()=>{this.ec.sort((t,s)=>t.targetTimeMs-s.targetTimeMs);for(const t of this.ec)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Pc()})}dc(e){this.sc.push(e)}lc(e){const t=this.ec.indexOf(e);this.ec.splice(t,1)}}function ch(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uh(n){return function(t,s){if(typeof t!="object"||t===null)return!1;const r=t;for(const i of s)if(i in r&&typeof r[i]=="function")return!0;return!1}(n,["next","error","complete"])}class As extends lo{constructor(e,t,s,r){super(e,t,s,r),this.type="firestore",this._queue=new lh,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new lh(e),this._firestoreClient=void 0,await e}}}function sT(n,e){const t=typeof n=="object"?n:Ma(),s=typeof n=="string"?n:Ci,r=Hi(t,"firestore").getImmediate({identifier:s});if(!r._initialized){const i=kh("firestore");i&&nT(r,...i)}return r}function Bf(n){if(n._terminated)throw new $(k.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||rT(n),n._firestoreClient}function rT(n){var e,t,s;const r=n._freezeSettings(),i=function(l,u,d,g){return new xv(l,u,d,g.host,g.ssl,g.experimentalForceLongPolling,g.experimentalAutoDetectLongPolling,Ff(g.experimentalLongPollingOptions),g.useFetchStreams,g.isUsingEmulator)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,r);n._componentsProvider||!((t=r.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((s=r.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(n._componentsProvider={_offline:r.localCache._offlineComponentProvider,_online:r.localCache._onlineComponentProvider}),n._firestoreClient=new ZE(n._authCredentials,n._appCheckCredentials,n._queue,i,n._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new vt(Qe.fromBase64String(e))}catch(t){throw new $(k.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new vt(Qe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:vt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Ir(e,vt._jsonSchema))return vt.fromBase64String(e.bytes)}}vt._jsonSchemaVersion="firestore/bytes/1.0",vt._jsonSchema={type:je("string",vt._jsonSchemaVersion),bytes:je("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class co{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new $(k.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ke(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uo{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new $(k.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new $(k.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return ne(this._lat,e._lat)||ne(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Mt._jsonSchemaVersion}}static fromJSON(e){if(Ir(e,Mt._jsonSchema))return new Mt(e.latitude,e.longitude)}}Mt._jsonSchemaVersion="firestore/geoPoint/1.0",Mt._jsonSchema={type:je("string",Mt._jsonSchemaVersion),latitude:je("number"),longitude:je("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(s,r){if(s.length!==r.length)return!1;for(let i=0;i<s.length;++i)if(s[i]!==r[i])return!1;return!0}(this._values,e._values)}toJSON(){return{type:jt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Ir(e,jt._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(t=>typeof t=="number"))return new jt(e.vectorValues);throw new $(k.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}jt._jsonSchemaVersion="firestore/vectorValue/1.0",jt._jsonSchema={type:je("string",jt._jsonSchemaVersion),vectorValues:je("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iT=/^__.*__$/;class oT{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new Dn(e,this.data,this.fieldMask,t,this.fieldTransforms):new br(e,this.data,t,this.fieldTransforms)}}class $f{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return new Dn(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function qf(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw K(40011,{Ec:n})}}class vl{constructor(e,t,s,r,i,a){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=r,i===void 0&&this.Ac(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new vl(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),r=this.Rc({path:s,mc:!1});return r.fc(e),r}gc(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),r=this.Rc({path:s,mc:!1});return r.Ac(),r}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return Fi(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(qf(this.Ec)&&iT.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class aT{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||io(e)}Dc(e,t,s,r=!1){return new vl({Ec:e,methodName:t,bc:s,path:Ke.emptyPath(),mc:!1,Sc:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function El(n){const e=n._freezeSettings(),t=io(n._databaseId);return new aT(n._databaseId,!!e.ignoreUndefinedProperties,t)}function lT(n,e,t,s,r,i={}){const a=n.Dc(i.merge||i.mergeFields?2:0,e,t,r);wl("Data must be an object, but it was:",a,s);const l=zf(s,a);let u,d;if(i.merge)u=new ft(a.fieldMask),d=a.fieldTransforms;else if(i.mergeFields){const g=[];for(const _ of i.mergeFields){const E=Ra(e,_,t);if(!a.contains(E))throw new $(k.INVALID_ARGUMENT,`Field '${E}' is specified in your field mask but missing from your input data.`);Wf(g,E)||g.push(E)}u=new ft(g),d=a.fieldTransforms.filter(_=>u.covers(_.field))}else u=null,d=a.fieldTransforms;return new oT(new lt(l),u,d)}class ho extends uo{_toFieldTransform(e){if(e.Ec!==2)throw e.Ec===1?e.wc(`${this._methodName}() can only appear at the top level of your update data`):e.wc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof ho}}class Tl extends uo{_toFieldTransform(e){return new Xv(e.path,new mr)}isEqual(e){return e instanceof Tl}}function cT(n,e,t,s){const r=n.Dc(1,e,t);wl("Data must be an object, but it was:",r,s);const i=[],a=lt.empty();kn(s,(u,d)=>{const g=Il(e,u,t);d=ke(d);const _=r.gc(g);if(d instanceof ho)i.push(g);else{const E=Pr(d,_);E!=null&&(i.push(g),a.set(g,E))}});const l=new ft(i);return new $f(a,l,r.fieldTransforms)}function uT(n,e,t,s,r,i){const a=n.Dc(1,e,t),l=[Ra(e,s,t)],u=[r];if(i.length%2!=0)throw new $(k.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let E=0;E<i.length;E+=2)l.push(Ra(e,i[E])),u.push(i[E+1]);const d=[],g=lt.empty();for(let E=l.length-1;E>=0;--E)if(!Wf(d,l[E])){const A=l[E];let S=u[E];S=ke(S);const x=a.gc(A);if(S instanceof ho)d.push(A);else{const R=Pr(S,x);R!=null&&(d.push(A),g.set(A,R))}}const _=new ft(d);return new $f(g,_,a.fieldTransforms)}function hT(n,e,t,s=!1){return Pr(t,n.Dc(s?4:3,e))}function Pr(n,e){if(Hf(n=ke(n)))return wl("Unsupported field value:",e,n),zf(n,e);if(n instanceof uo)return function(s,r){if(!qf(r.Ec))throw r.wc(`${s._methodName}() can only be used with update() and set()`);if(!r.path)throw r.wc(`${s._methodName}() is not currently supported inside arrays`);const i=s._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return function(s,r){const i=[];let a=0;for(const l of s){let u=Pr(l,r.yc(a));u==null&&(u={nullValue:"NULL_VALUE"}),i.push(u),a++}return{arrayValue:{values:i}}}(n,e)}return function(s,r){if((s=ke(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return Qv(r.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const i=Ae.fromDate(s);return{timestampValue:Vi(r.serializer,i)}}if(s instanceof Ae){const i=new Ae(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:Vi(r.serializer,i)}}if(s instanceof Mt)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof vt)return{bytesValue:hf(r.serializer,s._byteString)};if(s instanceof Le){const i=r.databaseId,a=s.firestore._databaseId;if(!a.isEqual(i))throw r.wc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:rl(s.firestore._databaseId||r.databaseId,s._key.path)}}if(s instanceof jt)return function(a,l){return{mapValue:{fields:{[Fd]:{stringValue:Ud},[Ni]:{arrayValue:{values:a.toArray().map(d=>{if(typeof d!="number")throw l.wc("VectorValues must only contain numeric values.");return el(l.serializer,d)})}}}}}}(s,r);throw r.wc(`Unsupported field value: ${Yi(s)}`)}(n,e)}function zf(n,e){const t={};return Dd(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):kn(n,(s,r)=>{const i=Pr(r,e.Vc(s));i!=null&&(t[s]=i)}),{mapValue:{fields:t}}}function Hf(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Ae||n instanceof Mt||n instanceof vt||n instanceof Le||n instanceof uo||n instanceof jt)}function wl(n,e,t){if(!Hf(t)||!Nd(t)){const s=Yi(t);throw s==="an object"?e.wc(n+" a custom object"):e.wc(n+" "+s)}}function Ra(n,e,t){if((e=ke(e))instanceof co)return e._internalPath;if(typeof e=="string")return Il(n,e);throw Fi("Field path arguments must be of type string or ",n,!1,void 0,t)}const dT=new RegExp("[~\\*/\\[\\]]");function Il(n,e,t){if(e.search(dT)>=0)throw Fi(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new co(...e.split("."))._internalPath}catch{throw Fi(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Fi(n,e,t,s,r){const i=s&&!s.isEmpty(),a=r!==void 0;let l=`Function ${e}() called with invalid data`;t&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(i||a)&&(u+=" (found",i&&(u+=` in field ${s}`),a&&(u+=` in document ${r}`),u+=")"),new $(k.INVALID_ARGUMENT,l+n+u)}function Wf(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gf{constructor(e,t,s,r,i){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Le(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new fT(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(fo("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class fT extends Gf{data(){return super.data()}}function fo(n,e){return typeof e=="string"?Il(n,e):e instanceof co?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pT(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new $(k.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class bl{}class Al extends bl{}function Cr(n,e,...t){let s=[];e instanceof bl&&s.push(e),s=s.concat(t),function(i){const a=i.filter(u=>u instanceof Rl).length,l=i.filter(u=>u instanceof po).length;if(a>1||a>0&&l>0)throw new $(k.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const r of s)n=r._apply(n);return n}class po extends Al{constructor(e,t,s){super(),this._field=e,this._op=t,this._value=s,this.type="where"}static _create(e,t,s){return new po(e,t,s)}_apply(e){const t=this._parse(e);return Qf(e._query,t),new On(e.firestore,e.converter,_a(e._query,t))}_parse(e){const t=El(e.firestore);return function(i,a,l,u,d,g,_){let E;if(d.isKeyField()){if(g==="array-contains"||g==="array-contains-any")throw new $(k.INVALID_ARGUMENT,`Invalid Query. You can't perform '${g}' queries on documentId().`);if(g==="in"||g==="not-in"){dh(_,g);const S=[];for(const x of _)S.push(hh(u,i,x));E={arrayValue:{values:S}}}else E=hh(u,i,_)}else g!=="in"&&g!=="not-in"&&g!=="array-contains-any"||dh(_,g),E=hT(l,a,_,g==="in"||g==="not-in");return Me.create(d,g,E)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function xl(n,e,t){const s=e,r=fo("where",n);return po._create(r,s,t)}class Rl extends bl{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Rl(e,t)}_parse(e){const t=this._queryConstraints.map(s=>s._parse(e)).filter(s=>s.getFilters().length>0);return t.length===1?t[0]:Rt.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(r,i){let a=r;const l=i.getFlattenedFilters();for(const u of l)Qf(a,u),a=_a(a,u)}(e._query,t),new On(e.firestore,e.converter,_a(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Sl extends Al{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new Sl(e,t)}_apply(e){const t=function(r,i,a){if(r.startAt!==null)throw new $(k.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new $(k.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new pr(i,a)}(e._query,this._field,this._direction);return new On(e.firestore,e.converter,function(r,i){const a=r.explicitOrderBy.concat([i]);return new ks(r.path,r.collectionGroup,a,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)}(e._query,t))}}function Pl(n,e="asc"){const t=e,s=fo("orderBy",n);return Sl._create(s,t)}class Cl extends Al{constructor(e,t,s){super(),this.type=e,this._limit=t,this._limitType=s}static _create(e,t,s){return new Cl(e,t,s)}_apply(e){return new On(e.firestore,e.converter,Di(e._query,this._limit,this._limitType))}}function Kf(n){return Cl._create("limit",n,"F")}function hh(n,e,t){if(typeof(t=ke(t))=="string"){if(t==="")throw new $(k.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Kd(e)&&t.indexOf("/")!==-1)throw new $(k.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const s=e.path.child(we.fromString(t));if(!z.isDocumentKey(s))throw new $(k.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return xu(n,new z(s))}if(t instanceof Le)return xu(n,t._key);throw new $(k.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Yi(t)}.`)}function dh(n,e){if(!Array.isArray(n)||n.length===0)throw new $(k.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Qf(n,e){const t=function(r,i){for(const a of r)for(const l of a.getFlattenedFilters())if(i.indexOf(l.op)>=0)return l.op;return null}(n.filters,function(r){switch(r){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new $(k.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new $(k.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class mT{convertValue(e,t="none"){switch(Sn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ne(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Rn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw K(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return kn(e,(r,i)=>{s[r]=this.convertValue(i,t)}),s}convertVectorValue(e){var t,s,r;const i=(r=(s=(t=e.fields)===null||t===void 0?void 0:t[Ni].arrayValue)===null||s===void 0?void 0:s.values)===null||r===void 0?void 0:r.map(a=>Ne(a.doubleValue));return new jt(i)}convertGeoPoint(e){return new Mt(Ne(e.latitude),Ne(e.longitude))}convertArray(e,t){return(e.values||[]).map(s=>this.convertValue(s,t))}convertServerTimestamp(e,t){switch(t){case"previous":const s=Zi(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(hr(e));default:return null}}convertTimestamp(e){const t=xn(e);return new Ae(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=we.fromString(e);me(_f(s),9688,{name:e});const r=new dr(s.get(1),s.get(3)),i=new z(s.popFirst(5));return r.isEqual(t)||en(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gT(n,e,t){let s;return s=n?n.toFirestore(e):e,s}class Zs{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class zn extends Gf{constructor(e,t,s,r,i,a){super(e,t,s,r,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new yi(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(fo("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new $(k.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=zn._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}zn._jsonSchemaVersion="firestore/documentSnapshot/1.0",zn._jsonSchema={type:je("string",zn._jsonSchemaVersion),bundleSource:je("string","DocumentSnapshot"),bundleName:je("string"),bundle:je("string")};class yi extends zn{data(e={}){return super.data(e)}}class _s{constructor(e,t,s,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new Zs(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(s=>{e.call(t,new yi(this._firestore,this._userDataWriter,s.key,s,new Zs(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new $(k.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let a=0;return r._snapshot.docChanges.map(l=>{const u=new yi(r._firestore,r._userDataWriter,l.doc.key,l.doc,new Zs(r._snapshot.mutatedKeys.has(l.doc.key),r._snapshot.fromCache),r.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:a++}})}{let a=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const u=new yi(r._firestore,r._userDataWriter,l.doc.key,l.doc,new Zs(r._snapshot.mutatedKeys.has(l.doc.key),r._snapshot.fromCache),r.query.converter);let d=-1,g=-1;return l.type!==0&&(d=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),g=a.indexOf(l.doc.key)),{type:_T(l.type),doc:u,oldIndex:d,newIndex:g}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new $(k.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=_s._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Ga.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],s=[],r=[];return this.docs.forEach(i=>{i._document!==null&&(t.push(i._document),s.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),r.push(i.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function _T(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return K(61501,{type:n})}}_s._jsonSchemaVersion="firestore/querySnapshot/1.0",_s._jsonSchema={type:je("string",_s._jsonSchemaVersion),bundleSource:je("string","QuerySnapshot"),bundleName:je("string"),bundle:je("string")};class Yf extends mT{constructor(e){super(),this.firestore=e}convertBytes(e){return new vt(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Le(this.firestore,null,t)}}function Jf(n,e,t,...s){n=Tn(n,Le);const r=Tn(n.firestore,As),i=El(r);let a;return a=typeof(e=ke(e))=="string"||e instanceof co?uT(i,"updateDoc",n._key,e,t,s):cT(i,"updateDoc",n._key,e),kl(r,[a.toMutation(n._key,bt.exists(!0))])}function Xf(n){return kl(Tn(n.firestore,As),[new tl(n._key,bt.none())])}function Nl(n,e){const t=Tn(n.firestore,As),s=Sr(n),r=gT(n.converter,e);return kl(t,[lT(El(n.firestore),"addDoc",s._key,r,n.converter!==null,{}).toMutation(s._key,bt.exists(!1))]).then(()=>s)}function Nr(n,...e){var t,s,r;n=ke(n);let i={includeMetadataChanges:!1,source:"default"},a=0;typeof e[a]!="object"||uh(e[a])||(i=e[a++]);const l={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(uh(e[a])){const _=e[a];e[a]=(t=_.next)===null||t===void 0?void 0:t.bind(_),e[a+1]=(s=_.error)===null||s===void 0?void 0:s.bind(_),e[a+2]=(r=_.complete)===null||r===void 0?void 0:r.bind(_)}let u,d,g;if(n instanceof Le)d=Tn(n.firestore,As),g=Za(n._key.path),u={next:_=>{e[a]&&e[a](yT(d,n,_))},error:e[a+1],complete:e[a+2]};else{const _=Tn(n,On);d=Tn(_.firestore,As),g=_._query;const E=new Yf(d);u={next:A=>{e[a]&&e[a](new _s(d,E,_,A))},error:e[a+1],complete:e[a+2]},pT(n._query)}return function(E,A,S,x){const R=new XE(x),V=new DE(A,R,S);return E.asyncQueue.enqueueAndForget(async()=>PE(await sh(E),V)),()=>{R.Ou(),E.asyncQueue.enqueueAndForget(async()=>CE(await sh(E),V))}}(Bf(d),g,l,u)}function kl(n,e){return function(s,r){const i=new qn;return s.asyncQueue.enqueueAndForget(async()=>qE(await tT(s),r,i)),i.promise}(Bf(n),e)}function yT(n,e,t){const s=t.docs.get(e._key),r=new Yf(n);return new zn(n,r,e._key,s,new Zs(t.hasPendingWrites,t.fromCache),e.converter)}function xs(){return new Tl("serverTimestamp")}(function(e,t=!0){(function(r){Ps=r})(Zn),Wn(new In("firestore",(s,{instanceIdentifier:r,options:i})=>{const a=s.getProvider("app").getImmediate(),l=new As(new lv(s.getProvider("auth-internal")),new hv(a,s.getProvider("app-check-internal")),function(d,g){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new $(k.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new dr(d.options.projectId,g)}(a,r),a);return i=Object.assign({useFetchStreams:t},i),l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),Nt(du,fu,e),Nt(du,fu,"esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zf="firebasestorage.googleapis.com",vT="storageBucket",ET=2*60*1e3,TT=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t extends Bt{constructor(e,t,s=0){super(Qo(e),`Firebase Storage: ${t} (${Qo(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,$t.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Qo(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Ut;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Ut||(Ut={}));function Qo(n){return"storage/"+n}function wT(){const n="An unknown error occurred, please check the error payload for server response.";return new $t(Ut.UNKNOWN,n)}function IT(){return new $t(Ut.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function bT(){return new $t(Ut.CANCELED,"User canceled the upload/download.")}function AT(n){return new $t(Ut.INVALID_URL,"Invalid URL '"+n+"'.")}function xT(n){return new $t(Ut.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function fh(n){return new $t(Ut.INVALID_ARGUMENT,n)}function ep(){return new $t(Ut.APP_DELETED,"The Firebase app was deleted.")}function RT(n){return new $t(Ut.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let s;try{s=It.makeFromUrl(e,t)}catch{return new It(e,"")}if(s.path==="")return s;throw xT(e)}static makeFromUrl(e,t){let s=null;const r="([A-Za-z0-9.\\-_]+)";function i(j){j.path.charAt(j.path.length-1)==="/"&&(j.path_=j.path_.slice(0,-1))}const a="(/(.*))?$",l=new RegExp("^gs://"+r+a,"i"),u={bucket:1,path:3};function d(j){j.path_=decodeURIComponent(j.path)}const g="v[A-Za-z0-9_]+",_=t.replace(/[.]/g,"\\."),E="(/([^?#]*).*)?$",A=new RegExp(`^https?://${_}/${g}/b/${r}/o${E}`,"i"),S={bucket:1,path:3},x=t===Zf?"(?:storage.googleapis.com|storage.cloud.google.com)":t,R="([^?#]*)",V=new RegExp(`^https?://${x}/${r}/${R}`,"i"),C=[{regex:l,indices:u,postModify:i},{regex:A,indices:S,postModify:d},{regex:V,indices:{bucket:1,path:2},postModify:d}];for(let j=0;j<C.length;j++){const L=C[j],F=L.regex.exec(e);if(F){const I=F[L.indices.bucket];let p=F[L.indices.path];p||(p=""),s=new It(I,p),L.postModify(s);break}}if(s==null)throw AT(e);return s}}class ST{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PT(n,e,t){let s=1,r=null,i=null,a=!1,l=0;function u(){return l===2}let d=!1;function g(...R){d||(d=!0,e.apply(null,R))}function _(R){r=setTimeout(()=>{r=null,n(A,u())},R)}function E(){i&&clearTimeout(i)}function A(R,...V){if(d){E();return}if(R){E(),g.call(null,R,...V);return}if(u()||a){E(),g.call(null,R,...V);return}s<64&&(s*=2);let C;l===1?(l=2,C=0):C=(s+Math.random())*1e3,_(C)}let S=!1;function x(R){S||(S=!0,E(),!d&&(r!==null?(R||(l=2),clearTimeout(r),_(0)):R||(l=1)))}return _(0),i=setTimeout(()=>{a=!0,x(!0)},t),x}function CT(n){n(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NT(n){return n!==void 0}function ph(n,e,t,s){if(s<e)throw fh(`Invalid value for '${n}'. Expected ${e} or greater.`);if(s>t)throw fh(`Invalid value for '${n}'. Expected ${t} or less.`)}function kT(n){const e=encodeURIComponent;let t="?";for(const s in n)if(n.hasOwnProperty(s)){const r=e(s)+"="+e(n[s]);t=t+r+"&"}return t=t.slice(0,-1),t}var Ui;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(Ui||(Ui={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DT(n,e){const t=n>=500&&n<600,r=[408,429].indexOf(n)!==-1,i=e.indexOf(n)!==-1;return t||r||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OT{constructor(e,t,s,r,i,a,l,u,d,g,_,E=!0,A=!1){this.url_=e,this.method_=t,this.headers_=s,this.body_=r,this.successCodes_=i,this.additionalRetryCodes_=a,this.callback_=l,this.errorCallback_=u,this.timeout_=d,this.progressCallback_=g,this.connectionFactory_=_,this.retry=E,this.isUsingEmulator=A,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((S,x)=>{this.resolve_=S,this.reject_=x,this.start_()})}start_(){const e=(s,r)=>{if(r){s(!1,new ri(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const a=l=>{const u=l.loaded,d=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,d)};this.progressCallback_!==null&&i.addUploadProgressListener(a),i.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(a),this.pendingConnection_=null;const l=i.getErrorCode()===Ui.NO_ERROR,u=i.getStatus();if(!l||DT(u,this.additionalRetryCodes_)&&this.retry){const g=i.getErrorCode()===Ui.ABORT;s(!1,new ri(!1,null,g));return}const d=this.successCodes_.indexOf(u)!==-1;s(!0,new ri(d,i))})},t=(s,r)=>{const i=this.resolve_,a=this.reject_,l=r.connection;if(r.wasSuccessCode)try{const u=this.callback_(l,l.getResponse());NT(u)?i(u):i()}catch(u){a(u)}else if(l!==null){const u=wT();u.serverResponse=l.getErrorText(),this.errorCallback_?a(this.errorCallback_(l,u)):a(u)}else if(r.canceled){const u=this.appDelete_?ep():bT();a(u)}else{const u=IT();a(u)}};this.canceled_?t(!1,new ri(!1,null,!0)):this.backoffId_=PT(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&CT(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class ri{constructor(e,t,s){this.wasSuccessCode=e,this.connection=t,this.canceled=!!s}}function VT(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function MT(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function jT(n,e){e&&(n["X-Firebase-GMPID"]=e)}function LT(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function FT(n,e,t,s,r,i,a=!0,l=!1){const u=kT(n.urlParams),d=n.url+u,g=Object.assign({},n.headers);return jT(g,e),VT(g,t),MT(g,i),LT(g,s),new OT(d,n.method,g,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,r,a,l)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UT(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function BT(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bi{constructor(e,t){this._service=e,t instanceof It?this._location=t:this._location=It.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new Bi(e,t)}get root(){const e=new It(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return BT(this._location.path)}get storage(){return this._service}get parent(){const e=UT(this._location.path);if(e===null)return null;const t=new It(this._location.bucket,e);return new Bi(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw RT(e)}}function mh(n,e){const t=e==null?void 0:e[vT];return t==null?null:It.makeFromBucketSpec(t,n)}function $T(n,e,t,s={}){n.host=`${e}:${t}`;const r=Xn(e);r&&(ka(`https://${n.host}/b`),Da("Storage",!0)),n._isUsingEmulator=!0,n._protocol=r?"https":"http";const{mockUserToken:i}=s;i&&(n._overrideAuthToken=typeof i=="string"?i:Vh(i,n.app.options.projectId))}class qT{constructor(e,t,s,r,i,a=!1){this.app=e,this._authProvider=t,this._appCheckProvider=s,this._url=r,this._firebaseVersion=i,this._isUsingEmulator=a,this._bucket=null,this._host=Zf,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=ET,this._maxUploadRetryTime=TT,this._requests=new Set,r!=null?this._bucket=It.makeFromBucketSpec(r,this._host):this._bucket=mh(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=It.makeFromBucketSpec(this._url,e):this._bucket=mh(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){ph("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){ph("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){if(yt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Bi(this,e)}_makeRequest(e,t,s,r,i=!0){if(this._deleted)return new ST(ep());{const a=FT(e,this._appId,s,r,t,this._firebaseVersion,i,this._isUsingEmulator);return this._requests.add(a),a.getPromise().then(()=>this._requests.delete(a),()=>this._requests.delete(a)),a}}async makeRequestWithTokens(e,t){const[s,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,s,r).getPromise()}}const gh="@firebase/storage",_h="0.13.14";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tp="storage";function zT(n=Ma(),e){n=ke(n);const s=Hi(n,tp).getImmediate({identifier:e}),r=kh("storage");return r&&HT(s,...r),s}function HT(n,e,t,s={}){$T(n,e,t,s)}function WT(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),s=n.getProvider("auth-internal"),r=n.getProvider("app-check-internal");return new qT(t,s,r,e,Zn)}function GT(){Wn(new In(tp,WT,"PUBLIC").setMultipleInstances(!0)),Nt(gh,_h,""),Nt(gh,_h,"esm2017")}GT();const Yo={BASE_URL:"/billing-system1/",DEV:!1,MODE:"production",PROD:!0,SSR:!1,VITE_APP_MODE:"production",VITE_FIREBASE_API_KEY:"AIzaSyATImZKj-kISPLYR68wDnmZPNsnItXdiZ4",VITE_FIREBASE_APP_ID:"1:225930121586:web:5356dc0465009441128deb",VITE_FIREBASE_AUTH_DOMAIN:"sri-raghavendra-mess-billing.firebaseapp.com",VITE_FIREBASE_MEASUREMENT_ID:"G-Z2ZSHZNH5H",VITE_FIREBASE_MESSAGING_SENDER_ID:"225930121586",VITE_FIREBASE_PROJECT_ID:"sri-raghavendra-mess-billing",VITE_FIREBASE_STORAGE_BUCKET:"sri-raghavendra-mess-billing.firebasestorage.app",VITE_OWNER_EMAIL:"sriraghavendramess28@gmail.com"};var Jo={};const Sa="hbs_app_mode",un=(n,e="")=>typeof import.meta<"u"&&Yo&&Yo[n]!==void 0?Yo[n]:typeof process<"u"&&Jo&&Jo[n]!==void 0?Jo[n]:e,Dl=()=>{if(typeof window<"u"&&window.location){const t=new URLSearchParams(window.location.search).get("mode");if(t==="demo"||t==="production")return typeof localStorage<"u"&&localStorage.setItem(Sa,t),t;if(typeof localStorage<"u"){const s=localStorage.getItem(Sa);if(s==="demo"||s==="production")return s}}const n=un("VITE_APP_MODE");return n==="production"?"production":"demo"},Fe=()=>Dl()==="demo",vi=n=>{n!=="demo"&&n!=="production"||(typeof localStorage<"u"&&localStorage.setItem(Sa,n),typeof window<"u"&&window.location&&window.location.reload())},KT={mode:Dl(),isDemo:Fe(),firebase:{apiKey:un("VITE_FIREBASE_API_KEY","AIzaSyATImZKj-kISPLYR68wDnmZPNsnItXdiZ4"),authDomain:un("VITE_FIREBASE_AUTH_DOMAIN","sri-raghavendra-mess-billing.firebaseapp.com"),projectId:un("VITE_FIREBASE_PROJECT_ID","sri-raghavendra-mess-billing"),storageBucket:un("VITE_FIREBASE_STORAGE_BUCKET","sri-raghavendra-mess-billing.firebasestorage.app"),messagingSenderId:un("VITE_FIREBASE_MESSAGING_SENDER_ID","225930121586"),appId:un("VITE_FIREBASE_APP_ID","1:225930121586:web:5356dc0465009441128deb"),measurementId:un("VITE_FIREBASE_MEASUREMENT_ID","G-Z2ZSHZNH5H")}};let ii=null,Yn=null,mo=null,QT=null;if(!Fe())try{ii=Bc().length===0?Lh(KT.firebase):Bc()[0],Yn=nv(ii),$_(Yn,dd).catch(n=>{console.warn("[Firebase] setPersistence error:",n)}),mo=sT(ii),QT=zT(ii)}catch(n){console.warn("[Firebase] Production initialization error:",n)}const go="hbs_demo_user",_o="hbs_login_time",Yt={owner:{id:"demo-owner",email:"owner@raghavendramess.demo",password:"demopassword",displayName:"Mess Owner / Admin",role:"owner",badge:"👑 Owner / Admin",description:"Full permissions: Menu, Billing, Expenses, Auditing, and Data Reset",permissions:["menu","update","orders","accounts","reset","delete_expense"]},cashier:{id:"demo-cashier",email:"cashier@raghavendramess.demo",password:"demopassword",displayName:"Counter Cashier",role:"cashier",badge:"⚡ Cashier",description:"Counter POS Billing, Order Taking, Cash/UPI settlement",permissions:["menu","orders"]},auditor:{id:"demo-auditor",email:"auditor@raghavendramess.demo",password:"demopassword",displayName:"Accounts Auditor",role:"auditor",badge:"📊 Auditor",description:"Financial Reviews, Profit Breakdown, CSV & PDF Exports",permissions:["accounts","orders"]}},Pa=new Set,Ol=n=>{Pa.forEach(e=>{try{e(n)}catch(t){console.error("[DemoAuth] Listener error:",t)}})},YT=()=>{try{const n=localStorage.getItem(go);if(n)return JSON.parse(n)}catch(n){console.warn("[DemoAuth] Failed to parse demo user:",n)}return null},Vl=async(n="owner")=>{const e=Yt[n]||Yt.owner,t={uid:e.id,email:e.email,displayName:e.displayName,role:e.role,permissions:e.permissions,isDemo:!0};return localStorage.setItem(go,JSON.stringify(t)),localStorage.setItem(_o,Date.now().toString()),Ol(t),{user:t}},JT=async(n,e)=>{const t=(n||"").trim().toLowerCase(),s=Object.values(Yt).find(i=>i.email.toLowerCase()===t);if(s)return Vl(s.role);const r={uid:`demo_user_${Date.now()}`,email:t||"guest@raghavendramess.demo",displayName:"Demo Guest User",role:"owner",permissions:Yt.owner.permissions,isDemo:!0};return localStorage.setItem(go,JSON.stringify(r)),localStorage.setItem(_o,Date.now().toString()),Ol(r),{user:r}},XT=async()=>{localStorage.removeItem(go),localStorage.removeItem(_o),Ol(null)},ZT=n=>{Pa.add(n);const e=YT();return setTimeout(()=>n(e),0),()=>{Pa.delete(n)}},ew=()=>{const n=Number(localStorage.getItem(_o));return n?(Date.now()-n)/(1e3*60*60)<24:!1},tw=12,Ml="hbs_login_time",nw=async(n,e)=>{if(Fe())return JT(n);const t=await B_(Yn,n,e);return localStorage.setItem(Ml,Date.now().toString()),t},np=()=>{if(Fe())return ew();const n=Number(localStorage.getItem(Ml));return n?(Date.now()-n)/(1e3*60*60)<tw:!1},sw=n=>Fe()?ZT(n):Yn?H_(Yn,n):(n(null),()=>{}),rw=async()=>{if(Fe())return XT();localStorage.removeItem(Ml),Yn&&await W_(Yn)},sp="Asia/Kolkata",Jn=()=>new Intl.DateTimeFormat("en-CA",{timeZone:sp,year:"numeric",month:"2-digit",day:"2-digit"}).format(new Date),Ge=n=>{if(!n)return"";const e=n instanceof Date?n:new Date(n);return isNaN(e)?n:new Intl.DateTimeFormat("en-GB",{timeZone:sp}).format(e)},rp=n=>{const e=new Date;e.setDate(e.getDate()+n);const t=e.getFullYear(),s=String(e.getMonth()+1).padStart(2,"0"),r=String(e.getDate()).padStart(2,"0");return`${t}-${s}-${r}`},ip=(n,e="15")=>{const t=new Date;t.setMonth(t.getMonth()+n);const s=t.getFullYear(),r=String(t.getMonth()+1).padStart(2,"0");return`${s}-${r}-${String(e).padStart(2,"0")}`},op=()=>[{id:"m1",itemName:"Idli (2 pcs)",price:30,sessionType:"morning",isAvailable:!0},{id:"m2",itemName:"Medu Vada (1 pc)",price:20,sessionType:"morning",isAvailable:!0},{id:"m3",itemName:"Special Ghee Pongal",price:55,sessionType:"morning",isAvailable:!0},{id:"m4",itemName:"Poori Masala (2 pcs)",price:50,sessionType:"morning",isAvailable:!0},{id:"m5",itemName:"Crispy Plain Dosa",price:45,sessionType:"morning",isAvailable:!0},{id:"m6",itemName:"Ghee Roast Dosa",price:70,sessionType:"morning",isAvailable:!0},{id:"m7",itemName:"Onion Podi Uttapam",price:65,sessionType:"morning",isAvailable:!0},{id:"m8",itemName:"Traditional Filter Coffee",price:20,sessionType:"morning",isAvailable:!0},{id:"m9",itemName:"Cardamom Tea",price:15,sessionType:"morning",isAvailable:!0},{id:"a1",itemName:"South Indian Special Meals",price:110,sessionType:"afternoon",isAvailable:!0},{id:"a2",itemName:"Quick Mini Meals",price:80,sessionType:"afternoon",isAvailable:!0},{id:"a3",itemName:"Authentic Sambar Rice",price:60,sessionType:"afternoon",isAvailable:!0},{id:"a4",itemName:"Tangy Curd Rice",price:50,sessionType:"afternoon",isAvailable:!0},{id:"a5",itemName:"Lemon Rice with Papad",price:55,sessionType:"afternoon",isAvailable:!0},{id:"a6",itemName:"Special Chapati Kurma (2 pcs)",price:50,sessionType:"afternoon",isAvailable:!0},{id:"a7",itemName:"Cool Butter Milk",price:15,sessionType:"afternoon",isAvailable:!0},{id:"a8",itemName:"Crispy Appalam / Papad",price:10,sessionType:"afternoon",isAvailable:!0},{id:"e1",itemName:"Fluffy Parotta with Salna (2 pcs)",price:50,sessionType:"evening",isAvailable:!0},{id:"e2",itemName:"Madurai Bun Parotta",price:35,sessionType:"evening",isAvailable:!0},{id:"e3",itemName:"Kal Dosa with Chutney (2 pcs)",price:40,sessionType:"evening",isAvailable:!0},{id:"e4",itemName:"Ghee Podi Dosa",price:75,sessionType:"evening",isAvailable:!0},{id:"e5",itemName:"Masala Dosa",price:60,sessionType:"evening",isAvailable:!0},{id:"e6",itemName:"Idiyappam with Coconut Milk (3 pcs)",price:50,sessionType:"evening",isAvailable:!0},{id:"e7",itemName:"Hot Filter Coffee",price:20,sessionType:"evening",isAvailable:!0},{id:"e8",itemName:"Hot Badam Milk",price:25,sessionType:"evening",isAvailable:!0}],ap=()=>{const n=Jn(),e=[],t=(a,l)=>{const u=new Date(`${a} ${l}`);return{toDate:()=>u,seconds:Math.floor(u.getTime()/1e3)}},s=[{id:"tb-01",sessionType:"morning",paymentMode:"upi",billTotal:175,customerNameOrToken:"Token #101",items:[{itemName:"Ghee Roast Dosa",quantity:1,unitPrice:70,totalPrice:70},{itemName:"Special Ghee Pongal",quantity:1,unitPrice:55,totalPrice:55},{itemName:"Medu Vada (1 pc)",quantity:1,unitPrice:20,totalPrice:20},{itemName:"Traditional Filter Coffee",quantity:1,unitPrice:20,totalPrice:20},{itemName:"Cardamom Tea",quantity:1,unitPrice:15,totalPrice:15}],createdDate:n,createdTime:"07:45:10 AM",createdAt:t(n,"07:45:10")},{id:"tb-02",sessionType:"morning",paymentMode:"cash",billTotal:120,customerNameOrToken:"Token #102",items:[{itemName:"Idli (2 pcs)",quantity:2,unitPrice:30,totalPrice:60},{itemName:"Medu Vada (1 pc)",quantity:2,unitPrice:20,totalPrice:40},{itemName:"Traditional Filter Coffee",quantity:1,unitPrice:20,totalPrice:20}],createdDate:n,createdTime:"08:15:22 AM",createdAt:t(n,"08:15:22")},{id:"tb-03",sessionType:"morning",paymentMode:"upi",billTotal:250,customerNameOrToken:"Ramesh Family",items:[{itemName:"Poori Masala (2 pcs)",quantity:2,unitPrice:50,totalPrice:100},{itemName:"Onion Podi Uttapam",quantity:1,unitPrice:65,totalPrice:65},{itemName:"Ghee Roast Dosa",quantity:1,unitPrice:70,totalPrice:70},{itemName:"Cardamom Tea",quantity:1,unitPrice:15,totalPrice:15}],createdDate:n,createdTime:"09:05:40 AM",createdAt:t(n,"09:05:40")},{id:"tb-04",sessionType:"morning",paymentMode:"cash",billTotal:90,customerNameOrToken:"Token #104",items:[{itemName:"Idli (2 pcs)",quantity:1,unitPrice:30,totalPrice:30},{itemName:"Poori Masala (2 pcs)",quantity:1,unitPrice:50,totalPrice:50},{itemName:"Cardamom Tea",quantity:1,unitPrice:10,totalPrice:10}],createdDate:n,createdTime:"09:50:11 AM",createdAt:t(n,"09:50:11")},{id:"tb-05",sessionType:"afternoon",paymentMode:"upi",billTotal:340,customerNameOrToken:"Token #201",items:[{itemName:"South Indian Special Meals",quantity:2,unitPrice:110,totalPrice:220},{itemName:"Quick Mini Meals",quantity:1,unitPrice:80,totalPrice:80},{itemName:"Cool Butter Milk",quantity:2,unitPrice:15,totalPrice:30},{itemName:"Crispy Appalam / Papad",quantity:1,unitPrice:10,totalPrice:10}],createdDate:n,createdTime:"12:35:15 PM",createdAt:t(n,"12:35:15")},{id:"tb-06",sessionType:"afternoon",paymentMode:"cash",billTotal:220,customerNameOrToken:"Token #202",items:[{itemName:"South Indian Special Meals",quantity:2,unitPrice:110,totalPrice:220}],createdDate:n,createdTime:"01:10:45 PM",createdAt:t(n,"01:10:45")},{id:"tb-07",sessionType:"afternoon",paymentMode:"upi",billTotal:165,customerNameOrToken:"Dr. Suresh",items:[{itemName:"Authentic Sambar Rice",quantity:1,unitPrice:60,totalPrice:60},{itemName:"Tangy Curd Rice",quantity:1,unitPrice:50,totalPrice:50},{itemName:"Special Chapati Kurma (2 pcs)",quantity:1,unitPrice:50,totalPrice:50},{itemName:"Crispy Appalam / Papad",quantity:1,unitPrice:5,totalPrice:5}],createdDate:n,createdTime:"01:45:00 PM",createdAt:t(n,"01:45:00")},{id:"tb-08",sessionType:"evening",paymentMode:"upi",billTotal:235,customerNameOrToken:"Token #301",items:[{itemName:"Fluffy Parotta with Salna (2 pcs)",quantity:2,unitPrice:50,totalPrice:100},{itemName:"Ghee Podi Dosa",quantity:1,unitPrice:75,totalPrice:75},{itemName:"Masala Dosa",quantity:1,unitPrice:60,totalPrice:60}],createdDate:n,createdTime:"06:15:30 PM",createdAt:t(n,"06:15:30")},{id:"tb-09",sessionType:"evening",paymentMode:"cash",billTotal:170,customerNameOrToken:"Token #302",items:[{itemName:"Madurai Bun Parotta",quantity:2,unitPrice:35,totalPrice:70},{itemName:"Kal Dosa with Chutney (2 pcs)",quantity:1,unitPrice:40,totalPrice:40},{itemName:"Hot Badam Milk",quantity:2,unitPrice:25,totalPrice:50},{itemName:"Hot Filter Coffee",quantity:1,unitPrice:10,totalPrice:10}],createdDate:n,createdTime:"07:20:12 PM",createdAt:t(n,"07:20:12")},{id:"tb-10",sessionType:"order",paymentMode:"upi",billTotal:450,customerNameOrToken:"Office Catering Batch A",items:[{itemName:"Catering Breakfast Box (Idli/Vada/Pongal)",quantity:5,unitPrice:90,totalPrice:450}],createdDate:n,createdTime:"10:15:00 AM",createdAt:t(n,"10:15:00")}];return e.push(...s),[{offset:-1,sales:14250},{offset:-2,sales:16800},{offset:-3,sales:13900},{offset:-4,sales:15400},{offset:-5,sales:18200},{offset:-6,sales:19100},{offset:-7,sales:14600},{offset:-8,sales:13750},{offset:-9,sales:14900},{offset:-10,sales:15800},{offset:-11,sales:16200},{offset:-12,sales:17950},{offset:-13,sales:18800},{offset:-14,sales:14100}].forEach((a,l)=>{const u=rp(a.offset);e.push({id:`hb-${l}-m`,sessionType:"morning",paymentMode:"cash",billTotal:Math.round(a.sales*.35),customerNameOrToken:"Morning Walkers Group",items:[{itemName:"Idli (2 pcs)",quantity:20,unitPrice:30,totalPrice:600},{itemName:"Special Ghee Pongal",quantity:15,unitPrice:55,totalPrice:825},{itemName:"Poori Masala (2 pcs)",quantity:18,unitPrice:50,totalPrice:900},{itemName:"Traditional Filter Coffee",quantity:30,unitPrice:20,totalPrice:600}],createdDate:u,createdTime:"08:30:00 AM",createdAt:t(u,"08:30:00")}),e.push({id:`hb-${l}-a`,sessionType:"afternoon",paymentMode:"upi",billTotal:Math.round(a.sales*.4),customerNameOrToken:"Lunch Rush Counter",items:[{itemName:"South Indian Special Meals",quantity:35,unitPrice:110,totalPrice:3850},{itemName:"Quick Mini Meals",quantity:15,unitPrice:80,totalPrice:1200},{itemName:"Authentic Sambar Rice",quantity:12,unitPrice:60,totalPrice:720},{itemName:"Cool Butter Milk",quantity:20,unitPrice:15,totalPrice:300}],createdDate:u,createdTime:"01:15:00 PM",createdAt:t(u,"01:15:00")}),e.push({id:`hb-${l}-e`,sessionType:"evening",paymentMode:"upi",billTotal:Math.round(a.sales*.25),customerNameOrToken:"Evening Tiffin Crowd",items:[{itemName:"Fluffy Parotta with Salna (2 pcs)",quantity:25,unitPrice:50,totalPrice:1250},{itemName:"Ghee Podi Dosa",quantity:18,unitPrice:75,totalPrice:1350},{itemName:"Madurai Bun Parotta",quantity:15,unitPrice:35,totalPrice:525},{itemName:"Hot Badam Milk",quantity:20,unitPrice:25,totalPrice:500}],createdDate:u,createdTime:"07:45:00 PM",createdAt:t(u,"07:45:00")})}),[{offset:-1,sales:425e3},{offset:-2,sales:398e3},{offset:-3,sales:442e3},{offset:-4,sales:385e3},{offset:-5,sales:41e4}].forEach((a,l)=>{const u=ip(a.offset,15);e.push({id:`mb-${l}`,sessionType:"order",paymentMode:"upi",billTotal:a.sales,customerNameOrToken:"Consolidated Monthly Operations",items:[{itemName:"Monthly Operations Tiffin & Meals",quantity:1,unitPrice:a.sales,totalPrice:a.sales}],createdDate:u,createdTime:"12:00:00 PM",createdAt:t(u,"12:00:00")})}),e},lp=()=>{const n=Jn(),e=[],t=(a,l="10:00:00")=>{const u=new Date(`${a} ${l}`);return{toDate:()=>u,seconds:Math.floor(u.getTime()/1e3)}},s=[{id:"te-01",expenseTitle:"Gas",amount:1850,note:"Commercial LPG Cylinder (19kg Bharat Gas)",expenseDate:n,createdAt:t(n,"07:10:00")},{id:"te-02",expenseTitle:"Vegetable",amount:1420,note:"Country tomatoes, drumsticks, onions & coriander from market",expenseDate:n,createdAt:t(n,"07:30:00")},{id:"te-03",expenseTitle:"Milk",amount:660,note:"Aavin Green Milk (15 Liters) for Coffee & Tea",expenseDate:n,createdAt:t(n,"08:00:00")},{id:"te-04",expenseTitle:"Rice",amount:1350,note:"Ponni Boiled Rice (25kg Bag)",expenseDate:n,createdAt:t(n,"11:00:00")},{id:"te-05",expenseTitle:"Tabers Salary",amount:1200,note:"Daily wages for 2 kitchen helpers & 1 cleaner",expenseDate:n,createdAt:t(n,"08:30:00")}];return e.push(...s),[{offset:-1,exp:6200,note:"Vegetables, Milk, Oil Can, Wages"},{offset:-2,exp:7100,note:"LPG Refill, Provisions, Wages"},{offset:-3,exp:5900,note:"Daily Vegetables, Dairy, Wages"},{offset:-4,exp:6400,note:"Provisions, Spices, Dairy, Wages"},{offset:-5,exp:7800,note:"Rice Bag, Cooking Oil, Gas, Wages"},{offset:-6,exp:8200,note:"Weekend Bulk Provisions, Extra Staff Wages"},{offset:-7,exp:6100,note:"Vegetables, Dairy, Banana Leaves"},{offset:-8,exp:5800,note:"Milk, Veg, Cleaning supplies"},{offset:-9,exp:6300,note:"Flour, Dal, Veg, Milk, Wages"},{offset:-10,exp:6600,note:"Commercial Gas cylinder, Veg, Wages"},{offset:-11,exp:6700,note:"Provisions, Dairy, Wages"},{offset:-12,exp:7400,note:"Weekend Prep, Rice & Dal bags, Milk"},{offset:-13,exp:7900,note:"Vegetables wholesale, Gas cylinder, Wages"},{offset:-14,exp:5950,note:"Regular daily mess supplies & wages"}].forEach((a,l)=>{const u=rp(a.offset);e.push({id:`he-${l}`,expenseTitle:"Super Market",amount:a.exp,note:a.note,expenseDate:u,createdAt:t(u,"10:00:00")})}),[{offset:-1,exp:178e3,note:"Monthly groceries, gas refills, salaries & rent"},{offset:-2,exp:165e3,note:"Monthly groceries, gas refills, salaries & rent"},{offset:-3,exp:184e3,note:"Festival provisions, staff bonus, gas & rent"},{offset:-4,exp:162e3,note:"Monthly groceries, dairy, salaries & rent"},{offset:-5,exp:17e4,note:"Monthly supplies, equipment maintenance & rent"}].forEach((a,l)=>{const u=ip(a.offset,28);e.push({id:`me-${l}`,expenseTitle:"Monthly Operations",amount:a.exp,note:a.note,expenseDate:u,createdAt:t(u,"12:00:00")})}),e},kr="hbs_demo_v1_menu",jl="hbs_demo_v1_bills",Dr="hbs_demo_v1_expenses",St={menu:new Set,bills:new Set,expenses:new Set},Xo=(n,e)=>{try{const s=localStorage.getItem(n);if(s)return JSON.parse(s)}catch(s){console.warn(`[DemoStore] Failed to read ${n} from localStorage:`,s)}const t=e();return At(n,t),t},At=(n,e)=>{try{localStorage.setItem(n,JSON.stringify(e))}catch(t){console.warn(`[DemoStore] Failed to persist ${n} to localStorage:`,t)}};let ct=null,Jt=null,rt=null;const Et=()=>{ct||(ct=Xo(kr,op)),Jt||(Jt=Xo(jl,ap)),rt||(rt=Xo(Dr,lp))},iw=n=>({id:n.id,data:()=>({...n})}),Or=n=>({docs:n.map(iw)}),Lt=n=>{const e=St[n];!e||e.size===0||e.forEach(t=>{try{t()}catch(s){console.error(`[DemoStore] Error in subscriber callback for ${n}:`,s)}})},ow=(n,e)=>{Et();const t=()=>{const s=ct.filter(r=>!n||r.sessionType===n).sort((r,i)=>(r.createdAt||0)-(i.createdAt||0));e(Or(s))};return St.menu.add(t),setTimeout(t,0),()=>{St.menu.delete(t)}},aw=async n=>{Et();const e={...n,id:`item_${Date.now()}_${Math.random().toString(36).substr(2,5)}`,createdAt:Date.now(),updatedAt:Date.now()};return ct=[e,...ct],At(kr,ct),Lt("menu"),{id:e.id}},lw=async(n,e)=>{Et(),ct=ct.map(t=>t.id===n?{...t,...e,updatedAt:Date.now()}:t),At(kr,ct),Lt("menu")},cw=async n=>{Et(),ct=ct.filter(e=>e.id!==n),At(kr,ct),Lt("menu")},uw=async n=>{Et();const e=new Date,t={...n,id:`bill_${Date.now()}_${Math.random().toString(36).substr(2,5)}`,createdAt:{toDate:()=>e,seconds:Math.floor(e.getTime()/1e3)}};return Jt=[t,...Jt],At(jl,Jt),Lt("bills"),{id:t.id}},hw=(n,e)=>{Et();const t=()=>{const s=Jt.filter(r=>r.createdDate===n);e(Or(s))};return St.bills.add(t),setTimeout(t,0),()=>{St.bills.delete(t)}},dw=n=>{Et();const e=()=>{const t=[...Jt].sort((s,r)=>{var l,u;const i=(l=s.createdAt)!=null&&l.toDate?s.createdAt.toDate().getTime():0;return((u=r.createdAt)!=null&&u.toDate?r.createdAt.toDate().getTime():0)-i}).slice(0,400);n(Or(t))};return St.bills.add(e),setTimeout(e,0),()=>{St.bills.delete(e)}},fw=async n=>{Et();const e=new Date,t={...n,id:`exp_${Date.now()}_${Math.random().toString(36).substr(2,5)}`,createdAt:{toDate:()=>e,seconds:Math.floor(e.getTime()/1e3)}};return rt=[t,...rt],At(Dr,rt),Lt("expenses"),{id:t.id}},pw=async(n,e)=>{Et(),rt=rt.map(t=>t.id===n?{...t,...e,updatedAt:Date.now()}:t),At(Dr,rt),Lt("expenses")},mw=async n=>{Et(),rt=rt.filter(e=>e.id!==n),At(Dr,rt),Lt("expenses")},gw=(n,e)=>{Et();const t=()=>{const s=rt.filter(r=>r.expenseDate===n);e(Or(s))};return St.expenses.add(t),setTimeout(t,0),()=>{St.expenses.delete(t)}},_w=n=>{Et();const e=()=>{const t=[...rt].sort((s,r)=>(r.expenseDate||"").localeCompare(s.expenseDate||"")).slice(0,400);n(Or(t))};return St.expenses.add(e),setTimeout(e,0),()=>{St.expenses.delete(e)}},yw=()=>(ct=op(),Jt=ap(),rt=lp(),At(kr,ct),At(jl,Jt),At(Dr,rt),Lt("menu"),Lt("bills"),Lt("expenses"),!0),yo=()=>yl(mo,"menu"),Ll=()=>yl(mo,"bills"),Vr=()=>yl(mo,"expenses"),cp=(n,e)=>Fe()?ow(n,e):Nr(Cr(yo(),xl("sessionType","==",n),Pl("createdAt","asc")),e),vw=n=>Fe()?aw(n):Nl(yo(),{...n,createdAt:xs(),updatedAt:xs()}),yh=(n,e)=>Fe()?lw(n,e):Jf(Sr(yo(),n),{...e,updatedAt:xs()}),Ew=n=>Fe()?cw(n):Xf(Sr(yo(),n)),up=n=>Fe()?uw(n):Nl(Ll(),{...n,createdAt:xs()}),Tw=n=>Fe()?fw(n):Nl(Vr(),{...n,createdAt:xs()}),ww=(n,e)=>Fe()?pw(n,e):Jf(Sr(Vr(),n),{...e,updatedAt:xs()}),Iw=n=>Fe()?mw(n):Xf(Sr(Vr(),n)),hp=(n,e)=>Fe()?hw(n,e):Nr(Cr(Ll(),xl("createdDate","==",n)),e),bw=(n,e)=>Fe()?gw(n,e):Nr(Cr(Vr(),xl("expenseDate","==",n)),e),Fl=n=>Fe()?dw(n):Nr(Cr(Ll(),Pl("createdAt","desc"),Kf(400)),n),dp=n=>Fe()?_w(n):Nr(Cr(Vr(),Pl("expenseDate","desc"),Kf(400)),n);let Aw={data:""},xw=n=>{if(typeof window=="object"){let e=(n?n.querySelector("#_goober"):window._goober)||Object.assign(document.createElement("style"),{innerHTML:" ",id:"_goober"});return e.nonce=window.__nonce__,e.parentNode||(n||document.head).appendChild(e),e.firstChild}return n||Aw},Rw=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,Sw=/\/\*[^]*?\*\/|  +/g,vh=/\n+/g,mn=(n,e)=>{let t="",s="",r="";for(let i in n){let a=n[i];i[0]=="@"?i[1]=="i"?t=i+" "+a+";":s+=i[1]=="f"?mn(a,i):i+"{"+mn(a,i[1]=="k"?"":e)+"}":typeof a=="object"?s+=mn(a,e?e.replace(/([^,])+/g,l=>i.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,u=>/&/.test(u)?u.replace(/&/g,l):l?l+" "+u:u)):i):a!=null&&(i=/^--/.test(i)?i:i.replace(/[A-Z]/g,"-$&").toLowerCase(),r+=mn.p?mn.p(i,a):i+":"+a+";")}return t+(e&&r?e+"{"+r+"}":r)+s},Gt={},fp=n=>{if(typeof n=="object"){let e="";for(let t in n)e+=t+fp(n[t]);return e}return n},Pw=(n,e,t,s,r)=>{let i=fp(n),a=Gt[i]||(Gt[i]=(u=>{let d=0,g=11;for(;d<u.length;)g=101*g+u.charCodeAt(d++)>>>0;return"go"+g})(i));if(!Gt[a]){let u=i!==n?n:(d=>{let g,_,E=[{}];for(;g=Rw.exec(d.replace(Sw,""));)g[4]?E.shift():g[3]?(_=g[3].replace(vh," ").trim(),E.unshift(E[0][_]=E[0][_]||{})):E[0][g[1]]=g[2].replace(vh," ").trim();return E[0]})(n);Gt[a]=mn(r?{["@keyframes "+a]:u}:u,t?"":"."+a)}let l=t&&Gt.g?Gt.g:null;return t&&(Gt.g=Gt[a]),((u,d,g,_)=>{_?d.data=d.data.replace(_,u):d.data.indexOf(u)===-1&&(d.data=g?u+d.data:d.data+u)})(Gt[a],e,s,l),a},Cw=(n,e,t)=>n.reduce((s,r,i)=>{let a=e[i];if(a&&a.call){let l=a(t),u=l&&l.props&&l.props.className||/^go/.test(l)&&l;a=u?"."+u:l&&typeof l=="object"?l.props?"":mn(l,""):l===!1?"":l}return s+r+(a??"")},"");function vo(n){let e=this||{},t=n.call?n(e.p):n;return Pw(t.unshift?t.raw?Cw(t,[].slice.call(arguments,1),e.p):t.reduce((s,r)=>Object.assign(s,r&&r.call?r(e.p):r),{}):t,xw(e.target),e.g,e.o,e.k)}let pp,Ca,Na;vo.bind({g:1});let nn=vo.bind({k:1});function Nw(n,e,t,s){mn.p=e,pp=n,Ca=t,Na=s}function Vn(n,e){let t=this||{};return function(){let s=arguments;function r(i,a){let l=Object.assign({},i),u=l.className||r.className;t.p=Object.assign({theme:Ca&&Ca()},l),t.o=/ *go\d+/.test(u),l.className=vo.apply(t,s)+(u?" "+u:"");let d=n;return n[0]&&(d=l.as||n,delete l.as),Na&&d[0]&&Na(l),pp(d,l)}return r}}var kw=n=>typeof n=="function",$i=(n,e)=>kw(n)?n(e):n,Dw=(()=>{let n=0;return()=>(++n).toString()})(),mp=(()=>{let n;return()=>{if(n===void 0&&typeof window<"u"){let e=matchMedia("(prefers-reduced-motion: reduce)");n=!e||e.matches}return n}})(),Ow=20,Ul="default",gp=(n,e)=>{let{toastLimit:t}=n.settings;switch(e.type){case 0:return{...n,toasts:[e.toast,...n.toasts].slice(0,t)};case 1:return{...n,toasts:n.toasts.map(a=>a.id===e.toast.id?{...a,...e.toast}:a)};case 2:let{toast:s}=e;return gp(n,{type:n.toasts.find(a=>a.id===s.id)?1:0,toast:s});case 3:let{toastId:r}=e;return{...n,toasts:n.toasts.map(a=>a.id===r||r===void 0?{...a,dismissed:!0,visible:!1}:a)};case 4:return e.toastId===void 0?{...n,toasts:[]}:{...n,toasts:n.toasts.filter(a=>a.id!==e.toastId)};case 5:return{...n,pausedAt:e.time};case 6:let i=e.time-(n.pausedAt||0);return{...n,pausedAt:void 0,toasts:n.toasts.map(a=>({...a,pauseDuration:a.pauseDuration+i}))}}},Ei=[],_p={toasts:[],pausedAt:void 0,settings:{toastLimit:Ow}},Ct={},yp=(n,e=Ul)=>{Ct[e]=gp(Ct[e]||_p,n),Ei.forEach(([t,s])=>{t===e&&s(Ct[e])})},vp=n=>Object.keys(Ct).forEach(e=>yp(n,e)),Vw=n=>Object.keys(Ct).find(e=>Ct[e].toasts.some(t=>t.id===n)),Eo=(n=Ul)=>e=>{yp(e,n)},Mw={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},jw=(n={},e=Ul)=>{let[t,s]=O.useState(Ct[e]||_p),r=O.useRef(Ct[e]);O.useEffect(()=>(r.current!==Ct[e]&&s(Ct[e]),Ei.push([e,s]),()=>{let a=Ei.findIndex(([l])=>l===e);a>-1&&Ei.splice(a,1)}),[e]);let i=t.toasts.map(a=>{var l,u,d;return{...n,...n[a.type],...a,removeDelay:a.removeDelay||((l=n[a.type])==null?void 0:l.removeDelay)||(n==null?void 0:n.removeDelay),duration:a.duration||((u=n[a.type])==null?void 0:u.duration)||(n==null?void 0:n.duration)||Mw[a.type],style:{...n.style,...(d=n[a.type])==null?void 0:d.style,...a.style}}});return{...t,toasts:i}},Lw=(n,e="blank",t)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:e,ariaProps:{role:"status","aria-live":"polite"},message:n,pauseDuration:0,...t,id:(t==null?void 0:t.id)||Dw()}),Mr=n=>(e,t)=>{let s=Lw(e,n,t);return Eo(s.toasterId||Vw(s.id))({type:2,toast:s}),s.id},Be=(n,e)=>Mr("blank")(n,e);Be.error=Mr("error");Be.success=Mr("success");Be.loading=Mr("loading");Be.custom=Mr("custom");Be.dismiss=(n,e)=>{let t={type:3,toastId:n};e?Eo(e)(t):vp(t)};Be.dismissAll=n=>Be.dismiss(void 0,n);Be.remove=(n,e)=>{let t={type:4,toastId:n};e?Eo(e)(t):vp(t)};Be.removeAll=n=>Be.remove(void 0,n);Be.promise=(n,e,t)=>{let s=Be.loading(e.loading,{...t,...t==null?void 0:t.loading});return typeof n=="function"&&(n=n()),n.then(r=>{let i=e.success?$i(e.success,r):void 0;return i?Be.success(i,{id:s,...t,...t==null?void 0:t.success}):Be.dismiss(s),r}).catch(r=>{let i=e.error?$i(e.error,r):void 0;i?Be.error(i,{id:s,...t,...t==null?void 0:t.error}):Be.dismiss(s)}),n};var Fw=1e3,Uw=(n,e="default")=>{let{toasts:t,pausedAt:s}=jw(n,e),r=O.useRef(new Map).current,i=O.useCallback((_,E=Fw)=>{if(r.has(_))return;let A=setTimeout(()=>{r.delete(_),a({type:4,toastId:_})},E);r.set(_,A)},[]);O.useEffect(()=>{if(s)return;let _=Date.now(),E=t.map(A=>{if(A.duration===1/0)return;let S=(A.duration||0)+A.pauseDuration-(_-A.createdAt);if(S<0){A.visible&&Be.dismiss(A.id);return}return setTimeout(()=>Be.dismiss(A.id,e),S)});return()=>{E.forEach(A=>A&&clearTimeout(A))}},[t,s,e]);let a=O.useCallback(Eo(e),[e]),l=O.useCallback(()=>{a({type:5,time:Date.now()})},[a]),u=O.useCallback((_,E)=>{a({type:1,toast:{id:_,height:E}})},[a]),d=O.useCallback(()=>{s&&a({type:6,time:Date.now()})},[s,a]),g=O.useCallback((_,E)=>{let{reverseOrder:A=!1,gutter:S=8,defaultPosition:x}=E||{},R=t.filter(C=>(C.position||x)===(_.position||x)&&C.height),V=R.findIndex(C=>C.id===_.id),M=R.filter((C,j)=>j<V&&C.visible).length;return R.filter(C=>C.visible).slice(...A?[M+1]:[0,M]).reduce((C,j)=>C+(j.height||0)+S,0)},[t]);return O.useEffect(()=>{t.forEach(_=>{if(_.dismissed)i(_.id,_.removeDelay);else{let E=r.get(_.id);E&&(clearTimeout(E),r.delete(_.id))}})},[t,i]),{toasts:t,handlers:{updateHeight:u,startPause:l,endPause:d,calculateOffset:g}}},Bw=nn`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,$w=nn`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,qw=nn`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,zw=Vn("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${n=>n.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${Bw} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${$w} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${n=>n.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${qw} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,Hw=nn`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,Ww=Vn("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${n=>n.secondary||"#e0e0e0"};
  border-right-color: ${n=>n.primary||"#616161"};
  animation: ${Hw} 1s linear infinite;
`,Gw=nn`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,Kw=nn`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,Qw=Vn("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${n=>n.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${Gw} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${Kw} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${n=>n.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,Yw=Vn("div")`
  position: absolute;
`,Jw=Vn("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,Xw=nn`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,Zw=Vn("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${Xw} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,eI=({toast:n})=>{let{icon:e,type:t,iconTheme:s}=n;return e!==void 0?typeof e=="string"?O.createElement(Zw,null,e):e:t==="blank"?null:O.createElement(Jw,null,O.createElement(Ww,{...s}),t!=="loading"&&O.createElement(Yw,null,t==="error"?O.createElement(zw,{...s}):O.createElement(Qw,{...s})))},tI=n=>`
0% {transform: translate3d(0,${n*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,nI=n=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${n*-150}%,-1px) scale(.6); opacity:0;}
`,sI="0%{opacity:0;} 100%{opacity:1;}",rI="0%{opacity:1;} 100%{opacity:0;}",iI=Vn("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,oI=Vn("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,aI=(n,e)=>{let t=n.includes("top")?1:-1,[s,r]=mp()?[sI,rI]:[tI(t),nI(t)];return{animation:e?`${nn(s)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${nn(r)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},lI=O.memo(({toast:n,position:e,style:t,children:s})=>{let r=n.height?aI(n.position||e||"top-center",n.visible):{opacity:0},i=O.createElement(eI,{toast:n}),a=O.createElement(oI,{...n.ariaProps},$i(n.message,n));return O.createElement(iI,{className:n.className,style:{...r,...t,...n.style}},typeof s=="function"?s({icon:i,message:a}):O.createElement(O.Fragment,null,i,a))});Nw(O.createElement);var cI=({id:n,className:e,style:t,onHeightUpdate:s,children:r})=>{let i=O.useCallback(a=>{if(a){let l=()=>{let u=a.getBoundingClientRect().height;s(n,u)};l(),new MutationObserver(l).observe(a,{subtree:!0,childList:!0,characterData:!0})}},[n,s]);return O.createElement("div",{ref:i,className:e,style:t},r)},uI=(n,e)=>{let t=n.includes("top"),s=t?{top:0}:{bottom:0},r=n.includes("center")?{justifyContent:"center"}:n.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:mp()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${e*(t?1:-1)}px)`,...s,...r}},hI=vo`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,oi=16,dI=({reverseOrder:n,position:e="top-center",toastOptions:t,gutter:s,children:r,toasterId:i,containerStyle:a,containerClassName:l})=>{let{toasts:u,handlers:d}=Uw(t,i);return O.createElement("div",{"data-rht-toaster":i||"",style:{position:"fixed",zIndex:9999,top:oi,left:oi,right:oi,bottom:oi,pointerEvents:"none",...a},className:l,onMouseEnter:d.startPause,onMouseLeave:d.endPause},u.map(g=>{let _=g.position||e,E=d.calculateOffset(g,{reverseOrder:n,gutter:s,defaultPosition:e}),A=uI(_,E);return O.createElement(cI,{id:g.id,key:g.id,onHeightUpdate:d.updateHeight,className:g.visible?hI:"",style:A},g.type==="custom"?$i(g.message,g):r?r(g):O.createElement(lI,{toast:g,position:_}))}))},ye=Be;function fI(){const{user:n}=Mn(),[e,t]=O.useState(""),[s,r]=O.useState(""),[i,a]=O.useState(!1),l=Ah(),u=Fe(),d="sriraghavendramess28@gmail.com";O.useEffect(()=>{n&&np()&&l("/dashboard",{replace:!0})},[n,l]);const g=async()=>{if(!u&&e.trim().toLowerCase()!==d.toLowerCase())return ye.error("Only owner email allowed in production");if(!s)return ye.error("Password required");try{a(!0),await nw(e.trim(),s),ye.success("Login success"),l("/dashboard",{replace:!0})}catch(A){ye.error(A.message||"Authentication failed")}finally{a(!1)}},_=async(A="owner")=>{var S;try{a(!0),await Vl(A),ye.success(`Logged in as ${((S=Yt[A])==null?void 0:S.displayName)||"Demo User"}`),l("/dashboard",{replace:!0})}catch{ye.error("Failed to start demo session")}finally{a(!1)}},E=(A,S)=>{t(A),r(S)};return h.jsxs("div",{className:"relative min-h-screen flex items-center justify-center bg-slate-950 text-white overflow-hidden px-4 py-10",children:[h.jsx(dI,{}),h.jsx("div",{className:"orb orb-1"}),h.jsx("div",{className:"orb orb-2"}),h.jsx("div",{className:"orb orb-3"}),h.jsxs("div",{className:"absolute top-6 left-4 flex items-center gap-3 text-sm text-slate-200 bg-white/5 px-4 py-2 rounded-full backdrop-blur shadow-lg shadow-amber-500/20",children:[h.jsx("div",{className:"h-9 w-9 rounded-full bg-gradient-to-br from-amber-400 to-orange-600 flex items-center justify-center font-bold text-slate-900 shadow-lg",children:"AVS"}),h.jsxs("div",{children:[h.jsx("div",{className:"font-semibold tracking-wide uppercase text-amber-200",children:"Sri Raghavendra Mess"}),h.jsx("div",{className:"text-xs text-slate-200/80",children:"Hotel Billing System"})]})]}),h.jsx("div",{className:"absolute top-6 right-4 z-20",children:h.jsxs("button",{onClick:()=>vi(u?"production":"demo"),className:"text-xs font-semibold px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-slate-200 border border-white/20 transition flex items-center gap-1.5",children:[h.jsx("span",{className:`w-2 h-2 rounded-full ${u?"bg-emerald-400":"bg-blue-400"}`}),u?"Demo Mode Active":"Production Mode"]})}),h.jsxs("div",{className:"card max-w-md w-full bg-white text-slate-900 shadow-2xl relative overflow-hidden my-auto",children:[h.jsx("div",{className:"absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-amber-400 via-pink-500 to-indigo-500 animate-shimmer"}),h.jsxs("div",{className:"p-7 md:p-8 space-y-6",children:[h.jsxs("div",{className:"text-center space-y-2",children:[u?h.jsx("span",{className:"inline-block bg-amber-100 text-amber-900 text-xs uppercase font-extrabold px-3 py-1 rounded-full tracking-wider",children:"Interactive Public Demo"}):h.jsx("p",{className:"text-xs uppercase tracking-[0.25em] text-amber-500",children:"Owner Access"}),h.jsx("h1",{className:"text-2xl md:text-3xl font-bold",children:"Welcome Back"}),h.jsx("p",{className:"text-sm text-slate-500",children:u?"Explore full billing, orders, analytics, and menu features in sandbox mode.":"Manage menu, orders, and accounts securely."})]}),u&&h.jsxs("div",{className:"space-y-3 bg-gradient-to-br from-amber-50 to-orange-50 p-4 rounded-2xl border border-amber-200/80",children:[h.jsxs("div",{className:"flex items-center justify-between",children:[h.jsx("span",{className:"text-xs font-bold text-amber-900 uppercase tracking-wider",children:"⚡ 1-Click Instant Access"}),h.jsx("span",{className:"text-[11px] text-amber-700",children:"No signup needed"})]}),h.jsx("button",{className:"btn w-full h-11 text-sm font-bold bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 text-slate-950 shadow-md hover:brightness-105 border-0",onClick:()=>_("owner"),disabled:i,children:"🚀 Enter Demo as Owner (Full Access)"}),h.jsxs("div",{className:"pt-2 border-t border-amber-200/60",children:[h.jsx("div",{className:"text-[11px] font-semibold text-slate-600 mb-2",children:"Or test other demo roles:"}),h.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[h.jsx("button",{onClick:()=>_("cashier"),disabled:i,className:"px-2.5 py-1.5 text-xs font-semibold bg-white text-slate-800 rounded-lg border border-amber-200 hover:bg-amber-100/50 shadow-xs text-left",children:"⚡ Cashier (POS)"}),h.jsx("button",{onClick:()=>_("auditor"),disabled:i,className:"px-2.5 py-1.5 text-xs font-semibold bg-white text-slate-800 rounded-lg border border-amber-200 hover:bg-amber-100/50 shadow-xs text-left",children:"📊 Auditor (Reports)"})]})]})]}),h.jsxs("div",{className:"space-y-4",children:[h.jsxs("div",{children:[h.jsxs("div",{className:"flex justify-between items-center mb-1",children:[h.jsx("label",{className:"block text-xs font-semibold text-slate-600 uppercase tracking-wide",children:"Email"}),u&&h.jsx("button",{type:"button",onClick:()=>E("owner@raghavendramess.demo","demopassword"),className:"text-[11px] text-indigo-600 hover:underline",children:"Auto-fill demo credentials"})]}),h.jsx("input",{className:"input bg-white text-slate-900 border border-slate-200",type:"email",value:e,onChange:A=>t(A.target.value),placeholder:u?"owner@raghavendramess.demo":"owner@gmail.com"})]}),h.jsxs("div",{children:[h.jsx("label",{className:"block text-xs font-semibold text-slate-600 uppercase tracking-wide mb-1",children:"Password"}),h.jsx("input",{className:"input bg-white text-slate-900 border border-slate-200",type:"password",value:s,onChange:A=>r(A.target.value),placeholder:"Password"})]})]}),h.jsxs("div",{className:"flex items-center justify-between text-xs text-slate-500",children:[h.jsx("span",{children:u?"🔒 Isolated Sandbox":"🔒 Secure Production"}),h.jsx("span",{className:"flex items-center gap-1",children:"24/7 Support"})]}),h.jsx("button",{className:"btn w-full h-12 font-semibold text-lg bg-gradient-to-r from-amber-400 via-pink-500 to-indigo-500 shadow-lg shadow-amber-500/40 border-0 animate-gradient text-white",onClick:g,disabled:i,children:i?"Signing in...":u?"Sign In to Demo":"Enter Dashboard"}),h.jsx("div",{className:"text-center text-xs text-slate-500 pt-1",children:u?h.jsxs("span",{children:["Are you the mess owner? ",h.jsx("button",{onClick:()=>vi("production"),className:"text-indigo-600 font-semibold underline",children:"Switch to Production Login"})]}):h.jsxs("span",{children:["Looking for the public portfolio demo? ",h.jsx("button",{onClick:()=>vi("demo"),className:"text-amber-600 font-semibold underline",children:"Switch to Demo Mode"})]})})]})]}),h.jsx("style",{children:`
        .orb { position:absolute; border-radius:9999px; filter: blur(80px); opacity:0.35; animation: float 16s ease-in-out infinite; }
        .orb-1 { width:320px; height:320px; background:radial-gradient(circle,#f59e0b,transparent 60%); top:-80px; left:-80px; }
        .orb-2 { width:260px; height:260px; background:radial-gradient(circle,#8b5cf6,transparent 60%); bottom:10%; right:-60px; animation-duration:18s; }
        .orb-3 { width:180px; height:180px; background:radial-gradient(circle,#22d3ee,transparent 60%); bottom:-40px; left:25%; animation-duration:20s; }
        @keyframes float { 0%,100% { transform: translateY(0px) scale(1); } 50% { transform: translateY(-20px) scale(1.05); } }
        .animate-gradient { background-size: 200% 200%; animation: gradientMove 6s ease infinite; }
        .animate-shimmer { background-size: 200% 100%; animation: gradientMove 5s linear infinite; opacity:0.9; }
        @keyframes gradientMove { 0% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } 100% { background-position: 0% 50%; } }
      `})]})}function pI(){const{user:n,isDemo:e}=Mn(),[t,s]=O.useState(new Date);O.useEffect(()=>{const i=setInterval(()=>s(new Date),1e3);return()=>clearInterval(i)},[]);const r=n!=null&&n.role?Yt[n.role]:null;return h.jsx("header",{className:"sticky top-0 z-30",children:h.jsxs("div",{className:"relative overflow-hidden bg-gradient-to-r from-indigo-900 via-indigo-700 to-amber-500 text-white shadow-xl",children:[h.jsx("div",{className:"absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_20%_20%,#fcd34d,transparent_25%),radial-gradient(circle_at_80%_10%,#a5b4fc,transparent_30%)]"}),h.jsxs("div",{className:"relative max-w-6xl mx-auto px-5 py-3 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between",children:[h.jsxs("div",{className:"flex items-center gap-3",children:[h.jsx("div",{className:"h-11 w-11 rounded-full bg-white/20 backdrop-blur overflow-hidden border border-white/40 shadow-sm flex items-center justify-center font-bold text-amber-200",children:h.jsx("img",{src:"/billing-system1/sri-raghavendra-image.jpg",alt:"Sri Raghavendra",className:"h-full w-full object-cover",onError:i=>{i.currentTarget.style.display="none"}})}),h.jsxs("div",{className:"leading-tight",children:[h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsx("span",{className:"text-xs uppercase tracking-[0.2em] text-amber-200",children:"Hotel Billing"}),e&&h.jsx("span",{className:"bg-amber-400 text-slate-950 font-extrabold text-[10px] px-1.5 py-0.5 rounded uppercase",children:"Demo"})]}),h.jsx("div",{className:"text-xl font-bold",children:"Sri Raghavendra Mess"})]})]}),h.jsxs("div",{className:"flex items-center gap-3 flex-wrap",children:[e&&r&&h.jsx("div",{className:"hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/20 backdrop-blur text-xs font-semibold text-amber-100 border border-white/20",children:h.jsx("span",{children:r.badge})}),h.jsxs("div",{className:"px-3 py-2 rounded-lg bg-white/15 backdrop-blur text-sm font-semibold shadow-sm",children:[new Intl.DateTimeFormat("en-GB").format(t)," - ",t.toLocaleTimeString("en-IN")]}),h.jsx("button",{className:"btn px-4 py-2 rounded-lg bg-white text-indigo-900 font-bold shadow hover:bg-amber-100 text-sm",onClick:rw,children:"Logout"})]})]})]})})}function Ep(n){var e,t,s="";if(typeof n=="string"||typeof n=="number")s+=n;else if(typeof n=="object")if(Array.isArray(n)){var r=n.length;for(e=0;e<r;e++)n[e]&&(t=Ep(n[e]))&&(s&&(s+=" "),s+=t)}else for(t in n)n[t]&&(s&&(s+=" "),s+=t);return s}function Tp(){for(var n,e,t=0,s="",r=arguments.length;t<r;t++)(n=arguments[t])&&(e=Ep(n))&&(s&&(s+=" "),s+=e);return s}const mI=[{key:"menu",label:"Menu",icon:"🍽️"},{key:"update",label:"Update Menu",icon:"📝"},{key:"orders",label:"Orders",icon:"📋"},{key:"accounts",label:"Accounts",icon:"📊"}];function gI({active:n,onChange:e}){const{user:t,isDemo:s}=Mn(),r=(t==null?void 0:t.role)||"owner";return h.jsx("nav",{"aria-label":"Main Navigation",className:"grid grid-cols-2 md:grid-cols-4 gap-3 my-4",children:mI.map(i=>{const a=n===i.key,l=s&&(r==="cashier"&&(i.key==="update"||i.key==="accounts")||r==="auditor"&&(i.key==="update"||i.key==="menu"));return h.jsxs("button",{className:Tp("btn h-14 text-sm md:text-base flex items-center justify-center gap-2 relative transition",a?"btn-primary shadow-lg":"btn-ghost",l&&"opacity-80"),onClick:()=>e(i.key),children:[h.jsx("span",{children:i.icon}),h.jsx("span",{children:i.label}),l&&h.jsx("span",{className:"absolute top-1 right-2 text-[9px] bg-slate-200 text-slate-700 px-1.5 py-0.2 rounded font-semibold",children:"view-only"})]},i.key)})})}const _I=["morning","afternoon","evening"];function wp({session:n,onChange:e}){return h.jsx("div",{className:"flex flex-wrap gap-2 mb-4",children:_I.map(t=>h.jsx("button",{className:Tp("btn px-3 py-2 capitalize",n===t?"btn-primary":"btn-ghost"),onClick:()=>e(t),children:t},t))})}const Zo=(n=0)=>new Intl.NumberFormat("en-IN",{style:"currency",currency:"INR",maximumFractionDigits:0}).format(n||0),yI=Array.from({length:20},(n,e)=>e+1);function vI({menu:n,session:e}){const[t,s]=O.useState({}),[r,i]=O.useState("cash"),[a,l]=O.useState(""),u=O.useMemo(()=>n.map(A=>{const S=t[A.id]||0;return{...A,qty:S,total:S*A.price}}),[n,t]),d=u.reduce((A,S)=>(A.total+=S.total,A),{total:0}),g=(A,S)=>{const x=Math.max(0,isNaN(S)?0:S);s(R=>({...R,[A]:x}))},_=async()=>{const A=u.filter(S=>S.qty>0);if(!A.length)return ye.error("Add at least one item");await up({sessionType:e,items:A.map(S=>({itemName:S.itemName,quantity:S.qty,unitPrice:S.price,totalPrice:S.total})),paymentMode:r,billTotal:d.total,customerNameOrToken:a,createdDate:Jn(),createdTime:new Date().toLocaleTimeString()}),ye.success("Bill saved"),s({}),l("")},E=()=>{s({}),l("")};return h.jsxs("div",{className:"space-y-4",children:[h.jsx("div",{className:"overflow-x-auto",children:h.jsxs("table",{className:"table min-w-[540px] sm:min-w-[640px]",children:[h.jsx("thead",{children:h.jsxs("tr",{children:[h.jsx("th",{children:"Item"}),h.jsx("th",{className:"text-center",children:"Qty"}),h.jsx("th",{children:"Price"}),h.jsx("th",{children:"Total"})]})}),h.jsx("tbody",{children:u.map(A=>h.jsxs("tr",{children:[h.jsx("td",{className:A.isAvailable?"":"text-slate-400 line-through",children:A.itemName}),h.jsx("td",{className:"text-center",children:h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsx("div",{className:"qty-scroll flex flex-nowrap gap-3 px-2 py-1",children:yI.map(S=>h.jsx("button",{className:"btn btn-ghost px-3 py-1 text-sm whitespace-nowrap qty-btn",onClick:()=>g(A.id,S),children:S},S))}),h.jsx("input",{value:A.qty,onChange:S=>g(A.id,Number(S.target.value)),className:"w-20 text-center border rounded-lg py-1",type:"number",min:"0",step:"1",inputMode:"numeric"})]})}),h.jsx("td",{children:Zo(A.price)}),h.jsx("td",{children:Zo(A.total)})]},A.id))})]})}),h.jsxs("div",{className:"flex flex-wrap gap-3 items-center",children:[h.jsxs("label",{className:"flex items-center gap-2",children:[h.jsx("input",{type:"radio",value:"cash",checked:r==="cash",onChange:()=>i("cash")}),"Cash"]}),h.jsxs("label",{className:"flex items-center gap-2",children:[h.jsx("input",{type:"radio",value:"upi",checked:r==="upi",onChange:()=>i("upi")}),"UPI"]}),h.jsx("input",{className:"input max-w-xs",placeholder:"Token / Name (optional)",value:a,onChange:A=>l(A.target.value)}),h.jsxs("div",{className:"ml-auto font-bold text-lg",children:["Grand Total: ",Zo(d.total)]})]}),h.jsxs("div",{className:"flex gap-3",children:[h.jsx("button",{className:"btn btn-primary",onClick:_,children:"Save Bill"}),h.jsx("button",{className:"btn btn-ghost",onClick:E,children:"Reset"})]})]})}function Ip(){return h.jsx("div",{className:"py-10 text-center text-primary",children:"Loading..."})}function EI(){const[n,e]=O.useState("morning"),[t,s]=O.useState([]),[r,i]=O.useState(!0);return O.useEffect(()=>(i(!0),cp(n,l=>{const u=l.docs.map(d=>({id:d.id,...d.data()})).filter(d=>d.isAvailable!==!1);s(u),i(!1)})),[n]),h.jsxs("div",{className:"card",children:[h.jsxs("div",{className:"flex items-center justify-between mb-3",children:[h.jsx("h2",{className:"text-xl font-semibold",children:"Menu"}),h.jsx(wp,{session:n,onChange:e})]}),r?h.jsx(Ip,{}):h.jsx(vI,{session:n,menu:t})]})}function TI({open:n,onClose:e,onConfirm:t}){return n?h.jsx("div",{className:"fixed inset-0 bg-black/30 flex items-center justify-center z-40",children:h.jsxs("div",{className:"card max-w-sm",children:[h.jsx("div",{className:"font-semibold mb-3",children:"Delete item?"}),h.jsxs("div",{className:"flex gap-3 justify-end",children:[h.jsx("button",{className:"btn btn-ghost",onClick:e,children:"Cancel"}),h.jsx("button",{className:"btn btn-primary",onClick:t,children:"Delete"})]})]})}):null}const wI=(n=0)=>new Intl.NumberFormat("en-IN",{style:"currency",currency:"INR",maximumFractionDigits:0}).format(n||0);function II(){var j;const{user:n,isDemo:e}=Mn(),[t,s]=O.useState("morning"),[r,i]=O.useState([]),[a,l]=O.useState({itemName:"",price:"",isAvailable:!0}),[u,d]=O.useState(null),[g,_]=O.useState(null),[E,A]=O.useState(null),S=!e||((j=n==null?void 0:n.permissions)==null?void 0:j.includes("update"))||(n==null?void 0:n.role)==="owner";O.useEffect(()=>cp(t,F=>i(F.docs.map(I=>({id:I.id,...I.data()})))),[t]);const x=(L,F,I)=>{const p=`Price updated: ${L}
Old: ₹${F} -> New: ₹${I}
Session: ${t}`;if(e){A({recipient:"+91 93426 95097 (Sri Raghavendra Mess Owner)",message:p,timestamp:new Date().toLocaleTimeString()});return}const m=`https://wa.me/919342695097?text=${encodeURIComponent(p)}`,v=document.createElement("a");v.href=m,v.target="_blank",v.rel="noreferrer noopener",document.body.appendChild(v),v.click(),document.body.removeChild(v)},R=async()=>{if(!S)return ye.error("Demo Notice: Switch to Owner role in the top banner to modify menu items.");if(!a.itemName.trim())return ye.error("Item name required");if(!Number(a.price))return ye.error("Valid price required");if(u){const L=r.find(I=>I.id===u),F=L==null?void 0:L.price;await yh(u,{...a,price:Number(a.price),sessionType:t}),ye.success("Item updated"),F!=null&&F!==Number(a.price)&&x(a.itemName,F,Number(a.price))}else await vw({...a,price:Number(a.price),sessionType:t}),ye.success("Item added");l({itemName:"",price:"",isAvailable:!0}),d(null)},V=L=>{if(!S)return ye.error("Switch to Owner role to edit menu items.");l({itemName:L.itemName,price:L.price,isAvailable:L.isAvailable}),d(L.id)},M=L=>{if(!S)return ye.error("Switch to Owner role to toggle availability.");yh(L.id,{isAvailable:!L.isAvailable})},C=async()=>{if(!S)return _(null),ye.error("Switch to Owner role to delete menu items.");await Ew(g),_(null),ye.success("Deleted")};return h.jsxs("div",{className:"card space-y-4",children:[h.jsxs("div",{className:"flex items-center justify-between flex-wrap gap-2",children:[h.jsxs("div",{children:[h.jsx("h2",{className:"text-xl font-semibold",children:"Update Menu"}),e&&!S&&h.jsxs("p",{className:"text-xs text-amber-600 font-medium",children:["View-only mode for ",(n==null?void 0:n.role)||"current"," role. Switch to Owner role above for full edit access."]})]}),h.jsx(wp,{session:t,onChange:s})]}),h.jsxs("div",{className:"grid md:grid-cols-4 gap-3",children:[h.jsx("input",{className:"input",placeholder:"Item name",value:a.itemName,onChange:L=>l(F=>({...F,itemName:L.target.value}))}),h.jsx("input",{className:"input",type:"number",placeholder:"Price (₹)",value:a.price,onChange:L=>l(F=>({...F,price:L.target.value}))}),h.jsxs("label",{className:"flex items-center gap-2 cursor-pointer select-none",children:[h.jsx("input",{type:"checkbox",checked:a.isAvailable,onChange:L=>l(F=>({...F,isAvailable:L.target.checked}))}),h.jsx("span",{className:"text-sm font-medium",children:"Available"})]}),h.jsx("button",{className:"btn btn-primary",onClick:R,children:u?"Update Item":"Add Item"})]}),h.jsx("div",{className:"overflow-x-auto",children:h.jsxs("table",{className:"table min-w-[520px]",children:[h.jsx("thead",{children:h.jsxs("tr",{children:[h.jsx("th",{children:"Item"}),h.jsx("th",{children:"Price"}),h.jsx("th",{children:"Avail"}),h.jsx("th",{children:"Action"})]})}),h.jsxs("tbody",{children:[r.length===0&&h.jsx("tr",{children:h.jsx("td",{colSpan:"4",className:"text-center text-slate-500 py-4",children:"No items for this session"})}),r.map(L=>h.jsxs("tr",{children:[h.jsx("td",{className:"font-medium",children:L.itemName}),h.jsx("td",{children:wI(L.price)}),h.jsx("td",{children:h.jsx("input",{type:"checkbox",checked:L.isAvailable,onChange:()=>M(L)})}),h.jsx("td",{children:h.jsxs("div",{className:"flex flex-wrap sm:flex-nowrap gap-2",children:[h.jsx("button",{className:"btn btn-ghost w-full sm:w-auto px-3 text-xs",onClick:()=>V(L),children:"Edit"}),h.jsx("button",{className:"btn btn-ghost w-full sm:w-auto px-3 text-xs text-rose-600 hover:text-rose-700",onClick:()=>_(L.id),children:"Delete"})]})})]},L.id))]})]})}),h.jsx(TI,{open:!!g,onClose:()=>_(null),onConfirm:C}),E&&h.jsx("div",{className:"fixed inset-0 bg-black/50 backdrop-blur-xs flex items-center justify-center z-50 p-4",children:h.jsxs("div",{className:"bg-white text-slate-900 rounded-2xl max-w-md w-full p-6 shadow-2xl border border-emerald-500/40 space-y-4",children:[h.jsxs("div",{className:"flex items-center gap-3",children:[h.jsx("div",{className:"w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold text-xl",children:"💬"}),h.jsxs("div",{children:[h.jsx("h3",{className:"text-base font-bold text-slate-900",children:"WhatsApp Notification Simulated"}),h.jsx("span",{className:"text-xs bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full font-semibold",children:"Demo Isolation Active"})]})]}),h.jsxs("div",{className:"bg-slate-50 border border-slate-200 rounded-xl p-3 space-y-1.5 text-xs text-slate-700",children:[h.jsxs("div",{children:[h.jsx("strong",{className:"text-slate-900",children:"Recipient:"})," ",E.recipient]}),h.jsxs("div",{children:[h.jsx("strong",{className:"text-slate-900",children:"Dispatched:"})," ",E.timestamp]}),h.jsxs("div",{className:"mt-2 pt-2 border-t border-slate-200",children:[h.jsx("strong",{className:"text-slate-900 block mb-1",children:"Payload Content:"}),h.jsx("pre",{className:"bg-white p-2 rounded border border-slate-200 text-slate-800 whitespace-pre-wrap font-sans text-xs",children:E.message})]})]}),h.jsx("p",{className:"text-xs text-slate-500 italic",children:"ℹ️ In production, this directly notifies the mess owner via WhatsApp Web. In Demo mode, external API/SMS/WhatsApp triggers are safely simulated without contacting real phone numbers."}),h.jsx("div",{className:"flex justify-end pt-1",children:h.jsx("button",{className:"btn btn-primary px-4 py-1.5 text-sm",onClick:()=>A(null),children:"Got it"})})]})})]})}function bI({onSaved:n,editing:e}){const[t,s]=O.useState(""),[r,i]=O.useState(""),[a,l]=O.useState(""),[u,d]=O.useState(!1),g=["Gas","Rice","Super Market","Vegetable","Tabers Salary","Milk"];O.useEffect(()=>{e?(s(e.expenseTitle||""),i(e.amount||""),l(e.note||"")):(s(""),i(""),l(""))},[e]);const _=async()=>{if(!t||!Number(r))return ye.error("Title and valid amount required");e!=null&&e.id?(await ww(e.id,{expenseTitle:t,amount:Number(r),note:a,expenseDate:e.expenseDate||Jn()}),ye.success("Expense updated")):(await Tw({expenseTitle:t,amount:Number(r),note:a,expenseDate:Jn()}),ye.success("Expense saved")),s(""),i(""),l(""),n&&n()},E=g.filter(A=>A.toLowerCase().includes(t.toLowerCase())).slice(0,6);return h.jsxs("div",{className:"card",children:[h.jsx("div",{className:"font-semibold mb-2",children:e?"Edit Expense":"Add Expense"}),h.jsxs("div",{className:"grid md:grid-cols-3 gap-3 items-start",children:[h.jsxs("div",{className:"md:col-span-2 relative",children:[h.jsx("input",{className:"input input-lg w-full",placeholder:"Select or type title",value:t,onChange:A=>s(A.target.value),onFocus:()=>d(!0),onBlur:()=>setTimeout(()=>d(!1),120)}),u&&E.length>0&&h.jsx("div",{className:"absolute z-20 mt-2 w-full bg-white border border-slate-200 rounded-xl shadow-xl overflow-hidden",children:E.map(A=>h.jsx("button",{type:"button",className:"block w-full text-left px-4 py-3 hover:bg-slate-100 text-slate-800 text-base",onMouseDown:S=>{S.preventDefault(),s(A),d(!1)},children:A},A))})]}),h.jsx("input",{className:"input",type:"number",placeholder:"Amount",value:r,onChange:A=>i(A.target.value)}),h.jsx("input",{className:"input md:col-span-3",placeholder:"Note (optional)",value:a,onChange:A=>l(A.target.value)})]}),h.jsx("button",{className:"btn btn-primary mt-3",onClick:_,children:e?"Update Expense":"Save Expense"})]})}const AI=(n=0)=>new Intl.NumberFormat("en-IN",{style:"currency",currency:"INR",maximumFractionDigits:0}).format(n||0);function xI({totals:n}){const e=[{title:"Grand Total",value:n.grandTotal},{title:"Expense",value:n.expense},{title:"Net Profit",value:n.net}];return h.jsx("div",{className:"grid md:grid-cols-3 gap-3",children:e.map(t=>h.jsxs("div",{className:"card",children:[h.jsx("div",{className:"text-sm text-slate-500",children:t.title}),h.jsx("div",{className:"text-2xl font-bold",children:AI(t.value)})]},t.title))})}var bp={exports:{}};/* @license
Papa Parse
v5.5.3
https://github.com/mholt/PapaParse
License: MIT
*/(function(n,e){((t,s)=>{n.exports=s()})(Zp,function t(){var s=typeof self<"u"?self:typeof window<"u"?window:s!==void 0?s:{},r,i=!s.document&&!!s.postMessage,a=s.IS_PAPA_WORKER||!1,l={},u=0,d={};function g(p){this._handle=null,this._finished=!1,this._completed=!1,this._halted=!1,this._input=null,this._baseIndex=0,this._partialLine="",this._rowCount=0,this._start=0,this._nextChunk=null,this.isFirstChunk=!0,this._completeResults={data:[],errors:[],meta:{}},(function(m){var v=L(m);v.chunkSize=parseInt(v.chunkSize),m.step||m.chunk||(v.chunkSize=null),this._handle=new x(v),(this._handle.streamer=this)._config=v}).call(this,p),this.parseChunk=function(m,v){var T=parseInt(this._config.skipFirstNLines)||0;if(this.isFirstChunk&&0<T){let w=this._config.newline;w||(b=this._config.quoteChar||'"',w=this._handle.guessLineEndings(m,b)),m=[...m.split(w).slice(T)].join(w)}this.isFirstChunk&&I(this._config.beforeFirstChunk)&&(b=this._config.beforeFirstChunk(m))!==void 0&&(m=b),this.isFirstChunk=!1,this._halted=!1;var T=this._partialLine+m,b=(this._partialLine="",this._handle.parse(T,this._baseIndex,!this._finished));if(!this._handle.paused()&&!this._handle.aborted()){if(m=b.meta.cursor,T=(this._finished||(this._partialLine=T.substring(m-this._baseIndex),this._baseIndex=m),b&&b.data&&(this._rowCount+=b.data.length),this._finished||this._config.preview&&this._rowCount>=this._config.preview),a)s.postMessage({results:b,workerId:d.WORKER_ID,finished:T});else if(I(this._config.chunk)&&!v){if(this._config.chunk(b,this._handle),this._handle.paused()||this._handle.aborted())return void(this._halted=!0);this._completeResults=b=void 0}return this._config.step||this._config.chunk||(this._completeResults.data=this._completeResults.data.concat(b.data),this._completeResults.errors=this._completeResults.errors.concat(b.errors),this._completeResults.meta=b.meta),this._completed||!T||!I(this._config.complete)||b&&b.meta.aborted||(this._config.complete(this._completeResults,this._input),this._completed=!0),T||b&&b.meta.paused||this._nextChunk(),b}this._halted=!0},this._sendError=function(m){I(this._config.error)?this._config.error(m):a&&this._config.error&&s.postMessage({workerId:d.WORKER_ID,error:m,finished:!1})}}function _(p){var m;(p=p||{}).chunkSize||(p.chunkSize=d.RemoteChunkSize),g.call(this,p),this._nextChunk=i?function(){this._readChunk(),this._chunkLoaded()}:function(){this._readChunk()},this.stream=function(v){this._input=v,this._nextChunk()},this._readChunk=function(){if(this._finished)this._chunkLoaded();else{if(m=new XMLHttpRequest,this._config.withCredentials&&(m.withCredentials=this._config.withCredentials),i||(m.onload=F(this._chunkLoaded,this),m.onerror=F(this._chunkError,this)),m.open(this._config.downloadRequestBody?"POST":"GET",this._input,!i),this._config.downloadRequestHeaders){var v,T=this._config.downloadRequestHeaders;for(v in T)m.setRequestHeader(v,T[v])}var b;this._config.chunkSize&&(b=this._start+this._config.chunkSize-1,m.setRequestHeader("Range","bytes="+this._start+"-"+b));try{m.send(this._config.downloadRequestBody)}catch(w){this._chunkError(w.message)}i&&m.status===0&&this._chunkError()}},this._chunkLoaded=function(){m.readyState===4&&(m.status<200||400<=m.status?this._chunkError():(this._start+=this._config.chunkSize||m.responseText.length,this._finished=!this._config.chunkSize||this._start>=(v=>(v=v.getResponseHeader("Content-Range"))!==null?parseInt(v.substring(v.lastIndexOf("/")+1)):-1)(m),this.parseChunk(m.responseText)))},this._chunkError=function(v){v=m.statusText||v,this._sendError(new Error(v))}}function E(p){(p=p||{}).chunkSize||(p.chunkSize=d.LocalChunkSize),g.call(this,p);var m,v,T=typeof FileReader<"u";this.stream=function(b){this._input=b,v=b.slice||b.webkitSlice||b.mozSlice,T?((m=new FileReader).onload=F(this._chunkLoaded,this),m.onerror=F(this._chunkError,this)):m=new FileReaderSync,this._nextChunk()},this._nextChunk=function(){this._finished||this._config.preview&&!(this._rowCount<this._config.preview)||this._readChunk()},this._readChunk=function(){var b=this._input,w=(this._config.chunkSize&&(w=Math.min(this._start+this._config.chunkSize,this._input.size),b=v.call(b,this._start,w)),m.readAsText(b,this._config.encoding));T||this._chunkLoaded({target:{result:w}})},this._chunkLoaded=function(b){this._start+=this._config.chunkSize,this._finished=!this._config.chunkSize||this._start>=this._input.size,this.parseChunk(b.target.result)},this._chunkError=function(){this._sendError(m.error)}}function A(p){var m;g.call(this,p=p||{}),this.stream=function(v){return m=v,this._nextChunk()},this._nextChunk=function(){var v,T;if(!this._finished)return v=this._config.chunkSize,m=v?(T=m.substring(0,v),m.substring(v)):(T=m,""),this._finished=!m,this.parseChunk(T)}}function S(p){g.call(this,p=p||{});var m=[],v=!0,T=!1;this.pause=function(){g.prototype.pause.apply(this,arguments),this._input.pause()},this.resume=function(){g.prototype.resume.apply(this,arguments),this._input.resume()},this.stream=function(b){this._input=b,this._input.on("data",this._streamData),this._input.on("end",this._streamEnd),this._input.on("error",this._streamError)},this._checkIsFinished=function(){T&&m.length===1&&(this._finished=!0)},this._nextChunk=function(){this._checkIsFinished(),m.length?this.parseChunk(m.shift()):v=!0},this._streamData=F(function(b){try{m.push(typeof b=="string"?b:b.toString(this._config.encoding)),v&&(v=!1,this._checkIsFinished(),this.parseChunk(m.shift()))}catch(w){this._streamError(w)}},this),this._streamError=F(function(b){this._streamCleanUp(),this._sendError(b)},this),this._streamEnd=F(function(){this._streamCleanUp(),T=!0,this._streamData("")},this),this._streamCleanUp=F(function(){this._input.removeListener("data",this._streamData),this._input.removeListener("end",this._streamEnd),this._input.removeListener("error",this._streamError)},this)}function x(p){var m,v,T,b,w=Math.pow(2,53),te=-w,Ie=/^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/,De=/^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/,Q=this,de=0,H=0,Pe=!1,Z=!1,J=[],B={data:[],errors:[],meta:{}};function Ce(re){return p.skipEmptyLines==="greedy"?re.join("").trim()==="":re.length===1&&re[0].length===0}function ve(){if(B&&T&&(ze("Delimiter","UndetectableDelimiter","Unable to auto-detect delimiting character; defaulted to '"+d.DefaultDelimiter+"'"),T=!1),p.skipEmptyLines&&(B.data=B.data.filter(function(W){return!Ce(W)})),Ue()){let W=function(Ee,xe){I(p.transformHeader)&&(Ee=p.transformHeader(Ee,xe)),J.push(Ee)};if(B)if(Array.isArray(B.data[0])){for(var re=0;Ue()&&re<B.data.length;re++)B.data[re].forEach(W);B.data.splice(0,1)}else B.data.forEach(W)}function ce(W,Ee){for(var xe=p.header?{}:[],he=0;he<W.length;he++){var fe=he,se=W[he],se=((ut,ee)=>(Te=>(p.dynamicTypingFunction&&p.dynamicTyping[Te]===void 0&&(p.dynamicTyping[Te]=p.dynamicTypingFunction(Te)),(p.dynamicTyping[Te]||p.dynamicTyping)===!0))(ut)?ee==="true"||ee==="TRUE"||ee!=="false"&&ee!=="FALSE"&&((Te=>{if(Ie.test(Te)&&(Te=parseFloat(Te),te<Te&&Te<w))return 1})(ee)?parseFloat(ee):De.test(ee)?new Date(ee):ee===""?null:ee):ee)(fe=p.header?he>=J.length?"__parsed_extra":J[he]:fe,se=p.transform?p.transform(se,fe):se);fe==="__parsed_extra"?(xe[fe]=xe[fe]||[],xe[fe].push(se)):xe[fe]=se}return p.header&&(he>J.length?ze("FieldMismatch","TooManyFields","Too many fields: expected "+J.length+" fields but parsed "+he,H+Ee):he<J.length&&ze("FieldMismatch","TooFewFields","Too few fields: expected "+J.length+" fields but parsed "+he,H+Ee)),xe}var ge;B&&(p.header||p.dynamicTyping||p.transform)&&(ge=1,!B.data.length||Array.isArray(B.data[0])?(B.data=B.data.map(ce),ge=B.data.length):B.data=ce(B.data,0),p.header&&B.meta&&(B.meta.fields=J),H+=ge)}function Ue(){return p.header&&J.length===0}function ze(re,ce,ge,W){re={type:re,code:ce,message:ge},W!==void 0&&(re.row=W),B.errors.push(re)}I(p.step)&&(b=p.step,p.step=function(re){B=re,Ue()?ve():(ve(),B.data.length!==0&&(de+=re.data.length,p.preview&&de>p.preview?v.abort():(B.data=B.data[0],b(B,Q))))}),this.parse=function(re,ce,ge){var W=p.quoteChar||'"',W=(p.newline||(p.newline=this.guessLineEndings(re,W)),T=!1,p.delimiter?I(p.delimiter)&&(p.delimiter=p.delimiter(re),B.meta.delimiter=p.delimiter):((W=((Ee,xe,he,fe,se)=>{var ut,ee,Te,pt;se=se||[",","	","|",";",d.RECORD_SEP,d.UNIT_SEP];for(var qt=0;qt<se.length;qt++){for(var mt,zt=se[qt],Oe=0,ht=0,ae=0,pe=(Te=void 0,new V({comments:fe,delimiter:zt,newline:xe,preview:10}).parse(Ee)),it=0;it<pe.data.length;it++)he&&Ce(pe.data[it])?ae++:(mt=pe.data[it].length,ht+=mt,Te===void 0?Te=mt:0<mt&&(Oe+=Math.abs(mt-Te),Te=mt));0<pe.data.length&&(ht/=pe.data.length-ae),(ee===void 0||Oe<=ee)&&(pt===void 0||pt<ht)&&1.99<ht&&(ee=Oe,ut=zt,pt=ht)}return{successful:!!(p.delimiter=ut),bestDelimiter:ut}})(re,p.newline,p.skipEmptyLines,p.comments,p.delimitersToGuess)).successful?p.delimiter=W.bestDelimiter:(T=!0,p.delimiter=d.DefaultDelimiter),B.meta.delimiter=p.delimiter),L(p));return p.preview&&p.header&&W.preview++,m=re,v=new V(W),B=v.parse(m,ce,ge),ve(),Pe?{meta:{paused:!0}}:B||{meta:{paused:!1}}},this.paused=function(){return Pe},this.pause=function(){Pe=!0,v.abort(),m=I(p.chunk)?"":m.substring(v.getCharIndex())},this.resume=function(){Q.streamer._halted?(Pe=!1,Q.streamer.parseChunk(m,!0)):setTimeout(Q.resume,3)},this.aborted=function(){return Z},this.abort=function(){Z=!0,v.abort(),B.meta.aborted=!0,I(p.complete)&&p.complete(B),m=""},this.guessLineEndings=function(Ee,W){Ee=Ee.substring(0,1048576);var W=new RegExp(R(W)+"([^]*?)"+R(W),"gm"),ge=(Ee=Ee.replace(W,"")).split("\r"),W=Ee.split(`
`),Ee=1<W.length&&W[0].length<ge[0].length;if(ge.length===1||Ee)return`
`;for(var xe=0,he=0;he<ge.length;he++)ge[he][0]===`
`&&xe++;return xe>=ge.length/2?`\r
`:"\r"}}function R(p){return p.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function V(p){var m=(p=p||{}).delimiter,v=p.newline,T=p.comments,b=p.step,w=p.preview,te=p.fastMode,Ie=null,De=!1,Q=p.quoteChar==null?'"':p.quoteChar,de=Q;if(p.escapeChar!==void 0&&(de=p.escapeChar),(typeof m!="string"||-1<d.BAD_DELIMITERS.indexOf(m))&&(m=","),T===m)throw new Error("Comment character same as delimiter");T===!0?T="#":(typeof T!="string"||-1<d.BAD_DELIMITERS.indexOf(T))&&(T=!1),v!==`
`&&v!=="\r"&&v!==`\r
`&&(v=`
`);var H=0,Pe=!1;this.parse=function(Z,J,B){if(typeof Z!="string")throw new Error("Input must be a string");var Ce=Z.length,ve=m.length,Ue=v.length,ze=T.length,re=I(b),ce=[],ge=[],W=[],Ee=H=0;if(!Z)return Oe();if(te||te!==!1&&Z.indexOf(Q)===-1){for(var xe=Z.split(v),he=0;he<xe.length;he++){if(W=xe[he],H+=W.length,he!==xe.length-1)H+=v.length;else if(B)return Oe();if(!T||W.substring(0,ze)!==T){if(re){if(ce=[],pt(W.split(m)),ht(),Pe)return Oe()}else pt(W.split(m));if(w&&w<=he)return ce=ce.slice(0,w),Oe(!0)}}return Oe()}for(var fe=Z.indexOf(m,H),se=Z.indexOf(v,H),ut=new RegExp(R(de)+R(Q),"g"),ee=Z.indexOf(Q,H);;)if(Z[H]===Q)for(ee=H,H++;;){if((ee=Z.indexOf(Q,ee+1))===-1)return B||ge.push({type:"Quotes",code:"MissingQuotes",message:"Quoted field unterminated",row:ce.length,index:H}),mt();if(ee===Ce-1)return mt(Z.substring(H,ee).replace(ut,Q));if(Q===de&&Z[ee+1]===de)ee++;else if(Q===de||ee===0||Z[ee-1]!==de){fe!==-1&&fe<ee+1&&(fe=Z.indexOf(m,ee+1));var Te=qt((se=se!==-1&&se<ee+1?Z.indexOf(v,ee+1):se)===-1?fe:Math.min(fe,se));if(Z.substr(ee+1+Te,ve)===m){W.push(Z.substring(H,ee).replace(ut,Q)),Z[H=ee+1+Te+ve]!==Q&&(ee=Z.indexOf(Q,H)),fe=Z.indexOf(m,H),se=Z.indexOf(v,H);break}if(Te=qt(se),Z.substring(ee+1+Te,ee+1+Te+Ue)===v){if(W.push(Z.substring(H,ee).replace(ut,Q)),zt(ee+1+Te+Ue),fe=Z.indexOf(m,H),ee=Z.indexOf(Q,H),re&&(ht(),Pe))return Oe();if(w&&ce.length>=w)return Oe(!0);break}ge.push({type:"Quotes",code:"InvalidQuotes",message:"Trailing quote on quoted field is malformed",row:ce.length,index:H}),ee++}}else if(T&&W.length===0&&Z.substring(H,H+ze)===T){if(se===-1)return Oe();H=se+Ue,se=Z.indexOf(v,H),fe=Z.indexOf(m,H)}else if(fe!==-1&&(fe<se||se===-1))W.push(Z.substring(H,fe)),H=fe+ve,fe=Z.indexOf(m,H);else{if(se===-1)break;if(W.push(Z.substring(H,se)),zt(se+Ue),re&&(ht(),Pe))return Oe();if(w&&ce.length>=w)return Oe(!0)}return mt();function pt(ae){ce.push(ae),Ee=H}function qt(ae){var pe=0;return pe=ae!==-1&&(ae=Z.substring(ee+1,ae))&&ae.trim()===""?ae.length:pe}function mt(ae){return B||(ae===void 0&&(ae=Z.substring(H)),W.push(ae),H=Ce,pt(W),re&&ht()),Oe()}function zt(ae){H=ae,pt(W),W=[],se=Z.indexOf(v,H)}function Oe(ae){if(p.header&&!J&&ce.length&&!De){var pe=ce[0],it=Object.create(null),ss=new Set(pe);let Os=!1;for(let sn=0;sn<pe.length;sn++){let Ye=pe[sn];if(it[Ye=I(p.transformHeader)?p.transformHeader(Ye,sn):Ye]){let rn,Vs=it[Ye];for(;rn=Ye+"_"+Vs,Vs++,ss.has(rn););ss.add(rn),pe[sn]=rn,it[Ye]++,Os=!0,(Ie=Ie===null?{}:Ie)[rn]=Ye}else it[Ye]=1,pe[sn]=Ye;ss.add(Ye)}Os&&console.warn("Duplicate headers found and renamed."),De=!0}return{data:ce,errors:ge,meta:{delimiter:m,linebreak:v,aborted:Pe,truncated:!!ae,cursor:Ee+(J||0),renamedHeaders:Ie}}}function ht(){b(Oe()),ce=[],ge=[]}},this.abort=function(){Pe=!0},this.getCharIndex=function(){return H}}function M(p){var m=p.data,v=l[m.workerId],T=!1;if(m.error)v.userError(m.error,m.file);else if(m.results&&m.results.data){var b={abort:function(){T=!0,C(m.workerId,{data:[],errors:[],meta:{aborted:!0}})},pause:j,resume:j};if(I(v.userStep)){for(var w=0;w<m.results.data.length&&(v.userStep({data:m.results.data[w],errors:m.results.errors,meta:m.results.meta},b),!T);w++);delete m.results}else I(v.userChunk)&&(v.userChunk(m.results,b,m.file),delete m.results)}m.finished&&!T&&C(m.workerId,m.results)}function C(p,m){var v=l[p];I(v.userComplete)&&v.userComplete(m),v.terminate(),delete l[p]}function j(){throw new Error("Not implemented.")}function L(p){if(typeof p!="object"||p===null)return p;var m,v=Array.isArray(p)?[]:{};for(m in p)v[m]=L(p[m]);return v}function F(p,m){return function(){p.apply(m,arguments)}}function I(p){return typeof p=="function"}return d.parse=function(p,m){var v=(m=m||{}).dynamicTyping||!1;if(I(v)&&(m.dynamicTypingFunction=v,v={}),m.dynamicTyping=v,m.transform=!!I(m.transform)&&m.transform,!m.worker||!d.WORKERS_SUPPORTED)return v=null,d.NODE_STREAM_INPUT,typeof p=="string"?(p=(T=>T.charCodeAt(0)!==65279?T:T.slice(1))(p),v=new(m.download?_:A)(m)):p.readable===!0&&I(p.read)&&I(p.on)?v=new S(m):(s.File&&p instanceof File||p instanceof Object)&&(v=new E(m)),v.stream(p);(v=(()=>{var T;return!!d.WORKERS_SUPPORTED&&(T=(()=>{var b=s.URL||s.webkitURL||null,w=t.toString();return d.BLOB_URL||(d.BLOB_URL=b.createObjectURL(new Blob(["var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ","(",w,")();"],{type:"text/javascript"})))})(),(T=new s.Worker(T)).onmessage=M,T.id=u++,l[T.id]=T)})()).userStep=m.step,v.userChunk=m.chunk,v.userComplete=m.complete,v.userError=m.error,m.step=I(m.step),m.chunk=I(m.chunk),m.complete=I(m.complete),m.error=I(m.error),delete m.worker,v.postMessage({input:p,config:m,workerId:v.id})},d.unparse=function(p,m){var v=!1,T=!0,b=",",w=`\r
`,te='"',Ie=te+te,De=!1,Q=null,de=!1,H=((()=>{if(typeof m=="object"){if(typeof m.delimiter!="string"||d.BAD_DELIMITERS.filter(function(J){return m.delimiter.indexOf(J)!==-1}).length||(b=m.delimiter),typeof m.quotes!="boolean"&&typeof m.quotes!="function"&&!Array.isArray(m.quotes)||(v=m.quotes),typeof m.skipEmptyLines!="boolean"&&typeof m.skipEmptyLines!="string"||(De=m.skipEmptyLines),typeof m.newline=="string"&&(w=m.newline),typeof m.quoteChar=="string"&&(te=m.quoteChar),typeof m.header=="boolean"&&(T=m.header),Array.isArray(m.columns)){if(m.columns.length===0)throw new Error("Option columns is empty");Q=m.columns}m.escapeChar!==void 0&&(Ie=m.escapeChar+te),m.escapeFormulae instanceof RegExp?de=m.escapeFormulae:typeof m.escapeFormulae=="boolean"&&m.escapeFormulae&&(de=/^[=+\-@\t\r].*$/)}})(),new RegExp(R(te),"g"));if(typeof p=="string"&&(p=JSON.parse(p)),Array.isArray(p)){if(!p.length||Array.isArray(p[0]))return Pe(null,p,De);if(typeof p[0]=="object")return Pe(Q||Object.keys(p[0]),p,De)}else if(typeof p=="object")return typeof p.data=="string"&&(p.data=JSON.parse(p.data)),Array.isArray(p.data)&&(p.fields||(p.fields=p.meta&&p.meta.fields||Q),p.fields||(p.fields=Array.isArray(p.data[0])?p.fields:typeof p.data[0]=="object"?Object.keys(p.data[0]):[]),Array.isArray(p.data[0])||typeof p.data[0]=="object"||(p.data=[p.data])),Pe(p.fields||[],p.data||[],De);throw new Error("Unable to serialize unrecognized input");function Pe(J,B,Ce){var ve="",Ue=(typeof J=="string"&&(J=JSON.parse(J)),typeof B=="string"&&(B=JSON.parse(B)),Array.isArray(J)&&0<J.length),ze=!Array.isArray(B[0]);if(Ue&&T){for(var re=0;re<J.length;re++)0<re&&(ve+=b),ve+=Z(J[re],re);0<B.length&&(ve+=w)}for(var ce=0;ce<B.length;ce++){var ge=(Ue?J:B[ce]).length,W=!1,Ee=Ue?Object.keys(B[ce]).length===0:B[ce].length===0;if(Ce&&!Ue&&(W=Ce==="greedy"?B[ce].join("").trim()==="":B[ce].length===1&&B[ce][0].length===0),Ce==="greedy"&&Ue){for(var xe=[],he=0;he<ge;he++){var fe=ze?J[he]:he;xe.push(B[ce][fe])}W=xe.join("").trim()===""}if(!W){for(var se=0;se<ge;se++){0<se&&!Ee&&(ve+=b);var ut=Ue&&ze?J[se]:se;ve+=Z(B[ce][ut],se)}ce<B.length-1&&(!Ce||0<ge&&!Ee)&&(ve+=w)}}return ve}function Z(J,B){var Ce,ve;return J==null?"":J.constructor===Date?JSON.stringify(J).slice(1,25):(ve=!1,de&&typeof J=="string"&&de.test(J)&&(J="'"+J,ve=!0),Ce=J.toString().replace(H,Ie),(ve=ve||v===!0||typeof v=="function"&&v(J,B)||Array.isArray(v)&&v[B]||((Ue,ze)=>{for(var re=0;re<ze.length;re++)if(-1<Ue.indexOf(ze[re]))return!0;return!1})(Ce,d.BAD_DELIMITERS)||-1<Ce.indexOf(b)||Ce.charAt(0)===" "||Ce.charAt(Ce.length-1)===" ")?te+Ce+te:Ce)}},d.RECORD_SEP="",d.UNIT_SEP="",d.BYTE_ORDER_MARK="\uFEFF",d.BAD_DELIMITERS=["\r",`
`,'"',d.BYTE_ORDER_MARK],d.WORKERS_SUPPORTED=!i&&!!s.Worker,d.NODE_STREAM_INPUT=1,d.LocalChunkSize=10485760,d.RemoteChunkSize=5242880,d.DefaultDelimiter=",",d.Parser=V,d.ParserHandle=x,d.NetworkStreamer=_,d.FileStreamer=E,d.StringStreamer=A,d.ReadableStreamStreamer=S,s.jQuery&&((r=s.jQuery).fn.parse=function(p){var m=p.config||{},v=[];return this.each(function(w){if(!(r(this).prop("tagName").toUpperCase()==="INPUT"&&r(this).attr("type").toLowerCase()==="file"&&s.FileReader)||!this.files||this.files.length===0)return!0;for(var te=0;te<this.files.length;te++)v.push({file:this.files[te],inputElem:this,instanceConfig:r.extend({},m)})}),T(),this;function T(){if(v.length===0)I(p.complete)&&p.complete();else{var w,te,Ie,De,Q=v[0];if(I(p.before)){var de=p.before(Q.file,Q.inputElem);if(typeof de=="object"){if(de.action==="abort")return w="AbortError",te=Q.file,Ie=Q.inputElem,De=de.reason,void(I(p.error)&&p.error({name:w},te,Ie,De));if(de.action==="skip")return void b();typeof de.config=="object"&&(Q.instanceConfig=r.extend(Q.instanceConfig,de.config))}else if(de==="skip")return void b()}var H=Q.instanceConfig.complete;Q.instanceConfig.complete=function(Pe){I(H)&&H(Pe,Q.file,Q.inputElem),b()},d.parse(Q.file,Q.instanceConfig)}}function b(){v.splice(0,1),T()}}),a&&(s.onmessage=function(p){p=p.data,d.WORKER_ID===void 0&&p&&(d.WORKER_ID=p.workerId),typeof p.input=="string"?s.postMessage({workerId:d.WORKER_ID,results:d.parse(p.input,p.config),finished:!0}):(s.File&&p.input instanceof File||p.input instanceof Object)&&(p=d.parse(p.input,p.config))&&s.postMessage({workerId:d.WORKER_ID,results:p,finished:!0})}),(_.prototype=Object.create(g.prototype)).constructor=_,(E.prototype=Object.create(g.prototype)).constructor=E,(A.prototype=Object.create(A.prototype)).constructor=A,(S.prototype=Object.create(g.prototype)).constructor=S,d})})(bp);var RI=bp.exports;const SI=em(RI),ea=(n,e)=>{if(!n||n.length===0){alert("No data to export");return}const t=SI.unparse(n,{skipEmptyLines:!0}),s=new Blob([t],{type:"text/csv;charset=utf-8;"}),r=URL.createObjectURL(s),i=document.createElement("a");i.href=r,i.download=e||"export.csv",i.click(),URL.revokeObjectURL(r)},PI=["Section","Date","Payment","Total","Customer","Items","Title","Amount","Note","TotalIncome","TotalExpense","ProfitOrLoss"],Eh={morning:0,afternoon:1,evening:2,order:3},CI=(n=[])=>{const e={morning:[],afternoon:[],evening:[],order:[]};return n.forEach(t=>{(e[t.sessionType]||e.morning).push({section:t.sessionType,date:Ge(t.createdDate),payment:t.paymentMode,total:t.billTotal,customer:t.customerNameOrToken,items:(t.items||[]).map(r=>r.itemName).join("; ")})}),e},ys=(n=0)=>Math.round((n||0)*100)/100,gt=(n=0)=>ys(n).toFixed(2),Th=(n=[])=>ys(n.reduce((e,t)=>e+(t.billTotal||0),0)),wh=(n=[])=>ys(n.reduce((e,t)=>e+(t.amount||0),0)),_t=(n={})=>[n.section||"",n.date||"",n.payment||"",n.total??"",n.customer||"",n.items||"",n.title||"",n.amount??"",n.note||"",n.totalIncome??"",n.totalExpense??"",n.profitOrLoss??""],Ih=n=>{if(!n.createdDate)return 0;const e=n.createdTime?`${n.createdDate} ${n.createdTime}`:n.createdDate,t=Date.parse(e);return Number.isNaN(t)?Date.parse(n.createdDate)||0:t},NI=(n=[])=>[...n].sort((e,t)=>{const s=Ih(e),r=Ih(t);if(r!==s)return r-s;const i=Eh[e.sessionType]??99,a=Eh[t.sessionType]??99;return i-a});function Ap({bills:n=[],expenses:e=[],today:t,history:s=[],orders:r=[]}){const[i,a]=O.useState({title:"",type:"",data:{}}),l=()=>_t({}),u=()=>{const C=CI(n),j=Th(n),L=wh(e),F=[];return F.push(_t({section:"--- Morning ---"})),C.morning.forEach(I=>F.push(_t(I))),F.push(l()),F.push(_t({section:"--- Afternoon ---"})),C.afternoon.forEach(I=>F.push(_t(I))),F.push(l()),F.push(_t({section:"--- Evening ---"})),C.evening.forEach(I=>F.push(_t(I))),F.push(l()),F.push(_t({section:"--- Orders ---"})),C.order.forEach(I=>F.push(_t(I))),F.push(l()),F.push(_t({section:"--- Expenses ---"})),e.forEach(I=>F.push(_t({section:"expense",date:Ge(I.expenseDate),title:I.expenseTitle,amount:I.amount,note:I.note}))),F.push(l()),F.push(_t({section:"Totals",totalIncome:gt(j),totalExpense:gt(L),profitOrLoss:gt(j-L)})),F},d=()=>{const C=NI(n),j=Th(n),L=wh(e),F={incomeTotal:ys(j),expenseTotal:ys(L),profit:ys(j-L)};return{bills:C,expenses:e,summary:F}},g=()=>s.map(C=>[Ge(C.date),gt(C.totalSales),gt(C.totalExpense),gt(C.netProfit)]),_=()=>r.map(C=>[C.sessionType,Ge(C.createdDate),C.paymentMode,C.billTotal,C.customerNameOrToken,(C.items||[]).map(j=>j.itemName).join("; ")]),E=()=>{if(!t)return alert("No date");ea([PI,l(),...u()],`today-bills-expenses-${t}.csv`)},A=()=>{if(!t)return alert("No date");a({title:`Bills + Expenses (${Ge(t)})`,type:"today",data:d()})},S=()=>{ea([["Date","Total Sales","Expense","Profit"],[""],...g()],"history.csv")},x=()=>{a({title:"History",type:"history",data:{header:["Date","Total Sales","Expense","Profit"],rows:g()}})},R=()=>{if(!r.length)return alert("No orders");ea([["Session","Date","Payment","Total","Customer","Items"],[""],..._()],`orders-${t||"all"}.csv`)},V=()=>{if(!r.length)return alert("No orders");a({title:"Orders",type:"orders",data:{header:["Session","Date","Payment","Total","Customer","Items"],rows:_()}})},M=()=>{var v;if(i.type!=="today"||!((v=i.data)!=null&&v.bills))return;const{bills:C,expenses:j,summary:L}=i.data,F=C.map(T=>`
      <tr>
        <td>${T.sessionType}</td><td>${Ge(T.createdDate)}</td><td>${T.createdTime||""}</td>
        <td>${T.paymentMode}</td><td>${T.billTotal}</td><td>${T.customerNameOrToken||"-"}</td>
        <td>${(T.items||[]).map(b=>b.itemName).join(", ")}</td>
      </tr>`).join(""),I=j.map(T=>`
      <tr><td>${Ge(T.expenseDate)}</td><td>${T.expenseTitle}</td><td>${T.amount}</td><td>${T.note||""}</td></tr>
    `).join("")||'<tr><td colspan="5">No expenses</td></tr>',p=`
      <html>
      <head>
        <title>${i.title}</title>
        <style>
          body{font-family:Arial, sans-serif; padding:24px; color:#0f172a;}
          h1{margin:0 0 12px;}
          table{width:100%; border-collapse:collapse; margin-bottom:16px;}
          th,td{border:1px solid #e2e8f0; padding:8px; font-size:13px; text-align:left;}
          th{background:#f8fafc;}
          .summary{margin-top:8px; font-weight:600;}
        </style>
      </head>
      <body>
        <h1>${i.title}</h1>
        <h3>Bills</h3>
        <table><thead><tr><th>Session</th><th>Date</th><th>Time</th><th>Payment</th><th>Total</th><th>Customer</th><th>Items</th></tr></thead>
        <tbody>${F}</tbody></table>
        <h3>Expenses</h3>
        <table><thead><tr><th>Date</th><th>Title</th><th>Amount</th><th>Note</th></tr></thead>
        <tbody>${I}</tbody></table>
        <div class="summary">Total Income: ${gt(L.incomeTotal)} | Total Expense: ${gt(L.expenseTotal)} | Profit/Loss: ${gt(L.profit)}</div>
      </body></html>`,m=window.open("","_blank","width=1000,height=1200");if(!m)return alert("Please allow popups for print/PDF");m.document.write(p),m.document.close(),m.focus(),m.print()};return h.jsxs("div",{className:"flex flex-wrap gap-3",children:[t&&h.jsx("button",{className:"btn btn-ghost",onClick:E,children:"Export Bills + Expenses (single CSV)"}),t&&h.jsx("button",{className:"btn btn-ghost",onClick:A,children:"Preview Bills + Expenses"}),s&&s.length>0&&h.jsx("button",{className:"btn btn-ghost",onClick:S,children:"Export History CSV"}),s&&s.length>0&&h.jsx("button",{className:"btn btn-ghost",onClick:x,children:"Preview History"}),r&&r.length>0&&h.jsx("button",{className:"btn btn-ghost",onClick:R,children:"Export Orders CSV"}),r&&r.length>0&&h.jsx("button",{className:"btn btn-ghost",onClick:V,children:"Preview Orders"}),i.type&&h.jsx("div",{className:"fixed inset-0 bg-black/40 flex items-center justify-center z-50",children:h.jsxs("div",{className:"card max-w-5xl w-[95%] bg-white overflow-hidden",children:[h.jsxs("div",{className:"flex flex-wrap gap-3 justify-between items-center mb-3",children:[h.jsxs("div",{className:"font-semibold",children:["Preview: ",i.title]}),h.jsxs("div",{className:"flex gap-2 flex-wrap justify-end",children:[i.type==="today"&&h.jsxs(h.Fragment,{children:[h.jsx("button",{className:"btn btn-ghost",onClick:M,children:"Print Receipt"}),h.jsx("button",{className:"btn btn-ghost",onClick:M,children:"Download PDF"})]}),h.jsx("button",{className:"btn btn-ghost",onClick:()=>a({title:"",type:"",data:{}}),children:"Close"})]})]}),h.jsxs("div",{className:"max-h-[65vh] overflow-auto space-y-4",children:[i.type==="today"&&h.jsxs(h.Fragment,{children:[h.jsx("div",{className:"font-semibold",children:"Bills"}),h.jsxs("table",{className:"table",children:[h.jsx("thead",{children:h.jsxs("tr",{children:[h.jsx("th",{children:"Session"}),h.jsx("th",{children:"Date"}),h.jsx("th",{children:"Time"}),h.jsx("th",{children:"Payment"}),h.jsx("th",{children:"Total"}),h.jsx("th",{children:"Customer"}),h.jsx("th",{children:"Items"})]})}),h.jsx("tbody",{children:i.data.bills.map((C,j)=>h.jsxs("tr",{children:[h.jsx("td",{className:"capitalize",children:C.sessionType}),h.jsx("td",{children:Ge(C.createdDate)}),h.jsx("td",{children:C.createdTime}),h.jsx("td",{children:C.paymentMode}),h.jsx("td",{children:C.billTotal}),h.jsx("td",{children:C.customerNameOrToken||"-"}),h.jsx("td",{children:(C.items||[]).map(L=>L.itemName).join(", ")})]},j))})]}),h.jsx("div",{className:"font-semibold",children:"Expenses"}),h.jsxs("table",{className:"table",children:[h.jsx("thead",{children:h.jsxs("tr",{children:[h.jsx("th",{children:"Date"}),h.jsx("th",{children:"Title"}),h.jsx("th",{children:"Amount"}),h.jsx("th",{children:"Note"})]})}),h.jsxs("tbody",{children:[e.length===0&&h.jsx("tr",{children:h.jsx("td",{colSpan:"4",className:"text-center text-slate-500",children:"No expenses"})}),e.map((C,j)=>h.jsxs("tr",{children:[h.jsx("td",{children:Ge(C.expenseDate)}),h.jsx("td",{children:C.expenseTitle}),h.jsx("td",{children:C.amount}),h.jsx("td",{children:C.note||""})]},j))]})]}),h.jsx("div",{className:"font-semibold",children:"Summary"}),h.jsxs("table",{className:"table",children:[h.jsx("thead",{children:h.jsxs("tr",{children:[h.jsx("th",{children:"Total Income"}),h.jsx("th",{children:"Total Expense"}),h.jsx("th",{children:"Profit/Loss"})]})}),h.jsx("tbody",{children:h.jsxs("tr",{children:[h.jsx("td",{children:gt(i.data.summary.incomeTotal)}),h.jsx("td",{children:gt(i.data.summary.expenseTotal)}),h.jsx("td",{children:gt(i.data.summary.profit)})]})})]})]}),i.type==="history"&&h.jsxs("table",{className:"table",children:[h.jsx("thead",{children:h.jsx("tr",{children:i.data.header.map((C,j)=>h.jsx("th",{children:C},j))})}),h.jsx("tbody",{children:i.data.rows.map((C,j)=>h.jsx("tr",{children:C.map((L,F)=>h.jsx("td",{children:L},F))},j))})]}),i.type==="orders"&&h.jsxs("table",{className:"table",children:[h.jsx("thead",{children:h.jsx("tr",{children:i.data.header.map((C,j)=>h.jsx("th",{children:C},j))})}),h.jsx("tbody",{children:i.data.rows.map((C,j)=>h.jsx("tr",{children:C.map((L,F)=>h.jsx("td",{children:L},F))},j))})]})]})]})})]})}const ai=(n=0)=>new Intl.NumberFormat("en-IN",{style:"currency",currency:"INR",maximumFractionDigits:0}).format(n||0);function kI(){var x;const{user:n,isDemo:e}=Mn(),t=Jn(),s=Ge(t),[r,i]=O.useState([]),[a,l]=O.useState([]),[u,d]=O.useState(null),g=!e||((x=n==null?void 0:n.permissions)==null?void 0:x.includes("delete_expense"))||(n==null?void 0:n.role)==="owner";O.useEffect(()=>{const R=hp(t,M=>i(M.docs.map(C=>({id:C.id,...C.data()})))),V=bw(t,M=>l(M.docs.map(C=>({id:C.id,...C.data()}))));return()=>{R(),V()}},[t]);const _=O.useMemo(()=>{const R={morning:{cash:0,upi:0,total:0},afternoon:{cash:0,upi:0,total:0},evening:{cash:0,upi:0,total:0},expense:0};return r.forEach(V=>{const M=R[V.sessionType]||R.morning;V.paymentMode==="cash"&&(M.cash+=V.billTotal||0),V.paymentMode==="upi"&&(M.upi+=V.billTotal||0),M.total+=V.billTotal||0}),R.expense=a.reduce((V,M)=>V+(M.amount||0),0),R},[r,a]),E=_.morning.total+_.afternoon.total+_.evening.total,A=E-_.expense,S=async R=>{if(!g)return ye.error("Cashier role cannot delete expenses. Switch to Owner role to test this action.");await Iw(R),ye.success("Expense deleted"),(u==null?void 0:u.id)===R&&d(null)};return h.jsxs("div",{className:"space-y-4",children:[h.jsx(xI,{totals:{grandTotal:E,net:A,expense:_.expense}}),h.jsxs("div",{className:"card",children:[h.jsxs("div",{className:"text-lg font-semibold mb-3",children:["Today Breakdown (",s,")"]}),h.jsx("div",{className:"overflow-x-auto",children:h.jsxs("table",{className:"table min-w-[480px]",children:[h.jsx("thead",{children:h.jsxs("tr",{children:[h.jsx("th",{children:"Session"}),h.jsx("th",{children:"Cash"}),h.jsx("th",{children:"UPI"}),h.jsx("th",{children:"Total"})]})}),h.jsx("tbody",{children:["morning","afternoon","evening"].map(R=>h.jsxs("tr",{children:[h.jsx("td",{className:"capitalize",children:R}),h.jsx("td",{children:ai(_[R].cash)}),h.jsx("td",{children:ai(_[R].upi)}),h.jsx("td",{children:ai(_[R].total)})]},R))})]})})]}),h.jsxs("div",{className:"card",children:[h.jsx("div",{className:"text-lg font-semibold mb-3",children:"Today Expenses"}),h.jsx("div",{className:"overflow-x-auto",children:h.jsxs("table",{className:"table min-w-[540px]",children:[h.jsx("thead",{children:h.jsxs("tr",{children:[h.jsx("th",{children:"Title"}),h.jsx("th",{children:"Amount"}),h.jsx("th",{children:"Note"}),h.jsx("th",{})]})}),h.jsxs("tbody",{children:[a.length===0&&h.jsx("tr",{children:h.jsx("td",{colSpan:"4",className:"text-center text-slate-500",children:"No expenses"})}),a.map(R=>h.jsxs("tr",{children:[h.jsx("td",{children:R.expenseTitle}),h.jsx("td",{children:ai(R.amount||0)}),h.jsx("td",{children:R.note||""}),h.jsx("td",{children:h.jsxs("div",{className:"flex flex-wrap gap-2",children:[h.jsx("button",{className:"btn btn-ghost w-full sm:w-auto",onClick:()=>d(R),children:"Edit"}),h.jsx("button",{className:"btn btn-ghost w-full sm:w-auto text-rose-600 hover:text-rose-700",onClick:()=>S(R.id),children:"Delete"})]})})]},R.id))]})]})})]}),h.jsx(bI,{editing:u,onSaved:()=>d(null)}),h.jsx(Ap,{bills:r,expenses:a,today:t})]})}const ot=(n=0)=>new Intl.NumberFormat("en-IN",{style:"currency",currency:"INR",minimumFractionDigits:2,maximumFractionDigits:2}).format(n||0),li=n=>{if(!n)return"";const e=n.toDate?n.toDate():new Date(n);return isNaN(e)?"":e.toLocaleTimeString("en-IN",{hour:"2-digit",minute:"2-digit",hour12:!0})},bh=(n={})=>{const e=n.itemName||n.name||"Item",t=Math.max(0,Number(n.quantity||n.qty||n.count||0))||0,s=Number(n.unitPrice??n.price??0)||0,r=Number(n.totalPrice??n.total??t*s)||0;return{name:e,qty:t,unit:s,total:r}};function DI(){const[n,e]=O.useState([]),[t,s]=O.useState({date:"",month:""}),[r,i]=O.useState(null),a=_=>{if(!_)return"";if(_.includes("/")){const[A,S,x]=_.split("/");if(A&&S&&x)return`${x.padStart(4,"0")}-${S.padStart(2,"0")}-${A.padStart(2,"0")}`}const E=new Date(_);return isNaN(E)?"":E.toISOString().slice(0,10)};O.useEffect(()=>{const _=Fl(A=>{const S=A.docs.map(x=>x.data());e(x=>({...x,bills:S}))}),E=dp(A=>{const S=A.docs.map(x=>x.data());e(x=>({...x,expenses:S}))});return()=>{_(),E()}},[]);const l=O.useMemo(()=>{const _=n.bills||[],E=n.expenses||[],A={};return _.forEach(S=>{const x=S.createdDate||"unknown";A[x]||(A[x]={date:x,totalSales:0,totalExpense:0}),A[x].totalSales+=S.billTotal||0}),E.forEach(S=>{const x=S.expenseDate||"unknown";A[x]||(A[x]={date:x,totalSales:0,totalExpense:0}),A[x].totalExpense+=S.amount||0}),Object.values(A).map(S=>({...S,netProfit:(S.totalSales||0)-(S.totalExpense||0)})).sort((S,x)=>(x.date||"").localeCompare(S.date||""))},[n]),u=O.useMemo(()=>l.filter(_=>{var E;return!(t.date&&_.date!==t.date||t.month&&!((E=_.date)!=null&&E.startsWith(t.month)))}),[l,t]),d=O.useMemo(()=>{if(!r)return{bills:[],expenses:[]};const _=(n.bills||[]).filter(A=>A.createdDate===r),E=(n.expenses||[]).filter(A=>A.expenseDate===r);return{bills:_,expenses:E}},[n,r]),g=(_="print")=>{if(!r)return;const{bills:E,expenses:A}=d,S=E.reduce((L,F)=>L+(F.billTotal||0),0),x=A.reduce((L,F)=>L+(F.amount||0),0),R=S-x,V=E.map(L=>`
      <tr>
        <td>${li(L.createdAt)}</td>
        <td>${ot(L.billTotal||0)}</td>
        <td>${(L.items||[]).map(F=>{const I=bh(F);return`${I.name}: ${I.qty} × ${ot(I.unit)} = ${ot(I.total)}`}).join("<br/>")}</td>
      </tr>
    `).join("")||'<tr><td colspan="3">No bills</td></tr>',M=A.map(L=>`
      <tr><td>${li(L.createdAt)}</td><td>${L.description||L.expenseTitle||L.title||"Expense"}</td><td>${ot(L.amount||0)}</td></tr>
    `).join("")||'<tr><td colspan="3">No expenses</td></tr>',C=`<!doctype html>
    <html><head><title>${Ge(r)} - Day Summary</title>
    <style>
      body{font-family: Arial, sans-serif; padding:24px; color:#0f172a;}
      h1{margin:0 0 12px;}
      table{width:100%; border-collapse:collapse; margin-bottom:18px;}
      th,td{border:1px solid #e2e8f0; padding:8px; text-align:left; font-size:14px;}
      th{background:#f8fafc;}
      .summary{margin-bottom:16px; font-weight:700;}
    </style>
    </head><body>
      <h1>Details for ${Ge(r)}</h1>
      <div class="summary">Total Sales: ${ot(S)} | Expense: ${ot(x)} | Profit: ${ot(R)}</div>
      <h3>Bills</h3>
      <table><thead><tr><th>Time</th><th>Total</th><th>Items</th></tr></thead><tbody>${V}</tbody></table>
      <h3>Expenses</h3>
      <table><thead><tr><th>Time</th><th>Title</th><th>Amount</th></tr></thead><tbody>${M}</tbody></table>
    </body></html>`,j=window.open("","_blank","width=1100,height=900");if(!j)return alert("Please allow popups for print/PDF");j.document.write(C),j.document.close(),j.focus(),(_==="print"||_==="pdf")&&j.print()};return h.jsxs("div",{className:"space-y-3",children:[h.jsxs("div",{className:"grid md:grid-cols-3 gap-3",children:[h.jsx("input",{className:"input",type:"text",placeholder:"dd/mm/yyyy",value:Ge(t.date),onChange:_=>s(E=>({...E,date:a(_.target.value)}))}),h.jsx("input",{className:"input",type:"month",value:t.month,onChange:_=>s(E=>({...E,month:_.target.value}))}),h.jsx("button",{className:"btn btn-primary",onClick:()=>s(_=>({..._})),children:"Search"})]}),h.jsx("div",{className:"card",children:h.jsx("div",{className:"overflow-x-auto",children:h.jsxs("table",{className:"table min-w-[540px]",children:[h.jsx("thead",{children:h.jsxs("tr",{children:[h.jsx("th",{children:"Date"}),h.jsx("th",{children:"Total Sales"}),h.jsx("th",{children:"Expense"}),h.jsx("th",{children:"Profit"})]})}),h.jsxs("tbody",{children:[u.length===0&&h.jsx("tr",{children:h.jsx("td",{colSpan:"4",className:"text-center text-slate-500",children:"No records"})}),u.map(_=>h.jsxs("tr",{children:[h.jsx("td",{children:h.jsx("button",{className:"text-blue-600 hover:text-blue-800 underline",onClick:()=>i(r===_.date?null:_.date),children:Ge(_.date)})}),h.jsx("td",{children:ot(_.totalSales||0)}),h.jsx("td",{children:ot(_.totalExpense||0)}),h.jsx("td",{children:ot(_.netProfit||0)})]},_.date))]})]})})}),r&&h.jsxs("div",{className:"card mt-4",children:[h.jsxs("div",{className:"flex justify-between items-center mb-4",children:[h.jsxs("h3",{className:"text-lg font-semibold",children:["Details for ",Ge(r)]}),h.jsxs("div",{className:"flex gap-2 flex-wrap",children:[h.jsx("button",{className:"btn btn-ghost",onClick:()=>g("print"),children:"Print"}),h.jsx("button",{className:"btn btn-ghost",onClick:()=>g("pdf"),children:"Download PDF"}),h.jsx("button",{className:"btn btn-ghost",onClick:()=>i(null),children:"Close"})]})]}),d.bills.length>0&&h.jsxs("div",{className:"mb-4",children:[h.jsx("h4",{className:"font-medium mb-2",children:"Bills"}),h.jsx("div",{className:"space-y-3",children:d.bills.map((_,E)=>h.jsxs("div",{className:"p-4 rounded-xl border bg-green-50/60 shadow-soft",children:[h.jsxs("div",{className:"flex justify-between items-start gap-2",children:[h.jsxs("div",{className:"font-semibold",children:["Bill Total: ",ot(_.billTotal||0)]}),h.jsx("div",{className:"text-sm text-gray-600",children:li(_.createdAt)})]}),_.items&&_.items.length>0&&h.jsxs("div",{className:"mt-2 text-sm",children:[h.jsx("div",{className:"font-medium",children:"Items:"}),h.jsx("ul",{className:"list-disc list-inside",children:_.items.map((A,S)=>h.jsx("li",{children:(()=>{const x=bh(A);return`${x.name}: ${x.qty} × ${ot(x.unit)} = ${ot(x.total)}`})()},S))})]})]},E))})]}),d.expenses.length>0&&h.jsxs("div",{className:"mb-4",children:[h.jsx("h4",{className:"font-medium mb-2",children:"Expenses"}),h.jsx("div",{className:"space-y-3",children:d.expenses.map((_,E)=>h.jsx("div",{className:"p-4 rounded-xl border bg-red-50/60 shadow-soft",children:h.jsxs("div",{className:"flex justify-between items-start gap-2",children:[h.jsxs("div",{className:"font-semibold",children:[_.description||_.expenseTitle||_.title||"Expense",": ",ot(_.amount||0),_.note&&h.jsxs("div",{className:"text-sm text-gray-700 font-normal",children:["Note: ",_.note]})]}),h.jsx("div",{className:"text-sm text-gray-600",children:li(_.createdAt)})]})},E))})]}),d.bills.length===0&&d.expenses.length===0&&h.jsx("p",{className:"text-center text-gray-500",children:"No detailed records found for this day."})]}),h.jsx(Ap,{history:u})]})}const Ti=(n=0)=>new Intl.NumberFormat("en-IN",{style:"currency",currency:"INR",maximumFractionDigits:0}).format(n||0);function OI({labels:n=[],income:e=[],expense:t=[],profit:s=[],title:r}){if(!n.length)return h.jsx("div",{className:"text-slate-500 text-sm",children:"No data"});const i=460,a=220,l=36,u=[...e,...s],d=[...t],g=Math.min(0,...u,0),_=Math.max(...u,1),E=Math.min(0,...d,0),A=Math.max(...d,1),S=_-g||1,x=A-E||1,R=n.length>1?(i-2*l)/(n.length-1):0,V=T=>a-l-(T-g)/S*(a-2*l),M=T=>a-l-(T-E)/x*(a-2*l),C=g<0&&_>0?V(0):null,j=(T,b)=>n.map((w,te)=>[l+te*R,b(T[te]??0)]),L=j(e,V),F=j(s,V),I=j(t,M),p=s.reduce((T,b,w,te)=>(te[T]??-1/0)<b?w:T,0);s.reduce((T,b,w,te)=>(te[T]??1/0)>b?w:T,0);const m=new Set([0,n.length-1,p]),v=(T,b,w=3,te=!1)=>h.jsxs("g",{children:[h.jsx("polyline",{points:T.map(Ie=>Ie.join(",")).join(" "),fill:"none",stroke:b,strokeWidth:w,strokeLinecap:"round",strokeLinejoin:"round"}),T.map((Ie,De)=>{const Q=te?s[De]:T===L?e[De]:t[De],de=te&&Q<0,H=te&&m.has(De),Pe=de?"#ef4444":b;return h.jsxs("g",{children:[h.jsx("circle",{cx:Ie[0],cy:Ie[1],r:4,fill:Pe}),H&&h.jsx("text",{x:Ie[0],y:Ie[1]-8,textAnchor:"middle",fontSize:"10",fill:"#475569",children:Ti(Q)})]},De)})]});return h.jsxs("div",{className:"space-y-2",children:[r&&h.jsx("div",{className:"font-semibold text-sm text-slate-700",children:r}),h.jsxs("svg",{viewBox:`0 0 ${i} ${a}`,className:"w-full max-w-3xl",children:[C!==null&&h.jsx("line",{x1:l,x2:i-l,y1:C,y2:C,stroke:"#94a3b8",strokeDasharray:"4 4",strokeWidth:"1"}),h.jsx("text",{x:i-l+6,y:l,fontSize:"10",fill:"#ef4444",children:"High"}),h.jsx("text",{x:i-l+6,y:a-l,fontSize:"10",fill:"#ef4444",children:"Low"}),v(I,"#ef4444",2.5,!1),v(L,"#16a34a",2.5,!1),v(F,"#1d4ed8",3.5,!0),n.map((T,b)=>h.jsx("text",{x:l+b*R,y:a-l+14,textAnchor:"middle",fontSize:"9",fill:"#94a3b8",children:T},b))]}),h.jsxs("div",{className:"flex flex-wrap gap-3 text-xs text-slate-600",children:[h.jsxs("div",{className:"flex items-center gap-1",children:[h.jsx("span",{className:"w-3 h-3 rounded-full",style:{background:"#16a34a"}}),h.jsx("span",{className:"font-medium",children:"Income (left)"})]}),h.jsxs("div",{className:"flex items-center gap-1",children:[h.jsx("span",{className:"w-3 h-3 rounded-full",style:{background:"#ef4444"}}),h.jsx("span",{className:"font-medium",children:"Expense (right)"})]}),h.jsxs("div",{className:"flex items-center gap-1",children:[h.jsx("span",{className:"w-3 h-3 rounded-full",style:{background:"#1d4ed8"}}),h.jsx("span",{className:"font-medium",children:"Profit (left)"})]})]})]})}function VI(){const[n,e]=O.useState("daily"),[t,s]=O.useState({bills:[],expenses:[]});O.useEffect(()=>{const x=Fl(V=>s(M=>({...M,bills:V.docs.map(C=>C.data())}))),R=dp(V=>s(M=>({...M,expenses:V.docs.map(C=>C.data())})));return()=>{x(),R()}},[]);const r=O.useMemo(()=>{const x=t.bills||[],R=t.expenses||[],V={};return x.forEach(M=>{const C=M.createdDate||"unknown";V[C]||(V[C]={date:C,sales:0,expense:0}),V[C].sales+=M.billTotal||0}),R.forEach(M=>{const C=M.expenseDate||"unknown";V[C]||(V[C]={date:C,sales:0,expense:0}),V[C].expense+=M.amount||0}),Object.values(V).map(M=>({...M,profit:(M.sales||0)-(M.expense||0)})).sort((M,C)=>(M.date||"").localeCompare(C.date||""))},[t]),i=O.useMemo(()=>r.map(x=>({label:Ge(x.date),income:x.sales,expense:x.expense,profit:x.profit})),[r]),a=O.useMemo(()=>{const x={};if(r.forEach(I=>{const p=(I.date||"").slice(0,7);p&&(x[p]||(x[p]={income:0,expense:0}),x[p].income+=I.sales,x[p].expense+=I.expense)}),!Object.keys(x).length)return[];const R=(I="")=>{const[p,m]=I.split("-").map(Number);return{y:p||0,m:m||1}},V=(I,p)=>`${I}-${String(p).padStart(2,"0")}`,M=Object.keys(x).sort(),C=M[M.length-1],{y:j,m:L}=R(C),F=[];for(let I=5;I>=0;I--){let p=j,m=L-I;for(;m<=0;)m+=12,p-=1;F.push(V(p,m))}return F.map(I=>{const p=x[I]||{income:0,expense:0};return{label:I,income:p.income,expense:p.expense,profit:p.income-p.expense}})},[r]),l=(x="")=>{const[R,V]=x.split("-");return!R||!V?x:`${new Date(`${x}-01`).toLocaleString("en",{month:"short"})} ${String(R).slice(-2)}`},u=O.useMemo(()=>{const x=r.reduce((V,M)=>V+M.sales,0),R=r.reduce((V,M)=>V+M.expense,0);return{income:x,expense:R,profit:x-R}},[r]),g=(n==="monthly"?a:i).slice(-12),_=g.map(x=>n==="monthly"?l(x.label):x.label),E=g.map(x=>x.income),A=g.map(x=>x.expense),S=g.map(x=>x.profit);return h.jsxs("div",{className:"space-y-4",children:[h.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[h.jsx("button",{className:`btn ${n==="daily"?"btn-primary":"btn-ghost"}`,onClick:()=>e("daily"),children:"Daily"}),h.jsx("button",{className:`btn ${n==="monthly"?"btn-primary":"btn-ghost"}`,onClick:()=>e("monthly"),children:"Monthly"}),h.jsxs("div",{className:"ml-auto flex gap-3 text-sm text-slate-700 flex-wrap",children:[h.jsxs("span",{className:"font-semibold",children:["Income: ",Ti(u.income)]}),h.jsxs("span",{className:"font-semibold",children:["Expense: ",Ti(u.expense)]}),h.jsxs("span",{className:"font-semibold",children:["Profit: ",Ti(u.profit)]})]})]}),h.jsx(OI,{labels:_,income:E,expense:A,profit:S,title:n==="monthly"?"Monthly Income / Expense / Profit":"Daily Income / Expense / Profit"})]})}function MI(){const[n,e]=O.useState("profit");return h.jsxs("div",{className:"card",children:[h.jsxs("div",{className:"flex gap-3 mb-4 flex-wrap",children:[h.jsx("button",{className:`btn ${n==="profit"?"btn-primary":"btn-ghost"}`,onClick:()=>e("profit"),children:"Profit"}),h.jsx("button",{className:`btn ${n==="history"?"btn-primary":"btn-ghost"}`,onClick:()=>e("history"),children:"History"}),h.jsx("button",{className:`btn ${n==="analysis"?"btn-primary":"btn-ghost"}`,onClick:()=>e("analysis"),children:"Analysis"})]}),n==="profit"&&h.jsx(kI,{}),n==="history"&&h.jsx(DI,{}),n==="analysis"&&h.jsx(VI,{})]})}const jI=(n=0)=>new Intl.NumberFormat("en-IN",{style:"currency",currency:"INR",maximumFractionDigits:0}).format(n||0),LI=[{value:"order",label:"Order"},{value:"morning",label:"Morning"},{value:"afternoon",label:"Afternoon"},{value:"evening",label:"Evening"}];function FI(){const[n,e]=O.useState(Jn()),[t,s]=O.useState(!0),[r,i]=O.useState({sessionType:"order",paymentMode:"cash",total:"",customer:"",items:""}),[a,l]=O.useState(!1),[u,d]=O.useState([]),[g,_]=O.useState({date:"",month:""});O.useEffect(()=>hp(n,()=>s(!1)),[n]),O.useEffect(()=>{if(!a)return;const x=Fl(R=>{d(R.docs.map(V=>({id:V.id,...V.data()})))});return()=>x&&x()},[a]);const E=async()=>{const x=Number(r.total);if(!x||x<=0)return ye.error("Enter a valid amount");const R=r.items?r.items.split(",").map(j=>j.trim()).filter(Boolean):["Manual Order"],V=x/R.length,M=R.map(j=>({itemName:j,quantity:1,unitPrice:V,totalPrice:V})),C={sessionType:r.sessionType,paymentMode:r.paymentMode,billTotal:x,customerNameOrToken:r.customer,items:M,createdDate:n,createdTime:new Date().toLocaleTimeString()};await up(C),ye.success("Order added"),i(j=>({...j,total:"",customer:"",items:""}))},A=O.useMemo(()=>u.filter(x=>x.sessionType==="order").filter(x=>{var R;return!(g.date&&x.createdDate!==g.date||g.month&&!((R=x.createdDate)!=null&&R.startsWith(g.month)))}),[u,g]),S=x=>h.jsx("div",{className:"overflow-auto",children:h.jsxs("table",{className:"table",children:[h.jsx("thead",{children:h.jsxs("tr",{children:[h.jsx("th",{children:"Session"}),h.jsx("th",{children:"Date"}),h.jsx("th",{children:"Time"}),h.jsx("th",{children:"Payment"}),h.jsx("th",{children:"Customer"}),h.jsx("th",{children:"Items"}),h.jsx("th",{children:"Total"})]})}),h.jsxs("tbody",{children:[x.length===0&&h.jsx("tr",{children:h.jsx("td",{colSpan:"7",className:"text-center text-slate-500",children:"No orders"})}),x.map(R=>h.jsxs("tr",{children:[h.jsx("td",{className:"capitalize",children:R.sessionType}),h.jsx("td",{children:Ge(R.createdDate)}),h.jsx("td",{children:R.createdTime||"-"}),h.jsx("td",{className:"uppercase",children:R.paymentMode}),h.jsx("td",{children:R.customerNameOrToken||"-"}),h.jsx("td",{children:(R.items||[]).map(V=>V.itemName).join(", ")||"-"}),h.jsx("td",{children:jI(R.billTotal||0)})]},R.id))]})]})});return h.jsxs("div",{className:"card space-y-4",children:[h.jsxs("div",{className:"flex items-center gap-3",children:[h.jsx("button",{className:`btn ${a?"btn-ghost":"btn-primary"}`,onClick:()=>l(!1),children:"Today"}),h.jsx("button",{className:`btn ${a?"btn-primary":"btn-ghost"}`,onClick:()=>l(!0),children:"History"})]}),!a&&h.jsxs(h.Fragment,{children:[h.jsxs("div",{className:"flex flex-wrap items-center gap-3 justify-between",children:[h.jsxs("div",{children:[h.jsx("h2",{className:"text-xl font-semibold",children:"Orders"}),h.jsx("p",{className:"text-sm text-slate-500",children:"Quick add; list view hidden as requested"})]}),h.jsx("input",{className:"input w-52",type:"date",value:n,onChange:x=>e(x.target.value)})]}),h.jsxs("div",{className:"card bg-white/70 border-dashed border-2 border-slate-200",children:[h.jsx("div",{className:"font-semibold mb-3",children:"Quick Add Order"}),h.jsxs("div",{className:"grid md:grid-cols-5 gap-3",children:[h.jsx("select",{className:"input",value:r.sessionType,onChange:x=>i(R=>({...R,sessionType:x.target.value})),children:LI.map(x=>h.jsx("option",{value:x.value,children:x.label},x.value))}),h.jsx("input",{className:"input",type:"number",min:"0",placeholder:"Amount",value:r.total,onChange:x=>i(R=>({...R,total:x.target.value}))}),h.jsxs("select",{className:"input",value:r.paymentMode,onChange:x=>i(R=>({...R,paymentMode:x.target.value})),children:[h.jsx("option",{value:"cash",children:"Cash"}),h.jsx("option",{value:"upi",children:"UPI"})]}),h.jsx("input",{className:"input",placeholder:"Customer / Token",value:r.customer,onChange:x=>i(R=>({...R,customer:x.target.value}))}),h.jsx("input",{className:"input",placeholder:"Items (comma separated)",value:r.items,onChange:x=>i(R=>({...R,items:x.target.value}))})]}),h.jsx("div",{className:"mt-3",children:h.jsx("button",{className:"btn btn-primary",onClick:E,children:"Add Order"})})]}),t&&h.jsx(Ip,{})]}),a&&h.jsxs(h.Fragment,{children:[h.jsxs("div",{className:"grid md:grid-cols-3 gap-3",children:[h.jsx("input",{className:"input",type:"date",value:g.date,onChange:x=>_(R=>({...R,date:x.target.value}))}),h.jsx("input",{className:"input",type:"month",value:g.month,onChange:x=>_(R=>({...R,month:x.target.value}))}),h.jsx("button",{className:"btn btn-primary",onClick:()=>_(x=>({...x})),children:"Filter"})]}),S(A)]})]})}function UI(){const{user:n}=Mn(),e=(n==null?void 0:n.role)==="auditor"?"accounts":"menu",[t,s]=O.useState(e);return O.useEffect(()=>{document.title=`Sri Raghavendra Mess - ${t}`},[t]),O.useEffect(()=>{(n==null?void 0:n.role)==="auditor"&&t==="menu"&&s("accounts")},[n==null?void 0:n.role]),h.jsxs("div",{className:"min-h-screen bg-slate-50 text-slate-900",children:[h.jsx(pI,{}),h.jsxs("main",{className:"max-w-6xl mx-auto px-3 pb-10",children:[h.jsx(gI,{active:t,onChange:s}),t==="menu"&&h.jsx(EI,{}),t==="update"&&h.jsx(II,{}),t==="accounts"&&h.jsx(MI,{}),t==="orders"&&h.jsx(FI,{})]})]})}function BI({children:n}){const{user:e}=Mn();return e?np()?n:h.jsx(ta,{to:"/login",replace:!0}):h.jsx(ta,{to:"/login",replace:!0})}function $I(){const{user:n,switchDemoRole:e,resetDemo:t,toggleMode:s}=Mn(),[r,i]=O.useState(!1),[a,l]=O.useState(!1),u=(n==null?void 0:n.role)||"owner",d=async _=>{var E;try{await e(_),ye.success(`Switched role to ${((E=Yt[_])==null?void 0:E.displayName)||_}`)}catch{ye.error("Failed to switch demo role")}},g=()=>{t(),i(!1),ye.success("Demo data restored to initial pristine state!")};return a?h.jsx("aside",{"aria-label":"Demo Status",className:"fixed bottom-4 right-4 z-50",children:h.jsxs("button",{onClick:()=>l(!1),className:"flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold text-xs uppercase px-3.5 py-2 rounded-full shadow-2xl hover:scale-105 transition border border-amber-300",title:"Click to expand Demo Controls",children:[h.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"}),"Demo Mode"]})}):h.jsxs("aside",{"aria-label":"Demo Controls",className:"sticky top-0 z-40 bg-gradient-to-r from-slate-900 via-slate-800 to-indigo-950 text-white border-b border-amber-500/40 shadow-lg text-xs md:text-sm",children:[h.jsxs("div",{className:"max-w-6xl mx-auto px-4 py-2 flex flex-col md:flex-row items-center justify-between gap-2.5",children:[h.jsxs("div",{className:"flex items-center gap-2.5 flex-wrap justify-center md:justify-start",children:[h.jsxs("span",{className:"inline-flex items-center gap-1.5 bg-amber-500/20 text-amber-300 border border-amber-400/50 px-2.5 py-0.5 rounded-full font-bold uppercase tracking-wider text-xs",children:[h.jsx("span",{className:"w-2 h-2 rounded-full bg-emerald-400 animate-pulse"}),"Public Demo"]}),h.jsx("span",{className:"text-slate-300 text-xs hidden sm:inline",children:"Isolated Sandbox  Zero Production Access"})]}),n&&h.jsxs("div",{className:"flex items-center gap-1.5 bg-slate-950/60 p-1 rounded-xl border border-slate-700/80",children:[h.jsx("span",{className:"text-[11px] text-slate-400 px-2 uppercase font-semibold",children:"Role:"}),Object.keys(Yt).map(_=>{const E=Yt[_],A=u===_;return h.jsx("button",{onClick:()=>d(_),className:`px-2.5 py-1 rounded-lg text-xs font-semibold transition ${A?"bg-amber-500 text-slate-950 shadow-sm":"text-slate-300 hover:bg-white/10"}`,title:E.description,children:E.badge},_)})]}),h.jsxs("div",{className:"flex items-center gap-2 flex-wrap",children:[n&&h.jsx("button",{onClick:()=>i(!0),className:"px-2.5 py-1 bg-rose-600/30 hover:bg-rose-600 text-rose-200 hover:text-white border border-rose-500/40 rounded-lg text-xs font-semibold transition",title:"Reset all bills, menu items, and expenses to default sample state",children:"🔄 Reset Data"}),h.jsx("button",{onClick:()=>s("production"),className:"px-2.5 py-1 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-600 rounded-lg text-xs transition",title:"Switch to live production authentication",children:"Prod Mode"}),h.jsx("button",{onClick:()=>l(!0),className:"text-slate-400 hover:text-slate-100 px-1 py-0.5 text-xs font-bold",title:"Minimize banner",children:"✕"})]})]}),r&&h.jsx("div",{className:"fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4",children:h.jsxs("div",{className:"bg-white text-slate-900 rounded-2xl max-w-sm w-full p-6 shadow-2xl border border-slate-200 space-y-4",children:[h.jsxs("div",{className:"flex items-center gap-3 text-amber-600",children:[h.jsx("span",{className:"text-2xl",children:"⚠️"}),h.jsx("h3",{className:"text-lg font-bold",children:"Reset Demo Data?"})]}),h.jsx("p",{className:"text-sm text-slate-600",children:"This will restore all menu items, bills, and expenses to the initial realistic sample dataset. Any temporary bills or changes you added will be refreshed."}),h.jsxs("div",{className:"flex gap-2 justify-end pt-2",children:[h.jsx("button",{className:"btn btn-ghost px-4 py-2 text-sm",onClick:()=>i(!1),children:"Cancel"}),h.jsx("button",{className:"btn bg-rose-600 hover:bg-rose-700 text-white font-semibold px-4 py-2 text-sm rounded-xl",onClick:g,children:"Yes, Reset Data"})]})]})})]})}const xp=O.createContext({user:null,isDemo:!1,appMode:"production",switchDemoRole:()=>{},resetDemo:()=>{},toggleMode:()=>{}}),Mn=()=>O.useContext(xp);function qI({user:n,checking:e}){const t=Ah();return O.useEffect(()=>{const s=sessionStorage.redirect;delete sessionStorage.redirect;const r="/billing-system1/".replace(/\/$/,"")+"/";s&&window.location.pathname===r&&t(s.replace(/^.*?\/dashboard\//,""))},[t]),e?h.jsxs("div",{className:"h-screen flex flex-col items-center justify-center bg-slate-900 text-white gap-3",children:[h.jsx("div",{className:"w-10 h-10 border-4 border-amber-400 border-t-transparent rounded-full animate-spin"}),h.jsx("div",{className:"text-amber-200 font-semibold tracking-wide",children:"Loading System..."})]}):h.jsxs(nm,{children:[h.jsx(jo,{path:"login",element:h.jsx(fI,{})}),h.jsx(jo,{path:"dashboard/*",element:h.jsx(BI,{children:h.jsx(UI,{})})}),h.jsx(jo,{path:"*",element:h.jsx(ta,{to:n?"dashboard":"login",replace:!0})})]})}function zI(){const[n,e]=O.useState(null),[t,s]=O.useState(!0),[r,i]=O.useState(Dl()),a={v7_startTransition:!0,v7_relativeSplatPath:!0};O.useEffect(()=>sw(A=>{e(A),s(!1)}),[]);const l=O.useCallback(async E=>{await Vl(E)},[]),u=O.useCallback(()=>{yw()},[]),d=O.useCallback(E=>{vi(E),i(E)},[]),g="/billing-system1/".replace(/\/$/,""),_=Fe();return h.jsx(xp.Provider,{value:{user:n,isDemo:_,appMode:r,switchDemoRole:l,resetDemo:u,toggleMode:d},children:h.jsxs(tm,{basename:g,future:a,children:[_&&h.jsx($I,{}),h.jsx(qI,{user:n,checking:t})]})})}na.createRoot(document.getElementById("root")).render(h.jsx(zI,{}));
