function e(e){return fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${e}`).then((e=>{if(!e.ok)throw new Error(`Ошибка загрузки данных: ${e.status}`);return e.json()}))}var t,o;(t="https://api.thecatapi.com/v1/",o="live_LdyZZAkvOUOZW3p4VB6sUES1xXuWB4URiEdzXmtox4uhzgcwlKHnYfmIPsy30pkJ",fetch(`${t}breeds?breed_ids=beng,abys,api_key=${o}&=`).then((e=>{if(!e.ok)throw new Error(`Ошибка загрузки данных: ${e.status}`);return e.json()}))).then((e=>{console.log(e);const t=document.querySelector(".breed-select"),o=e.map((e=>`<option value='${e.id}'>${e.name}</option>`)).join("");t.insertAdjacentHTML("beforeend",o)})).catch((e=>console.log(e)));document.querySelector(".breed-select").addEventListener("change",(function(t){const o=t.target.value;console.log(o),e(o).then((e=>{console.log(e);const t=document.querySelector(".cat-info"),o=e.map((e=>`${e.name}, ${e.description}, ${e.temperament}`)).join("");t.insertAdjacentHTML("beforeend",o)})).catch((e=>console.log(e)))}));
//# sourceMappingURL=index.4c241f9a.js.map
