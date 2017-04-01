import Chart from 'chart.js';

export default class ChartBuilder {

  constructor() {
    this.defaultOpts = { 'pie': this._pieOptions(), 'bar': this._barOptions(), 'line': this._barOptions() };
  }

  build(id, data, type) {
    const ctx = document.getElementById(id);
    /*eslint-disable no-unused-vars*/
    const myChart = new Chart(ctx, {
      type: type,
      data: data,
      options: this.defaultOpts[type]
    });
  }

  _barOptions() {
    return {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
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
}
