# shoppingList_assessment
Assessment
Review the attached wireframe (next page). Your objective is as follows:

Create a new React client comprised of several components which receive data as props
Utilizing the data we provide, your application should output the correctly computed data visualized in the wireframe 
Do not spend time on styling. This assessment is to gauge your JavaScript comprehension.

You have 5 hours to complete this assignment. The detailed task list below outlines the steps you will need to take:
Tasks
Start a new create-react-app project
Download this file containing the shopping data, copy it to your project, and import the file into your App.js. Make sure to carefully review the data structure.
Note in the price object, original is the price in dollars, and discount is the percentage to be discounted, for e.g.:
	{ original: 20, discount: 10 }
  - subtract 10% of $20 for a final price of $18 
 
Create a ShoppingList component and ShoppingItem component. 
The ShoppingList component will receive the shopping data as props. It will render multiple ShoppingItems (using map) as appropriate. 
The ShoppingItem component will receive an individual item as its props and need to output the appropriate title, category, and actual price. If the item has a discount value over 0, it should render both original price and final discounted price; if discount value is 0, just render the original price.
Create a BreakdownList component and BreakdownItem component. 
The BreakdownList will receive the shopping data as props. It will render a BreakdownItem for each unique category value, with a total summed price of the items in that category. The list will be sorted from highest total cost to lowest.
The BreakdownItem will receive the category and summed total price as props
Create a Discounts component
The Discounts component will receive the sum of all discounts as props and render the result
For each component, you can choose to perform the data manipulation work in the top level App component before passing it down, or have the raw data sent to each lower level component and do the work in the component.