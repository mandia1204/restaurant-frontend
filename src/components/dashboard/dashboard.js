import { inject } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';
import { DashboardService } from './services/dashboard-service';
import ChartBuilder from '../../chart/chart-builder';
import { ChartOptions } from '../../chart/chart-config';
import { CardOptions } from '../../util/card-options';
import { Ops } from '../../util/constants';
import AnulacionesFormatter from './formatters/anulaciones-formatter';
import ChartsFormatter from './formatters/charts-formatter';

@inject(EventAggregator, DashboardService, ChartBuilder, ChartsFormatter, AnulacionesFormatter)
export class Dashboard {

  constructor(eventAggregator, service, chartBuilder, chartsFormatter, anulacionesFormatter) {
    this.ea = eventAggregator;
    this.service = service;
    this.chartBuilder = chartBuilder;
    this.chartsFormatter = chartsFormatter;
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
    const chartData = this.chartsFormatter.format(data);
    if (chartData.ventasAnuales.data) {
      this.chartBuilder.update(this.ventasAnualesChart, chartData.ventasAnuales.data);
    }
    if (chartData.anulacionesMes.data) {
      this.chartBuilder.update(this.anulacionesDelMesChart, chartData.anulacionesMes.data);
    }
    if (chartData.productosMes.data) {
      this.chartBuilder.update(this.productosDelMesChart, chartData.productosMes.data);
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

  renderCharts(data) {
    const chartData = this.chartsFormatter.format(data);

    if (chartData.ventasAnuales.data) {
      this.ventasAnualesChart = this.chartBuilder.build('ventas-anuales-chart', chartData.ventasAnuales, 'bar');
    }
    if (chartData.anulacionesMes.data) {
      this.anulacionesDelMesChart = this.chartBuilder.build('anulaciones-del-mes-chart', chartData.anulacionesMes, 'radar');
    }
    if (chartData.productosMes.data) {
      this.productosDelMesChart = this.chartBuilder.build('productos-vendidos-mes-chart', chartData.productosMes, 'pie');
    }
  }
}
