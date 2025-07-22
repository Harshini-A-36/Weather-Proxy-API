
---

# 🌦️ Weather Proxy API

This is a simple Node.js backend project that acts as a proxy to fetch weather data for any city using the OpenWeatherMap API. It securely manages the API key using environment variables and provides clean weather data through a single endpoint.

---

## 🚀 How to Run the Project

### 1. Clone the Repository

```bash
git clone https://github.com/Harshini-A-36/Weather-Proxy-API.git
cd Weather-Proxy-API
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Your `.env` File

Create a `.env` file in the root of the project and add your OpenWeatherMap API key:

```env
WEATHER_API_KEY=your_api_key_here
```

🔑 Get your free API key here: [https://openweathermap.org/api](https://openweathermap.org/api)

### 4. Start the Server

```bash
node index.js
```

✅ Server runs on: `http://localhost:3000`

---

## 🌐 Sample API Request

Send a GET request to:

```
http://localhost:3000/weather?city=Chennai
```

### ✅ Sample Output

```json
{
  "city": "Chennai",
  "temperature": "31.7°C",
  "condition": "Clouds",
  "description": "overcast clouds",
  "humidity": "66%",
  "wind": "5.83 m/s"
}
```

---

## 🛠️ Tech Stack

* **Node.js** – JavaScript runtime
* **Express.js** – Web framework
* **dotenv** – Manage environment variables
* **axios** – Make HTTP requests

---

## 🧑‍💻 Author

**Harshini A**

Backend Developer | AI & Data Science Enthusiast

📧 [aharshini022@gmail.com](mailto:aharshini022@gmail.com)

🔗 [GitHub Profile](https://github.com/Harshini-A-36)

---

## 📄 License

This project is open-source and available under the [MIT License](https://chatgpt.com/c/LICENSE).

---

## ⭐️ Show Your Support

If you like this project, give it a ⭐️ on GitHub and consider sharing it with others!
