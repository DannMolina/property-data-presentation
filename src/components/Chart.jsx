/**
 * Chart Component
 */
import React from 'react';
import {Bar} from 'react-chartjs-2';

/**
 * @param {property} property
 * @returns Chart for the Income and Expenses based on selected property
 */
const ChartComponent = ({property}) => {
    // * chart data
    const data = {
        labels: [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December',
        ],
        datasets: [
            {
                label: 'Expense',
                data: [
                    property.income?.January,
                    property.income?.February,
                    property.income?.March,
                    property.income?.April,
                    property.income?.May,
                    property.income?.June,
                    property.income?.July,
                    property.income?.August,
                    property.income?.September,
                    property.income?.October,
                    property.income?.November,
                    property.income?.December,
                ],
                backgroundColor: '#FAA245',
                borderColor: 'white',
                borderWidth: 1,
            },
            {
                label: 'Income',
                data: [
                    property.income?.January,
                    property.income?.February,
                    property.income?.March,
                    property.income?.April,
                    property.income?.May,
                    property.income?.June,
                    property.income?.July,
                    property.income?.August,
                    property.income?.September,
                    property.income?.October,
                    property.income?.November,
                    property.income?.December,
                ],
                backgroundColor: '#2CAE76',
                borderColor: 'white',
                borderWidth: 1,
            },
        ],
    };

    // * available option
    const options = {
        scales: {
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true,
                    },
                },
            ],
        },
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: property.propertyName,
            },
        },
    };

    return (
        <React.Fragment>
            <div
                style={{
                    backgroundColor: '#fdfdfd',
                    padding: 20,
                }}>
                <Bar data={data} options={options} />
            </div>
        </React.Fragment>
    );
};

export default ChartComponent;
