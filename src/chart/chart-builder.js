import Chart from 'chart.js';

export default class ChartBuilder {

  constructor() {
    this.defaultOpts = { 'pie': this._pieOptions,
                         'horizontalBar': this._barOptions,
                         'bar': this._barOptions,
                         'line': this._barOptions,
                         'radar': this._radarOptions
                       };
  }

  build(id, chartData, type) {
    const ctx = document.getElementById(id);
    const data = chartData.data;
    const opts = chartData.opts;
    /*eslint-disable no-unused-vars*/
    const myChart = new Chart(ctx, {
      type: type,
      data: data,
      options: this.defaultOpts[type](opts)
    });
    return myChart;
  }

  update(chart, data) {
    chart.data.labels = data.labels;
    chart.data.datasets = data.datasets;
    chart.update();
  }

  _barOptions(opts) {
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
        display: opts.title? true :false,
        text: opts.title.text,
        fontSize: 13.5,
        position: opts.title.position
      }
    };
  }

  _pieOptions(opts) {
    return {
      animation: {
        animateScale: true
      },
      title: {
        display: opts.title? true :false ,
        text: opts.title.text,
        fontSize: 13.5,
        position: opts.title.position
      }
    };
  }

  _radarOptions(opts) {
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
        display: opts.title? true :false,
        text: opts.title.text,
        fontSize: 13.5,
        position: opts.title.position
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
