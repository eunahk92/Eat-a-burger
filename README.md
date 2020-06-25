# Eat-a-burger
Eat-A-Burger! is a restaurant app using MySQL, Node, Express, Handlebars and ORM that lets users input the names of burgers they'd like to eat.

## Link to deployed application on Heroku
[Eat-A-Burger!](https://hidden-scrubland-09098.herokuapp.com/)

#### Directory structure
```
.
├── config
│   ├── connection.js
│   └── orm.js
│ 
├── controllers
│   └── burgers_controller.js
│
├── db
│   ├── schema.sql
│   └── seeds.sql
│
├── models
│   └── burger.js
│ 
├── node_modules
│ 
├── package.json
│
├── public
│   └── assets
│       ├── css
│       │   └── burger_style.css
│       └── img
│           └── burger.png
│   
│
├── server.js
│
└── views
    ├── index.handlebars
    └── layouts
        └── main.handlebars
```

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Questions](#questions)

## Installation
```
npm i
```

## Usage
The user can enter any burger to be consumed. The burger will populate on the left until the user clicks "eat", in which it will populate to the right. All burgers are logged in mySQL database and can be added, updated, and removed.

![](public/assets/eataburger.gif)


## Questions
If you have any questions about the repo, open an issue or contact [Eunahk92](https://github.com/eunahk92) directly at Eunahkim92@gmail.com.