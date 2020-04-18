import React, { Component } from "react";
import axios from "axios"
import { Redirect } from 'react-router-dom';

class CardMakerForm extends Component {
  constructor(props) {
      super(props)
      this.state = {
          card_question: "",
          card_answer: "",
          isCreated: false
      }
      this.onSubmit = this.onSubmit.bind(this)
  }

  onChange = (e) => {
      const element = e.target
      console.log(element)
      const { name, value } = element
      this.setState({
          [name]: value
      })
  }

  async onSubmit(e) {
      e.preventDefault()
      let response = await axios.post(`http://localhost:3001/api/cards`, this.state)
      console.log(response)
      this.setState(prevState => ({
          isCreated: !prevState.isCreated
      }))
  }

  render() {
      const isCreated = this.state.isCreated;
      if (isCreated === true) {
        window.location.reload();
          return <Redirect to="/" />
      }
      return (
          <form onChange={this.onChange} className="create-card-form">       
              <label htmlFor="card_question">Card Question: </label>
              <input type="text" name="card_question" defaultValue={this.state.card_question} required />
              <br/>

              <label htmlFor="card_answer">Card Answer: </label>
              <input type="text" name="card_answer" defaultValue={this.state.card_answer} required />
              <br/>

              <button className="button" type="button" onClick={this.onSubmit}>Create New Flashcard</button>
          </form>
      )
  }
}


export default CardMakerForm;