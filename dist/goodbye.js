!function(){"use strict";const e=document.getElementById("confirm-btn"),t=document.getElementById("confirm-checkbox"),n=document.getElementById("p-delete"),c=document.getElementById("a-download"),o=new URL(document.location.href).searchParams.get("ID");document.querySelector(".mdc-checkbox").addEventListener("click",(()=>{e.disabled=!t.checked})),e.addEventListener("click",(e=>{e.preventDefault(),n.innerHTML="<strong>Wir werden Ihre Daten löschen. Danke!</strong>";const t=new Date;var c,a;c={subjID:new URL(document.location.href).searchParams.get("ID"),deleteData:!0,timestamp:t.toISOString(),epoch:t.getTime()},a=`DELETE${o}`,fetch("data/data.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({data:JSON.stringify(c),fname:a})}).then((e=>e.json())).then((e=>{console.log("Success:",e)})).catch((e=>{console.error("Error:",e)}))}),{capture:!1,once:!0}),c.addEventListener("click",(()=>{window.open("images/thanks.pdf")}),{capture:!1})}();
//# sourceMappingURL=goodbye.js.map