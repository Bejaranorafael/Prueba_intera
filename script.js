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


// Nueva escena

setTimeout(()=>{

historia.style.display="block";

let mensaje=

`Dicen que en algún lugar del océano
existe una sirena que guarda un secreto...

Pero este secreto no está en el mar.

Está en una sonrisa,
en una mirada,
en esos pequeños momentos
que hacen que un día común
se vuelva especial.

Sol, esta pequeña aventura
es solo una forma de recordarte
lo increíble que sos ❤️`;


let j=0;

historia.innerHTML="";


let escribir=setInterval(()=>{

historia.innerHTML+=mensaje.charAt(j);

j++;


if(j==mensaje.length){

clearInterval(escribir);

}

},45);


},2500);


},1800);

}

},28);

}
