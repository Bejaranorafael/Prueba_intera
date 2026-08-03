const startButton = document.getElementById("startButton");
const inicio = document.getElementById("inicio");

const terminal = document.getElementById("terminal");
const photo = document.getElementById("photo");

const analysis = document.getElementById("analysis");
const analysisText = document.getElementById("analysisText");
const bar = document.getElementById("bar");

const compileButton = document.getElementById("compileButton");
const result = document.getElementById("result");


startButton.onclick = () => {

    inicio.style.display = "none";
    terminal.style.display = "block";

    const texto =

`Inicializando proyecto...

████████████████████ 100%

Conectando...

✔ Sistema listo

Escaneando pantalla...

Buscando sonrisa...

⌛ Esperá unos segundos...

Analizando...

✔ Sonrisa detectada

Verificando identidad...

✔ Hola, Sol.

Acceso concedido.

Este proyecto fue creado
especialmente para vos.

Disfrutá la aventura... ❤️`;

    terminal.innerHTML = "";

    let i = 0;

    const escribir = setInterval(() => {

        terminal.innerHTML += texto.charAt(i);

        i++;

        if(i >= texto.length){

            clearInterval(escribir);

            setTimeout(() => {

                terminal.style.display = "none";

                photo.style.display = "block";
                photo.classList.add("fade");

                setTimeout(mostrarAnalisis,3000);

            },1200);

        }

    },30);

};


function mostrarAnalisis(){

    photo.style.display="none";

    analysis.style.display="block";
    analysis.classList.add("fade");

    let progreso=0;

    const barra=setInterval(()=>{

        progreso++;

        bar.style.width=progreso+"%";

        if(progreso>=100){

            clearInterval(barra);

            escribirAnalisis();

        }

    },25);

}


function escribirAnalisis(){

const texto=

`Estado..................... COMPLETADO

Proyecto................... SOL

Autor...................... Rafael

Analizando variables...

✔ Sonrisa................. Detectada

✔ Energía................. Muy alta

✔ Carisma................. Excepcional

✔ Compatibilidad con café. Pendiente ☕

✔ Nivel de curiosidad..... Alto

Resultado:

No encontré una explicación lógica
de por qué alguien puede alegrar
tanto un día común.

Quizás algunos algoritmos
simplemente no están hechos
para entender ciertas personas.`;

analysisText.innerHTML="";

let i=0;

const escribir=setInterval(()=>{

analysisText.innerHTML+=texto.charAt(i);

i++;

if(i>=texto.length){

clearInterval(escribir);

compileButton.style.display="block";
compileButton.classList.add("fade");

}

},20);

}


compileButton.onclick=()=>{

analysis.style.display="none";

result.style.display="block";
result.classList.add("fade");

};
