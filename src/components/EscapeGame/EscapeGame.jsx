import { RxCross1 } from 'react-icons/rx';
import { Link } from 'react-router-dom';
import './escapeGame.css'
import React, { useState } from "react";

export default function EscapeGame() {
    const [msgConfirmation, setMsgConfirmation] = useState(false);

    const quitter = () => {
        setMsgConfirmation(true)
    }
    const non = () => {    
        setMsgConfirmation(false)
    }

if(msgConfirmation === false){
    return (
        <div>
            <div className='fermer'>
                <RxCross1 onClick={quitter}/>  
            </div>         
        </div>
    );
    }else{

        return (
            <div className='confirm'>
                <div className='cadre'>
                    <p>confirmation</p>
                    <div className='reponses'>
                        <Link className='reponse' to='/categories'>oui</Link>
                        <div className='reponse' onClick ={() => non()}>non</div>
                    </div>
                 </div>
            </div>
        )
    }
}