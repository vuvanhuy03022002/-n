import React, {useEffect} from "react";
import Chart from "react-apexcharts";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrder } from "../../../../actions/OrderAction";


export default function ChartDashBoard() {
  const dispatch = useDispatch()
  const allOrder = useSelector(state => state.allOrder.order)

  const numberOfOrdersOnMonth = (month) => {
    if(allOrder){
      return allOrder.filter((order) => {
        const allOrder = new Date(order.createdAt).getMonth();
        if (allOrder + 1 === month) {
          return order;
        }
      }).length;
    }
    return
  };

  useEffect(() => {
    dispatch(getAllOrder())
  }, [dispatch])

  const chartOptions = {
    series: [{
        name: 'Số đơn hàng hàng tháng',
        data: [
          numberOfOrdersOnMonth(1) + 0,
          numberOfOrdersOnMonth(2) + 0,
          numberOfOrdersOnMonth(3) + 0,
          numberOfOrdersOnMonth(4)+ 0,
          numberOfOrdersOnMonth(5)+ 0,
          numberOfOrdersOnMonth(6)+ 0,
          numberOfOrdersOnMonth(7)+0,
          numberOfOrdersOnMonth(8)+ 0,
          numberOfOrdersOnMonth(9)+ 0,
          numberOfOrdersOnMonth(10)+ 0,
          numberOfOrdersOnMonth(11) + 0,
          numberOfOrdersOnMonth(12) + 0,
        ]
    }],
    options: {
        color: ['#6ab04c', '#2980b9'],
        chart: {
            background: 'transparent'
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth'
        },
        xaxis: {
            categories: ['T1', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'T8', 'T9', 'T10', 'T11', 'T12']
        },
        legend: {
            position: 'top'
        },
        grid: {
            show: false
        }
    }
  }

  return (
    <div className="dashboard-middle-chart">
      <Chart
        options={chartOptions.options}
        series={chartOptions.series}
        type='line'
        width="500"
      />
    </div>
  );
}
