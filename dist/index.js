!function(){"use strict";const e=document.getElementById("button-center-item");let t=!1,c=!1;document.querySelector(".mdc-text-field__input").addEventListener("keyup",(n=>{n.preventDefault(),document.querySelector(".mdc-text-field-character-counter").innerHTML=`${document.querySelector(".mdc-text-field__input").value.length} / 10`,t=document.querySelector(".mdc-text-field__input").value.length>0,e.disabled=!(t&&c)}),{capture:!1});const n=Array.from(document.getElementsByName("radios-webcam"));let i=!1;n.forEach((n=>{n.onclick=function(){"radio-webcam-yes"===this.getAttribute("id")&&(i=!0),"radio-webcam-no"===this.getAttribute("id")&&(i=!1),c=!0,e.disabled=!(t&&c)}})),e.addEventListener("click",(e=>{e.preventDefault();const t=document.querySelector(".mdc-text-field__input").value;window.location.href=`./instructions.html?ID=${t}&webcam=${i}`}))}();
//# sourceMappingURL=index.js.map