import React from 'react'

const SliderContext = React.createContext()

function SliderProvider({ children }) {
  // state for current slider item from the home image slider
  const [currentSliderItem, setCurrentSliderItem] = React.useState({})

  return (
    <SliderContext.Provider value={{ currentSliderItem, setCurrentSliderItem }}>
      {children}
    </SliderContext.Provider>
  )
}

export { SliderContext, SliderProvider }
