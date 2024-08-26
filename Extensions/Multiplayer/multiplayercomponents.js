var gdjs;(function(x){const g=new x.Logger("Multiplayer");let L;(function(o){const M="lobbies-root-container",v="lobbies-frame-container",f="lobbies-close-container",I="lobbies-loader-container",N="lobbies-texts-container",C="lobbies-iframe-container",T="lobbies-iframe";let D=!0;const b=[];o.getDomElementContainer=n=>{const e=n.getGame().getRenderer().getDomElementContainer();return e||(g.error("No DOM element container found."),null)},o.getLobbiesRootContainer=n=>{const e=o.getDomElementContainer(n);return e?e.querySelector(`#${M}`):null},o.getLobbiesLoaderContainer=n=>{const e=o.getDomElementContainer(n);return e?e.querySelector(`#${I}`):null},o.getLobbiesIframeContainer=n=>{const e=o.getDomElementContainer(n);return e?e.querySelector(`#${C}`):null},o.getLobbiesCloseContainer=n=>{const e=o.getDomElementContainer(n);return e?e.querySelector(`#${f}`):null},o.getLobbiesTextsContainer=n=>{const e=o.getDomElementContainer(n);return e?e.querySelector(`#${N}`):null},o.getLobbiesIframe=n=>{const e=o.getDomElementContainer(n);return e?e.querySelector(`#${T}`):null},o.displayLobbies=function(n,e){const r=o.getDomElementContainer(n);if(!r)return;const s=document.createElement("div");s.id=M,s.style.position="relative",s.style.backgroundColor="rgba(14, 6, 45, 0.5)",s.style.opacity="1",s.style.width="100%",s.style.height="100%",s.style.zIndex="2",s.style.pointerEvents="all";const i=document.createElement("div");i.id=v,i.style.backgroundColor="#FFFFFF",i.style.position="absolute",i.style.top="16px",i.style.bottom="16px",i.style.left="16px",i.style.right="16px",i.style.borderRadius="8px",i.style.boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)",i.style.overflow="hidden";const t=document.createElement("div");t.id=f,t.style.cursor="pointer",t.style.display="flex",t.style.justifyContent="right",t.style.alignItems="center",t.style.zIndex="3",t.style.position="absolute",t.style.top="32px",t.style.right="32px",m(t,e);const d=document.createElement("img");d.setAttribute("width","15px"),d.setAttribute("src","data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOCIgaGVpZ2h0PSI4IiB2aWV3Qm94PSIwIDAgOCA4IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTcuODUzNTUgMC4xNDY0NDdDOC4wNDg4MiAwLjM0MTcwOSA4LjA0ODgyIDAuNjU4MjkxIDcuODUzNTUgMC44NTM1NTNMMC44NTM1NTMgNy44NTM1NUMwLjY1ODI5MSA4LjA0ODgyIDAuMzQxNzA5IDguMDQ4ODIgMC4xNDY0NDcgNy44NTM1NUMtMC4wNDg4MTU1IDcuNjU4MjkgLTAuMDQ4ODE1NSA3LjM0MTcxIDAuMTQ2NDQ3IDcuMTQ2NDVMNy4xNDY0NSAwLjE0NjQ0N0M3LjM0MTcxIC0wLjA0ODgxNTUgNy42NTgyOSAtMC4wNDg4MTU1IDcuODUzNTUgMC4xNDY0NDdaIiBmaWxsPSIjMUQxRDI2Ii8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMC4xNDY0NDcgMC4xNDY0NDdDMC4zNDE3MDkgLTAuMDQ4ODE1NSAwLjY1ODI5MSAtMC4wNDg4MTU1IDAuODUzNTUzIDAuMTQ2NDQ3TDcuODUzNTUgNy4xNDY0NUM4LjA0ODgyIDcuMzQxNzEgOC4wNDg4MiA3LjY1ODI5IDcuODUzNTUgNy44NTM1NUM3LjY1ODI5IDguMDQ4ODIgNy4zNDE3MSA4LjA0ODgyIDcuMTQ2NDUgNy44NTM1NUwwLjE0NjQ0NyAwLjg1MzU1M0MtMC4wNDg4MTU1IDAuNjU4MjkxIC0wLjA0ODgxNTUgMC4zNDE3MDkgMC4xNDY0NDcgMC4xNDY0NDdaIiBmaWxsPSIjMUQxRDI2Ii8+Cjwvc3ZnPgo="),t.appendChild(d),D||(t.style.visibility="hidden");const a=document.createElement("div");a.id=I,a.style.display="flex",a.style.flexDirection="column",a.style.height="100%",a.style.width="100%",a.style.justifyContent="center",a.style.alignItems="center";const l=document.createElement("img");l.setAttribute("width","28px"),l.setAttribute("src","data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iYW5pbWF0ZS1zcGluIC1tbC0xIG1yLTMgaC01IHctNSB0ZXh0LXdoaXRlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyNCAyNCI+CjxjaXJjbGUgb3BhY2l0eT0nMC4yNScgY3g9IjEyIiBjeT0iMTIiIHI9IjEwIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSI0Ij48L2NpcmNsZT4KPHBhdGggb3BhY2l0eT0nMC43NScgZmlsbD0iY3VycmVudENvbG9yIiBkPSJNNCAxMmE4IDggMCAwMTgtOFYwQzUuMzczIDAgMCA1LjM3MyAwIDEyaDR6bTIgNS4yOTFBNy45NjIgNy45NjIgMCAwMTQgMTJIMGMwIDMuMDQyIDEuMTM1IDUuODI0IDMgNy45MzhsMy0yLjY0N3oiPjwvcGF0aD4KPC9zdmc+"),l.style.marginTop="50px";try{l.animate([{transform:"rotate(0deg)"},{transform:"rotate(359deg)"}],{duration:3e3,iterations:1/0})}catch{g.warn("Animation not supported, loader will be fixed.")}a.appendChild(l);const c=document.createElement("div");c.id=C,c.style.display="flex",c.style.flexDirection="column",c.style.height="100%",c.style.width="100%",c.style.justifyContent="stretch",c.style.alignItems="stretch",c.style.display="none",i.appendChild(t),i.appendChild(a),i.appendChild(c),s.appendChild(i),r.appendChild(s)},o.displayIframeInsideLobbiesContainer=(n,e)=>{const r=o.getLobbiesIframeContainer(n),s=o.getLobbiesLoaderContainer(n),i=o.getLobbiesTextsContainer(n);if(!r||!s||!i){g.error("Lobbies containers not found.");return}const t=document.createElement("iframe");t.id=T,t.setAttribute("sandbox","allow-forms allow-modals allow-orientation-lock allow-popups allow-same-origin allow-scripts"),t.addEventListener("load",()=>{r.style.display="flex",s.style.display="none"}),t.addEventListener("loaderror",()=>{o.addReloadUrlToTextsContainer(()=>{r.removeChild(t),r.style.display="none",s.style.display="flex",o.displayIframeInsideLobbiesContainer(n,e)},i)}),t.src=e,t.style.flex="1",t.style.border="0",r.appendChild(t)},o.addTextsToLoadingContainer=(n,e,r)=>{const s=o.getLobbiesLoaderContainer(n);if(!s){g.error("Loader container not found.");return}const i=document.createElement("div");if(i.id=N,i.style.display="flex",i.style.flexDirection="column",i.style.width="100%",i.style.justifyContent="center",i.style.alignItems="center",i.style.position="relative",i.style.zIndex="3",i.style.fontSize="11pt",i.style.fontFamily='-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',!e){const t=document.createElement("h1");t.innerText="Publish your game!",t.style.fontSize="20pt",t.style.fontWeight="bold";const d=document.createElement("p");d.innerText="GDevelop's lobbies are only available for published games.";const a=document.createElement("p");a.innerText="Click the button below to learn how to publish your game then try again.",i.appendChild(t),i.appendChild(d),i.appendChild(a),s.innerHTML="";const l=document.createElement("a");m(l,r),l.innerText="How to publish my game",l.style.color="#0078d4",l.style.textDecoration="none",l.style.textDecoration="underline",l.style.cursor="pointer",i.appendChild(l)}s.prepend(i)},o.addReloadUrlToTextsContainer=(n,e)=>{const r=document.createElement("a");m(r,n),r.innerText="Try again",r.style.color="#0078d4",r.style.textDecoration="none",r.style.textDecoration="underline",r.style.cursor="pointer",e.appendChild(r)},o.removeLobbiesContainer=function(n){const e=o.getLobbiesRootContainer(n);!e||e.remove()},o.changeLobbiesWindowCloseActionVisibility=function(n,e){D=e;const r=o.getLobbiesCloseContainer(n);!r||(r.style.visibility=e?"inherit":"hidden")},o.hideLobbiesCloseButtonTemporarily=function(n){if(!D)return;const e=o.getLobbiesCloseContainer(n);!e||(e.style.visibility="hidden",setTimeout(()=>{e.style.visibility="inherit"},1e4))},o.displayErrorNotification=function(n){o.showNotification(n,"An error occurred while displaying the game lobbies, please try again.","error")},o.displayPlayerLeftNotification=function(n,e){o.showNotification(n,`${e} left.`,"warning")},o.displayPlayerJoinedNotification=function(n,e){o.showNotification(n,`${e} joined.`,"success")},o.displayConnectionErrorNotification=function(n){o.showNotification(n,"Could not connect to other players.","error")};const E=function(n){const e=document.getElementById(n);if(!e){g.error("Notification not found.");return}const r=b.indexOf(n);r!==-1&&b.splice(r,1),e.remove();for(let s=0;s<b.length;s++){const i=document.getElementById(b[s]);if(!i){g.error("Notification not found.");continue}i.style.top=`${12+s*32}px`}};o.showNotification=function(n,e,r){if(b.length>5){const c=b.shift();if(!c){g.error("No oldest notification ID found.");return}E(c)}const s=`notification-${Math.random().toString(36).substring(7)}`,i=n.getGame().getRenderer().getDomElementContainer();if(!i){g.error("No DOM element container found.");return}const t=document.createElement("div");t.id=s,t.style.position="absolute",t.style.pointerEvents="all",t.style.backgroundColor=r==="success"?"#0E062D":r==="warning"?"#FFA500":"#FF0000",t.style.top=`${12+b.length*32}px`,t.style.right="16px",t.style.padding="6px 32px 6px 6px",t.style.zIndex="1",t.style.display="flex",t.style.flexDirection="row-reverse",t.style.justifyContent="space-between",t.style.alignItems="center",t.style.boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)",t.style.borderRadius="4px",t.style.fontSize="11pt",t.style.color="#FFFFFF",t.style.fontFamily='-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"';try{t.animate([{transform:"translateY(-30px)",opacity:0},{transform:"translateY(0px)",opacity:1}],{duration:700,easing:"ease-out"})}catch{g.warn("Animation not supported, div will be fixed.")}const d=document.createElement("p");d.id="loggedText",d.innerHTML=e,d.style.margin="0px",t.appendChild(d),i.appendChild(t),b.push(s);const a=700,l=5e3;setTimeout(()=>{try{t.animate([{transform:"translateY(0px)",opacity:1},{transform:"translateY(-30px)",opacity:0}],{duration:a,easing:"ease-in"})}catch{g.warn("Animation not supported, div will be fixed.")}},l),setTimeout(()=>{E(s)},l+a)};const m=function(n,e){n.addEventListener("touchstart",r=>{e()}),n.addEventListener("click",r=>{e()})}})(L=x.multiplayerComponents||(x.multiplayerComponents={}))})(gdjs||(gdjs={}));
//# sourceMappingURL=multiplayercomponents.js.map
