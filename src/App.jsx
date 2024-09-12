import React, { useState } from 'react';
import Formulario from './Formulario';
import Resumo from './Resumo';

function App() {
  const [nome, setNome] = useState('');

  const handleFormSubmit = (nome) => {
    setNome(nome);
  };

  return (
    <div className="App">
      <h1>Formulário</h1>
      <Formulario onSubmit={handleFormSubmit} />
      {nome && <Resumo nome={nome} />}
    </div>
  );
}

export default App;