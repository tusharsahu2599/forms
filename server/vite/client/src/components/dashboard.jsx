import React from 'react'
import "./form.css"
import { useState, useEffect } from 'react'
import axios from 'axios'



export const Dashboard = () => {

  const [data, setData] = useState([])

  useEffect(() => {
    axios.get("https://crime-notice-app.herokuapp.com/notices")
      .then(res => setData(res.data))
      .catch((err) => {
        console.log(err)
      })

  }, [])




  return (
    <div>
      <div className="dashboard">
        Notice Dashboard
      </div>
      <div className="dashboard-container">

        {data.sort((a,b)=> new Date(b.postDate - a.postDate)).map((e) => {
          return (
            <div key={e.id}>
              <div>{e.notice}</div>
              <div>{e.user}</div>
              <p>{e.date}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

