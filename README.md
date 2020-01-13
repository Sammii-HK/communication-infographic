# Communication Infographic

## A history of communication, after 1440

[Live Site](http://onsetlondon.herokuapp.com/): [http://XX.herokuapp.com](http://onsetlondon.herokuapp.com/)

## Timeframe

6 days

## Technologies

- React
- Webpack
- Express
- Ajax
- JavaScript (ES6)
- HTML5
- Bulma (CSS framework)
- SCSS
- GitHub
- React Select

## Project brief

The brief was to build a full-stack application with a React front-end which was running an Express server to load the data which was stored as JSON.

The application is deployed via Git on Heroku and can be found here: [XX](http://xx.herokuapp.com/)

### App overview

My first task, I set about working the algorithms needed for my functions, to place all items on the page. I chose to place the items with maths instead of hard coding the positions, as this added an extra layer of interactivity as every time the page is refreshed the x-axis changed.



[![image](https://user-images.githubusercontent.com/40695746/57919387-a3c91980-7890-11e9-8ce1-8df3f62eeed0.png)](https://user-images.githubusercontent.com/40695746/57919387-a3c91980-7890-11e9-8ce1-8df3f62eeed0.png)

#### Development process

To get myself started with few distractions I worked on a JS, Pug & Express app at first, once the functionality was tested I then migrated my work and adapted my functions to a React app, allowing me greater scope to build onto the project in the future.

##### Project Origins

This project was first created in 2016 as my BA(Hons) Graphic Design dissertation. It's an interactive Infographic which covers the History of Communication. I really wanted to push the boundaries of what was possible within designing my dissertation, not wanting to settle for an essay format.

I relished this opportunity to push my design skills and moulded the constraints of the brief so that I was able to create my first website from the information of my dissertation in a creative and unusual way, which actually enhanced the experience of engaging with the essay.

This project was created with Adobe Muse and was created to be viewed on large desktop screens, the live project can be viewed [here](https://sammiidesign.co.uk/communication_infographic_may16/).

#### Server Side

As the basis of the site was my dissertation I wanted a clean way to handle such a lage amount of data, so chose to convert the essay into JSON, which would be retrieved with Express, and loaded onto my React front end.

```javascript
getData() {
    axios.get('api/data')
      .then(res => {
        this.yAxis(res.data)
      })
      .then(() => console.log(this.state.timeline))
      .catch(err => console.error(err))
  }
```

##### Adding new locations

#### Scrolling the Location Index and map focus



#### Responsive design

We decided that having a good mobile experience was particularly important for this app as it's use would be one the move, walking round London visiting the locations.

Media queries are used to adjust the experience.

### Future enhancements

- Adding a lookup to the film database OMDB to populate new film images and film information.
- Make scene note editing inline rather than via a separate page.
