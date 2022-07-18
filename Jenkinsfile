
pipeline {

  agent any

    tools {nodejs "node"}

  node {
      withEnv(["LT_USERNAME=enrique.decoss@gmail.com",
      "LT_ACCESS_KEY=rJdr2OmT4MRQl6Gxx3G8fuhtQljuLx11NheW2WSwCWdfpSTiuX",
      "LT_TUNNEL=true"]){

      echo env.LT_USERNAME
      echo env.LT_ACCESS_KEY 
      
    stage('setup') { 
    
        // Get some code from a GitHub repository
      try{
        git 'https://github.com/enriquedcs/cypress-lambdaTest-visual.git'

        //Download Tunnel Binary
        sh "wget http://downloads.lambdatest.com/tunnel/linux/64bit/LT_Linux.zip"

        //Required if unzip is not installed
        sh 'sudo apt-get install --no-act unzip'
        sh 'unzip -o LT_Linux.zip'

        //Starting Tunnel Process 
        sh "./LT -user ${env.LT_USERNAME} -key ${env.LT_ACCESS_KEY} &"
        sh  "rm -rf LT_Linux.zip"
      }
      catch (err){
        echo err
    }
      
    }
    stages {
      stage('build and test') {
        environment {
          // we will be recording test results and video on Cypress dashboard
          // to record we need to set an environment variable
          // we can load the record key variable from credentials store
          // see https://jenkins.io/doc/book/using/using-credentials/
          CYPRESS_RECORD_KEY = credentials('cypress-example-kitchensink-record-key')
        }

        steps {
          sh "npm run cypress:ci"
        }
      }    
    stage('end') {  
      echo "Success" 
      }
  }
}
