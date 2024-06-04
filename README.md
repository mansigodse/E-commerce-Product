## Available Scripts

## E-Commerce Application

This is a React application for an e-commerce store.

### Installation

```bash
npm install
```

This will install all the dependencies required to run the application.

### Running the application

```bash
npm start
```

This will start the development server and open the application in your default browser.

### Application Structure

* **App.js:** The main component of the application. It defines the Navbar and routes to different pages.
* **Components:** This folder contains all the reusable components used in the application. Each component has its own CSS file in the **styles** folder.
* **Products.js:** This component displays all the available products.
* **Search Bar:** This component allows users to search for specific items.
* **Cart.js:** This component shows the items added to the cart and allows users to checkout.
* **Product.js:** This is a higher-order component used to create product boxes with a consistent style.

### Features

* **Routing:** Uses `react-router-dom` for routing between different pages (Products, About, Cart).
* **Categories:** Allows users to filter products by category.
* **Products:** 
    * Displays all available products.
    * Uses a higher-order component (`Product.js`) for consistent product boxes.
    * Includes hovering effect for a better user experience.
    * Implements "Read More" buttons for products with long descriptions.
* **Pagination:** Shows a maximum of 6 items per page with navigation for additional pages.
* **Cart:**
    * Displays the number of items and total price in the cart.
    * Updates the number of items and total price dynamically as items are added or removed.

