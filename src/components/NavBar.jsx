import React, { Fragment, useState } from 'react'
import { HiSearch } from 'react-icons/hi'
import { Routes, Route, NavLink } from 'react-router-dom'
// import Home from './Home'
import Movies from './Movies'
import TvShows from './TvShows'
import '../Styles/NavBarStyle.css'

export const Container = React.createContext()

function NavBar() {
    const [toggle, setToggle] = useState(true)
    const [inputValue, setInputValue] = useState('')
    return (
        <Container.Provider value={{toggle, inputValue}}>
        <Fragment>
            <nav className={toggle ? '' : 'navBarColor'}>
                <div className="nav-options">
                    <h1 id={toggle ? '' : 'heading'}>REACTFILM</h1>
                    {/* <NavLink to="" style={({isActive}) => {return {color:isActive ? '#fff' : '#EE9B00'}}}>
                    <span id={toggle ? 'Movies' : 'MoviesLight'}>Home</span>
                    </NavLink> */}
                    <NavLink to="/Movies" style={({isActive}) => {return {color:isActive ? '#fff' : '#EE9B00'}}}>
                    <span id={toggle ? 'Movies' : 'MoviesLight'}>Movies</span>
                    </NavLink>
                    <NavLink to="/TvShows" style={({isActive}) => {return {color:isActive ? '#fff' : '#EE9B00'}}}>
                    <span id={toggle ? 'Movies' : 'MoviesLight'}>Tv Shows</span>
                    </NavLink>
                </div>
                <div className='input-group'>
                    <input type="text" placeholder="Search" onChange={(e) => setInputValue(e.target.value)} />
                    <HiSearch fontSize={21} color="green" id="search" />
                    <div id="Color-switcher" onClick={() => setToggle(!toggle)}>
                        <div id={toggle ? 'Color-switcher-mover' : 'Color-switcher-moved'}></div>
                    </div>
                </div>
            </nav>
            <Routes>
                <Route path="/" element={<Movies />} />
                <Route path="Movies" element={<Movies />} />
                <Route path="TvShows" element={<TvShows />} />
            </Routes>
        </Fragment>
        </Container.Provider>
    )
}

export default NavBar