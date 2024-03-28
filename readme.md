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

/////////////////////PROPS/////////////////////
e.g. in App.js <Navbar title="ABC"/>
and in NAvbar function based component pass argument props then display {props.title} --> in curly braces
so, props provide us with customable properties
suppose I want to use this Navbar component in some other project where I want my title to be something else so I have tp ,ake changes only in the title instead of changing it everywhere...kind of putting value in a variable and then using that variable instead of the value
///////////////////////////////////////////////////

In bootstrap :
Success = green color
Primary = blue color
Danger = red color


React Router --> used for single page applications 
let's say our navbar is fixed for every page we have in our website (Home, About, Contact, etc..)
so everytime we swith page the navbar remains same so to save the loading time we instead of shifting whole content to different page,
we bring the rest of content (other than navbar) to the same page and paste it by replacing the earlier content below navbar

To install react router write in terminal
npm intall react-router-dom