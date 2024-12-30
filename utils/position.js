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