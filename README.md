# Paradise Nursery - Shopping Application

A React-based e-commerce application for browsing and purchasing houseplants. This application features a beautiful landing page, product listing with categories, and a fully functional shopping cart.

## Features

### Landing Page
- Beautiful background image with overlay
- Company information and description
- "Get Started" button to navigate to products

### Product Listing Page
- 10+ houseplants organized into 4 categories:
  - Air Purifying Plants
  - Aromatic Plants
  - Medicinal Plants
  - Low Maintenance Plants
- Each product displays:
  - Thumbnail image
  - Plant name
  - Price
  - "Add to Cart" button
- Header with shopping cart icon showing total items
- Dynamic cart badge that updates in real-time

### Shopping Cart Page
- Displays all items in cart with:
  - Thumbnail image
  - Plant name
  - Unit price
  - Quantity controls (increase/decrease)
  - Subtotal for each item
  - Delete button
- Cart summary showing:
  - Total number of items
  - Total cost
- "Continue Shopping" button
- "Checkout" button
- Empty cart state with message

## Technologies Used

- **React 18** - UI library
- **React Router DOM v6** - Client-side routing
- **Vite** - Build tool and dev server
- **CSS3** - Styling with modern layouts (Grid, Flexbox)
- **Unsplash** - High-quality plant images

## Installation

1. Clone the repository:
```bash
git clone <your-repository-url>
cd paradise-nursery
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:3000`

## Project Structure

```
paradise-nursery/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Header.css
│   │   ├── ProductCard.jsx
│   │   ├── ProductCard.css
│   │   ├── CartItem.jsx
│   │   └── CartItem.css
│   ├── pages/
│   │   ├── LandingPage.jsx
│   │   ├── LandingPage.css
│   │   ├── ProductListingPage.jsx
│   │   ├── ProductListingPage.css
│   │   ├── ShoppingCartPage.jsx
│   │   └── ShoppingCartPage.css
│   ├── data/
│   │   └── products.js
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Key Functionality

### State Management
- Shopping cart state is managed at the App level
- Cart data flows down to child components via props
- Functions to add, update, and remove items are passed down

### Routing
- Three main routes: `/`, `/products`, `/cart`
- React Router DOM handles navigation
- Header adapts based on current page

### Cart Operations
- **Add to Cart**: Adds item or increments quantity if already in cart
- **Update Quantity**: Increase or decrease item quantity
- **Remove Item**: Removes item completely from cart
- **Total Calculation**: Dynamically calculates total items and cost

## Build for Production

```bash
npm run build
```

The build output will be in the `dist` directory.

## Preview Production Build

```bash
npm run preview
```

## Future Enhancements

- User authentication
- Backend integration for persistent cart
- Payment processing
- Product search and filtering
- Product reviews and ratings
- Wishlist functionality
- Order history

## License

This project is created as a final project assignment.

## Author

Khushhali Team
