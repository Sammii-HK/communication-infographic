# Communication Infographic

A front-end app, which is a rework of my Dissertation in the History of Communication.

## Details

### Time Frame

2 Days

### Technologies Used

* React 19
* JavaScript (ES6)
* Bulma (CSS framework)
* Framer Motion (animations)
* CSS

### App Overview

This project was first created in 2016 as my BA(Hons) Graphic Design dissertation. It's an interactive Infographic which covers the History of Communication. I really wanted to push the boundaries of what was possible within designing my dissertation, not wanting to settle for an essay format.

I relished this opportunity to push my design skills and moulded the constraints of the brief so that I was able to create my first website from the information of my dissertation in a creative and unusual way, which actually enhanced the experience of engaging with the essay.

The application is deployed on Vercel and can be found here: [Communication Timeline Infographic](https://communication-infographic.vercel.app/)

#### Development Process

To get myself started with few distractions I worked on a JS, Pug & Express app at first, once the functionality was tested I then migrated my work and adapted my functions to a React app, allowing me greater scope to build onto the project in the future.

##### getTimelineData

Function to create axis positions based on the container width and item year.

##### Y Axis

To place the items along the timeline on the y-axis I created a function.

```js
const yAxis = (item.year - 1425) * y;
```

This function first sets a base value of 10, so 1 year is equivalent of 10px.

It then maps over the data to read the year value within each item object. It uses this value to subtract 1425, this is for visual purposes as the timeline starts at the year 1440, so removes the initial white space. It then takes the value and times it by the base value set for the pixels, so that value can be used to transform the object to 'z'px on the y-axis.

It then sets the data back to state, with a new key of yAxis and the value created.

##### X Axis

The X-Axis function is a little more complex as it is not constant.

```**js**
const xAxis = Math.round(Math.random() * (timelineWidth / 2) - 1) * (Math.random() < 0.5 ? -1 : 1)
```

This function creates a random number which is half of the timelineWidth and is either positive or negative.

The logic behind this is that the items are centered within the viewport, so to scatter them I first find a random number which is half of the timeline container width and then randomly make this number positive or negative to offset the items to the left or right of the centre.

#### Functionality

The site utilizes interactive features to engage the audience.

A roll over affect allows the user to clearly point mark out an individual item using scale and color to define it.

![Screenshot 2020-01-13 at 19 01 53](https://user-images.githubusercontent.com/40900195/72283888-a6eef200-3637-11ea-8c5f-9cf39a1aa0df.png)

Each item can be clicked on, which will open up a modal window. 
The modal contains more information about each item, which is present in the JSON data and is being loaded.

![Screenshot 2020-01-13 at 19 02 09](https://user-images.githubusercontent.com/40900195/72283887-a6eef200-3637-11ea-9987-5e96b0793aaf.png)

The timeline starts at 1440, which was chosen as it was the year the printing press was invented, and spans across centuries of communication history all the way to 2024, covering modern innovations like ChatGPT, Threads and Apple Vision Pro.

![Screenshot 2020-01-13 at 19 02 49](https://user-images.githubusercontent.com/40900195/72283889-a6eef200-3637-11ea-9f54-0b00ad6d700f.png)

### Challenges & Achievements

The overlap check function was necessary due to the random nature of the data plotting.

## Recent Features

* **Extended timeline** — 8 new entries from 2011 to 2024 (Snapchat, Slack, WhatsApp, TikTok, Zoom, ChatGPT, Threads, Apple Vision Pro)
* **Search** — filter timeline items by title in real time
* **Category filters** — toggle invention, typography and movement categories on/off
* **Year indicator** — fixed badge showing the current year as you scroll
* **Timeline scrubber** — minimap on the right edge with click-and-drag navigation to jump to any century
* **Scroll-triggered animations** — items fade and scale in as they enter the viewport (Framer Motion)
* **Modal animations** — fade/slide entrance and exit transitions
* **Accessibility** — full keyboard navigation (Tab, Enter/Space, Escape), ARIA roles, focus trapping in the modal, focus restoration on close
* **Category shape indicators** — circle, diamond and triangle markers for colourblind-safe distinction
* **Visual polish** — vertical timeline axis, item card backgrounds, focus-visible outlines

## Future enhancements

* Adding images & Wikipedia links to timeline entries
* Touch/swipe support for the timeline scrubber on mobile
