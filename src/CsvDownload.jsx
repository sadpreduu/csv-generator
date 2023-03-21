import React from 'react';

const CsvDownload = ({ data }) => {
  const handleDownload = () => {
    const csv = data.map((row) => Object.values(row).join(',')).join('\n');
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'data.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button className='download-button' onClick={handleDownload}>Baixar Texto como CSV</button>
  );
};

export default CsvDownload;
