import Chart from 'chart.js';

export default class ChartHelper {

  createChart(id, data, type, options) {
    const ctx = document.getElementById(id);
    /*eslint-disable no-unused-vars*/
    const myChart = new Chart(ctx, {
      type: type,
      data: data,
      options: options
    });
  }
}
