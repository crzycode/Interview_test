import { ChartModule } from 'angular-highcharts';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavComponent } from './side-nav/side-nav.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { DoughnutChartComponent } from './doughnut-chart/doughnut-chart.component';
import { VarticalBarComponent } from './vartical-bar/vartical-bar.component';
import { HorizontalBarComponent } from './horizontal-bar/horizontal-bar.component';
import { DatetimeComponent } from './datetime/datetime.component';




@NgModule({
  declarations: [
    SideNavComponent,
    TopNavComponent,
    LineChartComponent,
    DoughnutChartComponent,
    VarticalBarComponent,
    HorizontalBarComponent,
    DatetimeComponent,

  ],
  imports: [
    CommonModule,
    ChartModule


  ],exports:[SideNavComponent,TopNavComponent,LineChartComponent,DoughnutChartComponent,VarticalBarComponent,HorizontalBarComponent]
})
export class DashboardModule { }
