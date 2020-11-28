import React from 'react'
import ResultsView from '../views/ResultsView'

export default (props) => (
  <ResultsView>
    <message> Hello world {props.location.state.name}</message>
  </ResultsView>
)
//{props.location.state.name}