// Assuming you have already fetched the data from the API
// fetch('https://your-api-url.com')
//  .then(response => response.json())
//  .then(data => {
//      //و دریافت هشت هوش و هشت  جواب تست و نام وشناسه کاربر
//     const dataFromAPI = [];
//     const totalEntries = data.length;
//     const maxEntries = Math.min(totalEntries, 8);
//     const id =data.id;
//      const fname =data.name;
//     for (let i = 0; i < maxEntries; i++) {
//       const key = data[i].key;
//       const valu = data[i].valu;
//       dataFromAPI.push({ label:key, value:valu });
//     }

//     console.log(dataFromAPI);
//     console.log(id);
//     console.log(fname);
//  })
//  .catch(error => {
//     console.error('Error fetching data:', error);
//  });

//insert name
//example
let fname = "alirezaw";
let id = "1212hh";

document.querySelector(".name").innerHTML = fname;
document.querySelector(".idname").innerHTML = id;

//chart create

//  // This is the data from the API
const dataFromAPI = [
  { label: "A", value: 50 },
  { label: "B", value: 20 },
  { label: "C", value: 30 },
  { label: "D", value: 40 },
  { label: "E", value: 50 },
  { label: "F", value: 10 },
  { label: "G", value: 30 },
  { label: "H", value: 50 },
];

// Extract the labels and data values from the API response
const labels = dataFromAPI.map((item) => item.label);
const values = dataFromAPI.map((item) => item.value);

// Create the bar chart
var ctx = document.getElementById("myChart").getContext("2d");
var myChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: labels,
    datasets: [
      {
        label: "پاسخ آزمون",
        data: values,
        backgroundColor: "#550040",
        borderColor: "rgba(0,0,0, 1)",
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});


let testmath = document.querySelector(".tsms").innerHTML;
let testinter = document.querySelector(".tsin").innerHTML;
let testmusic = document.querySelector(".tsmu").innerHTML;
let testnaturalist = document.querySelector(".tsna").innerHTML;
let testphisical = document.querySelector(".tsphi").innerHTML;
let testvisual = document.querySelector(".tsvi").innerHTML;
let testverbal = document.querySelector(".tsver").innerHTML;
let testinbet = document.querySelector(".tsinbet").innerHTML;