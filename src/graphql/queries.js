/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCocktail = /* GraphQL */ `
  query GetCocktail($id: ID!) {
    getCocktail(id: $id) {
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
export const listCocktails = /* GraphQL */ `
  query ListCocktails(
    $filter: ModelCocktailFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCocktails(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getDrink = /* GraphQL */ `
  query GetDrink($id: ID!) {
    getDrink(id: $id) {
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
export const listDrinks = /* GraphQL */ `
  query ListDrinks(
    $filter: ModelDrinkFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDrinks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
