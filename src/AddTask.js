import React, { Component } from 'react'

class  AddTask extends Component {

    state = {
        content : ""
    }

    handleChange = (e) => {
        this.setState({
            content : e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if ( this.state.content.length !== 0) {
            this.props.modifyTodos(this.state)
            this.setState({
                content:""
             })
        }
    }

    render(){
        return(
            <div>
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="text">Add New Task</label> 
                <input type="text" onChange = {this.handleChange } value={this.state.content} />
               
            </form>
            </div>
        )
    }
}
export default AddTask