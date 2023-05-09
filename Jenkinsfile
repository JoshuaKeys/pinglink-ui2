pipeline {
    agent any

    environment {
        GIT_AUTHOR_NAME = 'Joshua Oguma'
        GIT_AUTHOR_EMAIL = 'joshua.oguma@outlook.com'
        NPM_TOKEN = credentials('NPM_TOKEN')
        GH_TOKEN = credentials('GH_TOKEN')
        SSH_KEY = credentials('JoshuaKeys')
    }
    triggers {
        pollSCM('*/1 * * * *')
    }
    stages {
        stage('Install Deps') {
            steps {
                nodejs(nodeJSInstallationName: 'nodejs') {
                    sh 'npm install'
                }
            }
        }
        // stage('Patch Version') {
        //     steps {
        //         nodejs(nodeJSInstallationName: 'nodejs') {
        //             sh 'npm version patch'
        //         }
        //     }
        // }
        stage('Build') {
            steps {
                nodejs(nodeJSInstallationName: 'nodejs') {
                    sh 'npm run build:pinglink'
                }
            }
        }
        stage('Publish Npm Library') {
            when {
                anyOf {
                    branch 'master'
                }
            }
            stages {
                stage('publish package') {
                    when {
                        branch 'master'
                    }
                    steps {
                        withCredentials([
                            string(credentialsId: 'NPM_TOKEN', variable: 'NPM_TOKEN'),
                            string(credentialsId: 'GH_TOKEN', variable: 'GH_TOKEN')
                        ]) {
                            nodejs(nodeJSInstallationName: 'nodejs') {
                                sh '''
                                    echo '$SSH_KEY' > ~/.ssh/id_rsa
                                    git add .
                                    git commit -m "release"
                                    git push origin master
                                '''
                            }

                        }
                    }
                }
            }
            
        }
    }
}