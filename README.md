# 📘 Understanding `useEffect` in React — With 3 Practical Examples

This repository contains the source code for a tutorial where we explore how the `useEffect` hook behaves under different dependency array conditions. The goal is to help beginners clearly understand when and why `useEffect` runs.

---

## 🚀 What You Will Learn

- How `useEffect` works in different dependency setups
- Why dependency arrays matter
- When effects re-run and when they don’t
- Common mistakes developers make with `useEffect`

---

## 📂 Examples Included

### **1️⃣ useEffect with a Dependency (`[count]`)**
In this example, the effect runs every time the `count` state updates.  
Useful for: API calls or actions that depend on a specific value.

**Behavior:**
- Runs on first render  
- Runs whenever `count` changes  

---

### **2️⃣ useEffect with an Empty Array (`[]`)**
This effect runs only once, similar to `componentDidMount()` in class components.

**Behavior:**
- Runs only on the initial render  
- Does NOT run again unless component unmounts and re-mounts  

---

### **3️⃣ useEffect Without a Dependency Array**
This is the most commonly misunderstood behavior.

**Behavior:**
- Runs on every render, including state updates  
- Can cause performance issues or infinite loops if not used carefully  

Use this approach with caution.

---

Each file demonstrates a standalone scenario so you can test and compare.

---

## ▶️ How to Run

```bash
npm install
npm start
```

Then open:

```
http://localhost:5173
```

---

## 🎥 Related Video

This code is part of a detailed explanation available on my YouTube channel 'DeveloperZaid'.  
Watch the complete breakdown for better understanding.

---

## ⭐ Contribute

If you want to improve this project, feel free to create a pull request or open an issue.

---

## 💬 Support

If this helped you, please consider giving the repo a ⭐ on GitHub!

