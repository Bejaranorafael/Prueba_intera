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

    const primeraParte =

`Inicializando proyecto...

████████████████████ 100%

Conectando...

✔ Sistema listo

Activando reconocimiento facial...

Esperando una sonrisa...`;

    terminal.innerHTML = "";

    let i = 0;

    const escribir = setInterval(() => {

        terminal.innerHTML += primeraParte.charAt(i);

        i++;

        if(i >= primeraParte.length){

            clearInterval(escribir);

            setTimeout(() => {

                const segundaParte =

`

📷 Capturando imagen...

██████░░░░░░░░ 35%

██████████░░░░ 67%

██████████████ 100%

🙂 Sonrisa detectada

Verificando identidad...

✔ Hola, Sol.

Acceso concedido.

Este proyecto fue creado
especialmente para vos.

Disfrutá la aventura... ❤️`;

                let j = 0;

                const continuar = setInterval(() => {

                    terminal.innerHTML += segundaParte.charAt(j);

                    j++;

                    if(j >= segundaParte.length){

                        clearInterval(continuar);

                        setTimeout(() => {

                            terminal.style.display = "none";

                            photo.style.display = "block";
                            photo.classList.add("fade");

                            setTimeout(mostrarAnalisis,3000);

                        },1500);

                    }

                },30);

            },4000);

        }

    },30);

};


function mostrarAnalisis(){

    photo.style.display = "none";

    analysis.style.display = "block";
    analysis.classList.add("fade");

    let progreso = 0;

    const barra = setInterval(() => {

        progreso++;

        bar.style.width = progreso + "%";

        if(progreso >= 100){

            clearInterval(barra);

            escribirAnalisis();

        }

    },25);

}
