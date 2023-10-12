import React,{useEffect, useRef} from 'react'
import {Grid} from '@material-ui/core'
import Main from './component/Main/Main'
import  Details  from './component/Details/Details'
import useStyles from './styles';

import {
  PushToTalkButton,
  BigTranscript,
  IntroPopup,
  ErrorPanel
} from "@speechly/react-ui";
import { ExplicitRounded } from '@material-ui/icons';
import Header from './component/Header/Header';

const App = () => {
  const classes = useStyles();
 

  return (
    <div>
      <Header/>
     <Grid className={classes.grid} container spacing ={0} alignItems="center" justify="center" style={{height:'100vh'}}>

      <Grid item xs={12} sm={4} className={classes.mobile}>
        <Details title="Income" />
      </Grid>

      <Grid  item xs={12} sm={3} className={classes.main}>
       <Main/>
      </Grid>

      <Grid item xs={12} sm={4} className={classes.desktop}>
        <Details title="Income" />
      </Grid>

      <Grid item xs={12} sm={4} className={classes.last}>
        <Details title="Expense"/>
      </Grid>

        
     </Grid>
     <div className="App">
     
      <PushToTalkButton placement="bottom" captureKey=" " />
  
      <IntroPopup />
    </div>
    </div>
  )
}

export default App
