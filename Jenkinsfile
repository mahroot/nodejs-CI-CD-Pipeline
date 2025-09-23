pipeline {
    agent any
    
    environment {
        DOCKERHUB_CREDENTIALS = credentials('docker-hub') 
        IMAGE_NAME = "omrajput/nodejs-automation"           
    }

    stages {

        
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/mahroot/nodejs-CI-CD-Pipeline.git'
            }
        }

        
        stage('Build Docker Image') {
            steps {
                sh 'docker build -t $IMAGE_NAME:latest .'
            }
        }

        
        stage('Push to DockerHub') {
            steps {
                sh '''
                  # Login to DockerHub using Jenkins credentials
                  echo "$DOCKERHUB_CREDENTIALS_PSW" | docker login -u "$DOCKERHUB_CREDENTIALS_USR" --password-stdin
                  
                  # Push the Docker image
                  docker push $IMAGE_NAME:latest
                '''
            }
        }

        
        stage('Deploy') {
            steps {
                   sh 'docker run -d -p 3000:3000 $IMAGE_NAME:latest'
            }
        }
    }

    //  post actions (cleanup, notifications)
    post {
        success {
            echo "Docker image pushed successfully!"
        }
        failure {
            echo "Pipeline failed!"
        }
    }
}
