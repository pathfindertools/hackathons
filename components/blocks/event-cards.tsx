import { Cards } from "./cards";

export const EventCards = ({ data, parentField = "", events = null }) => {
  // const currentDate = new Date()

  const filteredItems = events?.getEventList?.edges?.filter(item => {
    // const endString = item?.node?.data?.endDate
    // const endStringTimeCorrected = `${endString.substr(0, endString.indexOf('T'))}T23:59:59.000Z`;
    // const end = new Date(endStringTimeCorrected)
    // return data.status === 'current' ? currentDate.getTime() < end.getTime() : currentDate.getTime() >= end.getTime()
    return item.node?.data?.status === data.status
  })

  const sortedItems = filteredItems.sort((a, b) => {
    const dateA = new Date(a.node?.data?.startDate)
    const dateB = new Date(b.node?.data?.startDate)
    if (dateA < dateB) return 1
    if (dateA >= dateB) return -1;
    return 0;
  });

  const items = sortedItems.map(item => {
    const startString = item?.node?.data?.startDate
    const startStringTimeCorrected = `${startString.substr(0, startString.indexOf('T'))}T23:59:59.000Z`;
    const start = new Date(startStringTimeCorrected)
    const startDay = start.getDate()
    const startMonth = start.toLocaleDateString('en-US', {month: 'short'})
    const startYear = start.getFullYear()
    
    const endString = item?.node?.data?.endDate
    const endStringTimeCorrected = `${endString.substr(0, startString.indexOf('T'))}T23:59:59.000Z`;
    const end = new Date(endStringTimeCorrected)
    const endDay = end.getDate()
    const endMonth = end.toLocaleDateString('en-US', {month: 'short'})
    const endYear = end.getFullYear()

    let subhead
    if (startYear === endYear && startMonth === endMonth) {
      subhead = `${endMonth} ${startDay}-${endDay}, ${endYear}`
    } else if (startYear === endYear) {
      subhead = `${startMonth} ${startDay} - ${endMonth} ${endDay}, ${endYear}`
    } else {
      subhead = `${startMonth} ${startDay}, ${startYear} - ${endMonth} ${endDay}, ${endYear}`
    }
    
    return {
      imageSrc: item.node.data.imageSrc || '',
      label: '',
      headline: item.node.data.headline,
      subhead: subhead,
      text: data.status === 'current' ? item.node.data.text : '',
      link: item.node.data.link,
      buttonLabel: data.status === 'current' ? 'Learn More & Register' : 'View Event'
    }
  })

  return (
    <Cards data={data} events={items} parentField={parentField} />
  );
};
