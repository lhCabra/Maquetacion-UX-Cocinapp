import React from 'react';
import '../App.css';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register the required components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = ({ data, maxValue }) => {
    const chartData = {
        labels: data.labels,
        datasets: [
            {
                data: data.values,
                backgroundColor: '#ED7D43',
                borderColor: '#ED7D43',
                borderWidth: 1,
                borderRadius: 4,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false,
            },
            title: {
                display: false,
            },
        },
        scales: {
            x: {
                grid: {
                    display: false,
                },
                ticks: {
                    color: '#784429',
                },
            },
            y: {
                ticks: {
                    stepSize: Math.ceil(Math.max(...data.values) / 4),
                    color: '#784429',
                },
                min: 0,
                max: maxValue,
                grid: {
                    color: '#ED7D43',
                },
            },
        },
    };

    return (
        <div className="chart-container"> 
            <Bar data={chartData} options={options} />
        </div>
    );
};

export default BarChart;
