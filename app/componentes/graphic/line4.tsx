'use client'

import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, PointElement, CategoryScale, LinearScale, Tooltip, Legend, Title } from 'chart.js';
import { motion } from 'framer-motion'

// Registrar os elementos necessários para o gráfico de linhas
ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale, Tooltip, Legend, Title);

const LineChart_4 = ({ language }) => {
  // Traduções de acordo com o idioma selecionado
  const translations = {
    pt: {
      xAxisLabel: 'Ano',
      yAxisLabel: 'Percentual de Redução',
      datasetLabel: 'Redução de Custos Logísticos (%)',
    },
    en: {
      xAxisLabel: 'Year',
      yAxisLabel: 'Cost Reduction Percentage',
      datasetLabel: 'Logistics Cost Reduction (%)',
    },
    es: {
      xAxisLabel: 'Año',
      yAxisLabel: 'Porcentaje de Reducción de Costos',
      datasetLabel: 'Reducción de Costos Logísticos (%)',
    },
  };

  // Seleciona a tradução com base no idioma fornecido
  const t = translations[language] || translations['pt']; // Padrão é português

  // Dados do gráfico representando a redução de custos e melhoria na entrega
  const data = {
    labels: ['2022', '2023', '2024'], // Labels para os anos
    datasets: [
      {
        label: t.datasetLabel, // Nome da linha, traduzido
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
          text: t.xAxisLabel, // Título do eixo X, traduzido
        },
      },
      y: {
        title: {
          display: true,
          text: t.yAxisLabel, // Título do eixo Y, traduzido
        },
        min: -30, // Definir o mínimo da escala Y como -30 (para mostrar a redução)
        max: 0, // Definir o máximo da escala Y como 0 (sem valores positivos)
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
