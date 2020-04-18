import React, { Component } from 'react'
import '../App.css'
import axios from 'axios'


class ShowCards extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: [],
      flippedID: null
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(id) {
    console.log(id)
    this.setState({
      flippedID: id
    })
  }

  componentDidMount() {
    axios.get(`http://localhost:3001/api/cards.json`).then(res => {
      // console.log(res);
      this.setState({ data: res.data })
      // console.log(res.data)
    })
  }
  render() {
    return (
      <div className="card-container">
        {this.state.data.map((datum, id) => {
          if (this.state.flippedID === datum.id) {
            return <div key={datum.id} id={id} className="show-card-answers">
              <h3>{datum.card_answer}</h3>
              </div>
          } else {
            return <div key={datum.id} id={id} className="show-cards" onClick={() => this.handleClick(datum.id)}>
              <h3>{datum.card_question}</h3>
              </div>
          }})}
      </div>
    )
  }
}


export default ShowCards;

  
