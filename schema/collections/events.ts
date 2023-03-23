export const eventCollectionSchema: any = {
  label: "Events",
  name: "event",
  path: "content/events",
  format: "md",
  // ui: {
  //   router: ({ document }) => {
  //     return `/event/${document._sys.filename}`;
  //   },
  // },
  fields: [
    {
      label: "Image Source",
      name: "imageSrc",
      description: "This should be a jpeg that is 640x360 pixels.",
      type: "image",
      ui: {
        clearable: true,
      }
    },
    {
      type: "string",
      label: "Title",
      name: "headline",
    },
    {
      type: "datetime",
      label: "Start Date",
      name: "startDate",
      ui: {
        dateFormat: "MMM DD YYYY"
      }
    },
    {
      type: "datetime",
      label: "End Date",
      name: "endDate",
      ui: {
        dateFormat: "MMM DD YYYY"
      }
    },
    {
      label: "Text",
      name: "text",
      type: "rich-text",
    },
    {
      type: "string",
      label: "Link",
      name: "link",
    },
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
        { label: "Hidden", value: "hidden" },
      ]
    },
  ],
}