// pages/api/upload.js

import formidable from 'formidable';
import fs from 'fs';
import path from 'path';

export const config = {
  api: {
    bodyParser: false, // Desativando o bodyParser integrado do Next.js
  },
};

const uploadDir = path.join(process.cwd(), '/uploads');

if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

export default function handler(req, res) {
  if (req.method === 'POST') {
    const form = new formidable.IncomingForm();
    form.uploadDir = uploadDir; // Diretório onde os arquivos serão salvos
    form.keepExtensions = true; // Mantém as extensões dos arquivos

    form.parse(req, (err, fields, files) => {
      if (err) {
        res.status(500).json({ error: 'Erro ao processar o upload' });
        return;
      }

      // Processar o arquivo (exemplo: ler o conteúdo do arquivo)
      const file = files.arquivo;
      const filePath = file.filepath;
      
      fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
          res.status(500).json({ error: 'Erro ao ler o arquivo' });
          return;
        }

        // Aqui você pode fazer o que quiser com o conteúdo do arquivo
        res.status(200).json({ message: 'Upload bem-sucedido', data });
      });
    });
  } else {
    res.status(405).json({ error: 'Método não permitido' });
  }
}
