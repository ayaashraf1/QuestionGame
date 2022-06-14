import React,{useState} from 'react';
import Chart from 'react-apexcharts';

export const PieComponent = ({seriesData,labelsData}) => {

   const [options,] = useState({
       labels:labelsData
   });
   const [series,] = useState(seriesData);

    return (
      <div className="donut">
        <Chart options={options} series={series} type="pie" width="380" />
      </div>
    );
}

export default PieComponent;