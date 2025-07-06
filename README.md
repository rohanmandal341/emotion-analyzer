# 🧠 Emotion Analyzer



A fullstack AI-powered mental health journal that detects emotions and gives personalized wellness tips.



---



## 📌 Overview



This project uses:

- Spring Boot for backend API

- FastAPI with Hugging Face + Gemini for emotion analysis

- React + Vite + Tailwind for the frontend



---



## 📂 Folder Structure



emotion-analyzer/

├── Backend-springboot/

├── ML-model-PY/

├── Front-End-React-vite/



---



## 🚀 How It Works



1\. User enters their thoughts

2\. Backend sends it to Python ML service

3\. Hugging Face detects emotion

4\. Gemini generates a friendly mental health tip

5\. Response shown beautifully on UI



---



## 🖼️ Screenshots






### 🏠 Home Page

![Home Page](docs/home-page.png)



---



### 📝 Analyze Page

!\[Analyze Page](docs/analyze-page.png)



---



### 📊 Response Page

!\[Response Page](docs/response-page.png)



---



## 🔧 How to Run



### 1. Clone the project



```bash

git clone https://github.com/rohanmandal341/emotion-analyzer.git

cd emotion-analyzer

```

##2. Run Python ML Server (FastAPI)


```bash
cd ML-model-PY

pip install -r requirements.txt

```

python app.py

➡️ Add your Gemini API key in .env.local:
```env
api_key=YOUR\_GEMINI\_API\_KEY
```


## 3. Run Spring Boot Backend

```bash

cd Backend-springboot

./mvnw spring-boot:run

```

## 4. Run Frontend (React + Vite)
```bash
cd Front-End-React-vite

npm install

npm run dev
```
---
## 🧠 Powered By

Hugging Face RoBERTa (Emotion Classification)

Google Gemini (AI Tips)

Spring Boot, FastAPI, React, Tailwind CSS
---
## ✅ License

MIT – Free to use and modify

