# Retro Board (demo app)

## Application features

- Create a new Retro Boards with Start, Stop and Continue columns
- View previous Retro Boards
- Add, edit and remove notes within a column 
- Sort notes via drag and drop
- Chnages are saved to localstorage.

## Running the app

```
npm install
npm start
```

The app will run on http://localhost:9000/

## Tech stack

- [Babel](https://babeljs.io/)
- [React](https://facebook.github.io/react/)
- [Redux](http://redux.js.org/)
- [Webpack](https://webpack.github.io/)
- [React Router](https://github.com/ReactTraining/react-router)
- [React Bootstrap](https://react-bootstrap.github.io/)
- [React Drag and Drop](https://gaearon.github.io/react-dnd/)
- Testing
    - Karma
    - Mocha
    - Expect
    - PhantomJS
    - [Enzyme](https://github.com/airbnb/enzyme) for shallow rendering 

## TODOs

- CSS tidy up
- Use CSS preprocessor
- Swap out Boostrap for MaterialUI
- Drag and drop, across columns
- Add back-end Node API and MongoDB persistence
- Allow multiple users to access the same Retro board
- Add Websockets for realtime interaction
- Add ability to up/down vote a note
- Use https://github.com/facebookincubator/create-react-app
- Server side rendering
