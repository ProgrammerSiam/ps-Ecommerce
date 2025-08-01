# E-Commerce Dashboard

A modern, full-featured e-commerce dashboard built with Next.js 15, TypeScript, Tailwind CSS, and React Context for state management.

## 🚀 Features

### Core Functionality

- **Product Listing**: Browse all products with responsive grid layout
- **Product Details**: Comprehensive product pages with add-to-cart functionality
- **Category Filtering**: Filter products by category with real-time updates
- **Search Functionality**: Search products by title and description
- **Sorting Options**: Sort by name, price (low/high), and rating
- **Shopping Cart**: Add, remove, and update quantities with persistent state
- **Add Products**: Form to add new products with validation
- **Pagination**: Navigate through large product catalogs

### Technical Features

- **Next.js 15** with App Router for modern React development
- **TypeScript** for type safety and better developer experience
- **Tailwind CSS** for responsive, utility-first styling
- **React Context** for global state management
- **TanStack Query** for efficient data fetching and caching
- **Image Optimization** with Next.js Image component
- **Responsive Design** that works on all devices

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: React Context + TanStack Query
- **API**: FakeStore API (https://fakestoreapi.com)
- **Deployment**: Vercel-ready

## 📦 Installation & Setup

### Prerequisites

- Node.js 18+
- npm or yarn

### Quick Start

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd yoooooo
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🏗️ Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with providers
│   ├── page.tsx           # Home page
│   ├── products/          # Product pages
│   │   ├── page.tsx       # Product listing
│   │   └── [id]/          # Dynamic product detail
│   ├── cart/              # Cart page
│   └── add-product/       # Add product form
├── components/            # Reusable components
│   └── Header.tsx         # Navigation header
├── context/              # React Context providers
│   └── CartContext.tsx    # Cart state management
├── hooks/                # Custom React hooks
│   └── useProducts.ts     # Data fetching hooks
└── styles/               # Global styles
    └── globals.css        # Tailwind CSS imports
```

## 🎨 Design Choices & Architecture

### State Management

- **React Context**: Used for cart state management due to its simplicity and built-in React support
- **TanStack Query**: Implemented for server state management with caching, retries, and background updates

### Component Architecture

- **Functional Components**: Modern React with hooks
- **TypeScript**: Full type safety for better development experience
- **Responsive Design**: Mobile-first approach with Tailwind CSS

### Data Fetching Strategy

- **TanStack Query**: Provides caching, background updates, and error handling
- **Optimistic Updates**: Cart updates are immediate for better UX
- **Error Boundaries**: Graceful error handling with retry mechanisms

### Performance Optimizations

- **Image Optimization**: Next.js Image component with proper sizing
- **Code Splitting**: Automatic with Next.js App Router
- **Caching**: TanStack Query provides intelligent caching
- **Lazy Loading**: Images and components load as needed

## 🔧 Configuration

### Environment Variables

No environment variables required for this demo. The app uses the public FakeStore API.

### Tailwind Configuration

Custom Tailwind config with:

- Custom color palette
- Responsive breakpoints
- Custom utilities

### Next.js Configuration

- Image domains configured for FakeStore API
- TypeScript strict mode enabled
- ESLint configuration

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Manual Deployment

```bash
npm run build
npm run start
```

## 🎯 Features Breakdown

### 1. Product Listing (`/products`)

- **Search**: Real-time search by title and description
- **Filtering**: Category-based filtering
- **Sorting**: Multiple sort options (name, price, rating)
- **Pagination**: 12 items per page with navigation
- **Responsive Grid**: Adapts to screen size

### 2. Product Details (`/products/[id]`)

- **Comprehensive Info**: Title, price, description, category, rating
- **Add to Cart**: Quantity selection and cart integration
- **Image Gallery**: Optimized product images
- **Error Handling**: Graceful 404 and error states

### 3. Shopping Cart (`/cart`)

- **Item Management**: Add, remove, update quantities
- **Price Calculation**: Real-time total calculation
- **Empty State**: Helpful messaging when cart is empty
- **Order Summary**: Subtotal, shipping, and total

### 4. Add Product (`/add-product`)

- **Form Validation**: Client-side validation with error messages
- **API Integration**: POST request to FakeStore API
- **Success Feedback**: Success message with auto-redirect
- **Category Selection**: Dropdown with predefined categories

## 🔮 Future Improvements

### Performance Enhancements

- **Server-Side Rendering**: Implement SSR for better SEO
- **Static Generation**: Pre-render product pages
- **Incremental Static Regeneration**: Update content without full rebuild
- **Bundle Optimization**: Code splitting and tree shaking

### Feature Additions

- **User Authentication**: Login/signup system
- **Wishlist**: Save products for later
- **Product Reviews**: User-generated reviews and ratings
- **Advanced Search**: Filters, price range, ratings
- **Checkout Process**: Payment integration
- **Order History**: Track past purchases
- **Admin Dashboard**: Manage products and orders

### Technical Improvements

- **Testing**: Unit and integration tests
- **Error Monitoring**: Sentry or similar service
- **Analytics**: User behavior tracking
- **PWA**: Progressive Web App features
- **Internationalization**: Multi-language support
- **Accessibility**: WCAG compliance improvements

### State Management

- **Zustand**: Consider replacing Context for complex state
- **Redux Toolkit**: For larger applications
- **Server State**: Expand TanStack Query usage

## 🐛 Known Issues

- FakeStore API is for demo purposes only
- No real backend integration
- Cart state resets on page refresh (could be fixed with localStorage)

## 📝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [FakeStore API](https://fakestoreapi.com) for providing demo data
- [Next.js](https://nextjs.org) for the amazing framework
- [Tailwind CSS](https://tailwindcss.com) for the utility-first CSS framework
- [TanStack Query](https://tanstack.com/query) for data fetching
- [Vercel](https://vercel.com) for deployment platform

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS
