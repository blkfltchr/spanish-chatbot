import React from 'react';
import { Link } from 'react-router-dom'

const RandomButton = () => {
    return ( 
        <div>
            <Link to='/random' style={{color: 'grey', textDecoration: 'none'}}>
                <div className='box'>
                    <b>Practice with random verbs</b>  {/* style={{color: 'blue', textDecoration: 'underline'}} */}
                    <p>Conjugate random verbs in the present tense with yo and tu</p>
                </div>
            </Link>
        </div>
     );
}
 
export default RandomButton;