import React, { useState } from 'react'

function Character(props) { // ❗ Add the props

  const {name, planet} = props
  // ❗ Create a state to hold whether the homeworld is rendering or not
  const [show, setShow] = useState(false)  

  // ❗ Create a "toggle" click handler to show or remove the homeworld
  const showWorld = () => {
    setShow(!show)
  }

  return (
    <div className='character-card' onClick={showWorld}>
      {/* Use the same markup with the same attributes as in the mock */}
      <h3 className='character-name'>{name}</h3>
      {show?
        <p>Planet: <span className='character-planet'>{planet}</span></p>
        :
        null
      }
    </div>
  )
}

export default Character
