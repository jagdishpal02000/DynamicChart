import { Doughnut, Line, Bar, Chart } from "react-chartjs-2";

import { Chart as ChartJS, registerables } from "chart.js";
ChartJS.register(...registerables);

function ChartBox({ TYPE, DATA, LABELS }) {
  console.log(TYPE);
  const data = {
    labels: LABELS,
    datasets: [
      {
        label: "My First Dataset",
        data: DATA,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 205, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(201, 203, 207, 0.2)"
        ],
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(54, 162, 235)",
          "rgb(153, 102, 255)",
          "rgb(201, 203, 207)"
        ],
        borderWidth: 1
      }
    ]
  };

  if (TYPE === "1") {
    return (
      <div style={{ width: "250px" }}>
        <Line data={data} />
      </div>
    );
  } else if (TYPE === "2") {
    return (
      <div style={{ width: "250px" }}>
        <Bar data={data} />
      </div>
    );
  } else if (TYPE === "3") {
    return (
      <div style={{ width: "250px" }}>
        <Doughnut data={data} />
      </div>
    );
  } else {
    return <></>;
  }
}

export default ChartBox;
