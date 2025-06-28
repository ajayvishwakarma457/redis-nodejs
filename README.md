# Redis Node.js API Server

This project is a backend application built with **Node.js** and **Redis** that demonstrates:
- Redis integration for caching
- Rate limiting middleware
- IP tracking
- A sample product API

It follows a clean and modular architecture ideal for learning or extending into production use.

---

## 🚀 Features

- 🔄 **Redis Integration** with a custom client
- 🧠 **Rate Limiting** using Redis TTL
- 👁️ **IP Tracking Middleware**
- 🛒 **Product API** to simulate cache-driven data retrieval
- 📁 Scalable folder structure

---

## 📁 Project Structure

redis-nodejs/
├── notes/
│ └── redis-cheatsheet.txt # Handy Redis CLI commands
├── server/
│ ├── api/
│ │ └── products.js # Product endpoint with Redis cache
│ ├── middleware/
│ │ ├── ipTracker.js # Logs user IPs
│ │ ├── rateLimiter.js # Limits requests per IP
│ │ └── redis.js # Redis middleware wrapper
│ ├── services/
│ │ └── redisClient.js # Redis connection and helper functions
├── app.js # Main entry point
├── .env # Environment variables
├── .gitignore
├── package.json
├── package-lock.json
└── README.md



---

## ⚙️ Setup Instructions

### 1. Prerequisites

- Node.js ≥ 14.x
- Redis server running locally or remotely

---

### 2. Installation

```bash
git clone https://github.com/ajayvishwakarma457/redis-nodejs.git
cd redis-nodejs
npm install

Create a .env file and configure:
  REDIS_URL=redis://localhost:6379
  PORT=5000

Run the Server
  node app.js

🧪 Sample Endpoints
  Method	  Endpoint	        Description
  GET	      /api/products	    Returns cached or fresh product data


🧰 Technologies Used
  Node.js
  Express.js
  Redis – Caching & TTL-based rate limiting
  Custom Middleware


🧑‍💻 Author
**Author:** Ajay M Vishwakarma  
**Email:** ajayvishwakarma457@gmail.com


