import type { TinaTemplate } from "@tinacms/cli";
import { backgroundSchema } from "./shared/background";
import { cardsSchema } from "./shared/cards";
import { navigationLabelSchema } from "./shared/navigation-label";

export const eventCardsBlockSchema: TinaTemplate = {
  name: "eventCards",
  label: "Event Cards",
  ui: {
    defaultItem: {
      label: "",
      headline: "This is a headline",
      subhead: "Here is a subhead",
      body: {
        children: [
         {
           type: "p",
           children: [
              {
                text: "This is a rich text component you can add hyperlinks, etc."
              }
            ]
          }
        ]
      },
      style: {
        textAlignment: "text-left",
        minHeight: "min-h-0",
        padding: "pt-20 pr-20 pb-20 pl-20",
        contentWidth: "w-full",
        columns: "3",
        labelStyles: "text-black font-sans text-sm mb-0",
        headlineStyles: "text-black font-sans text-5xl mb-0",
        subheadStyles: "text-black font-sans text-3xl mb-0",
        textStyles: "text-black font-sans text-md mb-0",
        contentOrder: "labelHeadingsContent",
      },
      cardStyle: {
        fillStyles: "bg-gray",
        padding: "pt-4 pr-4 pb-4 pl-4",
        labelStyles: "text-black text-sm mb-0",
        headlineStyles: "text-black text-2xl mb-0",
        subheadStyles: "text-black text-lg mb-0",
        textStyles: "text-black text-sm mb-0",
        buttonType: "solid",
        buttonFillStyles: "",
        buttonTextColor: "",
      },
    },
  },
  fields: [
    cardsSchema,
    {
      type: "object",
      label: "Card Style",
      name: "cardStyle",
      ui: {
        component: "group",
      },
      fields: [
        {
          type: "string",
          label: "Background",
          name: "fillStyles",
          ui: {
            component: "fillControl"
          }
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
          label: "Type",
          name: "type",
          type: "string",
          ui: {
            component: "selectField",
          },
          options: [
            { label: "Solid Background", value: "solid" },
            { label: "Semi Transparent", value: "transparent" },
            { label: "Horizontal Fade", value: "fadeH" },
          ],
        },
        {
          type: "string",
          label: "Image",
          name: "imageStyles",
          ui: {
            component: "imageControl"
          }
        },
        {
          label: "Typography",
          name: "typographyTitle",
          type: "string",
          ui: {
            component: "ruledTitle",
          },
        },
        {
          type: "string",
          label: "Label",
          name: "labelStyles",
          ui: {
            component: "typeControl"
          }
        },
        {
          type: "string",
          label: "Headline",
          name: "headlineStyles",
          ui: {
            component: "typeControl"
          }
        },
        {
          type: "string",
          label: "Subhead",
          name: "subheadStyles",
          ui: {
            component: "typeControl"
          }
        },
        {
          type: "string",
          label: "Text",
          name: "textStyles",
          ui: {
            component: "typeControl"
          }
        },
        {
          label: "Button",
          name: "buttonTitle",
          type: "string",
          ui: {
            component: "ruledTitle",
          },
        },
        {
          label: "Type",
          name: "buttonType",
          type: "string",
          ui: {
            component: "selectField",
          },
          options: [
            { label: "Primary", value: "primary" },
            { label: "Secondary", value: "secondary" },
            { label: "Minor", value: "minor" },
            { label: "Black Outline", value: "blackOutline" },
            { label: "White Outline", value: "whiteOutline" },
          ],
        },
      ],
    },
    backgroundSchema,
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
      type: "object",
      label: "Buttons",
      name: "buttons",
      list: true,
      ui: {
        component: 'itemListField',
        defaultItem: {
          label: "Button Label",
          link: "/",
          type: "primary",
        },
      },
      fields: [
        {
          label: "Link",
          name: "link",
          type: "string",
        },
        {
          label: "Type",
          name: "type",
          type: "string",
          ui: {
            component: "select",
          },
          options: [
            { label: "Primary", value: "primary" },
            { label: "Secondary", value: "secondary" },
            { label: "Minor", value: "minor" },
            { label: "Black Outline", value: "blackOutline" },
            { label: "White Outline", value: "whiteOutline" },
          ],
        },
      ],
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
      ]
    },
    navigationLabelSchema,
  ],
};
