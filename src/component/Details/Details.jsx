import React from 'react'
import {Card,CardHeader,CardContent,Typography} from '@material-ui/core';
import './DetailsStyle.css'
import useTransactions from '../../useTransactions';
import useStyle from './style'

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);




const Details = ({title}) => {
    const classes= useStyle();
    const {total, chartData}= useTransactions(title);
  return (
    <div>
        <Card className={title ==="Income"? classes.income : classes.expense}>
            <div id="title">
            <CardHeader  title={title}/>
            </div>
            
            <CardContent>
                <Typography variant='h5' >Rs {total}</Typography>
                 <Doughnut data={chartData} />
            </CardContent>

            
        </Card>
    </div>
  )
}

export default Details
