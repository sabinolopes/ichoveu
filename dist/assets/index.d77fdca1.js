(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&c(s)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const w="ff6de00c291d49ae959124621230609";async function v(o){const n=`https://api.weatherapi.com/v1/search.json?lang=pt&key=${w}&q=${o}`,c=await(await fetch(n)).json();return c.length===0&&window.alert("Nenhuma cidade encontrada"),c}async function k(o){const n=`https://api.weatherapi.com/v1/current.json?lang=pt&key=${w}&q=${o}`,c=await(await fetch(n)).json(),{current:e,location:t}=c;return{name:t.name,country:t.country,temp:e.temp_c,condition:e.condition.text,icon:e.condition.icon,url:o}}const x="ff6de00c291d49ae959124621230609";function i(o,n,a=""){const c=document.createElement(o);return c.classList.add(...n.split(" ")),c.textContent=a,c}function L(o){const{date:n,maxTemp:a,minTemp:c,condition:e,icon:t}=o,s=new Date(n);s.setDate(s.getDate()+1);const l=s.toLocaleDateString("pt-BR",{weekday:"short"}),r=i("div","forecast"),m=i("p","forecast-weekday",l),f=i("span","forecast-temp max","max"),h=i("span","forecast-temp max",`${a}\xBA`),y=i("span","forecast-temp min","min"),C=i("span","forecast-temp min",`${c}\xBA`),d=i("div","forecast-temp-container");d.appendChild(f),d.appendChild(y),d.appendChild(h),d.appendChild(C);const u=i("p","forecast-condition",e),p=i("img","forecast-icon");p.src=t.replace("64x64","128x128");const E=i("div","forecast-middle-container");return E.appendChild(d),E.appendChild(p),r.appendChild(m),r.appendChild(E),r.appendChild(u),r}function g(o){const n=document.getElementById(o);for(;n.firstChild;)n.removeChild(n.firstChild)}function B(o){const n=document.getElementById("forecast-container"),a=document.getElementById("weekdays");g("weekdays"),o.forEach(c=>{const e=L(c);a.appendChild(e)}),n.classList.remove("hidden")}const I=o=>{const n=i("button","city-forecast-button","Ver previs\xE3o");return n.addEventListener("click",async()=>{const c=await(await fetch(o)).json(),{forecastday:e}=c.forecast,t=e.map(({date:s,day:l})=>({date:s,maxTemp:l.maxtemp_c,minTemp:l.mintemp_c,condition:l.condition.text,icon:l.condition.icon}));B(t)}),n};function $(o){const{name:n,country:a,temp:c,condition:e,icon:t,url:s}=o,l=`https://api.weatherapi.com/v1/forecast.json?lang=pt&key=${x}&q=${s}&days=7`,r=i("li","city"),m=i("div","city-heading"),f=i("h2","city-name",n),h=i("p","city-country",a);m.appendChild(f),m.appendChild(h);const y=i("p","city-temp",`${c}\xBA`),C=i("p","city-condition",e),d=i("div","city-temp-container");d.appendChild(C),d.appendChild(y);const u=i("img","condition-icon");u.src=t.replace("64x64","128x128");const p=i("div","city-info-container");return p.appendChild(d),p.appendChild(u),r.appendChild(m),r.appendChild(p),r.appendChild(I(l)),r}const b=o=>{document.querySelector("#cities").appendChild($(o))};async function D(o){o.preventDefault(),g("cities");const a=document.getElementById("search-input").value,e=(await v(a)).map(({url:t})=>k(t));Promise.all(e).then(t=>t.forEach(s=>b(s))).catch(t=>window.alert(t))}document.getElementById("search-form").addEventListener("submit",D);document.getElementById("close-forecast").addEventListener("click",()=>{document.getElementById("forecast-container").classList.add("hidden")});
