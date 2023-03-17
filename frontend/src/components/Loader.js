import React from 'react'

const Loader = ({ loading, children, overlay, color }) => {
  return !loading ? children : (
    <tr style={{ columnSpan: 999 }} className={'w-100 border border-2 text-center h-100'}>
      <td colspan="99" >
        <span
          className={`spinner-border spinner-border-sm`}
          role="status"
          aria-hidden="true"
          style={{ color: (color ? color : 'white') }}
        />
      </td>
    </tr>
  )
}

export default Loader