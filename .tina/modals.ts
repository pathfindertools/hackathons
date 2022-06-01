import type { TinaTemplate } from "tinacms"
import { backgroundSchema } from "./shared/background";
import { navigationLabelSchema } from "./shared/navigation-label";

const defaultCard = {
  
};

export const modalsBlockSchema: TinaTemplate = {
  name: "modals",
  label: "Video Modals",
  ui: {
    defaultItem: {
      headline: "This is the main headline",
      items: [defaultCard, defaultCard, defaultCard],
    },
  },
  fields: [
    backgroundSchema,
    {
      label: "",
      name: "rule",
      type: "string",
      ui: {
        component: "ruledTitle",
      },
    },
    {
      label: "Label",
      name: "label",
      type: "string",
    },
    {
      label: "Headline",
      name: "headline",
      type: "string",
    },
    {
      label: "Subhead",
      name: "subhead",
      type: "string",
    },
    {
      label: "Body",
      name: "body",
      type: "rich-text",
    },
    {
      label: "Video Modals",
      name: "items",
      type: "object",
      list: true,
      ui: {
        component: 'itemListField',
      },
      fields: [
        {
          label: "Button Label",
          name: "label",
          type: "string",
        },
        {
          label: "YouTube Video ID",
          description: "The value of \"v\" from the YouTube url, https://www.youtube.com/watch?v=p4GatFzE3pM would be \"p4GatFzE3pM\".",
          name: "video",
          type: "string",
        },
      ]
    },
    {
      label: "",
      name: "rule2",
      type: "string",
      ui: {
        component: "ruledTitle",
      },
    },
    navigationLabelSchema,
  ],
};
