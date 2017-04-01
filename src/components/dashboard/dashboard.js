import { inject } from 'aurelia-framework';
import { DashboardService } from './services/dashboard-service';
import ChartBuilder from '../../util/chart-builder';
import ChartFormatter from '../../util/chart-formatter';

@inject(DashboardService, ChartBuilder, ChartFormatter)
export class Dashboard {

  constructor(service, chartBuilder, chartFormatter) {
    this.service = service;
    this.chartBuilder = chartBuilder;
    this.chartFormatter = chartFormatter;
  }

  attached() {
    this.service.getDashboard().then(this.renderCharts.bind(this));
    //this.chartHelper.createChart('productos-vendidos-chart', this.DynamicDoughnutData, 'pie', this.pieOptions());
  }

  renderCharts(data) {
    const ventas = this.chartFormatter.format(data.charts.filter(c=>c.name === 'VENTAS')[0], 'bar');
    const ventasCompras = this.chartFormatter.format(data.charts.filter(c=>c.name === 'VENTAS_COMPRAS')[0], 'line');

    this.chartBuilder.build('ventas-compras-chart', ventasCompras, 'line');
    this.chartBuilder.build('ventas-anuales-chart', ventas, 'bar');
  }
}
