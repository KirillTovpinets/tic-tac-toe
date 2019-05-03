import React from 'react';

function Slot({ clickHandler, disable }){
    return (
        <div className={'slot ' + (disable ? 'disable' : '')} onClick={clickHandler}></div>
    )
}

export default Slot;