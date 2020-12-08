import React from 'react';
import PropTypes from 'prop-types';

import classes from './BuildControl.module.css';

const BuildControl = props => (
  <div className="col-md-3">
    <div className={classes.BuildControl}>
      <div className={classes.Label}>{props.label}:</div>
      <button
        className={classes.Less}
        onClick={props.removed}
        disabled={props.disabled}
      >
        Less
      </button>
      <button className={classes.More} 
              onClick={props.added}
      >
        More
      </button>
    </div>
  </div>
);

BuildControl.propTypes = {
  added: PropTypes.func.isRequired,
  removed: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired
};

export default BuildControl;