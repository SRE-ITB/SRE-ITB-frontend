import React, { useState, useEffect } from 'react'

interface AlertBoxProps {
  isConfirm: boolean
  content: string
  onConfirm: () => void
  onCancel?: () => void
}

const AlertBox = ({ isConfirm, content, onConfirm, onCancel }: AlertBoxProps): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsOpen(true)
    }, 50)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [])

  const handleConfirm = (): void => {
    setIsOpen(false)
    setTimeout(() => {
      onConfirm()
    }, 300)
  }

  const handleCancel = (): void => {
    setIsOpen(false)
    setTimeout(() => {
      onCancel?.()
    }, 300)
  }

  return (
    <div className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 px-[10vw] font-montserrat transition-opacity ease-in-out duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
      <div className={`bg-white p-5 rounded-md w-[500px] transition-transform ease-in-out duration-300 transform scale-${isOpen ? '100' : '90'}`}>
        <p className="text-lg text-black font-semibold mb-3 text-center">{content}</p>
        <div className={`flex ${isConfirm ? 'justify-between' : 'justify-center'}`}>
          <button onClick={handleConfirm} className="font-bold px-4 py-2 bg-[#169470] text-white rounded-md mr-2 hover:bg-[#046669] transition-all">
            Okay
          </button>
          {isConfirm && (
            <button onClick={handleCancel} className="font-bold px-4 py-2 bg-gray-300 rounded-md">
              Cancel
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default AlertBox
