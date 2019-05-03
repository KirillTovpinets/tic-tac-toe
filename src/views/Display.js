import React, { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Display({first}) {
    return <Fragment>
        <div className={first ? 'active icon' : 'icon'}>
            <FontAwesomeIcon icon='times'/>
        </div>
        <div className={!first ? 'active icon' : 'icon'}>
            <FontAwesomeIcon icon='circle'/>
        </div>
    </Fragment>
}

export default Display;