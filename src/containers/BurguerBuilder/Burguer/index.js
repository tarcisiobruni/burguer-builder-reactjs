import React, { Component } from 'react'
import Auxiliary from '../../../hoc/Auxiliary'
import Burguer from '../../../components/Burguer'

export default class BurguerBuilder extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            ingredients: {
                salad: 0,
                bacon: 0,
                meat: 0,
                cheese: 0
            }
        }
    }
    render() {
        return (
            <Auxiliary>
                <Burguer ingredients={this.state.ingredients} />
                <div>Burguer Controls</div>
            </Auxiliary>
        )
    }
}