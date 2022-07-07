import { TinaMarkdown } from "tinacms/dist/rich-text";
import Image from 'next/image'
import { Buttons } from "../buttons";
import { CardGrid } from "../card-grid";

const Card = ({ block, index, cardstyle, parentField = ""  }) => {
  const wrapClasses =  block.link && block.buttonLabel ? 'pb-20' : '';
  const backgroundClasses = {
    solid: `${cardstyle?.fillStyles}`,
    transparent: `${cardstyle?.fillStyles} opacity-70`,
    fadeH: `${cardstyle?.fillStyles}`,
  }
  const imageSrc = block.imageSrc || block.image?.src || ''
  const imageAlt = block.image?.alt || block.headline || ''

  return (
    <div className={`flex flex-col relative sm:mb-6 ${cardstyle?.borderStyles}`} data-tinafield={`${parentField}.${index}`}>
      <p className="hidden">Block: {JSON.stringify(block)}</p>
      <p className="hidden" data-src={imageSrc}>{`ImageSrc: ${imageSrc}`}</p>
      <div className="relative w-full" style={block.image || block.imageSrc && {paddingTop: '56%'}}>
        {imageSrc && (
           <img
            className={`absolute inset-0 h-full w-full object-cover`}
            src={String(imageSrc)}
            alt={imageAlt}
            data-tinafield={`${parentField}.${index}.image`}
          />
        )}
      </div>      
      <div
        className={` ${wrapClasses} relative flex-1 text-left border-box ${cardstyle?.padding}`}
      >
        <div className={`${backgroundClasses[cardstyle?.type]} absolute inset-0 -z-1`} />
        {block.label && (
          <p className={cardstyle?.labelStyles} data-tinafield={`${parentField}.${index}.label`}>{block.label}</p>
        )}
        {block.headline && (
          <h3 className={cardstyle?.headlineStyles} data-tinafield={`${parentField}.${index}.headline`}>{block.headline}</h3>
        )}
        {block.subhead && (
          <h4 className={cardstyle?.subheadStyles} data-tinafield={`${parentField}.${index}.subhead`}>{block.subhead}</h4>
        )}
        {block.text && (
          <div className={`markdown ${cardstyle?.textStyles}`} data-tinafield={`${parentField}.${index}.text`}>
            <TinaMarkdown content={block.text} />
          </div>
        )}
        {block.link && block.buttonLabel && (
          <Buttons buttons={[{
            link: block.link,
            label: block.buttonLabel,
            type: cardstyle?.buttonType
          }]} className="absolute bottom-4"  data-tinafield={`${parentField}.${index}.link`} />
        )}

      </div>
      {block.link && !block.buttonLabel && (
        <a href={block.link} className="absolute inset-0 z-20" data-tinafield={`${parentField}.${index}.link.0`} />
      )}
    </div>
  );
};

export const Cards = ({ data, events = null, parentField = "" }) => {
  const items = events || data.items
  return (
    <CardGrid data={data} parentField={parentField} children={(
      items &&
      items.map(function (block, index) {
          return <Card key={index} index={index} block={block} cardstyle={data.cardStyle} parentField={`${parentField}.items`} />;
        })
    )}/>
  );
};
