import React, { useState } from 'react';
import CsvDownload from './CsvDownload';
import TextToCsvConverter from './TextToCsv';
import './App.css';
 

function App() {

  const [data, setData] = useState([
    { name: 'Jão Vitu', departament: 'TI', number: '7423' },
    { name: 'Rei dos Fatos', departament: 'TI', number: '7434' },
    { name: 'Dan Juan', departament: 'TI', number: '7408' },
  ]);

  return (
    <div className='list-container'>
      <table id='main-table'>
        <thead className='table-container'>
          <tr>
            <th className='c1'>Identificação</th>
            <th className='c2'>Setor</th>
            <th className='c3'>Numero</th>
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
