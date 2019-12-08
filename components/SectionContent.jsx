import * as React from 'react';
import {FuzzyData} from './StickyMenuBar.jsx';
import styles from './SectionContent.css';

export default class SectionContent extends React.Component{

    constructor(props){
        super(props);
    }
    
    render(){

        return(
            <div ref={this.props.setRef} className={styles['section-container']}>
                <div className={styles['section-header']}>
                    {this.props.header}
                </div>
                <div className={styles['section-body']}>
                    <FuzzyData/>
                </div>
            </div>
        );
    }
}