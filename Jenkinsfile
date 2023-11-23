def gv

pipeline {
    agent any

    stages {
        stage("init") {
            steps {
                script {
                    gv = load "script.groovy"
                }
            }
        }

        stage("Build docker image") {
            when {
                expression {
                    env.BRANCH_NAME = 'master'
                }
            }
            steps {
                script {
                    gv.buildImage()
                }
            }
        }

        stage("Deploy image") {
            steps {
                script {
                    echo "Deploying image..."
                }
            }
        }

    }
}