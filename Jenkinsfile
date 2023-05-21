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
                        SERVER = 'pinglink-ui.keyssoft.xyz';
                        TMP_DEST = '/app/tmp/pinglink-ui'
                        DEST = '/app/pinglink-ui'
                        FUNCTIONAL_USER = 'dsp_adm'

                        env.LATEST_VERSION = sh(script: "git describe --tags --abbrev=0", returnStdout: true).trim()
                    }
                    withCredentials([usernamePassword(credentialsId: 'pinglink-deployer', passwordVariable: 'PASSWORD', usernameVariable: 'USERNAME')]) {
                        sh "sshpass -p '${PASSWORD}' ssh -o StrictHostKeyChecking=no ${USERNAME}@${SERVER} sudo rm -rf ${TMP_DEST}"
                        sh "sshpass -p '${PASSWORD}' scp -o StrictHostKeyChecking=no  -r ./dist/pinglink  ${USERNAME}@${SERVER}:${TMP_DEST} && ls -ltr"
                        sh "sshpass -p '${PASSWORD}' scp -o StrictHostKeyChecking=no scripts/deploy_docs.sh ${USERNAME}@${SERVER}:/tmp/deploy_doc_${BUILD_NUMBER}.sh"
                    }
                }
            }
        }
    }
}