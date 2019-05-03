import React from 'react';

function Slot({clickHandler}){
    return (
        <div className='slot' onClick={clickHandler}></div>
    )
}

export default Slot;