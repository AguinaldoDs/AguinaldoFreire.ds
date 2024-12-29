'use client'

import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, PointElement, CategoryScale, LinearScale, Tooltip, Legend, Title } from 'chart.js';
import { motion } from 'framer-motion'

// Registrar os elementos necessários para o gráfico de linhas
ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale, Tooltip, Legend, Title);

const LineChart_4 = () => {
  // Dados do gráfico representando a redução de custos e melhoria na entrega
  const data = {
    labels: ['2022', '2023', '2024'], // Labels para os anos
    datasets: [
      {
        label: 'Redução de Custos Logísticos (%)', // Nome da linha
        data: [0, -5, -25], // A redução de custos: 0%, -5% e -25% ao longo do tempo
        borderColor: '#ff6347', // Cor da linha (laranja avermelhado)
        backgroundColor: 'rgba(255, 99, 71, 0.2)', // Cor de fundo suave (transparente)
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
        min: -30, // Definir o mínimo da escala y como -30 (para mostrar a redução)
        max: 0, // Definir o máximo da escala y como 0 (sem valores positivos)
      },
    },
  };

  return (
    <div className="flex flex-col items-center transition-all duration-1000">
    <motion.div style={{ width: '400px', height: '200px' }}>
      <Line data={data} options={options} />
    </motion.div>
  </div>
  );
};

export default LineChart_4;
