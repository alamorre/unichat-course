import React from "react"

import { useHistory } from "react-router-dom"
import { ChatEngine } from 'react-chat-engine'

import { auth } from "../firebase"

export default function Chats() {
  const history = useHistory()

  async function handleLogout() {
    await auth.signOut()
    history.push("/")
  }

  return (
    <div className='chats-page'>
      <div className='nav-bar'>
        <div className='logo-tab'>
          Unichat
        </div>

        <div onClick={handleLogout} className='logout-tab'>
          Logout
        </div>
      </div>

      <ChatEngine 
        height='calc(100vh - 66px)'
        projectID='784bdb9e-8724-4f63-8ab6-3c10d59f74a7'
        userName='.'
        userSecret='.'
      />
    </div>
  )
}
