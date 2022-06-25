import type { TinaField } from "tinacms"
import { roundedOptions } from "../shared/options"

export const globalButtons: TinaField = {
  type: "object",
  label: "Buttons & Links",
  name: "buttons",
  ui: {
    component: "group",
  },
  fields: [
    {
      label: "Primary Button",
      name: "primaryRule",
      type: "string",
      ui: {
        component: "ruledTitle",
      },
    },
    {
      type: "string",
      label: "Fill",
      name: "primaryFill",
      ui: {
        component: "fillControl",
      },
    },
    {
      type: "string",
      label: "Border",
      name: "primaryBorder",
      ui: {
        component: "borderControl",
      },
    },
    {
      type: "string",
      label: "Typography",
      name: "primaryTypography",
      ui: {
        component: "typeControl",
      },
    },
    {
      type: "string",
      label: "Padding",
      name: "primaryPadding",
      ui: {
        component: "paddingControl",
      },
    },
    {
      type: "string",
      label: "Rounded",
      name: "primaryRounded",
      ui: {
        component: "selectField",
      },
      options: roundedOptions,
    },
    {
      label: "Secondary Button",
      name: "secondaryRule",
      type: "string",
      ui: {
        component: "ruledTitle",
      },
    },
    {
      type: "string",
      label: "Fill",
      name: "secondaryFill",
      ui: {
        component: "fillControl",
      },
    },
    {
      type: "string",
      label: "Border",
      name: "secondaryBorder",
      ui: {
        component: "borderControl",
      },
    },
    {
      type: "string",
      label: "Typography",
      name: "secondaryTypography",
      ui: {
        component: "typeControl",
      },
    },
    {
      type: "string",
      label: "Padding",
      name: "secondaryPadding",
      ui: {
        component: "paddingControl",
      },
    },
    {
      type: "string",
      label: "Rounded",
      name: "secondaryRounded",
      ui: {
        component: "selectField",
      },
      options: roundedOptions,
    },
    {
      label: "Minor Button",
      name: "minorRule",
      type: "string",
      ui: {
        component: "ruledTitle",
      },
    },
    {
      type: "string",
      label: "Fill",
      name: "minorFill",
      ui: {
        component: "fillControl",
      },
    },
    {
      type: "string",
      label: "Border",
      name: "minorBorder",
      ui: {
        component: "borderControl",
      },
    },
    {
      type: "string",
      label: "Typography",
      name: "minorTypography",
      ui: {
        component: "typeControl",
      },
    },
    {
      type: "string",
      label: "Padding",
      name: "minorPadding",
      ui: {
        component: "paddingControl",
      },
    },
    {
      type: "string",
      label: "Rounded",
      name: "minorRounded",
      ui: {
        component: "selectField",
      },
      options: roundedOptions,
    },
    {
      label: "Black Outline Button",
      name: "blackOutlineRule",
      type: "string",
      ui: {
        component: "ruledTitle",
      },
    },
    {
      type: "string",
      label: "Fill",
      name: "blackOutlineFill",
      ui: {
        component: "fillControl",
      },
    },
    {
      type: "string",
      label: "Border",
      name: "blackOutlineBorder",
      ui: {
        component: "borderControl",
      },
    },
    {
      type: "string",
      label: "Typography",
      name: "blackOutlineTypography",
      ui: {
        component: "typeControl",
      },
    },
    {
      type: "string",
      label: "Padding",
      name: "blackOutlinePadding",
      ui: {
        component: "paddingControl",
      },
    },
    {
      type: "string",
      label: "Rounded",
      name: "blackOutlineRounded",
      ui: {
        component: "selectField",
      },
      options: roundedOptions,
    },
    {
      label: "White Outline Button",
      name: "whiteOutlineRule",
      type: "string",
      ui: {
        component: "ruledTitle",
      },
    },
    {
      type: "string",
      label: "Fill",
      name: "whiteOutlineFill",
      ui: {
        component: "fillControl",
      },
    },
    {
      type: "string",
      label: "Border",
      name: "whiteOutlineBorder",
      ui: {
        component: "borderControl",
      },
    },
    {
      type: "string",
      label: "Typography",
      name: "whiteOutlineTypography",
      ui: {
        component: "typeControl",
      },
    },
    {
      type: "string",
      label: "Padding",
      name: "whiteOutlinePadding",
      ui: {
        component: "paddingControl",
      },
    },
    {
      type: "string",
      label: "Rounded",
      name: "whiteOutlineRounded",
      ui: {
        component: "selectField",
      },
      options: roundedOptions,
    },
  ]
}
