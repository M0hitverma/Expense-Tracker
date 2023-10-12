import React,{useContext} from 'react';
import {Card,CardHeader,CardContent,Typography,Grid,Divider} from '@material-ui/core'
import useStyles from './styles'
import { ExpenseTrackerContext } from '../../context/context';

import { DriveEta } from '@material-ui/icons';
import Form from './Form/Form';
import List from './List/List'
import InfoCard from '../InfoCard';
const Main = ()=>{
    const classes = useStyles();
    const {balance} = useContext(ExpenseTrackerContext);
    return (

        <div>
            <Card className={classes.root}>
                
                <CardContent>
                    <Typography align='center' variant='h5'>Total Balance Rs.{balance}</Typography>
                    <Typography variant='subtitle1' style={{ lineHeight:'1.5rem',marginTop:'20px' }}>
                       <InfoCard/>
                    </Typography>
                    <Divider/>
                   <Form/>
                </CardContent>
                <CardContent className={classes.CardContent}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                         <List />
                        </Grid>

                    </Grid>

                </CardContent>
            </Card>

        </div>
    )

}
export default Main;