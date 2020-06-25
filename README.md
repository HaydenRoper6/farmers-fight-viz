# farmers-fight-viz
A repository for the farmers-fight Visa Inter hackathon team.

# Getting Started
- First time working on project
  > download the .env file from our team, and place it in the root directory. DO NOT commit this file.

- Each time you work on the project / do a new feature: 
- Checkout the develop branch
  > git checkout develop  
  > git pull origin develop
  
- Create a feature branch to work on
  > git checkout -b ft-cole-newFeature develop
  
- Update your packages (needs to be done everytime you pull code, as new packages could have been added to the project)
  > npm i

- Run the app
  > node app.js
  
- You should see the console output:
  > App Listening: [OK]  
  > Attempting DB Connection: [OK]

  
- Visit localhost:8080/

- When editing an ejs file, you do not need to restart the server for changes to take effect. JS files need the server to be restarted to take effect.
  > see nodemon for a solution for auto restarting

# Commiting and Merging Changes
- add and git commit your files to your local branch
  > git add .  
  > git commit -m "Add feature items."  
  > git push origin ft-cole-newFeature  
- open a PR at https://github.com/cmskim/farmers-fight-viz/compare  
  > base branch: develop  
  > compare: your branch  
  > submit PR  
