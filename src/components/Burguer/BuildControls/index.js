import React from 'react';
import styles from './build-controls.module.css'
import BuildControl from './BuildControl'

const controls = [
    {label: 'Salad', type: 'salad'},
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' }
]

export default function BuildControls(props) {
    const {ingredientAdded, ordered, ingredientRemoved, price,disabled, purchasable} = props;
    return (
        <div className={styles.BuildControls}>
            <p>Current Price: R$ <strong>{price.toFixed(2)}</strong></p>
            {
                controls.map(ctrl => (
                    <BuildControl
                    added={() =>ingredientAdded(ctrl.type)}
                    removed={() =>ingredientRemoved(ctrl.type)}
                    key={ctrl.label}
                    disable={disabled[ctrl.type]}
                    label={ctrl.label} />
                ))
            }
            <button onClick={ordered} disabled={!purchasable} className={styles.OrderButton}>ORDER NOW</button>
        </div>
    )
}

