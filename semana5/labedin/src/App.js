import React from 'react';
import './App.css';

import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from "./components/CardPequeno/CardPequeno";
import HabilidadesCompetencias from './components/Habilidades/Habilidades';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://scontent.fsnz2-1.fna.fbcdn.net/v/t31.0-8/13308145_1043950125675419_2872787454710337433_o.jpg?_nc_cat=106&ccb=1-3&_nc_sid=174925&_nc_eui2=AeFpbfNPxa0v82mcA7BfsKotFyyXhzqSxVYXLJeHOpLFVvIdCMLDcaIHngPZhs_bD9xUrLugTt7KLZhYWAgYZQX7&_nc_ohc=iYLB26Gf7MUAX_kFVpA&_nc_ht=scontent.fsnz2-1.fna&oh=19c85b59be208ee9b3a83a80e485a66c&oe=606CABDB" 
          nome="Kell Lanes" 
          descricao="Oi, eu sou a Kell Lanes. Sou estudante da Labenu. Bacharel em Ciências contábeis e apaixonada por Tecnologia!"
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>
       <div >
        <CardPequeno email={"lanes.scm@gmail.com"} 
      
         endereco={"Av. Ipanema, 140, Rj"} />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://yt3.ggpht.com/ytc/AAUvwnjT7HNGp4zEh8_RHQiMA_FzRUhw_VXLmYMpMi41tw=s900-c-k-c0x00ffffff-no-rj" 
          nome="White Hat Jr" 
          descricao="Aula de Programação em JavaScript para crianças de 6 a 14 anos.!" 
        />
        
        <CardGrande 
          imagem="https://www.boadiversao.com.br/midia/image/santacruzshopping_46509.jpg" 
          nome="SANTA CRUZ SHOPPING" 
          descricao="Analista Financeiro. Responsável pelo budget e forecast e aplicações financeiras" 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>

      <div className="page-section-container">
        <h2>Habilidades e Competências </h2>
        <HabilidadesCompetencias 
          imagem="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV2_m6ZY567svGU49dfKySmWOLMawHUNnpgw&usqp=CAU" 
          texto="HTML" 
        />        

        <HabilidadesCompetencias 
          imagem="https://cdn.iconscout.com/icon/free/png-256/css-118-569410.png" 
          texto="CSS" 
        />  

         <HabilidadesCompetencias
          imagem="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_nE_aiSI3waBb9NerQUdYnSiIxPxqkGZV3A&usqp=CAU" 
          texto="JAVA SCRIPT" 
        />        

        <HabilidadesCompetencias
          imagem="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeEA9kk11Kv2RUzcmUxlTzHIVY7S5mdA0PFA&usqp=CAU" 
          texto="REACT" 
        />   
      </div>
    </div>
  );
}

export default App;
