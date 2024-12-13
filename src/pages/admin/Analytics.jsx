import { useEffect } from "react";
import {
  Calendar,
  Users,
  DollarSign,
  Activity,
} from "lucide-react";
import * as echarts from "echarts";

const mockData = {
  monthlyEvents: [
    { month: "Jan", events: 45, revenue: 42000, attendees: 890 },
    { month: "Feb", events: 52, revenue: 48000, attendees: 1020 },
    { month: "Mar", events: 38, revenue: 35000, attendees: 760 },
    { month: "Apr", events: 65, revenue: 58000, attendees: 1250 },
    { month: "May", events: 48, revenue: 44000, attendees: 950 },
    { month: "Jun", events: 59, revenue: 52000, attendees: 1150 },
  ],
  recentEvents: [
    {
      name: "Tech Conference 2024",
      attendees: 520,
      revenue: 52000,
      status: "Completed",
    },
    {
      name: "Music Festival",
      attendees: 1200,
      revenue: 89000,
      status: "Upcoming",
    },
    {
      name: "Business Summit",
      attendees: 300,
      revenue: 45000,
      status: "In Progress",
    },
    {
      name: "Art Exhibition",
      attendees: 150,
      revenue: 15000,
      status: "Upcoming",
    },
  ],
};

export default function Dashboard() {

  useEffect(() => {
    // Bar and Line Chart
    const barLineChart = echarts.init(document.getElementById("barLineChart"));
    const barLineOption = {
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "cross",
          crossStyle: {
            color: "#999",
          },
        },
      },
      legend: {
        data: ["Events", "Revenue", "Attendees"],
      },
      xAxis: {
        type: "category",
        data: mockData.monthlyEvents.map((item) => item.month),
        axisPointer: {
          type: "shadow",
        },
      },
      yAxis: [
        {
          type: "value",
          name: "Events/Attendees",
          position: "left",
        },
        {
          type: "value",
          name: "Revenue",
          position: "right",
          axisLabel: {
            formatter: "${value}",
          },
        },
      ],
      series: [
        {
          name: "Events",
          type: "bar",
          data: mockData.monthlyEvents.map((item) => item.events),
          color: "#312e81",
        },
        {
          name: "Revenue",
          type: "line",
          yAxisIndex: 1,
          data: mockData.monthlyEvents.map((item) => item.revenue),
          color: "#059669",
        },
        {
          name: "Attendees",
          type: "bar",
          data: mockData.monthlyEvents.map((item) => item.attendees),
          color: "#9333ea",
        },
      ],
    };
    barLineChart.setOption(barLineOption);

    // Pie Chart
    const pieChart = echarts.init(document.getElementById("pieChart"));
    const pieOption = {
      tooltip: {
        trigger: "item",
      },
      legend: {
        orient: "vertical",
        left: "left",
      },
      series: [
        {
          name: "Event Status",
          type: "pie",
          radius: "70%",
          data: [
            { value: 45, name: "Completed", itemStyle: { color: "#059669" } },
            { value: 35, name: "Upcoming", itemStyle: { color: "#312e81" } },
            { value: 20, name: "In Progress", itemStyle: { color: "#9333ea" } },
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)",
            },
          },
        },
      ],
    };
    pieChart.setOption(pieOption);

    // Handle resize
    const handleResize = () => {
      barLineChart.resize();
      pieChart.resize();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      barLineChart.dispose();
      pieChart.dispose();
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">
          Analytics
        </h1>
        <p className="text-gray-600 mt-2">
          Overview of your event management metrics
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
          <div className="flex items-center">
            <Calendar className="w-8 h-8 text-gray-900" />
            <div className="ml-4">
              <p className="text-sm text-gray-600">Total Events</p>
              <p className="text-2xl font-bold text-gray-900">307</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
          <div className="flex items-center">
            <Users className="w-8 h-8 text-gray-900" />
            <div className="ml-4">
              <p className="text-sm text-gray-600">Total Attendees</p>
              <p className="text-2xl font-bold text-gray-900">15.2K</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
          <div className="flex items-center">
            <DollarSign className="w-8 h-8 text-gray-900" />
            <div className="ml-4">
              <p className="text-sm text-gray-600">Revenue</p>
              <p className="text-2xl font-bold text-gray-900">$201K</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
          <div className="flex items-center">
            <Activity className="w-8 h-8 text-gray-900" />
            <div className="ml-4">
              <p className="text-sm text-gray-600">Success Rate</p>
              <p className="text-2xl font-bold text-gray-900">94%</p>
            </div>
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Monthly Performance
          </h2>
          <div id="barLineChart" className="w-full h-64" />
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Event Status Distribution
          </h2>
          <div id="pieChart" className="w-full h-64" />
        </div>
      </div>
    </div>
  );
}
