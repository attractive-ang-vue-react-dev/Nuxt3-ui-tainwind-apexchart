import { defineStore } from 'pinia'

interface State {
    areaChartOptions: object,
}


export const useAdminStore = defineStore('adminStore', {
    state: (): State => ({
        areaChartOptions: {
            chart: {
                height: 250,
                width: 600,
                type: 'area',
                fontFamily: 'Inter, sans-serif',
                foreColor: '#9CA3AF',
                toolbar: {
                    show: false
                }
            },
            fill: {
                type: 'gradient',
                gradient: {
                    enabled: true,
                    opacityFrom:0,
                    opacityTo: 0.15
                }
            },
            dataLabels: {
                enabled: false
            },
            tooltip: {
                style: {
                    fontSize: '14px',
                    fontFamily: 'Inter, sans-serif',
                },
            },
            grid: {
                show: true,
                borderColor: '#374151',
                strokeDashArray: 1,
                padding: {
                    left: 35,
                    bottom: 15
                }
            },
        
            markers: {
                size: 5,
                strokeColors: '#ffffff',
                hover: {
                    size: undefined,
                    sizeOffset: 3
                }
            },
            xaxis: {
                categories: ['01 Feb', '02 Feb', '03 Feb', '04 Feb', '05 Feb', '06 Feb', '07 Feb'],
                labels: {
                    style: {
                    colors: ['#9CA3AF'],
                    fontSize: '14px',
                    fontWeight: 500,
                    },
                },
                axisBorder: {
                    color: '#9CA3AF',
                },
                axisTicks: {
                    color: '#374151',
                },
                crosshairs: {
                    show: true,
                    position: 'back',
                    stroke: {
                    color: '#374151',
                    width: 1,
                    dashArray: 10,
                    },
                },
            },
            yaxis: {
                labels: {
                    style: {
                    colors: ['#9CA3AF'],
                    fontSize: '14px',
                    fontWeight: 500,
                    },
                    formatter: function (value: string) {
                    return '$' + value;
                    }
                },
            },
            legend: {
                fontSize: '14px',
                fontWeight: 500,
                fontFamily: 'Inter, sans-serif',
                labels: {
                    colors: ['#9CA3AF']
                },
                itemMargin: {
                    horizontal: 10
                }
            },
            responsive: [
                {
                    breakpoint: 1024,
                    options: {
                    xaxis: {
                        labels: {
                        show: false
                        }
                    }
                    }
                }
            ]
        },
    }),
    getters: {
        areaChartOption: (state) => state.areaChartOptions,
    },
    actions: {
        
    }
})