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
            <div className="col-sm-6 col-md-3">
                <h3 className={`title border-bottom border-warning ${this.props.color} `}>{this.props.task.title}</h3>
                <ul className="items list-group bg-light-yellow pr-1 pl-1">
                    {items}
                    <li>
                        <button className="btn btn-dark btn-xsm" onClick={this.addNew}>+</button>
                    </li>
                </ul>
            </div>
        )
    }
}