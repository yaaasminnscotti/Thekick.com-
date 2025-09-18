import React, { useState, useRef } from 'react';
import style from './perfil.module.css';

const Perfil = () => {
  const [perfil, setPerfil] = useState({
    nome: '',
    email: '',
    pais: '',
    celular: '',
    dataNascimento: '',
    foto: null
  });

  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPerfil({
      ...perfil,
      [name]: value
    });
  };

  const handleFotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setPerfil({
          ...perfil,
          foto: e.target.result
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSalvar = (e) => {
    e.preventDefault();
   
    console.log('Dados salvos:', perfil);
    alert('Perfil salvo com sucesso!');
  };

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  return (
    <div className={style.profileContainer}>
      <h1 className={style.profileTitle}>Meu Perfil</h1>
      
      <div className={style.profileImageContainer}>
        <div 
          className={style.profileImage}
          onClick={triggerFileInput}
          style={{ backgroundImage: perfil.foto ? `url(${perfil.foto})` : 'none' }}
        >
          {!perfil.foto && (
            <div className={style.profileImagePlaceholder}>
              <span>+</span>
              <p>Adicionar Foto</p>
            </div>
          )}
        </div>
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFotoChange}
          accept="image/*"
          style={{ display: 'none' }}
        />
      </div>

      <form className={style.profileForm} onSubmit={handleSalvar}>
        <div className={style.formGroup}>
          <label htmlFor="nome">Nome:</label>
          <input
            type="text"
            id="nome"
            name="nome"
            value={perfil.nome}
            onChange={handleChange}
            required
          />
        </div>

        <div className={style.formGroup}>
          <label htmlFor="email">E-mail:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={perfil.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className={style.formGroup}>
          <label htmlFor="pais">País:</label>
          <input
            type="text"
            id="pais"
            name="pais"
            value={perfil.pais}
            onChange={handleChange}
            required
          />
        </div>

        <div className={style.formGroup}>
          <label htmlFor="celular">Celular:</label>
          <input
            type="tel"
            id="celular"
            name="celular"
            value={perfil.celular}
            onChange={handleChange}
            placeholder="(xx) xxxxx-xxxx"
            pattern="\([0-9]{2}\) [0-9]{4,5}-[0-9]{4}"
            required
          />
        </div>

        <div className={style.formGroup}>
          <label htmlFor="dataNascimento">Data de Nascimento:</label>
          <input
            type="date"
            id="dataNascimento"
            name="dataNascimento"
            value={perfil.dataNascimento}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className={style.saveButton}>Salvar</button>
      </form>
    </div>
  );
};

export default Perfil;