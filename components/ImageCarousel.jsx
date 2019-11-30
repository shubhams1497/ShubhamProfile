import * as React from 'react';
import styles from './ImageCarousel.css';
import * as cx from 'classnames';
export default class ImageCarousel extends React.Component{

    constructor(props){
        super(props);
        this.setParentRef = this.setParentRef.bind(this);
        this.handleInterval = this.handleInterval.bind(this);
        this.handleSizeChange = this.handleSizeChange.bind(this);
        this.clickIndex = this.clickIndex.bind(this);
        this.handleDotClick = this.handleDotClick.bind(this);
        this.state = {
            ImgContainerWidth: 0,
            imgIndex: 0
        }
    }

    setParentRef(par){
        this.parentRef = par;
    }

    handleDotClick(index){
        this.setState({imgIndex: index});
        //console.log(index);
        clearInterval(this.translationInterval);
        this.translationInterval = setInterval(this.handleInterval,3000);
    }
    
    componentDidMount(){
        this.setState({ImgContainerWidth: this.parentRef.clientWidth});
        //console.dir(this.parentRef.clientWidth);
        this.translationInterval = setInterval(this.handleInterval,3000);
        window.addEventListener('resize', this.handleSizeChange);
    }

    handleSizeChange(){
        this.setState({ImgContainerWidth: this.parentRef.clientWidth});
        //console.log("size changed");
    }

    handleInterval(){
        let val = this.state.imgIndex;
        val = (val+1)%(this.props.images.length);
        this.setState({imgIndex: val});
        //console.log(val);
    }

    componentWillUnmount(){
        clearInterval(this.translationInterval);
    }

    clickIndex(index){
        if(this.state.imgIndex != index){
            this.setState({imgIndex: index});
        }
    }

    render(){
        const translationVal = -1*(this.state.imgIndex)*(this.state.ImgContainerWidth);
        return(
            <div className={styles['carousel-wrapper']}>
                <SelectionDots length={this.props.images.length} 
                index = {this.state.imgIndex} ImgContainerWidth = {this.state.ImgContainerWidth}
                handleDotClick = {this.handleDotClick}
                />
                <div ref={this.setParentRef} className = {styles['carousel-container']} style={{transform: `translate(${translationVal}px)`}}>
                    {this.props.images.map( (url,idx) => 
                    <ImgContainer key={idx} width={this.state.ImgContainerWidth} url = {url}/>
                    )}
                </div>
            </div>
        );
    }
}

const SelectionDots = (props) => {
    const dots = [];
    for(let i=0;i<props.length;i++){
        dots.push(
            <div key={i} className={cx([styles['single-dot']], {[styles['single-dot-active']]: (i === props.index)} )}
                onClick = {() => props.handleDotClick(i)}
            >
            </div>
        );
    }
    const marginFromLeft = (props.ImgContainerWidth-75)/2;
    return(
        <div className={styles['selection-dots-wrapper']} style={{left: `${marginFromLeft}px`}}>
            <div className={styles['selection-dots-list']}>
            {dots}
            </div>
        </div>
    );
}

const ImgContainer = (props) => {
    return (
        <div style={{minWidth: props.width, height: "300px", backgroundColor:"rgba(194, 194, 194, 0.616)"}}>
            <img width={props.width} height={"300px"} className={styles['cover-image']} src={props.url} alt="IMG-1016" border="0"></img>
        </div>
    )
}

