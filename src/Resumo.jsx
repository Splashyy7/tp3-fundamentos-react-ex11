import React from 'react';

function Resumo({ nome }) {
  return (
    <div>
      <h2>Resumo</h2>
      <p><strong>Nome:</strong> {nome}</p>
    </div>
  );
}

export default Resumo;