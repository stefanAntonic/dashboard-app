import { faker } from "@faker-js/faker";

const labels = ["Mon", "Tue", "Wen", "Thu", "Fri", "Sat", "San"];
export const lineChartThingsData = {
  labels,
  datasets: [
    {
      label: "Mobile",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 401 })),
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgb(255, 99, 132)",
      yAxisID: "y",
    },
    {
      label: "Desktop",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 611 })),
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgb(53, 162, 235)",
      yAxisID: "y",
    },
    {
      label: "Tablet",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 221 })),
      borderColor: "rgb(94, 63, 190)",
      backgroundColor: "rgb(94, 63, 190)",
      yAxisID: "y",
    },
  ],
};

export const lineChartPriceData = {
  labels,
  datasets: [
  
    {
      label: "Desktop",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 811 })),
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgb(53, 162, 235)",
      yAxisID: "y",
    },
    {
      label: "Tablet",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 421 })),
      borderColor: "rgb(94, 63, 190)",
      backgroundColor: "rgb(94, 63, 190)",
      yAxisID: "y",
    },
    {
        label: "Mobile",
        data: labels.map(() => faker.datatype.number({ min: 0, max: 601 })),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgb(255, 99, 132)",
        yAxisID: "y",
      },
  ],
};
