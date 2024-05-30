import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Character from './Character'

const urlPlanets = 'http://localhost:9009/api/planets'
const urlPeople = 'http://localhost:9009/api/people'

function App() {
  // ❗ Create state to hold the data from the API
  const [list, setList] = useState([])
  // ❗ Create effects to fetch the data and put it in state

  const people = axios.get(urlPeople)  
  const planets = axios.get(urlPlanets)

  const combineLists = (array1, array2) => {

    let array = []

    for(let i = 0; i < array1.length; i++){
      let item = array1[i]

      let world = array2.filter((world) => world.id === item.homeworld)

      let object = {
        id: item.id,
        name: item.name,
        homeworld: {
          id: world[0].id,
          name: world[0].name
        }
      }

      array.push(object)
    }

    console.log("array: ",array)

    setList(array)

    console.log("list: ", array)

  }

  const getData = () => {
    axios.all([people, planets])
    .then(res => {

      combineLists(res[0].data, res[1].data)

    }).catch(err => {
      console.log("error: ",err)
    })
  }


  useEffect(() => {

    getData()

  },[])

  return (
    <div>
      <h2>Star Wars Characters</h2>
      <p>See the README of the project for instructions on completing this challenge</p>
      {/* ❗ Map over the data in state, rendering a Character at each iteration */}
      {list?.map((item) => (
        <Character key={item.id} name={item.name} planet={item.homeworld.name} />
      ))}
    </div>
  )
}

export default App

// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = App
