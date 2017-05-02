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
    this.subscriber = this.ea.subscribe('nav-bar-dashboard-filter-changed', this.filtersChanged.bind(this));
    const filters = { anio: document.getElementById('nav-bar-select-year').value, mes: 4};
    this.retrieveDashboard(filters).then(this.renderDashboard.bind(this));
  }

  detached() {
    this.subscriber.dispose();
  }

  retrieveDashboard(filters) {
    return this.service.getDashboard(filters);
  }

  filtersChanged(response) {
    const filters = { anio: response.navFilterYear, mes: response.navFilterMonth };
    this.retrieveDashboard(filters).then(this.refreshDashboard.bind(this));
  }

  refreshDashboard(data) {
    const ventasAnualesData = this.formatChart(data, 'VENTAS_ANUALES', 'bar');
    const anulacionesDelMesData = this.formatChart(data, 'ANULACIONES_DEL_MES', 'radar');

    this.chartBuilder.update(this.ventasAnualesChart, ventasAnualesData);
    this.chartBuilder.update(this.anulacionesDelMesChart, anulacionesDelMesData);

    this.renderCards(data);
    this.renderAnulaciones(data);
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
  //converts data from api to chart model
  formatChart(data, par, type) {
    const chartData = data.charts.filter(c=>c.name === par)[0].data;
    return this.chartFormatter.format(chartData, type);
  }

  renderCharts(data) {
    const ventasAnualesData = this.formatChart(data, 'VENTAS_ANUALES', 'bar');
    const anulacionesDelMesData = this.formatChart(data, 'ANULACIONES_DEL_MES', 'radar');

    this.ventasAnualesChart = this.chartBuilder.build('ventas-anuales-chart', ventasAnualesData, 'bar');
    this.anulacionesDelMesChart = this.chartBuilder.build('anulaciones-del-mes-chart', anulacionesDelMesData, 'radar');
  }
}
