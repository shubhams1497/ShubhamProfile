import * as React from 'react';
import ImageCarousel from './components/ImageCarousel.jsx';
import StickyMenuBar,{ FuzzyData} from './components/StickyMenuBar.jsx';
export default class App extends React.Component{

    render(){
        const imageArray = [
                            "https://i.ibb.co/KwkKCDS/image5.jpg", 
                            "https://i.ibb.co/HGx88wJ/image6.jpg",
                            "https://i.ibb.co/0Fp3fH4/Image3.jpg",
                            "https://i.ibb.co/X4vmyxX/Image4.jpg"
                            ]

        return(
            <React.Fragment>
                <StickyMenuBar/>
                <ImageCarousel images={imageArray}/>
                <FuzzyData/>
                <FuzzyData/>
                <FuzzyData/>
                <FuzzyData/>
                <FuzzyData/>
                <FuzzyData/>
                <FuzzyData/>
                <FuzzyData/>
                <FuzzyData/>
                <FuzzyData/>
            </React.Fragment>
        );
    }
}