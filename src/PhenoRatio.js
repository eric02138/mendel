import React from 'react';
import CanvasJSReact from './canvasjs.react';
let CanvasJS = CanvasJSReact.CanvasJS;
let CanvasJSChart = CanvasJSReact.CanvasJSChart;

class PhenoRatio extends React.Component {
  render() {
  let count_yellow = 0;
  let count_green = 0;
  for (let item of this.props.offspring) {
    if (item.indexOf("Y") > -1) {
        count_yellow++;
    } else {
        count_green++;
    }
  }
  CanvasJS.addColorSet("yellowGreen",
            [
            "#EFCE22",
            "#65B14F",
            ]);
    const options = {
      colorSet: "yellowGreen",
      backgroundColor: "#D3D3D3",
      width: 500,
      height: 350,
     axisX:{
       labelFontWeight: "bold",
       lineThickness: 3,
       tickThickness: 3
     },
      axisY: {
        gridThickness: 0,
        maximum: 4,
        minimum: 0,
        labelFontWeight: "bold",
        lineThickness: 3,
        tickThickness: 3
      },
      data: [{
                type: "column",
                dataPoints: [
                    { label: "Yellow",  y: count_yellow  },
                    { label: "Green", y: count_green  },
                ]
       }]
   }

   return (
      <div>
        <CanvasJSChart
        options = {options} />
      </div>
    );
  }
}

export default PhenoRatio;