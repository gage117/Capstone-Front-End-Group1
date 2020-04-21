import React from 'react'
import './Main.css'
import users from '../../store'
import MainPageContext from '../../Contexts/MainPageContext'
import { Link } from 'react-router-dom'


export default class MainPage extends React.Component {
    static contextType = MainPageContext

    componentDidMount() {
        this.context.setUsers(users)
        this.context.setCurrentProfile(users[0])
    }

    render() {
        console.log(this.context.state)
        const userOne = this.context.users[0] || {}
        return (
            <section className='mainSwipe'>
            <h2 className='mainSwipeH2'>Main Page</h2>
            <div className='mainNav'>
                <Link to='/profile'>Profile</Link>
                <Link to='/matches'>Matches</Link>
                {/* <button className='profileButton'>profile</button> */}
                {/* <button className='matchesButton'>matches</button> */}
            </div>
            {<li className='mainSwipeUser'>
                <img src={userOne.avatar} alt='avatar' className='mainImage'></img>
                <h3>{userOne.display_name}</h3>
                <p>{userOne.bio}</p>
                <span>{userOne.platforms}</span>
                {' '}
                <span>{userOne.lfm_in}</span>
            </li>}
            <div className='secondNav'>
                <button className='noButton'>No</button>
                <button className='yesButton'>Yes</button>
            </div>
            </section>
        )
    }
}