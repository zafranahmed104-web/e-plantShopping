# Component Architecture & Data Flow

## Component Hierarchy

```
App.jsx (Main Container - Manages Cart State)
│
├─ Route: "/" 
│  └─ LandingPage.jsx
│     - Displays company info
│     - "Get Started" button → navigates to /products
│
├─ Route: "/products"
│  └─ ProductListingPage.jsx
│     │  Props: { cart, addToCart, getTotalItems }
│     │
│     ├─ Header.jsx
│     │  Props: { totalItems, currentPage: "products" }
│     │  - Shows cart icon with badge
│     │  - Navigation to cart
│     │
│     └─ ProductCard.jsx (×10 instances)
│        Props: { product, onAddToCart }
│        - Displays product details
│        - "Add to Cart" button
│
└─ Route: "/cart"
   └─ ShoppingCartPage.jsx
      Props: { cart, updateQuantity, removeFromCart, getTotalItems, getTotalCost }
      │
      ├─ Header.jsx
      │  Props: { totalItems, currentPage: "cart" }
      │  - Shows cart icon with badge
      │  - Navigation to products
      │
      └─ CartItem.jsx (×N instances, based on cart items)
         Props: { item, onUpdateQuantity, onRemove }
         - Displays cart item details
         - Quantity controls (+/-)
         - Delete button
```

---

## Data Flow Diagram

```
┌─────────────────────────────────────────────────────┐
│                     App.jsx                         │
│  State: cart = []                                   │
│  Functions:                                         │
│    - addToCart(product)                            │
│    - updateQuantity(productId, newQuantity)        │
│    - removeFromCart(productId)                     │
│    - getTotalItems()                               │
│    - getTotalCost()                                │
└─────────────────────┬───────────────────────────────┘
                      │
        ┌─────────────┼─────────────┐
        │             │             │
        ▼             ▼             ▼
  LandingPage   ProductListingPage  ShoppingCartPage
                      │                    │
                      │                    │
                      ▼                    ▼
                   Header              Header
                   ProductCard         CartItem
```

---

## State Management Flow

### Adding Items to Cart

```
User clicks "Add to Cart" on ProductCard
            ↓
ProductCard calls onAddToCart(product)
            ↓
Calls addToCart() in App.jsx
            ↓
Updates cart state:
  - If product exists: increment quantity
  - If new product: add with quantity = 1
            ↓
State change triggers re-render
            ↓
Header shows updated cart badge
```

### Updating Quantity in Cart

```
User clicks +/- buttons on CartItem
            ↓
CartItem calls onUpdateQuantity(id, newQuantity)
            ↓
Calls updateQuantity() in App.jsx
            ↓
Updates cart state:
  - Changes quantity of specific item
  - If quantity = 0, removes item
            ↓
State change triggers re-render
            ↓
Cart totals and header badge update
```

### Removing Items

```
User clicks delete button on CartItem
            ↓
CartItem calls onRemove(id)
            ↓
Calls removeFromCart() in App.jsx
            ↓
Filters cart array to exclude item
            ↓
State change triggers re-render
            ↓
Cart updates and header badge updates
```

---

## Props Flow

### ProductListingPage receives:
```javascript
{
  cart: Array,           // Current cart items
  addToCart: Function,   // Function to add items
  getTotalItems: Function // Function to get total count
}
```

### Header receives:
```javascript
{
  totalItems: Number,    // Total items in cart
  currentPage: String    // "products" or "cart"
}
```

### ProductCard receives:
```javascript
{
  product: {
    id: Number,
    name: String,
    price: Number,
    category: String,
    image: String
  },
  onAddToCart: Function
}
```

### ShoppingCartPage receives:
```javascript
{
  cart: Array,
  updateQuantity: Function,
  removeFromCart: Function,
  getTotalItems: Function,
  getTotalCost: Function
}
```

### CartItem receives:
```javascript
{
  item: {
    id: Number,
    name: String,
    price: Number,
    image: String,
    quantity: Number
  },
  onUpdateQuantity: Function,
  onRemove: Function
}
```

---

## Cart State Structure

```javascript
// Example cart state
cart = [
  {
    id: 1,
    name: "Snake Plant",
    price: 15.99,
    category: "Air Purifying Plants",
    image: "https://...",
    quantity: 2  // Added by addToCart()
  },
  {
    id: 4,
    name: "Lavender",
    price: 14.99,
    category: "Aromatic Plants",
    image: "https://...",
    quantity: 1
  }
]
```

---

## Routing Configuration

```javascript
<BrowserRouter>
  <Routes>
    <Route path="/" element={<LandingPage />} />
    
    <Route 
      path="/products" 
      element={
        <ProductListingPage 
          cart={cart}
          addToCart={addToCart}
          getTotalItems={getTotalItems}
        />
      } 
    />
    
    <Route 
      path="/cart" 
      element={
        <ShoppingCartPage 
          cart={cart}
          updateQuantity={updateQuantity}
          removeFromCart={removeFromCart}
          getTotalItems={getTotalItems}
          getTotalCost={getTotalCost}
        />
      } 
    />
  </Routes>
</BrowserRouter>
```

---

## Key Functions Explained

### addToCart(product)
```javascript
// Adds product to cart or increments quantity if exists
const addToCart = (product) => {
  setCart(prevCart => {
    const existingItem = prevCart.find(item => item.id === product.id);
    if (existingItem) {
      // Increment existing item
      return prevCart.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    }
    // Add new item with quantity 1
    return [...prevCart, { ...product, quantity: 1 }];
  });
};
```

### updateQuantity(productId, newQuantity)
```javascript
// Updates quantity or removes if 0
const updateQuantity = (productId, newQuantity) => {
  if (newQuantity <= 0) {
    removeFromCart(productId);
    return;
  }
  setCart(prevCart =>
    prevCart.map(item =>
      item.id === productId 
        ? { ...item, quantity: newQuantity } 
        : item
    )
  );
};
```

### removeFromCart(productId)
```javascript
// Removes item from cart
const removeFromCart = (productId) => {
  setCart(prevCart => 
    prevCart.filter(item => item.id !== productId)
  );
};
```

### getTotalItems()
```javascript
// Calculates total quantity of all items
const getTotalItems = () => {
  return cart.reduce((total, item) => 
    total + item.quantity, 0
  );
};
```

### getTotalCost()
```javascript
// Calculates total cost of all items
const getTotalCost = () => {
  return cart.reduce((total, item) => 
    total + (item.price * item.quantity), 0
  );
};
```

---

## Navigation Flow

```
Landing Page (/)
      ↓ [Click "Get Started"]
Product Listing (/products)
      ↓ [Click "Add to Cart"]
    (Item added to cart)
      ↓ [Click cart icon]
Shopping Cart (/cart)
      ↓ [Adjust quantities, remove items]
      ↓ [Click "Continue Shopping"]
Product Listing (/products)
      ↓ [Click "Checkout"]
    (Alert: "Coming Soon")
```

---

## CSS Architecture

```
App.css                      # Global styles
│
├─ pages/
│  ├─ LandingPage.css        # Landing page specific
│  ├─ ProductListingPage.css # Product listing layout
│  └─ ShoppingCartPage.css   # Cart page layout
│
└─ components/
   ├─ Header.css             # Header and navigation
   ├─ ProductCard.css        # Product card styling
   └─ CartItem.css           # Cart item styling
```

Each component imports its own CSS file for encapsulation and maintainability.

---

## Event Flow Examples

### Example 1: Adding First Item to Cart
```
1. User on /products page
2. Cart is empty: cart = []
3. User clicks "Add to Cart" on Snake Plant
4. addToCart({ id: 1, name: "Snake Plant", price: 15.99, ... })
5. cart = [{ id: 1, name: "Snake Plant", price: 15.99, quantity: 1 }]
6. Header badge updates to show "1"
```

### Example 2: Adding Same Item Again
```
1. Cart has: [{ id: 1, quantity: 1 }]
2. User clicks "Add to Cart" on Snake Plant again
3. addToCart finds existing item with id: 1
4. Increments quantity: quantity: 2
5. cart = [{ id: 1, quantity: 2 }]
6. Header badge updates to show "2"
```

### Example 3: Removing Item
```
1. Cart has: [{ id: 1, quantity: 2 }, { id: 4, quantity: 1 }]
2. User navigates to /cart
3. User clicks delete button on Snake Plant (id: 1)
4. removeFromCart(1) filters out item with id: 1
5. cart = [{ id: 4, quantity: 1 }]
6. Header badge updates to show "1"
7. Cart total updates automatically
```

---

This architecture ensures:
- ✅ Single source of truth (cart state in App)
- ✅ Unidirectional data flow (top-down)
- ✅ Reusable components
- ✅ Clear separation of concerns
- ✅ Easy to test and maintain
