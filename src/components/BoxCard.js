import React, { useState } from 'react'

export const BoxCard = ({resultclass, children}) => {
    const [show, setShow]=useState(true)
  return (
 <div className={show?"":'hidden'}>
    <div className={`box ${resultclass}`}>
     {children}
     <button className='trigger' onClick={()=>setShow(!show)}>Hide</button>
      </div>

  
      </div>
  )
}


