import React from 'react'

const Loader = ({loading, children, overlay, color, center}) => {
  return !loading ? children : (
    <div>
      {!overlay ? null : children}
      <div 
        className={!overlay && !center ? null : 'd-flex align-items-center justify-content-center'}
        id = {!overlay ? null : 'overlay'}
      >
        <span 
          className={`spinner-border spinner-border-sm`} 
          role="status" 
          aria-hidden="true"
          style={!overlay ? {color} : {width: '8rem', height: '8rem', color: (color ? color : 'white')}}
        />
      </div>
    </div>
  )
}

export default Loader