import React from 'react';

const ProviderList = ({ providers, onEdit, onDelete }) => {
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Empresa</th>
          <th>Email</th>
          <th>Teléfono</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {providers.map((provider) => (
          <tr key={provider.id}>
            <td>{provider.name}</td>
            <td>{provider.company}</td>
            <td>{provider.email}</td>
            <td>{provider.phone}</td>
            <td>
              <button
                className="btn btn-warning btn-sm me-2"
                onClick={() => onEdit(provider.id)}
              >
                Editar
              </button>
              <button
                className="btn btn-danger btn-sm"
                onClick={() => onDelete(provider.id)}
              >
                Eliminar
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProviderList;
