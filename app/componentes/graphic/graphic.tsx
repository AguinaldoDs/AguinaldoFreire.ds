import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Registrar os elementos necessários para o gráfico
ChartJS.register(ArcElement, Tooltip, Legend);

const PercentageChart = ({ percentage }) => {
  // Configuração do gráfico (gráfico de Pizza/Doughnut)
  const data = {
    labels: ['Completado', 'Pendente'],
    datasets: [
      {
        data: [percentage, 100 - percentage],
        backgroundColor: ['#4caf50', '#e0e0e0'],
        borderColor: '#ffffff',
        borderWidth: 2,
      },
    ],
  };

  // Opções de configuração do gráfico
  const options = {
    responsive: true,
    plugins: {
      tooltip: {
        enabled: false, // Desabilita o tooltip
      },
    },
  };

  return (
    <div className="flex flex-col items-center">
      <div className="text-xl font-semibold mb-4">
        <h2>{percentage}% Completado</h2>
      </div>
      <div style={{ width: '200px', height: '200px' }}>
        <Doughnut data={data} options={options} />
      </div>
    </div>
  );
};

export default PercentageChart;
