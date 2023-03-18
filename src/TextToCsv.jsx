import React, { useState } from 'react';

const TextToCsvConverter = () => {
  const [text, setText] = useState('');

  const handleConvert = () => {
    const rows = text.trim().split('\n');
    const columns = rows[0].split(' ');

    const data = rows.slice(1).map((row) => {
      const values = row.split(' ');
      return columns.reduce((obj, col, index) => {
        obj[col] = values[index];
        return obj;
      }, {});
    });

    const csv = data.map((row) => Object.values(row).join(',')).join('\n');
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', 'data.csv');
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text to convert to CSV"
      />
      <button onClick={handleConvert}>Convert to CSV</button>
    </div>
  );
};

export default TextToCsvConverter;
