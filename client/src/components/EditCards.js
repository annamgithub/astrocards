import React, { Component } from "react";
import axios from "axios"
import EditForm from "./EditForm";

class EditCards extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            isEdited: false,
            value: '',
            flippedID: null,
            card_question: '',
            card_answer: ''
        }
    }

    handleClick(id) {
        console.log(id)
        this.setState({
            flippedID: id
        })
    }
    componentDidMount() {
        axios.get(`/api/cards.json`).then(res => {
            // console.log(res);
            this.setState({ data: res.data })
        })
    }

    render() {
        console.log(this.props.editID)
        return (
            <form className="card-container" >
                {this.state.data.map((datum, i) => {
                    if (this.props.editID === datum.id){
                    return <EditForm
                            key={i}
                            datum={datum}
                            id={datum.id}
                            card_question={datum.card_question}
                            card_answer={datum.card_answer}
                            editID={this.props.editID}
                        />
                    } 
                })}
            </form>
        )
    }
}

export default EditCards;

