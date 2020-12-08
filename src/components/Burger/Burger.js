import classes from './Burger.module.css';
import PropTypes from 'prop-types';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {

    // console.log(Object.keys(props.ingredients));

    let transformedIngredients = Object.keys(props.ingredients)
        .map(igKey =>{

            // console.log([...Array(props.ingredients[igKey])]);

            return [...Array(props.ingredients[igKey])].map((_, i) => (
                <BurgerIngredient key={igKey + i} type={igKey} />
            ))
        }).reduce((arr, currEl) => {
            return arr.concat(currEl)
        }, []);

    if(transformedIngredients.length === 0){
        transformedIngredients = <p>Please start adding ingredients!</p>;
        // console.log(transformedIngredients)
    }

    return ( 
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
     );
}

burger.propTypes = {
  ingredients: PropTypes.shape({
    salad: PropTypes.number.isRequired,
    bacon: PropTypes.number.isRequired,
    cheese: PropTypes.number.isRequired,
    meat: PropTypes.number.isRequired
  }).isRequired
};
 
export default burger;

