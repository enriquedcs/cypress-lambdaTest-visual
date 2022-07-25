#!/usr/bin/env groovy

node {
    withEnv(["LT_USERNAME=",
    "LT_ACCESS_KEY=",
    "LT_TUNNEL=true"]){

    echo env.LT_USERNAME
    echo env.LT_ACCESS_KEY 

   stage('setup') { 

      // Get some code from a GitHub repository
    try{
      git 'https://github.com/enriquedcs/cypress-lambdaTest-visual'

      //Download Tunnel Binary
      //sh "wget https://downloads.lambdatest.com/tunnel/v3/mac/64bit/LT_Mac.zip"

      //Required if unzip is not installed
      //sh 'sudo apt-get install --no-act unzip'
      //sh 'unzip -o LT_Linux.zip'

      //Starting Tunnel Process 
      sh "~/downloads/./LT --user ${env.LT_USERNAME} --key ${env.LT_ACCESS_KEY}"
    }
    catch (err){
      echo err
   }

   }
   stage('build') {
      // Installing Dependencies
      sh 'npm install'
    }

   stage('test') {
          try{
          sh 'npm run cypress:ci'
          }
          catch (err){
          echo err
          }  
   }
   stage('end') {  
     echo "Success" 
     }
 }
}

