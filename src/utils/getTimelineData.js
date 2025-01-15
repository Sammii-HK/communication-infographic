import data from '../data.json';


  const overlapCheck = (timelineData, minGap = 50, timelineWidth) => {
    const adjustedData = [...timelineData];
  const halfWidth = timelineWidth / 2;

  // Loop through each item in the timeline
  for (let i = 0; i < adjustedData.length; i++) {
    for (let j = i + 1; j < adjustedData.length; j++) {
      const itemA = adjustedData[i];
      const itemB = adjustedData[j];

      // Check if items are within 10 years of each other
      if (Math.abs(itemA.year - itemB.year) <= 10) {
        // Ensure their xAxis values are sufficiently apart
        while (Math.abs(itemA.xAxis - itemB.xAxis) < minGap) {
          // Adjust xAxis of the second item to reduce overlap
          itemB.xAxis += minGap * (Math.random() < 0.5 ? -1 : 1);

          // Ensure the xAxis stays within the bounds of the timelineWidth, with minGap from edges
          if (itemB.xAxis < -halfWidth + minGap) {
            itemB.xAxis = -halfWidth + minGap;
          } else if (itemB.xAxis > halfWidth - minGap) {
            itemB.xAxis = halfWidth - minGap;
          }
        }
      }
    }

    // Ensure each item is within bounds with minGap from edges
    if (adjustedData[i].xAxis < -halfWidth + minGap) {
      adjustedData[i].xAxis = -halfWidth + minGap;
    } else if (adjustedData[i].xAxis > halfWidth - minGap) {
      adjustedData[i].xAxis = halfWidth - minGap;
    }
  }

    return adjustedData;
  }

const getTimelineData = (timelineWidth) => {
  const timelineData = data.data;

  const timelineWithAxisPositions = timelineData.map((item, i) => {
    const yAxis = (item.year - 1425) * 10

    const xAxis = Math.round(Math.random() * (timelineWidth / 2) - 1) * (Math.random() < 0.5 ? -1 : 1)
    return { ...item, yAxis, xAxis }
  })

  return overlapCheck(timelineWithAxisPositions, 100, timelineWidth);
  
}

export default getTimelineData;