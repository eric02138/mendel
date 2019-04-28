# Mendel's Punnett Square

## Design Considerations
Since someone went to the trouble of creating a [template](https://xd.adobe.com/spec/72ec9d6e-332d-4c4a-6e51-635e283255ee-04dd/), I wanted to try to match it as closely as possible.  

Making the app responsive for various screen resolutions suggested the use of [bootstrap](https://getbootstrap.com/) for layout.

## Development Considerations

The spec stated that the various output displays (the grid, the graph and the genotypic ratio) needed to all respond to the same user inputs.  This requirement suggests some sort of state management.  While I considered using [Vuex](https://vuex.vuejs.org/) (which is awesome, especially for large projects), this app was simple enough that [React](https://reactjs.org/)'s state management would do the job.  

Finally, I used [canvasJS](https://canvasjs.com/) to build the chart, since the documentation had examples of react integration.

## Future Improvements

It's perfect!  Har har.  I kid.

One thing that bothered me was the orientation of the buttons when I made the screen narrow (basic mobile device testing).  At first I considered a script that would dynamically change the direction of the vertically arranged buttons depending on the screen width.  I later realized that on a small device (e.g. a phone), pressing small buttons would be just as annoying.  A better solution would be to convert the buttons into html drop-down menus when the screen is a certain size - most phones have a way of making html form elements more user friendly.  Alas, there wasn't time.

## Installation

To run this app, you will need to install [Node](https://nodejs.org/en/).



### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
