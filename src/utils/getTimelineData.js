import data from '../data.json';

  // overlapCheck() {
  //   const timelineDOM = document.getElementById('timeline')
  //   const width = timelineDOM.offsetWidth
  //   // const paddingValue = 0
  //   const paddingValue = width / 12
  //   const timeline = this.state.timeline.map((currentItem, i) => {
  //     // let xAxis = currentItem.xAxis
  //     const withinTenYears = []
  //
  //     console.log('current:', currentItem.title, currentItem.year, currentItem.xAxis)
  //
  //     for (let comparableIndex = 0; comparableIndex <= i; comparableIndex ++) {
  //
  //       if ((this.state.timeline[comparableIndex].year + 10) >= currentItem.year) {
  //         withinTenYears.push(this.state.timeline[comparableIndex].xAxis)
  //       }
  //     }
  //     // REMOVE LAST ITEM AS IT IS ITSELF
  //     withinTenYears.pop()
  //     console.log('withinTenYears', withinTenYears)
  //
  //     // // MAP WITHIN TEN YEARS ARRAY
  //     // while (withinTenYears.some(value => {
  //     //   return currentItem.xAxis >= (value - paddingValue) && currentItem.xAxis <= (value + paddingValue)
  //     // })
  //     // ) {
  //     //   // MAKE A NEW NUMBER
  //     //   const newNumber = this.randomNumber()
  //     //   console.log('new number', newNumber)
  //     //   // SET XAXIS VALUE FOR USE LATER
  //     //   currentItem.xAxis = newNumber
  //     // }
  //     return currentItem
  //   })
  //   this.setState({ timeline })
  // }

const getTimelineData = (timelineWidth) => {
  const timelineData = data.data;

  const timelineWithAxisPositions = timelineData.map((item, i) => {
    const yAxis = (item.year - 1425) * 10

    const xAxis = Math.round(Math.random() * (timelineWidth / 2) - 1) * (Math.random() < 0.5 ? -1 : 1)
    return { ...item, yAxis, xAxis }
  })

  return timelineWithAxisPositions;
  
}

export default getTimelineData;