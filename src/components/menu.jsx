import React from "react"

const Menu = ({ setLineColor, setLineWidth, setLineAlpha }) => {
  return (
    <div>
      <label>Brush Color</label>
      <input
        type='color'
        onChange={(e) => { setLineColor(e.target.value) }} />
      <label>Brush Width</label>
      <input
        type='range'
        min='1'
        max='10'
        onChange={(e) => { setLineColor(e.target.value) }} />
      <label>Transparency</label>
      <input
        type='range'
        min='1'
        max='100'
        onChange={(e) => { setLineColor(e.target.value / 100) }} />
    </div>
  )
}

export default Menu;