import React, { Component } from 'react'
import '../App.css'
import axios from 'axios'
import { Redirect } from 'react-router-dom';
import EditCards from './EditCards'

class ShowAndEdit extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            isDeleted: false,
            isFlipped: false,
            editID: null
        }
    }

    onClickEdit = (id) => {
      console.log(id)
      this.setState(prevState => ({ 
        isFlipped: !prevState.isFlipped,
        editID: id
      }))
    }

    handleDelete = (id) => {
        axios.delete(`http://localhost:3001/api/cards/${id}`, { params: { id: id } }).then(response => {
        console.log(response);
      })
      this.setState(prevState => ({
        isDeleted: !prevState.isDeleted
    }))

    }

componentDidMount() {
    axios.get(`http://localhost:3001/api/cards.json`).then(res => {
      // console.log(res);
      this.setState({ data: res.data })
    })
  }

render() {
  const isFlipped = this.state.isFlipped
    if (isFlipped === true) {
      return <EditCards 
        editID={this.state.editID}
      />
    } 
  
  const isDeleted = this.state.isDeleted;
      if (isDeleted === true) {
        window.location.reload();
          return <Redirect to="/create" />
      }
    return (
        <div className="card-container">
            {this.state.data.map((datum, id) => {
                    return <div key={datum.id} id={id} className="edit-mode">
                        <button className="button" onClick={() => this.onClickEdit(datum.id)}>Edit</button>
                        <button className="button" onClick={() => this.handleDelete(datum.id)}> Delete</button>
                        <h3>Q: {datum.card_question}</h3>
                        <p>A: {datum.card_answer}</p>

                        
                    </div>   
                })}
        </div>
    )
}
}


export default ShowAndEdit;


