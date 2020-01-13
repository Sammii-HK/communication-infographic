# Communication Infographic

## A history of communication, after 1440

[Live Site](https://communication-timeline.herokuapp.com/#/): [communication-timeline.herokuapp.com/](https://communication-timeline.herokuapp.com/)

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

The application is deployed via Git on Heroku and can be found here: [Communication Timeline Infographic](https://communication-timeline.herokuapp.com/)

### App overview

My first task, I set about working the algorithms needed for my functions, to place all items on the page. I chose to place the items with maths instead of hard coding the positions, as this added an extra layer of interactivity as every time the page is refreshed the x-axis changed.



![Screenshot 2020-01-13 at 19 01 45](https://user-images.githubusercontent.com/40900195/72283885-a6565b80-3637-11ea-80f1-78ed41f5db48.png)

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



#### Y Axis

To place the items along the timeline on the y-axis I created a function.

```js
yAxis(data) {
    const y = 10
    const timeline = data.data.map(item => {
      const yAxis = (item.year - 1425) * y
      return { ...item, yAxis }
    })
    this.setState({ timeline })
    this.xAxis()
  }
```

This function first sets a base value of 10, so 1 year is exquivalent of 10px.

It then maps over the data to read the year value within each item object. It uses this value to subtract 1425, this is for visual purposes as the timeline starts at the year 1440, so removes the inital white space. It then takes the value and times it by the base value set for the pixels, so that value can be used to transform the object to 'z'px on the y-axis.

It then sets the data back to state, with a new key of yAxis and the value created.

#### X Axis

The X-Axis function is a little more complex as it is not constant.

##### Main Function

```js
xAxis() {
    const timeline = this.state.timeline.map((item, i) => {
      const xAxis = this.randomNumber()
      return { ...item, xAxis }
    })
    this.setState({ timeline })
    this.overlapCheck()
  }
```

The main function maps over the data set to state, it then creates a random number and sets the data back to state with the new key and value for xAxis.

##### Random Number

```js
randomNumber() {
    const width = document.getElementById('timeline').offsetWidth
    // MAKE A RANDOM VALUE WHICH IS HALF OF TIMELINE WIDTH
    let randomValue = Math.round(Math.random() * (width / 2) - 1)
    // RANDOMLY MAKE THE VALUE POSITIVE OR NEGATIVE
    randomValue = randomValue * this.posOrNeg()
    return randomValue
  }
```

The logic behind placing items on the x-axis is that the items are centered within the viewport, so to scatter them I first find a random number which is half of the timeline container width.
I then randomly make this number positive or negative to offset the items to the left or right of the centre.

This randomly generated value is set to the xAxis variable and set to state.

#### Functionality

The site utalises interative features to engage the audience.

A roll over affect allows the user to clearly point mark out an individual item using scale and colour to define it.

![Screenshot 2020-01-13 at 19 01 53](https://user-images.githubusercontent.com/40900195/72283888-a6eef200-3637-11ea-8c5f-9cf39a1aa0df.png)

Each item can be clicked on, which will open up a modal window. 
The modal contains more information about each item, which is present in the JSON data and is being loaded.

![Screenshot 2020-01-13 at 19 02 09](https://user-images.githubusercontent.com/40900195/72283887-a6eef200-3637-11ea-9987-5e96b0793aaf.png)

The timeline starts at 1440, which was chosen as it was the year the printing press was invented, and spans across a few centuries, until it covers modern day communication techniques used today, to about 2010.

![Screenshot 2020-01-13 at 19 02 49](https://user-images.githubusercontent.com/40900195/72283889-a6eef200-3637-11ea-9f54-0b00ad6d700f.png)

### Future enhancements

- Working on the overlap check function
- Adding more data to the timeline lines, such as: images, Wikipedialinks
- Add to the functionality of the site
  - Create a search feature
  - Create a timeline navigation to 'jump' to a specific century
  - Add more visual enhancements
  - Make a database which can be added to, edited or deleted from.
