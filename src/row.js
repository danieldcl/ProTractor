import React from 'react';


export default (props)=>{
    return (<li>
        { props.row!==0? <button onClick={()=>props.moveItem('left', props.index, props.row)}>{'<'}</button> : ''}
            {props.task}
        {props.row!==3? <button onClick={()=>props.moveItem('right', props.index, props.row)}>{'>'}</button> :''}
    </li>)
}