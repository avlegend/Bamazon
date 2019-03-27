# Bamazon:v:

Creator: Andres Valdes :mortar_board:

Date: March 27, 2019

___

Bamazon is an amazon-like storefront :department_store: that lets you choose from a list of items by ID number and lets you "purchase" an amount in the inventory. If there is an insuficiant quantity it will prompt with an "Insufficient quantity!" and let you choose a different amount.

## Getting Started
---------
1. Open the code in VS code or similar system. Npm install `mysql` and `inquirer` and using `node` in terminal command `node bamazonCustomer.js`. This will take you to the first prompt.

<img width="881" alt="first prompt ID" src="https://user-images.githubusercontent.com/47486942/55094337-78d1fe80-5073-11e9-9b52-ded1e301ade2.png">

_____

2. You only have the option to enter any `ID number` from the chart given. By entering a number, your taken to the second prompt which will give you the option to purchase stock quantity.

<img width="529" alt="Prompts how many units to buy" src="https://user-images.githubusercontent.com/47486942/55094336-78396800-5073-11e9-8673-131b24b05fa3.png">

____

3. When the promt is answered you will be given to total cost of the purchase.

<img width="464" alt="end purchase" src="https://user-images.githubusercontent.com/47486942/55094335-78396800-5073-11e9-9ce2-c1e1f2bc9284.png">

____


4. The chart will then be updated with the new quantity of the item. In this case we purchased 20 stocks of Playstation which has the ID of 1. At the start it was 30 and now we have 10 because of the 20 stockquantity we purchased.


<img width="472" alt="updated chart" src="https://user-images.githubusercontent.com/47486942/55095001-a7040e00-5074-11e9-80db-b62338b57b45.png">
