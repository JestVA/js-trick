// Placeholder for React related documentation

/*
Let's practice props and mapping components on our todo list app!

I've created a js file with some todos data in it, which I'm imported into this file. (Normally this data would come from an API call, not a local file). 

Challenge: Using the array map method, render a child component for each todo item in the todosData array and pass the relevant data to it.
*/

import React from "react"
import TodoItem from "./TodoItem"
import todosData from "./todosData"

function App() {
    
    let arrayItemsCollection = todosData.map(item => <TodoItem  key={item.id} completed={item.completed} text={item.text}/>) 
    return (
        <div className="todo-list" >
           {arrayItemsCollection}
        </div>
    )
}

export default App


// todoitem.js

import React from "react"

function TodoItem(props) {
    return (
        <div className="todo-item">
            <input type="checkbox" checked={props.completed} />
            <p>{props.text}</p>
        </div>
    )
}

export default TodoItem

// todosdata.js 

const todosData = [
    {
        id: 1,
        text: "Take out the trash",
        completed: true
    },
    {
        id: 2,
        text: "Grocery shopping",
        completed: false
    },
    {
        id: 3,
        text: "Clean gecko tank",
        completed: false
    },
    {
        id: 4,
        text: "Mow lawn",
        completed: true
    },
    {
        id: 5,
        text: "Catch up on Arrested Development",
        completed: false
    }
]

export default todosData



/* 
 
 * My solution - refactor 3 x class components and fix 1 bug 
 
 */


import React from "react"
import ReactDOM from "react-dom"

// #1
class App extends React.Component {
    render() {
        return (
            <div>
                <Header username={"Dorin"} />
                <Greeting />
            </div>
        )
    }
}

// #2
class Header extends React.Component {
    render() {
        return (
            <header>
                <p>Welcome, {this.props.username}!</p>
            </header>
        )
    }
}

// #3
class Greeting extends React.Component {

  

render(){
    const date = new Date()
    const hours = date.getHours()
    let timeOfDay
    
    if (hours < 12) {
        timeOfDay = "morning"
    } else if (hours >= 12 && hours < 17) {
        timeOfDay = "afternoon"
    } else {
        timeOfDay = "night"
    }
    return (
        <h1>Good {timeOfDay} to you, sir or madam!</h1>
    )
}
}

ReactDOM.render(<App />, document.getElementById("root"))
