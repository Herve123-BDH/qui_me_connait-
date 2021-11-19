import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle} from '@fortawesome/free-solid-svg-icons'
import {Link} from "react-router-dom";
import { useState } from 'react';
import "./JeuCree.css"
import axios from 'axios'
import {useSelector} from 'react-redux';
import {selectUser} from '../../features/userSlice';
import { useDispatch } from 'react-redux'
export const JeuCree = () => {
    const user = useSelector(selectUser)
    const[url, setUrl]=useState("http://localhost:3000/PlayAmrx" +"/"+ user.id)
    return (
        <div style={{display:"flex", flexDirection:"column", justifyContent: "center", alignItems:"center"}}>
            <div style={{display:"flex", flexDirection:"column", justifyContent: "center", alignItems:"center"}}>
            <FontAwesomeIcon icon={faCheckCircle}></FontAwesomeIcon>
            <p>jeu crée</p>
            </div>
            <div className="ui action input" style={{display:"flex", justifyContent: "center", alignItems:"center"}}>
                    <input type="text" value={url}/>
                    <button className="ui teal right labeled icon button">
                        <i className="copy icon"></i>
                        Copy
                    </button>
            </div>
        </div>
    )
}




