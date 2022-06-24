import React, { useState } from 'react';
import { Section } from "../../section";
import { Content } from "../../content";

const Modal = ({ data, parentField = "", className }) => {
  const twModal = "w-full max-w-desktop-full p-20 sm:p-4"
  const twCloseButton = "absolute top-8 right-8 height-6 width-6 text-primary"

  return (
    <div className={`${twModal} ${className}`}>
      <button className={twCloseButton}>
        <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.67172 0.67172C1.08194 0.261627 1.63824 0.03125 2.21828 0.03125C2.79833 0.03125 3.35463 0.261627 3.76485 0.67172L11.4998 8.40672L19.2348 0.67172C19.6474 0.273249 20.2 0.0527618 20.7735 0.0577458C21.3471 0.0627299 21.8957 0.292787 22.3013 0.698367C22.7069 1.10395 22.937 1.6526 22.9419 2.22616C22.9469 2.79971 22.7264 3.35228 22.328 3.76485L14.593 11.4998L22.328 19.2348C22.7264 19.6474 22.9469 20.2 22.9419 20.7735C22.937 21.3471 22.7069 21.8957 22.3013 22.3013C21.8957 22.7069 21.3471 22.937 20.7735 22.9419C20.2 22.9469 19.6474 22.7264 19.2348 22.328L11.4998 14.593L3.76485 22.328C3.35228 22.7264 2.79971 22.9469 2.22616 22.9419C1.6526 22.937 1.10395 22.7069 0.698367 22.3013C0.292787 21.8957 0.0627299 21.3471 0.0577458 20.7735C0.0527618 20.2 0.273249 19.6474 0.67172 19.2348L8.40672 11.4998L0.67172 3.76485C0.261627 3.35463 0.03125 2.79833 0.03125 2.21828C0.03125 1.63824 0.261627 1.08194 0.67172 0.67172Z" fill="currentColor"/>
        </svg>
      </button>
      <div className={`flex flex-col`}>
        <div className="items-center">
          <div className="mx-auto max-w-full">
            <div className="relative height-0" style={{ paddingBottom: "56.25%" }}>
              <iframe src={`https://www.youtube.com/embed/${data.video}`} title="YouTube video player" frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen style={{position: "absolute", top: "0px", left: "0px", width: "100%", height: "100%"}}></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export const Modals = ({ data, parentField = "" }) => {
  const [activeModal, setActiveModal] = useState(null)
  const twButtons = "flex flex-wrap gap-12 w-full justify-center px-10 sm:justify-start"
  const twButton = "flex gap-3 pr-5 pl-4 h-10 font-bold text-sm border bg-transparent border-primary text-white"
  const twButtonSpan = "block text-center m-auto font-1 leading-normal text-sm"

  return (
    <Section background={data.background} navigationLabel={data.navigationLabel}>
      <div>
        <Content
          label={data.label}
          headline={data.headline}
          subhead={data.subhead}
          body={data.body}
          buttons={data.buttons}
          labelStyles="text-white text-center text-sm"
          headlineStyles="text-white text-center text-xl font-2 font-bold"
          subheadStyles="text-white text-center text-lg"
          textStyles="text-white text-center text-md font-1 mb-2"
          width="w-full"
          parentField={parentField}
          alignment={undefined}
          order={undefined}
        />
        <div className={twButtons}>
          {data.items && (
            data.items.map(function (item, index) {
              return <button className={twButton} onClick={() => setActiveModal(index)} key={index}>
                <div className="inline-block w-6 h-6 mt-2 text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM176 168V344C176 352.7 180.7 360.7 188.3 364.9C195.8 369.2 205.1 369 212.5 364.5L356.5 276.5C363.6 272.1 368 264.4 368 256C368 247.6 363.6 239.9 356.5 235.5L212.5 147.5C205.1 142.1 195.8 142.8 188.3 147.1C180.7 151.3 176 159.3 176 168V168z" fill="currentColor" />
                  </svg>
                </div>
                <span className={twButtonSpan}>{item.label}</span>
              </button>
            })
          )}
        </div>
      </div>
      {activeModal !== null && (
        <div className="fixed inset-0 z-50 border-8" onClick={() => setActiveModal(null)}>
          <div className="absolute inset-0 bg-black opacity-90"></div>
          <Modal
            data={data.items[activeModal]}
            className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`}
            parentField={`${parentField}.items`}
          />
        </div>
      )}
    </Section>
  );
};
