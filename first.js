document.getElementById('predictButton').addEventListener('click', function() {
    var riskTolerance = document.getElementById('riskTolerance').value;
    var investmentHorizon = document.getElementById('investmentHorizon').value;
    var initialInvestment = document.getElementById('initialInvestment').value;

    if (riskTolerance && investmentHorizon && initialInvestment) {
        var predictedReturn = (initialInvestment * riskTolerance / 10) * (1 + 0.05 * investmentHorizon);
        var resultText = 'Based on your inputs, the predicted return over ' + investmentHorizon + ' years is approximately $' + predictedReturn.toFixed(2) + '.';
        document.getElementById('resultText').textContent = resultText;
        document.getElementById('predictionResult').style.display = 'block';
    } else {
        document.getElementById('resultText').textContent = 'Please fill in all fields.';
        document.getElementById('predictionResult').style.display = 'block';
    }
});

// Historical Performance Visualization
const ctx = document.getElementById('chartContainer').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: 'Equities',
            data: [120, 130, 115, 140, 135, 145, 150, 160, 155, 165, 170, 175],
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 2,
            fill: false
        }, {
            label: 'Bonds',
            data: [100, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112],
            borderColor: 'rgba(153, 102, 255, 1)',
            borderWidth: 2,
            fill: false
        }, {
            label: 'Commodities',
            data: [110, 112, 111, 115, 114, 116, 117, 118, 120, 121, 123, 124],
            borderColor: 'rgba(255, 159, 64, 1)',
            borderWidth: 2,
            fill: false
        }]
    },
    options: {
        responsive: true,
        scales: {
            x: {
                display: true,
                title: {
                    display: true,
                    text: 'Month'
                }
            },
            y: {
                display: true,
                title: {
                    display: true,
                    text: 'Value'
                }
            }
        }
    }
});

// Risk Assessment Tool
document.getElementById('assessRiskButton').addEventListener('click', function() {
    var age = document.getElementById('age').value;
    var income = document.getElementById('income').value;
    var riskTolerance = document.getElementById('riskTolerance').value;

    if (age && income && riskTolerance) {
        var riskProfile = (riskTolerance * 10) + (income / 10000) - (age / 2);
        var riskResultText = 'Based on your inputs, your risk profile score is ' + riskProfile.toFixed(2) + '.';
        document.getElementById('riskResultText').textContent = riskResultText;
        document.getElementById('riskAssessmentResult').style.display = 'block';
    } else {
        document.getElementById('riskResultText').textContent = 'Please fill in all fields.';
        document.getElementById('riskAssessmentResult').style.display = 'block';
    }
});

// Asset Allocation Recommendation
document.getElementById('allocationButton').addEventListener('click', function() {
    var riskTolerance = document.getElementById('allocationRiskTolerance').value;

    if (riskTolerance) {
        var equities = riskTolerance * 10;
        var bonds = 100 - equities;
        var allocationText = 'Based on your risk tolerance, we recommend an asset allocation of ' + equities + '% Equities and ' + bonds + '% Bonds.';
        document.getElementById('allocationText').textContent = allocationText;
        document.getElementById('allocationResult').style.display = 'block';
    } else {
        document.getElementById('allocationText').textContent = 'Please fill in the risk tolerance.';
        document.getElementById('allocationResult').style.display = 'block';
    }
});

// Contact Us Form
document.getElementById('contactButton').addEventListener('click', function() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    if (name && email && message) {
        alert('Thank you, ' + name + '! Your message has been sent.');
    } else {
        alert('Please fill in all fields.');
    }
});