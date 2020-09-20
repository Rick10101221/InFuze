async function getMoviesFromApi() {
    try {
      let response = await fetch(
        'https://www.thecocktaildb.com/api/json/v1/1/random.php',
      );
      let responseJson = await response.json();
      console.log(responseJson);
      return responseJson;
    } catch (error) {
      console.error(error);
    }
  }