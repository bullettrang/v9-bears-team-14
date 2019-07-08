import React,{useState,useEffect} from 'react';
import {useTransition, animated} from 'react-spring';
import './Header.css';
const Header =()=>{
    const [show, set] = useState(false)

    const transitions = useTransition(show, null, {
        from: {  opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
        })

    useEffect(() =>  set(state => !state), [])      //on mount, animate Header component in
    return(

         transitions.map(({item,key,props})=> <animated.header key={key} style={props} className="Header__Wrapper">
             <h1 className="Header--Title"> Geo-Foods</h1>
             <h2 className="Header--title Header--subtitle">Explore the World's Cuisines</h2>
         </animated.header>)
    )
}

export default Header;