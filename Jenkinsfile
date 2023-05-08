pipeline {
    agent any

    environment {
        NPM_TOKEN = credentials('NPM_TOKEN')
    }
    stages {
        stage('Test') {
            steps {
                nodejs(nodeJSInstallationName: 'nodejs') {
                    sh 'npm run clean'
                }
            }
        }
    }
}