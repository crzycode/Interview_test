import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {Chart} from 'angular-highcharts'
@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {
  lineChart=new Chart({
    chart: {
      type:'area',
      styledMode: false,
    },
    plotOptions: {
      series: {
        marker: {
          enabled: true,
        },
      },
    },
    legend: {
      enabled: true,
    },
    credits: {
      enabled: true,
    },
    title: {
      text: 'Statistics',
    },
    yAxis: {
      visible: true,
      categories: [
        '100k',
        '200k',
        '300k',
        '400k',
        '500k',
        '600k',
        '800k',
      ],
    },

    xAxis: {
      visible: true,

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

    defs: {
      gradient0: {
        tagName: 'linearGradient',
        id: 'gradient-0',
        x1: 0,
        y1: 1,
        x2: 0,
        y2: 1,
        children: [
          {
            tagName: 'stop',
            offset: 0,
          },
          {
            tagName: 'stop',
            offset: 1,
          },
        ],
      },
    } as any,

    series: [
      {
        color: 'rgba(244, 24, 138, 0.4)',
        type: 'areaspline',
        keys: ['y', 'selected'],
        data: [
          [0.9, true],
          [71.5, true],
          [10.4, true],
          [14.0, true],
          [16.0, true],
          [135.6, false],
          [148.5, false],
          [216.4, false],
          [194.1, false],
          [95.6, false],
          [54.4, false],
        ],
      },
      {
        color: 'rgba(244, 24, 138, 0.4)',
        type: 'areaspline',
        keys: ['y', 'selected'],
        data: [
          [29.9, false],
          [71.5, false],
          [106.4, false],
          [144.0, false],
          [176.0, false],
          [135.6, false],
          [148.5, false],
          [216.4, false],
          [194.1, false],
          [95.6, false],
          [54.4, false],
        ],
      },
    ],
  })
ngOnInit(): void {

}
}
