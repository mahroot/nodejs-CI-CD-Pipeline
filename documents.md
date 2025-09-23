
---

# 📄 Internship Submission Document (short version for report/PDF)

### **Task:** Create a Simple Jenkins Pipeline for CI/CD

**Objective:** Automate the build and deployment of a Node.js app using Jenkins.  
**Tools:** AWS EC2, Jenkins, GitHub, Docker, DockerHub.  
**Deliverable:** A Jenkinsfile to build, push, and deploy the app.  

---

### **Steps Performed**
1. Launched an EC2 instance & installed Jenkins.
2. Configured GitHub webhook → Jenkins auto-trigger on push.
3. Wrote Jenkinsfile with stages:
   - Checkout
   - Build Docker Image
   - Push to DockerHub
   - Deploy 
   4. Tested pipeline → successful automation.

---

### **Outcome**
- Automated Node.js CI/CD pipeline achieved.
- Docker image published on DockerHub.
- App deployed automatically on EC2.  

---
