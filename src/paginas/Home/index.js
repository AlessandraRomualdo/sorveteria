import React from "react";
import Topo from "../../componentes/Topo";
import Rodape from "../../componentes/Rodape";
import './style.css';

export default function Home(){
    return(
    <div>
        <Topo/>
       <main>
        <section className="secao-baner limitar-secao">
            <div className="texto-baner">
                <h1>SORVETE ARTESANAL</h1>
            </div>
        </section>

        <section className="secao-sabores limitar-secao">
            <img src="assets/banner-sabores.jpg" alt="banner"/>
            <div className="texto-secoes">
                <h2>NOSSOS SABORES</h2>
                <span>Novos e deliciosos!</span>
                <p>Sorvete bom é aquele feito com os melhores ingredientes! Aqui na gelateria tosos os nossos produtos
                    são naturais, à base de frutas e sem nenhum conservante! Tamb~em temos opções sem lactose
                    e sem açúcar. Venha conhecer e perceber que tem com o sorvete ser delivioso e saudável ao mesmo tempo!
                </p>
            </div>
        </section>

        <section className="secao-eventos limitar-secao">
           <div className="texto-secoes">
           <h2>NOSSOS EVENTOS</h2>
           <span>Delicias com sorvete!</span>
           <p>Mais que uma sorveteria, uma extensão da sua casa! Estamos aqui prontinhos para
            te atender e oferecer os melhores eventos com os melhores sorvetes da sua vida!
            Venha nos conhecer e passar um tempo aqui com a gente.
           </p>
           </div> 
           <img src="assets/eventos-image.jpg" alt="eventos"/>
        </section>
        
        <section className="secao-sobre limitar-secao">
          <img src="assets/sobre-image.jpg"alt="sobre"/>
          <div className="texto-secoes">
            <h2>SOBRE NÓS</h2>
            <span>Alegria em cade casquinha!</span>
            <p>Venha tomar o melhor sorvete da região aqui com a gente! Nós estamoshá anos 
                no mercado produzindo o que tem de melhor para o nosso cliente e você não
                pode ficar fora dessa. Venha nos fazer visita e aproveite o melhor atendimento
                e o melhor sorvete da cidade.
            </p>
            </div>  
        </section>
       </main>
       <Rodape/>
    </div>    
    );
};