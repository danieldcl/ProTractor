import React from 'react';
import Row from './row';

export default class Layout extends React.Component{
    constructor(props){
        super(props);
        this.addNew = this.addNew.bind(this)
    }

    addNew(){
        const t = window.prompt("New item");
        if(t){
            this.props.addNew(t, this.props.row);
        }
    }

    render(){
        const items = this.props.task.items.map(
            (i, k) => <Row key={k} task={i} row={this.props.row} moveItem={this.props.moveItem} index={k}/>
        )
        return (
            <div className="columnLayout">
                <h3 className="title">{this.props.task.title}</h3>
                <ul className="items">
                    {items}
                    <li>
                        <button onClick={this.addNew}>+</button>
                    </li>
                </ul>
            </div>
        )
    }
}