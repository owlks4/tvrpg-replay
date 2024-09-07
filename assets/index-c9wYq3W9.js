(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function t(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(i){if(i.ep)return;i.ep=!0;const a=t(i);fetch(i.href,a)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const as="161",fn={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},ri={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Od=0,Rs=1,Gd=2,Hc=1,Hd=2,hn=3,Sn=0,Ct=1,Ft=2,Ln=0,Ci=1,ws=2,Ls=3,Ps=4,zd=5,Xn=100,Vd=101,Wd=102,Ds=103,Ns=104,Xd=200,qd=201,jd=202,Yd=203,Xa=204,qa=205,Kd=206,Qd=207,Zd=208,$d=209,Jd=210,el=211,tl=212,nl=213,il=214,rl=0,al=1,sl=2,Hr=3,ol=4,cl=5,dl=6,ll=7,zc=0,ul=1,hl=2,Pn=0,fl=1,ml=2,pl=3,gl=4,_l=5,Sl=6,Is="attached",xl="detached",Vc=300,Li=301,Pi=302,ja=303,Ya=304,Yr=306,Di=1e3,Ut=1001,zr=1002,ft=1003,Ka=1004,yi=1005,Et=1006,Br=1007,mn=1008,Dn=1009,vl=1010,El=1011,ss=1012,Wc=1013,Rn=1014,jt=1015,tr=1016,Xc=1017,qc=1018,Qn=1020,Ml=1021,Bt=1023,yl=1024,Tl=1025,Zn=1026,Ni=1027,Al=1028,jc=1029,kl=1030,Yc=1031,Kc=1033,aa=33776,sa=33777,oa=33778,ca=33779,Fs=35840,Us=35841,Bs=35842,Os=35843,Qc=36196,Gs=37492,Hs=37496,zs=37808,Vs=37809,Ws=37810,Xs=37811,qs=37812,js=37813,Ys=37814,Ks=37815,Qs=37816,Zs=37817,$s=37818,Js=37819,eo=37820,to=37821,da=36492,no=36494,io=36495,bl=36283,ro=36284,ao=36285,so=36286,nr=2300,Ii=2301,la=2302,oo=2400,co=2401,lo=2402,Cl=2500,Rl=0,Zc=1,Qa=2,$c=3e3,$n=3001,wl=3200,Ll=3201,Jc=0,Pl=1,Ot="",at="srgb",_t="srgb-linear",os="display-p3",Kr="display-p3-linear",Vr="linear",tt="srgb",Wr="rec709",Xr="p3",ai=7680,uo=519,Dl=512,Nl=513,Il=514,ed=515,Fl=516,Ul=517,Bl=518,Ol=519,Za=35044,ho="300 es",$a=1035,pn=2e3,qr=2001;class ii{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const a=i.indexOf(t);a!==-1&&i.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let a=0,s=i.length;a<s;a++)i[a].call(this,e);e.target=null}}}const xt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let fo=1234567;const Ji=Math.PI/180,Fi=180/Math.PI;function Wt(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(xt[r&255]+xt[r>>8&255]+xt[r>>16&255]+xt[r>>24&255]+"-"+xt[e&255]+xt[e>>8&255]+"-"+xt[e>>16&15|64]+xt[e>>24&255]+"-"+xt[t&63|128]+xt[t>>8&255]+"-"+xt[t>>16&255]+xt[t>>24&255]+xt[n&255]+xt[n>>8&255]+xt[n>>16&255]+xt[n>>24&255]).toLowerCase()}function gt(r,e,t){return Math.max(e,Math.min(t,r))}function cs(r,e){return(r%e+e)%e}function Gl(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function Hl(r,e,t){return r!==e?(t-r)/(e-r):0}function er(r,e,t){return(1-t)*r+t*e}function zl(r,e,t,n){return er(r,e,1-Math.exp(-t*n))}function Vl(r,e=1){return e-Math.abs(cs(r,e*2)-e)}function Wl(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function Xl(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function ql(r,e){return r+Math.floor(Math.random()*(e-r+1))}function jl(r,e){return r+Math.random()*(e-r)}function Yl(r){return r*(.5-Math.random())}function Kl(r){r!==void 0&&(fo=r);let e=fo+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Ql(r){return r*Ji}function Zl(r){return r*Fi}function Ja(r){return(r&r-1)===0&&r!==0}function $l(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function jr(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Jl(r,e,t,n,i){const a=Math.cos,s=Math.sin,o=a(t/2),c=s(t/2),d=a((e+n)/2),l=s((e+n)/2),u=a((e-n)/2),h=s((e-n)/2),p=a((n-e)/2),g=s((n-e)/2);switch(i){case"XYX":r.set(o*l,c*u,c*h,o*d);break;case"YZY":r.set(c*h,o*l,c*u,o*d);break;case"ZXZ":r.set(c*u,c*h,o*l,o*d);break;case"XZX":r.set(o*l,c*g,c*p,o*d);break;case"YXY":r.set(c*p,o*l,c*g,o*d);break;case"ZYZ":r.set(c*g,c*p,o*l,o*d);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Vt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Qe(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const td={DEG2RAD:Ji,RAD2DEG:Fi,generateUUID:Wt,clamp:gt,euclideanModulo:cs,mapLinear:Gl,inverseLerp:Hl,lerp:er,damp:zl,pingpong:Vl,smoothstep:Wl,smootherstep:Xl,randInt:ql,randFloat:jl,randFloatSpread:Yl,seededRandom:Kl,degToRad:Ql,radToDeg:Zl,isPowerOfTwo:Ja,ceilPowerOfTwo:$l,floorPowerOfTwo:jr,setQuaternionFromProperEuler:Jl,normalize:Qe,denormalize:Vt};class Te{constructor(e=0,t=0){Te.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(gt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),a=this.x-e.x,s=this.y-e.y;return this.x=a*n-s*i+e.x,this.y=a*i+s*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Oe{constructor(e,t,n,i,a,s,o,c,d){Oe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,a,s,o,c,d)}set(e,t,n,i,a,s,o,c,d){const l=this.elements;return l[0]=e,l[1]=i,l[2]=o,l[3]=t,l[4]=a,l[5]=c,l[6]=n,l[7]=s,l[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,a=this.elements,s=n[0],o=n[3],c=n[6],d=n[1],l=n[4],u=n[7],h=n[2],p=n[5],g=n[8],_=i[0],f=i[3],m=i[6],y=i[1],v=i[4],T=i[7],L=i[2],C=i[5],A=i[8];return a[0]=s*_+o*y+c*L,a[3]=s*f+o*v+c*C,a[6]=s*m+o*T+c*A,a[1]=d*_+l*y+u*L,a[4]=d*f+l*v+u*C,a[7]=d*m+l*T+u*A,a[2]=h*_+p*y+g*L,a[5]=h*f+p*v+g*C,a[8]=h*m+p*T+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],a=e[3],s=e[4],o=e[5],c=e[6],d=e[7],l=e[8];return t*s*l-t*o*d-n*a*l+n*o*c+i*a*d-i*s*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],a=e[3],s=e[4],o=e[5],c=e[6],d=e[7],l=e[8],u=l*s-o*d,h=o*c-l*a,p=d*a-s*c,g=t*u+n*h+i*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=u*_,e[1]=(i*d-l*n)*_,e[2]=(o*n-i*s)*_,e[3]=h*_,e[4]=(l*t-i*c)*_,e[5]=(i*a-o*t)*_,e[6]=p*_,e[7]=(n*c-d*t)*_,e[8]=(s*t-n*a)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,a,s,o){const c=Math.cos(a),d=Math.sin(a);return this.set(n*c,n*d,-n*(c*s+d*o)+s+e,-i*d,i*c,-i*(-d*s+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(ua.makeScale(e,t)),this}rotate(e){return this.premultiply(ua.makeRotation(-e)),this}translate(e,t){return this.premultiply(ua.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ua=new Oe;function nd(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function ir(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function eu(){const r=ir("canvas");return r.style.display="block",r}const mo={};function Jn(r){r in mo||(mo[r]=!0,console.warn(r))}const po=new Oe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),go=new Oe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),lr={[_t]:{transfer:Vr,primaries:Wr,toReference:r=>r,fromReference:r=>r},[at]:{transfer:tt,primaries:Wr,toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[Kr]:{transfer:Vr,primaries:Xr,toReference:r=>r.applyMatrix3(go),fromReference:r=>r.applyMatrix3(po)},[os]:{transfer:tt,primaries:Xr,toReference:r=>r.convertSRGBToLinear().applyMatrix3(go),fromReference:r=>r.applyMatrix3(po).convertLinearToSRGB()}},tu=new Set([_t,Kr]),Ye={enabled:!0,_workingColorSpace:_t,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!tu.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;const n=lr[e].toReference,i=lr[t].fromReference;return i(n(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this._workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this._workingColorSpace)},getPrimaries:function(r){return lr[r].primaries},getTransfer:function(r){return r===Ot?Vr:lr[r].transfer}};function Ri(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function ha(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let si;class id{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{si===void 0&&(si=ir("canvas")),si.width=e.width,si.height=e.height;const n=si.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=si}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ir("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),a=i.data;for(let s=0;s<a.length;s++)a[s]=Ri(a[s]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ri(t[n]/255)*255):t[n]=Ri(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let nu=0;class rd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:nu++}),this.uuid=Wt(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let a;if(Array.isArray(i)){a=[];for(let s=0,o=i.length;s<o;s++)i[s].isDataTexture?a.push(fa(i[s].image)):a.push(fa(i[s]))}else a=fa(i);n.url=a}return t||(e.images[this.uuid]=n),n}}function fa(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?id.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let iu=0;class mt extends ii{constructor(e=mt.DEFAULT_IMAGE,t=mt.DEFAULT_MAPPING,n=Ut,i=Ut,a=Et,s=mn,o=Bt,c=Dn,d=mt.DEFAULT_ANISOTROPY,l=Ot){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:iu++}),this.uuid=Wt(),this.name="",this.source=new rd(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=a,this.minFilter=s,this.anisotropy=d,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Te(0,0),this.repeat=new Te(1,1),this.center=new Te(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Oe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof l=="string"?this.colorSpace=l:(Jn("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=l===$n?at:Ot),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Vc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Di:e.x=e.x-Math.floor(e.x);break;case Ut:e.x=e.x<0?0:1;break;case zr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Di:e.y=e.y-Math.floor(e.y);break;case Ut:e.y=e.y<0?0:1;break;case zr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Jn("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===at?$n:$c}set encoding(e){Jn("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===$n?at:Ot}}mt.DEFAULT_IMAGE=null;mt.DEFAULT_MAPPING=Vc;mt.DEFAULT_ANISOTROPY=1;class $e{constructor(e=0,t=0,n=0,i=1){$e.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,a=this.w,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i+s[12]*a,this.y=s[1]*t+s[5]*n+s[9]*i+s[13]*a,this.z=s[2]*t+s[6]*n+s[10]*i+s[14]*a,this.w=s[3]*t+s[7]*n+s[11]*i+s[15]*a,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,a;const c=e.elements,d=c[0],l=c[4],u=c[8],h=c[1],p=c[5],g=c[9],_=c[2],f=c[6],m=c[10];if(Math.abs(l-h)<.01&&Math.abs(u-_)<.01&&Math.abs(g-f)<.01){if(Math.abs(l+h)<.1&&Math.abs(u+_)<.1&&Math.abs(g+f)<.1&&Math.abs(d+p+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(d+1)/2,T=(p+1)/2,L=(m+1)/2,C=(l+h)/4,A=(u+_)/4,z=(g+f)/4;return v>T&&v>L?v<.01?(n=0,i=.707106781,a=.707106781):(n=Math.sqrt(v),i=C/n,a=A/n):T>L?T<.01?(n=.707106781,i=0,a=.707106781):(i=Math.sqrt(T),n=C/i,a=z/i):L<.01?(n=.707106781,i=.707106781,a=0):(a=Math.sqrt(L),n=A/a,i=z/a),this.set(n,i,a,t),this}let y=Math.sqrt((f-g)*(f-g)+(u-_)*(u-_)+(h-l)*(h-l));return Math.abs(y)<.001&&(y=1),this.x=(f-g)/y,this.y=(u-_)/y,this.z=(h-l)/y,this.w=Math.acos((d+p+m-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ru extends ii{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new $e(0,0,e,t),this.scissorTest=!1,this.viewport=new $e(0,0,e,t);const i={width:e,height:t,depth:1};n.encoding!==void 0&&(Jn("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===$n?at:Ot),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Et,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new mt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new rd(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ei extends ru{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class ad extends mt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=ft,this.minFilter=ft,this.wrapR=Ut,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class au extends mt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=ft,this.minFilter=ft,this.wrapR=Ut,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class $t{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,a,s,o){let c=n[i+0],d=n[i+1],l=n[i+2],u=n[i+3];const h=a[s+0],p=a[s+1],g=a[s+2],_=a[s+3];if(o===0){e[t+0]=c,e[t+1]=d,e[t+2]=l,e[t+3]=u;return}if(o===1){e[t+0]=h,e[t+1]=p,e[t+2]=g,e[t+3]=_;return}if(u!==_||c!==h||d!==p||l!==g){let f=1-o;const m=c*h+d*p+l*g+u*_,y=m>=0?1:-1,v=1-m*m;if(v>Number.EPSILON){const L=Math.sqrt(v),C=Math.atan2(L,m*y);f=Math.sin(f*C)/L,o=Math.sin(o*C)/L}const T=o*y;if(c=c*f+h*T,d=d*f+p*T,l=l*f+g*T,u=u*f+_*T,f===1-o){const L=1/Math.sqrt(c*c+d*d+l*l+u*u);c*=L,d*=L,l*=L,u*=L}}e[t]=c,e[t+1]=d,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,a,s){const o=n[i],c=n[i+1],d=n[i+2],l=n[i+3],u=a[s],h=a[s+1],p=a[s+2],g=a[s+3];return e[t]=o*g+l*u+c*p-d*h,e[t+1]=c*g+l*h+d*u-o*p,e[t+2]=d*g+l*p+o*h-c*u,e[t+3]=l*g-o*u-c*h-d*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,a=e._z,s=e._order,o=Math.cos,c=Math.sin,d=o(n/2),l=o(i/2),u=o(a/2),h=c(n/2),p=c(i/2),g=c(a/2);switch(s){case"XYZ":this._x=h*l*u+d*p*g,this._y=d*p*u-h*l*g,this._z=d*l*g+h*p*u,this._w=d*l*u-h*p*g;break;case"YXZ":this._x=h*l*u+d*p*g,this._y=d*p*u-h*l*g,this._z=d*l*g-h*p*u,this._w=d*l*u+h*p*g;break;case"ZXY":this._x=h*l*u-d*p*g,this._y=d*p*u+h*l*g,this._z=d*l*g+h*p*u,this._w=d*l*u-h*p*g;break;case"ZYX":this._x=h*l*u-d*p*g,this._y=d*p*u+h*l*g,this._z=d*l*g-h*p*u,this._w=d*l*u+h*p*g;break;case"YZX":this._x=h*l*u+d*p*g,this._y=d*p*u+h*l*g,this._z=d*l*g-h*p*u,this._w=d*l*u-h*p*g;break;case"XZY":this._x=h*l*u-d*p*g,this._y=d*p*u-h*l*g,this._z=d*l*g+h*p*u,this._w=d*l*u+h*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],a=t[8],s=t[1],o=t[5],c=t[9],d=t[2],l=t[6],u=t[10],h=n+o+u;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(l-c)*p,this._y=(a-d)*p,this._z=(s-i)*p}else if(n>o&&n>u){const p=2*Math.sqrt(1+n-o-u);this._w=(l-c)/p,this._x=.25*p,this._y=(i+s)/p,this._z=(a+d)/p}else if(o>u){const p=2*Math.sqrt(1+o-n-u);this._w=(a-d)/p,this._x=(i+s)/p,this._y=.25*p,this._z=(c+l)/p}else{const p=2*Math.sqrt(1+u-n-o);this._w=(s-i)/p,this._x=(a+d)/p,this._y=(c+l)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(gt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,a=e._z,s=e._w,o=t._x,c=t._y,d=t._z,l=t._w;return this._x=n*l+s*o+i*d-a*c,this._y=i*l+s*c+a*o-n*d,this._z=a*l+s*d+n*c-i*o,this._w=s*l-n*o-i*c-a*d,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,a=this._z,s=this._w;let o=s*e._w+n*e._x+i*e._y+a*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=s,this._x=n,this._y=i,this._z=a,this;const c=1-o*o;if(c<=Number.EPSILON){const p=1-t;return this._w=p*s+t*this._w,this._x=p*n+t*this._x,this._y=p*i+t*this._y,this._z=p*a+t*this._z,this.normalize(),this}const d=Math.sqrt(c),l=Math.atan2(d,o),u=Math.sin((1-t)*l)/d,h=Math.sin(t*l)/d;return this._w=s*u+this._w*h,this._x=n*u+this._x*h,this._y=i*u+this._y*h,this._z=a*u+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),a=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(a),n*Math.cos(a),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class w{constructor(e=0,t=0,n=0){w.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(_o.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(_o.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6]*i,this.y=a[1]*t+a[4]*n+a[7]*i,this.z=a[2]*t+a[5]*n+a[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,a=e.elements,s=1/(a[3]*t+a[7]*n+a[11]*i+a[15]);return this.x=(a[0]*t+a[4]*n+a[8]*i+a[12])*s,this.y=(a[1]*t+a[5]*n+a[9]*i+a[13])*s,this.z=(a[2]*t+a[6]*n+a[10]*i+a[14])*s,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,a=e.x,s=e.y,o=e.z,c=e.w,d=2*(s*i-o*n),l=2*(o*t-a*i),u=2*(a*n-s*t);return this.x=t+c*d+s*u-o*l,this.y=n+c*l+o*d-a*u,this.z=i+c*u+a*l-s*d,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i,this.y=a[1]*t+a[5]*n+a[9]*i,this.z=a[2]*t+a[6]*n+a[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,a=e.z,s=t.x,o=t.y,c=t.z;return this.x=i*c-a*o,this.y=a*s-n*c,this.z=n*o-i*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ma.copy(this).projectOnVector(e),this.sub(ma)}reflect(e){return this.sub(ma.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(gt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ma=new w,_o=new $t;class en{constructor(e=new w(1/0,1/0,1/0),t=new w(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Gt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Gt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Gt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const a=n.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let s=0,o=a.count;s<o;s++)e.isMesh===!0?e.getVertexPosition(s,Gt):Gt.fromBufferAttribute(a,s),Gt.applyMatrix4(e.matrixWorld),this.expandByPoint(Gt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ur.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ur.copy(n.boundingBox)),ur.applyMatrix4(e.matrixWorld),this.union(ur)}const i=e.children;for(let a=0,s=i.length;a<s;a++)this.expandByObject(i[a],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Gt),Gt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Xi),hr.subVectors(this.max,Xi),oi.subVectors(e.a,Xi),ci.subVectors(e.b,Xi),di.subVectors(e.c,Xi),xn.subVectors(ci,oi),vn.subVectors(di,ci),Bn.subVectors(oi,di);let t=[0,-xn.z,xn.y,0,-vn.z,vn.y,0,-Bn.z,Bn.y,xn.z,0,-xn.x,vn.z,0,-vn.x,Bn.z,0,-Bn.x,-xn.y,xn.x,0,-vn.y,vn.x,0,-Bn.y,Bn.x,0];return!pa(t,oi,ci,di,hr)||(t=[1,0,0,0,1,0,0,0,1],!pa(t,oi,ci,di,hr))?!1:(fr.crossVectors(xn,vn),t=[fr.x,fr.y,fr.z],pa(t,oi,ci,di,hr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Gt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Gt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(sn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),sn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),sn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),sn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),sn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),sn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),sn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),sn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(sn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const sn=[new w,new w,new w,new w,new w,new w,new w,new w],Gt=new w,ur=new en,oi=new w,ci=new w,di=new w,xn=new w,vn=new w,Bn=new w,Xi=new w,hr=new w,fr=new w,On=new w;function pa(r,e,t,n,i){for(let a=0,s=r.length-3;a<=s;a+=3){On.fromArray(r,a);const o=i.x*Math.abs(On.x)+i.y*Math.abs(On.y)+i.z*Math.abs(On.z),c=e.dot(On),d=t.dot(On),l=n.dot(On);if(Math.max(-Math.max(c,d,l),Math.min(c,d,l))>o)return!1}return!0}const su=new en,qi=new w,ga=new w;class tn{constructor(e=new w,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):su.setFromPoints(e).getCenter(n);let i=0;for(let a=0,s=e.length;a<s;a++)i=Math.max(i,n.distanceToSquared(e[a]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;qi.subVectors(e,this.center);const t=qi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(qi,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ga.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(qi.copy(e.center).add(ga)),this.expandByPoint(qi.copy(e.center).sub(ga))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const on=new w,_a=new w,mr=new w,En=new w,Sa=new w,pr=new w,xa=new w;class ar{constructor(e=new w,t=new w(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,on)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=on.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(on.copy(this.origin).addScaledVector(this.direction,t),on.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){_a.copy(e).add(t).multiplyScalar(.5),mr.copy(t).sub(e).normalize(),En.copy(this.origin).sub(_a);const a=e.distanceTo(t)*.5,s=-this.direction.dot(mr),o=En.dot(this.direction),c=-En.dot(mr),d=En.lengthSq(),l=Math.abs(1-s*s);let u,h,p,g;if(l>0)if(u=s*c-o,h=s*o-c,g=a*l,u>=0)if(h>=-g)if(h<=g){const _=1/l;u*=_,h*=_,p=u*(u+s*h+2*o)+h*(s*u+h+2*c)+d}else h=a,u=Math.max(0,-(s*h+o)),p=-u*u+h*(h+2*c)+d;else h=-a,u=Math.max(0,-(s*h+o)),p=-u*u+h*(h+2*c)+d;else h<=-g?(u=Math.max(0,-(-s*a+o)),h=u>0?-a:Math.min(Math.max(-a,-c),a),p=-u*u+h*(h+2*c)+d):h<=g?(u=0,h=Math.min(Math.max(-a,-c),a),p=h*(h+2*c)+d):(u=Math.max(0,-(s*a+o)),h=u>0?a:Math.min(Math.max(-a,-c),a),p=-u*u+h*(h+2*c)+d);else h=s>0?-a:a,u=Math.max(0,-(s*h+o)),p=-u*u+h*(h+2*c)+d;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(_a).addScaledVector(mr,h),p}intersectSphere(e,t){on.subVectors(e.center,this.origin);const n=on.dot(this.direction),i=on.dot(on)-n*n,a=e.radius*e.radius;if(i>a)return null;const s=Math.sqrt(a-i),o=n-s,c=n+s;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,a,s,o,c;const d=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,h=this.origin;return d>=0?(n=(e.min.x-h.x)*d,i=(e.max.x-h.x)*d):(n=(e.max.x-h.x)*d,i=(e.min.x-h.x)*d),l>=0?(a=(e.min.y-h.y)*l,s=(e.max.y-h.y)*l):(a=(e.max.y-h.y)*l,s=(e.min.y-h.y)*l),n>s||a>i||((a>n||isNaN(n))&&(n=a),(s<i||isNaN(i))&&(i=s),u>=0?(o=(e.min.z-h.z)*u,c=(e.max.z-h.z)*u):(o=(e.max.z-h.z)*u,c=(e.min.z-h.z)*u),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,on)!==null}intersectTriangle(e,t,n,i,a){Sa.subVectors(t,e),pr.subVectors(n,e),xa.crossVectors(Sa,pr);let s=this.direction.dot(xa),o;if(s>0){if(i)return null;o=1}else if(s<0)o=-1,s=-s;else return null;En.subVectors(this.origin,e);const c=o*this.direction.dot(pr.crossVectors(En,pr));if(c<0)return null;const d=o*this.direction.dot(Sa.cross(En));if(d<0||c+d>s)return null;const l=-o*En.dot(xa);return l<0?null:this.at(l/s,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Fe{constructor(e,t,n,i,a,s,o,c,d,l,u,h,p,g,_,f){Fe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,a,s,o,c,d,l,u,h,p,g,_,f)}set(e,t,n,i,a,s,o,c,d,l,u,h,p,g,_,f){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=i,m[1]=a,m[5]=s,m[9]=o,m[13]=c,m[2]=d,m[6]=l,m[10]=u,m[14]=h,m[3]=p,m[7]=g,m[11]=_,m[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Fe().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/li.setFromMatrixColumn(e,0).length(),a=1/li.setFromMatrixColumn(e,1).length(),s=1/li.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=0,t[8]=n[8]*s,t[9]=n[9]*s,t[10]=n[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,a=e.z,s=Math.cos(n),o=Math.sin(n),c=Math.cos(i),d=Math.sin(i),l=Math.cos(a),u=Math.sin(a);if(e.order==="XYZ"){const h=s*l,p=s*u,g=o*l,_=o*u;t[0]=c*l,t[4]=-c*u,t[8]=d,t[1]=p+g*d,t[5]=h-_*d,t[9]=-o*c,t[2]=_-h*d,t[6]=g+p*d,t[10]=s*c}else if(e.order==="YXZ"){const h=c*l,p=c*u,g=d*l,_=d*u;t[0]=h+_*o,t[4]=g*o-p,t[8]=s*d,t[1]=s*u,t[5]=s*l,t[9]=-o,t[2]=p*o-g,t[6]=_+h*o,t[10]=s*c}else if(e.order==="ZXY"){const h=c*l,p=c*u,g=d*l,_=d*u;t[0]=h-_*o,t[4]=-s*u,t[8]=g+p*o,t[1]=p+g*o,t[5]=s*l,t[9]=_-h*o,t[2]=-s*d,t[6]=o,t[10]=s*c}else if(e.order==="ZYX"){const h=s*l,p=s*u,g=o*l,_=o*u;t[0]=c*l,t[4]=g*d-p,t[8]=h*d+_,t[1]=c*u,t[5]=_*d+h,t[9]=p*d-g,t[2]=-d,t[6]=o*c,t[10]=s*c}else if(e.order==="YZX"){const h=s*c,p=s*d,g=o*c,_=o*d;t[0]=c*l,t[4]=_-h*u,t[8]=g*u+p,t[1]=u,t[5]=s*l,t[9]=-o*l,t[2]=-d*l,t[6]=p*u+g,t[10]=h-_*u}else if(e.order==="XZY"){const h=s*c,p=s*d,g=o*c,_=o*d;t[0]=c*l,t[4]=-u,t[8]=d*l,t[1]=h*u+_,t[5]=s*l,t[9]=p*u-g,t[2]=g*u-p,t[6]=o*l,t[10]=_*u+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ou,e,cu)}lookAt(e,t,n){const i=this.elements;return wt.subVectors(e,t),wt.lengthSq()===0&&(wt.z=1),wt.normalize(),Mn.crossVectors(n,wt),Mn.lengthSq()===0&&(Math.abs(n.z)===1?wt.x+=1e-4:wt.z+=1e-4,wt.normalize(),Mn.crossVectors(n,wt)),Mn.normalize(),gr.crossVectors(wt,Mn),i[0]=Mn.x,i[4]=gr.x,i[8]=wt.x,i[1]=Mn.y,i[5]=gr.y,i[9]=wt.y,i[2]=Mn.z,i[6]=gr.z,i[10]=wt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,a=this.elements,s=n[0],o=n[4],c=n[8],d=n[12],l=n[1],u=n[5],h=n[9],p=n[13],g=n[2],_=n[6],f=n[10],m=n[14],y=n[3],v=n[7],T=n[11],L=n[15],C=i[0],A=i[4],z=i[8],re=i[12],x=i[1],b=i[5],W=i[9],ne=i[13],P=i[2],G=i[6],O=i[10],j=i[14],V=i[3],X=i[7],q=i[11],ie=i[15];return a[0]=s*C+o*x+c*P+d*V,a[4]=s*A+o*b+c*G+d*X,a[8]=s*z+o*W+c*O+d*q,a[12]=s*re+o*ne+c*j+d*ie,a[1]=l*C+u*x+h*P+p*V,a[5]=l*A+u*b+h*G+p*X,a[9]=l*z+u*W+h*O+p*q,a[13]=l*re+u*ne+h*j+p*ie,a[2]=g*C+_*x+f*P+m*V,a[6]=g*A+_*b+f*G+m*X,a[10]=g*z+_*W+f*O+m*q,a[14]=g*re+_*ne+f*j+m*ie,a[3]=y*C+v*x+T*P+L*V,a[7]=y*A+v*b+T*G+L*X,a[11]=y*z+v*W+T*O+L*q,a[15]=y*re+v*ne+T*j+L*ie,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],a=e[12],s=e[1],o=e[5],c=e[9],d=e[13],l=e[2],u=e[6],h=e[10],p=e[14],g=e[3],_=e[7],f=e[11],m=e[15];return g*(+a*c*u-i*d*u-a*o*h+n*d*h+i*o*p-n*c*p)+_*(+t*c*p-t*d*h+a*s*h-i*s*p+i*d*l-a*c*l)+f*(+t*d*u-t*o*p-a*s*u+n*s*p+a*o*l-n*d*l)+m*(-i*o*l-t*c*u+t*o*h+i*s*u-n*s*h+n*c*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],a=e[3],s=e[4],o=e[5],c=e[6],d=e[7],l=e[8],u=e[9],h=e[10],p=e[11],g=e[12],_=e[13],f=e[14],m=e[15],y=u*f*d-_*h*d+_*c*p-o*f*p-u*c*m+o*h*m,v=g*h*d-l*f*d-g*c*p+s*f*p+l*c*m-s*h*m,T=l*_*d-g*u*d+g*o*p-s*_*p-l*o*m+s*u*m,L=g*u*c-l*_*c-g*o*h+s*_*h+l*o*f-s*u*f,C=t*y+n*v+i*T+a*L;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/C;return e[0]=y*A,e[1]=(_*h*a-u*f*a-_*i*p+n*f*p+u*i*m-n*h*m)*A,e[2]=(o*f*a-_*c*a+_*i*d-n*f*d-o*i*m+n*c*m)*A,e[3]=(u*c*a-o*h*a-u*i*d+n*h*d+o*i*p-n*c*p)*A,e[4]=v*A,e[5]=(l*f*a-g*h*a+g*i*p-t*f*p-l*i*m+t*h*m)*A,e[6]=(g*c*a-s*f*a-g*i*d+t*f*d+s*i*m-t*c*m)*A,e[7]=(s*h*a-l*c*a+l*i*d-t*h*d-s*i*p+t*c*p)*A,e[8]=T*A,e[9]=(g*u*a-l*_*a-g*n*p+t*_*p+l*n*m-t*u*m)*A,e[10]=(s*_*a-g*o*a+g*n*d-t*_*d-s*n*m+t*o*m)*A,e[11]=(l*o*a-s*u*a-l*n*d+t*u*d+s*n*p-t*o*p)*A,e[12]=L*A,e[13]=(l*_*i-g*u*i+g*n*h-t*_*h-l*n*f+t*u*f)*A,e[14]=(g*o*i-s*_*i-g*n*c+t*_*c+s*n*f-t*o*f)*A,e[15]=(s*u*i-l*o*i+l*n*c-t*u*c-s*n*h+t*o*h)*A,this}scale(e){const t=this.elements,n=e.x,i=e.y,a=e.z;return t[0]*=n,t[4]*=i,t[8]*=a,t[1]*=n,t[5]*=i,t[9]*=a,t[2]*=n,t[6]*=i,t[10]*=a,t[3]*=n,t[7]*=i,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),a=1-n,s=e.x,o=e.y,c=e.z,d=a*s,l=a*o;return this.set(d*s+n,d*o-i*c,d*c+i*o,0,d*o+i*c,l*o+n,l*c-i*s,0,d*c-i*o,l*c+i*s,a*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,a,s){return this.set(1,n,a,0,e,1,s,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,a=t._x,s=t._y,o=t._z,c=t._w,d=a+a,l=s+s,u=o+o,h=a*d,p=a*l,g=a*u,_=s*l,f=s*u,m=o*u,y=c*d,v=c*l,T=c*u,L=n.x,C=n.y,A=n.z;return i[0]=(1-(_+m))*L,i[1]=(p+T)*L,i[2]=(g-v)*L,i[3]=0,i[4]=(p-T)*C,i[5]=(1-(h+m))*C,i[6]=(f+y)*C,i[7]=0,i[8]=(g+v)*A,i[9]=(f-y)*A,i[10]=(1-(h+_))*A,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let a=li.set(i[0],i[1],i[2]).length();const s=li.set(i[4],i[5],i[6]).length(),o=li.set(i[8],i[9],i[10]).length();this.determinant()<0&&(a=-a),e.x=i[12],e.y=i[13],e.z=i[14],Ht.copy(this);const d=1/a,l=1/s,u=1/o;return Ht.elements[0]*=d,Ht.elements[1]*=d,Ht.elements[2]*=d,Ht.elements[4]*=l,Ht.elements[5]*=l,Ht.elements[6]*=l,Ht.elements[8]*=u,Ht.elements[9]*=u,Ht.elements[10]*=u,t.setFromRotationMatrix(Ht),n.x=a,n.y=s,n.z=o,this}makePerspective(e,t,n,i,a,s,o=pn){const c=this.elements,d=2*a/(t-e),l=2*a/(n-i),u=(t+e)/(t-e),h=(n+i)/(n-i);let p,g;if(o===pn)p=-(s+a)/(s-a),g=-2*s*a/(s-a);else if(o===qr)p=-s/(s-a),g=-s*a/(s-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=l,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,a,s,o=pn){const c=this.elements,d=1/(t-e),l=1/(n-i),u=1/(s-a),h=(t+e)*d,p=(n+i)*l;let g,_;if(o===pn)g=(s+a)*u,_=-2*u;else if(o===qr)g=a*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*d,c[4]=0,c[8]=0,c[12]=-h,c[1]=0,c[5]=2*l,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const li=new w,Ht=new Fe,ou=new w(0,0,0),cu=new w(1,1,1),Mn=new w,gr=new w,wt=new w,So=new Fe,xo=new $t;class Qr{constructor(e=0,t=0,n=0,i=Qr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,a=i[0],s=i[4],o=i[8],c=i[1],d=i[5],l=i[9],u=i[2],h=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(gt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,p),this._z=Math.atan2(-s,a)):(this._x=Math.atan2(h,d),this._z=0);break;case"YXZ":this._x=Math.asin(-gt(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,d)):(this._y=Math.atan2(-u,a),this._z=0);break;case"ZXY":this._x=Math.asin(gt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-s,d)):(this._y=0,this._z=Math.atan2(c,a));break;case"ZYX":this._y=Math.asin(-gt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(c,a)):(this._x=0,this._z=Math.atan2(-s,d));break;case"YZX":this._z=Math.asin(gt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-l,d),this._y=Math.atan2(-u,a)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-gt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(h,d),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-l,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return So.makeRotationFromQuaternion(e),this.setFromRotationMatrix(So,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return xo.setFromEuler(this),this.setFromQuaternion(xo,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Qr.DEFAULT_ORDER="XYZ";class sd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let du=0;const vo=new w,ui=new $t,cn=new Fe,_r=new w,ji=new w,lu=new w,uu=new $t,Eo=new w(1,0,0),Mo=new w(0,1,0),yo=new w(0,0,1),hu={type:"added"},fu={type:"removed"};class nt extends ii{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:du++}),this.uuid=Wt(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=nt.DEFAULT_UP.clone();const e=new w,t=new Qr,n=new $t,i=new w(1,1,1);function a(){n.setFromEuler(t,!1)}function s(){t.setFromQuaternion(n,void 0,!1)}t._onChange(a),n._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Fe},normalMatrix:{value:new Oe}}),this.matrix=new Fe,this.matrixWorld=new Fe,this.matrixAutoUpdate=nt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=nt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new sd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ui.setFromAxisAngle(e,t),this.quaternion.multiply(ui),this}rotateOnWorldAxis(e,t){return ui.setFromAxisAngle(e,t),this.quaternion.premultiply(ui),this}rotateX(e){return this.rotateOnAxis(Eo,e)}rotateY(e){return this.rotateOnAxis(Mo,e)}rotateZ(e){return this.rotateOnAxis(yo,e)}translateOnAxis(e,t){return vo.copy(e).applyQuaternion(this.quaternion),this.position.add(vo.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Eo,e)}translateY(e){return this.translateOnAxis(Mo,e)}translateZ(e){return this.translateOnAxis(yo,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(cn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?_r.copy(e):_r.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),ji.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?cn.lookAt(ji,_r,this.up):cn.lookAt(_r,ji,this.up),this.quaternion.setFromRotationMatrix(cn),i&&(cn.extractRotation(i.matrixWorld),ui.setFromRotationMatrix(cn),this.quaternion.premultiply(ui.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(hu)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(fu)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),cn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),cn.multiply(e.parent.matrixWorld)),e.applyMatrix4(cn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const s=this.children[n].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let a=0,s=i.length;a<s;a++)i[a].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ji,e,lu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ji,uu,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const a=t[n];(a.matrixWorldAutoUpdate===!0||e===!0)&&a.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let a=0,s=i.length;a<s;a++){const o=i[a];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function a(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=a(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let d=0,l=c.length;d<l;d++){const u=c[d];a(e.shapes,u)}else a(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,d=this.material.length;c<d;c++)o.push(a(e.materials,this.material[c]));i.material=o}else i.material=a(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];i.animations.push(a(e.animations,c))}}if(t){const o=s(e.geometries),c=s(e.materials),d=s(e.textures),l=s(e.images),u=s(e.shapes),h=s(e.skeletons),p=s(e.animations),g=s(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),d.length>0&&(n.textures=d),l.length>0&&(n.images=l),u.length>0&&(n.shapes=u),h.length>0&&(n.skeletons=h),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=i,n;function s(o){const c=[];for(const d in o){const l=o[d];delete l.metadata,c.push(l)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}nt.DEFAULT_UP=new w(0,1,0);nt.DEFAULT_MATRIX_AUTO_UPDATE=!0;nt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const zt=new w,dn=new w,va=new w,ln=new w,hi=new w,fi=new w,To=new w,Ea=new w,Ma=new w,ya=new w;class Yt{constructor(e=new w,t=new w,n=new w){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),zt.subVectors(e,t),i.cross(zt);const a=i.lengthSq();return a>0?i.multiplyScalar(1/Math.sqrt(a)):i.set(0,0,0)}static getBarycoord(e,t,n,i,a){zt.subVectors(i,t),dn.subVectors(n,t),va.subVectors(e,t);const s=zt.dot(zt),o=zt.dot(dn),c=zt.dot(va),d=dn.dot(dn),l=dn.dot(va),u=s*d-o*o;if(u===0)return a.set(0,0,0),null;const h=1/u,p=(d*c-o*l)*h,g=(s*l-o*c)*h;return a.set(1-p-g,g,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,ln)===null?!1:ln.x>=0&&ln.y>=0&&ln.x+ln.y<=1}static getInterpolation(e,t,n,i,a,s,o,c){return this.getBarycoord(e,t,n,i,ln)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(a,ln.x),c.addScaledVector(s,ln.y),c.addScaledVector(o,ln.z),c)}static isFrontFacing(e,t,n,i){return zt.subVectors(n,t),dn.subVectors(e,t),zt.cross(dn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return zt.subVectors(this.c,this.b),dn.subVectors(this.a,this.b),zt.cross(dn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Yt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Yt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,a){return Yt.getInterpolation(e,this.a,this.b,this.c,t,n,i,a)}containsPoint(e){return Yt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Yt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,a=this.c;let s,o;hi.subVectors(i,n),fi.subVectors(a,n),Ea.subVectors(e,n);const c=hi.dot(Ea),d=fi.dot(Ea);if(c<=0&&d<=0)return t.copy(n);Ma.subVectors(e,i);const l=hi.dot(Ma),u=fi.dot(Ma);if(l>=0&&u<=l)return t.copy(i);const h=c*u-l*d;if(h<=0&&c>=0&&l<=0)return s=c/(c-l),t.copy(n).addScaledVector(hi,s);ya.subVectors(e,a);const p=hi.dot(ya),g=fi.dot(ya);if(g>=0&&p<=g)return t.copy(a);const _=p*d-c*g;if(_<=0&&d>=0&&g<=0)return o=d/(d-g),t.copy(n).addScaledVector(fi,o);const f=l*g-p*u;if(f<=0&&u-l>=0&&p-g>=0)return To.subVectors(a,i),o=(u-l)/(u-l+(p-g)),t.copy(i).addScaledVector(To,o);const m=1/(f+_+h);return s=_*m,o=h*m,t.copy(n).addScaledVector(hi,s).addScaledVector(fi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const od={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},yn={h:0,s:0,l:0},Sr={h:0,s:0,l:0};function Ta(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Re{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=at){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ye.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Ye.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ye.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Ye.workingColorSpace){if(e=cs(e,1),t=gt(t,0,1),n=gt(n,0,1),t===0)this.r=this.g=this.b=n;else{const a=n<=.5?n*(1+t):n+t-n*t,s=2*n-a;this.r=Ta(s,a,e+1/3),this.g=Ta(s,a,e),this.b=Ta(s,a,e-1/3)}return Ye.toWorkingColorSpace(this,i),this}setStyle(e,t=at){function n(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const s=i[1],o=i[2];switch(s){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=i[1],s=a.length;if(s===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=at){const n=od[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ri(e.r),this.g=Ri(e.g),this.b=Ri(e.b),this}copyLinearToSRGB(e){return this.r=ha(e.r),this.g=ha(e.g),this.b=ha(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=at){return Ye.fromWorkingColorSpace(vt.copy(this),e),Math.round(gt(vt.r*255,0,255))*65536+Math.round(gt(vt.g*255,0,255))*256+Math.round(gt(vt.b*255,0,255))}getHexString(e=at){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ye.workingColorSpace){Ye.fromWorkingColorSpace(vt.copy(this),t);const n=vt.r,i=vt.g,a=vt.b,s=Math.max(n,i,a),o=Math.min(n,i,a);let c,d;const l=(o+s)/2;if(o===s)c=0,d=0;else{const u=s-o;switch(d=l<=.5?u/(s+o):u/(2-s-o),s){case n:c=(i-a)/u+(i<a?6:0);break;case i:c=(a-n)/u+2;break;case a:c=(n-i)/u+4;break}c/=6}return e.h=c,e.s=d,e.l=l,e}getRGB(e,t=Ye.workingColorSpace){return Ye.fromWorkingColorSpace(vt.copy(this),t),e.r=vt.r,e.g=vt.g,e.b=vt.b,e}getStyle(e=at){Ye.fromWorkingColorSpace(vt.copy(this),e);const t=vt.r,n=vt.g,i=vt.b;return e!==at?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(yn),this.setHSL(yn.h+e,yn.s+t,yn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(yn),e.getHSL(Sr);const n=er(yn.h,Sr.h,t),i=er(yn.s,Sr.s,t),a=er(yn.l,Sr.l,t);return this.setHSL(n,i,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,a=e.elements;return this.r=a[0]*t+a[3]*n+a[6]*i,this.g=a[1]*t+a[4]*n+a[7]*i,this.b=a[2]*t+a[5]*n+a[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const vt=new Re;Re.NAMES=od;let mu=0;class Kt extends ii{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:mu++}),this.uuid=Wt(),this.name="",this.type="Material",this.blending=Ci,this.side=Sn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Xa,this.blendDst=qa,this.blendEquation=Xn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Re(0,0,0),this.blendAlpha=0,this.depthFunc=Hr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=uo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ai,this.stencilZFail=ai,this.stencilZPass=ai,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ci&&(n.blending=this.blending),this.side!==Sn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Xa&&(n.blendSrc=this.blendSrc),this.blendDst!==qa&&(n.blendDst=this.blendDst),this.blendEquation!==Xn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Hr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==uo&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ai&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ai&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ai&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(a){const s=[];for(const o in a){const c=a[o];delete c.metadata,s.push(c)}return s}if(t){const a=i(e.textures),s=i(e.images);a.length>0&&(n.textures=a),s.length>0&&(n.images=s)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let a=0;a!==i;++a)n[a]=t[a].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class gn extends Kt{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=zc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ct=new w,xr=new Te;class kt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Za,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=jt,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Jn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,a=this.itemSize;i<a;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)xr.fromBufferAttribute(this,t),xr.applyMatrix3(e),this.setXY(t,xr.x,xr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ct.fromBufferAttribute(this,t),ct.applyMatrix3(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ct.fromBufferAttribute(this,t),ct.applyMatrix4(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ct.fromBufferAttribute(this,t),ct.applyNormalMatrix(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ct.fromBufferAttribute(this,t),ct.transformDirection(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Vt(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Qe(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Vt(t,this.array)),t}setX(e,t){return this.normalized&&(t=Qe(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Vt(t,this.array)),t}setY(e,t){return this.normalized&&(t=Qe(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Vt(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Qe(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Vt(t,this.array)),t}setW(e,t){return this.normalized&&(t=Qe(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Qe(t,this.array),n=Qe(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Qe(t,this.array),n=Qe(n,this.array),i=Qe(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,a){return e*=this.itemSize,this.normalized&&(t=Qe(t,this.array),n=Qe(n,this.array),i=Qe(i,this.array),a=Qe(a,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Za&&(e.usage=this.usage),e}}class cd extends kt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class dd extends kt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class _n extends kt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let pu=0;const Nt=new Fe,Aa=new nt,mi=new w,Lt=new en,Yi=new en,ht=new w;class nn extends ii{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:pu++}),this.uuid=Wt(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(nd(e)?dd:cd)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const a=new Oe().getNormalMatrix(e);n.applyNormalMatrix(a),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Nt.makeRotationFromQuaternion(e),this.applyMatrix4(Nt),this}rotateX(e){return Nt.makeRotationX(e),this.applyMatrix4(Nt),this}rotateY(e){return Nt.makeRotationY(e),this.applyMatrix4(Nt),this}rotateZ(e){return Nt.makeRotationZ(e),this.applyMatrix4(Nt),this}translate(e,t,n){return Nt.makeTranslation(e,t,n),this.applyMatrix4(Nt),this}scale(e,t,n){return Nt.makeScale(e,t,n),this.applyMatrix4(Nt),this}lookAt(e){return Aa.lookAt(e),Aa.updateMatrix(),this.applyMatrix4(Aa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(mi).negate(),this.translate(mi.x,mi.y,mi.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const a=e[n];t.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new _n(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new en);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new w(-1/0,-1/0,-1/0),new w(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const a=t[n];Lt.setFromBufferAttribute(a),this.morphTargetsRelative?(ht.addVectors(this.boundingBox.min,Lt.min),this.boundingBox.expandByPoint(ht),ht.addVectors(this.boundingBox.max,Lt.max),this.boundingBox.expandByPoint(ht)):(this.boundingBox.expandByPoint(Lt.min),this.boundingBox.expandByPoint(Lt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new tn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new w,1/0);return}if(e){const n=this.boundingSphere.center;if(Lt.setFromBufferAttribute(e),t)for(let a=0,s=t.length;a<s;a++){const o=t[a];Yi.setFromBufferAttribute(o),this.morphTargetsRelative?(ht.addVectors(Lt.min,Yi.min),Lt.expandByPoint(ht),ht.addVectors(Lt.max,Yi.max),Lt.expandByPoint(ht)):(Lt.expandByPoint(Yi.min),Lt.expandByPoint(Yi.max))}Lt.getCenter(n);let i=0;for(let a=0,s=e.count;a<s;a++)ht.fromBufferAttribute(e,a),i=Math.max(i,n.distanceToSquared(ht));if(t)for(let a=0,s=t.length;a<s;a++){const o=t[a],c=this.morphTargetsRelative;for(let d=0,l=o.count;d<l;d++)ht.fromBufferAttribute(o,d),c&&(mi.fromBufferAttribute(e,d),ht.add(mi)),i=Math.max(i,n.distanceToSquared(ht))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,a=t.normal.array,s=t.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new kt(new Float32Array(4*o),4));const c=this.getAttribute("tangent").array,d=[],l=[];for(let x=0;x<o;x++)d[x]=new w,l[x]=new w;const u=new w,h=new w,p=new w,g=new Te,_=new Te,f=new Te,m=new w,y=new w;function v(x,b,W){u.fromArray(i,x*3),h.fromArray(i,b*3),p.fromArray(i,W*3),g.fromArray(s,x*2),_.fromArray(s,b*2),f.fromArray(s,W*2),h.sub(u),p.sub(u),_.sub(g),f.sub(g);const ne=1/(_.x*f.y-f.x*_.y);isFinite(ne)&&(m.copy(h).multiplyScalar(f.y).addScaledVector(p,-_.y).multiplyScalar(ne),y.copy(p).multiplyScalar(_.x).addScaledVector(h,-f.x).multiplyScalar(ne),d[x].add(m),d[b].add(m),d[W].add(m),l[x].add(y),l[b].add(y),l[W].add(y))}let T=this.groups;T.length===0&&(T=[{start:0,count:n.length}]);for(let x=0,b=T.length;x<b;++x){const W=T[x],ne=W.start,P=W.count;for(let G=ne,O=ne+P;G<O;G+=3)v(n[G+0],n[G+1],n[G+2])}const L=new w,C=new w,A=new w,z=new w;function re(x){A.fromArray(a,x*3),z.copy(A);const b=d[x];L.copy(b),L.sub(A.multiplyScalar(A.dot(b))).normalize(),C.crossVectors(z,b);const ne=C.dot(l[x])<0?-1:1;c[x*4]=L.x,c[x*4+1]=L.y,c[x*4+2]=L.z,c[x*4+3]=ne}for(let x=0,b=T.length;x<b;++x){const W=T[x],ne=W.start,P=W.count;for(let G=ne,O=ne+P;G<O;G+=3)re(n[G+0]),re(n[G+1]),re(n[G+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new kt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,p=n.count;h<p;h++)n.setXYZ(h,0,0,0);const i=new w,a=new w,s=new w,o=new w,c=new w,d=new w,l=new w,u=new w;if(e)for(let h=0,p=e.count;h<p;h+=3){const g=e.getX(h+0),_=e.getX(h+1),f=e.getX(h+2);i.fromBufferAttribute(t,g),a.fromBufferAttribute(t,_),s.fromBufferAttribute(t,f),l.subVectors(s,a),u.subVectors(i,a),l.cross(u),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),d.fromBufferAttribute(n,f),o.add(l),c.add(l),d.add(l),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(f,d.x,d.y,d.z)}else for(let h=0,p=t.count;h<p;h+=3)i.fromBufferAttribute(t,h+0),a.fromBufferAttribute(t,h+1),s.fromBufferAttribute(t,h+2),l.subVectors(s,a),u.subVectors(i,a),l.cross(u),n.setXYZ(h+0,l.x,l.y,l.z),n.setXYZ(h+1,l.x,l.y,l.z),n.setXYZ(h+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)ht.fromBufferAttribute(e,t),ht.normalize(),e.setXYZ(t,ht.x,ht.y,ht.z)}toNonIndexed(){function e(o,c){const d=o.array,l=o.itemSize,u=o.normalized,h=new d.constructor(c.length*l);let p=0,g=0;for(let _=0,f=c.length;_<f;_++){o.isInterleavedBufferAttribute?p=c[_]*o.data.stride+o.offset:p=c[_]*l;for(let m=0;m<l;m++)h[g++]=d[p++]}return new kt(h,l,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new nn,n=this.index.array,i=this.attributes;for(const o in i){const c=i[o],d=e(c,n);t.setAttribute(o,d)}const a=this.morphAttributes;for(const o in a){const c=[],d=a[o];for(let l=0,u=d.length;l<u;l++){const h=d[l],p=e(h,n);c.push(p)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let o=0,c=s.length;o<c;o++){const d=s[o];t.addGroup(d.start,d.count,d.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const d in c)c[d]!==void 0&&(e[d]=c[d]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const d=n[c];e.data.attributes[c]=d.toJSON(e.data)}const i={};let a=!1;for(const c in this.morphAttributes){const d=this.morphAttributes[c],l=[];for(let u=0,h=d.length;u<h;u++){const p=d[u];l.push(p.toJSON(e.data))}l.length>0&&(i[c]=l,a=!0)}a&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const d in i){const l=i[d];this.setAttribute(d,l.clone(t))}const a=e.morphAttributes;for(const d in a){const l=[],u=a[d];for(let h=0,p=u.length;h<p;h++)l.push(u[h].clone(t));this.morphAttributes[d]=l}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let d=0,l=s.length;d<l;d++){const u=s[d];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ao=new Fe,Gn=new ar,vr=new tn,ko=new w,pi=new w,gi=new w,_i=new w,ka=new w,Er=new w,Mr=new Te,yr=new Te,Tr=new Te,bo=new w,Co=new w,Ro=new w,Ar=new w,kr=new w;class At extends nt{constructor(e=new nn,t=new gn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,s=i.length;a<s;a++){const o=i[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,a=n.morphAttributes.position,s=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(a&&o){Er.set(0,0,0);for(let c=0,d=a.length;c<d;c++){const l=o[c],u=a[c];l!==0&&(ka.fromBufferAttribute(u,e),s?Er.addScaledVector(ka,l):Er.addScaledVector(ka.sub(t),l))}t.add(Er)}return t}raycast(e,t){const n=this.geometry,i=this.material,a=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),vr.copy(n.boundingSphere),vr.applyMatrix4(a),Gn.copy(e.ray).recast(e.near),!(vr.containsPoint(Gn.origin)===!1&&(Gn.intersectSphere(vr,ko)===null||Gn.origin.distanceToSquared(ko)>(e.far-e.near)**2))&&(Ao.copy(a).invert(),Gn.copy(e.ray).applyMatrix4(Ao),!(n.boundingBox!==null&&Gn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Gn)))}_computeIntersections(e,t,n){let i;const a=this.geometry,s=this.material,o=a.index,c=a.attributes.position,d=a.attributes.uv,l=a.attributes.uv1,u=a.attributes.normal,h=a.groups,p=a.drawRange;if(o!==null)if(Array.isArray(s))for(let g=0,_=h.length;g<_;g++){const f=h[g],m=s[f.materialIndex],y=Math.max(f.start,p.start),v=Math.min(o.count,Math.min(f.start+f.count,p.start+p.count));for(let T=y,L=v;T<L;T+=3){const C=o.getX(T),A=o.getX(T+1),z=o.getX(T+2);i=br(this,m,e,n,d,l,u,C,A,z),i&&(i.faceIndex=Math.floor(T/3),i.face.materialIndex=f.materialIndex,t.push(i))}}else{const g=Math.max(0,p.start),_=Math.min(o.count,p.start+p.count);for(let f=g,m=_;f<m;f+=3){const y=o.getX(f),v=o.getX(f+1),T=o.getX(f+2);i=br(this,s,e,n,d,l,u,y,v,T),i&&(i.faceIndex=Math.floor(f/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(s))for(let g=0,_=h.length;g<_;g++){const f=h[g],m=s[f.materialIndex],y=Math.max(f.start,p.start),v=Math.min(c.count,Math.min(f.start+f.count,p.start+p.count));for(let T=y,L=v;T<L;T+=3){const C=T,A=T+1,z=T+2;i=br(this,m,e,n,d,l,u,C,A,z),i&&(i.faceIndex=Math.floor(T/3),i.face.materialIndex=f.materialIndex,t.push(i))}}else{const g=Math.max(0,p.start),_=Math.min(c.count,p.start+p.count);for(let f=g,m=_;f<m;f+=3){const y=f,v=f+1,T=f+2;i=br(this,s,e,n,d,l,u,y,v,T),i&&(i.faceIndex=Math.floor(f/3),t.push(i))}}}}function gu(r,e,t,n,i,a,s,o){let c;if(e.side===Ct?c=n.intersectTriangle(s,a,i,!0,o):c=n.intersectTriangle(i,a,s,e.side===Sn,o),c===null)return null;kr.copy(o),kr.applyMatrix4(r.matrixWorld);const d=t.ray.origin.distanceTo(kr);return d<t.near||d>t.far?null:{distance:d,point:kr.clone(),object:r}}function br(r,e,t,n,i,a,s,o,c,d){r.getVertexPosition(o,pi),r.getVertexPosition(c,gi),r.getVertexPosition(d,_i);const l=gu(r,e,t,n,pi,gi,_i,Ar);if(l){i&&(Mr.fromBufferAttribute(i,o),yr.fromBufferAttribute(i,c),Tr.fromBufferAttribute(i,d),l.uv=Yt.getInterpolation(Ar,pi,gi,_i,Mr,yr,Tr,new Te)),a&&(Mr.fromBufferAttribute(a,o),yr.fromBufferAttribute(a,c),Tr.fromBufferAttribute(a,d),l.uv1=Yt.getInterpolation(Ar,pi,gi,_i,Mr,yr,Tr,new Te),l.uv2=l.uv1),s&&(bo.fromBufferAttribute(s,o),Co.fromBufferAttribute(s,c),Ro.fromBufferAttribute(s,d),l.normal=Yt.getInterpolation(Ar,pi,gi,_i,bo,Co,Ro,new w),l.normal.dot(n.direction)>0&&l.normal.multiplyScalar(-1));const u={a:o,b:c,c:d,normal:new w,materialIndex:0};Yt.getNormal(pi,gi,_i,u.normal),l.face=u}return l}class sr extends nn{constructor(e=1,t=1,n=1,i=1,a=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:a,depthSegments:s};const o=this;i=Math.floor(i),a=Math.floor(a),s=Math.floor(s);const c=[],d=[],l=[],u=[];let h=0,p=0;g("z","y","x",-1,-1,n,t,e,s,a,0),g("z","y","x",1,-1,n,t,-e,s,a,1),g("x","z","y",1,1,e,n,t,i,s,2),g("x","z","y",1,-1,e,n,-t,i,s,3),g("x","y","z",1,-1,e,t,n,i,a,4),g("x","y","z",-1,-1,e,t,-n,i,a,5),this.setIndex(c),this.setAttribute("position",new _n(d,3)),this.setAttribute("normal",new _n(l,3)),this.setAttribute("uv",new _n(u,2));function g(_,f,m,y,v,T,L,C,A,z,re){const x=T/A,b=L/z,W=T/2,ne=L/2,P=C/2,G=A+1,O=z+1;let j=0,V=0;const X=new w;for(let q=0;q<O;q++){const ie=q*b-ne;for(let oe=0;oe<G;oe++){const ke=oe*x-W;X[_]=ke*y,X[f]=ie*v,X[m]=P,d.push(X.x,X.y,X.z),X[_]=0,X[f]=0,X[m]=C>0?1:-1,l.push(X.x,X.y,X.z),u.push(oe/A),u.push(1-q/z),j+=1}}for(let q=0;q<z;q++)for(let ie=0;ie<A;ie++){const oe=h+ie+G*q,ke=h+ie+G*(q+1),H=h+(ie+1)+G*(q+1),Z=h+(ie+1)+G*q;c.push(oe,ke,Z),c.push(ke,H,Z),V+=6}o.addGroup(p,V,re),p+=V,h+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ui(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Tt(r){const e={};for(let t=0;t<r.length;t++){const n=Ui(r[t]);for(const i in n)e[i]=n[i]}return e}function _u(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function ld(r){return r.getRenderTarget()===null?r.outputColorSpace:Ye.workingColorSpace}const Su={clone:Ui,merge:Tt};var xu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,vu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Nn extends Kt{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=xu,this.fragmentShader=vu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ui(e.uniforms),this.uniformsGroups=_u(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const s=this.uniforms[i].value;s&&s.isTexture?t.uniforms[i]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[i]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[i]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[i]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[i]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[i]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[i]={type:"m4",value:s.toArray()}:t.uniforms[i]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class ud extends nt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Fe,this.projectionMatrix=new Fe,this.projectionMatrixInverse=new Fe,this.coordinateSystem=pn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Tn=new w,wo=new Te,Lo=new Te;class bt extends ud{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Fi*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ji*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Fi*2*Math.atan(Math.tan(Ji*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Tn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Tn.x,Tn.y).multiplyScalar(-e/Tn.z),Tn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Tn.x,Tn.y).multiplyScalar(-e/Tn.z)}getViewSize(e,t){return this.getViewBounds(e,wo,Lo),t.subVectors(Lo,wo)}setViewOffset(e,t,n,i,a,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ji*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,a=-.5*i;const s=this.view;if(this.view!==null&&this.view.enabled){const c=s.fullWidth,d=s.fullHeight;a+=s.offsetX*i/c,t-=s.offsetY*n/d,i*=s.width/c,n*=s.height/d}const o=this.filmOffset;o!==0&&(a+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Si=-90,xi=1;class Eu extends nt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new bt(Si,xi,e,t);i.layers=this.layers,this.add(i);const a=new bt(Si,xi,e,t);a.layers=this.layers,this.add(a);const s=new bt(Si,xi,e,t);s.layers=this.layers,this.add(s);const o=new bt(Si,xi,e,t);o.layers=this.layers,this.add(o);const c=new bt(Si,xi,e,t);c.layers=this.layers,this.add(c);const d=new bt(Si,xi,e,t);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,a,s,o,c]=t;for(const d of t)this.remove(d);if(e===pn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===qr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const d of t)this.add(d),d.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,s,o,c,d,l]=this.children,u=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,a),e.setRenderTarget(n,1,i),e.render(t,s),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,d),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,l),e.setRenderTarget(u,h,p),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class hd extends mt{constructor(e,t,n,i,a,s,o,c,d,l){e=e!==void 0?e:[],t=t!==void 0?t:Li,super(e,t,n,i,a,s,o,c,d,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Mu extends ei{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];t.encoding!==void 0&&(Jn("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===$n?at:Ot),this.texture=new hd(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Et}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new sr(5,5,5),a=new Nn({name:"CubemapFromEquirect",uniforms:Ui(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ct,blending:Ln});a.uniforms.tEquirect.value=t;const s=new At(i,a),o=t.minFilter;return t.minFilter===mn&&(t.minFilter=Et),new Eu(1,10,this).update(e,s),t.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(e,t,n,i){const a=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,n,i);e.setRenderTarget(a)}}const ba=new w,yu=new w,Tu=new Oe;class kn{constructor(e=new w(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=ba.subVectors(n,t).cross(yu.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(ba),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/i;return a<0||a>1?null:t.copy(e.start).addScaledVector(n,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Tu.getNormalMatrix(e),i=this.coplanarPoint(ba).applyMatrix4(e),a=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Hn=new tn,Cr=new w;class ds{constructor(e=new kn,t=new kn,n=new kn,i=new kn,a=new kn,s=new kn){this.planes=[e,t,n,i,a,s]}set(e,t,n,i,a,s){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(a),o[5].copy(s),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=pn){const n=this.planes,i=e.elements,a=i[0],s=i[1],o=i[2],c=i[3],d=i[4],l=i[5],u=i[6],h=i[7],p=i[8],g=i[9],_=i[10],f=i[11],m=i[12],y=i[13],v=i[14],T=i[15];if(n[0].setComponents(c-a,h-d,f-p,T-m).normalize(),n[1].setComponents(c+a,h+d,f+p,T+m).normalize(),n[2].setComponents(c+s,h+l,f+g,T+y).normalize(),n[3].setComponents(c-s,h-l,f-g,T-y).normalize(),n[4].setComponents(c-o,h-u,f-_,T-v).normalize(),t===pn)n[5].setComponents(c+o,h+u,f+_,T+v).normalize();else if(t===qr)n[5].setComponents(o,u,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Hn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Hn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Hn)}intersectsSprite(e){return Hn.center.set(0,0,0),Hn.radius=.7071067811865476,Hn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Hn)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Cr.x=i.normal.x>0?e.max.x:e.min.x,Cr.y=i.normal.y>0?e.max.y:e.min.y,Cr.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Cr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function fd(){let r=null,e=!1,t=null,n=null;function i(a,s){t(a,s),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){r=a}}}function Au(r,e){const t=e.isWebGL2,n=new WeakMap;function i(d,l){const u=d.array,h=d.usage,p=u.byteLength,g=r.createBuffer();r.bindBuffer(l,g),r.bufferData(l,u,h),d.onUploadCallback();let _;if(u instanceof Float32Array)_=r.FLOAT;else if(u instanceof Uint16Array)if(d.isFloat16BufferAttribute)if(t)_=r.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=r.UNSIGNED_SHORT;else if(u instanceof Int16Array)_=r.SHORT;else if(u instanceof Uint32Array)_=r.UNSIGNED_INT;else if(u instanceof Int32Array)_=r.INT;else if(u instanceof Int8Array)_=r.BYTE;else if(u instanceof Uint8Array)_=r.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)_=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:_,bytesPerElement:u.BYTES_PER_ELEMENT,version:d.version,size:p}}function a(d,l,u){const h=l.array,p=l._updateRange,g=l.updateRanges;if(r.bindBuffer(u,d),p.count===-1&&g.length===0&&r.bufferSubData(u,0,h),g.length!==0){for(let _=0,f=g.length;_<f;_++){const m=g[_];t?r.bufferSubData(u,m.start*h.BYTES_PER_ELEMENT,h,m.start,m.count):r.bufferSubData(u,m.start*h.BYTES_PER_ELEMENT,h.subarray(m.start,m.start+m.count))}l.clearUpdateRanges()}p.count!==-1&&(t?r.bufferSubData(u,p.offset*h.BYTES_PER_ELEMENT,h,p.offset,p.count):r.bufferSubData(u,p.offset*h.BYTES_PER_ELEMENT,h.subarray(p.offset,p.offset+p.count)),p.count=-1),l.onUploadCallback()}function s(d){return d.isInterleavedBufferAttribute&&(d=d.data),n.get(d)}function o(d){d.isInterleavedBufferAttribute&&(d=d.data);const l=n.get(d);l&&(r.deleteBuffer(l.buffer),n.delete(d))}function c(d,l){if(d.isGLBufferAttribute){const h=n.get(d);(!h||h.version<d.version)&&n.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}d.isInterleavedBufferAttribute&&(d=d.data);const u=n.get(d);if(u===void 0)n.set(d,i(d,l));else if(u.version<d.version){if(u.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(u.buffer,d,l),u.version=d.version}}return{get:s,remove:o,update:c}}class Zr extends nn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const a=e/2,s=t/2,o=Math.floor(n),c=Math.floor(i),d=o+1,l=c+1,u=e/o,h=t/c,p=[],g=[],_=[],f=[];for(let m=0;m<l;m++){const y=m*h-s;for(let v=0;v<d;v++){const T=v*u-a;g.push(T,-y,0),_.push(0,0,1),f.push(v/o),f.push(1-m/c)}}for(let m=0;m<c;m++)for(let y=0;y<o;y++){const v=y+d*m,T=y+d*(m+1),L=y+1+d*(m+1),C=y+1+d*m;p.push(v,T,C),p.push(T,L,C)}this.setIndex(p),this.setAttribute("position",new _n(g,3)),this.setAttribute("normal",new _n(_,3)),this.setAttribute("uv",new _n(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zr(e.width,e.height,e.widthSegments,e.heightSegments)}}var ku=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,bu=`#ifdef USE_ALPHAHASH
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
#endif`,Cu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ru=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Lu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Pu=`#ifdef USE_AOMAP
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
#endif`,Du=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Nu=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
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
#endif`,Iu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Fu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Uu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Bu=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ou=`#ifdef USE_IRIDESCENCE
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
#endif`,Gu=`#ifdef USE_BUMPMAP
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
#endif`,Hu=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,zu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Vu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Wu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Xu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,qu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ju=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Yu=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Ku=`#define PI 3.141592653589793
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
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,Qu=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Zu=`vec3 transformedNormal = objectNormal;
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
#endif`,$u=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ju=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,eh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,th=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,nh="gl_FragColor = linearToOutputTexel( gl_FragColor );",ih=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,rh=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,ah=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,sh=`#ifdef USE_ENVMAP
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
#endif`,oh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ch=`#ifdef USE_ENVMAP
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
#endif`,dh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,lh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,uh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,hh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,fh=`#ifdef USE_GRADIENTMAP
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
}`,mh=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,ph=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,gh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,_h=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Sh=`uniform bool receiveShadow;
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
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
#endif`,xh=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
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
#endif`,vh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Eh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Mh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,yh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Th=`PhysicalMaterial material;
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
#endif`,Ah=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
}`,kh=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,bh=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ch=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Rh=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,wh=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Lh=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Ph=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Dh=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Nh=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ih=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Fh=`#if defined( USE_POINTS_UV )
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
#endif`,Uh=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Bh=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Oh=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Gh=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Hh=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,zh=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Vh=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Wh=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Xh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jh=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Yh=`#ifdef USE_NORMALMAP
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
#endif`,Kh=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Qh=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Zh=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,$h=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Jh=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ef=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
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
}`,tf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,nf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,rf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,af=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,sf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,of=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,cf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return shadow;
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
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
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,df=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,lf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,uf=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,hf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ff=`#ifdef USE_SKINNING
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
#endif`,mf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,pf=`#ifdef USE_SKINNING
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
#endif`,gf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,_f=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Sf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,xf=`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,vf=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Ef=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Mf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Tf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Af=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const kf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,bf=`uniform sampler2D t2D;
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
}`,Cf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Rf=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Lf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pf=`#include <common>
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
}`,Df=`#if DEPTH_PACKING == 3200
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
	#endif
}`,Nf=`#define DISTANCE
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
}`,If=`#define DISTANCE
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
}`,Ff=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Uf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bf=`uniform float scale;
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
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Of=`uniform vec3 diffuse;
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
}`,Gf=`#include <common>
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
}`,Hf=`uniform vec3 diffuse;
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
}`,zf=`#define LAMBERT
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
}`,Vf=`#define LAMBERT
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
}`,Wf=`#define MATCAP
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
}`,Xf=`#define MATCAP
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
}`,qf=`#define NORMAL
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
}`,jf=`#define NORMAL
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
}`,Yf=`#define PHONG
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
}`,Kf=`#define PHONG
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
}`,Qf=`#define STANDARD
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
}`,Zf=`#define STANDARD
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
}`,$f=`#define TOON
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
}`,Jf=`#define TOON
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
}`,em=`uniform float size;
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
}`,tm=`uniform vec3 diffuse;
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
}`,nm=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
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
}`,im=`uniform vec3 color;
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
}`,rm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,am=`uniform vec3 diffuse;
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
}`,Ie={alphahash_fragment:ku,alphahash_pars_fragment:bu,alphamap_fragment:Cu,alphamap_pars_fragment:Ru,alphatest_fragment:wu,alphatest_pars_fragment:Lu,aomap_fragment:Pu,aomap_pars_fragment:Du,batching_pars_vertex:Nu,batching_vertex:Iu,begin_vertex:Fu,beginnormal_vertex:Uu,bsdfs:Bu,iridescence_fragment:Ou,bumpmap_pars_fragment:Gu,clipping_planes_fragment:Hu,clipping_planes_pars_fragment:zu,clipping_planes_pars_vertex:Vu,clipping_planes_vertex:Wu,color_fragment:Xu,color_pars_fragment:qu,color_pars_vertex:ju,color_vertex:Yu,common:Ku,cube_uv_reflection_fragment:Qu,defaultnormal_vertex:Zu,displacementmap_pars_vertex:$u,displacementmap_vertex:Ju,emissivemap_fragment:eh,emissivemap_pars_fragment:th,colorspace_fragment:nh,colorspace_pars_fragment:ih,envmap_fragment:rh,envmap_common_pars_fragment:ah,envmap_pars_fragment:sh,envmap_pars_vertex:oh,envmap_physical_pars_fragment:xh,envmap_vertex:ch,fog_vertex:dh,fog_pars_vertex:lh,fog_fragment:uh,fog_pars_fragment:hh,gradientmap_pars_fragment:fh,lightmap_fragment:mh,lightmap_pars_fragment:ph,lights_lambert_fragment:gh,lights_lambert_pars_fragment:_h,lights_pars_begin:Sh,lights_toon_fragment:vh,lights_toon_pars_fragment:Eh,lights_phong_fragment:Mh,lights_phong_pars_fragment:yh,lights_physical_fragment:Th,lights_physical_pars_fragment:Ah,lights_fragment_begin:kh,lights_fragment_maps:bh,lights_fragment_end:Ch,logdepthbuf_fragment:Rh,logdepthbuf_pars_fragment:wh,logdepthbuf_pars_vertex:Lh,logdepthbuf_vertex:Ph,map_fragment:Dh,map_pars_fragment:Nh,map_particle_fragment:Ih,map_particle_pars_fragment:Fh,metalnessmap_fragment:Uh,metalnessmap_pars_fragment:Bh,morphcolor_vertex:Oh,morphnormal_vertex:Gh,morphtarget_pars_vertex:Hh,morphtarget_vertex:zh,normal_fragment_begin:Vh,normal_fragment_maps:Wh,normal_pars_fragment:Xh,normal_pars_vertex:qh,normal_vertex:jh,normalmap_pars_fragment:Yh,clearcoat_normal_fragment_begin:Kh,clearcoat_normal_fragment_maps:Qh,clearcoat_pars_fragment:Zh,iridescence_pars_fragment:$h,opaque_fragment:Jh,packing:ef,premultiplied_alpha_fragment:tf,project_vertex:nf,dithering_fragment:rf,dithering_pars_fragment:af,roughnessmap_fragment:sf,roughnessmap_pars_fragment:of,shadowmap_pars_fragment:cf,shadowmap_pars_vertex:df,shadowmap_vertex:lf,shadowmask_pars_fragment:uf,skinbase_vertex:hf,skinning_pars_vertex:ff,skinning_vertex:mf,skinnormal_vertex:pf,specularmap_fragment:gf,specularmap_pars_fragment:_f,tonemapping_fragment:Sf,tonemapping_pars_fragment:xf,transmission_fragment:vf,transmission_pars_fragment:Ef,uv_pars_fragment:Mf,uv_pars_vertex:yf,uv_vertex:Tf,worldpos_vertex:Af,background_vert:kf,background_frag:bf,backgroundCube_vert:Cf,backgroundCube_frag:Rf,cube_vert:wf,cube_frag:Lf,depth_vert:Pf,depth_frag:Df,distanceRGBA_vert:Nf,distanceRGBA_frag:If,equirect_vert:Ff,equirect_frag:Uf,linedashed_vert:Bf,linedashed_frag:Of,meshbasic_vert:Gf,meshbasic_frag:Hf,meshlambert_vert:zf,meshlambert_frag:Vf,meshmatcap_vert:Wf,meshmatcap_frag:Xf,meshnormal_vert:qf,meshnormal_frag:jf,meshphong_vert:Yf,meshphong_frag:Kf,meshphysical_vert:Qf,meshphysical_frag:Zf,meshtoon_vert:$f,meshtoon_frag:Jf,points_vert:em,points_frag:tm,shadow_vert:nm,shadow_frag:im,sprite_vert:rm,sprite_frag:am},se={common:{diffuse:{value:new Re(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Oe}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Oe},normalScale:{value:new Te(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Re(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Re(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0},uvTransform:{value:new Oe}},sprite:{diffuse:{value:new Re(16777215)},opacity:{value:1},center:{value:new Te(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}}},qt={basic:{uniforms:Tt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.fog]),vertexShader:Ie.meshbasic_vert,fragmentShader:Ie.meshbasic_frag},lambert:{uniforms:Tt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new Re(0)}}]),vertexShader:Ie.meshlambert_vert,fragmentShader:Ie.meshlambert_frag},phong:{uniforms:Tt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new Re(0)},specular:{value:new Re(1118481)},shininess:{value:30}}]),vertexShader:Ie.meshphong_vert,fragmentShader:Ie.meshphong_frag},standard:{uniforms:Tt([se.common,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.roughnessmap,se.metalnessmap,se.fog,se.lights,{emissive:{value:new Re(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ie.meshphysical_vert,fragmentShader:Ie.meshphysical_frag},toon:{uniforms:Tt([se.common,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.gradientmap,se.fog,se.lights,{emissive:{value:new Re(0)}}]),vertexShader:Ie.meshtoon_vert,fragmentShader:Ie.meshtoon_frag},matcap:{uniforms:Tt([se.common,se.bumpmap,se.normalmap,se.displacementmap,se.fog,{matcap:{value:null}}]),vertexShader:Ie.meshmatcap_vert,fragmentShader:Ie.meshmatcap_frag},points:{uniforms:Tt([se.points,se.fog]),vertexShader:Ie.points_vert,fragmentShader:Ie.points_frag},dashed:{uniforms:Tt([se.common,se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ie.linedashed_vert,fragmentShader:Ie.linedashed_frag},depth:{uniforms:Tt([se.common,se.displacementmap]),vertexShader:Ie.depth_vert,fragmentShader:Ie.depth_frag},normal:{uniforms:Tt([se.common,se.bumpmap,se.normalmap,se.displacementmap,{opacity:{value:1}}]),vertexShader:Ie.meshnormal_vert,fragmentShader:Ie.meshnormal_frag},sprite:{uniforms:Tt([se.sprite,se.fog]),vertexShader:Ie.sprite_vert,fragmentShader:Ie.sprite_frag},background:{uniforms:{uvTransform:{value:new Oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ie.background_vert,fragmentShader:Ie.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ie.backgroundCube_vert,fragmentShader:Ie.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ie.cube_vert,fragmentShader:Ie.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ie.equirect_vert,fragmentShader:Ie.equirect_frag},distanceRGBA:{uniforms:Tt([se.common,se.displacementmap,{referencePosition:{value:new w},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ie.distanceRGBA_vert,fragmentShader:Ie.distanceRGBA_frag},shadow:{uniforms:Tt([se.lights,se.fog,{color:{value:new Re(0)},opacity:{value:1}}]),vertexShader:Ie.shadow_vert,fragmentShader:Ie.shadow_frag}};qt.physical={uniforms:Tt([qt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Oe},clearcoatNormalScale:{value:new Te(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Oe},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Oe},sheen:{value:0},sheenColor:{value:new Re(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Oe},transmissionSamplerSize:{value:new Te},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Oe},attenuationDistance:{value:0},attenuationColor:{value:new Re(0)},specularColor:{value:new Re(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Oe},anisotropyVector:{value:new Te},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Oe}}]),vertexShader:Ie.meshphysical_vert,fragmentShader:Ie.meshphysical_frag};const Rr={r:0,b:0,g:0};function sm(r,e,t,n,i,a,s){const o=new Re(0);let c=a===!0?0:1,d,l,u=null,h=0,p=null;function g(f,m){let y=!1,v=m.isScene===!0?m.background:null;v&&v.isTexture&&(v=(m.backgroundBlurriness>0?t:e).get(v)),v===null?_(o,c):v&&v.isColor&&(_(v,1),y=!0);const T=r.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,s):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(r.autoClear||y)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Yr)?(l===void 0&&(l=new At(new sr(1,1,1),new Nn({name:"BackgroundCubeMaterial",uniforms:Ui(qt.backgroundCube.uniforms),vertexShader:qt.backgroundCube.vertexShader,fragmentShader:qt.backgroundCube.fragmentShader,side:Ct,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(L,C,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),l.material.uniforms.envMap.value=v,l.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,l.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,l.material.toneMapped=Ye.getTransfer(v.colorSpace)!==tt,(u!==v||h!==v.version||p!==r.toneMapping)&&(l.material.needsUpdate=!0,u=v,h=v.version,p=r.toneMapping),l.layers.enableAll(),f.unshift(l,l.geometry,l.material,0,0,null)):v&&v.isTexture&&(d===void 0&&(d=new At(new Zr(2,2),new Nn({name:"BackgroundMaterial",uniforms:Ui(qt.background.uniforms),vertexShader:qt.background.vertexShader,fragmentShader:qt.background.fragmentShader,side:Sn,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(d)),d.material.uniforms.t2D.value=v,d.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,d.material.toneMapped=Ye.getTransfer(v.colorSpace)!==tt,v.matrixAutoUpdate===!0&&v.updateMatrix(),d.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||h!==v.version||p!==r.toneMapping)&&(d.material.needsUpdate=!0,u=v,h=v.version,p=r.toneMapping),d.layers.enableAll(),f.unshift(d,d.geometry,d.material,0,0,null))}function _(f,m){f.getRGB(Rr,ld(r)),n.buffers.color.setClear(Rr.r,Rr.g,Rr.b,m,s)}return{getClearColor:function(){return o},setClearColor:function(f,m=1){o.set(f),c=m,_(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(f){c=f,_(o,c)},render:g}}function om(r,e,t,n){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),a=n.isWebGL2?null:e.get("OES_vertex_array_object"),s=n.isWebGL2||a!==null,o={},c=f(null);let d=c,l=!1;function u(P,G,O,j,V){let X=!1;if(s){const q=_(j,O,G);d!==q&&(d=q,p(d.object)),X=m(P,j,O,V),X&&y(P,j,O,V)}else{const q=G.wireframe===!0;(d.geometry!==j.id||d.program!==O.id||d.wireframe!==q)&&(d.geometry=j.id,d.program=O.id,d.wireframe=q,X=!0)}V!==null&&t.update(V,r.ELEMENT_ARRAY_BUFFER),(X||l)&&(l=!1,z(P,G,O,j),V!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(V).buffer))}function h(){return n.isWebGL2?r.createVertexArray():a.createVertexArrayOES()}function p(P){return n.isWebGL2?r.bindVertexArray(P):a.bindVertexArrayOES(P)}function g(P){return n.isWebGL2?r.deleteVertexArray(P):a.deleteVertexArrayOES(P)}function _(P,G,O){const j=O.wireframe===!0;let V=o[P.id];V===void 0&&(V={},o[P.id]=V);let X=V[G.id];X===void 0&&(X={},V[G.id]=X);let q=X[j];return q===void 0&&(q=f(h()),X[j]=q),q}function f(P){const G=[],O=[],j=[];for(let V=0;V<i;V++)G[V]=0,O[V]=0,j[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:O,attributeDivisors:j,object:P,attributes:{},index:null}}function m(P,G,O,j){const V=d.attributes,X=G.attributes;let q=0;const ie=O.getAttributes();for(const oe in ie)if(ie[oe].location>=0){const H=V[oe];let Z=X[oe];if(Z===void 0&&(oe==="instanceMatrix"&&P.instanceMatrix&&(Z=P.instanceMatrix),oe==="instanceColor"&&P.instanceColor&&(Z=P.instanceColor)),H===void 0||H.attribute!==Z||Z&&H.data!==Z.data)return!0;q++}return d.attributesNum!==q||d.index!==j}function y(P,G,O,j){const V={},X=G.attributes;let q=0;const ie=O.getAttributes();for(const oe in ie)if(ie[oe].location>=0){let H=X[oe];H===void 0&&(oe==="instanceMatrix"&&P.instanceMatrix&&(H=P.instanceMatrix),oe==="instanceColor"&&P.instanceColor&&(H=P.instanceColor));const Z={};Z.attribute=H,H&&H.data&&(Z.data=H.data),V[oe]=Z,q++}d.attributes=V,d.attributesNum=q,d.index=j}function v(){const P=d.newAttributes;for(let G=0,O=P.length;G<O;G++)P[G]=0}function T(P){L(P,0)}function L(P,G){const O=d.newAttributes,j=d.enabledAttributes,V=d.attributeDivisors;O[P]=1,j[P]===0&&(r.enableVertexAttribArray(P),j[P]=1),V[P]!==G&&((n.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,G),V[P]=G)}function C(){const P=d.newAttributes,G=d.enabledAttributes;for(let O=0,j=G.length;O<j;O++)G[O]!==P[O]&&(r.disableVertexAttribArray(O),G[O]=0)}function A(P,G,O,j,V,X,q){q===!0?r.vertexAttribIPointer(P,G,O,V,X):r.vertexAttribPointer(P,G,O,j,V,X)}function z(P,G,O,j){if(n.isWebGL2===!1&&(P.isInstancedMesh||j.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const V=j.attributes,X=O.getAttributes(),q=G.defaultAttributeValues;for(const ie in X){const oe=X[ie];if(oe.location>=0){let ke=V[ie];if(ke===void 0&&(ie==="instanceMatrix"&&P.instanceMatrix&&(ke=P.instanceMatrix),ie==="instanceColor"&&P.instanceColor&&(ke=P.instanceColor)),ke!==void 0){const H=ke.normalized,Z=ke.itemSize,ue=t.get(ke);if(ue===void 0)continue;const Ee=ue.buffer,Me=ue.type,me=ue.bytesPerElement,We=n.isWebGL2===!0&&(Me===r.INT||Me===r.UNSIGNED_INT||ke.gpuType===Wc);if(ke.isInterleavedBufferAttribute){const we=ke.data,N=we.stride,ot=ke.offset;if(we.isInstancedInterleavedBuffer){for(let ve=0;ve<oe.locationSize;ve++)L(oe.location+ve,we.meshPerAttribute);P.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=we.meshPerAttribute*we.count)}else for(let ve=0;ve<oe.locationSize;ve++)T(oe.location+ve);r.bindBuffer(r.ARRAY_BUFFER,Ee);for(let ve=0;ve<oe.locationSize;ve++)A(oe.location+ve,Z/oe.locationSize,Me,H,N*me,(ot+Z/oe.locationSize*ve)*me,We)}else{if(ke.isInstancedBufferAttribute){for(let we=0;we<oe.locationSize;we++)L(oe.location+we,ke.meshPerAttribute);P.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=ke.meshPerAttribute*ke.count)}else for(let we=0;we<oe.locationSize;we++)T(oe.location+we);r.bindBuffer(r.ARRAY_BUFFER,Ee);for(let we=0;we<oe.locationSize;we++)A(oe.location+we,Z/oe.locationSize,Me,H,Z*me,Z/oe.locationSize*we*me,We)}}else if(q!==void 0){const H=q[ie];if(H!==void 0)switch(H.length){case 2:r.vertexAttrib2fv(oe.location,H);break;case 3:r.vertexAttrib3fv(oe.location,H);break;case 4:r.vertexAttrib4fv(oe.location,H);break;default:r.vertexAttrib1fv(oe.location,H)}}}}C()}function re(){W();for(const P in o){const G=o[P];for(const O in G){const j=G[O];for(const V in j)g(j[V].object),delete j[V];delete G[O]}delete o[P]}}function x(P){if(o[P.id]===void 0)return;const G=o[P.id];for(const O in G){const j=G[O];for(const V in j)g(j[V].object),delete j[V];delete G[O]}delete o[P.id]}function b(P){for(const G in o){const O=o[G];if(O[P.id]===void 0)continue;const j=O[P.id];for(const V in j)g(j[V].object),delete j[V];delete O[P.id]}}function W(){ne(),l=!0,d!==c&&(d=c,p(d.object))}function ne(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:u,reset:W,resetDefaultState:ne,dispose:re,releaseStatesOfGeometry:x,releaseStatesOfProgram:b,initAttributes:v,enableAttribute:T,disableUnusedAttributes:C}}function cm(r,e,t,n){const i=n.isWebGL2;let a;function s(l){a=l}function o(l,u){r.drawArrays(a,l,u),t.update(u,a,1)}function c(l,u,h){if(h===0)return;let p,g;if(i)p=r,g="drawArraysInstanced";else if(p=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[g](a,l,u,h),t.update(u,a,h)}function d(l,u,h){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<h;g++)this.render(l[g],u[g]);else{p.multiDrawArraysWEBGL(a,l,0,u,0,h);let g=0;for(let _=0;_<h;_++)g+=u[_];t.update(g,a,1)}}this.setMode=s,this.render=o,this.renderInstances=c,this.renderMultiDraw=d}function dm(r,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function a(A){if(A==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const s=typeof WebGL2RenderingContext<"u"&&r.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const c=a(o);c!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",c,"instead."),o=c);const d=s||e.has("WEBGL_draw_buffers"),l=t.logarithmicDepthBuffer===!0,u=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),h=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=r.getParameter(r.MAX_TEXTURE_SIZE),g=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),_=r.getParameter(r.MAX_VERTEX_ATTRIBS),f=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),m=r.getParameter(r.MAX_VARYING_VECTORS),y=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),v=h>0,T=s||e.has("OES_texture_float"),L=v&&T,C=s?r.getParameter(r.MAX_SAMPLES):0;return{isWebGL2:s,drawBuffers:d,getMaxAnisotropy:i,getMaxPrecision:a,precision:o,logarithmicDepthBuffer:l,maxTextures:u,maxVertexTextures:h,maxTextureSize:p,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:f,maxVaryings:m,maxFragmentUniforms:y,vertexTextures:v,floatFragmentTextures:T,floatVertexTextures:L,maxSamples:C}}function lm(r){const e=this;let t=null,n=0,i=!1,a=!1;const s=new kn,o=new Oe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,h){const p=u.length!==0||h||n!==0||i;return i=h,n=u.length,p},this.beginShadows=function(){a=!0,l(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(u,h){t=l(u,h,0)},this.setState=function(u,h,p){const g=u.clippingPlanes,_=u.clipIntersection,f=u.clipShadows,m=r.get(u);if(!i||g===null||g.length===0||a&&!f)a?l(null):d();else{const y=a?0:n,v=y*4;let T=m.clippingState||null;c.value=T,T=l(g,h,v,p);for(let L=0;L!==v;++L)T[L]=t[L];m.clippingState=T,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function d(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function l(u,h,p,g){const _=u!==null?u.length:0;let f=null;if(_!==0){if(f=c.value,g!==!0||f===null){const m=p+_*4,y=h.matrixWorldInverse;o.getNormalMatrix(y),(f===null||f.length<m)&&(f=new Float32Array(m));for(let v=0,T=p;v!==_;++v,T+=4)s.copy(u[v]).applyMatrix4(y,o),s.normal.toArray(f,T),f[T+3]=s.constant}c.value=f,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,f}}function um(r){let e=new WeakMap;function t(s,o){return o===ja?s.mapping=Li:o===Ya&&(s.mapping=Pi),s}function n(s){if(s&&s.isTexture){const o=s.mapping;if(o===ja||o===Ya)if(e.has(s)){const c=e.get(s).texture;return t(c,s.mapping)}else{const c=s.image;if(c&&c.height>0){const d=new Mu(c.height);return d.fromEquirectangularTexture(r,s),e.set(s,d),s.addEventListener("dispose",i),t(d.texture,s.mapping)}else return null}}return s}function i(s){const o=s.target;o.removeEventListener("dispose",i);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function a(){e=new WeakMap}return{get:n,dispose:a}}class $r extends ud{constructor(e=-1,t=1,n=1,i=-1,a=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=a,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,a,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let a=n-e,s=n+e,o=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,l=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=d*this.view.offsetX,s=a+d*this.view.width,o-=l*this.view.offsetY,c=o-l*this.view.height}this.projectionMatrix.makeOrthographic(a,s,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ai=4,Po=[.125,.215,.35,.446,.526,.582],qn=20,Ca=new $r,Do=new Re;let Ra=null,wa=0,La=0;const Vn=(1+Math.sqrt(5))/2,vi=1/Vn,No=[new w(1,1,1),new w(-1,1,1),new w(1,1,-1),new w(-1,1,-1),new w(0,Vn,vi),new w(0,Vn,-vi),new w(vi,0,Vn),new w(-vi,0,Vn),new w(Vn,vi,0),new w(-Vn,vi,0)];class Io{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Ra=this._renderer.getRenderTarget(),wa=this._renderer.getActiveCubeFace(),La=this._renderer.getActiveMipmapLevel(),this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,n,i,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Bo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Uo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ra,wa,La),e.scissorTest=!1,wr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Li||e.mapping===Pi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ra=this._renderer.getRenderTarget(),wa=this._renderer.getActiveCubeFace(),La=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Et,minFilter:Et,generateMipmaps:!1,type:tr,format:Bt,colorSpace:_t,depthBuffer:!1},i=Fo(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Fo(e,t,n);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=hm(a)),this._blurMaterial=fm(a,e,t)}return i}_compileMaterial(e){const t=new At(this._lodPlanes[0],e);this._renderer.compile(t,Ca)}_sceneToCubeUV(e,t,n,i){const o=new bt(90,1,t,n),c=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],l=this._renderer,u=l.autoClear,h=l.toneMapping;l.getClearColor(Do),l.toneMapping=Pn,l.autoClear=!1;const p=new gn({name:"PMREM.Background",side:Ct,depthWrite:!1,depthTest:!1}),g=new At(new sr,p);let _=!1;const f=e.background;f?f.isColor&&(p.color.copy(f),e.background=null,_=!0):(p.color.copy(Do),_=!0);for(let m=0;m<6;m++){const y=m%3;y===0?(o.up.set(0,c[m],0),o.lookAt(d[m],0,0)):y===1?(o.up.set(0,0,c[m]),o.lookAt(0,d[m],0)):(o.up.set(0,c[m],0),o.lookAt(0,0,d[m]));const v=this._cubeSize;wr(i,y*v,m>2?v:0,v,v),l.setRenderTarget(i),_&&l.render(g,o),l.render(e,o)}g.geometry.dispose(),g.material.dispose(),l.toneMapping=h,l.autoClear=u,e.background=f}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Li||e.mapping===Pi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Bo()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Uo());const a=i?this._cubemapMaterial:this._equirectMaterial,s=new At(this._lodPlanes[0],a),o=a.uniforms;o.envMap.value=e;const c=this._cubeSize;wr(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(s,Ca)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const a=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),s=No[(i-1)%No.length];this._blur(e,i-1,i,a,s)}t.autoClear=n}_blur(e,t,n,i,a){const s=this._pingPongRenderTarget;this._halfBlur(e,s,t,n,i,"latitudinal",a),this._halfBlur(s,e,n,n,i,"longitudinal",a)}_halfBlur(e,t,n,i,a,s,o){const c=this._renderer,d=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const l=3,u=new At(this._lodPlanes[i],d),h=d.uniforms,p=this._sizeLods[n]-1,g=isFinite(a)?Math.PI/(2*p):2*Math.PI/(2*qn-1),_=a/g,f=isFinite(a)?1+Math.floor(l*_):qn;f>qn&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${qn}`);const m=[];let y=0;for(let A=0;A<qn;++A){const z=A/_,re=Math.exp(-z*z/2);m.push(re),A===0?y+=re:A<f&&(y+=2*re)}for(let A=0;A<m.length;A++)m[A]=m[A]/y;h.envMap.value=e.texture,h.samples.value=f,h.weights.value=m,h.latitudinal.value=s==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:v}=this;h.dTheta.value=g,h.mipInt.value=v-n;const T=this._sizeLods[i],L=3*T*(i>v-Ai?i-v+Ai:0),C=4*(this._cubeSize-T);wr(t,L,C,3*T,2*T),c.setRenderTarget(t),c.render(u,Ca)}}function hm(r){const e=[],t=[],n=[];let i=r;const a=r-Ai+1+Po.length;for(let s=0;s<a;s++){const o=Math.pow(2,i);t.push(o);let c=1/o;s>r-Ai?c=Po[s-r+Ai-1]:s===0&&(c=0),n.push(c);const d=1/(o-2),l=-d,u=1+d,h=[l,l,u,l,u,u,l,l,u,u,l,u],p=6,g=6,_=3,f=2,m=1,y=new Float32Array(_*g*p),v=new Float32Array(f*g*p),T=new Float32Array(m*g*p);for(let C=0;C<p;C++){const A=C%3*2/3-1,z=C>2?0:-1,re=[A,z,0,A+2/3,z,0,A+2/3,z+1,0,A,z,0,A+2/3,z+1,0,A,z+1,0];y.set(re,_*g*C),v.set(h,f*g*C);const x=[C,C,C,C,C,C];T.set(x,m*g*C)}const L=new nn;L.setAttribute("position",new kt(y,_)),L.setAttribute("uv",new kt(v,f)),L.setAttribute("faceIndex",new kt(T,m)),e.push(L),i>Ai&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Fo(r,e,t){const n=new ei(r,e,t);return n.texture.mapping=Yr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function wr(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function fm(r,e,t){const n=new Float32Array(qn),i=new w(0,1,0);return new Nn({name:"SphericalGaussianBlur",defines:{n:qn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:ls(),fragmentShader:`

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
		`,blending:Ln,depthTest:!1,depthWrite:!1})}function Uo(){return new Nn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ls(),fragmentShader:`

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
		`,blending:Ln,depthTest:!1,depthWrite:!1})}function Bo(){return new Nn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ls(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ln,depthTest:!1,depthWrite:!1})}function ls(){return`

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
	`}function mm(r){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const c=o.mapping,d=c===ja||c===Ya,l=c===Li||c===Pi;if(d||l)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let u=e.get(o);return t===null&&(t=new Io(r)),u=d?t.fromEquirectangular(o,u):t.fromCubemap(o,u),e.set(o,u),u.texture}else{if(e.has(o))return e.get(o).texture;{const u=o.image;if(d&&u&&u.height>0||l&&u&&i(u)){t===null&&(t=new Io(r));const h=d?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,h),o.addEventListener("dispose",a),h.texture}else return null}}}return o}function i(o){let c=0;const d=6;for(let l=0;l<d;l++)o[l]!==void 0&&c++;return c===d}function a(o){const c=o.target;c.removeEventListener("dispose",a);const d=e.get(c);d!==void 0&&(e.delete(c),d.dispose())}function s(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:s}}function pm(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function gm(r,e,t,n){const i={},a=new WeakMap;function s(u){const h=u.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);for(const g in h.morphAttributes){const _=h.morphAttributes[g];for(let f=0,m=_.length;f<m;f++)e.remove(_[f])}h.removeEventListener("dispose",s),delete i[h.id];const p=a.get(h);p&&(e.remove(p),a.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(u,h){return i[h.id]===!0||(h.addEventListener("dispose",s),i[h.id]=!0,t.memory.geometries++),h}function c(u){const h=u.attributes;for(const g in h)e.update(h[g],r.ARRAY_BUFFER);const p=u.morphAttributes;for(const g in p){const _=p[g];for(let f=0,m=_.length;f<m;f++)e.update(_[f],r.ARRAY_BUFFER)}}function d(u){const h=[],p=u.index,g=u.attributes.position;let _=0;if(p!==null){const y=p.array;_=p.version;for(let v=0,T=y.length;v<T;v+=3){const L=y[v+0],C=y[v+1],A=y[v+2];h.push(L,C,C,A,A,L)}}else if(g!==void 0){const y=g.array;_=g.version;for(let v=0,T=y.length/3-1;v<T;v+=3){const L=v+0,C=v+1,A=v+2;h.push(L,C,C,A,A,L)}}else return;const f=new(nd(h)?dd:cd)(h,1);f.version=_;const m=a.get(u);m&&e.remove(m),a.set(u,f)}function l(u){const h=a.get(u);if(h){const p=u.index;p!==null&&h.version<p.version&&d(u)}else d(u);return a.get(u)}return{get:o,update:c,getWireframeAttribute:l}}function _m(r,e,t,n){const i=n.isWebGL2;let a;function s(p){a=p}let o,c;function d(p){o=p.type,c=p.bytesPerElement}function l(p,g){r.drawElements(a,g,o,p*c),t.update(g,a,1)}function u(p,g,_){if(_===0)return;let f,m;if(i)f=r,m="drawElementsInstanced";else if(f=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",f===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[m](a,g,o,p*c,_),t.update(g,a,_)}function h(p,g,_){if(_===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<_;m++)this.render(p[m]/c,g[m]);else{f.multiDrawElementsWEBGL(a,g,0,o,p,0,_);let m=0;for(let y=0;y<_;y++)m+=g[y];t.update(m,a,1)}}this.setMode=s,this.setIndex=d,this.render=l,this.renderInstances=u,this.renderMultiDraw=h}function Sm(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,s,o){switch(t.calls++,s){case r.TRIANGLES:t.triangles+=o*(a/3);break;case r.LINES:t.lines+=o*(a/2);break;case r.LINE_STRIP:t.lines+=o*(a-1);break;case r.LINE_LOOP:t.lines+=o*a;break;case r.POINTS:t.points+=o*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function xm(r,e){return r[0]-e[0]}function vm(r,e){return Math.abs(e[1])-Math.abs(r[1])}function Em(r,e,t){const n={},i=new Float32Array(8),a=new WeakMap,s=new $e,o=[];for(let d=0;d<8;d++)o[d]=[d,0];function c(d,l,u){const h=d.morphTargetInfluences;if(e.isWebGL2===!0){const g=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,_=g!==void 0?g.length:0;let f=a.get(l);if(f===void 0||f.count!==_){let G=function(){ne.dispose(),a.delete(l),l.removeEventListener("dispose",G)};var p=G;f!==void 0&&f.texture.dispose();const v=l.morphAttributes.position!==void 0,T=l.morphAttributes.normal!==void 0,L=l.morphAttributes.color!==void 0,C=l.morphAttributes.position||[],A=l.morphAttributes.normal||[],z=l.morphAttributes.color||[];let re=0;v===!0&&(re=1),T===!0&&(re=2),L===!0&&(re=3);let x=l.attributes.position.count*re,b=1;x>e.maxTextureSize&&(b=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);const W=new Float32Array(x*b*4*_),ne=new ad(W,x,b,_);ne.type=jt,ne.needsUpdate=!0;const P=re*4;for(let O=0;O<_;O++){const j=C[O],V=A[O],X=z[O],q=x*b*4*O;for(let ie=0;ie<j.count;ie++){const oe=ie*P;v===!0&&(s.fromBufferAttribute(j,ie),W[q+oe+0]=s.x,W[q+oe+1]=s.y,W[q+oe+2]=s.z,W[q+oe+3]=0),T===!0&&(s.fromBufferAttribute(V,ie),W[q+oe+4]=s.x,W[q+oe+5]=s.y,W[q+oe+6]=s.z,W[q+oe+7]=0),L===!0&&(s.fromBufferAttribute(X,ie),W[q+oe+8]=s.x,W[q+oe+9]=s.y,W[q+oe+10]=s.z,W[q+oe+11]=X.itemSize===4?s.w:1)}}f={count:_,texture:ne,size:new Te(x,b)},a.set(l,f),l.addEventListener("dispose",G)}let m=0;for(let v=0;v<h.length;v++)m+=h[v];const y=l.morphTargetsRelative?1:1-m;u.getUniforms().setValue(r,"morphTargetBaseInfluence",y),u.getUniforms().setValue(r,"morphTargetInfluences",h),u.getUniforms().setValue(r,"morphTargetsTexture",f.texture,t),u.getUniforms().setValue(r,"morphTargetsTextureSize",f.size)}else{const g=h===void 0?0:h.length;let _=n[l.id];if(_===void 0||_.length!==g){_=[];for(let T=0;T<g;T++)_[T]=[T,0];n[l.id]=_}for(let T=0;T<g;T++){const L=_[T];L[0]=T,L[1]=h[T]}_.sort(vm);for(let T=0;T<8;T++)T<g&&_[T][1]?(o[T][0]=_[T][0],o[T][1]=_[T][1]):(o[T][0]=Number.MAX_SAFE_INTEGER,o[T][1]=0);o.sort(xm);const f=l.morphAttributes.position,m=l.morphAttributes.normal;let y=0;for(let T=0;T<8;T++){const L=o[T],C=L[0],A=L[1];C!==Number.MAX_SAFE_INTEGER&&A?(f&&l.getAttribute("morphTarget"+T)!==f[C]&&l.setAttribute("morphTarget"+T,f[C]),m&&l.getAttribute("morphNormal"+T)!==m[C]&&l.setAttribute("morphNormal"+T,m[C]),i[T]=A,y+=A):(f&&l.hasAttribute("morphTarget"+T)===!0&&l.deleteAttribute("morphTarget"+T),m&&l.hasAttribute("morphNormal"+T)===!0&&l.deleteAttribute("morphNormal"+T),i[T]=0)}const v=l.morphTargetsRelative?1:1-y;u.getUniforms().setValue(r,"morphTargetBaseInfluence",v),u.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:c}}function Mm(r,e,t,n){let i=new WeakMap;function a(c){const d=n.render.frame,l=c.geometry,u=e.get(c,l);if(i.get(u)!==d&&(e.update(u),i.set(u,d)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),i.get(c)!==d&&(t.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,r.ARRAY_BUFFER),i.set(c,d))),c.isSkinnedMesh){const h=c.skeleton;i.get(h)!==d&&(h.update(),i.set(h,d))}return u}function s(){i=new WeakMap}function o(c){const d=c.target;d.removeEventListener("dispose",o),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:a,dispose:s}}class md extends mt{constructor(e,t,n,i,a,s,o,c,d,l){if(l=l!==void 0?l:Zn,l!==Zn&&l!==Ni)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&l===Zn&&(n=Rn),n===void 0&&l===Ni&&(n=Qn),super(null,i,a,s,o,c,l,n,d),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:ft,this.minFilter=c!==void 0?c:ft,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const pd=new mt,gd=new md(1,1);gd.compareFunction=ed;const _d=new ad,Sd=new au,xd=new hd,Oo=[],Go=[],Ho=new Float32Array(16),zo=new Float32Array(9),Vo=new Float32Array(4);function Gi(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let a=Oo[i];if(a===void 0&&(a=new Float32Array(i),Oo[i]=a),e!==0){n.toArray(a,0);for(let s=1,o=0;s!==e;++s)o+=t,r[s].toArray(a,o)}return a}function dt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function lt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Jr(r,e){let t=Go[e];t===void 0&&(t=new Int32Array(e),Go[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function ym(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function Tm(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;r.uniform2fv(this.addr,e),lt(t,e)}}function Am(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(dt(t,e))return;r.uniform3fv(this.addr,e),lt(t,e)}}function km(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;r.uniform4fv(this.addr,e),lt(t,e)}}function bm(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(dt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),lt(t,e)}else{if(dt(t,n))return;Vo.set(n),r.uniformMatrix2fv(this.addr,!1,Vo),lt(t,n)}}function Cm(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(dt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),lt(t,e)}else{if(dt(t,n))return;zo.set(n),r.uniformMatrix3fv(this.addr,!1,zo),lt(t,n)}}function Rm(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(dt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),lt(t,e)}else{if(dt(t,n))return;Ho.set(n),r.uniformMatrix4fv(this.addr,!1,Ho),lt(t,n)}}function wm(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function Lm(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;r.uniform2iv(this.addr,e),lt(t,e)}}function Pm(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dt(t,e))return;r.uniform3iv(this.addr,e),lt(t,e)}}function Dm(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;r.uniform4iv(this.addr,e),lt(t,e)}}function Nm(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function Im(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;r.uniform2uiv(this.addr,e),lt(t,e)}}function Fm(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dt(t,e))return;r.uniform3uiv(this.addr,e),lt(t,e)}}function Um(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;r.uniform4uiv(this.addr,e),lt(t,e)}}function Bm(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);const a=this.type===r.SAMPLER_2D_SHADOW?gd:pd;t.setTexture2D(e||a,i)}function Om(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Sd,i)}function Gm(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||xd,i)}function Hm(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||_d,i)}function zm(r){switch(r){case 5126:return ym;case 35664:return Tm;case 35665:return Am;case 35666:return km;case 35674:return bm;case 35675:return Cm;case 35676:return Rm;case 5124:case 35670:return wm;case 35667:case 35671:return Lm;case 35668:case 35672:return Pm;case 35669:case 35673:return Dm;case 5125:return Nm;case 36294:return Im;case 36295:return Fm;case 36296:return Um;case 35678:case 36198:case 36298:case 36306:case 35682:return Bm;case 35679:case 36299:case 36307:return Om;case 35680:case 36300:case 36308:case 36293:return Gm;case 36289:case 36303:case 36311:case 36292:return Hm}}function Vm(r,e){r.uniform1fv(this.addr,e)}function Wm(r,e){const t=Gi(e,this.size,2);r.uniform2fv(this.addr,t)}function Xm(r,e){const t=Gi(e,this.size,3);r.uniform3fv(this.addr,t)}function qm(r,e){const t=Gi(e,this.size,4);r.uniform4fv(this.addr,t)}function jm(r,e){const t=Gi(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function Ym(r,e){const t=Gi(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function Km(r,e){const t=Gi(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function Qm(r,e){r.uniform1iv(this.addr,e)}function Zm(r,e){r.uniform2iv(this.addr,e)}function $m(r,e){r.uniform3iv(this.addr,e)}function Jm(r,e){r.uniform4iv(this.addr,e)}function ep(r,e){r.uniform1uiv(this.addr,e)}function tp(r,e){r.uniform2uiv(this.addr,e)}function np(r,e){r.uniform3uiv(this.addr,e)}function ip(r,e){r.uniform4uiv(this.addr,e)}function rp(r,e,t){const n=this.cache,i=e.length,a=Jr(t,i);dt(n,a)||(r.uniform1iv(this.addr,a),lt(n,a));for(let s=0;s!==i;++s)t.setTexture2D(e[s]||pd,a[s])}function ap(r,e,t){const n=this.cache,i=e.length,a=Jr(t,i);dt(n,a)||(r.uniform1iv(this.addr,a),lt(n,a));for(let s=0;s!==i;++s)t.setTexture3D(e[s]||Sd,a[s])}function sp(r,e,t){const n=this.cache,i=e.length,a=Jr(t,i);dt(n,a)||(r.uniform1iv(this.addr,a),lt(n,a));for(let s=0;s!==i;++s)t.setTextureCube(e[s]||xd,a[s])}function op(r,e,t){const n=this.cache,i=e.length,a=Jr(t,i);dt(n,a)||(r.uniform1iv(this.addr,a),lt(n,a));for(let s=0;s!==i;++s)t.setTexture2DArray(e[s]||_d,a[s])}function cp(r){switch(r){case 5126:return Vm;case 35664:return Wm;case 35665:return Xm;case 35666:return qm;case 35674:return jm;case 35675:return Ym;case 35676:return Km;case 5124:case 35670:return Qm;case 35667:case 35671:return Zm;case 35668:case 35672:return $m;case 35669:case 35673:return Jm;case 5125:return ep;case 36294:return tp;case 36295:return np;case 36296:return ip;case 35678:case 36198:case 36298:case 36306:case 35682:return rp;case 35679:case 36299:case 36307:return ap;case 35680:case 36300:case 36308:case 36293:return sp;case 36289:case 36303:case 36311:case 36292:return op}}class dp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=zm(t.type)}}class lp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=cp(t.type)}}class up{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let a=0,s=i.length;a!==s;++a){const o=i[a];o.setValue(e,t[o.id],n)}}}const Pa=/(\w+)(\])?(\[|\.)?/g;function Wo(r,e){r.seq.push(e),r.map[e.id]=e}function hp(r,e,t){const n=r.name,i=n.length;for(Pa.lastIndex=0;;){const a=Pa.exec(n),s=Pa.lastIndex;let o=a[1];const c=a[2]==="]",d=a[3];if(c&&(o=o|0),d===void 0||d==="["&&s+2===i){Wo(t,d===void 0?new dp(o,r,e):new lp(o,r,e));break}else{let u=t.map[o];u===void 0&&(u=new up(o),Wo(t,u)),t=u}}}class Or{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const a=e.getActiveUniform(t,i),s=e.getUniformLocation(t,a.name);hp(a,s,this)}}setValue(e,t,n,i){const a=this.map[t];a!==void 0&&a.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let a=0,s=t.length;a!==s;++a){const o=t[a],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,a=e.length;i!==a;++i){const s=e[i];s.id in t&&n.push(s)}return n}}function Xo(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const fp=37297;let mp=0;function pp(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let s=i;s<a;s++){const o=s+1;n.push(`${o===e?">":" "} ${o}: ${t[s]}`)}return n.join(`
`)}function gp(r){const e=Ye.getPrimaries(Ye.workingColorSpace),t=Ye.getPrimaries(r);let n;switch(e===t?n="":e===Xr&&t===Wr?n="LinearDisplayP3ToLinearSRGB":e===Wr&&t===Xr&&(n="LinearSRGBToLinearDisplayP3"),r){case _t:case Kr:return[n,"LinearTransferOETF"];case at:case os:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[n,"LinearTransferOETF"]}}function qo(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const a=/ERROR: 0:(\d+)/.exec(i);if(a){const s=parseInt(a[1]);return t.toUpperCase()+`

`+i+`

`+pp(r.getShaderSource(e),s)}else return i}function _p(r,e){const t=gp(e);return`vec4 ${r}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Sp(r,e){let t;switch(e){case fl:t="Linear";break;case ml:t="Reinhard";break;case pl:t="OptimizedCineon";break;case gl:t="ACESFilmic";break;case Sl:t="AgX";break;case _l:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function xp(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.normalMapTangentSpace||r.clearcoatNormalMap||r.flatShading||r.alphaToCoverage||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ki).join(`
`)}function vp(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ki).join(`
`)}function Ep(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Mp(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const a=r.getActiveAttrib(e,i),s=a.name;let o=1;a.type===r.FLOAT_MAT2&&(o=2),a.type===r.FLOAT_MAT3&&(o=3),a.type===r.FLOAT_MAT4&&(o=4),t[s]={type:a.type,location:r.getAttribLocation(e,s),locationSize:o}}return t}function ki(r){return r!==""}function jo(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Yo(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const yp=/^[ \t]*#include +<([\w\d./]+)>/gm;function es(r){return r.replace(yp,Ap)}const Tp=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Ap(r,e){let t=Ie[e];if(t===void 0){const n=Tp.get(e);if(n!==void 0)t=Ie[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return es(t)}const kp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ko(r){return r.replace(kp,bp)}function bp(r,e,t,n){let i="";for(let a=parseInt(e);a<parseInt(t);a++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return i}function Qo(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	`;return r.isWebGL2&&(e+=`precision ${r.precision} sampler3D;
		precision ${r.precision} sampler2DArray;
		precision ${r.precision} sampler2DShadow;
		precision ${r.precision} samplerCubeShadow;
		precision ${r.precision} sampler2DArrayShadow;
		precision ${r.precision} isampler2D;
		precision ${r.precision} isampler3D;
		precision ${r.precision} isamplerCube;
		precision ${r.precision} isampler2DArray;
		precision ${r.precision} usampler2D;
		precision ${r.precision} usampler3D;
		precision ${r.precision} usamplerCube;
		precision ${r.precision} usampler2DArray;
		`),r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Cp(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Hc?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Hd?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===hn&&(e="SHADOWMAP_TYPE_VSM"),e}function Rp(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Li:case Pi:e="ENVMAP_TYPE_CUBE";break;case Yr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function wp(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Pi:e="ENVMAP_MODE_REFRACTION";break}return e}function Lp(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case zc:e="ENVMAP_BLENDING_MULTIPLY";break;case ul:e="ENVMAP_BLENDING_MIX";break;case hl:e="ENVMAP_BLENDING_ADD";break}return e}function Pp(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Dp(r,e,t,n){const i=r.getContext(),a=t.defines;let s=t.vertexShader,o=t.fragmentShader;const c=Cp(t),d=Rp(t),l=wp(t),u=Lp(t),h=Pp(t),p=t.isWebGL2?"":xp(t),g=vp(t),_=Ep(a),f=i.createProgram();let m,y,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(ki).join(`
`),m.length>0&&(m+=`
`),y=[p,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(ki).join(`
`),y.length>0&&(y+=`
`)):(m=[Qo(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ki).join(`
`),y=[p,Qo(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Pn?"#define TONE_MAPPING":"",t.toneMapping!==Pn?Ie.tonemapping_pars_fragment:"",t.toneMapping!==Pn?Sp("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ie.colorspace_pars_fragment,_p("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ki).join(`
`)),s=es(s),s=jo(s,t),s=Yo(s,t),o=es(o),o=jo(o,t),o=Yo(o,t),s=Ko(s),o=Ko(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,y=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===ho?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ho?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const T=v+m+s,L=v+y+o,C=Xo(i,i.VERTEX_SHADER,T),A=Xo(i,i.FRAGMENT_SHADER,L);i.attachShader(f,C),i.attachShader(f,A),t.index0AttributeName!==void 0?i.bindAttribLocation(f,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(f,0,"position"),i.linkProgram(f);function z(W){if(r.debug.checkShaderErrors){const ne=i.getProgramInfoLog(f).trim(),P=i.getShaderInfoLog(C).trim(),G=i.getShaderInfoLog(A).trim();let O=!0,j=!0;if(i.getProgramParameter(f,i.LINK_STATUS)===!1)if(O=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,f,C,A);else{const V=qo(i,C,"vertex"),X=qo(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(f,i.VALIDATE_STATUS)+`

Material Name: `+W.name+`
Material Type: `+W.type+`

Program Info Log: `+ne+`
`+V+`
`+X)}else ne!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ne):(P===""||G==="")&&(j=!1);j&&(W.diagnostics={runnable:O,programLog:ne,vertexShader:{log:P,prefix:m},fragmentShader:{log:G,prefix:y}})}i.deleteShader(C),i.deleteShader(A),re=new Or(i,f),x=Mp(i,f)}let re;this.getUniforms=function(){return re===void 0&&z(this),re};let x;this.getAttributes=function(){return x===void 0&&z(this),x};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=i.getProgramParameter(f,fp)),b},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(f),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=mp++,this.cacheKey=e,this.usedTimes=1,this.program=f,this.vertexShader=C,this.fragmentShader=A,this}let Np=0;class Ip{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),a=this._getShaderStage(n),s=this._getShaderCacheForMaterial(e);return s.has(i)===!1&&(s.add(i),i.usedTimes++),s.has(a)===!1&&(s.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Fp(e),t.set(e,n)),n}}class Fp{constructor(e){this.id=Np++,this.code=e,this.usedTimes=0}}function Up(r,e,t,n,i,a,s){const o=new sd,c=new Ip,d=new Set,l=[],u=i.isWebGL2,h=i.logarithmicDepthBuffer,p=i.vertexTextures;let g=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(x){return d.add(x),x===0?"uv":`uv${x}`}function m(x,b,W,ne,P){const G=ne.fog,O=P.geometry,j=x.isMeshStandardMaterial?ne.environment:null,V=(x.isMeshStandardMaterial?t:e).get(x.envMap||j),X=V&&V.mapping===Yr?V.image.height:null,q=_[x.type];x.precision!==null&&(g=i.getMaxPrecision(x.precision),g!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",g,"instead."));const ie=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,oe=ie!==void 0?ie.length:0;let ke=0;O.morphAttributes.position!==void 0&&(ke=1),O.morphAttributes.normal!==void 0&&(ke=2),O.morphAttributes.color!==void 0&&(ke=3);let H,Z,ue,Ee;if(q){const je=qt[q];H=je.vertexShader,Z=je.fragmentShader}else H=x.vertexShader,Z=x.fragmentShader,c.update(x),ue=c.getVertexShaderID(x),Ee=c.getFragmentShaderID(x);const Me=r.getRenderTarget(),me=P.isInstancedMesh===!0,We=P.isBatchedMesh===!0,we=!!x.map,N=!!x.matcap,ot=!!V,ve=!!x.aoMap,be=!!x.lightMap,_e=!!x.bumpMap,et=!!x.normalMap,Le=!!x.displacementMap,M=!!x.emissiveMap,S=!!x.metalnessMap,I=!!x.roughnessMap,te=x.anisotropy>0,Y=x.clearcoat>0,$=x.iridescence>0,pe=x.sheen>0,ce=x.transmission>0,he=te&&!!x.anisotropyMap,ye=Y&&!!x.clearcoatMap,De=Y&&!!x.clearcoatNormalMap,K=Y&&!!x.clearcoatRoughnessMap,qe=$&&!!x.iridescenceMap,R=$&&!!x.iridescenceThicknessMap,Q=pe&&!!x.sheenColorMap,de=pe&&!!x.sheenRoughnessMap,ae=!!x.specularMap,xe=!!x.specularColorMap,He=!!x.specularIntensityMap,Xe=ce&&!!x.transmissionMap,Ge=ce&&!!x.thicknessMap,Ke=!!x.gradientMap,k=!!x.alphaMap,J=x.alphaTest>0,ee=!!x.alphaHash,fe=!!x.extensions;let ge=Pn;x.toneMapped&&(Me===null||Me.isXRRenderTarget===!0)&&(ge=r.toneMapping);const ze={isWebGL2:u,shaderID:q,shaderType:x.type,shaderName:x.name,vertexShader:H,fragmentShader:Z,defines:x.defines,customVertexShaderID:ue,customFragmentShaderID:Ee,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:g,batching:We,instancing:me,instancingColor:me&&P.instanceColor!==null,supportsVertexTextures:p,outputColorSpace:Me===null?r.outputColorSpace:Me.isXRRenderTarget===!0?Me.texture.colorSpace:_t,alphaToCoverage:!!x.alphaToCoverage,map:we,matcap:N,envMap:ot,envMapMode:ot&&V.mapping,envMapCubeUVHeight:X,aoMap:ve,lightMap:be,bumpMap:_e,normalMap:et,displacementMap:p&&Le,emissiveMap:M,normalMapObjectSpace:et&&x.normalMapType===Pl,normalMapTangentSpace:et&&x.normalMapType===Jc,metalnessMap:S,roughnessMap:I,anisotropy:te,anisotropyMap:he,clearcoat:Y,clearcoatMap:ye,clearcoatNormalMap:De,clearcoatRoughnessMap:K,iridescence:$,iridescenceMap:qe,iridescenceThicknessMap:R,sheen:pe,sheenColorMap:Q,sheenRoughnessMap:de,specularMap:ae,specularColorMap:xe,specularIntensityMap:He,transmission:ce,transmissionMap:Xe,thicknessMap:Ge,gradientMap:Ke,opaque:x.transparent===!1&&x.blending===Ci&&x.alphaToCoverage===!1,alphaMap:k,alphaTest:J,alphaHash:ee,combine:x.combine,mapUv:we&&f(x.map.channel),aoMapUv:ve&&f(x.aoMap.channel),lightMapUv:be&&f(x.lightMap.channel),bumpMapUv:_e&&f(x.bumpMap.channel),normalMapUv:et&&f(x.normalMap.channel),displacementMapUv:Le&&f(x.displacementMap.channel),emissiveMapUv:M&&f(x.emissiveMap.channel),metalnessMapUv:S&&f(x.metalnessMap.channel),roughnessMapUv:I&&f(x.roughnessMap.channel),anisotropyMapUv:he&&f(x.anisotropyMap.channel),clearcoatMapUv:ye&&f(x.clearcoatMap.channel),clearcoatNormalMapUv:De&&f(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:K&&f(x.clearcoatRoughnessMap.channel),iridescenceMapUv:qe&&f(x.iridescenceMap.channel),iridescenceThicknessMapUv:R&&f(x.iridescenceThicknessMap.channel),sheenColorMapUv:Q&&f(x.sheenColorMap.channel),sheenRoughnessMapUv:de&&f(x.sheenRoughnessMap.channel),specularMapUv:ae&&f(x.specularMap.channel),specularColorMapUv:xe&&f(x.specularColorMap.channel),specularIntensityMapUv:He&&f(x.specularIntensityMap.channel),transmissionMapUv:Xe&&f(x.transmissionMap.channel),thicknessMapUv:Ge&&f(x.thicknessMap.channel),alphaMapUv:k&&f(x.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(et||te),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!O.attributes.uv&&(we||k),fog:!!G,useFog:x.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:P.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:oe,morphTextureStride:ke,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:r.shadowMap.enabled&&W.length>0,shadowMapType:r.shadowMap.type,toneMapping:ge,useLegacyLights:r._useLegacyLights,decodeVideoTexture:we&&x.map.isVideoTexture===!0&&Ye.getTransfer(x.map.colorSpace)===tt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Ft,flipSided:x.side===Ct,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:fe&&x.extensions.derivatives===!0,extensionFragDepth:fe&&x.extensions.fragDepth===!0,extensionDrawBuffers:fe&&x.extensions.drawBuffers===!0,extensionShaderTextureLOD:fe&&x.extensions.shaderTextureLOD===!0,extensionClipCullDistance:fe&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:fe&&x.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return ze.vertexUv1s=d.has(1),ze.vertexUv2s=d.has(2),ze.vertexUv3s=d.has(3),d.clear(),ze}function y(x){const b=[];if(x.shaderID?b.push(x.shaderID):(b.push(x.customVertexShaderID),b.push(x.customFragmentShaderID)),x.defines!==void 0)for(const W in x.defines)b.push(W),b.push(x.defines[W]);return x.isRawShaderMaterial===!1&&(v(b,x),T(b,x),b.push(r.outputColorSpace)),b.push(x.customProgramCacheKey),b.join()}function v(x,b){x.push(b.precision),x.push(b.outputColorSpace),x.push(b.envMapMode),x.push(b.envMapCubeUVHeight),x.push(b.mapUv),x.push(b.alphaMapUv),x.push(b.lightMapUv),x.push(b.aoMapUv),x.push(b.bumpMapUv),x.push(b.normalMapUv),x.push(b.displacementMapUv),x.push(b.emissiveMapUv),x.push(b.metalnessMapUv),x.push(b.roughnessMapUv),x.push(b.anisotropyMapUv),x.push(b.clearcoatMapUv),x.push(b.clearcoatNormalMapUv),x.push(b.clearcoatRoughnessMapUv),x.push(b.iridescenceMapUv),x.push(b.iridescenceThicknessMapUv),x.push(b.sheenColorMapUv),x.push(b.sheenRoughnessMapUv),x.push(b.specularMapUv),x.push(b.specularColorMapUv),x.push(b.specularIntensityMapUv),x.push(b.transmissionMapUv),x.push(b.thicknessMapUv),x.push(b.combine),x.push(b.fogExp2),x.push(b.sizeAttenuation),x.push(b.morphTargetsCount),x.push(b.morphAttributeCount),x.push(b.numDirLights),x.push(b.numPointLights),x.push(b.numSpotLights),x.push(b.numSpotLightMaps),x.push(b.numHemiLights),x.push(b.numRectAreaLights),x.push(b.numDirLightShadows),x.push(b.numPointLightShadows),x.push(b.numSpotLightShadows),x.push(b.numSpotLightShadowsWithMaps),x.push(b.numLightProbes),x.push(b.shadowMapType),x.push(b.toneMapping),x.push(b.numClippingPlanes),x.push(b.numClipIntersection),x.push(b.depthPacking)}function T(x,b){o.disableAll(),b.isWebGL2&&o.enable(0),b.supportsVertexTextures&&o.enable(1),b.instancing&&o.enable(2),b.instancingColor&&o.enable(3),b.matcap&&o.enable(4),b.envMap&&o.enable(5),b.normalMapObjectSpace&&o.enable(6),b.normalMapTangentSpace&&o.enable(7),b.clearcoat&&o.enable(8),b.iridescence&&o.enable(9),b.alphaTest&&o.enable(10),b.vertexColors&&o.enable(11),b.vertexAlphas&&o.enable(12),b.vertexUv1s&&o.enable(13),b.vertexUv2s&&o.enable(14),b.vertexUv3s&&o.enable(15),b.vertexTangents&&o.enable(16),b.anisotropy&&o.enable(17),b.alphaHash&&o.enable(18),b.batching&&o.enable(19),x.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.skinning&&o.enable(4),b.morphTargets&&o.enable(5),b.morphNormals&&o.enable(6),b.morphColors&&o.enable(7),b.premultipliedAlpha&&o.enable(8),b.shadowMapEnabled&&o.enable(9),b.useLegacyLights&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.alphaToCoverage&&o.enable(20),x.push(o.mask)}function L(x){const b=_[x.type];let W;if(b){const ne=qt[b];W=Su.clone(ne.uniforms)}else W=x.uniforms;return W}function C(x,b){let W;for(let ne=0,P=l.length;ne<P;ne++){const G=l[ne];if(G.cacheKey===b){W=G,++W.usedTimes;break}}return W===void 0&&(W=new Dp(r,b,x,a),l.push(W)),W}function A(x){if(--x.usedTimes===0){const b=l.indexOf(x);l[b]=l[l.length-1],l.pop(),x.destroy()}}function z(x){c.remove(x)}function re(){c.dispose()}return{getParameters:m,getProgramCacheKey:y,getUniforms:L,acquireProgram:C,releaseProgram:A,releaseShaderCache:z,programs:l,dispose:re}}function Bp(){let r=new WeakMap;function e(a){let s=r.get(a);return s===void 0&&(s={},r.set(a,s)),s}function t(a){r.delete(a)}function n(a,s,o){r.get(a)[s]=o}function i(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function Op(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Zo(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function $o(){const r=[];let e=0;const t=[],n=[],i=[];function a(){e=0,t.length=0,n.length=0,i.length=0}function s(u,h,p,g,_,f){let m=r[e];return m===void 0?(m={id:u.id,object:u,geometry:h,material:p,groupOrder:g,renderOrder:u.renderOrder,z:_,group:f},r[e]=m):(m.id=u.id,m.object=u,m.geometry=h,m.material=p,m.groupOrder=g,m.renderOrder=u.renderOrder,m.z=_,m.group=f),e++,m}function o(u,h,p,g,_,f){const m=s(u,h,p,g,_,f);p.transmission>0?n.push(m):p.transparent===!0?i.push(m):t.push(m)}function c(u,h,p,g,_,f){const m=s(u,h,p,g,_,f);p.transmission>0?n.unshift(m):p.transparent===!0?i.unshift(m):t.unshift(m)}function d(u,h){t.length>1&&t.sort(u||Op),n.length>1&&n.sort(h||Zo),i.length>1&&i.sort(h||Zo)}function l(){for(let u=e,h=r.length;u<h;u++){const p=r[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:a,push:o,unshift:c,finish:l,sort:d}}function Gp(){let r=new WeakMap;function e(n,i){const a=r.get(n);let s;return a===void 0?(s=new $o,r.set(n,[s])):i>=a.length?(s=new $o,a.push(s)):s=a[i],s}function t(){r=new WeakMap}return{get:e,dispose:t}}function Hp(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new w,color:new Re};break;case"SpotLight":t={position:new w,direction:new w,color:new Re,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new w,color:new Re,distance:0,decay:0};break;case"HemisphereLight":t={direction:new w,skyColor:new Re,groundColor:new Re};break;case"RectAreaLight":t={color:new Re,position:new w,halfWidth:new w,halfHeight:new w};break}return r[e.id]=t,t}}}function zp(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let Vp=0;function Wp(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function Xp(r,e){const t=new Hp,n=zp(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new w);const a=new w,s=new Fe,o=new Fe;function c(l,u){let h=0,p=0,g=0;for(let W=0;W<9;W++)i.probe[W].set(0,0,0);let _=0,f=0,m=0,y=0,v=0,T=0,L=0,C=0,A=0,z=0,re=0;l.sort(Wp);const x=u===!0?Math.PI:1;for(let W=0,ne=l.length;W<ne;W++){const P=l[W],G=P.color,O=P.intensity,j=P.distance,V=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=G.r*O*x,p+=G.g*O*x,g+=G.b*O*x;else if(P.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(P.sh.coefficients[X],O);re++}else if(P.isDirectionalLight){const X=t.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity*x),P.castShadow){const q=P.shadow,ie=n.get(P);ie.shadowBias=q.bias,ie.shadowNormalBias=q.normalBias,ie.shadowRadius=q.radius,ie.shadowMapSize=q.mapSize,i.directionalShadow[_]=ie,i.directionalShadowMap[_]=V,i.directionalShadowMatrix[_]=P.shadow.matrix,T++}i.directional[_]=X,_++}else if(P.isSpotLight){const X=t.get(P);X.position.setFromMatrixPosition(P.matrixWorld),X.color.copy(G).multiplyScalar(O*x),X.distance=j,X.coneCos=Math.cos(P.angle),X.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),X.decay=P.decay,i.spot[m]=X;const q=P.shadow;if(P.map&&(i.spotLightMap[A]=P.map,A++,q.updateMatrices(P),P.castShadow&&z++),i.spotLightMatrix[m]=q.matrix,P.castShadow){const ie=n.get(P);ie.shadowBias=q.bias,ie.shadowNormalBias=q.normalBias,ie.shadowRadius=q.radius,ie.shadowMapSize=q.mapSize,i.spotShadow[m]=ie,i.spotShadowMap[m]=V,C++}m++}else if(P.isRectAreaLight){const X=t.get(P);X.color.copy(G).multiplyScalar(O),X.halfWidth.set(P.width*.5,0,0),X.halfHeight.set(0,P.height*.5,0),i.rectArea[y]=X,y++}else if(P.isPointLight){const X=t.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity*x),X.distance=P.distance,X.decay=P.decay,P.castShadow){const q=P.shadow,ie=n.get(P);ie.shadowBias=q.bias,ie.shadowNormalBias=q.normalBias,ie.shadowRadius=q.radius,ie.shadowMapSize=q.mapSize,ie.shadowCameraNear=q.camera.near,ie.shadowCameraFar=q.camera.far,i.pointShadow[f]=ie,i.pointShadowMap[f]=V,i.pointShadowMatrix[f]=P.shadow.matrix,L++}i.point[f]=X,f++}else if(P.isHemisphereLight){const X=t.get(P);X.skyColor.copy(P.color).multiplyScalar(O*x),X.groundColor.copy(P.groundColor).multiplyScalar(O*x),i.hemi[v]=X,v++}}y>0&&(e.isWebGL2?r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=se.LTC_FLOAT_1,i.rectAreaLTC2=se.LTC_FLOAT_2):(i.rectAreaLTC1=se.LTC_HALF_1,i.rectAreaLTC2=se.LTC_HALF_2):r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=se.LTC_FLOAT_1,i.rectAreaLTC2=se.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=se.LTC_HALF_1,i.rectAreaLTC2=se.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=h,i.ambient[1]=p,i.ambient[2]=g;const b=i.hash;(b.directionalLength!==_||b.pointLength!==f||b.spotLength!==m||b.rectAreaLength!==y||b.hemiLength!==v||b.numDirectionalShadows!==T||b.numPointShadows!==L||b.numSpotShadows!==C||b.numSpotMaps!==A||b.numLightProbes!==re)&&(i.directional.length=_,i.spot.length=m,i.rectArea.length=y,i.point.length=f,i.hemi.length=v,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.pointShadow.length=L,i.pointShadowMap.length=L,i.spotShadow.length=C,i.spotShadowMap.length=C,i.directionalShadowMatrix.length=T,i.pointShadowMatrix.length=L,i.spotLightMatrix.length=C+A-z,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=z,i.numLightProbes=re,b.directionalLength=_,b.pointLength=f,b.spotLength=m,b.rectAreaLength=y,b.hemiLength=v,b.numDirectionalShadows=T,b.numPointShadows=L,b.numSpotShadows=C,b.numSpotMaps=A,b.numLightProbes=re,i.version=Vp++)}function d(l,u){let h=0,p=0,g=0,_=0,f=0;const m=u.matrixWorldInverse;for(let y=0,v=l.length;y<v;y++){const T=l[y];if(T.isDirectionalLight){const L=i.directional[h];L.direction.setFromMatrixPosition(T.matrixWorld),a.setFromMatrixPosition(T.target.matrixWorld),L.direction.sub(a),L.direction.transformDirection(m),h++}else if(T.isSpotLight){const L=i.spot[g];L.position.setFromMatrixPosition(T.matrixWorld),L.position.applyMatrix4(m),L.direction.setFromMatrixPosition(T.matrixWorld),a.setFromMatrixPosition(T.target.matrixWorld),L.direction.sub(a),L.direction.transformDirection(m),g++}else if(T.isRectAreaLight){const L=i.rectArea[_];L.position.setFromMatrixPosition(T.matrixWorld),L.position.applyMatrix4(m),o.identity(),s.copy(T.matrixWorld),s.premultiply(m),o.extractRotation(s),L.halfWidth.set(T.width*.5,0,0),L.halfHeight.set(0,T.height*.5,0),L.halfWidth.applyMatrix4(o),L.halfHeight.applyMatrix4(o),_++}else if(T.isPointLight){const L=i.point[p];L.position.setFromMatrixPosition(T.matrixWorld),L.position.applyMatrix4(m),p++}else if(T.isHemisphereLight){const L=i.hemi[f];L.direction.setFromMatrixPosition(T.matrixWorld),L.direction.transformDirection(m),f++}}}return{setup:c,setupView:d,state:i}}function Jo(r,e){const t=new Xp(r,e),n=[],i=[];function a(){n.length=0,i.length=0}function s(u){n.push(u)}function o(u){i.push(u)}function c(u){t.setup(n,u)}function d(u){t.setupView(n,u)}return{init:a,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:c,setupLightsView:d,pushLight:s,pushShadow:o}}function qp(r,e){let t=new WeakMap;function n(a,s=0){const o=t.get(a);let c;return o===void 0?(c=new Jo(r,e),t.set(a,[c])):s>=o.length?(c=new Jo(r,e),o.push(c)):c=o[s],c}function i(){t=new WeakMap}return{get:n,dispose:i}}class jp extends Kt{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=wl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Yp extends Kt{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Kp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Qp=`uniform sampler2D shadow_pass;
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
}`;function Zp(r,e,t){let n=new ds;const i=new Te,a=new Te,s=new $e,o=new jp({depthPacking:Ll}),c=new Yp,d={},l=t.maxTextureSize,u={[Sn]:Ct,[Ct]:Sn,[Ft]:Ft},h=new Nn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Te},radius:{value:4}},vertexShader:Kp,fragmentShader:Qp}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const g=new nn;g.setAttribute("position",new kt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new At(g,h),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Hc;let m=this.type;this.render=function(C,A,z){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||C.length===0)return;const re=r.getRenderTarget(),x=r.getActiveCubeFace(),b=r.getActiveMipmapLevel(),W=r.state;W.setBlending(Ln),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const ne=m!==hn&&this.type===hn,P=m===hn&&this.type!==hn;for(let G=0,O=C.length;G<O;G++){const j=C[G],V=j.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;i.copy(V.mapSize);const X=V.getFrameExtents();if(i.multiply(X),a.copy(V.mapSize),(i.x>l||i.y>l)&&(i.x>l&&(a.x=Math.floor(l/X.x),i.x=a.x*X.x,V.mapSize.x=a.x),i.y>l&&(a.y=Math.floor(l/X.y),i.y=a.y*X.y,V.mapSize.y=a.y)),V.map===null||ne===!0||P===!0){const ie=this.type!==hn?{minFilter:ft,magFilter:ft}:{};V.map!==null&&V.map.dispose(),V.map=new ei(i.x,i.y,ie),V.map.texture.name=j.name+".shadowMap",V.camera.updateProjectionMatrix()}r.setRenderTarget(V.map),r.clear();const q=V.getViewportCount();for(let ie=0;ie<q;ie++){const oe=V.getViewport(ie);s.set(a.x*oe.x,a.y*oe.y,a.x*oe.z,a.y*oe.w),W.viewport(s),V.updateMatrices(j,ie),n=V.getFrustum(),T(A,z,V.camera,j,this.type)}V.isPointLightShadow!==!0&&this.type===hn&&y(V,z),V.needsUpdate=!1}m=this.type,f.needsUpdate=!1,r.setRenderTarget(re,x,b)};function y(C,A){const z=e.update(_);h.defines.VSM_SAMPLES!==C.blurSamples&&(h.defines.VSM_SAMPLES=C.blurSamples,p.defines.VSM_SAMPLES=C.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new ei(i.x,i.y)),h.uniforms.shadow_pass.value=C.map.texture,h.uniforms.resolution.value=C.mapSize,h.uniforms.radius.value=C.radius,r.setRenderTarget(C.mapPass),r.clear(),r.renderBufferDirect(A,null,z,h,_,null),p.uniforms.shadow_pass.value=C.mapPass.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,r.setRenderTarget(C.map),r.clear(),r.renderBufferDirect(A,null,z,p,_,null)}function v(C,A,z,re){let x=null;const b=z.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(b!==void 0)x=b;else if(x=z.isPointLight===!0?c:o,r.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const W=x.uuid,ne=A.uuid;let P=d[W];P===void 0&&(P={},d[W]=P);let G=P[ne];G===void 0&&(G=x.clone(),P[ne]=G,A.addEventListener("dispose",L)),x=G}if(x.visible=A.visible,x.wireframe=A.wireframe,re===hn?x.side=A.shadowSide!==null?A.shadowSide:A.side:x.side=A.shadowSide!==null?A.shadowSide:u[A.side],x.alphaMap=A.alphaMap,x.alphaTest=A.alphaTest,x.map=A.map,x.clipShadows=A.clipShadows,x.clippingPlanes=A.clippingPlanes,x.clipIntersection=A.clipIntersection,x.displacementMap=A.displacementMap,x.displacementScale=A.displacementScale,x.displacementBias=A.displacementBias,x.wireframeLinewidth=A.wireframeLinewidth,x.linewidth=A.linewidth,z.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const W=r.properties.get(x);W.light=z}return x}function T(C,A,z,re,x){if(C.visible===!1)return;if(C.layers.test(A.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&x===hn)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,C.matrixWorld);const ne=e.update(C),P=C.material;if(Array.isArray(P)){const G=ne.groups;for(let O=0,j=G.length;O<j;O++){const V=G[O],X=P[V.materialIndex];if(X&&X.visible){const q=v(C,X,re,x);C.onBeforeShadow(r,C,A,z,ne,q,V),r.renderBufferDirect(z,null,ne,q,C,V),C.onAfterShadow(r,C,A,z,ne,q,V)}}}else if(P.visible){const G=v(C,P,re,x);C.onBeforeShadow(r,C,A,z,ne,G,null),r.renderBufferDirect(z,null,ne,G,C,null),C.onAfterShadow(r,C,A,z,ne,G,null)}}const W=C.children;for(let ne=0,P=W.length;ne<P;ne++)T(W[ne],A,z,re,x)}function L(C){C.target.removeEventListener("dispose",L);for(const z in d){const re=d[z],x=C.target.uuid;x in re&&(re[x].dispose(),delete re[x])}}}function $p(r,e,t){const n=t.isWebGL2;function i(){let k=!1;const J=new $e;let ee=null;const fe=new $e(0,0,0,0);return{setMask:function(ge){ee!==ge&&!k&&(r.colorMask(ge,ge,ge,ge),ee=ge)},setLocked:function(ge){k=ge},setClear:function(ge,ze,je,pt,Pt){Pt===!0&&(ge*=pt,ze*=pt,je*=pt),J.set(ge,ze,je,pt),fe.equals(J)===!1&&(r.clearColor(ge,ze,je,pt),fe.copy(J))},reset:function(){k=!1,ee=null,fe.set(-1,0,0,0)}}}function a(){let k=!1,J=null,ee=null,fe=null;return{setTest:function(ge){ge?me(r.DEPTH_TEST):We(r.DEPTH_TEST)},setMask:function(ge){J!==ge&&!k&&(r.depthMask(ge),J=ge)},setFunc:function(ge){if(ee!==ge){switch(ge){case rl:r.depthFunc(r.NEVER);break;case al:r.depthFunc(r.ALWAYS);break;case sl:r.depthFunc(r.LESS);break;case Hr:r.depthFunc(r.LEQUAL);break;case ol:r.depthFunc(r.EQUAL);break;case cl:r.depthFunc(r.GEQUAL);break;case dl:r.depthFunc(r.GREATER);break;case ll:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}ee=ge}},setLocked:function(ge){k=ge},setClear:function(ge){fe!==ge&&(r.clearDepth(ge),fe=ge)},reset:function(){k=!1,J=null,ee=null,fe=null}}}function s(){let k=!1,J=null,ee=null,fe=null,ge=null,ze=null,je=null,pt=null,Pt=null;return{setTest:function(Je){k||(Je?me(r.STENCIL_TEST):We(r.STENCIL_TEST))},setMask:function(Je){J!==Je&&!k&&(r.stencilMask(Je),J=Je)},setFunc:function(Je,Mt,Xt){(ee!==Je||fe!==Mt||ge!==Xt)&&(r.stencilFunc(Je,Mt,Xt),ee=Je,fe=Mt,ge=Xt)},setOp:function(Je,Mt,Xt){(ze!==Je||je!==Mt||pt!==Xt)&&(r.stencilOp(Je,Mt,Xt),ze=Je,je=Mt,pt=Xt)},setLocked:function(Je){k=Je},setClear:function(Je){Pt!==Je&&(r.clearStencil(Je),Pt=Je)},reset:function(){k=!1,J=null,ee=null,fe=null,ge=null,ze=null,je=null,pt=null,Pt=null}}}const o=new i,c=new a,d=new s,l=new WeakMap,u=new WeakMap;let h={},p={},g=new WeakMap,_=[],f=null,m=!1,y=null,v=null,T=null,L=null,C=null,A=null,z=null,re=new Re(0,0,0),x=0,b=!1,W=null,ne=null,P=null,G=null,O=null;const j=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,X=0;const q=r.getParameter(r.VERSION);q.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(q)[1]),V=X>=1):q.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),V=X>=2);let ie=null,oe={};const ke=r.getParameter(r.SCISSOR_BOX),H=r.getParameter(r.VIEWPORT),Z=new $e().fromArray(ke),ue=new $e().fromArray(H);function Ee(k,J,ee,fe){const ge=new Uint8Array(4),ze=r.createTexture();r.bindTexture(k,ze),r.texParameteri(k,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(k,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let je=0;je<ee;je++)n&&(k===r.TEXTURE_3D||k===r.TEXTURE_2D_ARRAY)?r.texImage3D(J,0,r.RGBA,1,1,fe,0,r.RGBA,r.UNSIGNED_BYTE,ge):r.texImage2D(J+je,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ge);return ze}const Me={};Me[r.TEXTURE_2D]=Ee(r.TEXTURE_2D,r.TEXTURE_2D,1),Me[r.TEXTURE_CUBE_MAP]=Ee(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Me[r.TEXTURE_2D_ARRAY]=Ee(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Me[r.TEXTURE_3D]=Ee(r.TEXTURE_3D,r.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),c.setClear(1),d.setClear(0),me(r.DEPTH_TEST),c.setFunc(Hr),Le(!1),M(Rs),me(r.CULL_FACE),_e(Ln);function me(k){h[k]!==!0&&(r.enable(k),h[k]=!0)}function We(k){h[k]!==!1&&(r.disable(k),h[k]=!1)}function we(k,J){return p[k]!==J?(r.bindFramebuffer(k,J),p[k]=J,n&&(k===r.DRAW_FRAMEBUFFER&&(p[r.FRAMEBUFFER]=J),k===r.FRAMEBUFFER&&(p[r.DRAW_FRAMEBUFFER]=J)),!0):!1}function N(k,J){let ee=_,fe=!1;if(k)if(ee=g.get(J),ee===void 0&&(ee=[],g.set(J,ee)),k.isWebGLMultipleRenderTargets){const ge=k.texture;if(ee.length!==ge.length||ee[0]!==r.COLOR_ATTACHMENT0){for(let ze=0,je=ge.length;ze<je;ze++)ee[ze]=r.COLOR_ATTACHMENT0+ze;ee.length=ge.length,fe=!0}}else ee[0]!==r.COLOR_ATTACHMENT0&&(ee[0]=r.COLOR_ATTACHMENT0,fe=!0);else ee[0]!==r.BACK&&(ee[0]=r.BACK,fe=!0);fe&&(t.isWebGL2?r.drawBuffers(ee):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ee))}function ot(k){return f!==k?(r.useProgram(k),f=k,!0):!1}const ve={[Xn]:r.FUNC_ADD,[Vd]:r.FUNC_SUBTRACT,[Wd]:r.FUNC_REVERSE_SUBTRACT};if(n)ve[Ds]=r.MIN,ve[Ns]=r.MAX;else{const k=e.get("EXT_blend_minmax");k!==null&&(ve[Ds]=k.MIN_EXT,ve[Ns]=k.MAX_EXT)}const be={[Xd]:r.ZERO,[qd]:r.ONE,[jd]:r.SRC_COLOR,[Xa]:r.SRC_ALPHA,[Jd]:r.SRC_ALPHA_SATURATE,[Zd]:r.DST_COLOR,[Kd]:r.DST_ALPHA,[Yd]:r.ONE_MINUS_SRC_COLOR,[qa]:r.ONE_MINUS_SRC_ALPHA,[$d]:r.ONE_MINUS_DST_COLOR,[Qd]:r.ONE_MINUS_DST_ALPHA,[el]:r.CONSTANT_COLOR,[tl]:r.ONE_MINUS_CONSTANT_COLOR,[nl]:r.CONSTANT_ALPHA,[il]:r.ONE_MINUS_CONSTANT_ALPHA};function _e(k,J,ee,fe,ge,ze,je,pt,Pt,Je){if(k===Ln){m===!0&&(We(r.BLEND),m=!1);return}if(m===!1&&(me(r.BLEND),m=!0),k!==zd){if(k!==y||Je!==b){if((v!==Xn||C!==Xn)&&(r.blendEquation(r.FUNC_ADD),v=Xn,C=Xn),Je)switch(k){case Ci:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case ws:r.blendFunc(r.ONE,r.ONE);break;case Ls:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Ps:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case Ci:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case ws:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Ls:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Ps:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}T=null,L=null,A=null,z=null,re.set(0,0,0),x=0,y=k,b=Je}return}ge=ge||J,ze=ze||ee,je=je||fe,(J!==v||ge!==C)&&(r.blendEquationSeparate(ve[J],ve[ge]),v=J,C=ge),(ee!==T||fe!==L||ze!==A||je!==z)&&(r.blendFuncSeparate(be[ee],be[fe],be[ze],be[je]),T=ee,L=fe,A=ze,z=je),(pt.equals(re)===!1||Pt!==x)&&(r.blendColor(pt.r,pt.g,pt.b,Pt),re.copy(pt),x=Pt),y=k,b=!1}function et(k,J){k.side===Ft?We(r.CULL_FACE):me(r.CULL_FACE);let ee=k.side===Ct;J&&(ee=!ee),Le(ee),k.blending===Ci&&k.transparent===!1?_e(Ln):_e(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),c.setFunc(k.depthFunc),c.setTest(k.depthTest),c.setMask(k.depthWrite),o.setMask(k.colorWrite);const fe=k.stencilWrite;d.setTest(fe),fe&&(d.setMask(k.stencilWriteMask),d.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),d.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),I(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?me(r.SAMPLE_ALPHA_TO_COVERAGE):We(r.SAMPLE_ALPHA_TO_COVERAGE)}function Le(k){W!==k&&(k?r.frontFace(r.CW):r.frontFace(r.CCW),W=k)}function M(k){k!==Od?(me(r.CULL_FACE),k!==ne&&(k===Rs?r.cullFace(r.BACK):k===Gd?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):We(r.CULL_FACE),ne=k}function S(k){k!==P&&(V&&r.lineWidth(k),P=k)}function I(k,J,ee){k?(me(r.POLYGON_OFFSET_FILL),(G!==J||O!==ee)&&(r.polygonOffset(J,ee),G=J,O=ee)):We(r.POLYGON_OFFSET_FILL)}function te(k){k?me(r.SCISSOR_TEST):We(r.SCISSOR_TEST)}function Y(k){k===void 0&&(k=r.TEXTURE0+j-1),ie!==k&&(r.activeTexture(k),ie=k)}function $(k,J,ee){ee===void 0&&(ie===null?ee=r.TEXTURE0+j-1:ee=ie);let fe=oe[ee];fe===void 0&&(fe={type:void 0,texture:void 0},oe[ee]=fe),(fe.type!==k||fe.texture!==J)&&(ie!==ee&&(r.activeTexture(ee),ie=ee),r.bindTexture(k,J||Me[k]),fe.type=k,fe.texture=J)}function pe(){const k=oe[ie];k!==void 0&&k.type!==void 0&&(r.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function ce(){try{r.compressedTexImage2D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function he(){try{r.compressedTexImage3D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ye(){try{r.texSubImage2D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function De(){try{r.texSubImage3D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function K(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function qe(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function R(){try{r.texStorage2D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Q(){try{r.texStorage3D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function de(){try{r.texImage2D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ae(){try{r.texImage3D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function xe(k){Z.equals(k)===!1&&(r.scissor(k.x,k.y,k.z,k.w),Z.copy(k))}function He(k){ue.equals(k)===!1&&(r.viewport(k.x,k.y,k.z,k.w),ue.copy(k))}function Xe(k,J){let ee=u.get(J);ee===void 0&&(ee=new WeakMap,u.set(J,ee));let fe=ee.get(k);fe===void 0&&(fe=r.getUniformBlockIndex(J,k.name),ee.set(k,fe))}function Ge(k,J){const fe=u.get(J).get(k);l.get(J)!==fe&&(r.uniformBlockBinding(J,fe,k.__bindingPointIndex),l.set(J,fe))}function Ke(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),n===!0&&(r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},ie=null,oe={},p={},g=new WeakMap,_=[],f=null,m=!1,y=null,v=null,T=null,L=null,C=null,A=null,z=null,re=new Re(0,0,0),x=0,b=!1,W=null,ne=null,P=null,G=null,O=null,Z.set(0,0,r.canvas.width,r.canvas.height),ue.set(0,0,r.canvas.width,r.canvas.height),o.reset(),c.reset(),d.reset()}return{buffers:{color:o,depth:c,stencil:d},enable:me,disable:We,bindFramebuffer:we,drawBuffers:N,useProgram:ot,setBlending:_e,setMaterial:et,setFlipSided:Le,setCullFace:M,setLineWidth:S,setPolygonOffset:I,setScissorTest:te,activeTexture:Y,bindTexture:$,unbindTexture:pe,compressedTexImage2D:ce,compressedTexImage3D:he,texImage2D:de,texImage3D:ae,updateUBOMapping:Xe,uniformBlockBinding:Ge,texStorage2D:R,texStorage3D:Q,texSubImage2D:ye,texSubImage3D:De,compressedTexSubImage2D:K,compressedTexSubImage3D:qe,scissor:xe,viewport:He,reset:Ke}}function Jp(r,e,t,n,i,a,s){const o=i.isWebGL2,c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new WeakMap;let u;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(M,S){return p?new OffscreenCanvas(M,S):ir("canvas")}function _(M,S,I,te){let Y=1;if((M.width>te||M.height>te)&&(Y=te/Math.max(M.width,M.height)),Y<1||S===!0)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap){const $=S?jr:Math.floor,pe=$(Y*M.width),ce=$(Y*M.height);u===void 0&&(u=g(pe,ce));const he=I?g(pe,ce):u;return he.width=pe,he.height=ce,he.getContext("2d").drawImage(M,0,0,pe,ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+M.width+"x"+M.height+") to ("+pe+"x"+ce+")."),he}else return"data"in M&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+M.width+"x"+M.height+")."),M;return M}function f(M){return Ja(M.width)&&Ja(M.height)}function m(M){return o?!1:M.wrapS!==Ut||M.wrapT!==Ut||M.minFilter!==ft&&M.minFilter!==Et}function y(M,S){return M.generateMipmaps&&S&&M.minFilter!==ft&&M.minFilter!==Et}function v(M){r.generateMipmap(M)}function T(M,S,I,te,Y=!1){if(o===!1)return S;if(M!==null){if(r[M]!==void 0)return r[M];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let $=S;if(S===r.RED&&(I===r.FLOAT&&($=r.R32F),I===r.HALF_FLOAT&&($=r.R16F),I===r.UNSIGNED_BYTE&&($=r.R8)),S===r.RED_INTEGER&&(I===r.UNSIGNED_BYTE&&($=r.R8UI),I===r.UNSIGNED_SHORT&&($=r.R16UI),I===r.UNSIGNED_INT&&($=r.R32UI),I===r.BYTE&&($=r.R8I),I===r.SHORT&&($=r.R16I),I===r.INT&&($=r.R32I)),S===r.RG&&(I===r.FLOAT&&($=r.RG32F),I===r.HALF_FLOAT&&($=r.RG16F),I===r.UNSIGNED_BYTE&&($=r.RG8)),S===r.RGBA){const pe=Y?Vr:Ye.getTransfer(te);I===r.FLOAT&&($=r.RGBA32F),I===r.HALF_FLOAT&&($=r.RGBA16F),I===r.UNSIGNED_BYTE&&($=pe===tt?r.SRGB8_ALPHA8:r.RGBA8),I===r.UNSIGNED_SHORT_4_4_4_4&&($=r.RGBA4),I===r.UNSIGNED_SHORT_5_5_5_1&&($=r.RGB5_A1)}return($===r.R16F||$===r.R32F||$===r.RG16F||$===r.RG32F||$===r.RGBA16F||$===r.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function L(M,S,I){return y(M,I)===!0||M.isFramebufferTexture&&M.minFilter!==ft&&M.minFilter!==Et?Math.log2(Math.max(S.width,S.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?S.mipmaps.length:1}function C(M){return M===ft||M===Ka||M===yi?r.NEAREST:r.LINEAR}function A(M){const S=M.target;S.removeEventListener("dispose",A),re(S),S.isVideoTexture&&l.delete(S)}function z(M){const S=M.target;S.removeEventListener("dispose",z),b(S)}function re(M){const S=n.get(M);if(S.__webglInit===void 0)return;const I=M.source,te=h.get(I);if(te){const Y=te[S.__cacheKey];Y.usedTimes--,Y.usedTimes===0&&x(M),Object.keys(te).length===0&&h.delete(I)}n.remove(M)}function x(M){const S=n.get(M);r.deleteTexture(S.__webglTexture);const I=M.source,te=h.get(I);delete te[S.__cacheKey],s.memory.textures--}function b(M){const S=M.texture,I=n.get(M),te=n.get(S);if(te.__webglTexture!==void 0&&(r.deleteTexture(te.__webglTexture),s.memory.textures--),M.depthTexture&&M.depthTexture.dispose(),M.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(I.__webglFramebuffer[Y]))for(let $=0;$<I.__webglFramebuffer[Y].length;$++)r.deleteFramebuffer(I.__webglFramebuffer[Y][$]);else r.deleteFramebuffer(I.__webglFramebuffer[Y]);I.__webglDepthbuffer&&r.deleteRenderbuffer(I.__webglDepthbuffer[Y])}else{if(Array.isArray(I.__webglFramebuffer))for(let Y=0;Y<I.__webglFramebuffer.length;Y++)r.deleteFramebuffer(I.__webglFramebuffer[Y]);else r.deleteFramebuffer(I.__webglFramebuffer);if(I.__webglDepthbuffer&&r.deleteRenderbuffer(I.__webglDepthbuffer),I.__webglMultisampledFramebuffer&&r.deleteFramebuffer(I.__webglMultisampledFramebuffer),I.__webglColorRenderbuffer)for(let Y=0;Y<I.__webglColorRenderbuffer.length;Y++)I.__webglColorRenderbuffer[Y]&&r.deleteRenderbuffer(I.__webglColorRenderbuffer[Y]);I.__webglDepthRenderbuffer&&r.deleteRenderbuffer(I.__webglDepthRenderbuffer)}if(M.isWebGLMultipleRenderTargets)for(let Y=0,$=S.length;Y<$;Y++){const pe=n.get(S[Y]);pe.__webglTexture&&(r.deleteTexture(pe.__webglTexture),s.memory.textures--),n.remove(S[Y])}n.remove(S),n.remove(M)}let W=0;function ne(){W=0}function P(){const M=W;return M>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+i.maxTextures),W+=1,M}function G(M){const S=[];return S.push(M.wrapS),S.push(M.wrapT),S.push(M.wrapR||0),S.push(M.magFilter),S.push(M.minFilter),S.push(M.anisotropy),S.push(M.internalFormat),S.push(M.format),S.push(M.type),S.push(M.generateMipmaps),S.push(M.premultiplyAlpha),S.push(M.flipY),S.push(M.unpackAlignment),S.push(M.colorSpace),S.join()}function O(M,S){const I=n.get(M);if(M.isVideoTexture&&et(M),M.isRenderTargetTexture===!1&&M.version>0&&I.__version!==M.version){const te=M.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(I,M,S);return}}t.bindTexture(r.TEXTURE_2D,I.__webglTexture,r.TEXTURE0+S)}function j(M,S){const I=n.get(M);if(M.version>0&&I.__version!==M.version){Z(I,M,S);return}t.bindTexture(r.TEXTURE_2D_ARRAY,I.__webglTexture,r.TEXTURE0+S)}function V(M,S){const I=n.get(M);if(M.version>0&&I.__version!==M.version){Z(I,M,S);return}t.bindTexture(r.TEXTURE_3D,I.__webglTexture,r.TEXTURE0+S)}function X(M,S){const I=n.get(M);if(M.version>0&&I.__version!==M.version){ue(I,M,S);return}t.bindTexture(r.TEXTURE_CUBE_MAP,I.__webglTexture,r.TEXTURE0+S)}const q={[Di]:r.REPEAT,[Ut]:r.CLAMP_TO_EDGE,[zr]:r.MIRRORED_REPEAT},ie={[ft]:r.NEAREST,[Ka]:r.NEAREST_MIPMAP_NEAREST,[yi]:r.NEAREST_MIPMAP_LINEAR,[Et]:r.LINEAR,[Br]:r.LINEAR_MIPMAP_NEAREST,[mn]:r.LINEAR_MIPMAP_LINEAR},oe={[Dl]:r.NEVER,[Ol]:r.ALWAYS,[Nl]:r.LESS,[ed]:r.LEQUAL,[Il]:r.EQUAL,[Bl]:r.GEQUAL,[Fl]:r.GREATER,[Ul]:r.NOTEQUAL};function ke(M,S,I){if(S.type===jt&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===Et||S.magFilter===Br||S.magFilter===yi||S.magFilter===mn||S.minFilter===Et||S.minFilter===Br||S.minFilter===yi||S.minFilter===mn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),I?(r.texParameteri(M,r.TEXTURE_WRAP_S,q[S.wrapS]),r.texParameteri(M,r.TEXTURE_WRAP_T,q[S.wrapT]),(M===r.TEXTURE_3D||M===r.TEXTURE_2D_ARRAY)&&r.texParameteri(M,r.TEXTURE_WRAP_R,q[S.wrapR]),r.texParameteri(M,r.TEXTURE_MAG_FILTER,ie[S.magFilter]),r.texParameteri(M,r.TEXTURE_MIN_FILTER,ie[S.minFilter])):(r.texParameteri(M,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(M,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),(M===r.TEXTURE_3D||M===r.TEXTURE_2D_ARRAY)&&r.texParameteri(M,r.TEXTURE_WRAP_R,r.CLAMP_TO_EDGE),(S.wrapS!==Ut||S.wrapT!==Ut)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(M,r.TEXTURE_MAG_FILTER,C(S.magFilter)),r.texParameteri(M,r.TEXTURE_MIN_FILTER,C(S.minFilter)),S.minFilter!==ft&&S.minFilter!==Et&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),S.compareFunction&&(r.texParameteri(M,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(M,r.TEXTURE_COMPARE_FUNC,oe[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const te=e.get("EXT_texture_filter_anisotropic");if(S.magFilter===ft||S.minFilter!==yi&&S.minFilter!==mn||S.type===jt&&e.has("OES_texture_float_linear")===!1||o===!1&&S.type===tr&&e.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||n.get(S).__currentAnisotropy)&&(r.texParameterf(M,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy)}}function H(M,S){let I=!1;M.__webglInit===void 0&&(M.__webglInit=!0,S.addEventListener("dispose",A));const te=S.source;let Y=h.get(te);Y===void 0&&(Y={},h.set(te,Y));const $=G(S);if($!==M.__cacheKey){Y[$]===void 0&&(Y[$]={texture:r.createTexture(),usedTimes:0},s.memory.textures++,I=!0),Y[$].usedTimes++;const pe=Y[M.__cacheKey];pe!==void 0&&(Y[M.__cacheKey].usedTimes--,pe.usedTimes===0&&x(S)),M.__cacheKey=$,M.__webglTexture=Y[$].texture}return I}function Z(M,S,I){let te=r.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(te=r.TEXTURE_2D_ARRAY),S.isData3DTexture&&(te=r.TEXTURE_3D);const Y=H(M,S),$=S.source;t.bindTexture(te,M.__webglTexture,r.TEXTURE0+I);const pe=n.get($);if($.version!==pe.__version||Y===!0){t.activeTexture(r.TEXTURE0+I);const ce=Ye.getPrimaries(Ye.workingColorSpace),he=S.colorSpace===Ot?null:Ye.getPrimaries(S.colorSpace),ye=S.colorSpace===Ot||ce===he?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);const De=m(S)&&f(S.image)===!1;let K=_(S.image,De,!1,i.maxTextureSize);K=Le(S,K);const qe=f(K)||o,R=a.convert(S.format,S.colorSpace);let Q=a.convert(S.type),de=T(S.internalFormat,R,Q,S.colorSpace,S.isVideoTexture);ke(te,S,qe);let ae;const xe=S.mipmaps,He=o&&S.isVideoTexture!==!0&&de!==Qc,Xe=pe.__version===void 0||Y===!0,Ge=$.dataReady,Ke=L(S,K,qe);if(S.isDepthTexture)de=r.DEPTH_COMPONENT,o?S.type===jt?de=r.DEPTH_COMPONENT32F:S.type===Rn?de=r.DEPTH_COMPONENT24:S.type===Qn?de=r.DEPTH24_STENCIL8:de=r.DEPTH_COMPONENT16:S.type===jt&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===Zn&&de===r.DEPTH_COMPONENT&&S.type!==ss&&S.type!==Rn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=Rn,Q=a.convert(S.type)),S.format===Ni&&de===r.DEPTH_COMPONENT&&(de=r.DEPTH_STENCIL,S.type!==Qn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=Qn,Q=a.convert(S.type))),Xe&&(He?t.texStorage2D(r.TEXTURE_2D,1,de,K.width,K.height):t.texImage2D(r.TEXTURE_2D,0,de,K.width,K.height,0,R,Q,null));else if(S.isDataTexture)if(xe.length>0&&qe){He&&Xe&&t.texStorage2D(r.TEXTURE_2D,Ke,de,xe[0].width,xe[0].height);for(let k=0,J=xe.length;k<J;k++)ae=xe[k],He?Ge&&t.texSubImage2D(r.TEXTURE_2D,k,0,0,ae.width,ae.height,R,Q,ae.data):t.texImage2D(r.TEXTURE_2D,k,de,ae.width,ae.height,0,R,Q,ae.data);S.generateMipmaps=!1}else He?(Xe&&t.texStorage2D(r.TEXTURE_2D,Ke,de,K.width,K.height),Ge&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,K.width,K.height,R,Q,K.data)):t.texImage2D(r.TEXTURE_2D,0,de,K.width,K.height,0,R,Q,K.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){He&&Xe&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Ke,de,xe[0].width,xe[0].height,K.depth);for(let k=0,J=xe.length;k<J;k++)ae=xe[k],S.format!==Bt?R!==null?He?Ge&&t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,k,0,0,0,ae.width,ae.height,K.depth,R,ae.data,0,0):t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,k,de,ae.width,ae.height,K.depth,0,ae.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):He?Ge&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,k,0,0,0,ae.width,ae.height,K.depth,R,Q,ae.data):t.texImage3D(r.TEXTURE_2D_ARRAY,k,de,ae.width,ae.height,K.depth,0,R,Q,ae.data)}else{He&&Xe&&t.texStorage2D(r.TEXTURE_2D,Ke,de,xe[0].width,xe[0].height);for(let k=0,J=xe.length;k<J;k++)ae=xe[k],S.format!==Bt?R!==null?He?Ge&&t.compressedTexSubImage2D(r.TEXTURE_2D,k,0,0,ae.width,ae.height,R,ae.data):t.compressedTexImage2D(r.TEXTURE_2D,k,de,ae.width,ae.height,0,ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):He?Ge&&t.texSubImage2D(r.TEXTURE_2D,k,0,0,ae.width,ae.height,R,Q,ae.data):t.texImage2D(r.TEXTURE_2D,k,de,ae.width,ae.height,0,R,Q,ae.data)}else if(S.isDataArrayTexture)He?(Xe&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Ke,de,K.width,K.height,K.depth),Ge&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,R,Q,K.data)):t.texImage3D(r.TEXTURE_2D_ARRAY,0,de,K.width,K.height,K.depth,0,R,Q,K.data);else if(S.isData3DTexture)He?(Xe&&t.texStorage3D(r.TEXTURE_3D,Ke,de,K.width,K.height,K.depth),Ge&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,R,Q,K.data)):t.texImage3D(r.TEXTURE_3D,0,de,K.width,K.height,K.depth,0,R,Q,K.data);else if(S.isFramebufferTexture){if(Xe)if(He)t.texStorage2D(r.TEXTURE_2D,Ke,de,K.width,K.height);else{let k=K.width,J=K.height;for(let ee=0;ee<Ke;ee++)t.texImage2D(r.TEXTURE_2D,ee,de,k,J,0,R,Q,null),k>>=1,J>>=1}}else if(xe.length>0&&qe){He&&Xe&&t.texStorage2D(r.TEXTURE_2D,Ke,de,xe[0].width,xe[0].height);for(let k=0,J=xe.length;k<J;k++)ae=xe[k],He?Ge&&t.texSubImage2D(r.TEXTURE_2D,k,0,0,R,Q,ae):t.texImage2D(r.TEXTURE_2D,k,de,R,Q,ae);S.generateMipmaps=!1}else He?(Xe&&t.texStorage2D(r.TEXTURE_2D,Ke,de,K.width,K.height),Ge&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,R,Q,K)):t.texImage2D(r.TEXTURE_2D,0,de,R,Q,K);y(S,qe)&&v(te),pe.__version=$.version,S.onUpdate&&S.onUpdate(S)}M.__version=S.version}function ue(M,S,I){if(S.image.length!==6)return;const te=H(M,S),Y=S.source;t.bindTexture(r.TEXTURE_CUBE_MAP,M.__webglTexture,r.TEXTURE0+I);const $=n.get(Y);if(Y.version!==$.__version||te===!0){t.activeTexture(r.TEXTURE0+I);const pe=Ye.getPrimaries(Ye.workingColorSpace),ce=S.colorSpace===Ot?null:Ye.getPrimaries(S.colorSpace),he=S.colorSpace===Ot||pe===ce?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,he);const ye=S.isCompressedTexture||S.image[0].isCompressedTexture,De=S.image[0]&&S.image[0].isDataTexture,K=[];for(let k=0;k<6;k++)!ye&&!De?K[k]=_(S.image[k],!1,!0,i.maxCubemapSize):K[k]=De?S.image[k].image:S.image[k],K[k]=Le(S,K[k]);const qe=K[0],R=f(qe)||o,Q=a.convert(S.format,S.colorSpace),de=a.convert(S.type),ae=T(S.internalFormat,Q,de,S.colorSpace),xe=o&&S.isVideoTexture!==!0,He=$.__version===void 0||te===!0,Xe=Y.dataReady;let Ge=L(S,qe,R);ke(r.TEXTURE_CUBE_MAP,S,R);let Ke;if(ye){xe&&He&&t.texStorage2D(r.TEXTURE_CUBE_MAP,Ge,ae,qe.width,qe.height);for(let k=0;k<6;k++){Ke=K[k].mipmaps;for(let J=0;J<Ke.length;J++){const ee=Ke[J];S.format!==Bt?Q!==null?xe?Xe&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+k,J,0,0,ee.width,ee.height,Q,ee.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+k,J,ae,ee.width,ee.height,0,ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):xe?Xe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+k,J,0,0,ee.width,ee.height,Q,de,ee.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+k,J,ae,ee.width,ee.height,0,Q,de,ee.data)}}}else{Ke=S.mipmaps,xe&&He&&(Ke.length>0&&Ge++,t.texStorage2D(r.TEXTURE_CUBE_MAP,Ge,ae,K[0].width,K[0].height));for(let k=0;k<6;k++)if(De){xe?Xe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+k,0,0,0,K[k].width,K[k].height,Q,de,K[k].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+k,0,ae,K[k].width,K[k].height,0,Q,de,K[k].data);for(let J=0;J<Ke.length;J++){const fe=Ke[J].image[k].image;xe?Xe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+k,J+1,0,0,fe.width,fe.height,Q,de,fe.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+k,J+1,ae,fe.width,fe.height,0,Q,de,fe.data)}}else{xe?Xe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+k,0,0,0,Q,de,K[k]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+k,0,ae,Q,de,K[k]);for(let J=0;J<Ke.length;J++){const ee=Ke[J];xe?Xe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+k,J+1,0,0,Q,de,ee.image[k]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+k,J+1,ae,Q,de,ee.image[k])}}}y(S,R)&&v(r.TEXTURE_CUBE_MAP),$.__version=Y.version,S.onUpdate&&S.onUpdate(S)}M.__version=S.version}function Ee(M,S,I,te,Y,$){const pe=a.convert(I.format,I.colorSpace),ce=a.convert(I.type),he=T(I.internalFormat,pe,ce,I.colorSpace);if(!n.get(S).__hasExternalTextures){const De=Math.max(1,S.width>>$),K=Math.max(1,S.height>>$);Y===r.TEXTURE_3D||Y===r.TEXTURE_2D_ARRAY?t.texImage3D(Y,$,he,De,K,S.depth,0,pe,ce,null):t.texImage2D(Y,$,he,De,K,0,pe,ce,null)}t.bindFramebuffer(r.FRAMEBUFFER,M),_e(S)?c.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,te,Y,n.get(I).__webglTexture,0,be(S)):(Y===r.TEXTURE_2D||Y>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Y<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,te,Y,n.get(I).__webglTexture,$),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Me(M,S,I){if(r.bindRenderbuffer(r.RENDERBUFFER,M),S.depthBuffer&&!S.stencilBuffer){let te=o===!0?r.DEPTH_COMPONENT24:r.DEPTH_COMPONENT16;if(I||_e(S)){const Y=S.depthTexture;Y&&Y.isDepthTexture&&(Y.type===jt?te=r.DEPTH_COMPONENT32F:Y.type===Rn&&(te=r.DEPTH_COMPONENT24));const $=be(S);_e(S)?c.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,$,te,S.width,S.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,$,te,S.width,S.height)}else r.renderbufferStorage(r.RENDERBUFFER,te,S.width,S.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,M)}else if(S.depthBuffer&&S.stencilBuffer){const te=be(S);I&&_e(S)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,te,r.DEPTH24_STENCIL8,S.width,S.height):_e(S)?c.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,te,r.DEPTH24_STENCIL8,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,S.width,S.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,M)}else{const te=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let Y=0;Y<te.length;Y++){const $=te[Y],pe=a.convert($.format,$.colorSpace),ce=a.convert($.type),he=T($.internalFormat,pe,ce,$.colorSpace),ye=be(S);I&&_e(S)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,ye,he,S.width,S.height):_e(S)?c.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ye,he,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,he,S.width,S.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function me(M,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,M),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),O(S.depthTexture,0);const te=n.get(S.depthTexture).__webglTexture,Y=be(S);if(S.depthTexture.format===Zn)_e(S)?c.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,te,0,Y):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,te,0);else if(S.depthTexture.format===Ni)_e(S)?c.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,te,0,Y):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,te,0);else throw new Error("Unknown depthTexture format")}function We(M){const S=n.get(M),I=M.isWebGLCubeRenderTarget===!0;if(M.depthTexture&&!S.__autoAllocateDepthBuffer){if(I)throw new Error("target.depthTexture not supported in Cube render targets");me(S.__webglFramebuffer,M)}else if(I){S.__webglDepthbuffer=[];for(let te=0;te<6;te++)t.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer[te]),S.__webglDepthbuffer[te]=r.createRenderbuffer(),Me(S.__webglDepthbuffer[te],M,!1)}else t.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=r.createRenderbuffer(),Me(S.__webglDepthbuffer,M,!1);t.bindFramebuffer(r.FRAMEBUFFER,null)}function we(M,S,I){const te=n.get(M);S!==void 0&&Ee(te.__webglFramebuffer,M,M.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),I!==void 0&&We(M)}function N(M){const S=M.texture,I=n.get(M),te=n.get(S);M.addEventListener("dispose",z),M.isWebGLMultipleRenderTargets!==!0&&(te.__webglTexture===void 0&&(te.__webglTexture=r.createTexture()),te.__version=S.version,s.memory.textures++);const Y=M.isWebGLCubeRenderTarget===!0,$=M.isWebGLMultipleRenderTargets===!0,pe=f(M)||o;if(Y){I.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(o&&S.mipmaps&&S.mipmaps.length>0){I.__webglFramebuffer[ce]=[];for(let he=0;he<S.mipmaps.length;he++)I.__webglFramebuffer[ce][he]=r.createFramebuffer()}else I.__webglFramebuffer[ce]=r.createFramebuffer()}else{if(o&&S.mipmaps&&S.mipmaps.length>0){I.__webglFramebuffer=[];for(let ce=0;ce<S.mipmaps.length;ce++)I.__webglFramebuffer[ce]=r.createFramebuffer()}else I.__webglFramebuffer=r.createFramebuffer();if($)if(i.drawBuffers){const ce=M.texture;for(let he=0,ye=ce.length;he<ye;he++){const De=n.get(ce[he]);De.__webglTexture===void 0&&(De.__webglTexture=r.createTexture(),s.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&M.samples>0&&_e(M)===!1){const ce=$?S:[S];I.__webglMultisampledFramebuffer=r.createFramebuffer(),I.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,I.__webglMultisampledFramebuffer);for(let he=0;he<ce.length;he++){const ye=ce[he];I.__webglColorRenderbuffer[he]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,I.__webglColorRenderbuffer[he]);const De=a.convert(ye.format,ye.colorSpace),K=a.convert(ye.type),qe=T(ye.internalFormat,De,K,ye.colorSpace,M.isXRRenderTarget===!0),R=be(M);r.renderbufferStorageMultisample(r.RENDERBUFFER,R,qe,M.width,M.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+he,r.RENDERBUFFER,I.__webglColorRenderbuffer[he])}r.bindRenderbuffer(r.RENDERBUFFER,null),M.depthBuffer&&(I.__webglDepthRenderbuffer=r.createRenderbuffer(),Me(I.__webglDepthRenderbuffer,M,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Y){t.bindTexture(r.TEXTURE_CUBE_MAP,te.__webglTexture),ke(r.TEXTURE_CUBE_MAP,S,pe);for(let ce=0;ce<6;ce++)if(o&&S.mipmaps&&S.mipmaps.length>0)for(let he=0;he<S.mipmaps.length;he++)Ee(I.__webglFramebuffer[ce][he],M,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ce,he);else Ee(I.__webglFramebuffer[ce],M,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);y(S,pe)&&v(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if($){const ce=M.texture;for(let he=0,ye=ce.length;he<ye;he++){const De=ce[he],K=n.get(De);t.bindTexture(r.TEXTURE_2D,K.__webglTexture),ke(r.TEXTURE_2D,De,pe),Ee(I.__webglFramebuffer,M,De,r.COLOR_ATTACHMENT0+he,r.TEXTURE_2D,0),y(De,pe)&&v(r.TEXTURE_2D)}t.unbindTexture()}else{let ce=r.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(o?ce=M.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ce,te.__webglTexture),ke(ce,S,pe),o&&S.mipmaps&&S.mipmaps.length>0)for(let he=0;he<S.mipmaps.length;he++)Ee(I.__webglFramebuffer[he],M,S,r.COLOR_ATTACHMENT0,ce,he);else Ee(I.__webglFramebuffer,M,S,r.COLOR_ATTACHMENT0,ce,0);y(S,pe)&&v(ce),t.unbindTexture()}M.depthBuffer&&We(M)}function ot(M){const S=f(M)||o,I=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let te=0,Y=I.length;te<Y;te++){const $=I[te];if(y($,S)){const pe=M.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,ce=n.get($).__webglTexture;t.bindTexture(pe,ce),v(pe),t.unbindTexture()}}}function ve(M){if(o&&M.samples>0&&_e(M)===!1){const S=M.isWebGLMultipleRenderTargets?M.texture:[M.texture],I=M.width,te=M.height;let Y=r.COLOR_BUFFER_BIT;const $=[],pe=M.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ce=n.get(M),he=M.isWebGLMultipleRenderTargets===!0;if(he)for(let ye=0;ye<S.length;ye++)t.bindFramebuffer(r.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ye,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,ce.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ye,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,ce.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ce.__webglFramebuffer);for(let ye=0;ye<S.length;ye++){$.push(r.COLOR_ATTACHMENT0+ye),M.depthBuffer&&$.push(pe);const De=ce.__ignoreDepthValues!==void 0?ce.__ignoreDepthValues:!1;if(De===!1&&(M.depthBuffer&&(Y|=r.DEPTH_BUFFER_BIT),M.stencilBuffer&&(Y|=r.STENCIL_BUFFER_BIT)),he&&r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,ce.__webglColorRenderbuffer[ye]),De===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[pe]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[pe])),he){const K=n.get(S[ye]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,K,0)}r.blitFramebuffer(0,0,I,te,0,0,I,te,Y,r.NEAREST),d&&r.invalidateFramebuffer(r.READ_FRAMEBUFFER,$)}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),he)for(let ye=0;ye<S.length;ye++){t.bindFramebuffer(r.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ye,r.RENDERBUFFER,ce.__webglColorRenderbuffer[ye]);const De=n.get(S[ye]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,ce.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ye,r.TEXTURE_2D,De,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ce.__webglMultisampledFramebuffer)}}function be(M){return Math.min(i.maxSamples,M.samples)}function _e(M){const S=n.get(M);return o&&M.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function et(M){const S=s.render.frame;l.get(M)!==S&&(l.set(M,S),M.update())}function Le(M,S){const I=M.colorSpace,te=M.format,Y=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||M.format===$a||I!==_t&&I!==Ot&&(Ye.getTransfer(I)===tt?o===!1?e.has("EXT_sRGB")===!0&&te===Bt?(M.format=$a,M.minFilter=Et,M.generateMipmaps=!1):S=id.sRGBToLinear(S):(te!==Bt||Y!==Dn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",I)),S}this.allocateTextureUnit=P,this.resetTextureUnits=ne,this.setTexture2D=O,this.setTexture2DArray=j,this.setTexture3D=V,this.setTextureCube=X,this.rebindTextures=we,this.setupRenderTarget=N,this.updateRenderTargetMipmap=ot,this.updateMultisampleRenderTarget=ve,this.setupDepthRenderbuffer=We,this.setupFrameBufferTexture=Ee,this.useMultisampledRTT=_e}function eg(r,e,t){const n=t.isWebGL2;function i(a,s=Ot){let o;const c=Ye.getTransfer(s);if(a===Dn)return r.UNSIGNED_BYTE;if(a===Xc)return r.UNSIGNED_SHORT_4_4_4_4;if(a===qc)return r.UNSIGNED_SHORT_5_5_5_1;if(a===vl)return r.BYTE;if(a===El)return r.SHORT;if(a===ss)return r.UNSIGNED_SHORT;if(a===Wc)return r.INT;if(a===Rn)return r.UNSIGNED_INT;if(a===jt)return r.FLOAT;if(a===tr)return n?r.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(a===Ml)return r.ALPHA;if(a===Bt)return r.RGBA;if(a===yl)return r.LUMINANCE;if(a===Tl)return r.LUMINANCE_ALPHA;if(a===Zn)return r.DEPTH_COMPONENT;if(a===Ni)return r.DEPTH_STENCIL;if(a===$a)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(a===Al)return r.RED;if(a===jc)return r.RED_INTEGER;if(a===kl)return r.RG;if(a===Yc)return r.RG_INTEGER;if(a===Kc)return r.RGBA_INTEGER;if(a===aa||a===sa||a===oa||a===ca)if(c===tt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(a===aa)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===sa)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===oa)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===ca)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(a===aa)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===sa)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===oa)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===ca)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===Fs||a===Us||a===Bs||a===Os)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(a===Fs)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===Us)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===Bs)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===Os)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===Qc)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(a===Gs||a===Hs)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(a===Gs)return c===tt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(a===Hs)return c===tt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===zs||a===Vs||a===Ws||a===Xs||a===qs||a===js||a===Ys||a===Ks||a===Qs||a===Zs||a===$s||a===Js||a===eo||a===to)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(a===zs)return c===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===Vs)return c===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===Ws)return c===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===Xs)return c===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===qs)return c===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===js)return c===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===Ys)return c===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===Ks)return c===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===Qs)return c===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===Zs)return c===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===$s)return c===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===Js)return c===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===eo)return c===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===to)return c===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===da||a===no||a===io)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(a===da)return c===tt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===no)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===io)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===bl||a===ro||a===ao||a===so)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(a===da)return o.COMPRESSED_RED_RGTC1_EXT;if(a===ro)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===ao)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===so)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===Qn?n?r.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):r[a]!==void 0?r[a]:null}return{convert:i}}class tg extends bt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Yn extends nt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ng={type:"move"};class Da{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Yn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Yn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new w,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new w),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Yn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new w,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new w),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,a=null,s=null;const o=this._targetRay,c=this._grip,d=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(d&&e.hand){s=!0;for(const _ of e.hand.values()){const f=t.getJointPose(_,n),m=this._getHandJoint(d,_);f!==null&&(m.matrix.fromArray(f.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=f.radius),m.visible=f!==null}const l=d.joints["index-finger-tip"],u=d.joints["thumb-tip"],h=l.position.distanceTo(u.position),p=.02,g=.005;d.inputState.pinching&&h>p+g?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!d.inputState.pinching&&h<=p-g&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,n),a!==null&&(c.matrix.fromArray(a.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,a.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(a.linearVelocity)):c.hasLinearVelocity=!1,a.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(a.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&a!==null&&(i=a),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(ng)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=a!==null),d!==null&&(d.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Yn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const ig=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,rg=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class ag{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new mt,a=e.properties.get(i);a.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}render(e,t){if(this.texture!==null){if(this.mesh===null){const n=t.cameras[0].viewport,i=new Nn({extensions:{fragDepth:!0},vertexShader:ig,fragmentShader:rg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new At(new Zr(20,20),i)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class sg extends ii{constructor(e,t){super();const n=this;let i=null,a=1,s=null,o="local-floor",c=1,d=null,l=null,u=null,h=null,p=null,g=null;const _=new ag,f=t.getContextAttributes();let m=null,y=null;const v=[],T=[],L=new Te;let C=null;const A=new bt;A.layers.enable(1),A.viewport=new $e;const z=new bt;z.layers.enable(2),z.viewport=new $e;const re=[A,z],x=new tg;x.layers.enable(1),x.layers.enable(2);let b=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let Z=v[H];return Z===void 0&&(Z=new Da,v[H]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(H){let Z=v[H];return Z===void 0&&(Z=new Da,v[H]=Z),Z.getGripSpace()},this.getHand=function(H){let Z=v[H];return Z===void 0&&(Z=new Da,v[H]=Z),Z.getHandSpace()};function ne(H){const Z=T.indexOf(H.inputSource);if(Z===-1)return;const ue=v[Z];ue!==void 0&&(ue.update(H.inputSource,H.frame,d||s),ue.dispatchEvent({type:H.type,data:H.inputSource}))}function P(){i.removeEventListener("select",ne),i.removeEventListener("selectstart",ne),i.removeEventListener("selectend",ne),i.removeEventListener("squeeze",ne),i.removeEventListener("squeezestart",ne),i.removeEventListener("squeezeend",ne),i.removeEventListener("end",P),i.removeEventListener("inputsourceschange",G);for(let H=0;H<v.length;H++){const Z=T[H];Z!==null&&(T[H]=null,v[H].disconnect(Z))}b=null,W=null,_.reset(),e.setRenderTarget(m),p=null,h=null,u=null,i=null,y=null,ke.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){a=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){o=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||s},this.setReferenceSpace=function(H){d=H},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(H){if(i=H,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",ne),i.addEventListener("selectstart",ne),i.addEventListener("selectend",ne),i.addEventListener("squeeze",ne),i.addEventListener("squeezestart",ne),i.addEventListener("squeezeend",ne),i.addEventListener("end",P),i.addEventListener("inputsourceschange",G),f.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(L),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const Z={antialias:i.renderState.layers===void 0?f.antialias:!0,alpha:!0,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:a};p=new XRWebGLLayer(i,t,Z),i.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new ei(p.framebufferWidth,p.framebufferHeight,{format:Bt,type:Dn,colorSpace:e.outputColorSpace,stencilBuffer:f.stencil})}else{let Z=null,ue=null,Ee=null;f.depth&&(Ee=f.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Z=f.stencil?Ni:Zn,ue=f.stencil?Qn:Rn);const Me={colorFormat:t.RGBA8,depthFormat:Ee,scaleFactor:a};u=new XRWebGLBinding(i,t),h=u.createProjectionLayer(Me),i.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),y=new ei(h.textureWidth,h.textureHeight,{format:Bt,type:Dn,depthTexture:new md(h.textureWidth,h.textureHeight,ue,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:f.stencil,colorSpace:e.outputColorSpace,samples:f.antialias?4:0});const me=e.properties.get(y);me.__ignoreDepthValues=h.ignoreDepthValues}y.isXRRenderTarget=!0,this.setFoveation(c),d=null,s=await i.requestReferenceSpace(o),ke.setContext(i),ke.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function G(H){for(let Z=0;Z<H.removed.length;Z++){const ue=H.removed[Z],Ee=T.indexOf(ue);Ee>=0&&(T[Ee]=null,v[Ee].disconnect(ue))}for(let Z=0;Z<H.added.length;Z++){const ue=H.added[Z];let Ee=T.indexOf(ue);if(Ee===-1){for(let me=0;me<v.length;me++)if(me>=T.length){T.push(ue),Ee=me;break}else if(T[me]===null){T[me]=ue,Ee=me;break}if(Ee===-1)break}const Me=v[Ee];Me&&Me.connect(ue)}}const O=new w,j=new w;function V(H,Z,ue){O.setFromMatrixPosition(Z.matrixWorld),j.setFromMatrixPosition(ue.matrixWorld);const Ee=O.distanceTo(j),Me=Z.projectionMatrix.elements,me=ue.projectionMatrix.elements,We=Me[14]/(Me[10]-1),we=Me[14]/(Me[10]+1),N=(Me[9]+1)/Me[5],ot=(Me[9]-1)/Me[5],ve=(Me[8]-1)/Me[0],be=(me[8]+1)/me[0],_e=We*ve,et=We*be,Le=Ee/(-ve+be),M=Le*-ve;Z.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(M),H.translateZ(Le),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert();const S=We+Le,I=we+Le,te=_e-M,Y=et+(Ee-M),$=N*we/I*S,pe=ot*we/I*S;H.projectionMatrix.makePerspective(te,Y,$,pe,S,I),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}function X(H,Z){Z===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(Z.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(i===null)return;_.texture!==null&&(H.near=_.depthNear,H.far=_.depthFar),x.near=z.near=A.near=H.near,x.far=z.far=A.far=H.far,(b!==x.near||W!==x.far)&&(i.updateRenderState({depthNear:x.near,depthFar:x.far}),b=x.near,W=x.far,A.near=b,A.far=W,z.near=b,z.far=W,A.updateProjectionMatrix(),z.updateProjectionMatrix(),H.updateProjectionMatrix());const Z=H.parent,ue=x.cameras;X(x,Z);for(let Ee=0;Ee<ue.length;Ee++)X(ue[Ee],Z);ue.length===2?V(x,A,z):x.projectionMatrix.copy(A.projectionMatrix),q(H,x,Z)};function q(H,Z,ue){ue===null?H.matrix.copy(Z.matrixWorld):(H.matrix.copy(ue.matrixWorld),H.matrix.invert(),H.matrix.multiply(Z.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(Z.projectionMatrix),H.projectionMatrixInverse.copy(Z.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=Fi*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(h===null&&p===null))return c},this.setFoveation=function(H){c=H,h!==null&&(h.fixedFoveation=H),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=H)},this.hasDepthSensing=function(){return _.texture!==null};let ie=null;function oe(H,Z){if(l=Z.getViewerPose(d||s),g=Z,l!==null){const ue=l.views;p!==null&&(e.setRenderTargetFramebuffer(y,p.framebuffer),e.setRenderTarget(y));let Ee=!1;ue.length!==x.cameras.length&&(x.cameras.length=0,Ee=!0);for(let me=0;me<ue.length;me++){const We=ue[me];let we=null;if(p!==null)we=p.getViewport(We);else{const ot=u.getViewSubImage(h,We);we=ot.viewport,me===0&&(e.setRenderTargetTextures(y,ot.colorTexture,h.ignoreDepthValues?void 0:ot.depthStencilTexture),e.setRenderTarget(y))}let N=re[me];N===void 0&&(N=new bt,N.layers.enable(me),N.viewport=new $e,re[me]=N),N.matrix.fromArray(We.transform.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale),N.projectionMatrix.fromArray(We.projectionMatrix),N.projectionMatrixInverse.copy(N.projectionMatrix).invert(),N.viewport.set(we.x,we.y,we.width,we.height),me===0&&(x.matrix.copy(N.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),Ee===!0&&x.cameras.push(N)}const Me=i.enabledFeatures;if(Me&&Me.includes("depth-sensing")){const me=u.getDepthInformation(ue[0]);me&&me.isValid&&me.texture&&_.init(e,me,i.renderState)}}for(let ue=0;ue<v.length;ue++){const Ee=T[ue],Me=v[ue];Ee!==null&&Me!==void 0&&Me.update(Ee,Z,d||s)}_.render(e,x),ie&&ie(H,Z),Z.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Z}),g=null}const ke=new fd;ke.setAnimationLoop(oe),this.setAnimationLoop=function(H){ie=H},this.dispose=function(){}}}function og(r,e){function t(f,m){f.matrixAutoUpdate===!0&&f.updateMatrix(),m.value.copy(f.matrix)}function n(f,m){m.color.getRGB(f.fogColor.value,ld(r)),m.isFog?(f.fogNear.value=m.near,f.fogFar.value=m.far):m.isFogExp2&&(f.fogDensity.value=m.density)}function i(f,m,y,v,T){m.isMeshBasicMaterial||m.isMeshLambertMaterial?a(f,m):m.isMeshToonMaterial?(a(f,m),u(f,m)):m.isMeshPhongMaterial?(a(f,m),l(f,m)):m.isMeshStandardMaterial?(a(f,m),h(f,m),m.isMeshPhysicalMaterial&&p(f,m,T)):m.isMeshMatcapMaterial?(a(f,m),g(f,m)):m.isMeshDepthMaterial?a(f,m):m.isMeshDistanceMaterial?(a(f,m),_(f,m)):m.isMeshNormalMaterial?a(f,m):m.isLineBasicMaterial?(s(f,m),m.isLineDashedMaterial&&o(f,m)):m.isPointsMaterial?c(f,m,y,v):m.isSpriteMaterial?d(f,m):m.isShadowMaterial?(f.color.value.copy(m.color),f.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function a(f,m){f.opacity.value=m.opacity,m.color&&f.diffuse.value.copy(m.color),m.emissive&&f.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(f.map.value=m.map,t(m.map,f.mapTransform)),m.alphaMap&&(f.alphaMap.value=m.alphaMap,t(m.alphaMap,f.alphaMapTransform)),m.bumpMap&&(f.bumpMap.value=m.bumpMap,t(m.bumpMap,f.bumpMapTransform),f.bumpScale.value=m.bumpScale,m.side===Ct&&(f.bumpScale.value*=-1)),m.normalMap&&(f.normalMap.value=m.normalMap,t(m.normalMap,f.normalMapTransform),f.normalScale.value.copy(m.normalScale),m.side===Ct&&f.normalScale.value.negate()),m.displacementMap&&(f.displacementMap.value=m.displacementMap,t(m.displacementMap,f.displacementMapTransform),f.displacementScale.value=m.displacementScale,f.displacementBias.value=m.displacementBias),m.emissiveMap&&(f.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,f.emissiveMapTransform)),m.specularMap&&(f.specularMap.value=m.specularMap,t(m.specularMap,f.specularMapTransform)),m.alphaTest>0&&(f.alphaTest.value=m.alphaTest);const y=e.get(m).envMap;if(y&&(f.envMap.value=y,f.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=m.reflectivity,f.ior.value=m.ior,f.refractionRatio.value=m.refractionRatio),m.lightMap){f.lightMap.value=m.lightMap;const v=r._useLegacyLights===!0?Math.PI:1;f.lightMapIntensity.value=m.lightMapIntensity*v,t(m.lightMap,f.lightMapTransform)}m.aoMap&&(f.aoMap.value=m.aoMap,f.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,f.aoMapTransform))}function s(f,m){f.diffuse.value.copy(m.color),f.opacity.value=m.opacity,m.map&&(f.map.value=m.map,t(m.map,f.mapTransform))}function o(f,m){f.dashSize.value=m.dashSize,f.totalSize.value=m.dashSize+m.gapSize,f.scale.value=m.scale}function c(f,m,y,v){f.diffuse.value.copy(m.color),f.opacity.value=m.opacity,f.size.value=m.size*y,f.scale.value=v*.5,m.map&&(f.map.value=m.map,t(m.map,f.uvTransform)),m.alphaMap&&(f.alphaMap.value=m.alphaMap,t(m.alphaMap,f.alphaMapTransform)),m.alphaTest>0&&(f.alphaTest.value=m.alphaTest)}function d(f,m){f.diffuse.value.copy(m.color),f.opacity.value=m.opacity,f.rotation.value=m.rotation,m.map&&(f.map.value=m.map,t(m.map,f.mapTransform)),m.alphaMap&&(f.alphaMap.value=m.alphaMap,t(m.alphaMap,f.alphaMapTransform)),m.alphaTest>0&&(f.alphaTest.value=m.alphaTest)}function l(f,m){f.specular.value.copy(m.specular),f.shininess.value=Math.max(m.shininess,1e-4)}function u(f,m){m.gradientMap&&(f.gradientMap.value=m.gradientMap)}function h(f,m){f.metalness.value=m.metalness,m.metalnessMap&&(f.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,f.metalnessMapTransform)),f.roughness.value=m.roughness,m.roughnessMap&&(f.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,f.roughnessMapTransform)),e.get(m).envMap&&(f.envMapIntensity.value=m.envMapIntensity)}function p(f,m,y){f.ior.value=m.ior,m.sheen>0&&(f.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),f.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(f.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,f.sheenColorMapTransform)),m.sheenRoughnessMap&&(f.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,f.sheenRoughnessMapTransform))),m.clearcoat>0&&(f.clearcoat.value=m.clearcoat,f.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(f.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,f.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(f.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Ct&&f.clearcoatNormalScale.value.negate())),m.iridescence>0&&(f.iridescence.value=m.iridescence,f.iridescenceIOR.value=m.iridescenceIOR,f.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(f.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,f.iridescenceMapTransform)),m.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),m.transmission>0&&(f.transmission.value=m.transmission,f.transmissionSamplerMap.value=y.texture,f.transmissionSamplerSize.value.set(y.width,y.height),m.transmissionMap&&(f.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,f.transmissionMapTransform)),f.thickness.value=m.thickness,m.thicknessMap&&(f.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=m.attenuationDistance,f.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(f.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(f.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=m.specularIntensity,f.specularColor.value.copy(m.specularColor),m.specularColorMap&&(f.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,f.specularColorMapTransform)),m.specularIntensityMap&&(f.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,f.specularIntensityMapTransform))}function g(f,m){m.matcap&&(f.matcap.value=m.matcap)}function _(f,m){const y=e.get(m).light;f.referencePosition.value.setFromMatrixPosition(y.matrixWorld),f.nearDistance.value=y.shadow.camera.near,f.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function cg(r,e,t,n){let i={},a={},s=[];const o=t.isWebGL2?r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(y,v){const T=v.program;n.uniformBlockBinding(y,T)}function d(y,v){let T=i[y.id];T===void 0&&(g(y),T=l(y),i[y.id]=T,y.addEventListener("dispose",f));const L=v.program;n.updateUBOMapping(y,L);const C=e.render.frame;a[y.id]!==C&&(h(y),a[y.id]=C)}function l(y){const v=u();y.__bindingPointIndex=v;const T=r.createBuffer(),L=y.__size,C=y.usage;return r.bindBuffer(r.UNIFORM_BUFFER,T),r.bufferData(r.UNIFORM_BUFFER,L,C),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,v,T),T}function u(){for(let y=0;y<o;y++)if(s.indexOf(y)===-1)return s.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(y){const v=i[y.id],T=y.uniforms,L=y.__cache;r.bindBuffer(r.UNIFORM_BUFFER,v);for(let C=0,A=T.length;C<A;C++){const z=Array.isArray(T[C])?T[C]:[T[C]];for(let re=0,x=z.length;re<x;re++){const b=z[re];if(p(b,C,re,L)===!0){const W=b.__offset,ne=Array.isArray(b.value)?b.value:[b.value];let P=0;for(let G=0;G<ne.length;G++){const O=ne[G],j=_(O);typeof O=="number"||typeof O=="boolean"?(b.__data[0]=O,r.bufferSubData(r.UNIFORM_BUFFER,W+P,b.__data)):O.isMatrix3?(b.__data[0]=O.elements[0],b.__data[1]=O.elements[1],b.__data[2]=O.elements[2],b.__data[3]=0,b.__data[4]=O.elements[3],b.__data[5]=O.elements[4],b.__data[6]=O.elements[5],b.__data[7]=0,b.__data[8]=O.elements[6],b.__data[9]=O.elements[7],b.__data[10]=O.elements[8],b.__data[11]=0):(O.toArray(b.__data,P),P+=j.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,W,b.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function p(y,v,T,L){const C=y.value,A=v+"_"+T;if(L[A]===void 0)return typeof C=="number"||typeof C=="boolean"?L[A]=C:L[A]=C.clone(),!0;{const z=L[A];if(typeof C=="number"||typeof C=="boolean"){if(z!==C)return L[A]=C,!0}else if(z.equals(C)===!1)return z.copy(C),!0}return!1}function g(y){const v=y.uniforms;let T=0;const L=16;for(let A=0,z=v.length;A<z;A++){const re=Array.isArray(v[A])?v[A]:[v[A]];for(let x=0,b=re.length;x<b;x++){const W=re[x],ne=Array.isArray(W.value)?W.value:[W.value];for(let P=0,G=ne.length;P<G;P++){const O=ne[P],j=_(O),V=T%L;V!==0&&L-V<j.boundary&&(T+=L-V),W.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=T,T+=j.storage}}}const C=T%L;return C>0&&(T+=L-C),y.__size=T,y.__cache={},this}function _(y){const v={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(v.boundary=4,v.storage=4):y.isVector2?(v.boundary=8,v.storage=8):y.isVector3||y.isColor?(v.boundary=16,v.storage=12):y.isVector4?(v.boundary=16,v.storage=16):y.isMatrix3?(v.boundary=48,v.storage=48):y.isMatrix4?(v.boundary=64,v.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),v}function f(y){const v=y.target;v.removeEventListener("dispose",f);const T=s.indexOf(v.__bindingPointIndex);s.splice(T,1),r.deleteBuffer(i[v.id]),delete i[v.id],delete a[v.id]}function m(){for(const y in i)r.deleteBuffer(i[y]);s=[],i={},a={}}return{bind:c,update:d,dispose:m}}class vd{constructor(e={}){const{canvas:t=eu(),context:n=null,depth:i=!0,stencil:a=!0,alpha:s=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:d=!1,powerPreference:l="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let h;n!==null?h=n.getContextAttributes().alpha:h=s;const p=new Uint32Array(4),g=new Int32Array(4);let _=null,f=null;const m=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=at,this._useLegacyLights=!1,this.toneMapping=Pn,this.toneMappingExposure=1;const v=this;let T=!1,L=0,C=0,A=null,z=-1,re=null;const x=new $e,b=new $e;let W=null;const ne=new Re(0);let P=0,G=t.width,O=t.height,j=1,V=null,X=null;const q=new $e(0,0,G,O),ie=new $e(0,0,G,O);let oe=!1;const ke=new ds;let H=!1,Z=!1,ue=null;const Ee=new Fe,Me=new Te,me=new w,We={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function we(){return A===null?j:1}let N=n;function ot(E,D){for(let U=0;U<E.length;U++){const B=E[U],F=t.getContext(B,D);if(F!==null)return F}return null}try{const E={alpha:!0,depth:i,stencil:a,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:d,powerPreference:l,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${as}`),t.addEventListener("webglcontextlost",Ke,!1),t.addEventListener("webglcontextrestored",k,!1),t.addEventListener("webglcontextcreationerror",J,!1),N===null){const D=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&D.shift(),N=ot(D,E),N===null)throw ot(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&N instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),N.getShaderPrecisionFormat===void 0&&(N.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let ve,be,_e,et,Le,M,S,I,te,Y,$,pe,ce,he,ye,De,K,qe,R,Q,de,ae,xe,He;function Xe(){ve=new pm(N),be=new dm(N,ve,e),ve.init(be),ae=new eg(N,ve,be),_e=new $p(N,ve,be),et=new Sm(N),Le=new Bp,M=new Jp(N,ve,_e,Le,be,ae,et),S=new um(v),I=new mm(v),te=new Au(N,be),xe=new om(N,ve,te,be),Y=new gm(N,te,et,xe),$=new Mm(N,Y,te,et),R=new Em(N,be,M),De=new lm(Le),pe=new Up(v,S,I,ve,be,xe,De),ce=new og(v,Le),he=new Gp,ye=new qp(ve,be),qe=new sm(v,S,I,_e,$,h,c),K=new Zp(v,$,be),He=new cg(N,et,be,_e),Q=new cm(N,ve,et,be),de=new _m(N,ve,et,be),et.programs=pe.programs,v.capabilities=be,v.extensions=ve,v.properties=Le,v.renderLists=he,v.shadowMap=K,v.state=_e,v.info=et}Xe();const Ge=new sg(v,N);this.xr=Ge,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const E=ve.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=ve.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(E){E!==void 0&&(j=E,this.setSize(G,O,!1))},this.getSize=function(E){return E.set(G,O)},this.setSize=function(E,D,U=!0){if(Ge.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=E,O=D,t.width=Math.floor(E*j),t.height=Math.floor(D*j),U===!0&&(t.style.width=E+"px",t.style.height=D+"px"),this.setViewport(0,0,E,D)},this.getDrawingBufferSize=function(E){return E.set(G*j,O*j).floor()},this.setDrawingBufferSize=function(E,D,U){G=E,O=D,j=U,t.width=Math.floor(E*U),t.height=Math.floor(D*U),this.setViewport(0,0,E,D)},this.getCurrentViewport=function(E){return E.copy(x)},this.getViewport=function(E){return E.copy(q)},this.setViewport=function(E,D,U,B){E.isVector4?q.set(E.x,E.y,E.z,E.w):q.set(E,D,U,B),_e.viewport(x.copy(q).multiplyScalar(j).floor())},this.getScissor=function(E){return E.copy(ie)},this.setScissor=function(E,D,U,B){E.isVector4?ie.set(E.x,E.y,E.z,E.w):ie.set(E,D,U,B),_e.scissor(b.copy(ie).multiplyScalar(j).floor())},this.getScissorTest=function(){return oe},this.setScissorTest=function(E){_e.setScissorTest(oe=E)},this.setOpaqueSort=function(E){V=E},this.setTransparentSort=function(E){X=E},this.getClearColor=function(E){return E.copy(qe.getClearColor())},this.setClearColor=function(){qe.setClearColor.apply(qe,arguments)},this.getClearAlpha=function(){return qe.getClearAlpha()},this.setClearAlpha=function(){qe.setClearAlpha.apply(qe,arguments)},this.clear=function(E=!0,D=!0,U=!0){let B=0;if(E){let F=!1;if(A!==null){const le=A.texture.format;F=le===Kc||le===Yc||le===jc}if(F){const le=A.texture.type,Se=le===Dn||le===Rn||le===ss||le===Qn||le===Xc||le===qc,Ae=qe.getClearColor(),Ce=qe.getClearAlpha(),Ue=Ae.r,Pe=Ae.g,Ne=Ae.b;Se?(p[0]=Ue,p[1]=Pe,p[2]=Ne,p[3]=Ce,N.clearBufferuiv(N.COLOR,0,p)):(g[0]=Ue,g[1]=Pe,g[2]=Ne,g[3]=Ce,N.clearBufferiv(N.COLOR,0,g))}else B|=N.COLOR_BUFFER_BIT}D&&(B|=N.DEPTH_BUFFER_BIT),U&&(B|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ke,!1),t.removeEventListener("webglcontextrestored",k,!1),t.removeEventListener("webglcontextcreationerror",J,!1),he.dispose(),ye.dispose(),Le.dispose(),S.dispose(),I.dispose(),$.dispose(),xe.dispose(),He.dispose(),pe.dispose(),Ge.dispose(),Ge.removeEventListener("sessionstart",Pt),Ge.removeEventListener("sessionend",Je),ue&&(ue.dispose(),ue=null),Mt.stop()};function Ke(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function k(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const E=et.autoReset,D=K.enabled,U=K.autoUpdate,B=K.needsUpdate,F=K.type;Xe(),et.autoReset=E,K.enabled=D,K.autoUpdate=U,K.needsUpdate=B,K.type=F}function J(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function ee(E){const D=E.target;D.removeEventListener("dispose",ee),fe(D)}function fe(E){ge(E),Le.remove(E)}function ge(E){const D=Le.get(E).programs;D!==void 0&&(D.forEach(function(U){pe.releaseProgram(U)}),E.isShaderMaterial&&pe.releaseShaderCache(E))}this.renderBufferDirect=function(E,D,U,B,F,le){D===null&&(D=We);const Se=F.isMesh&&F.matrixWorld.determinant()<0,Ae=Id(E,D,U,B,F);_e.setMaterial(B,Se);let Ce=U.index,Ue=1;if(B.wireframe===!0){if(Ce=Y.getWireframeAttribute(U),Ce===void 0)return;Ue=2}const Pe=U.drawRange,Ne=U.attributes.position;let st=Pe.start*Ue,Rt=(Pe.start+Pe.count)*Ue;le!==null&&(st=Math.max(st,le.start*Ue),Rt=Math.min(Rt,(le.start+le.count)*Ue)),Ce!==null?(st=Math.max(st,0),Rt=Math.min(Rt,Ce.count)):Ne!=null&&(st=Math.max(st,0),Rt=Math.min(Rt,Ne.count));const ut=Rt-st;if(ut<0||ut===1/0)return;xe.setup(F,B,Ae,U,Ce);let an,it=Q;if(Ce!==null&&(an=te.get(Ce),it=de,it.setIndex(an)),F.isMesh)B.wireframe===!0?(_e.setLineWidth(B.wireframeLinewidth*we()),it.setMode(N.LINES)):it.setMode(N.TRIANGLES);else if(F.isLine){let Be=B.linewidth;Be===void 0&&(Be=1),_e.setLineWidth(Be*we()),F.isLineSegments?it.setMode(N.LINES):F.isLineLoop?it.setMode(N.LINE_LOOP):it.setMode(N.LINE_STRIP)}else F.isPoints?it.setMode(N.POINTS):F.isSprite&&it.setMode(N.TRIANGLES);if(F.isBatchedMesh)it.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else if(F.isInstancedMesh)it.renderInstances(st,ut,F.count);else if(U.isInstancedBufferGeometry){const Be=U._maxInstanceCount!==void 0?U._maxInstanceCount:1/0,ta=Math.min(U.instanceCount,Be);it.renderInstances(st,ut,ta)}else it.render(st,ut)};function ze(E,D,U){E.transparent===!0&&E.side===Ft&&E.forceSinglePass===!1?(E.side=Ct,E.needsUpdate=!0,dr(E,D,U),E.side=Sn,E.needsUpdate=!0,dr(E,D,U),E.side=Ft):dr(E,D,U)}this.compile=function(E,D,U=null){U===null&&(U=E),f=ye.get(U),f.init(),y.push(f),U.traverseVisible(function(F){F.isLight&&F.layers.test(D.layers)&&(f.pushLight(F),F.castShadow&&f.pushShadow(F))}),E!==U&&E.traverseVisible(function(F){F.isLight&&F.layers.test(D.layers)&&(f.pushLight(F),F.castShadow&&f.pushShadow(F))}),f.setupLights(v._useLegacyLights);const B=new Set;return E.traverse(function(F){const le=F.material;if(le)if(Array.isArray(le))for(let Se=0;Se<le.length;Se++){const Ae=le[Se];ze(Ae,U,F),B.add(Ae)}else ze(le,U,F),B.add(le)}),y.pop(),f=null,B},this.compileAsync=function(E,D,U=null){const B=this.compile(E,D,U);return new Promise(F=>{function le(){if(B.forEach(function(Se){Le.get(Se).currentProgram.isReady()&&B.delete(Se)}),B.size===0){F(E);return}setTimeout(le,10)}ve.get("KHR_parallel_shader_compile")!==null?le():setTimeout(le,10)})};let je=null;function pt(E){je&&je(E)}function Pt(){Mt.stop()}function Je(){Mt.start()}const Mt=new fd;Mt.setAnimationLoop(pt),typeof self<"u"&&Mt.setContext(self),this.setAnimationLoop=function(E){je=E,Ge.setAnimationLoop(E),E===null?Mt.stop():Mt.start()},Ge.addEventListener("sessionstart",Pt),Ge.addEventListener("sessionend",Je),this.render=function(E,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),Ge.enabled===!0&&Ge.isPresenting===!0&&(Ge.cameraAutoUpdate===!0&&Ge.updateCamera(D),D=Ge.getCamera()),E.isScene===!0&&E.onBeforeRender(v,E,D,A),f=ye.get(E,y.length),f.init(),y.push(f),Ee.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),ke.setFromProjectionMatrix(Ee),Z=this.localClippingEnabled,H=De.init(this.clippingPlanes,Z),_=he.get(E,m.length),_.init(),m.push(_),Xt(E,D,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(V,X),this.info.render.frame++,H===!0&&De.beginShadows();const U=f.state.shadowsArray;if(K.render(U,E,D),H===!0&&De.endShadows(),this.info.autoReset===!0&&this.info.reset(),(Ge.enabled===!1||Ge.isPresenting===!1||Ge.hasDepthSensing()===!1)&&qe.render(_,E),f.setupLights(v._useLegacyLights),D.isArrayCamera){const B=D.cameras;for(let F=0,le=B.length;F<le;F++){const Se=B[F];ys(_,E,Se,Se.viewport)}}else ys(_,E,D);A!==null&&(M.updateMultisampleRenderTarget(A),M.updateRenderTargetMipmap(A)),E.isScene===!0&&E.onAfterRender(v,E,D),xe.resetDefaultState(),z=-1,re=null,y.pop(),y.length>0?f=y[y.length-1]:f=null,m.pop(),m.length>0?_=m[m.length-1]:_=null};function Xt(E,D,U,B){if(E.visible===!1)return;if(E.layers.test(D.layers)){if(E.isGroup)U=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(D);else if(E.isLight)f.pushLight(E),E.castShadow&&f.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||ke.intersectsSprite(E)){B&&me.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Ee);const Se=$.update(E),Ae=E.material;Ae.visible&&_.push(E,Se,Ae,U,me.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||ke.intersectsObject(E))){const Se=$.update(E),Ae=E.material;if(B&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),me.copy(E.boundingSphere.center)):(Se.boundingSphere===null&&Se.computeBoundingSphere(),me.copy(Se.boundingSphere.center)),me.applyMatrix4(E.matrixWorld).applyMatrix4(Ee)),Array.isArray(Ae)){const Ce=Se.groups;for(let Ue=0,Pe=Ce.length;Ue<Pe;Ue++){const Ne=Ce[Ue],st=Ae[Ne.materialIndex];st&&st.visible&&_.push(E,Se,st,U,me.z,Ne)}}else Ae.visible&&_.push(E,Se,Ae,U,me.z,null)}}const le=E.children;for(let Se=0,Ae=le.length;Se<Ae;Se++)Xt(le[Se],D,U,B)}function ys(E,D,U,B){const F=E.opaque,le=E.transmissive,Se=E.transparent;f.setupLightsView(U),H===!0&&De.setGlobalState(v.clippingPlanes,U),le.length>0&&Nd(F,le,D,U),B&&_e.viewport(x.copy(B)),F.length>0&&cr(F,D,U),le.length>0&&cr(le,D,U),Se.length>0&&cr(Se,D,U),_e.buffers.depth.setTest(!0),_e.buffers.depth.setMask(!0),_e.buffers.color.setMask(!0),_e.setPolygonOffset(!1)}function Nd(E,D,U,B){if((U.isScene===!0?U.overrideMaterial:null)!==null)return;const le=be.isWebGL2;ue===null&&(ue=new ei(1,1,{generateMipmaps:!0,type:ve.has("EXT_color_buffer_half_float")?tr:Dn,minFilter:mn,samples:le?4:0})),v.getDrawingBufferSize(Me),le?ue.setSize(Me.x,Me.y):ue.setSize(jr(Me.x),jr(Me.y));const Se=v.getRenderTarget();v.setRenderTarget(ue),v.getClearColor(ne),P=v.getClearAlpha(),P<1&&v.setClearColor(16777215,.5),v.clear();const Ae=v.toneMapping;v.toneMapping=Pn,cr(E,U,B),M.updateMultisampleRenderTarget(ue),M.updateRenderTargetMipmap(ue);let Ce=!1;for(let Ue=0,Pe=D.length;Ue<Pe;Ue++){const Ne=D[Ue],st=Ne.object,Rt=Ne.geometry,ut=Ne.material,an=Ne.group;if(ut.side===Ft&&st.layers.test(B.layers)){const it=ut.side;ut.side=Ct,ut.needsUpdate=!0,Ts(st,U,B,Rt,ut,an),ut.side=it,ut.needsUpdate=!0,Ce=!0}}Ce===!0&&(M.updateMultisampleRenderTarget(ue),M.updateRenderTargetMipmap(ue)),v.setRenderTarget(Se),v.setClearColor(ne,P),v.toneMapping=Ae}function cr(E,D,U){const B=D.isScene===!0?D.overrideMaterial:null;for(let F=0,le=E.length;F<le;F++){const Se=E[F],Ae=Se.object,Ce=Se.geometry,Ue=B===null?Se.material:B,Pe=Se.group;Ae.layers.test(U.layers)&&Ts(Ae,D,U,Ce,Ue,Pe)}}function Ts(E,D,U,B,F,le){E.onBeforeRender(v,D,U,B,F,le),E.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),F.onBeforeRender(v,D,U,B,E,le),F.transparent===!0&&F.side===Ft&&F.forceSinglePass===!1?(F.side=Ct,F.needsUpdate=!0,v.renderBufferDirect(U,D,B,F,E,le),F.side=Sn,F.needsUpdate=!0,v.renderBufferDirect(U,D,B,F,E,le),F.side=Ft):v.renderBufferDirect(U,D,B,F,E,le),E.onAfterRender(v,D,U,B,F,le)}function dr(E,D,U){D.isScene!==!0&&(D=We);const B=Le.get(E),F=f.state.lights,le=f.state.shadowsArray,Se=F.state.version,Ae=pe.getParameters(E,F.state,le,D,U),Ce=pe.getProgramCacheKey(Ae);let Ue=B.programs;B.environment=E.isMeshStandardMaterial?D.environment:null,B.fog=D.fog,B.envMap=(E.isMeshStandardMaterial?I:S).get(E.envMap||B.environment),Ue===void 0&&(E.addEventListener("dispose",ee),Ue=new Map,B.programs=Ue);let Pe=Ue.get(Ce);if(Pe!==void 0){if(B.currentProgram===Pe&&B.lightsStateVersion===Se)return ks(E,Ae),Pe}else Ae.uniforms=pe.getUniforms(E),E.onBuild(U,Ae,v),E.onBeforeCompile(Ae,v),Pe=pe.acquireProgram(Ae,Ce),Ue.set(Ce,Pe),B.uniforms=Ae.uniforms;const Ne=B.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ne.clippingPlanes=De.uniform),ks(E,Ae),B.needsLights=Ud(E),B.lightsStateVersion=Se,B.needsLights&&(Ne.ambientLightColor.value=F.state.ambient,Ne.lightProbe.value=F.state.probe,Ne.directionalLights.value=F.state.directional,Ne.directionalLightShadows.value=F.state.directionalShadow,Ne.spotLights.value=F.state.spot,Ne.spotLightShadows.value=F.state.spotShadow,Ne.rectAreaLights.value=F.state.rectArea,Ne.ltc_1.value=F.state.rectAreaLTC1,Ne.ltc_2.value=F.state.rectAreaLTC2,Ne.pointLights.value=F.state.point,Ne.pointLightShadows.value=F.state.pointShadow,Ne.hemisphereLights.value=F.state.hemi,Ne.directionalShadowMap.value=F.state.directionalShadowMap,Ne.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Ne.spotShadowMap.value=F.state.spotShadowMap,Ne.spotLightMatrix.value=F.state.spotLightMatrix,Ne.spotLightMap.value=F.state.spotLightMap,Ne.pointShadowMap.value=F.state.pointShadowMap,Ne.pointShadowMatrix.value=F.state.pointShadowMatrix),B.currentProgram=Pe,B.uniformsList=null,Pe}function As(E){if(E.uniformsList===null){const D=E.currentProgram.getUniforms();E.uniformsList=Or.seqWithValue(D.seq,E.uniforms)}return E.uniformsList}function ks(E,D){const U=Le.get(E);U.outputColorSpace=D.outputColorSpace,U.batching=D.batching,U.instancing=D.instancing,U.instancingColor=D.instancingColor,U.skinning=D.skinning,U.morphTargets=D.morphTargets,U.morphNormals=D.morphNormals,U.morphColors=D.morphColors,U.morphTargetsCount=D.morphTargetsCount,U.numClippingPlanes=D.numClippingPlanes,U.numIntersection=D.numClipIntersection,U.vertexAlphas=D.vertexAlphas,U.vertexTangents=D.vertexTangents,U.toneMapping=D.toneMapping}function Id(E,D,U,B,F){D.isScene!==!0&&(D=We),M.resetTextureUnits();const le=D.fog,Se=B.isMeshStandardMaterial?D.environment:null,Ae=A===null?v.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:_t,Ce=(B.isMeshStandardMaterial?I:S).get(B.envMap||Se),Ue=B.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,Pe=!!U.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Ne=!!U.morphAttributes.position,st=!!U.morphAttributes.normal,Rt=!!U.morphAttributes.color;let ut=Pn;B.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(ut=v.toneMapping);const an=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,it=an!==void 0?an.length:0,Be=Le.get(B),ta=f.state.lights;if(H===!0&&(Z===!0||E!==re)){const Dt=E===re&&B.id===z;De.setState(B,E,Dt)}let rt=!1;B.version===Be.__version?(Be.needsLights&&Be.lightsStateVersion!==ta.state.version||Be.outputColorSpace!==Ae||F.isBatchedMesh&&Be.batching===!1||!F.isBatchedMesh&&Be.batching===!0||F.isInstancedMesh&&Be.instancing===!1||!F.isInstancedMesh&&Be.instancing===!0||F.isSkinnedMesh&&Be.skinning===!1||!F.isSkinnedMesh&&Be.skinning===!0||F.isInstancedMesh&&Be.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Be.instancingColor===!1&&F.instanceColor!==null||Be.envMap!==Ce||B.fog===!0&&Be.fog!==le||Be.numClippingPlanes!==void 0&&(Be.numClippingPlanes!==De.numPlanes||Be.numIntersection!==De.numIntersection)||Be.vertexAlphas!==Ue||Be.vertexTangents!==Pe||Be.morphTargets!==Ne||Be.morphNormals!==st||Be.morphColors!==Rt||Be.toneMapping!==ut||be.isWebGL2===!0&&Be.morphTargetsCount!==it)&&(rt=!0):(rt=!0,Be.__version=B.version);let Fn=Be.currentProgram;rt===!0&&(Fn=dr(B,D,F));let bs=!1,Wi=!1,na=!1;const St=Fn.getUniforms(),Un=Be.uniforms;if(_e.useProgram(Fn.program)&&(bs=!0,Wi=!0,na=!0),B.id!==z&&(z=B.id,Wi=!0),bs||re!==E){St.setValue(N,"projectionMatrix",E.projectionMatrix),St.setValue(N,"viewMatrix",E.matrixWorldInverse);const Dt=St.map.cameraPosition;Dt!==void 0&&Dt.setValue(N,me.setFromMatrixPosition(E.matrixWorld)),be.logarithmicDepthBuffer&&St.setValue(N,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&St.setValue(N,"isOrthographic",E.isOrthographicCamera===!0),re!==E&&(re=E,Wi=!0,na=!0)}if(F.isSkinnedMesh){St.setOptional(N,F,"bindMatrix"),St.setOptional(N,F,"bindMatrixInverse");const Dt=F.skeleton;Dt&&(be.floatVertexTextures?(Dt.boneTexture===null&&Dt.computeBoneTexture(),St.setValue(N,"boneTexture",Dt.boneTexture,M)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}F.isBatchedMesh&&(St.setOptional(N,F,"batchingTexture"),St.setValue(N,"batchingTexture",F._matricesTexture,M));const ia=U.morphAttributes;if((ia.position!==void 0||ia.normal!==void 0||ia.color!==void 0&&be.isWebGL2===!0)&&R.update(F,U,Fn),(Wi||Be.receiveShadow!==F.receiveShadow)&&(Be.receiveShadow=F.receiveShadow,St.setValue(N,"receiveShadow",F.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(Un.envMap.value=Ce,Un.flipEnvMap.value=Ce.isCubeTexture&&Ce.isRenderTargetTexture===!1?-1:1),Wi&&(St.setValue(N,"toneMappingExposure",v.toneMappingExposure),Be.needsLights&&Fd(Un,na),le&&B.fog===!0&&ce.refreshFogUniforms(Un,le),ce.refreshMaterialUniforms(Un,B,j,O,ue),Or.upload(N,As(Be),Un,M)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(Or.upload(N,As(Be),Un,M),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&St.setValue(N,"center",F.center),St.setValue(N,"modelViewMatrix",F.modelViewMatrix),St.setValue(N,"normalMatrix",F.normalMatrix),St.setValue(N,"modelMatrix",F.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){const Dt=B.uniformsGroups;for(let ra=0,Bd=Dt.length;ra<Bd;ra++)if(be.isWebGL2){const Cs=Dt[ra];He.update(Cs,Fn),He.bind(Cs,Fn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Fn}function Fd(E,D){E.ambientLightColor.needsUpdate=D,E.lightProbe.needsUpdate=D,E.directionalLights.needsUpdate=D,E.directionalLightShadows.needsUpdate=D,E.pointLights.needsUpdate=D,E.pointLightShadows.needsUpdate=D,E.spotLights.needsUpdate=D,E.spotLightShadows.needsUpdate=D,E.rectAreaLights.needsUpdate=D,E.hemisphereLights.needsUpdate=D}function Ud(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(E,D,U){Le.get(E.texture).__webglTexture=D,Le.get(E.depthTexture).__webglTexture=U;const B=Le.get(E);B.__hasExternalTextures=!0,B.__hasExternalTextures&&(B.__autoAllocateDepthBuffer=U===void 0,B.__autoAllocateDepthBuffer||ve.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),B.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(E,D){const U=Le.get(E);U.__webglFramebuffer=D,U.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(E,D=0,U=0){A=E,L=D,C=U;let B=!0,F=null,le=!1,Se=!1;if(E){const Ce=Le.get(E);Ce.__useDefaultFramebuffer!==void 0?(_e.bindFramebuffer(N.FRAMEBUFFER,null),B=!1):Ce.__webglFramebuffer===void 0?M.setupRenderTarget(E):Ce.__hasExternalTextures&&M.rebindTextures(E,Le.get(E.texture).__webglTexture,Le.get(E.depthTexture).__webglTexture);const Ue=E.texture;(Ue.isData3DTexture||Ue.isDataArrayTexture||Ue.isCompressedArrayTexture)&&(Se=!0);const Pe=Le.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Pe[D])?F=Pe[D][U]:F=Pe[D],le=!0):be.isWebGL2&&E.samples>0&&M.useMultisampledRTT(E)===!1?F=Le.get(E).__webglMultisampledFramebuffer:Array.isArray(Pe)?F=Pe[U]:F=Pe,x.copy(E.viewport),b.copy(E.scissor),W=E.scissorTest}else x.copy(q).multiplyScalar(j).floor(),b.copy(ie).multiplyScalar(j).floor(),W=oe;if(_e.bindFramebuffer(N.FRAMEBUFFER,F)&&be.drawBuffers&&B&&_e.drawBuffers(E,F),_e.viewport(x),_e.scissor(b),_e.setScissorTest(W),le){const Ce=Le.get(E.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+D,Ce.__webglTexture,U)}else if(Se){const Ce=Le.get(E.texture),Ue=D||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ce.__webglTexture,U||0,Ue)}z=-1},this.readRenderTargetPixels=function(E,D,U,B,F,le,Se){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ae=Le.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Se!==void 0&&(Ae=Ae[Se]),Ae){_e.bindFramebuffer(N.FRAMEBUFFER,Ae);try{const Ce=E.texture,Ue=Ce.format,Pe=Ce.type;if(Ue!==Bt&&ae.convert(Ue)!==N.getParameter(N.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ne=Pe===tr&&(ve.has("EXT_color_buffer_half_float")||be.isWebGL2&&ve.has("EXT_color_buffer_float"));if(Pe!==Dn&&ae.convert(Pe)!==N.getParameter(N.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Pe===jt&&(be.isWebGL2||ve.has("OES_texture_float")||ve.has("WEBGL_color_buffer_float")))&&!Ne){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=E.width-B&&U>=0&&U<=E.height-F&&N.readPixels(D,U,B,F,ae.convert(Ue),ae.convert(Pe),le)}finally{const Ce=A!==null?Le.get(A).__webglFramebuffer:null;_e.bindFramebuffer(N.FRAMEBUFFER,Ce)}}},this.copyFramebufferToTexture=function(E,D,U=0){const B=Math.pow(2,-U),F=Math.floor(D.image.width*B),le=Math.floor(D.image.height*B);M.setTexture2D(D,0),N.copyTexSubImage2D(N.TEXTURE_2D,U,0,0,E.x,E.y,F,le),_e.unbindTexture()},this.copyTextureToTexture=function(E,D,U,B=0){const F=D.image.width,le=D.image.height,Se=ae.convert(U.format),Ae=ae.convert(U.type);M.setTexture2D(U,0),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,U.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,U.unpackAlignment),D.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,B,E.x,E.y,F,le,Se,Ae,D.image.data):D.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,B,E.x,E.y,D.mipmaps[0].width,D.mipmaps[0].height,Se,D.mipmaps[0].data):N.texSubImage2D(N.TEXTURE_2D,B,E.x,E.y,Se,Ae,D.image),B===0&&U.generateMipmaps&&N.generateMipmap(N.TEXTURE_2D),_e.unbindTexture()},this.copyTextureToTexture3D=function(E,D,U,B,F=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const le=E.max.x-E.min.x+1,Se=E.max.y-E.min.y+1,Ae=E.max.z-E.min.z+1,Ce=ae.convert(B.format),Ue=ae.convert(B.type);let Pe;if(B.isData3DTexture)M.setTexture3D(B,0),Pe=N.TEXTURE_3D;else if(B.isDataArrayTexture||B.isCompressedArrayTexture)M.setTexture2DArray(B,0),Pe=N.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,B.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,B.unpackAlignment);const Ne=N.getParameter(N.UNPACK_ROW_LENGTH),st=N.getParameter(N.UNPACK_IMAGE_HEIGHT),Rt=N.getParameter(N.UNPACK_SKIP_PIXELS),ut=N.getParameter(N.UNPACK_SKIP_ROWS),an=N.getParameter(N.UNPACK_SKIP_IMAGES),it=U.isCompressedTexture?U.mipmaps[F]:U.image;N.pixelStorei(N.UNPACK_ROW_LENGTH,it.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,it.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,E.min.x),N.pixelStorei(N.UNPACK_SKIP_ROWS,E.min.y),N.pixelStorei(N.UNPACK_SKIP_IMAGES,E.min.z),U.isDataTexture||U.isData3DTexture?N.texSubImage3D(Pe,F,D.x,D.y,D.z,le,Se,Ae,Ce,Ue,it.data):U.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),N.compressedTexSubImage3D(Pe,F,D.x,D.y,D.z,le,Se,Ae,Ce,it.data)):N.texSubImage3D(Pe,F,D.x,D.y,D.z,le,Se,Ae,Ce,Ue,it),N.pixelStorei(N.UNPACK_ROW_LENGTH,Ne),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,st),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Rt),N.pixelStorei(N.UNPACK_SKIP_ROWS,ut),N.pixelStorei(N.UNPACK_SKIP_IMAGES,an),F===0&&B.generateMipmaps&&N.generateMipmap(Pe),_e.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?M.setTextureCube(E,0):E.isData3DTexture?M.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?M.setTexture2DArray(E,0):M.setTexture2D(E,0),_e.unbindTexture()},this.resetState=function(){L=0,C=0,A=null,_e.reset(),xe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return pn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===os?"display-p3":"srgb",t.unpackColorSpace=Ye.workingColorSpace===Kr?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===at?$n:$c}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===$n?at:_t}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class dg extends vd{}dg.prototype.isWebGL1Renderer=!0;class lg extends nt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class ug{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Za,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Wt()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Jn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,a=this.stride;i<a;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Wt()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Wt()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const yt=new w;class us{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.applyMatrix4(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.applyNormalMatrix(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.transformDirection(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Vt(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Qe(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Qe(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Qe(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Qe(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Qe(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Vt(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Vt(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Vt(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Vt(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Qe(t,this.array),n=Qe(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Qe(t,this.array),n=Qe(n,this.array),i=Qe(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,a){return e=e*this.data.stride+this.offset,this.normalized&&(t=Qe(t,this.array),n=Qe(n,this.array),i=Qe(i,this.array),a=Qe(a,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=a,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[i+a])}return new kt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new us(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[i+a])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const ec=new w,tc=new $e,nc=new $e,hg=new w,ic=new Fe,Lr=new w,Na=new tn,rc=new Fe,Ia=new ar;class fg extends At{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Is,this.bindMatrix=new Fe,this.bindMatrixInverse=new Fe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new en),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Lr),this.boundingBox.expandByPoint(Lr)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new tn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Lr),this.boundingSphere.expandByPoint(Lr)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Na.copy(this.boundingSphere),Na.applyMatrix4(i),e.ray.intersectsSphere(Na)!==!1&&(rc.copy(i).invert(),Ia.copy(e.ray).applyMatrix4(rc),!(this.boundingBox!==null&&Ia.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Ia)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new $e,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const a=1/e.manhattanLength();a!==1/0?e.multiplyScalar(a):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Is?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===xl?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;tc.fromBufferAttribute(i.attributes.skinIndex,e),nc.fromBufferAttribute(i.attributes.skinWeight,e),ec.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let a=0;a<4;a++){const s=nc.getComponent(a);if(s!==0){const o=tc.getComponent(a);ic.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(hg.copy(ec).applyMatrix4(ic),s)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Ed extends nt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class mg extends mt{constructor(e=null,t=1,n=1,i,a,s,o,c,d=ft,l=ft,u,h){super(null,s,o,c,d,l,i,a,u,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ac=new Fe,pg=new Fe;class hs{constructor(e=[],t=[]){this.uuid=Wt(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Fe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Fe;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let a=0,s=e.length;a<s;a++){const o=e[a]?e[a].matrixWorld:pg;ac.multiplyMatrices(o,t[a]),ac.toArray(n,a*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new hs(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new mg(t,e,e,Bt,jt);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const a=e.bones[n];let s=t[a];s===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",a),s=new Ed),this.bones.push(s),this.boneInverses.push(new Fe().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,a=t.length;i<a;i++){const s=t[i];e.bones.push(s.uuid);const o=n[i];e.boneInverses.push(o.toArray())}return e}}class sc extends kt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Ei=new Fe,oc=new Fe,Pr=[],cc=new en,gg=new Fe,Ki=new At,Qi=new tn;class _g extends At{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new sc(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,gg)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new en),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ei),cc.copy(e.boundingBox).applyMatrix4(Ei),this.boundingBox.union(cc)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new tn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ei),Qi.copy(e.boundingSphere).applyMatrix4(Ei),this.boundingSphere.union(Qi)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Ki.geometry=this.geometry,Ki.material=this.material,Ki.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Qi.copy(this.boundingSphere),Qi.applyMatrix4(n),e.ray.intersectsSphere(Qi)!==!1))for(let a=0;a<i;a++){this.getMatrixAt(a,Ei),oc.multiplyMatrices(n,Ei),Ki.matrixWorld=oc,Ki.raycast(e,Pr);for(let s=0,o=Pr.length;s<o;s++){const c=Pr[s];c.instanceId=a,c.object=this,t.push(c)}Pr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new sc(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class Md extends Kt{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Re(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const dc=new w,lc=new w,uc=new Fe,Fa=new ar,Dr=new tn;class fs extends nt{constructor(e=new nn,t=new Md){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,a=t.count;i<a;i++)dc.fromBufferAttribute(t,i-1),lc.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=dc.distanceTo(lc);e.setAttribute("lineDistance",new _n(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,a=e.params.Line.threshold,s=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Dr.copy(n.boundingSphere),Dr.applyMatrix4(i),Dr.radius+=a,e.ray.intersectsSphere(Dr)===!1)return;uc.copy(i).invert(),Fa.copy(e.ray).applyMatrix4(uc);const o=a/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,d=new w,l=new w,u=new w,h=new w,p=this.isLineSegments?2:1,g=n.index,f=n.attributes.position;if(g!==null){const m=Math.max(0,s.start),y=Math.min(g.count,s.start+s.count);for(let v=m,T=y-1;v<T;v+=p){const L=g.getX(v),C=g.getX(v+1);if(d.fromBufferAttribute(f,L),l.fromBufferAttribute(f,C),Fa.distanceSqToSegment(d,l,h,u)>c)continue;h.applyMatrix4(this.matrixWorld);const z=e.ray.origin.distanceTo(h);z<e.near||z>e.far||t.push({distance:z,point:u.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{const m=Math.max(0,s.start),y=Math.min(f.count,s.start+s.count);for(let v=m,T=y-1;v<T;v+=p){if(d.fromBufferAttribute(f,v),l.fromBufferAttribute(f,v+1),Fa.distanceSqToSegment(d,l,h,u)>c)continue;h.applyMatrix4(this.matrixWorld);const C=e.ray.origin.distanceTo(h);C<e.near||C>e.far||t.push({distance:C,point:u.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,s=i.length;a<s;a++){const o=i[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}}const hc=new w,fc=new w;class Sg extends fs{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,a=t.count;i<a;i+=2)hc.fromBufferAttribute(t,i),fc.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+hc.distanceTo(fc);e.setAttribute("lineDistance",new _n(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class xg extends fs{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class yd extends Kt{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Re(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const mc=new Fe,ts=new ar,Nr=new tn,Ir=new w;class vg extends nt{constructor(e=new nn,t=new yd){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,a=e.params.Points.threshold,s=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Nr.copy(n.boundingSphere),Nr.applyMatrix4(i),Nr.radius+=a,e.ray.intersectsSphere(Nr)===!1)return;mc.copy(i).invert(),ts.copy(e.ray).applyMatrix4(mc);const o=a/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,d=n.index,u=n.attributes.position;if(d!==null){const h=Math.max(0,s.start),p=Math.min(d.count,s.start+s.count);for(let g=h,_=p;g<_;g++){const f=d.getX(g);Ir.fromBufferAttribute(u,f),pc(Ir,f,c,i,e,t,this)}}else{const h=Math.max(0,s.start),p=Math.min(u.count,s.start+s.count);for(let g=h,_=p;g<_;g++)Ir.fromBufferAttribute(u,g),pc(Ir,g,c,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,s=i.length;a<s;a++){const o=i[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}}function pc(r,e,t,n,i,a,s){const o=ts.distanceSqToPoint(r);if(o<t){const c=new w;ts.closestPointToPoint(r,c),c.applyMatrix4(n);const d=i.ray.origin.distanceTo(c);if(d<i.near||d>i.far)return;a.push({distance:d,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,object:s})}}class ms extends Kt{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Re(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Jc,this.normalScale=new Te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class In extends ms{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Te(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return gt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Re(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Re(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Re(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function Fr(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function Eg(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function Mg(r){function e(i,a){return r[i]-r[a]}const t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function gc(r,e,t){const n=r.length,i=new r.constructor(n);for(let a=0,s=0;s!==n;++a){const o=t[a]*e;for(let c=0;c!==e;++c)i[s++]=r[o+c]}return i}function Td(r,e,t,n){let i=1,a=r[0];for(;a!==void 0&&a[n]===void 0;)a=r[i++];if(a===void 0)return;let s=a[n];if(s!==void 0)if(Array.isArray(s))do s=a[n],s!==void 0&&(e.push(a.time),t.push.apply(t,s)),a=r[i++];while(a!==void 0);else if(s.toArray!==void 0)do s=a[n],s!==void 0&&(e.push(a.time),s.toArray(t,t.length)),a=r[i++];while(a!==void 0);else do s=a[n],s!==void 0&&(e.push(a.time),t.push(s)),a=r[i++];while(a!==void 0)}class or{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],a=t[n-1];n:{e:{let s;t:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<a)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(a=i,i=t[++n],e<i)break e}s=t.length;break t}if(!(e>=a)){const o=t[1];e<o&&(n=2,a=o);for(let c=n-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=a,a=t[--n-1],e>=a)break e}s=n,n=0;break t}break n}for(;n<s;){const o=n+s>>>1;e<t[o]?s=o:n=o+1}if(i=t[n],a=t[n-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,a,i)}return this.interpolate_(n,a,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,a=e*i;for(let s=0;s!==i;++s)t[s]=n[a+s];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class yg extends or{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:oo,endingEnd:oo}}intervalChanged_(e,t,n){const i=this.parameterPositions;let a=e-2,s=e+1,o=i[a],c=i[s];if(o===void 0)switch(this.getSettings_().endingStart){case co:a=e,o=2*t-n;break;case lo:a=i.length-2,o=t+i[a]-i[a+1];break;default:a=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case co:s=e,c=2*n-t;break;case lo:s=1,c=n+i[1]-i[0];break;default:s=e-1,c=t}const d=(n-t)*.5,l=this.valueSize;this._weightPrev=d/(t-o),this._weightNext=d/(c-n),this._offsetPrev=a*l,this._offsetNext=s*l}interpolate_(e,t,n,i){const a=this.resultBuffer,s=this.sampleValues,o=this.valueSize,c=e*o,d=c-o,l=this._offsetPrev,u=this._offsetNext,h=this._weightPrev,p=this._weightNext,g=(n-t)/(i-t),_=g*g,f=_*g,m=-h*f+2*h*_-h*g,y=(1+h)*f+(-1.5-2*h)*_+(-.5+h)*g+1,v=(-1-p)*f+(1.5+p)*_+.5*g,T=p*f-p*_;for(let L=0;L!==o;++L)a[L]=m*s[l+L]+y*s[d+L]+v*s[c+L]+T*s[u+L];return a}}class Tg extends or{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const a=this.resultBuffer,s=this.sampleValues,o=this.valueSize,c=e*o,d=c-o,l=(n-t)/(i-t),u=1-l;for(let h=0;h!==o;++h)a[h]=s[d+h]*u+s[c+h]*l;return a}}class Ag extends or{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class rn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Fr(t,this.TimeBufferType),this.values=Fr(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Fr(e.times,Array),values:Fr(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Ag(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Tg(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new yg(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case nr:t=this.InterpolantFactoryMethodDiscrete;break;case Ii:t=this.InterpolantFactoryMethodLinear;break;case la:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return nr;case this.InterpolantFactoryMethodLinear:return Ii;case this.InterpolantFactoryMethodSmooth:return la}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let a=0,s=i-1;for(;a!==i&&n[a]<e;)++a;for(;s!==-1&&n[s]>t;)--s;if(++s,a!==0||s!==i){a>=s&&(s=Math.max(s,1),a=s-1);const o=this.getValueSize();this.times=n.slice(a,s),this.values=this.values.slice(a*o,s*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,a=n.length;a===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let s=null;for(let o=0;o!==a;o++){const c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(s!==null&&s>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,s),e=!1;break}s=c}if(i!==void 0&&Eg(i))for(let o=0,c=i.length;o!==c;++o){const d=i[o];if(isNaN(d)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,d),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===la,a=e.length-1;let s=1;for(let o=1;o<a;++o){let c=!1;const d=e[o],l=e[o+1];if(d!==l&&(o!==1||d!==e[0]))if(i)c=!0;else{const u=o*n,h=u-n,p=u+n;for(let g=0;g!==n;++g){const _=t[u+g];if(_!==t[h+g]||_!==t[p+g]){c=!0;break}}}if(c){if(o!==s){e[s]=e[o];const u=o*n,h=s*n;for(let p=0;p!==n;++p)t[h+p]=t[u+p]}++s}}if(a>0){e[s]=e[a];for(let o=a*n,c=s*n,d=0;d!==n;++d)t[c+d]=t[o+d];++s}return s!==e.length?(this.times=e.slice(0,s),this.values=t.slice(0,s*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}rn.prototype.TimeBufferType=Float32Array;rn.prototype.ValueBufferType=Float32Array;rn.prototype.DefaultInterpolation=Ii;class Hi extends rn{}Hi.prototype.ValueTypeName="bool";Hi.prototype.ValueBufferType=Array;Hi.prototype.DefaultInterpolation=nr;Hi.prototype.InterpolantFactoryMethodLinear=void 0;Hi.prototype.InterpolantFactoryMethodSmooth=void 0;class Ad extends rn{}Ad.prototype.ValueTypeName="color";class Bi extends rn{}Bi.prototype.ValueTypeName="number";class kg extends or{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const a=this.resultBuffer,s=this.sampleValues,o=this.valueSize,c=(n-t)/(i-t);let d=e*o;for(let l=d+o;d!==l;d+=4)$t.slerpFlat(a,0,s,d-o,s,d,c);return a}}class ti extends rn{InterpolantFactoryMethodLinear(e){return new kg(this.times,this.values,this.getValueSize(),e)}}ti.prototype.ValueTypeName="quaternion";ti.prototype.DefaultInterpolation=Ii;ti.prototype.InterpolantFactoryMethodSmooth=void 0;class zi extends rn{}zi.prototype.ValueTypeName="string";zi.prototype.ValueBufferType=Array;zi.prototype.DefaultInterpolation=nr;zi.prototype.InterpolantFactoryMethodLinear=void 0;zi.prototype.InterpolantFactoryMethodSmooth=void 0;class Oi extends rn{}Oi.prototype.ValueTypeName="vector";class bg{constructor(e,t=-1,n,i=Cl){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Wt(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let s=0,o=n.length;s!==o;++s)t.push(Rg(n[s]).scale(i));const a=new this(e.name,e.duration,t,e.blendMode);return a.uuid=e.uuid,a}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let a=0,s=n.length;a!==s;++a)t.push(rn.toJSON(n[a]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const a=t.length,s=[];for(let o=0;o<a;o++){let c=[],d=[];c.push((o+a-1)%a,o,(o+1)%a),d.push(0,1,0);const l=Mg(c);c=gc(c,1,l),d=gc(d,1,l),!i&&c[0]===0&&(c.push(a),d.push(d[0])),s.push(new Bi(".morphTargetInfluences["+t[o].name+"]",c,d).scale(1/n))}return new this(e,-1,s)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},a=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){const d=e[o],l=d.name.match(a);if(l&&l.length>1){const u=l[1];let h=i[u];h||(i[u]=h=[]),h.push(d)}}const s=[];for(const o in i)s.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return s}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,h,p,g,_){if(p.length!==0){const f=[],m=[];Td(p,f,m,g),f.length!==0&&_.push(new u(h,f,m))}},i=[],a=e.name||"default",s=e.fps||30,o=e.blendMode;let c=e.length||-1;const d=e.hierarchy||[];for(let u=0;u<d.length;u++){const h=d[u].keys;if(!(!h||h.length===0))if(h[0].morphTargets){const p={};let g;for(g=0;g<h.length;g++)if(h[g].morphTargets)for(let _=0;_<h[g].morphTargets.length;_++)p[h[g].morphTargets[_]]=-1;for(const _ in p){const f=[],m=[];for(let y=0;y!==h[g].morphTargets.length;++y){const v=h[g];f.push(v.time),m.push(v.morphTarget===_?1:0)}i.push(new Bi(".morphTargetInfluence["+_+"]",f,m))}c=p.length*s}else{const p=".bones["+t[u].name+"]";n(Oi,p+".position",h,"pos",i),n(ti,p+".quaternion",h,"rot",i),n(Oi,p+".scale",h,"scl",i)}}return i.length===0?null:new this(a,c,i,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const a=this.tracks[n];t=Math.max(t,a.times[a.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Cg(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Bi;case"vector":case"vector2":case"vector3":case"vector4":return Oi;case"color":return Ad;case"quaternion":return ti;case"bool":case"boolean":return Hi;case"string":return zi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function Rg(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Cg(r.type);if(r.times===void 0){const t=[],n=[];Td(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const wn={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class wg{constructor(e,t,n){const i=this;let a=!1,s=0,o=0,c;const d=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(l){o++,a===!1&&i.onStart!==void 0&&i.onStart(l,s,o),a=!0},this.itemEnd=function(l){s++,i.onProgress!==void 0&&i.onProgress(l,s,o),s===o&&(a=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(l){i.onError!==void 0&&i.onError(l)},this.resolveURL=function(l){return c?c(l):l},this.setURLModifier=function(l){return c=l,this},this.addHandler=function(l,u){return d.push(l,u),this},this.removeHandler=function(l){const u=d.indexOf(l);return u!==-1&&d.splice(u,2),this},this.getHandler=function(l){for(let u=0,h=d.length;u<h;u+=2){const p=d[u],g=d[u+1];if(p.global&&(p.lastIndex=0),p.test(l))return g}return null}}}const Lg=new wg;class Vi{constructor(e){this.manager=e!==void 0?e:Lg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,a){n.load(e,i,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Vi.DEFAULT_MATERIAL_NAME="__DEFAULT";const un={};class Pg extends Error{constructor(e,t){super(e),this.response=t}}class kd extends Vi{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=wn.get(e);if(a!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(a),this.manager.itemEnd(e)},0),a;if(un[e]!==void 0){un[e].push({onLoad:t,onProgress:n,onError:i});return}un[e]=[],un[e].push({onLoad:t,onProgress:n,onError:i});const s=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,c=this.responseType;fetch(s).then(d=>{if(d.status===200||d.status===0){if(d.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||d.body===void 0||d.body.getReader===void 0)return d;const l=un[e],u=d.body.getReader(),h=d.headers.get("Content-Length")||d.headers.get("X-File-Size"),p=h?parseInt(h):0,g=p!==0;let _=0;const f=new ReadableStream({start(m){y();function y(){u.read().then(({done:v,value:T})=>{if(v)m.close();else{_+=T.byteLength;const L=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:p});for(let C=0,A=l.length;C<A;C++){const z=l[C];z.onProgress&&z.onProgress(L)}m.enqueue(T),y()}})}}});return new Response(f)}else throw new Pg(`fetch for "${d.url}" responded with ${d.status}: ${d.statusText}`,d)}).then(d=>{switch(c){case"arraybuffer":return d.arrayBuffer();case"blob":return d.blob();case"document":return d.text().then(l=>new DOMParser().parseFromString(l,o));case"json":return d.json();default:if(o===void 0)return d.text();{const u=/charset="?([^;"\s]*)"?/i.exec(o),h=u&&u[1]?u[1].toLowerCase():void 0,p=new TextDecoder(h);return d.arrayBuffer().then(g=>p.decode(g))}}}).then(d=>{wn.add(e,d);const l=un[e];delete un[e];for(let u=0,h=l.length;u<h;u++){const p=l[u];p.onLoad&&p.onLoad(d)}}).catch(d=>{const l=un[e];if(l===void 0)throw this.manager.itemError(e),d;delete un[e];for(let u=0,h=l.length;u<h;u++){const p=l[u];p.onError&&p.onError(d)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Dg extends Vi{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=this,s=wn.get(e);if(s!==void 0)return a.manager.itemStart(e),setTimeout(function(){t&&t(s),a.manager.itemEnd(e)},0),s;const o=ir("img");function c(){l(),wn.add(e,this),t&&t(this),a.manager.itemEnd(e)}function d(u){l(),i&&i(u),a.manager.itemError(e),a.manager.itemEnd(e)}function l(){o.removeEventListener("load",c,!1),o.removeEventListener("error",d,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",d,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),a.manager.itemStart(e),o.src=e,o}}class Ng extends Vi{constructor(e){super(e)}load(e,t,n,i){const a=new mt,s=new Dg(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(e,function(o){a.image=o,a.needsUpdate=!0,t!==void 0&&t(a)},n,i),a}}class ps extends nt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Re(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Ua=new Fe,_c=new w,Sc=new w;class gs{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Te(512,512),this.map=null,this.mapPass=null,this.matrix=new Fe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ds,this._frameExtents=new Te(1,1),this._viewportCount=1,this._viewports=[new $e(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;_c.setFromMatrixPosition(e.matrixWorld),t.position.copy(_c),Sc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Sc),t.updateMatrixWorld(),Ua.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ua),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ua)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Ig extends gs{constructor(){super(new bt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Fi*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,a=e.distance||t.far;(n!==t.fov||i!==t.aspect||a!==t.far)&&(t.fov=n,t.aspect=i,t.far=a,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Fg extends ps{constructor(e,t,n=0,i=Math.PI/3,a=0,s=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(nt.DEFAULT_UP),this.updateMatrix(),this.target=new nt,this.distance=n,this.angle=i,this.penumbra=a,this.decay=s,this.map=null,this.shadow=new Ig}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const xc=new Fe,Zi=new w,Ba=new w;class Ug extends gs{constructor(){super(new bt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Te(4,2),this._viewportCount=6,this._viewports=[new $e(2,1,1,1),new $e(0,1,1,1),new $e(3,1,1,1),new $e(1,1,1,1),new $e(3,0,1,1),new $e(1,0,1,1)],this._cubeDirections=[new w(1,0,0),new w(-1,0,0),new w(0,0,1),new w(0,0,-1),new w(0,1,0),new w(0,-1,0)],this._cubeUps=[new w(0,1,0),new w(0,1,0),new w(0,1,0),new w(0,1,0),new w(0,0,1),new w(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,a=e.distance||n.far;a!==n.far&&(n.far=a,n.updateProjectionMatrix()),Zi.setFromMatrixPosition(e.matrixWorld),n.position.copy(Zi),Ba.copy(n.position),Ba.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Ba),n.updateMatrixWorld(),i.makeTranslation(-Zi.x,-Zi.y,-Zi.z),xc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(xc)}}class Bg extends ps{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Ug}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Og extends gs{constructor(){super(new $r(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Gg extends ps{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(nt.DEFAULT_UP),this.updateMatrix(),this.target=new nt,this.shadow=new Og}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class ns{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class Hg extends Vi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=this,s=wn.get(e);if(s!==void 0){if(a.manager.itemStart(e),s.then){s.then(d=>{t&&t(d),a.manager.itemEnd(e)}).catch(d=>{i&&i(d)});return}return setTimeout(function(){t&&t(s),a.manager.itemEnd(e)},0),s}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;const c=fetch(e,o).then(function(d){return d.blob()}).then(function(d){return createImageBitmap(d,Object.assign(a.options,{colorSpaceConversion:"none"}))}).then(function(d){return wn.add(e,d),t&&t(d),a.manager.itemEnd(e),d}).catch(function(d){i&&i(d),wn.remove(e),a.manager.itemError(e),a.manager.itemEnd(e)});wn.add(e,c),a.manager.itemStart(e)}}const _s="\\[\\]\\.:\\/",zg=new RegExp("["+_s+"]","g"),Ss="[^"+_s+"]",Vg="[^"+_s.replace("\\.","")+"]",Wg=/((?:WC+[\/:])*)/.source.replace("WC",Ss),Xg=/(WCOD+)?/.source.replace("WCOD",Vg),qg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ss),jg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ss),Yg=new RegExp("^"+Wg+Xg+qg+jg+"$"),Kg=["material","materials","bones","map"];class Qg{constructor(e,t,n){const i=n||Ze.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,a=n.length;i!==a;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Ze{constructor(e,t,n){this.path=t,this.parsedPath=n||Ze.parseTrackName(t),this.node=Ze.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Ze.Composite(e,t,n):new Ze(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(zg,"")}static parseTrackName(e){const t=Yg.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const a=n.nodeName.substring(i+1);Kg.indexOf(a)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=a)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(a){for(let s=0;s<a.length;s++){const o=a[s];if(o.name===t||o.uuid===t)return o;const c=n(o.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,a=n.length;i!==a;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,a=n.length;i!==a;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,a=n.length;i!==a;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,a=n.length;i!==a;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let a=t.propertyIndex;if(e||(e=Ze.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let d=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let l=0;l<e.length;l++)if(e[l].name===d){d=l;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(d!==void 0){if(e[d]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[d]}}const s=e[i];if(s===void 0){const d=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+d+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[a]!==void 0&&(a=e.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=s,this.propertyIndex=a}else s.fromArray!==void 0&&s.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=s):Array.isArray(s)?(c=this.BindingType.EntireArray,this.resolvedProperty=s):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Ze.Composite=Qg;Ze.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ze.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ze.prototype.GetterByBindingType=[Ze.prototype._getValue_direct,Ze.prototype._getValue_array,Ze.prototype._getValue_arrayElement,Ze.prototype._getValue_toArray];Ze.prototype.SetterByBindingTypeAndVersioning=[[Ze.prototype._setValue_direct,Ze.prototype._setValue_direct_setNeedsUpdate,Ze.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ze.prototype._setValue_array,Ze.prototype._setValue_array_setNeedsUpdate,Ze.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ze.prototype._setValue_arrayElement,Ze.prototype._setValue_arrayElement_setNeedsUpdate,Ze.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ze.prototype._setValue_fromArray,Ze.prototype._setValue_fromArray_setNeedsUpdate,Ze.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class vc{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(gt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:as}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=as);function Ec(r,e){if(e===Rl)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===Qa||e===Zc){let t=r.getIndex();if(t===null){const s=[],o=r.getAttribute("position");if(o!==void 0){for(let c=0;c<o.count;c++)s.push(c);r.setIndex(s),t=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}const n=t.count-2,i=[];if(e===Qa)for(let s=1;s<=n;s++)i.push(t.getX(0)),i.push(t.getX(s)),i.push(t.getX(s+1));else for(let s=0;s<n;s++)s%2===0?(i.push(t.getX(s)),i.push(t.getX(s+1)),i.push(t.getX(s+2))):(i.push(t.getX(s+2)),i.push(t.getX(s+1)),i.push(t.getX(s)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const a=r.clone();return a.setIndex(i),a.clearGroups(),a}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}class Zg extends Vi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new n_(t)}),this.register(function(t){return new l_(t)}),this.register(function(t){return new u_(t)}),this.register(function(t){return new h_(t)}),this.register(function(t){return new r_(t)}),this.register(function(t){return new a_(t)}),this.register(function(t){return new s_(t)}),this.register(function(t){return new o_(t)}),this.register(function(t){return new t_(t)}),this.register(function(t){return new c_(t)}),this.register(function(t){return new i_(t)}),this.register(function(t){return new d_(t)}),this.register(function(t){return new Jg(t)}),this.register(function(t){return new f_(t)}),this.register(function(t){return new m_(t)})}load(e,t,n,i){const a=this;let s;this.resourcePath!==""?s=this.resourcePath:this.path!==""?s=this.path:s=ns.extractUrlBase(e),this.manager.itemStart(e);const o=function(d){i?i(d):console.error(d),a.manager.itemError(e),a.manager.itemEnd(e)},c=new kd(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(d){try{a.parse(d,s,function(l){t(l),a.manager.itemEnd(e)},o)}catch(l){o(l)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let a;const s={},o={},c=new TextDecoder;if(typeof e=="string")a=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===bd){try{s[Ve.KHR_BINARY_GLTF]=new p_(e)}catch(u){i&&i(u);return}a=JSON.parse(s[Ve.KHR_BINARY_GLTF].content)}else a=JSON.parse(c.decode(e));else a=e;if(a.asset===void 0||a.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const d=new C_(a,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});d.fileLoader.setRequestHeader(this.requestHeader);for(let l=0;l<this.pluginCallbacks.length;l++){const u=this.pluginCallbacks[l](d);o[u.name]=u,s[u.name]=!0}if(a.extensionsUsed)for(let l=0;l<a.extensionsUsed.length;++l){const u=a.extensionsUsed[l],h=a.extensionsRequired||[];switch(u){case Ve.KHR_MATERIALS_UNLIT:s[u]=new e_;break;case Ve.KHR_DRACO_MESH_COMPRESSION:s[u]=new g_(a,this.dracoLoader);break;case Ve.KHR_TEXTURE_TRANSFORM:s[u]=new __;break;case Ve.KHR_MESH_QUANTIZATION:s[u]=new S_;break;default:h.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}d.setExtensions(s),d.setPlugins(o),d.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,a){n.parse(e,t,i,a)})}}function $g(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}const Ve={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class Jg{constructor(e){this.parser=e,this.name=Ve.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const a=t[n];a.extensions&&a.extensions[this.name]&&a.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,a.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const a=t.json,c=((a.extensions&&a.extensions[this.name]||{}).lights||[])[e];let d;const l=new Re(16777215);c.color!==void 0&&l.setRGB(c.color[0],c.color[1],c.color[2],_t);const u=c.range!==void 0?c.range:0;switch(c.type){case"directional":d=new Gg(l),d.target.position.set(0,0,-1),d.add(d.target);break;case"point":d=new Bg(l),d.distance=u;break;case"spot":d=new Fg(l),d.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,d.angle=c.spot.outerConeAngle,d.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,d.target.position.set(0,0,-1),d.add(d.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return d.position.set(0,0,0),d.decay=2,bn(d,c),c.intensity!==void 0&&(d.intensity=c.intensity),d.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(d),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,a=n.json.nodes[e],o=(a.extensions&&a.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return n._getNodeRef(t.cache,o,c)})}}class e_{constructor(){this.name=Ve.KHR_MATERIALS_UNLIT}getMaterialType(){return gn}extendParams(e,t,n){const i=[];e.color=new Re(1,1,1),e.opacity=1;const a=t.pbrMetallicRoughness;if(a){if(Array.isArray(a.baseColorFactor)){const s=a.baseColorFactor;e.color.setRGB(s[0],s[1],s[2],_t),e.opacity=s[3]}a.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",a.baseColorTexture,at))}return Promise.all(i)}}class t_{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const a=i.extensions[this.name].emissiveStrength;return a!==void 0&&(t.emissiveIntensity=a),Promise.resolve()}}class n_{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:In}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const a=[],s=i.extensions[this.name];if(s.clearcoatFactor!==void 0&&(t.clearcoat=s.clearcoatFactor),s.clearcoatTexture!==void 0&&a.push(n.assignTexture(t,"clearcoatMap",s.clearcoatTexture)),s.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=s.clearcoatRoughnessFactor),s.clearcoatRoughnessTexture!==void 0&&a.push(n.assignTexture(t,"clearcoatRoughnessMap",s.clearcoatRoughnessTexture)),s.clearcoatNormalTexture!==void 0&&(a.push(n.assignTexture(t,"clearcoatNormalMap",s.clearcoatNormalTexture)),s.clearcoatNormalTexture.scale!==void 0)){const o=s.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Te(o,o)}return Promise.all(a)}}class i_{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:In}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const a=[],s=i.extensions[this.name];return s.iridescenceFactor!==void 0&&(t.iridescence=s.iridescenceFactor),s.iridescenceTexture!==void 0&&a.push(n.assignTexture(t,"iridescenceMap",s.iridescenceTexture)),s.iridescenceIor!==void 0&&(t.iridescenceIOR=s.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),s.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=s.iridescenceThicknessMinimum),s.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=s.iridescenceThicknessMaximum),s.iridescenceThicknessTexture!==void 0&&a.push(n.assignTexture(t,"iridescenceThicknessMap",s.iridescenceThicknessTexture)),Promise.all(a)}}class r_{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:In}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const a=[];t.sheenColor=new Re(0,0,0),t.sheenRoughness=0,t.sheen=1;const s=i.extensions[this.name];if(s.sheenColorFactor!==void 0){const o=s.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],_t)}return s.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=s.sheenRoughnessFactor),s.sheenColorTexture!==void 0&&a.push(n.assignTexture(t,"sheenColorMap",s.sheenColorTexture,at)),s.sheenRoughnessTexture!==void 0&&a.push(n.assignTexture(t,"sheenRoughnessMap",s.sheenRoughnessTexture)),Promise.all(a)}}class a_{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:In}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const a=[],s=i.extensions[this.name];return s.transmissionFactor!==void 0&&(t.transmission=s.transmissionFactor),s.transmissionTexture!==void 0&&a.push(n.assignTexture(t,"transmissionMap",s.transmissionTexture)),Promise.all(a)}}class s_{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:In}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const a=[],s=i.extensions[this.name];t.thickness=s.thicknessFactor!==void 0?s.thicknessFactor:0,s.thicknessTexture!==void 0&&a.push(n.assignTexture(t,"thicknessMap",s.thicknessTexture)),t.attenuationDistance=s.attenuationDistance||1/0;const o=s.attenuationColor||[1,1,1];return t.attenuationColor=new Re().setRGB(o[0],o[1],o[2],_t),Promise.all(a)}}class o_{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:In}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const a=i.extensions[this.name];return t.ior=a.ior!==void 0?a.ior:1.5,Promise.resolve()}}class c_{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:In}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const a=[],s=i.extensions[this.name];t.specularIntensity=s.specularFactor!==void 0?s.specularFactor:1,s.specularTexture!==void 0&&a.push(n.assignTexture(t,"specularIntensityMap",s.specularTexture));const o=s.specularColorFactor||[1,1,1];return t.specularColor=new Re().setRGB(o[0],o[1],o[2],_t),s.specularColorTexture!==void 0&&a.push(n.assignTexture(t,"specularColorMap",s.specularColorTexture,at)),Promise.all(a)}}class d_{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:In}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const a=[],s=i.extensions[this.name];return s.anisotropyStrength!==void 0&&(t.anisotropy=s.anisotropyStrength),s.anisotropyRotation!==void 0&&(t.anisotropyRotation=s.anisotropyRotation),s.anisotropyTexture!==void 0&&a.push(n.assignTexture(t,"anisotropyMap",s.anisotropyTexture)),Promise.all(a)}}class l_{constructor(e){this.parser=e,this.name=Ve.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const a=i.extensions[this.name],s=t.options.ktx2Loader;if(!s){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,a.source,s)}}class u_{constructor(e){this.parser=e,this.name=Ve.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,a=i.textures[e];if(!a.extensions||!a.extensions[t])return null;const s=a.extensions[t],o=i.images[s.source];let c=n.textureLoader;if(o.uri){const d=n.options.manager.getHandler(o.uri);d!==null&&(c=d)}return this.detectSupport().then(function(d){if(d)return n.loadTextureImage(e,s.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class h_{constructor(e){this.parser=e,this.name=Ve.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,a=i.textures[e];if(!a.extensions||!a.extensions[t])return null;const s=a.extensions[t],o=i.images[s.source];let c=n.textureLoader;if(o.uri){const d=n.options.manager.getHandler(o.uri);d!==null&&(c=d)}return this.detectSupport().then(function(d){if(d)return n.loadTextureImage(e,s.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class f_{constructor(e){this.name=Ve.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],a=this.parser.getDependency("buffer",i.buffer),s=this.parser.options.meshoptDecoder;if(!s||!s.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return a.then(function(o){const c=i.byteOffset||0,d=i.byteLength||0,l=i.count,u=i.byteStride,h=new Uint8Array(o,c,d);return s.decodeGltfBufferAsync?s.decodeGltfBufferAsync(l,u,h,i.mode,i.filter).then(function(p){return p.buffer}):s.ready.then(function(){const p=new ArrayBuffer(l*u);return s.decodeGltfBuffer(new Uint8Array(p),l,u,h,i.mode,i.filter),p})})}else return null}}class m_{constructor(e){this.name=Ve.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const d of i.primitives)if(d.mode!==It.TRIANGLES&&d.mode!==It.TRIANGLE_STRIP&&d.mode!==It.TRIANGLE_FAN&&d.mode!==void 0)return null;const s=n.extensions[this.name].attributes,o=[],c={};for(const d in s)o.push(this.parser.getDependency("accessor",s[d]).then(l=>(c[d]=l,c[d])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(d=>{const l=d.pop(),u=l.isGroup?l.children:[l],h=d[0].count,p=[];for(const g of u){const _=new Fe,f=new w,m=new $t,y=new w(1,1,1),v=new _g(g.geometry,g.material,h);for(let T=0;T<h;T++)c.TRANSLATION&&f.fromBufferAttribute(c.TRANSLATION,T),c.ROTATION&&m.fromBufferAttribute(c.ROTATION,T),c.SCALE&&y.fromBufferAttribute(c.SCALE,T),v.setMatrixAt(T,_.compose(f,m,y));for(const T in c)T!=="TRANSLATION"&&T!=="ROTATION"&&T!=="SCALE"&&g.geometry.setAttribute(T,c[T]);nt.prototype.copy.call(v,g),this.parser.assignFinalMaterial(v),p.push(v)}return l.isGroup?(l.clear(),l.add(...p),l):p[0]}))}}const bd="glTF",$i=12,Mc={JSON:1313821514,BIN:5130562};class p_{constructor(e){this.name=Ve.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,$i),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==bd)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-$i,a=new DataView(e,$i);let s=0;for(;s<i;){const o=a.getUint32(s,!0);s+=4;const c=a.getUint32(s,!0);if(s+=4,c===Mc.JSON){const d=new Uint8Array(e,$i+s,o);this.content=n.decode(d)}else if(c===Mc.BIN){const d=$i+s;this.body=e.slice(d,d+o)}s+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class g_{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ve.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,a=e.extensions[this.name].bufferView,s=e.extensions[this.name].attributes,o={},c={},d={};for(const l in s){const u=is[l]||l.toLowerCase();o[u]=s[l]}for(const l in e.attributes){const u=is[l]||l.toLowerCase();if(s[l]!==void 0){const h=n.accessors[e.attributes[l]],p=wi[h.componentType];d[u]=p.name,c[u]=h.normalized===!0}}return t.getDependency("bufferView",a).then(function(l){return new Promise(function(u){i.decodeDracoFile(l,function(h){for(const p in h.attributes){const g=h.attributes[p],_=c[p];_!==void 0&&(g.normalized=_)}u(h)},o,d)})})}}class __{constructor(){this.name=Ve.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class S_{constructor(){this.name=Ve.KHR_MESH_QUANTIZATION}}class Cd extends or{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,a=e*i*3+i;for(let s=0;s!==i;s++)t[s]=n[a+s];return t}interpolate_(e,t,n,i){const a=this.resultBuffer,s=this.sampleValues,o=this.valueSize,c=o*2,d=o*3,l=i-t,u=(n-t)/l,h=u*u,p=h*u,g=e*d,_=g-d,f=-2*p+3*h,m=p-h,y=1-f,v=m-h+u;for(let T=0;T!==o;T++){const L=s[_+T+o],C=s[_+T+c]*l,A=s[g+T+o],z=s[g+T]*l;a[T]=y*L+v*C+f*A+m*z}return a}}const x_=new $t;class v_ extends Cd{interpolate_(e,t,n,i){const a=super.interpolate_(e,t,n,i);return x_.fromArray(a).normalize().toArray(a),a}}const It={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},wi={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},yc={9728:ft,9729:Et,9984:Ka,9985:Br,9986:yi,9987:mn},Tc={33071:Ut,33648:zr,10497:Di},Oa={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},is={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},An={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},E_={CUBICSPLINE:void 0,LINEAR:Ii,STEP:nr},Ga={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function M_(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new ms({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Sn})),r.DefaultMaterial}function zn(r,e,t){for(const n in t.extensions)r[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function bn(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function y_(r,e,t){let n=!1,i=!1,a=!1;for(let d=0,l=e.length;d<l;d++){const u=e[d];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(a=!0),n&&i&&a)break}if(!n&&!i&&!a)return Promise.resolve(r);const s=[],o=[],c=[];for(let d=0,l=e.length;d<l;d++){const u=e[d];if(n){const h=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):r.attributes.position;s.push(h)}if(i){const h=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):r.attributes.normal;o.push(h)}if(a){const h=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):r.attributes.color;c.push(h)}}return Promise.all([Promise.all(s),Promise.all(o),Promise.all(c)]).then(function(d){const l=d[0],u=d[1],h=d[2];return n&&(r.morphAttributes.position=l),i&&(r.morphAttributes.normal=u),a&&(r.morphAttributes.color=h),r.morphTargetsRelative=!0,r})}function T_(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)r.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function A_(r){let e;const t=r.extensions&&r.extensions[Ve.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Ha(t.attributes):e=r.indices+":"+Ha(r.attributes)+":"+r.mode,r.targets!==void 0)for(let n=0,i=r.targets.length;n<i;n++)e+=":"+Ha(r.targets[n]);return e}function Ha(r){let e="";const t=Object.keys(r).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+r[t[n]]+";";return e}function rs(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function k_(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const b_=new Fe;class C_{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new $g,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=!1,a=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,a=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||i&&a<98?this.textureLoader=new Ng(this.options.manager):this.textureLoader=new Hg(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new kd(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,a=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(s){return s._markDefs&&s._markDefs()}),Promise.all(this._invokeAll(function(s){return s.beforeRoot&&s.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(s){const o={scene:s[0][i.scene||0],scenes:s[0],animations:s[1],cameras:s[2],asset:i.asset,parser:n,userData:{}};zn(a,o,i),bn(o,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,a=t.length;i<a;i++){const s=t[i].joints;for(let o=0,c=s.length;o<c;o++)e[s[o]].isBone=!0}for(let i=0,a=e.length;i<a;i++){const s=e[i];s.mesh!==void 0&&(this._addNodeRef(this.meshCache,s.mesh),s.skin!==void 0&&(n[s.mesh].isSkinnedMesh=!0)),s.camera!==void 0&&this._addNodeRef(this.cameraCache,s.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),a=(s,o)=>{const c=this.associations.get(s);c!=null&&this.associations.set(o,c);for(const[d,l]of s.children.entries())a(l,o.children[d])};return a(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const a=e(t[i]);a&&n.push(a)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(a){return a.loadNode&&a.loadNode(t)});break;case"mesh":i=this._invokeOne(function(a){return a.loadMesh&&a.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(a){return a.loadBufferView&&a.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(a){return a.loadMaterial&&a.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(a){return a.loadTexture&&a.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(a){return a.loadAnimation&&a.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(a){return a!=this&&a.getDependency&&a.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(a,s){return n.getDependency(e,s)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ve.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(a,s){n.load(ns.resolveURL(t.uri,i.path),a,void 0,function(){s(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,a=t.byteOffset||0;return n.slice(a,a+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const s=Oa[i.type],o=wi[i.componentType],c=i.normalized===!0,d=new o(i.count*s);return Promise.resolve(new kt(d,s,c))}const a=[];return i.bufferView!==void 0?a.push(this.getDependency("bufferView",i.bufferView)):a.push(null),i.sparse!==void 0&&(a.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),a.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(a).then(function(s){const o=s[0],c=Oa[i.type],d=wi[i.componentType],l=d.BYTES_PER_ELEMENT,u=l*c,h=i.byteOffset||0,p=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let _,f;if(p&&p!==u){const m=Math.floor(h/p),y="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+m+":"+i.count;let v=t.cache.get(y);v||(_=new d(o,m*p,i.count*p/l),v=new ug(_,p/l),t.cache.add(y,v)),f=new us(v,c,h%p/l,g)}else o===null?_=new d(i.count*c):_=new d(o,h,i.count*c),f=new kt(_,c,g);if(i.sparse!==void 0){const m=Oa.SCALAR,y=wi[i.sparse.indices.componentType],v=i.sparse.indices.byteOffset||0,T=i.sparse.values.byteOffset||0,L=new y(s[1],v,i.sparse.count*m),C=new d(s[2],T,i.sparse.count*c);o!==null&&(f=new kt(f.array.slice(),f.itemSize,f.normalized));for(let A=0,z=L.length;A<z;A++){const re=L[A];if(f.setX(re,C[A*c]),c>=2&&f.setY(re,C[A*c+1]),c>=3&&f.setZ(re,C[A*c+2]),c>=4&&f.setW(re,C[A*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return f})}loadTexture(e){const t=this.json,n=this.options,a=t.textures[e].source,s=t.images[a];let o=this.textureLoader;if(s.uri){const c=n.manager.getHandler(s.uri);c!==null&&(o=c)}return this.loadTextureImage(e,a,o)}loadTextureImage(e,t,n){const i=this,a=this.json,s=a.textures[e],o=a.images[t],c=(o.uri||o.bufferView)+":"+s.sampler;if(this.textureCache[c])return this.textureCache[c];const d=this.loadImageSource(t,n).then(function(l){l.flipY=!1,l.name=s.name||o.name||"",l.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(l.name=o.uri);const h=(a.samplers||{})[s.sampler]||{};return l.magFilter=yc[h.magFilter]||Et,l.minFilter=yc[h.minFilter]||mn,l.wrapS=Tc[h.wrapS]||Di,l.wrapT=Tc[h.wrapT]||Di,i.associations.set(l,{textures:e}),l}).catch(function(){return null});return this.textureCache[c]=d,d}loadImageSource(e,t){const n=this,i=this.json,a=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const s=i.images[e],o=self.URL||self.webkitURL;let c=s.uri||"",d=!1;if(s.bufferView!==void 0)c=n.getDependency("bufferView",s.bufferView).then(function(u){d=!0;const h=new Blob([u],{type:s.mimeType});return c=o.createObjectURL(h),c});else if(s.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const l=Promise.resolve(c).then(function(u){return new Promise(function(h,p){let g=h;t.isImageBitmapLoader===!0&&(g=function(_){const f=new mt(_);f.needsUpdate=!0,h(f)}),t.load(ns.resolveURL(u,a.path),g,void 0,p)})}).then(function(u){return d===!0&&o.revokeObjectURL(c),u.userData.mimeType=s.mimeType||k_(s.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[e]=l,l}assignTexture(e,t,n,i){const a=this;return this.getDependency("texture",n.index).then(function(s){if(!s)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(s=s.clone(),s.channel=n.texCoord),a.extensions[Ve.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[Ve.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const c=a.associations.get(s);s=a.extensions[Ve.KHR_TEXTURE_TRANSFORM].extendTexture(s,o),a.associations.set(s,c)}}return i!==void 0&&(s.colorSpace=i),e[t]=s,s})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,a=t.attributes.color!==void 0,s=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let c=this.cache.get(o);c||(c=new yd,Kt.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(o,c)),n=c}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let c=this.cache.get(o);c||(c=new Md,Kt.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(o,c)),n=c}if(i||a||s){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),a&&(o+="vertex-colors:"),s&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=n.clone(),a&&(c.vertexColors=!0),s&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return ms}loadMaterial(e){const t=this,n=this.json,i=this.extensions,a=n.materials[e];let s;const o={},c=a.extensions||{},d=[];if(c[Ve.KHR_MATERIALS_UNLIT]){const u=i[Ve.KHR_MATERIALS_UNLIT];s=u.getMaterialType(),d.push(u.extendParams(o,a,t))}else{const u=a.pbrMetallicRoughness||{};if(o.color=new Re(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){const h=u.baseColorFactor;o.color.setRGB(h[0],h[1],h[2],_t),o.opacity=h[3]}u.baseColorTexture!==void 0&&d.push(t.assignTexture(o,"map",u.baseColorTexture,at)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(d.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),d.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),s=this._invokeOne(function(h){return h.getMaterialType&&h.getMaterialType(e)}),d.push(Promise.all(this._invokeAll(function(h){return h.extendMaterialParams&&h.extendMaterialParams(e,o)})))}a.doubleSided===!0&&(o.side=Ft);const l=a.alphaMode||Ga.OPAQUE;if(l===Ga.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,l===Ga.MASK&&(o.alphaTest=a.alphaCutoff!==void 0?a.alphaCutoff:.5)),a.normalTexture!==void 0&&s!==gn&&(d.push(t.assignTexture(o,"normalMap",a.normalTexture)),o.normalScale=new Te(1,1),a.normalTexture.scale!==void 0)){const u=a.normalTexture.scale;o.normalScale.set(u,u)}if(a.occlusionTexture!==void 0&&s!==gn&&(d.push(t.assignTexture(o,"aoMap",a.occlusionTexture)),a.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=a.occlusionTexture.strength)),a.emissiveFactor!==void 0&&s!==gn){const u=a.emissiveFactor;o.emissive=new Re().setRGB(u[0],u[1],u[2],_t)}return a.emissiveTexture!==void 0&&s!==gn&&d.push(t.assignTexture(o,"emissiveMap",a.emissiveTexture,at)),Promise.all(d).then(function(){const u=new s(o);return a.name&&(u.name=a.name),bn(u,a),t.associations.set(u,{materials:e}),a.extensions&&zn(i,u,a),u})}createUniqueName(e){const t=Ze.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function a(o){return n[Ve.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return Ac(c,o,t)})}const s=[];for(let o=0,c=e.length;o<c;o++){const d=e[o],l=A_(d),u=i[l];if(u)s.push(u.promise);else{let h;d.extensions&&d.extensions[Ve.KHR_DRACO_MESH_COMPRESSION]?h=a(d):h=Ac(new nn,d,t),i[l]={primitive:d,promise:h},s.push(h)}}return Promise.all(s)}loadMesh(e){const t=this,n=this.json,i=this.extensions,a=n.meshes[e],s=a.primitives,o=[];for(let c=0,d=s.length;c<d;c++){const l=s[c].material===void 0?M_(this.cache):this.getDependency("material",s[c].material);o.push(l)}return o.push(t.loadGeometries(s)),Promise.all(o).then(function(c){const d=c.slice(0,c.length-1),l=c[c.length-1],u=[];for(let p=0,g=l.length;p<g;p++){const _=l[p],f=s[p];let m;const y=d[p];if(f.mode===It.TRIANGLES||f.mode===It.TRIANGLE_STRIP||f.mode===It.TRIANGLE_FAN||f.mode===void 0)m=a.isSkinnedMesh===!0?new fg(_,y):new At(_,y),m.isSkinnedMesh===!0&&m.normalizeSkinWeights(),f.mode===It.TRIANGLE_STRIP?m.geometry=Ec(m.geometry,Zc):f.mode===It.TRIANGLE_FAN&&(m.geometry=Ec(m.geometry,Qa));else if(f.mode===It.LINES)m=new Sg(_,y);else if(f.mode===It.LINE_STRIP)m=new fs(_,y);else if(f.mode===It.LINE_LOOP)m=new xg(_,y);else if(f.mode===It.POINTS)m=new vg(_,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+f.mode);Object.keys(m.geometry.morphAttributes).length>0&&T_(m,a),m.name=t.createUniqueName(a.name||"mesh_"+e),bn(m,a),f.extensions&&zn(i,m,f),t.assignFinalMaterial(m),u.push(m)}for(let p=0,g=u.length;p<g;p++)t.associations.set(u[p],{meshes:e,primitives:p});if(u.length===1)return a.extensions&&zn(i,u[0],a),u[0];const h=new Yn;a.extensions&&zn(i,h,a),t.associations.set(h,{meshes:e});for(let p=0,g=u.length;p<g;p++)h.add(u[p]);return h})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new bt(td.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new $r(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),bn(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,a=t.joints.length;i<a;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const a=i.pop(),s=i,o=[],c=[];for(let d=0,l=s.length;d<l;d++){const u=s[d];if(u){o.push(u);const h=new Fe;a!==null&&h.fromArray(a.array,d*16),c.push(h)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[d])}return new hs(o,c)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],a=i.name?i.name:"animation_"+e,s=[],o=[],c=[],d=[],l=[];for(let u=0,h=i.channels.length;u<h;u++){const p=i.channels[u],g=i.samplers[p.sampler],_=p.target,f=_.node,m=i.parameters!==void 0?i.parameters[g.input]:g.input,y=i.parameters!==void 0?i.parameters[g.output]:g.output;_.node!==void 0&&(s.push(this.getDependency("node",f)),o.push(this.getDependency("accessor",m)),c.push(this.getDependency("accessor",y)),d.push(g),l.push(_))}return Promise.all([Promise.all(s),Promise.all(o),Promise.all(c),Promise.all(d),Promise.all(l)]).then(function(u){const h=u[0],p=u[1],g=u[2],_=u[3],f=u[4],m=[];for(let y=0,v=h.length;y<v;y++){const T=h[y],L=p[y],C=g[y],A=_[y],z=f[y];if(T===void 0)continue;T.updateMatrix&&T.updateMatrix();const re=n._createAnimationTracks(T,L,C,A,z);if(re)for(let x=0;x<re.length;x++)m.push(re[x])}return new bg(a,void 0,m)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(a){const s=n._getNodeRef(n.meshCache,i.mesh,a);return i.weights!==void 0&&s.traverse(function(o){if(o.isMesh)for(let c=0,d=i.weights.length;c<d;c++)o.morphTargetInfluences[c]=i.weights[c]}),s})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],a=n._loadNodeShallow(e),s=[],o=i.children||[];for(let d=0,l=o.length;d<l;d++)s.push(n.getDependency("node",o[d]));const c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([a,Promise.all(s),c]).then(function(d){const l=d[0],u=d[1],h=d[2];h!==null&&l.traverse(function(p){p.isSkinnedMesh&&p.bind(h,b_)});for(let p=0,g=u.length;p<g;p++)l.add(u[p]);return l})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const a=t.nodes[e],s=a.name?i.createUniqueName(a.name):"",o=[],c=i._invokeOne(function(d){return d.createNodeMesh&&d.createNodeMesh(e)});return c&&o.push(c),a.camera!==void 0&&o.push(i.getDependency("camera",a.camera).then(function(d){return i._getNodeRef(i.cameraCache,a.camera,d)})),i._invokeAll(function(d){return d.createNodeAttachment&&d.createNodeAttachment(e)}).forEach(function(d){o.push(d)}),this.nodeCache[e]=Promise.all(o).then(function(d){let l;if(a.isBone===!0?l=new Ed:d.length>1?l=new Yn:d.length===1?l=d[0]:l=new nt,l!==d[0])for(let u=0,h=d.length;u<h;u++)l.add(d[u]);if(a.name&&(l.userData.name=a.name,l.name=s),bn(l,a),a.extensions&&zn(n,l,a),a.matrix!==void 0){const u=new Fe;u.fromArray(a.matrix),l.applyMatrix4(u)}else a.translation!==void 0&&l.position.fromArray(a.translation),a.rotation!==void 0&&l.quaternion.fromArray(a.rotation),a.scale!==void 0&&l.scale.fromArray(a.scale);return i.associations.has(l)||i.associations.set(l,{}),i.associations.get(l).nodes=e,l}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,a=new Yn;n.name&&(a.name=i.createUniqueName(n.name)),bn(a,n),n.extensions&&zn(t,a,n);const s=n.nodes||[],o=[];for(let c=0,d=s.length;c<d;c++)o.push(i.getDependency("node",s[c]));return Promise.all(o).then(function(c){for(let l=0,u=c.length;l<u;l++)a.add(c[l]);const d=l=>{const u=new Map;for(const[h,p]of i.associations)(h instanceof Kt||h instanceof mt)&&u.set(h,p);return l.traverse(h=>{const p=i.associations.get(h);p!=null&&u.set(h,p)}),u};return i.associations=d(a),a})}_createAnimationTracks(e,t,n,i,a){const s=[],o=e.name?e.name:e.uuid,c=[];An[a.path]===An.weights?e.traverse(function(h){h.morphTargetInfluences&&c.push(h.name?h.name:h.uuid)}):c.push(o);let d;switch(An[a.path]){case An.weights:d=Bi;break;case An.rotation:d=ti;break;case An.position:case An.scale:d=Oi;break;default:switch(n.itemSize){case 1:d=Bi;break;case 2:case 3:default:d=Oi;break}break}const l=i.interpolation!==void 0?E_[i.interpolation]:Ii,u=this._getArrayFromAccessor(n);for(let h=0,p=c.length;h<p;h++){const g=new d(c[h]+"."+An[a.path],t.array,u,l);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),s.push(g)}return s}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=rs(t.constructor),i=new Float32Array(t.length);for(let a=0,s=t.length;a<s;a++)i[a]=t[a]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof ti?v_:Cd;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function R_(r,e,t){const n=e.attributes,i=new en;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],c=o.min,d=o.max;if(c!==void 0&&d!==void 0){if(i.set(new w(c[0],c[1],c[2]),new w(d[0],d[1],d[2])),o.normalized){const l=rs(wi[o.componentType]);i.min.multiplyScalar(l),i.max.multiplyScalar(l)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const a=e.targets;if(a!==void 0){const o=new w,c=new w;for(let d=0,l=a.length;d<l;d++){const u=a[d];if(u.POSITION!==void 0){const h=t.json.accessors[u.POSITION],p=h.min,g=h.max;if(p!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(p[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(p[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(p[2]),Math.abs(g[2]))),h.normalized){const _=rs(wi[h.componentType]);c.multiplyScalar(_)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}r.boundingBox=i;const s=new tn;i.getCenter(s.center),s.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=s}function Ac(r,e,t){const n=e.attributes,i=[];function a(s,o){return t.getDependency("accessor",s).then(function(c){r.setAttribute(o,c)})}for(const s in n){const o=is[s]||s.toLowerCase();o in r.attributes||i.push(a(n[s],o))}if(e.indices!==void 0&&!r.index){const s=t.getDependency("accessor",e.indices).then(function(o){r.setIndex(o)});i.push(s)}return Ye.workingColorSpace!==_t&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Ye.workingColorSpace}" not supported.`),bn(r,e),R_(r,e,t),Promise.all(i).then(function(){return e.targets!==void 0?y_(r,e.targets,t):r})}const kc={type:"change"},za={type:"start"},bc={type:"end"},Ur=new ar,Cc=new kn,w_=Math.cos(70*td.DEG2RAD);class L_ extends ii{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new w,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:fn.ROTATE,MIDDLE:fn.DOLLY,RIGHT:fn.PAN},this.touches={ONE:ri.ROTATE,TWO:ri.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(R){R.addEventListener("keydown",$),this._domElementKeyEvents=R},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",$),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(kc),n.update(),a=i.NONE},this.update=function(){const R=new w,Q=new $t().setFromUnitVectors(e.up,new w(0,1,0)),de=Q.clone().invert(),ae=new w,xe=new $t,He=new w,Xe=2*Math.PI;return function(Ke=null){const k=n.object.position;R.copy(k).sub(n.target),R.applyQuaternion(Q),o.setFromVector3(R),n.autoRotate&&a===i.NONE&&b(re(Ke)),n.enableDamping?(o.theta+=c.theta*n.dampingFactor,o.phi+=c.phi*n.dampingFactor):(o.theta+=c.theta,o.phi+=c.phi);let J=n.minAzimuthAngle,ee=n.maxAzimuthAngle;isFinite(J)&&isFinite(ee)&&(J<-Math.PI?J+=Xe:J>Math.PI&&(J-=Xe),ee<-Math.PI?ee+=Xe:ee>Math.PI&&(ee-=Xe),J<=ee?o.theta=Math.max(J,Math.min(ee,o.theta)):o.theta=o.theta>(J+ee)/2?Math.max(J,o.theta):Math.min(ee,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(l,n.dampingFactor):n.target.add(l),n.zoomToCursor&&C||n.object.isOrthographicCamera?o.radius=X(o.radius):o.radius=X(o.radius*d),R.setFromSpherical(o),R.applyQuaternion(de),k.copy(n.target).add(R),n.object.lookAt(n.target),n.enableDamping===!0?(c.theta*=1-n.dampingFactor,c.phi*=1-n.dampingFactor,l.multiplyScalar(1-n.dampingFactor)):(c.set(0,0,0),l.set(0,0,0));let fe=!1;if(n.zoomToCursor&&C){let ge=null;if(n.object.isPerspectiveCamera){const ze=R.length();ge=X(ze*d);const je=ze-ge;n.object.position.addScaledVector(T,je),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){const ze=new w(L.x,L.y,0);ze.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/d)),n.object.updateProjectionMatrix(),fe=!0;const je=new w(L.x,L.y,0);je.unproject(n.object),n.object.position.sub(je).add(ze),n.object.updateMatrixWorld(),ge=R.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;ge!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(ge).add(n.object.position):(Ur.origin.copy(n.object.position),Ur.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(Ur.direction))<w_?e.lookAt(n.target):(Cc.setFromNormalAndCoplanarPoint(n.object.up,n.target),Ur.intersectPlane(Cc,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/d)),n.object.updateProjectionMatrix(),fe=!0);return d=1,C=!1,fe||ae.distanceToSquared(n.object.position)>s||8*(1-xe.dot(n.object.quaternion))>s||He.distanceToSquared(n.target)>0?(n.dispatchEvent(kc),ae.copy(n.object.position),xe.copy(n.object.quaternion),He.copy(n.target),fe=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",he),n.domElement.removeEventListener("pointerdown",Le),n.domElement.removeEventListener("pointercancel",S),n.domElement.removeEventListener("wheel",Y),n.domElement.removeEventListener("pointermove",M),n.domElement.removeEventListener("pointerup",S),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",$),n._domElementKeyEvents=null)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let a=i.NONE;const s=1e-6,o=new vc,c=new vc;let d=1;const l=new w,u=new Te,h=new Te,p=new Te,g=new Te,_=new Te,f=new Te,m=new Te,y=new Te,v=new Te,T=new w,L=new Te;let C=!1;const A=[],z={};function re(R){return R!==null?2*Math.PI/60*n.autoRotateSpeed*R:2*Math.PI/60/60*n.autoRotateSpeed}function x(){return Math.pow(.95,n.zoomSpeed)}function b(R){c.theta-=R}function W(R){c.phi-=R}const ne=function(){const R=new w;return function(de,ae){R.setFromMatrixColumn(ae,0),R.multiplyScalar(-de),l.add(R)}}(),P=function(){const R=new w;return function(de,ae){n.screenSpacePanning===!0?R.setFromMatrixColumn(ae,1):(R.setFromMatrixColumn(ae,0),R.crossVectors(n.object.up,R)),R.multiplyScalar(de),l.add(R)}}(),G=function(){const R=new w;return function(de,ae){const xe=n.domElement;if(n.object.isPerspectiveCamera){const He=n.object.position;R.copy(He).sub(n.target);let Xe=R.length();Xe*=Math.tan(n.object.fov/2*Math.PI/180),ne(2*de*Xe/xe.clientHeight,n.object.matrix),P(2*ae*Xe/xe.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(ne(de*(n.object.right-n.object.left)/n.object.zoom/xe.clientWidth,n.object.matrix),P(ae*(n.object.top-n.object.bottom)/n.object.zoom/xe.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function O(R){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?d/=R:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function j(R){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?d*=R:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function V(R){if(!n.zoomToCursor)return;C=!0;const Q=n.domElement.getBoundingClientRect(),de=R.clientX-Q.left,ae=R.clientY-Q.top,xe=Q.width,He=Q.height;L.x=de/xe*2-1,L.y=-(ae/He)*2+1,T.set(L.x,L.y,1).unproject(n.object).sub(n.object.position).normalize()}function X(R){return Math.max(n.minDistance,Math.min(n.maxDistance,R))}function q(R){u.set(R.clientX,R.clientY)}function ie(R){V(R),m.set(R.clientX,R.clientY)}function oe(R){g.set(R.clientX,R.clientY)}function ke(R){h.set(R.clientX,R.clientY),p.subVectors(h,u).multiplyScalar(n.rotateSpeed);const Q=n.domElement;b(2*Math.PI*p.x/Q.clientHeight),W(2*Math.PI*p.y/Q.clientHeight),u.copy(h),n.update()}function H(R){y.set(R.clientX,R.clientY),v.subVectors(y,m),v.y>0?O(x()):v.y<0&&j(x()),m.copy(y),n.update()}function Z(R){_.set(R.clientX,R.clientY),f.subVectors(_,g).multiplyScalar(n.panSpeed),G(f.x,f.y),g.copy(_),n.update()}function ue(R){V(R),R.deltaY<0?j(x()):R.deltaY>0&&O(x()),n.update()}function Ee(R){let Q=!1;switch(R.code){case n.keys.UP:R.ctrlKey||R.metaKey||R.shiftKey?W(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):G(0,n.keyPanSpeed),Q=!0;break;case n.keys.BOTTOM:R.ctrlKey||R.metaKey||R.shiftKey?W(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):G(0,-n.keyPanSpeed),Q=!0;break;case n.keys.LEFT:R.ctrlKey||R.metaKey||R.shiftKey?b(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):G(n.keyPanSpeed,0),Q=!0;break;case n.keys.RIGHT:R.ctrlKey||R.metaKey||R.shiftKey?b(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):G(-n.keyPanSpeed,0),Q=!0;break}Q&&(R.preventDefault(),n.update())}function Me(){if(A.length===1)u.set(A[0].pageX,A[0].pageY);else{const R=.5*(A[0].pageX+A[1].pageX),Q=.5*(A[0].pageY+A[1].pageY);u.set(R,Q)}}function me(){if(A.length===1)g.set(A[0].pageX,A[0].pageY);else{const R=.5*(A[0].pageX+A[1].pageX),Q=.5*(A[0].pageY+A[1].pageY);g.set(R,Q)}}function We(){const R=A[0].pageX-A[1].pageX,Q=A[0].pageY-A[1].pageY,de=Math.sqrt(R*R+Q*Q);m.set(0,de)}function we(){n.enableZoom&&We(),n.enablePan&&me()}function N(){n.enableZoom&&We(),n.enableRotate&&Me()}function ot(R){if(A.length==1)h.set(R.pageX,R.pageY);else{const de=qe(R),ae=.5*(R.pageX+de.x),xe=.5*(R.pageY+de.y);h.set(ae,xe)}p.subVectors(h,u).multiplyScalar(n.rotateSpeed);const Q=n.domElement;b(2*Math.PI*p.x/Q.clientHeight),W(2*Math.PI*p.y/Q.clientHeight),u.copy(h)}function ve(R){if(A.length===1)_.set(R.pageX,R.pageY);else{const Q=qe(R),de=.5*(R.pageX+Q.x),ae=.5*(R.pageY+Q.y);_.set(de,ae)}f.subVectors(_,g).multiplyScalar(n.panSpeed),G(f.x,f.y),g.copy(_)}function be(R){const Q=qe(R),de=R.pageX-Q.x,ae=R.pageY-Q.y,xe=Math.sqrt(de*de+ae*ae);y.set(0,xe),v.set(0,Math.pow(y.y/m.y,n.zoomSpeed)),O(v.y),m.copy(y)}function _e(R){n.enableZoom&&be(R),n.enablePan&&ve(R)}function et(R){n.enableZoom&&be(R),n.enableRotate&&ot(R)}function Le(R){n.enabled!==!1&&(A.length===0&&(n.domElement.setPointerCapture(R.pointerId),n.domElement.addEventListener("pointermove",M),n.domElement.addEventListener("pointerup",S)),ye(R),R.pointerType==="touch"?pe(R):I(R))}function M(R){n.enabled!==!1&&(R.pointerType==="touch"?ce(R):te(R))}function S(R){De(R),A.length===0&&(n.domElement.releasePointerCapture(R.pointerId),n.domElement.removeEventListener("pointermove",M),n.domElement.removeEventListener("pointerup",S)),n.dispatchEvent(bc),a=i.NONE}function I(R){let Q;switch(R.button){case 0:Q=n.mouseButtons.LEFT;break;case 1:Q=n.mouseButtons.MIDDLE;break;case 2:Q=n.mouseButtons.RIGHT;break;default:Q=-1}switch(Q){case fn.DOLLY:if(n.enableZoom===!1)return;ie(R),a=i.DOLLY;break;case fn.ROTATE:if(R.ctrlKey||R.metaKey||R.shiftKey){if(n.enablePan===!1)return;oe(R),a=i.PAN}else{if(n.enableRotate===!1)return;q(R),a=i.ROTATE}break;case fn.PAN:if(R.ctrlKey||R.metaKey||R.shiftKey){if(n.enableRotate===!1)return;q(R),a=i.ROTATE}else{if(n.enablePan===!1)return;oe(R),a=i.PAN}break;default:a=i.NONE}a!==i.NONE&&n.dispatchEvent(za)}function te(R){switch(a){case i.ROTATE:if(n.enableRotate===!1)return;ke(R);break;case i.DOLLY:if(n.enableZoom===!1)return;H(R);break;case i.PAN:if(n.enablePan===!1)return;Z(R);break}}function Y(R){n.enabled===!1||n.enableZoom===!1||a!==i.NONE||(R.preventDefault(),n.dispatchEvent(za),ue(R),n.dispatchEvent(bc))}function $(R){n.enabled===!1||n.enablePan===!1||Ee(R)}function pe(R){switch(K(R),A.length){case 1:switch(n.touches.ONE){case ri.ROTATE:if(n.enableRotate===!1)return;Me(),a=i.TOUCH_ROTATE;break;case ri.PAN:if(n.enablePan===!1)return;me(),a=i.TOUCH_PAN;break;default:a=i.NONE}break;case 2:switch(n.touches.TWO){case ri.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;we(),a=i.TOUCH_DOLLY_PAN;break;case ri.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;N(),a=i.TOUCH_DOLLY_ROTATE;break;default:a=i.NONE}break;default:a=i.NONE}a!==i.NONE&&n.dispatchEvent(za)}function ce(R){switch(K(R),a){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;ot(R),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;ve(R),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;_e(R),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;et(R),n.update();break;default:a=i.NONE}}function he(R){n.enabled!==!1&&R.preventDefault()}function ye(R){A.push(R)}function De(R){delete z[R.pointerId];for(let Q=0;Q<A.length;Q++)if(A[Q].pointerId==R.pointerId){A.splice(Q,1);return}}function K(R){let Q=z[R.pointerId];Q===void 0&&(Q=new Te,z[R.pointerId]=Q),Q.set(R.pageX,R.pageY)}function qe(R){const Q=R.pointerId===A[0].pointerId?A[1]:A[0];return z[Q.pointerId]}n.domElement.addEventListener("contextmenu",he),n.domElement.addEventListener("pointerdown",Le),n.domElement.addEventListener("pointercancel",S),n.domElement.addEventListener("wheel",Y,{passive:!1}),this.update()}}class P_ extends nt{constructor(e=document.createElement("div")){super(),this.isCSS2DObject=!0,this.element=e,this.element.style.position="absolute",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.center=new Te(.5,.5),this.addEventListener("removed",function(){this.traverse(function(t){t.element instanceof Element&&t.element.parentNode!==null&&t.element.parentNode.removeChild(t.element)})})}copy(e,t){return super.copy(e,t),this.element=e.element.cloneNode(!0),this.center=e.center,this}}const Mi=new w,Rc=new Fe,wc=new Fe,Lc=new w,Pc=new w;class D_{constructor(e={}){const t=this;let n,i,a,s;const o={objects:new WeakMap},c=e.element!==void 0?e.element:document.createElement("div");c.style.overflow="hidden",this.domElement=c,this.getSize=function(){return{width:n,height:i}},this.render=function(p,g){p.matrixWorldAutoUpdate===!0&&p.updateMatrixWorld(),g.parent===null&&g.matrixWorldAutoUpdate===!0&&g.updateMatrixWorld(),Rc.copy(g.matrixWorldInverse),wc.multiplyMatrices(g.projectionMatrix,Rc),d(p,p,g),h(p)},this.setSize=function(p,g){n=p,i=g,a=n/2,s=i/2,c.style.width=p+"px",c.style.height=g+"px"};function d(p,g,_){if(p.isCSS2DObject){Mi.setFromMatrixPosition(p.matrixWorld),Mi.applyMatrix4(wc);const f=p.visible===!0&&Mi.z>=-1&&Mi.z<=1&&p.layers.test(_.layers)===!0;if(p.element.style.display=f===!0?"":"none",f===!0){p.onBeforeRender(t,g,_);const y=p.element;y.style.transform="translate("+-100*p.center.x+"%,"+-100*p.center.y+"%)translate("+(Mi.x*a+a)+"px,"+(-Mi.y*s+s)+"px)",y.parentNode!==c&&c.appendChild(y),p.onAfterRender(t,g,_)}const m={distanceToCameraSquared:l(_,p)};o.objects.set(p,m)}for(let f=0,m=p.children.length;f<m;f++)d(p.children[f],g,_)}function l(p,g){return Lc.setFromMatrixPosition(p.matrixWorld),Pc.setFromMatrixPosition(g.matrixWorld),Lc.distanceToSquared(Pc)}function u(p){const g=[];return p.traverse(function(_){_.isCSS2DObject&&g.push(_)}),g}function h(p){const g=u(p).sort(function(f,m){if(f.renderOrder!==m.renderOrder)return m.renderOrder-f.renderOrder;const y=o.objects.get(f).distanceToCameraSquared,v=o.objects.get(m).distanceToCameraSquared;return y-v}),_=g.length;for(let f=0,m=g.length;f<m;f++)g[f].element.style.zIndex=_-f}}}let Qt=0,ni=0;function N_(r){Qt=r}function I_(r){ni=r}const Dc=25;let Cn=[{id:709,deck:7,name:"3rd Class Aft Dining Saloon Section B"},{id:814,deck:7,name:"3rd Class Forward Dining Saloon Section A"},{id:538,deck:7,name:"3rd Class Forward Dining Saloon Section B"},{id:708,deck:5,name:"2nd Class Dining Saloon Section A"},{id:543,deck:5,name:"2nd Class Dining Saloon Section B"},{id:542,deck:5,name:"2nd Class Dining Saloon Section C"},{id:541,deck:5,name:"2nd Class Dining Saloon Section D"},{id:707,deck:5,name:"D-Deck Forward Corridor"},{id:705,deck:6,name:"E-Deck 1st Class Ladies Lavatory"},{id:706,deck:6,name:"E-Deck 1st Class Gents Lavatory"},{id:553,deck:1,name:"Grand Staircase"},{id:554,deck:1,name:"2nd Class Staircase"},{id:555,deck:2,name:"A-Deck Aft Grand Staircase"},{id:556,deck:4,name:"Purser's Office"},{id:557,deck:5,name:"1st Class Dining Saloon Section A"},{id:552,deck:5,name:"1st Class Dining Saloon Section B"},{id:551,deck:5,name:"1st Class Dining Saloon Section C"},{id:561,deck:1,name:"Emergency Cutter Lifeboat No. 2"},{id:560,deck:1,name:"Emergency Cutter Lifeboat No. 1"},{id:559,deck:7,name:"Swimming Bath"},{id:558,deck:3,name:"Café Parisien"},{id:562,deck:1,name:"Lifeboat No. 3"},{id:563,deck:2,name:"Lifeboat No. 4"},{id:564,deck:1,name:"Lifeboat No. 5"},{id:565,deck:1,name:"Lifeboat No. 6"},{id:566,deck:1,name:"Lifeboat No. 7"},{id:567,deck:1,name:"Lifeboat No. 8"},{id:569,deck:1,name:"Lifeboat No. 10"},{id:568,deck:1,name:"Lifeboat No. 9"},{id:570,deck:1,name:"Lifeboat No. 11"},{id:574,deck:1,name:"Lifeboat No. 15"},{id:573,deck:1,name:"Lifeboat No. 14"},{id:579,deck:1,name:"Collapsible Lifeboat D"},{id:578,deck:1,name:"Collapsible Lifeboat C"},{id:577,deck:1,name:"Collapsible Lifeboat B"},{id:576,deck:1,name:"Collapsible Lifeboat A"},{id:575,deck:1,name:"Lifeboat No. 16"},{id:571,deck:1,name:"Lifeboat No. 12"},{id:572,deck:1,name:"Lifeboat No. 13"},{id:588,deck:1,name:"2nd Class Aft Overlooking Promenade"},{id:587,deck:1,name:"2nd Class Port Promenade"},{id:586,deck:1,name:"1st Class Port Aft Promenade"},{id:641,deck:1,name:"1st Class Elevated Promenade"},{id:585,deck:1,name:"Officer's Promenade Port"},{id:584,deck:1,name:"Bridge"},{id:581,deck:10,name:"Turbine Engine Room"},{id:582,deck:16,name:"3rd Class Passenger Entrance"},{id:580,deck:2,name:"Reading and Writing Room"},{id:589,deck:1,name:"2nd Class Starboard Promenade"},{id:887,deck:36,name:"Bridge and Wheelhouse Roof"},{id:888,deck:4,name:"Crow's Nest"},{id:590,deck:1,name:"1st Class Starboard Aft Promenade"},{id:650,deck:2,name:"1st Class Port Smoke Room Promenade"},{id:646,deck:2,name:"1st Class Starboard  Lounge Promenade"},{id:595,deck:2,name:"1st Class Port Palm Court Promenade"},{id:593,deck:2,name:"1st Class Fwd. Port Enclosed Prom."},{id:594,deck:2,name:"1st Class Aft Port Enclosed Prom."},{id:592,deck:2,name:"A-Deck 1st Class Forward Midship   Prom."},{id:591,deck:1,name:"Officer's Promenade Starboard"},{id:647,deck:2,name:"1st Class Starboard Covered Promenade"},{id:645,deck:2,name:"1st Class Forward Starboard  Promenade"},{id:640,deck:1,name:"1st Class Port Forward Promenade"},{id:642,deck:1,name:"2nd Class Port  Elevated Promenade"},{id:643,deck:1,name:"2nd Class Starboard  Elevated Promenade"},{id:644,deck:2,name:"1st Class Forward Port Promenade"},{id:639,deck:1,name:"1st Class Starboard Forward Promenade"},{id:638,deck:1,name:"Gymnasium"},{id:634,deck:10,name:"Boiler Room No. 3"},{id:2502,deck:6,name:"No. 6 Ash Place"},{id:2500,deck:10,name:"No. 3 Ash Ejector & Hoist"},{id:635,deck:10,name:"Boiler Room No. 4"},{id:2499,deck:10,name:"No. 4 Ash Ejector & Hoist"},{id:636,deck:10,name:"Boiler Room No. 5"},{id:637,deck:10,name:"Boiler Room No. 6"},{id:2498,deck:10,name:"No. 6 Ash Ejector & Hoist"},{id:633,deck:10,name:"Boiler Room No. 2"},{id:2501,deck:10,name:"No. 2 Ash Ejector & Hoist"},{id:626,deck:7,name:"F-Deck Grand Staircase"},{id:631,deck:3,name:"À la Carte Restaurant Section D"},{id:546,deck:3,name:"À la Carte Restaurant Section C"},{id:545,deck:3,name:"À la Carte Restaurant Section B"},{id:544,deck:3,name:"À la Carte Restaurant Section A"},{id:630,deck:4,name:"C-Deck Aft Grand Staircase"},{id:632,deck:10,name:"Boiler Room No. 1"},{id:625,deck:8,name:"Squash Racquet Court"},{id:623,deck:6,name:"Midship Scotland Road"},{id:624,deck:6,name:"Forward Scotland Road & Section B Corridor"},{id:622,deck:6,name:"Aft Scotland Road"},{id:889,deck:6,name:"Aft 3rd Class Entrance"},{id:621,deck:7,name:"Cooling Room"},{id:629,deck:3,name:"Restaurant Reception Room"},{id:620,deck:2,name:"1st Class Lounge"},{id:619,deck:2,name:"A-Deck Grand Staircase"},{id:618,deck:6,name:"E-Deck Grand Staircase"},{id:617,deck:4,name:"C-Deck Grand Staircase"},{id:615,deck:7,name:"F-Deck 2nd Class Staircase"},{id:616,deck:3,name:"B-Deck Grand Staircase"},{id:608,deck:2,name:"Port Verandah and Palm Court"},{id:609,deck:2,name:"1st Class Smoking Room"},{id:610,deck:2,name:"A-Deck 2nd Class Staircase"},{id:611,deck:3,name:"Aft 2nd Class Staircase"},{id:612,deck:4,name:"C-Deck 2nd Class Staircase"},{id:613,deck:5,name:"D-Deck 2nd Class Staircase"},{id:614,deck:6,name:"E-Deck 2nd Class Staircase"},{id:6,deck:29,name:"The Grapes Pub"},{id:607,deck:4,name:"C-Deck Aft Corridor"},{id:606,deck:4,name:"C-Deck Forward Corridor"},{id:605,deck:3,name:"B-Deck Forward Corridor"},{id:604,deck:4,name:"C-Deck Midship Corridor"},{id:603,deck:3,name:"B-Deck Midship Corridor"},{id:602,deck:2,name:"A-Deck Forward Corridor"},{id:599,deck:2,name:"1st Class Forward Star. Enclosed Prom."},{id:600,deck:11,name:"Heaven"},{id:601,deck:5,name:"D-Deck Reception Room"},{id:649,deck:2,name:"A-Deck 1st Class Aft Promenade"},{id:598,deck:2,name:"1st Class Aft Star. Enclosed  Prom."},{id:596,deck:2,name:"A-Deck 1st Class Overlooking Promenade"},{id:597,deck:2,name:"1st Class Starboard Palm Court Promenade"},{id:648,deck:2,name:"1st Class Starboard Smoke Room Prom."},{id:651,deck:2,name:"1st Class Port Covered Promenade"},{id:652,deck:2,name:"1st Class Port Lounge Promenade"},{id:653,deck:3,name:"B-Deck 1st Class Port Promenade"},{id:654,deck:3,name:"B-Deck 1st Class Star. Promenade"},{id:655,deck:3,name:"B-Deck 2nd Class Starboard Promenade"},{id:656,deck:3,name:"B-Deck 2nd Class Port Promenade"},{id:657,deck:3,name:"3rd Class Promenade"},{id:663,deck:5,name:"D-Deck 1st Class Entrance"},{id:659,deck:1,name:"Wheelhouse"},{id:658,deck:3,name:"3rd Class Promenade 2"},{id:664,deck:3,name:"B-Deck 1st Class Entrance"},{id:689,deck:6,name:"E-Deck Forward Corridor"},{id:701,deck:4,name:"C-Deck 1st Class Gents Lavatory"},{id:702,deck:4,name:"C-Deck 1st Class Ladies Lavatory"},{id:703,deck:4,name:"Maids' and Valets' Saloon"},{id:704,deck:4,name:"Barber's Shop"},{id:693,deck:2,name:"1st Class Lounge Entrance"},{id:700,deck:1,name:"Boat Deck Forward Corridor"},{id:692,deck:2,name:"1st Class Lounge Entrance"},{id:690,deck:6,name:"E-Deck Midship Corridor"},{id:691,deck:6,name:"Elevator Foyer"},{id:1e3,deck:1,name:"SR T"},{id:1001,deck:1,name:"SR U"},{id:1002,deck:1,name:"SR W"},{id:1003,deck:1,name:"SR X"},{id:1004,deck:1,name:"SR Y"},{id:1005,deck:1,name:"SR Z"},{id:1006,deck:2,name:"A-1"},{id:1007,deck:2,name:"A-2"},{id:1008,deck:2,name:"A-3"},{id:1009,deck:2,name:"A-4"},{id:1010,deck:2,name:"A-5"},{id:1011,deck:2,name:"A-6"},{id:1012,deck:2,name:"A-7"},{id:1013,deck:2,name:"A-8"},{id:1014,deck:2,name:"A-9"},{id:1015,deck:2,name:"A-10"},{id:1016,deck:2,name:"A-11"},{id:1017,deck:2,name:"A-12"},{id:1018,deck:2,name:"A-14"},{id:1019,deck:2,name:"A-15"},{id:1020,deck:2,name:"A-16"},{id:1021,deck:2,name:"A-17"},{id:1022,deck:2,name:"A-18"},{id:1023,deck:2,name:"A-19"},{id:1024,deck:2,name:"A-20"},{id:1025,deck:2,name:"A-21"},{id:1026,deck:2,name:"A-22"},{id:1027,deck:2,name:"A-23"},{id:1028,deck:2,name:"A-24"},{id:1029,deck:2,name:"A-25"},{id:1030,deck:2,name:"A-26"},{id:1031,deck:2,name:"A-27"},{id:1032,deck:2,name:"A-28"},{id:1033,deck:2,name:"A-29"},{id:1034,deck:2,name:"A-30"},{id:1035,deck:2,name:"A-31"},{id:1036,deck:2,name:"A-32"},{id:1037,deck:2,name:"A-33"},{id:1038,deck:2,name:"A-34"},{id:1039,deck:2,name:"A-35"},{id:1040,deck:2,name:"A-36"},{id:1041,deck:2,name:"A-37"},{id:1042,deck:3,name:"B-1"},{id:1043,deck:3,name:"B-2"},{id:1044,deck:3,name:"B-3"},{id:1045,deck:3,name:"B-4"},{id:1046,deck:3,name:"B-5"},{id:1047,deck:3,name:"B-6"},{id:1048,deck:3,name:"B-7"},{id:1049,deck:3,name:"B-8"},{id:1050,deck:3,name:"B-9"},{id:1051,deck:3,name:"B-10"},{id:1052,deck:3,name:"B-11"},{id:1053,deck:3,name:"B-12"},{id:1054,deck:3,name:"B-14"},{id:1055,deck:3,name:"B-15"},{id:1056,deck:3,name:"B-16"},{id:1057,deck:3,name:"B-17"},{id:1058,deck:3,name:"B-18"},{id:1059,deck:3,name:"B-19"},{id:1060,deck:3,name:"B-20"},{id:1061,deck:3,name:"B-21"},{id:1062,deck:3,name:"B-22"},{id:1063,deck:3,name:"B-23"},{id:1064,deck:3,name:"B-24"},{id:1065,deck:3,name:"B-25"},{id:1066,deck:3,name:"B-26"},{id:1067,deck:3,name:"B-27"},{id:1068,deck:3,name:"B-28"},{id:1069,deck:3,name:"B-29"},{id:1070,deck:3,name:"B-30"},{id:1071,deck:3,name:"B-31"},{id:1072,deck:3,name:"B-32"},{id:1073,deck:3,name:"B-33"},{id:1074,deck:3,name:"B-34"},{id:1075,deck:3,name:"B-35"},{id:1076,deck:3,name:"B-36"},{id:1077,deck:3,name:"B-37"},{id:1078,deck:3,name:"B-38"},{id:1079,deck:3,name:"B-39"},{id:1080,deck:3,name:"B-40"},{id:1081,deck:3,name:"B-41"},{id:1082,deck:3,name:"B-42"},{id:1083,deck:3,name:"B-43"},{id:1084,deck:3,name:"B-44"},{id:1085,deck:3,name:"B-45"},{id:1086,deck:3,name:"B-46"},{id:1087,deck:3,name:"B-47"},{id:1088,deck:3,name:"B-48"},{id:1089,deck:3,name:"B-49"},{id:1090,deck:3,name:"B-50"},{id:1094,deck:3,name:"B-52, 54, 56"},{id:1095,deck:3,name:"B-51, 53, 55"},{id:1096,deck:3,name:"B-57"},{id:1097,deck:3,name:"B-58"},{id:1098,deck:3,name:"B-59"},{id:1099,deck:3,name:"B-60"},{id:1100,deck:3,name:"B-61"},{id:1101,deck:3,name:"B-62"},{id:1102,deck:3,name:"B-63"},{id:1103,deck:3,name:"B-64"},{id:1104,deck:3,name:"B-65"},{id:1105,deck:3,name:"B-66"},{id:1106,deck:3,name:"B-67"},{id:1107,deck:3,name:"B-68"},{id:1108,deck:3,name:"B-69"},{id:1109,deck:3,name:"B-70"},{id:1110,deck:3,name:"B-71"},{id:1111,deck:3,name:"B-72"},{id:1112,deck:3,name:"B-73"},{id:1113,deck:3,name:"B-74"},{id:1114,deck:3,name:"B-75"},{id:1115,deck:3,name:"B-76"},{id:1116,deck:3,name:"B-77"},{id:1117,deck:3,name:"B-78"},{id:1118,deck:3,name:"B-79"},{id:1119,deck:3,name:"B-80"},{id:1120,deck:3,name:"B-81"},{id:1121,deck:3,name:"B-82"},{id:1122,deck:3,name:"B-83"},{id:1123,deck:3,name:"B-84"},{id:1124,deck:3,name:"B-85"},{id:1125,deck:3,name:"B-86"},{id:1126,deck:3,name:"B-87"},{id:1127,deck:3,name:"B-88"},{id:1128,deck:3,name:"B-89"},{id:1129,deck:3,name:"B-90"},{id:1130,deck:3,name:"B-91"},{id:1131,deck:3,name:"B-92"},{id:1132,deck:3,name:"B-93"},{id:1133,deck:3,name:"B-94"},{id:1134,deck:3,name:"B-95"},{id:1135,deck:3,name:"B-96"},{id:1136,deck:3,name:"B-97"},{id:1137,deck:3,name:"B-98"},{id:1138,deck:3,name:"B-99"},{id:1139,deck:3,name:"B-100"},{id:1140,deck:3,name:"B-101"},{id:1141,deck:3,name:"B-102"},{id:1142,deck:4,name:"C-1"},{id:1143,deck:4,name:"C-2"},{id:1144,deck:4,name:"C-3"},{id:1145,deck:4,name:"C-4"},{id:1146,deck:4,name:"C-5"},{id:1147,deck:4,name:"C-6"},{id:1148,deck:4,name:"C-7"},{id:1149,deck:4,name:"C-8"},{id:1150,deck:4,name:"C-9"},{id:1151,deck:4,name:"C-10"},{id:1152,deck:4,name:"C-11"},{id:1153,deck:4,name:"C-12"},{id:1154,deck:4,name:"C-14"},{id:1155,deck:4,name:"C-15"},{id:1156,deck:4,name:"C-16"},{id:1157,deck:4,name:"C-17"},{id:1158,deck:4,name:"C-18"},{id:1159,deck:4,name:"C-19"},{id:1160,deck:4,name:"C-20"},{id:1161,deck:4,name:"C-21"},{id:1162,deck:4,name:"C-22"},{id:1163,deck:4,name:"C-23"},{id:1164,deck:4,name:"C-24"},{id:1165,deck:4,name:"C-25"},{id:1166,deck:4,name:"C-26"},{id:1167,deck:4,name:"C-27"},{id:1168,deck:4,name:"C-28"},{id:1169,deck:4,name:"C-29"},{id:1170,deck:4,name:"C-30"},{id:1171,deck:4,name:"C-31"},{id:1172,deck:4,name:"C-32"},{id:1173,deck:4,name:"C-33"},{id:1174,deck:4,name:"C-34"},{id:1175,deck:4,name:"C-35"},{id:1176,deck:4,name:"C-36"},{id:1177,deck:4,name:"C-37"},{id:1178,deck:4,name:"C-38"},{id:1179,deck:4,name:"C-39"},{id:1180,deck:4,name:"C-40"},{id:1181,deck:4,name:"C-41"},{id:1182,deck:4,name:"C-42"},{id:1183,deck:4,name:"C-43"},{id:1184,deck:4,name:"C-44"},{id:1185,deck:4,name:"C-45"},{id:1186,deck:4,name:"C-46"},{id:1187,deck:4,name:"C-47"},{id:1188,deck:4,name:"C-48"},{id:1189,deck:4,name:"C-49"},{id:1190,deck:4,name:"C-50"},{id:1191,deck:4,name:"C-51"},{id:1192,deck:4,name:"C-52"},{id:1193,deck:4,name:"C-53"},{id:1194,deck:4,name:"C-54"},{id:1195,deck:4,name:"C-55, 57 "},{id:1196,deck:4,name:"C-56"},{id:1198,deck:4,name:"C-58"},{id:1199,deck:4,name:"C-59"},{id:1200,deck:4,name:"C-60"},{id:1201,deck:4,name:"C-61"},{id:1203,deck:4,name:"C-63"},{id:1204,deck:4,name:"C-62, 64"},{id:1205,deck:4,name:"C-65"},{id:1206,deck:4,name:"C-66"},{id:1207,deck:4,name:"C-67"},{id:1208,deck:4,name:"C-68"},{id:1209,deck:4,name:"C-69"},{id:1210,deck:4,name:"C-70"},{id:1211,deck:4,name:"C-71"},{id:1212,deck:4,name:"C-72"},{id:1213,deck:4,name:"C-73"},{id:1214,deck:4,name:"C-74"},{id:1215,deck:4,name:"C-75"},{id:1216,deck:4,name:"C-76"},{id:1217,deck:4,name:"C-77"},{id:1218,deck:4,name:"C-78"},{id:1219,deck:4,name:"C-79"},{id:1220,deck:4,name:"C-80"},{id:1221,deck:4,name:"C-81"},{id:1222,deck:4,name:"C-82"},{id:1223,deck:4,name:"C-83"},{id:1224,deck:4,name:"C-84"},{id:1225,deck:4,name:"C-85"},{id:1226,deck:4,name:"C-86"},{id:1227,deck:4,name:"C-87"},{id:1228,deck:4,name:"C-88"},{id:1229,deck:4,name:"C-89"},{id:1230,deck:4,name:"C-90"},{id:1231,deck:4,name:"C-91"},{id:1232,deck:4,name:"C-92"},{id:1233,deck:4,name:"C-93"},{id:1234,deck:4,name:"C-94"},{id:1235,deck:4,name:"C-95"},{id:1236,deck:4,name:"C-96"},{id:1237,deck:4,name:"C-97"},{id:1238,deck:4,name:"C-98"},{id:1239,deck:4,name:"C-99"},{id:1240,deck:4,name:"C-100"},{id:1241,deck:4,name:"C-101"},{id:1242,deck:4,name:"C-102"},{id:1243,deck:4,name:"C-103"},{id:1244,deck:4,name:"C-104"},{id:1245,deck:4,name:"C-105"},{id:1246,deck:4,name:"C-106"},{id:1247,deck:4,name:"C-107"},{id:1248,deck:4,name:"C-108"},{id:1249,deck:4,name:"C-109"},{id:1250,deck:4,name:"C-110"},{id:1251,deck:4,name:"C-111"},{id:1252,deck:4,name:"C-112"},{id:1253,deck:4,name:"C-113"},{id:1254,deck:4,name:"C-114"},{id:1255,deck:4,name:"C-115"},{id:1256,deck:4,name:"C-116"},{id:1257,deck:4,name:"C-117"},{id:1258,deck:4,name:"C-118"},{id:1259,deck:4,name:"C-119"},{id:1260,deck:4,name:"C-120"},{id:1261,deck:4,name:"C-121"},{id:1262,deck:4,name:"C-122"},{id:1263,deck:4,name:"C-123"},{id:1264,deck:4,name:"C-124"},{id:1265,deck:4,name:"C-125"},{id:1266,deck:4,name:"C-126"},{id:1267,deck:4,name:"C-127"},{id:1268,deck:4,name:"C-128"},{id:1269,deck:4,name:"C-130"},{id:1270,deck:4,name:"C-132"},{id:1271,deck:4,name:"C-134"},{id:1272,deck:4,name:"C-136"},{id:1273,deck:4,name:"C-138"},{id:1274,deck:4,name:"C-140"},{id:1275,deck:4,name:"C-142"},{id:1276,deck:4,name:"C-144"},{id:1277,deck:4,name:"C-146"},{id:1278,deck:4,name:"C-148"},{id:1279,deck:5,name:"D-1"},{id:1280,deck:5,name:"D-2"},{id:1281,deck:5,name:"D-3"},{id:1282,deck:5,name:"D-4"},{id:1283,deck:5,name:"D-5"},{id:1284,deck:5,name:"D-6"},{id:1285,deck:5,name:"D-7"},{id:1286,deck:5,name:"D-8"},{id:1287,deck:5,name:"D-9"},{id:1288,deck:5,name:"D-10"},{id:1289,deck:5,name:"D-11"},{id:1290,deck:5,name:"D-12"},{id:1291,deck:5,name:"D-14"},{id:1292,deck:5,name:"D-15"},{id:1293,deck:5,name:"D-16"},{id:1294,deck:5,name:"D-17"},{id:1295,deck:5,name:"D-18"},{id:1296,deck:5,name:"D-19"},{id:1297,deck:5,name:"D-20"},{id:1298,deck:5,name:"D-21"},{id:1299,deck:5,name:"D-22"},{id:1300,deck:5,name:"D-23"},{id:1301,deck:5,name:"D-24"},{id:1302,deck:5,name:"D-25"},{id:1303,deck:5,name:"D-26"},{id:1304,deck:5,name:"D-27"},{id:1305,deck:5,name:"D-28"},{id:1306,deck:5,name:"D-29"},{id:1307,deck:5,name:"D-30"},{id:1308,deck:5,name:"D-31"},{id:1309,deck:5,name:"D-32"},{id:1310,deck:5,name:"D-33"},{id:1311,deck:5,name:"D-34"},{id:1312,deck:5,name:"D-35"},{id:1313,deck:5,name:"D-36"},{id:1314,deck:5,name:"D-37"},{id:1315,deck:5,name:"D-38"},{id:1316,deck:5,name:"D-39"},{id:1317,deck:5,name:"D-40"},{id:1318,deck:5,name:"D-41"},{id:1319,deck:5,name:"D-42"},{id:1320,deck:5,name:"D-43"},{id:1321,deck:5,name:"D-44"},{id:1322,deck:5,name:"D-45"},{id:1323,deck:5,name:"D-46"},{id:1324,deck:5,name:"D-47"},{id:1325,deck:5,name:"D-48"},{id:1326,deck:5,name:"D-49"},{id:1327,deck:5,name:"D-50"},{id:1328,deck:5,name:"D-51"},{id:1329,deck:5,name:"D-52"},{id:1330,deck:5,name:"D-53"},{id:1331,deck:5,name:"D-54"},{id:1332,deck:5,name:"D-55"},{id:1333,deck:5,name:"D-56"},{id:1334,deck:5,name:"D-57"},{id:1335,deck:5,name:"D-58"},{id:1336,deck:5,name:"D-59"},{id:1337,deck:5,name:"D-60"},{id:1338,deck:5,name:"D-61"},{id:1339,deck:5,name:"D-62"},{id:1340,deck:5,name:"D-63"},{id:1341,deck:5,name:"D-64"},{id:1342,deck:5,name:"D-65"},{id:1343,deck:5,name:"D-66"},{id:1344,deck:5,name:"D-67"},{id:1345,deck:5,name:"D-68"},{id:1346,deck:5,name:"D-69"},{id:1347,deck:5,name:"D-70"},{id:1348,deck:5,name:"D-71"},{id:1349,deck:5,name:"D-72"},{id:1350,deck:5,name:"D-73"},{id:1351,deck:5,name:"D-74"},{id:1352,deck:5,name:"D-75"},{id:1353,deck:5,name:"D-76"},{id:1354,deck:5,name:"D-77"},{id:1355,deck:5,name:"D-78"},{id:1356,deck:5,name:"D-79"},{id:1357,deck:5,name:"D-80"},{id:1358,deck:5,name:"D-81"},{id:1359,deck:5,name:"D-82"},{id:1360,deck:5,name:"D-83"},{id:1361,deck:5,name:"D-84"},{id:1362,deck:5,name:"D-85"},{id:1363,deck:5,name:"D-86"},{id:1364,deck:5,name:"D-87"},{id:1365,deck:5,name:"D-88"},{id:1366,deck:5,name:"D-89"},{id:1367,deck:5,name:"D-Sec. O No. 127"},{id:1368,deck:5,name:"D-Sec. O No. 128"},{id:1369,deck:5,name:"D-Sec. O No. 129"},{id:1370,deck:5,name:"D-Sec. O No. 130"},{id:1371,deck:5,name:"D-Sec. O No. 131"},{id:1372,deck:5,name:"D-Sec. O No. 132"},{id:1373,deck:5,name:"D-Sec. O No. 133"},{id:1374,deck:5,name:"D-Sec. O No. 134"},{id:1375,deck:5,name:"D-Sec. O No. 135"},{id:1376,deck:5,name:"D-Sec. O No. 136"},{id:1377,deck:5,name:"D-Sec. O No. 137"},{id:1378,deck:6,name:"E-1"},{id:1379,deck:6,name:"E-2"},{id:1380,deck:6,name:"E-3"},{id:1381,deck:6,name:"E-4"},{id:1382,deck:6,name:"E-5"},{id:1383,deck:6,name:"E-6"},{id:1384,deck:6,name:"E-7"},{id:1385,deck:6,name:"E-8"},{id:1386,deck:6,name:"E-9"},{id:1387,deck:6,name:"E-10"},{id:1388,deck:6,name:"E-11"},{id:1389,deck:6,name:"E-12"},{id:1390,deck:6,name:"E-14"},{id:1391,deck:6,name:"E-15"},{id:1392,deck:6,name:"E-16"},{id:1393,deck:6,name:"E-17"},{id:1394,deck:6,name:"E-18"},{id:1395,deck:6,name:"E-19"},{id:1396,deck:6,name:"E-20"},{id:1397,deck:6,name:"E-21"},{id:1398,deck:6,name:"E-22"},{id:1399,deck:6,name:"E-23"},{id:1400,deck:6,name:"E-24"},{id:1401,deck:6,name:"E-25"},{id:1402,deck:6,name:"E-26"},{id:1403,deck:6,name:"E-27"},{id:1404,deck:6,name:"E-28"},{id:1405,deck:6,name:"E-29"},{id:1406,deck:6,name:"E-30"},{id:1407,deck:6,name:"E-31"},{id:1408,deck:6,name:"E-32"},{id:1409,deck:6,name:"E-33"},{id:1410,deck:6,name:"E-34"},{id:1411,deck:6,name:"E-35"},{id:1412,deck:6,name:"E-36"},{id:1413,deck:6,name:"E-37"},{id:1414,deck:6,name:"E-38"},{id:1415,deck:6,name:"E-39"},{id:1416,deck:6,name:"E-40"},{id:1417,deck:6,name:"E-41"},{id:1418,deck:6,name:"E-42"},{id:1419,deck:6,name:"E-43"},{id:1420,deck:6,name:"E-44"},{id:1421,deck:6,name:"E-45"},{id:1422,deck:6,name:"E-46"},{id:1423,deck:6,name:"E-47"},{id:1424,deck:6,name:"E-48"},{id:1425,deck:6,name:"E-49"},{id:1426,deck:6,name:"E-50"},{id:1427,deck:6,name:"E-51"},{id:1428,deck:6,name:"E-52"},{id:1429,deck:6,name:"E-53"},{id:1430,deck:6,name:"E-54"},{id:1431,deck:6,name:"E-55"},{id:1432,deck:6,name:"E-56"},{id:1433,deck:6,name:"E-57"},{id:1434,deck:6,name:"E-58"},{id:1435,deck:6,name:"E-59"},{id:1436,deck:6,name:"E-60"},{id:1437,deck:6,name:"E-61"},{id:1438,deck:6,name:"E-62"},{id:1439,deck:6,name:"E-63"},{id:1440,deck:6,name:"E-64"},{id:1441,deck:6,name:"E-65"},{id:1442,deck:6,name:"E-66"},{id:1443,deck:6,name:"E-67"},{id:1444,deck:6,name:"E-68"},{id:1445,deck:6,name:"E-69"},{id:1446,deck:6,name:"E-70"},{id:1447,deck:6,name:"E-71"},{id:1448,deck:6,name:"E-72"},{id:1449,deck:6,name:"E-73"},{id:1450,deck:6,name:"E-74"},{id:1451,deck:6,name:"E-75"},{id:1452,deck:6,name:"E-76"},{id:1453,deck:6,name:"E-77"},{id:1454,deck:6,name:"E-78"},{id:1455,deck:6,name:"E-79"},{id:1456,deck:6,name:"E-80"},{id:1457,deck:6,name:"E-81"},{id:1458,deck:6,name:"E-82"},{id:1459,deck:6,name:"E-83"},{id:1460,deck:6,name:"E-84"},{id:1461,deck:6,name:"E-85"},{id:1462,deck:6,name:"E-86"},{id:1463,deck:6,name:"E-87"},{id:1464,deck:6,name:"E-88"},{id:1465,deck:6,name:"E-89"},{id:1466,deck:6,name:"E-90"},{id:1467,deck:6,name:"E-91"},{id:1468,deck:6,name:"E-92"},{id:1469,deck:6,name:"E-93"},{id:1470,deck:6,name:"E-94"},{id:1471,deck:6,name:"E-95"},{id:1472,deck:6,name:"E-96"},{id:1473,deck:6,name:"E-97"},{id:1474,deck:6,name:"E-98"},{id:1475,deck:6,name:"E-99"},{id:1476,deck:6,name:"E-100"},{id:1477,deck:6,name:"E-101"},{id:1478,deck:6,name:"E-102"},{id:1479,deck:6,name:"E-103"},{id:1480,deck:6,name:"E-104"},{id:1481,deck:6,name:"E-105"},{id:1482,deck:6,name:"E-106"},{id:1483,deck:6,name:"E-107"},{id:1484,deck:6,name:"E-200"},{id:1485,deck:6,name:"E-201"},{id:1486,deck:6,name:"E-202"},{id:1487,deck:6,name:"E-203"},{id:1488,deck:6,name:"E-Sec. B No. 1"},{id:1489,deck:6,name:"E-Sec. B No. 2"},{id:1490,deck:6,name:"E-Sec. B No. 3"},{id:1491,deck:6,name:"E-Sec. B No. 4"},{id:1492,deck:6,name:"E-Sec. B No. 5"},{id:1493,deck:6,name:"E-Sec. B No. 6"},{id:1494,deck:6,name:"E-Sec. B No. 7"},{id:1495,deck:6,name:"E-Sec. B No. 8"},{id:1496,deck:6,name:"E-Sec. B No. 9"},{id:1497,deck:6,name:"E-Sec. B No. 10"},{id:1498,deck:6,name:"E-Sec. B No. 11"},{id:1499,deck:6,name:"E-Sec. B No. 12"},{id:1500,deck:6,name:"E-Sec. B No. 14"},{id:1501,deck:6,name:"E-Sec. B No. 15"},{id:1502,deck:6,name:"E-Sec. B No. 16"},{id:1503,deck:6,name:"E-Sec. B No. 17"},{id:1504,deck:6,name:"E-Sec. B No. 18"},{id:1505,deck:6,name:"E-Sec. B No. 19"},{id:1506,deck:6,name:"E-Sec. B No. 9a"},{id:1507,deck:6,name:"E-Sec. K No. 101"},{id:1508,deck:6,name:"E-Sec. K No. 102"},{id:1509,deck:6,name:"E-Sec. K No. 103"},{id:1510,deck:6,name:"E-Sec. M No.104"},{id:1511,deck:6,name:"E-Sec. M No.105"},{id:1512,deck:6,name:"E-Sec. M No.106"},{id:1513,deck:6,name:"E-Sec. M No.107"},{id:1514,deck:6,name:"E-Sec. M No.108"},{id:1515,deck:6,name:"E-Sec. M No.109"},{id:1516,deck:6,name:"E-Sec. M No.110"},{id:1517,deck:6,name:"E-Sec. M No.111"},{id:1518,deck:6,name:"E-Sec. M No.112"},{id:1519,deck:6,name:"E-Sec. M No.113"},{id:1520,deck:6,name:"E-Sec. M No.114"},{id:1521,deck:6,name:"E-Sec. M No.115"},{id:1522,deck:6,name:"E-Sec. M No.116"},{id:1523,deck:6,name:"E-Sec. M No.117"},{id:1524,deck:6,name:"E-Sec. M No.118"},{id:1525,deck:6,name:"E-Sec. M No.119"},{id:1526,deck:6,name:"E-Sec. M No.120"},{id:1527,deck:6,name:"E-Sec. M No.121"},{id:1528,deck:6,name:"E-Sec. M No.122"},{id:1529,deck:6,name:"E-Sec. M No.123"},{id:1530,deck:6,name:"E-Sec. M No.124"},{id:1531,deck:6,name:"E-Sec. M No.125"},{id:1532,deck:6,name:"E-Sec. M No. 126"},{id:1533,deck:6,name:"E-Sec. Q No. 138"},{id:1534,deck:6,name:"E-Sec. Q No. 139"},{id:1535,deck:6,name:"E-Sec. Q No. 140"},{id:1536,deck:6,name:"E-Sec. Q No. 141"},{id:1537,deck:6,name:"E-Sec. Q No. 142"},{id:1538,deck:6,name:"E-Sec. Q No. 143"},{id:1539,deck:6,name:"E-Sec. Q No. 144"},{id:1540,deck:6,name:"E-Sec. Q No. 145"},{id:1541,deck:6,name:"E-Sec. Q No. 146"},{id:1542,deck:6,name:"E-Sec. Q No. 147"},{id:1543,deck:6,name:"E-Sec. Q No. 148"},{id:1544,deck:6,name:"E-Sec. Q No. 149"},{id:1545,deck:6,name:"E-Sec. Q No. 150"},{id:1546,deck:6,name:"E-Sec. Q No. 151"},{id:1547,deck:6,name:"E-Sec. Q No. 152"},{id:1548,deck:6,name:"E-Sec. Q No. 153"},{id:1549,deck:6,name:"E-Sec. Q No. 154"},{id:1550,deck:6,name:"E-Sec. Q No. 155"},{id:1551,deck:6,name:"E-Sec. Q No. 156"},{id:1552,deck:6,name:"E-Sec. Q No. 157"},{id:1553,deck:6,name:"E-Sec. Q No. 158"},{id:1554,deck:6,name:"E-Sec. Q No. 159"},{id:1555,deck:6,name:"E-Sec. Q No. 160"},{id:1556,deck:6,name:"E-Sec. Q No. 161"},{id:1557,deck:6,name:"E-Sec. Q No. 162"},{id:1558,deck:6,name:"E-Sec. Q No. 163"},{id:1559,deck:6,name:"E-Sec. Q No. 164"},{id:1560,deck:6,name:"E-Sec. Q No. 165"},{id:1561,deck:6,name:"E-Sec. Q No. 166"},{id:1562,deck:6,name:"E-Sec. Q No. 167"},{id:1563,deck:7,name:"F-1"},{id:1564,deck:7,name:"F-2"},{id:1565,deck:7,name:"F-3"},{id:1566,deck:7,name:"F-4"},{id:1567,deck:7,name:"F-5"},{id:1568,deck:7,name:"F-6"},{id:1569,deck:7,name:"F-7"},{id:1570,deck:7,name:"F-8"},{id:1571,deck:7,name:"F-9"},{id:1572,deck:7,name:"F-10"},{id:1573,deck:7,name:"F-11"},{id:1574,deck:7,name:"F-12"},{id:1575,deck:7,name:"F-14"},{id:1576,deck:7,name:"F-15"},{id:1577,deck:7,name:"F-16"},{id:1578,deck:7,name:"F-17"},{id:1579,deck:7,name:"F-18"},{id:1580,deck:7,name:"F-19"},{id:1581,deck:7,name:"F-20"},{id:1582,deck:7,name:"F-21"},{id:1583,deck:7,name:"F-22"},{id:1584,deck:7,name:"F-23"},{id:1585,deck:7,name:"F-24"},{id:1586,deck:7,name:"F-25"},{id:1587,deck:7,name:"F-26"},{id:1588,deck:7,name:"F-27"},{id:1589,deck:7,name:"F-28"},{id:1590,deck:7,name:"F-29"},{id:1591,deck:7,name:"F-30"},{id:1592,deck:7,name:"F-31"},{id:1593,deck:7,name:"F-32"},{id:1594,deck:7,name:"F-33"},{id:1595,deck:7,name:"F-34"},{id:1596,deck:7,name:"F-35"},{id:1597,deck:7,name:"F-36"},{id:1598,deck:7,name:"F-37"},{id:1599,deck:7,name:"F-38"},{id:1600,deck:7,name:"F-39"},{id:1601,deck:7,name:"F-40"},{id:1602,deck:7,name:"F-41"},{id:1603,deck:7,name:"F-42"},{id:1604,deck:7,name:"F-43"},{id:1605,deck:7,name:"F-44"},{id:1606,deck:7,name:"F-45"},{id:1608,deck:7,name:"F-47"},{id:803,deck:2,name:"A-Deck Forward Pantry"},{id:1610,deck:7,name:"F-49"},{id:1611,deck:7,name:"F-50"},{id:1612,deck:7,name:"F-51"},{id:1613,deck:7,name:"F-52"},{id:1614,deck:7,name:"F-53"},{id:1615,deck:7,name:"F-54"},{id:1616,deck:7,name:"F-55"},{id:1617,deck:7,name:"F-56"},{id:1618,deck:7,name:"F-57"},{id:1619,deck:7,name:"F-58"},{id:1620,deck:7,name:"F-59"},{id:1621,deck:7,name:"F-60"},{id:1622,deck:7,name:"F-61"},{id:1623,deck:7,name:"F-62"},{id:1624,deck:7,name:"F-63"},{id:1625,deck:7,name:"F-64"},{id:1626,deck:7,name:"F-65"},{id:1627,deck:7,name:"F-67"},{id:1628,deck:7,name:"F-69"},{id:1629,deck:7,name:"F-Sec. C No. 20"},{id:1630,deck:7,name:"F-Sec. C No. 21"},{id:1631,deck:7,name:"F-Sec. C No. 22"},{id:1632,deck:7,name:"F-Sec. C No. 23"},{id:1633,deck:7,name:"F-Sec. C No. 24"},{id:1634,deck:7,name:"F-Sec. C No. 25"},{id:1635,deck:7,name:"F-Sec. C No. 26"},{id:1636,deck:7,name:"F-Sec. C No. 27"},{id:1637,deck:7,name:"F-Sec. C No. 28"},{id:1638,deck:7,name:"F-Sec. C No. 29"},{id:1639,deck:7,name:"F-Sec. C No. 30"},{id:1640,deck:7,name:"F-Sec. C No. 31"},{id:1641,deck:7,name:"F-Sec. C No. 32"},{id:1642,deck:7,name:"F-Sec. C No. 33"},{id:1643,deck:7,name:"F-Sec. C No. 34"},{id:1644,deck:7,name:"F-Sec. C No. 35"},{id:1645,deck:7,name:"F-Sec. C No. 36"},{id:1646,deck:7,name:"F-Sec. C No. 37"},{id:1647,deck:7,name:"F-Sec. C No. 38"},{id:1648,deck:7,name:"F-Sec. C No. 39"},{id:1649,deck:7,name:"F-Sec. C No. 40"},{id:1650,deck:7,name:"F-Sec. E No. 41"},{id:1651,deck:7,name:"F-Sec. E No. 42"},{id:1652,deck:7,name:"F-Sec. E No. 43"},{id:1653,deck:7,name:"F-Sec. E No. 44"},{id:1654,deck:7,name:"F-Sec. E No. 45"},{id:1655,deck:7,name:"F-Sec. E No. 46"},{id:1656,deck:7,name:"F-Sec. E No. 47"},{id:1657,deck:7,name:"F-Sec. E No. 48"},{id:1658,deck:7,name:"F-Sec. E No. 49"},{id:1659,deck:7,name:"F-Sec. E No. 50"},{id:1660,deck:7,name:"F-Sec. E No. 51"},{id:1661,deck:7,name:"F-Sec. E No. 52"},{id:1662,deck:7,name:"F-Sec. E No. 53"},{id:1663,deck:7,name:"F-Sec. E No. 54"},{id:1664,deck:7,name:"F-Sec. E No. 55"},{id:1665,deck:7,name:"F-Sec. E No. 56"},{id:1666,deck:7,name:"F-Sec. E No. 57"},{id:1667,deck:7,name:"F-Sec. E No. 58"},{id:1668,deck:7,name:"F-Sec. E No. 59"},{id:1669,deck:7,name:"F-Sec. E No. 60"},{id:1670,deck:7,name:"F-Sec. E No. 61"},{id:1671,deck:7,name:"F-Sec. E No. 62"},{id:1672,deck:7,name:"F-Sec. G No. 63"},{id:1673,deck:7,name:"F-Sec. E No. 64"},{id:1674,deck:7,name:"F-Sec. G No. 65"},{id:1675,deck:7,name:"F-Sec. G No. 66"},{id:1676,deck:7,name:"F-Sec. G No. 67"},{id:1677,deck:7,name:"F-Sec. G No. 68"},{id:1678,deck:7,name:"F-Sec. G No. 69"},{id:1679,deck:7,name:"F-Sec. G No. 70"},{id:1680,deck:7,name:"F-Sec. G No. 71"},{id:1681,deck:7,name:"F-Sec. G No. 72"},{id:1682,deck:7,name:"F-Sec. G No. 73"},{id:1683,deck:7,name:"F-Sec. G No. 74"},{id:1684,deck:7,name:"F-Sec. G No. 75"},{id:1685,deck:7,name:"F-Sec. G No. 76"},{id:1686,deck:7,name:"F-Sec. G No. 77"},{id:1687,deck:7,name:"F-Sec. G No. 78"},{id:1688,deck:7,name:"F-Sec. G No. 79"},{id:1689,deck:7,name:"F-Sec. G No. 80"},{id:1690,deck:7,name:"F-Sec. G No. 81"},{id:1691,deck:7,name:"F-Sec. G No. 82"},{id:1692,deck:7,name:"F-Sec. G No. 83"},{id:1693,deck:7,name:"F-Sec. G No. 84"},{id:1694,deck:7,name:"F-Sec. G No. 85"},{id:1695,deck:7,name:"F-Sec. G No. 86"},{id:1696,deck:7,name:"F-Sec. G No. 87"},{id:1697,deck:7,name:"F-Sec. G No. 88"},{id:1698,deck:7,name:"F-Sec. G No. 89"},{id:1699,deck:7,name:"F-Sec. G No. 90"},{id:1700,deck:7,name:"F-Sec. G No. 91"},{id:1701,deck:7,name:"F-Sec. G No. 92"},{id:1702,deck:7,name:"F-Sec. G No. 93"},{id:1703,deck:7,name:"F-Sec. G No. 94"},{id:1704,deck:7,name:"F-Sec. G No. 95"},{id:1705,deck:7,name:"F-Sec. G No. 96"},{id:1706,deck:7,name:"F-Sec. G No. 97"},{id:1707,deck:7,name:"F-Sec. G No. 98"},{id:1708,deck:7,name:"F-Sec. G No. 99"},{id:1709,deck:7,name:"F-Sec. G No. 100"},{id:1710,deck:7,name:"F-Sec. R No. 168"},{id:1711,deck:7,name:"F-Sec. R No. 169"},{id:1712,deck:7,name:"F-Sec. R No. 170"},{id:1713,deck:7,name:"F-Sec. R No. 171"},{id:1714,deck:7,name:"F-Sec. R No. 172"},{id:1715,deck:7,name:"F-Sec. R No. 173"},{id:1716,deck:7,name:"F-Sec. R No. 174"},{id:1717,deck:7,name:"F-Sec. R No. 175"},{id:1718,deck:7,name:"F-Sec. R No. 176"},{id:1719,deck:7,name:"F-Sec. R No. 177"},{id:1720,deck:7,name:"F-Sec. R No. 178"},{id:1721,deck:7,name:"F-Sec. R No. 179"},{id:1722,deck:7,name:"F-Sec. R No. 180"},{id:1723,deck:7,name:"F-Sec. R No. 181"},{id:1724,deck:7,name:"F-Sec. R No. 182"},{id:1725,deck:7,name:"F-Sec. R No. 183"},{id:1726,deck:7,name:"F-Sec. R No. 184"},{id:1727,deck:7,name:"F-Sec. R No. 185"},{id:1728,deck:7,name:"F-Sec. R No. 186"},{id:1729,deck:7,name:"F-Sec. R No. 187"},{id:1730,deck:7,name:"F-Sec. R No. 188"},{id:1731,deck:7,name:"F-Sec. R No. 189"},{id:1732,deck:7,name:"F-Sec. R No. 190"},{id:1733,deck:7,name:"F-Sec. R No. 191"},{id:1734,deck:7,name:"F-Sec. R No. 192"},{id:1735,deck:7,name:"F-Sec. R No. 193"},{id:1736,deck:7,name:"F-Sec. R No. 194"},{id:1737,deck:7,name:"F-Sec. R No. 195"},{id:1738,deck:7,name:"F-Sec. R No. 196"},{id:1739,deck:7,name:"F-Sec. R No. 197"},{id:1740,deck:7,name:"F-Sec. R No. 198"},{id:1741,deck:7,name:"F-Sec. R No. 199"},{id:1742,deck:7,name:"F-Sec. R No. 200"},{id:1743,deck:7,name:"F-Sec. R No. 202"},{id:1744,deck:8,name:"G-1"},{id:1745,deck:8,name:"G-2"},{id:1746,deck:8,name:"G-3"},{id:1747,deck:8,name:"G-4"},{id:1748,deck:8,name:"G-5"},{id:1749,deck:8,name:"G-6"},{id:1750,deck:8,name:"G-7"},{id:1751,deck:8,name:"G-8"},{id:1752,deck:8,name:"G-9"},{id:1753,deck:8,name:"G-10"},{id:1754,deck:8,name:"G-11"},{id:1755,deck:8,name:"G-12"},{id:1756,deck:8,name:"G-14"},{id:1757,deck:8,name:"G-15"},{id:1758,deck:8,name:"G-16"},{id:1759,deck:8,name:"G-17"},{id:1760,deck:8,name:"G-18"},{id:1761,deck:8,name:"G-19"},{id:1762,deck:8,name:"G-20"},{id:1763,deck:8,name:"G-21"},{id:1764,deck:8,name:"G-22"},{id:1765,deck:8,name:"G-23"},{id:1766,deck:8,name:"G-24"},{id:1767,deck:8,name:"G-25"},{id:1768,deck:8,name:"G-26"},{id:1769,deck:8,name:"G-27"},{id:1770,deck:8,name:"G-28"},{id:1771,deck:8,name:"G-29"},{id:1772,deck:8,name:"G-30"},{id:1773,deck:8,name:"G-31"},{id:1774,deck:8,name:"G-32"},{id:1775,deck:8,name:"G-33"},{id:1776,deck:8,name:"G-34"},{id:1777,deck:8,name:"G-35"},{id:1778,deck:8,name:"G-36"},{id:1779,deck:8,name:"G-37"},{id:1780,deck:8,name:"G-38"},{id:1781,deck:8,name:"G-39"},{id:1782,deck:8,name:"G-40"},{id:1783,deck:8,name:"G-41"},{id:1784,deck:8,name:"G-Sec. S No. 201"},{id:1785,deck:8,name:"G-Sec. S No. 203"},{id:1786,deck:8,name:"G-Sec. S No. 204"},{id:1787,deck:8,name:"G-Sec. S No. 205"},{id:1788,deck:8,name:"G-Sec. S No. 206"},{id:1789,deck:8,name:"G-Sec. S No. 207"},{id:1790,deck:8,name:"G-Sec. S No. 209"},{id:1791,deck:8,name:"G-Sec. S No. 211"},{id:1792,deck:8,name:"G-Sec. S No. 212"},{id:1793,deck:8,name:"G-Sec. S No. 213"},{id:1794,deck:8,name:"G-Sec. S No. 214"},{id:1795,deck:8,name:"G-Sec. S No. 215"},{id:1796,deck:8,name:"G-Sec. S No. 216"},{id:1797,deck:8,name:"G-Sec. S No. 217"},{id:1798,deck:8,name:"G-Sec. S No. 218"},{id:1799,deck:8,name:"G-Sec. S No. 219"},{id:1800,deck:8,name:"G-Sec. S No. 220"},{id:1801,deck:8,name:"G-Sec. S No. 221"},{id:1802,deck:8,name:"G-Sec. D No. 224"},{id:1803,deck:8,name:"G-Sec. D No. 225"},{id:1804,deck:8,name:"G-Sec. D No. 226"},{id:1805,deck:8,name:"G-Sec. D No. 227"},{id:1806,deck:8,name:"G-Sec. D No. 228"},{id:1807,deck:8,name:"G-Sec. D No. 229"},{id:1808,deck:8,name:"G-Sec. D No. 230"},{id:1809,deck:8,name:"G-Sec. D No. 231"},{id:1810,deck:8,name:"G-Sec. D No. 232"},{id:1811,deck:8,name:"G-Sec. D No. 233"},{id:1812,deck:8,name:"G-Sec. D No. 234"},{id:1813,deck:8,name:"G-Sec. D No. 235"},{id:1814,deck:8,name:"G-Sec. D No. 236"},{id:1815,deck:8,name:"G-Sec. D No. 237"},{id:1816,deck:8,name:"G-Sec. D No. 238"},{id:1817,deck:8,name:"G-Sec. D No. 239"},{id:1818,deck:8,name:"G-Sec. D No. 240"},{id:1819,deck:8,name:"G-Sec. D No. 241"},{id:1820,deck:8,name:"G-Sec. D No. 242"},{id:1821,deck:8,name:"G-Sec. D No. 243"},{id:1822,deck:8,name:"G-Sec. D No. 244"},{id:1823,deck:8,name:"G-Sec. D No. 245"},{id:1824,deck:8,name:"G-Sec. D No. 246"},{id:1825,deck:8,name:"G-Sec. D No. 247"},{id:1826,deck:8,name:"G-Sec. D No. 248"},{id:1827,deck:8,name:"G-Sec. D No. 250"},{id:1828,deck:8,name:"G-Sec. F No. 251"},{id:1829,deck:8,name:"G-Sec. F No. 252"},{id:1830,deck:8,name:"G-Sec. F No. 253"},{id:1831,deck:8,name:"G-Sec. F No. 254"},{id:1832,deck:8,name:"G-Sec. F No. 255"},{id:1833,deck:8,name:"G-Sec. F No. 256"},{id:1834,deck:8,name:"G-Sec. F No. 257"},{id:1835,deck:8,name:"G-Sec. F No. 258"},{id:1836,deck:8,name:"G-Sec. F No. 259"},{id:1837,deck:8,name:"G-Sec. F No. 260"},{id:737,deck:5,name:"The Padded Room (Jail)"},{id:738,deck:4,name:"2nd Class Library"},{id:739,deck:3,name:"2nd Class Smoking Room"},{id:919,deck:5,name:"Hospital Bath"},{id:740,deck:4,name:"3rd Class Smoking Room"},{id:741,deck:4,name:"3rd Class General Room"},{id:742,deck:5,name:"3rd Class Open Space"},{id:743,deck:9,name:"Mail Room"},{id:744,deck:9,name:"1st & 2nd Class Baggage Hold"},{id:745,deck:9,name:"Cargo Hold No. 2"},{id:746,deck:10,name:"North Atlantic"},{id:747,deck:7,name:"Temperate Room"},{id:855,deck:5,name:"Printer's Room"},{id:748,deck:7,name:"Electric Bath"},{id:749,deck:2,name:"Starboard Verandah and Palm Court"},{id:750,deck:3,name:"Forecastle"},{id:982,deck:4,name:"Steering Gear Room"},{id:751,deck:4,name:"Forward Well Deck"},{id:752,deck:4,name:"Aft Well Deck"},{id:753,deck:4,name:"C-Deck 2nd Class Promenade"},{id:754,deck:4,name:"C-Deck 2nd Class Promenade"},{id:755,deck:1,name:"Port Bridge Wing"},{id:756,deck:1,name:"Starboard Bridge Wing"},{id:757,deck:7,name:"Shampooing Rooms"},{id:758,deck:1,name:"Chart Room"},{id:1838,deck:1,name:"6th Officer"},{id:1839,deck:1,name:"5th Officer"},{id:1840,deck:1,name:"4th Officer"},{id:1841,deck:1,name:"3rd Officer"},{id:1842,deck:1,name:"2nd Officer"},{id:1843,deck:1,name:"1st Officer"},{id:1844,deck:1,name:"Chief Officer"},{id:1845,deck:1,name:"Captain"},{id:759,deck:1,name:"Elevator Gear Room"},{id:760,deck:4,name:"Telephone Switchboard"},{id:761,deck:7,name:"Swimming Bath Lockers"},{id:762,deck:7,name:"Linen Rooms"},{id:763,deck:7,name:"F-Deck Section G Corridor"},{id:764,deck:7,name:"F-Deck 3rd Class Staircase"},{id:765,deck:3,name:"B-Deck 2nd Class Staircase"},{id:766,deck:4,name:"C-Deck Aft 2nd Class Staircase"},{id:772,deck:5,name:"D-Deck 1st Class Entrance"},{id:767,deck:5,name:"D-Deck Aft 2nd Class Staircase"},{id:768,deck:4,name:"3rd Class Staircase"},{id:769,deck:5,name:"D-Deck 3rd Class Staircase"},{id:770,deck:6,name:"E-Deck 3rd Class Staircase"},{id:771,deck:10,name:"Firemen's Tunnel"},{id:773,deck:3,name:"B-Deck 1st Class Entrance"},{id:774,deck:1,name:"1st Class Elevated Promenade"},{id:775,deck:6,name:"Assistant Purser's Office"},{id:3021,deck:6,name:"2nd Class Enquiry Office"},{id:776,deck:6,name:"Engineer's Mess"},{id:777,deck:10,name:"Reciprocating Engine Room"},{id:778,deck:8,name:"Refrigerated Storage"},{id:779,deck:2,name:"Lounge and Deck Pantry"},{id:780,deck:3,name:"Docking Bridge"},{id:782,deck:6,name:"2nd Class Stewards Dormitory"},{id:781,deck:6,name:"Steward's Lavatory"},{id:783,deck:6,name:"1st Class Steward's Dormitory"},{id:784,deck:7,name:"F-Deck 2nd Class Corridor"},{id:785,deck:9,name:"Wine Cellar"},{id:1846,deck:6,name:"Storekeepers Berths 1-4"},{id:1847,deck:6,name:"Storekeepers Berths 5-8"},{id:1848,deck:6,name:"1st Class Cooks Berths 1-4"},{id:1849,deck:6,name:"1st Class Cooks Berths 5-8"},{id:1850,deck:6,name:"1st Class Cooks Berths 9-12"},{id:1851,deck:6,name:"1st Class Stewards Berths 1-4"},{id:1852,deck:6,name:"1st Class Stewards Berths 5-8"},{id:1853,deck:6,name:"1st Class Stewards Berths 9-12"},{id:1854,deck:6,name:"1st Class Stewards Berths 13-16"},{id:1855,deck:6,name:"1st Class Stewards Berths 17-20"},{id:1857,deck:6,name:"1st Class Stewards Berths 21-24"},{id:1858,deck:6,name:"1st Class Stewards Berths 25-26"},{id:1859,deck:6,name:"Bath and Lavatory Stewards Berths 1-4"},{id:1860,deck:6,name:"Bath and Lavatory Stewards Berths 5-6"},{id:1861,deck:6,name:"Bath and Lavatory Spare Berths 7-10"},{id:1862,deck:6,name:"Saloon Waiters Berths 1-4"},{id:1863,deck:6,name:"Saloon Waiters Berths 5-8"},{id:1864,deck:6,name:"Saloon Waiters Berths 9-12"},{id:1865,deck:6,name:"Saloon Waiters Berths 13-16"},{id:1866,deck:6,name:"Saloon Waiters Berths 17-20"},{id:1867,deck:6,name:"Saloon Waiters Berths 20-24"},{id:1868,deck:6,name:"Saloon Waiters Berths 25-28"},{id:1869,deck:6,name:"Saloon Waiters Berths 29-32"},{id:1870,deck:6,name:"Saloon Waiters Berths 33-36"},{id:1871,deck:6,name:"Saloon Waiters Berths 37-40"},{id:1872,deck:6,name:"State Room Stewards Berths 1-4"},{id:1873,deck:6,name:"State Room Stewards Berths 5-8"},{id:1874,deck:6,name:"State Room Stewards Berths 9-12"},{id:1875,deck:6,name:"Deck Stewards Berths 1-4"},{id:1876,deck:6,name:"Deck Stewards Berths 5-8"},{id:1877,deck:6,name:"Deck Stewards Berths 9-12"},{id:1878,deck:6,name:"2nd Class Stewards Berths 1-4"},{id:1879,deck:6,name:"2nd Class Stewards Berths 5-8"},{id:1880,deck:6,name:"2nd Class Stewards Berths 9-12"},{id:1881,deck:6,name:"2nd Class Stewards Berths 13-16"},{id:1882,deck:6,name:"2nd Class Stewards Berths 17-20"},{id:1883,deck:6,name:"2nd Class Stewards Berths 21-24"},{id:1884,deck:6,name:"2nd Class Stewards Berths 24-28"},{id:1885,deck:6,name:"2nd Class Stewards Berths 29-32"},{id:1886,deck:6,name:"2nd Class Stewards Berths 32-36"},{id:1887,deck:6,name:"2nd Class Stewards Berths 37-40"},{id:1888,deck:6,name:"3rd Class Stewards Berths 1-4"},{id:1889,deck:6,name:"3rd Class Stewards Berths 5-8"},{id:1890,deck:6,name:"3rd Class Stewards Berths 9-12"},{id:1891,deck:6,name:"3rd Class Stewards Berths 13-16"},{id:1892,deck:6,name:"3rd Class Stewards Berths 17-20"},{id:1893,deck:6,name:"3rd Class Stewards Berths 21-24"},{id:1894,deck:6,name:"3rd Class Stewards Berths 24-28"},{id:1895,deck:6,name:"3rd Class Stewards Berths 29-32"},{id:1896,deck:6,name:"3rd Class Stewards Berths 32-36"},{id:1897,deck:2,name:"A-Deck Stewardess"},{id:1898,deck:3,name:"B-Deck Stewardesses"},{id:1899,deck:4,name:"C-Deck Stewardesses"},{id:1900,deck:4,name:"C-Deck Stewardesses 2"},{id:1901,deck:4,name:"C-Deck Stewardesses 3"},{id:1902,deck:5,name:"D-Deck Stewardesses"},{id:1903,deck:6,name:"E-Deck Stewardesses"},{id:1904,deck:6,name:"E-Deck Stewardesses 2"},{id:786,deck:4,name:"Marconi and Postal Clerk's Saloon"},{id:787,deck:8,name:"G-Deck Firemen's Spiral Staircase"},{id:788,deck:7,name:"F-Deck Firemen's Spiral Staircase"},{id:789,deck:6,name:"E-Deck Firemen's Spiral Staircase"},{id:790,deck:5,name:"D-Deck Firemen's Spiral Staircase"},{id:1905,deck:1,name:"Marconi Operators"},{id:1906,deck:6,name:"Cooks Berths 1-4"},{id:1907,deck:6,name:"Cooks Berths 5-8"},{id:1908,deck:6,name:"Restaurant Cooks Berths 1-4"},{id:1909,deck:6,name:"Restaurant Cooks Berths 5-8"},{id:1910,deck:6,name:"Scullion Berths 1-4"},{id:1911,deck:6,name:"Scullion Berths 5-8"},{id:1912,deck:6,name:"Restaurant Waiters Berths 1-4"},{id:1913,deck:6,name:"Restaurant Waiters Berths 5-8"},{id:1914,deck:6,name:"Restaurant Scullery Men Berths 1-4"},{id:1915,deck:6,name:"Restaurant Specialized Chefs Berths 1-4"},{id:1916,deck:6,name:"Spare Crew Berths 1-4"},{id:1917,deck:6,name:"Spare Crew Berths 5-8"},{id:791,deck:1,name:"Officer's Smoke Room"},{id:792,deck:1,name:"Officer's Pantry"},{id:793,deck:1,name:"Officer's Mess"},{id:794,deck:1,name:"Officer's Mess Pantry"},{id:795,deck:1,name:"Engineer's Smoke Room"},{id:1918,deck:6,name:"Restaurant Cashier"},{id:1919,deck:4,name:"Doctor"},{id:1920,deck:4,name:"Assistant Doctor"},{id:1921,deck:4,name:"Restaurant Manager"},{id:1922,deck:4,name:"Chief Steward"},{id:1923,deck:7,name:"Turkish Bath Attendants"},{id:1924,deck:6,name:"Chefs Quarters"},{id:1925,deck:6,name:"Bakers Quarters"},{id:796,deck:1,name:"Marconi Room & Silent Room"},{id:797,deck:3,name:"Restaurant Pantry"},{id:798,deck:3,name:"Restaurant Galley"},{id:799,deck:10,name:"Cargo Hold No. 1"},{id:2534,deck:8,name:"G-Deck Bow Storeroom"},{id:801,deck:6,name:"E-Deck Aft 2nd Class Staircase"},{id:802,deck:7,name:"F-Deck Aft 2nd Class Staircase"},{id:804,deck:2,name:"A-Deck Forward Service Room"},{id:805,deck:2,name:"1st Class Smoke Room Bar"},{id:861,deck:5,name:"D-Deck 1st Class Ladies Lavatory"},{id:807,deck:3,name:"Chef's Office"},{id:808,deck:4,name:"Doctor's Office"},{id:809,deck:4,name:"Surgery"},{id:810,deck:5,name:"Hospital Corridor"},{id:811,deck:5,name:"Hospital Room No. 1"},{id:812,deck:5,name:"Hospital Room No. 2"},{id:813,deck:5,name:"Infectious Hospital Room No. 1"},{id:815,deck:8,name:"Boiler Room No. 6 Catwalks"},{id:816,deck:8,name:"Boiler Room No. 5 Catwalks"},{id:817,deck:6,name:"Boiler Room No. 6 Escape"},{id:818,deck:6,name:"Boiler Room No. 5 Escape"},{id:819,deck:7,name:"Boiler Room No. 6 Uptake Casing"},{id:820,deck:7,name:"Boiler Room No. 5 Uptake Casing"},{id:821,deck:1,name:"Boiler Room No. 6 Fidley"},{id:822,deck:1,name:"Boiler Room No. 5 Fidley"},{id:823,deck:8,name:"Boiler Room No. 4 Catwalks"},{id:824,deck:7,name:"Boiler Room No. 4 Uptake Casing"},{id:825,deck:6,name:"Boiler Room No. 4 Escape"},{id:826,deck:1,name:"Boiler Room No. 4 Fidley"},{id:827,deck:8,name:"Boiler Room No. 3 Catwalks"},{id:828,deck:7,name:"Boiler Room No. 3 Uptake Casing"},{id:829,deck:6,name:"Boiler Room No. 3 Escape"},{id:830,deck:1,name:"Boiler Room No. 3 Fidley"},{id:831,deck:8,name:"Boiler Room No. 2 Catwalks"},{id:832,deck:7,name:"Boiler Room No. 2 Uptake Casing"},{id:833,deck:6,name:"Boiler Room No. 2 Escape"},{id:834,deck:1,name:"Boiler Room No. 2 Fidley"},{id:835,deck:1,name:"Boiler Room No. 1 Fidley"},{id:836,deck:8,name:"Boiler Room No. 1 Catwalks"},{id:837,deck:7,name:"Boiler Room No. 1 Uptake Casing"},{id:838,deck:6,name:"Boiler Room No. 1 Escape"},{id:839,deck:6,name:"Superior Stewards Dormitory"},{id:1926,deck:6,name:"Superior Stewards Berths 1-4"},{id:1927,deck:6,name:"Superior Stewards Berths 5-8"},{id:1928,deck:6,name:"Superior Stewards Berths 9-12"},{id:840,deck:3,name:"B-Deck Forward Pantry"},{id:841,deck:3,name:"B-Deck Forward Service"},{id:842,deck:3,name:"B-Deck Midship Pantry"},{id:843,deck:3,name:"B-Deck Midship Service"},{id:844,deck:3,name:"Restaurant Wine Room"},{id:845,deck:4,name:"C-Deck Forward Pantry"},{id:846,deck:4,name:"C-Deck Forward Service"},{id:847,deck:4,name:"C-Deck Midship Pantry"},{id:848,deck:4,name:"C-Deck Midship Service"},{id:863,deck:4,name:"C-Deck Aft Crew Corridor"},{id:850,deck:4,name:"C-Deck Aft Service Room"},{id:851,deck:4,name:"Restaurant Linen Room"},{id:852,deck:5,name:"D-Deck Forward Pantry"},{id:853,deck:5,name:"D-Deck Forward Service"},{id:864,deck:5,name:"Infectious Hospital Room No. 2"},{id:865,deck:5,name:"D-Deck 1st Class Gents Lavatory"},{id:100,deck:35,name:"1st Class Dining Car"},{id:216,deck:20,name:"Ladies' Salon"},{id:150,deck:22,name:"Gare Maritime Train Platform"},{id:200,deck:18,name:"Aft Flying Bridge"},{id:201,deck:18,name:"Midship Flying Bridge"},{id:202,deck:18,name:"Forward Flying Bridge"},{id:203,deck:19,name:"Aft Open Air Promenade"},{id:204,deck:19,name:"Aft Enclosed Promenade"},{id:205,deck:19,name:"Port Promenade"},{id:206,deck:19,name:"Starboard Promenade"},{id:207,deck:19,name:"Forward Enclosed Promenade"},{id:208,deck:19,name:"Forward Open Air Promenade"},{id:209,deck:20,name:"Nomadic Forecastle"},{id:210,deck:20,name:"Nomadic Stern"},{id:211,deck:21,name:"Lower 1st Class Waiting"},{id:2e3,deck:12,name:"Bridge"},{id:2001,deck:13,name:"Officer's Promenade"},{id:2002,deck:13,name:"Cabin: Captain"},{id:2003,deck:13,name:"Chart Room"},{id:2004,deck:13,name:"Officer's Mess"},{id:2005,deck:13,name:"Chief Officer"},{id:2006,deck:13,name:"1st Officer"},{id:2007,deck:13,name:"2nd Officer"},{id:2008,deck:13,name:"3rd Officer"},{id:2009,deck:13,name:"4th Officer"},{id:2010,deck:13,name:"Marconi Shack"},{id:2011,deck:14,name:"1st Class Covered Promenade"},{id:2012,deck:14,name:"1st Class Smoking Room"},{id:2013,deck:14,name:"1st Class Smoking Room Bar"},{id:2014,deck:14,name:"1st Class Smoking Room Lavatory"},{id:2015,deck:14,name:"1st Class Open Promenade"},{id:2016,deck:14,name:"1st Class Covered Promenade"},{id:2017,deck:14,name:"1st Class Covered Promenade"},{id:2018,deck:14,name:"1st Class Library"},{id:2019,deck:14,name:"1st Class Entrance"},{id:2020,deck:14,name:"Corridor"},{id:2021,deck:14,name:"Captain's Lavatory"},{id:2022,deck:14,name:"A-1"},{id:2023,deck:14,name:"A-2"},{id:2024,deck:14,name:"A-3"},{id:2025,deck:14,name:"A-4"},{id:2026,deck:14,name:"A-5"},{id:2027,deck:14,name:"A-6"},{id:2028,deck:14,name:"A-7"},{id:2029,deck:14,name:"A-8"},{id:2030,deck:14,name:"A-9"},{id:2031,deck:14,name:"A-10"},{id:2032,deck:14,name:"A-11"},{id:2033,deck:14,name:"A-12"},{id:2034,deck:14,name:"A-14"},{id:2035,deck:14,name:"A-15"},{id:2036,deck:14,name:"A-16"},{id:2037,deck:14,name:"A-17"},{id:2038,deck:14,name:"A-18"},{id:2039,deck:14,name:"A-19"},{id:2040,deck:14,name:"A-20"},{id:2041,deck:14,name:"A-21"},{id:2042,deck:14,name:"A-22"},{id:2043,deck:14,name:"A-23"},{id:2044,deck:14,name:"A-24"},{id:2045,deck:14,name:"A-25"},{id:2046,deck:14,name:"A-26"},{id:2047,deck:14,name:"A-27"},{id:2048,deck:14,name:"Gents' Lavatory"},{id:2049,deck:14,name:"Ladies' Lavatory"},{id:2050,deck:14,name:"2nd Class Stairs"},{id:2051,deck:14,name:"2nd Class Open Promenade"},{id:2052,deck:14,name:"Ladies Room Vestibule"},{id:2053,deck:14,name:"2nd Class Ladies Room"},{id:2054,deck:14,name:"Smoking Room Vestibule"},{id:2055,deck:14,name:"2nd Class Smoking Room"},{id:2056,deck:14,name:"2nd Class Smoking Room Lavatory"},{id:2057,deck:14,name:"2nd Class Smoking Room Bar"},{id:2058,deck:14,name:"2nd Class Covered Promenade"},{id:2059,deck:14,name:"Poop Deck"},{id:2060,deck:15,name:"Forecastle"},{id:2061,deck:15,name:"3rd Class Open Promenade"},{id:2062,deck:15,name:"1st Class Dining Saloon"},{id:2063,deck:15,name:"Corridor"},{id:2064,deck:15,name:"Port Passenger Entrance"},{id:2065,deck:15,name:"Starboard Passenger Entrance"},{id:2066,deck:15,name:"1st Class Staircase"},{id:2067,deck:15,name:"Corridor"},{id:2068,deck:15,name:"Doctor's Cabin"},{id:2069,deck:15,name:"Purser's Cabin"},{id:2070,deck:15,name:"1st Class Bar"},{id:2071,deck:15,name:"Galley Corridor"},{id:2072,deck:15,name:"Galley"},{id:2073,deck:15,name:"Barber Shop"},{id:2074,deck:15,name:"Ladies Lavatory"},{id:2075,deck:15,name:"Gents Lavatory"},{id:2076,deck:15,name:"Corridor"},{id:2077,deck:15,name:"B-1"},{id:2078,deck:15,name:"B-2"},{id:2079,deck:15,name:"B-3"},{id:2080,deck:15,name:"B-4"},{id:2081,deck:15,name:"B-5"},{id:2082,deck:15,name:"B-6"},{id:2083,deck:15,name:"B-7"},{id:2084,deck:15,name:"B-8"},{id:2085,deck:15,name:"B-9"},{id:2086,deck:15,name:"B-10"},{id:2087,deck:15,name:"B-11"},{id:2088,deck:15,name:"B-12"},{id:2089,deck:15,name:"B-14"},{id:2090,deck:15,name:"B-15"},{id:2091,deck:15,name:"B-16"},{id:2092,deck:15,name:"B-17"},{id:2093,deck:15,name:"B-18"},{id:2094,deck:15,name:"B-19"},{id:2095,deck:15,name:"B-21"},{id:2096,deck:15,name:"B-23"},{id:2097,deck:15,name:"B-25"},{id:2098,deck:15,name:"B-27"},{id:2099,deck:15,name:"B-29"},{id:2100,deck:15,name:"B-31"},{id:2101,deck:15,name:"B-33"},{id:2102,deck:15,name:"B-35"},{id:2103,deck:15,name:"B-37"},{id:2104,deck:15,name:"B-38"},{id:2105,deck:15,name:"B-40"},{id:2106,deck:15,name:"B-42"},{id:2107,deck:15,name:"B-44"},{id:2108,deck:15,name:"B-46"},{id:2109,deck:15,name:"B-48"},{id:2110,deck:15,name:"B-50"},{id:2111,deck:15,name:"B-52"},{id:2112,deck:15,name:"B-54"},{id:2113,deck:15,name:"B-56"},{id:2114,deck:15,name:"B-58"},{id:2115,deck:15,name:"B-60"},{id:2116,deck:15,name:"Corridor"},{id:2117,deck:15,name:"Ladies Lavatory"},{id:2118,deck:15,name:"Assistant Purser's Office"},{id:2119,deck:15,name:"Ladies Lavatory"},{id:2120,deck:15,name:"Gents Lavatory"},{id:2121,deck:15,name:"Corridor"},{id:2122,deck:15,name:"2nd Class Dining Saloon"},{id:2123,deck:15,name:"3rd Class Open Promenade"},{id:2124,deck:15,name:"B-20"},{id:2125,deck:15,name:"B-22"},{id:2126,deck:15,name:"B-24"},{id:2127,deck:15,name:"B-26"},{id:2128,deck:15,name:"B-28"},{id:2129,deck:15,name:"B-30"},{id:2130,deck:15,name:"B-32"},{id:2131,deck:15,name:"B-34"},{id:2132,deck:15,name:"B-36"},{id:2133,deck:15,name:"B-39"},{id:2134,deck:15,name:"B-41"},{id:2135,deck:15,name:"B-43"},{id:2136,deck:15,name:"B-45"},{id:2137,deck:15,name:"B-47"},{id:2138,deck:15,name:"B-49"},{id:2139,deck:15,name:"B-51"},{id:2140,deck:15,name:"B-53"},{id:2141,deck:15,name:"B-55"},{id:2142,deck:15,name:"B-57"},{id:2143,deck:15,name:"B-59"},{id:2144,deck:15,name:"B-61"},{id:2145,deck:15,name:"B-63"},{id:2146,deck:15,name:"B-65"},{id:2147,deck:15,name:"B-67"},{id:2148,deck:15,name:"B-69"},{id:2149,deck:15,name:"B-71"},{id:2150,deck:15,name:"B-73"},{id:2151,deck:15,name:"B-75"},{id:2152,deck:15,name:"B-77"},{id:2153,deck:16,name:"3rd Class Enclosed Promenade"},{id:2154,deck:16,name:"Gents' Lavatory"},{id:2155,deck:16,name:"Ladies' Lavatory"},{id:2156,deck:16,name:"3rd Class Smoking Room"},{id:2157,deck:16,name:"3rd Class Ladies Room"},{id:2158,deck:16,name:"3rd Class Dining Saloon"},{id:2159,deck:16,name:"Crew Passage 1"},{id:2160,deck:16,name:"Master-at-Arms"},{id:2161,deck:16,name:"Lockdown Room"},{id:2162,deck:16,name:"Crew Passage 2"},{id:2576,deck:5,name:"Seamens Berths 1-4"},{id:2577,deck:5,name:"Seamens Berths 5-8"},{id:2578,deck:5,name:"Seamens Berths 9-12"},{id:2165,deck:16,name:"Crew Passage 3"},{id:2166,deck:16,name:"Engineer's Mess"},{id:2167,deck:16,name:"Men's Hospital"},{id:2168,deck:16,name:"Women's Hospital"},{id:2169,deck:16,name:"Crew Lavatory"},{id:2170,deck:16,name:"Corridor"},{id:2171,deck:16,name:"Corridor"},{id:2172,deck:16,name:"Corridor"},{id:2173,deck:16,name:"3rd Class Aft Enclosed Promenade"},{id:2174,deck:16,name:"Ladies' Lavatory"},{id:2175,deck:16,name:"Gents' Lavatory"},{id:2176,deck:17,name:"3rd Class Open Space (Hold 2)"},{id:2177,deck:17,name:"3rd Class Open Space (Hold 3)"},{id:2178,deck:17,name:"Corridor"},{id:2179,deck:17,name:"Corridor"},{id:101,deck:35,name:"1st Class Smoking Car"},{id:102,deck:34,name:"Deauville Corridor"},{id:103,deck:34,name:"Compartment 1"},{id:104,deck:34,name:"Compartment 2"},{id:105,deck:34,name:"Compartment 3"},{id:106,deck:34,name:"Compartment 4"},{id:107,deck:34,name:"Compartment 5"},{id:108,deck:34,name:"Compartment 6"},{id:109,deck:34,name:"Compartment 7"},{id:110,deck:34,name:"Compartment 8"},{id:111,deck:34,name:"Deauville Lavatory Forward"},{id:112,deck:34,name:"Deauville Lavatory Rear"},{id:2180,deck:17,name:"Engine Room Casing"},{id:2181,deck:16,name:"Engine Room Casing"},{id:2182,deck:15,name:"Engine Room Casing"},{id:2183,deck:14,name:"Engine Room Casing"},{id:113,deck:34,name:"Holding Compartment"},{id:151,deck:22,name:"Gare Maritime Dock"},{id:152,deck:22,name:"Cherbourg Holding Cell"},{id:212,deck:20,name:"Cooldown Room"},{id:2184,deck:15,name:"Afterdeck"},{id:2185,deck:15,name:"3rd Class Aft Staircase"},{id:2186,deck:15,name:"3rd Class Forward Staircase"},{id:2187,deck:16,name:"3rd Class Entrance"},{id:2188,deck:15,name:"Dining Saloon Entresol"},{id:2189,deck:17,name:"Corridor"},{id:2190,deck:17,name:"Corridor"},{id:2191,deck:16,name:"Fidley"},{id:2192,deck:16,name:"Firemen's Quarters"},{id:2193,deck:16,name:"Crew Open Space"},{id:2194,deck:16,name:"Petty Officers Mess"},{id:2195,deck:16,name:"Petty Officers Dormitory 1"},{id:2196,deck:16,name:"Petty Officers Dormitory 2"},{id:2197,deck:16,name:"Quartermasters Dormitory 1"},{id:2198,deck:16,name:"Quartermasters Dormitory 2"},{id:2199,deck:16,name:"Quartermasters Mess"},{id:2200,deck:13,name:"Officer's Promenade"},{id:2201,deck:12,name:"Wheelhouse"},{id:2202,deck:17,name:"Fidley"},{id:2203,deck:15,name:"Fidley"},{id:2204,deck:14,name:"Fidley"},{id:2205,deck:17,name:"3rd Class Open Space (Hold 6)"},{id:2206,deck:17,name:"3rd Class Open Space (Hold 5)"},{id:114,deck:33,name:"Trouville Corridor"},{id:115,deck:33,name:"Compartment 9"},{id:116,deck:33,name:"Compartment 10"},{id:117,deck:33,name:"Compartment 11"},{id:118,deck:33,name:"Compartment 12"},{id:119,deck:33,name:"Compartment 14"},{id:120,deck:33,name:"Compartment 15"},{id:121,deck:33,name:"Compartment 16"},{id:122,deck:33,name:"Trouville Lavatory Rear"},{id:123,deck:33,name:"Trouville Lavatory Forward"},{id:124,deck:33,name:"Powder Room"},{id:2207,deck:15,name:"2nd Class Dining Saloon Pantry"},{id:2208,deck:15,name:"1st Class Dining Saloon Pantry"},{id:2209,deck:15,name:"Scullery"},{id:153,deck:22,name:"Hall of Embarkation"},{id:154,deck:22,name:"Toilette Messieurs"},{id:155,deck:22,name:"Toilette Dames"},{id:149,deck:27,name:"Salle Des Pas Perdus"},{id:156,deck:26,name:"Odd Shack"},{id:157,deck:26,name:"Bassin du Commerce"},{id:158,deck:26,name:"Bar de la Marine"},{id:159,deck:26,name:"Café Frei"},{id:160,deck:26,name:"Cherbourg Southern Trainyard"},{id:161,deck:26,name:"Restaurant de l'Hôtel France"},{id:856,deck:8,name:"G-Deck 3rd Class Staircase"},{id:857,deck:8,name:"G-Deck Aft 2nd Class Staircase"},{id:858,deck:8,name:"1st Class Baggage Hold"},{id:859,deck:8,name:"Post Office"},{id:860,deck:9,name:"Aft Cargo Hold"},{id:125,deck:35,name:"Staff Dining"},{id:126,deck:32,name:"Salon Car"},{id:5,deck:61,name:"Berth 44 Forward Docks"},{id:213,deck:21,name:"Lower 2nd Class Waiting"},{id:214,deck:20,name:"Midship 1st Class Waiting"},{id:219,deck:20,name:"Forward 1st Class Waiting"},{id:215,deck:20,name:"Midship 1st Class Waiting"},{id:220,deck:20,name:"2nd Class Waiting"},{id:148,deck:27,name:"Platform 24"},{id:217,deck:20,name:"Gent's Lavatory"},{id:127,deck:32,name:"Office Vestibule"},{id:218,deck:20,name:"Ladies' Lavatory"},{id:866,deck:4,name:"1st Class Enquiry Office"},{id:868,deck:7,name:"Steam Room"},{id:869,deck:7,name:"Hot Room"},{id:870,deck:6,name:"Restaurant Waiter's Dormitory"},{id:871,deck:6,name:"E-Deck Section Q Corridor"},{id:872,deck:6,name:"E-Deck Sections M & K Corridor"},{id:873,deck:6,name:"2nd Class Barber Shop"},{id:7,deck:29,name:"Southampton Streets"},{id:8,deck:29,name:"Hoglands Park"},{id:9,deck:29,name:"The Brass Barrel Tavern"},{id:10,deck:29,name:"Dark Alleyway"},{id:11,deck:29,name:"South Western Hotel Restaurant"},{id:12,deck:29,name:"Alexander's Tea Room"},{id:13,deck:29,name:"The White Falcon Cinema"},{id:14,deck:61,name:"Berth 44 Aft Docks"},{id:15,deck:29,name:"Southampton Dockside"},{id:16,deck:29,name:"Southampton Outhouses"},{id:874,deck:36,name:"Officer's Quarters Starboard Roof"},{id:877,deck:36,name:"Deckhouse Forward Skylights"},{id:875,deck:36,name:"Officer's Quarters Port Roof"},{id:878,deck:36,name:"Grand Staircase Port Roof"},{id:879,deck:36,name:"Grand Staircase Starboard Roof"},{id:880,deck:36,name:"Officer's Mess Roof"},{id:881,deck:36,name:"Funnel No. 3 Base"},{id:882,deck:36,name:"Engineer's Skylight Roof"},{id:883,deck:36,name:"Funnel No. 4 Base"},{id:884,deck:36,name:"2nd Class Staircase Roof"},{id:954,deck:7,name:"F-Deck Section R Corridor"},{id:128,deck:30,name:"2nd Class Smoking Car"},{id:129,deck:30,name:"2nd Class Dining Car"},{id:130,deck:31,name:"Granville Corridor"},{id:131,deck:31,name:"Compartment A"},{id:132,deck:31,name:"Compartment B"},{id:133,deck:31,name:"Compartment C"},{id:134,deck:31,name:"Compartment D"},{id:135,deck:31,name:"Compartment E"},{id:136,deck:31,name:"Compartment F"},{id:137,deck:31,name:"Compartment G"},{id:138,deck:31,name:"Compartment H"},{id:139,deck:31,name:"Granville Lavatory Rear"},{id:140,deck:31,name:"Granville Lavatory Forward"},{id:2210,deck:16,name:"Carpathia Crew 1"},{id:2211,deck:16,name:"Carpathia Crew 2"},{id:2212,deck:16,name:"Carpathia Crew 3"},{id:2213,deck:16,name:"Carpathia Crew 4"},{id:2214,deck:16,name:"Carpathia Crew 5"},{id:2215,deck:16,name:"Carpathia Crew 6"},{id:2216,deck:16,name:"Carpathia Crew 7"},{id:2217,deck:16,name:"Carpathia Crew 8"},{id:2218,deck:16,name:"Carpathia Crew 9"},{id:2219,deck:16,name:"Carpathia Crew 10"},{id:2220,deck:16,name:"1"},{id:2221,deck:16,name:"2"},{id:2222,deck:16,name:"3"},{id:2223,deck:16,name:"4"},{id:2224,deck:16,name:"5"},{id:2225,deck:16,name:"6"},{id:2226,deck:16,name:"7"},{id:2227,deck:16,name:"8"},{id:2228,deck:16,name:"9"},{id:2229,deck:16,name:"10"},{id:2230,deck:16,name:"11"},{id:2231,deck:16,name:"12"},{id:2232,deck:16,name:"13"},{id:2233,deck:16,name:"14"},{id:2234,deck:16,name:"15"},{id:2235,deck:16,name:"16"},{id:2236,deck:16,name:"17"},{id:2237,deck:16,name:"18"},{id:2238,deck:16,name:"19"},{id:2239,deck:16,name:"20"},{id:2240,deck:16,name:"21"},{id:2241,deck:16,name:"22"},{id:2242,deck:16,name:"23"},{id:2243,deck:16,name:"24"},{id:2244,deck:16,name:"25"},{id:2245,deck:16,name:"26"},{id:2246,deck:16,name:"27"},{id:2247,deck:16,name:"28"},{id:2248,deck:16,name:"29"},{id:2249,deck:16,name:"30"},{id:2250,deck:16,name:"31"},{id:2251,deck:16,name:"32"},{id:2252,deck:16,name:"33"},{id:2253,deck:16,name:"34"},{id:2254,deck:16,name:"35"},{id:2255,deck:16,name:"36"},{id:2256,deck:16,name:"37"},{id:2257,deck:16,name:"38"},{id:2258,deck:16,name:"39"},{id:2259,deck:16,name:"40"},{id:2260,deck:16,name:"41"},{id:2261,deck:16,name:"42"},{id:2262,deck:16,name:"43"},{id:2263,deck:16,name:"44"},{id:2264,deck:16,name:"45"},{id:2265,deck:16,name:"46"},{id:2266,deck:16,name:"47"},{id:2267,deck:16,name:"48"},{id:2268,deck:16,name:"49"},{id:2269,deck:16,name:"50"},{id:2270,deck:16,name:"51"},{id:2271,deck:16,name:"52"},{id:2272,deck:16,name:"53"},{id:2273,deck:16,name:"54"},{id:2274,deck:16,name:"55"},{id:2275,deck:16,name:"56"},{id:2276,deck:16,name:"57"},{id:2277,deck:16,name:"58"},{id:2278,deck:16,name:"59"},{id:2279,deck:16,name:"60"},{id:2280,deck:16,name:"61"},{id:2281,deck:16,name:"62"},{id:2282,deck:16,name:"63"},{id:2283,deck:16,name:"64"},{id:2284,deck:16,name:"65"},{id:2285,deck:16,name:"66"},{id:2286,deck:16,name:"67"},{id:2287,deck:16,name:"68"},{id:2288,deck:16,name:"69"},{id:2289,deck:16,name:"70"},{id:2290,deck:16,name:"71"},{id:2291,deck:16,name:"72"},{id:2292,deck:16,name:"73"},{id:2293,deck:16,name:"74"},{id:2294,deck:16,name:"75"},{id:2295,deck:16,name:"76"},{id:2296,deck:16,name:"77"},{id:2297,deck:16,name:"78"},{id:2298,deck:16,name:"79"},{id:2299,deck:16,name:"80"},{id:2300,deck:16,name:"81"},{id:2301,deck:16,name:"82"},{id:2302,deck:16,name:"83"},{id:2303,deck:16,name:"84"},{id:2304,deck:16,name:"85"},{id:2305,deck:16,name:"86"},{id:2306,deck:16,name:"87"},{id:2307,deck:16,name:"88"},{id:2308,deck:16,name:"89"},{id:2309,deck:16,name:"90"},{id:2310,deck:16,name:"91"},{id:2311,deck:16,name:"92"},{id:2312,deck:16,name:"93"},{id:2313,deck:16,name:"94"},{id:2314,deck:16,name:"95"},{id:2315,deck:16,name:"96"},{id:2316,deck:16,name:"97"},{id:2317,deck:16,name:"98"},{id:2318,deck:16,name:"99"},{id:2319,deck:16,name:"100"},{id:2320,deck:16,name:"101"},{id:2321,deck:16,name:"102"},{id:2322,deck:16,name:"103"},{id:2323,deck:16,name:"104"},{id:2324,deck:16,name:"105"},{id:2325,deck:16,name:"106"},{id:2326,deck:16,name:"107"},{id:2327,deck:16,name:"108"},{id:2328,deck:16,name:"109"},{id:2329,deck:16,name:"110"},{id:2330,deck:16,name:"111"},{id:2331,deck:16,name:"112"},{id:2332,deck:16,name:"113"},{id:2333,deck:16,name:"114"},{id:2334,deck:16,name:"115"},{id:2335,deck:16,name:"116"},{id:2336,deck:16,name:"117"},{id:2337,deck:16,name:"118"},{id:2338,deck:16,name:"119"},{id:2339,deck:16,name:"120"},{id:2340,deck:16,name:"121"},{id:2341,deck:16,name:"122"},{id:2342,deck:16,name:"123"},{id:2343,deck:16,name:"124"},{id:2344,deck:16,name:"125"},{id:2345,deck:16,name:"126"},{id:2346,deck:16,name:"127"},{id:2347,deck:16,name:"128"},{id:2348,deck:16,name:"129"},{id:2349,deck:16,name:"130"},{id:2350,deck:16,name:"131"},{id:2351,deck:16,name:"132"},{id:2352,deck:16,name:"133"},{id:2353,deck:16,name:"134"},{id:2354,deck:16,name:"135"},{id:2355,deck:16,name:"136"},{id:2356,deck:16,name:"137"},{id:2357,deck:16,name:"138"},{id:2358,deck:16,name:"139"},{id:2359,deck:16,name:"140"},{id:2360,deck:16,name:"141"},{id:2361,deck:16,name:"142"},{id:2362,deck:16,name:"143"},{id:2363,deck:16,name:"144"},{id:2364,deck:16,name:"145"},{id:2365,deck:16,name:"146"},{id:2366,deck:16,name:"147"},{id:2367,deck:16,name:"148"},{id:2368,deck:16,name:"149"},{id:2369,deck:16,name:"150"},{id:890,deck:1,name:"Officer's Corridor"},{id:891,deck:5,name:"D-Deck Aft 2nd Class Corridor"},{id:892,deck:4,name:"Firemen's Mess"},{id:893,deck:1,name:"Officer's Lavatory"},{id:894,deck:1,name:"Officer's Bath"},{id:895,deck:2,name:"A-Deck 1st Class Gents Lavatory"},{id:896,deck:2,name:"A-Deck 1st Class Ladies Lavatory"},{id:897,deck:2,name:"A-Deck 1st Class Bath"},{id:898,deck:2,name:"A-Deck 1st Class Bath"},{id:899,deck:2,name:"1st Class Smoking Room Lavatory"},{id:900,deck:3,name:"B-Deck 1st Class Gents Lavatory"},{id:901,deck:3,name:"B-Deck 1st Class Ladies Lavatory"},{id:902,deck:3,name:"B-Deck 1st Class Bath"},{id:903,deck:3,name:"B-Deck 1st Class Bath"},{id:918,deck:5,name:"Hospital Lavatory"},{id:904,deck:3,name:"2nd Class Smoking Room Lavatory"},{id:905,deck:4,name:"C-Deck 1st Class Bath"},{id:906,deck:5,name:"D-Deck 1st Class Bath"},{id:907,deck:6,name:"E-Deck 1st Class Bath"},{id:908,deck:6,name:"E-Deck 1st Class Bath"},{id:909,deck:6,name:"E-Deck 3rd Class Men's Lavatory"},{id:910,deck:6,name:"E-Deck 3rd Class Woman's Lavatory"},{id:911,deck:6,name:"E-Deck Crew Bath"},{id:912,deck:6,name:"E-Deck Aft 3rd Class Woman's Lav."},{id:913,deck:6,name:"E-Deck Aft 3rd Class Men's Lav."},{id:914,deck:6,name:"E-Deck 2nd Class Gents Lavatory"},{id:915,deck:6,name:"E-Deck 2nd Class Ladies Lavatory"},{id:916,deck:6,name:"E-Deck 2nd Class Bath"},{id:917,deck:7,name:"F-Deck Firemen's Wash Closet"},{id:920,deck:5,name:"D-Deck 2nd Class Ladies Lavatory"},{id:921,deck:5,name:"D-Deck 2nd Class Gents Lavatory"},{id:922,deck:5,name:"D-Deck 2nd Class Bath"},{id:923,deck:5,name:"D-Deck 2nd Class Bath"},{id:924,deck:5,name:"D-Deck 3rd Class Bath"},{id:925,deck:5,name:"D-Deck 3rd Class Bath"},{id:926,deck:5,name:"D-Deck 3rd Class Men's Lavatory"},{id:927,deck:5,name:"D-Deck 3rd Class Women's Lavatory"},{id:928,deck:7,name:"Engineer's Lavatory"},{id:929,deck:7,name:"Engineer's Bath"},{id:930,deck:7,name:"F-Deck 2nd Class Bath"},{id:931,deck:7,name:"F-Deck 2nd Class Gents Lavatory"},{id:932,deck:7,name:"F-Deck 2nd Class Ladies Lavatory"},{id:936,deck:3,name:"B-Deck Midship 1st Class Gents Lav."},{id:935,deck:3,name:"B-Deck Midship 1st Class Ladies Lav."},{id:934,deck:4,name:"C-Deck Midship 1st Class Gents Lav."},{id:933,deck:4,name:"C-Deck Midship 1st Class Ladies Lav."},{id:147,deck:27,name:"Atrium-Salon du Grand Hôtel Terminus"},{id:146,deck:27,name:"Restaurant du Grand Hôtel Terminus "},{id:145,deck:27,name:"Saint-Lazare Holding Cell"},{id:937,deck:10,name:"Bilge & Ballast Pumps"},{id:938,deck:10,name:"Refrigerating Engines"},{id:939,deck:9,name:"Upper Reciprocating Engine Room"},{id:940,deck:6,name:"Engine Casing"},{id:941,deck:5,name:"Engineer's Skylight Shaft"},{id:670,deck:6,name:"Chief 2nd Class Steward's Office"},{id:942,deck:8,name:"G-Deck Section D Corridor"},{id:943,deck:5,name:"1st Class Saloon Pantry"},{id:944,deck:1,name:"Dog Kennels"},{id:1929,deck:6,name:"Confectioners Quarters "},{id:945,deck:4,name:"Anchor Windlass Room"},{id:2460,deck:4,name:"Greaser's Mess"},{id:946,deck:7,name:"F-Deck 2nd Class Corridor"},{id:947,deck:5,name:"2nd Class Saloon Pantry"},{id:99,deck:41,name:"Mayor's Residence"},{id:948,deck:6,name:"E-Deck Aft 2nd Class Corridor"},{id:949,deck:7,name:"F-Deck Section E Corridor"},{id:950,deck:7,name:"F-Deck Section C Corridor"},{id:951,deck:7,name:"Squash Court Entrance"},{id:952,deck:6,name:"E-Deck 2nd Class Corridor"},{id:953,deck:6,name:"Restaurant Staff Lavatory"},{id:955,deck:8,name:"Blanket Store"},{id:956,deck:8,name:"G-Deck Section S Corridor"},{id:957,deck:8,name:"G-Deck Section N Corridor"},{id:958,deck:6,name:"E-Deck Midship 2nd Class Corridor"},{id:959,deck:4,name:"Crew Doctor"},{id:960,deck:4,name:"Crew Hospital Rooms"},{id:961,deck:5,name:"3rd Class Doctor"},{id:962,deck:5,name:"3rd Class Doctor's Waiting Room"},{id:17,deck:37,name:"Starboard Promenade"},{id:18,deck:37,name:"Port Promenade"},{id:19,deck:37,name:"Stern"},{id:20,deck:37,name:"Forecastle"},{id:21,deck:37,name:"Waiting Room"},{id:23,deck:38,name:"Boarding Platform"},{id:22,deck:38,name:"Upper Waiting"},{id:24,deck:38,name:"Bridge"},{id:1930,deck:6,name:"Wine Bottlers Quarters"},{id:963,deck:7,name:"3rd Class Steward's Dormitory"},{id:25,deck:39,name:"Starboard Promenade"},{id:26,deck:40,name:"Boarding Platform"},{id:300,deck:41,name:"Heartbreak Pier"},{id:27,deck:39,name:"Port Promenade"},{id:28,deck:39,name:"Stern"},{id:29,deck:39,name:"Forecastle"},{id:30,deck:39,name:"Waiting Room"},{id:31,deck:40,name:"Upper Waiting"},{id:32,deck:40,name:"Bridge"},{id:33,deck:39,name:"2nd Class Waiting"},{id:34,deck:37,name:"Holding Compartment"},{id:35,deck:39,name:"Holding Compartment"},{id:301,deck:41,name:"The Promenade"},{id:302,deck:41,name:"The Fabian Stables"},{id:303,deck:41,name:"The Lookout"},{id:304,deck:41,name:"Whitepoint Strand"},{id:305,deck:41,name:"St. Colemans R.C. Church"},{id:306,deck:41,name:"Casement Square"},{id:964,deck:6,name:"Potato Storeroom"},{id:307,deck:41,name:"Wishing Well"},{id:965,deck:9,name:"Bulk Store"},{id:966,deck:9,name:"Stewards Working Space"},{id:967,deck:9,name:"Empties"},{id:968,deck:8,name:"Refrigeration Store Hoist"},{id:969,deck:5,name:"Emergency Dynamos"},{id:971,deck:6,name:"Engineer's Office"},{id:972,deck:8,name:"Grocery Bulk Store"},{id:973,deck:9,name:"Grocery Storeroom"},{id:974,deck:4,name:"Lamp Room"},{id:1931,deck:6,name:"Boatswains Quarters"},{id:1932,deck:6,name:"Boatswains Mates Quarters"},{id:1933,deck:6,name:"Carpenter & Joiners Quarters"},{id:1934,deck:6,name:"Smoke Room Keepers Quarters"},{id:1935,deck:6,name:"Head Chefs Quarters"},{id:1936,deck:6,name:"Head Restaurant Chefs Quarters"},{id:1938,deck:6,name:"Chief Storekeepers Quarters"},{id:1939,deck:6,name:"Head Waiters Quarters"},{id:1940,deck:7,name:"Chief Engineers Quarters"},{id:1941,deck:6,name:"Chief Bakers Quarters"},{id:1942,deck:6,name:"Interpreters Quarters"},{id:1943,deck:6,name:"2nd Class Stewardesses"},{id:1944,deck:6,name:"Matron Stewardess"},{id:975,deck:6,name:"E-Deck 3rd Class Pantry"},{id:976,deck:6,name:"E-Deck 2nd Class Pantry"},{id:977,deck:7,name:"3rd Class Saloon Pantry"},{id:978,deck:5,name:"D-Deck Section O Corridor"},{id:979,deck:6,name:"E-Deck 2nd Class Entrance"},{id:980,deck:10,name:"Electric Engine Room"},{id:308,deck:49,name:"Roberts Family Café"},{id:309,deck:49,name:"Sullivan's Gourmet Restaurant"},{id:310,deck:49,name:"Stock Pot Pub"},{id:311,deck:49,name:"O'Malley's Restaurant & Ale House"},{id:312,deck:49,name:"The Frances Arms Bar"},{id:313,deck:49,name:"White Star Line Ticket Office"},{id:981,deck:3,name:"3rd Class Forward Promenade"},{id:314,deck:49,name:"Harbour Row Streets"},{id:315,deck:42,name:"Queens Hotel Room 1"},{id:316,deck:42,name:"Queens Hotel Room 9"},{id:317,deck:42,name:"Queens Hotel Room 15"},{id:318,deck:42,name:"Queens Hotel Room 19"},{id:319,deck:44,name:"Queens Hotel Room 47"},{id:320,deck:44,name:"Queens Hotel Room 43"},{id:321,deck:44,name:"Queens Hotel Room 39"},{id:322,deck:44,name:"Queens Hotel Room 33"},{id:323,deck:44,name:"Queens Hotel Room 29"},{id:324,deck:45,name:"Queens Hotel Room 57"},{id:325,deck:45,name:"Queens Hotel Room 61"},{id:326,deck:45,name:"Queens Hotel Room 67"},{id:327,deck:45,name:"Queens Hotel Room 71"},{id:328,deck:45,name:"Queens Hotel Room 75"},{id:329,deck:42,name:"Queens Hotel Room 25 (Queens Suite)"},{id:330,deck:44,name:"Queens Hotel Room 53 (Noble Suite)"},{id:331,deck:44,name:"Queens Hotel Room 55 (Noble Suite)"},{id:332,deck:42,name:"Queens Hotel Room 27 (Regents Suite)"},{id:333,deck:42,name:"Queens Hotel Room 6"},{id:337,deck:42,name:"Queens Hotel Room 3"},{id:334,deck:44,name:"Queens Hotel Room 34"},{id:335,deck:45,name:"Queens Hotel Room 62"},{id:336,deck:42,name:"Queens Hotel Room 5"},{id:338,deck:42,name:"Queens Hotel Room 11"},{id:339,deck:42,name:"Queens Hotel Room 17"},{id:340,deck:42,name:"Queens Hotel Room 21"},{id:341,deck:44,name:"Queens Hotel Room 49"},{id:342,deck:44,name:"Queens Hotel Room 45"},{id:343,deck:44,name:"Queens Hotel Room 41"},{id:344,deck:44,name:"Queens Hotel Room 35"},{id:345,deck:44,name:"Queens Hotel Room 31"},{id:983,deck:4,name:"3rd Class Starboard Covered Promenade"},{id:346,deck:41,name:"Queenstown Holding Cell"},{id:347,deck:43,name:"Queens Hotel Restaurant"},{id:348,deck:49,name:"Harbour Row Latrines"},{id:349,deck:43,name:"Queens Hotel Drawing Room"},{id:350,deck:49,name:"Wildsage Medicinal Herbs & Spices"},{id:351,deck:43,name:"Queens Hotel Smoking Lounge"},{id:352,deck:43,name:"Queens Hotel Kitchen"},{id:353,deck:43,name:"Queens Hotel Managers Office"},{id:354,deck:49,name:"Queen's Harbour Books & Ink"},{id:355,deck:49,name:"Dead End Back Alley"},{id:356,deck:49,name:"Kyes Memorial Library"},{id:357,deck:49,name:"Kyes Memorial Library Reading Room"},{id:358,deck:45,name:"Queens Hotel Room 78 (Cornerstone Suite)"},{id:359,deck:45,name:"Queens Hotel Room 65 (Comfort Suite)"},{id:360,deck:45,name:"Queens Hotel Room 64 (Comfort Suite)"},{id:361,deck:45,name:"Queens Hotel Floor 4 Bath"},{id:362,deck:49,name:"Coal Sauna & Bath House"},{id:363,deck:45,name:"Queens Hotel Room 59"},{id:364,deck:45,name:"Queens Hotel Room 63"},{id:365,deck:45,name:"Queens Hotel Room 69"},{id:366,deck:45,name:"Queens Hotel Room 73"},{id:367,deck:45,name:"Queens Hotel Room 77"},{id:368,deck:45,name:"Queens Hotel Room 58"},{id:369,deck:45,name:"Queens Hotel Room 66"},{id:370,deck:45,name:"Queens Hotel Room 70"},{id:371,deck:45,name:"Queens Hotel Room 74"},{id:372,deck:45,name:"Queens Hotel Room 60"},{id:373,deck:45,name:"Queens Hotel Room 68"},{id:374,deck:45,name:"Queens Hotel Room 72"},{id:375,deck:45,name:"Queens Hotel Room 76"},{id:376,deck:42,name:"Queens Hotel Floor 2 Corridor"},{id:377,deck:44,name:"Queens Hotel Floor 3 Corridor"},{id:379,deck:45,name:"Queens Hotel Floor 4 Corridor"},{id:378,deck:43,name:"Queens Hotel Promenade Foyer"},{id:984,deck:9,name:"Refrigerated Cargo"},{id:380,deck:44,name:"Queens Hotel Room 36 (Comfort Suite)"},{id:381,deck:44,name:"Queens Hotel Room 37 (Comfort Suite)"},{id:382,deck:44,name:"Queens Hotel Room 51 (Irish Suite)"},{id:384,deck:44,name:"Queens Hotel Room 30"},{id:385,deck:44,name:"Queens Hotel Room 38"},{id:386,deck:44,name:"Queens Hotel Room 42"},{id:387,deck:44,name:"Queens Hotel Room 46"},{id:388,deck:44,name:"Queens Hotel Room 50"},{id:389,deck:44,name:"Queens Hotel Room 54"},{id:390,deck:44,name:"Queens Hotel Room 32"},{id:391,deck:44,name:"Queens Hotel Room 40"},{id:392,deck:44,name:"Queens Hotel Room 44"},{id:393,deck:44,name:"Queens Hotel Room 48"},{id:394,deck:44,name:"Queens Hotel Room 52"},{id:395,deck:44,name:"Queens Hotel Room 56"},{id:396,deck:44,name:"Queens Hotel Floor 3 Bath"},{id:397,deck:42,name:"Queens Hotel Room 23 (Irish Suite)"},{id:398,deck:42,name:"Queens Hotel Room 7 (Irish Suite)"},{id:399,deck:42,name:"Queens Hotel Room 8 (Irish Suite)"},{id:400,deck:42,name:"Queens Hotel Floor 2 Bath"},{id:401,deck:42,name:"Queens Hotel Room 2"},{id:402,deck:42,name:"Queens Hotel Room 10"},{id:403,deck:42,name:"Queens Hotel Room 14"},{id:404,deck:42,name:"Queens Hotel Room 18"},{id:405,deck:42,name:"Queens Hotel Room 22"},{id:406,deck:42,name:"Queens Hotel Room 26"},{id:407,deck:42,name:"Queens Hotel Room 4"},{id:408,deck:42,name:"Queens Hotel Room 12"},{id:409,deck:42,name:"Queens Hotel Room 16"},{id:410,deck:42,name:"Queens Hotel Room 20"},{id:411,deck:42,name:"Queens Hotel Room 24"},{id:412,deck:42,name:"Queens Hotel Room 28"},{id:985,deck:8,name:"G-Deck Section F Corridor"},{id:550,deck:5,name:"1st Class Dining Saloon Section D"},{id:549,deck:5,name:"1st Class Dining Saloon Section E"},{id:548,deck:5,name:"1st Class Dining Saloon Section F"},{id:547,deck:5,name:"1st Class Dining Saloon Section G"},{id:540,deck:5,name:"2nd Class Dining Saloon Section E"},{id:539,deck:7,name:"3rd Class Aft Dining Saloon Section A"},{id:986,deck:6,name:"E-Deck 1st Class Pantry"},{id:413,deck:46,name:"Emigrant Row Smoking Lounge"},{id:414,deck:46,name:"Emigrant Row Dining Room"},{id:415,deck:46,name:"Emigrant Row Bath"},{id:417,deck:47,name:"Emigrant Row Room 1"},{id:418,deck:48,name:"Emigrant Row Room 19"},{id:419,deck:47,name:"Emigrant Row Room 2"},{id:420,deck:48,name:"Emigrant Row Room 20"},{id:421,deck:47,name:"Emigrant Row Room 3"},{id:422,deck:48,name:"Emigrant Row Room 21"},{id:423,deck:47,name:"Emigrant Row Room 4"},{id:424,deck:48,name:"Emigrant Row Room 22"},{id:425,deck:47,name:"Emigrant Row Room 5"},{id:426,deck:48,name:"Emigrant Row Room 23"},{id:427,deck:47,name:"Emigrant Row Room 7"},{id:428,deck:48,name:"Emigrant Row Room 24"},{id:429,deck:47,name:"Emigrant Row Room 8"},{id:430,deck:48,name:"Emigrant Row Room 25"},{id:431,deck:47,name:"Emigrant Row Room 9"},{id:432,deck:48,name:"Emigrant Row Room 26"},{id:433,deck:47,name:"Emigrant Row Room 10"},{id:434,deck:48,name:"Emigrant Row Room 27"},{id:435,deck:47,name:"Emigrant Row Room 11"},{id:436,deck:48,name:"Emigrant Row Room 28"},{id:437,deck:47,name:"Emigrant Row Room 12"},{id:438,deck:48,name:"Emigrant Row Room 29"},{id:440,deck:47,name:"Emigrant Row Room 14"},{id:441,deck:48,name:"Emigrant Row Room 30"},{id:442,deck:47,name:"Emigrant Row Room 15"},{id:443,deck:48,name:"Emigrant Row Room 31"},{id:444,deck:47,name:"Emigrant Row Room 16"},{id:445,deck:48,name:"Emigrant Row Room 32"},{id:446,deck:47,name:"Emigrant Row Room 17"},{id:447,deck:48,name:"Emigrant Row Room 33"},{id:448,deck:47,name:"Emigrant Row Room 18"},{id:449,deck:48,name:"Emigrant Row Room 34"},{id:987,deck:2,name:"A-Deck Grand Staircase Elevators"},{id:988,deck:3,name:"B-Deck Grand Staircase Elevators"},{id:989,deck:4,name:"C-Deck Grand Staircase Elevators"},{id:990,deck:5,name:"D-Deck Reception Room Elevators"},{id:992,deck:1,name:"Boat Deck 2nd Class Staircase Elevator"},{id:993,deck:2,name:"A-Deck 2nd Class Staircase Elevator"},{id:994,deck:3,name:"B-Deck 2nd Class Staircase Elevator"},{id:991,deck:6,name:"E-Deck Grand Staircase Elevators"},{id:995,deck:4,name:"C-Deck 2nd Class Staircase Elevator"},{id:996,deck:5,name:"D-Deck 2nd Class Staircase Elevator"},{id:997,deck:6,name:"E-Deck 2nd Class Staircase Elevator"},{id:998,deck:7,name:"F-Deck 2nd Class Staircase Elevator"},{id:1945,deck:6,name:"Lift Attendants Quarters"},{id:1946,deck:4,name:"Seamen's Mess"},{id:2463,deck:4,name:"Crew Galley"},{id:2370,deck:6,name:"E-Deck 2nd Class Gents Lavatory"},{id:2371,deck:6,name:"E-Deck 2nd Class Ladies Lavatory"},{id:2372,deck:6,name:"E-Deck 2nd Class Bath"},{id:2373,deck:6,name:"E-Deck 2nd Class Bath"},{id:2374,deck:1,name:"Funnel No. 4 Casing"},{id:2375,deck:9,name:"Switchboard Platform"},{id:2376,deck:8,name:"Upper Turbine Engine Room"},{id:2377,deck:6,name:"Turbine Engine Room Casing"},{id:2378,deck:8,name:"Port Discharge Pump"},{id:2379,deck:8,name:"Starboard Discharge Pump"},{id:450,deck:46,name:"Emigrant Row Open Bunk 1"},{id:451,deck:46,name:"Emigrant Row Open Bunk 2"},{id:452,deck:46,name:"Emigrant Row Open Bunk 3"},{id:453,deck:46,name:"Emigrant Row Open Bunk 4"},{id:454,deck:46,name:"Emigrant Row Open Bunk 5"},{id:455,deck:47,name:"Emigrant Row Floor 2 Hallway"},{id:456,deck:48,name:"Emigrant Row Floor 3 Hallway"},{id:457,deck:49,name:"Hobi's Workshop"},{id:458,deck:49,name:"Sullivan's Fine Pipes and Tobacco"},{id:459,deck:49,name:"Harbour Row General Store"},{id:2380,deck:50,name:"Forward Flying Bridge"},{id:2381,deck:50,name:"Aft Flying Bridge"},{id:2382,deck:52,name:"Starboard Promenade"},{id:2383,deck:53,name:"Bar de le République"},{id:2384,deck:53,name:"Café Claude"},{id:2385,deck:53,name:"Bistro de Gambetta"},{id:2386,deck:53,name:"Post Office & Telephone"},{id:2387,deck:53,name:"Rue Gambetta Pharmacie"},{id:2388,deck:52,name:"Forecastle"},{id:2389,deck:52,name:"Port Promenade"},{id:2390,deck:52,name:"Traffic Stern"},{id:2391,deck:52,name:"Lower Aft Waiting Room"},{id:2392,deck:52,name:"Lower Forward Waiting Room"},{id:2393,deck:51,name:"Forward Bridge Deck"},{id:2394,deck:51,name:"Port Bridge Deck"},{id:2395,deck:51,name:"Starboard Bridge Deck"},{id:2396,deck:51,name:"Aft Bridge Deck"},{id:2397,deck:51,name:"Upper Waiting Room"},{id:2398,deck:5,name:"1st & 2nd Class Galley"},{id:2399,deck:55,name:"1st Class Passenger Car #1 Corridor"},{id:2400,deck:54,name:"1st Class Smoking Car"},{id:2401,deck:54,name:"1st Class Dining Car"},{id:2405,deck:55,name:"Compartment 4"},{id:2402,deck:55,name:"Compartment 1"},{id:2403,deck:55,name:"Compartment 2"},{id:2404,deck:55,name:"Compartment 3"},{id:2406,deck:55,name:"Compartment 5"},{id:2407,deck:55,name:"Compartment 6"},{id:2408,deck:55,name:"Compartment 7"},{id:2409,deck:55,name:"Compartment 8"},{id:2410,deck:55,name:"1st Class Passenger Car #1 Forward Lavatory"},{id:2411,deck:55,name:"1st Class Passenger Car #1 Rear Lavatory"},{id:2412,deck:56,name:"1st Class Passenger Car #2 Corridor"},{id:2413,deck:56,name:"Compartment 9"},{id:2414,deck:56,name:"Compartment 10"},{id:2415,deck:56,name:"Compartment 11"},{id:2416,deck:56,name:"Compartment 12"},{id:2437,deck:59,name:"3rd Class Passenger Car Forward Lavatory"},{id:2418,deck:56,name:"Compartment 14"},{id:2419,deck:56,name:"Compartment 15"},{id:2420,deck:56,name:"Compartment 16"},{id:2421,deck:56,name:"1st Class Passenger Car #2 Rear Lavatory"},{id:2422,deck:56,name:"1st Class Passenger Car #2 Forward Lavatory"},{id:2423,deck:56,name:"Powder Room"},{id:2424,deck:57,name:"2nd Class Smoking Car"},{id:2425,deck:57,name:"2nd Class Dining Car"},{id:2426,deck:58,name:"2nd Class Passenger Car Corridor"},{id:2427,deck:58,name:"Compartment A"},{id:2428,deck:58,name:"Compartment B"},{id:2429,deck:58,name:"Compartment C"},{id:2430,deck:58,name:"Compartment D"},{id:2431,deck:58,name:"Compartment E"},{id:2432,deck:58,name:"Compartment F"},{id:2433,deck:58,name:"Compartment G"},{id:2434,deck:58,name:"Compartment H"},{id:2435,deck:58,name:"2nd Class Passenger Car Rear Lavatory"},{id:2436,deck:58,name:"2nd Class Passenger Car Forward Lavatory"},{id:2438,deck:59,name:"3rd Class Passenger Car Rear Lavatory"},{id:2439,deck:59,name:"Compartment P"},{id:2440,deck:59,name:"Compartment O"},{id:2441,deck:59,name:"Compartment N"},{id:2442,deck:59,name:"Compartment M"},{id:2443,deck:59,name:"Compartment L"},{id:2444,deck:59,name:"Compartment K"},{id:2445,deck:59,name:"Compartment J"},{id:2446,deck:59,name:"Compartment I"},{id:2447,deck:60,name:"3rd Class Dining Car"},{id:2448,deck:60,name:"3rd Class Smoking Car"},{id:2449,deck:59,name:"3rd Class Passenger Car Corridor"},{id:2450,deck:61,name:"3rd Class Gangway"},{id:2451,deck:61,name:"1st Class Gangway"},{id:2452,deck:61,name:"Crew Gangway"},{id:2453,deck:62,name:"1st Class Boarding Tower"},{id:2454,deck:62,name:"2nd Class Boarding Tower"},{id:2455,deck:61,name:"1st & 2nd Class Boarding Queues"},{id:2456,deck:61,name:"Berth 44 Train Platform"},{id:2457,deck:61,name:"Dockside Café & Bar"},{id:2458,deck:62,name:"1st & 2nd Class Covered Walkway"},{id:2459,deck:5,name:"The Padded Room"},{id:2461,deck:4,name:"C-Deck Bow Crew Corridor"},{id:2462,deck:4,name:"Carpenter's Shop"},{id:2464,deck:6,name:"Page Boys Quarters"},{id:2465,deck:3,name:"2nd Class Smoking Room Entrance"},{id:2466,deck:2,name:"A-Deck Aft Fan Room"},{id:2467,deck:6,name:"Spare Crew Berths 9-12"},{id:2468,deck:6,name:"Spare Crew Berths 13-16"},{id:2469,deck:6,name:"Baggage Master & Squash Court Attendant"},{id:2470,deck:4,name:"3rd Class Port Covered Promenade"},{id:2471,deck:52,name:"Gents Lavatory"},{id:2472,deck:52,name:"Ladies Lavatory"},{id:2473,deck:6,name:"Chief 2nd Class Steward"},{id:2474,deck:1,name:"Engineer's Promenade"},{id:2475,deck:3,name:"2nd Class Smoking Room Bar"},{id:2476,deck:4,name:"3rd Class Smoking Room Bar"},{id:2477,deck:2,name:"1st Class Lounge Bar"},{id:2478,deck:5,name:"3rd Class Open Space Bar"},{id:2479,deck:1,name:"Engine Room Skylight"},{id:2544,deck:6,name:"Turbine Engine Upper Emergency Exit"},{id:2480,deck:9,name:"Cargo Hold No. 1"},{id:2482,deck:8,name:"Upper Coal Bunker 1"},{id:2481,deck:10,name:"Lower Coal Bunker 1"},{id:2483,deck:10,name:"Lower Forward Coal Bunker 2"},{id:2484,deck:10,name:"Lower Aft Coal Bunker 2"},{id:2485,deck:8,name:"Upper Coal Bunker 3"},{id:2486,deck:8,name:"Upper Coal Bunker 2"},{id:2487,deck:10,name:"Lower Aft Coal Bunker 3"},{id:2488,deck:10,name:"Lower Forward Coal Bunker 3"},{id:2489,deck:10,name:"Lower Aft Coal Bunker 4"},{id:2490,deck:10,name:"Lower Forward Coal Bunker 4"},{id:2491,deck:8,name:"Upper Coal Bunker 4"},{id:2492,deck:10,name:"Lower Aft Coal Bunker 5"},{id:2493,deck:10,name:"Lower Forward Coal Bunker 5"},{id:2494,deck:8,name:"Upper Coal Bunker 5"},{id:2495,deck:10,name:"Lower Aft Coal Bunker 6"},{id:2496,deck:10,name:"Lower Forward Coal Bunker 6"},{id:2497,deck:8,name:"Upper Coal Bunker 6"},{id:2503,deck:6,name:"No. 4 Ash Place"},{id:2504,deck:6,name:"No. 3 Ash Place"},{id:2505,deck:6,name:"No. 2 Ash Place"},{id:3e3,deck:63,name:"Dining"},{id:3001,deck:63,name:"Prison"},{id:3002,deck:63,name:"Lounge"},{id:3003,deck:63,name:"Reading & Writing"},{id:3004,deck:64,name:"Smoking"},{id:3005,deck:63,name:"Corridor"},{id:3006,deck:63,name:"A-14"},{id:3007,deck:63,name:"A-11"},{id:3008,deck:63,name:"A-9"},{id:3009,deck:63,name:"A-7"},{id:3010,deck:63,name:"A-5"},{id:3011,deck:63,name:"A-3"},{id:3012,deck:63,name:"A-1"},{id:3013,deck:63,name:"A-12"},{id:3014,deck:63,name:"A-10"},{id:3015,deck:63,name:"A-8"},{id:3016,deck:63,name:"A-6"},{id:3017,deck:63,name:"A-4"},{id:3018,deck:63,name:"A-2"},{id:3019,deck:64,name:"Gents Lavatory"},{id:3020,deck:64,name:"Ladies Lavatory"},{id:2506,deck:10,name:"Starboard Propeller Tunnel"},{id:2507,deck:10,name:"Port Propeller Tunnel"},{id:2508,deck:10,name:"Turbine Propeller Tunnel"},{id:2509,deck:6,name:"Leading Firemen Berths 1-4"},{id:2510,deck:6,name:"Leading Firemen Berths 5-8"},{id:2511,deck:6,name:"Leading Firemen Berths 9-12"},{id:2512,deck:6,name:"Leading Firemen Berths 13-16"},{id:2513,deck:6,name:"Leading Firemen Berths 17-20"},{id:2514,deck:6,name:"Leading Firemen Berths 21-24"},{id:2515,deck:6,name:"Greasers Berths 1-4"},{id:2516,deck:6,name:"Greasers Berths 5-8"},{id:2517,deck:6,name:"Greasers Berths 9-12"},{id:2518,deck:6,name:"Greasers Berths 13-16"},{id:2519,deck:6,name:"Greasers Berths 17-20"},{id:2520,deck:6,name:"Firemens Berths 1-4"},{id:2521,deck:6,name:"Firemens Berths 5-8"},{id:2522,deck:6,name:"Firemens Berths 9-12"},{id:2523,deck:6,name:"Firemens Berths 13-16"},{id:2524,deck:6,name:"Firemens Berths 17-20"},{id:2525,deck:6,name:"Firemens Berths 21-24"},{id:2526,deck:6,name:"Firemens Berths 24-28"},{id:2527,deck:6,name:"Firemens Berths 29-32"},{id:2528,deck:6,name:"Firemens Berths 33-36"},{id:2529,deck:6,name:"Firemens Berths 37-40"},{id:2530,deck:6,name:"Firemens Berths 41-44"},{id:2531,deck:1,name:"Funnel 1 Casing"},{id:2532,deck:1,name:"Funnel 2 Casing"},{id:2533,deck:1,name:"Funnel 3 Casing"},{id:2535,deck:8,name:"Chain Locker"},{id:2536,deck:7,name:"F-Deck Bow Storeroom"},{id:2537,deck:6,name:"E-Deck Bow Storeroom"},{id:2538,deck:5,name:"D-Deck Bow Storeroom"},{id:2539,deck:6,name:"Trimmers Berths 1-4"},{id:2540,deck:6,name:"Trimmers Berths 5-8"},{id:2541,deck:6,name:"Trimmers Berths 9-12"},{id:2542,deck:6,name:"Trimmers Berths 13-16"},{id:2543,deck:6,name:"Trimmers Berths 17-20"},{id:2545,deck:9,name:"Turbine Engine Lower Emergency Exit"},{id:2546,deck:6,name:"Firemens Tunnel Upper Emergency Exit"},{id:2547,deck:9,name:"Firemens Tunnel Lower Emergency Exit"},{id:2548,deck:4,name:"Maids' and Valets' Saloon Pantry"},{id:2549,deck:8,name:"United States Post Office Clerks"},{id:2550,deck:8,name:"Royal Mail Clerks"},{id:2551,deck:7,name:"Senior 2nd Engineer"},{id:2552,deck:7,name:"Senior 3rd Engineer"},{id:2553,deck:7,name:"Senior and Junior 4th Engineer"},{id:2554,deck:7,name:"2nd Engineer Engineer"},{id:2555,deck:7,name:"Senior and Junior Asst. 2nd Engineer"},{id:2556,deck:7,name:"Senior Asst. 4th Engineer & Chief Electrician"},{id:2557,deck:7,name:"Senior and Junior Asst. 3nd Engineer"},{id:2558,deck:7,name:"3rd and Junior Asst. 2nd Engineer"},{id:2559,deck:7,name:"Junior 2nd Engineer"},{id:2560,deck:7,name:"Junior 3rd Engineer"},{id:2561,deck:7,name:"Junior Asst. 4th Engineers"},{id:2562,deck:7,name:"Assistant Electricians"},{id:2563,deck:7,name:"Boiler Makers"},{id:2564,deck:7,name:"Senior and Junior 5th Engineer"},{id:2565,deck:7,name:"6th Engineers"},{id:2566,deck:7,name:"Plumber and Extra Engineers"},{id:2567,deck:6,name:"Chief Storekeeper"},{id:2568,deck:6,name:"Chief Saloon Steward & Pantryman"},{id:2569,deck:6,name:"Butcher and Assistant Storekeeper"},{id:2570,deck:6,name:"Head Restaurant Chef"},{id:2571,deck:6,name:"Head Saloon Chef"},{id:2572,deck:6,name:"Restaurant Coffee Men"},{id:2573,deck:6,name:"Restaurant Controller & Head Waiters"},{id:2574,deck:4,name:"Deck Mens Quarters"},{id:2575,deck:4,name:"Lamptrimmer and Storekeeper"},{id:2579,deck:5,name:"Seamens Berths 13-16"},{id:2580,deck:5,name:"Seamens Berths 17-20"},{id:2581,deck:6,name:"Quartermaster Berths 1-4"},{id:2582,deck:1,name:"Deck Officer Stewards"},{id:2583,deck:7,name:"Crew Steward Berths 1-2"},{id:2584,deck:7,name:"Crew Steward Berths 2-3"},{id:2585,deck:7,name:"Musicians Berths 1-4"},{id:2586,deck:7,name:"Musicians Berths 5-8"},{id:2587,deck:7,name:"3rd Class Galley"},{id:3022,deck:2,name:"First Class Cloak & Rug Room"},{id:3023,deck:1,name:"2nd Class Cloak & Rug Room"},{id:3024,deck:6,name:"Assistant Purser"},{id:3025,deck:6,name:"Assistant Pursers Clerks"},{id:800,deck:11,name:"Hell"}];Cn.push({id:-1,deck:-1,name:"Nowhere"});let Zt=null,Ti=null,jn=null,Kn=null,Wn=null,Nc=document.getElementById("unknown-location-message-parent"),Ic=0,Fc=[],Rd=!1;document.getElementById("leave-trails").onchange=r=>{Rd=r.target.checked};let Va={};function F_(r){return Ic=r,Ic}function U_(r,e,t){const n=new At(e,t);n.name=r.id,n.rotation.set(0,Math.random()*360,0,"XYZ"),n.position.set(0,-999,0),Zt.add(n),r.object3d=n}function B_(){Zt=new lg,Zt.background=new Re("#777777"),Kn=new $r(-window.innerWidth/2,window.innerWidth/2,window.innerHeight/2,-window.innerHeight/2,.1,1e3),Kn.zoom=21.7,Wn=new D_,Wn.setSize(window.innerWidth,window.innerHeight),Wn.domElement.style.position="absolute",Wn.domElement.style.top="0px",Wn.domElement.className="no-raycast",document.body.appendChild(Wn.domElement),Ti=new vd({antialias:!0}),Ti.setSize(window.innerWidth,window.innerHeight),document.getElementById("canvas-parent").appendChild(Ti.domElement),Ti.domElement.className="prologue",jn=new L_(Kn,Ti.domElement),Kn.position.set(-62.980477838884106,100,181.9943944006987),jn.target.set(0,22.5,7.51),jn.enableRotate=!1,jn.mouseButtons={LEFT:fn.PAN,MIDDLE:fn.DOLLY,RIGHT:fn.PAN},jn.update()}function O_(r,e){let t={t:0},n=-1,i=!1;for(let a=0;a<r.room_entry_records.length;a++){let s=r.room_entry_records[a];s.t>t.t&&s.t<=e&&(t=s,n=a,a==r.room_entry_records.length-1&&(i=!0))}return i||r.room_entry_records[n+1].t>ni?{rm:600,t:0}:t.t==0?{rm:600,t:0}:t}function Uc(r){for(let e=0;e<Cn.length;e++){let t=Cn[e];if(t.id==r)return t}return null}function G_(r){r.occupants=r.occupants-1}function H_(r){r.occupants=r.occupants+1}function z_(r,e){let t=r.indexOf(e);return r.slice(0,t).concat(r.slice(t+1))}function Bc(r){if(r.widthLength==null)return;let e=Math.sqrt(r.occupants);r.peopleAlongWidth=Math.ceil(e),r.peopleAlongLength=Math.ceil(e)}function V_(r){if(r.object3d==null||r.widthLength==null)return 0;let e=r.peopleAlongWidth*.12*r.widthLength[0],t=r.peopleAlongLength*.12*r.widthLength[1];e>r.widthLength[0]&&(e=r.widthLength[0]),t>r.widthLength[1]&&(t=r.widthLength[1]);let n=Array.apply(null,Array(r.peopleAlongLength*r.peopleAlongWidth)).map(function(){}),i=r.object3d.position.x-e/2,a=r.object3d.position.z-t/2;for(let s=0;s<r.peopleAlongLength;s++)for(let o=0;o<r.peopleAlongWidth;o++)n[s*r.peopleAlongWidth+o]=[i+o/r.peopleAlongWidth*e,a+s/r.peopleAlongLength*t];return r.personSpacingXZ=[e/r.peopleAlongWidth,t/r.peopleAlongLength],n}function xs(r,e){if(r==null)return;let t=[];r.forEach(n=>{let i=O_(n,e);if(i!=null){let a=i.rm;if(n.roomItIsCurrentlyDisplayedIn!=a){if(n.roomItIsCurrentlyDisplayedIn!=null){let o=Uc(n.roomItIsCurrentlyDisplayedIn);G_(o),o.occupants3d=z_(o.occupants3d,n),Bc(o),t.push(o)}n.roomItIsCurrentlyDisplayedIn=a;let s=Uc(a);if(s.occupants3d.push(n),n.myRoom=s,H_(s),Bc(s),t.push(s),s.position3D==null)n.object3d.position.set(0,-999,0),(s.deck<=10||s.deck==36)&&(Object.keys(Va).includes(s.name)?Va[s.name]+=1:Va[s.name]=1);else if(Rd&&n.text!=null){let o=new At(n.object3d.geometry,n.object3d.material);o.position.set(s.object3d.position.x,s.position3D.y,s.object3d.position.z),o.scale.set(3,3,3);let c=wd(o,new Date(i.t).toTimeString().split(" GMT")[0],.5,"","","");o.textObject=c,Zt.add(o),n.myTrails.push(o)}}}}),t.forEach(n=>{if(n.object3d!=null){let i=V_(n);n.occupants3d.sort((a,s)=>a.name.localeCompare(s.name)),n.occupants3d.forEach((a,s)=>{let o=i[s];a.object3d.position.set(o[0]+n.personSpacingXZ[0]*a.myRandomPositionScalar[0],n.position3D.y,o[1]+n.personSpacingXZ[1]*a.myRandomPositionScalar[1])})}})}function wd(r,e,t,n,i,a){const s=document.createElement("div");s.className="label "+n;let o=document.createElement("div");if(o.className="label-toggle text",o.textContent=e,s.appendChild(o),r!=null&&n=="message-box"){let d=document.createElement("div");d.className="speech-bubble-tail",s.appendChild(d)}{let d=document.createElement("div");d.className="attribution-text",d.innerText=i,s.appendChild(d)}{let d=document.createElement("div");d.className="subscript-text",d.innerText=a,s.appendChild(d)}let c=null;if(Nc.innerHTML="",r==null)Nc.appendChild(s);else{let d=new en().setFromObject(r),l=d.max.y-d.min.y;t==null&&(t=1),c=new P_(s),c.position.set(0,t*l+0,0),c.center.set(.5,1),r.add(c),c.layers.set(0)}return[r,c]}const W_="https://owlks4.github.io/tvrpg-replay/decks.gltf",X_="https://owlks4.github.io/tvrpg-replay/OUTPUT_PEOPLE_ROOM_HISTORIES_2023.json",q_="https://owlks4.github.io/tvrpg-replay/OUTPUT_PEOPLE_ROOM_HISTORIES_2024.json";let bi=0;function ea(r){bi=r}let vs=document.getElementById("time-range");vs.value=0;let Gr=2024,Oc=3,j_=14,Y_=21,K_=0,Q_=15,Z_=5,$_=45,Jt=new Date;Jt.setYear(Gr);Jt.setMonth(3);Jt.setDate(14);Jt.setHours(23);Jt.setMinutes(40);Jt.setSeconds(0);Jt.setMilliseconds(0);Jt=Jt.getTime();let J_=document.getElementById("titleText"),rr=[];document.getElementById("start-button").disabled=!0;let Ld=null,e1=document.getElementById("highlighted-people-parent"),Es=document.getElementById("person-selector");Es.onchange=r=>{Pd(r.target.value,!0)};new gn({color:2126016,side:Ft});function Pd(r,e){for(let t=0;t<rr.length;t++){let n=rr[t];if(n.id==r){if(e){if(!Fc.includes(n)){Fc.push(n),console.log(n.name+" was selected"),n.object3d.material=new gn({color:14688288,side:Ft}),n.object3d.scale.set(2,2,2),n.text=wd(n.object3d,n.name,.7,"","","");let i=document.createElement("div");i.className="person-highlight-widget",i.style="background-color:#"+n.object3d.material.color.getHexString();let a=document.createElement("span");a.innerText=n.name,a.style="margin-right:1em;";let s=document.createElement("input");s.setAttribute("type","color"),s.className="personWidgetColorPicker",s.value="#"+n.object3d.material.color.getHexString(),s.oninput=c=>{n.object3d.material.color=new Re(c.target.value),i.style="background-color:"+c.target.value},i.appendChild(a),i.appendChild(s);let o=document.createElement("span");o.style="margin-left:1em;margin-right:1em;cursor:pointer;",o.innerText="❌",o.onclick=()=>{i.remove(),Pd(r,!1)},i.appendChild(o),e1.appendChild(i),Es.selectedIndex=0}}else n.object3d.material=Ld,n.object3d.scale.set(1,1,1),n.myTrails.forEach(i=>{i.textObject[0].remove(i.textObject[1]),Zt.remove(i)}),n.myTrails=[],n.text!=null&&(n.text[0].remove(n.text[1]),n.text=null);break}}}vs.oninput=r=>{let e=r.target.value;ea(Qt+e*(ni-Qt)),Ms(),xs()};let t1=new Zg;ea(Qt);let Gc=Date.now();B_();r1();function n1(r){return new Date(r).toString().split("GMT")[0]}function Ms(){J_.innerText=n1(bi)}function Wa(r,e){for(let t=0;t<r.children.length;t++){let n=r.children[t];if(n.name==e)return n}}function i1(r){for(let e=0;e<r.room_entry_records.length;e++){let t=r.room_entry_records[e];if(t.t>=Qt&&t.t<=ni)return!0}return!1}async function r1(){var r=new Date;r.setYear(Gr),r.setMonth(Oc),r.setDate(j_),r.setHours(Y_),r.setMinutes(K_),r.setSeconds(0),r.setMilliseconds(0);var e=new Date;e.setYear(Gr),e.setMonth(Oc),e.setDate(Q_),e.setHours(Z_),e.setMinutes($_),e.setSeconds(0),e.setMilliseconds(0),N_(r.getTime()),I_(e.getTime()),ea(Qt);let t=(Jt-Qt)/(ni-Qt)*100;document.getElementById("iceberg").style="left:"+t+"%",Cn.forEach(i=>{i.name=i.name.trim().replaceAll("  "," ")});let n=null;switch(Gr){case 2023:n=await fetch(X_);break;case 2024:n=await fetch(q_);break;default:print("THAT YEAR IS NOT REGISTERED IN THE YEAR SWITCH STATEMENT THAT LOCATES THE JSON FILE!");break}rr=await n.json();for(let i=0;i<Cn.length;i++){let a=Cn[i];a.name=a.name.trim().replaceAll("  "," ").replaceAll(" ","_").replaceAll(".",""),a.occupants=0,a.occupants3d=[]}Ms(),console.log("Beginning hunting"),t1.load(W_,async function(i){await Zt.add(i.scene),Wa(i.scene,"DECKS").children.length,Wa(i.scene,"DECKS").children.forEach((d,l)=>{console.log("Hunting for rooms on deck: "+d.name),d.children.forEach(u=>{u.name=u.name.trim();for(let h=0;h<Cn.length;h++){let p=Cn[h];if(p.name==u.name){p.object3d=u,p.object3d.position.set(u.position.x,d.position.y,u.position.z),p.position3D={x:u.position.x,y:d.position.y,z:u.position.z},p.widthLength=[u.scale.x*2,u.scale.z*2];break}}})});let a=Wa(Zt.children[0],"PERSON");Ld=a.material;let s=[],o=.75;rr.forEach(d=>{d.myTrails=[],U_(d,a.geometry,a.material),d.myRandomPositionScalar=[Math.random()*o-o/2,Math.random()*o-o/2],s.push(d);let l=d.room_entry_records[d.room_entry_records.length-1].rm;l==600||l==800?d.dies=!0:d.dies=!1}),s.sort((d,l)=>d.name.localeCompare(l.name)),s.forEach(d=>{if(i1(d)){let l=document.createElement("option");l.setAttribute("value",d.id),l.innerText=d.name,Es.appendChild(l)}else d.object3d.position.set(-999,-999,-999)}),a.position.set(0,-999,0),Zt.remove(a),xs();let c=document.getElementById("start-button");c.style="",c.disabled=!1,c.innerText="Start",c.onclick=()=>{document.getElementById("loading-text").remove(),document.getElementById("centred-absolute").style="",Dd()}})}function Dd(){requestAnimationFrame(Dd);let r=Date.now();bi<ni&&r-Gc>=1e3/Dc&&(ea(bi+1e3*(Dc/1)),xs(rr,bi),Gc=r,Ms(),vs.value=(bi-Qt)/(ni-Qt)),jn.update(),F_(Kn.position.distanceTo(jn.target)),Ti.render(Zt,Kn),Wn.render(Zt,Kn)}
