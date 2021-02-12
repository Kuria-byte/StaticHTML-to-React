# Static- toReact
![image](https://user-images.githubusercontent.com/61579772/107756107-afe05480-6d5e-11eb-96fd-3f4a3f1dcf44.png)

## About
If you ever wanted to use a static html template for your react app, I present a proven way to do so. By breaking down a huge HTML file to managable react components that you can reuse
- https://static-html-to-react-1xif84npb.vercel.app/

## Note Worthy📐
- Where to place your styling ? Import all styling in the app.js
- Where to place the assets (css, fonts, js, images) folder ? Inside the src folder - this way you won't have to import the styling on each component
- Removing all default html comments
- Html class attributes should be converted to className (class is a keyword in javascript and JSX is an extension of javascript. That's the principal reason why React uses className instead of class.)
- Use camelCases 
- All html elements to be used inside a component should have closing tags
- Importing images using src ={imageName} - refer to ( https://create-react-app.dev/docs/adding-images-fonts-and-files/)

 
## What's in Store
- User authentication and database implemented with google firebase
- Used React-router for dynamic web navigation
- Complex state management managed by Redux with memorized selectors
- Used Redux-Persist and local storage for persistence
- Implemented credit card payment with stripe
- Asynchronous API request handled with Redux -saga
- Dynamic Filtering ( Shop by categories)
- Deployed on vercel

## Commits
- Browse through commits to see the project flow from inception to deployment
![image](https://user-images.githubusercontent.com/61579772/107758359-b91ef080-6d61-11eb-8786-42911f5823af.png)

## Project Structure🚀
The structure of the web app

- assets- all common scripts and stylings (css), fonts used on the pages, theme scripts included in script.js file
- src - all jsx files
- components - all react components

## Hosting
- Vercel - continous delivery/ Automatically deploys app each time you commit to the master branch
- Heroku - great option but slow


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Start
- git clone the proect
- npm install

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.


### References
- https://www.udemy.com/course/complete-react-developer-zero-to-mastery/
- https://www.divinector.com/
- https://www.sitepoint.com/how-to-create-an-ecommerce-site-with-react/
- http://fancyapps.com/fancybox/3/
- https://ivy555.medium.com/learn-stepwise-to-create-e-commerce-website-in-react-with-redux-dca78932a761
- https://owlcarousel2.github.io/OwlCarousel2/
- http://www.hackingwithreact.com/read/1/13/rendering-an-array-of-data-with-map-and-jsx
- https://reactjs.org/docs/lists-and-keys.html
- https://developers.facebook.com/docs/graph-api/

### Inspiration ❤
- https://www.frontendfun.com/free/crwn-clothing-e-commerce-project-from-complete
