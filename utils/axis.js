// yAxis(data) {
//   const y = 10
//   const timeline = data.data.map(item => {
//     const yAxis = (item.year - 1425) * y
//     return { ...item, yAxis }
//   })
//   this.setState({ timeline })
//   this.xAxis()
//   console.log('this.state.timeline');
// }

// xAxis() {
//   const timeline = this.state.timeline.map((item, i) => {
//     // const xAxis = 50
//     // console.log('*', item, i)

//     // const timelineDOM = document.getElementById('timeline')
//     //
//     // const oneTwentiethPageWidth = timelineDOM.offsetWidth / 6

//     let xAxis = this.randomNumber()

//     const lastxAxisValue = this.state.xAxisValues[this.state.xAxisValues.length - 1]
//     console.log('lastxAxisValue', lastxAxisValue);
//     while (lastxAxisValue > (xAxis + 200) || lastxAxisValue < (xAxis - 200)) {
//       xAxis = this.randomNumber()
//     }

//     this.state.xAxisValues.push(xAxis)


//     return { ...item, xAxis }
//   })
//   this.setState({ timeline })
// }