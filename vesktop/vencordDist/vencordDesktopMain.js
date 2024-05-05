// Vencord ce18000
// Standalone: true
// Platform: Universal
// Updater disabled: false
"use strict";var rr=Object.create;var Ee=Object.defineProperty;var nr=Object.getOwnPropertyDescriptor;var ir=Object.getOwnPropertyNames;var or=Object.getPrototypeOf,ar=Object.prototype.hasOwnProperty;var L=(e,t)=>()=>(e&&(t=e(e=0)),t);var De=(e,t)=>{for(var r in t)Ee(e,r,{get:t[r],enumerable:!0})},sr=(e,t,r,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of ir(t))!ar.call(e,i)&&i!==r&&Ee(e,i,{get:()=>t[i],enumerable:!(n=nr(t,i))||n.enumerable});return e};var cr=(e,t,r)=>(r=e!=null?rr(or(e)):{},sr(t||!e||!e.__esModule?Ee(r,"default",{value:e,enumerable:!0}):r,e));var l=L(()=>{"use strict"});var ie=L(()=>{"use strict";l()});var oe,Re=L(()=>{l();oe="ce18000"});var H,Pe=L(()=>{l();H="Vendicated/Vencord"});var et,tt=L(()=>{"use strict";l();Re();Pe();et=`Vencord/${oe}${H?` (https://github.com/${H})`:""}`});function K(e,t={}){return new Promise((r,n)=>{rt.default.get(e,t,i=>{let{statusCode:a,statusMessage:o,headers:s}=i;if(a>=400)return void n(`${a}: ${o} - ${e}`);if(a>=300)return void r(K(s.location,t));let c=[];i.on("error",n),i.on("data",f=>c.push(f)),i.once("end",()=>r(Buffer.concat(c)))})})}var rt,Ge=L(()=>{"use strict";l();rt=cr(require("https"))});function ae(e){return async function(){try{return{ok:!0,value:await e(...arguments)}}catch(t){return{ok:!1,error:t instanceof Error?{...t}:t}}}}var nt,it=L(()=>{"use strict";l();nt=["vencordDesktopMain.js","vencordDesktopPreload.js","vencordDesktopRenderer.js","vencordDesktopRenderer.css"]});var hr={};async function st(e){return K(lr+e,{headers:{Accept:"application/vnd.github+json","User-Agent":et}})}async function fr(){if(!await ct())return[];let t=await st(`/compare/${oe}...HEAD`);return JSON.parse(t.toString("utf-8")).commits.map(n=>({hash:n.sha.slice(0,7),author:n.author.login,message:n.commit.message.split(`
`)[0]}))}async function ct(){let e=await st("/releases/latest"),t=JSON.parse(e.toString());return t.name.slice(t.name.lastIndexOf(" ")+1)===oe?!1:(t.assets.forEach(({name:n,browser_download_url:i})=>{nt.some(a=>n.startsWith(a))&&Oe.push([n,i])}),!0)}async function ur(){return await Promise.all(Oe.map(async([e,t])=>(0,ot.writeFile)((0,at.join)(__dirname,e),await K(t)))),Oe=[],!0}var se,ot,at,lr,Oe,lt=L(()=>{"use strict";l();ie();tt();se=require("electron"),ot=require("fs/promises"),at=require("path");Re();Pe();Ge();it();lr=`https://api.github.com/repos/${H}`,Oe=[];se.ipcMain.handle("VencordGetRepo",ae(()=>`https://github.com/${H}`));se.ipcMain.handle("VencordGetUpdates",ae(fr));se.ipcMain.handle("VencordUpdate",ae(ct));se.ipcMain.handle("VencordBuild",ae(ur))});l();var F=require("electron"),qt=require("path");l();l();Promise.resolve().then(()=>lt());l();ie();var _e=require("electron");l();var vt={};l();l();ie();l();var ce=class{pathListeners=new Map;globalListeners=new Set;constructor(t,r={}){this.plain=t,this.store=this.makeProxy(t),Object.assign(this,r)}makeProxy(t,r=t,n=""){let i=this;return new Proxy(t,{get(a,o){let s=a[o];return!(o in a)&&i.getDefaultValue&&(s=i.getDefaultValue({target:a,key:o,root:r,path:n})),typeof s=="object"&&s!==null&&!Array.isArray(s)?i.makeProxy(s,r,`${n}${n&&"."}${o}`):s},set(a,o,s){if(a[o]===s)return!0;Reflect.set(a,o,s);let c=`${n}${n&&"."}${o}`;return i.globalListeners.forEach(f=>f(s,c)),i.pathListeners.get(c)?.forEach(f=>f(s)),!0}})}setData(t,r){if(this.readOnly)throw new Error("SettingsStore is read-only");if(this.plain=t,this.store=this.makeProxy(t),r){let n=t,i=r.split(".");for(let a of i){if(!n){console.warn(`Settings#setData: Path ${r} does not exist in new data. Not dispatching update`);return}n=n[a]}this.pathListeners.get(r)?.forEach(a=>a(n))}this.markAsChanged()}addGlobalChangeListener(t){this.globalListeners.add(t)}addChangeListener(t,r){let n=this.pathListeners.get(t)??new Set;n.add(r),this.pathListeners.set(t,n)}removeGlobalChangeListener(t){this.globalListeners.delete(t)}removeChangeListener(t,r){let n=this.pathListeners.get(t);!n||(n.delete(r),n.size||this.pathListeners.delete(t))}markAsChanged(){this.globalListeners.forEach(t=>t(this.plain,""))}};var me=require("electron"),Z=require("fs");l();var ft=require("electron"),k=require("path"),pe=process.env.VENCORD_USER_DATA_DIR??(process.env.DISCORD_USER_DATA_DIR?(0,k.join)(process.env.DISCORD_USER_DATA_DIR,"..","VencordData"):(0,k.join)(ft.app.getPath("userData"),"..","Vencord")),Y=(0,k.join)(pe,"settings"),N=(0,k.join)(pe,"themes"),ve=(0,k.join)(Y,"quickCss.css"),Ve=(0,k.join)(Y,"settings.json"),Le=(0,k.join)(Y,"native-settings.json"),ut=["https:","http:","steam:","spotify:","com.epicgames.launcher:"];(0,Z.mkdirSync)(Y,{recursive:!0});function gt(e,t){try{return JSON.parse((0,Z.readFileSync)(t,"utf-8"))}catch(r){return r?.code!=="ENOENT"&&console.error(`Failed to read ${e} settings`,r),{}}}var x=new ce(gt("renderer",Ve));x.addGlobalChangeListener(()=>{try{(0,Z.writeFileSync)(Ve,JSON.stringify(x.plain,null,4))}catch(e){console.error("Failed to write renderer settings",e)}});me.ipcMain.handle("VencordGetSettingsDir",()=>Y);me.ipcMain.on("VencordGetSettings",e=>e.returnValue=x.plain);me.ipcMain.handle("VencordSetSettings",(e,t,r)=>{x.setData(t,r)});var ht=new ce(gt("native",Le));ht.addGlobalChangeListener(()=>{try{(0,Z.writeFileSync)(Le,JSON.stringify(ht.plain,null,4))}catch(e){console.error("Failed to write native settings",e)}});var pt=require("electron");pt.app.on("browser-window-created",(e,t)=>{t.webContents.on("frame-created",(r,{frame:n})=>{n.once("dom-ready",()=>{if(n.url.startsWith("https://open.spotify.com/embed/")){let i=x.store.plugins?.FixSpotifyEmbeds;if(!i?.enabled)return;n.executeJavaScript(`
                    const original = Audio.prototype.play;
                    Audio.prototype.play = function() {
                        this.volume = ${i.volume/100||.1};
                        return original.apply(this, arguments);
                    }
                `)}})})});var It={};l();var mt=require("electron");mt.app.on("browser-window-created",(e,t)=>{t.webContents.on("frame-created",(r,{frame:n})=>{n.once("dom-ready",()=>{if(n.url.startsWith("https://www.youtube.com/")){if(!x.store.plugins?.FixYoutubeEmbeds?.enabled)return;n.executeJavaScript(`
                new MutationObserver(() => {
                    if(
                        document.querySelector('div.ytp-error-content-wrap-subreason a[href*="www.youtube.com/watch?v="]')
                    ) location.reload()
                }).observe(document.body, { childList: true, subtree:true });
                `)}})})});var ke={};De(ke,{resolveRedirect:()=>pr});l();var Ct=require("https"),gr=/^https:\/\/(spotify\.link|s\.team)\/.+$/;function At(e){return new Promise((t,r)=>{let n=(0,Ct.request)(new URL(e),{method:"HEAD"},i=>{t(i.headers.location?At(i.headers.location):e)});n.on("error",r),n.end()})}async function pr(e,t){return gr.test(t)?At(t):t}var ze={};De(ze,{readRecording:()=>vr});l();var dt=require("electron"),yt=require("fs/promises"),le=require("path");async function vr(e,t){t=(0,le.normalize)(t);let r=(0,le.basename)(t),n=(0,le.normalize)(dt.app.getPath("userData")+"/");if(console.log(r,n,t),r!=="recording.ogg"||!t.startsWith(n))return null;try{let i=await(0,yt.readFile)(t);return new Uint8Array(i.buffer)}catch{return null}}var Me={};De(Me,{sendToOverlay:()=>mr});l();var St=require("dgram"),wt;function mr(e,t){t.icon=Buffer.from(t.icon).toString("base64");let r=JSON.stringify(t);wt??=(0,St.createSocket)("udp4"),wt.send(r,42069,"127.0.0.1")}var Tt={FixSpotifyEmbeds:vt,FixYoutubeEmbeds:It,OpenInApp:ke,VoiceMessages:ze,XsOverlay:Me};var xt={};for(let[e,t]of Object.entries(Tt)){let r=Object.entries(t);if(!r.length)continue;let n=xt[e]={};for(let[i,a]of r){let o=`VencordPluginNative_${e}_${i}`;_e.ipcMain.handle(o,a),n[i]=o}}_e.ipcMain.on("VencordGetPluginIpcMethodMap",e=>{e.returnValue=xt});l();ie();var v=require("electron"),fe=require("fs"),X=require("fs/promises"),J=require("path");l();var Et="PCFET0NUWVBFIGh0bWw+CjxodG1sIGxhbmc9ImVuIj4KICAgIDxoZWFkPgogICAgICAgIDxtZXRhIGNoYXJzZXQ9InV0Zi04IiAvPgogICAgICAgIDx0aXRsZT5WZW5jb3JkIFF1aWNrQ1NTIEVkaXRvcjwvdGl0bGU+CiAgICAgICAgPGxpbmsKICAgICAgICAgICAgcmVsPSJzdHlsZXNoZWV0IgogICAgICAgICAgICBocmVmPSJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9tb25hY28tZWRpdG9yLzAuNDAuMC9taW4vdnMvZWRpdG9yL2VkaXRvci5tYWluLm1pbi5jc3MiCiAgICAgICAgICAgIGludGVncml0eT0ic2hhNTEyLU1Pb1EwMmg4MGhrbGNjZkxyWEZZa0N6RytXVmpPUmZsT3A5WnA4ZGx0aWFSUCszNUxZbk80TEtPa2xSNjRvTUdmR2dKRExPOFdKcGtNMW81Z1pYWVpRPT0iCiAgICAgICAgICAgIGNyb3Nzb3JpZ2luPSJhbm9ueW1vdXMiCiAgICAgICAgICAgIHJlZmVycmVycG9saWN5PSJuby1yZWZlcnJlciIKICAgICAgICAvPgogICAgICAgIDxzdHlsZT4KICAgICAgICAgICAgaHRtbCwKICAgICAgICAgICAgYm9keSwKICAgICAgICAgICAgI2NvbnRhaW5lciB7CiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7CiAgICAgICAgICAgICAgICBsZWZ0OiAwOwogICAgICAgICAgICAgICAgdG9wOiAwOwogICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7CiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7CiAgICAgICAgICAgICAgICBtYXJnaW46IDA7CiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwOwogICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjsKICAgICAgICAgICAgfQogICAgICAgIDwvc3R5bGU+CiAgICA8L2hlYWQ+CgogICAgPGJvZHk+CiAgICAgICAgPGRpdiBpZD0iY29udGFpbmVyIj48L2Rpdj4KICAgICAgICA8c2NyaXB0CiAgICAgICAgICAgIHNyYz0iaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvbW9uYWNvLWVkaXRvci8wLjQwLjAvbWluL3ZzL2xvYWRlci5taW4uanMiCiAgICAgICAgICAgIGludGVncml0eT0ic2hhNTEyLVF6TXBYZUNQY2lBSFA0d2JZbFYyUFlnclFjYUVrRFFVanprUFU0eG5qeVZTRDlUMzYvdWRhbXh0TkJxYjRxSzQvYk1RTVBaOGF5ckJlOWhyR2RCRmpRPT0iCiAgICAgICAgICAgIGNyb3Nzb3JpZ2luPSJhbm9ueW1vdXMiCiAgICAgICAgICAgIHJlZmVycmVycG9saWN5PSJuby1yZWZlcnJlciIKICAgICAgICA+PC9zY3JpcHQ+CgogICAgICAgIDxzY3JpcHQ+CiAgICAgICAgICAgIHJlcXVpcmUuY29uZmlnKHsKICAgICAgICAgICAgICAgIHBhdGhzOiB7CiAgICAgICAgICAgICAgICAgICAgdnM6ICJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9tb25hY28tZWRpdG9yLzAuNDAuMC9taW4vdnMiLAogICAgICAgICAgICAgICAgfSwKICAgICAgICAgICAgfSk7CgogICAgICAgICAgICByZXF1aXJlKFsidnMvZWRpdG9yL2VkaXRvci5tYWluIl0sICgpID0+IHsKICAgICAgICAgICAgICAgIGdldEN1cnJlbnRDc3MoKS50aGVuKChjc3MpID0+IHsKICAgICAgICAgICAgICAgICAgICB2YXIgZWRpdG9yID0gbW9uYWNvLmVkaXRvci5jcmVhdGUoCiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCJjb250YWluZXIiKSwKICAgICAgICAgICAgICAgICAgICAgICAgewogICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGNzcywKICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhbmd1YWdlOiAiY3NzIiwKICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZW1lOiBnZXRUaGVtZSgpLAogICAgICAgICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICAgICAgKTsKICAgICAgICAgICAgICAgICAgICBlZGl0b3Iub25EaWRDaGFuZ2VNb2RlbENvbnRlbnQoKCkgPT4KICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q3NzKGVkaXRvci5nZXRWYWx1ZSgpKQogICAgICAgICAgICAgICAgICAgICk7CiAgICAgICAgICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoInJlc2l6ZSIsICgpID0+IHsKICAgICAgICAgICAgICAgICAgICAgICAgLy8gbWFrZSBtb25hY28gcmUtbGF5b3V0CiAgICAgICAgICAgICAgICAgICAgICAgIGVkaXRvci5sYXlvdXQoKTsKICAgICAgICAgICAgICAgICAgICB9KTsKICAgICAgICAgICAgICAgIH0pOwogICAgICAgICAgICB9KTsKICAgICAgICA8L3NjcmlwdD4KICAgIDwvYm9keT4KPC9odG1sPgo=";l();var Ir=/[^\S\r\n]*?\r?(?:\r\n|\n)[^\S\r\n]*?\*[^\S\r\n]?/,Cr=/^\\@/;function Ne(e,t={}){return{fileName:e,name:t.name??e.replace(/\.css$/i,""),author:t.author??"Unknown Author",description:t.description??"A Discord Theme.",version:t.version,license:t.license,source:t.source,website:t.website,invite:t.invite}}function Dt(e){return e.charCodeAt(0)===65279&&(e=e.slice(1)),e}function Rt(e,t){if(!e)return Ne(t);let r=e.split("/**",2)?.[1]?.split("*/",1)?.[0];if(!r)return Ne(t);let n={},i="",a="";for(let o of r.split(Ir))if(o.length!==0)if(o.charAt(0)==="@"&&o.charAt(1)!==" "){n[i]=a.trim();let s=o.indexOf(" ");i=o.substring(1,s),a=o.substring(s+1)}else a+=" "+o.replace("\\n",`
`).replace(Cr,"@");return n[i]=a.trim(),delete n[""],Ne(t,n)}l();var Pt=require("electron");function Gt(e){e.webContents.setWindowOpenHandler(({url:t})=>{switch(t){case"about:blank":case"https://discord.com/popout":case"https://ptb.discord.com/popout":case"https://canary.discord.com/popout":return{action:"allow"}}try{var{protocol:r}=new URL(t)}catch{return{action:"deny"}}switch(r){case"http:":case"https:":case"mailto:":case"steam:":case"spotify:":Pt.shell.openExternal(t)}return{action:"deny"}})}(0,fe.mkdirSync)(N,{recursive:!0});function Ze(e,t){let r=(0,J.normalize)(e),n=(0,J.join)(e,t),i=(0,J.normalize)(n);return i.startsWith(r)?i:null}function Ar(){return(0,X.readFile)(ve,"utf-8").catch(()=>"")}async function dr(){let e=await(0,X.readdir)(N).catch(()=>[]),t=[];for(let r of e){if(!r.endsWith(".css"))continue;let n=await Ot(r).then(Dt).catch(()=>null);n!=null&&t.push(Rt(n,r))}return t}function Ot(e){e=e.replace(/\?v=\d+$/,"");let t=Ze(N,e);return t?(0,X.readFile)(t,"utf-8"):Promise.reject(`Unsafe path ${e}`)}v.ipcMain.handle("VencordOpenQuickCss",()=>v.shell.openPath(ve));v.ipcMain.handle("VencordOpenExternal",(e,t)=>{try{var{protocol:r}=new URL(t)}catch{throw"Malformed URL"}if(!ut.includes(r))throw"Disallowed protocol.";v.shell.openExternal(t)});v.ipcMain.handle("VencordGetQuickCss",()=>Ar());v.ipcMain.handle("VencordSetQuickCss",(e,t)=>(0,fe.writeFileSync)(ve,t));v.ipcMain.handle("VencordGetThemesDir",()=>N);v.ipcMain.handle("VencordGetThemesList",()=>dr());v.ipcMain.handle("VencordGetThemeData",(e,t)=>Ot(t));v.ipcMain.handle("VencordGetThemeSystemValues",()=>({"os-accent-color":`#${v.systemPreferences.getAccentColor?.()||""}`}));v.ipcMain.handle("VencordOpenMonacoEditor",async()=>{let e="Vencord QuickCSS Editor",t=v.BrowserWindow.getAllWindows().find(n=>n.title===e);if(t&&!t.isDestroyed()){t.focus();return}let r=new v.BrowserWindow({title:e,autoHideMenuBar:!0,darkTheme:!0,webPreferences:{preload:(0,J.join)(__dirname,"vencordDesktopPreload.js"),contextIsolation:!0,nodeIntegration:!1,sandbox:!1}});Gt(r),await r.loadURL(`data:text/html;base64,${Et}`)});l();var Xt=require("electron");l();var Lt=require("module"),yr=(0,Lt.createRequire)("/"),Ce,wr=";var __w=require('worker_threads');__w.parentPort.on('message',function(m){onmessage({data:m})}),postMessage=function(m,t){__w.parentPort.postMessage(m,t)},close=process.exit;self=global";try{Ce=yr("worker_threads").Worker}catch{}var Sr=Ce?function(e,t,r,n,i){var a=!1,o=new Ce(e+wr,{eval:!0}).on("error",function(s){return i(s,null)}).on("message",function(s){return i(null,s)}).on("exit",function(s){s&&!a&&i(new Error("exited with code "+s),null)});return o.postMessage(r,n),o.terminate=function(){return a=!0,Ce.prototype.terminate.call(o)},o}:function(e,t,r,n,i){setImmediate(function(){return i(new Error("async operations unsupported - update to Node 12+ (or Node 10-11 with the --experimental-worker CLI flag)"),null)});var a=function(){};return{terminate:a,postMessage:a}},A=Uint8Array,z=Uint16Array,be=Uint32Array,je=new A([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Be=new A([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),kt=new A([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),zt=function(e,t){for(var r=new z(31),n=0;n<31;++n)r[n]=t+=1<<e[n-1];for(var i=new be(r[30]),n=1;n<30;++n)for(var a=r[n];a<r[n+1];++a)i[a]=a-r[n]<<5|n;return[r,i]},Mt=zt(je,2),He=Mt[0],Tr=Mt[1];He[28]=258,Tr[258]=28;var _t=zt(Be,0),Nt=_t[0],ti=_t[1],ye=new z(32768);for(u=0;u<32768;++u)P=(u&43690)>>>1|(u&21845)<<1,P=(P&52428)>>>2|(P&13107)<<2,P=(P&61680)>>>4|(P&3855)<<4,ye[u]=((P&65280)>>>8|(P&255)<<8)>>>1;var P,u,$=function(e,t,r){for(var n=e.length,i=0,a=new z(t);i<n;++i)e[i]&&++a[e[i]-1];var o=new z(t);for(i=0;i<t;++i)o[i]=o[i-1]+a[i-1]<<1;var s;if(r){s=new z(1<<t);var c=15-t;for(i=0;i<n;++i)if(e[i])for(var f=i<<4|e[i],h=t-e[i],m=o[e[i]-1]++<<h,S=m|(1<<h)-1;m<=S;++m)s[ye[m]>>>c]=f}else for(s=new z(n),i=0;i<n;++i)e[i]&&(s[i]=ye[o[e[i]-1]++]>>>15-e[i]);return s},ue=new A(288);for(u=0;u<144;++u)ue[u]=8;var u;for(u=144;u<256;++u)ue[u]=9;var u;for(u=256;u<280;++u)ue[u]=7;var u;for(u=280;u<288;++u)ue[u]=8;var u,Zt=new A(32);for(u=0;u<32;++u)Zt[u]=5;var u;var Ft=$(ue,9,1);var Wt=$(Zt,5,1),Ae=function(e){for(var t=e[0],r=1;r<e.length;++r)e[r]>t&&(t=e[r]);return t},w=function(e,t,r){var n=t/8|0;return(e[n]|e[n+1]<<8)>>(t&7)&r},de=function(e,t){var r=t/8|0;return(e[r]|e[r+1]<<8|e[r+2]<<16)>>(t&7)},bt=function(e){return(e+7)/8|0},we=function(e,t,r){(t==null||t<0)&&(t=0),(r==null||r>e.length)&&(r=e.length);var n=new(e.BYTES_PER_ELEMENT==2?z:e.BYTES_PER_ELEMENT==4?be:A)(r-t);return n.set(e.subarray(t,r)),n};var jt=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],d=function(e,t,r){var n=new Error(t||jt[e]);if(n.code=e,Error.captureStackTrace&&Error.captureStackTrace(n,d),!r)throw n;return n},Bt=function(e,t,r){var n=e.length;if(!n||r&&r.f&&!r.l)return t||new A(0);var i=!t||r,a=!r||r.i;r||(r={}),t||(t=new A(n*3));var o=function($e){var Qe=t.length;if($e>Qe){var qe=new A(Math.max(Qe*2,$e));qe.set(t),t=qe}},s=r.f||0,c=r.p||0,f=r.b||0,h=r.l,m=r.d,S=r.m,G=r.n,q=n*8;do{if(!h){s=w(e,c,1);var M=w(e,c+1,3);if(c+=3,M)if(M==1)h=Ft,m=Wt,S=9,G=5;else if(M==2){var U=w(e,c,31)+257,W=w(e,c+10,15)+4,ee=U+w(e,c+5,31)+1;c+=14;for(var _=new A(ee),te=new A(19),C=0;C<W;++C)te[kt[C]]=w(e,c+C*3,7);c+=W*3;for(var R=Ae(te),he=(1<<R)-1,b=$(te,R,1),C=0;C<ee;){var re=b[w(e,c,he)];c+=re&15;var I=re>>>4;if(I<16)_[C++]=I;else{var j=0,ge=0;for(I==16?(ge=3+w(e,c,3),c+=2,j=_[C-1]):I==17?(ge=3+w(e,c,7),c+=3):I==18&&(ge=11+w(e,c,127),c+=7);ge--;)_[C++]=j}}var Ye=_.subarray(0,U),V=_.subarray(U);S=Ae(Ye),G=Ae(V),h=$(Ye,S,1),m=$(V,G,1)}else d(1);else{var I=bt(c)+4,y=e[I-4]|e[I-3]<<8,O=I+y;if(O>n){a&&d(0);break}i&&o(f+y),t.set(e.subarray(I,O),f),r.b=f+=y,r.p=c=O*8,r.f=s;continue}if(c>q){a&&d(0);break}}i&&o(f+131072);for(var er=(1<<S)-1,tr=(1<<G)-1,Se=c;;Se=c){var j=h[de(e,c)&er],B=j>>>4;if(c+=j&15,c>q){a&&d(0);break}if(j||d(2),B<256)t[f++]=B;else if(B==256){Se=c,h=null;break}else{var Je=B-254;if(B>264){var C=B-257,ne=je[C];Je=w(e,c,(1<<ne)-1)+He[C],c+=ne}var Te=m[de(e,c)&tr],xe=Te>>>4;Te||d(3),c+=Te&15;var V=Nt[xe];if(xe>3){var ne=Be[xe];V+=de(e,c)&(1<<ne)-1,c+=ne}if(c>q){a&&d(0);break}i&&o(f+131072);for(var Xe=f+Je;f<Xe;f+=4)t[f]=t[f-V],t[f+1]=t[f+1-V],t[f+2]=t[f+2-V],t[f+3]=t[f+3-V];f=Xe}}r.l=h,r.p=Se,r.b=f,r.f=s,h&&(s=1,r.m=S,r.d=m,r.n=G)}while(!s);return f==t.length?t:we(t,0,f)};var xr=new A(0);var Er=function(e,t){var r={};for(var n in e)r[n]=e[n];for(var n in t)r[n]=t[n];return r},Ut=function(e,t,r){for(var n=e(),i=e.toString(),a=i.slice(i.indexOf("[")+1,i.lastIndexOf("]")).replace(/\s+/g,"").split(","),o=0;o<n.length;++o){var s=n[o],c=a[o];if(typeof s=="function"){t+=";"+c+"=";var f=s.toString();if(s.prototype)if(f.indexOf("[native code]")!=-1){var h=f.indexOf(" ",8)+1;t+=f.slice(h,f.indexOf("(",h))}else{t+=f;for(var m in s.prototype)t+=";"+c+".prototype."+m+"="+s.prototype[m].toString()}else t+=f}else r[c]=s}return[t,r]},Ie=[],Dr=function(e){var t=[];for(var r in e)e[r].buffer&&t.push((e[r]=new e[r].constructor(e[r])).buffer);return t},Rr=function(e,t,r,n){var i;if(!Ie[r]){for(var a="",o={},s=e.length-1,c=0;c<s;++c)i=Ut(e[c],a,o),a=i[0],o=i[1];Ie[r]=Ut(e[s],a,o)}var f=Er({},Ie[r][1]);return Sr(Ie[r][0]+";onmessage=function(e){for(var k in e.data)self[k]=e.data[k];onmessage="+t.toString()+"}",r,f,Dr(f),n)},Pr=function(){return[A,z,be,je,Be,kt,He,Nt,Ft,Wt,ye,jt,$,Ae,w,de,bt,we,d,Bt,Ke,Ht,Kt]};var Ht=function(e){return postMessage(e,[e.buffer])},Kt=function(e){return e&&e.size&&new A(e.size)},Gr=function(e,t,r,n,i,a){var o=Rr(r,n,i,function(s,c){o.terminate(),a(s,c)});return o.postMessage([e,t],t.consume?[e.buffer]:[]),function(){o.terminate()}};var E=function(e,t){return e[t]|e[t+1]<<8},T=function(e,t){return(e[t]|e[t+1]<<8|e[t+2]<<16|e[t+3]<<24)>>>0},Fe=function(e,t){return T(e,t)+T(e,t+4)*4294967296};function Or(e,t,r){return r||(r=t,t={}),typeof r!="function"&&d(7),Gr(e,t,[Pr],function(n){return Ht(Ke(n.data[0],Kt(n.data[1])))},1,r)}function Ke(e,t){return Bt(e,t)}var We=typeof TextDecoder<"u"&&new TextDecoder,Ur=0;try{We.decode(xr,{stream:!0}),Ur=1}catch{}var Vr=function(e){for(var t="",r=0;;){var n=e[r++],i=(n>127)+(n>223)+(n>239);if(r+i>e.length)return[t,we(e,r-1)];i?i==3?(n=((n&15)<<18|(e[r++]&63)<<12|(e[r++]&63)<<6|e[r++]&63)-65536,t+=String.fromCharCode(55296|n>>10,56320|n&1023)):i&1?t+=String.fromCharCode((n&31)<<6|e[r++]&63):t+=String.fromCharCode((n&15)<<12|(e[r++]&63)<<6|e[r++]&63):t+=String.fromCharCode(n)}};function Lr(e,t){if(t){for(var r="",n=0;n<e.length;n+=16384)r+=String.fromCharCode.apply(null,e.subarray(n,n+16384));return r}else{if(We)return We.decode(e);var i=Vr(e),a=i[0],o=i[1];return o.length&&d(8),a}}var kr=function(e,t){return t+30+E(e,t+26)+E(e,t+28)},zr=function(e,t,r){var n=E(e,t+28),i=Lr(e.subarray(t+46,t+46+n),!(E(e,t+8)&2048)),a=t+46+n,o=T(e,t+20),s=r&&o==4294967295?Mr(e,a):[o,T(e,t+24),T(e,t+42)],c=s[0],f=s[1],h=s[2];return[E(e,t+10),c,f,i,a+E(e,t+30)+E(e,t+32),h]},Mr=function(e,t){for(;E(e,t)!=1;t+=4+E(e,t+2));return[Fe(e,t+12),Fe(e,t+4),Fe(e,t+20)]};var Vt=typeof queueMicrotask=="function"?queueMicrotask:typeof setTimeout=="function"?setTimeout:function(e){e()};function Yt(e,t,r){r||(r=t,t={}),typeof r!="function"&&d(7);var n=[],i=function(){for(var I=0;I<n.length;++I)n[I]()},a={},o=function(I,y){Vt(function(){r(I,y)})};Vt(function(){o=r});for(var s=e.length-22;T(e,s)!=101010256;--s)if(!s||e.length-s>65558)return o(d(13,0,1),null),i;var c=E(e,s+8);if(c){var f=c,h=T(e,s+16),m=h==4294967295||f==65535;if(m){var S=T(e,s-12);m=T(e,S)==101075792,m&&(f=c=T(e,S+32),h=T(e,S+48))}for(var G=t&&t.filter,q=function(I){var y=zr(e,h,m),O=y[0],U=y[1],W=y[2],ee=y[3],_=y[4],te=y[5],C=kr(e,te);h=_;var R=function(b,re){b?(i(),o(b,null)):(re&&(a[ee]=re),--c||o(null,a))};if(!G||G({name:ee,size:U,originalSize:W,compression:O}))if(!O)R(null,we(e,C,C+U));else if(O==8){var he=e.subarray(C,C+U);if(U<32e4)try{R(null,Ke(he,new A(W)))}catch(b){R(b,null)}else n.push(Or(he,{size:W},R))}else R(d(14,"unknown compression type "+O,1),null);else R(null,null)},M=0;M<f;++M)q(M)}else o(null,{});return i}var $t=require("fs"),D=require("fs/promises"),Q=require("path");l();function Jt(e){function t(o,s,c,f){let h=0;return h+=o<<0,h+=s<<8,h+=c<<16,h+=f<<24>>>0,h}if(e[0]===80&&e[1]===75&&e[2]===3&&e[3]===4)return e;if(e[0]!==67||e[1]!==114||e[2]!==50||e[3]!==52)throw new Error("Invalid header: Does not start with Cr24");let r=e[4]===3,n=e[4]===2;if(!n&&!r||e[5]||e[6]||e[7])throw new Error("Unexpected crx format version number.");if(n){let o=t(e[8],e[9],e[10],e[11]),s=t(e[12],e[13],e[14],e[15]),c=16+o+s;return e.subarray(c,e.length)}let a=12+t(e[8],e[9],e[10],e[11]);return e.subarray(a,e.length)}Ge();var _r=(0,Q.join)(pe,"ExtensionCache");async function Nr(e,t){return await(0,D.mkdir)(t,{recursive:!0}),new Promise((r,n)=>{Yt(e,(i,a)=>{if(i)return void n(i);Promise.all(Object.keys(a).map(async o=>{if(o.startsWith("_metadata/"))return;if(o.endsWith("/"))return void(0,D.mkdir)((0,Q.join)(t,o),{recursive:!0});let s=o.split("/"),c=s.pop(),f=s.join("/"),h=(0,Q.join)(t,f);f&&await(0,D.mkdir)(h,{recursive:!0}),await(0,D.writeFile)((0,Q.join)(h,c),a[o])})).then(()=>r()).catch(o=>{(0,D.rm)(t,{recursive:!0,force:!0}),n(o)})})})}async function Qt(e){let t=(0,Q.join)(_r,`${e}`);try{await(0,D.access)(t,$t.constants.F_OK)}catch{let n=e==="fmkadmapgofadopljbjfkapdkoienihi"?"https://raw.githubusercontent.com/Vendicated/random-files/f6f550e4c58ac5f2012095a130406c2ab25b984d/fmkadmapgofadopljbjfkapdkoienihi.zip":`https://clients2.google.com/service/update2/crx?response=redirect&acceptformat=crx2,crx3&x=id%3D${e}%26uc&prodversion=32`,i=await K(n,{headers:{"User-Agent":"Vencord (https://github.com/Vendicated/Vencord)"}});await Nr(Jt(i),t).catch(console.error)}Xt.session.defaultSession.loadExtension(t)}F.app.whenReady().then(()=>{F.protocol.registerFileProtocol("vencord",({url:i},a)=>{let o=i.slice(10);if(o.endsWith("/")&&(o=o.slice(0,-1)),o.startsWith("/themes/")){let s=o.slice(8),c=Ze(N,s);if(!c){a({statusCode:403});return}a(c.replace(/\?v=\d+$/,""));return}switch(o){case"renderer.js.map":case"vencordDesktopRenderer.js.map":case"preload.js.map":case"vencordDesktopPreload.js.map":case"patcher.js.map":case"vencordDesktopMain.js.map":a((0,qt.join)(__dirname,o));break;default:a({statusCode:403})}});try{x.store.enableReactDevtools&&Qt("fmkadmapgofadopljbjfkapdkoienihi").then(()=>console.info("[Vencord] Installed React Developer Tools")).catch(i=>console.error("[Vencord] Failed to install React Developer Tools",i))}catch{}let e=(i,a)=>Object.keys(i).find(o=>o.toLowerCase()===a),t=i=>{let a={};return i.split(";").forEach(o=>{let[s,...c]=o.trim().split(/\s+/g);s&&!Object.prototype.hasOwnProperty.call(a,s)&&(a[s]=c)}),a},r=i=>Object.entries(i).filter(([,a])=>a?.length).map(a=>a.flat().join(" ")).join("; "),n=i=>{let a=e(i,"content-security-policy");if(a){let o=t(i[a][0]);for(let s of["style-src","connect-src","img-src","font-src","media-src","worker-src"])o[s]??=[],o[s].push("*","blob:","data:","vencord:","'unsafe-inline'");o["script-src"]??=[],o["script-src"].push("'unsafe-eval'","https://unpkg.com","https://cdnjs.cloudflare.com"),i[a]=[r(o)]}};F.session.defaultSession.webRequest.onHeadersReceived(({responseHeaders:i,resourceType:a},o)=>{if(i&&(a==="mainFrame"&&n(i),a==="stylesheet")){let s=e(i,"content-type");s&&(i[s]=["text/css"])}o({cancel:!1,responseHeaders:i})}),F.session.defaultSession.webRequest.onHeadersReceived=()=>{}});
//# sourceURL=VencordDesktopMain
//# sourceMappingURL=vencord://vencordDesktopMain.js.map
/*! For license information please see vencordDesktopMain.js.LEGAL.txt */