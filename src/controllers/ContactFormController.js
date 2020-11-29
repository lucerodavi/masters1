import React from 'react'
import ContactFormView from '../views/ContactFormView'
import axios from 'axios'
import { CONFIG } from '../Constants';

class ContactFormController extends React.Component {
  state = {}
  
  render() {
    return (
      <ContactFormView>
        <name onChange={this.setName} />
        <submit onClick={this.submit} />
      
      </ContactFormView>
    )
  }

constructor(props) {
  super(props)

  this.state = {
    name: '',
    //results: ""
  }
}

setName = e => {
  this.setState({ [e.target.name]: e.target.value })
}



 submit = e => {
  e.preventDefault()
  console.log(this.state)

  axios
    .post(`${CONFIG.APIBaseUrl}`, this.state)
    
    .then(response => {
      console.log(response)
      this.setState({results: response.data.results})
      console.log(response.data.results)
    
    })
    .catch(error => {
      console.log(error)
    })
   
  this.props.history.push('/results',{
    name: this.state.name
   
    
  })
}

// state = {
//   data: ""
//   //isLoaded : false
// }

  // async componentDidMount(){
  //   const url = `${CONFIG.APIBaseUrl}`
  //   const response = await fetch(url);
  //   const data = await response.json();
  //   this.setState({results: data.results})
  //   console.log({results: data.results})
  // }
  
  componentDidMount(){
    const getResults = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(this.state)
    };
    fetch(`${CONFIG.APIBaseUrl}`, getResults)
        .then(response => response.json())
        .then(data => this.setState({results: data.results}));
  }


   
}
export default ContactFormController