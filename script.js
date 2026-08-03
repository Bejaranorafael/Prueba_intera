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

    const mensaje = `Inicializando proyecto...

████████████████████ 100%

Conectando con el sistema...

✔ Sistema listo

Activando reconocimiento facial...

Esperando una sonrisa... 🙂`;

    terminal.innerHTML = "";

    let i = 0;

    const escribir = setInterval(() => {

        terminal.innerHTML += mensaje.charAt(i);
        i++;

        if (i >= mensaje.length) {

            clearInterval(escribir);

            // Espera para que Sol sonría
            setTimeout(() => {

                const deteccion = `

📷 Capturando imagen...

██████░░░░░░░░ 35%

██████████░░░░ 67%

██████████████ 100%

✔ Sonrisa detectada

Verificando identidad...

✔ Hola, Sol.

Acceso concedido.

Este proyecto fue creado
especialmente para vos.

Disfrutá la aventura... ❤️`;

                let j = 0;

                const escribir2 = setInterval(() => {

                    terminal.innerHTML += deteccion.charAt(j);
                    j++;

                    if (j >= deteccion.length) {

                        clearInterval(escribir2);

                        setTimeout(() => {

                            terminal.style.display = "none";

                            photo.style.display = "block";
                            photo.classList.add("fade");

                            setTimeout(() => {

                                photo.style.display = "none";

                                mostrarAnalisis();

                            }, 3000);

                        }, 1500);

                    }

                }, 25);

            }, 4000);

        }

    }, 25);

};
function mostrarAnalisis() {

    analysis.style.display = "block";
    analysis.classList.add("fade");

    analysisText.innerHTML = "";
    compileButton.style.display = "none";
    result.style.display = "none";

    let progreso = 0;

    bar.style.width = "0%";

    const barra = setInterval(() => {

        progreso++;

        bar.style.width = progreso + "%";

        if (progreso >= 100) {

            clearInterval(barra);

            escribirAnalisis();

        }

    }, 25);

}


function escribirAnalisis(){

const texto = 
`Estado..................... COMPLETADO

Proyecto................... SOL

Autor...................... Rafael

Analizando variables...

✔ Sonrisa detectada

✔ Energía muy alta

✔ Carisma excepcional

✔ Curiosidad confirmada

Resultado del análisis:

No encontré una explicación lógica
de por qué alguien puede alegrar
tanto un día común.

Algunos algoritmos
simplemente no pueden explicar
ciertas personas.

Análisis finalizado.

Esperando compilación...`;


analysisText.innerHTML = "";

let i = 0;


const escribir = setInterval(()=>{

    analysisText.innerHTML += texto.charAt(i);

    i++;


    if(i >= texto.length){

        clearInterval(escribir);

        compileButton.style.display = "block";

    }


},40);


}


compileButton.onclick = () => {

    analysis.style.display = "none";

    result.style.display = "block";
    result.classList.add("fade");

};
