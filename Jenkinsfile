pipeline {
    agent any

    environment {
        NPM_TOKEN = credentials('NPM_TOKEN')
    }
    stages {
        stage('Install Deps') {
            steps {
                nodejs(nodeJSInstallationName: 'nodejs') {
                    sh 'npm install'
                }
            }
        }
        stage('Patch Version') {
            steps {
                nodejs(nodeJSInstallationName: 'nodejs') {
                    sh 'npm version patch'
                }
            }
        }
        stage('Build') {
            steps {
                nodejs(nodeJSInstallationName: 'nodejs') {
                    sh 'npm run build:pinglink'
                }
            }
        }
        stage('Publish Npm Library') {
            steps {
                nodejs(nodeJSInstallationName: 'nodejs') {
                    sh 'npm publish'
                }
            }
        }
    }
}