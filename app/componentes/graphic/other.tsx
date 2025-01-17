'use client'

import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend, Title } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

// Registrar os elementos necessários para o gráfico de barras e o plugin de datalabels
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend, Title, ChartDataLabels);

type Language = 'pt' | 'en' | 'es';

interface TranslationTexts {
  xAxisLabel: string;
  yAxisLabel: string;
  datasetLabel: string;
  annotationText: string;
}

interface BarChartWithInfoProps {
  language: Language;
}

const BarChartWithInfo = ({ language }: BarChartWithInfoProps) => {
  // Traduções de acordo com o idioma selecionado
  const translations: Record<Language, TranslationTexts> = {
    pt: {
      xAxisLabel: 'Informação',
      yAxisLabel: 'Percentual',
      datasetLabel: 'Taxa de Conversão (%)',
      annotationText: 'Identificação de 4 novos segmentos',
    },
    en: {
      xAxisLabel: 'Information',
      yAxisLabel: 'Percentage',
      datasetLabel: 'Conversion Rate (%)',
      annotationText: 'Identification of 4 new segments',
    },
    es: {
      xAxisLabel: 'Información',
      yAxisLabel: 'Porcentaje',
      datasetLabel: 'Tasa de Conversión (%)',
      annotationText: 'Identificación de 4 nuevos segmentos',
    },
  };

  // Seleciona a tradução com base no idioma fornecido
  const t = translations[language] || translations['pt']; // Padrão é português

  // Configuração dos dados para o gráfico de barras
  const data = {
    labels: [t.xAxisLabel], // Nome do eixo X, traduzido
    datasets: [
      {
        label: t.datasetLabel, // Nome da barra, traduzido
        data: [20], // O valor da taxa de conversão
        backgroundColor: '#1ca39e', // Cor das barras
        borderColor: '#1ca39e', // Cor da borda das barras
        borderWidth: 1, // Largura da borda
        borderRadius: 5, // Arredondamento das bordas das barras
      },
    ],
  };

  // Opções de configuração do gráfico
  const options = {
    responsive: true,
    plugins: {
      tooltip: {
        enabled: true, // Habilita o tooltip
      },
      datalabels: {
        display: true,
        color: '#ffffff', // Cor do texto
        font: {
          weight: 'bold' as const, // Certifique-se de que 'bold' seja considerado um valor constante
          size: 14,
        },
        anchor: 'end' as const, // Posição do texto em relação à barra
        align: 'top' as const, // Alinhar o texto acima da barra
        formatter: (value: number) => `${value}%`, // Formatar o valor como percentual
      },
      annotation: {
        annotations: {
          segmentInfo: {
            type: 'label',
            xValue: t.xAxisLabel, // Texto da anotação (traduzido)
            yValue: 20,
            backgroundColor: 'rgba(0,0,0,0)',
            content: t.annotationText, // Texto de anotação (traduzido)
            font: {
              size: 14,
              weight: 'bold' as const,
              family: 'Arial',
              color: '#1ca39e',
            },
            position: 'top',
            offset: 10, // Distância do texto do topo da barra
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
        min: 0, // Definir o mínimo da escala Y como 0
        max: 25, // Definir o máximo da escala Y como 25
      },
    },
  };

  return (
    <div className="flex flex-col items-center transition-all duration-1000">
      <div style={{ width: '400px', height: '250px' }}>
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default BarChartWithInfo;
