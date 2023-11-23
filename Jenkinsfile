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
                    env.BRANCH_NAME = 'main'
                }
            }
            steps {
                script {
                    gv.buildImage()
                }
            }
        }

        stage("Deploy image") {
            when {
                expression {
                    env.BRANCH_NAME = 'main'
                }
            }
            steps {
                script {
                    echo "Deploying image..."
                }
            }
        }

    }
}