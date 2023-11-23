pipeline {
    agent any

    stages {
        stage("Build docker image") {
            steps {
                script {
                    echo "Building docker image"
                    withCredentials([usernamePassword(credentialsId: 'dockerhub-credentials', passwordVariable: 'PASSWORD', usernameVariable: 'USER')]) {
                        sh "docker build -t ifeanyiibe/task-manager:8.0 ."
                        sh "echo $PASSWORD | docker login -u ${USER} --password-stdin"
                        sh "echo Pushing image to Dockerhub"
                        sh "docker push ifeanyiibe/task-manager:8.0"
                    }

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