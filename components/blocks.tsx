import React from "react";
import type { Pages, Global } from "../.tina/__generated__/types";
import { Banner } from "./blocks/banner";
import { Cards } from "./blocks/cards";
import { Embed } from "./blocks/embed";
import { EventCards } from "./blocks/event-cards";
import { Feature } from "./blocks/feature";
import { Modals } from "./blocks/custom/modals";
import { TailwindCards } from "./blocks/tailwind-cards";
import { TailwindFeature } from "./blocks/tailwind-feature";

export const Blocks = (props: any) => {
  return (
    <>
      {props.blocks
        ? props.blocks.map(function (block, i) {
            switch (block.__typename) {
              case "PagesBlocksFeature":
              case "GlobalBlocksFeature":
                return (
                  <div data-tinafield={`blocks.${i}`} key={i + block.__typename}>
                    <Feature data={block} parentField={`blocks.${i}`} />
                  </div>
                );
              case "PagesBlocksBanner":
              case "GlobalBlocksBanner":
                return (
                  <div data-tinafield={`blocks.${i}`} key={i + block.__typename}>
                    <Banner data={block} parentField={`blocks.${i}`} />
                  </div>
                );
              case "PagesBlocksPhotoCards":
              case "GlobalBlocksPhotoCards":
                return (
                  <div data-tinafield={`blocks.${i}`} key={i + block.__typename}>
                    <Cards data={block} parentField={`blocks.${i}`} />
                  </div>
                );
              case "PagesBlocksTextCards":
              case "GlobalBlocksTextCards":
                return (
                  <div data-tinafield={`blocks.${i}`} key={i + block.__typename}>
                    <Cards data={block} parentField={`blocks.${i}`} />
                  </div>
                );
              case "PagesBlocksEmbed":
              case "GlobalBlocksEmbed":
                return (
                  <div data-tinafield={`blocks.${i}`} key={i + block.__typename}>
                    <Embed data={block} parentField={`blocks.${i}`} />
                  </div>
                );
              case "PagesBlocksTailwindFeature":
              case "GlobalBlocksTailwindFeature":
                return (
                  <div data-tinafield={`blocks.${i}`} key={i + block.__typename}>
                    <TailwindFeature data={block} parentField={`blocks.${i}`} />
                  </div>
                );
              case "PagesBlocksTailwindCards":
              case "GlobalBlocksTailwindCards":
                return (
                  <div data-tinafield={`blocks.${i}`} key={i + block.__typename}>
                    <TailwindCards data={block} parentField={`blocks.${i}`} />
                  </div>
                );
              case "PagesBlocksEventCards":
                return (
                  <div data-tinafield={`blocks.${i}`} key={i + block.__typename}>
                    <EventCards data={block} parentField={`blocks.${i}`} events={props.events} />
                  </div>
                );
              case "PagesBlocksModals":
                return (
                  <div data-tinafield={`blocks.${i}`} key={i + block.__typename}>
                    <Modals data={block} parentField={`blocks.${i}`} />
                  </div>
                );
              default:
                return null;
            }
          })
        : null}
    </>
  );
};
