# Tech-Blog
[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)]

# Description
Writing about tech can be just as important as making it. Developers spend plenty of time creating new applications and debugging existing codebases, but most developers also spend at least some of their time reading and writing about technical concepts, recent advancements, and new technologies. A simple Google search for any concept covered in this course returns thousands of think pieces and tutorials from developers of all skill levels!

Challenge is to build a CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well. You’ll build this site completely from scratch and deploy it to Heroku. Your app will follow the MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication.

My challenge was to build the back end for an e-commerce site. I took a working Express.js API and configure it to use Sequelize to interact with a MySQL database.
# Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Questions](#questions)
# Installation 
After you have cloned the repo, use npm i to install all of the dependencies. Add a .env file to the root of your project directory. This will allow you to connect to your MySQL database. Ex.
```
DB_NAME=tech_blog
DB_Password=""
DB_USER="root"
```
# Usage
After the installation is finished...

1. Create a MySQL database on your local machine using the schema.sql file located in the /db/ directory(From the MySQL CLI, source db/schema.sql)
2. Seed the database with sample data to be used for testing purposes(Run npm run seed from inside the root directory of the project)
Now you're ready to start the application! You can start the server by running:
```
node server.js
```
<img width="1417" alt="Screenshot 2023-02-02 at 4 15 16 PM" src="https://user-images.githubusercontent.com/112808494/216452372-359f5f5d-b242-4e74-9535-bacb75a51f0b.png">

<img width="1403" alt="Screenshot 2023-02-02 at 4 16 20 PM" src="https://user-images.githubusercontent.com/112808494/216452452-2ec0f403-d186-4c7d-864d-59b5be248a50.png">
 
<img width="1422" alt="Screenshot 2023-02-02 at 4 16 36 PM" src="https://user-images.githubusercontent.com/112808494/216452580-69a61245-cc74-4f78-be11-98b5a7ca9f90.png">

# License 
This project is licensed under the MIT license.
## Licenses
    This project is covered under the MIT license. To learn more about what this means, click the license button at the top.
# Questions:
* Email: ezinmark@gmail.com
* Github: https://github.com/Ezmaa
* LinkedIn: [[Ezinma-Nwankwo](linkedin.com/in/ezinma-nwankwo-3b7905234)]
