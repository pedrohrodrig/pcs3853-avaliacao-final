import React, { useState } from 'react';
import axios from 'axios';
import Textbox from '../textbox/textbox';
import Button from '../button/button';

import './uploadcard.css'

const FileUploadComponent = () => {
  const [file, setFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      console.error('Nenhum arquivo selecionado.');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post('SEU_ENDPOINT_AQUI', formData, {
        onUploadProgress: (progressEvent) => {
          const progress = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          );
          setUploadProgress(progress);
        },
      });

      console.log('Upload concluído:', response.data);
    } catch (error) {
      console.error('Erro ao fazer upload:', error);
    }
  };

  return (
    <div>
        <Textbox title={'Fazer upload da receita'}/>
        <div className='file-input-container'>
            <input className='input-field' type="file" onChange={handleFileChange} />
            <Button className='grad small' text='Upload' onClick={handleUpload}/>
            {uploadProgress > 0 && (
                <p>Progresso do Upload: {uploadProgress}%</p>
            )}
        </div>
    </div>
  );
};

export default FileUploadComponent;