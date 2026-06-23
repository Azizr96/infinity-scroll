# Infinite Scroll Image Gallery (Unsplash API Project)

A responsive **infinite scrolling image gallery** that dynamically loads photos from the Unsplash API as the user scrolls. This project replicates the core behaviour used in modern social media feeds such as Instagram and Pinterest.

It was built to practice advanced JavaScript concepts including API integration, lazy loading patterns, scroll event handling, and DOM performance optimisation.

---

## 🚀 Features

* Infinite scrolling image feed
* Fetches random images from Unsplash API
* Dynamic loading as user approaches page bottom
* Loading spinner for better UX feedback
* Tracks image loading before enabling new requests
* Responsive grid layout
* External link to original Unsplash image page

---

## 🛠️ Tech Stack

* HTML5
* CSS3
* JavaScript (ES6+)
* Unsplash API
* DOM API (dynamic element creation)
* Fetch API (async/await)

---

## 📁 Project Structure

```text id="inf-scroll-structure"
infinite-scroll/
│
├── index.html
├── assets/
│   ├── CSS/
│   │   └── style.css
│   ├── images/
│   │   └── loader.svg
│   └── scripts/
│       └── script.js
└── README.md
```

---

## ⚙️ How It Works

### 1. Initial Load

* The app fetches a small batch of images from the Unsplash API.
* Images are stored in `photoArray`.

### 2. Dynamic DOM Creation

For each image:

* An `<a>` tag is created linking to Unsplash
* An `<img>` tag is created dynamically
* Elements are appended to the DOM

---

### 3. Image Loading Control

The app tracks image loading:

* `imagesLoaded` → number of images fully loaded
* `totalImages` → total images in batch
* Only when all images load:

  * loader is hidden
  * infinite scrolling is enabled

---

### 4. Infinite Scroll Logic

When the user scrolls near the bottom:

```js id="scroll-check"
if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 && ready)
```

* New images are fetched
* Loading state is triggered again
* Prevents multiple simultaneous API calls using `ready` flag

---

### 5. Unsplash API Integration

Images are fetched using:

```
https://api.unsplash.com/photos/random/
```

With parameters:

* `client_id` → API key
* `count` → number of images per request

---

## 🧠 Key Concepts Practised

### 🔄 Infinite Scroll Pattern

Implements real-world feed behaviour similar to:

* Instagram
* Pinterest
* TikTok web feed

---

### ⚡ Performance Control

* Prevents excessive API calls using `ready` flag
* Waits for image load completion before triggering next batch

---

### 🧱 Dynamic DOM Manipulation

Creates elements entirely via JavaScript:

* `<a>` links
* `<img>` elements
* Attribute injection using helper function

---

### 🌐 API Handling

Uses Unsplash random photo endpoint with batch loading.

---

## 💡 What I Learned

This project strengthened:

* Scroll event handling
* API request optimisation
* Lazy loading concepts
* DOM performance considerations
* Real-world UX flow design (loading states, delays, batching)

---

## 🔮 Possible Improvements

* Implement true lazy loading (IntersectionObserver)
* Add error handling for API failures
* Add image skeleton loading placeholders

---

## 📸 UI Inspiration

This project mimics infinite feed systems used in:

* Social media platforms
* Image boards
* Content discovery apps

---
📷 Preview
<img width="1892" height="910" alt="image" src="https://github.com/user-attachments/assets/6a0e6926-2d13-422e-b03a-0ef88a0b7d63" />
https://azizr96.github.io/infinity-scroll/
---
## 📄 License

Educational project for learning purposes.

---

## 👤 Author

Fictional project created for JavaScript API and UI interaction practice.

---
