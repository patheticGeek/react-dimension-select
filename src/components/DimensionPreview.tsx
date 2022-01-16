import React from 'react'

import { DimensionPreviewProps } from 'src/types'

export function DimensionPreview({
  image,
  coverDimensions,
  previewDimensions,
  setPreviewDimensions
}: DimensionPreviewProps) {
  const handleDimensionsUpdate = (ref: HTMLImageElement | null) => {
    if (!ref) return

    const { offsetHeight, offsetWidth } = ref
    const { height, width } = previewDimensions

    if (offsetHeight !== height || offsetWidth !== width) {
      setPreviewDimensions({ height: offsetHeight, width: offsetWidth })
    }
  }

  return (
    <div className="relative">
      <div className="flex items-start justify-center">
        <img
          ref={handleDimensionsUpdate}
          className="object-cover"
          alt="preview"
          src={image}
        />
      </div>

      {/* The curtains on top of image */}
      <div className="absolute inset-0 w-full h-full flex">
        {/** Top */}
        <div className="bg-gray-900 bg-opacity-60 flex-1 transition duration-150 ease-in-out" />

        {/** Horizontal Spacer */}
        <div
          className="flex flex-col h-full transition duration-500 ease-in-out"
          style={{ width: coverDimensions.width }}>
          <div className="bg-gray-900 bg-opacity-60 flex-1 transition duration-150 ease-in-out" />

          {/** Vertical Spacer */}
          <div
            className="flex w-full transition duration-500 ease-in-out"
            style={{ height: coverDimensions.height }}
          />

          {/** Bottom */}
          <div className="bg-gray-900 bg-opacity-60 flex-1 transition duration-150 ease-in-out" />
        </div>

        {/** Right */}
        <div className="bg-opacity-60 bg-gray-900 flex-1 transition duration-500 ease-in-out" />
      </div>
    </div>
  )
}
