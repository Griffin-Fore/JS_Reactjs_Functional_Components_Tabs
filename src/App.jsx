import { useState } from 'react'
import './App.css'
import TabsComponent from './Components/TabsComponent'
// Pass an array of tabs objects with label and content through props
function App() {
  // Step 1) Create an array of tabs
  const tabs = ([
    {tabName: "Tab 1", tabContent: "This is tab 1"},
    {tabName: "Racing Tab", tabContent: "All about NASCAR"},
    {tabName: "Tabbed Me", tabContent: "I'm the third tab!"},
    {tabName: "4th Tab", tabContent: "Tab 4 iss a go!"}
  ])

  return (
    <>
      {/* Step 2) Pass the tabs through props */}
      <TabsComponent tabs={tabs} />
    </>
  )
}

export default App
