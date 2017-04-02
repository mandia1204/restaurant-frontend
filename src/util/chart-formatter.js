import { Colors } from './colors';
import { ChartColors } from './chart-colors';

export default class ChartFormatter {

  constructor() {
    this.formats = {'bar': this._barFormat, 'line': this._lineFormat, 'pie': this._pieFormat};
  }

  format(chart, type) {
    return this.formats[type](chart, ChartColors[type]);
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
}
