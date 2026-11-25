const diapositivas = [
    {
        tema: "Pregunta 4 · Consumo energético",
        titulo: "¿Cuánta energía consume nuestro software?",
        clase: "portada",
        contenido: `
            <div class="composicion composicion-portada">
                <div>
                    <p class="introduccion">¿Has considerado el consumo energético y la eficiencia de tus programas o plataformas al momento de desarrollarlos?</p>
                    <p class="idea"><strong>Una forma de empezar</strong><br>Compara cuánta energía usan dos versiones para completar la misma tarea.</p>
                </div>
                <figure class="panel medidor">
                    <div class="anillo" aria-hidden="true"><span>J</span></div>
                    <figcaption>
                        <strong>Energía por tarea</strong>
                        <span>Energía medida ÷ tareas completadas</span>
                        <span>Ejemplo ilustrativo: 200 J ÷ 100 consultas = 2 J por consulta.</span>
                    </figcaption>
                </figure>
            </div>
        `
    },
    {
        tema: "Diapositiva 2 · Lenguajes de Programación",
        titulo: "Eficiencia energética según el lenguaje de programación",
        clase: "lenguajes",
        contenido: `
            <div class="composicion">
                <ul class="hallazgos">
                    <li>Evaluaron 27 lenguajes bajo el Computer Language Benchmarks Game midiendo consumo de energía (Joules), tiempo y memoria.</li>
                    <li>Lenguajes compilados como C y Rust demostraron ser los más eficientes; lenguajes interpretados como Python o Perl consumieron hasta decenas de veces más energía.</li>
                    <li>Un programa más rápido no siempre es el que menos energía consume; la gestión de memoria altera el gasto eléctrico.</li>
                </ul>
                <div class="panel metricas" aria-label="Variables que comparó el estudio">
                    <div><strong>J</strong><span><b>Energía</b>Cuánto se consume</span></div>
                    <div><strong>ms</strong><span><b>Tiempo</b>Cuánto tarda la tarea</span></div>
                    <div><strong>MB</strong><span><b>Memoria</b>Cuánta RAM se usa</span></div>
                </div>
            </div>
            <p class="fuente">Referente: Pereira et al. (2017, 2021)</p>
        `
    },
    {
        tema: "Ciclo de vida · Modelo GREENSOFT",
        titulo: "La eficiencia se diseña desde el inicio",
        clase: "ciclo",
        contenido: `
            <p class="introduccion">GREENSOFT propone incorporar criterios de sostenibilidad durante toda la vida del software. Así se puede aplicar a una plataforma web.</p>
            <ol class="etapas">
                <li style="--orden: 0"><span>01</span><h3>Diseño</h3><p>Define qué medir, por ejemplo, julios por consulta.</p></li>
                <li style="--orden: 1"><span>02</span><h3>Desarrollo</h3><p>Compara dos versiones en el mismo equipo, con la misma carga y varias repeticiones.</p></li>
                <li style="--orden: 2"><span>03</span><h3>Operación</h3><p>Revisa el consumo con tráfico habitual y en horas pico.</p></li>
                <li style="--orden: 3"><span>04</span><h3>Retiro</h3><p>Apaga los servicios que ya no se usan y libera sus recursos.</p></li>
            </ol>
            <p class="fuente">Aplicación práctica basada en Naumann et al. (2011) y Georgiou et al. (2019)</p>
        `
    },
    {
        tema: "Arquitectura y servidores",
        titulo: "Un servidor puede hacer menos trabajo",
        clase: "servidores",
        contenido: `
            <div class="composicion">
                <div>
                    <p class="introduccion">Procaccianti y su equipo probaron dos cambios en un entorno controlado.</p>
                    <dl class="practicas">
                        <div><dt>MySQL</dt><dd>Optimizaron consultas para reducir el trabajo necesario para entregar los mismos resultados.</dd></div>
                        <div><dt>Apache</dt><dd>Usaron una instrucción de pausa para evitar trabajo continuo durante la espera.</dd></div>
                    </dl>
                </div>
                <figure class="panel ahorro">
                    <span class="dato-grande">25<span>%</span></span>
                    <figcaption><strong>Reducción máxima observada</strong><br>El ahorro depende de la aplicación, el equipo y la carga de trabajo.</figcaption>
                </figure>
            </div>
            <p class="fuente">Procaccianti et al. (2016)</p>
        `
    },
    {
        tema: "Estructuras de datos · Java",
        titulo: "La operación cambia qué lista conviene",
        clase: "colecciones",
        contenido: `
            <p class="introduccion">Hasan y su equipo midieron el consumo de listas, mapas y conjuntos. En sus pruebas con listas, la opción más eficiente cambió según dónde se insertaban los elementos.</p>
            <div class="panel tabla-panel">
                <table>
                    <caption>Menor consumo entre las dos listas en el experimento</caption>
                    <thead><tr><th scope="col">Operación</th><th scope="col">Implementación</th></tr></thead>
                    <tbody>
                        <tr><th scope="row">Insertar al inicio</th><td><code>LinkedList</code></td></tr>
                        <tr><th scope="row">Insertar en medio o al final</th><td><code>ArrayList</code></td></tr>
                    </tbody>
                </table>
            </div>
            <p class="idea"><strong>Aplicación práctica</strong> · Identifica la operación que más se repite y mide ambas opciones con datos representativos.</p>
            <p class="fuente">Hasan et al. (2016)</p>
        `
    },
    {
        tema: "Conclusión y bibliografía",
        titulo: "Incluyamos la energía en las pruebas",
        clase: "cierre",
        contenido: `
            <p class="introduccion">Para considerar la energía desde el desarrollo, mide los julios por tarea, cambia una decisión a la vez y vuelve a medir. Comprueba también que la versión siga entregando el resultado esperado y cumpla los requisitos de tiempo.</p>
            <h3 class="titulo-referencias">Referencias</h3>
            <ol class="referencias"></ol>
        `
    }
];

const referencias = [
    {
        texto: "Georgiou, S., Rizou, S., & Spinellis, D. (2019). Software development lifecycle for energy efficiency: Techniques and tools. ACM Computing Surveys, 52(4), artículo 81.",
        doi: "https://doi.org/10.1145/3337773"
    },
    {
        texto: "Hasan, S., King, Z., Hafiz, M., Sayagh, M., Adams, B., & Hindle, A. (2016). Energy profiles of Java collections classes. En Proceedings of the 38th International Conference on Software Engineering (ICSE '16) (pp. 225–236). ACM.",
        doi: "https://doi.org/10.1145/2884781.2884869"
    },
    {
        texto: "Naumann, S., Dick, M., Kern, E., & Johann, T. (2011). The GREENSOFT Model: A reference model for green and sustainable software and its engineering. Sustainable Computing: Informatics and Systems, 1(4), 294–304.",
        doi: "https://doi.org/10.1016/j.suscom.2011.06.004"
    },
    {
        texto: "Pereira, R., Couto, M., Ribeiro, F., Rua, R., Cunha, J., Fernandes, J. P., & Saraiva, J. (2017). Energy efficiency across programming languages: How do energy, time, and memory relate? En Proceedings of the 10th ACM SIGPLAN International Conference on Software Language Engineering (SLE 2017) (pp. 256–267). ACM.",
        doi: "https://doi.org/10.1145/3136014.3136031"
    },
    {
        texto: "Pereira, R., Couto, M., Ribeiro, F., Rua, R., Cunha, J., Fernandes, J. P., & Saraiva, J. (2021). Ranking programming languages by energy efficiency. Science of Computer Programming, 205, 102609.",
        doi: "https://doi.org/10.1016/j.scico.2021.102609"
    },
    {
        texto: "Procaccianti, G., Fernández, H., & Lago, P. (2016). Empirical evaluation of two best practices for energy-efficient software development. Journal of Systems and Software, 117, 185–198.",
        doi: "https://doi.org/10.1016/j.jss.2016.02.035"
    }
];

let indiceActual = 0;

const presentacion = document.querySelector(".presentacion-contenedor");
const visor = document.getElementById("visor-diapositiva");
const btnAnterior = document.getElementById("btn-anterior");
const btnSiguiente = document.getElementById("btn-siguiente");
const btnPantalla = document.getElementById("btn-pantalla");
const contador = document.getElementById("contador-diapositivas");
const barraProgreso = document.getElementById("barra-progreso");
const indicadorPuntos = document.getElementById("indicador-puntos");

const puntos = diapositivas.map((diapositiva, indice) => {
    const punto = document.createElement("button");
    punto.type = "button";
    punto.className = "punto";
    punto.title = diapositiva.tema;
    punto.setAttribute("aria-label", `Diapositiva ${indice + 1}. ${diapositiva.tema}`);
    punto.addEventListener("click", () => cambiarDiapositiva(indice));
    indicadorPuntos.append(punto);
    return punto;
});

function cambiarDiapositiva(indice) {
    if (indice < 0 || indice >= diapositivas.length || indice === indiceActual) return;
    indiceActual = indice;
    renderizarDiapositiva();
}

function renderizarDiapositiva() {
    const actual = diapositivas[indiceActual];
    const encabezado = indiceActual === 0 ? "h1" : "h2";
    visor.innerHTML = `
        <article class="diapositiva ${actual.clase}">
            <p class="etiqueta">${actual.tema}</p>
            <${encabezado}>${actual.titulo}</${encabezado}>
            ${actual.contenido}
        </article>
    `;

    const listaReferencias = visor.querySelector(".referencias");
    if (listaReferencias) {
        listaReferencias.innerHTML = referencias.map(({ texto, doi }) => `
            <li>${texto} <a href="${doi}" target="_blank" rel="noopener noreferrer" aria-label="DOI: ${doi.split("doi.org/")[1]}">DOI</a></li>
        `).join("");
    }

    visor.scrollTop = 0;
    contador.textContent = `${indiceActual + 1} / ${diapositivas.length}`;
    barraProgreso.style.width = `${(indiceActual + 1) / diapositivas.length * 100}%`;
    btnAnterior.disabled = indiceActual === 0;
    btnSiguiente.disabled = indiceActual === diapositivas.length - 1;
    puntos.forEach((punto, indice) => {
        if (indice === indiceActual) punto.setAttribute("aria-current", "step");
        else punto.removeAttribute("aria-current");
    });
}

btnAnterior.addEventListener("click", () => cambiarDiapositiva(indiceActual - 1));
btnSiguiente.addEventListener("click", () => cambiarDiapositiva(indiceActual + 1));

document.addEventListener("keydown", (evento) => {
    if (evento.altKey || evento.ctrlKey || evento.metaKey || evento.shiftKey) return;
    const destinos = {
        ArrowLeft: indiceActual - 1,
        ArrowRight: indiceActual + 1,
        Home: 0,
        End: diapositivas.length - 1
    };
    if (!Object.hasOwn(destinos, evento.key)) return;
    evento.preventDefault();
    cambiarDiapositiva(destinos[evento.key]);
});

if (document.fullscreenEnabled && presentacion.requestFullscreen) {
    btnPantalla.hidden = false;
    btnPantalla.addEventListener("click", async () => {
        try {
            if (document.fullscreenElement) await document.exitFullscreen();
            else await presentacion.requestFullscreen();
        } catch {
            btnPantalla.hidden = true;
        }
    });

    document.addEventListener("fullscreenchange", () => {
        const etiqueta = document.fullscreenElement ? "Salir de pantalla completa" : "Activar pantalla completa";
        btnPantalla.setAttribute("aria-label", etiqueta);
        btnPantalla.title = etiqueta;
    });
}

renderizarDiapositiva();
