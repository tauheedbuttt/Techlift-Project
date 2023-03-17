import React from 'react'

const Loader = ({ loading, children, color, row }) => {
  return !loading ? children : (
    <tr className={row ? 'text-center' : 'd-flex justify-content-center'}>
      <td colSpan={99}>
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