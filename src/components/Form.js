import React from 'react'

const Form = ({fields}) => {
  return (
    <div className='form'>
      {
        fields?.map((item,index)=>{
          return item.data ? (
            <div key={index} className='d-flex w-100 gap-2'>
              {
                item.data.map((field, idx)=>{
                  return (
                    <div  className={'form-input-container '} style={{flex: 1, ...field.style}} key={idx}>
                     {field.label ? <label className='form-label'>{field.label}</label> : null}
                      <input
                        className={`form-control ${field.type =='file' ? '' : 'form-input'} ${field.type =='file' ? '' : field.className}`}
                        type={field.type != 'text' ? field.type : 'text'}
                        value={field.type == 'file' ? undefined : field.value}
                        onChange={(e)=>field.setValue(
                          field.type == "file" ? e.target.files[0] : e.target.value
                        )}
                        placeholder={field.placeholder}
                      />
                    </div>
                  )
                })
              }
            </div>
          ) : (
            // Normal
            <div className={'form-input-container'} key={index} style={item.style}>
              {item.label ? <label className='form-label'>{item.label}</label> : null}
              <input
                className={`form-control ${item.type =='file' ? '' : 'form-input'} ${item.type =='file' ? '' : item.className}`}
                type={item.type != 'text' ? item.type : 'text'}
                value={item.type == 'file' ? undefined : item.value}
                onChange={(e)=>item.setValue(
                  item.type == "file" ? e.target.files[0] : e.target.value
                )}
                placeholder={item.placeholder}
              />
            </div>
          )
        })
      }
    </div>
  )
}

export default Form