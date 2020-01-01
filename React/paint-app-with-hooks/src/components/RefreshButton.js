import React from 'react'

const RefreshButton = React.memo(({cb}) => {
  console.log('render refresh button')
  return (
    <button className="button-refresh-colors" onClick={cb}>&#8634;</button>
  )
})

export default RefreshButton;


// export default function RefreshButton({ cb }) {
//   return <button className="button-refresh-colors" onClick={cb}>&#8634;</button>
// }
