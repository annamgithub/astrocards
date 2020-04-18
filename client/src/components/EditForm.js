import React, { Component } from "react";
import axios from 'axios'
import { Redirect } from 'react-router-dom'

class EditForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            card_question: this.props.card_question,
            card_answer: this.props.card_answer,
            isEdited: false
        }
    }

    onChange = (e) => {
        const element = e.target
        console.log(element.value)
        const { name, value } = element
        this.setState({
            [name]: value
        })
    }

    handleSubmit = async () => {
        console.log('here')
        try {
            let response = await axios.put(`http://localhost:3001/api/cards/${this.props.id}`, {
                card_question: this.state.card_question,
                card_answer: this.state.card_answer
            })
            console.log(response)
            this.setState(prevState => ({
                ...prevState,
                isEdited: true
            }))
        } catch {
        }
    }


    render() {
        const isEdited = this.state.isEdited;
        if (isEdited === true) {
            return <Redirect to="/" />
        }
        return (
            <div key={this.props.datum.id} className="edit-mode">
                <label htmlFor="card-question">Card Question: </label>
                <input type="text" name="card_question"  value={this.state.card_question} onChange={this.onChange} />
                <br />

                <label htmlFor="card-answer">Card Answer: </label>
                <input type="text" name="card_answer" value={this.state.card_answer} onChange={this.onChange} />
                <br />

                <button className="button" type="button" onClick={this.handleSubmit}>Submit Edits</button>
            </div>

        )
    }
}

export default EditForm;



