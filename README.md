# comfy cafe
Installations: 
`npm create-react-app comfy-cafe` 
`cd comfy-cafe` 
`npm install react-bootstrap bootstrap` 
`npm install react-icons --save` 

## Organization of Components
```
comfy-cafe-react/
└── src/
   └── App.js
       ├── ItemList.js
           ├── FilterOptions.js
           └── Item.js
       └── Cart.js
           └── CartItem.js
```
The main page is App.js and stylized by App.css. Within App.js, there are two main components: ItemList.js and Cart.js
ItemList is then further broken up into two components, one for the various different filter and sorting options (FilterOption.js) and one for displaying each individual item (Item.js). Cart.js also contains a CartItem.js component which displays each individual item in the shopping cart, including options to change the quantity and remove an item from the cart. 

## How Data is Passed
In App.js, a variable stores the list of items and their properties such as name, image url, sweet vs salty, and snack vs drink. This list is passed to the ItemList component, along with an add function that allows the user to add an item to the cart. In the ItemList component, there are multiple functions that allow the user to select between two filters types and sort by price, which are passed to the FilterOptions component. FilterOptions then displays these different options as buttons and a dropdown. Back in ItemList, each item's information (name, price, sweet or salty) is passed to the Item component in order to display each item in a consistent manner. Returning back to App.js, data about the contents of the cart and the cart-specific functions (addOne, removeOne, removeFromCart) are passed to the Cart component. This is because the contents of the cart are maintained in App.js and we need both ItemList and Cart to connect to this information. In the Cart component, there is an ItemLookup object that allows the Cart to fetch the price and image url of each item in the cart based on its name, thus making it so that we don't need the entire original list passed to Cart. With this, Cart then passes information about each item (name, price, image url) and the functions (addOne, removeOne, removeFromCart) to CartItem, so that each item in the Cart can be displayed with buttons that only act on that specific item in the cart.

## How User Triggers State Changes
In App.js, the user triggers a state change every time something is updated in the cart. In other words, when the user clicks the 'Add to Cart' button, minus button, plus button, or 'Remove' button, a state change is triggered in order to properly display the contents of the cart. There are also state changes in ItemList that are triggered when a user selects a filter or sort order in the FilterOptions component. The state stores the selected taste, type, and sortOrder in ItemList so that the proper items can be displayed with the correct filters and sort.
