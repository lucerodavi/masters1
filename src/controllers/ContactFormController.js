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
    name: ''
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
    })
    .catch(error => {
      console.log(error)
    })
  this.props.history.push('/results',{
    name: this.state.name
  })
  }



  // setName = (e) => {
  //   this.setState({
  //     name: e.target.value
  //   })
  // }

  // submit = () => {
  //   this.props.history.push('/results', {
  //    //name: this.state.name
  //   })
  // }
   

}

export default ContactFormController