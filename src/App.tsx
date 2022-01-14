import React from 'react'

import classNames from 'classnames'
import { DimensionPreview, useDimensionsSelect, DimensionsOptions, DimensionsSelector } from 'src'

const defaultImage =
  'https://images.unsplash.com/photo-1602826347632-fc49a8675be6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'

const dimensionsOptions: DimensionsOptions = [
  {
    name: '16:9',
    dimensions: [1920, 1080],
    getPreviewDimensions: ({ width }) => ({
      width,
      height: width / 1.7777777777777777
    }),
    icon: (selected) => (
      <div
        className={classNames(
          'border-2  group-hover:border-indigo-500 rounded-sm w-20 h-[45px]',
          selected ? 'border-indigo-500' : 'border-gray-500'
        )}
      />
    )
  },
  {
    name: '1:1',
    dimensions: [1080, 1080],
    getPreviewDimensions: ({ height }) => ({
      height,
      width: height
    }),
    icon: (selected) => (
      <div
        className={classNames(
          'border-2  group-hover:border-indigo-500 rounded-sm  w-[45px] h-[45px]',
          selected ? 'border-indigo-500' : 'border-gray-500'
        )}
      />
    )
  },
  {
    name: '9:16',
    dimensions: [1080, 1920],
    getPreviewDimensions: ({ height }) => ({
      height,
      width: height / 1.777777777777777
    }),
    icon: (selected) => (
      <div
        className={classNames(
          'border-2  group-hover:border-indigo-500 rounded-sm w-[25px] h-[45px]',
          selected ? 'border-indigo-500' : 'border-gray-500'
        )}
      />
    )
  },
  {
    name: '16:10',
    dimensions: [1920, 1200],
    getPreviewDimensions: ({ width }) => ({
      height: width / 1.6,
      width
    }),
    icon: (selected) => (
      <div
        className={classNames(
          'border-2  group-hover:border-indigo-500 rounded-sm w-20 h-[45px]',
          selected ? 'border-indigo-500' : 'border-gray-500'
        )}
      />
    )
  }
]

function App() {
  const { previewProps, selectorProps, selectedOption } = useDimensionsSelect(dimensionsOptions)

  return (
    <div className="w-full flex flex-col min-h-screen justify-center items-center bg-gray-800 text-white">
      <div className='my-auto py-4 flex flex-col'>
        <div className='flex justify-between mb-3'>
          <a href='https://www.npmjs.com/package/react-dimension-select' className='block'>
            View on NPM (Docs) &rarr;
          </a>

          <a href='https://www.github.com/patheticGeek/react-dimension-select' className='block'>
            View on GitHub &rarr;
          </a>
        </div>

        <code className="rounded text-xl text-black bg-gray-400 py-0.5 px-2 mx-auto">
          npm i react-dimension-select
        </code>

        <div className="mt-2 mx-auto grid items-center py-2 justify-center h-full w-full max-w-lg">
          <DimensionPreview image={defaultImage} {...previewProps} />
        </div>

        <DimensionsSelector {...selectorProps} />

        <div className='mt-3'>
          Selected Option: {selectedOption.name}, Dimensions: {selectedOption.dimensions.join('x')}
        </div>
      </div>

      <a 
        className='block py-2 hover:underline'
        href="https://www.github.com/patheticGeek">
        Made by @patheticGeek
      </a>
    </div>
  )
}

export default App
