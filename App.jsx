import * as React from 'react';
import ImageCarousel from './components/ImageCarousel.jsx';
import Content from './components/Content.jsx';
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
                <ImageCarousel images={imageArray}/>
                <Content/>
            </React.Fragment>
        );
    }
}