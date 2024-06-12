import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/inicial.css";

function Menu({ menuOpen, toggleMenu }) {
  return (
    <div className={`menu ${menuOpen ? 'open' : 'closed'}`}>
      <h2>Menu</h2>
      <ul>
        <li><Link to="/" onClick={toggleMenu}>Inicial</Link></li>
        <li><Link to="/sobre" onClick={toggleMenu}>Sobre a Evolução</Link></li>
        <li><Link to="/forms" onClick={toggleMenu}>Forms</Link></li>
      </ul>
      <button className="toggle-button" onClick={toggleMenu}>
        {menuOpen ? 'Minimizar' : 'Expandir'}
      </button>
    </div>
  );
}

export default function Inicial() {
  const [menuOpen, setMenuOpen] = useState(true);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="page-wrapper">
      <header className="centered-header">
        <h1>Cultura do Japão</h1>
      </header>

      <div className="container-Inicial">
        <div className="text-container">
            <h2>Mangás e Light Novels</h2>
              <h4>Mangás</h4>
                <br></br>
                <p>
                  Os mangás são histórias em quadrinhos japonesas que abrangem uma ampla gama de gêneros, desde ação e aventura até romance e fantasia. 
                  O estilo artístico único dos mangás, caracterizado por seus traços distintos e expressões emocionais marcantes, é uma parte essencial de sua identidade.
                  Uma das características mais marcantes dos mangás é sua capacidade de abordar temas complexos e variados, incluindo questões sociais, políticas e culturais. 
                  Muitos mangakás (criadores de mangá) utilizam essa mídia como uma forma de explorar e comentar sobre a sociedade japonesa e o mundo ao seu redor, proporcionando uma visão única e perspicaz sobre diversos assuntos.
                  Além disso, a diversidade de gêneros e estilos dentro do mundo dos mangás significa que há algo para todos os gostos, 
                  desde mangás shounen (direcionados para o público jovem masculino) cheios de ação e batalhas emocionantes até mangás josei (direcionados para o público adulto feminino) 
                  que exploram temas mais maduros e românticos.
                    <br></br>
                    <br></br>
                  <h4>Light Novels</h4>
                    <br></br>
                  As light novels são romances japoneses que geralmente são acompanhados por ilustrações e têm uma narrativa leve e envolvente. Ao contrário dos romances tradicionais, 
                  as light novels são projetadas para serem lidas rapidamente, apresentando capítulos curtos e uma linguagem acessível que atrai tanto jovens quanto adultos.
                  Uma das características mais distintas das light novels é sua forte conexão com outras formas de mídia, como mangás, anime e jogos. 
                  Muitas light novels são adaptadas para anime ou mangá, o que amplia ainda mais seu alcance e popularidade entre os fãs.
                  Assim como os mangás, as light novels abrangem uma variedade de gêneros, incluindo fantasia, ficção científica, romance e mistério. 
                  Elas oferecem aos leitores uma experiência imersiva, permitindo que eles mergulhem em mundos imaginários e acompanhem personagens cativantes em suas jornadas emocionantes.
                </p>  
            
              </div>
              <img
                src="https://upload.wikimedia.org/wikipedia/en/9/99/Vagabond_%28manga%29_vol._1.png"
                alt="Manga"
                className="floating-image"
              />

              <img
                src="https://m.media-amazon.com/images/I/91Zdt-8PTPL._AC_UF1000,1000_QL80_.jpg"
                alt="Second Manga"
                className="floating-image2 left-floating"
              />
      </div>

      <div className="container-Inicial">
        <h2>Animes</h2>
        <br></br>
        <p>
        Anime, no Japão, é uma forma de animação caracterizada por uma ampla variedade de estilos artísticos e gêneros de storytelling. 
        Originou-se no Japão no início do século XX e cresceu para se tornar uma parte integrante da cultura popular japonesa. 
        Geralmente, o termo "anime" é usado para se referir a qualquer forma de animação, seja ela de origem japonesa ou não, mas no contexto japonês, 
        é exclusivamente associado à animação produzida no país.
        Os animes japoneses abrangem uma ampla gama de gêneros, incluindo ação, aventura, romance, ficção científica, fantasia, horror e muito mais. 
        Eles são dirigidos a públicos de todas as idades, desde crianças até adultos, e muitas vezes abordam temas complexos e maduras.
        Uma característica marcante do anime é sua arte visual distintiva, que varia de estilos simplificados e infantis a estilos mais realistas e detalhados. 
        Os animes japoneses são conhecidos por sua rica paleta de cores, expressões faciais exageradas e uso criativo da cinematografia.
        </p>

              <img
                src="https://br.web.img3.acsta.net/pictures/17/02/27/17/41/046707.jpg"
                alt="Manga"
                className="floating-image3"
              />

              <img
                src="https://br.web.img3.acsta.net/pictures/20/09/14/10/31/4875617.jpg"
                alt="Manga"
                className="floating-image4"
              />
      </div>

      <div className="menu-wrapper">
        <Menu menuOpen={menuOpen} toggleMenu={toggleMenu} />
      </div>

      <footer className="footer">
        <p>&copy; Site por Matheus Henrique Soster</p>
      </footer>
    </div>
    
  );
}
