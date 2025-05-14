# ☀️ UV Index Checker

A **modern, minimalistic, and dark-themed** web application to **check real-time UV Index levels** for major cities in Maharashtra and across India. The app fetches **UV data from the OpenUV API** and provides **sun safety advice** based on the intensity of UV radiation.

---

## 🚀 Features

✅ **Select a city** from Maharashtra or major Indian cities
✅ **Fetch real-time UV Index** using the OpenUV API
✅ **Color-coded UV Index levels** for easy understanding
✅ **Sun protection advice** based on UV exposure risk
✅ **Minimalistic dark-themed UI**

---

## 🛠️ Technologies Used

* **HTML** → Page structure
* **CSS** → Styling (Dark mode with modern design)
* **JavaScript** → Fetch API data, update UI, and handle logic

---

## 📜 How to Use?

1. **Clone the repository**:

   ```sh
   git clone https://github.com/your-username/uv-index-checker.git
   cd uv-index-checker
   ```
2. **Open `index.html`** in a browser.
3. **Select a city** from the dropdown menu.
4. **UV Index and safety advice** will appear automatically.

---

## 🔐 API Setup

1. **Sign up** at [OpenUV.io](https://www.openuv.io/)
2. **Generate your API key** from the dashboard
3. **Replace** the placeholder in `main.js`:

   ```js
   const apiKey = 'YOUR_API_KEY'; // Replace with your actual API key
   ```
4. **Save and reload** the web page

---

## 🎨 UV Index Guide

| UV Index Range | Level     | Color     | Sun Protection Advice                |
| -------------- | --------- | --------- | ------------------------------------ |
| 0 – 2.9        | Low       | 🟢 Green  | Low risk. No protection needed.      |
| 3 – 5.9        | Moderate  | 🟡 Yellow | Wear sunglasses, SPF 30+.            |
| 6 – 7.9        | High      | 🟠 Orange | Use SPF 30+, hat, limit sun.         |
| 8 – 10.9       | Very High | 🔴 Red    | Avoid sun 10am–4pm. Full protection. |
| 11+            | Extreme   | ⚫ Black   | Stay indoors if possible.            |

---

## 📁 Project Structure

```
uv-index-checker/
├── index.html   # Main HTML file
├── style.css    # Styling for the application
├── main.js      # JavaScript logic for fetching and displaying UV Index
```

---

## 📌 To-Do / Future Enhancements

* 🌍 Add more cities or geolocation support
* 📊 Display historical UV data graphically
* 🌐 Deploy online (GitHub Pages / Netlify)
* 📱 Make it a PWA for mobile use

---

## 📜 License

This project is **open-source** and available under the **MIT License**.

---

## 👨‍💻 Author

Developed by **\[Shivendra Devadhe]** ☀️
Feel free to fork, contribute, or improve the app!

---