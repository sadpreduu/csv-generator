import React, { useState } from 'react';
import CsvDownload from './CsvDownload';
import TextToCsvConverter from './TextToCsv';

function App() {

  const [data, setData] = useState([
    { name: 'Jão Vitu', departament: 'TI', number: '7423' },
    { name: 'Rei dos Fatos', departament: 'TI', number: '7434' },
    { name: 'Dan Juan', departament: 'TI', number: '7408' },
  ]);

  return (
    <div className='list-container'>
      <table id='main-table'>
        <thead>
          <tr id=''>
            <th>Identificação</th>
            <th>Setor</th>
            <th>Numero</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row.name}</td>
              <td>{row.departament}</td>
              <td>{row.number}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <CsvDownload data={data} />
      <TextToCsvConverter/>
    </div>
  );
}
export default App;
