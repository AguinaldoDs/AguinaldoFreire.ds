'use client'

import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, PointElement, CategoryScale, LinearScale, Tooltip, Legend, Title } from 'chart.js';
import { motion } from 'framer-motion'

// Registrar os elementos necessários para o gráfico de linhas
ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale, Tooltip, Legend, Title);

const LineChart = ({ language }) => {
  // Traduções de acordo com o idioma selecionado
  const translations = {
    pt: {
      xAxisLabel: 'Anos',
      yAxisLabel: 'Percentual',
      datasetLabel: 'Percentual',
      tooltip: 'Clique para mais detalhes',
    },
    en: {
      xAxisLabel: 'Years',
      yAxisLabel: 'Percentage',
      datasetLabel: 'Percentage',
      tooltip: 'Click for more details',
    },
    es: {
      xAxisLabel: 'Años',
      yAxisLabel: 'Porcentaje',
      datasetLabel: 'Porcentaje',
      tooltip: 'Haz clic para más detalles',
    },
  };

  // Definir os textos com base no idioma selecionado
  const t = translations[language] || translations['pt']; // Default para português se o idioma não for encontrado

  // Configuração dos dados para o gráfico de linhas
  const data = {
    labels: ['2022', '2023', '2024'], // Labels para os pontos do gráfico
    datasets: [
      {
        label: t.datasetLabel, // Nome da linha, traduzido
        data: [5, 7.5, 15], // Os valores desejados para o gráfico
        borderColor: '#1ca39e', // Cor da linha
        backgroundColor: '#1ca39e', // Cor de fundo da linha (transparente)
        borderWidth: 1, // Largura da linha
        tension: 0.9, // Curvatura da linha (0 é linha reta)
      },
    ],
  };

  // Opções de configuração do gráfico
  const options = {
    responsive: true,
    plugins: {
      tooltip: {
        enabled: true, // Habilita o tooltip (se quiser desabilitar, mude para false)
        callbacks: {
          label: function (tooltipItem) {
            return `${tooltipItem.raw}%`; // Exibe o valor com percentual no tooltip
          },
        },
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
        min: 0, // Definir o mínimo da escala y como 0
        max: 20, // Definir o máximo da escala y como 20
      },
    },
    plugins: {
      datalabels: {
        display: true,
        color: '#1ca39e', // Cor do texto
        font: {
          weight: 'bold',
          size: 12,
        },
        anchor: 'end', // Posição do texto em relação ao ponto
        align: 'top',  // Alinhar o texto acima do ponto
        formatter: (value) => `${value}%`, // Formatar o valor como percentual
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

export default LineChart;
