import{a as f}from"./assets/vendor-a61d8330.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function o(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerpolicy&&(n.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?n.credentials="include":t.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(t){if(t.ep)return;t.ep=!0;const n=o(t);fetch(t.href,n)}})();const p=()=>f.get("https://api.thecatapi.com/v1/breeds").then(e=>e.data).catch(e=>{console.error(e)}),h=e=>{const r=new URLSearchParams({breed_ids:e});return f.get(`https://api.thecatapi.com/v1/images/search?${r}`).then(o=>o.data[0]).catch(o=>{console.error(o)})};f.defaults.headers.common["x-api-key"]="live_RrA3pIaH06HzHv054rOs33bCr34aVdRpxjMyoyzpzwwOrm6g7CFAqmHjmHRs5KvA";const s=document.querySelector(".breed-select"),u=document.querySelector(".loader"),d=document.querySelector(".cat-info"),m=document.querySelector(".error");p().then(e=>{y(e),c(s)}).catch(e=>{c(m)}).finally(()=>{a(u)});const y=e=>{let r="";for(const o of e)r+=`<option value=${o.id}>${o.name}</options>`;s.innerHTML=r};s.addEventListener("change",e=>{c(u),a(d),a(m),s.disabled=!0,h(e.target.value).then(r=>{console.log("cat",r);const o=r.breeds[0],i=`
      <img src="${r.url}" width="400" />
      <div>
        <h2>${o.name}</h2>
        <p>${o.description}</p>
        <p><b>Temperament</b>: ${o.temperament}</p>
      </div>
    `;d.innerHTML=i,c(d)}).catch(r=>{c(m)}).finally(()=>{a(u),s.disabled=!1})});const a=e=>{e.classList.add("hidden")},c=e=>{e.classList.remove("hidden")};
//# sourceMappingURL=commonHelpers.js.map
