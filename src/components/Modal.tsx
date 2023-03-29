import React from 'react'

function Modal({children, event}: {
    children: JSX.Element,
    event?: any
}) {
  return (
    <div
    className="fixed inset-0 overflow-y-auto flex items-center justify-center z-40"
    >
        <div
            onClick={(e) => {
                if (e.target === e.currentTarget)
                event()
            }}
            className="absolute inset-0 bg-darkBG bg-opacity-25">
                {children}
        </div>
</div>
  )
}

export default Modal