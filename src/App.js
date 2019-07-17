import React, { Component } from 'react';

/// Modifica el componente para que se puedan agregar tareas

class App extends Component {

  constructor(props) {
    super(props);

    this.state = { value: '', cmds: [] };

    this.keyPress = this.keyPress.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
 }

  keyPress(e){
    //const keyCode = event.keyCode || event.which;
    if(e.keyCode === 13){
      this.setState(({ cmds, value }) => ({
        value: '',
        cmds: [...cmds, value]
      }));
      e.preventDefault()
    }
  };

  render() {
    return (
      <div className="wrapper">
        <div className="list">
          <h3>Por hacer:</h3>
          <ul className="todo">
            <li>Sacar la ropa</li>
            <li>Hacer la cama</li>
            <li>Leer un rato</li>
            {this.state.cmds.map(cmd =>
              <li>
                {cmd}
              </li>
            )}
          </ul>
           <form>
             <input type="text"  id="new-task" value={this.state.value} onKeyDown={this.keyPress} onChange={this.handleChange} placeholder="Ingresa una tarea y oprime Enter" />
           </form>
        </div>
      </div>
    )
  }
}


export default App;
