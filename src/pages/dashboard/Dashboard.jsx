import React from 'react'
import { Chart as ChartJS } from "chart.js/auto";
import { Doughnut, Bar, Line } from "react-chartjs-2";
import  sourceData from './sourceData.json'
import AdminLayout from '../../components/layout/AdminLayout';

function Dashboard() {
  return (
    <AdminLayout title ="Dashboard">
      <>
        <div className="row d-flex justify-content-center align-content-center">
          <div className="col">
            <div className="dataCard categoryCard">
              <Bar
                data={{
                  labels: sourceData.map((data) => data.label),
                  datasets: [
                    {
                      label: "revenue",
                      data: sourceData.map((data) => data.value),
                      backgroundColor: [
                        "rgba(43, 63, 229, 0.8)",
                        "rgba(250, 192, 19, 0.8)",
                        "rgba(253, 135, 135, 0.8)",
                      ],
                      borderRadius: 5,
                    },
                  ],
                }}
              />
            </div>
          </div>

          <div className="col">
            <div className="dataCard categoryCard">
              <Doughnut
                data={{
                  labels: sourceData.map((data) => data.label),
                  datasets: [
                    {
                      label: "revenue",
                      data: sourceData.map((data) => data.value),
                      backgroundColor: [
                        "rgba(43, 63, 229, 0.8)",
                        "rgba(250, 192, 19, 0.8)",
                        "rgba(253, 135, 135, 0.8)",
                      ],
                    },
                  ],
                }}
              />
            </div>
          </div>

          {/* closing div */}
        </div>
      </>
    </AdminLayout>
  );
}

export default Dashboard

