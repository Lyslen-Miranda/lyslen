/** @format */

import React, { useState } from "react";
import "./Main.css";
import cronometro from "../../assets/cronometro.png";

export default function Main() {

    const [contador, setContador] = useState(0);
    
    const [pare, setPare] = useState();

    function start() {
        let tempo = setInterval(() => {
          setContador((contador) => contador + 1);
        }, 1000);

        setPare(tempo);
    }

    const stop = () => clearInterval(pare);

    const reset = () => setContador(0);


    return (
        <main>
            <section className="sectionInicial">
                <img className="iconCronometro"src={cronometro} alt="Cronômetro" />
                <div className="boxInicio">
                    <h1 className="nomeSite">Stopwatch</h1>
                    <p className="descricaoSite">Te ajudando a descobrir em quanto tempo você realiza as suas atividades.</p>
                </div>
                <a href="#header">
                    <button className="buttonRetornarAoTopo">&uarr;</button>
                </a>
            </section>
            <section id="sectionCronometro">
                <h2 className="tituloSectionCronometro">Duração da atividade</h2>
                <p className="contagem">{contador}</p>
                <p className="medidaDeTempo">segundos</p>
                <div className="boxButtons">
                    <button onClick={start}>Começar</button>
                    <button onClick={stop}>Parar</button>
                    <button onClick={start}>Continuar</button>
                    <button onClick={reset}>Reiniciar</button>
                </div>
            </section>
        </main>
    );
}