import React, { useState } from 'react'

import sreLogo from '@src/assets/Images/Navigation/Navbar/sreLogo.png'
import IyrefLogo from '@src/assets/Images/Navigation/Navbar/iyrefLogo.png'

interface ToggleButtonProps {
  state: boolean
  onToggle: (isChecked: boolean) => void
}

const ToggleButton = ({ state, onToggle }: ToggleButtonProps): JSX.Element => {
  const [isChecked, setIsChecked] = useState(state)

  const handleToggle = (): void => {
    const newCheckedState = !isChecked
    setIsChecked(newCheckedState)
    onToggle(newCheckedState)
  }

  return (
    <label
      htmlFor="toggle"
      className={`flex items-center cursor-pointer ${
        isChecked ? 'bg-green6' : 'bg-green8'
      } w-[110px] h-[40px] rounded-full p-1 transition-all duration-300`}
    >
      <img
        src={isChecked ? sreLogo.src : IyrefLogo.src}
        alt={isChecked ? 'SRE Logo' : 'IYREF Logo'}
        className={`w-14 mr-2 transition-all duration-300 transform ${
          isChecked ? 'translate-x-[38px]' : 'translate-x-[10px]'
        }`}
      />
      <div
        className={`bg-white w-7 h-7 rounded-full shadow-md transform transition-all duration-300 ${
          isChecked ? 'translate-x-[-61px]' : 'translate-x-[7px]'
        }`}
      />
      <input
        type="checkbox"
        id="toggle"
        className="hidden"
        checked={isChecked}
        onChange={handleToggle}
      />
    </label>
  )
}

export default ToggleButton
