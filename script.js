const boton=document.getElementById("startButton");

const terminal=document.getElementById("terminal");

const foto=document.getElementById("photo");

const historia=document.getElementById("story");

boton.onclick=()=>{

boton.style.display="none";

terminal.style.display="block";

let texto=

`Inicializando...

██████████████ 100%

Buscando...

✔ Sol encontrada

Analizando...

✔ Sonrisa detectada

✔ Gimnasio detectado

⚠ Advertencia

Se encontró un desarrollador
que no puede dejar de pensar
en vos...`;

let i=0;

terminal.innerHTML="";

let maquina=setInterval(()=>{

terminal.innerHTML+=texto.charAt(i);

i++;

if(i==texto.length){

clearInterval(maquina);

setTimeout(()=>{

terminal.style.display="none";

foto.style.display="block";

},1800);

}

},28);

}
