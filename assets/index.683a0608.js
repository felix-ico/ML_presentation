(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();function Ni(e,t){const n=Object.create(null),s=e.split(",");for(let i=0;i<s.length;i++)n[s[i]]=!0;return t?i=>!!n[i.toLowerCase()]:i=>!!n[i]}const _f="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",yf=Ni(_f);function Mc(e){return!!e||e===""}function nt(e){if(te(e)){const t={};for(let n=0;n<e.length;n++){const s=e[n],i=De(s)?xf(s):nt(s);if(i)for(const r in i)t[r]=i[r]}return t}else{if(De(e))return e;if(je(e))return e}}const bf=/;(?![^(]*\))/g,wf=/:(.+)/;function xf(e){const t={};return e.split(bf).forEach(n=>{if(n){const s=n.split(wf);s.length>1&&(t[s[0].trim()]=s[1].trim())}}),t}function Ie(e){let t="";if(De(e))t=e;else if(te(e))for(let n=0;n<e.length;n++){const s=Ie(e[n]);s&&(t+=s+" ")}else if(je(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}function xe(e){if(!e)return null;let{class:t,style:n}=e;return t&&!De(t)&&(e.class=Ie(t)),n&&(e.style=nt(n)),e}const Ef="html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot",Sf=Ni(Ef),Ln=e=>De(e)?e:e==null?"":te(e)||je(e)&&(e.toString===Cc||!oe(e.toString))?JSON.stringify(e,Pc,2):String(e),Pc=(e,t)=>t&&t.__v_isRef?Pc(e,t.value):Gn(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[s,i])=>(n[`${s} =>`]=i,n),{})}:Lc(t)?{[`Set(${t.size})`]:[...t.values()]}:je(t)&&!te(t)&&!Tc(t)?String(t):t,Pe={},Zn=[],Ot=()=>{},$f=()=>!1,kf=/^on[^a-z]/,Vi=e=>kf.test(e),wo=e=>e.startsWith("onUpdate:"),st=Object.assign,xo=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Of=Object.prototype.hasOwnProperty,he=(e,t)=>Of.call(e,t),te=Array.isArray,Gn=e=>Hi(e)==="[object Map]",Lc=e=>Hi(e)==="[object Set]",oe=e=>typeof e=="function",De=e=>typeof e=="string",Eo=e=>typeof e=="symbol",je=e=>e!==null&&typeof e=="object",Ac=e=>je(e)&&oe(e.then)&&oe(e.catch),Cc=Object.prototype.toString,Hi=e=>Cc.call(e),Mf=e=>Hi(e).slice(8,-1),Tc=e=>Hi(e)==="[object Object]",So=e=>De(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,pi=Ni(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),zi=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Pf=/-(\w)/g,Nt=zi(e=>e.replace(Pf,(t,n)=>n?n.toUpperCase():"")),Lf=/\B([A-Z])/g,Cn=zi(e=>e.replace(Lf,"-$1").toLowerCase()),Bi=zi(e=>e.charAt(0).toUpperCase()+e.slice(1)),or=zi(e=>e?`on${Bi(e)}`:""),Fs=(e,t)=>!Object.is(e,t),Qn=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},xi=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},Cr=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let ba;const Af=()=>ba||(ba=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let ut;class jc{constructor(t=!1){this.active=!0,this.effects=[],this.cleanups=[],!t&&ut&&(this.parent=ut,this.index=(ut.scopes||(ut.scopes=[])).push(this)-1)}run(t){if(this.active){const n=ut;try{return ut=this,t()}finally{ut=n}}}on(){ut=this}off(){ut=this.parent}stop(t){if(this.active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(this.parent&&!t){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.active=!1}}}function Cf(e){return new jc(e)}function Tf(e,t=ut){t&&t.active&&t.effects.push(e)}function Ic(){return ut}function Rc(e){ut&&ut.cleanups.push(e)}const $o=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Fc=e=>(e.w&ln)>0,Dc=e=>(e.n&ln)>0,jf=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=ln},If=e=>{const{deps:t}=e;if(t.length){let n=0;for(let s=0;s<t.length;s++){const i=t[s];Fc(i)&&!Dc(i)?i.delete(e):t[n++]=i,i.w&=~ln,i.n&=~ln}t.length=n}},Tr=new WeakMap;let $s=0,ln=1;const jr=30;let St;const $n=Symbol(""),Ir=Symbol("");class ko{constructor(t,n=null,s){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Tf(this,s)}run(){if(!this.active)return this.fn();let t=St,n=nn;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=St,St=this,nn=!0,ln=1<<++$s,$s<=jr?jf(this):wa(this),this.fn()}finally{$s<=jr&&If(this),ln=1<<--$s,St=this.parent,nn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){St===this?this.deferStop=!0:this.active&&(wa(this),this.onStop&&this.onStop(),this.active=!1)}}function wa(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let nn=!0;const Nc=[];function cs(){Nc.push(nn),nn=!1}function us(){const e=Nc.pop();nn=e===void 0?!0:e}function vt(e,t,n){if(nn&&St){let s=Tr.get(e);s||Tr.set(e,s=new Map);let i=s.get(n);i||s.set(n,i=$o()),Vc(i)}}function Vc(e,t){let n=!1;$s<=jr?Dc(e)||(e.n|=ln,n=!Fc(e)):n=!e.has(St),n&&(e.add(St),St.deps.push(e))}function qt(e,t,n,s,i,r){const o=Tr.get(e);if(!o)return;let a=[];if(t==="clear")a=[...o.values()];else if(n==="length"&&te(e))o.forEach((l,c)=>{(c==="length"||c>=s)&&a.push(l)});else switch(n!==void 0&&a.push(o.get(n)),t){case"add":te(e)?So(n)&&a.push(o.get("length")):(a.push(o.get($n)),Gn(e)&&a.push(o.get(Ir)));break;case"delete":te(e)||(a.push(o.get($n)),Gn(e)&&a.push(o.get(Ir)));break;case"set":Gn(e)&&a.push(o.get($n));break}if(a.length===1)a[0]&&Rr(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);Rr($o(l))}}function Rr(e,t){const n=te(e)?e:[...e];for(const s of n)s.computed&&xa(s);for(const s of n)s.computed||xa(s)}function xa(e,t){(e!==St||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const Rf=Ni("__proto__,__v_isRef,__isVue"),Hc=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Eo)),Ff=Oo(),Df=Oo(!1,!0),Nf=Oo(!0),Ea=Vf();function Vf(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const s=_e(this);for(let r=0,o=this.length;r<o;r++)vt(s,"get",r+"");const i=s[t](...n);return i===-1||i===!1?s[t](...n.map(_e)):i}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){cs();const s=_e(this)[t].apply(this,n);return us(),s}}),e}function Oo(e=!1,t=!1){return function(s,i,r){if(i==="__v_isReactive")return!e;if(i==="__v_isReadonly")return e;if(i==="__v_isShallow")return t;if(i==="__v_raw"&&r===(e?t?np:Kc:t?qc:Uc).get(s))return s;const o=te(s);if(!e&&o&&he(Ea,i))return Reflect.get(Ea,i,r);const a=Reflect.get(s,i,r);return(Eo(i)?Hc.has(i):Rf(i))||(e||vt(s,"get",i),t)?a:we(a)?o&&So(i)?a:a.value:je(a)?e?Wn(a):Ce(a):a}}const Hf=zc(),zf=zc(!0);function zc(e=!1){return function(n,s,i,r){let o=n[s];if(ss(o)&&we(o)&&!we(i))return!1;if(!e&&(!Ei(i)&&!ss(i)&&(o=_e(o),i=_e(i)),!te(n)&&we(o)&&!we(i)))return o.value=i,!0;const a=te(n)&&So(s)?Number(s)<n.length:he(n,s),l=Reflect.set(n,s,i,r);return n===_e(r)&&(a?Fs(i,o)&&qt(n,"set",s,i):qt(n,"add",s,i)),l}}function Bf(e,t){const n=he(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&n&&qt(e,"delete",t,void 0),s}function Uf(e,t){const n=Reflect.has(e,t);return(!Eo(t)||!Hc.has(t))&&vt(e,"has",t),n}function qf(e){return vt(e,"iterate",te(e)?"length":$n),Reflect.ownKeys(e)}const Bc={get:Ff,set:Hf,deleteProperty:Bf,has:Uf,ownKeys:qf},Kf={get:Nf,set(e,t){return!0},deleteProperty(e,t){return!0}},Wf=st({},Bc,{get:Df,set:zf}),Mo=e=>e,Ui=e=>Reflect.getPrototypeOf(e);function si(e,t,n=!1,s=!1){e=e.__v_raw;const i=_e(e),r=_e(t);n||(t!==r&&vt(i,"get",t),vt(i,"get",r));const{has:o}=Ui(i),a=s?Mo:n?Ao:Ds;if(o.call(i,t))return a(e.get(t));if(o.call(i,r))return a(e.get(r));e!==i&&e.get(t)}function ii(e,t=!1){const n=this.__v_raw,s=_e(n),i=_e(e);return t||(e!==i&&vt(s,"has",e),vt(s,"has",i)),e===i?n.has(e):n.has(e)||n.has(i)}function ri(e,t=!1){return e=e.__v_raw,!t&&vt(_e(e),"iterate",$n),Reflect.get(e,"size",e)}function Sa(e){e=_e(e);const t=_e(this);return Ui(t).has.call(t,e)||(t.add(e),qt(t,"add",e,e)),this}function $a(e,t){t=_e(t);const n=_e(this),{has:s,get:i}=Ui(n);let r=s.call(n,e);r||(e=_e(e),r=s.call(n,e));const o=i.call(n,e);return n.set(e,t),r?Fs(t,o)&&qt(n,"set",e,t):qt(n,"add",e,t),this}function ka(e){const t=_e(this),{has:n,get:s}=Ui(t);let i=n.call(t,e);i||(e=_e(e),i=n.call(t,e)),s&&s.call(t,e);const r=t.delete(e);return i&&qt(t,"delete",e,void 0),r}function Oa(){const e=_e(this),t=e.size!==0,n=e.clear();return t&&qt(e,"clear",void 0,void 0),n}function oi(e,t){return function(s,i){const r=this,o=r.__v_raw,a=_e(o),l=t?Mo:e?Ao:Ds;return!e&&vt(a,"iterate",$n),o.forEach((c,u)=>s.call(i,l(c),l(u),r))}}function ai(e,t,n){return function(...s){const i=this.__v_raw,r=_e(i),o=Gn(r),a=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,c=i[e](...s),u=n?Mo:t?Ao:Ds;return!t&&vt(r,"iterate",l?Ir:$n),{next(){const{value:f,done:p}=c.next();return p?{value:f,done:p}:{value:a?[u(f[0]),u(f[1])]:u(f),done:p}},[Symbol.iterator](){return this}}}}function Qt(e){return function(...t){return e==="delete"?!1:this}}function Yf(){const e={get(r){return si(this,r)},get size(){return ri(this)},has:ii,add:Sa,set:$a,delete:ka,clear:Oa,forEach:oi(!1,!1)},t={get(r){return si(this,r,!1,!0)},get size(){return ri(this)},has:ii,add:Sa,set:$a,delete:ka,clear:Oa,forEach:oi(!1,!0)},n={get(r){return si(this,r,!0)},get size(){return ri(this,!0)},has(r){return ii.call(this,r,!0)},add:Qt("add"),set:Qt("set"),delete:Qt("delete"),clear:Qt("clear"),forEach:oi(!0,!1)},s={get(r){return si(this,r,!0,!0)},get size(){return ri(this,!0)},has(r){return ii.call(this,r,!0)},add:Qt("add"),set:Qt("set"),delete:Qt("delete"),clear:Qt("clear"),forEach:oi(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{e[r]=ai(r,!1,!1),n[r]=ai(r,!0,!1),t[r]=ai(r,!1,!0),s[r]=ai(r,!0,!0)}),[e,n,t,s]}const[Zf,Gf,Qf,Jf]=Yf();function Po(e,t){const n=t?e?Jf:Qf:e?Gf:Zf;return(s,i,r)=>i==="__v_isReactive"?!e:i==="__v_isReadonly"?e:i==="__v_raw"?s:Reflect.get(he(n,i)&&i in s?n:s,i,r)}const Xf={get:Po(!1,!1)},ep={get:Po(!1,!0)},tp={get:Po(!0,!1)},Uc=new WeakMap,qc=new WeakMap,Kc=new WeakMap,np=new WeakMap;function sp(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ip(e){return e.__v_skip||!Object.isExtensible(e)?0:sp(Mf(e))}function Ce(e){return ss(e)?e:Lo(e,!1,Bc,Xf,Uc)}function rp(e){return Lo(e,!1,Wf,ep,qc)}function Wn(e){return Lo(e,!0,Kf,tp,Kc)}function Lo(e,t,n,s,i){if(!je(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const r=i.get(e);if(r)return r;const o=ip(e);if(o===0)return e;const a=new Proxy(e,o===2?s:n);return i.set(e,a),a}function Jn(e){return ss(e)?Jn(e.__v_raw):!!(e&&e.__v_isReactive)}function ss(e){return!!(e&&e.__v_isReadonly)}function Ei(e){return!!(e&&e.__v_isShallow)}function Wc(e){return Jn(e)||ss(e)}function _e(e){const t=e&&e.__v_raw;return t?_e(t):e}function qi(e){return xi(e,"__v_skip",!0),e}const Ds=e=>je(e)?Ce(e):e,Ao=e=>je(e)?Wn(e):e;function Co(e){nn&&St&&(e=_e(e),Vc(e.dep||(e.dep=$o())))}function To(e,t){e=_e(e),e.dep&&Rr(e.dep)}function we(e){return!!(e&&e.__v_isRef===!0)}function H(e){return Yc(e,!1)}function Lt(e){return Yc(e,!0)}function Yc(e,t){return we(e)?e:new op(e,t)}class op{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:_e(t),this._value=n?t:Ds(t)}get value(){return Co(this),this._value}set value(t){const n=this.__v_isShallow||Ei(t)||ss(t);t=n?t:_e(t),Fs(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:Ds(t),To(this))}}function b(e){return we(e)?e.value:e}const ap={get:(e,t,n)=>b(Reflect.get(e,t,n)),set:(e,t,n,s)=>{const i=e[t];return we(i)&&!we(n)?(i.value=n,!0):Reflect.set(e,t,n,s)}};function Zc(e){return Jn(e)?e:new Proxy(e,ap)}class lp{constructor(t){this.dep=void 0,this.__v_isRef=!0;const{get:n,set:s}=t(()=>Co(this),()=>To(this));this._get=n,this._set=s}get value(){return this._get()}set value(t){this._set(t)}}function Gc(e){return new lp(e)}function cp(e){const t=te(e)?new Array(e.length):{};for(const n in e)t[n]=dp(e,n);return t}class up{constructor(t,n,s){this._object=t,this._key=n,this._defaultValue=s,this.__v_isRef=!0}get value(){const t=this._object[this._key];return t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}}function dp(e,t,n){const s=e[t];return we(s)?s:new up(e,t,n)}var Qc;class fp{constructor(t,n,s,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[Qc]=!1,this._dirty=!0,this.effect=new ko(t,()=>{this._dirty||(this._dirty=!0,To(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=s}get value(){const t=_e(this);return Co(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}Qc="__v_isReadonly";function pp(e,t,n=!1){let s,i;const r=oe(e);return r?(s=e,i=Ot):(s=e.get,i=e.set),new fp(s,i,r||!i,n)}function sn(e,t,n,s){let i;try{i=s?e(...s):e()}catch(r){Ki(r,t,n)}return i}function Mt(e,t,n,s){if(oe(e)){const r=sn(e,t,n,s);return r&&Ac(r)&&r.catch(o=>{Ki(o,t,n)}),r}const i=[];for(let r=0;r<e.length;r++)i.push(Mt(e[r],t,n,s));return i}function Ki(e,t,n,s=!0){const i=t?t.vnode:null;if(t){let r=t.parent;const o=t.proxy,a=n;for(;r;){const c=r.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](e,o,a)===!1)return}r=r.parent}const l=t.appContext.config.errorHandler;if(l){sn(l,null,10,[e,o,a]);return}}hp(e,n,i,s)}function hp(e,t,n,s=!0){console.error(e)}let Ns=!1,Fr=!1;const Ye=[];let It=0;const Xn=[];let zt=null,yn=0;const Jc=Promise.resolve();let jo=null;function Ze(e){const t=jo||Jc;return e?t.then(this?e.bind(this):e):t}function mp(e){let t=It+1,n=Ye.length;for(;t<n;){const s=t+n>>>1;Vs(Ye[s])<e?t=s+1:n=s}return t}function Io(e){(!Ye.length||!Ye.includes(e,Ns&&e.allowRecurse?It+1:It))&&(e.id==null?Ye.push(e):Ye.splice(mp(e.id),0,e),Xc())}function Xc(){!Ns&&!Fr&&(Fr=!0,jo=Jc.then(tu))}function gp(e){const t=Ye.indexOf(e);t>It&&Ye.splice(t,1)}function vp(e){te(e)?Xn.push(...e):(!zt||!zt.includes(e,e.allowRecurse?yn+1:yn))&&Xn.push(e),Xc()}function Ma(e,t=Ns?It+1:0){for(;t<Ye.length;t++){const n=Ye[t];n&&n.pre&&(Ye.splice(t,1),t--,n())}}function eu(e){if(Xn.length){const t=[...new Set(Xn)];if(Xn.length=0,zt){zt.push(...t);return}for(zt=t,zt.sort((n,s)=>Vs(n)-Vs(s)),yn=0;yn<zt.length;yn++)zt[yn]();zt=null,yn=0}}const Vs=e=>e.id==null?1/0:e.id,_p=(e,t)=>{const n=Vs(e)-Vs(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function tu(e){Fr=!1,Ns=!0,Ye.sort(_p);const t=Ot;try{for(It=0;It<Ye.length;It++){const n=Ye[It];n&&n.active!==!1&&sn(n,null,14)}}finally{It=0,Ye.length=0,eu(),Ns=!1,jo=null,(Ye.length||Xn.length)&&tu()}}function yp(e,t,...n){if(e.isUnmounted)return;const s=e.vnode.props||Pe;let i=n;const r=t.startsWith("update:"),o=r&&t.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:f,trim:p}=s[u]||Pe;p&&(i=n.map(h=>h.trim())),f&&(i=n.map(Cr))}let a,l=s[a=or(t)]||s[a=or(Nt(t))];!l&&r&&(l=s[a=or(Cn(t))]),l&&Mt(l,e,6,i);const c=s[a+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,Mt(c,e,6,i)}}function nu(e,t,n=!1){const s=t.emitsCache,i=s.get(e);if(i!==void 0)return i;const r=e.emits;let o={},a=!1;if(!oe(e)){const l=c=>{const u=nu(c,t,!0);u&&(a=!0,st(o,u))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!r&&!a?(je(e)&&s.set(e,null),null):(te(r)?r.forEach(l=>o[l]=null):st(o,r),je(e)&&s.set(e,o),o)}function Wi(e,t){return!e||!Vi(t)?!1:(t=t.slice(2).replace(/Once$/,""),he(e,t[0].toLowerCase()+t.slice(1))||he(e,Cn(t))||he(e,t))}let Ge=null,Yi=null;function Si(e){const t=Ge;return Ge=e,Yi=e&&e.type.__scopeId||null,t}function Tn(e){Yi=e}function jn(){Yi=null}function ae(e,t=Ge,n){if(!t||e._n)return e;const s=(...i)=>{s._d&&Na(-1);const r=Si(t),o=e(...i);return Si(r),s._d&&Na(1),o};return s._n=!0,s._c=!0,s._d=!0,s}function ar(e){const{type:t,vnode:n,proxy:s,withProxy:i,props:r,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:f,data:p,setupState:h,ctx:m,inheritAttrs:y}=e;let _,$;const x=Si(e);try{if(n.shapeFlag&4){const O=i||s;_=jt(u.call(O,O,f,r,h,p,m)),$=l}else{const O=t;_=jt(O.length>1?O(r,{attrs:l,slots:a,emit:c}):O(r,null)),$=t.props?l:bp(l)}}catch(O){Ms.length=0,Ki(O,e,1),_=J(un)}let S=_;if($&&y!==!1){const O=Object.keys($),{shapeFlag:I}=S;O.length&&I&7&&(o&&O.some(wo)&&($=wp($,o)),S=An(S,$))}return n.dirs&&(S=An(S),S.dirs=S.dirs?S.dirs.concat(n.dirs):n.dirs),n.transition&&(S.transition=n.transition),_=S,Si(x),_}const bp=e=>{let t;for(const n in e)(n==="class"||n==="style"||Vi(n))&&((t||(t={}))[n]=e[n]);return t},wp=(e,t)=>{const n={};for(const s in e)(!wo(s)||!(s.slice(9)in t))&&(n[s]=e[s]);return n};function xp(e,t,n){const{props:s,children:i,component:r}=e,{props:o,children:a,patchFlag:l}=t,c=r.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return s?Pa(s,o,c):!!o;if(l&8){const u=t.dynamicProps;for(let f=0;f<u.length;f++){const p=u[f];if(o[p]!==s[p]&&!Wi(c,p))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?Pa(s,o,c):!0:!!o;return!1}function Pa(e,t,n){const s=Object.keys(t);if(s.length!==Object.keys(e).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(t[r]!==e[r]&&!Wi(n,r))return!0}return!1}function Ep({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const su=e=>e.__isSuspense;function Sp(e,t){t&&t.pendingBranch?te(e)?t.effects.push(...e):t.effects.push(e):vp(e)}function ft(e,t){if(qe){let n=qe.provides;const s=qe.parent&&qe.parent.provides;s===n&&(n=qe.provides=Object.create(s)),n[e]=t}}function z(e,t,n=!1){const s=qe||Ge;if(s){const i=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(i&&e in i)return i[e];if(arguments.length>1)return n&&oe(t)?t.call(s.proxy):t}}function Zi(e,t){return Ro(e,null,t)}const La={};function ue(e,t,n){return Ro(e,t,n)}function Ro(e,t,{immediate:n,deep:s,flush:i,onTrack:r,onTrigger:o}=Pe){const a=qe;let l,c=!1,u=!1;if(we(e)?(l=()=>e.value,c=Ei(e)):Jn(e)?(l=()=>e,s=!0):te(e)?(u=!0,c=e.some($=>Jn($)||Ei($)),l=()=>e.map($=>{if(we($))return $.value;if(Jn($))return wn($);if(oe($))return sn($,a,2)})):oe(e)?t?l=()=>sn(e,a,2):l=()=>{if(!(a&&a.isUnmounted))return f&&f(),Mt(e,a,3,[p])}:l=Ot,t&&s){const $=l;l=()=>wn($())}let f,p=$=>{f=_.onStop=()=>{sn($,a,4)}};if(zs)return p=Ot,t?n&&Mt(t,a,3,[l(),u?[]:void 0,p]):l(),Ot;let h=u?[]:La;const m=()=>{if(!!_.active)if(t){const $=_.run();(s||c||(u?$.some((x,S)=>Fs(x,h[S])):Fs($,h)))&&(f&&f(),Mt(t,a,3,[$,h===La?void 0:h,p]),h=$)}else _.run()};m.allowRecurse=!!t;let y;i==="sync"?y=m:i==="post"?y=()=>Ke(m,a&&a.suspense):(m.pre=!0,a&&(m.id=a.uid),y=()=>Io(m));const _=new ko(l,y);return t?n?m():h=_.run():i==="post"?Ke(_.run.bind(_),a&&a.suspense):_.run(),()=>{_.stop(),a&&a.scope&&xo(a.scope.effects,_)}}function $p(e,t,n){const s=this.proxy,i=De(e)?e.includes(".")?iu(s,e):()=>s[e]:e.bind(s,s);let r;oe(t)?r=t:(r=t.handler,n=t);const o=qe;rs(this);const a=Ro(i,r.bind(s),n);return o?rs(o):kn(),a}function iu(e,t){const n=t.split(".");return()=>{let s=e;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}function wn(e,t){if(!je(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),we(e))wn(e.value,t);else if(te(e))for(let n=0;n<e.length;n++)wn(e[n],t);else if(Lc(e)||Gn(e))e.forEach(n=>{wn(n,t)});else if(Tc(e))for(const n in e)wn(e[n],t);return e}function ru(e,t){e.shapeFlag&6&&e.component?ru(e.component.subTree,t):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function ke(e){return oe(e)?{setup:e,name:e.name}:e}const es=e=>!!e.type.__asyncLoader,ou=e=>e.type.__isKeepAlive,kp={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(e,{slots:t}){const n=In(),s=n.ctx;if(!s.renderer)return()=>{const x=t.default&&t.default();return x&&x.length===1?x[0]:x};const i=new Map,r=new Set;let o=null;const a=n.suspense,{renderer:{p:l,m:c,um:u,o:{createElement:f}}}=s,p=f("div");s.activate=(x,S,O,I,C)=>{const N=x.component;c(x,S,O,0,a),l(N.vnode,x,S,O,N,a,I,x.slotScopeIds,C),Ke(()=>{N.isDeactivated=!1,N.a&&Qn(N.a);const Q=x.props&&x.props.onVnodeMounted;Q&&_t(Q,N.parent,x)},a)},s.deactivate=x=>{const S=x.component;c(x,p,null,1,a),Ke(()=>{S.da&&Qn(S.da);const O=x.props&&x.props.onVnodeUnmounted;O&&_t(O,S.parent,x),S.isDeactivated=!0},a)};function h(x){lr(x),u(x,n,a,!0)}function m(x){i.forEach((S,O)=>{const I=Ur(S.type);I&&(!x||!x(I))&&y(O)})}function y(x){const S=i.get(x);!o||S.type!==o.type?h(S):o&&lr(o),i.delete(x),r.delete(x)}ue(()=>[e.include,e.exclude],([x,S])=>{x&&m(O=>ks(x,O)),S&&m(O=>!ks(S,O))},{flush:"post",deep:!0});let _=null;const $=()=>{_!=null&&i.set(_,cr(n.subTree))};return Gs($),Fo($),Qi(()=>{i.forEach(x=>{const{subTree:S,suspense:O}=n,I=cr(S);if(x.type===I.type){lr(I);const C=I.component.da;C&&Ke(C,O);return}h(x)})}),()=>{if(_=null,!t.default)return null;const x=t.default(),S=x[0];if(x.length>1)return o=null,x;if(!is(S)||!(S.shapeFlag&4)&&!(S.shapeFlag&128))return o=null,S;let O=cr(S);const I=O.type,C=Ur(es(O)?O.type.__asyncResolved||{}:I),{include:N,exclude:Q,max:se}=e;if(N&&(!C||!ks(N,C))||Q&&C&&ks(Q,C))return o=O,S;const pe=O.key==null?I:O.key,me=i.get(pe);return O.el&&(O=An(O),S.shapeFlag&128&&(S.ssContent=O)),_=pe,me?(O.el=me.el,O.component=me.component,O.transition&&ru(O,O.transition),O.shapeFlag|=512,r.delete(pe),r.add(pe)):(r.add(pe),se&&r.size>parseInt(se,10)&&y(r.values().next().value)),O.shapeFlag|=256,o=O,su(S.type)?S:O}}},au=kp;function ks(e,t){return te(e)?e.some(n=>ks(n,t)):De(e)?e.split(",").includes(t):e.test?e.test(t):!1}function Op(e,t){lu(e,"a",t)}function Mp(e,t){lu(e,"da",t)}function lu(e,t,n=qe){const s=e.__wdc||(e.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return e()});if(Gi(t,s,n),n){let i=n.parent;for(;i&&i.parent;)ou(i.parent.vnode)&&Pp(s,t,n,i),i=i.parent}}function Pp(e,t,n,s){const i=Gi(t,e,s,!0);Do(()=>{xo(s[t],i)},n)}function lr(e){let t=e.shapeFlag;t&256&&(t-=256),t&512&&(t-=512),e.shapeFlag=t}function cr(e){return e.shapeFlag&128?e.ssContent:e}function Gi(e,t,n=qe,s=!1){if(n){const i=n[e]||(n[e]=[]),r=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;cs(),rs(n);const a=Mt(t,n,e,o);return kn(),us(),a});return s?i.unshift(r):i.push(r),r}}const Wt=e=>(t,n=qe)=>(!zs||e==="sp")&&Gi(e,t,n),cu=Wt("bm"),Gs=Wt("m"),Lp=Wt("bu"),Fo=Wt("u"),Qi=Wt("bum"),Do=Wt("um"),Ap=Wt("sp"),Cp=Wt("rtg"),Tp=Wt("rtc");function jp(e,t=qe){Gi("ec",e,t)}function Ue(e,t){const n=Ge;if(n===null)return e;const s=Xi(n)||n.proxy,i=e.dirs||(e.dirs=[]);for(let r=0;r<t.length;r++){let[o,a,l,c=Pe]=t[r];oe(o)&&(o={mounted:o,updated:o}),o.deep&&wn(a),i.push({dir:o,instance:s,value:a,oldValue:void 0,arg:l,modifiers:c})}return e}function hn(e,t,n,s){const i=e.dirs,r=t&&t.dirs;for(let o=0;o<i.length;o++){const a=i[o];r&&(a.oldValue=r[o].value);let l=a.dir[s];l&&(cs(),Mt(l,n,8,[e.el,a,e,t]),us())}}const uu="components",Ip="directives";function $i(e,t){return du(uu,e,!0,t)||e}const Rp=Symbol();function Yt(e){return du(Ip,e)}function du(e,t,n=!0,s=!1){const i=Ge||qe;if(i){const r=i.type;if(e===uu){const a=Ur(r,!1);if(a&&(a===t||a===Nt(t)||a===Bi(Nt(t))))return r}const o=Aa(i[e]||r[e],t)||Aa(i.appContext[e],t);return!o&&s?r:o}}function Aa(e,t){return e&&(e[t]||e[Nt(t)]||e[Bi(Nt(t))])}function Qs(e,t,n,s){let i;const r=n&&n[s];if(te(e)||De(e)){i=new Array(e.length);for(let o=0,a=e.length;o<a;o++)i[o]=t(e[o],o,void 0,r&&r[o])}else if(typeof e=="number"){i=new Array(e);for(let o=0;o<e;o++)i[o]=t(o+1,o,void 0,r&&r[o])}else if(je(e))if(e[Symbol.iterator])i=Array.from(e,(o,a)=>t(o,a,void 0,r&&r[a]));else{const o=Object.keys(e);i=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];i[a]=t(e[c],c,a,r&&r[a])}}else i=[];return n&&(n[s]=i),i}function cn(e,t,n={},s,i){if(Ge.isCE||Ge.parent&&es(Ge.parent)&&Ge.parent.isCE)return J("slot",t==="default"?null:{name:t},s&&s());let r=e[t];r&&r._c&&(r._d=!1),E();const o=r&&fu(r(n)),a=W(Se,{key:n.key||o&&o.key||`_${t}`},o||(s?s():[]),o&&e._===1?64:-2);return!i&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),r&&r._c&&(r._d=!0),a}function fu(e){return e.some(t=>is(t)?!(t.type===un||t.type===Se&&!fu(t.children)):!0)?e:null}const Dr=e=>e?xu(e)?Xi(e)||e.proxy:Dr(e.parent):null,ki=st(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Dr(e.parent),$root:e=>Dr(e.root),$emit:e=>e.emit,$options:e=>No(e),$forceUpdate:e=>e.f||(e.f=()=>Io(e.update)),$nextTick:e=>e.n||(e.n=Ze.bind(e.proxy)),$watch:e=>$p.bind(e)}),Fp={get({_:e},t){const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:a,appContext:l}=e;let c;if(t[0]!=="$"){const h=o[t];if(h!==void 0)switch(h){case 1:return s[t];case 2:return i[t];case 4:return n[t];case 3:return r[t]}else{if(s!==Pe&&he(s,t))return o[t]=1,s[t];if(i!==Pe&&he(i,t))return o[t]=2,i[t];if((c=e.propsOptions[0])&&he(c,t))return o[t]=3,r[t];if(n!==Pe&&he(n,t))return o[t]=4,n[t];Nr&&(o[t]=0)}}const u=ki[t];let f,p;if(u)return t==="$attrs"&&vt(e,"get",t),u(e);if((f=a.__cssModules)&&(f=f[t]))return f;if(n!==Pe&&he(n,t))return o[t]=4,n[t];if(p=l.config.globalProperties,he(p,t))return p[t]},set({_:e},t,n){const{data:s,setupState:i,ctx:r}=e;return i!==Pe&&he(i,t)?(i[t]=n,!0):s!==Pe&&he(s,t)?(s[t]=n,!0):he(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(r[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let a;return!!n[o]||e!==Pe&&he(e,o)||t!==Pe&&he(t,o)||(a=r[0])&&he(a,o)||he(s,o)||he(ki,o)||he(i.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:he(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};let Nr=!0;function Dp(e){const t=No(e),n=e.proxy,s=e.ctx;Nr=!1,t.beforeCreate&&Ca(t.beforeCreate,e,"bc");const{data:i,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:p,beforeUpdate:h,updated:m,activated:y,deactivated:_,beforeDestroy:$,beforeUnmount:x,destroyed:S,unmounted:O,render:I,renderTracked:C,renderTriggered:N,errorCaptured:Q,serverPrefetch:se,expose:pe,inheritAttrs:me,components:Ne,directives:Ve,filters:Fe}=t;if(c&&Np(c,s,null,e.appContext.config.unwrapInjectedRef),o)for(const U in o){const ee=o[U];oe(ee)&&(s[U]=ee.bind(n))}if(i){const U=i.call(n,n);je(U)&&(e.data=Ce(U))}if(Nr=!0,r)for(const U in r){const ee=r[U],ce=oe(ee)?ee.bind(n,n):oe(ee.get)?ee.get.bind(n,n):Ot,$e=!oe(ee)&&oe(ee.set)?ee.set.bind(n):Ot,ot=k({get:ce,set:$e});Object.defineProperty(s,U,{enumerable:!0,configurable:!0,get:()=>ot.value,set:We=>ot.value=We})}if(a)for(const U in a)pu(a[U],s,n,U);if(l){const U=oe(l)?l.call(n):l;Reflect.ownKeys(U).forEach(ee=>{ft(ee,U[ee])})}u&&Ca(u,e,"c");function Te(U,ee){te(ee)?ee.forEach(ce=>U(ce.bind(n))):ee&&U(ee.bind(n))}if(Te(cu,f),Te(Gs,p),Te(Lp,h),Te(Fo,m),Te(Op,y),Te(Mp,_),Te(jp,Q),Te(Tp,C),Te(Cp,N),Te(Qi,x),Te(Do,O),Te(Ap,se),te(pe))if(pe.length){const U=e.exposed||(e.exposed={});pe.forEach(ee=>{Object.defineProperty(U,ee,{get:()=>n[ee],set:ce=>n[ee]=ce})})}else e.exposed||(e.exposed={});I&&e.render===Ot&&(e.render=I),me!=null&&(e.inheritAttrs=me),Ne&&(e.components=Ne),Ve&&(e.directives=Ve)}function Np(e,t,n=Ot,s=!1){te(e)&&(e=Vr(e));for(const i in e){const r=e[i];let o;je(r)?"default"in r?o=z(r.from||i,r.default,!0):o=z(r.from||i):o=z(r),we(o)&&s?Object.defineProperty(t,i,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):t[i]=o}}function Ca(e,t,n){Mt(te(e)?e.map(s=>s.bind(t.proxy)):e.bind(t.proxy),t,n)}function pu(e,t,n,s){const i=s.includes(".")?iu(n,s):()=>n[s];if(De(e)){const r=t[e];oe(r)&&ue(i,r)}else if(oe(e))ue(i,e.bind(n));else if(je(e))if(te(e))e.forEach(r=>pu(r,t,n,s));else{const r=oe(e.handler)?e.handler.bind(n):t[e.handler];oe(r)&&ue(i,r,e)}}function No(e){const t=e.type,{mixins:n,extends:s}=t,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=e.appContext,a=r.get(t);let l;return a?l=a:!i.length&&!n&&!s?l=t:(l={},i.length&&i.forEach(c=>Oi(l,c,o,!0)),Oi(l,t,o)),je(t)&&r.set(t,l),l}function Oi(e,t,n,s=!1){const{mixins:i,extends:r}=t;r&&Oi(e,r,n,!0),i&&i.forEach(o=>Oi(e,o,n,!0));for(const o in t)if(!(s&&o==="expose")){const a=Vp[o]||n&&n[o];e[o]=a?a(e[o],t[o]):t[o]}return e}const Vp={data:Ta,props:_n,emits:_n,methods:_n,computed:_n,beforeCreate:Xe,created:Xe,beforeMount:Xe,mounted:Xe,beforeUpdate:Xe,updated:Xe,beforeDestroy:Xe,beforeUnmount:Xe,destroyed:Xe,unmounted:Xe,activated:Xe,deactivated:Xe,errorCaptured:Xe,serverPrefetch:Xe,components:_n,directives:_n,watch:zp,provide:Ta,inject:Hp};function Ta(e,t){return t?e?function(){return st(oe(e)?e.call(this,this):e,oe(t)?t.call(this,this):t)}:t:e}function Hp(e,t){return _n(Vr(e),Vr(t))}function Vr(e){if(te(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Xe(e,t){return e?[...new Set([].concat(e,t))]:t}function _n(e,t){return e?st(st(Object.create(null),e),t):t}function zp(e,t){if(!e)return t;if(!t)return e;const n=st(Object.create(null),e);for(const s in t)n[s]=Xe(e[s],t[s]);return n}function Bp(e,t,n,s=!1){const i={},r={};xi(r,Ji,1),e.propsDefaults=Object.create(null),hu(e,t,i,r);for(const o in e.propsOptions[0])o in i||(i[o]=void 0);n?e.props=s?i:rp(i):e.type.props?e.props=i:e.props=r,e.attrs=r}function Up(e,t,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=e,a=_e(i),[l]=e.propsOptions;let c=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=e.vnode.dynamicProps;for(let f=0;f<u.length;f++){let p=u[f];if(Wi(e.emitsOptions,p))continue;const h=t[p];if(l)if(he(r,p))h!==r[p]&&(r[p]=h,c=!0);else{const m=Nt(p);i[m]=Hr(l,a,m,h,e,!1)}else h!==r[p]&&(r[p]=h,c=!0)}}}else{hu(e,t,i,r)&&(c=!0);let u;for(const f in a)(!t||!he(t,f)&&((u=Cn(f))===f||!he(t,u)))&&(l?n&&(n[f]!==void 0||n[u]!==void 0)&&(i[f]=Hr(l,a,f,void 0,e,!0)):delete i[f]);if(r!==a)for(const f in r)(!t||!he(t,f)&&!0)&&(delete r[f],c=!0)}c&&qt(e,"set","$attrs")}function hu(e,t,n,s){const[i,r]=e.propsOptions;let o=!1,a;if(t)for(let l in t){if(pi(l))continue;const c=t[l];let u;i&&he(i,u=Nt(l))?!r||!r.includes(u)?n[u]=c:(a||(a={}))[u]=c:Wi(e.emitsOptions,l)||(!(l in s)||c!==s[l])&&(s[l]=c,o=!0)}if(r){const l=_e(n),c=a||Pe;for(let u=0;u<r.length;u++){const f=r[u];n[f]=Hr(i,l,f,c[f],e,!he(c,f))}}return o}function Hr(e,t,n,s,i,r){const o=e[n];if(o!=null){const a=he(o,"default");if(a&&s===void 0){const l=o.default;if(o.type!==Function&&oe(l)){const{propsDefaults:c}=i;n in c?s=c[n]:(rs(i),s=c[n]=l.call(null,t),kn())}else s=l}o[0]&&(r&&!a?s=!1:o[1]&&(s===""||s===Cn(n))&&(s=!0))}return s}function mu(e,t,n=!1){const s=t.propsCache,i=s.get(e);if(i)return i;const r=e.props,o={},a=[];let l=!1;if(!oe(e)){const u=f=>{l=!0;const[p,h]=mu(f,t,!0);st(o,p),h&&a.push(...h)};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!r&&!l)return je(e)&&s.set(e,Zn),Zn;if(te(r))for(let u=0;u<r.length;u++){const f=Nt(r[u]);ja(f)&&(o[f]=Pe)}else if(r)for(const u in r){const f=Nt(u);if(ja(f)){const p=r[u],h=o[f]=te(p)||oe(p)?{type:p}:p;if(h){const m=Fa(Boolean,h.type),y=Fa(String,h.type);h[0]=m>-1,h[1]=y<0||m<y,(m>-1||he(h,"default"))&&a.push(f)}}}const c=[o,a];return je(e)&&s.set(e,c),c}function ja(e){return e[0]!=="$"}function Ia(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:e===null?"null":""}function Ra(e,t){return Ia(e)===Ia(t)}function Fa(e,t){return te(t)?t.findIndex(n=>Ra(n,e)):oe(t)&&Ra(t,e)?0:-1}const gu=e=>e[0]==="_"||e==="$stable",Vo=e=>te(e)?e.map(jt):[jt(e)],qp=(e,t,n)=>{if(t._n)return t;const s=ae((...i)=>Vo(t(...i)),n);return s._c=!1,s},vu=(e,t,n)=>{const s=e._ctx;for(const i in e){if(gu(i))continue;const r=e[i];if(oe(r))t[i]=qp(i,r,s);else if(r!=null){const o=Vo(r);t[i]=()=>o}}},_u=(e,t)=>{const n=Vo(t);e.slots.default=()=>n},Kp=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=_e(t),xi(t,"_",n)):vu(t,e.slots={})}else e.slots={},t&&_u(e,t);xi(e.slots,Ji,1)},Wp=(e,t,n)=>{const{vnode:s,slots:i}=e;let r=!0,o=Pe;if(s.shapeFlag&32){const a=t._;a?n&&a===1?r=!1:(st(i,t),!n&&a===1&&delete i._):(r=!t.$stable,vu(t,i)),o=t}else t&&(_u(e,t),o={default:1});if(r)for(const a in i)!gu(a)&&!(a in o)&&delete i[a]};function yu(){return{app:null,config:{isNativeTag:$f,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Yp=0;function Zp(e,t){return function(s,i=null){oe(s)||(s=Object.assign({},s)),i!=null&&!je(i)&&(i=null);const r=yu(),o=new Set;let a=!1;const l=r.app={_uid:Yp++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:hh,get config(){return r.config},set config(c){},use(c,...u){return o.has(c)||(c&&oe(c.install)?(o.add(c),c.install(l,...u)):oe(c)&&(o.add(c),c(l,...u))),l},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),l},component(c,u){return u?(r.components[c]=u,l):r.components[c]},directive(c,u){return u?(r.directives[c]=u,l):r.directives[c]},mount(c,u,f){if(!a){const p=J(s,i);return p.appContext=r,u&&t?t(p,c):e(p,c,f),a=!0,l._container=c,c.__vue_app__=l,Xi(p.component)||p.component.proxy}},unmount(){a&&(e(null,l._container),delete l._container.__vue_app__)},provide(c,u){return r.provides[c]=u,l}};return l}}function zr(e,t,n,s,i=!1){if(te(e)){e.forEach((p,h)=>zr(p,t&&(te(t)?t[h]:t),n,s,i));return}if(es(s)&&!i)return;const r=s.shapeFlag&4?Xi(s.component)||s.component.proxy:s.el,o=i?null:r,{i:a,r:l}=e,c=t&&t.r,u=a.refs===Pe?a.refs={}:a.refs,f=a.setupState;if(c!=null&&c!==l&&(De(c)?(u[c]=null,he(f,c)&&(f[c]=null)):we(c)&&(c.value=null)),oe(l))sn(l,a,12,[o,u]);else{const p=De(l),h=we(l);if(p||h){const m=()=>{if(e.f){const y=p?u[l]:l.value;i?te(y)&&xo(y,r):te(y)?y.includes(r)||y.push(r):p?(u[l]=[r],he(f,l)&&(f[l]=u[l])):(l.value=[r],e.k&&(u[e.k]=l.value))}else p?(u[l]=o,he(f,l)&&(f[l]=o)):h&&(l.value=o,e.k&&(u[e.k]=o))};o?(m.id=-1,Ke(m,n)):m()}}}const Ke=Sp;function Gp(e){return Qp(e)}function Qp(e,t){const n=Af();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:p,setScopeId:h=Ot,cloneNode:m,insertStaticContent:y}=e,_=(g,v,w,L=null,P=null,j=null,V=!1,T=null,F=!!v.dynamicChildren)=>{if(g===v)return;g&&!vs(g,v)&&(L=K(g),it(g,P,j,!0),g=null),v.patchFlag===-2&&(F=!1,v.dynamicChildren=null);const{type:A,ref:Z,shapeFlag:q}=v;switch(A){case zo:$(g,v,w,L);break;case un:x(g,v,w,L);break;case ur:g==null&&S(v,w,L,V);break;case Se:Ve(g,v,w,L,P,j,V,T,F);break;default:q&1?C(g,v,w,L,P,j,V,T,F):q&6?Fe(g,v,w,L,P,j,V,T,F):(q&64||q&128)&&A.process(g,v,w,L,P,j,V,T,F,de)}Z!=null&&P&&zr(Z,g&&g.ref,j,v||g,!v)},$=(g,v,w,L)=>{if(g==null)s(v.el=a(v.children),w,L);else{const P=v.el=g.el;v.children!==g.children&&c(P,v.children)}},x=(g,v,w,L)=>{g==null?s(v.el=l(v.children||""),w,L):v.el=g.el},S=(g,v,w,L)=>{[g.el,g.anchor]=y(g.children,v,w,L,g.el,g.anchor)},O=({el:g,anchor:v},w,L)=>{let P;for(;g&&g!==v;)P=p(g),s(g,w,L),g=P;s(v,w,L)},I=({el:g,anchor:v})=>{let w;for(;g&&g!==v;)w=p(g),i(g),g=w;i(v)},C=(g,v,w,L,P,j,V,T,F)=>{V=V||v.type==="svg",g==null?N(v,w,L,P,j,V,T,F):pe(g,v,P,j,V,T,F)},N=(g,v,w,L,P,j,V,T)=>{let F,A;const{type:Z,props:q,shapeFlag:G,transition:ne,patchFlag:ge,dirs:Oe}=g;if(g.el&&m!==void 0&&ge===-1)F=g.el=m(g.el);else{if(F=g.el=o(g.type,j,q&&q.is,q),G&8?u(F,g.children):G&16&&se(g.children,F,null,L,P,j&&Z!=="foreignObject",V,T),Oe&&hn(g,null,L,"created"),q){for(const Ae in q)Ae!=="value"&&!pi(Ae)&&r(F,Ae,null,q[Ae],j,g.children,L,P,R);"value"in q&&r(F,"value",null,q.value),(A=q.onVnodeBeforeMount)&&_t(A,L,g)}Q(F,g,g.scopeId,V,L)}Oe&&hn(g,null,L,"beforeMount");const Me=(!P||P&&!P.pendingBranch)&&ne&&!ne.persisted;Me&&ne.beforeEnter(F),s(F,v,w),((A=q&&q.onVnodeMounted)||Me||Oe)&&Ke(()=>{A&&_t(A,L,g),Me&&ne.enter(F),Oe&&hn(g,null,L,"mounted")},P)},Q=(g,v,w,L,P)=>{if(w&&h(g,w),L)for(let j=0;j<L.length;j++)h(g,L[j]);if(P){let j=P.subTree;if(v===j){const V=P.vnode;Q(g,V,V.scopeId,V.slotScopeIds,P.parent)}}},se=(g,v,w,L,P,j,V,T,F=0)=>{for(let A=F;A<g.length;A++){const Z=g[A]=T?Xt(g[A]):jt(g[A]);_(null,Z,v,w,L,P,j,V,T)}},pe=(g,v,w,L,P,j,V)=>{const T=v.el=g.el;let{patchFlag:F,dynamicChildren:A,dirs:Z}=v;F|=g.patchFlag&16;const q=g.props||Pe,G=v.props||Pe;let ne;w&&mn(w,!1),(ne=G.onVnodeBeforeUpdate)&&_t(ne,w,v,g),Z&&hn(v,g,w,"beforeUpdate"),w&&mn(w,!0);const ge=P&&v.type!=="foreignObject";if(A?me(g.dynamicChildren,A,T,w,L,ge,j):V||ce(g,v,T,null,w,L,ge,j,!1),F>0){if(F&16)Ne(T,v,q,G,w,L,P);else if(F&2&&q.class!==G.class&&r(T,"class",null,G.class,P),F&4&&r(T,"style",q.style,G.style,P),F&8){const Oe=v.dynamicProps;for(let Me=0;Me<Oe.length;Me++){const Ae=Oe[Me],wt=q[Ae],Nn=G[Ae];(Nn!==wt||Ae==="value")&&r(T,Ae,wt,Nn,P,g.children,w,L,R)}}F&1&&g.children!==v.children&&u(T,v.children)}else!V&&A==null&&Ne(T,v,q,G,w,L,P);((ne=G.onVnodeUpdated)||Z)&&Ke(()=>{ne&&_t(ne,w,v,g),Z&&hn(v,g,w,"updated")},L)},me=(g,v,w,L,P,j,V)=>{for(let T=0;T<v.length;T++){const F=g[T],A=v[T],Z=F.el&&(F.type===Se||!vs(F,A)||F.shapeFlag&70)?f(F.el):w;_(F,A,Z,null,L,P,j,V,!0)}},Ne=(g,v,w,L,P,j,V)=>{if(w!==L){for(const T in L){if(pi(T))continue;const F=L[T],A=w[T];F!==A&&T!=="value"&&r(g,T,A,F,V,v.children,P,j,R)}if(w!==Pe)for(const T in w)!pi(T)&&!(T in L)&&r(g,T,w[T],null,V,v.children,P,j,R);"value"in L&&r(g,"value",w.value,L.value)}},Ve=(g,v,w,L,P,j,V,T,F)=>{const A=v.el=g?g.el:a(""),Z=v.anchor=g?g.anchor:a("");let{patchFlag:q,dynamicChildren:G,slotScopeIds:ne}=v;ne&&(T=T?T.concat(ne):ne),g==null?(s(A,w,L),s(Z,w,L),se(v.children,w,Z,P,j,V,T,F)):q>0&&q&64&&G&&g.dynamicChildren?(me(g.dynamicChildren,G,w,P,j,V,T),(v.key!=null||P&&v===P.subTree)&&Ho(g,v,!0)):ce(g,v,w,Z,P,j,V,T,F)},Fe=(g,v,w,L,P,j,V,T,F)=>{v.slotScopeIds=T,g==null?v.shapeFlag&512?P.ctx.activate(v,w,L,V,F):Le(v,w,L,P,j,V,F):Te(g,v,F)},Le=(g,v,w,L,P,j,V)=>{const T=g.component=ah(g,L,P);if(ou(g)&&(T.ctx.renderer=de),lh(T),T.asyncDep){if(P&&P.registerDep(T,U),!g.el){const F=T.subTree=J(un);x(null,F,v,w)}return}U(T,g,v,w,P,j,V)},Te=(g,v,w)=>{const L=v.component=g.component;if(xp(g,v,w))if(L.asyncDep&&!L.asyncResolved){ee(L,v,w);return}else L.next=v,gp(L.update),L.update();else v.el=g.el,L.vnode=v},U=(g,v,w,L,P,j,V)=>{const T=()=>{if(g.isMounted){let{next:Z,bu:q,u:G,parent:ne,vnode:ge}=g,Oe=Z,Me;mn(g,!1),Z?(Z.el=ge.el,ee(g,Z,V)):Z=ge,q&&Qn(q),(Me=Z.props&&Z.props.onVnodeBeforeUpdate)&&_t(Me,ne,Z,ge),mn(g,!0);const Ae=ar(g),wt=g.subTree;g.subTree=Ae,_(wt,Ae,f(wt.el),K(wt),g,P,j),Z.el=Ae.el,Oe===null&&Ep(g,Ae.el),G&&Ke(G,P),(Me=Z.props&&Z.props.onVnodeUpdated)&&Ke(()=>_t(Me,ne,Z,ge),P)}else{let Z;const{el:q,props:G}=v,{bm:ne,m:ge,parent:Oe}=g,Me=es(v);if(mn(g,!1),ne&&Qn(ne),!Me&&(Z=G&&G.onVnodeBeforeMount)&&_t(Z,Oe,v),mn(g,!0),q&&X){const Ae=()=>{g.subTree=ar(g),X(q,g.subTree,g,P,null)};Me?v.type.__asyncLoader().then(()=>!g.isUnmounted&&Ae()):Ae()}else{const Ae=g.subTree=ar(g);_(null,Ae,w,L,g,P,j),v.el=Ae.el}if(ge&&Ke(ge,P),!Me&&(Z=G&&G.onVnodeMounted)){const Ae=v;Ke(()=>_t(Z,Oe,Ae),P)}(v.shapeFlag&256||Oe&&es(Oe.vnode)&&Oe.vnode.shapeFlag&256)&&g.a&&Ke(g.a,P),g.isMounted=!0,v=w=L=null}},F=g.effect=new ko(T,()=>Io(A),g.scope),A=g.update=()=>F.run();A.id=g.uid,mn(g,!0),A()},ee=(g,v,w)=>{v.component=g;const L=g.vnode.props;g.vnode=v,g.next=null,Up(g,v.props,L,w),Wp(g,v.children,w),cs(),Ma(),us()},ce=(g,v,w,L,P,j,V,T,F=!1)=>{const A=g&&g.children,Z=g?g.shapeFlag:0,q=v.children,{patchFlag:G,shapeFlag:ne}=v;if(G>0){if(G&128){ot(A,q,w,L,P,j,V,T,F);return}else if(G&256){$e(A,q,w,L,P,j,V,T,F);return}}ne&8?(Z&16&&R(A,P,j),q!==A&&u(w,q)):Z&16?ne&16?ot(A,q,w,L,P,j,V,T,F):R(A,P,j,!0):(Z&8&&u(w,""),ne&16&&se(q,w,L,P,j,V,T,F))},$e=(g,v,w,L,P,j,V,T,F)=>{g=g||Zn,v=v||Zn;const A=g.length,Z=v.length,q=Math.min(A,Z);let G;for(G=0;G<q;G++){const ne=v[G]=F?Xt(v[G]):jt(v[G]);_(g[G],ne,w,null,P,j,V,T,F)}A>Z?R(g,P,j,!0,!1,q):se(v,w,L,P,j,V,T,F,q)},ot=(g,v,w,L,P,j,V,T,F)=>{let A=0;const Z=v.length;let q=g.length-1,G=Z-1;for(;A<=q&&A<=G;){const ne=g[A],ge=v[A]=F?Xt(v[A]):jt(v[A]);if(vs(ne,ge))_(ne,ge,w,null,P,j,V,T,F);else break;A++}for(;A<=q&&A<=G;){const ne=g[q],ge=v[G]=F?Xt(v[G]):jt(v[G]);if(vs(ne,ge))_(ne,ge,w,null,P,j,V,T,F);else break;q--,G--}if(A>q){if(A<=G){const ne=G+1,ge=ne<Z?v[ne].el:L;for(;A<=G;)_(null,v[A]=F?Xt(v[A]):jt(v[A]),w,ge,P,j,V,T,F),A++}}else if(A>G)for(;A<=q;)it(g[A],P,j,!0),A++;else{const ne=A,ge=A,Oe=new Map;for(A=ge;A<=G;A++){const at=v[A]=F?Xt(v[A]):jt(v[A]);at.key!=null&&Oe.set(at.key,A)}let Me,Ae=0;const wt=G-ge+1;let Nn=!1,va=0;const gs=new Array(wt);for(A=0;A<wt;A++)gs[A]=0;for(A=ne;A<=q;A++){const at=g[A];if(Ae>=wt){it(at,P,j,!0);continue}let Tt;if(at.key!=null)Tt=Oe.get(at.key);else for(Me=ge;Me<=G;Me++)if(gs[Me-ge]===0&&vs(at,v[Me])){Tt=Me;break}Tt===void 0?it(at,P,j,!0):(gs[Tt-ge]=A+1,Tt>=va?va=Tt:Nn=!0,_(at,v[Tt],w,null,P,j,V,T,F),Ae++)}const _a=Nn?Jp(gs):Zn;for(Me=_a.length-1,A=wt-1;A>=0;A--){const at=ge+A,Tt=v[at],ya=at+1<Z?v[at+1].el:L;gs[A]===0?_(null,Tt,w,ya,P,j,V,T,F):Nn&&(Me<0||A!==_a[Me]?We(Tt,w,ya,2):Me--)}}},We=(g,v,w,L,P=null)=>{const{el:j,type:V,transition:T,children:F,shapeFlag:A}=g;if(A&6){We(g.component.subTree,v,w,L);return}if(A&128){g.suspense.move(v,w,L);return}if(A&64){V.move(g,v,w,de);return}if(V===Se){s(j,v,w);for(let q=0;q<F.length;q++)We(F[q],v,w,L);s(g.anchor,v,w);return}if(V===ur){O(g,v,w);return}if(L!==2&&A&1&&T)if(L===0)T.beforeEnter(j),s(j,v,w),Ke(()=>T.enter(j),P);else{const{leave:q,delayLeave:G,afterLeave:ne}=T,ge=()=>s(j,v,w),Oe=()=>{q(j,()=>{ge(),ne&&ne()})};G?G(j,ge,Oe):Oe()}else s(j,v,w)},it=(g,v,w,L=!1,P=!1)=>{const{type:j,props:V,ref:T,children:F,dynamicChildren:A,shapeFlag:Z,patchFlag:q,dirs:G}=g;if(T!=null&&zr(T,null,w,g,!0),Z&256){v.ctx.deactivate(g);return}const ne=Z&1&&G,ge=!es(g);let Oe;if(ge&&(Oe=V&&V.onVnodeBeforeUnmount)&&_t(Oe,v,g),Z&6)B(g.component,w,L);else{if(Z&128){g.suspense.unmount(w,L);return}ne&&hn(g,null,v,"beforeUnmount"),Z&64?g.type.remove(g,v,w,P,de,L):A&&(j!==Se||q>0&&q&64)?R(A,v,w,!1,!0):(j===Se&&q&384||!P&&Z&16)&&R(F,v,w),L&&pn(g)}(ge&&(Oe=V&&V.onVnodeUnmounted)||ne)&&Ke(()=>{Oe&&_t(Oe,v,g),ne&&hn(g,null,v,"unmounted")},w)},pn=g=>{const{type:v,el:w,anchor:L,transition:P}=g;if(v===Se){M(w,L);return}if(v===ur){I(g);return}const j=()=>{i(w),P&&!P.persisted&&P.afterLeave&&P.afterLeave()};if(g.shapeFlag&1&&P&&!P.persisted){const{leave:V,delayLeave:T}=P,F=()=>V(w,j);T?T(g.el,j,F):F()}else j()},M=(g,v)=>{let w;for(;g!==v;)w=p(g),i(g),g=w;i(v)},B=(g,v,w)=>{const{bum:L,scope:P,update:j,subTree:V,um:T}=g;L&&Qn(L),P.stop(),j&&(j.active=!1,it(V,g,v,w)),T&&Ke(T,v),Ke(()=>{g.isUnmounted=!0},v),v&&v.pendingBranch&&!v.isUnmounted&&g.asyncDep&&!g.asyncResolved&&g.suspenseId===v.pendingId&&(v.deps--,v.deps===0&&v.resolve())},R=(g,v,w,L=!1,P=!1,j=0)=>{for(let V=j;V<g.length;V++)it(g[V],v,w,L,P)},K=g=>g.shapeFlag&6?K(g.component.subTree):g.shapeFlag&128?g.suspense.next():p(g.anchor||g.el),ve=(g,v,w)=>{g==null?v._vnode&&it(v._vnode,null,null,!0):_(v._vnode||null,g,v,null,null,null,w),Ma(),eu(),v._vnode=g},de={p:_,um:it,m:We,r:pn,mt:Le,mc:se,pc:ce,pbc:me,n:K,o:e};let ie,X;return t&&([ie,X]=t(de)),{render:ve,hydrate:ie,createApp:Zp(ve,ie)}}function mn({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function Ho(e,t,n=!1){const s=e.children,i=t.children;if(te(s)&&te(i))for(let r=0;r<s.length;r++){const o=s[r];let a=i[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[r]=Xt(i[r]),a.el=o.el),n||Ho(o,a))}}function Jp(e){const t=e.slice(),n=[0];let s,i,r,o,a;const l=e.length;for(s=0;s<l;s++){const c=e[s];if(c!==0){if(i=n[n.length-1],e[i]<c){t[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,e[n[a]]<c?r=a+1:o=a;c<e[n[r]]&&(r>0&&(t[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=t[o];return n}const Xp=e=>e.__isTeleport,Os=e=>e&&(e.disabled||e.disabled===""),Da=e=>typeof SVGElement<"u"&&e instanceof SVGElement,Br=(e,t)=>{const n=e&&e.to;return De(n)?t?t(n):null:n},eh={__isTeleport:!0,process(e,t,n,s,i,r,o,a,l,c){const{mc:u,pc:f,pbc:p,o:{insert:h,querySelector:m,createText:y,createComment:_}}=c,$=Os(t.props);let{shapeFlag:x,children:S,dynamicChildren:O}=t;if(e==null){const I=t.el=y(""),C=t.anchor=y("");h(I,n,s),h(C,n,s);const N=t.target=Br(t.props,m),Q=t.targetAnchor=y("");N&&(h(Q,N),o=o||Da(N));const se=(pe,me)=>{x&16&&u(S,pe,me,i,r,o,a,l)};$?se(n,C):N&&se(N,Q)}else{t.el=e.el;const I=t.anchor=e.anchor,C=t.target=e.target,N=t.targetAnchor=e.targetAnchor,Q=Os(e.props),se=Q?n:C,pe=Q?I:N;if(o=o||Da(C),O?(p(e.dynamicChildren,O,se,i,r,o,a),Ho(e,t,!0)):l||f(e,t,se,pe,i,r,o,a,!1),$)Q||li(t,n,I,c,1);else if((t.props&&t.props.to)!==(e.props&&e.props.to)){const me=t.target=Br(t.props,m);me&&li(t,me,null,c,0)}else Q&&li(t,C,N,c,1)}},remove(e,t,n,s,{um:i,o:{remove:r}},o){const{shapeFlag:a,children:l,anchor:c,targetAnchor:u,target:f,props:p}=e;if(f&&r(u),(o||!Os(p))&&(r(c),a&16))for(let h=0;h<l.length;h++){const m=l[h];i(m,t,n,!0,!!m.dynamicChildren)}},move:li,hydrate:th};function li(e,t,n,{o:{insert:s},m:i},r=2){r===0&&s(e.targetAnchor,t,n);const{el:o,anchor:a,shapeFlag:l,children:c,props:u}=e,f=r===2;if(f&&s(o,t,n),(!f||Os(u))&&l&16)for(let p=0;p<c.length;p++)i(c[p],t,n,2);f&&s(a,t,n)}function th(e,t,n,s,i,r,{o:{nextSibling:o,parentNode:a,querySelector:l}},c){const u=t.target=Br(t.props,l);if(u){const f=u._lpa||u.firstChild;if(t.shapeFlag&16)if(Os(t.props))t.anchor=c(o(e),t,a(e),n,s,i,r),t.targetAnchor=f;else{t.anchor=o(e);let p=f;for(;p;)if(p=o(p),p&&p.nodeType===8&&p.data==="teleport anchor"){t.targetAnchor=p,u._lpa=t.targetAnchor&&o(t.targetAnchor);break}c(f,t,u,n,s,i,r)}}return t.anchor&&o(t.anchor)}const nh=eh,Se=Symbol(void 0),zo=Symbol(void 0),un=Symbol(void 0),ur=Symbol(void 0),Ms=[];let $t=null;function E(e=!1){Ms.push($t=e?null:[])}function sh(){Ms.pop(),$t=Ms[Ms.length-1]||null}let Hs=1;function Na(e){Hs+=e}function bu(e){return e.dynamicChildren=Hs>0?$t||Zn:null,sh(),Hs>0&&$t&&$t.push(e),e}function D(e,t,n,s,i,r){return bu(d(e,t,n,s,i,r,!0))}function W(e,t,n,s,i){return bu(J(e,t,n,s,i,!0))}function is(e){return e?e.__v_isVNode===!0:!1}function vs(e,t){return e.type===t.type&&e.key===t.key}const Ji="__vInternal",wu=({key:e})=>e!=null?e:null,hi=({ref:e,ref_key:t,ref_for:n})=>e!=null?De(e)||we(e)||oe(e)?{i:Ge,r:e,k:t,f:!!n}:e:null;function d(e,t=null,n=null,s=0,i=null,r=e===Se?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&wu(t),ref:t&&hi(t),scopeId:Yi,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null};return a?(Bo(l,n),r&128&&e.normalize(l)):n&&(l.shapeFlag|=De(n)?8:16),Hs>0&&!o&&$t&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&$t.push(l),l}const J=ih;function ih(e,t=null,n=null,s=0,i=null,r=!1){if((!e||e===Rp)&&(e=un),is(e)){const a=An(e,t,!0);return n&&Bo(a,n),Hs>0&&!r&&$t&&(a.shapeFlag&6?$t[$t.indexOf(e)]=a:$t.push(a)),a.patchFlag|=-2,a}if(dh(e)&&(e=e.__vccOpts),t){t=ye(t);let{class:a,style:l}=t;a&&!De(a)&&(t.class=Ie(a)),je(l)&&(Wc(l)&&!te(l)&&(l=st({},l)),t.style=nt(l))}const o=De(e)?1:su(e)?128:Xp(e)?64:je(e)?4:oe(e)?2:0;return d(e,t,n,s,i,o,r,!0)}function ye(e){return e?Wc(e)||Ji in e?st({},e):e:null}function An(e,t,n=!1){const{props:s,ref:i,patchFlag:r,children:o}=e,a=t?Mi(s||{},t):s;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:a,key:a&&wu(a),ref:t&&t.ref?n&&i?te(i)?i.concat(hi(t)):[i,hi(t)]:hi(t):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Se?r===-1?16:r|16:r,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&An(e.ssContent),ssFallback:e.ssFallback&&An(e.ssFallback),el:e.el,anchor:e.anchor}}function Je(e=" ",t=0){return J(zo,null,e,t)}function fe(e="",t=!1){return t?(E(),W(un,null,e)):J(un,null,e)}function jt(e){return e==null||typeof e=="boolean"?J(un):te(e)?J(Se,null,e.slice()):typeof e=="object"?Xt(e):J(zo,null,String(e))}function Xt(e){return e.el===null||e.memo?e:An(e)}function Bo(e,t){let n=0;const{shapeFlag:s}=e;if(t==null)t=null;else if(te(t))n=16;else if(typeof t=="object")if(s&65){const i=t.default;i&&(i._c&&(i._d=!1),Bo(e,i()),i._c&&(i._d=!0));return}else{n=32;const i=t._;!i&&!(Ji in t)?t._ctx=Ge:i===3&&Ge&&(Ge.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else oe(t)?(t={default:t,_ctx:Ge},n=32):(t=String(t),s&64?(n=16,t=[Je(t)]):n=8);e.children=t,e.shapeFlag|=n}function Mi(...e){const t={};for(let n=0;n<e.length;n++){const s=e[n];for(const i in s)if(i==="class")t.class!==s.class&&(t.class=Ie([t.class,s.class]));else if(i==="style")t.style=nt([t.style,s.style]);else if(Vi(i)){const r=t[i],o=s[i];o&&r!==o&&!(te(r)&&r.includes(o))&&(t[i]=r?[].concat(r,o):o)}else i!==""&&(t[i]=s[i])}return t}function _t(e,t,n,s=null){Mt(e,t,7,[n,s])}const rh=yu();let oh=0;function ah(e,t,n){const s=e.type,i=(t?t.appContext:e.appContext)||rh,r={uid:oh++,vnode:e,type:s,parent:t,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new jc(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:mu(s,i),emitsOptions:nu(s,i),emit:null,emitted:null,propsDefaults:Pe,inheritAttrs:s.inheritAttrs,ctx:Pe,data:Pe,props:Pe,attrs:Pe,slots:Pe,refs:Pe,setupState:Pe,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=t?t.root:r,r.emit=yp.bind(null,r),e.ce&&e.ce(r),r}let qe=null;const In=()=>qe||Ge,rs=e=>{qe=e,e.scope.on()},kn=()=>{qe&&qe.scope.off(),qe=null};function xu(e){return e.vnode.shapeFlag&4}let zs=!1;function lh(e,t=!1){zs=t;const{props:n,children:s}=e.vnode,i=xu(e);Bp(e,n,i,t),Kp(e,s);const r=i?ch(e,t):void 0;return zs=!1,r}function ch(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=qi(new Proxy(e.ctx,Fp));const{setup:s}=n;if(s){const i=e.setupContext=s.length>1?Su(e):null;rs(e),cs();const r=sn(s,e,0,[e.props,i]);if(us(),kn(),Ac(r)){if(r.then(kn,kn),t)return r.then(o=>{Va(e,o,t)}).catch(o=>{Ki(o,e,0)});e.asyncDep=r}else Va(e,r,t)}else Eu(e,t)}function Va(e,t,n){oe(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:je(t)&&(e.setupState=Zc(t)),Eu(e,n)}let Ha;function Eu(e,t,n){const s=e.type;if(!e.render){if(!t&&Ha&&!s.render){const i=s.template||No(e).template;if(i){const{isCustomElement:r,compilerOptions:o}=e.appContext.config,{delimiters:a,compilerOptions:l}=s,c=st(st({isCustomElement:r,delimiters:a},o),l);s.render=Ha(i,c)}}e.render=s.render||Ot}rs(e),cs(),Dp(e),us(),kn()}function uh(e){return new Proxy(e.attrs,{get(t,n){return vt(e,"get","$attrs"),t[n]}})}function Su(e){const t=s=>{e.exposed=s||{}};let n;return{get attrs(){return n||(n=uh(e))},slots:e.slots,emit:e.emit,expose:t}}function Xi(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Zc(qi(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in ki)return ki[n](e)}}))}function Ur(e,t=!0){return oe(e)?e.displayName||e.name:e.name||t&&e.__name}function dh(e){return oe(e)&&"__vccOpts"in e}const k=(e,t)=>pp(e,t,zs);function fh(){return ph().slots}function ph(){const e=In();return e.setupContext||(e.setupContext=Su(e))}function ht(e,t,n){const s=arguments.length;return s===2?je(t)&&!te(t)?is(t)?J(e,null,[t]):J(e,t):J(e,null,t):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&is(n)&&(n=[n]),J(e,t,n))}const hh="3.2.39",mh="http://www.w3.org/2000/svg",bn=typeof document<"u"?document:null,za=bn&&bn.createElement("template"),gh={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,s)=>{const i=t?bn.createElementNS(mh,e):bn.createElement(e,n?{is:n}:void 0);return e==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:e=>bn.createTextNode(e),createComment:e=>bn.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>bn.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},cloneNode(e){const t=e.cloneNode(!0);return"_value"in e&&(t._value=e._value),t},insertStaticContent(e,t,n,s,i,r){const o=n?n.previousSibling:t.lastChild;if(i&&(i===r||i.nextSibling))for(;t.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{za.innerHTML=s?`<svg>${e}</svg>`:e;const a=za.content;if(s){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}t.insertBefore(a,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function vh(e,t,n){const s=e._vtc;s&&(t=(t?[t,...s]:[...s]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function _h(e,t,n){const s=e.style,i=De(n);if(n&&!i){for(const r in n)qr(s,r,n[r]);if(t&&!De(t))for(const r in t)n[r]==null&&qr(s,r,"")}else{const r=s.display;i?t!==n&&(s.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(s.display=r)}}const Ba=/\s*!important$/;function qr(e,t,n){if(te(n))n.forEach(s=>qr(e,t,s));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const s=yh(e,t);Ba.test(n)?e.setProperty(Cn(s),n.replace(Ba,""),"important"):e[s]=n}}const Ua=["Webkit","Moz","ms"],dr={};function yh(e,t){const n=dr[t];if(n)return n;let s=Nt(t);if(s!=="filter"&&s in e)return dr[t]=s;s=Bi(s);for(let i=0;i<Ua.length;i++){const r=Ua[i]+s;if(r in e)return dr[t]=r}return t}const qa="http://www.w3.org/1999/xlink";function bh(e,t,n,s,i){if(s&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(qa,t.slice(6,t.length)):e.setAttributeNS(qa,t,n);else{const r=yf(t);n==null||r&&!Mc(n)?e.removeAttribute(t):e.setAttribute(t,r?"":n)}}function wh(e,t,n,s,i,r,o){if(t==="innerHTML"||t==="textContent"){s&&o(s,i,r),e[t]=n==null?"":n;return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const l=n==null?"":n;(e.value!==l||e.tagName==="OPTION")&&(e.value=l),n==null&&e.removeAttribute(t);return}let a=!1;if(n===""||n==null){const l=typeof e[t];l==="boolean"?n=Mc(n):n==null&&l==="string"?(n="",a=!0):l==="number"&&(n=0,a=!0)}try{e[t]=n}catch{}a&&e.removeAttribute(t)}const[$u,xh]=(()=>{let e=Date.now,t=!1;if(typeof window<"u"){Date.now()>document.createEvent("Event").timeStamp&&(e=performance.now.bind(performance));const n=navigator.userAgent.match(/firefox\/(\d+)/i);t=!!(n&&Number(n[1])<=53)}return[e,t]})();let Kr=0;const Eh=Promise.resolve(),Sh=()=>{Kr=0},$h=()=>Kr||(Eh.then(Sh),Kr=$u());function Bn(e,t,n,s){e.addEventListener(t,n,s)}function kh(e,t,n,s){e.removeEventListener(t,n,s)}function Oh(e,t,n,s,i=null){const r=e._vei||(e._vei={}),o=r[t];if(s&&o)o.value=s;else{const[a,l]=Mh(t);if(s){const c=r[t]=Ph(s,i);Bn(e,a,c,l)}else o&&(kh(e,a,o,l),r[t]=void 0)}}const Ka=/(?:Once|Passive|Capture)$/;function Mh(e){let t;if(Ka.test(e)){t={};let s;for(;s=e.match(Ka);)e=e.slice(0,e.length-s[0].length),t[s[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Cn(e.slice(2)),t]}function Ph(e,t){const n=s=>{const i=s.timeStamp||$u();(xh||i>=n.attached-1)&&Mt(Lh(s,n.value),t,5,[s])};return n.value=e,n.attached=$h(),n}function Lh(e,t){if(te(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(s=>i=>!i._stopped&&s&&s(i))}else return t}const Wa=/^on[a-z]/,Ah=(e,t,n,s,i=!1,r,o,a,l)=>{t==="class"?vh(e,s,i):t==="style"?_h(e,n,s):Vi(t)?wo(t)||Oh(e,t,n,s,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Ch(e,t,s,i))?wh(e,t,s,r,o,a,l):(t==="true-value"?e._trueValue=s:t==="false-value"&&(e._falseValue=s),bh(e,t,s,i))};function Ch(e,t,n,s){return s?!!(t==="innerHTML"||t==="textContent"||t in e&&Wa.test(t)&&oe(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||Wa.test(t)&&De(n)?!1:t in e}const Ya=e=>{const t=e.props["onUpdate:modelValue"]||!1;return te(t)?n=>Qn(t,n):t};function Th(e){e.target.composing=!0}function Za(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const jh={created(e,{modifiers:{lazy:t,trim:n,number:s}},i){e._assign=Ya(i);const r=s||i.props&&i.props.type==="number";Bn(e,t?"change":"input",o=>{if(o.target.composing)return;let a=e.value;n&&(a=a.trim()),r&&(a=Cr(a)),e._assign(a)}),n&&Bn(e,"change",()=>{e.value=e.value.trim()}),t||(Bn(e,"compositionstart",Th),Bn(e,"compositionend",Za),Bn(e,"change",Za))},mounted(e,{value:t}){e.value=t==null?"":t},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:s,number:i}},r){if(e._assign=Ya(r),e.composing||document.activeElement===e&&e.type!=="range"&&(n||s&&e.value.trim()===t||(i||e.type==="number")&&Cr(e.value)===t))return;const o=t==null?"":t;e.value!==o&&(e.value=o)}},Ih={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Ga=(e,t)=>n=>{if(!("key"in n))return;const s=Cn(n.key);if(t.some(i=>i===s||Ih[i]===s))return e(n)},ku={beforeMount(e,{value:t},{transition:n}){e._vod=e.style.display==="none"?"":e.style.display,n&&t?n.beforeEnter(e):_s(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:s}){!t!=!n&&(s?t?(s.beforeEnter(e),_s(e,!0),s.enter(e)):s.leave(e,()=>{_s(e,!1)}):_s(e,t))},beforeUnmount(e,{value:t}){_s(e,t)}};function _s(e,t){e.style.display=t?e._vod:"none"}const Rh=st({patchProp:Ah},gh);let Qa;function Fh(){return Qa||(Qa=Gp(Rh))}const Dh=(...e)=>{const t=Fh().createApp(...e),{mount:n}=t;return t.mount=s=>{const i=Nh(s);if(!i)return;const r=t._component;!oe(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},t};function Nh(e){return De(e)?document.querySelector(e):e}var Vh=Object.defineProperty,Ja=Object.getOwnPropertySymbols,Hh=Object.prototype.hasOwnProperty,zh=Object.prototype.propertyIsEnumerable,Xa=(e,t,n)=>t in e?Vh(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Bh=(e,t)=>{for(var n in t||(t={}))Hh.call(t,n)&&Xa(e,n,t[n]);if(Ja)for(var n of Ja(t))zh.call(t,n)&&Xa(e,n,t[n]);return e},Ou="usehead",el="head:count",fr="data-head-attrs",Mu="data-meta-body",Uh=(e,t,n)=>{const s=n.createElement(e);for(const i of Object.keys(t))if(i==="body"&&t.body===!0)s.setAttribute(Mu,"true");else{let r=t[i];if(i==="key"||r===!1)continue;i==="children"?s.textContent=r:s.setAttribute(i,r)}return s};function tl(e,t){if(e instanceof HTMLElement&&t instanceof HTMLElement){const n=t.getAttribute("nonce");if(n&&!e.getAttribute("nonce")){const s=t.cloneNode(!0);return s.setAttribute("nonce",""),s.nonce=n,n===e.nonce&&e.isEqualNode(s)}}return e.isEqualNode(t)}var qh=e=>{const t=["key","id","name","property"];for(const n of t){const s=typeof e.getAttribute=="function"?e.hasAttribute(n)?e.getAttribute(n):void 0:e[n];if(s!==void 0)return{name:n,value:s}}},Kh=()=>{const e=z(Ou);if(!e)throw new Error("You may forget to apply app.use(head)");return e},Wh=["title","meta","link","base","style","script","noscript","htmlAttrs","bodyAttrs"],Yh=(e,t)=>e==null?"":typeof e=="string"?e.replace("%s",t!=null?t:""):e(b(t)),Zh=e=>{const t=[],n=Object.keys(e);for(const s of n)if(e[s]!=null)switch(s){case"title":t.push({tag:s,props:{children:e[s]}});break;case"titleTemplate":break;case"base":t.push({tag:s,props:Bh({key:"default"},e[s])});break;default:if(Wh.includes(s)){const i=e[s];Array.isArray(i)?i.forEach(r=>{t.push({tag:s,props:r})}):i&&t.push({tag:s,props:i})}break}return t},nl=(e,t)=>{const n=e.getAttribute(fr);if(n)for(const i of n.split(","))i in t||e.removeAttribute(i);const s=[];for(const i in t){const r=t[i];r!=null&&(r===!1?e.removeAttribute(i):e.setAttribute(i,r),s.push(i))}s.length?e.setAttribute(fr,s.join(",")):e.removeAttribute(fr)},Gh=(e=window.document,t,n)=>{var s,i;const r=e.head,o=e.body;let a=r.querySelector(`meta[name="${el}"]`),l=o.querySelectorAll(`[${Mu}]`);const c=a?Number(a.getAttribute("content")):0,u=[],f=[];if(l)for(let h=0;h<l.length;h++)l[h]&&((s=l[h].tagName)==null?void 0:s.toLowerCase())===t&&f.push(l[h]);if(a)for(let h=0,m=a.previousElementSibling;h<c;h++,m=(m==null?void 0:m.previousElementSibling)||null)((i=m==null?void 0:m.tagName)==null?void 0:i.toLowerCase())===t&&u.push(m);else a=e.createElement("meta"),a.setAttribute("name",el),a.setAttribute("content","0"),r.append(a);let p=n.map(h=>{var m;return{element:Uh(h.tag,h.props,e),body:(m=h.props.body)!=null?m:!1}});p=p.filter(h=>{for(let m=0;m<u.length;m++){const y=u[m];if(tl(y,h.element))return u.splice(m,1),!1}for(let m=0;m<f.length;m++){const y=f[m];if(tl(y,h.element))return f.splice(m,1),!1}return!0}),f.forEach(h=>{var m;return(m=h.parentNode)==null?void 0:m.removeChild(h)}),u.forEach(h=>{var m;return(m=h.parentNode)==null?void 0:m.removeChild(h)}),p.forEach(h=>{h.body===!0?o.insertAdjacentElement("beforeend",h.element):r.insertBefore(h.element,a)}),a.setAttribute("content",""+(c-u.length+p.filter(h=>!h.body).length))},Qh=e=>{let t=[],n=new Set;e&&t.push(Lt(e));const s={install(i){i.config.globalProperties.$head=s,i.provide(Ou,s)},get headTags(){const i=[],r=t.map(o=>b(o).titleTemplate).reverse().find(o=>o!=null);return t.forEach(o=>{Zh(b(o)).forEach(l=>{if(l.tag==="meta"||l.tag==="base"||l.tag==="script"){const c=qh(l.props);if(c){let u=-1;for(let f=0;f<i.length;f++){const p=i[f],h=p.props[c.name],m=l.props[c.name];if(p.tag===l.tag&&h===m){u=f;break}}u!==-1&&i.splice(u,1)}}r&&l.tag==="title"&&(l.props.children=Yh(r,l.props.children)),i.push(l)})}),i},addHeadObjs(i){t.push(i)},removeHeadObjs(i){t=t.filter(r=>r!==i)},updateDOM(i=window.document){let r,o={},a={};const l={};for(const u of s.headTags){if(u.tag==="title"){r=u.props.children;continue}if(u.tag==="htmlAttrs"){Object.assign(o,u.props);continue}if(u.tag==="bodyAttrs"){Object.assign(a,u.props);continue}l[u.tag]=l[u.tag]||[],l[u.tag].push(u)}r!==void 0&&(i.title=r),nl(i.documentElement,o),nl(i.body,a);const c=new Set([...Object.keys(l),...n]);for(const u of c)Gh(i,u,l[u]||[]);n.clear(),Object.keys(l).forEach(u=>n.add(u))}};return s},Jh=typeof window<"u",Xh=e=>{const t=Kh(),n=H(e);t.addHeadObjs(n),Jh&&(Zi(()=>{t.updateDOM()}),Qi(()=>{t.removeHeadObjs(n),t.updateDOM()}))};const mi=Symbol("v-click-clicks"),Un=Symbol("v-click-clicks-elements"),Wr=Symbol("v-click-clicks-order-map"),gi=Symbol("v-click-clicks-disabled"),Pu=Symbol("slidev-slide-scale"),Y=Symbol("slidev-slidev-context"),em=Symbol("slidev-route"),tm=Symbol("slidev-slide-context"),Vn="slidev-vclick-target",pr="slidev-vclick-hidden",nm="slidev-vclick-fade",hr="slidev-vclick-hidden-explicitly",ys="slidev-vclick-current",ci="slidev-vclick-prior";function sl(e,t){if(!e)return!1;const n=e.indexOf(t);return n>=0?(e.splice(n,1),!0):!1}function sm(e){return e!=null}function im(e,t){return Object.fromEntries(Object.entries(e).map(([n,s])=>t(n,s)).filter(sm))}const xn={theme:"default",title:"My Experience using DallE and Stable Difusion",titleTemplate:"%s - Slidev",addons:[],remoteAssets:!1,monaco:"dev",download:!1,info:`<h2>Slidev Starter Template</h2>
<p>Presentation slides for developers.</p>
<p>Learn more at <a href="https://sli.dev" target="_blank" rel="noopener">Sli.dev</a></p>
`,highlighter:"shiki",lineNumbers:!1,colorSchema:"auto",routerMode:"history",aspectRatio:1.7777777777777777,canvasWidth:980,exportFilename:"",selectable:!1,themeConfig:{},fonts:{sans:['"Avenir Next"','"Nunito Sans"',"ui-sans-serif","system-ui","-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial",'"Noto Sans"',"sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"','"Noto Color Emoji"'],serif:["ui-serif","Georgia","Cambria",'"Times New Roman"',"Times","serif"],mono:['"Fira Code"',"ui-monospace","SFMono-Regular","Menlo","Monaco","Consolas",'"Liberation Mono"','"Courier New"',"monospace"],webfonts:["Avenir Next","Nunito Sans","Fira Code"],provider:"google",local:["Avenir Next"],italic:!1,weights:["200","400","600"]},favicon:"https://cdn.jsdelivr.net/gh/slidevjs/slidev/assets/favicon.png",drawings:{enabled:!0,persist:!1,presenterOnly:!1,syncAll:!0},plantUmlServer:"https://www.plantuml.com/plantuml",codeCopy:!0,record:"dev",css:"unocss",image:"./cover.jpg",layout:"image-right",class:"text-center"},be=xn;var kc;const rn=(kc=be.aspectRatio)!=null?kc:16/9;var Oc;const On=(Oc=be.canvasWidth)!=null?Oc:980,Lu=Math.round(On/rn),Au=k(()=>im(be.themeConfig||{},(e,t)=>[`--slidev-theme-${e}`,t]));function bt(e,t,n){Object.defineProperty(e,t,{value:n,writable:!0,enumerable:!1})}const Rn=Ce({page:0,clicks:0});let rm=[],om=[];bt(Rn,"$syncUp",!0);bt(Rn,"$syncDown",!0);bt(Rn,"$paused",!1);bt(Rn,"$onSet",e=>rm.push(e));bt(Rn,"$onPatch",e=>om.push(e));bt(Rn,"$patch",async()=>!1);function Cu(e,t,n=!1){const s=[];let i=!1,r=!1,o,a;const l=Ce(t);function c(h){s.push(h)}function u(h,m){clearTimeout(o),i=!0,l[h]=m,o=setTimeout(()=>i=!1,0)}function f(h){i||(clearTimeout(a),r=!0,Object.entries(h).forEach(([m,y])=>{l[m]=y}),a=setTimeout(()=>r=!1,0))}function p(h){let m;n?n&&window.addEventListener("storage",_=>{_&&_.key===h&&_.newValue&&f(JSON.parse(_.newValue))}):(m=new BroadcastChannel(h),m.addEventListener("message",_=>f(_.data)));function y(){!n&&m&&!r?m.postMessage(_e(l)):n&&!r&&window.localStorage.setItem(h,JSON.stringify(l)),i||s.forEach(_=>_(l))}if(ue(l,y,{deep:!0}),n){const _=window.localStorage.getItem(h);_&&f(JSON.parse(_))}}return{init:p,onPatch:c,patch:u,state:l}}const{init:am,onPatch:lm,patch:il,state:mr}=Cu(Rn,{page:1,clicks:0}),Fn=Ce({});let cm=[],um=[];bt(Fn,"$syncUp",!0);bt(Fn,"$syncDown",!0);bt(Fn,"$paused",!1);bt(Fn,"$onSet",e=>cm.push(e));bt(Fn,"$onPatch",e=>um.push(e));bt(Fn,"$patch",async()=>!1);const{init:dm,onPatch:fm,patch:Tu,state:Pi}=Cu(Fn,{},!1),pm="modulepreload",hm=function(e){return"/ML_presentation/"+e},rl={},ds=function(t,n,s){return!n||n.length===0?t():Promise.all(n.map(i=>{if(i=hm(i),i in rl)return;rl[i]=!0;const r=i.endsWith(".css"),o=r?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${i}"]${o}`))return;const a=document.createElement("link");if(a.rel=r?"stylesheet":pm,r||(a.as="script",a.crossOrigin=""),a.href=i,document.head.appendChild(a),r)return new Promise((l,c)=>{a.addEventListener("load",l),a.addEventListener("error",()=>c(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>t())};var ol;const Kt=typeof window<"u",mm=e=>typeof e<"u",gm=Object.prototype.toString,Li=e=>typeof e=="function",vm=e=>typeof e=="number",ju=e=>typeof e=="string",Yr=e=>gm.call(e)==="[object Object]",Zr=()=>+Date.now(),Mn=()=>{};Kt&&((ol=window==null?void 0:window.navigator)==null?void 0:ol.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function pt(e){return typeof e=="function"?e():b(e)}function _m(e,t){function n(...s){e(()=>t.apply(this,s),{fn:t,thisArg:this,args:s})}return n}const Iu=e=>e();function ym(e=Iu){const t=H(!0);function n(){t.value=!1}function s(){t.value=!0}return{isActive:t,pause:n,resume:s,eventFilter:(...r)=>{t.value&&e(...r)}}}function bm(e){return e}function wm(e,t){var n;if(typeof e=="number")return e+t;const s=((n=e.match(/^-?[0-9]+\.?[0-9]*/))==null?void 0:n[0])||"",i=e.slice(s.length),r=parseFloat(s)+t;return Number.isNaN(r)?e:r+i}function xm(e,t){let n,s,i;const r=H(!0),o=()=>{r.value=!0,i()};ue(e,o,{flush:"sync"});const a=Li(t)?t:t.get,l=Li(t)?void 0:t.set,c=Gc((u,f)=>(s=u,i=f,{get(){return r.value&&(n=a(),r.value=!1),s(),n},set(p){l==null||l(p)}}));return Object.isExtensible(c)&&(c.trigger=o),c}function dn(e){return Ic()?(Rc(e),!0):!1}function Em(e){if(!we(e))return Ce(e);const t=new Proxy({},{get(n,s,i){return b(Reflect.get(e.value,s,i))},set(n,s,i){return we(e.value[s])&&!we(i)?e.value[s].value=i:e.value[s]=i,!0},deleteProperty(n,s){return Reflect.deleteProperty(e.value,s)},has(n,s){return Reflect.has(e.value,s)},ownKeys(){return Object.keys(e.value)},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}}});return Ce(t)}function Sm(e){return typeof e=="function"?k(e):H(e)}var $m=Object.defineProperty,km=Object.defineProperties,Om=Object.getOwnPropertyDescriptors,al=Object.getOwnPropertySymbols,Mm=Object.prototype.hasOwnProperty,Pm=Object.prototype.propertyIsEnumerable,ll=(e,t,n)=>t in e?$m(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Lm=(e,t)=>{for(var n in t||(t={}))Mm.call(t,n)&&ll(e,n,t[n]);if(al)for(var n of al(t))Pm.call(t,n)&&ll(e,n,t[n]);return e},Am=(e,t)=>km(e,Om(t));function Cm(e){if(!we(e))return cp(e);const t=Array.isArray(e.value)?new Array(e.value.length):{};for(const n in e.value)t[n]=Gc(()=>({get(){return e.value[n]},set(s){if(Array.isArray(e.value)){const i=[...e.value];i[n]=s,e.value=i}else{const i=Am(Lm({},e.value),{[n]:s});Object.setPrototypeOf(i,e.value),e.value=i}}}));return t}function Tm(e,t=!0){In()?cu(e):t?e():Ze(e)}function Ru(e,t=!0){In()?Gs(e):t?e():Ze(e)}function jm(e){In()&&Do(e)}function Im(e,t=1e3,n={}){const{immediate:s=!0,immediateCallback:i=!1}=n;let r=null;const o=H(!1);function a(){r&&(clearInterval(r),r=null)}function l(){o.value=!1,a()}function c(){b(t)<=0||(o.value=!0,i&&e(),a(),r=setInterval(e,pt(t)))}if(s&&Kt&&c(),we(t)){const u=ue(t,()=>{o.value&&Kt&&c()});dn(u)}return dn(l),{isActive:o,pause:l,resume:c}}function Fu(e=!1,t={}){const{truthyValue:n=!0,falsyValue:s=!1}=t,i=we(e),r=H(e);function o(a){if(arguments.length)return r.value=a,r.value;{const l=pt(n);return r.value=r.value===l?pt(s):l,r.value}}return i?o:[r,o]}var cl=Object.getOwnPropertySymbols,Rm=Object.prototype.hasOwnProperty,Fm=Object.prototype.propertyIsEnumerable,Dm=(e,t)=>{var n={};for(var s in e)Rm.call(e,s)&&t.indexOf(s)<0&&(n[s]=e[s]);if(e!=null&&cl)for(var s of cl(e))t.indexOf(s)<0&&Fm.call(e,s)&&(n[s]=e[s]);return n};function Nm(e,t,n={}){const s=n,{eventFilter:i=Iu}=s,r=Dm(s,["eventFilter"]);return ue(e,_m(i,t),r)}var Vm=Object.defineProperty,Hm=Object.defineProperties,zm=Object.getOwnPropertyDescriptors,Ai=Object.getOwnPropertySymbols,Du=Object.prototype.hasOwnProperty,Nu=Object.prototype.propertyIsEnumerable,ul=(e,t,n)=>t in e?Vm(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Bm=(e,t)=>{for(var n in t||(t={}))Du.call(t,n)&&ul(e,n,t[n]);if(Ai)for(var n of Ai(t))Nu.call(t,n)&&ul(e,n,t[n]);return e},Um=(e,t)=>Hm(e,zm(t)),qm=(e,t)=>{var n={};for(var s in e)Du.call(e,s)&&t.indexOf(s)<0&&(n[s]=e[s]);if(e!=null&&Ai)for(var s of Ai(e))t.indexOf(s)<0&&Nu.call(e,s)&&(n[s]=e[s]);return n};function Km(e,t,n={}){const s=n,{eventFilter:i}=s,r=qm(s,["eventFilter"]),{eventFilter:o,pause:a,resume:l,isActive:c}=ym(i);return{stop:Nm(e,t,Um(Bm({},r),{eventFilter:o})),pause:a,resume:l,isActive:c}}function kt(e){var t;const n=pt(e);return(t=n==null?void 0:n.$el)!=null?t:n}const Qe=Kt?window:void 0,Wm=Kt?window.document:void 0;function le(...e){let t,n,s,i;if(ju(e[0])?([n,s,i]=e,t=Qe):[t,n,s,i]=e,!t)return Mn;let r=Mn;const o=ue(()=>kt(t),l=>{r(),l&&(l.addEventListener(n,s,i),r=()=>{l.removeEventListener(n,s,i),r=Mn})},{immediate:!0,flush:"post"}),a=()=>{o(),r()};return dn(a),a}function Ym(e,t,n={}){const{window:s=Qe,ignore:i,capture:r=!0,detectIframe:o=!1}=n;if(!s)return;const a=H(!0);let l;const c=p=>{s.clearTimeout(l);const h=kt(e),m=p.composedPath();!h||h===p.target||m.includes(h)||!a.value||i&&i.length>0&&i.some(y=>{const _=kt(y);return _&&(p.target===_||m.includes(_))})||t(p)},u=[le(s,"click",c,{passive:!0,capture:r}),le(s,"pointerdown",p=>{const h=kt(e);a.value=!!h&&!p.composedPath().includes(h)},{passive:!0}),le(s,"pointerup",p=>{if(p.button===0){const h=p.composedPath();p.composedPath=()=>h,l=s.setTimeout(()=>c(p),50)}},{passive:!0}),o&&le(s,"blur",p=>{var h;const m=kt(e);((h=document.activeElement)==null?void 0:h.tagName)==="IFRAME"&&!(m!=null&&m.contains(document.activeElement))&&t(p)})].filter(Boolean);return()=>u.forEach(p=>p())}const Zm=e=>typeof e=="function"?e:typeof e=="string"?t=>t.key===e:Array.isArray(e)?t=>e.includes(t.key):e?()=>!0:()=>!1;function Gm(e,t,n={}){const{target:s=Qe,eventName:i="keydown",passive:r=!1}=n,o=Zm(e);return le(s,i,l=>{o(l)&&t(l)},r)}function Qm(e={}){const{window:t=Qe}=e,n=xm(()=>null,()=>t==null?void 0:t.document.activeElement);return t&&(le(t,"blur",n.trigger,!0),le(t,"focus",n.trigger,!0)),n}function er(e,t=!1){const n=H(),s=()=>n.value=Boolean(e());return s(),Ru(s,t),n}function qn(e,t={}){const{window:n=Qe}=t,s=er(()=>n&&"matchMedia"in n&&typeof n.matchMedia=="function");let i;const r=H(!1),o=()=>{!s.value||(i||(i=n.matchMedia(e)),r.value=i.matches)};return Tm(()=>{o(),i&&("addEventListener"in i?i.addEventListener("change",o):i.addListener(o),dn(()=>{"removeEventListener"in i?i.removeEventListener("change",o):i.removeListener(o)}))}),r}const Jm={sm:640,md:768,lg:1024,xl:1280,"2xl":1536};var Xm=Object.defineProperty,dl=Object.getOwnPropertySymbols,eg=Object.prototype.hasOwnProperty,tg=Object.prototype.propertyIsEnumerable,fl=(e,t,n)=>t in e?Xm(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,ng=(e,t)=>{for(var n in t||(t={}))eg.call(t,n)&&fl(e,n,t[n]);if(dl)for(var n of dl(t))tg.call(t,n)&&fl(e,n,t[n]);return e};function sg(e,t={}){function n(a,l){let c=e[a];return l!=null&&(c=wm(c,l)),typeof c=="number"&&(c=`${c}px`),c}const{window:s=Qe}=t;function i(a){return s?s.matchMedia(a).matches:!1}const r=a=>qn(`(min-width: ${n(a)})`,t),o=Object.keys(e).reduce((a,l)=>(Object.defineProperty(a,l,{get:()=>r(l),enumerable:!0,configurable:!0}),a),{});return ng({greater(a){return qn(`(min-width: ${n(a,.1)})`,t)},greaterOrEqual:r,smaller(a){return qn(`(max-width: ${n(a,-.1)})`,t)},smallerOrEqual(a){return qn(`(max-width: ${n(a)})`,t)},between(a,l){return qn(`(min-width: ${n(a)}) and (max-width: ${n(l,-.1)})`,t)},isGreater(a){return i(`(min-width: ${n(a,.1)})`)},isGreaterOrEqual(a){return i(`(min-width: ${n(a)})`)},isSmaller(a){return i(`(max-width: ${n(a,-.1)})`)},isSmallerOrEqual(a){return i(`(max-width: ${n(a)})`)},isInBetween(a,l){return i(`(min-width: ${n(a)}) and (max-width: ${n(l,-.1)})`)}},o)}function ig(e){return JSON.parse(JSON.stringify(e))}const Gr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Qr="__vueuse_ssr_handlers__";Gr[Qr]=Gr[Qr]||{};const rg=Gr[Qr];function og(e,t){return rg[e]||t}function ag(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"||Array.isArray(e)?"object":Number.isNaN(e)?"any":"number"}var lg=Object.defineProperty,pl=Object.getOwnPropertySymbols,cg=Object.prototype.hasOwnProperty,ug=Object.prototype.propertyIsEnumerable,hl=(e,t,n)=>t in e?lg(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,ml=(e,t)=>{for(var n in t||(t={}))cg.call(t,n)&&hl(e,n,t[n]);if(pl)for(var n of pl(t))ug.call(t,n)&&hl(e,n,t[n]);return e};const dg={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}};function Ct(e,t,n,s={}){var i;const{flush:r="pre",deep:o=!0,listenToStorageChanges:a=!0,writeDefaults:l=!0,mergeDefaults:c=!1,shallow:u,window:f=Qe,eventFilter:p,onError:h=N=>{console.error(N)}}=s,m=(u?Lt:H)(t);if(!n)try{n=og("getDefaultStorage",()=>{var N;return(N=Qe)==null?void 0:N.localStorage})()}catch(N){h(N)}if(!n)return m;const y=pt(t),_=ag(y),$=(i=s.serializer)!=null?i:dg[_],{pause:x,resume:S}=Km(m,()=>O(m.value),{flush:r,deep:o,eventFilter:p});return f&&a&&le(f,"storage",C),C(),m;function O(N){try{N==null?n.removeItem(e):n.setItem(e,$.write(N))}catch(Q){h(Q)}}function I(N){if(!(N&&N.key!==e)){x();try{const Q=N?N.newValue:n.getItem(e);if(Q==null)return l&&y!==null&&n.setItem(e,$.write(y)),y;if(!N&&c){const se=$.read(Q);return Li(c)?c(se,y):_==="object"&&!Array.isArray(se)?ml(ml({},y),se):se}else return typeof Q!="string"?Q:$.read(Q)}catch(Q){h(Q)}finally{S()}}}function C(N){N&&N.key!==e||(m.value=I(N))}}function fg(e){return qn("(prefers-color-scheme: dark)",e)}var pg=Object.defineProperty,hg=Object.defineProperties,mg=Object.getOwnPropertyDescriptors,gl=Object.getOwnPropertySymbols,gg=Object.prototype.hasOwnProperty,vg=Object.prototype.propertyIsEnumerable,vl=(e,t,n)=>t in e?pg(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,_g=(e,t)=>{for(var n in t||(t={}))gg.call(t,n)&&vl(e,n,t[n]);if(gl)for(var n of gl(t))vg.call(t,n)&&vl(e,n,t[n]);return e},yg=(e,t)=>hg(e,mg(t));function cS(e,t={}){var n,s,i;const r=(n=t.draggingElement)!=null?n:Qe,o=(s=t.handle)!=null?s:e,a=H((i=pt(t.initialValue))!=null?i:{x:0,y:0}),l=H(),c=m=>t.pointerTypes?t.pointerTypes.includes(m.pointerType):!0,u=m=>{pt(t.preventDefault)&&m.preventDefault(),pt(t.stopPropagation)&&m.stopPropagation()},f=m=>{var y;if(!c(m)||pt(t.exact)&&m.target!==pt(e))return;const _=pt(e).getBoundingClientRect(),$={x:m.pageX-_.left,y:m.pageY-_.top};((y=t.onStart)==null?void 0:y.call(t,$,m))!==!1&&(l.value=$,u(m))},p=m=>{var y;!c(m)||!l.value||(a.value={x:m.pageX-l.value.x,y:m.pageY-l.value.y},(y=t.onMove)==null||y.call(t,a.value,m),u(m))},h=m=>{var y;!c(m)||!l.value||(l.value=void 0,(y=t.onEnd)==null||y.call(t,a.value,m),u(m))};return Kt&&(le(o,"pointerdown",f,!0),le(r,"pointermove",p,!0),le(r,"pointerup",h,!0)),yg(_g({},Cm(a)),{position:a,isDragging:k(()=>!!l.value),style:k(()=>`left:${a.value.x}px;top:${a.value.y}px;`)})}var _l=Object.getOwnPropertySymbols,bg=Object.prototype.hasOwnProperty,wg=Object.prototype.propertyIsEnumerable,xg=(e,t)=>{var n={};for(var s in e)bg.call(e,s)&&t.indexOf(s)<0&&(n[s]=e[s]);if(e!=null&&_l)for(var s of _l(e))t.indexOf(s)<0&&wg.call(e,s)&&(n[s]=e[s]);return n};function Eg(e,t,n={}){const s=n,{window:i=Qe}=s,r=xg(s,["window"]);let o;const a=er(()=>i&&"ResizeObserver"in i),l=()=>{o&&(o.disconnect(),o=void 0)},c=ue(()=>kt(e),f=>{l(),a.value&&i&&f&&(o=new ResizeObserver(t),o.observe(f,r))},{immediate:!0,flush:"post"}),u=()=>{l(),c()};return dn(u),{isSupported:a,stop:u}}function Sg(e,t={}){const{immediate:n=!0,window:s=Qe}=t,i=H(!1);let r=null;function o(){!i.value||!s||(e(),r=s.requestAnimationFrame(o))}function a(){!i.value&&s&&(i.value=!0,o())}function l(){i.value=!1,r!=null&&s&&(s.cancelAnimationFrame(r),r=null)}return n&&a(),dn(l),{isActive:i,pause:l,resume:a}}function $g(e,t={width:0,height:0},n={}){const{box:s="content-box"}=n,i=H(t.width),r=H(t.height);return Eg(e,([o])=>{const a=s==="border-box"?o.borderBoxSize:s==="content-box"?o.contentBoxSize:o.devicePixelContentBoxSize;a?(i.value=a.reduce((l,{inlineSize:c})=>l+c,0),r.value=a.reduce((l,{blockSize:c})=>l+c,0)):(i.value=o.contentRect.width,r.value=o.contentRect.height)},n),ue(()=>kt(e),o=>{i.value=o?t.width:0,r.value=o?t.height:0}),{width:i,height:r}}const yl=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]];function kg(e,t={}){const{document:n=Wm,autoExit:s=!1}=t,i=e||(n==null?void 0:n.querySelector("html")),r=H(!1);let o=yl[0];const a=er(()=>{if(n){for(const y of yl)if(y[1]in n)return o=y,!0}else return!1;return!1}),[l,c,u,,f]=o;async function p(){!a.value||(n!=null&&n[u]&&await n[c](),r.value=!1)}async function h(){if(!a.value)return;await p();const y=kt(i);y&&(await y[l](),r.value=!0)}async function m(){r.value?await p():await h()}return n&&le(n,f,()=>{r.value=!!(n!=null&&n[u])},!1),s&&dn(p),{isSupported:a,isFullscreen:r,enter:h,exit:p,toggle:m}}function Og(e,t,n={}){const{root:s,rootMargin:i="0px",threshold:r=.1,window:o=Qe}=n,a=er(()=>o&&"IntersectionObserver"in o);let l=Mn;const c=a.value?ue(()=>({el:kt(e),root:kt(s)}),({el:f,root:p})=>{if(l(),!f)return;const h=new IntersectionObserver(t,{root:p,rootMargin:i,threshold:r});h.observe(f),l=()=>{h.disconnect(),l=Mn}},{immediate:!0,flush:"post"}):Mn,u=()=>{l(),c()};return dn(u),{isSupported:a,stop:u}}const Mg={ctrl:"control",command:"meta",cmd:"meta",option:"alt",up:"arrowup",down:"arrowdown",left:"arrowleft",right:"arrowright"};function Pg(e={}){const{reactive:t=!1,target:n=Qe,aliasMap:s=Mg,passive:i=!0,onEventFired:r=Mn}=e,o=Ce(new Set),a={toJSON(){return{}},current:o},l=t?Ce(a):a,c=new Set,u=new Set;function f(y,_){y in l&&(t?l[y]=_:l[y].value=_)}function p(){for(const y of u)f(y,!1)}function h(y,_){var $,x;const S=($=y.key)==null?void 0:$.toLowerCase(),I=[(x=y.code)==null?void 0:x.toLowerCase(),S].filter(Boolean);S&&(_?o.add(S):o.delete(S));for(const C of I)u.add(C),f(C,_);S==="meta"&&!_?(c.forEach(C=>{o.delete(C),f(C,!1)}),c.clear()):typeof y.getModifierState=="function"&&y.getModifierState("Meta")&&_&&[...o,...I].forEach(C=>c.add(C))}le(n,"keydown",y=>(h(y,!0),r(y)),{passive:i}),le(n,"keyup",y=>(h(y,!1),r(y)),{passive:i}),le("blur",p,{passive:!0}),le("focus",p,{passive:!0});const m=new Proxy(l,{get(y,_,$){if(typeof _!="string")return Reflect.get(y,_,$);if(_=_.toLowerCase(),_ in s&&(_=s[_]),!(_ in l))if(/[+_-]/.test(_)){const S=_.split(/[+_-]/g).map(O=>O.trim());l[_]=k(()=>S.every(O=>b(m[O])))}else l[_]=H(!1);const x=Reflect.get(y,_,$);return t?b(x):x}});return m}function uS(e={}){const{type:t="page",touch:n=!0,resetOnTouchEnds:s=!1,initialValue:i={x:0,y:0},window:r=Qe,eventFilter:o}=e,a=H(i.x),l=H(i.y),c=H(null),u=y=>{t==="page"?(a.value=y.pageX,l.value=y.pageY):t==="client"&&(a.value=y.clientX,l.value=y.clientY),c.value="mouse"},f=()=>{a.value=i.x,l.value=i.y},p=y=>{if(y.touches.length>0){const _=y.touches[0];t==="page"?(a.value=_.pageX,l.value=_.pageY):t==="client"&&(a.value=_.clientX,l.value=_.clientY),c.value="touch"}},h=y=>o===void 0?u(y):o(()=>u(y),{}),m=y=>o===void 0?p(y):o(()=>p(y),{});return r&&(le(r,"mousemove",h,{passive:!0}),le(r,"dragover",h,{passive:!0}),n&&(le(r,"touchstart",m,{passive:!0}),le(r,"touchmove",m,{passive:!0}),s&&le(r,"touchend",f,{passive:!0}))),{x:a,y:l,sourceType:c}}var Ut;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(Ut||(Ut={}));function Lg(e,t={}){const n=Sm(e),{threshold:s=50,onSwipe:i,onSwipeEnd:r,onSwipeStart:o}=t,a=Ce({x:0,y:0}),l=(C,N)=>{a.x=C,a.y=N},c=Ce({x:0,y:0}),u=(C,N)=>{c.x=C,c.y=N},f=k(()=>a.x-c.x),p=k(()=>a.y-c.y),{max:h,abs:m}=Math,y=k(()=>h(m(f.value),m(p.value))>=s),_=H(!1),$=H(!1),x=k(()=>y.value?m(f.value)>m(p.value)?f.value>0?Ut.LEFT:Ut.RIGHT:p.value>0?Ut.UP:Ut.DOWN:Ut.NONE),S=C=>t.pointerTypes?t.pointerTypes.includes(C.pointerType):!0,O=[le(e,"pointerdown",C=>{var N,Q;if(!S(C))return;$.value=!0,(Q=(N=n.value)==null?void 0:N.style)==null||Q.setProperty("touch-action","none");const se=C.target;se==null||se.setPointerCapture(C.pointerId);const{clientX:pe,clientY:me}=C;l(pe,me),u(pe,me),o==null||o(C)}),le(e,"pointermove",C=>{if(!S(C)||!$.value)return;const{clientX:N,clientY:Q}=C;u(N,Q),!_.value&&y.value&&(_.value=!0),_.value&&(i==null||i(C))}),le(e,"pointerup",C=>{var N,Q;!S(C)||(_.value&&(r==null||r(C,x.value)),$.value=!1,_.value=!1,(Q=(N=n.value)==null?void 0:N.style)==null||Q.setProperty("touch-action","initial"))})],I=()=>O.forEach(C=>C());return{isSwiping:Wn(_),direction:Wn(x),posStart:Wn(a),posEnd:Wn(c),distanceX:f,distanceY:p,stop:I}}var Ag=Object.defineProperty,bl=Object.getOwnPropertySymbols,Cg=Object.prototype.hasOwnProperty,Tg=Object.prototype.propertyIsEnumerable,wl=(e,t,n)=>t in e?Ag(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,jg=(e,t)=>{for(var n in t||(t={}))Cg.call(t,n)&&wl(e,n,t[n]);if(bl)for(var n of bl(t))Tg.call(t,n)&&wl(e,n,t[n]);return e};function dS(e={}){const{controls:t=!1,offset:n=0,immediate:s=!0,interval:i="requestAnimationFrame"}=e,r=H(Zr()+n),o=()=>r.value=Zr()+n,a=i==="requestAnimationFrame"?Sg(o,{immediate:s}):Im(o,i,{immediate:s});return t?jg({timestamp:r},a):r}var Ig=Object.defineProperty,xl=Object.getOwnPropertySymbols,Rg=Object.prototype.hasOwnProperty,Fg=Object.prototype.propertyIsEnumerable,El=(e,t,n)=>t in e?Ig(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Dg=(e,t)=>{for(var n in t||(t={}))Rg.call(t,n)&&El(e,n,t[n]);if(xl)for(var n of xl(t))Fg.call(t,n)&&El(e,n,t[n]);return e};const Ng={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};Dg({linear:bm},Ng);function Ft(e,t,n,s={}){var i,r,o;const{clone:a=!1,passive:l=!1,eventName:c,deep:u=!1,defaultValue:f}=s,p=In(),h=n||(p==null?void 0:p.emit)||((i=p==null?void 0:p.$emit)==null?void 0:i.bind(p))||((o=(r=p==null?void 0:p.proxy)==null?void 0:r.$emit)==null?void 0:o.bind(p==null?void 0:p.proxy));let m=c;t||(t="modelValue"),m=c||m||`update:${t.toString()}`;const y=$=>a?Li(a)?a($):ig($):$,_=()=>mm(e[t])?y(e[t]):f;if(l){const $=_(),x=H($);return ue(()=>e[t],S=>x.value=y(S)),ue(x,S=>{(S!==e[t]||u)&&h(m,S)},{deep:u}),x}else return k({get(){return _()},set($){h(m,$)}})}function fS({window:e=Qe}={}){if(!e)return H(!1);const t=H(e.document.hasFocus());return le(e,"blur",()=>{t.value=!1}),le(e,"focus",()=>{t.value=!0}),t}function Vg(e={}){const{window:t=Qe,initialWidth:n=1/0,initialHeight:s=1/0,listenOrientation:i=!0,includeScrollbar:r=!0}=e,o=H(n),a=H(s),l=()=>{t&&(r?(o.value=t.innerWidth,a.value=t.innerHeight):(o.value=t.document.documentElement.clientWidth,a.value=t.document.documentElement.clientHeight))};return l(),Ru(l),le("resize",l,{passive:!0}),i&&le("orientationchange",l,{passive:!0}),{width:o,height:a}}/*!
  * vue-router v4.1.5
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Kn=typeof window<"u";function Hg(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const Ee=Object.assign;function gr(e,t){const n={};for(const s in t){const i=t[s];n[s]=At(i)?i.map(e):e(i)}return n}const Ps=()=>{},At=Array.isArray,zg=/\/$/,Bg=e=>e.replace(zg,"");function vr(e,t,n="/"){let s,i={},r="",o="";const a=t.indexOf("#");let l=t.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(s=t.slice(0,l),r=t.slice(l+1,a>-1?a:t.length),i=e(r)),a>-1&&(s=s||t.slice(0,a),o=t.slice(a,t.length)),s=Wg(s!=null?s:t,n),{fullPath:s+(r&&"?")+r+o,path:s,query:i,hash:o}}function Ug(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function Sl(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function qg(e,t,n){const s=t.matched.length-1,i=n.matched.length-1;return s>-1&&s===i&&os(t.matched[s],n.matched[i])&&Vu(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function os(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Vu(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!Kg(e[n],t[n]))return!1;return!0}function Kg(e,t){return At(e)?$l(e,t):At(t)?$l(t,e):e===t}function $l(e,t){return At(t)?e.length===t.length&&e.every((n,s)=>n===t[s]):e.length===1&&e[0]===t}function Wg(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),s=e.split("/");let i=n.length-1,r,o;for(r=0;r<s.length;r++)if(o=s[r],o!==".")if(o==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+s.slice(r-(r===s.length?1:0)).join("/")}var Bs;(function(e){e.pop="pop",e.push="push"})(Bs||(Bs={}));var Ls;(function(e){e.back="back",e.forward="forward",e.unknown=""})(Ls||(Ls={}));function Yg(e){if(!e)if(Kn){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Bg(e)}const Zg=/^[^#]+#/;function Gg(e,t){return e.replace(Zg,"#")+t}function Qg(e,t){const n=document.documentElement.getBoundingClientRect(),s=e.getBoundingClientRect();return{behavior:t.behavior,left:s.left-n.left-(t.left||0),top:s.top-n.top-(t.top||0)}}const tr=()=>({left:window.pageXOffset,top:window.pageYOffset});function Jg(e){let t;if("el"in e){const n=e.el,s=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;t=Qg(i,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function kl(e,t){return(history.state?history.state.position-t:-1)+e}const Jr=new Map;function Xg(e,t){Jr.set(e,t)}function ev(e){const t=Jr.get(e);return Jr.delete(e),t}let tv=()=>location.protocol+"//"+location.host;function Hu(e,t){const{pathname:n,search:s,hash:i}=t,r=e.indexOf("#");if(r>-1){let a=i.includes(e.slice(r))?e.slice(r).length:1,l=i.slice(a);return l[0]!=="/"&&(l="/"+l),Sl(l,"")}return Sl(n,e)+s+i}function nv(e,t,n,s){let i=[],r=[],o=null;const a=({state:p})=>{const h=Hu(e,location),m=n.value,y=t.value;let _=0;if(p){if(n.value=h,t.value=p,o&&o===m){o=null;return}_=y?p.position-y.position:0}else s(h);i.forEach($=>{$(n.value,m,{delta:_,type:Bs.pop,direction:_?_>0?Ls.forward:Ls.back:Ls.unknown})})};function l(){o=n.value}function c(p){i.push(p);const h=()=>{const m=i.indexOf(p);m>-1&&i.splice(m,1)};return r.push(h),h}function u(){const{history:p}=window;!p.state||p.replaceState(Ee({},p.state,{scroll:tr()}),"")}function f(){for(const p of r)p();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:l,listen:c,destroy:f}}function Ol(e,t,n,s=!1,i=!1){return{back:e,current:t,forward:n,replaced:s,position:window.history.length,scroll:i?tr():null}}function sv(e){const{history:t,location:n}=window,s={value:Hu(e,n)},i={value:t.state};i.value||r(s.value,{back:null,current:s.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function r(l,c,u){const f=e.indexOf("#"),p=f>-1?(n.host&&document.querySelector("base")?e:e.slice(f))+l:tv()+e+l;try{t[u?"replaceState":"pushState"](c,"",p),i.value=c}catch(h){console.error(h),n[u?"replace":"assign"](p)}}function o(l,c){const u=Ee({},t.state,Ol(i.value.back,l,i.value.forward,!0),c,{position:i.value.position});r(l,u,!0),s.value=l}function a(l,c){const u=Ee({},i.value,t.state,{forward:l,scroll:tr()});r(u.current,u,!0);const f=Ee({},Ol(s.value,l,null),{position:u.position+1},c);r(l,f,!1),s.value=l}return{location:s,state:i,push:a,replace:o}}function iv(e){e=Yg(e);const t=sv(e),n=nv(e,t.state,t.location,t.replace);function s(r,o=!0){o||n.pauseListeners(),history.go(r)}const i=Ee({location:"",base:e,go:s,createHref:Gg.bind(null,e)},t,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>t.state.value}),i}function rv(e){return typeof e=="string"||e&&typeof e=="object"}function zu(e){return typeof e=="string"||typeof e=="symbol"}const Jt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Bu=Symbol("");var Ml;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Ml||(Ml={}));function as(e,t){return Ee(new Error,{type:e,[Bu]:!0},t)}function Vt(e,t){return e instanceof Error&&Bu in e&&(t==null||!!(e.type&t))}const Pl="[^/]+?",ov={sensitive:!1,strict:!1,start:!0,end:!0},av=/[.+*?^${}()[\]/\\]/g;function lv(e,t){const n=Ee({},ov,t),s=[];let i=n.start?"^":"";const r=[];for(const c of e){const u=c.length?[]:[90];n.strict&&!c.length&&(i+="/");for(let f=0;f<c.length;f++){const p=c[f];let h=40+(n.sensitive?.25:0);if(p.type===0)f||(i+="/"),i+=p.value.replace(av,"\\$&"),h+=40;else if(p.type===1){const{value:m,repeatable:y,optional:_,regexp:$}=p;r.push({name:m,repeatable:y,optional:_});const x=$||Pl;if(x!==Pl){h+=10;try{new RegExp(`(${x})`)}catch(O){throw new Error(`Invalid custom RegExp for param "${m}" (${x}): `+O.message)}}let S=y?`((?:${x})(?:/(?:${x}))*)`:`(${x})`;f||(S=_&&c.length<2?`(?:/${S})`:"/"+S),_&&(S+="?"),i+=S,h+=20,_&&(h+=-8),y&&(h+=-20),x===".*"&&(h+=-50)}u.push(h)}s.push(u)}if(n.strict&&n.end){const c=s.length-1;s[c][s[c].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(c){const u=c.match(o),f={};if(!u)return null;for(let p=1;p<u.length;p++){const h=u[p]||"",m=r[p-1];f[m.name]=h&&m.repeatable?h.split("/"):h}return f}function l(c){let u="",f=!1;for(const p of e){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const h of p)if(h.type===0)u+=h.value;else if(h.type===1){const{value:m,repeatable:y,optional:_}=h,$=m in c?c[m]:"";if(At($)&&!y)throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);const x=At($)?$.join("/"):$;if(!x)if(_)p.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${m}"`);u+=x}}return u||"/"}return{re:o,score:s,keys:r,parse:a,stringify:l}}function cv(e,t){let n=0;for(;n<e.length&&n<t.length;){const s=t[n]-e[n];if(s)return s;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function uv(e,t){let n=0;const s=e.score,i=t.score;for(;n<s.length&&n<i.length;){const r=cv(s[n],i[n]);if(r)return r;n++}if(Math.abs(i.length-s.length)===1){if(Ll(s))return 1;if(Ll(i))return-1}return i.length-s.length}function Ll(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const dv={type:0,value:""},fv=/[a-zA-Z0-9_]/;function pv(e){if(!e)return[[]];if(e==="/")return[[dv]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(h){throw new Error(`ERR (${n})/"${c}": ${h}`)}let n=0,s=n;const i=[];let r;function o(){r&&i.push(r),r=[]}let a=0,l,c="",u="";function f(){!c||(n===0?r.push({type:0,value:c}):n===1||n===2||n===3?(r.length>1&&(l==="*"||l==="+")&&t(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):t("Invalid state to consume buffer"),c="")}function p(){c+=l}for(;a<e.length;){if(l=e[a++],l==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:l==="/"?(c&&f(),o()):l===":"?(f(),n=1):p();break;case 4:p(),n=s;break;case 1:l==="("?n=2:fv.test(l)?p():(f(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:f(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${c}"`),f(),o(),i}function hv(e,t,n){const s=lv(pv(e.path),n),i=Ee(s,{record:e,parent:t,children:[],alias:[]});return t&&!i.record.aliasOf==!t.record.aliasOf&&t.children.push(i),i}function mv(e,t){const n=[],s=new Map;t=Tl({strict:!1,end:!0,sensitive:!1},t);function i(u){return s.get(u)}function r(u,f,p){const h=!p,m=gv(u);m.aliasOf=p&&p.record;const y=Tl(t,u),_=[m];if("alias"in u){const S=typeof u.alias=="string"?[u.alias]:u.alias;for(const O of S)_.push(Ee({},m,{components:p?p.record.components:m.components,path:O,aliasOf:p?p.record:m}))}let $,x;for(const S of _){const{path:O}=S;if(f&&O[0]!=="/"){const I=f.record.path,C=I[I.length-1]==="/"?"":"/";S.path=f.record.path+(O&&C+O)}if($=hv(S,f,y),p?p.alias.push($):(x=x||$,x!==$&&x.alias.push($),h&&u.name&&!Cl($)&&o(u.name)),m.children){const I=m.children;for(let C=0;C<I.length;C++)r(I[C],$,p&&p.children[C])}p=p||$,l($)}return x?()=>{o(x)}:Ps}function o(u){if(zu(u)){const f=s.get(u);f&&(s.delete(u),n.splice(n.indexOf(f),1),f.children.forEach(o),f.alias.forEach(o))}else{const f=n.indexOf(u);f>-1&&(n.splice(f,1),u.record.name&&s.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function l(u){let f=0;for(;f<n.length&&uv(u,n[f])>=0&&(u.record.path!==n[f].record.path||!Uu(u,n[f]));)f++;n.splice(f,0,u),u.record.name&&!Cl(u)&&s.set(u.record.name,u)}function c(u,f){let p,h={},m,y;if("name"in u&&u.name){if(p=s.get(u.name),!p)throw as(1,{location:u});y=p.record.name,h=Ee(Al(f.params,p.keys.filter(x=>!x.optional).map(x=>x.name)),u.params&&Al(u.params,p.keys.map(x=>x.name))),m=p.stringify(h)}else if("path"in u)m=u.path,p=n.find(x=>x.re.test(m)),p&&(h=p.parse(m),y=p.record.name);else{if(p=f.name?s.get(f.name):n.find(x=>x.re.test(f.path)),!p)throw as(1,{location:u,currentLocation:f});y=p.record.name,h=Ee({},f.params,u.params),m=p.stringify(h)}const _=[];let $=p;for(;$;)_.unshift($.record),$=$.parent;return{name:y,path:m,params:h,matched:_,meta:_v(_)}}return e.forEach(u=>r(u)),{addRoute:r,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:i}}function Al(e,t){const n={};for(const s of t)s in e&&(n[s]=e[s]);return n}function gv(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:vv(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function vv(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const s in e.components)t[s]=typeof n=="boolean"?n:n[s];return t}function Cl(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function _v(e){return e.reduce((t,n)=>Ee(t,n.meta),{})}function Tl(e,t){const n={};for(const s in e)n[s]=s in t?t[s]:e[s];return n}function Uu(e,t){return t.children.some(n=>n===e||Uu(e,n))}const qu=/#/g,yv=/&/g,bv=/\//g,wv=/=/g,xv=/\?/g,Ku=/\+/g,Ev=/%5B/g,Sv=/%5D/g,Wu=/%5E/g,$v=/%60/g,Yu=/%7B/g,kv=/%7C/g,Zu=/%7D/g,Ov=/%20/g;function Uo(e){return encodeURI(""+e).replace(kv,"|").replace(Ev,"[").replace(Sv,"]")}function Mv(e){return Uo(e).replace(Yu,"{").replace(Zu,"}").replace(Wu,"^")}function Xr(e){return Uo(e).replace(Ku,"%2B").replace(Ov,"+").replace(qu,"%23").replace(yv,"%26").replace($v,"`").replace(Yu,"{").replace(Zu,"}").replace(Wu,"^")}function Pv(e){return Xr(e).replace(wv,"%3D")}function Lv(e){return Uo(e).replace(qu,"%23").replace(xv,"%3F")}function Av(e){return e==null?"":Lv(e).replace(bv,"%2F")}function Ci(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function Cv(e){const t={};if(e===""||e==="?")return t;const s=(e[0]==="?"?e.slice(1):e).split("&");for(let i=0;i<s.length;++i){const r=s[i].replace(Ku," "),o=r.indexOf("="),a=Ci(o<0?r:r.slice(0,o)),l=o<0?null:Ci(r.slice(o+1));if(a in t){let c=t[a];At(c)||(c=t[a]=[c]),c.push(l)}else t[a]=l}return t}function jl(e){let t="";for(let n in e){const s=e[n];if(n=Pv(n),s==null){s!==void 0&&(t+=(t.length?"&":"")+n);continue}(At(s)?s.map(r=>r&&Xr(r)):[s&&Xr(s)]).forEach(r=>{r!==void 0&&(t+=(t.length?"&":"")+n,r!=null&&(t+="="+r))})}return t}function Tv(e){const t={};for(const n in e){const s=e[n];s!==void 0&&(t[n]=At(s)?s.map(i=>i==null?null:""+i):s==null?s:""+s)}return t}const jv=Symbol(""),Il=Symbol(""),qo=Symbol(""),Gu=Symbol(""),eo=Symbol("");function bs(){let e=[];function t(s){return e.push(s),()=>{const i=e.indexOf(s);i>-1&&e.splice(i,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function en(e,t,n,s,i){const r=s&&(s.enterCallbacks[i]=s.enterCallbacks[i]||[]);return()=>new Promise((o,a)=>{const l=f=>{f===!1?a(as(4,{from:n,to:t})):f instanceof Error?a(f):rv(f)?a(as(2,{from:t,to:f})):(r&&s.enterCallbacks[i]===r&&typeof f=="function"&&r.push(f),o())},c=e.call(s&&s.instances[i],t,n,l);let u=Promise.resolve(c);e.length<3&&(u=u.then(l)),u.catch(f=>a(f))})}function _r(e,t,n,s){const i=[];for(const r of e)for(const o in r.components){let a=r.components[o];if(!(t!=="beforeRouteEnter"&&!r.instances[o]))if(Iv(a)){const c=(a.__vccOpts||a)[t];c&&i.push(en(c,n,s,r,o))}else{let l=a();i.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${r.path}"`));const u=Hg(c)?c.default:c;r.components[o]=u;const p=(u.__vccOpts||u)[t];return p&&en(p,n,s,r,o)()}))}}return i}function Iv(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Rl(e){const t=z(qo),n=z(Gu),s=k(()=>t.resolve(b(e.to))),i=k(()=>{const{matched:l}=s.value,{length:c}=l,u=l[c-1],f=n.matched;if(!u||!f.length)return-1;const p=f.findIndex(os.bind(null,u));if(p>-1)return p;const h=Fl(l[c-2]);return c>1&&Fl(u)===h&&f[f.length-1].path!==h?f.findIndex(os.bind(null,l[c-2])):p}),r=k(()=>i.value>-1&&Nv(n.params,s.value.params)),o=k(()=>i.value>-1&&i.value===n.matched.length-1&&Vu(n.params,s.value.params));function a(l={}){return Dv(l)?t[b(e.replace)?"replace":"push"](b(e.to)).catch(Ps):Promise.resolve()}return{route:s,href:k(()=>s.value.href),isActive:r,isExactActive:o,navigate:a}}const Rv=ke({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Rl,setup(e,{slots:t}){const n=Ce(Rl(e)),{options:s}=z(qo),i=k(()=>({[Dl(e.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Dl(e.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=t.default&&t.default(n);return e.custom?r:ht("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}}),Fv=Rv;function Dv(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Nv(e,t){for(const n in t){const s=t[n],i=e[n];if(typeof s=="string"){if(s!==i)return!1}else if(!At(i)||i.length!==s.length||s.some((r,o)=>r!==i[o]))return!1}return!0}function Fl(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Dl=(e,t,n)=>e!=null?e:t!=null?t:n,Vv=ke({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const s=z(eo),i=k(()=>e.route||s.value),r=z(Il,0),o=k(()=>{let c=b(r);const{matched:u}=i.value;let f;for(;(f=u[c])&&!f.components;)c++;return c}),a=k(()=>i.value.matched[o.value]);ft(Il,k(()=>o.value+1)),ft(jv,a),ft(eo,i);const l=H();return ue(()=>[l.value,a.value,e.name],([c,u,f],[p,h,m])=>{u&&(u.instances[f]=c,h&&h!==u&&c&&c===p&&(u.leaveGuards.size||(u.leaveGuards=h.leaveGuards),u.updateGuards.size||(u.updateGuards=h.updateGuards))),c&&u&&(!h||!os(u,h)||!p)&&(u.enterCallbacks[f]||[]).forEach(y=>y(c))},{flush:"post"}),()=>{const c=i.value,u=e.name,f=a.value,p=f&&f.components[u];if(!p)return Nl(n.default,{Component:p,route:c});const h=f.props[u],m=h?h===!0?c.params:typeof h=="function"?h(c):h:null,_=ht(p,Ee({},m,t,{onVnodeUnmounted:$=>{$.component.isUnmounted&&(f.instances[u]=null)},ref:l}));return Nl(n.default,{Component:_,route:c})||_}}});function Nl(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const Hv=Vv;function zv(e){const t=mv(e.routes,e),n=e.parseQuery||Cv,s=e.stringifyQuery||jl,i=e.history,r=bs(),o=bs(),a=bs(),l=Lt(Jt);let c=Jt;Kn&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=gr.bind(null,M=>""+M),f=gr.bind(null,Av),p=gr.bind(null,Ci);function h(M,B){let R,K;return zu(M)?(R=t.getRecordMatcher(M),K=B):K=M,t.addRoute(K,R)}function m(M){const B=t.getRecordMatcher(M);B&&t.removeRoute(B)}function y(){return t.getRoutes().map(M=>M.record)}function _(M){return!!t.getRecordMatcher(M)}function $(M,B){if(B=Ee({},B||l.value),typeof M=="string"){const X=vr(n,M,B.path),g=t.resolve({path:X.path},B),v=i.createHref(X.fullPath);return Ee(X,g,{params:p(g.params),hash:Ci(X.hash),redirectedFrom:void 0,href:v})}let R;if("path"in M)R=Ee({},M,{path:vr(n,M.path,B.path).path});else{const X=Ee({},M.params);for(const g in X)X[g]==null&&delete X[g];R=Ee({},M,{params:f(M.params)}),B.params=f(B.params)}const K=t.resolve(R,B),ve=M.hash||"";K.params=u(p(K.params));const de=Ug(s,Ee({},M,{hash:Mv(ve),path:K.path})),ie=i.createHref(de);return Ee({fullPath:de,hash:ve,query:s===jl?Tv(M.query):M.query||{}},K,{redirectedFrom:void 0,href:ie})}function x(M){return typeof M=="string"?vr(n,M,l.value.path):Ee({},M)}function S(M,B){if(c!==M)return as(8,{from:B,to:M})}function O(M){return N(M)}function I(M){return O(Ee(x(M),{replace:!0}))}function C(M){const B=M.matched[M.matched.length-1];if(B&&B.redirect){const{redirect:R}=B;let K=typeof R=="function"?R(M):R;return typeof K=="string"&&(K=K.includes("?")||K.includes("#")?K=x(K):{path:K},K.params={}),Ee({query:M.query,hash:M.hash,params:"path"in K?{}:M.params},K)}}function N(M,B){const R=c=$(M),K=l.value,ve=M.state,de=M.force,ie=M.replace===!0,X=C(R);if(X)return N(Ee(x(X),{state:typeof X=="object"?Ee({},ve,X.state):ve,force:de,replace:ie}),B||R);const g=R;g.redirectedFrom=B;let v;return!de&&qg(s,K,R)&&(v=as(16,{to:g,from:K}),$e(K,K,!0,!1)),(v?Promise.resolve(v):se(g,K)).catch(w=>Vt(w)?Vt(w,2)?w:ce(w):U(w,g,K)).then(w=>{if(w){if(Vt(w,2))return N(Ee({replace:ie},x(w.to),{state:typeof w.to=="object"?Ee({},ve,w.to.state):ve,force:de}),B||g)}else w=me(g,K,!0,ie,ve);return pe(g,K,w),w})}function Q(M,B){const R=S(M,B);return R?Promise.reject(R):Promise.resolve()}function se(M,B){let R;const[K,ve,de]=Bv(M,B);R=_r(K.reverse(),"beforeRouteLeave",M,B);for(const X of K)X.leaveGuards.forEach(g=>{R.push(en(g,M,B))});const ie=Q.bind(null,M,B);return R.push(ie),Hn(R).then(()=>{R=[];for(const X of r.list())R.push(en(X,M,B));return R.push(ie),Hn(R)}).then(()=>{R=_r(ve,"beforeRouteUpdate",M,B);for(const X of ve)X.updateGuards.forEach(g=>{R.push(en(g,M,B))});return R.push(ie),Hn(R)}).then(()=>{R=[];for(const X of M.matched)if(X.beforeEnter&&!B.matched.includes(X))if(At(X.beforeEnter))for(const g of X.beforeEnter)R.push(en(g,M,B));else R.push(en(X.beforeEnter,M,B));return R.push(ie),Hn(R)}).then(()=>(M.matched.forEach(X=>X.enterCallbacks={}),R=_r(de,"beforeRouteEnter",M,B),R.push(ie),Hn(R))).then(()=>{R=[];for(const X of o.list())R.push(en(X,M,B));return R.push(ie),Hn(R)}).catch(X=>Vt(X,8)?X:Promise.reject(X))}function pe(M,B,R){for(const K of a.list())K(M,B,R)}function me(M,B,R,K,ve){const de=S(M,B);if(de)return de;const ie=B===Jt,X=Kn?history.state:{};R&&(K||ie?i.replace(M.fullPath,Ee({scroll:ie&&X&&X.scroll},ve)):i.push(M.fullPath,ve)),l.value=M,$e(M,B,R,ie),ce()}let Ne;function Ve(){Ne||(Ne=i.listen((M,B,R)=>{if(!pn.listening)return;const K=$(M),ve=C(K);if(ve){N(Ee(ve,{replace:!0}),K).catch(Ps);return}c=K;const de=l.value;Kn&&Xg(kl(de.fullPath,R.delta),tr()),se(K,de).catch(ie=>Vt(ie,12)?ie:Vt(ie,2)?(N(ie.to,K).then(X=>{Vt(X,20)&&!R.delta&&R.type===Bs.pop&&i.go(-1,!1)}).catch(Ps),Promise.reject()):(R.delta&&i.go(-R.delta,!1),U(ie,K,de))).then(ie=>{ie=ie||me(K,de,!1),ie&&(R.delta&&!Vt(ie,8)?i.go(-R.delta,!1):R.type===Bs.pop&&Vt(ie,20)&&i.go(-1,!1)),pe(K,de,ie)}).catch(Ps)}))}let Fe=bs(),Le=bs(),Te;function U(M,B,R){ce(M);const K=Le.list();return K.length?K.forEach(ve=>ve(M,B,R)):console.error(M),Promise.reject(M)}function ee(){return Te&&l.value!==Jt?Promise.resolve():new Promise((M,B)=>{Fe.add([M,B])})}function ce(M){return Te||(Te=!M,Ve(),Fe.list().forEach(([B,R])=>M?R(M):B()),Fe.reset()),M}function $e(M,B,R,K){const{scrollBehavior:ve}=e;if(!Kn||!ve)return Promise.resolve();const de=!R&&ev(kl(M.fullPath,0))||(K||!R)&&history.state&&history.state.scroll||null;return Ze().then(()=>ve(M,B,de)).then(ie=>ie&&Jg(ie)).catch(ie=>U(ie,M,B))}const ot=M=>i.go(M);let We;const it=new Set,pn={currentRoute:l,listening:!0,addRoute:h,removeRoute:m,hasRoute:_,getRoutes:y,resolve:$,options:e,push:O,replace:I,go:ot,back:()=>ot(-1),forward:()=>ot(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:Le.add,isReady:ee,install(M){const B=this;M.component("RouterLink",Fv),M.component("RouterView",Hv),M.config.globalProperties.$router=B,Object.defineProperty(M.config.globalProperties,"$route",{enumerable:!0,get:()=>b(l)}),Kn&&!We&&l.value===Jt&&(We=!0,O(i.location).catch(ve=>{}));const R={};for(const ve in Jt)R[ve]=k(()=>l.value[ve]);M.provide(qo,B),M.provide(Gu,Ce(R)),M.provide(eo,l);const K=M.unmount;it.add(M),M.unmount=function(){it.delete(M),it.size<1&&(c=Jt,Ne&&Ne(),Ne=null,l.value=Jt,We=!1,Te=!1),K()}}};return pn}function Hn(e){return e.reduce((t,n)=>t.then(()=>n()),Promise.resolve())}function Bv(e,t){const n=[],s=[],i=[],r=Math.max(t.matched.length,e.matched.length);for(let o=0;o<r;o++){const a=t.matched[o];a&&(e.matched.find(c=>os(c,a))?s.push(a):n.push(a));const l=e.matched[o];l&&(t.matched.find(c=>os(c,l))||i.push(l))}return[n,s,i]}const yr=H(!1),As=H(!1),Yn=H(!1),Uv=H(!0),to=sg({xs:460,...Jm}),Pn=Vg(),Qu=Pg(),qv=k(()=>Pn.height.value-Pn.width.value/rn>180),Ju=kg(Kt?document.body:null),ts=Qm(),Kv=k(()=>{var e,t;return["INPUT","TEXTAREA"].includes(((e=ts.value)==null?void 0:e.tagName)||"")||((t=ts.value)==null?void 0:t.classList.contains("CodeMirror-code"))}),Wv=k(()=>{var e;return["BUTTON","A"].includes(((e=ts.value)==null?void 0:e.tagName)||"")});Ct("slidev-camera","default");Ct("slidev-mic","default");const vi=Ct("slidev-scale",0),et=Ct("slidev-show-overview",!1),br=Ct("slidev-presenter-cursor",!0),Vl=Ct("slidev-show-editor",!1);Ct("slidev-editor-width",Kt?window.innerWidth*.4:100);const Xu=Fu(et);function Hl(e,t,n,s=i=>i){return e*s(.5-t*(.5-n))}function Yv(e){return[-e[0],-e[1]]}function Et(e,t){return[e[0]+t[0],e[1]+t[1]]}function yt(e,t){return[e[0]-t[0],e[1]-t[1]]}function xt(e,t){return[e[0]*t,e[1]*t]}function Zv(e,t){return[e[0]/t,e[1]/t]}function ws(e){return[e[1],-e[0]]}function zl(e,t){return e[0]*t[0]+e[1]*t[1]}function Gv(e,t){return e[0]===t[0]&&e[1]===t[1]}function Qv(e){return Math.hypot(e[0],e[1])}function Jv(e){return e[0]*e[0]+e[1]*e[1]}function Bl(e,t){return Jv(yt(e,t))}function ed(e){return Zv(e,Qv(e))}function Xv(e,t){return Math.hypot(e[1]-t[1],e[0]-t[0])}function xs(e,t,n){let s=Math.sin(n),i=Math.cos(n),r=e[0]-t[0],o=e[1]-t[1],a=r*i-o*s,l=r*s+o*i;return[a+t[0],l+t[1]]}function no(e,t,n){return Et(e,xt(yt(t,e),n))}function Ul(e,t,n){return Et(e,xt(t,n))}var{min:zn,PI:e_}=Math,ql=.275,Es=e_+1e-4;function t_(e,t={}){let{size:n=16,smoothing:s=.5,thinning:i=.5,simulatePressure:r=!0,easing:o=U=>U,start:a={},end:l={},last:c=!1}=t,{cap:u=!0,easing:f=U=>U*(2-U)}=a,{cap:p=!0,easing:h=U=>--U*U*U+1}=l;if(e.length===0||n<=0)return[];let m=e[e.length-1].runningLength,y=a.taper===!1?0:a.taper===!0?Math.max(n,m):a.taper,_=l.taper===!1?0:l.taper===!0?Math.max(n,m):l.taper,$=Math.pow(n*s,2),x=[],S=[],O=e.slice(0,10).reduce((U,ee)=>{let ce=ee.pressure;if(r){let $e=zn(1,ee.distance/n),ot=zn(1,1-$e);ce=zn(1,U+(ot-U)*($e*ql))}return(U+ce)/2},e[0].pressure),I=Hl(n,i,e[e.length-1].pressure,o),C,N=e[0].vector,Q=e[0].point,se=Q,pe=Q,me=se,Ne=!1;for(let U=0;U<e.length;U++){let{pressure:ee}=e[U],{point:ce,vector:$e,distance:ot,runningLength:We}=e[U];if(U<e.length-1&&m-We<3)continue;if(i){if(r){let de=zn(1,ot/n),ie=zn(1,1-de);ee=zn(1,O+(ie-O)*(de*ql))}I=Hl(n,i,ee,o)}else I=n/2;C===void 0&&(C=I);let it=We<y?f(We/y):1,pn=m-We<_?h((m-We)/_):1;I=Math.max(.01,I*Math.min(it,pn));let M=(U<e.length-1?e[U+1]:e[U]).vector,B=U<e.length-1?zl($e,M):1,R=zl($e,N)<0&&!Ne,K=B!==null&&B<0;if(R||K){let de=xt(ws(N),I);for(let ie=1/13,X=0;X<=1;X+=ie)pe=xs(yt(ce,de),ce,Es*X),x.push(pe),me=xs(Et(ce,de),ce,Es*-X),S.push(me);Q=pe,se=me,K&&(Ne=!0);continue}if(Ne=!1,U===e.length-1){let de=xt(ws($e),I);x.push(yt(ce,de)),S.push(Et(ce,de));continue}let ve=xt(ws(no(M,$e,B)),I);pe=yt(ce,ve),(U<=1||Bl(Q,pe)>$)&&(x.push(pe),Q=pe),me=Et(ce,ve),(U<=1||Bl(se,me)>$)&&(S.push(me),se=me),O=ee,N=$e}let Ve=e[0].point.slice(0,2),Fe=e.length>1?e[e.length-1].point.slice(0,2):Et(e[0].point,[1,1]),Le=[],Te=[];if(e.length===1){if(!(y||_)||c){let U=Ul(Ve,ed(ws(yt(Ve,Fe))),-(C||I)),ee=[];for(let ce=1/13,$e=ce;$e<=1;$e+=ce)ee.push(xs(U,Ve,Es*2*$e));return ee}}else{if(!(y||_&&e.length===1))if(u)for(let ee=1/13,ce=ee;ce<=1;ce+=ee){let $e=xs(S[0],Ve,Es*ce);Le.push($e)}else{let ee=yt(x[0],S[0]),ce=xt(ee,.5),$e=xt(ee,.51);Le.push(yt(Ve,ce),yt(Ve,$e),Et(Ve,$e),Et(Ve,ce))}let U=ws(Yv(e[e.length-1].vector));if(_||y&&e.length===1)Te.push(Fe);else if(p){let ee=Ul(Fe,U,I);for(let ce=1/29,$e=ce;$e<1;$e+=ce)Te.push(xs(ee,Fe,Es*3*$e))}else Te.push(Et(Fe,xt(U,I)),Et(Fe,xt(U,I*.99)),yt(Fe,xt(U,I*.99)),yt(Fe,xt(U,I)))}return x.concat(Te,S.reverse(),Le)}function n_(e,t={}){var n;let{streamline:s=.5,size:i=16,last:r=!1}=t;if(e.length===0)return[];let o=.15+(1-s)*.85,a=Array.isArray(e[0])?e:e.map(({x:h,y:m,pressure:y=.5})=>[h,m,y]);if(a.length===2){let h=a[1];a=a.slice(0,-1);for(let m=1;m<5;m++)a.push(no(a[0],h,m/4))}a.length===1&&(a=[...a,[...Et(a[0],[1,1]),...a[0].slice(2)]]);let l=[{point:[a[0][0],a[0][1]],pressure:a[0][2]>=0?a[0][2]:.25,vector:[1,1],distance:0,runningLength:0}],c=!1,u=0,f=l[0],p=a.length-1;for(let h=1;h<a.length;h++){let m=r&&h===p?a[h].slice(0,2):no(f.point,a[h],o);if(Gv(f.point,m))continue;let y=Xv(m,f.point);if(u+=y,h<p&&!c){if(u<i)continue;c=!0}f={point:m,pressure:a[h][2]>=0?a[h][2]:.5,vector:ed(yt(f.point,m)),distance:y,runningLength:u},l.push(f)}return l[0].vector=((n=l[1])==null?void 0:n.vector)||[0,0],l}function s_(e,t={}){return t_(n_(e,t),t)}var i_=()=>({events:{},emit(e,...t){let n=this.events[e]||[];for(let s=0,i=n.length;s<i;s++)n[s](...t)},on(e,t){var n;return(n=this.events[e])!=null&&n.push(t)||(this.events[e]=[t]),()=>{var s;this.events[e]=(s=this.events[e])==null?void 0:s.filter(i=>t!==i)}}});function Ti(e,t){return e-t}function r_(e){return e<0?-1:1}function ji(e){return[Math.abs(e),r_(e)]}function td(){const e=()=>((1+Math.random())*65536|0).toString(16).substring(1);return`${e()+e()}-${e()}-${e()}-${e()}-${e()}${e()}${e()}`}var o_=2,Bt=o_,fs=class{constructor(e){this.drauu=e,this.event=void 0,this.point=void 0,this.start=void 0,this.el=null}onSelected(e){}onUnselected(){}onStart(e){}onMove(e){return!1}onEnd(e){}get brush(){return this.drauu.brush}get shiftPressed(){return this.drauu.shiftPressed}get altPressed(){return this.drauu.altPressed}get svgElement(){return this.drauu.el}getMousePosition(e){var i;var t;const n=this.drauu.el,s=(i=this.drauu.options.coordinateScale)!=null?i:1;if(this.drauu.options.coordinateTransform===!1){const r=this.drauu.el.getBoundingClientRect();return{x:(e.pageX-r.left)*s,y:(e.pageY-r.top)*s,pressure:e.pressure}}else{const r=this.drauu.svgPoint;r.x=e.clientX,r.y=e.clientY;const o=r.matrixTransform((t=n.getScreenCTM())==null?void 0:t.inverse());return{x:o.x*s,y:o.y*s,pressure:e.pressure}}}createElement(e,t){var i;const n=document.createElementNS("http://www.w3.org/2000/svg",e),s=t?{...this.brush,...t}:this.brush;return n.setAttribute("fill",(i=s.fill)!=null?i:"transparent"),n.setAttribute("stroke",s.color),n.setAttribute("stroke-width",s.size.toString()),n.setAttribute("stroke-linecap","round"),s.dasharray&&n.setAttribute("stroke-dasharray",s.dasharray),n}attr(e,t){this.el.setAttribute(e,typeof t=="string"?t:t.toFixed(Bt))}_setEvent(e){this.event=e,this.point=this.getMousePosition(e)}_eventDown(e){return this._setEvent(e),this.start=this.point,this.onStart(this.point)}_eventMove(e){return this._setEvent(e),this.onMove(this.point)}_eventUp(e){return this._setEvent(e),this.onEnd(this.point)}},a_=class extends fs{constructor(){super(...arguments),this.points=[]}onStart(e){return this.el=document.createElementNS("http://www.w3.org/2000/svg","path"),this.points=[e],this.attr("fill",this.brush.color),this.attr("d",this.getSvgData(this.points)),this.el}onMove(e){return this.el||this.onStart(e),this.points[this.points.length-1]!==e&&this.points.push(e),this.attr("d",this.getSvgData(this.points)),!0}onEnd(){const e=this.el;return this.el=null,!!e}getSvgData(e){const t=s_(e,{size:this.brush.size*2,thinning:.9,simulatePressure:!1,start:{taper:5},end:{taper:5},...this.brush.stylusOptions});if(!t.length)return"";const n=t.reduce((s,[i,r],o,a)=>{const[l,c]=a[(o+1)%a.length];return s.push(i,r,(i+l)/2,(r+c)/2),s},["M",...t[0],"Q"]);return n.push("Z"),n.map(s=>typeof s=="number"?s.toFixed(2):s).join(" ")}},l_=class extends fs{onStart(e){return this.el=this.createElement("ellipse"),this.attr("cx",e.x),this.attr("cy",e.y),this.el}onMove(e){if(!this.el||!this.start)return!1;let[t,n]=ji(e.x-this.start.x),[s,i]=ji(e.y-this.start.y);if(this.shiftPressed){const r=Math.min(t,s);t=r,s=r}if(this.altPressed)this.attr("cx",this.start.x),this.attr("cy",this.start.y),this.attr("rx",t),this.attr("ry",s);else{const[r,o]=[this.start.x,this.start.x+t*n].sort(Ti),[a,l]=[this.start.y,this.start.y+s*i].sort(Ti);this.attr("cx",(r+o)/2),this.attr("cy",(a+l)/2),this.attr("rx",(o-r)/2),this.attr("ry",(l-a)/2)}return!0}onEnd(){const e=this.el;return this.el=null,!(!e||!e.getTotalLength())}};function nd(e,t){const n=document.createElementNS("http://www.w3.org/2000/svg","defs"),s=document.createElementNS("http://www.w3.org/2000/svg","marker"),i=document.createElementNS("http://www.w3.org/2000/svg","path");return i.setAttribute("fill",t),s.setAttribute("id",e),s.setAttribute("viewBox","0 -5 10 10"),s.setAttribute("refX","5"),s.setAttribute("refY","0"),s.setAttribute("markerWidth","4"),s.setAttribute("markerHeight","4"),s.setAttribute("orient","auto"),i.setAttribute("d","M0,-5L10,0L0,5"),s.appendChild(i),n.appendChild(s),n}var c_=class extends fs{onStart(e){if(this.el=this.createElement("line",{fill:"transparent"}),this.attr("x1",e.x),this.attr("y1",e.y),this.attr("x2",e.x),this.attr("y2",e.y),this.brush.arrowEnd){const t=td(),n=document.createElementNS("http://www.w3.org/2000/svg","g");return n.append(nd(t,this.brush.color)),n.append(this.el),this.attr("marker-end",`url(#${t})`),n}return this.el}onMove(e){if(!this.el)return!1;let{x:t,y:n}=e;if(this.shiftPressed){const s=e.x-this.start.x,i=e.y-this.start.y;if(i!==0){let r=s/i;r=Math.round(r),Math.abs(r)<=1?(t=this.start.x+i*r,n=this.start.y+i):(t=this.start.x+s,n=this.start.y)}}return this.altPressed?(this.attr("x1",this.start.x*2-t),this.attr("y1",this.start.y*2-n),this.attr("x2",t),this.attr("y2",n)):(this.attr("x1",this.start.x),this.attr("y1",this.start.y),this.attr("x2",t),this.attr("y2",n)),!0}onEnd(){const e=this.el;return this.el=null,!(!e||e.getTotalLength()<5)}},u_=class extends fs{onStart(e){return this.el=this.createElement("rect"),this.brush.cornerRadius&&(this.attr("rx",this.brush.cornerRadius),this.attr("ry",this.brush.cornerRadius)),this.attr("x",e.x),this.attr("y",e.y),this.el}onMove(e){if(!this.el||!this.start)return!1;let[t,n]=ji(e.x-this.start.x),[s,i]=ji(e.y-this.start.y);if(this.shiftPressed){const r=Math.min(t,s);t=r,s=r}if(this.altPressed)this.attr("x",this.start.x-t),this.attr("y",this.start.y-s),this.attr("width",t*2),this.attr("height",s*2);else{const[r,o]=[this.start.x,this.start.x+t*n].sort(Ti),[a,l]=[this.start.y,this.start.y+s*i].sort(Ti);this.attr("x",r),this.attr("y",a),this.attr("width",o-r),this.attr("height",l-a)}return!0}onEnd(){const e=this.el;return this.el=null,!(!e||!e.getTotalLength())}};function d_(e,t){const n=e.x-t.x,s=e.y-t.y;return n*n+s*s}function f_(e,t,n){let s=t.x,i=t.y,r=n.x-s,o=n.y-i;if(r!==0||o!==0){const a=((e.x-s)*r+(e.y-i)*o)/(r*r+o*o);a>1?(s=n.x,i=n.y):a>0&&(s+=r*a,i+=o*a)}return r=e.x-s,o=e.y-i,r*r+o*o}function p_(e,t){let n=e[0];const s=[n];let i;for(let r=1,o=e.length;r<o;r++)i=e[r],d_(i,n)>t&&(s.push(i),n=i);return n!==i&&i&&s.push(i),s}function so(e,t,n,s,i){let r=s,o=0;for(let a=t+1;a<n;a++){const l=f_(e[a],e[t],e[n]);l>r&&(o=a,r=l)}r>s&&(o-t>1&&so(e,t,o,s,i),i.push(e[o]),n-o>1&&so(e,o,n,s,i))}function h_(e,t){const n=e.length-1,s=[e[0]];return so(e,0,n,t,s),s.push(e[n]),s}function Kl(e,t,n=!1){if(e.length<=2)return e;const s=t!==void 0?t*t:1;return e=n?e:p_(e,s),e=h_(e,s),e}var m_=class extends fs{constructor(){super(...arguments),this.points=[],this.count=0}onStart(e){if(this.el=this.createElement("path",{fill:"transparent"}),this.points=[e],this.brush.arrowEnd){this.arrowId=td();const t=nd(this.arrowId,this.brush.color);this.el.appendChild(t)}return this.el}onMove(e){return this.el||this.onStart(e),this.points[this.points.length-1]!==e&&(this.points.push(e),this.count+=1),this.count>5&&(this.points=Kl(this.points,1,!0),this.count=0),this.attr("d",Yl(this.points)),!0}onEnd(){const e=this.el;return this.el=null,!(!e||(e.setAttribute("d",Yl(Kl(this.points,1,!0))),!e.getTotalLength()))}};function g_(e,t){const n=t.x-e.x,s=t.y-e.y;return{length:Math.sqrt(Math.pow(n,2)+Math.pow(s,2)),angle:Math.atan2(s,n)}}function Wl(e,t,n,s){const i=t||e,r=n||e,o=.2,a=g_(i,r),l=a.angle+(s?Math.PI:0),c=a.length*o,u=e.x+Math.cos(l)*c,f=e.y+Math.sin(l)*c;return{x:u,y:f}}function v_(e,t,n){const s=Wl(n[t-1],n[t-2],e),i=Wl(e,n[t-1],n[t+1],!0);return`C ${s.x.toFixed(Bt)},${s.y.toFixed(Bt)} ${i.x.toFixed(Bt)},${i.y.toFixed(Bt)} ${e.x.toFixed(Bt)},${e.y.toFixed(Bt)}`}function Yl(e){return e.reduce((t,n,s,i)=>s===0?`M ${n.x.toFixed(Bt)},${n.y.toFixed(Bt)}`:`${t} ${v_(n,s,i)}`,"")}var __=class extends fs{constructor(){super(...arguments),this.pathSubFactor=20,this.pathFragments=[]}onSelected(e){const t=(n,s)=>{if(n&&n.length)for(let i=0;i<n.length;i++){const r=n[i];if(r.getTotalLength){const o=r.getTotalLength();for(let a=0;a<this.pathSubFactor;a++){const l=r.getPointAtLength(o*a/this.pathSubFactor),c=r.getPointAtLength(o*(a+1)/this.pathSubFactor);this.pathFragments.push({x1:l.x,x2:c.x,y1:l.y,y2:c.y,segment:a,element:s||r})}}else r.children&&t(r.children,r)}};e&&t(e.children)}onUnselected(){this.pathFragments=[]}onStart(e){this.svgPointPrevious=this.svgElement.createSVGPoint(),this.svgPointPrevious.x=e.x,this.svgPointPrevious.y=e.y}onMove(e){this.svgPointCurrent=this.svgElement.createSVGPoint(),this.svgPointCurrent.x=e.x,this.svgPointCurrent.y=e.y;const t=this.checkAndEraseElement();return this.svgPointPrevious=this.svgPointCurrent,t}onEnd(){return this.svgPointPrevious=void 0,this.svgPointCurrent=void 0,!0}checkAndEraseElement(){const e=[];if(this.pathFragments.length)for(let t=0;t<this.pathFragments.length;t++){const n=this.pathFragments[t],s={x1:this.svgPointPrevious.x,x2:this.svgPointCurrent.x,y1:this.svgPointPrevious.y,y2:this.svgPointCurrent.y};this.lineLineIntersect(n,s)&&(n.element.remove(),e.push(t))}return e.length&&(this.pathFragments=this.pathFragments.filter((t,n)=>!e.includes(n))),e.length>0}lineLineIntersect(e,t){const n=e.x1,s=e.x2,i=t.x1,r=t.x2,o=e.y1,a=e.y2,l=t.y1,c=t.y2,u=(n-s)*(l-c)-(o-a)*(i-r),f=(n*a-o*s)*(i-r)-(n-s)*(i*c-l*r),p=(n*a-o*s)*(l-c)-(o-a)*(i*c-l*r),h=(m,y,_)=>m>=y&&m<=_?!0:m>=_&&m<=y;if(u===0)return!1;{const m={x:f/u,y:p/u};return h(m.x,n,s)&&h(m.y,o,a)&&h(m.x,i,r)&&h(m.y,l,c)}}};function y_(e){return{draw:new m_(e),stylus:new a_(e),line:new c_(e),rectangle:new u_(e),ellipse:new l_(e),eraseLine:new __(e)}}var b_=class{constructor(e={}){this.options=e,this.el=null,this.svgPoint=null,this.eventEl=null,this.shiftPressed=!1,this.altPressed=!1,this.drawing=!1,this._emitter=i_(),this._models=y_(this),this._undoStack=[],this._disposables=[],this.options.brush||(this.options.brush={color:"black",size:3,mode:"stylus"}),e.el&&this.mount(e.el,e.eventTarget)}get model(){return this._models[this.mode]}get mounted(){return!!this.el}get mode(){return this.options.brush.mode||"stylus"}set mode(e){this._models[this.mode].onUnselected(),this.options.brush.mode=e,this.model.onSelected(this.el)}get brush(){return this.options.brush}set brush(e){this.options.brush=e}resolveSelector(e){return typeof e=="string"?document.querySelector(e):e||null}mount(e,t){if(this.el)throw new Error("[drauu] already mounted, unmount previous target first");if(this.el=this.resolveSelector(e),!this.el)throw new Error("[drauu] target element not found");if(this.el.tagName.toLocaleLowerCase()!=="svg")throw new Error("[drauu] can only mount to a SVG element");if(!this.el.createSVGPoint)throw new Error("[drauu] SVG element must be create by document.createElementNS('http://www.w3.org/2000/svg', 'svg')");this.svgPoint=this.el.createSVGPoint();const n=this.resolveSelector(t)||this.el,s=this.eventStart.bind(this),i=this.eventMove.bind(this),r=this.eventEnd.bind(this),o=this.eventKeyboard.bind(this);n.addEventListener("pointerdown",s,{passive:!1}),window.addEventListener("pointermove",i,{passive:!1}),window.addEventListener("pointerup",r,{passive:!1}),window.addEventListener("pointercancel",r,{passive:!1}),window.addEventListener("keydown",o,!1),window.addEventListener("keyup",o,!1),this._disposables.push(()=>{n.removeEventListener("pointerdown",s),window.removeEventListener("pointermove",i),window.removeEventListener("pointerup",r),window.removeEventListener("pointercancel",r),window.removeEventListener("keydown",o,!1),window.removeEventListener("keyup",o,!1)}),this._emitter.emit("mounted")}unmount(){this._disposables.forEach(e=>e()),this._disposables.length=0,this.el=null,this._emitter.emit("unmounted")}on(e,t){return this._emitter.on(e,t)}undo(){const e=this.el;return e.lastElementChild?(this._undoStack.push(e.lastElementChild.cloneNode(!0)),e.lastElementChild.remove(),this._emitter.emit("changed"),!0):!1}redo(){return this._undoStack.length?(this.el.appendChild(this._undoStack.pop()),this._emitter.emit("changed"),!0):!1}canRedo(){return!!this._undoStack.length}canUndo(){var e;return!!((e=this.el)!=null&&e.lastElementChild)}eventMove(e){!this.acceptsInput(e)||!this.drawing||this.model._eventMove(e)&&(e.stopPropagation(),e.preventDefault(),this._emitter.emit("changed"))}eventStart(e){!this.acceptsInput(e)||(e.stopPropagation(),e.preventDefault(),this._currentNode&&this.cancel(),this.drawing=!0,this._emitter.emit("start"),this._currentNode=this.model._eventDown(e),this._currentNode&&this.mode!=="eraseLine"&&this.el.appendChild(this._currentNode),this._emitter.emit("changed"))}eventEnd(e){if(!this.acceptsInput(e)||!this.drawing)return;const t=this.model._eventUp(e);t?(t instanceof Element&&t!==this._currentNode&&(this._currentNode=t),this.commit()):this.cancel(),this.drawing=!1,this._emitter.emit("end"),this._emitter.emit("changed")}acceptsInput(e){return!this.options.acceptsInputTypes||this.options.acceptsInputTypes.includes(e.pointerType)}eventKeyboard(e){this.shiftPressed===e.shiftKey&&this.altPressed===e.altKey||(this.shiftPressed=e.shiftKey,this.altPressed=e.altKey,this.model.point&&this.model.onMove(this.model.point)&&this._emitter.emit("changed"))}commit(){this._undoStack.length=0;const e=this._currentNode;this._currentNode=void 0,this._emitter.emit("committed",e)}clear(){this._undoStack.length=0,this.cancel(),this.el.innerHTML="",this._emitter.emit("changed")}cancel(){this._currentNode&&(this.el.removeChild(this._currentNode),this._currentNode=void 0,this._emitter.emit("canceled"))}dump(){return this.el.innerHTML}load(e){this.clear(),this.el.innerHTML=e}};function w_(e){return new b_(e)}const io=["#ff595e","#ffca3a","#8ac926","#1982c4","#6a4c93","#ffffff","#000000"],Dt=Ct("slidev-drawing-enabled",!1),pS=Ct("slidev-drawing-pinned",!1),x_=H(!1),E_=H(!1),S_=H(!1),Us=H(!1),En=Em(Ct("slidev-drawing-brush",{color:io[0],size:4,mode:"stylus"})),Zl=H("stylus"),sd=k(()=>be.drawings.syncAll||Rt.value);let qs=!1;const Ss=k({get(){return Zl.value},set(e){Zl.value=e,e==="arrow"?(En.mode="line",En.arrowEnd=!0):(En.mode=e,En.arrowEnd=!1)}}),$_=Ce({brush:En,acceptsInputTypes:k(()=>Dt.value?void 0:["pen"]),coordinateTransform:!1}),tt=qi(w_($_));function k_(){tt.clear(),sd.value&&Tu(Be.value,"")}function id(){var e;E_.value=tt.canRedo(),x_.value=tt.canUndo(),S_.value=!!((e=tt.el)!=null&&e.children.length)}function O_(e){qs=!0;const t=Pi[e||Be.value];t!=null?tt.load(t):tt.clear(),qs=!1}tt.on("changed",()=>{if(id(),!qs){const e=tt.dump(),t=Be.value;(Pi[t]||"")!==e&&sd.value&&Tu(t,tt.dump())}});fm(e=>{qs=!0,e[Be.value]!=null&&tt.load(e[Be.value]||""),qs=!1,id()});Ze(()=>{ue(Be,()=>{!tt.mounted||O_()},{immediate:!0})});tt.on("start",()=>Us.value=!0);tt.on("end",()=>Us.value=!1);window.addEventListener("keydown",e=>{if(!Dt.value)return;const t=!e.ctrlKey&&!e.altKey&&!e.shiftKey&&!e.metaKey;let n=!0;e.code==="KeyZ"&&(e.ctrlKey||e.metaKey)?e.shiftKey?tt.redo():tt.undo():e.code==="Escape"?Dt.value=!1:e.code==="KeyL"&&t?Ss.value="line":e.code==="KeyA"&&t?Ss.value="arrow":e.code==="KeyS"&&t?Ss.value="stylus":e.code==="KeyR"&&t?Ss.value="rectangle":e.code==="KeyE"&&t?Ss.value="ellipse":e.code==="KeyC"&&t?k_():e.code.startsWith("Digit")&&t&&+e.code[5]<=io.length?En.color=io[+e.code[5]-1]:n=!1,n&&(e.preventDefault(),e.stopPropagation())},!1);function He(...e){return k(()=>e.every(t=>pt(t)))}function ct(e){return k(()=>!pt(e))}const Gl=fg(),wr=Ct("slidev-color-schema","auto"),ro=k(()=>be.colorSchema!=="auto"),Ko=k({get(){return ro.value?be.colorSchema==="dark":wr.value==="auto"?Gl.value:wr.value==="dark"},set(e){ro.value||(wr.value=e===Gl.value?"auto":e?"dark":"light")}}),rd=Fu(Ko);Kt&&ue(Ko,e=>{const t=document.querySelector("html");t.classList.toggle("dark",e),t.classList.toggle("light",!e)},{immediate:!0});const _i=H(1),yi=k(()=>ze.length-1),mt=H(0),Wo=H(0);function M_(){mt.value>_i.value&&(mt.value-=1)}function P_(){mt.value<yi.value&&(mt.value+=1)}function L_(){if(mt.value>_i.value){let e=mt.value-Wo.value;e<_i.value&&(e=_i.value),mt.value=e}}function A_(){if(mt.value<yi.value){let e=mt.value+Wo.value;e>yi.value&&(e=yi.value),mt.value=e}}function C_(){const{escape:e,space:t,shift:n,left:s,right:i,up:r,down:o,enter:a,d:l,g:c,o:u}=Qu;let f=[{name:"next_space",key:He(t,ct(n)),fn:on,autoRepeat:!0},{name:"prev_space",key:He(t,n),fn:an,autoRepeat:!0},{name:"next_right",key:He(i,ct(n),ct(et)),fn:on,autoRepeat:!0},{name:"prev_left",key:He(s,ct(n),ct(et)),fn:an,autoRepeat:!0},{name:"next_page_key",key:"pageDown",fn:on,autoRepeat:!0},{name:"prev_page_key",key:"pageUp",fn:an,autoRepeat:!0},{name:"next_down",key:He(o,ct(et)),fn:Ks,autoRepeat:!0},{name:"prev_up",key:He(r,ct(et)),fn:()=>Ws(!1),autoRepeat:!0},{name:"next_shift",key:He(i,n),fn:Ks,autoRepeat:!0},{name:"prev_shift",key:He(s,n),fn:()=>Ws(!1),autoRepeat:!0},{name:"toggle_dark",key:He(l,ct(Dt)),fn:rd},{name:"toggle_overview",key:He(u,ct(Dt)),fn:Xu},{name:"hide_overview",key:He(e,ct(Dt)),fn:()=>et.value=!1},{name:"goto",key:He(c,ct(Dt)),fn:()=>Yn.value=!Yn.value},{name:"next_overview",key:He(i,et),fn:P_},{name:"prev_overview",key:He(s,et),fn:M_},{name:"up_overview",key:He(r,et),fn:L_},{name:"down_overview",key:He(o,et),fn:A_},{name:"goto_from_overview",key:He(a,et),fn:()=>{ls(mt.value),et.value=!1}}];const p=new Set(f.map(m=>m.name));if(f.filter(m=>m.name&&p.has(m.name)).length===0){const m=["========== WARNING ==========","defineShortcutsSetup did not return any of the base shortcuts.","See https://sli.dev/custom/config-shortcuts.html for migration.",'If it is intentional, return at least one shortcut with one of the base names (e.g. name:"goto").'].join(`

`);alert(m),console.warn(m)}return f}const od=He(ct(Kv),ct(Wv),Uv);function T_(e,t,n=!1){typeof e=="string"&&(e=Qu[e]);const s=He(e,od);let i=0,r;const o=()=>{if(clearTimeout(r),!s.value){i=0;return}n&&(r=setTimeout(o,Math.max(1e3-i*250,150)),i++),t()};return ue(s,o,{flush:"sync"})}function j_(e,t){return Gm(e,n=>{!od.value||n.repeat||t()})}function I_(){const e=C_();new Map(e.map(n=>[n.key,n])).forEach(n=>{n.fn&&T_(n.key,n.fn,n.autoRepeat)}),j_("f",()=>Ju.toggle())}const R_={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},F_=d("path",{fill:"currentColor",d:"M24 9.4L22.6 8L16 14.6L9.4 8L8 9.4l6.6 6.6L8 22.6L9.4 24l6.6-6.6l6.6 6.6l1.4-1.4l-6.6-6.6L24 9.4z"},null,-1),D_=[F_];function N_(e,t){return E(),D("svg",R_,D_)}const V_={name:"carbon-close",render:N_};function Yo(e){var n,s;const t=(s=(n=e==null?void 0:e.meta)==null?void 0:n.slide)==null?void 0:s.no;return t!=null?`slidev-page-${t}`:""}const ad=ke({__name:"SlideContainer",props:{width:{type:Number},meta:{default:()=>({})},scale:{type:[Number,String]}},setup(e){const t=e;z(Y);const n=H(),s=$g(n),i=k(()=>t.width?t.width:s.width.value),r=k(()=>t.width?t.width/rn:s.height.value);t.width&&Zi(()=>{n.value&&(n.value.style.width=`${i.value}px`,n.value.style.height=`${r.value}px`)});const o=k(()=>i.value/r.value),a=k(()=>t.scale?t.scale:o.value<rn?i.value/On:r.value*rn/On),l=k(()=>({height:`${Lu}px`,width:`${On}px`,transform:`translate(-50%, -50%) scale(${a.value})`})),c=k(()=>({"select-none":!be.selectable,"slidev-code-line-numbers":be.lineNumbers}));return ft(Pu,a),(u,f)=>(E(),D("div",{id:"slide-container",ref_key:"root",ref:n,class:Ie(b(c))},[d("div",{id:"slide-content",style:nt(b(l))},[cn(u.$slots,"default")],4),cn(u.$slots,"controls")],2))}});const Zo=ke({props:{clicks:{type:[Number,String],default:0},clicksElements:{type:Array,default:()=>[]},clicksOrderMap:{type:Map,default:()=>new Map},clicksDisabled:{type:Boolean,default:!1},context:{type:String,default:"main"},is:{type:Object,default:void 0},route:{type:Object,default:void 0}},setup(e,{emit:t}){const n=Ft(e,"clicks",t),s=Ft(e,"clicksElements",t),i=Ft(e,"clicksDisabled",t),r=Ft(e,"clicksOrderMap",t);s.value.length=0,ft(em,e.route),ft(tm,e.context),ft(mi,n),ft(gi,i),ft(Un,s),ft(Wr,r)},render(){var e,t;return this.$props.is?ht(this.$props.is):(t=(e=this.$slots)==null?void 0:e.default)==null?void 0:t.call(e)}}),H_=["innerHTML"],z_=ke({__name:"DrawingPreview",props:{page:null},setup(e){return z(Y),(t,n)=>b(Pi)[e.page]?(E(),D("svg",{key:0,ref:"svg",class:"w-full h-full absolute top-0 pointer-events-none",innerHTML:b(Pi)[e.page]},null,8,H_)):fe("v-if",!0)}}),B_={class:"slides-overview bg-main !bg-opacity-75 p-16 overflow-y-auto"},U_=["onClick"],q_=ke({__name:"SlidesOverview",props:{modelValue:{type:Boolean}},emits:[],setup(e,{emit:t}){const n=e;z(Y);const s=Ft(n,"modelValue",t);function i(){s.value=!1}function r(h){ls(h),i()}function o(h){return h===mt.value}const a=to.smaller("xs"),l=to.smaller("sm"),c=4*16*2,u=2*16,f=k(()=>a.value?Pn.width.value-c:l.value?(Pn.width.value-c-u)/2:300),p=k(()=>Math.floor((Pn.width.value-c)/(f.value+u)));return Zi(()=>{mt.value=Be.value,Wo.value=p.value}),(h,m)=>{const y=V_;return E(),D(Se,null,[Ue(d("div",B_,[d("div",{class:"grid gap-y-4 gap-x-8 w-full",style:nt(`grid-template-columns: repeat(auto-fit,minmax(${b(f)}px,1fr))`)},[(E(!0),D(Se,null,Qs(b(ze).slice(0,-1),(_,$)=>(E(),D("div",{key:_.path,class:"relative"},[d("div",{class:Ie(["inline-block border border-gray-400 rounded border-opacity-50 overflow-hidden bg-main hover:border-$slidev-theme-primary",{"border-$slidev-theme-primary":o($+1)}]),onClick:x=>r(+_.path)},[(E(),W(ad,{key:_.path,width:b(f),"clicks-disabled":!0,class:"pointer-events-none"},{default:ae(()=>[J(b(Zo),{is:_==null?void 0:_.component,"clicks-disabled":!0,class:Ie(b(Yo)(_)),route:_,context:"overview"},null,8,["is","class","route"]),J(z_,{page:+_.path},null,8,["page"])]),_:2},1032,["width"]))],10,U_),d("div",{class:"absolute top-0 opacity-50",style:nt(`left: ${b(f)+5}px`)},Ln($+1),5)]))),128))],4)],512),[[ku,b(s)]]),b(s)?(E(),D("button",{key:0,class:"fixed text-2xl top-4 right-4 icon-btn text-gray-400",onClick:i},[J(y)])):fe("v-if",!0)],64)}}});const K_="/ML_presentation/assets/logo.b72bde5d.png",W_={key:0,class:"fixed top-0 bottom-0 left-0 right-0 grid z-20"},Y_=ke({__name:"Modal",props:{modelValue:{default:!1},class:{default:""}},emits:["modelValue"],setup(e,{emit:t}){const n=e;z(Y);const s=Ft(n,"modelValue",t);function i(){s.value=!1}return(r,o)=>(E(),W(au,null,[b(s)?(E(),D("div",W_,[d("div",{bg:"black opacity-80",class:"absolute top-0 bottom-0 left-0 right-0 -z-1",onClick:o[0]||(o[0]=a=>i())}),d("div",{class:Ie(["m-auto rounded-md bg-main shadow",n.class]),"dark:border":"~ gray-400 opacity-10"},[cn(r.$slots,"default")],2)])):fe("v-if",!0)],1024))}}),Z_={class:"slidev-info-dialog slidev-layout flex flex-col gap-4 text-base"},G_=["innerHTML"],Q_=d("a",{href:"https://github.com/slidevjs/slidev",target:"_blank",class:"!opacity-100 !border-none !text-current"},[d("div",{class:"flex gap-1 children:my-auto"},[d("div",{class:"opacity-50 text-sm mr-2"},"Powered by"),d("img",{class:"w-5 h-5",src:K_,alt:"Slidev"}),d("div",{style:{color:"#2082A6"}},[d("b",null,"Sli"),Je("dev ")])])],-1),J_=ke({__name:"InfoDialog",props:{modelValue:{default:!1}},emits:["modelValue"],setup(e,{emit:t}){const n=e;z(Y);const s=Ft(n,"modelValue",t),i=k(()=>typeof be.info=="string");return(r,o)=>(E(),W(Y_,{modelValue:b(s),"onUpdate:modelValue":o[0]||(o[0]=a=>we(s)?s.value=a:null),class:"px-6 py-4"},{default:ae(()=>[d("div",Z_,[b(i)?(E(),D("div",{key:0,class:"mb-4",innerHTML:b(be).info},null,8,G_)):fe("v-if",!0),Q_])]),_:1},8,["modelValue"]))}});const X_=["disabled","onKeydown"],e0=ke({__name:"Goto",setup(e){z(Y);const t=H(),n=H(""),s=k(()=>{if(n.value.startsWith("/"))return!!ze.find(o=>o.path===n.value.substring(1));{const o=+n.value;return!isNaN(o)&&o>0&&o<=$d.value}});function i(){s.value&&(n.value.startsWith("/")?ls(n.value.substring(1)):ls(+n.value)),r()}function r(){Yn.value=!1}return ue(Yn,async o=>{var a,l;o?(await Ze(),n.value="",(a=t.value)==null||a.focus()):(l=t.value)==null||l.blur()}),ue(n,o=>{o.match(/^[^0-9/]/)&&(n.value=n.value.substring(1))}),(o,a)=>(E(),D("div",{id:"slidev-goto-dialog",class:Ie(["fixed right-5 bg-main transform transition-all",b(Yn)?"top-5":"-top-20"]),shadow:"~",p:"x-4 y-2",border:"~ transparent rounded dark:gray-400 dark:opacity-25"},[Ue(d("input",{ref_key:"input",ref:t,"onUpdate:modelValue":a[0]||(a[0]=l=>n.value=l),type:"text",disabled:!b(Yn),class:Ie(["outline-none bg-transparent",{"text-red-400":!b(s)&&n.value}]),placeholder:"Goto...",onKeydown:[Ga(i,["enter"]),Ga(r,["escape"])],onBlur:r},null,42,X_),[[jh,n.value]])],2))}}),t0=ke({__name:"Controls",setup(e){z(Y);const t=Lt(),n=Lt();return(s,i)=>(E(),D(Se,null,[J(q_,{modelValue:b(et),"onUpdate:modelValue":i[0]||(i[0]=r=>we(et)?et.value=r:null)},null,8,["modelValue"]),J(e0),b(t)?(E(),W(b(t),{key:0})):fe("v-if",!0),b(n)?(E(),W(b(n),{key:1,modelValue:b(yr),"onUpdate:modelValue":i[1]||(i[1]=r=>we(yr)?yr.value=r:null)},null,8,["modelValue"])):fe("v-if",!0),b(be).info?(E(),W(J_,{key:2,modelValue:b(As),"onUpdate:modelValue":i[2]||(i[2]=r=>we(As)?As.value=r:null)},null,8,["modelValue"])):fe("v-if",!0)],64))}}),n0={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},s0=d("path",{fill:"currentColor",d:"M30 8h-4.1c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2h14.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30V8zm-9 4c-1.7 0-3-1.3-3-3s1.3-3 3-3s3 1.3 3 3s-1.3 3-3 3zM2 24h4.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30v-2H15.9c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2zm9-4c1.7 0 3 1.3 3 3s-1.3 3-3 3s-3-1.3-3-3s1.3-3 3-3z"},null,-1),i0=[s0];function r0(e,t){return E(),D("svg",n0,i0)}const o0={name:"carbon-settings-adjust",render:r0},a0={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},l0=d("path",{fill:"currentColor",d:"M17 22v-8h-4v2h2v6h-3v2h8v-2h-3zM16 8a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 16 8z"},null,-1),c0=d("path",{fill:"currentColor",d:"M16 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14Zm0-26a12 12 0 1 0 12 12A12 12 0 0 0 16 4Z"},null,-1),u0=[l0,c0];function d0(e,t){return E(),D("svg",a0,u0)}const f0={name:"carbon-information",render:d0},p0={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},h0=d("path",{fill:"currentColor",d:"M26 24v4H6v-4H4v4a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-4zm0-10l-1.41-1.41L17 20.17V2h-2v18.17l-7.59-7.58L6 14l10 10l10-10z"},null,-1),m0=[h0];function g0(e,t){return E(),D("svg",p0,m0)}const v0={name:"carbon-download",render:g0},_0={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},y0=d("path",{fill:"currentColor",d:"M29.415 19L27.7 17.285A2.97 2.97 0 0 0 28 16a3 3 0 1 0-3 3a2.97 2.97 0 0 0 1.286-.3L28 20.414V28h-6v-3a7.008 7.008 0 0 0-7-7H9a7.008 7.008 0 0 0-7 7v5h28v-9.586A1.988 1.988 0 0 0 29.415 19ZM4 25a5.006 5.006 0 0 1 5-5h6a5.006 5.006 0 0 1 5 5v3H4Z"},null,-1),b0=d("path",{fill:"currentColor",d:"M12 4a5 5 0 1 1-5 5a5 5 0 0 1 5-5m0-2a7 7 0 1 0 7 7a7 7 0 0 0-7-7Z"},null,-1),w0=[y0,b0];function x0(e,t){return E(),D("svg",_0,w0)}const E0={name:"carbon-user-speaker",render:x0},S0={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},$0=d("path",{fill:"currentColor",d:"M15 10h2v8h-2zm5 4h2v4h-2zm-10-2h2v6h-2z"},null,-1),k0=d("path",{fill:"currentColor",d:"M25 4h-8V2h-2v2H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8v6h-4v2h10v-2h-4v-6h8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 16H7V6h18Z"},null,-1),O0=[$0,k0];function M0(e,t){return E(),D("svg",S0,O0)}const P0={name:"carbon-presentation-file",render:M0},L0={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},A0=d("path",{fill:"currentColor",d:"M27.307 6.107L30 3.414L28.586 2l-2.693 2.693L24.8 3.6a1.933 1.933 0 0 0-2.8 0l-18 18V28h6.4l18-18a1.933 1.933 0 0 0 0-2.8ZM9.6 26H6v-3.6L23.4 5L27 8.6ZM9 11.586L16.586 4L18 5.414L10.414 13z"},null,-1),C0=[A0];function T0(e,t){return E(),D("svg",L0,C0)}const j0={name:"carbon-pen",render:T0},I0={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},R0=d("path",{fill:"currentColor",d:"m38.2 48.5l58.2 155.2a8 8 0 0 0 15-.1l23.3-64.1a8.1 8.1 0 0 1 4.8-4.8l64.1-23.3a8 8 0 0 0 .1-15L48.5 38.2a8 8 0 0 0-10.3 10.3Z",opacity:".2"},null,-1),F0=d("path",{fill:"currentColor",d:"m150.5 139.2l55.9-20.3a16 16 0 0 0 .1-30L51.3 30.7a16 16 0 0 0-20.6 20.6l58.2 155.2a15.9 15.9 0 0 0 15 10.4h.1a15.9 15.9 0 0 0 14.9-10.5l20.3-55.9l63.1 63.2a8.5 8.5 0 0 0 5.7 2.3a8.3 8.3 0 0 0 5.7-2.3a8.1 8.1 0 0 0 0-11.4Zm-46.6 61.7L45.7 45.7l155.2 58.2l-64.1 23.3a15.7 15.7 0 0 0-9.6 9.6Z"},null,-1),D0=[R0,F0];function N0(e,t){return E(),D("svg",I0,D0)}const V0={name:"ph-cursor-duotone",render:N0},H0={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},z0=d("path",{fill:"currentColor",d:"M213.7 202.3a8.1 8.1 0 0 1 0 11.4a8.3 8.3 0 0 1-5.7 2.3a8.5 8.5 0 0 1-5.7-2.3l-63.1-63.2l-20.3 55.9a15.9 15.9 0 0 1-14.9 10.5h-.1a15.9 15.9 0 0 1-15-10.4L30.7 51.3a16 16 0 0 1 20.6-20.6l155.2 58.2a16 16 0 0 1-.1 30l-55.9 20.3Z"},null,-1),B0=[z0];function U0(e,t){return E(),D("svg",H0,B0)}const ld={name:"ph-cursor-fill",render:U0},q0={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},K0=d("path",{fill:"currentColor",d:"M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6ZM5.394 6.813L6.81 5.399l3.505 3.506L8.9 10.319zM2 15.005h5v2H2zm3.394 10.193L8.9 21.692l1.414 1.414l-3.505 3.506zM15 25.005h2v5h-2zm6.687-1.9l1.414-1.414l3.506 3.506l-1.414 1.414zm3.313-8.1h5v2h-5zm-3.313-6.101l3.506-3.506l1.414 1.414l-3.506 3.506zM15 2.005h2v5h-2z"},null,-1),W0=[K0];function Y0(e,t){return E(),D("svg",q0,W0)}const Z0={name:"carbon-sun",render:Y0},G0={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Q0=d("path",{fill:"currentColor",d:"M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3Z"},null,-1),J0=[Q0];function X0(e,t){return E(),D("svg",G0,J0)}const ey={name:"carbon-moon",render:X0},ty={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},ny=d("path",{fill:"currentColor",d:"M8 4v4H4V4Zm2-2H2v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8ZM8 14v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8ZM8 24v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Z"},null,-1),sy=[ny];function iy(e,t){return E(),D("svg",ty,sy)}const ry={name:"carbon-apps",render:iy},oy={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},ay=d("path",{fill:"currentColor",d:"m18 6l-1.43 1.393L24.15 15H4v2h20.15l-7.58 7.573L18 26l10-10L18 6z"},null,-1),ly=[ay];function cy(e,t){return E(),D("svg",oy,ly)}const uy={name:"carbon-arrow-right",render:cy},dy={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},fy=d("path",{fill:"currentColor",d:"m14 26l1.41-1.41L7.83 17H28v-2H7.83l7.58-7.59L14 6L4 16l10 10z"},null,-1),py=[fy];function hy(e,t){return E(),D("svg",dy,py)}const my={name:"carbon-arrow-left",render:hy},gy={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},vy=d("path",{fill:"currentColor",d:"M20 2v2h6.586L18 12.582L19.414 14L28 5.414V12h2V2H20zm-6 17.416L12.592 18L4 26.586V20H2v10h10v-2H5.414L14 19.416z"},null,-1),_y=[vy];function yy(e,t){return E(),D("svg",gy,_y)}const by={name:"carbon-maximize",render:yy},wy={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},xy=d("path",{fill:"currentColor",d:"M4 18v2h6.586L2 28.582L3.414 30L12 21.414V28h2V18H4zM30 3.416L28.592 2L20 10.586V4h-2v10h10v-2h-6.586L30 3.416z"},null,-1),Ey=[xy];function Sy(e,t){return E(),D("svg",wy,Ey)}const $y={name:"carbon-minimize",render:Sy},ky={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Oy=d("path",{fill:"currentColor",d:"m13 24l-9-9l1.414-1.414L13 21.171L26.586 7.586L28 9L13 24z"},null,-1),My=[Oy];function Py(e,t){return E(),D("svg",ky,My)}const Ly={name:"carbon-checkmark",render:Py},Ay={class:"select-list"},Cy={class:"title"},Ty={class:"items"},jy=["onClick"],Iy=ke({__name:"SelectList",props:{modelValue:{type:[Object,String,Number]},title:{type:String},items:{type:Array}},setup(e,{emit:t}){const n=e;z(Y);const s=Ft(n,"modelValue",t,{passive:!0});return(i,r)=>{const o=Ly;return E(),D("div",Ay,[d("div",Cy,Ln(e.title),1),d("div",Ty,[(E(!0),D(Se,null,Qs(e.items,a=>(E(),D("div",{key:a.value,class:Ie(["item",{active:b(s)===a.value}]),onClick:()=>{var l;s.value=a.value,(l=a.onClick)==null||l.call(a)}},[J(o,{class:Ie(["text-green-500",{"opacity-0":b(s)!==a.value}])},null,8,["class"]),Je(" "+Ln(a.display||a.value),1)],10,jy))),128))])])}}});const Zt=(e,t)=>{const n=e.__vccOpts||e;for(const[s,i]of t)n[s]=i;return n},Ry=Zt(Iy,[["__scopeId","data-v-7dd0eaca"]]),Fy={class:"text-sm"},Dy=ke({__name:"Settings",setup(e){z(Y);const t=[{display:"Fit",value:0},{display:"1:1",value:1}];return(n,s)=>(E(),D("div",Fy,[J(Ry,{modelValue:b(vi),"onUpdate:modelValue":s[0]||(s[0]=i=>we(vi)?vi.value=i:null),title:"Scale",items:t},null,8,["modelValue"])]))}}),Ny={key:0,class:"rounded-md bg-main shadow absolute bottom-10 left-0 z-20","dark:border":"~ gray-400 opacity-10"},Vy=ke({__name:"MenuButton",props:{modelValue:{default:!1},disabled:{default:!1}},setup(e,{emit:t}){const n=e;z(Y);const s=Ft(n,"modelValue",t,{passive:!0}),i=H();return Ym(i,()=>{s.value=!1}),(r,o)=>(E(),D("div",{ref_key:"el",ref:i,class:"flex relative"},[d("button",{class:Ie({disabled:e.disabled}),onClick:o[0]||(o[0]=a=>s.value=!b(s))},[cn(r.$slots,"button",{class:Ie({disabled:e.disabled})})],2),(E(),W(au,null,[b(s)?(E(),D("div",Ny,[cn(r.$slots,"menu")])):fe("v-if",!0)],1024))],512))}}),Hy={class:"w-1px opacity-10 bg-current m-1 lg:m-2"},ui={__name:"VerticalDivider",setup(e){return z(Y),(t,n)=>(E(),D("div",Hy))}},zy={render(){return[]}},By={class:"icon-btn"},Uy={class:"h-40px flex",p:"l-1 t-0.5 r-2",text:"sm leading-2"},qy={class:"my-auto"},Ky={class:"opacity-50"},Wy=ke({__name:"NavControls",props:{persist:{default:!1}},setup(e){const t=e;z(Y);const n=to.smaller("md"),{isFullscreen:s,toggle:i}=Ju,r=k(()=>oo.value?`?password=${oo.value}`:""),o=k(()=>`/presenter/${Be.value}${r.value}`),a=k(()=>`/${Be.value}${r.value}`),l=H(),c=()=>{l.value&&ts.value&&l.value.contains(ts.value)&&ts.value.blur()},u=k(()=>t.persist?"text-$slidev-controls-foreground bg-transparent":"rounded-md bg-main shadow dark:border dark:border-gray-400 dark:border-opacity-10"),f=Lt(),p=Lt();return ds(()=>import("./DrawingControls.b76b2d97.js"),["assets/DrawingControls.b76b2d97.js","assets/DrawingControls.vue_vue_type_script_setup_true_lang.577f3063.js"]).then(h=>p.value=h.default),(h,m)=>{const y=$y,_=by,$=my,x=uy,S=ry,O=ey,I=Z0,C=ld,N=V0,Q=j0,se=P0,pe=$i("RouterLink"),me=E0,Ne=v0,Ve=f0,Fe=o0;return E(),D("nav",{ref_key:"root",ref:l,class:"flex flex-col"},[d("div",{class:Ie(["flex flex-wrap-reverse text-xl gap-0.5 p-1 lg:gap-1 lg:p-2",b(u)]),onMouseleave:c},[b(Ht)?fe("v-if",!0):(E(),D("button",{key:0,class:"icon-btn",onClick:m[0]||(m[0]=(...Le)=>b(i)&&b(i)(...Le))},[b(s)?(E(),W(y,{key:0})):(E(),W(_,{key:1}))])),d("button",{class:Ie(["icon-btn",{disabled:!b(Rx)}]),onClick:m[1]||(m[1]=(...Le)=>b(an)&&b(an)(...Le))},[J($)],2),d("button",{class:Ie(["icon-btn",{disabled:!b(Ix)}]),title:"Next",onClick:m[2]||(m[2]=(...Le)=>b(on)&&b(on)(...Le))},[J(x)],2),b(Ht)?fe("v-if",!0):(E(),D("button",{key:1,class:"icon-btn",title:"Slides overview",onClick:m[3]||(m[3]=Le=>b(Xu)())},[J(S)])),b(ro)?fe("v-if",!0):(E(),D("button",{key:2,class:"icon-btn",title:"Toggle dark mode",onClick:m[4]||(m[4]=Le=>b(rd)())},[b(Ko)?(E(),W(O,{key:0})):(E(),W(I,{key:1}))])),J(ui),b(Ht)?fe("v-if",!0):(E(),D(Se,{key:3},[!b(Rt)&&!b(n)&&b(f)?(E(),D(Se,{key:0},[J(b(f)),J(ui)],64)):fe("v-if",!0),b(Rt)?(E(),D("button",{key:1,class:"icon-btn",title:"Show presenter cursor",onClick:m[5]||(m[5]=Le=>br.value=!b(br))},[b(br)?(E(),W(C,{key:0})):(E(),W(N,{key:1,class:"opacity-50"}))])):fe("v-if",!0)],64)),!b(be).drawings.presenterOnly&&!b(Ht)?(E(),D(Se,{key:4},[d("button",{class:"icon-btn relative",title:"Drawing",onClick:m[6]||(m[6]=Le=>Dt.value=!b(Dt))},[J(Q),b(Dt)?(E(),D("div",{key:0,class:"absolute left-1 right-1 bottom-0 h-0.7 rounded-full",style:nt({background:b(En).color})},null,4)):fe("v-if",!0)]),J(ui)],64)):fe("v-if",!0),b(Ht)?fe("v-if",!0):(E(),D(Se,{key:5},[b(Rt)?(E(),W(pe,{key:0,to:b(a),class:"icon-btn",title:"Play Mode"},{default:ae(()=>[J(se)]),_:1},8,["to"])):fe("v-if",!0),b(Cx)?(E(),W(pe,{key:1,to:b(o),class:"icon-btn",title:"Presenter Mode"},{default:ae(()=>[J(me)]),_:1},8,["to"])):fe("v-if",!0),fe("v-if",!0)],64)),(E(),D(Se,{key:6},[b(be).download?(E(),D("button",{key:0,class:"icon-btn",onClick:m[8]||(m[8]=(...Le)=>b(ao)&&b(ao)(...Le))},[J(Ne)])):fe("v-if",!0)],64)),!b(Rt)&&b(be).info&&!b(Ht)?(E(),D("button",{key:7,class:"icon-btn",onClick:m[9]||(m[9]=Le=>As.value=!b(As))},[J(Ve)])):fe("v-if",!0),!b(Rt)&&!b(Ht)?(E(),W(Vy,{key:8},{button:ae(()=>[d("button",By,[J(Fe)])]),menu:ae(()=>[J(Dy)]),_:1})):fe("v-if",!0),b(Ht)?fe("v-if",!0):(E(),W(ui,{key:9})),d("div",Uy,[d("div",qy,[Je(Ln(b(Be))+" ",1),d("span",Ky,"/ "+Ln(b($d)),1)])]),J(b(zy))],34)],512)}}}),cd={render(){return[]}},ud={render(){return[]}},Yy={key:0,class:"absolute top-0 left-0 right-0 bottom-0 pointer-events-none text-xl"},Zy=ke({__name:"PresenterMouse",setup(e){return z(Y),(t,n)=>{const s=ld;return b(mr).cursor?(E(),D("div",Yy,[J(s,{class:"absolute",style:nt({left:`${b(mr).cursor.x}%`,top:`${b(mr).cursor.y}%`})},null,8,["style"])])):fe("v-if",!0)}}}),Gy=ke({__name:"SlidesShow",props:{context:null},setup(e){z(Y),ue(dt,()=>{var n,s;((n=dt.value)==null?void 0:n.meta)&&dt.value.meta.preload!==!1&&(dt.value.meta.__preloaded=!0),((s=xr.value)==null?void 0:s.meta)&&xr.value.meta.preload!==!1&&(xr.value.meta.__preloaded=!0)},{immediate:!0});const t=Lt();return ds(()=>import("./DrawingLayer.bbbc423e.js"),[]).then(n=>t.value=n.default),(n,s)=>(E(),D(Se,null,[fe(" Global Bottom "),J(b(ud)),fe(" Slides "),(E(!0),D(Se,null,Qs(b(ze),i=>{var r,o;return E(),D(Se,{key:i.path},[((r=i.meta)==null?void 0:r.__preloaded)||i===b(dt)?Ue((E(),W(b(Zo),{key:0,is:i==null?void 0:i.component,clicks:i===b(dt)?b(Pt):0,"clicks-elements":((o=i.meta)==null?void 0:o.__clicksElements)||[],"clicks-disabled":!1,class:Ie(b(Yo)(i)),route:i,context:e.context},null,8,["is","clicks","clicks-elements","class","route","context"])),[[ku,i===b(dt)]]):fe("v-if",!0)],64)}),128)),fe(" Global Top "),J(b(cd)),b(t)?(E(),W(b(t),{key:0})):fe("v-if",!0),b(Rt)?fe("v-if",!0):(E(),W(Zy,{key:1}))],64))}}),Qy=ke({__name:"Play",setup(e){z(Y),I_();const t=H();function n(r){var o;Vl.value||((o=r.target)==null?void 0:o.id)==="slide-container"&&(r.screenX/window.innerWidth>.6?on():an())}Nx(t);const s=k(()=>qv.value||Vl.value);Lt();const i=Lt();return ds(()=>import("./DrawingControls.b76b2d97.js"),["assets/DrawingControls.b76b2d97.js","assets/DrawingControls.vue_vue_type_script_setup_true_lang.577f3063.js"]).then(r=>i.value=r.default),(r,o)=>(E(),D(Se,null,[d("div",{id:"page-root",ref_key:"root",ref:t,class:"grid grid-cols-[1fr_max-content]",style:nt(b(Au))},[J(ad,{class:"w-full h-full",style:nt({background:"var(--slidev-slide-container-background, black)"}),width:b(ta)?b(Pn).width.value:void 0,scale:b(vi),onPointerdown:n},{default:ae(()=>[J(Gy,{context:"slide"})]),controls:ae(()=>[d("div",{class:Ie(["absolute bottom-0 left-0 transition duration-300 opacity-0 hover:opacity-100",[b(s)?"opacity-100 right-0":"opacity-0 p-2",b(Us)?"pointer-events-none":""]])},[J(Wy,{class:"m-auto",persist:b(s)},null,8,["persist"])],2),!b(be).drawings.presenterOnly&&!b(Ht)&&b(i)?(E(),W(b(i),{key:0,class:"ml-0"})):fe("v-if",!0)]),_:1},8,["style","width","scale"]),fe("v-if",!0)],4),J(t0)],64))}});function dd(e){const t=k(()=>e.value.path),n=k(()=>ze.length-1),s=k(()=>parseInt(t.value.split(/\//g).slice(-1)[0])||1),i=k(()=>sr(s.value)),r=k(()=>ze.find(p=>p.path===`${s.value}`)),o=k(()=>{var p,h,m;return(m=(h=(p=r.value)==null?void 0:p.meta)==null?void 0:h.slide)==null?void 0:m.id}),a=k(()=>{var p,h;return(h=(p=r.value)==null?void 0:p.meta)==null?void 0:h.layout}),l=k(()=>ze.find(p=>p.path===`${Math.min(ze.length,s.value+1)}`)),c=k(()=>ze.filter(p=>{var h,m;return(m=(h=p.meta)==null?void 0:h.slide)==null?void 0:m.title}).reduce((p,h)=>(na(p,h),p),[])),u=k(()=>sa(c.value,r.value)),f=k(()=>ia(u.value));return{route:e,path:t,total:n,currentPage:s,currentPath:i,currentRoute:r,currentSlideId:o,currentLayout:a,nextRoute:l,rawTree:c,treeWithActiveStatuses:u,tree:f}}function fd(e,t,n){const s=H(0);Ze(()=>{gt.afterEach(async()=>{await Ze(),s.value+=1})});const i=k(()=>{var l,c;return s.value,((c=(l=t.value)==null?void 0:l.meta)==null?void 0:c.__clicksElements)||[]}),r=k(()=>{var l,c,u;return+((u=(c=(l=t.value)==null?void 0:l.meta)==null?void 0:c.clicks)!=null?u:i.value.length)}),o=k(()=>n.value<ze.length-1||e.value<r.value),a=k(()=>n.value>1||e.value>0);return{clicks:e,clicksElements:i,clicksTotal:r,hasNext:o,hasPrev:a}}const Jy=["id"],Ql=ke({__name:"PrintSlideClick",props:{clicks:null,clicksElements:null,nav:null,route:null},emits:["update:clicksElements"],setup(e,{emit:t}){const n=e,s=Ft(n,"clicksElements",t),i=k(()=>({height:`${Lu}px`,width:`${On}px`})),r=Lt();ds(()=>import("./DrawingPreview.55b59b8a.js"),[]).then(c=>r.value=c.default);const o=k(()=>n.clicks),a=fd(o,n.nav.currentRoute,n.nav.currentPage),l=k(()=>`${n.route.path.toString().padStart(3,"0")}-${(o.value+1).toString().padStart(2,"0")}`);return ft(Y,Ce({nav:{...n.nav,...a},configs:be,themeConfigs:k(()=>be.themeConfig)})),(c,u)=>{var f;return E(),D("div",{id:b(l),class:"slide-container",style:nt(b(i))},[J(b(ud)),J(b(Zo),{is:(f=e.route)==null?void 0:f.component,"clicks-elements":b(s),"onUpdate:clicks-elements":u[0]||(u[0]=p=>we(s)?s.value=p:null),clicks:b(o),"clicks-disabled":!1,class:Ie(b(Yo)(e.route)),route:e.route},null,8,["is","clicks-elements","clicks","class","route"]),b(r)?(E(),W(b(r),{key:0,page:+e.route.path},null,8,["page"])):fe("v-if",!0),J(b(cd))],12,Jy)}}}),Xy=ke({__name:"PrintSlide",props:{route:null},setup(e){var r;const t=e;z(Y);const n=Ce(((r=t.route.meta)==null?void 0:r.__clicksElements)||[]),s=k(()=>t.route),i=dd(s);return(o,a)=>(E(),D(Se,null,[J(Ql,{"clicks-elements":n,"onUpdate:clicks-elements":a[0]||(a[0]=l=>we(n)?n.value=l:null),clicks:0,nav:b(i),route:b(s)},null,8,["clicks-elements","nav","route"]),b(Cs)?fe("v-if",!0):(E(!0),D(Se,{key:0},Qs(n.length,l=>(E(),W(Ql,{key:l,clicks:l,nav:b(i),route:b(s)},null,8,["clicks","nav","route"]))),128))],64))}}),e1={id:"print-content"},t1=ke({__name:"PrintContainer",props:{width:null},setup(e){const t=e;z(Y);const n=k(()=>t.width),s=k(()=>t.width/rn),i=k(()=>n.value/s.value),r=k(()=>i.value<rn?n.value/On:s.value*rn/On),o=ze.slice(0,-1),a=k(()=>({"select-none":!be.selectable,"slidev-code-line-numbers":be.lineNumbers}));return ft(Pu,r),(l,c)=>(E(),D("div",{id:"print-container",class:Ie(b(a))},[d("div",e1,[(E(!0),D(Se,null,Qs(b(o),u=>(E(),W(Xy,{key:u.path,route:u},null,8,["route"]))),128))]),cn(l.$slots,"controls")],2))}});const n1=ke({__name:"Print",setup(e){z(Y);const t=xn.canvasWidth,n=Math.round(t/xn.aspectRatio)+1;function s(i,{slots:r}){if(r.default)return ht("style",r.default())}return Zi(()=>{ta?document.body.parentNode.classList.add("print"):document.body.parentNode.classList.remove("print")}),(i,r)=>(E(),D(Se,null,[J(s,null,{default:ae(()=>[Je(" @page { size: "+Ln(b(t))+"px "+Ln(n)+"px; margin: 0px; } ",1)]),_:1}),d("div",{id:"page-root",class:"grid grid-cols-[1fr_max-content]",style:nt(b(Au))},[J(t1,{class:"w-full h-full",style:nt({background:"var(--slidev-slide-container-background, black)"}),width:b(Pn).width.value},null,8,["style","width"])],4)],64))}});const s1={class:"slidev-layout end"},i1={__name:"end",setup(e){return z(Y),(t,n)=>(E(),D("div",s1," END "))}},r1=Zt(i1,[["__scopeId","data-v-ab32435f"]]);function Jl(e){return e.startsWith("/")?"/ML_presentation/"+e.slice(1):e}function o1(e,t=!1){const n=e&&e[0]==="#"&&e.startsWith("rgb"),s={background:n?e:void 0,color:e&&!n?"white":void 0,backgroundImage:n?void 0:e?t?`linear-gradient(#0005, #0008), url(${Jl(e)})`:`url("${Jl(e)}")`:void 0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"};return s.background||delete s.background,s}const a1={class:"grid grid-cols-2 w-full h-full"},fn=ke({__name:"image-right",props:{image:{type:String},class:{type:String}},setup(e){const t=e;z(Y);const n=k(()=>o1(t.image));return(s,i)=>(E(),D("div",a1,[d("div",{class:Ie(["slidev-layout default",t.class])},[cn(s.$slots,"default")],2),d("div",{class:"w-full w-full",style:nt(b(n))},null,4)]))}}),l1=d("h1",null,"My Experience using DallE and Stable Difusion",-1),c1={__name:"1",setup(e){const t={theme:"default",image:"./cover.jpg",layout:"image-right",class:"text-center",highlighter:"shiki",lineNumbers:!1,info:`## Slidev Starter Template
Presentation slides for developers.

Learn more at [Sli.dev](https://sli.dev)
`,drawings:{persist:!1},css:"unocss"};return z(Y),(n,s)=>(E(),W(fn,xe(ye(t)),{default:ae(()=>[l1]),_:1},16))}},u1=d("h1",null,"What are we talking about?",-1),d1=Je("Machine learning models used to generate digital images"),f1=[d1],p1=Je("Machine learning model: a program trained on large datasets that can find patterns or make decisions on new data."),h1=[p1],m1=Je("DallE, stable diffusion, disco diffusion, midjourney, etc are all models built for similar tasks"),g1=[m1],v1={__name:"2",setup(e){const t={layout:"image-right",image:"./wawta.jpg"};return z(Y),(n,s)=>{const i=Yt("click");return E(),W(fn,xe(ye(t)),{default:ae(()=>[u1,d("ul",null,[Ue((E(),D("li",null,f1)),[[i]]),Ue((E(),D("li",null,h1)),[[i]]),Ue((E(),D("li",null,g1)),[[i]])])]),_:1},16)}}},_1=d("h1",null,"What can they do?",-1),y1={__name:"3",setup(e){const t={layout:"image-right",image:"./wctd.jpg"};return z(Y),(n,s)=>(E(),W(fn,xe(ye(t)),{default:ae(()=>[_1]),_:1},16))}},b1=d("h1",null,"txt2img",-1),w1=Je(" text to image involves creating an input prompt in natural language that the model will try to interpret to generate an image "),x1=[w1],E1={__name:"4",setup(e){const t={layout:"image-right",image:"./txt2img.jpg"};return z(Y),(n,s)=>{const i=Yt("click");return E(),W(fn,xe(ye(t)),{default:ae(()=>[b1,d("ul",null,[Ue((E(),D("li",null,x1)),[[i]])])]),_:1},16)}}},S1="/ML_presentation/txt2img/motorcycle1.png",$1="/ML_presentation/txt2img/motorcycle2.png",k1="/ML_presentation/txt2img/motorcycle3.png",O1={class:"slidev-layout default"},Re={__name:"default",setup(e){return z(Y),(t,n)=>(E(),D("div",O1,[cn(t.$slots,"default")]))}},M1=d("h1",null,"Some samples",-1),P1=d("h4",null,"DallE txt2img: a motorcycle on a tree in the style of Salvador Dal\xED ",-1),L1=d("br",null,null,-1),A1=d("div",{class:"grid grid-cols-3 grid-rows-2 gap-2"},[d("div",null,[d("img",{src:S1,class:"rounded shadow"})]),d("div",null,[d("img",{src:$1,class:"rounded shadow"})]),d("div",null,[d("img",{src:k1,class:"rounded shadow"})])],-1),C1=[A1],T1={__name:"5",setup(e){const t={};return z(Y),(n,s)=>{const i=Yt("click");return E(),W(Re,xe(ye(t)),{default:ae(()=>[M1,P1,L1,Ue((E(),D("div",null,C1)),[[i]])]),_:1},16)}}},j1="/ML_presentation/txt2img/godzilla.png",I1="/ML_presentation/txt2img/godzilla2.png",R1="/ML_presentation/txt2img/godzilla3.png",F1=d("h1",null,"Some samples",-1),D1=d("h4",null,"DallE txt2img: a japanese woodprint of Godzilla in a city",-1),N1=d("br",null,null,-1),V1=d("div",{class:"grid grid-cols-3 grid-rows-2 gap-2"},[d("div",null,[d("img",{src:j1,class:"rounded shadow"})]),d("div",null,[d("img",{src:I1,class:"rounded shadow"})]),d("div",null,[d("img",{src:R1,class:"rounded shadow"})])],-1),H1=[V1],z1={__name:"6",setup(e){const t={};return z(Y),(n,s)=>{const i=Yt("click");return E(),W(Re,xe(ye(t)),{default:ae(()=>[F1,D1,N1,Ue((E(),D("div",null,H1)),[[i]])]),_:1},16)}}},B1="/ML_presentation/txt2img/monkey3.jpg",U1="/ML_presentation/txt2img/monkey6.jpg",q1="/ML_presentation/txt2img/monkey7.jpg",K1=d("h1",null,"Some samples",-1),W1=d("h4",null,"Stable Diffusion txt2img: a monkey riding a giraffe, photograph",-1),Y1=d("br",null,null,-1),Z1=d("div",{class:"grid grid-cols-3 grid-rows-2 gap-2"},[d("div",null,[d("img",{src:B1,class:"rounded shadow"})]),d("div",null,[d("img",{src:U1,class:"rounded shadow"})]),d("div",null,[d("img",{src:q1,class:"rounded shadow"})])],-1),G1=[Z1],Q1={__name:"7",setup(e){const t={};return z(Y),(n,s)=>{const i=Yt("click");return E(),W(Re,xe(ye(t)),{default:ae(()=>[K1,W1,Y1,Ue((E(),D("div",null,G1)),[[i]])]),_:1},16)}}},J1="/ML_presentation/txt2img/einstein1.jpg",X1="/ML_presentation/txt2img/einstein2.jpg",eb="/ML_presentation/txt2img/einstein3.jpg",tb=d("h1",null,"Some samples",-1),nb=d("h4",null,"Stable Diffusion txt2img: Albert Einstein wearing sunglasses driving a sports car, photograph",-1),sb=d("br",null,null,-1),ib=d("div",{class:"grid grid-cols-3 grid-rows-2 gap-2"},[d("div",null,[d("img",{src:J1,class:"rounded shadow"})]),d("div",null,[d("img",{src:X1,class:"rounded shadow"})]),d("div",null,[d("img",{src:eb,class:"rounded shadow"})])],-1),rb=[ib],ob={__name:"8",setup(e){const t={};return z(Y),(n,s)=>{const i=Yt("click");return E(),W(Re,xe(ye(t)),{default:ae(()=>[tb,nb,sb,Ue((E(),D("div",null,rb)),[[i]])]),_:1},16)}}},ab=d("h1",null,"img2img",-1),lb=Je(" image to image allows giving the model a starting image "),cb=[lb],ub={__name:"9",setup(e){const t={layout:"image-right",image:"./img2img.jpg"};return z(Y),(n,s)=>{const i=Yt("click");return E(),W(fn,xe(ye(t)),{default:ae(()=>[ab,d("ul",null,[Ue((E(),D("li",null,cb)),[[i]])])]),_:1},16)}}},pd="/ML_presentation/img2img/samurai_original.jpg",db=d("h1",null,"Some samples",-1),fb=d("h4",null,"DallE image variations",-1),pb=d("br",null,null,-1),hb=d("div",{class:"grid grid-cols-4 gap-2"},[d("div",null,[d("img",{src:pd,"h-50":"","w-50":"",class:"rounded shadow"}),d("span",null,"original")])],-1),mb={__name:"10",setup(e){const t={};return z(Y),(n,s)=>(E(),W(Re,xe(ye(t)),{default:ae(()=>[db,fb,pb,hb]),_:1},16))}},gb="/ML_presentation/img2img/samurai1.png",vb="/ML_presentation/img2img/samurai2.png",_b="/ML_presentation/img2img/samurai3.png",yb=d("h1",null,"Some samples",-1),bb=d("h4",null,"DallE image variations",-1),wb=d("br",null,null,-1),xb=d("div",{class:"grid grid-cols-4 gap-2"},[d("div",null,[d("img",{src:pd,"h-50":"","w-50":"",class:"rounded shadow"}),d("span",null,"original")]),d("div",null,[d("img",{src:gb,"h-50":"",class:"rounded shadow"}),d("span",null,"variation")]),d("div",null,[d("img",{src:vb,"h-50":"",class:"rounded shadow"}),d("span",null,"variation")]),d("div",null,[d("img",{src:_b,"h-50":"",class:"rounded shadow"}),d("span",null,"variation")])],-1),Eb={__name:"11",setup(e){const t={};return z(Y),(n,s)=>(E(),W(Re,xe(ye(t)),{default:ae(()=>[yb,bb,wb,xb]),_:1},16))}},hd="/ML_presentation/img2img/manonwire_original.jpg",Sb=d("h1",null,"Some samples",-1),$b=d("h4",null,"DallE image variations",-1),kb=d("br",null,null,-1),Ob=d("div",{class:"grid grid-cols-4 gap-2"},[d("div",null,[d("img",{src:hd,"h-50":"","w-50":"",class:"rounded shadow"}),d("span",null,"original")])],-1),Mb={__name:"12",setup(e){const t={};return z(Y),(n,s)=>(E(),W(Re,xe(ye(t)),{default:ae(()=>[Sb,$b,kb,Ob]),_:1},16))}},Pb="/ML_presentation/img2img/manonwire1.png",Lb="/ML_presentation/img2img/manonwire2.png",Ab="/ML_presentation/img2img/manonwire3.png",Cb=d("h1",null,"Some samples",-1),Tb=d("h4",null,"DallE image variations",-1),jb=d("br",null,null,-1),Ib=d("div",{class:"grid grid-cols-4 gap-2"},[d("div",null,[d("img",{src:hd,"h-50":"","w-50":"",class:"rounded shadow"}),d("span",null,"original")]),d("div",null,[d("img",{src:Pb,"h-50":"",class:"rounded shadow"}),d("span",null,"variation")]),d("div",null,[d("img",{src:Lb,"h-50":"",class:"rounded shadow"}),d("span",null,"variation")]),d("div",null,[d("img",{src:Ab,"h-50":"",class:"rounded shadow"}),d("span",null,"variation")])],-1),Rb={__name:"13",setup(e){const t={};return z(Y),(n,s)=>(E(),W(Re,xe(ye(t)),{default:ae(()=>[Cb,Tb,jb,Ib]),_:1},16))}},md="/ML_presentation/img2img/arci_original.jpg",Fb=d("h1",null,"Some samples",-1),Db=d("h4",null,"Stable Diffusion img2img: portrait of man made of vegetables and fruit in the style of Arcimboldo",-1),Nb=d("div",{class:"grid grid-cols-4 gap-2"},[d("div",null,[d("img",{src:md,"h-50":"","w-50":"",class:"rounded shadow"}),d("span",null,"original")])],-1),Vb={__name:"14",setup(e){const t={};return z(Y),(n,s)=>(E(),W(Re,xe(ye(t)),{default:ae(()=>[Fb,Db,Nb]),_:1},16))}},Hb="/ML_presentation/img2img/arci1.png",zb="/ML_presentation/img2img/arci2.png",Bb="/ML_presentation/img2img/arci3.png",Ub="/ML_presentation/img2img/arci4.jpg",qb="/ML_presentation/img2img/arci5.png",Kb="/ML_presentation/img2img/arci6.png",Wb="/ML_presentation/img2img/arci7.png",Yb=d("h1",null,"Some samples",-1),Zb=d("h4",null,"Stable Diffusion img2img: portrait of man made of vegetables and fruit in the style of Arcimboldo",-1),Gb=d("div",{class:"grid grid-cols-4 gap-2"},[d("div",null,[d("img",{src:md,"h-50":"","w-50":"",class:"rounded shadow"}),d("span",null,"original")]),d("div",null,[d("img",{src:Hb,"h-50":"",class:"rounded shadow"}),d("span",null,"variation")]),d("div",null,[d("img",{src:zb,"h-50":"",class:"rounded shadow"}),d("span",null,"variation")]),d("div",null,[d("img",{src:Bb,"h-50":"",class:"rounded shadow"}),d("span",null,"variation")])],-1),Qb=d("div",{class:"grid grid-cols-4 gap-2"},[d("div",null,[d("img",{src:Ub,"h-50":"","w-50":"",class:"rounded shadow"}),d("span",null,"original")]),d("div",null,[d("img",{src:qb,"h-50":"",class:"rounded shadow"}),d("span",null,"variation")]),d("div",null,[d("img",{src:Kb,"h-50":"",class:"rounded shadow"}),d("span",null,"variation")]),d("div",null,[d("img",{src:Wb,"h-50":"",class:"rounded shadow"}),d("span",null,"variation")])],-1),Jb={__name:"15",setup(e){const t={};return z(Y),(n,s)=>(E(),W(Re,xe(ye(t)),{default:ae(()=>[Yb,Zb,Gb,Qb]),_:1},16))}},Xb=d("h1",null,"Inpainting",-1),ew=Je(" inpainting allows editing a masked selection of a source image "),tw=[ew],nw={__name:"16",setup(e){const t={layout:"image-right",image:"./inpainting.jpg"};return z(Y),(n,s)=>{const i=Yt("click");return E(),W(fn,xe(ye(t)),{default:ae(()=>[Xb,d("ul",null,[Ue((E(),D("li",null,tw)),[[i]])])]),_:1},16)}}},gd="/ML_presentation/inpainting/hamster_original.png",vd="/ML_presentation/inpainting/hamster_mask.png",sw=d("h1",null,"Some samples",-1),iw=d("h4",null,"DallE inpainting",-1),rw=d("br",null,null,-1),ow=d("div",{class:"grid grid-cols-4 gap-2"},[d("div",null,[d("img",{src:gd,"h-50":"","w-50":"",class:"rounded shadow"}),d("span",null,"original")]),d("div",null,[d("img",{src:vd,"h-50":"",class:"rounded shadow"}),d("span",null,"mask")])],-1),aw={__name:"17",setup(e){const t={};return z(Y),(n,s)=>(E(),W(Re,xe(ye(t)),{default:ae(()=>[sw,iw,rw,ow]),_:1},16))}},lw="/ML_presentation/inpainting/hamster1.png",cw="/ML_presentation/inpainting/hamster2.png",uw=d("h1",null,"Some samples",-1),dw=d("h4",null,"DallE inpainting",-1),fw=d("br",null,null,-1),pw=d("div",{class:"grid grid-cols-4 gap-2"},[d("div",null,[d("img",{src:gd,"h-50":"","w-50":"",class:"rounded shadow"}),d("span",null,"original")]),d("div",null,[d("img",{src:vd,"h-50":"",class:"rounded shadow"}),d("span",null,"mask")]),d("div",null,[d("img",{src:lw,"h-50":"",class:"rounded shadow"}),d("span",null,"a hamster ")]),d("div",null,[d("img",{src:cw,"h-50":"",class:"rounded shadow"}),d("span",null,"a hamster ")])],-1),hw={__name:"18",setup(e){const t={};return z(Y),(n,s)=>(E(),W(Re,xe(ye(t)),{default:ae(()=>[uw,dw,fw,pw]),_:1},16))}},_d="/ML_presentation/inpainting/flag_original.jpg",yd="/ML_presentation/inpainting/flag_mask.png",mw=d("h1",null,"Some samples",-1),gw=d("h4",null,"DallE inpainting",-1),vw=d("br",null,null,-1),_w=d("div",{class:"grid grid-cols-4 gap-2"},[d("div",null,[d("img",{src:_d,"h-50":"","w-50":"",class:"rounded shadow"}),d("span",null,"original")]),d("div",null,[d("img",{src:yd,"h-50":"",class:"rounded shadow"}),d("span",null,"mask")])],-1),yw={__name:"19",setup(e){const t={};return z(Y),(n,s)=>(E(),W(Re,xe(ye(t)),{default:ae(()=>[mw,gw,vw,_w]),_:1},16))}},bw="/ML_presentation/inpainting/flag1.png",ww="/ML_presentation/inpainting/flag2.png",xw=d("h1",null,"Some samples",-1),Ew=d("h4",null,"DallE inpainting",-1),Sw=d("br",null,null,-1),$w=d("div",{class:"grid grid-cols-4 gap-2"},[d("div",null,[d("img",{src:_d,"h-50":"","w-50":"",class:"rounded shadow"}),d("span",null,"original")]),d("div",null,[d("img",{src:yd,"h-50":"",class:"rounded shadow"}),d("span",null,"mask")]),d("div",null,[d("img",{src:bw,"h-50":"",class:"rounded shadow"}),d("span",null,"a peace flag ")]),d("div",null,[d("img",{src:ww,"h-50":"",class:"rounded shadow"}),d("span",null,"a peace flag waving, realistic photograph, high detail ")])],-1),kw={__name:"20",setup(e){const t={};return z(Y),(n,s)=>(E(),W(Re,xe(ye(t)),{default:ae(()=>[xw,Ew,Sw,$w]),_:1},16))}},Ow=d("h1",null,"Limitations",-1),Mw=Je(" faces, hands, text "),Pw=[Mw],Lw=Je(" output only as good as the input (input prompt *and* training data set ) "),Aw=[Lw],Cw=Je(" difficult to get consistent results "),Tw=[Cw],jw=Je(" DallE: "),Iw=d("ul",null,[d("li",null,"15 credits per month, 4 images per credit"),d("li",null,"content filters"),d("li",null,"closed source")],-1),Rw=[jw,Iw],Fw=Je(" Stable Diffusion: if running locally only as strong/fast as your GPU "),Dw=[Fw],Nw={__name:"21",setup(e){const t={layout:"image-right",image:"./limitations.jpg"};return z(Y),(n,s)=>{const i=Yt("click");return E(),W(fn,xe(ye(t)),{default:ae(()=>[Ow,d("ul",null,[Ue((E(),D("li",null,Pw)),[[i]]),Ue((E(),D("li",null,Aw)),[[i]]),Ue((E(),D("li",null,Tw)),[[i]]),Ue((E(),D("li",null,Rw)),[[i]]),Ue((E(),D("li",null,Dw)),[[i]])])]),_:1},16)}}},Vw="/ML_presentation/videos/original.mp4",Hw="/ML_presentation/videos/strength2.mp4",zw="/ML_presentation/videos/sameseed.mp4",Bw="/ML_presentation/videos/sameseedchangedimm.mp4",Uw=d("h1",null,"Experimenting with different settings",-1),qw=d("div",{style:{display:"flex","justfy-content":"space-between"}},[d("div",{style:{padding:"8px"}},[d("video",{autoplay:"",loop:"",width:"180",height:"180",controls:""},[d("source",{src:Vw,type:"video/mp4"})]),d("span",{style:{"font-size":"8px",display:"flex"}}," original, 4fps ")]),d("div",{style:{padding:"8px"}},[d("video",{autoplay:"",loop:"",width:"180",height:"180",controls:""},[d("source",{src:Hw,type:"video/mp4"})]),d("span",{style:{"font-size":"8px",display:"flex"}}," standard settings, input prompt: futuristic, increasing strength by 10 on each loop ")]),d("div",{style:{padding:"8px"}},[d("video",{autoplay:"",loop:"",width:"180",height:"180",controls:""},[d("source",{src:zw,type:"video/mp4"})]),d("span",{style:{"font-size":"8px",display:"flex"}}," same seed number, input prompt: futuristic, increasing strength by 10 on each loop ")]),d("div",{style:{padding:"8px"}},[d("video",{autoplay:"",loop:"",width:"180",height:"180",controls:""},[d("source",{src:Bw,type:"video/mp4"})]),d("span",{style:{"font-size":"8px",display:"flex"}}," same seed number, input prompt: futuristic, increasing ddim by 10 on each loop ")])],-1),Kw={__name:"22",setup(e){const t={};return z(Y),(n,s)=>(E(),W(Re,xe(ye(t)),{default:ae(()=>[Uw,qw]),_:1},16))}},Ww=d("h1",null,"FAILS",-1),Yw={__name:"23",setup(e){const t={layout:"image-right",image:"./fails.jpg"};return z(Y),(n,s)=>(E(),W(fn,xe(ye(t)),{default:ae(()=>[Ww]),_:1},16))}},Dn="/ML_presentation/fails/arci.jpg";const bd=e=>(Tn("data-v-ead41316"),e=e(),jn(),e),Zw=bd(()=>d("h1",null,"FAILS",-1)),Gw=bd(()=>d("div",{class:"grid grid-cols-4 gap-2"},[d("div",null,[d("img",{src:Dn,"h-50":"","w-50":"",class:"rounded shadow"}),d("span",{class:"label"},"portrait of man made of vegetables and fruit in the style of Arcimboldo")])],-1)),Qw={__name:"24",setup(e){const t={};return z(Y),(n,s)=>(E(),W(Re,xe(ye(t)),{default:ae(()=>[Zw,Gw]),_:1},16))}},Jw=Zt(Qw,[["__scopeId","data-v-ead41316"]]),ps="/ML_presentation/fails/monkey.jpg",hs="/ML_presentation/fails/monkey2.jpg";const wd=e=>(Tn("data-v-a86da383"),e=e(),jn(),e),Xw=wd(()=>d("h1",null,"FAILS",-1)),ex=wd(()=>d("div",{class:"grid grid-cols-4 gap-2"},[d("div",null,[d("img",{src:Dn,"h-50":"","w-50":"",class:"rounded shadow"}),d("span",{class:"label"},"portrait of man made of vegetables and fruit in the style of Arcimboldo")]),d("div",null,[d("img",{src:ps,"h-50":"",class:"rounded shadow"}),d("span",{class:"label"},"a monkey riding a giraffe")]),d("div",null,[d("img",{src:hs,"h-50":"",class:"rounded shadow"}),d("span",{class:"label"},"a monkey riding a giraffe")])],-1)),tx={__name:"25",setup(e){const t={};return z(Y),(n,s)=>(E(),W(Re,xe(ye(t)),{default:ae(()=>[Xw,ex]),_:1},16))}},nx=Zt(tx,[["__scopeId","data-v-a86da383"]]),Js="/ML_presentation/fails/nosferatu.png";const xd=e=>(Tn("data-v-909e56ee"),e=e(),jn(),e),sx=xd(()=>d("h1",null,"FAILS",-1)),ix=xd(()=>d("div",{class:"grid grid-cols-4 gap-2"},[d("div",null,[d("img",{src:Dn,"h-50":"","w-50":"",class:"rounded shadow"}),d("span",{class:"label"},"portrait of man made of vegetables and fruit in the style of Arcimboldo")]),d("div",null,[d("img",{src:ps,"h-50":"",class:"rounded shadow"}),d("span",{class:"label"},"a monkey riding a giraffe")]),d("div",null,[d("img",{src:hs,"h-50":"",class:"rounded shadow"}),d("span",{class:"label"},"a monkey riding a giraffe")]),d("div",null,[d("img",{src:Js,"h-50":"",class:"rounded shadow"}),d("span",{class:"label"},"nosferatu dancing in a club, award winning photography")])],-1)),rx={__name:"26",setup(e){const t={};return z(Y),(n,s)=>(E(),W(Re,xe(ye(t)),{default:ae(()=>[sx,ix]),_:1},16))}},ox=Zt(rx,[["__scopeId","data-v-909e56ee"]]),nr="/ML_presentation/fails/painter.png";const Go=e=>(Tn("data-v-0df04300"),e=e(),jn(),e),ax=Go(()=>d("h1",null,"FAILS",-1)),lx=Go(()=>d("div",{class:"grid grid-cols-4 gap-2"},[d("div",null,[d("img",{src:Dn,"h-50":"","w-50":"",class:"rounded shadow"}),d("span",{class:"label"},"portrait of man made of vegetables and fruit in the style of Arcimboldo")]),d("div",null,[d("img",{src:ps,"h-50":"",class:"rounded shadow"}),d("span",{class:"label"},"a monkey riding a giraffe")]),d("div",null,[d("img",{src:hs,"h-50":"",class:"rounded shadow"}),d("span",{class:"label"},"a monkey riding a giraffe")]),d("div",null,[d("img",{src:Js,"h-50":"",class:"rounded shadow"}),d("span",{class:"label"},"nosferatu dancing in a club, award winning photography")])],-1)),cx=Go(()=>d("div",{class:"grid grid-cols-4 gap-2"},[d("div",null,[d("img",{src:nr,"h-50":"","w-50":"",class:"rounded shadow"}),d("span",{class:"label"},"painter painting himself")])],-1)),ux={__name:"27",setup(e){const t={};return z(Y),(n,s)=>(E(),W(Re,xe(ye(t)),{default:ae(()=>[ax,lx,cx]),_:1},16))}},dx=Zt(ux,[["__scopeId","data-v-0df04300"]]),Qo="/ML_presentation/fails/einstein.png";const Jo=e=>(Tn("data-v-7c58cd4b"),e=e(),jn(),e),fx=Jo(()=>d("h1",null,"FAILS",-1)),px=Jo(()=>d("div",{class:"grid grid-cols-4 gap-2"},[d("div",null,[d("img",{src:Dn,"h-50":"","w-50":"",class:"rounded shadow"}),d("span",{class:"label"},"portrait of man made of vegetables and fruit in the style of Arcimboldo")]),d("div",null,[d("img",{src:ps,"h-50":"",class:"rounded shadow"}),d("span",{class:"label"},"a monkey riding a giraffe")]),d("div",null,[d("img",{src:hs,"h-50":"",class:"rounded shadow"}),d("span",{class:"label"},"a monkey riding a giraffe")]),d("div",null,[d("img",{src:Js,"h-50":"",class:"rounded shadow"}),d("span",{class:"label"},"nosferatu dancing in a club, award winning photography")])],-1)),hx=Jo(()=>d("div",{class:"grid grid-cols-4 gap-2"},[d("div",null,[d("img",{src:nr,"h-50":"","w-50":"",class:"rounded shadow"}),d("span",{class:"label"},"painter painting himself")]),d("div",null,[d("img",{src:Qo,"h-50":"",class:"rounded shadow"}),d("span",{class:"label"},"albert einstein and winnie the pooh on a boat, photorealistic")])],-1)),mx={__name:"28",setup(e){const t={};return z(Y),(n,s)=>(E(),W(Re,xe(ye(t)),{default:ae(()=>[fx,px,hx]),_:1},16))}},gx=Zt(mx,[["__scopeId","data-v-7c58cd4b"]]),Ed="/ML_presentation/fails/maneatingmoney.png";const Xo=e=>(Tn("data-v-f5f18860"),e=e(),jn(),e),vx=Xo(()=>d("h1",null,"FAILS",-1)),_x=Xo(()=>d("div",{class:"grid grid-cols-4 gap-2"},[d("div",null,[d("img",{src:Dn,"h-50":"","w-50":"",class:"rounded shadow"}),d("span",{class:"label"},"portrait of man made of vegetables and fruit in the style of Arcimboldo")]),d("div",null,[d("img",{src:ps,"h-50":"",class:"rounded shadow"}),d("span",{class:"label"},"a monkey riding a giraffe")]),d("div",null,[d("img",{src:hs,"h-50":"",class:"rounded shadow"}),d("span",{class:"label"},"a monkey riding a giraffe")]),d("div",null,[d("img",{src:Js,"h-50":"",class:"rounded shadow"}),d("span",{class:"label"},"nosferatu dancing in a club, award winning photography")])],-1)),yx=Xo(()=>d("div",{class:"grid grid-cols-4 gap-2"},[d("div",null,[d("img",{src:nr,"h-50":"","w-50":"",class:"rounded shadow"}),d("span",{class:"label"},"painter painting himself")]),d("div",null,[d("img",{src:Qo,"h-50":"",class:"rounded shadow"}),d("span",{class:"label"},"albert einstein and winnie the pooh on a boat, photorealistic")]),d("div",null,[d("img",{src:Ed,"h-50":"",class:"rounded shadow"}),d("span",{class:"label"},"man eating money, photograph")])],-1)),bx={__name:"29",setup(e){const t={};return z(Y),(n,s)=>(E(),W(Re,xe(ye(t)),{default:ae(()=>[vx,_x,yx]),_:1},16))}},wx=Zt(bx,[["__scopeId","data-v-f5f18860"]]),xx="/ML_presentation/fails/marx.jpg";const ea=e=>(Tn("data-v-64a1ba54"),e=e(),jn(),e),Ex=ea(()=>d("h1",null,"FAILS",-1)),Sx=ea(()=>d("div",{class:"grid grid-cols-4 gap-2"},[d("div",null,[d("img",{src:Dn,"h-50":"","w-50":"",class:"rounded shadow"}),d("span",{class:"label"},"portrait of man made of vegetables and fruit in the style of Arcimboldo")]),d("div",null,[d("img",{src:ps,"h-50":"",class:"rounded shadow"}),d("span",{class:"label"},"a monkey riding a giraffe")]),d("div",null,[d("img",{src:hs,"h-50":"",class:"rounded shadow"}),d("span",{class:"label"},"a monkey riding a giraffe")]),d("div",null,[d("img",{src:Js,"h-50":"",class:"rounded shadow"}),d("span",{class:"label"},"nosferatu dancing in a club, award winning photography")])],-1)),$x=ea(()=>d("div",{class:"grid grid-cols-4 gap-2"},[d("div",null,[d("img",{src:nr,"h-50":"","w-50":"",class:"rounded shadow"}),d("span",{class:"label"},"painter painting himself")]),d("div",null,[d("img",{src:Qo,"h-50":"",class:"rounded shadow"}),d("span",{class:"label"},"albert einstein and winnie the pooh on a boat, photorealistic")]),d("div",null,[d("img",{src:Ed,"h-50":"",class:"rounded shadow"}),d("span",{class:"label"},"man eating money, photograph")]),d("div",null,[d("img",{src:xx,"h-50":"",class:"rounded shadow"}),d("span",{class:"label"},"karl marx as a hamster")])],-1)),kx={__name:"30",setup(e){const t={};return z(Y),(n,s)=>(E(),W(Re,xe(ye(t)),{default:ae(()=>[Ex,Sx,$x]),_:1},16))}},Ox=Zt(kx,[["__scopeId","data-v-64a1ba54"]]),Mx=[{path:"1",name:"page-1",component:c1,meta:{theme:"default",image:"./cover.jpg",layout:"image-right",class:"text-center",highlighter:"shiki",lineNumbers:!1,info:`## Slidev Starter Template
Presentation slides for developers.

Learn more at [Sli.dev](https://sli.dev)
`,drawings:{persist:!1},css:"unocss",title:"My Experience using DallE and Stable Difusion",slide:{raw:`---
# try also 'default' to start simple
theme: default
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
image: './cover.jpg'
layout: image-right

# apply any windi css classes to the current slide
class: 'text-center'
# https://sli.dev/custom/highlighters.html
highlighter: shiki
# show line numbers in code blocks
lineNumbers: false
# some information about the slides, markdown enabled
info: |
  ## Slidev Starter Template
  Presentation slides for developers.

  Learn more at [Sli.dev](https://sli.dev)
# persist drawings in exports and build
drawings:
  persist: false
# use UnoCSS
css: unocss
---

# My Experience using DallE and Stable Difusion
`,title:"My Experience using DallE and Stable Difusion",level:1,content:"# My Experience using DallE and Stable Difusion",frontmatter:{theme:"default",image:"./cover.jpg",layout:"image-right",class:"text-center",highlighter:"shiki",lineNumbers:!1,info:`## Slidev Starter Template
Presentation slides for developers.

Learn more at [Sli.dev](https://sli.dev)
`,drawings:{persist:!1},css:"unocss",title:"My Experience using DallE and Stable Difusion"},index:0,start:0,end:29,notesHTML:"",filepath:"/home/runner/work/ML_presentation/ML_presentation/slides.md",id:0,no:1},__clicksElements:[],__preloaded:!1}},{path:"2",name:"page-2",component:v1,meta:{layout:"image-right",image:"./wawta.jpg",slide:{raw:`---
layout: image-right
image: './wawta.jpg'
---

# What are we talking about?

<ul>
  <li v-click>Machine learning models used to generate digital images</li> 
<li v-click>Machine learning model: a program trained on large datasets that can find patterns or make decisions on new data.</li>
<li v-click>DallE, stable diffusion, disco diffusion, midjourney, etc are all models built for similar tasks</li>
</ul>
`,title:"What are we talking about?",level:1,content:`# What are we talking about?

<ul>
  <li v-click>Machine learning models used to generate digital images</li> 
<li v-click>Machine learning model: a program trained on large datasets that can find patterns or make decisions on new data.</li>
<li v-click>DallE, stable diffusion, disco diffusion, midjourney, etc are all models built for similar tasks</li>
</ul>`,frontmatter:{layout:"image-right",image:"./wawta.jpg"},index:1,start:29,end:42,notesHTML:"",filepath:"/home/runner/work/ML_presentation/ML_presentation/slides.md",id:1,no:2},__clicksElements:[],__preloaded:!1}},{path:"3",name:"page-3",component:y1,meta:{layout:"image-right",image:"./wctd.jpg",slide:{raw:`---
layout: image-right
image: './wctd.jpg'
---

# What can they do? 
`,title:"What can they do?",level:1,content:"# What can they do?",frontmatter:{layout:"image-right",image:"./wctd.jpg"},index:2,start:42,end:49,notesHTML:"",filepath:"/home/runner/work/ML_presentation/ML_presentation/slides.md",id:2,no:3},__clicksElements:[],__preloaded:!1}},{path:"4",name:"page-4",component:E1,meta:{layout:"image-right",image:"./txt2img.jpg",slide:{raw:`---
layout: image-right
image: './txt2img.jpg'
---
# txt2img
<ul>
<li v-click> text to image involves creating an input prompt in natural language that the model will try to interpret to generate an image </li>
</ul>`,title:"txt2img",level:1,content:`# txt2img
<ul>
<li v-click> text to image involves creating an input prompt in natural language that the model will try to interpret to generate an image </li>
</ul>`,frontmatter:{layout:"image-right",image:"./txt2img.jpg"},index:3,start:49,end:57,notesHTML:"",filepath:"/home/runner/work/ML_presentation/ML_presentation/slides.md",id:3,no:4},__clicksElements:[],__preloaded:!1}},{path:"5",name:"page-5",component:T1,meta:{slide:{raw:`
# Some samples

<h4>DallE txt2img: a motorcycle on a tree in the style of Salvador Dal\xED </h4><br/> 
<div v-click> 
<div class="grid grid-cols-3 grid-rows-2 gap-2">
<div>

<img src="/txt2img/motorcycle1.png" class=" rounded shadow" />


</div>
<div>
 <img src="/txt2img/motorcycle2.png" class=" rounded shadow" />


</div>

<div>

 <img src="/txt2img/motorcycle3.png" class=" rounded shadow" />
</div>

</div>
</div>
`,title:"Some samples",level:1,content:`# Some samples

<h4>DallE txt2img: a motorcycle on a tree in the style of Salvador Dal\xED </h4><br/> 
<div v-click> 
<div class="grid grid-cols-3 grid-rows-2 gap-2">
<div>

<img src="/txt2img/motorcycle1.png" class=" rounded shadow" />


</div>
<div>
 <img src="/txt2img/motorcycle2.png" class=" rounded shadow" />


</div>

<div>

 <img src="/txt2img/motorcycle3.png" class=" rounded shadow" />
</div>

</div>
</div>`,frontmatter:{},index:4,start:58,end:84,notesHTML:"",filepath:"/home/runner/work/ML_presentation/ML_presentation/slides.md",id:4,no:5},__clicksElements:[],__preloaded:!1}},{path:"6",name:"page-6",component:z1,meta:{slide:{raw:`
# Some samples

<h4>DallE txt2img: a japanese woodprint of Godzilla in a city</h4><br/> 
<div v-click> 
<div class="grid grid-cols-3 grid-rows-2 gap-2">
<div>

<img src="/txt2img/godzilla.png" class=" rounded shadow" />

</div>
<div>
 <img src="/txt2img/godzilla2.png" class=" rounded shadow" />


</div>

<div>

 <img src="/txt2img/godzilla3.png" class=" rounded shadow" />
</div>

</div>
</div>
`,title:"Some samples",level:1,content:`# Some samples

<h4>DallE txt2img: a japanese woodprint of Godzilla in a city</h4><br/> 
<div v-click> 
<div class="grid grid-cols-3 grid-rows-2 gap-2">
<div>

<img src="/txt2img/godzilla.png" class=" rounded shadow" />

</div>
<div>
 <img src="/txt2img/godzilla2.png" class=" rounded shadow" />


</div>

<div>

 <img src="/txt2img/godzilla3.png" class=" rounded shadow" />
</div>

</div>
</div>`,frontmatter:{},index:5,start:85,end:110,notesHTML:"",filepath:"/home/runner/work/ML_presentation/ML_presentation/slides.md",id:5,no:6},__clicksElements:[],__preloaded:!1}},{path:"7",name:"page-7",component:Q1,meta:{slide:{raw:`
# Some samples

<h4>Stable Diffusion txt2img: a monkey riding a giraffe, photograph</h4><br/> 
<div v-click> 
<div class="grid grid-cols-3 grid-rows-2 gap-2">
<div>

<img src="/txt2img/monkey3.jpg" class=" rounded shadow" />

</div>
<div>
 <img src="/txt2img/monkey6.jpg" class=" rounded shadow" />


</div>

<div>

 <img src="/txt2img/monkey7.jpg" class=" rounded shadow" />
</div>

</div>
</div>
`,title:"Some samples",level:1,content:`# Some samples

<h4>Stable Diffusion txt2img: a monkey riding a giraffe, photograph</h4><br/> 
<div v-click> 
<div class="grid grid-cols-3 grid-rows-2 gap-2">
<div>

<img src="/txt2img/monkey3.jpg" class=" rounded shadow" />

</div>
<div>
 <img src="/txt2img/monkey6.jpg" class=" rounded shadow" />


</div>

<div>

 <img src="/txt2img/monkey7.jpg" class=" rounded shadow" />
</div>

</div>
</div>`,frontmatter:{},index:6,start:111,end:136,notesHTML:"",filepath:"/home/runner/work/ML_presentation/ML_presentation/slides.md",id:6,no:7},__clicksElements:[],__preloaded:!1}},{path:"8",name:"page-8",component:ob,meta:{slide:{raw:`
# Some samples

<h4>Stable Diffusion txt2img: Albert Einstein wearing sunglasses driving a sports car, photograph</h4><br/> 
<div v-click> 
<div class="grid grid-cols-3 grid-rows-2 gap-2">
<div>

<img src="/txt2img/einstein1.jpg" class=" rounded shadow" />

</div>
<div>
 <img src="/txt2img/einstein2.jpg" class=" rounded shadow" />


</div>

<div>

 <img src="/txt2img/einstein3.jpg" class=" rounded shadow" />
</div>

</div>
</div>
`,title:"Some samples",level:1,content:`# Some samples

<h4>Stable Diffusion txt2img: Albert Einstein wearing sunglasses driving a sports car, photograph</h4><br/> 
<div v-click> 
<div class="grid grid-cols-3 grid-rows-2 gap-2">
<div>

<img src="/txt2img/einstein1.jpg" class=" rounded shadow" />

</div>
<div>
 <img src="/txt2img/einstein2.jpg" class=" rounded shadow" />


</div>

<div>

 <img src="/txt2img/einstein3.jpg" class=" rounded shadow" />
</div>

</div>
</div>`,frontmatter:{},index:7,start:137,end:162,notesHTML:"",filepath:"/home/runner/work/ML_presentation/ML_presentation/slides.md",id:7,no:8},__clicksElements:[],__preloaded:!1}},{path:"9",name:"page-9",component:ub,meta:{layout:"image-right",image:"./img2img.jpg",slide:{raw:`---
layout: image-right
image: './img2img.jpg'

---

# img2img
<ul>
<li v-click> image to image allows giving the model a starting image </li>
</ul>`,title:"img2img",level:1,content:`# img2img
<ul>
<li v-click> image to image allows giving the model a starting image </li>
</ul>`,frontmatter:{layout:"image-right",image:"./img2img.jpg"},index:8,start:162,end:172,notesHTML:"",filepath:"/home/runner/work/ML_presentation/ML_presentation/slides.md",id:8,no:9},__clicksElements:[],__preloaded:!1}},{path:"10",name:"page-10",component:mb,meta:{slide:{raw:`
# Some samples
 <h4>DallE image variations</h4><br/> 

<div class="grid grid-cols-4 gap-2">
  <div>
  <img src="/img2img/samurai_original.jpg" h-50 w-50 class=" rounded shadow" />
  <span>original</span>
  </div>
</div>

`,title:"Some samples",level:1,content:`# Some samples
 <h4>DallE image variations</h4><br/> 

<div class="grid grid-cols-4 gap-2">
  <div>
  <img src="/img2img/samurai_original.jpg" h-50 w-50 class=" rounded shadow" />
  <span>original</span>
  </div>
</div>`,frontmatter:{},index:9,start:173,end:185,notesHTML:"",filepath:"/home/runner/work/ML_presentation/ML_presentation/slides.md",id:9,no:10},__clicksElements:[],__preloaded:!1}},{path:"11",name:"page-11",component:Eb,meta:{slide:{raw:`

# Some samples
 <h4>DallE image variations</h4><br/> 

<div class="grid grid-cols-4 gap-2">
  <div>
  <img src="/img2img/samurai_original.jpg" h-50 w-50 class=" rounded shadow" />
  <span>original</span>
  </div>


  <div>

  <img src="/img2img/samurai1.png" h-50 class=" rounded shadow" />
  <span>variation</span>

  </div>
  <div>
  <img src="/img2img/samurai2.png" h-50 class=" rounded shadow" />
  <span>variation</span>


  </div>

  <div>

  <img src="/img2img/samurai3.png" h-50 class=" rounded shadow" />
  <span>variation</span>

  </div>


</div>

`,title:"Some samples",level:1,content:`# Some samples
 <h4>DallE image variations</h4><br/> 

<div class="grid grid-cols-4 gap-2">
  <div>
  <img src="/img2img/samurai_original.jpg" h-50 w-50 class=" rounded shadow" />
  <span>original</span>
  </div>


  <div>

  <img src="/img2img/samurai1.png" h-50 class=" rounded shadow" />
  <span>variation</span>

  </div>
  <div>
  <img src="/img2img/samurai2.png" h-50 class=" rounded shadow" />
  <span>variation</span>


  </div>

  <div>

  <img src="/img2img/samurai3.png" h-50 class=" rounded shadow" />
  <span>variation</span>

  </div>


</div>`,frontmatter:{},index:10,start:186,end:222,notesHTML:"",filepath:"/home/runner/work/ML_presentation/ML_presentation/slides.md",id:10,no:11},__clicksElements:[],__preloaded:!1}},{path:"12",name:"page-12",component:Mb,meta:{slide:{raw:`

# Some samples

<h4>DallE image variations</h4><br/> 

<div class="grid grid-cols-4 gap-2">
  <div>
  <img src="/img2img/manonwire_original.jpg" h-50 w-50 class=" rounded shadow" />
  <span>original</span>
  </div>


</div>
`,title:"Some samples",level:1,content:`# Some samples

<h4>DallE image variations</h4><br/> 

<div class="grid grid-cols-4 gap-2">
  <div>
  <img src="/img2img/manonwire_original.jpg" h-50 w-50 class=" rounded shadow" />
  <span>original</span>
  </div>


</div>`,frontmatter:{},index:11,start:223,end:238,notesHTML:"",filepath:"/home/runner/work/ML_presentation/ML_presentation/slides.md",id:11,no:12},__clicksElements:[],__preloaded:!1}},{path:"13",name:"page-13",component:Rb,meta:{slide:{raw:`
# Some samples

<h4>DallE image variations</h4><br/> 

<div class="grid grid-cols-4 gap-2">
  <div>
  <img src="/img2img/manonwire_original.jpg" h-50 w-50 class=" rounded shadow" />
  <span>original</span>
  </div>


  <div>

  <img src="/img2img/manonwire1.png" h-50 class=" rounded shadow" />
  <span>variation</span>

  </div>
  <div>
  <img src="/img2img/manonwire2.png" h-50 class=" rounded shadow" />
  <span>variation</span>


  </div>

  <div>

  <img src="/img2img/manonwire3.png" h-50 class=" rounded shadow" />
  <span>variation</span>

  </div>


</div>
`,title:"Some samples",level:1,content:`# Some samples

<h4>DallE image variations</h4><br/> 

<div class="grid grid-cols-4 gap-2">
  <div>
  <img src="/img2img/manonwire_original.jpg" h-50 w-50 class=" rounded shadow" />
  <span>original</span>
  </div>


  <div>

  <img src="/img2img/manonwire1.png" h-50 class=" rounded shadow" />
  <span>variation</span>

  </div>
  <div>
  <img src="/img2img/manonwire2.png" h-50 class=" rounded shadow" />
  <span>variation</span>


  </div>

  <div>

  <img src="/img2img/manonwire3.png" h-50 class=" rounded shadow" />
  <span>variation</span>

  </div>


</div>`,frontmatter:{},index:12,start:239,end:274,notesHTML:"",filepath:"/home/runner/work/ML_presentation/ML_presentation/slides.md",id:12,no:13},__clicksElements:[],__preloaded:!1}},{path:"14",name:"page-14",component:Vb,meta:{slide:{raw:`

# Some samples

<h4>Stable Diffusion img2img: portrait of man made of vegetables and fruit in the style of Arcimboldo</h4> 

<div class="grid grid-cols-4 gap-2">
  <div>
  <img src="/img2img/arci_original.jpg" h-50 w-50 class=" rounded shadow" />
  <span>original</span>
  </div>
</div>
`,title:"Some samples",level:1,content:`# Some samples

<h4>Stable Diffusion img2img: portrait of man made of vegetables and fruit in the style of Arcimboldo</h4> 

<div class="grid grid-cols-4 gap-2">
  <div>
  <img src="/img2img/arci_original.jpg" h-50 w-50 class=" rounded shadow" />
  <span>original</span>
  </div>
</div>`,frontmatter:{},index:13,start:275,end:288,notesHTML:"",filepath:"/home/runner/work/ML_presentation/ML_presentation/slides.md",id:13,no:14},__clicksElements:[],__preloaded:!1}},{path:"15",name:"page-15",component:Jb,meta:{slide:{raw:`
# Some samples

<h4>Stable Diffusion img2img: portrait of man made of vegetables and fruit in the style of Arcimboldo</h4>

<div class="grid grid-cols-4 gap-2">
  <div>
  <img src="/img2img/arci_original.jpg" h-50 w-50 class=" rounded shadow" />
  <span>original</span>
  </div>


  <div>

  <img src="/img2img/arci1.png" h-50 class=" rounded shadow" />
  <span>variation</span>

  </div>
  <div>
  <img src="/img2img/arci2.png" h-50 class=" rounded shadow" />
  <span>variation</span>


  </div>

  <div>

  <img src="/img2img/arci3.png" h-50 class=" rounded shadow" />
  <span>variation</span>

  </div>


</div>

<div class="grid grid-cols-4 gap-2">
  <div>
  <img src="/img2img/arci4.jpg" h-50 w-50 class=" rounded shadow" />
  <span>original</span>
  </div>


  <div>

  <img src="/img2img/arci5.png" h-50 class=" rounded shadow" />
  <span>variation</span>

  </div>
  <div>
  <img src="/img2img/arci6.png" h-50 class=" rounded shadow" />
  <span>variation</span>


  </div>

  <div>

  <img src="/img2img/arci7.png" h-50 class=" rounded shadow" />
  <span>variation</span>

  </div>


</div> 
`,title:"Some samples",level:1,content:`# Some samples

<h4>Stable Diffusion img2img: portrait of man made of vegetables and fruit in the style of Arcimboldo</h4>

<div class="grid grid-cols-4 gap-2">
  <div>
  <img src="/img2img/arci_original.jpg" h-50 w-50 class=" rounded shadow" />
  <span>original</span>
  </div>


  <div>

  <img src="/img2img/arci1.png" h-50 class=" rounded shadow" />
  <span>variation</span>

  </div>
  <div>
  <img src="/img2img/arci2.png" h-50 class=" rounded shadow" />
  <span>variation</span>


  </div>

  <div>

  <img src="/img2img/arci3.png" h-50 class=" rounded shadow" />
  <span>variation</span>

  </div>


</div>

<div class="grid grid-cols-4 gap-2">
  <div>
  <img src="/img2img/arci4.jpg" h-50 w-50 class=" rounded shadow" />
  <span>original</span>
  </div>


  <div>

  <img src="/img2img/arci5.png" h-50 class=" rounded shadow" />
  <span>variation</span>

  </div>
  <div>
  <img src="/img2img/arci6.png" h-50 class=" rounded shadow" />
  <span>variation</span>


  </div>

  <div>

  <img src="/img2img/arci7.png" h-50 class=" rounded shadow" />
  <span>variation</span>

  </div>


</div>`,frontmatter:{},index:14,start:289,end:354,notesHTML:"",filepath:"/home/runner/work/ML_presentation/ML_presentation/slides.md",id:14,no:15},__clicksElements:[],__preloaded:!1}},{path:"16",name:"page-16",component:nw,meta:{layout:"image-right",image:"./inpainting.jpg",slide:{raw:`---
layout: image-right
image: './inpainting.jpg'
---

# Inpainting
<ul>
<li v-click> inpainting allows editing a masked selection of a source image </li>
</ul>`,title:"Inpainting",level:1,content:`# Inpainting
<ul>
<li v-click> inpainting allows editing a masked selection of a source image </li>
</ul>`,frontmatter:{layout:"image-right",image:"./inpainting.jpg"},index:15,start:354,end:363,notesHTML:"",filepath:"/home/runner/work/ML_presentation/ML_presentation/slides.md",id:15,no:16},__clicksElements:[],__preloaded:!1}},{path:"17",name:"page-17",component:aw,meta:{slide:{raw:`
# Some samples


<h4>DallE inpainting</h4><br/> 

<div class="grid grid-cols-4 gap-2">
  <div>
  <img src="/inpainting/hamster_original.png" h-50 w-50 class=" rounded shadow" />
  <span>original</span>
  </div>


  <div>

  <img src="/inpainting/hamster_mask.png" h-50 class=" rounded shadow" />
  <span>mask</span>

  </div>


</div>
`,title:"Some samples",level:1,content:`# Some samples


<h4>DallE inpainting</h4><br/> 

<div class="grid grid-cols-4 gap-2">
  <div>
  <img src="/inpainting/hamster_original.png" h-50 w-50 class=" rounded shadow" />
  <span>original</span>
  </div>


  <div>

  <img src="/inpainting/hamster_mask.png" h-50 class=" rounded shadow" />
  <span>mask</span>

  </div>


</div>`,frontmatter:{},index:16,start:364,end:387,notesHTML:"",filepath:"/home/runner/work/ML_presentation/ML_presentation/slides.md",id:16,no:17},__clicksElements:[],__preloaded:!1}},{path:"18",name:"page-18",component:hw,meta:{slide:{raw:`

# Some samples


<h4>DallE inpainting</h4><br/> 

<div class="grid grid-cols-4 gap-2">
  <div>
  <img src="/inpainting/hamster_original.png" h-50 w-50 class=" rounded shadow" />
  <span>original</span>
  </div>


  <div>

  <img src="/inpainting/hamster_mask.png" h-50 class=" rounded shadow" />
  <span>mask</span>

  </div>
  <div>
  <img src="/inpainting/hamster1.png" h-50 class=" rounded shadow" />
  <span>a hamster </span>


  </div>

  <div>

  <img src="/inpainting/hamster2.png" h-50 class=" rounded shadow" />
  <span>a hamster </span>

  </div>


</div>

`,title:"Some samples",level:1,content:`# Some samples


<h4>DallE inpainting</h4><br/> 

<div class="grid grid-cols-4 gap-2">
  <div>
  <img src="/inpainting/hamster_original.png" h-50 w-50 class=" rounded shadow" />
  <span>original</span>
  </div>


  <div>

  <img src="/inpainting/hamster_mask.png" h-50 class=" rounded shadow" />
  <span>mask</span>

  </div>
  <div>
  <img src="/inpainting/hamster1.png" h-50 class=" rounded shadow" />
  <span>a hamster </span>


  </div>

  <div>

  <img src="/inpainting/hamster2.png" h-50 class=" rounded shadow" />
  <span>a hamster </span>

  </div>


</div>`,frontmatter:{},index:17,start:388,end:426,notesHTML:"",filepath:"/home/runner/work/ML_presentation/ML_presentation/slides.md",id:17,no:18},__clicksElements:[],__preloaded:!1}},{path:"19",name:"page-19",component:yw,meta:{slide:{raw:`
# Some samples


<h4>DallE inpainting</h4><br/> 

<div class="grid grid-cols-4 gap-2">
  <div>
  <img src="/inpainting/flag_original.jpg" h-50 w-50 class=" rounded shadow" />
  <span>original</span>
  </div>


  <div>

  <img src="/inpainting/flag_mask.png" h-50 class=" rounded shadow" />
  <span>mask</span>

  </div>


</div>
`,title:"Some samples",level:1,content:`# Some samples


<h4>DallE inpainting</h4><br/> 

<div class="grid grid-cols-4 gap-2">
  <div>
  <img src="/inpainting/flag_original.jpg" h-50 w-50 class=" rounded shadow" />
  <span>original</span>
  </div>


  <div>

  <img src="/inpainting/flag_mask.png" h-50 class=" rounded shadow" />
  <span>mask</span>

  </div>


</div>`,frontmatter:{},index:18,start:427,end:450,notesHTML:"",filepath:"/home/runner/work/ML_presentation/ML_presentation/slides.md",id:18,no:19},__clicksElements:[],__preloaded:!1}},{path:"20",name:"page-20",component:kw,meta:{slide:{raw:`

# Some samples


<h4>DallE inpainting</h4><br/> 

<div class="grid grid-cols-4 gap-2">
  <div>
  <img src="/inpainting/flag_original.jpg" h-50 w-50 class=" rounded shadow" />
  <span>original</span>
  </div>


  <div>

  <img src="/inpainting/flag_mask.png" h-50 class=" rounded shadow" />
  <span>mask</span>

  </div>
  <div>
  <img src="/inpainting/flag1.png" h-50 class=" rounded shadow" />
  <span>a peace flag </span>


  </div>

  <div>

  <img src="/inpainting/flag2.png" h-50 class=" rounded shadow" />
  <span>a peace flag waving, realistic photograph, high detail </span>

  </div>


</div>

`,title:"Some samples",level:1,content:`# Some samples


<h4>DallE inpainting</h4><br/> 

<div class="grid grid-cols-4 gap-2">
  <div>
  <img src="/inpainting/flag_original.jpg" h-50 w-50 class=" rounded shadow" />
  <span>original</span>
  </div>


  <div>

  <img src="/inpainting/flag_mask.png" h-50 class=" rounded shadow" />
  <span>mask</span>

  </div>
  <div>
  <img src="/inpainting/flag1.png" h-50 class=" rounded shadow" />
  <span>a peace flag </span>


  </div>

  <div>

  <img src="/inpainting/flag2.png" h-50 class=" rounded shadow" />
  <span>a peace flag waving, realistic photograph, high detail </span>

  </div>


</div>`,frontmatter:{},index:19,start:451,end:489,notesHTML:"",filepath:"/home/runner/work/ML_presentation/ML_presentation/slides.md",id:19,no:20},__clicksElements:[],__preloaded:!1}},{path:"21",name:"page-21",component:Nw,meta:{layout:"image-right",image:"./limitations.jpg",slide:{raw:`---
layout: image-right
image: './limitations.jpg'
---


# Limitations
<ul>
<li v-click>
  faces, hands, text
</li>
<li v-click>
  output only as good as the input (input prompt *and* training data set )
</li>
<li v-click>
  difficult to get consistent results
</li>

<li v-click>
  DallE:
  <ul>
   <li>15 credits per month, 4 images per credit</li>
  <li>content filters</li>
  <li>closed source</li>
  </ul>
</li>

<li v-click>
  Stable Diffusion: if running locally only as strong/fast as your GPU
</li>
</ul>
`,title:"Limitations",level:1,content:`# Limitations
<ul>
<li v-click>
  faces, hands, text
</li>
<li v-click>
  output only as good as the input (input prompt *and* training data set )
</li>
<li v-click>
  difficult to get consistent results
</li>

<li v-click>
  DallE:
  <ul>
   <li>15 credits per month, 4 images per credit</li>
  <li>content filters</li>
  <li>closed source</li>
  </ul>
</li>

<li v-click>
  Stable Diffusion: if running locally only as strong/fast as your GPU
</li>
</ul>`,frontmatter:{layout:"image-right",image:"./limitations.jpg"},index:20,start:489,end:521,notesHTML:"",filepath:"/home/runner/work/ML_presentation/ML_presentation/slides.md",id:20,no:21},__clicksElements:[],__preloaded:!1}},{path:"22",name:"page-22",component:Kw,meta:{slide:{raw:`
#  Experimenting with different settings

<div style="display: flex; justfy-content: space-between;">
<div style="padding: 8px;">
  <video autoplay loop width="180" height="180" controls>
    <source src="/videos/original.mp4" type="video/mp4">
  </video> 
  <span style="font-size:8px; display: flex;"> original, 4fps </span>
</div>


<div style="padding: 8px;">
  <video autoplay loop width="180" height="180" controls>
    <source src="/videos/strength2.mp4" type="video/mp4">
  </video> 
  <span style="font-size:8px; display: flex;"> standard settings, input prompt: futuristic,  increasing strength by 10 on each loop </span>
</div>

<div style="padding: 8px;">

  <video autoplay loop width="180" height="180" controls>
    <source src="/videos/sameseed.mp4" type="video/mp4">
  </video> 
  <span style="font-size:8px; display: flex;"> same seed number, input prompt: futuristic,  increasing strength by 10 on each loop </span>
</div>


<div style="padding: 8px;">

  <video autoplay loop width="180" height="180" controls>
    <source src="/videos/sameseedchangedimm.mp4" type="video/mp4">
  </video> 
  <span style="font-size:8px; display: flex;"> same seed number, input prompt: futuristic, increasing ddim by 10 on each loop </span>

</div>
</div>
`,title:"Experimenting with different settings",level:1,content:`#  Experimenting with different settings

<div style="display: flex; justfy-content: space-between;">
<div style="padding: 8px;">
  <video autoplay loop width="180" height="180" controls>
    <source src="/videos/original.mp4" type="video/mp4">
  </video> 
  <span style="font-size:8px; display: flex;"> original, 4fps </span>
</div>


<div style="padding: 8px;">
  <video autoplay loop width="180" height="180" controls>
    <source src="/videos/strength2.mp4" type="video/mp4">
  </video> 
  <span style="font-size:8px; display: flex;"> standard settings, input prompt: futuristic,  increasing strength by 10 on each loop </span>
</div>

<div style="padding: 8px;">

  <video autoplay loop width="180" height="180" controls>
    <source src="/videos/sameseed.mp4" type="video/mp4">
  </video> 
  <span style="font-size:8px; display: flex;"> same seed number, input prompt: futuristic,  increasing strength by 10 on each loop </span>
</div>


<div style="padding: 8px;">

  <video autoplay loop width="180" height="180" controls>
    <source src="/videos/sameseedchangedimm.mp4" type="video/mp4">
  </video> 
  <span style="font-size:8px; display: flex;"> same seed number, input prompt: futuristic, increasing ddim by 10 on each loop </span>

</div>
</div>`,frontmatter:{},index:21,start:522,end:560,notesHTML:"",filepath:"/home/runner/work/ML_presentation/ML_presentation/slides.md",id:21,no:22},__clicksElements:[],__preloaded:!1}},{path:"23",name:"page-23",component:Yw,meta:{layout:"image-right",image:"./fails.jpg",slide:{raw:`---
layout: image-right
image: './fails.jpg'

---

# FAILS
`,title:"FAILS",level:1,content:"# FAILS",frontmatter:{layout:"image-right",image:"./fails.jpg"},index:22,start:560,end:568,notesHTML:"",filepath:"/home/runner/work/ML_presentation/ML_presentation/slides.md",id:22,no:23},__clicksElements:[],__preloaded:!1}},{path:"24",name:"page-24",component:Jw,meta:{slide:{raw:`
# FAILS

<div class="grid grid-cols-4 gap-2">
  <div>
  <img src="/fails/arci.jpg" h-50 w-50 class=" rounded shadow" />
  <span class="label">portrait of man made of vegetables and fruit in the style of Arcimboldo</span>
  </div>
</div>

<style>
  .label {
    font-size: 12px;
    line-height: 14px;
    display: flex;
    margin-top: 2px;
    margin-bottom: 2px;
  }
  </style>
`,title:"FAILS",level:1,content:`# FAILS

<div class="grid grid-cols-4 gap-2">
  <div>
  <img src="/fails/arci.jpg" h-50 w-50 class=" rounded shadow" />
  <span class="label">portrait of man made of vegetables and fruit in the style of Arcimboldo</span>
  </div>
</div>

<style>
  .label {
    font-size: 12px;
    line-height: 14px;
    display: flex;
    margin-top: 2px;
    margin-bottom: 2px;
  }
  </style>`,frontmatter:{},index:23,start:569,end:589,notesHTML:"",filepath:"/home/runner/work/ML_presentation/ML_presentation/slides.md",id:23,no:24},__clicksElements:[],__preloaded:!1}},{path:"25",name:"page-25",component:nx,meta:{slide:{raw:`

# FAILS

<div class="grid grid-cols-4 gap-2">
  <div>
  <img src="/fails/arci.jpg" h-50 w-50 class=" rounded shadow" />
  <span class="label">portrait of man made of vegetables and fruit in the style of Arcimboldo</span>
  </div>


  <div>

  <img src="/fails/monkey.jpg" h-50 class=" rounded shadow" />
  <span class="label">a monkey riding a giraffe</span>

  </div>
  <div>
  <img src="/fails/monkey2.jpg" h-50 class=" rounded shadow" />
  <span class="label">a monkey riding a giraffe</span>


  </div>
</div> 

<style>
  .label {
    font-size: 12px;
    line-height: 14px;
    display: flex;
    margin-top: 2px;
    margin-bottom: 2px;
  }
  </style>

`,title:"FAILS",level:1,content:`# FAILS

<div class="grid grid-cols-4 gap-2">
  <div>
  <img src="/fails/arci.jpg" h-50 w-50 class=" rounded shadow" />
  <span class="label">portrait of man made of vegetables and fruit in the style of Arcimboldo</span>
  </div>


  <div>

  <img src="/fails/monkey.jpg" h-50 class=" rounded shadow" />
  <span class="label">a monkey riding a giraffe</span>

  </div>
  <div>
  <img src="/fails/monkey2.jpg" h-50 class=" rounded shadow" />
  <span class="label">a monkey riding a giraffe</span>


  </div>
</div> 

<style>
  .label {
    font-size: 12px;
    line-height: 14px;
    display: flex;
    margin-top: 2px;
    margin-bottom: 2px;
  }
  </style>`,frontmatter:{},index:24,start:590,end:626,notesHTML:"",filepath:"/home/runner/work/ML_presentation/ML_presentation/slides.md",id:24,no:25},__clicksElements:[],__preloaded:!1}},{path:"26",name:"page-26",component:ox,meta:{slide:{raw:`
  
# FAILS

<div class="grid grid-cols-4 gap-2">
  <div>
  <img src="/fails/arci.jpg" h-50 w-50 class=" rounded shadow" />
  <span class="label">portrait of man made of vegetables and fruit in the style of Arcimboldo</span>
  </div>


  <div>

  <img src="/fails/monkey.jpg" h-50 class=" rounded shadow" />
  <span class="label">a monkey riding a giraffe</span>

  </div>
  <div>
  <img src="/fails/monkey2.jpg" h-50 class=" rounded shadow" />
  <span class="label">a monkey riding a giraffe</span>


  </div>

  <div>

  <img src="/fails/nosferatu.png" h-50 class=" rounded shadow" />
  <span class="label">nosferatu dancing in a club, award winning photography</span>

  </div>


</div>


<style>
  .label {
    font-size: 12px;
    line-height: 14px;
    display: flex;
    margin-top: 2px;
    margin-bottom: 2px;
  }
  </style>
`,title:"FAILS",level:1,content:`# FAILS

<div class="grid grid-cols-4 gap-2">
  <div>
  <img src="/fails/arci.jpg" h-50 w-50 class=" rounded shadow" />
  <span class="label">portrait of man made of vegetables and fruit in the style of Arcimboldo</span>
  </div>


  <div>

  <img src="/fails/monkey.jpg" h-50 class=" rounded shadow" />
  <span class="label">a monkey riding a giraffe</span>

  </div>
  <div>
  <img src="/fails/monkey2.jpg" h-50 class=" rounded shadow" />
  <span class="label">a monkey riding a giraffe</span>


  </div>

  <div>

  <img src="/fails/nosferatu.png" h-50 class=" rounded shadow" />
  <span class="label">nosferatu dancing in a club, award winning photography</span>

  </div>


</div>


<style>
  .label {
    font-size: 12px;
    line-height: 14px;
    display: flex;
    margin-top: 2px;
    margin-bottom: 2px;
  }
  </style>`,frontmatter:{},index:25,start:627,end:672,notesHTML:"",filepath:"/home/runner/work/ML_presentation/ML_presentation/slides.md",id:25,no:26},__clicksElements:[],__preloaded:!1}},{path:"27",name:"page-27",component:dx,meta:{slide:{raw:`
  
# FAILS

<div class="grid grid-cols-4 gap-2">
  <div>
  <img src="/fails/arci.jpg" h-50 w-50 class=" rounded shadow" />
  <span class="label">portrait of man made of vegetables and fruit in the style of Arcimboldo</span>
  </div>


  <div>

  <img src="/fails/monkey.jpg" h-50 class=" rounded shadow" />
  <span class="label">a monkey riding a giraffe</span>

  </div>
  <div>
  <img src="/fails/monkey2.jpg" h-50 class=" rounded shadow" />
  <span class="label">a monkey riding a giraffe</span>


  </div>

  <div>

  <img src="/fails/nosferatu.png" h-50 class=" rounded shadow" />
  <span class="label">nosferatu dancing in a club, award winning photography</span>

  </div>


</div>

<div class="grid grid-cols-4 gap-2">
  <div>
  <img src="/fails/painter.png" h-50 w-50 class=" rounded shadow" />
  <span class="label">painter painting himself</span>
  </div>
</div> 

<style>
  .label {
    font-size: 12px;
    line-height: 14px;
    display: flex;
    margin-top: 2px;
    margin-bottom: 2px;
  }
  </style>
`,title:"FAILS",level:1,content:`# FAILS

<div class="grid grid-cols-4 gap-2">
  <div>
  <img src="/fails/arci.jpg" h-50 w-50 class=" rounded shadow" />
  <span class="label">portrait of man made of vegetables and fruit in the style of Arcimboldo</span>
  </div>


  <div>

  <img src="/fails/monkey.jpg" h-50 class=" rounded shadow" />
  <span class="label">a monkey riding a giraffe</span>

  </div>
  <div>
  <img src="/fails/monkey2.jpg" h-50 class=" rounded shadow" />
  <span class="label">a monkey riding a giraffe</span>


  </div>

  <div>

  <img src="/fails/nosferatu.png" h-50 class=" rounded shadow" />
  <span class="label">nosferatu dancing in a club, award winning photography</span>

  </div>


</div>

<div class="grid grid-cols-4 gap-2">
  <div>
  <img src="/fails/painter.png" h-50 w-50 class=" rounded shadow" />
  <span class="label">painter painting himself</span>
  </div>
</div> 

<style>
  .label {
    font-size: 12px;
    line-height: 14px;
    display: flex;
    margin-top: 2px;
    margin-bottom: 2px;
  }
  </style>`,frontmatter:{},index:26,start:673,end:724,notesHTML:"",filepath:"/home/runner/work/ML_presentation/ML_presentation/slides.md",id:26,no:27},__clicksElements:[],__preloaded:!1}},{path:"28",name:"page-28",component:gx,meta:{slide:{raw:`
  # FAILS

<div class="grid grid-cols-4 gap-2">
  <div>
  <img src="/fails/arci.jpg" h-50 w-50 class=" rounded shadow" />
  <span class="label">portrait of man made of vegetables and fruit in the style of Arcimboldo</span>
  </div>


  <div>

  <img src="/fails/monkey.jpg" h-50 class=" rounded shadow" />
  <span class="label">a monkey riding a giraffe</span>

  </div>
  <div>
  <img src="/fails/monkey2.jpg" h-50 class=" rounded shadow" />
  <span class="label">a monkey riding a giraffe</span>


  </div>

  <div>

  <img src="/fails/nosferatu.png" h-50 class=" rounded shadow" />
  <span class="label">nosferatu dancing in a club, award winning photography</span>

  </div>


</div>

<div class="grid grid-cols-4 gap-2">
  <div>
  <img src="/fails/painter.png" h-50 w-50 class=" rounded shadow" />
  <span class="label">painter painting himself</span>
  </div>
  <div>


  <img src="/fails/einstein.png" h-50 class=" rounded shadow" />
  <span class="label">albert einstein and winnie the pooh on a boat, photorealistic</span>


  </div>

</div> 

<style>
  .label {
    font-size: 12px;
    line-height: 14px;
    display: flex;
    margin-top: 2px;
    margin-bottom: 2px;
  }
  </style>
`,title:"FAILS",level:1,content:`# FAILS

<div class="grid grid-cols-4 gap-2">
  <div>
  <img src="/fails/arci.jpg" h-50 w-50 class=" rounded shadow" />
  <span class="label">portrait of man made of vegetables and fruit in the style of Arcimboldo</span>
  </div>


  <div>

  <img src="/fails/monkey.jpg" h-50 class=" rounded shadow" />
  <span class="label">a monkey riding a giraffe</span>

  </div>
  <div>
  <img src="/fails/monkey2.jpg" h-50 class=" rounded shadow" />
  <span class="label">a monkey riding a giraffe</span>


  </div>

  <div>

  <img src="/fails/nosferatu.png" h-50 class=" rounded shadow" />
  <span class="label">nosferatu dancing in a club, award winning photography</span>

  </div>


</div>

<div class="grid grid-cols-4 gap-2">
  <div>
  <img src="/fails/painter.png" h-50 w-50 class=" rounded shadow" />
  <span class="label">painter painting himself</span>
  </div>
  <div>


  <img src="/fails/einstein.png" h-50 class=" rounded shadow" />
  <span class="label">albert einstein and winnie the pooh on a boat, photorealistic</span>


  </div>

</div> 

<style>
  .label {
    font-size: 12px;
    line-height: 14px;
    display: flex;
    margin-top: 2px;
    margin-bottom: 2px;
  }
  </style>`,frontmatter:{},index:27,start:725,end:784,notesHTML:"",filepath:"/home/runner/work/ML_presentation/ML_presentation/slides.md",id:27,no:28},__clicksElements:[],__preloaded:!1}},{path:"29",name:"page-29",component:wx,meta:{slide:{raw:`
 # FAILS

<div class="grid grid-cols-4 gap-2">
  <div>
  <img src="/fails/arci.jpg" h-50 w-50 class=" rounded shadow" />
  <span class="label">portrait of man made of vegetables and fruit in the style of Arcimboldo</span>
  </div>


  <div>

  <img src="/fails/monkey.jpg" h-50 class=" rounded shadow" />
  <span class="label">a monkey riding a giraffe</span>

  </div>
  <div>
  <img src="/fails/monkey2.jpg" h-50 class=" rounded shadow" />
  <span class="label">a monkey riding a giraffe</span>


  </div>

  <div>

  <img src="/fails/nosferatu.png" h-50 class=" rounded shadow" />
  <span class="label">nosferatu dancing in a club, award winning photography</span>

  </div>


</div>

<div class="grid grid-cols-4 gap-2">
  <div>
  <img src="/fails/painter.png" h-50 w-50 class=" rounded shadow" />
  <span class="label">painter painting himself</span>
  </div>
  <div>


  <img src="/fails/einstein.png" h-50 class=" rounded shadow" />
  <span class="label">albert einstein and winnie the pooh on a boat, photorealistic</span>


  </div>
  <div>

  <img src="/fails/maneatingmoney.png" h-50 class=" rounded shadow" />
  <span class="label">man eating money, photograph</span>

  </div>
</div> 

<style>
  .label {
    font-size: 12px;
    line-height: 14px;
    display: flex;
    margin-top: 2px;
    margin-bottom: 2px;
  }
  </style>
`,title:"FAILS",level:1,content:`# FAILS

<div class="grid grid-cols-4 gap-2">
  <div>
  <img src="/fails/arci.jpg" h-50 w-50 class=" rounded shadow" />
  <span class="label">portrait of man made of vegetables and fruit in the style of Arcimboldo</span>
  </div>


  <div>

  <img src="/fails/monkey.jpg" h-50 class=" rounded shadow" />
  <span class="label">a monkey riding a giraffe</span>

  </div>
  <div>
  <img src="/fails/monkey2.jpg" h-50 class=" rounded shadow" />
  <span class="label">a monkey riding a giraffe</span>


  </div>

  <div>

  <img src="/fails/nosferatu.png" h-50 class=" rounded shadow" />
  <span class="label">nosferatu dancing in a club, award winning photography</span>

  </div>


</div>

<div class="grid grid-cols-4 gap-2">
  <div>
  <img src="/fails/painter.png" h-50 w-50 class=" rounded shadow" />
  <span class="label">painter painting himself</span>
  </div>
  <div>


  <img src="/fails/einstein.png" h-50 class=" rounded shadow" />
  <span class="label">albert einstein and winnie the pooh on a boat, photorealistic</span>


  </div>
  <div>

  <img src="/fails/maneatingmoney.png" h-50 class=" rounded shadow" />
  <span class="label">man eating money, photograph</span>

  </div>
</div> 

<style>
  .label {
    font-size: 12px;
    line-height: 14px;
    display: flex;
    margin-top: 2px;
    margin-bottom: 2px;
  }
  </style>`,frontmatter:{},index:28,start:785,end:849,notesHTML:"",filepath:"/home/runner/work/ML_presentation/ML_presentation/slides.md",id:28,no:29},__clicksElements:[],__preloaded:!1}},{path:"30",name:"page-30",component:Ox,meta:{slide:{raw:`
 # FAILS

<div class="grid grid-cols-4 gap-2">
  <div>
  <img src="/fails/arci.jpg" h-50 w-50 class=" rounded shadow" />
  <span class="label">portrait of man made of vegetables and fruit in the style of Arcimboldo</span>
  </div>


  <div>

  <img src="/fails/monkey.jpg" h-50 class=" rounded shadow" />
  <span class="label">a monkey riding a giraffe</span>

  </div>
  <div>
  <img src="/fails/monkey2.jpg" h-50 class=" rounded shadow" />
  <span class="label">a monkey riding a giraffe</span>


  </div>

  <div>

  <img src="/fails/nosferatu.png" h-50 class=" rounded shadow" />
  <span class="label">nosferatu dancing in a club, award winning photography</span>

  </div>


</div>

<div class="grid grid-cols-4 gap-2">
  <div>
  <img src="/fails/painter.png" h-50 w-50 class=" rounded shadow" />
  <span class="label">painter painting himself</span>
  </div>
  <div>
  <img src="/fails/einstein.png" h-50 class=" rounded shadow" />
  <span class="label">albert einstein and winnie the pooh on a boat, photorealistic</span>
  </div>
  <div>
  <img src="/fails/maneatingmoney.png" h-50 class=" rounded shadow" />
  <span class="label">man eating money, photograph</span>
  </div>
  <div>
  <img src="/fails/marx.jpg" h-50 class=" rounded shadow" />
  <span class="label">karl marx as a hamster</span>
  </div>
</div> 

<style>
  .label {
    font-size: 12px;
    line-height: 14px;
    display: flex;
    margin-top: 2px;
    margin-bottom: 2px;
  }
</style>
`,title:"FAILS",level:1,content:`# FAILS

<div class="grid grid-cols-4 gap-2">
  <div>
  <img src="/fails/arci.jpg" h-50 w-50 class=" rounded shadow" />
  <span class="label">portrait of man made of vegetables and fruit in the style of Arcimboldo</span>
  </div>


  <div>

  <img src="/fails/monkey.jpg" h-50 class=" rounded shadow" />
  <span class="label">a monkey riding a giraffe</span>

  </div>
  <div>
  <img src="/fails/monkey2.jpg" h-50 class=" rounded shadow" />
  <span class="label">a monkey riding a giraffe</span>


  </div>

  <div>

  <img src="/fails/nosferatu.png" h-50 class=" rounded shadow" />
  <span class="label">nosferatu dancing in a club, award winning photography</span>

  </div>


</div>

<div class="grid grid-cols-4 gap-2">
  <div>
  <img src="/fails/painter.png" h-50 w-50 class=" rounded shadow" />
  <span class="label">painter painting himself</span>
  </div>
  <div>
  <img src="/fails/einstein.png" h-50 class=" rounded shadow" />
  <span class="label">albert einstein and winnie the pooh on a boat, photorealistic</span>
  </div>
  <div>
  <img src="/fails/maneatingmoney.png" h-50 class=" rounded shadow" />
  <span class="label">man eating money, photograph</span>
  </div>
  <div>
  <img src="/fails/marx.jpg" h-50 class=" rounded shadow" />
  <span class="label">karl marx as a hamster</span>
  </div>
</div> 

<style>
  .label {
    font-size: 12px;
    line-height: 14px;
    display: flex;
    margin-top: 2px;
    margin-bottom: 2px;
  }
</style>`,frontmatter:{},index:29,start:850,end:912,notesHTML:"",filepath:"/home/runner/work/ML_presentation/ML_presentation/slides.md",id:29,no:30},__clicksElements:[],__preloaded:!1}},{path:"31",component:r1,meta:{layout:"end"}}],ze=Mx,Px=[{name:"play",path:"/",component:Qy,children:[...ze]},{name:"print",path:"/print",component:n1},{path:"",redirect:{path:"/1"}},{path:"/:pathMatch(.*)",redirect:{path:"/1"}},{name:"presenter",path:"/presenter/:no",component:()=>ds(()=>import("./Presenter.cdd584d3.js"),["assets/Presenter.cdd584d3.js","assets/Presenter.e29290d2.css","assets/DrawingControls.vue_vue_type_script_setup_true_lang.577f3063.js"]),beforeEnter:e=>{if(!xn.remote||xn.remote===e.query.password)return!0;if(xn.remote&&e.query.password===void 0){const t=prompt("Enter password");if(xn.remote===t)return!0}return e.params.no?{path:`/${e.params.no}`}:{path:""}}},{path:"/presenter",redirect:{path:"/presenter/1"}}],gt=zv({history:iv("/ML_presentation/"),routes:Px});function Lx(e,t,{mode:n="replace"}={}){return k({get(){const s=gt.currentRoute.value.query[e];return s==null?t!=null?t:null:Array.isArray(s)?s.filter(Boolean):s},set(s){Ze(()=>{gt[b(n)]({query:{...gt.currentRoute.value.query,[e]:s}})})}})}const Sd=H(0);Ze(()=>{gt.afterEach(async()=>{await Ze(),Sd.value+=1})});const Gt=k(()=>gt.currentRoute.value),ta=k(()=>Gt.value.query.print!==void 0),Ax=k(()=>Gt.value.query.print==="clicks"),Ht=k(()=>Gt.value.query.embedded!==void 0),Rt=k(()=>Gt.value.path.startsWith("/presenter")),Cs=k(()=>ta.value&&!Ax.value),oo=k(()=>Gt.value.query.password),Cx=k(()=>!Rt.value&&(!be.remote||oo.value===be.remote)),Xl=Lx("clicks","0"),$d=k(()=>ze.length-1),Tx=k(()=>Gt.value.path),Be=k(()=>parseInt(Tx.value.split(/\//g).slice(-1)[0])||1);k(()=>sr(Be.value));const dt=k(()=>ze.find(e=>e.path===`${Be.value}`));k(()=>{var e,t,n;return(n=(t=(e=dt.value)==null?void 0:e.meta)==null?void 0:t.slide)==null?void 0:n.id});k(()=>{var e,t;return(t=(e=dt.value)==null?void 0:e.meta)==null?void 0:t.layout});const xr=k(()=>ze.find(e=>e.path===`${Math.min(ze.length,Be.value+1)}`)),jx=k(()=>{var e,t;return Sd.value,((t=(e=dt.value)==null?void 0:e.meta)==null?void 0:t.__clicksElements)||[]}),Pt=k({get(){if(Cs.value)return 99999;let e=+(Xl.value||0);return isNaN(e)&&(e=0),e},set(e){Xl.value=e.toString()}}),Ii=k(()=>{var e,t,n;return+((n=(t=(e=dt.value)==null?void 0:e.meta)==null?void 0:t.clicks)!=null?n:jx.value.length)}),Ix=k(()=>Be.value<ze.length-1||Pt.value<Ii.value),Rx=k(()=>Be.value>1||Pt.value>0),Fx=k(()=>ze.filter(e=>{var t,n;return(n=(t=e.meta)==null?void 0:t.slide)==null?void 0:n.title}).reduce((e,t)=>(na(e,t),e),[])),Dx=k(()=>sa(Fx.value,dt.value));k(()=>ia(Dx.value));function on(){Ii.value<=Pt.value?Ks():Pt.value+=1}async function an(){Pt.value<=0?await Ws():Pt.value-=1}function sr(e){return Rt.value?`/presenter/${e}`:`/${e}`}function Ks(){const e=Math.min(ze.length,Be.value+1);return ls(e)}async function Ws(e=!0){const t=Math.max(1,Be.value-1);await ls(t),e&&Ii.value&&gt.replace({query:{...Gt.value.query,clicks:Ii.value}})}function ls(e,t){return gt.push({path:sr(e),query:{...Gt.value.query,clicks:t}})}function Nx(e){const t=H(0),{direction:n,distanceX:s,distanceY:i}=Lg(e,{onSwipeStart(r){r.pointerType==="touch"&&(Us.value||(t.value=Zr()))},onSwipeEnd(r){if(r.pointerType!=="touch"||!t.value||Us.value)return;const o=Math.abs(s.value),a=Math.abs(i.value);o/window.innerWidth>.3||o>100?n.value===Ut.LEFT?on():an():(a/window.innerHeight>.4||a>200)&&(n.value===Ut.DOWN?Ws():Ks())}})}async function ao(){const{saveAs:e}=await ds(()=>import("./FileSaver.min.7f56e709.js").then(t=>t.F),[]);e(ju(be.download)?be.download:be.exportFilename?`${be.exportFilename}.pdf`:"/ML_presentation/slidev-exported.pdf",`${be.title}.pdf`)}async function Vx(e){var t,n;if(e==null){const s=(n=(t=dt.value)==null?void 0:t.meta)==null?void 0:n.slide;if(!(s!=null&&s.filepath))return!1;e=`${s.filepath}:${s.start}`}return await fetch(`/__open-in-editor?file=${encodeURIComponent(e)}`),!0}function na(e,t,n=1){var i,r,o,a,l;const s=(r=(i=t.meta)==null?void 0:i.slide)==null?void 0:r.level;s&&s>n&&e.length>0?na(e[e.length-1].children,t,n+1):e.push({children:[],level:n,path:t.path,hideInToc:Boolean((o=t.meta)==null?void 0:o.hideInToc),title:(l=(a=t.meta)==null?void 0:a.slide)==null?void 0:l.title})}function sa(e,t,n=!1,s){return e.map(i=>{const r={...i,active:i.path===(t==null?void 0:t.path),hasActiveParent:n};return r.children.length>0&&(r.children=sa(r.children,t,r.active||r.hasActiveParent,r)),s&&(r.active||r.activeParent)&&(s.activeParent=!0),r})}function ia(e,t=1){return e.filter(n=>!n.hideInToc).map(n=>({...n,children:ia(n.children,t+1)}))}function Hx(){const e=be.titleTemplate.replace("%s",be.title||"Slidev");Xh({title:e}),am(`${e} - shared`),dm(`${e} - drawings`);function t(){Rt.value&&(il("page",+Be.value),il("clicks",Pt.value))}gt.afterEach(t),ue(Pt,t),lm(n=>{(+n.page!=+Be.value||Pt.value!==n.clicks)&&gt.replace({path:sr(n.page),query:{...gt.currentRoute.value.query,clicks:n.clicks||0}})})}const zx=ke({__name:"App",setup(e){return z(Y),Hx(),(t,n)=>{const s=$i("RouterView"),i=$i("StarportCarrier");return E(),D(Se,null,[J(s),J(i)],64)}}});function Er(e){return e!==null&&typeof e=="object"}function lo(e,t,n=".",s){if(!Er(t))return lo(e,{},n,s);const i=Object.assign({},t);for(const r in e){if(r==="__proto__"||r==="constructor")continue;const o=e[r];o!=null&&(s&&s(i,r,o,n)||(Array.isArray(o)&&Array.isArray(i[r])?i[r]=o.concat(i[r]):Er(o)&&Er(i[r])?i[r]=lo(o,i[r],(n?`${n}.`:"")+r.toString(),s):i[r]=o))}return i}function Bx(e){return(...t)=>t.reduce((n,s)=>lo(n,s,"",e),{})}const Ux=Bx(),kd=1/60*1e3,qx=typeof performance<"u"?()=>performance.now():()=>Date.now(),Od=typeof window<"u"?e=>window.requestAnimationFrame(e):e=>setTimeout(()=>e(qx()),kd);function Kx(e){let t=[],n=[],s=0,i=!1,r=!1;const o=new WeakSet,a={schedule:(l,c=!1,u=!1)=>{const f=u&&i,p=f?t:n;return c&&o.add(l),p.indexOf(l)===-1&&(p.push(l),f&&i&&(s=t.length)),l},cancel:l=>{const c=n.indexOf(l);c!==-1&&n.splice(c,1),o.delete(l)},process:l=>{if(i){r=!0;return}if(i=!0,[t,n]=[n,t],n.length=0,s=t.length,s)for(let c=0;c<s;c++){const u=t[c];u(l),o.has(u)&&(a.schedule(u),e())}i=!1,r&&(r=!1,a.process(l))}};return a}const Wx=40;let co=!0,Ys=!1,uo=!1;const ns={delta:0,timestamp:0},Xs=["read","update","preRender","render","postRender"],ir=Xs.reduce((e,t)=>(e[t]=Kx(()=>Ys=!0),e),{}),fo=Xs.reduce((e,t)=>{const n=ir[t];return e[t]=(s,i=!1,r=!1)=>(Ys||Gx(),n.schedule(s,i,r)),e},{}),Yx=Xs.reduce((e,t)=>(e[t]=ir[t].cancel,e),{});Xs.reduce((e,t)=>(e[t]=()=>ir[t].process(ns),e),{});const Zx=e=>ir[e].process(ns),Md=e=>{Ys=!1,ns.delta=co?kd:Math.max(Math.min(e-ns.timestamp,Wx),1),ns.timestamp=e,uo=!0,Xs.forEach(Zx),uo=!1,Ys&&(co=!1,Od(Md))},Gx=()=>{Ys=!0,co=!0,uo||Od(Md)},Pd=()=>ns;function Ld(e,t){var n={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(n[s]=e[s]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(e);i<s.length;i++)t.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(e,s[i])&&(n[s[i]]=e[s[i]]);return n}var Qx=function(){},ec=function(){};const po=(e,t,n)=>Math.min(Math.max(n,e),t),Sr=.001,Jx=.01,tc=10,Xx=.05,e2=1;function t2({duration:e=800,bounce:t=.25,velocity:n=0,mass:s=1}){let i,r;Qx(e<=tc*1e3);let o=1-t;o=po(Xx,e2,o),e=po(Jx,tc,e/1e3),o<1?(i=c=>{const u=c*o,f=u*e,p=u-n,h=ho(c,o),m=Math.exp(-f);return Sr-p/h*m},r=c=>{const f=c*o*e,p=f*n+n,h=Math.pow(o,2)*Math.pow(c,2)*e,m=Math.exp(-f),y=ho(Math.pow(c,2),o);return(-i(c)+Sr>0?-1:1)*((p-h)*m)/y}):(i=c=>{const u=Math.exp(-c*e),f=(c-n)*e+1;return-Sr+u*f},r=c=>{const u=Math.exp(-c*e),f=(n-c)*(e*e);return u*f});const a=5/e,l=s2(i,r,a);if(e=e*1e3,isNaN(l))return{stiffness:100,damping:10,duration:e};{const c=Math.pow(l,2)*s;return{stiffness:c,damping:o*2*Math.sqrt(s*c),duration:e}}}const n2=12;function s2(e,t,n){let s=n;for(let i=1;i<n2;i++)s=s-e(s)/t(s);return s}function ho(e,t){return e*Math.sqrt(1-t*t)}const i2=["duration","bounce"],r2=["stiffness","damping","mass"];function nc(e,t){return t.some(n=>e[n]!==void 0)}function o2(e){let t=Object.assign({velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1},e);if(!nc(e,r2)&&nc(e,i2)){const n=t2(e);t=Object.assign(Object.assign(Object.assign({},t),n),{velocity:0,mass:1}),t.isResolvedFromDuration=!0}return t}function ra(e){var{from:t=0,to:n=1,restSpeed:s=2,restDelta:i}=e,r=Ld(e,["from","to","restSpeed","restDelta"]);const o={done:!1,value:t};let{stiffness:a,damping:l,mass:c,velocity:u,duration:f,isResolvedFromDuration:p}=o2(r),h=sc,m=sc;function y(){const _=u?-(u/1e3):0,$=n-t,x=l/(2*Math.sqrt(a*c)),S=Math.sqrt(a/c)/1e3;if(i===void 0&&(i=Math.min(Math.abs(n-t)/100,.4)),x<1){const O=ho(S,x);h=I=>{const C=Math.exp(-x*S*I);return n-C*((_+x*S*$)/O*Math.sin(O*I)+$*Math.cos(O*I))},m=I=>{const C=Math.exp(-x*S*I);return x*S*C*(Math.sin(O*I)*(_+x*S*$)/O+$*Math.cos(O*I))-C*(Math.cos(O*I)*(_+x*S*$)-O*$*Math.sin(O*I))}}else if(x===1)h=O=>n-Math.exp(-S*O)*($+(_+S*$)*O);else{const O=S*Math.sqrt(x*x-1);h=I=>{const C=Math.exp(-x*S*I),N=Math.min(O*I,300);return n-C*((_+x*S*$)*Math.sinh(N)+O*$*Math.cosh(N))/O}}}return y(),{next:_=>{const $=h(_);if(p)o.done=_>=f;else{const x=m(_)*1e3,S=Math.abs(x)<=s,O=Math.abs(n-$)<=i;o.done=S&&O}return o.value=o.done?n:$,o},flipTarget:()=>{u=-u,[t,n]=[n,t],y()}}}ra.needsInterpolation=(e,t)=>typeof e=="string"||typeof t=="string";const sc=e=>0,Ad=(e,t,n)=>{const s=t-e;return s===0?1:(n-e)/s},oa=(e,t,n)=>-n*e+n*t+e,Cd=(e,t)=>n=>Math.max(Math.min(n,t),e),Ts=e=>e%1?Number(e.toFixed(5)):e,Zs=/(-)?([\d]*\.?[\d])+/g,mo=/(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,a2=/^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function ei(e){return typeof e=="string"}const ti={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},js=Object.assign(Object.assign({},ti),{transform:Cd(0,1)}),di=Object.assign(Object.assign({},ti),{default:1}),aa=e=>({test:t=>ei(t)&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),gn=aa("deg"),Is=aa("%"),re=aa("px"),ic=Object.assign(Object.assign({},Is),{parse:e=>Is.parse(e)/100,transform:e=>Is.transform(e*100)}),la=(e,t)=>n=>Boolean(ei(n)&&a2.test(n)&&n.startsWith(e)||t&&Object.prototype.hasOwnProperty.call(n,t)),Td=(e,t,n)=>s=>{if(!ei(s))return s;const[i,r,o,a]=s.match(Zs);return{[e]:parseFloat(i),[t]:parseFloat(r),[n]:parseFloat(o),alpha:a!==void 0?parseFloat(a):1}},Sn={test:la("hsl","hue"),parse:Td("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:n,alpha:s=1})=>"hsla("+Math.round(e)+", "+Is.transform(Ts(t))+", "+Is.transform(Ts(n))+", "+Ts(js.transform(s))+")"},l2=Cd(0,255),$r=Object.assign(Object.assign({},ti),{transform:e=>Math.round(l2(e))}),tn={test:la("rgb","red"),parse:Td("red","green","blue"),transform:({red:e,green:t,blue:n,alpha:s=1})=>"rgba("+$r.transform(e)+", "+$r.transform(t)+", "+$r.transform(n)+", "+Ts(js.transform(s))+")"};function c2(e){let t="",n="",s="",i="";return e.length>5?(t=e.substr(1,2),n=e.substr(3,2),s=e.substr(5,2),i=e.substr(7,2)):(t=e.substr(1,1),n=e.substr(2,1),s=e.substr(3,1),i=e.substr(4,1),t+=t,n+=n,s+=s,i+=i),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(s,16),alpha:i?parseInt(i,16)/255:1}}const go={test:la("#"),parse:c2,transform:tn.transform},rt={test:e=>tn.test(e)||go.test(e)||Sn.test(e),parse:e=>tn.test(e)?tn.parse(e):Sn.test(e)?Sn.parse(e):go.parse(e),transform:e=>ei(e)?e:e.hasOwnProperty("red")?tn.transform(e):Sn.transform(e)},jd="${c}",Id="${n}";function u2(e){var t,n,s,i;return isNaN(e)&&ei(e)&&((n=(t=e.match(Zs))===null||t===void 0?void 0:t.length)!==null&&n!==void 0?n:0)+((i=(s=e.match(mo))===null||s===void 0?void 0:s.length)!==null&&i!==void 0?i:0)>0}function Rd(e){typeof e=="number"&&(e=`${e}`);const t=[];let n=0;const s=e.match(mo);s&&(n=s.length,e=e.replace(mo,jd),t.push(...s.map(rt.parse)));const i=e.match(Zs);return i&&(e=e.replace(Zs,Id),t.push(...i.map(ti.parse))),{values:t,numColors:n,tokenised:e}}function Fd(e){return Rd(e).values}function Dd(e){const{values:t,numColors:n,tokenised:s}=Rd(e),i=t.length;return r=>{let o=s;for(let a=0;a<i;a++)o=o.replace(a<n?jd:Id,a<n?rt.transform(r[a]):Ts(r[a]));return o}}const d2=e=>typeof e=="number"?0:e;function f2(e){const t=Fd(e);return Dd(e)(t.map(d2))}const ni={test:u2,parse:Fd,createTransformer:Dd,getAnimatableNone:f2},p2=new Set(["brightness","contrast","saturate","opacity"]);function h2(e){let[t,n]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[s]=n.match(Zs)||[];if(!s)return e;const i=n.replace(s,"");let r=p2.has(t)?1:0;return s!==n&&(r*=100),t+"("+r+i+")"}const m2=/([a-z-]*)\(.*?\)/g,vo=Object.assign(Object.assign({},ni),{getAnimatableNone:e=>{const t=e.match(m2);return t?t.map(h2).join(" "):e}});function kr(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function rc({hue:e,saturation:t,lightness:n,alpha:s}){e/=360,t/=100,n/=100;let i=0,r=0,o=0;if(!t)i=r=o=n;else{const a=n<.5?n*(1+t):n+t-n*t,l=2*n-a;i=kr(l,a,e+1/3),r=kr(l,a,e),o=kr(l,a,e-1/3)}return{red:Math.round(i*255),green:Math.round(r*255),blue:Math.round(o*255),alpha:s}}const g2=(e,t,n)=>{const s=e*e,i=t*t;return Math.sqrt(Math.max(0,n*(i-s)+s))},v2=[go,tn,Sn],oc=e=>v2.find(t=>t.test(e)),Nd=(e,t)=>{let n=oc(e),s=oc(t),i=n.parse(e),r=s.parse(t);n===Sn&&(i=rc(i),n=tn),s===Sn&&(r=rc(r),s=tn);const o=Object.assign({},i);return a=>{for(const l in o)l!=="alpha"&&(o[l]=g2(i[l],r[l],a));return o.alpha=oa(i.alpha,r.alpha,a),n.transform(o)}},_2=e=>typeof e=="number",y2=(e,t)=>n=>t(e(n)),Vd=(...e)=>e.reduce(y2);function Hd(e,t){return _2(e)?n=>oa(e,t,n):rt.test(e)?Nd(e,t):Bd(e,t)}const zd=(e,t)=>{const n=[...e],s=n.length,i=e.map((r,o)=>Hd(r,t[o]));return r=>{for(let o=0;o<s;o++)n[o]=i[o](r);return n}},b2=(e,t)=>{const n=Object.assign(Object.assign({},e),t),s={};for(const i in n)e[i]!==void 0&&t[i]!==void 0&&(s[i]=Hd(e[i],t[i]));return i=>{for(const r in s)n[r]=s[r](i);return n}};function ac(e){const t=ni.parse(e),n=t.length;let s=0,i=0,r=0;for(let o=0;o<n;o++)s||typeof t[o]=="number"?s++:t[o].hue!==void 0?r++:i++;return{parsed:t,numNumbers:s,numRGB:i,numHSL:r}}const Bd=(e,t)=>{const n=ni.createTransformer(t),s=ac(e),i=ac(t);return s.numHSL===i.numHSL&&s.numRGB===i.numRGB&&s.numNumbers>=i.numNumbers?Vd(zd(s.parsed,i.parsed),n):o=>`${o>0?t:e}`},w2=(e,t)=>n=>oa(e,t,n);function x2(e){if(typeof e=="number")return w2;if(typeof e=="string")return rt.test(e)?Nd:Bd;if(Array.isArray(e))return zd;if(typeof e=="object")return b2}function E2(e,t,n){const s=[],i=n||x2(e[0]),r=e.length-1;for(let o=0;o<r;o++){let a=i(e[o],e[o+1]);if(t){const l=Array.isArray(t)?t[o]:t;a=Vd(l,a)}s.push(a)}return s}function S2([e,t],[n]){return s=>n(Ad(e,t,s))}function $2(e,t){const n=e.length,s=n-1;return i=>{let r=0,o=!1;if(i<=e[0]?o=!0:i>=e[s]&&(r=s-1,o=!0),!o){let l=1;for(;l<n&&!(e[l]>i||l===s);l++);r=l-1}const a=Ad(e[r],e[r+1],i);return t[r](a)}}function Ud(e,t,{clamp:n=!0,ease:s,mixer:i}={}){const r=e.length;ec(r===t.length),ec(!s||!Array.isArray(s)||s.length===r-1),e[0]>e[r-1]&&(e=[].concat(e),t=[].concat(t),e.reverse(),t.reverse());const o=E2(t,s,i),a=r===2?S2(e,o):$2(e,o);return n?l=>a(po(e[0],e[r-1],l)):a}const rr=e=>t=>1-e(1-t),ca=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,k2=e=>t=>Math.pow(t,e),qd=e=>t=>t*t*((e+1)*t-e),O2=e=>{const t=qd(e);return n=>(n*=2)<1?.5*t(n):.5*(2-Math.pow(2,-10*(n-1)))},Kd=1.525,M2=4/11,P2=8/11,L2=9/10,Wd=e=>e,ua=k2(2),A2=rr(ua),Yd=ca(ua),Zd=e=>1-Math.sin(Math.acos(e)),Gd=rr(Zd),C2=ca(Gd),da=qd(Kd),T2=rr(da),j2=ca(da),I2=O2(Kd),R2=4356/361,F2=35442/1805,D2=16061/1805,Ri=e=>{if(e===1||e===0)return e;const t=e*e;return e<M2?7.5625*t:e<P2?9.075*t-9.9*e+3.4:e<L2?R2*t-F2*e+D2:10.8*e*e-20.52*e+10.72},N2=rr(Ri),V2=e=>e<.5?.5*(1-Ri(1-e*2)):.5*Ri(e*2-1)+.5;function H2(e,t){return e.map(()=>t||Yd).splice(0,e.length-1)}function z2(e){const t=e.length;return e.map((n,s)=>s!==0?s/(t-1):0)}function B2(e,t){return e.map(n=>n*t)}function bi({from:e=0,to:t=1,ease:n,offset:s,duration:i=300}){const r={done:!1,value:e},o=Array.isArray(t)?t:[e,t],a=B2(s&&s.length===o.length?s:z2(o),i);function l(){return Ud(a,o,{ease:Array.isArray(n)?n:H2(o,n)})}let c=l();return{next:u=>(r.value=c(u),r.done=u>=i,r),flipTarget:()=>{o.reverse(),c=l()}}}function U2({velocity:e=0,from:t=0,power:n=.8,timeConstant:s=350,restDelta:i=.5,modifyTarget:r}){const o={done:!1,value:t};let a=n*e;const l=t+a,c=r===void 0?l:r(l);return c!==l&&(a=c-t),{next:u=>{const f=-a*Math.exp(-u/s);return o.done=!(f>i||f<-i),o.value=o.done?c:c+f,o},flipTarget:()=>{}}}const lc={keyframes:bi,spring:ra,decay:U2};function q2(e){if(Array.isArray(e.to))return bi;if(lc[e.type])return lc[e.type];const t=new Set(Object.keys(e));return t.has("ease")||t.has("duration")&&!t.has("dampingRatio")?bi:t.has("dampingRatio")||t.has("stiffness")||t.has("mass")||t.has("damping")||t.has("restSpeed")||t.has("restDelta")?ra:bi}function Qd(e,t,n=0){return e-t-n}function K2(e,t,n=0,s=!0){return s?Qd(t+-e,t,n):t-(e-t)+n}function W2(e,t,n,s){return s?e>=t+n:e<=-n}const Y2=e=>{const t=({delta:n})=>e(n);return{start:()=>fo.update(t,!0),stop:()=>Yx.update(t)}};function Jd(e){var t,n,{from:s,autoplay:i=!0,driver:r=Y2,elapsed:o=0,repeat:a=0,repeatType:l="loop",repeatDelay:c=0,onPlay:u,onStop:f,onComplete:p,onRepeat:h,onUpdate:m}=e,y=Ld(e,["from","autoplay","driver","elapsed","repeat","repeatType","repeatDelay","onPlay","onStop","onComplete","onRepeat","onUpdate"]);let{to:_}=y,$,x=0,S=y.duration,O,I=!1,C=!0,N;const Q=q2(y);!((n=(t=Q).needsInterpolation)===null||n===void 0)&&n.call(t,s,_)&&(N=Ud([0,100],[s,_],{clamp:!1}),s=0,_=100);const se=Q(Object.assign(Object.assign({},y),{from:s,to:_}));function pe(){x++,l==="reverse"?(C=x%2===0,o=K2(o,S,c,C)):(o=Qd(o,S,c),l==="mirror"&&se.flipTarget()),I=!1,h&&h()}function me(){$.stop(),p&&p()}function Ne(Fe){if(C||(Fe=-Fe),o+=Fe,!I){const Le=se.next(Math.max(0,o));O=Le.value,N&&(O=N(O)),I=C?Le.done:o<=0}m==null||m(O),I&&(x===0&&(S!=null||(S=o)),x<a?W2(o,S,c,C)&&pe():me())}function Ve(){u==null||u(),$=r(Ne),$.start()}return i&&Ve(),{stop:()=>{f==null||f(),$.stop()}}}function Xd(e,t){return t?e*(1e3/t):0}function Z2({from:e=0,velocity:t=0,min:n,max:s,power:i=.8,timeConstant:r=750,bounceStiffness:o=500,bounceDamping:a=10,restDelta:l=1,modifyTarget:c,driver:u,onUpdate:f,onComplete:p,onStop:h}){let m;function y(S){return n!==void 0&&S<n||s!==void 0&&S>s}function _(S){return n===void 0?s:s===void 0||Math.abs(n-S)<Math.abs(s-S)?n:s}function $(S){m==null||m.stop(),m=Jd(Object.assign(Object.assign({},S),{driver:u,onUpdate:O=>{var I;f==null||f(O),(I=S.onUpdate)===null||I===void 0||I.call(S,O)},onComplete:p,onStop:h}))}function x(S){$(Object.assign({type:"spring",stiffness:o,damping:a,restDelta:l},S))}if(y(e))x({from:e,velocity:t,to:_(e)});else{let S=i*t+e;typeof c<"u"&&(S=c(S));const O=_(S),I=O===n?-1:1;let C,N;const Q=se=>{C=N,N=se,t=Xd(se-C,Pd().delta),(I===1&&se>O||I===-1&&se<O)&&x({from:se,to:O,velocity:t})};$({type:"decay",from:e,velocity:t,timeConstant:r,power:i,restDelta:l,modifyTarget:c,onUpdate:y(S)?Q:void 0})}return{stop:()=>m==null?void 0:m.stop()}}const ef=(e,t)=>1-3*t+3*e,tf=(e,t)=>3*t-6*e,nf=e=>3*e,Fi=(e,t,n)=>((ef(t,n)*e+tf(t,n))*e+nf(t))*e,sf=(e,t,n)=>3*ef(t,n)*e*e+2*tf(t,n)*e+nf(t),G2=1e-7,Q2=10;function J2(e,t,n,s,i){let r,o,a=0;do o=t+(n-t)/2,r=Fi(o,s,i)-e,r>0?n=o:t=o;while(Math.abs(r)>G2&&++a<Q2);return o}const X2=8,e5=.001;function t5(e,t,n,s){for(let i=0;i<X2;++i){const r=sf(t,n,s);if(r===0)return t;t-=(Fi(t,n,s)-e)/r}return t}const wi=11,fi=1/(wi-1);function n5(e,t,n,s){if(e===t&&n===s)return Wd;const i=new Float32Array(wi);for(let o=0;o<wi;++o)i[o]=Fi(o*fi,e,n);function r(o){let a=0,l=1;const c=wi-1;for(;l!==c&&i[l]<=o;++l)a+=fi;--l;const u=(o-i[l])/(i[l+1]-i[l]),f=a+u*fi,p=sf(f,e,n);return p>=e5?t5(o,f,e,n):p===0?f:J2(o,a,a+fi,e,n)}return o=>o===0||o===1?o:Fi(r(o),t,s)}const Or={};class s5{constructor(){this.subscriptions=new Set}add(t){return this.subscriptions.add(t),()=>this.subscriptions.delete(t)}notify(t,n,s){if(!!this.subscriptions.size)for(const i of this.subscriptions)i(t,n,s)}clear(){this.subscriptions.clear()}}const cc=e=>!isNaN(parseFloat(e));class i5{constructor(t){this.timeDelta=0,this.lastUpdated=0,this.updateSubscribers=new s5,this.canTrackVelocity=!1,this.updateAndNotify=n=>{this.prev=this.current,this.current=n;const{delta:s,timestamp:i}=Pd();this.lastUpdated!==i&&(this.timeDelta=s,this.lastUpdated=i),fo.postRender(this.scheduleVelocityCheck),this.updateSubscribers.notify(this.current)},this.scheduleVelocityCheck=()=>fo.postRender(this.velocityCheck),this.velocityCheck=({timestamp:n})=>{this.canTrackVelocity||(this.canTrackVelocity=cc(this.current)),n!==this.lastUpdated&&(this.prev=this.current)},this.prev=this.current=t,this.canTrackVelocity=cc(this.current)}onChange(t){return this.updateSubscribers.add(t)}clearListeners(){this.updateSubscribers.clear()}set(t){this.updateAndNotify(t)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?Xd(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0}start(t){return this.stop(),new Promise(n=>{const{stop:s}=t(n);this.stopAnimation=s}).then(()=>this.clearAnimation())}stop(){this.stopAnimation&&this.stopAnimation(),this.clearAnimation()}isAnimating(){return!!this.stopAnimation}clearAnimation(){this.stopAnimation=null}destroy(){this.updateSubscribers.clear(),this.stop()}}function r5(e){return new i5(e)}const{isArray:o5}=Array;function a5(){const e=H({}),t=s=>{const i=r=>{!e.value[r]||(e.value[r].stop(),e.value[r].destroy(),delete e.value[r])};s?o5(s)?s.forEach(i):i(s):Object.keys(e.value).forEach(i)},n=(s,i,r)=>{if(e.value[s])return e.value[s];const o=r5(i);return o.onChange(a=>r[s]=a),e.value[s]=o,o};return jm(t),{motionValues:e,get:n,stop:t}}const l5=e=>Array.isArray(e),vn=()=>({type:"spring",stiffness:500,damping:25,restDelta:.5,restSpeed:10}),Mr=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restDelta:.01,restSpeed:10}),c5=e=>({type:"spring",stiffness:550,damping:e===0?100:30,restDelta:.01,restSpeed:10}),Pr=()=>({type:"keyframes",ease:"linear",duration:300}),u5=e=>({type:"keyframes",duration:800,values:e}),uc={default:c5,x:vn,y:vn,z:vn,rotate:vn,rotateX:vn,rotateY:vn,rotateZ:vn,scaleX:Mr,scaleY:Mr,scale:Mr,backgroundColor:Pr,color:Pr,opacity:Pr},rf=(e,t)=>{let n;return l5(t)?n=u5:n=uc[e]||uc.default,{to:t,...n(t)}},dc={...ti,transform:Math.round},of={color:rt,backgroundColor:rt,outlineColor:rt,fill:rt,stroke:rt,borderColor:rt,borderTopColor:rt,borderRightColor:rt,borderBottomColor:rt,borderLeftColor:rt,borderWidth:re,borderTopWidth:re,borderRightWidth:re,borderBottomWidth:re,borderLeftWidth:re,borderRadius:re,radius:re,borderTopLeftRadius:re,borderTopRightRadius:re,borderBottomRightRadius:re,borderBottomLeftRadius:re,width:re,maxWidth:re,height:re,maxHeight:re,size:re,top:re,right:re,bottom:re,left:re,padding:re,paddingTop:re,paddingRight:re,paddingBottom:re,paddingLeft:re,margin:re,marginTop:re,marginRight:re,marginBottom:re,marginLeft:re,rotate:gn,rotateX:gn,rotateY:gn,rotateZ:gn,scale:di,scaleX:di,scaleY:di,scaleZ:di,skew:gn,skewX:gn,skewY:gn,distance:re,translateX:re,translateY:re,translateZ:re,x:re,y:re,z:re,perspective:re,transformPerspective:re,opacity:js,originX:ic,originY:ic,originZ:re,zIndex:dc,filter:vo,WebkitFilter:vo,fillOpacity:js,strokeOpacity:js,numOctaves:dc},fa=e=>of[e],af=(e,t)=>t&&typeof e=="number"&&t.transform?t.transform(e):e;function d5(e,t){let n=fa(e);return n!==vo&&(n=ni),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const f5={linear:Wd,easeIn:ua,easeInOut:Yd,easeOut:A2,circIn:Zd,circInOut:C2,circOut:Gd,backIn:da,backInOut:j2,backOut:T2,anticipate:I2,bounceIn:N2,bounceInOut:V2,bounceOut:Ri},fc=e=>{if(Array.isArray(e)){const[t,n,s,i]=e;return n5(t,n,s,i)}else if(typeof e=="string")return f5[e];return e},p5=e=>Array.isArray(e)&&typeof e[0]!="number",pc=(e,t)=>e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&ni.test(t)&&!t.startsWith("url("));function h5(e){return Array.isArray(e.to)&&e.to[0]===null&&(e.to=[...e.to],e.to[0]=e.from),e}function m5({ease:e,times:t,delay:n,...s}){const i={...s};return t&&(i.offset=t),e&&(i.ease=p5(e)?e.map(fc):fc(e)),n&&(i.elapsed=-n),i}function g5(e,t,n){return Array.isArray(t.to)&&(e.duration||(e.duration=800)),h5(t),v5(e)||(e={...e,...rf(n,t.to)}),{...t,...m5(e)}}function v5({delay:e,repeat:t,repeatType:n,repeatDelay:s,from:i,...r}){return!!Object.keys(r).length}function _5(e,t){return e[t]||e.default||e}function y5(e,t,n,s,i){const r=_5(s,e);let o=r.from===null||r.from===void 0?t.get():r.from;const a=pc(e,n);o==="none"&&a&&typeof n=="string"&&(o=d5(e,n));const l=pc(e,o);function c(f){const p={from:o,to:n,velocity:s.velocity?s.velocity:t.getVelocity(),onUpdate:h=>t.set(h)};return r.type==="inertia"||r.type==="decay"?Z2({...p,...r}):Jd({...g5(r,p,e),onUpdate:h=>{p.onUpdate(h),r.onUpdate&&r.onUpdate(h)},onComplete:()=>{s.onComplete&&s.onComplete(),i&&i(),f&&f()}})}function u(f){return t.set(n),s.onComplete&&s.onComplete(),i&&i(),f&&f(),{stop:()=>{}}}return!l||!a||r.type===!1?u:c}function b5(){const{motionValues:e,stop:t,get:n}=a5();return{motionValues:e,stop:t,push:(i,r,o,a={},l)=>{const c=o[i],u=n(i,c,o);if(a&&a.immediate){u.set(r);return}const f=y5(i,u,r,a,l);u.start(f)}}}function w5(e,t={},{motionValues:n,push:s,stop:i}=b5()){const r=b(t),o=H(!1);ue(n,f=>{o.value=Object.values(f).filter(p=>p.isAnimating()).length>0},{immediate:!0,deep:!0});const a=f=>{if(!r||!r[f])throw new Error(`The variant ${f} does not exist.`);return r[f]},l=f=>(typeof f=="string"&&(f=a(f)),Promise.all(Object.entries(f).map(([p,h])=>{if(p!=="transition")return new Promise(m=>{s(p,h,e,f.transition||rf(p,f[p]),m)})}).filter(Boolean)));return{isAnimating:o,apply:l,set:f=>{const p=Yr(f)?f:a(f);Object.entries(p).forEach(([h,m])=>{h!=="transition"&&s(h,m,e,{immediate:!0})})},leave:async f=>{let p;if(r&&(r.leave&&(p=r.leave),!r.leave&&r.initial&&(p=r.initial)),!p){f();return}await l(p),f()},stop:i}}const pa=typeof window<"u",x5=()=>pa&&window.onpointerdown===null,E5=()=>pa&&window.ontouchstart===null,S5=()=>pa&&window.onmousedown===null;function $5({target:e,state:t,variants:n,apply:s}){const i=b(n),r=H(!1),o=H(!1),a=H(!1),l=k(()=>{let u=[];return i&&(i.hovered&&(u=[...u,...Object.keys(i.hovered)]),i.tapped&&(u=[...u,...Object.keys(i.tapped)]),i.focused&&(u=[...u,...Object.keys(i.focused)])),u}),c=k(()=>{const u={};Object.assign(u,t.value),r.value&&i.hovered&&Object.assign(u,i.hovered),o.value&&i.tapped&&Object.assign(u,i.tapped),a.value&&i.focused&&Object.assign(u,i.focused);for(const f in u)l.value.includes(f)||delete u[f];return u});i.hovered&&(le(e,"mouseenter",()=>r.value=!0),le(e,"mouseleave",()=>{r.value=!1,o.value=!1}),le(e,"mouseout",()=>{r.value=!1,o.value=!1})),i.tapped&&(S5()&&(le(e,"mousedown",()=>o.value=!0),le(e,"mouseup",()=>o.value=!1)),x5()&&(le(e,"pointerdown",()=>o.value=!0),le(e,"pointerup",()=>o.value=!1)),E5()&&(le(e,"touchstart",()=>o.value=!0),le(e,"touchend",()=>o.value=!1))),i.focused&&(le(e,"focus",()=>a.value=!0),le(e,"blur",()=>a.value=!1)),ue(c,s)}function k5({set:e,target:t,apply:n,variants:s,variant:i}){const r=b(s);ue(()=>t,()=>{!r||(r.initial&&e("initial"),r.enter&&(i.value="enter"))},{immediate:!0,flush:"pre"})}function O5({state:e,apply:t}){ue(e,n=>{n&&t(n)},{immediate:!0})}function M5({target:e,variants:t,variant:n}){const s=b(t);s&&(s.visible||s.visibleOnce)&&Og(e,([{isIntersecting:i}])=>{s.visible?i?n.value="visible":n.value="initial":s.visibleOnce&&(i&&n.value!=="visibleOnce"?n.value="visibleOnce":n.value||(n.value="initial"))})}function P5(e,t={syncVariants:!0,lifeCycleHooks:!0,visibilityHooks:!0,eventListeners:!0}){t.lifeCycleHooks&&k5(e),t.syncVariants&&O5(e),t.visibilityHooks&&M5(e),t.eventListeners&&$5(e)}function lf(e={}){const t=Ce({...e}),n=H({});return ue(t,()=>{const s={};for(const[i,r]of Object.entries(t)){const o=fa(i),a=af(r,o);s[i]=a}n.value=s},{immediate:!0,deep:!0}),{state:t,style:n}}function ha(e,t){ue(()=>kt(e),n=>{!n||t(n)},{immediate:!0})}const L5={x:"translateX",y:"translateY",z:"translateZ"};function cf(e={},t=!0){const n=Ce({...e}),s=H("");return ue(n,i=>{let r="",o=!1;t&&(i.x||i.y||i.z)&&(r+=`translate3d(${[i.x||0,i.y||0,i.z||0].map(re.transform).join(",")}) `,o=!0);for(const[a,l]of Object.entries(i)){if(t&&(a==="x"||a==="y"||a==="z"))continue;const c=fa(a),u=af(l,c);r+=`${L5[a]||a}(${u}) `}t&&!o&&(r+="translateZ(0px) "),s.value=r.trim()},{immediate:!0,deep:!0}),{state:n,transform:s}}const A5=["","X","Y","Z"],C5=["perspective","translate","scale","rotate","skew"],uf=["transformPerspective","x","y","z"];C5.forEach(e=>{A5.forEach(t=>{const n=e+t;uf.push(n)})});const T5=new Set(uf);function ma(e){return T5.has(e)}const j5=new Set(["originX","originY","originZ"]);function df(e){return j5.has(e)}function I5(e){const t={},n={};return Object.entries(e).forEach(([s,i])=>{ma(s)||df(s)?t[s]=i:n[s]=i}),{transform:t,style:n}}function ff(e){const{transform:t,style:n}=I5(e),{transform:s}=cf(t),{style:i}=lf(n);return s.value&&(i.value.transform=s.value),i.value}function R5(e,t){let n,s;const{state:i,style:r}=lf();return ha(e,o=>{s=o;for(const a of Object.keys(of))o.style[a]===null||o.style[a]===""||ma(a)||df(a)||(i[a]=o.style[a]);n&&Object.entries(n).forEach(([a,l])=>o.style[a]=l),t&&t(i)}),ue(r,o=>{if(!s){n=o;return}for(const a in o)s.style[a]=o[a]},{immediate:!0}),{style:i}}function F5(e){const t=e.trim().split(/\) |\)/);if(t.length===1)return{};const n=s=>s.endsWith("px")||s.endsWith("deg")?parseFloat(s):isNaN(Number(s))?Number(s):s;return t.reduce((s,i)=>{if(!i)return s;const[r,o]=i.split("("),l=o.split(",").map(u=>n(u.endsWith(")")?u.replace(")",""):u.trim())),c=l.length===1?l[0]:l;return{...s,[r]:c}},{})}function D5(e,t){Object.entries(F5(t)).forEach(([n,s])=>{const i=["x","y","z"];if(n==="translate3d"){if(s===0){i.forEach(r=>e[r]=0);return}s.forEach((r,o)=>e[i[o]]=r);return}if(s=parseFloat(s),n==="translateX"){e.x=s;return}if(n==="translateY"){e.y=s;return}if(n==="translateZ"){e.z=s;return}e[n]=s})}function N5(e,t){let n,s;const{state:i,transform:r}=cf();return ha(e,o=>{s=o,o.style.transform&&D5(i,o.style.transform),n&&(o.style.transform=n),t&&t(i)}),ue(r,o=>{if(!s){n=o;return}s.style.transform=o},{immediate:!0}),{transform:i}}function V5(e,t){const n=Ce({}),s=o=>Object.entries(o).forEach(([a,l])=>n[a]=l),{style:i}=R5(e,s),{transform:r}=N5(e,s);return ue(n,o=>{Object.entries(o).forEach(([a,l])=>{const c=ma(a)?r:i;c[a]&&c[a]===l||(c[a]=l)})},{immediate:!0,deep:!0}),ha(e,()=>t&&s(t)),{motionProperties:n,style:i,transform:r}}function H5(e={}){const t=b(e),n=H();return{state:k(()=>{if(!!n.value)return t[n.value]}),variant:n}}function pf(e,t={},n){const{motionProperties:s}=V5(e),{variant:i,state:r}=H5(t),o=w5(s,t),a={target:e,variant:i,variants:t,state:r,motionProperties:s,...o};return P5(a,n),a}const z5=["initial","enter","leave","visible","visible-once","hovered","tapped","focused","delay"],B5=(e,t)=>{const n=e.props?e.props:e.data&&e.data.attrs?e.data.attrs:{};n&&(n.variants&&Yr(n.variants)&&(t.value={...t.value,...n.variants}),z5.forEach(s=>{if(s==="delay"){if(n&&n[s]&&vm(n[s])){const i=n[s];t&&t.value&&(t.value.enter&&(t.value.enter.transition||(t.value.enter.transition={}),t.value.enter.transition={delay:i,...t.value.enter.transition}),t.value.visible&&(t.value.visible.transition||(t.value.visible.transition={}),t.value.visible.transition={delay:i,...t.value.visible.transition}),t.value.visibleOnce&&(t.value.visibleOnce.transition||(t.value.visibleOnce.transition={}),t.value.visibleOnce.transition={delay:i,...t.value.visibleOnce.transition}))}return}s==="visible-once"&&(s="visibleOnce"),n&&n[s]&&Yr(n[s])&&(t.value[s]=n[s])}))},Lr=e=>({created:(s,i,r)=>{const o=i.value&&typeof i.value=="string"?i.value:r.key;o&&Or[o]&&Or[o].stop();const a=H(e||{});typeof i.value=="object"&&(a.value=i.value),B5(r,a);const l=pf(s,a);s.motionInstance=l,o&&(Or[o]=l)},unmounted:s=>{s.motionInstance&&s.motionInstance.stop()},getSSRProps(s,i){let{initial:r}=s.value||i&&(i==null?void 0:i.props)||{};r=b(r);const o=Ux((e==null?void 0:e.initial)||{},r||{});return!o||Object.keys(o).length===0?void 0:{style:ff(o)}}}),U5={initial:{opacity:0},enter:{opacity:1}},q5={initial:{opacity:0},visible:{opacity:1}},K5={initial:{opacity:0},visibleOnce:{opacity:1}},W5={initial:{scale:0,opacity:0},enter:{scale:1,opacity:1}},Y5={initial:{scale:0,opacity:0},visible:{scale:1,opacity:1}},Z5={initial:{scale:0,opacity:0},visibleOnce:{scale:1,opacity:1}},G5={initial:{x:-100,rotate:90,opacity:0},enter:{x:0,rotate:0,opacity:1}},Q5={initial:{x:-100,rotate:90,opacity:0},visible:{x:0,rotate:0,opacity:1}},J5={initial:{x:-100,rotate:90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},X5={initial:{x:100,rotate:-90,opacity:0},enter:{x:0,rotate:0,opacity:1}},eE={initial:{x:100,rotate:-90,opacity:0},visible:{x:0,rotate:0,opacity:1}},tE={initial:{x:100,rotate:-90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},nE={initial:{y:-100,rotate:-90,opacity:0},enter:{y:0,rotate:0,opacity:1}},sE={initial:{y:-100,rotate:-90,opacity:0},visible:{y:0,rotate:0,opacity:1}},iE={initial:{y:-100,rotate:-90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},rE={initial:{y:100,rotate:90,opacity:0},enter:{y:0,rotate:0,opacity:1}},oE={initial:{y:100,rotate:90,opacity:0},visible:{y:0,rotate:0,opacity:1}},aE={initial:{y:100,rotate:90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},lE={initial:{x:-100,opacity:0},enter:{x:0,opacity:1}},cE={initial:{x:-100,opacity:0},visible:{x:0,opacity:1}},uE={initial:{x:-100,opacity:0},visibleOnce:{x:0,opacity:1}},dE={initial:{x:100,opacity:0},enter:{x:0,opacity:1}},fE={initial:{x:100,opacity:0},visible:{x:0,opacity:1}},pE={initial:{x:100,opacity:0},visibleOnce:{x:0,opacity:1}},hE={initial:{y:-100,opacity:0},enter:{y:0,opacity:1}},mE={initial:{y:-100,opacity:0},visible:{y:0,opacity:1}},gE={initial:{y:-100,opacity:0},visibleOnce:{y:0,opacity:1}},vE={initial:{y:100,opacity:0},enter:{y:0,opacity:1}},_E={initial:{y:100,opacity:0},visible:{y:0,opacity:1}},yE={initial:{y:100,opacity:0},visibleOnce:{y:0,opacity:1}},_o={__proto__:null,fade:U5,fadeVisible:q5,fadeVisibleOnce:K5,pop:W5,popVisible:Y5,popVisibleOnce:Z5,rollBottom:rE,rollLeft:G5,rollRight:X5,rollTop:nE,rollVisibleBottom:oE,rollVisibleLeft:Q5,rollVisibleRight:eE,rollVisibleTop:sE,rollVisibleOnceBottom:aE,rollVisibleOnceLeft:J5,rollVisibleOnceRight:tE,rollVisibleOnceTop:iE,slideBottom:vE,slideLeft:lE,slideRight:dE,slideTop:hE,slideVisibleBottom:_E,slideVisibleLeft:cE,slideVisibleRight:fE,slideVisibleTop:mE,slideVisibleOnceBottom:yE,slideVisibleOnceLeft:uE,slideVisibleOnceRight:pE,slideVisibleOnceTop:gE},bE=ke({props:{is:{type:[String,Object],required:!1},preset:{type:String,required:!1},instance:{type:Object,required:!1},variants:{type:Object,required:!1},initial:{type:Object,required:!1},enter:{type:Object,required:!1},leave:{type:Object,required:!1},visible:{type:Object,required:!1},visibleOnce:{type:Object,required:!1},hovered:{type:Object,required:!1},tapped:{type:Object,required:!1},focused:{type:Object,required:!1},delay:{type:[Number,String],required:!1}},setup(e){var a;const t=fh(),n=Ce({});if(!e.is&&!t.default)return()=>ht("div",{});const s=k(()=>{let l;return e.preset&&(l=_o[e.preset]),l}),i=k(()=>({initial:e.initial,enter:e.enter,leave:e.leave,visible:e.visible,visibleOnce:e.visibleOnce,hovered:e.hovered,tapped:e.tapped,focused:e.focused})),r=k(()=>{const l={...i.value,...s.value||{},...e.variants||{}};return e.delay&&(l.enter.transition={...l.enter.transition},l.enter.transition.delay=parseInt(e.delay)),l}),o=k(()=>{if(!e.is)return;let l=e.is;return typeof o.value=="string"&&!Sf(l)&&(l=$i(l)),l});if(((a=process==null?void 0:process.env)==null?void 0:a.NODE_ENV)==="development"||(process==null?void 0:process.dev)){const l=c=>{var u;(u=c.variants)!=null&&u.initial&&c.set("initial"),setTimeout(()=>{var f,p,h;(f=c.variants)!=null&&f.enter&&c.apply("enter"),(p=c.variants)!=null&&p.visible&&c.apply("visible"),(h=c.variants)!=null&&h.visibleOnce&&c.apply("visibleOnce")},10)};Fo(()=>Object.entries(n).forEach(([c,u])=>l(u)))}return{slots:t,component:o,motionConfig:r,instances:n}},render({slots:e,motionConfig:t,instances:n,component:s}){var a;const i=ff(t.initial||{}),r=(l,c)=>(l.props||(l.props={}),l.props.style=i,l.props.onVnodeMounted=({el:u})=>{const f=pf(u,t);n[c]=f},l);if(s){const l=ht(s,void 0,e);return r(l,0),l}return(((a=e.default)==null?void 0:a.call(e))||[]).map((l,c)=>r(l,c))}});function wE(e){const t="\xE0\xE1\xE2\xE4\xE6\xE3\xE5\u0101\u0103\u0105\xE7\u0107\u010D\u0111\u010F\xE8\xE9\xEA\xEB\u0113\u0117\u0119\u011B\u011F\u01F5\u1E27\xEE\xEF\xED\u012B\u012F\xEC\u0142\u1E3F\xF1\u0144\u01F9\u0148\xF4\xF6\xF2\xF3\u0153\xF8\u014D\xF5\u0151\u1E55\u0155\u0159\xDF\u015B\u0161\u015F\u0219\u0165\u021B\xFB\xFC\xF9\xFA\u016B\u01D8\u016F\u0171\u0173\u1E83\u1E8D\xFF\xFD\u017E\u017A\u017C\xB7/_,:;",n="aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------",s=new RegExp(t.split("").join("|"),"g");return e.toString().replace(/[A-Z]/g,i=>`-${i}`).toLowerCase().replace(/\s+/g,"-").replace(s,i=>n.charAt(t.indexOf(i))).replace(/&/g,"-and-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}const xE={install(e,t){if(e.directive("motion",Lr()),e.component("Motion",bE),!t||t&&!t.excludePresets)for(const n in _o){const s=_o[n];e.directive(`motion-${wE(n)}`,Lr(s))}if(t&&t.directives)for(const n in t.directives){const s=t.directives[n];s.initial,e.directive(`motion-${n}`,Lr(s))}}};var hc;const Rs=typeof window<"u",EE=Object.prototype.toString,SE=e=>EE.call(e)==="[object Object]";Rs&&((hc=window==null?void 0:window.navigator)==null?void 0:hc.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function $E(e){return Ic()?(Rc(e),!0):!1}function kE(e){var t;const n=b(e);return(t=n==null?void 0:n.$el)!=null?t:n}const OE=Rs?window:void 0,yo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},bo="__vueuse_ssr_handlers__";yo[bo]=yo[bo]||{};yo[bo];function ME(e,t={}){const{immediate:n=!0,window:s=OE}=t,i=H(!1);let r=null;function o(){!i.value||!s||(e(),r=s.requestAnimationFrame(o))}function a(){!i.value&&s&&(i.value=!0,o())}function l(){i.value=!1,r!=null&&s&&(s.cancelAnimationFrame(r),r=null)}return n&&a(),$E(l),{isActive:i,pause:l,resume:a}}var mc;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(mc||(mc={}));const ga="vue-starport-injection",hf="vue-starport-options",PE={duration:800,easing:"cubic-bezier(0.45, 0, 0.55, 1)",keepAlive:!1},mf={port:{type:String,required:!0},duration:{type:Number,required:!1},easing:{type:String,required:!1},keepAlive:{type:Boolean,required:!1,default:void 0},mountedProps:{type:Object,required:!1},initialProps:{type:Object,required:!1}};var LE=Object.defineProperty,Di=Object.getOwnPropertySymbols,gf=Object.prototype.hasOwnProperty,vf=Object.prototype.propertyIsEnumerable,gc=(e,t,n)=>t in e?LE(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,AE=(e,t)=>{for(var n in t||(t={}))gf.call(t,n)&&gc(e,n,t[n]);if(Di)for(var n of Di(t))vf.call(t,n)&&gc(e,n,t[n]);return e},vc=(e,t)=>{var n={};for(var s in e)gf.call(e,s)&&t.indexOf(s)<0&&(n[s]=e[s]);if(e!=null&&Di)for(var s of Di(e))t.indexOf(s)<0&&vf.call(e,s)&&(n[s]=e[s]);return n};const CE=ke({name:"StarportProxy",props:AE({props:{type:Object,default:()=>({})},component:{type:Object,required:!0}},mf),setup(e,t){const n=z(ga),s=k(()=>n.getInstance(e.port,e.component)),i=H(),r=s.value.generateId(),o=H(!1);return s.value.isVisible||(s.value.land(),o.value=!0),Gs(async()=>{s.value.el||(s.value.el=i.value,await Ze(),o.value=!0,s.value.rect.update())}),Qi(async()=>{s.value.rect.update(),s.value.liftOff(),s.value.el=void 0,o.value=!1,!s.value.options.keepAlive&&(await Ze(),await Ze(),!s.value.el&&n.dispose(s.value.port))}),ue(()=>e,async()=>{s.value.props&&await Ze();const a=e,{props:l}=a,c=vc(a,["props"]);s.value.props=l||{},s.value.setLocalOptions(c)},{deep:!0,immediate:!0}),()=>{const a=e,{initialProps:l,mountedProps:c}=a,u=vc(a,["initialProps","mountedProps"]),f=Mi(u,(o.value?c:l)||{});return ht("div",Mi(f,{id:r,ref:i,"data-starport-proxy":s.value.componentId,"data-starport-landed":s.value.isLanded?"true":void 0,"data-starport-floating":s.value.isLanded?void 0:"true"}),t.slots.default?ht(t.slots.default):void 0)}}});var TE=Object.defineProperty,jE=Object.defineProperties,IE=Object.getOwnPropertyDescriptors,_c=Object.getOwnPropertySymbols,RE=Object.prototype.hasOwnProperty,FE=Object.prototype.propertyIsEnumerable,yc=(e,t,n)=>t in e?TE(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,DE=(e,t)=>{for(var n in t||(t={}))RE.call(t,n)&&yc(e,n,t[n]);if(_c)for(var n of _c(t))FE.call(t,n)&&yc(e,n,t[n]);return e},NE=(e,t)=>jE(e,IE(t));const VE=ke({name:"Starport",inheritAttrs:!0,props:mf,setup(e,t){const n=H(!1);return Gs(()=>{n.value=!0}),()=>{var o,a;const s=(a=(o=t.slots).default)==null?void 0:a.call(o);if(!s)throw new Error("[Vue Starport] Slot is required to use <Starport>");if(s.length!==1)throw new Error(`[Vue Starport] <Starport> requires exactly one slot, but got ${s.length}`);const i=s[0];let r=i.type;return(!SE(r)||is(r))&&(r={render(){return s}}),ht(CE,NE(DE({},e),{key:e.port,component:qi(r),props:i.props}))}}});function HE(e){const t=Ce({height:0,width:0,left:0,top:0,update:s,listen:r,pause:o,margin:"0px",padding:"0px"}),n=Rs?document.documentElement||document.body:void 0;function s(){if(!Rs)return;const a=kE(e);if(!a)return;const{height:l,width:c,left:u,top:f}=a.getBoundingClientRect(),p=window.getComputedStyle(a),h=p.margin,m=p.padding;Object.assign(t,{height:l,width:c,left:u,top:n.scrollTop+f,margin:h,padding:m})}const i=ME(s,{immediate:!1});function r(){!Rs||(s(),i.resume())}function o(){i.pause()}return t}let zE=(e,t=21)=>(n=t)=>{let s="",i=n;for(;i--;)s+=e[Math.random()*e.length|0];return s};const bc=zE("abcdefghijklmnopqrstuvwxyz",5);function wc(e){return e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase().replace(/[^\w\d_-]/g,"")}function BE(e){var t;return e.name||((t=e.__file)==null?void 0:t.split(/[\/\\.]/).slice(-2)[0])||""}var UE=Object.defineProperty,xc=Object.getOwnPropertySymbols,qE=Object.prototype.hasOwnProperty,KE=Object.prototype.propertyIsEnumerable,Ec=(e,t,n)=>t in e?UE(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Ar=(e,t)=>{for(var n in t||(t={}))qE.call(t,n)&&Ec(e,n,t[n]);if(xc)for(var n of xc(t))KE.call(t,n)&&Ec(e,n,t[n]);return e};function WE(e,t,n={}){const s=BE(t),i=wc(s)||bc(),r=H(),o=H(null),a=H(!1),l=H(!1),c=Cf(!0),u=H({}),f=k(()=>Ar(Ar(Ar({},PE),n),u.value)),p=H(0);let h;c.run(()=>{h=HE(r),ue(r,async $=>{$&&(l.value=!0),await Ze(),r.value||(l.value=!1)})});const m=wc(e);function y(){return`starport-${i}-${m}-${bc()}`}const _=y();return Ce({el:r,id:_,port:e,props:o,rect:h,scope:c,isLanded:a,isVisible:l,options:f,liftOffTime:p,component:t,componentName:s,componentId:i,generateId:y,setLocalOptions($={}){u.value=JSON.parse(JSON.stringify($))},elRef(){return r},liftOff(){!a.value||(a.value=!1,p.value=Date.now(),h.listen())},land(){a.value||(a.value=!0,h.pause())}})}function YE(e){const t=Ce(new Map);function n(i,r){let o=t.get(i);return o||(o=WE(i,r,e),t.set(i,o)),o.component=r,o}function s(i){var r;(r=t.get(i))==null||r.scope.stop(),t.delete(i)}return{portMap:t,dispose:s,getInstance:n}}var ZE=Object.defineProperty,GE=Object.defineProperties,QE=Object.getOwnPropertyDescriptors,Sc=Object.getOwnPropertySymbols,JE=Object.prototype.hasOwnProperty,XE=Object.prototype.propertyIsEnumerable,$c=(e,t,n)=>t in e?ZE(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,eS=(e,t)=>{for(var n in t||(t={}))JE.call(t,n)&&$c(e,n,t[n]);if(Sc)for(var n of Sc(t))XE.call(t,n)&&$c(e,n,t[n]);return e},tS=(e,t)=>GE(e,QE(t));const nS=ke({name:"StarportCraft",props:{port:{type:String,required:!0},component:{type:Object,required:!0}},setup(e){const t=z(ga);if(!t)throw new Error("[Vue Starport] Failed to find the carrier, all Starport components must be wrapped in a <StarportCarrier> component.");const n=k(()=>t.getInstance(e.port,e.component)),s=k(()=>{var o;return((o=n.value.el)==null?void 0:o.id)||n.value.id}),i=k(()=>{const o=Date.now()-n.value.liftOffTime,a=Math.max(0,n.value.options.duration-o),l=n.value.rect,c={position:"absolute",left:0,top:0,width:`${l.width}px`,height:`${l.height}px`,margin:l.margin,padding:l.padding,transform:`translate3d(${l.left}px,${l.top}px,0px)`};return!n.value.isVisible||!n.value.el?tS(eS({},c),{zIndex:-1,display:"none"}):(n.value.isLanded?c.display="none":Object.assign(c,{transitionProperty:"all",transitionDuration:`${a}ms`,transitionTimingFunction:n.value.options.easing}),c)}),r={};return()=>{const o=!!(n.value.isLanded&&n.value.el);return ht("div",{style:i.value,"data-starport-craft":n.value.componentId,"data-starport-landed":n.value.isLanded?"true":void 0,"data-starport-floating":n.value.isLanded?void 0:"true",onTransitionend:n.value.land},ht(nh,{to:o?`#${s.value}`:"body",disabled:!o},ht(n.value.component,Mi(r,n.value.props))))}}}),sS=ke({name:"StarportCarrier",setup(e,{slots:t}){const n=YE(z(hf,{}));return In().appContext.app.provide(ga,n),()=>{var i;return[(i=t.default)==null?void 0:i.call(t),Array.from(n.portMap.entries()).map(([r,{component:o}])=>ht(nS,{key:r,port:r,component:o}))]}}});function iS(e={}){return{install(t){t.provide(hf,e),t.component("Starport",VE),t.component("StarportCarrier",sS)}}}function rS(e){function t(){document.documentElement.style.setProperty("--vh",`${window.innerHeight*.01}px`)}t(),window.addEventListener("resize",t),e.app.use(xE),e.app.use(iS({keepAlive:!0}))}function lt(e,t,n){var s,i;return(i=((s=e.instance)==null?void 0:s.$).provides[t])!=null?i:n}function oS(){return{install(e){e.directive("click",{name:"v-click",mounted(t,n){var u,f,p,h;if(Cs.value||((u=lt(n,gi))==null?void 0:u.value))return;const s=lt(n,Un),i=lt(n,mi),r=lt(n,Wr),o=n.modifiers.hide!==!1&&n.modifiers.hide!=null,a=n.modifiers.fade!==!1&&n.modifiers.fade!=null,l=((f=s==null?void 0:s.value)==null?void 0:f.length)||0,c=a?nm:pr;if(s&&!((p=s==null?void 0:s.value)!=null&&p.includes(t))&&s.value.push(t),n.value===null&&(n.value=s==null?void 0:s.value.length),!(r!=null&&r.value.has(n.value)))r==null||r.value.set(n.value,[t]);else if(!((h=r==null?void 0:r.value.get(n.value))!=null&&h.includes(t))){const m=(r==null?void 0:r.value.get(n.value))||[];r==null||r.value.set(n.value,[t].concat(m))}t==null||t.classList.toggle(Vn,!0),i&&ue(i,()=>{var $;const m=($=i==null?void 0:i.value)!=null?$:0,y=n.value!=null?m>=n.value:m>l;t.classList.contains(hr)||t.classList.toggle(c,!y),o!==!1&&o!==void 0&&t.classList.toggle(c,y),t.classList.toggle(ys,!1);const _=r==null?void 0:r.value.get(m);_==null||_.forEach((x,S)=>{x.classList.toggle(ci,!1),S===_.length-1?x.classList.toggle(ys,!0):x.classList.toggle(ci,!0)}),t.classList.contains(ys)||t.classList.toggle(ci,y)},{immediate:!0})},unmounted(t,n){t==null||t.classList.toggle(Vn,!1);const s=lt(n,Un);s!=null&&s.value&&sl(s.value,t)}}),e.directive("after",{name:"v-after",mounted(t,n){var a,l;if(Cs.value||((a=lt(n,gi))==null?void 0:a.value))return;const s=lt(n,Un),i=lt(n,mi),r=lt(n,Wr),o=s==null?void 0:s.value.length;n.value===void 0&&(n.value=s==null?void 0:s.value.length),r!=null&&r.value.has(n.value)?(l=r==null?void 0:r.value.get(n.value))==null||l.push(t):r==null||r.value.set(n.value,[t]),t==null||t.classList.toggle(Vn,!0),i&&ue(i,()=>{var u,f,p;const c=((u=i.value)!=null?u:0)>=((p=(f=n.value)!=null?f:o)!=null?p:0);t.classList.contains(hr)||t.classList.toggle(pr,!c),t.classList.toggle(ys,!1),t.classList.contains(ys)||t.classList.toggle(ci,c)},{immediate:!0})},unmounted(t){t==null||t.classList.toggle(Vn,!0)}}),e.directive("click-hide",{name:"v-click-hide",mounted(t,n){var o,a,l;if(Cs.value||((o=lt(n,gi))==null?void 0:o.value))return;const s=lt(n,Un),i=lt(n,mi),r=((a=s==null?void 0:s.value)==null?void 0:a.length)||0;s&&!((l=s==null?void 0:s.value)!=null&&l.includes(t))&&s.value.push(t),t==null||t.classList.toggle(Vn,!0),i&&ue(i,()=>{var f;const c=(f=i==null?void 0:i.value)!=null?f:0,u=n.value!=null?c>=n.value:c>r;t.classList.toggle(pr,u),t.classList.toggle(hr,u)},{immediate:!0})},unmounted(t,n){t==null||t.classList.toggle(Vn,!1);const s=lt(n,Un);s!=null&&s.value&&sl(s.value,t)}})}}}function aS(e,t){const n=dd(e),s=fd(t,n.currentRoute,n.currentPage);return{nav:{...n,...s,downloadPDF:ao,next:on,nextSlide:Ks,openInEditor:Vx,prev:an,prevSlide:Ws},configs:be,themeConfigs:k(()=>be.themeConfig)}}function lS(){return{install(e){const t=aS(Gt,Pt);e.provide(Y,Ce(t))}}}const ms=Dh(zx);ms.use(gt);ms.use(Qh());ms.use(oS());ms.use(lS());rS({app:ms,router:gt});ms.mount("#app");export{Ss as $,fe as A,we as B,et as C,q_ as D,Tn as E,Se as F,jn as G,Pt as H,Ii as I,Ix as J,xr as K,mr as L,Us as M,br as N,Au as O,Gy as P,Yo as Q,Wy as R,Zo as S,Be as T,$d as U,e0 as V,Zt as W,Ct as X,cS as Y,cn as Z,ad as _,d as a,ui as a0,Qs as a1,En as a2,Dt as a3,io as a4,x_ as a5,E_ as a6,S_ as a7,k_ as a8,Ue as a9,ku as aa,pS as ab,tt as ac,j0 as ad,Pu as ae,O_ as af,Qi as ag,z_ as ah,k as b,D as c,ke as d,Y as e,dt as f,W as g,b as h,z as i,I_ as j,Nx as k,be as l,Xh as m,Ie as n,E as o,Gs as p,Ce as q,H as r,uS as s,Ln as t,dS as u,fS as v,ue as w,J as x,nt as y,ae as z};
