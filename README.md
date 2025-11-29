Here is a **clean, professional, submission-ready README.md** for your LiveHindustan Clone project.
You can paste it directly into your repository.

---

# 📌 **LiveHindustan Frontpage Clone – Next.js Project**

A fully responsive, modern clone of the **LiveHindustan.com** homepage built using **Next.js, TypeScript, and TailwindCSS**.
This project replicates the layout, design principles, and user experience of a typical Hindi news portal.

---

## 🚀 **Tech Stack**

* **Next.js 14 (App Router / Pages Router)**
* **TypeScript**
* **TailwindCSS**
* **Local Mock Data (No API required)**
* **Next.js Image Optimization**
* **Reusable modular components**

---

## 📁 **Project Structure**

```
project/
│
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Navigation.tsx
│   │   └── Footer.tsx
│   ├── common/
│   │   └── TrendingTopics.tsx
│   └── news/
│       ├── FeaturedNews.tsx
│       ├── NewsCard.tsx
│       ├── NewsGrid.tsx
│       └── CategorySection.tsx
│
├── pages/
│   ├── index.tsx
│   ├── [category].tsx
│   └── news/
│       └── [id].tsx
│
├── data/
│   └── newsFromApi.ts
│
├── types/
│   └── index.ts
│
├── public/
│   └── placeholder.jpg
│
├── styles/
│   └── globals.css
│
├── next.config.js
└── README.md
```

---

## ⭐ **Key Features**

### ✔ **1. Fully Responsive Layout**

Matches the style of LiveHindustan with:

* Hero news card
* Trending news pills
* Breaking news banner
* Category sections
* Mobile hamburger + stacked view

### ✔ **2. Local Mock Data (Stable & Reliable)**

Project uses:

* `topNews`
* `categoryNews`
* `trendingTopics`

This ensures:

* No API dependency
* No rate limits
* Predictable UI during evaluation

### ✔ **3. Dynamic Routing**

* `/news/[id]` – Individual article page
* `/[category]` – Category-wise listing

### ✔ **4. Reusable Components**

* `FeaturedNews`
* `NewsCard`
* `NewsGrid`
* `TrendingTopics`
* `Header` / `Footer`

### ✔ **5. Modern Styling with TailwindCSS**

---

## 🏗️ **How to Run the Project**

### **1. Install dependencies**

```
npm install
```

### **2. Start development server**

```
npm run dev
```

### **3. Open in browser**

```
http://localhost:3000
```

---

## 🧪 **Testing & Edge Case Handling**

* Placeholder image shown if article has no image
* “No news available” message for empty categories
* Loading state while data is being fetched
* User-friendly error pages for bad routes

---

## 🤖 **AI Use & Reflection (Summary)**

AI contributed approximately **15%** of the project:

* Helping generate mock data
* Assisting with folder structure planning
* Supporting documentation writing
* Debugging suggestions

All core logic, components, layout design, and responsiveness were hand-coded.

---

## 📌 **Project Status**

✔ Complete
✔ Mobile-Responsive
✔ Easy to extend with real APIs

---


---

## 📄 **License**

This project is for educational purposes only.

---
