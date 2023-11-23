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