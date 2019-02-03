# Motivation
This repository showcases the use of state machines to modelize user interfaces. The chosen 
technologies are :
 - [hyperscript](https://github.com/infernojs/inferno) for describing the screens of the interface in a portable way
 - [inferno](https://github.com/infernojs/inferno) for rendering
 - [state-transducer](https://github.com/brucou/state-transducer) as state machine library
 - web components in order to have a reusable and portable implementation
 
 Portability was important as the underlying idea is to port this application into many different
  front-end frameworks. So far, implementation exists for :
  - [nerv](https://github.com/brucou/movie-search-app-nerv)
  - [react](https://codesandbox.io/s/kwn3lx2qx7)
  - [ivi](https://github.com/brucou/movie-search-app-ivi)
  - [svelte](https://github.com/brucou/movie-search-app-svelte)

# Installation and execution
The application is built with parcel. To run it :

`npm install`

`npm run start`

Alternatively, you can peruse the [codesandbox](https://codesandbox.io/s/9zjo5yx8po).

# State machine
The state machine modelizing the search application is as follows :

![](movie%20search%20good%20fsm%20corrected%20flowchart%20no%20emphasis%20switchMap.png)
