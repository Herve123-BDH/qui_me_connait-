import {useState} from 'react'
import axios from 'axios'
import './welldone.css'
import item from '../img/item.png'
import {Link} from 'react-router-dom'
export const Welldone = () => {
    const [niveau, setNiveau]=useState(5)
    const [users, setUsers]=useState()
    const [username, setUserName]=useState("")
    const [none, setNone]=useState("block")
    const loading=()=>{
        axios.get("http://localhost:5000/user/get/listamrx/6192561e2282832fddb91f84")
        .then(response=>{
            setUserName(response.data[1])
            setUsers(response.data[0])})
        .catch(err=>console.log(err))
        console.log(users)
        setInterval(()=>{
            setNone("none")
        }, 5000)
    }
    loading();
    return (
        <div>
            {users?<h2>liste des joeurs de {username}</h2>:""}
                
                    <div className="amrxxx">
                        <ol style={{display:"flex", justifyContent: "center",alignItems:"center"}}>
                        <table>
                            
                            {users?users.map((usersUniq)=>
                            <div>
                                <tr>
                                    <td style={{width: "30%"}}>
                                        <li>{usersUniq.name}</li>
                                        
                                    </td>
                                    <td>
                                        <div className="progress">
                                            <div className="progress-bar" role="progressbar" style={{width: usersUniq.score +  "%"}} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">{usersUniq.score}%</div>
                                        </div>
                                    </td>
                                    
                                </tr>
                                
                            </div>
                                ):
                                
                                <div>
                                <div style={{display: none}} className="spinner-border text-primary" role="status">
                                    <span className="sr-only">Loading...</span>
                                </div>
                                
                                {none==="block"? "":<button onClick={loading}  className="ui inverted button" >rafrechir la page</button>}
                                </div>
                                }
                                
                        </table>
                    </ol>
                    {users?<Link to='/'><button onClick={loading}  className="ui inverted button" >Jouer</button></Link>:""}
                </div>
        </div>
    )
}
