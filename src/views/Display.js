import { faCircle } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Fragment } from 'react';
function Display({ first }) {
  return (
    <Fragment>
      <div className={first ? 'active icon' : 'icon'}>
        <FontAwesomeIcon icon="times" /> {first}
      </div>
      <div className={!first ? 'active icon' : 'icon'}>
        <FontAwesomeIcon icon={faCircle} />
      </div>
    </Fragment>
  );
}

export default Display;
