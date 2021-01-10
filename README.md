# Frontend Assessment

## Project Preview 

Initial page
![Preview-1](https://res.cloudinary.com/dloh9txdc/image/upload/v1610230317/General%20Projects/3Shopify-Frontend-Assessment_ukd65m.png)

Searching for movies for nomination using carousel
![Preview-2](https://res.cloudinary.com/dloh9txdc/image/upload/v1610230318/General%20Projects/2Shopify-Frontend-Assessment_hzh1qm.png)

Nominated movies display using carousel - User can remove movies from the list
![Preview-4](https://res.cloudinary.com/dloh9txdc/image/upload/v1610230318/General%20Projects/0Shopify-Frontend-Assessment_xaohlt.png)

Displaying movies with default image for movies withour poster
![Preview-6](https://res.cloudinary.com/dloh9txdc/image/upload/v1610230317/General%20Projects/1Shopify-Frontend-Assessment_wmrxpm.png)

A banner is displayed when user chooses the last nominee. All "Nominate" buttons will be disabled
![Preview-5](https://res.cloudinary.com/dloh9txdc/image/upload/v1610231830/General%20Projects/4Shopify-Frontend-Assessment_qxce7g.png)

Fixed arrow icon for easy access to return to the top of the page with smooth scrolling
![Preview-6](https://res.cloudinary.com/dloh9txdc/image/upload/v1610245735/General%20Projects/5Shopify-Frontend-Assessment_hiu33k.png)

Responsive <br />
![Preview-7](https://res.cloudinary.com/dloh9txdc/image/upload/v1610245884/General%20Projects/6Shopify-Frontend-Assessment_lfgnpj.png)

<br />
<!---
### Checkout the project [demo here](needs-to-work-ondemo)
---> 
<br />

---

### Table of Contents

- [The Challenge](#thechallenge)
- [Technical requirements](#technical-requirements)
- [Installation](#installation)
- [References And Technologies](#references-and-technologies)
- [Author Info](#author-info)

---

## The Challenge

A webpage that can search OMDB for movies, and allow the user to save their favourite films they feel should be up for nomination. When they've selected 5 nominees they should be notified they're finished.

#### We'd like a simple to use interface that makes it easy to:
- Search OMDB and display the results (movies only)
- Add a movie from the search results to our nomination list
- View the list of films already nominated
- Remove a nominee from the nomination list

[Back To The Top](#frontend-assessment)

## Technical requirements

- Search results should come from OMDB's API (free API key: http://www.omdbapi.com/apikey.aspx).
- Each search result should list at least its title, year of release and a button to nominate that film.
- Updates to the search terms should update the result list
- Movies in search results can be added and removed from the nomination list.
- If a search result has already been nominated, disable its nominate button.
- Display a banner when the user has 5 nominations.

[Back To The Top](#frontend-assessment)

---

## Installation

1. Fork and clone the repo
1. npm install

[Back To The Top](#sirius)

---

## References and Technologies

#### Technologies
- HTML
- CSS/[SASS](https://sass-lang.com/documentation/variables)
- Javascript
- React

#### Libraries
- [Semantic UI React](https://react.semantic-ui.com/)

#### Packages
- [React-With-Smooth-Scrolling](https://github.com/do-community/React-With-Smooth-Scrolling)
- [React-Elastic-Carousel](https://www.npmjs.com/package/react-elastic-carousel)
- [Font Awesome](https://fontawesome.com/how-to-use/on-the-web/using-with/react)

#### Notes
In this project I used mixins to avoid repetition on my .scss files, I followed the [BEM methodology](http://getbem.com/introduction/) (Block Element Modifier), and Sass variables.

[Back To The Top](#frontend-assessment)

---

## Author Info

- LinkedIn - [Marlon Braga](https://www.linkedin.com/in/marlon-braga/)
- Portfolio - [Currently unavailable and under construction](https://www.youtube.com/watch?v=oHg5SJYRHA0&ab_channel=cotter548)

[Back To The Top](#frontend-assessment)
