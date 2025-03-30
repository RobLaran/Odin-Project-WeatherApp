# 🌦️ Weather App

A simple **weather application** built with **JavaScript, Webpack, and the MVC pattern**. The app fetches real-time weather data and displays it in a clean user interface.

## 🚀 Features
✅ Search for weather by city name  
✅ Displays **current weather** (temperature, wind speed, humidity)  
✅ Shows a **7-day forecast** with icons  
✅ Implements **loading indicator** while fetching data  
✅ Pops **alert notifcation** when data is loaded successfully or not
✅ Built using **Webpack** with modular **MVC architecture**  

## 🖥️ Live Demo
🔗 [Check it out here](YOUR_LIVE_DEMO_URL)  

## 🛠️ Technologies Used
- **JavaScript (ES6+)**
- **Webpack** for module bundling
- **HTML & CSS** for UI design
- **Visual Crossing Weather API** for weather data
- **Dateformat.js** for formatting dates

## 📂 Project Structure
    📦 weather-app
    ├── 📂 dist
    ├── 📂 node_modules
    ├── 📂 src
    │       ├── 📂 asset
    │       │       ├── 📂 icons # Weather icons
    │       │       └── 📂 images # Background image
    │       │
    │       ├── 📂 model # Manages data (Model)
    │       │       └── weather.model.js 
    │       │
    │       ├── 📂 utils # Utilities
    │       │       └── helpers.js
    │       │
    │       ├── 📂 view # Handles UI updates (View)
    │       │       ├── weather.view.js
    │       │       └── alert.view.js
    │       │
    │       ├── api.js # Fetches data from API
    │       ├── controller.js # Handles app logic (Controller)
    │       ├── index.html
    │       ├── index.js
    │       └── styles.css
    │       
    ├── .env
    ├── .gitignore
    ├── package-lock.json
    ├── package.json
    ├── plan.md
    ├── README.md
    └── webpack.config.js