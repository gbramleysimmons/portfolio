import React from 'react';

import dev_preview from "./img/toaster-dribbble_4x.png"
import dev from "./img/bread.png"
import dev2 from "./img/bread2.png"

import thavalon_preview from "./img/thavalon.png"
import thav_game from "./img/thav-game.png"
import thav_home from "./img/thav-home.png"
import thav_info from "./img/thav-info.png"
import thav_new from "./img/thav-new.png"

import dv_prev from "./img/dvprev.png"
import dv1 from "./img/dv1.png"
import dv2 from "./img/dv2.png"
import dv3 from "./img/dv3.png"
import dv4 from "./img/dv4.png"
import dv5 from "./img/dv5.png"

import rr_prev from "./img/rrprev.png"
import rr from "./img/rr.png"
import rr_report from "./rr/rrfinal.pdf"








export const projects = [
    {
        name: "development",
        link: "http://bread-list.herokuapp.com",
        preview: dev_preview,
        role: "Frontend Developer",
        img: [dev, dev2],
        description : (<div>
            <div className={"divider"}>
                For a class on user interfaces, I worked with a partner to create a prototype for a website that would sort and filter kinds of bread based on a variety of qualities, including calories, origin, and price, and would allow a user to ‘favorite’ bread. This website could be used for a bakery to display what kinds of bread they had to offer, or with additional functionality, allow for placing orders online.

            </div >
            <div className={"divider"}>

                We used React.js to allow the website to dynamically update content based on user interaction. The data for the bread is currently stored as Javascript objects, which are loaded as initial state for the main list component. The list passes this data to a component to display a random ‘featured bread’, and creates components for each bread card, passing each component the specific data it needs. These entry components are also given a callback in order to favorite items, which tells the list component which items to display on the favorites list. The list component also keeps track of a filtered version of the list, where the visible contents are determined by the filters on the left side.

            </div>

            <div className={"divider"}>

                For our visual UI design, we decided on a clean, distinctly minimalistic look with several design principles in mind. Visually, we chose a high contrast look with a bright white background with bold black components; further, we employed the use of large amount of whitespace, as well as an organized layout. We also kept usability design principles in mind, and made sure that the page is easy for beginners to pick up, as well as for veterans to efficiently get to their goal.

            </div>


        </div>),
        technologies: "React, CSS"
    },

    {
        name: "thavalon",
        link: "http://thavalon.com",
        preview: thavalon_preview,
        role: "Frontend Developer",
        img: [thav_home, thav_new, thav_game, thav_info],
        technologies: "React, LESS, Kotlin",
        description : (<div>
            <div className={"divider"}>
                Using React and LESS, I created a reactive web app to distribute player information for a custom mod of the board game Avalon. This app is integrated with a Kotlin backend, which uses HTTP endpoints to communicate.

            </div>

            <div className={"divider"}>
                The backend for this app was originally developed to replace a different existing application which was developed in Python, and had a lot of technical debt. The Kotlin was developed to be extensible and modular, but was developed without a server framework in mind. As the algorithmic part of the backend was already written, I wanted to write a better, more usable frontend to allow the backend to be actually accessed by users.

            </div>


            <div className={"divider"}>
                I originally wrote a basic frontend using React without much consideration of usability or design principles, and helped write Kotlin code to create server endpoints. We then deployed the application to Heroku, and connected a custom domain name.

            </div>

            <div className={"divider"}>
                After some feedback from users, and taking a mini online class on user interfaces for an internship, I decided to redesign the visuals of the application to be more modern, readable, and accessible. For this iteration of the design, I prototyped in Adobe XD before implementing using Illustrator, React, and LESS.

            </div>

            </div>)
    },

    {
        name: "dataverse",
        link: "http://dataverse.fun",
        preview: dv_prev,
        role: "Frontend Developer",
        img: [dv1, dv2, dv3, dv4, dv5],
        technologies: "React, LESS, Java",
        description : (<div>
            <div className={"divider"}>
                For a class on software engineering, I worked with a group of three other students to develop a browser-based game to teach middle-school children the fundamentals of data structures. We noticed that there was a lack of non-code based resources to teach the intuition behind popular structures such as binary trees, hashmaps, and linked lists, and we wanted to develop a way to teach these concepts that was also engaging and fun.

            </div>

            <div className={"divider"}>
                We decided to create an open world, space-themed game, in which the user controls a rocket, and can fly around to different planets. They can fly to different planets, each of which will start a mini-game focused on a specific data structure. Through these games, they can also earn coins, which allow them to purchase cosmetics for their rocket. We initially envisioned this game as a single-player experience, but we ended up with extra developer time and so decided to add a multiplayer arena, in which players can challenge other players to compete in multiplayer versions of the games.

            </div>


            <div className={"divider"}>
                I worked specifically on the frontend logic for player movement, login, and menuing, and using websockets to send messages between the frontend and the backend.

            </div>



        </div>)
    },

    {
        name: "responsive redesign",
        preview: rr_prev,
        role: "Frontend Developer",
        img: [rr],
        technologies: "HTML, CSS",
        link: rr_report,
        description : (<div>
            As a student in many large lecture classes, digital forms of communication are frequently important to getting the help I need from teaching assistants and professors. One tool many of my classes use is Piazza, an online platform where students can ask questions which other students and professors can answer, and professors can post course announcements. Piazza is not a particularly well designed site, and its weaknesses are especially clear when viewing on mobile or a different non-standard screen size. In this redesign, I attempted to identify the problems with Piazza’s interface, and address them in wireframes, a high fidelity mockup, and a responsive webpage.


        </div>)
    },







];

export default projects;
