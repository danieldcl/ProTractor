import React from 'react';

export default class Header extends React.Component{

    render(){
        return (
            <nav className="navbar navbar-dark bg-dark justify-content-between">
                <div className="navbar-brand">ProTractor</div>
                <button onClick={()=>this.props.clearItems()} className="btn btn-outline-warning my-2 my-sm-0">Clear All</button>
            </nav>
        )
    }

}