import React, { useState, useEffect } from 'react';

function ClientList() {
  const [clients, setClients] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    
    fetch('https://reqres.in/api/users')
      .then((response) => response.json())
      .then((data) => setClients(data.data))
      .catch((error) => console.error('Erro ao obter clientes:', error));
  }, []);

  const filteredClients = clients.filter((client) => {
    return (
      client.first_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      client.last_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      client.email.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <div>
      <h2>Lista de Clientes</h2>
      <input className='pesqui'
        type="text"
        placeholder="Pesquisar por nome, email"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul>
        {filteredClients.map((client) => (
          <li key={client.id}>
            <img src={client.avatar} alt="Avatar" />
            {client.first_name} {client.last_name} - {client.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ClientList;
