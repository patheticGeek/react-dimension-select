import React from 'react'

import { DimensionsSelectorProps } from 'src/types'

export function DimensionsSelector({
  dimensionsOptions,
  selectedIndex,
  setSelectedIndex,
  setHoveringIndex
}: DimensionsSelectorProps) {
  return (
    <div className="flex items-center justify-evenly space-x-4 pt-4">
      {dimensionsOptions.map((option, idx) => (
        <button
          key={option.name}
          onClick={() => setSelectedIndex(idx)}
          onMouseEnter={() => setHoveringIndex(idx)}
          onMouseLeave={() => setHoveringIndex(null)}
          className="flex flex-col flex-1 items-center justify-center space-y-2 group focus:outline-none transition hover:bg-gray-500 hover:bg-opacity-10 rounded p-4">
          {option.icon && option.icon(selectedIndex === idx)}

          <p className="text-sm text-gray-400">{option.name}</p>
        </button>
      ))}
    </div>
  )
}
