import { useState } from "react"
import "../css/TabsComponent.module.css"

const TabsComponent = (props) => {

    // Loop through state, map out the tabs and display a button with the text being the tab's name, 
        // and the input changing the state to the tab's index
    // In a second div, load the content of the tab with the index from state
    // Step 3) Take in the tabs array from props
    const { tabs } = props;
    // Step 4) Create a state representing the currrent selected tab
    const [ tabIndex, setTabIndex ] = useState(0);

    // Step 8) Change the selected tab to that of the tab whose button was pressed
    const changeTabsIndex = (index) => {
        setTabIndex(index)
    }
    // Step 9) Change the styling of the selected tab box to dark, and leave the unselected tabs light
    // Style based on if index input matches state
    const tabStyle = (index) => index === tabIndex ? DarkStyle : LightStyle

    // Step 10) The styles that are called upon
    // Style in the jsx
    const DarkStyle = {
        backgroundColor: 'black',
        color: 'white'
    }

    const LightStyle = {
        backgroundColor: 'white',
        color: 'black'
    }

    // Step 12) The function that renders the content of the selected tab by filtering for the tab with the index matching the
    // selected tab, and returning an array of 1 item: the selected tab object, and rendering just the tab's content
    const returnSelectedTabContent = (selectedIndex) => {
        // filter takes in three elements: the array item, the index, and the function IN THAT ORDER, 
        // so if you just say (index), then the code will think you are referring to the item
        let selectedTabs = tabs.filter((tab, index) => index === selectedIndex)
        console.log(selectedIndex)
        console.log(selectedTabs)
        return selectedTabs[0].tabContent;
    }

    return(
        <>
            {/* Use quotes instead of {} because {} is used for variables, and "" is used for css */}
            {/* Step 5) Create a container with a flex style to hold a row of tab buttons with names */}
            <div className="tabBar">
                {
                    // Step 6) Map out the array of tabs
                tabs.map((tab, index) => (
                    <div key={index} >
                        {/* Step 7) Create the tab buttons with conditional styling based on whether the tab iis selected, ie
                        the index of the tab matches state */}
                        {/* Two ways to conditionally style the button */}
                        {/* <button style={tabStyle(index)} onClick={()=>changeTabsIndex(index)}>{tab.tabName}</button> */}
                        <button style={index === tabIndex ? DarkStyle : LightStyle} onClick={()=>changeTabsIndex(index)}>{tab.tabName}</button>
                    </div>
                ))
            }
            </div>
            <div>
                {/* Step 11) Call a function to render the selected tab's information */}
                <p>{returnSelectedTabContent(tabIndex)}</p>
            </div>
        </>
    )
}
export default TabsComponent