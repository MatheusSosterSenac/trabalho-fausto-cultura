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

export default function Sobre() {
  const [menuOpen, setMenuOpen] = useState(true);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
      <div className="page-wrapper">
        <header className="centered-header">
          <h1>Sobre a Evolução</h1>
        </header>

        <div className="container-Inicial">
          <div className="text-container">
            <p>
              <h2>Animes no Passado</h2>
                <br></br>
                Antigamente, os animes eram predominantemente produzidos à mão, com artistas desenhando cada quadro individualmente. 
                Essa era uma tarefa trabalhosa e demorada, resultando em uma produção limitada e muitas vezes em animações simples. 
                No entanto, esses primeiros animes estabeleceram as bases para o que viria a ser uma forma de arte distinta, com narrativas envolventes e estilos visuais únicos. 
                Animes clássicos como "Astro Boy" e "Speed Racer" cativaram audiências em todo o mundo, introduzindo-as ao fascinante mundo da animação japonesa.
                <br></br>
              <h2>Animes Atualmente</h2>
                <br></br>
                Com os avanços tecnológicos, os animes passaram por uma revolução em termos de produção e qualidade. 
                A introdução da animação por computador e técnicas de animação digital permitiu uma maior flexibilidade e eficiência na criação de animes. 
                Isso levou a um aumento na produção de animes e uma ampla variedade de estilos e gêneros. Além disso, o mercado global de animes se expandiu significativamente, 
                com transmissões simultâneas e serviços de streaming disponibilizando animes para audiências em todo o mundo quase que instantaneamente após sua exibição no Japão. 
                Hoje, os animes são uma parte integrante da cultura pop global, com uma base de fãs diversificada e dedicada, influenciando a moda, a música, os videogames e outras 
                formas de entretenimento.
            </p>
          </div>
        </div> 

        <div className="images-container">
          <div className="image-container">
            <h3>Anime de 1979</h3>
            <img src="https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=480,height=720/catalog/crunchyroll/50a1c630f14f0927f2ed3648ca24fb34.jpe" alt="Imagem 1" />
          </div>
          <div className="image-container">
            <h3>Anime de 2019</h3>
            <img src="https://a.storyblok.com/f/178900/1000x1413/25ae436288/d631de3dc50170202577f75d5d83bc191680800092_main.jpg/m/filters:quality(95)format(webp)" alt="Imagem 2" />
          </div>
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