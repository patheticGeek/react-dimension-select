export type PreviewDimensions = { height: number; width: number }

export type DimensionPreviewProps = {
  image: string
  coverDimensions: PreviewDimensions
  previewDimensions: PreviewDimensions
  setPreviewDimensions: (_value: PreviewDimensions) => void
}

export type DimensionsOption = {
  /**
   * Name of the dimension
   */
  name: string
  /**
   * Final dimensions the project should be of
   */
  dimensions: [number, number]
  /**
   * Return the dimensions for the preview
   */
  getPreviewDimensions: (
    _previewDimensions: PreviewDimensions
  ) => PreviewDimensions
  /**
   * Icon to show in button
   */
  icon: (_selected: boolean) => JSX.Element
}

export type DimensionsOptions = Array<DimensionsOption>

export type DimensionsSelectorProps = {
  dimensionsOptions: DimensionsOptions
  selectedIndex: number
  setSelectedIndex: (_value: number) => void
  setHoveringIndex: (_value: number | null) => void
}
