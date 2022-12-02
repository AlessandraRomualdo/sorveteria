import React from "react";
import Topo from '../../componentes/Topo/'
import Rodape from '../../componentes/Rodape/'
import './style.css'

export default function Sabores(){
    return(
        <div>
            <Topo/>
            <main className="limitar-secao">
                <section className="secao-baner-sabor">
                    <div className="titulo-sabor">
                      <h1>NOSSOS SABORES</h1> 
                    </div>
                </section>

                <section>
                  <h2>SABORES DE SORVETE</h2>
                      <div className="container">
                         <div className="sabores-card">
                             <img src="assets/sabor-oreo.png"alt="sabor oreo"/>
                             <h3>Oreo</h3>
                             <p>Delicioso sorvete sabor Oreo. Uma explosão de sabor.</p>
                         </div>
                         <div className="sabores-card">
                             <img src="assets/sabor-pistache.png"alt="sabor pistachê"/>
                             <h3>Pistache</h3>
                             <p>Cremoso sorvete sabor pistache com pedacinhos de semente.</p>
                         </div>
                         <div className="sabores-card">
                             <img src="assets/sabor-cookies-avela.png" alt="sabor cookie e avelã"/>
                             <h3>Cookies & Avelã</h3>
                             <p>O nosso melhor sorvete. Você vai adorar o sabor.</p>
                         </div>
                         <div className="sabores-card">
                             <img src="assets/sorbet-kiwi.png"alt="sabor kiwi"/>
                             <h3>Kiwi</h3>
                             <p>Delicioso e refrencante sorvete sabor kiwi. Rico em vitamina C.</p>
                         </div>
                         <div className="sabores-card">
                             <img src="assets/sorbet-morango.png" alt="sabor morango"/>
                             <h3>Morango</h3>
                             <p>Sorvete de morango gourmet. Tradicional e saboroso.</p>
                         </div>
                         <div className="sabores-card">
                             <img src="assets/sorbet-limao.png"alt="sabor limão"/>
                             <h3>Limão Siciliano</h3>
                             <p>O incrivel sorvete gourmet de limão siciliano vai te encantar.</p>
                         </div>
                    </div>
                </section>
            </main>
            <Rodape/>
        </div>
    )
}