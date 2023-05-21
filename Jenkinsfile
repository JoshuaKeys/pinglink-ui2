pipeline {
    agent any

    environment {
        GIT_AUTHOR_NAME = 'Joshua Oguma'
        GIT_AUTHOR_EMAIL = 'joshua.oguma@outlook.com'
        NPM_TOKEN = credentials('NPM_TOKEN')
        GH_TOKEN = credentials('GH_TOKEN')
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
        // stage('Publish Npm Library') {
        //     steps {
        //         nodejs(nodeJSInstallationName: 'nodejs') {
        //             sh 'npm run semantic-release'
        //         }
        //     }
        // }
        stage('Deployment') {
            when {
                branch 'master'
            }

            steps{
                nodejs(nodeJSInstallationName: 'nodejs') {
                    script {
                        SERVER = 'storybook.pinglink.keyssoft.xyz';
                        TMP_DEST = '/app/tmp/pinglink-ui'
                        DEST = '/app/pinglink-ui'
                        FUNCTIONAL_USER = 'dsp_adm'

                        env.LATEST_VERSION = sh(script: "git describe --tags --abbrev=0", returnStdout: true).trim()
                    }
                }
            }
        }
    }
}