# 🌊 Marine Facts with Categories

This is my **second weekly project** at Dalhousie University.  In my "**Laughably Simple Projects (LSPs)**" series this one is the second instalment.
After building a simple Compliment Generator in Week 1, I wanted to **level up slightly** while still keeping things manageable.  


The idea is playful: get a random marine fact, but this time the user chooses a **category** (🐋 Animals, 🌍 Geography, 🌡️ Climate).  
It’s still simple, but it shows how user input can flow from the frontend → backend → back to the frontend.

---

## ⚙️ Stack

- **Frontend:** React + Vite + TypeScript  
- **Backend:** Vercel Serverless Function (`/api/fact?category=...`)  
- **Hosting:** Vercel (frontend + backend on the same URL)

---

## ✨ Features

- Select a category with **radio buttons**  
- Fetch a random fact from that category via API  
- Serverless backend — no separate infra, no database setup  
- Deployed on Vercel in just a few minutes

---

## 🚀 Live Demo

👉 [Marine Facts App on Vercel](https://marine-facts.vercel.app) 

---

## 📚 Lessons Learned

- How to handle **query parameters** in serverless APIs (`req.query.category`)  
- How to connect **frontend state (radio buttons)** to a dynamic backend request  
- That even small changes (dropdown → radio buttons, single array → categories) teach a lot about how APIs work  
- Fun fact: building with a local flavour (Halifax, Bay of Fundy, seagulls stealing fries) makes projects more enjoyable to share 🌊

---

## 📌 Next Steps

- Add a **history view** (last 5 facts shown)  
- Pull facts from a **real ocean/marine API** instead of hardcoding  
- Style the radio buttons into **toggle-style pills** for a nicer UI  
- Maybe expand beyond “facts” into **marine data visualization** later

---

## 🤝 Connect

This project is part of my journey as a Master of Applied Computer Science (MACS) student at Dalhousie University.  

I’m sharing one project every week to stay consistent, build in public, and connect with others who love tech, design, and the ocean.

- 🌐 [LinkedIn](https://www.linkedin.com/in/harsh-pandey-1308ab277/)  
- 📬 Open to suggestions, ideas, or even marine facts you want me to add!
