import React from 'react';
import './App.css';
import Layout from './layout';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      tasks: [
        {
          title:'Done',
          items: []
        },
        {
          title:'In Progress',
          items: []
        },
        {
          title:'Selected',
          items: []
        },
        {
          title:'Planning',
          items: []
        }
      ]
    }
    this.addNew = this.addNew.bind(this);
    this.moveItem = this.moveItem.bind(this);
  }

  componentDidMount(){
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    if (tasks) {
      this.setState({tasks});
    }
  }

  moveItem(direction,index,row){
    if(direction==='left'){
      if(row>0){
        const tasks = this.state.tasks.concat();
        const item = tasks[row].items.splice(index,1);
        tasks[row-1].items.push(item);
        this.setState({tasks});
      }
    }
    else{
      if(row<this.state.tasks.length-1){
        const tasks = this.state.tasks.concat();
        const item = tasks[row].items.splice(index,1);
        tasks[row+1].items.push(item);
        this.setState({tasks});
      }
    }
  }

  addNew(t, row){
    const tasks = this.state.tasks.concat([]);
    tasks[row].items.push(t);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    this.setState({tasks});
  }

  render(){
    const tasks = this.state.tasks.map(
      (r, k ) => <Layout key={k} task={r} row={k} moveItem={this.moveItem} addNew={this.addNew}/>
    )
    return (
      <div className="App">
        <header className="App-header">
        ProTractor
        </header>
        <main>
          {tasks}
        </main>
      </div>
    );
  }
}

export default App;
