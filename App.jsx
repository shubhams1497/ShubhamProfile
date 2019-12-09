import * as React from 'react';
import ImageCarousel from './components/ImageCarousel.jsx';
import StickyMenuBar,{ FuzzyData} from './components/StickyMenuBar.jsx';
import SideBar from './components/SideBar.jsx';
import SectionContent from './components/SectionContent.jsx';
import styles from './App.css';
export default class App extends React.Component{

    constructor(props)
    {
        super(props);
        this.setSectionRef = this.setSectionRef.bind(this);
        this.sectionRefs = [];
    }

    setSectionRef(key){
        return (e) => {
            this.sectionRefs[key] = e;
        }
    }

    render(){
        const imageArray = [
                            "https://i.ibb.co/KwkKCDS/image5.jpg", 
                            "https://i.ibb.co/HGx88wJ/image6.jpg",
                            "https://i.ibb.co/0Fp3fH4/Image3.jpg",
                            "https://i.ibb.co/X4vmyxX/Image4.jpg"
                            ]

        return(
            <div className={styles['app-container']}>
                <div className={styles['left-panel']}>
                    <SideBar/>
                </div>
                <div className={styles['right-panel']}>
                    <ImageCarousel images={imageArray}/>
                    <div className={styles['menu-bar-container']}>
                        <StickyMenuBar sectionRefs={this.sectionRefs}/>
                    </div>
                    <SectionContent setRef={this.setSectionRef(0)} header={'About Me'} bodyContent = {FuzzyData}/>
                    <SectionContent setRef={this.setSectionRef(1)} header={'My Profession'} bodyContent = {FuzzyData}/>
                    <SectionContent setRef={this.setSectionRef(2)} header={'Contact Me'} bodyContent = {FuzzyData}/>
                </div>
            </div>
        );
    }
}