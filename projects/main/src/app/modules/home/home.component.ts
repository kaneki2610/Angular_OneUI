import { AfterViewInit,
  Component,
  ComponentFactoryResolver,
  Injector,
  OnDestroy,
  OnInit,
  ViewChild,
  ViewContainerRef
} from '@angular/core';

import { Subscription } from 'rxjs';

export interface Data {
  id: number;
  data_id: string;
  name: string;
  created_at: number;
  status: number;
  disabled: boolean;
}
@Component({
  selector: 'mainapp-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  title = 'app home';
  checked = false;
  loading = false;
  indeterminate = false;
  listOfData: ReadonlyArray<Data> = [];
  listOfCurrentPageData: ReadonlyArray<Data> = [];
  setOfCheckedId = new Set<number>();

  chartOptions = {
    series: [
      {
        name: 'series1',
        data: [31, 40, 28, 51, 42, 109, 100],
      },
      {
        name: 'series2',
        data: [11, 32, 45, 32, 34, 52, 41],
      },
    ],
    chart: {
      height: 200,
      type: 'area',
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'smooth',
    },
    xaxis: {
      type: 'datetime',
      categories: [
        '2018-09-19T00:00:00.000Z',
        '2018-09-19T01:30:00.000Z',
        '2018-09-19T02:30:00.000Z',
        '2018-09-19T03:30:00.000Z',
        '2018-09-19T04:30:00.000Z',
        '2018-09-19T05:30:00.000Z',
        '2018-09-19T06:30:00.000Z',
      ],
    },
    tooltip: {
      x: {
        format: 'dd/MM/yy HH:mm',
      },
    },
  };

  chartOptions2 = {
    series: [
      {
        name: 'Net Profit',
        data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
      },
      {
        name: 'Revenue',
        data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
      },
      {
        name: 'Free Cash Flow',
        data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
      },
    ],
    chart: {
      type: 'bar',
      height: 230,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded',
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent'],
    },
    xaxis: {
      categories: [
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
      ],
    },
    yaxis: {
      title: {
        text: '$ (thousands)',
      },
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return '$ ' + val + ' thousands';
        },
      },
    },
    legend: {
      position: 'bottom',
    },
  };

  @ViewChild('chartContainer1', { read: ViewContainerRef })
  chartContainer1: ViewContainerRef;

  @ViewChild('chartContainer2', { read: ViewContainerRef })
  chartContainer2: ViewContainerRef;
  subscription: Subscription;

  constructor(
    private cfr: ComponentFactoryResolver,
    private injector: Injector
  ) {
    
  }

  ngOnInit(): void {
    this.listOfData = new Array(100).fill(0).map((_, index) => {
      return {
        id: index,
        data_id: 'suco-' + index,
        name: `Edward King ${index}`,
        created_at: Date.now(),
        status: Math.floor(Math.random() * 4),
        disabled: index % 2 === 0,
      };
    });
  }

  ngAfterViewInit(): void {
    this.loadChart(this.chartContainer1, this.chartOptions);
    this.loadChart(this.chartContainer2, this.chartOptions2);
  }

  updateCheckedSet(id: number, checked: boolean): void {
    if (checked) {
      this.setOfCheckedId.add(id);
    } else {
      this.setOfCheckedId.delete(id);
    }
  }

  onCurrentPageDataChange(listOfCurrentPageData: ReadonlyArray<Data>): void {
    this.listOfCurrentPageData = listOfCurrentPageData;
    this.refreshCheckedStatus();
  }

  refreshCheckedStatus(): void {
    const listOfEnabledData = this.listOfCurrentPageData.filter(
      ({ disabled }) => !disabled
    );
    this.checked = listOfEnabledData.every(({ id }) =>
      this.setOfCheckedId.has(id)
    );
    this.indeterminate =
      listOfEnabledData.some(({ id }) => this.setOfCheckedId.has(id)) &&
      !this.checked;
  }

  onItemChecked(id: number, checked: boolean): void {
    this.updateCheckedSet(id, checked);
    this.refreshCheckedStatus();
  }

  onAllChecked(checked: boolean): void {
    this.listOfCurrentPageData
      .filter(({ disabled }) => !disabled)
      .forEach(({ id }) => this.updateCheckedSet(id, checked));
    this.refreshCheckedStatus();
  }

  async loadChart(container: ViewContainerRef, options: any) {
    const { ChartComponent } = await import('@vnpt/oneui-charts');
    const chartFactory = this.cfr.resolveComponentFactory(ChartComponent);
    const { instance } = container.createComponent(
      chartFactory,
      null,
      this.injector
    );
    instance.options = options;
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
