import React, { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-regular-svg-icons';
function Display({first}) {
    return <Fragment>
        <div className={first ? 'active icon' : 'icon'}>
            <FontAwesomeIcon icon='times'/>
        </div>
        <div className={!first ? 'active icon' : 'icon'}>
            <FontAwesomeIcon icon={faCircle}/>
        </div>
    </Fragment>
}

export default Display;