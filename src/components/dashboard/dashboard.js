import { inject } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';
import { DashboardService } from './services/dashboard-service';
import ChartBuilder from '../../chart/chart-builder';
import ChartFormatter from '../../chart/chart-formatter';
import { CardOptions } from '../../util/card-options';
import { Ops } from '../../util/constants';
import AnulacionesFormatter from './formatters/anulaciones-formatter';

@inject(EventAggregator, DashboardService, ChartBuilder, ChartFormatter, AnulacionesFormatter)
export class Dashboard {

  constructor(eventAggregator, service, chartBuilder, chartFormatter, anulacionesFormatter) {
    this.ea = eventAggregator;
    this.service = service;
    this.chartBuilder = chartBuilder;
    this.chartFormatter = chartFormatter;
    this.anulacionesFormatter = anulacionesFormatter;
  }

  attached() {
    this.subscriber = this.ea.subscribe('nav-bar-dashboard-filter-changed', this.filtersChanged.bind(this));
    const filters = { anio: document.getElementById('nav-bar-select-year').value, mes: 4, ops: Ops.all };
    this.retrieveDashboard(filters).then(this.renderDashboard.bind(this));
  }

  detached() {
    this.subscriber.dispose();
  }

  retrieveDashboard(filters) {
    return this.service.getDashboard(filters);
  }

  filtersChanged(response) {
    const ops = Ops[response.type];
    const filters = { anio: response.navFilterYear, mes: response.navFilterMonth, ops: ops };
    this.retrieveDashboard(filters).then(this.refreshDashboard.bind(this));
  }

  refreshDashboard(data) {
    const chartData = this.getChartDataFromService(data);
    if (chartData.ventasAnuales) {
      this.chartBuilder.update(this.ventasAnualesChart, chartData.ventasAnuales);
    }
    if (chartData.anulacionesMes) {
      this.chartBuilder.update(this.anulacionesDelMesChart, chartData.anulacionesMes);
    }
    this.renderCards(data);
    this.renderAnulaciones(data);
  }

  renderDashboard(data) {
    this.renderCards(data);
    this.renderCharts(data);
    this.renderAnulaciones(data);
  }

  renderAnulaciones(data) {
    if (data.anulaciones) {
      this.anulaciones = this.anulacionesFormatter.format(data.anulaciones);
    }
  }

  renderCards(data) {
    const props = Object.keys(data.cards);
    if (props.length === 0) {
      return false;
    }
    props.forEach(k => {
      Object.assign(data.cards[k], CardOptions[k]);
      data.cards[k].value = CardOptions[k].format.replace('${0}', data.cards[k].value);
    });
    this.cardData = data.cards;
  }
  //converts data from api to chart model
  formatChart(data, par, type) {
    const chart = data.charts.filter(c=>c.name === par)[0];
    if (!chart) return null;
    const chartData = chart.data;
    return this.chartFormatter.format(chartData, type);
  }

  getChartDataFromService(data) {
    return {
      ventasAnuales: this.formatChart(data, 'VENTAS_ANUALES', 'bar'),
      anulacionesMes: this.formatChart(data, 'ANULACIONES_DEL_MES', 'radar')
    };
  }
  renderCharts(data) {
    const chartData = this.getChartDataFromService(data);

    if (chartData.ventasAnuales) {
      this.ventasAnualesChart = this.chartBuilder.build('ventas-anuales-chart', chartData.ventasAnuales, 'bar');
    }
    if (chartData.anulacionesMes) {
      this.anulacionesDelMesChart = this.chartBuilder.build('anulaciones-del-mes-chart', chartData.anulacionesMes, 'radar');
    }
  }
}
