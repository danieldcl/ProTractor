import React from 'react';


export default (props)=>{
    return (<li className="d-flex justify-content-between border-bottom border-warning">
        <button type="button" className={`btn btn-dark btn-xsm ${props.row===0? 'invisible':''}`} onClick={()=>props.moveItem('left', props.index, props.row)}>{'<'}</button>
            <span className="text-truncate">{props.task}</span>
        <button type="button" className={`btn btn-dark btn-xsm ${props.row===3? 'invisible':''}`} onClick={()=>props.moveItem('right', props.index, props.row)}>{'>'}</button>
    </li>)
}