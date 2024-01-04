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