import React from 'react'

const Button = ({button, className, style}) => {
  const onClick = () => {
    if(button.disabled) return alert(button.disableMessage)
    button.onClick()
  }
  return (
    <div className={`button ${className} d-flex flex-row align-items-center justify-content-between`} onClick={onClick} style={style}>
      <div className='d-flex flex-row align-items-center'>
        <div style={{paddingLeft: 20, paddingRight: 20}}>
          { !button.icon ? null :  <img src={button.icon} color='red' style={{height: 20, width: 20}} />}
        </div>
        <span style={{fontSize: 18}}>
          {button.title}
        </span>
      </div>
      <div>
        {/* right arrow */}
      </div>
    </div>
  )
}

export default Button