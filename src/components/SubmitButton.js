import React from 'react'
import Loader from './Loader'

const SubmitButton = ({iconStyle, onClick, loading, title, icon, color, disabled, width, style}) => {
  return (
    <button disabled={disabled || loading} className={`btn btn-${color}`} type="button" onClick = {onClick} style={style}>
      <Loader loading={loading}>
        <div className={icon ? `d-flex flex-row justify-content-between align-items-center gap-2`: 'd-flex flex-row justify-content-center'} style={{width}}>
          {icon ? <img src={icon} style={{height: 15, width: 15, ...iconStyle}} /> : null}
          {title ? <span>{title}</span> : null}
        </div>
      </Loader>
    </button>
  )
}

export default SubmitButton