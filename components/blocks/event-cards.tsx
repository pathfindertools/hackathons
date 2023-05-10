import React from "react";
import { minHeightOptions } from "../../schema/options"
import { buttonsSchema } from "../../schema/buttons"
import { backgroundSchema } from "../../schema/background"
import { contentSchema } from "../../schema/content"
import { navigationLabelSchema } from "../../schema/navigation-label";
import { typographySchema } from "../../schema/typography"
import { cardStyleSchema } from "../../schema/card-style"
import { Cards } from "./cards";

export const EventCards = ({ data, events = null, parentField = "" }) => {
  const currentDate = new Date()

  const filteredItems = events?.filter(item => {
    // This isn't working, so I'm just filtering by status for now
    // ---
    // const endString = item?.node?.data?.endDate
    // const endStringTimeCorrected = `${endString.substr(0, endString.indexOf('T'))}T23:59:59.000Z`;
    // const end = new Date(endStringTimeCorrected)
    // return data.status === 'current' ? currentDate.getTime() < end.getTime() : currentDate.getTime() >= end.getTime()
    return item.status === data.status
  })

  const sortedItems = filteredItems?.sort((a, b) => {
    const dateA = new Date(a.startDate)
    const dateB = new Date(b.startDate)
    if (data.status === 'current') {
      if (dateA > dateB) return 1
      if (dateA <= dateB) return -1;
      return 0;
    } else {
      if (dateA < dateB) return 1
      if (dateA >= dateB) return -1;
      return 0;
    }
  });

  const items = sortedItems?.map(item => {
    const startString = item.startDate || ''
    const startStringTimeCorrected = `${startString.substr(0, startString.indexOf('T'))}T23:59:59.000Z`;
    const start = new Date(startStringTimeCorrected)
    const startDay = start.getDate()
    const startMonth = start.toLocaleDateString('en-US', {month: 'short'})
    const startYear = start.getFullYear()
    
    const endString = item.endDate || ''
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
      image: {
        src: item.imageSrc || ''
      },
      label: '',
      headline: item.headline,
      subhead: subhead,
      text: data.status === 'current' ? item.text : '',
      link: item.link,
      buttonLabel: data.status === 'current' ? 'Learn More & Register' : 'View Event'
    }
  })

  data.items = items

  return (
    <>

      <Cards data={data} parentField={parentField} />
    </>
  );
};

export const eventCardsBlockSchema: any = {
  label: "Event Cards",
  name: "eventCards",
  ui: {
    defaultItem: {
      label: "",
      headline: "Headline",
      subhead: "Subhead",
      status: "current",
      sortOrder: "current",
      style: {
        fullWidth: false,
        minHeight: "min-h-0",
        padding: "pt-20 pb-20 pr-10 pl-10",
        labelStyles: "text-black",
        headlineStyles: "text-black",
        subheadStyles: "text-black mb-4",
        textStyles: "text-black",
      },
      cardStyle: {
        fillStyles: "bg-gray",
        grid: "grid-cols-3 items-start gap-6",
        imagePadding: "pt-0 pr-0 pb-0 pl-0",
        contentPadding: "pt-2 pr-2 pb-2 pl-2",
        labelStyles: "text-black",
        headlineStyles: "text-black",
        subheadStyles: "text-black",
        textStyles: "text-black",
      },
    },
  },
  fields: [
    {
      type: "object",
      label: "Section Styles",
      name: "style",
      ui: {
        component: "group",
      },
      fields: [
        {
          label: "Alignment",
          name: "alignment",
          type: "string",
          ui: {
            component: "alignmentControl",
          },
        },
        {
          label: "Padding",
          name: "padding",
          type: "string",
          ui: {
            component: "paddingControl",
          }
        },
        {
          label: "Content",
          name: "featureContent",
          type: "string",
          ui: {
            component: "featureContentControl",
          }
        },
        ...typographySchema
      ],
    },
    cardStyleSchema,
    backgroundSchema,
    ...contentSchema,
    buttonsSchema,
    {
      type: "string",
      label: "Status",
      name: "status",
      ui: {
        component: "selectField",
      },
      options: [
        { label: "Current", value: "current" },
        { label: "Archived", value: "archived" },
      ]
    },
    navigationLabelSchema,
  ],
};