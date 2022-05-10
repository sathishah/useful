import {
    Component,
    OnInit,
    ApplicationRef,
    ComponentFactoryResolver,
    Injector
} from '@angular/core';
import * as Highcharts from 'highcharts';
import { TooltipComponent } from "./tooltip/tooltip.component";
import { ComponentPortal, DomPortalOutlet } from "@angular/cdk/portal";

declare var require: any

@Component({
    selector: 'app-charts',
    templateUrl: './charts.component.html',
    styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit {

    public HighCharts: any = Highcharts;
    public chartOptions: any;
    tooltipPortalOutlet: DomPortalOutlet;
    tooltipPortal: ComponentPortal<TooltipComponent>;

    constructor(
        private componentFactoryResolver: ComponentFactoryResolver,
        private injector: Injector,
        private appRef: ApplicationRef
    ) { }

    ngOnInit(): void {
        if (!this.HighCharts?.myPluginLoaded) {
            require('highcharts-grouped-categories')(Highcharts);
            this.HighCharts.myPluginLoaded = true;
        }
        this.chartOptions = {
            chart: {
                type: 'column',
                width: 300,
                scrollablePlotArea: {
                    scrollPositionX: 1,
                    minWidth: 300,
                    opacity: 1
                }
            },
            legend: {
                itemStyle: {
                    color: 'red',
                    fontWeight: 'bold'
                }
            },
            tooltip: {
                useHTML: true,
                backgroundColor: null,
                borderWidth: 0,
                formatter: () => {
                    setTimeout(() => {
                        this.addTooltipPortal();
                    });
                    if (document.querySelector("#tooltipHost")) {
                        document.querySelector("#tooltipHost").innerHTML = '';
                    }
                    return `<div id="tooltipHost"></div>`;
                }
            },
            title: {
                text: null
            },
            series: [
                {
                    data: [4, 18, 20, 25, 10]
                }
            ],
            credits: {
                enabled: false
            },
            plotOptions: {
                column: {
                    color: 'blue',
                    pointWidth: 20,
                    borderRadiusTopLeft: 5,
                    borderRadiusTopRight: 5,
                    cursor: 'pointer'
                },
                series: {
                    pointPadding: 0,
                    groupPadding: 0.1,
                    showInLegend: false,
                    gridLineColor: 'transparent',
                    states: {
                        hover: {
                            color: 'darkblue'
                        }
                    }
                }
            },
            yAxis: {
                gridLineWidth: 0,
                minorTickLength: 0,
                tickLength: 0,
                gridLineColor: 'transparent',
                lineColor: 'transparent',
                tickColor: 'transparent',
                title: {
                    text: ''
                },
                labels: {
                    enabled: false
                }
            },
            xAxis: {
                gridLineWidth: 0,
                title: {
                    text: ''
                },
                scrollbar: {
                    enabled: true
                },
                labels: {
                    style: {
                        fontSize: '11px'
                    }
                },
                minorTickLength: 0,
                tickLength: 0,
                gridLineColor: 'transparent',
                lineColor: 'transparent',
                tickColor: 'transparent',
                categories: [
                    {
                        name: 'Feb',
                        categories: ['1-7', '8-14', '15-21', '22-28']
                    },
                    {
                        name: 'Mar',
                        categories: ['1-7']
                    }
                ]
            }
        };

        const borderRadius = require("highcharts-border-radius");
        borderRadius(this.HighCharts);
    }

    addTooltipPortal() {
        this.tooltipPortal = new ComponentPortal(TooltipComponent);
        this.tooltipPortalOutlet = new DomPortalOutlet(
            document.querySelector("#tooltipHost"),
            this.componentFactoryResolver,
            this.appRef,
            this.injector
        );

        this.tooltipPortal.attach(this.tooltipPortalOutlet);
    }

    addComponentRef(event: any) {
        console.log('Chart Event', event);
    }

}
