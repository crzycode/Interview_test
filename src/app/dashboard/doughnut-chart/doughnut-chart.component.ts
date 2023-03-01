import { Component, OnInit } from '@angular/core';

import {Chart} from 'angular-highcharts'


@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.css']
})
export class DoughnutChartComponent implements OnInit {
  pieChart=new Chart({
    chart: {
      type: 'pie',
      plotShadow: false,
    },

    credits: {
      enabled: true,
    },

    plotOptions: {
      pie: {
        innerSize: '99%',
        borderWidth: 30,
        borderColor: '',
        slicedOffset: 10,
        dataLabels: {
          connectorWidth: 0,
        },
      },
    },

    title: {
      verticalAlign: 'middle',
      floating: true,
      text: '100%',
    },

    legend: {
      enabled: true,
    },

    series: [
      {
        type: 'pie',
        data: [
          { name: '', y: 1, color: '#eeeeee' },

          { name: '', y: 2, color: '#393e46' },

          { name: '', y: 3, color: '#00adb5' },
          { name: '', y: 4, color: '#eeeeee' },

        ],
      },
    ],
  })
  constructor() { }

  ngOnInit(): void {



  }

}
