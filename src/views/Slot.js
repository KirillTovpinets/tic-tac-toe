import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-regular-svg-icons';
function Slot({ clickHandler, disable,  first}){
    return (
        <div className={'slot ' + (disable ? 'disable' : '')} onClick={disable ? null : clickHandler}>
					{!first && disable && <FontAwesomeIcon icon='times'/> }
					{first && disable && <FontAwesomeIcon icon={faCircle}/> }
				</div>
    )
}

export default Slot;