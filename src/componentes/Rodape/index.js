import React from "react";
import './style.css';

export default function Rodape(){
    return(
        <footer className="limitar-secao">
            <div className="secao-info">
              <img src="assets/logo.png"alt="logo"/>
              <div className="info">
                <h3>ENDEREÇO</h3>
                <p>AV. Bernardino de Camppos, 98</p>
                <p>São Paulo, SP 12345-678</p>
              </div>
              <div className="info">
                <h3>CONTATO</h3>
                <p>info@meussites.com</p>
                <p>Tel:(11)3456-7890</p>
              </div>
              <div className="info">
                <h3>HORÁRIOS</h3>
                <p>ABERTO TOS OS DIAS</p>
                <p>10:00 - 22:00</p>
              </div>
        
            </div>
            <div className="dev">
                <p>Gelateria. Orgulhosamente desenvolvido por 
                  <a href="https://www.linkedin.com/in/alessandra-romualdo-07782b1b7/" target="_blank">
                  Alessandra Romualdo
                  </a>
                </p>
            </div>
        </footer>
    );
};