const package_colors = ['#1F6BF1', '#FF9900', '#67AC5B', '#FF8D7E', '#1F6BF1']

function generateRandomHexColors(count) {
  var hex_color;
  var colors = []; 
  for (var i = 0; i < count; i++) {
    hex_color = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
    colors.push(hex_color);
  }
  return colors;
}

function generateColors(count) {
  var hex_color;
  var colors = [];
  for (var i = 0; i < count; i++) {
    hex_color = '#1F6BF1'
    colors.push(hex_color);
  }
  return colors;
}

export const vulns_severity_count = (datas) => {
  let chartData = []
  const VUL_LABELS_CONF = { 'Unknown': '#A23631', 'Critical': '#DA3832', 'High': '#E89486', 'Medium': '#F7D98F', 'Low': '#529E53', 'Negligible': '#BCDBC3' };

  const LABELS = Object.keys(VUL_LABELS_CONF);
  return chartData = {
    labels: LABELS,
    datasets: [{
      data: LABELS.map(label => datas[label] ?? 0),
      backgroundColor: LABELS.map(label => VUL_LABELS_CONF[label] ?? '#EEE'),
      datalabels: {
        color: 'black'
      }
    }]
  }
}

export const layer_summary = (datas) => {
  let chartData = []
  let labels = []
  let val = []

  for (var i in datas) {
    let digits = (datas[i].full_size / 1000000).toFixed(2)
    let lable_variable = datas[i].layer_number
    labels.push(lable_variable)

    let val_variable = Math.round(digits * 100) / 100
    val.push(val_variable)

  }


  return chartData = {
    labels,
    datasets: [
      {
        data: val,
        // backgroundColor:generateRandomHexColors(val.length),
        backgroundColor: generateColors(val.length),
        datalabels: {
          color: 'black'
        }

      }
    ]
  }

}


export const package_license_count = (datas, count) => {
  let chartData =[]
  let labels = []
  let val = []
  let fixed_colors = []
  Object.entries(datas).forEach(([key, value]) => {
    labels.push(key);
    val.push(value);
});
if(count == 5){
labels = labels.slice(0,5)
val = val.slice(0, 5)
fixed_colors = package_colors
}
else{
  fixed_colors = generateRandomHexColors(val.length)
}
return chartData = {
labels, 
datasets: [
  {
   
    data: val,
    backgroundColor:package_colors,
    datalabels: {
      color: 'black',
      
    }
  }
]
}

}
