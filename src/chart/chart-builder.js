import Chart from 'chart.js';

export default class ChartBuilder {

  constructor() {
    this.defaultOpts = { 'pie': this._pieOptions(), 'bar': this._barOptions(), 'line': this._barOptions(), 'radar': this._radarOptions() };
  }

  build(id, data, type) {
    const ctx = document.getElementById(id);
    /*eslint-disable no-unused-vars*/
    const myChart = new Chart(ctx, {
      type: type,
      data: data,
      options: this.defaultOpts[type]
    });
    return myChart;
  }

  update(chart, data) {
    chart.data.labels = data.labels;
    chart.data.datasets = data.datasets;
    chart.update();
  }

  _barOptions() {
    return {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      },
      layout: {
        padding: 5
      },
      title: {
        display: true,
        text: 'Ventas anuales',
        fontSize: 13.5,
        position: 'left'
      }
    };
  }

  _pieOptions() {
    return {
      animation: {
        animateScale: true
      }
    };
  }

  _radarOptions() {
    return {
      fontSize: 20,
      scale: {
        //reverse: true,
        ticks: {
          beginAtZero: true,
          display: true
        },
        labels: {
          fontSize: 10
        },
        title: {
          fontSize: 10
        }
      },
      title: {
        display: true,
        text: 'Anulaciones del mes',
        fontSize: 13.5,
        position: 'top'
      },
      layout: {
        padding: 5
      },
      legend: {
        position: 'right',
        labels: {
          fontSize: 15,
          boxWidth: 60
        }
      }
    };
  }
}
