To create react app 
npx create-react-app my-app

To start react app
npm start

All changes needs to be done in App.js file 
JSX is the HTML+JS we write in App.js file
We need to return only one component it can be <h1> or <div> or <> empty 

Write all the CSS in App.css

Add bootstrap CSS and JS bundle in index.html in public folder

If you get any tag like <img> that has no closing tag then,
you'll get error --> to resolve write <img /> like this to close the tag

While making components --> always write the first letter in capital
Write rfc in the component to bring the boiler plate for react function based component

To use that component e.g. Navbar
write <Navbar/> in App.js and at top write import Navbar from './components/Navbar.js';