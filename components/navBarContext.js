import { useState } from 'react'
import { createContext, useContext } from 'react'

const NavBarContext = createContext()

function NavBarContextProvider({ children }) {
    const [clickedNavBar, setClickedNavBar] = useState(false)
    const [currentSection, setCurrentSection] = useState('/')

    const manageClicked = () => {
        setClickedNavBar(true)
        setTimeout(() => setClickedNavBar(false), 1000)
    }

    const manageCurrentSection = current => {
        setCurrentSection(current)
    }

    const values = {
        clickedNavBar,
        manageClicked,
        currentSection,
        manageCurrentSection,
    }

    return (
        <NavBarContext.Provider value={values}>
            {children}
        </NavBarContext.Provider>
    )
}

function NavBarContextConsumer() {
    const context = useContext(NavBarContext)

    if (!context) {
        console.error('Context Error')
    }

    return context
}

export { NavBarContextProvider, NavBarContextConsumer }
