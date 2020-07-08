var gender = document.querySelector('#gender')
var msg = document.querySelector('#unread-messages')
var cmd = document.querySelector('#commandes')
var ca = document.querySelector('#chiffre-affaires')

var genderChart = new Chart(gender, {
    type: 'bar',
    data: {
        labels: ['Femmes', 'Hommes'],
        datasets: [{
            label: 'Utilisateurs',
            data: [gender.dataset.female, gender.dataset.male],
            backgroundColor: [
                '#fd9644',
                '#26de81'
            ],
            borderColor: [
                '#fa8231',
                '#20bf6b'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

var msgChart = new Chart(msg, {
    type: 'doughnut',
    data: {
        labels: ['Messages lus', 'Messages non lus'],
        datasets: [{
            label: '',
            data: [12, 19],
            backgroundColor: [
                '#2bcbba',
                '#fc5c65'
            ],
            borderColor: [
                '#0fb9b1',
                '#eb3b5a'
            ],
            borderWidth: 1
        }]
    }
});

var cmdChart = new Chart(cmd, {
    type: 'pie',
    data: {
        labels: ['expédiées', 'non-expédiées'],
        datasets: [{
            label: '',
            data: [12, 19],
            backgroundColor: [
                '#4b7bec',
                '#d1d8e0'
            ],
            borderColor: [
                '#3867d6',
                '#a5b1c2'
            ],
            borderWidth: 1
        }]
    }
});

var caChart = new Chart(ca, {
    type: 'line',
    data: {
        labels: ['jan', 'fev', 'mar', 'avr', 'mai', 'juin', 'juil', 'aout', 'sep', 'oct', 'nov', 'dec'],
        label :'Chiffre d\'affaires',
        datasets: [{
            label: ['CA'],
            data: [2000, 3000, 4000, 2500, 2000, 3000, 4000, 2500, 2000, 3000, 4000, 2500],
            backgroundColor: [
                'rgba(54, 162, 235, 0.2)'
            ],
            borderColor: [
                'rgba(54, 162, 235, 1)'
            ],
            borderWidth: 1
        }]
    }
});