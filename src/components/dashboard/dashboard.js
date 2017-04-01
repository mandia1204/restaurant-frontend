/* eslint-disable quotes */
/* eslint-disable indent */
import { inject } from 'aurelia-framework';
import { DashboardService } from './services/dashboard-service';
import { constants } from '../../util/constants';
import ChartHelper from '../../util/chart-helper';

@inject(DashboardService, ChartHelper)
export class Dashboard {

  constructor(service, chartHelper) {
    this.service = service;
    this.chartHelper = chartHelper;

    this.DynamicDoughnutData = {};
    this.SimpleLineData = {};
    this.barData = {};
    this.semanal = {};
    this.lineData = {};
    this.radarData = {};

    this.resetPieData();
    this.resetLineData();
    // this.resetSemanal();
    // this.resetRadarData();
  }

  attached() {
    this.service.getDashboard().then(this.ventasAnuales.bind(this));
    this.chartHelper.createChart('ventas-compras-chart', this.lineData, 'line', this.barOptions());
    this.chartHelper.createChart('productos-vendidos-chart', this.DynamicDoughnutData, 'pie', this.pieOptions());
  }

  barOptions() {
    return {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    };
  }

  pieOptions() {
    return {
        animation: {
            animateScale: true
        }
    };
  }

  resetRadarData() {
    this.radarData = {
    labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
    datasets: [
        {
            label: "Pedro",
            backgroundColor: "rgba(179,181,198,0.2)",
            borderColor: "rgba(179,181,198,1)",
            pointBackgroundColor: "rgba(179,181,198,1)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgba(179,181,198,1)",
            data: [65, 59, 90, 81, 56, 55, 40]
        },
        {
            label: "Pablo",
            backgroundColor: "rgba(255,99,132,0.2)",
            borderColor: "rgba(255,99,132,1)",
            pointBackgroundColor: "rgba(255,99,132,1)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgba(255,99,132,1)",
            data: [28, 48, 40, 19, 96, 27, 100]
        }
    ]
    };
  }

  resetLineData() {
    this.lineData = {
            labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio"],
            datasets: [
                {
                    label: "Ventas",
                    backgroundColor: "rgba(220,220,220,0.2)",
                    borderColor: "rgba(220,220,220,1)",
                    pointColor: "rgba(220,220,220,1)",
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "rgba(220,220,220,1)",
                    data: [65, 59, 80, 81, 56, 55, 40]
                },
                {
                    label: "Compras",
                    backgroundColor: "rgba(151,187,205,0.2)",
                    borderColor: "rgba(151,187,205,1)",
                    pointColor: "rgba(151,187,205,1)",
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "rgba(151,187,205,1)",
                    data: [28, 48, 40, 19, 86, 27, 90]
                }
            ]
        };
  }

  resetSemanal(data) {
    this.semanal = {
      labels: ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"],
      datasets: [
          {
              label: "Semana(01/03 - 07/03)",
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(255,99,132,1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1,
              data: [12000, 15000, 13000, 11000, 20000, 50000, 60000]
          }
      ]
    };
  }

  ventasAnuales(data) {
      const ventas = data.charts.filter(c=>c.name === "VENTAS")[0];
      const labels = ventas.labels;
      const dataset = ventas.datasets[0];
      dataset.backgroundColor = labels.map(label=>constants.BAR_MONTHS[label].background);
      dataset.borderColor = labels.map(label=>constants.BAR_MONTHS[label].border);
      dataset.borderWidth = 1;
      this.barData = ventas;
      this.chartHelper.createChart('ventas-anuales-chart', this.barData, 'bar', this.barOptions());
  }

  resetPieData() {
    this.DynamicDoughnutData = {
      labels: ["Alimentos", "Bebidas", "Otros" ],
      datasets: [
        {
            data: [1500, 500, 200],
            backgroundColor: [
                          "#f44336",
                          "#42a5f5",
                          "#9c27b0"
                      ],
                      hoverBackgroundColor: [
                          "#f44336",
                          "#42a5f5",
                          "#9c27b0"
                      ]
        }]
      };
    }
}
