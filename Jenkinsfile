pipeline {
    agent any

    tools {
        // Install the Node version configured tool
        nodejs "mynodejs"
    }

    stages {
        stage('Source Code Checkout') {
            steps {
                echo 'COVID-19 Project GitHub Repository Code Checkout'
                // Get some code from a GitHub repository
                git 'https://github.com/Sasibeeke/covid-19-app.git'
                
            }
        }
        stage('Install Dependency') {
            steps {
                sh 'npm install'
            }
        }
        stage('Build Phase') {
            steps {
                echo 'Build Phase'
                sh 'npm run build'
            }
        }
        stage('Deployment Phase') {
            steps {
                echo 'Deployement is in progress'
            }
        }
    }
}
