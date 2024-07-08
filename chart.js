const ctx = document.getElementById('myChart').getContext('2d');
const data = {
    labels: ['', '', '', 'Feb', '', '', '', 'Mar', '', '', '', 'Apr', '', '', '', 'May', '', '', '', 'Jun', '', '', '', 'Jul', '', ''],
    datasets: [
        {
            label: 'WPPOOL',
            data: [
                0, 5, 10, 20, 15, 30, 25, 18, 35, 28, 40, 80, 35, 30, 25, 90, 18, 22, 45, 30, 27, 50, 28, 75, 30, 25


            ],
            borderColor: '#FC714D',
            backgroundColor: '#FC714D',
            borderWidth: 1,
            fill: false,
            pointRadius: 0, 
            pointHoverRadius: 0 
        },
        {
            label: 'Google',
            data: [
                0, 5, 6, 4, 20, 7, 8, 2, 14, 52, 98, 6, 7, 84, 7, 5, 96, 87, 45, 21, 66, 78, 45, 25, 16, 43, 2, 15, 84

            ],
            borderColor: '#615DE3',
            backgroundColor: '#615DE3',
            borderWidth: 1,
            fill: false,
            pointRadius: 0, 
            pointHoverRadius: 0,
            tension: 0.1
        },
        {
            label: 'Microsoft',
            data: [
                10, 5, 25, 34, 12, 87, 65, 24, 58, 97, 90, 85, 62, 34, 51, 55, 71, 21, 10, 65, 58, 90, 87, 54, 12, 45
            ],
            borderColor: '#AFCD80',
            backgroundColor: '#AFCD80',
            borderWidth: 1,
            fill: false,
            pointRadius: 0,
            pointHoverRadius: 0
        },
        {
            label: 'Twitter',
            data: [
                0, 45, 14, 52, 35, 18, 87, 10, 19, 97, 85, 10, 25, 89, 67, 45, 81, 23, 65, 48, 95, 14, 25,98,89,75
            ],
            borderColor: '#6F34A1',
            backgroundColor: '#6F34A1',
            borderWidth: 1,
            fill: false,
            pointRadius: 0, 
            pointHoverRadius: 0 
        },
    ],
};

const config = {
    type: 'line',
    data: data,
    options: {
        responsive: true,
        scales: {
            x: {
                display: true,
                title: {
                    display: true,
                    text: 'Month',
                }

            },
            y: {
                display: true,
                title: {
                    display: true,
                    text: 'Percentage',
                },
                min: -10,
                max: 100,
                ticks: {
                    stepSize: 10,
                    callback: function (value) {
                        return value + '%';
                    }
                }
            },
        },
        plugins: {
            legend: {
                position: 'bottom',
            },
            tooltip: {
                mode: 'index',
                intersect: false,
            },
        },
        hover: {
            mode: 'nearest',
            intersect: true,
        },
    },
};

const myChart = new Chart(ctx, config);
