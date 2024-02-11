// Components, 
// *** these 3 could be home page, 
// header 
// main section, featured collection, shop now option
// footer, contact, email list etc, 
// *** those will make up the main page, 

// then shopping component, 
// about us/contact us  
// checkout
// pay info 

// header and footer sections stay on the page, even if user goes to different pages, keep that in mind, 

// *** Header Component, 
// title and navbar with links so user can navigate to different pages, 

// ** main component 
// try to print all 20 images to the screen, 

// I printed the 20 items, 
// now I have an img slider up and working, 
// I want to see if I can get rid of the captions, 
// might just place text below it 


// *** PUT HEADER, MAIN AND FOOTER COMPS INTO ONE BIG COMPONENT AND RENDER IT FROM THERE, 

// *** shopping component 

// import axios and render all 20 items on the screen, then we can style them 

// all 20 items rendered, 

// now lets put a card component using bootstrap around each item 

// *** dont forget key elements!!!

// lets fix the quantity buttons
// base style them, so they appear in a row, 
// then we can add the feature when user clicks it will open that products own page, 

// try to get all the cards and buttons to be uniform on the page, 
// try to make all imgs the same size 


// *** base styling on the shopping component is good enought for now, 
// now I will try to implement when user clicks a product, it will load up a specific product page, 
// it loads the img, description, and another way to add item and quantity to cart. 

// now I have figured out a way to display the cicked on product within its own component, 
// now I will commit and save, then begin to append the title, description, price, and all the other details, and apply some base styling. 

// now I will build the about component, 
// before that let me make a home btn, that when pressed routes the user back home, 

// *** Building out the checkout and total component, 

// onClick within the btn, will call a function which keeps track of the total (counter)

// then calculates the total price. 

// make the page and position it more or less in the right place

// got it in the right place, 
// now I will make sure than when a add to cart btn is clicked, a counter will be incremented 

// onClick calls a function, which adds an item to a total, 
// pass the item to the function, it adds an item to a state variable, 
//  

// keep track of how mant items are in the cart, 
// state variable which keeps track of total items


// tried passing the state variables as props but it is saying cart is not iterable, 
// tried setting state within the file, 

// trying to keep track of how many items are in a count, 

// currently when add to cart btn is clicked, I pass the item to component which will keep track of the count, 
// I am trying to use state variables are update the state adding the new item in, then I can loop through them and the display how many items are in the array, 

// whenever I try to pass the props it gives an error saying cannot destrucute undefined. 


// I want to keep track of how many items are in a shopping cart, 
// currently if user presses the add to cart btn, 
// that item that was clicked on will get passed to the checkout component so it can eventually be added to an array which holds all added items, 
// 

// I declared a state variable which is an empty array which will hold the clicked on items the problem is I am confused on how and where to correctly pass these props 

// I cannot pass them in the return because I don't want that component to be rendered, 

// I've tried passing them when user clicks add to cart btn, but I get error saying cannot destructure props because its undefined, 
// So I', confused on where I should declare and when I should pass these props, 
// I'm confsued on why I cannot just declare these props within the checkout component. 


// How can I correctly update count and keep track of how many items are in the shopping cart? 


// I can keep track of the count, but now how do I display that count in the correct place? 


// Hey guys, running into a small problem with shopping cart project. 

// Goal: Trying to add the logic so when user adds items to shopping cart, it will display the total number of items. I also want it so when user selects a certain quantity it will add the correct number to the cart and display the total number of items. 

// The Problem: I can keep track of how many items are added to the shopping cart by setting a state variable and logging the data within another function, the problem I have is passing this data to the header component, so it can be displayed. 

// What I've tried: I am trying to pass the data as props, but I don't want to render the component again, I've tried just calling a function and passing in the cartCount variable but that won't render anything either with no errors. 

// Go through and check over code, and replace variable names, 
// then figure out cart displaying issue, 

// ok how can I still get the card icon to display even when I switch back to the home page? 

// it will render cart item count within shopping component, because I am setting the state and updating state within that component, then passing the props 
// to header component within the return but if I switch pages to home or about, the cart count disappears. 

// I want to keep the count the same whenever user changes pages, 
// I am getting really stuck on how to make this work with props, I cannot pass props to the shopping component from header, 
// shopping component and the other pages are accessed with react router and btn clicks. 
// 


// Ahh the cart logic for shopping cart is pretty tough. I am running into another problem, that I have been stuck on, 

// Goal: When user changes pages the cart icon will still display the total items in the cart. 

// The Problem: Right now I can only see how many items are in the cart when I am within the ShoppingComponent, if I switch pages the cart items icon will disappear. I know this could be occurring because in my return statement within the ShoppingComponent I am passing the cartItems variable into the header component as props. Outside of the ShoppingComponent, the Header component is not receiving anymore props. 

// What I've tried: I've tried setting my cartItems state variable within App.jsx then passing it the components when I declare my routes but this is wrong because cartItems only gets updated and set within the ShoppingComponent, so its value will never be updated within App.jsx. I was doing this but this is not correct. I've been looking through my code trying to figure out some way to make this work but I am really drawing a blank. 


// Try to hook up the product page, add to cart btn, should be the same process. 

// How can I add the items quantity to the total cost? 
// can I just make another state variable then add the item plus the quantity when I reset the state? 

// how can I set the quantity of items in state, 
// when user presses the add to cart btn, it will add that number of items depending on what was entered in the input field.
//  



// *** make a state variable called item quantity, 
// make another variable which will hold all the items in the cart, it will be an array of objects, 
// pass them as props, 

// when input field changes, we update the itemQuantity state, 
// when the user presses the add to cart btn, we call a function which makes a copy of the cart items, 
/// adds the item quantity depending on index and sets the state. 




// when using an object the problem I run into is where do I make the object, when the add to cart btn is pressed? 
// 

// next I will add propTypes to the shopping component file, 
// then apply the same logic with the add and quantity buttons for ProductPage 


// access cartItems within CheckoutComponent 

// its not console logging any of the values, 
// we are passing it as props, 
// thevalue is being updated in App.jsx


// we can access cart items within Checkout now, 
// now just print a picture, quantity and price, 
// then next we will make a function which adds up a price and prints it to the screen, 


// can you change the items quantity and have it reflect the price change? 

// how can I display this new value, it calculates the change, 
// make the variable in app, then pass it to checkout? 


// you can add to the total but what about subtract from the total by adjusing the quantity. 

// now thinking about the btns for the input field on the shopping page, 

// how can I incorporate the btn logic with what I have now? 

// maybe for now just leave it and just work on the logic in the checkout page, 

// inplement the increment and decrement btns, if I can get it in checkout page, I can fix it up in shopping cart, 

// same logic applies, 

// add two btns, 

// when increment is pressed it calls a function which takes the item 

// I'm just getting really confused on how to use the increment btns with the input field 
// could I just use an input field? 
// 
// the increment or decrement btns increase the QUANTITY of the items
// when + is pressed, takes the items quantity and adds one, 
// when - is pressed, takes the items quantity and reduces it by one 

// then in the return the total 

// total = item.price * item.quantity 

// could not figure out how the add or subtract btns and how that will influence the total cost 
// why is the remove btn deleting all the items, not the selected one. 



// tomorrow I will try using the selectedProduct in place of the id in the api call, 
// then fixing the rest to replace data with selectedProduct, 

// I can grab the clicked on product,

// const { id } = useParams(); ??? this, replace with selected product 

// the problem is I cannot change the quantity on the product, because 

// I cannot change the items quantity, I get NaN if I try the same approach, 

// lets look at how we are setting the quantity. 

// check to see if the quantity still works after changing the state value to 0. 
// test it 

// get the counter working 

// counter is working but when I get to checkout component, and I increment, it takes two clicks to get it to increment, 

// it is incrementing but rendering properly, try setting to a variable, 

// why is the input value take two clicks to change??? 

// the quantity is being updated, why is the input field not reflecting that change.

// *** TODO'S ***********************************************
// implement local storage, / 
// propTypes for each component, /
// keys for each component, /
// implement the decrement for product page!!! dont forget that, /
// ERROR AND LOADING SCREENS /









// within app make another useEffect hook that will set the items in local storage. 

// then console log them,

// first lets get the icon, working 
// if I click the icon, can I print a simple message to the console 

// we have created a basic modal, 
// now lets grab the input field text and log it, 
// to ensure that we can capture the input fields value, 

// next I will need to get all the products, so I must use an effect 
// within the modal component 

// I want it so products will render based on search, 
// not render all products from the API call 

// I have the products, I just want it so when I start typing it will suggest products based off input, 

// before I had it so it would show all the products then as I type it would begin to filter down the products based on search input. 

// I want it so when I type it will begin to show products based on search results. 


// I believe I have to use filter over top of map, 


// can I console log whichever option was selected, 
// then can we set that into state, 


// Now on the search modal, you should click on a product and it should go to the page, 
// wrap the img tag in a link tag just like in shopping component. 

// GET THE SEARCH BTN WORKING IN ALL COMPONENTS, 
// MAKE SURE YOU CAN DECREMENT IN THE PRODUCT PAGE FOR ITEMS QUANTITY. 

// **** GOAL 

// make the sort by category working. 
// how can I make this work  ? 

// I would not use the youtube approach, I am getting confused with his code, 


// use help channels then if all fails go back to video or ask some one, 

// first see if you can make a function which gets all the categories. 
// get a single category. 

// I can get the categories from data, 

// but how can I log back the value from the select option? 


// if value === mens clothing, 

// make a variable which grabs mens clothing items from the api call

// can we make a state variables for each value, 
// add those items to the state array using filter functions? 
// 

// next can we make a function which just returns mens clothing from the API call, 



// you will need a loading screen for each section, whenever the api call is made, 
// handle the errors just like you did in memory card

// It is working ok in shopping component I will do the same in product page, and checkout 

// error component only displays when I mess up something after /products 
// or the https request, 
// If I mess with the url at all, it will crash the page but will show error in console

// next I will do keys, 
// find out where a key could be used, 

// *** 1/18 goal
// Finish prop types /
// Begin variable renaming, and cleanup, take one page at a time, 

// I will being variable renaming, starting at the top, one file at a time. 

// go through and check variable names for each page, 
// start with the api calls

// PROP TYPES ERROR

// fix the prop error, lint error, 
// commit, 
// then begin the process of folder,

// prop error 
// 56 72 90

// I will test again but I saw this error pop up when I added an item to the cart 

// the prop types error pops up when I add an item to the cart. 
// 
// itemQuantity is an array, 
// does its value change at all? Put console logs after the function because it probably changes to a number 

// *** next I will implement what my brother said about the API call, 
// I will put it, within its own folder, 

// a function that returns the response from the API. 
// call that function within your useEffect 

// I think you should create a small example in repl then apply the same concept in your regular code 

// Next I have to think on how I can handle errors and loading screens within apiRequest 

// what I can think of so far is to have the loading and error variables within app 

// then pass them as props to the right components, 

// its state will get updated within apiRequest .




// **** 

// I want to think of a way to keep the loading and error screens, I used to have them within my useEffect in my components, 
// they ran in a try catch block, their state was set within there. 

// now I tried a way to set the state in apiRequest, and then pass them as props to App, then app passes them as props to the other compononents, 
// that does not seem like the right approach, 
// the only way I can pass props is through the routes 


// I need to set the state within apiRequest both loading and error states since now the api requests are being made in one file, then somehow pass to the correct components for rendering, 
 // pass to components without rendering them,  


 // *** STYLING 

  // first thing that stands out is is the buttons, is there a way we can remove the link and blue color

  // bringing the search bar and checkout icon/btn to the top right, 

  // lets look over structure of the header 

  // it will be a flexcontainer, in a row, 


  // I want to start styling up header, 

  // can I make the icons a link? 

  // got the links working, 


// now can I put the badge right next to the cart icon? Try to move it within its container 

// feeling good about the icons for now, 

// can I make the h1, title shrink to account for smaller screens 

// can we begin to make the header responsive? 

// *** 

// I will make the home page responsive, I will find a better img for the main section and make all images responsive. 



// **** NEW DESIGN PATTERN 

// starting with header, it will use flexbox 

// basically two flex containers, 
// one that holds buttons, and links, 
// the other holds the icons, search, and user profile


// **** 1/25

// Responsive main section/title section, 
// can we make the imgs and title/subtitle into a column? 
// dont forget vh units for header, main, footer, 

// can we also put a diamond next to the text? 

// can we grab a 3rd image to form a little image collage at the top of the file 
// lets see if we can find a black and white one.  

// figure out how to change the images. 

// I can grab the images. 
// how do I display them every few seconds, 

// I will need to use a setInterval functiom

// I can get a random image back, 

// I can return an img from a function 

// how do I replace an img every few seconds with a new random img ? 

// I have to use a setInterval some how 

// I have an interval that sets, 


// I have a function which can return 

// *** lets import all 9 of the photos we plan to use and put them into an array, 

// we got the images, 

// now put them into an array, 


// next I can begin to play around with responsiveness for that section, 

// can I set the img as a background img???




// *** 

// img containers are position relative, 
// img (child) will be position absolute. 

// make them staggered like before, then try to keep that style 

// and make it responsive. 

// it is looking much much better, just figure out a way to only allow 3 items in a row, then when it is hits a certain breakpoint that will go into column, 

// only fit a certain number of items per row, do not have 2 in one row then 1 img in the bottom row, 

// figure out a way to put 3 images in a row that stay then when screen shrinks put them into a column. 

// the responsiveness is looking good, the only thing is the one image being slighlty larger than the rest, 

// commiting and saving then moving on. 



// *** 

// category section, make header text larger, 
// make sure 2 items can stay on a row, 

// prevent 3 items on a row, then one on the bottom, 

// wrap both of them in a container, and apply flex properties to them, and try flex wrap 



// *** create a small 3d design that goes behind the main title section, 

// make it as small as possible 

// and I would create a small diamond img, 

// I dont think spline will work, 

// I have to find another way to possibly use a 3D image or a background, I must explore other options, 

// this would be a good feature to add to the site 

// spline does not work, performacne too bad, find alternative, 


/// continue on with the current design, 

// fix the padding issue, and put the title further up and then the images slightly below, make sure category section is not too far down the page, 

// user should almost be able to see the category section, 


// build out the last section, the special offers card, 

/// 


// finish the last of the cards, then position the section, 

// so make the last two items/cards, 

// they are a little wider so, just create a div first, and then give it a width 



// *** 

// Got the base responsiveness down on the home page, 

// I need to figure out a couple of more things, 

// 1. why the whitespace on the right hand side? 

// 2. make sure the header does stay the same width. the headers can adapt to smaller screens 

// going to check again but seems like I found a way to remove the white space, 

// and seems like removing the set width of the header removed the whitespace and overflow issue, 

// double check that, commit and save, 

// then make sure the trending categories section, text and shop now btn stay within the same place at smaller screen sizes,

// ***

// before we do that, lets make sure that there is not two columns next to eachother, 

// use dev tools, and make sure that those two columns do not go next to eachother, 

// it starts at 1000 then breaks at 815px 


// now I feel like the home page responsiveness, is off, the special offers should switch to row, then at 1000px we will all switch to columns, 


// try to make the special offers section fit nicely into a row 

// how can I make the header go on top when its in a row, 

// I am going to redo the media queries for that section for a bit, 

// then I want to start to build out the footer component, 

// commit and save changes, double check for no errors


/// *** 

// moved the header text container for speial offers out of the container, 

// I Notice when switching to column the width gets messed up, 

// begin to make footer section responsive, 

// then go back and fix and polish each section, 



// *** I want to accomplish two things with the home page before moving on 

// I want to make sure that there are two cards per row at certain screen sizes 

// I want to make sure the footer is responsive. 




// The goal is making two cards in a row when screen size changes, 
// 



// **** Shopping component, 

// responsive cards, cards will have to shrink at smaller screens, 

// color of the cards, 

// for some reason inline styles only work for bootstrap 

// so in order to make it responsive I have to use minmax or clamp to adjust size of img, 

// I want to not use inline styles, how can I style these cards w/o inline styles? 

// 


// *** 

// today I will finish and style the modal, then will begin to cleanup the site, 

// starting at one section at a time. 


// you may have to remove the inline styles for the modal due to media queries 

// it may just default to the original, 

// first fix up how the items are displayed. 


// organize how the items are dispayed in the search modal 

// put them like how you have it in product page, 

// img on r then text in columns, title, and price will be in a column 


// work on the responsiveness next for the modal, 

// make sure it looks good on ipads, phones

// make sure exit btn is working. 

// making the search modal responsive is getting very hard 

// I think because it is initially set to a fixed position, it cannot move or its size cannot be changed, 

// ok so I have the media query working for ipad, 

// its looking better for phone, 

// lets increase the img and the font

// the text is not wrapping on the phones, 

// getting overflowing text on within the modal and mobile views. 

// Now we have to make sure the exit button is visable both on ipad and phone screens


// ****  clean up of homepage


// Get the text to appear on top of the cards and adjust the text with media query so it stays over top of the card 

// make sure the second image in the trending categories section stays 100% of its height, and make sure it does not shrink. 

// make sure the black background for the icons in the footer is removed, use transparent background. 

// *** trending categories cards completed. 

// now will work on special offers header to make sure to decreases in size 

// and stays the same width. 


// *** 

// I noticed in the footer section that the cards can be slightly bigger, 

// I will implement/change one of the images so the background does not show, then I will implement the suggestions from discord. 

// now I will work on making sure the title bars icons are centered and are universal between them. 