!function(){"use strict";var e=function(e){document.querySelector(e).addEventListener("submit",(function(e){if(e.preventDefault(),sessionStorage.submitted)return alert("Ваша заявка успішно відправлена, Ваш менеджер невдовзі з Вами звʼяжеться"),void this.reset();fetch("https://script.google.com/macros/s/AKfycbyHv9588BKVjTM3sxohBrY_JLs9eC2eyUb-qV1TFme5ztzqYu9CCkCc4UuuDhga3iUZHg/exec",{method:"POST",body:new FormData(this)}).then((e=>e.json())).then((e=>{e.success?(alert("Ваша заявка успішно відправлена, Ваш менеджер невдовзі з Вами звʼяжеться"),sessionStorage.setItem("submitted","true"),this.reset()):alert("Произошла ошибка при отправке формы")})).catch((e=>{console.error("Ошибка отправки формы:",e),alert("Произошла ошибка при отправке формы")}))}))};(function(){const e=document.querySelector(".x-burger"),t=document.querySelector(".header--MOBILE"),o=t.querySelector("nav"),s=t.querySelector(".header-decor"),c=t.querySelector(".btn"),n=document.querySelectorAll(".menu__link");function r(){o.classList.remove("is-Open"),t.classList.remove("menu-Open"),e.classList.remove("is-Active"),document.body.classList.remove("no-scroll")}e.onclick=()=>{e.classList.toggle("is-Active"),e.classList.contains("is-Active")?(o.classList.add("is-Open"),t.classList.add("menu-Open"),document.body.classList.add("no-scroll")):r()},s.onclick=()=>r(),c.onclick=e=>r(),n.forEach((e=>{e.onclick=()=>r()}))})(),function(){const e=document.querySelectorAll("input[name='tell']"),t=new Inputmask("+38 (999) 999-99-99");e.forEach((e=>t.mask(e)))}(),document.querySelectorAll("a").forEach((e=>{e.addEventListener("click",(function(e){e.preventDefault();const t=this.getAttribute("href").substring(1),o=document.getElementById(t);o&&o.scrollIntoView({behavior:"smooth"})}))})),e("#top_form"),e("#bottom_form")}();