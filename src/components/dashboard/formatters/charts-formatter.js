import { inject } from 'aurelia-framework';
import ChartFormatter from '../../../chart/chart-formatter';
import { ChartOptions } from '../../../chart/chart-config';

@inject(ChartFormatter)
export default class ChartsFormatter {

  constructor(chartFormatter) {
    this.chartFormatter = chartFormatter;
  }

  format(data) {
    return {
      ventasAnuales: this._getItem(data, 'VENTAS_ANUALES', 'bar'),
      anulacionesMes: this._getItem(data, 'ANULACIONES_DEL_MES', 'radar'),
      productosMes: this._getItem(data, 'PRODUCTOS_VENDIDOS_DEL_MES', 'pie'),
      mozoMes: this._getItem(data, 'MOZO_DEL_MES', 'bar'),
      platoMes: this._getItem(data, 'PLATOS_VENDIDOS_DEL_MES', 'bar')
    };
  }

  _getItem(data, par, type) {
    return { data: this._formatChart(data, par, type), opts: ChartOptions[par]}
  }

  //converts data from api to chart model
  _formatChart(data, par, type) {
    const chart = data.charts.filter(c=>c.name === par)[0];
    if (!chart) return null;
    const chartData = chart.data;
    return this.chartFormatter.format(chartData, type);
  }

  _getOptions() {
    return {
      ventasAnuales: ChartOptions['VENTAS_ANUALES'],
      anulacionesMes: ChartOptions['ANULACIONES_DEL_MES'],
      productosMes: ChartOptions['PRODUCTOS_VENDIDOS_DEL_MES'],
      mozoMes: ChartOptions['MOZO_DEL_MES'],
      platoMes: ChartOptions['PLATOS_VENDIDOS_DEL_MES']
    }
  }
}
