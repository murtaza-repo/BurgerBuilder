import React from 'react';
import PropTypes from 'prop-types';

import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' }
];

const BuildControls = props => (
  <div className={classes.BuildControls}>
    <p>
      Price: <strong>Rs. {props.price.toFixed(2)}</strong>
    </p>
    <div className="container">
        <div className="row">
          {controls.map(ctrl => (
        
            <BuildControl
              key={ctrl.label}
              label={ctrl.label}
              added={props.ingredientAdded.bind(this, ctrl.type)}
              removed={props.ingredientRemoved.bind(this, ctrl.type)}
              disabled={props.disabled[ctrl.type]}
            />
              
          ))}
        </div>
    </div>
    
    <div style={{display: 'inline-block'}}>
      <button
        className={classes.OrderButton}
        onClick={props.default}
        style={{float: "left", marginRight: '5px'}}
      >
        Default
      </button>
    
      <button
        className={classes.OrderButton}
        disabled={!props.purchasable}
        onClick={props.ordered}
        style={{float: "right"}}
      >
        ORDER NOW
      </button>
    </div>
  </div>
);

BuildControls.propTypes = {
  ingredientAdded: PropTypes.func.isRequired,
  ingredientRemoved: PropTypes.func.isRequired,
  disabled: PropTypes.shape({
    salad: PropTypes.bool.isRequired,
    bacon: PropTypes.bool.isRequired,
    cheese: PropTypes.bool.isRequired,
    meat: PropTypes.bool.isRequired
  }).isRequired,
  price: PropTypes.number.isRequired,
  purchasable: PropTypes.bool.isRequired,
  ordered: PropTypes.func.isRequired
};

export default BuildControls;
