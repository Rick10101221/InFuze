/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createCocktail = /* GraphQL */ `
  mutation CreateCocktail(
    $input: CreateCocktailInput!
    $condition: ModelCocktailConditionInput
  ) {
    createCocktail(input: $input, condition: $condition) {
      id
      name
      description
      drinks {
        id
        name
        description
        alcohol
        cocktails {
          id
          name
          description
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateCocktail = /* GraphQL */ `
  mutation UpdateCocktail(
    $input: UpdateCocktailInput!
    $condition: ModelCocktailConditionInput
  ) {
    updateCocktail(input: $input, condition: $condition) {
      id
      name
      description
      drinks {
        id
        name
        description
        alcohol
        cocktails {
          id
          name
          description
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteCocktail = /* GraphQL */ `
  mutation DeleteCocktail(
    $input: DeleteCocktailInput!
    $condition: ModelCocktailConditionInput
  ) {
    deleteCocktail(input: $input, condition: $condition) {
      id
      name
      description
      drinks {
        id
        name
        description
        alcohol
        cocktails {
          id
          name
          description
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const createDrink = /* GraphQL */ `
  mutation CreateDrink(
    $input: CreateDrinkInput!
    $condition: ModelDrinkConditionInput
  ) {
    createDrink(input: $input, condition: $condition) {
      id
      name
      description
      alcohol
      cocktails {
        id
        name
        description
        drinks {
          id
          name
          description
          alcohol
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateDrink = /* GraphQL */ `
  mutation UpdateDrink(
    $input: UpdateDrinkInput!
    $condition: ModelDrinkConditionInput
  ) {
    updateDrink(input: $input, condition: $condition) {
      id
      name
      description
      alcohol
      cocktails {
        id
        name
        description
        drinks {
          id
          name
          description
          alcohol
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteDrink = /* GraphQL */ `
  mutation DeleteDrink(
    $input: DeleteDrinkInput!
    $condition: ModelDrinkConditionInput
  ) {
    deleteDrink(input: $input, condition: $condition) {
      id
      name
      description
      alcohol
      cocktails {
        id
        name
        description
        drinks {
          id
          name
          description
          alcohol
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
