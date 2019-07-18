import React, { Component } from 'react';

/// Modifica el componente para que se puedan agregar tareas

class App extends Component {

  constructor(props) {
    super(props);

    this.state = { value: "", tasks: ["Sacar la ropa","Hacer la cama","Leer un rato"] };

    this.keyPress = this.keyPress.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
 }

  keyPress(e){
      this.setState(({ tasks, value }) => ({
        value: "",
        tasks: [...tasks, value]
      }));
      e.preventDefault();
  };

  render() {
    return (
      <div className="wrapper">
        <div className="list">
          <h3>Por hacer:</h3>
          <ul className="todo">
            {this.state.tasks.map(tasks =>
              <li>
                {tasks}
              </li>
            )}
          </ul>
           <form onSubmit={this.keyPress}> 
             <input type="text"  id="new-task" value={this.state.value} onChange={this.handleChange} placeholder="Ingresa una tarea y oprime Enter" />
           </form>
        </div>
      </div>
    )
  }
}


export default App;
