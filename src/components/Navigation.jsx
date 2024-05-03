import React from 'react';

function Navigation({ onLogout }) {
  return (
    <div className='botao'>
      <button className='voltar' onClick={onLogout}>Logout</button>
    </div>
  );
}

export default Navigation;
