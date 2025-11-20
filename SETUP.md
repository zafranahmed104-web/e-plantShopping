# Paradise Nursery - Setup Instructions

## Quick Start Guide

Follow these steps to get the Paradise Nursery application running on your local machine.

### Prerequisites

Make sure you have the following installed:
- **Node.js** (version 16 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn**
- **Git** - [Download here](https://git-scm.com/)

### Step-by-Step Installation

#### 1. Clone or Download the Project

**Option A: Using Git**
```bash
git clone <your-repository-url>
cd paradise-nursery
```

**Option B: Download ZIP**
- Download the project as a ZIP file
- Extract it to your desired location
- Open terminal/command prompt in the project folder

#### 2. Install Dependencies

Run one of the following commands in the project directory:

```bash
npm install
```

or if you prefer yarn:

```bash
yarn install
```

This will install all required packages including:
- React
- React Router DOM
- Vite
- And all development dependencies

#### 3. Start Development Server

```bash
npm run dev
```

or with yarn:

```bash
yarn dev
```

#### 4. Open in Browser

Once the server starts, you'll see output like:

```
  VITE v5.0.8  ready in 500 ms

  ➜  Local:   http://localhost:3000/
  ➜  Network: use --host to expose
```

Open your browser and navigate to: **http://localhost:3000**

## Project Features to Test

### 1. Landing Page (/)
- View the beautiful background image
- Read the company description
- Click "Get Started" button to navigate to products

### 2. Product Listing Page (/products)
- Browse plants across 4 categories
- View plant images, names, and prices
- Click "Add to Cart" for any plant
- Watch the cart icon badge update in the header
- Click the cart icon to view your cart

### 3. Shopping Cart Page (/cart)
- View all items added to cart
- See total items and total cost
- Use + and - buttons to adjust quantities
- Click delete button to remove items
- Click "Continue Shopping" to go back
- Click "Checkout" (displays coming soon message)

## Building for Production

To create a production-ready build:

```bash
npm run build
```

This creates an optimized build in the `dist` folder.

To preview the production build:

```bash
npm run preview
```

## Troubleshooting

### Port Already in Use

If port 3000 is already in use, you can:

1. Kill the process using port 3000
2. Or modify `vite.config.js` to use a different port:

```javascript
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3001, // Change to any available port
    host: true
  }
})
```

### Module Not Found Errors

If you see module errors:

1. Delete `node_modules` folder
2. Delete `package-lock.json` file
3. Run `npm install` again

### Images Not Loading

The project uses Unsplash images via URLs. If images don't load:
- Check your internet connection
- Unsplash API might be rate-limited (rare)
- You can replace image URLs in `src/data/products.js`

## File Structure Overview

```
paradise-nursery/
├── src/
│   ├── components/        # Reusable React components
│   ├── pages/            # Page components for routing
│   ├── data/             # Product data
│   ├── App.jsx           # Main app component with routing
│   └── main.jsx          # App entry point
├── index.html            # HTML template
├── package.json          # Dependencies and scripts
└── vite.config.js        # Vite configuration
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Browser Compatibility

This application works best in modern browsers:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Need Help?

If you encounter any issues:

1. Make sure all dependencies are installed correctly
2. Check that you're using Node.js version 16 or higher
3. Clear your browser cache
4. Try restarting the development server

## Next Steps

After getting the app running:

1. Explore all three pages
2. Test the shopping cart functionality
3. Try adding multiple items and adjusting quantities
4. Review the code structure to understand React components
5. Customize styling in CSS files
6. Add more products in `src/data/products.js`

Enjoy using Paradise Nursery! 🌱
