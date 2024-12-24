import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend, Title } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

// Registrar os elementos necessários para o gráfico de barras
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend, Title, ChartDataLabels);

const BarChartWithInfo = () => {
  // Configuração dos dados para o gráfico de barras
  const data = {
    labels: ['Segmentos Identificados'], // Nome do eixo X
    datasets: [
      {
        label: 'Taxa de Conversão (%)', // Nome da barra
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
      // Anotação para mostrar informações extras
      annotation: {
        annotations: {
          segmentInfo: {
            type: 'label',
            xValue: 'Segmentos Identificados',
            yValue: 20,
            backgroundColor: 'rgba(0,0,0,0)',
            content: 'Identificação de 4 novos segmentos', // Texto de anotação
            font: {
              size: 14,
              weight: 'bold',
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
          text: 'Informação',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Percentual',
        },
        min: 0, // Definir o mínimo da escala y como 0
        max: 25, // Definir o máximo da escala y como 25
      },
    },
    // Exibir a taxa de conversão acima da barra
    plugins: {
      datalabels: {
        display: true,
        color: '#ffffff', // Cor do texto
        font: {
          weight: 'bold',
          size: 14,
        },
        anchor: 'end', // Posição do texto em relação à barra
        align: 'top', // Alinhar o texto acima da barra
        formatter: (value) => `${value}%`, // Formatar o valor como percentual
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
