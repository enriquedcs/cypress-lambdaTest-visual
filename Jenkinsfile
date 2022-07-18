
pipeline {
    agent any

    tools {nodejs "Node12"}

    environment {
        CHROME_BIN = '/bin/google-chrome'
    }

    node {
    withEnv(["LT_USERNAME=himanshu.sheth@gmail.com",
    "LT_ACCESS_KEY=BsrXVWCpUDlP84LuJZnUgui9LBbHLichewCaziHKGYgjydbSnP",
    "LT_TUNNEL=true"]){

    echo env.LT_USERNAME
    echo env.LT_ACCESS_KEY
     

    stages {
        stage('Setup') {
            steps {
                sh "./LT -user ${env.LT_USERNAME} -key ${env.LT_ACCESS_KEY} &"
                sh  "rm -rf LT_Linux.zip"
            }
        }
        stage('Dependencies') {
            steps {
                sh 'npm i'
            }
        }
        stage('e2e Tests') {
            steps {
                sh 'npm run cypress:ci'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}
}