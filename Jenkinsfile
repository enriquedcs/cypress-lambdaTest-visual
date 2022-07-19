
pipeline {
    agent any

    tools {nodejs "Node12"}

    environment {
        CHROME_BIN = '/bin/google-chrome'
        
    }

    stages {
        stage('Dependencies') {
            steps {
                sh "./LT -user `himanshu.sheth@gmail.com` -key `BsrXVWCpUDlP84LuJZnUgui9LBbHLichewCaziHKGYgjydbSnP` &"
                sh  "rm -rf LT_Linux.zip"
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

