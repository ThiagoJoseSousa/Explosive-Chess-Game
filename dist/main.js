(()=>{function e(e){document.querySelector(".pages .page.active").classList.remove("active"),document.querySelector(`.pages .page[data-page="${e}"]`).classList.add("active")}window.onload=()=>{const t=document.querySelectorAll("[data-switcher]");for(let a=0;a<t.length;a++){const c=t[a],s=c.dataset.tab;c.addEventListener("click",(()=>{document.querySelector(".tabs .tab.active").classList.remove("active"),c.parentNode.classList.add("active"),e(s)}))}}})();