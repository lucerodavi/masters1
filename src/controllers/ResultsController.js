import React from 'react'
import ResultsView from '../views/ResultsView'

export default (props) => (
  <ResultsView>
    <message> Hi there! {props.location.state.name} </message>
  </ResultsView>
)
//{props.location.state.article}