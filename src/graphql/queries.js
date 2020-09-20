/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCocktail = /* GraphQL */ `
  query GetCocktail($id: ID!) {
    getCocktail(id: $id) {
      id
      name
      description
      ingredients
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
        ingredients
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
