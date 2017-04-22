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
    this.cardData = {
      clients: { title: 'New Clients', number: '555', body: '15% from yesterday', color: 'green'},
      invoices: { title: 'New Invoice', number: '1800', body: '3% from last month', color: 'pink'},
      profit: { title: 'Today Profit', number: '$806.52', body: '80% from yesterday', color: 'blue-grey'},
      sales: { title: 'Total Sales', number: '$8990.63', body: '70% last month', color: 'purple'}
    };
  }

  attached() {
    this.service.getDashboard().then(this.renderCharts.bind(this));
  }

  renderCharts(data) {
    data.get = (par) => data.charts.filter(c=>c.name === par)[0];
    const ventasAnuales = this.chartFormatter.format(data.get('VENTAS'), 'bar');
    const ventasSemanales = this.chartFormatter.format(data.get('VENTAS_SEMANAL'), 'bar');
    const ventasCompras = this.chartFormatter.format(data.get('VENTAS_COMPRAS'), 'line');
    const productosVendidos = this.chartFormatter.format(data.get('PRODUCTOS_VENDIDOS'), 'pie');
    const platosVendidos = this.chartFormatter.format(data.get('PLATOS_VENDIDOS'), 'bar');

    this.chartBuilder.build('ventas-compras-chart', ventasCompras, 'line');
    this.chartBuilder.build('ventas-anuales-chart', ventasAnuales, 'bar');
    this.chartBuilder.build('ventas-semanales-chart', ventasSemanales, 'bar');
    this.chartBuilder.build('productos-vendidos-chart', productosVendidos, 'pie');
    this.chartBuilder.build('platos-vendidos-chart', platosVendidos, 'bar');
  }
}
