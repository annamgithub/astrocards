# Astro Cards

![Astro Cards images](https://www.annaexplores.com/static/astrocards-crud-fa3a1a7ac829081f56f135c466a520da.png)

## Introduction
Astro Cards is a full-stack astronomy-themed flashcard application. It was built using ReactJS and Ruby on Rails. You can run it locally using the instructions below, or you can view the version that has been deployed online [here](https://guarded-garden-16317.herokuapp.com/) (give Heroku some time to load).

## How to Run the Application
### Back End
Open your terminal and go to a location where you wish to clone the project, then run:  
`git clone https://github.com/annamgithub/astrocards.git`  
`cd astrocards`  
`npm install`  
`bin/rails s -p 3001`

This will initiate the back end so that the data can be displayed once the front end has been activated.

### Front End
Open a new tab in your terminal:    
`cd client`  
`npm install`  
`npm start`  

This will initiate the front end on http://localhost:3000/.

### ActiveAdmin
In addition to being able create, edit, and delete cards using the front-end user interface, you can easily make such modifications on the back end using [ActiveAdmin](https://activeadmin.info/). Once you have initiated the back end with the `bin/rails s -p 3001` command, you can go to http://localhost:3001/admin/ to access the ActiveAdmin interface.


## Credits: 
* The background animation was sourced from, [Giphy](https://giphy.com/gifs/stars-U3qYN8S0j3bpK).
* Guidance on using ActiveAdmin in a full-stack application [here](https://blog.heroku.com/a-rock-solid-modern-web-stack).

