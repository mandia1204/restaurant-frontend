import { inject } from 'aurelia-framework';
import { DashboardService } from './services/dashboard-service';
import ChartBuilder from '../../chart/chart-builder';
import ChartFormatter from '../../chart/chart-formatter';
import { CardOptions } from '../../util/card-options';

@inject(DashboardService, ChartBuilder, ChartFormatter)
export class Dashboard {

  constructor(service, chartBuilder, chartFormatter) {
    this.service = service;
    this.chartBuilder = chartBuilder;
    this.chartFormatter = chartFormatter;
    this.filters = {anio: 2017, mes: 4};
  }

  attached() {
    this.service.getDashboard(this.filters).then(this.renderDashboard.bind(this));
  }

  renderDashboard(data) {
    this.renderCards(data);
    this.renderCharts(data);
    this.renderAnulaciones(data);
  }

  renderAnulaciones(data) {
    this.anulaciones = data.anulaciones;
  }

  renderCards(data) {
    Object.keys(data.cards).forEach(k => {
      Object.assign(data.cards[k], CardOptions[k]);
      data.cards[k].value = CardOptions[k].format.replace('${0}', data.cards[k].value);
    });
    this.cardData = data.cards;
  }

  renderCharts(data) {
    data.get = (par) => data.charts.filter(c=>c.name === par)[0].data;
    const ventasAnuales = this.chartFormatter.format(data.get('VENTAS_ANUALES'), 'bar');
    const anulacionesDelMes = this.chartFormatter.format(data.get('ANULACIONES_DEL_MES'), 'radar');

    this.chartBuilder.build('ventas-anuales-chart', ventasAnuales, 'bar');
    this.chartBuilder.build('anulaciones-del-mes-chart', anulacionesDelMes, 'radar');
  }
}
