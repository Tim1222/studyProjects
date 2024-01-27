import React from 'react';
import styles from "./components/Site.module.css";
import {PageOne} from "./components/pages/PageOne";
import {PageTwo} from "./components/pages/PageTwo";
import {PageThree} from "./components/pages/PageThree";
import {Navigate, NavLink, Route, Routes} from "react-router-dom";
import {Error404} from "./components/pages/Error404";
import {S} from './components/pages/_styles'


const PATH = {
    PAGE1: '/page1',
    PAGE2: '/page2',
    PAGE3: '/page3',
    ERROR: '/error404'
} as const

function App() {
    return (
        <div>
            <div className={styles.header}><h1>HEADER</h1></div>
            <div className={styles.body}>
                <div className={styles.nav}>
                    <S.NavWrapper>
                        <NavLink to={PATH.PAGE1}
                                 target={'_blank'}
                                 rel={'noreferrer nofollow noopener'}
                        >Page 1</NavLink>
                        {/*   target={'_blank'} - открывает страницу в новой вкладке
                        rel - это используется для безопасности, чтобы нельзя было отследить откуда пришел,
                        не было доступа к сессии*/}
                    </S.NavWrapper>
                    <S.NavWrapper>
                        <NavLink to={PATH.PAGE2}>Page 2</NavLink>
                    </S.NavWrapper>
                    <S.NavWrapper>
                        <NavLink to={PATH.PAGE3} style={(params) => {
                            return {color: params.isActive ? 'lime' : 'black'}
                        }
                        }>Page 3</NavLink>
                    </S.NavWrapper>
                </div>
                <div className={styles.content}>

                    <Routes>
                        <Route path={'/'} element={<Navigate to={'/'}/>}/>

                        <Route path={PATH.PAGE1} element={<PageOne/>}/>
                        <Route path={PATH.PAGE2} element={<PageTwo/>}/>
                        <Route path={PATH.PAGE3} element={<PageThree/>}/>

                        {/*<Route path={PATH.ERROR} element={<Error404/>}/>*/}
                        {/*<Route path='/*' element={<Navigate to={'/error404'}/>}/>*/}
                        <Route path={PATH.ERROR} element={<Error404/>}/>
                        <Route path='/*' element={<div>Error404</div>}/>

                    </Routes>

                </div>
            </div>
            <div className={styles.footer}>abibas 2023</div>
        </div>
    );
}


export default App;
