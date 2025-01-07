'use client'

import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, PointElement, CategoryScale, LinearScale, Tooltip, Legend, Title } from 'chart.js';
import { motion } from 'framer-motion';
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale, Tooltip, Legend, Title, ChartDataLabels);

type Language = 'pt' | 'en' | 'es';

interface TranslationTexts {
  xAxisLabel: string;
  yAxisLabel: string;
  datasetLabel: string;
  tooltip: string;
}

interface LineChartProps {
  language: Language;
}

const LineChart = ({ language }: LineChartProps) => {
  const translations: Record<Language, TranslationTexts> = {
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

  const t = translations[language] || translations['pt'];

  const data = {
    labels: ['2022', '2023', '2024'],
    datasets: [
      {
        label: t.datasetLabel,
        data: [5, 7.5, 15],
        borderColor: '#1ca39e',
        backgroundColor: '#1ca39e',
        borderWidth: 1,
        tension: 0.9,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      tooltip: {
        enabled: true,
        callbacks: {
          label: function (tooltipItem: any) {
            return `${tooltipItem.raw}%`;
          },
        },
      },
      datalabels: {
        display: true,
        color: '#1ca39e',
        font: {
          weight: 'bold' as const, // Definido como um valor de enumeração constante
          size: 12,
        },
        anchor: 'end' as const, // Definido como um valor de enumeração constante
        formatter: (value: number) => `${value}%`,
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: t.xAxisLabel,
        },
      },
      y: {
        title: {
          display: true,
          text: t.yAxisLabel,
        },
        min: 0,
        max: 20,
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
