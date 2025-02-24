import React from 'react';
import css from './Header.module.css';

const Header: React.FC=()=>{
    return(
        <main className={css.container}>
            <nav>
                <ul className={css.ulContainer}>
                    <li>slices</li>
                    <li>async Thunk</li>
                    <li>Clean workspace</li>
                    <li>serialization</li>
                </ul>
            </nav>
        </main>
    )
}
export default Header;