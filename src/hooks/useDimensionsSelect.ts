import { useMemo, useState } from 'react'

import { DimensionsOptions, PreviewDimensions } from 'src/types'

const DEFAULT_DIMENSION = { height: 0, width: 0 }

export const useDimensionsSelect = (dimensionsOptions: DimensionsOptions) => {
  const [previewDimensions, setPreviewDimensions] =
    useState<PreviewDimensions>(DEFAULT_DIMENSION)

  const [selectedIndex, setSelectedIndex] = useState(0)
  const [hoveringIndex, setHoveringIndex] = useState<number | null>(null)

  const selectedOption = useMemo(() => {
    // Because 0 is also considered falsy we need to check for null
    const selectedOrHovering =
      hoveringIndex === null ? selectedIndex : hoveringIndex

    return dimensionsOptions[selectedOrHovering]
  }, [dimensionsOptions, hoveringIndex, selectedIndex])

  const coverDimensions = useMemo(() => {
    return !selectedOption
      ? previewDimensions
      : selectedOption.getPreviewDimensions(previewDimensions)
  }, [previewDimensions, selectedOption])

  return {
    // return the selection option and not the selectedOrHovering
    selectedOption: dimensionsOptions[selectedIndex],
    selectedIndex,
    setSelectedIndex,
    setHoveringIndex,
    hoveringIndex,
    selectorProps: {
      dimensionsOptions,
      selectedIndex,
      setSelectedIndex,
      setHoveringIndex
    },
    previewProps: {
      coverDimensions,
      previewDimensions,
      setPreviewDimensions
    }
  }
}
