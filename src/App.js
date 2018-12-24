import React, { Component } from 'react';
import List from './List';
import './App.css';

class App extends Component {
  state = {
    toDos: [],
    nextToDo: '',
    
  }
  
  deleteItem = (index) => {
    this.setState({
      toDos:this.state.toDos.filter((_, i)=> (i !== index))
    });
  }

  addToDo = () => {
    this.setState({toDos: this.state.toDos.length ? null : this.state.toDos.concat('Drink beer so we can code')})
  }
  
  componentDidMount(){
    console.log('component has mounted!')
    this.addToDo()
  }

  setNextToDo = (event) => {
    this.setState({ nextToDo: event.target.value })
    console.log(event.target)
  }

  submitToDo = (event) =>
    this.setState({
      nextToDo: '',
      toDos: (this.state.nextToDo) ?  this.state.toDos : [...this.state.toDos, this.state.nextToDo] 
    });
  
  render() {
    return (
      <div>
     
        <input value={this.state.nextToDo}
               onChange={this.setNextToDo}/>
        
        <button onClick={this.submitToDo}>Submit</button>
        <List toDos={this.state.toDos}
              deleteItem={this.deleteItem}/>
      </div>
    );
  }
}

export default App;
