import React, { Component } from "react";

class ToDoList extends Component {
    constructor() {
        super();
        this.state = {
            userInput: '',
            items: []
        }
    }

    onChange(event) {
        this.setState({
            userInput: event.target.value
        });
    }

    addToDo(event) {
        event.preventDefault();
        this.setState({
            userInput: '',
            items: [...this.state.items, this.state.userInput]
        });
    }

    deleteTodo(event) {
        event.preventDefault();
        const array = this.state.items;
        const index = array.indexOf(event.target.value);
        array.splice(index, 1);
        this.setState({
            items: array
        });
    }


    renderToDos() {
        return this.state.items.map((item) => {
            return (
                <div className="list-group-item" key={item}>
                    {item} | <button onClick={this.deleteTodo.bind(this)}>X</button>
                </div>
            );
        });
    }

    render() {
        return (
            <div>
                <h1 align="center">Ma ToDo List</h1>
                <form className="form-row align-items-center">
                    <input
                        value={this.state.userInput}
                        type="text"
                        placeholder="rajoutez votre texte ici"
                        onChange={this.onChange.bind(this)}
                        className="form-control mb-2"
                    />
                    <button
                        className="btn btn-primary" onClick={this.addToDo.bind(this)}>Ajouter</button>
                </form>
                <div className="list-group">
                    {this.renderToDos()}
                </div>
            </div>
        )
    }
}

export default ToDoList;