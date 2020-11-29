import React from 'react'
import ResultsView from '../views/ResultsView'
import ContactFormController from '../controllers/ContactFormController'
import { render } from '@testing-library/react'

export default (props) => (
  <ResultsView>
   
   <message> Approximately {props.location.state.name} accurate </message>
    
  </ResultsView>
)

//render()


//{props.location.state.name} <message> Hello world {props.location.state.response} </message>