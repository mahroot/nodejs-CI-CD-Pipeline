Got it Rajput ✅ — you want the README to look **developer-friendly**, not only internship style.
Something like: *Tech stack used, how to run locally, which port app runs on, and CI/CD flow*.

Here’s the **clean README** for your repo:

---

# Node.js CI/CD Pipeline with Jenkins & Docker

## 📌 Project Overview

This project demonstrates a **CI/CD pipeline** for a simple Node.js application using:

* **GitHub** → Version control & Webhook trigger
* **Jenkins** → CI/CD automation server
* **Docker** → Containerization
* **DockerHub** → Image registry
* **AWS EC2** → Deployment environment

---

## ⚙️ Tech Stack

* **Node.js** – sample web application
* **Docker** – build & run containers
* **Jenkins** – automate build, test, deploy pipeline
* **AWS EC2** – host Jenkins and deploy containers

---

## 📂 Project Structure

```
nodejs-CI-CD-Pipeline/
│── app.js              # Simple Node.js app
│── package.json        # Node.js dependencies
│── Dockerfile          # Build Node.js app into container
│── Jenkinsfile         # CI/CD pipeline
│── README.md           # Documentation
```

---

## ▶️ Run Application Locally

1. Clone the repo:

   ```bash
   git clone https://github.com/mahroot/nodejs-CI-CD-Pipeline.git
   cd nodejs-CI-CD-Pipeline
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the app:

   ```bash
   node app.js
   ```

4. Open in browser:

   ```
   http://localhost:3000
   ```

---

## 🐳 Run with Docker

1. Build the image:

   ```bash
   docker build -t nodejs-automation .
   ```

2. Run the container:

   ```bash
   docker run -d -p 3000:3000 nodejs-automation
   ```

3. Access app at:

   ```
   http://<EC2-IP>:3000
   ```

---

## 🔄 CI/CD Workflow

1. **Developer pushes code** → GitHub.
2. **Webhook triggers Jenkins** pipeline.
3. Jenkins:

   * Clones repo
   * Builds Docker image
   * Pushes image to **DockerHub**
   * Deploys container on **EC2**
4. App runs on `http://<EC2-IP>:3000`.

---

