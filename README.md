# 🛍️ Fancy Shopping Cart App

A dark-themed shopping cart application built with **Next.js**, **React**, **TypeScript**, **Tailwind CSS**, and **Lucide React Icons**. This app allows users to browse clothing items, add them to a cart, and complete a mock checkout.

---

## ✨ Features

- 🚀 Built with Next.js 14 (App Router)
- 🎨 Fancy dark UI with Tailwind CSS
- 🛒 Shopping cart with quantity controls
- 💾 Global cart state using React Context
- 🖼️ Local image support via `/public` folder
- 💰 Item prices, total calculation, and toast notifications
- ✅ Checkout modal with confirmation page
- 🧼 Fully containerized with Docker

---

## 📁 Folder Structure

```
my-app/
├── app/                    # App router pages (home, men, women, etc.)
│   ├── men/page.tsx
│   ├── women/page.tsx
│   ├── shoes/page.tsx
│   ├── children/page.tsx
│   ├── cart/page.tsx
│   └── confirmation/page.tsx
├── components/            # Reusable UI components
│   ├── Navbar.tsx
│   └── ProductCard.tsx
├── context/               # Global state (CartContext)
├── public/                # Static local images (e.g. men1.jpg)
├── styles/                # Tailwind global styles
├── Dockerfile             # Container setup
├── next.config.js         # Next.js config with image domains
├── package.json           # Dependencies and scripts
└── tsconfig.json          # TypeScript config
```

---

## 🖼️ Local Images

Place these files in `/public`:

```
men1.jpg, men2.jpg
women1.jpg, women2.jpg
children1.jpg, children2.jpg
shoes1.jpg, shoes2.jpg
```

Use placeholder images or your own product photos with the same filenames.

---

## 🚀 Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run the development server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

---

## 🐳 Docker

### Build and run the container:

```bash
docker build -t shopping-cart-app .
docker run -p 3000:3000 shopping-cart-app
```

---

## 📦 Tech Stack

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide Icons](https://lucide.dev/)
- [Unsplash (optional)](https://unsplash.com/) – originally used for images

---

## 📸 Screenshots

> (Add screenshots here of Home, Product Pages, Cart, and Confirmation Page)

---

## 💡 Future Improvements

- Integrate real payments (e.g., Stripe)
- User authentication
- Persistent cart (cookies or localStorage)
- Product filtering & sorting

---