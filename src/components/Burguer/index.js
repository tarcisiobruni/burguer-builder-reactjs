import React from 'react'
import BurguerIngredient from './BurguerIngredient'
import styles from './burguer.module.css'

export default function Burguer(props) {
    let transformedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                return <BurguerIngredient key={igKey + i} type={igKey} />
            })
        })
        .reduce((previousValue,currentValue) => {
            return previousValue.concat(currentValue)
        },[])
    if(transformedIngredients.length === 0 ){
        transformedIngredients = <p>Please add some ingredients</p>
    }
    return (
        <div className={styles.Burguer}>
            <BurguerIngredient type="bread-top" />
            {transformedIngredients}
            <BurguerIngredient type="bread-bottom" />
        </div>
    );
} 