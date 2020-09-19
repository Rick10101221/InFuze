/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCocktail = /* GraphQL */ `
  subscription OnCreateCocktail {
    onCreateCocktail {
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
export const onUpdateCocktail = /* GraphQL */ `
  subscription OnUpdateCocktail {
    onUpdateCocktail {
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
export const onDeleteCocktail = /* GraphQL */ `
  subscription OnDeleteCocktail {
    onDeleteCocktail {
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
export const onCreateDrink = /* GraphQL */ `
  subscription OnCreateDrink {
    onCreateDrink {
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
export const onUpdateDrink = /* GraphQL */ `
  subscription OnUpdateDrink {
    onUpdateDrink {
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
export const onDeleteDrink = /* GraphQL */ `
  subscription OnDeleteDrink {
    onDeleteDrink {
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
