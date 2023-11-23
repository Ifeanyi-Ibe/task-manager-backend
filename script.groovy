def buildImage() {  
    echo 'Building docker image yet again!!!'
    withCredentials([usernamePassword(credentialsId: 'dockerhub-credentials',
     passwordVariable: 'PASSWORD', usernameVariable: 'USER')]) {
        sh 'docker build -t ifeanyiibe/task-manager:8.0 .'
        sh "echo $PASSWORD | docker login -u ${USER} --password-stdin"
        sh 'echo Pushing image to Dockerhub'
        sh 'docker push ifeanyiibe/task-manager:8.0'
    }
}

