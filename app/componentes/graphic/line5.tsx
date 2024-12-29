'use client'

import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, PointElement, CategoryScale, LinearScale, Tooltip, Legend, Title } from 'chart.js';
import { motion } from 'framer-motion'

// Registrar os elementos necessários para o gráfico de linhas
ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale, Tooltip, Legend, Title);

const LineChart_5 = () => {
  // Dados do gráfico representando a redução de inadimplência com modelo preditivo
  const data = {
    labels: ['2022', '2023', '2024'], // Labels para os anos
    datasets: [
      {
        label: 'Redução de Inadimplência (%)', // Nome da linha
        data: [0, -3, -12], // A redução de inadimplência: 0%, -3% e -12% ao longo do tempo
        borderColor: '#4caf50', // Cor da linha (verde)
        backgroundColor: 'rgba(76, 175, 80, 0.2)', // Cor de fundo suave (transparente)
        borderWidth: 2, // Largura da linha
        tension: 0.4, // Curvatura da linha (moderada)
      },
    ],
  };

  // Opções de configuração do gráfico
  const options = {
    responsive: true,
    plugins: {
      tooltip: {
        enabled: true, // Habilita o tooltip (se quiser desabilitar, mude para false)
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Ano', // Título do eixo x
        },
      },
      y: {
        title: {
          display: true,
          text: 'Percentual de Redução', // Título do eixo y
        },
        min: -15, // Definir o mínimo da escala y como -15 (para mostrar a redução)
        max: 0, // Definir o máximo da escala y como 0 (sem valores positivos)
      },
    },
  };

  return (
    <div className="flex flex-col items-center transition-all duration-1000">
    <motion.div style={{ width: '400px', height: '200px' }}
     initial={{scale:0.1,}}>
      <Line data={data} options={options} />
    </motion.div>
  </div>
  );
};

export default LineChart_5;
