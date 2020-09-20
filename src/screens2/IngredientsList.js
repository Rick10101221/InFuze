import React, { Component } from 'react';

class IngredientsList extends Component {
   
    constructor(props) {
        super(props);

        this.state = {
            ingredients: []
        }
    }

    fetchIngredients = (ingredientName) => {
        fetch('https://some-api.com/harry-potter')
        .then((response) => response.json())
        .then(ingredient => {
            this.setState(state => {
                const ingredients = state.ingredients.concat(ingredient);

                return {
                    ingredients
                }
            });
        });
    }
    
    render() {
        return (
        <>
            <button onClick={this.fetchIngredients}>Get Ingredient</button>
            {this.state.ingredients.length > 0 && (
                <ul>
                    {this.state.ingredients.map((ingredient) => (
                        <li key={}>{ingredient}</li>
                    ))}
                </ul>
            )}
            
        </>
        )
    }
}