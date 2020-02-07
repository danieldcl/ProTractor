import React from 'react';
import './App.css';
import Header from './header';
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
    this.getItems = this.getItems.bind(this);
    this.clearItems = this.clearItems.bind(this);
  }

  componentDidMount(){
    this.getItems()
  }

  getItems(){
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    if (tasks) {
      this.setState({tasks});
    }
  }

  clearItems(){
    const r = window.confirm("Do you want to remove all the data? This action is not revertable.")
        if (r) {
          this.setState({tasks:[
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
          ]});
            localStorage.removeItem('tasks');
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
    // const tasks = this.state.tasks.map(
    //   (r, k ) => <Layout key={k} task={r} row={k} moveItem={this.moveItem} addNew={this.addNew}/>
    // )
    return (
      <div className="App">
        <Header clearItems={this.clearItems}/>
        <main className="row">
          <Layout color='bg-light-green' task={this.state.tasks[0]} row={0} moveItem={this.moveItem} addNew={this.addNew}/>
          <Layout color='bg-light-blue' task={this.state.tasks[1]} row={1} moveItem={this.moveItem} addNew={this.addNew}/>
          <Layout color='bg-light-purple' task={this.state.tasks[2]} row={2} moveItem={this.moveItem} addNew={this.addNew}/>
          <Layout color='bg-light-grey' task={this.state.tasks[3]} row={3} moveItem={this.moveItem} addNew={this.addNew}/>
        </main>
      </div>
    );
  }
}

export default App;
