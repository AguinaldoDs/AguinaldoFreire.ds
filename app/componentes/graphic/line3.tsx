'use client'

import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, PointElement, CategoryScale, LinearScale, Tooltip, Legend, Title } from 'chart.js';
import { motion } from 'framer-motion';
import ChartDataLabels from 'chartjs-plugin-datalabels';

// Registrar os elementos necessários para o gráfico de linhas e o plugin de datalabels
ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale, Tooltip, Legend, Title, ChartDataLabels);

type Language = 'pt' | 'en' | 'es';

interface TranslationTexts {
  xAxisLabel: string;
  yAxisLabel: string;
  datasetLabel: string;
}

interface LineChartProps {
  language: Language;
}

const LineChart = ({ language }: LineChartProps) => {
  // Traduções de acordo com o idioma selecionado
  const translations: Record<Language, TranslationTexts> = {
    pt: {
      xAxisLabel: 'Anos',
      yAxisLabel: 'Percentual de Mitigação',
      datasetLabel: 'Mitigação de Impactos Negativos (%)',
    },
    en: {
      xAxisLabel: 'Years',
      yAxisLabel: 'Mitigation Percentage',
      datasetLabel: 'Negative Impact Mitigation (%)',
    },
    es: {
      xAxisLabel: 'Años',
      yAxisLabel: 'Porcentaje de Mitigación',
      datasetLabel: 'Mitigación de Impactos Negativos (%)',
    },
  };

  // Selecionar as traduções com base no idioma fornecido
  const t = translations[language] || translations['pt']; // Padrão é português

  // Configuração dos dados para o gráfico de linhas
  const data = {
    labels: ['2020', '2021', '2022', '2023', '2024'], // Labels para os pontos do gráfico
    datasets: [
      {
        label: t.datasetLabel, // Nome da linha, traduzido
        data: [20, 40, 60, 75, 90], // Os valores fictícios para o gráfico
        borderColor: '#1ca39e', // Cor da linha
        backgroundColor: '#1ca39e', // Cor de fundo da linha (transparente)
        borderWidth: 1, // Largura da linha
        tension: 0.4, // Curvatura da linha (0 é linha reta)
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
        color: '#1ca39e', // Cor do texto
        font: {
          weight: 'bold' as const, // Certifique-se de que 'bold' seja considerado um valor constante
          size: 12,
        },
        anchor: 'end' as const, // Posição do texto em relação ao ponto
        align: 'top' as const,  // Alinhar o texto acima do ponto
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
        min: 0, // Definir o mínimo da escala y como 0
        max: 100, // Definir o máximo da escala y como 100
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
