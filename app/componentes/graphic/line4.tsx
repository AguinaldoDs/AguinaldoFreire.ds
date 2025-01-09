'use client'

import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend, Title } from 'chart.js';
import { motion } from 'framer-motion';
import ChartDataLabels from 'chartjs-plugin-datalabels';

// Registrar os elementos necessários para o gráfico de barras e o plugin de datalabels
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend, Title, ChartDataLabels);

type Language = 'pt' | 'en' | 'es';

interface TranslationTexts {
  xAxisLabel: string;
  yAxisLabel: string;
  datasetLabel: string;
}

interface BarChartProps {
  language: Language;
}

const BarChart_4 = ({ language }: BarChartProps) => {
  // Traduções de acordo com o idioma selecionado
  const translations: Record<Language, TranslationTexts> = {
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
        label: t.datasetLabel, // Nome da barra, traduzido
        data: [23, 20, 2], // A redução de custos: 0%, -5% e -25% ao longo do tempo
        backgroundColor: '#ff6347', // Cor das barras
        borderColor: '#ff6347', // Cor da borda da barra
        borderWidth: 1, // Largura da borda
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
      datalabels: {
        display: true,
        color: '#ff6347', // Cor do texto
        font: {
          weight: 'bold' as const, // Certifique-se de que 'bold' seja considerado um valor constante
          size: 12,
        },
        anchor: 'end' as const, // Posição do texto em relação à barra
        align: 'top' as const,  // Alinhar o texto acima da barra
        formatter: (value: number) => `${value}%`, // Formatar o valor como percentual
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
        min: 0, // Definir o mínimo da escala Y
        max: 30, // Definir o máximo da escala Y para um valor maior que a maior redução
      },
    },
  };

  return (
    <div className="flex flex-col items-center transition-all duration-1000">
      <motion.div style={{ width: '400px', height: '300px' }}>
        <Bar data={data} options={options} />
      </motion.div>
    </div>
  );
};

export default BarChart_4;
