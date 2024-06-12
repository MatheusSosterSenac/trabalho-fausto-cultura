import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/forms.css";

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

export default function Forms() {
  const [menuOpen, setMenuOpen] = useState(true);
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    mensagem: ''
  });

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aqui você pode fazer algo com os dados do formulário, como enviá-los para um servidor
    console.log('Dados do formulário:', formData);
    // Lembre-se de resetar o estado do formulário após o envio
    setFormData({
      nome: '',
      email: '',
      mensagem: ''
    });
  };

  return (
    <div className="page-wrapper">
      <header className="centered-header">
        <h1>Forms</h1>
      </header>
      <div className="menu-wrapper">
        <Menu menuOpen={menuOpen} toggleMenu={toggleMenu} />
      </div>
      <div className="form-wrapper">
        <form onSubmit={handleSubmit}>
          <label>
            Nome:
            <input
              type="text"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Mensagem:
            <textarea
              name="mensagem"
              value={formData.mensagem}
              onChange={handleChange}
            />
          </label>
          <br />
          <button type="submit">Enviar</button>
        </form>
      </div>
      <footer className="footer">
        <p>&copy; Site por Matheus Henrique Soster</p>
      </footer>
    </div>
  );
}
