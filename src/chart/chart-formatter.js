import { Colors } from '../util/colors';
import { ChartColors } from './chart-config';

export default class ChartFormatter {

  constructor() {
    this.formats = {'bar': this._barFormat, 'line': this._lineFormat, 'pie': this._pieFormat, 'radar': this._radarFormat};
  }

  format(data, type) {
    const chart = this._generateChartBody(data);
    return this.formats[type](chart, ChartColors[type]);
  }
  //converts key value/pairs into a chart object
  _generateChartBody(data) {
    const chart = { 'labels': [], 'datasets': [] };
    Object.keys(data).forEach((k, index) => {
      const ds = { 'label': k, data: []};
      const firstIteration = index === 0;
      Object.keys(data[k]).forEach(j => {
        if (firstIteration) {
          chart.labels.push(j);
        }
        ds.data.push(data[k][j]);
      });
      chart.datasets.push(ds);
    });
    return chart;
  }

  _barFormat(chart, chartColors) {
    chart.datasets.forEach(ds => {
      ds.backgroundColor = chartColors.map(c=> Colors[c].light);
      ds.borderColor = chartColors.map(c=> Colors[c].normal);
      ds.borderWidth = 1;
    });
    return chart;
  }

  _lineFormat(chart, chartColors) {
    let x = 0;
    chart.datasets.forEach(ds => {
      const color = Colors[chartColors[x]];

      ds.backgroundColor = color.light;
      ds.borderColor = color.dark;
      ds.pointColor = color.dark;
      ds.pointStrokeColor = '#fff';
      ds.pointHighlightFill = '#fff';
      ds.pointHighlightStroke = color.dark;

      x++;
    });
    return chart;
  }

  _pieFormat(chart, chartColors) {
    chart.datasets.forEach(ds => {
      ds.backgroundColor = chartColors.map(c=> Colors[c].normal);
      ds.hoverBackgroundColor = chartColors.map(c=> Colors[c].dark);
    });
    return chart;
  }

  _radarFormat(chart, chartColors) {
    return chart;
  }
}
