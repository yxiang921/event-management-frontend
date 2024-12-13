import { useEffect } from 'react';
import * as echarts from 'echarts';
import { Download, Calendar, Users, DollarSign, TrendingUp } from 'lucide-react';

const Analytics = () => {
  const stats = [
    {
      title: "Events This Month",
      value: "28",
      change: "+12%",
      icon: <Calendar className="w-6 h-6 text-primary-900" />
    },
    {
      title: "Total Attendees",
      value: "2,450",
      change: "+25%",
      icon: <Users className="w-6 h-6 text-primary-900" />
    },
    {
      title: "Revenue Generated",
      value: "$45,000",
      change: "+18%",
      icon: <DollarSign className="w-6 h-6 text-primary-900" />
    },
    {
      title: "Growth Rate",
      value: "24%",
      change: "+5%",
      icon: <TrendingUp className="w-6 h-6 text-primary-900" />
    }
  ];

  useEffect(() => {
    // Attendance Trend Chart
    const attendanceChart = echarts.init(document.getElementById('attendanceChart'));
    const attendanceOption = {
      title: {
        text: 'Attendance Trends',
        left: 'center'
      },
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: ['Total Attendees', 'New Attendees'],
        bottom: 0
      },
      xAxis: {
        type: 'category',
        data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name: 'Total Attendees',
          type: 'line',
          smooth: true,
          data: [820, 932, 901, 934, 1290, 1330],
          lineStyle: {
            color: '#312e81'
          }
        },
        {
          name: 'New Attendees',
          type: 'line',
          smooth: true,
          data: [320, 332, 301, 334, 390, 330],
          lineStyle: {
            color: '#059669'
          }
        }
      ]
    };
    attendanceChart.setOption(attendanceOption);

    // Revenue Distribution Chart
    const revenueChart = echarts.init(document.getElementById('revenueChart'));
    const revenueOption = {
      title: {
        text: 'Revenue by Event Type',
        left: 'center'
      },
      tooltip: {
        trigger: 'item'
      },
      legend: {
        bottom: 0
      },
      series: [
        {
          name: 'Revenue',
          type: 'pie',
          radius: ['40%', '70%'],
          avoidLabelOverlap: false,
          itemStyle: {
            borderRadius: 10,
            borderColor: '#fff',
            borderWidth: 2
          },
          label: {
            show: false,
            position: 'center'
          },
          emphasis: {
            label: {
              show: true,
              fontSize: '14',
              fontWeight: 'bold'
            }
          },
          labelLine: {
            show: false
          },
          data: [
            { value: 1048, name: 'Conferences' },
            { value: 735, name: 'Workshops' },
            { value: 580, name: 'Seminars' },
            { value: 484, name: 'Networking' },
            { value: 300, name: 'Other' }
          ]
        }
      ]
    };
    revenueChart.setOption(revenueOption);

    // Monthly Performance Chart
    const performanceChart = echarts.init(document.getElementById('performanceChart'));
    const performanceOption = {
      title: {
        text: 'Monthly Performance',
        left: 'center'
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      legend: {
        bottom: 0
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '15%',
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
        }
      ],
      yAxis: [
        {
          type: 'value',
          name: 'Events',
          min: 0,
          max: 250
        }
      ],
      series: [
        {
          name: 'Completed',
          type: 'bar',
          stack: 'total',
          emphasis: {
            focus: 'series'
          },
          data: [120, 132, 101, 134, 90, 230]
        },
        {
          name: 'Ongoing',
          type: 'bar',
          stack: 'total',
          emphasis: {
            focus: 'series'
          },
          data: [220, 182, 191, 234, 290, 330]
        },
        {
          name: 'Cancelled',
          type: 'bar',
          stack: 'total',
          emphasis: {
            focus: 'series'
          },
          data: [150, 232, 201, 154, 190, 330]
        }
      ]
    };
    performanceChart.setOption(performanceOption);

    // Handle resize
    const handleResize = () => {
      attendanceChart.resize();
      revenueChart.resize();
      performanceChart.resize();
    };
    window.addEventListener('resize', handleResize);

    return () => {
      attendanceChart.dispose();
      revenueChart.dispose();
      performanceChart.dispose();
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <main className="p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-semibold text-gray-900">Analytics & Reports</h1>
          <button className="flex items-center space-x-2 bg-primary-900 text-white px-4 py-2 rounded-lg hover:bg-primary-800 transition-colors duration-200">
            <Download size={20} />
            <span>Export Report</span>
          </button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <div className="flex items-center justify-between">
                {stat.icon}
                <span className="text-green-500 text-sm">{stat.change}</span>
              </div>
              <h3 className="text-gray-500 text-sm mt-4">{stat.title}</h3>
              <p className="text-2xl font-semibold mt-2">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div id="attendanceChart" style={{ height: '400px' }} />
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div id="revenueChart" style={{ height: '400px' }} />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <div id="performanceChart" style={{ height: '400px' }} />
        </div>
      </main>
    </div>
  );
};

export default Analytics;