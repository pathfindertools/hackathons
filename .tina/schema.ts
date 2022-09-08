import { defineSchema, defineConfig } from "tinacms";
import { bannerBlockSchema } from "./banner";
import { embedBlockSchema } from "./embed";
import { eventCardsBlockSchema } from "./event-cards";
import { featureBlockSchema } from "./feature";
import { globalSchema } from "./global/global";
import { modalsBlockSchema } from "./modals";
import { photoCardsBlockSchema } from "./photo-cards";
import { tailwindCardsBlockSchema } from "./tailwind-cards";
import { tailwindFeatureBlockSchema } from "./tailwind-feature";
import { textCardsBlockSchema } from "./text-cards";

export default defineSchema({
  collections: [
    globalSchema,
    {
      label: "Pages",
      name: "pages",
      path: "content/pages",
      fields: [
        {
          type: "boolean",
          label: "Draft",
          description: "Draft posts are only visible on staging.",
          name: "draft",
        },
        {
          type: "object",
          list: true,
          name: "blocks",
          label: "Sections",
          templates: [
            bannerBlockSchema,
            embedBlockSchema,
            eventCardsBlockSchema,
            featureBlockSchema,
            modalsBlockSchema,
            photoCardsBlockSchema,
            tailwindCardsBlockSchema,
            tailwindFeatureBlockSchema,
            textCardsBlockSchema,
          ],
        },
        {
          type: "object",
          label: "Meta",
          name: "meta",
          description: "Page title, description, social sharing image",
          ui: {
            component: "group",
          },
          fields: [
            {
              type: "string",
              label: "Page Title",
              name: "pageTitle",
            },
            {
              type: "string",
              label: "Page Description",
              name: "pageDescription",
            },
            {
              type: "image",
              label: "Social Sharing Image",
              name: "siteImageSrc",
              description: "1200x630 jpeg, varies across platforms and may end up slightly cropped.",
              ui: {
                clearable: true,
              }
            },
          ]
        },
      ],
    },
    {
      label: 'Events',
      name: 'event',
      path: 'content/events',
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
    },
  ],
});

const branch = "main";
const apiURL =
  process.env.NODE_ENV == "development"
    ? "http://localhost:4001/graphql"
    : `https://content.tinajs.io/content/${process.env.NEXT_PUBLIC_TINA_CLIENT_ID}/github/${branch}`;

export const tinaConfig = defineConfig({
  apiURL,
  mediaStore: async () => {
    const pack = await import("next-tinacms-cloudinary");
    return pack.TinaCloudCloudinaryMediaStore;
  },
  cmsCallback: (cms) => {
    /**
     * When `tina-admin` is enabled, this plugin configures contextual editing for collections
     */
    import("tinacms").then(({ RouteMappingPlugin }) => {
      const RouteMapping = new RouteMappingPlugin((collection, document) => {
        if (["pages"].includes(collection.name)) {
          if (document.sys.filename) {
            return `/${document.sys.filename}`;
          }
          return undefined;
        }
        return undefined;
      });
      cms.plugins.add(RouteMapping);
    });

    /**
     * Import custom Tina plugins (fields)
     */
    import("../plugins").then(({ itemListFieldPlugin }) => {
      cms.plugins.add(itemListFieldPlugin);
    });
    import("../plugins").then(({ emailFieldPlugin }) => {
      cms.plugins.add(emailFieldPlugin);
    });
    import("../plugins").then(({ typeControlFieldPlugin }) => {
      cms.plugins.add(typeControlFieldPlugin);
    });
    import("../plugins").then(({ typeSizeControlFieldPlugin }) => {
      cms.plugins.add(typeSizeControlFieldPlugin);
    });
    import("../plugins").then(({ colorControlFieldPlugin }) => {
      cms.plugins.add(colorControlFieldPlugin);
    });
    import("../plugins").then(({ fillControlFieldPlugin }) => {
      cms.plugins.add(fillControlFieldPlugin);
    });
    import("../plugins").then(({ alignmentControlFieldPlugin }) => {
      cms.plugins.add(alignmentControlFieldPlugin);
    });
    import("../plugins").then(({ imageControlFieldPlugin }) => {
      cms.plugins.add(imageControlFieldPlugin);
    });
    import("../plugins").then(({ paddingControlFieldPlugin }) => {
      cms.plugins.add(paddingControlFieldPlugin);
    });
    import("../plugins").then(({ borderControlFieldPlugin }) => {
      cms.plugins.add(borderControlFieldPlugin);
    });
    import("../plugins").then(({ selectFieldPlugin }) => {
      cms.plugins.add(selectFieldPlugin);
    });
    import("../plugins").then(({ featureContentFieldPlugin }) => {
      cms.plugins.add(featureContentFieldPlugin);
    });
    import("../plugins").then(({ featureImageFieldPlugin }) => {
      cms.plugins.add(featureImageFieldPlugin);
    });
    import("../plugins").then(({ ruledTitlePlugin }) => {
      cms.plugins.add(ruledTitlePlugin);
    });

    return cms;
  },
  formifyCallback: ({ formConfig, createForm, createGlobalForm }) => {
    if (formConfig.id === "getGlobalDocument") {
      return createGlobalForm(formConfig, { layout: 'fullscreen' });
    }
    return createForm(formConfig);
  },
});
