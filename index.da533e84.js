!function(){function e(e){return fetch("".concat("https://api.thecatapi.com/v1/","images/search?breed_ids=").concat(e)).then((function(e){if(!e.ok)throw new Error("Ошибка загрузки данных: ".concat(e.status));return e.json()}))}var n,t;(n="https://api.thecatapi.com/v1/",t="live_LdyZZAkvOUOZW3p4VB6sUES1xXuWB4URiEdzXmtox4uhzgcwlKHnYfmIPsy30pkJ",fetch("".concat(n,"breeds?breed_ids=beng,abys,api_key=").concat(t,"&=")).then((function(e){if(!e.ok)throw new Error("Ошибка загрузки данных: ".concat(e.status));return e.json()}))).then((function(e){console.log(e);var n=document.querySelector(".breed-select"),t=e.map((function(e){return"<option value='".concat(e.id,"'>").concat(e.name,"</option>")})).join("");n.insertAdjacentHTML("beforeend",t)})).catch((function(e){return console.log(e)})),document.querySelector(".breed-select").addEventListener("change",(function(n){var t=n.target.value;console.log(t),e(t).then((function(e){console.log(e);var n=document.querySelector(".cat-info"),t=e.map((function(e){return"".concat(e.name,", ").concat(e.description,", ").concat(e.temperament)})).join("");n.insertAdjacentHTML("beforeend",t)})).catch((function(e){return console.log(e)}))}))}();
//# sourceMappingURL=index.da533e84.js.map
