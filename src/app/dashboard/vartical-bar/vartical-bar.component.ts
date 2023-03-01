import { Component, OnInit } from '@angular/core';
import {Chart} from 'angular-highcharts'

@Component({
  selector: 'app-vartical-bar',
  templateUrl: './vartical-bar.component.html',
  styleUrls: ['./vartical-bar.component.css']
})
export class VarticalBarComponent implements OnInit {
  vbar=new Chart({

    chart: {
      type: 'column',
    },
    credits: {
      enabled: true,
    },
    title: {
      text: 'Bar',
    },
    yAxis: {
      visible: true,
      gridLineColor: '#fff',
    },
    legend: {
      enabled: true,
    },
    xAxis: {
      lineColor: '#fff',
      categories: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ],
    },

    plotOptions: {
      series: {
        borderRadius: 5,
      } as any,
    },

    series: [
      {
        type: 'column',
        color: '#506ef9',
        data: [
          { y: 20.9},
          { y: 71.5 },
          { y: 106.4 },
          { y: 129.2 },
          { y: 144.0, color: '#ffe8df' },
          { y: 176.0 },
          { y: 135.6 },
          { y: 148.5 },
          { y: 216.4, color: '#fc5185' },
          { y: 194.1 },
          { y: 95.6 },
          { y: 54.4 },
        ],
      },
    ],
  })


  constructor() { }

  ngOnInit(): void {

  }

}
