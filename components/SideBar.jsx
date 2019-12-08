import * as React from 'react';
import styles from './SideBar.css';

export default class SideBar extends React.Component{

    render(){
        return(
            <div className={styles['sidebar-container']}>
                <div className={styles['inner-container']}>
                    <a href="#">Menu1</a>
                    <a href="#">Menu2</a>
                    <a href="#">Menu3</a>
                    <a href="#">Menu4</a>
                    <a href="#">Menu5</a>
                </div>
            </div>
        );
    }
}