This project was created for [Silly Hacks](https://sillyhacks.online/).

This app is created by
[Onkar Setia](https://github.com/onkar2323)
[Ananya Mishra](https://github.com/ananyamisra5)
[Rickesh Khilnani](https://github.com/Rick10101221)
[Rodrigo Gaona](https://github.com/Gaonuk) 

## Steps to run project

In the project directory, you can run:

### `yarn` or `npm install`

This will add the dependencies required to run the project.

### `yarn start` or `npm start`

This will start the project.

## add custom fonts

1. Add Fonts to an "assets/fonts" folder in the root of your project.
2. Add rnpm to package.json providing the path to the font files:

```
"rnpm": {
  "assets": [
    "./assets/fonts/"
  ]
}
```

3. Run react-native link

##### This should add your custom fonts in the react native project.

