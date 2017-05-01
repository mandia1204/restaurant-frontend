import { inject } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';
import { DashboardService } from './services/dashboard-service';
import ChartBuilder from '../../chart/chart-builder';
import ChartFormatter from '../../chart/chart-formatter';
import { CardOptions } from '../../util/card-options';

@inject(EventAggregator, DashboardService, ChartBuilder, ChartFormatter)
export class Dashboard {

  constructor(eventAggregator, service, chartBuilder, chartFormatter) {
    this.ea = eventAggregator;
    this.service = service;
    this.chartBuilder = chartBuilder;
    this.chartFormatter = chartFormatter;
  }

  attached() {
    this.subscriber = this.ea.subscribe('nav-bar-year-select-changed', response => {
      //console.log(response.year);
    });

    const filters = { anio: '2017', mes: 4};
    this.retrieveDashboard(filters);
  }

  detached() {
    this.subscriber.dispose();
  }

  retrieveDashboard(filters) {
    this.service.getDashboard(filters).then(this.renderDashboard.bind(this));
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
