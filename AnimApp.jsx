import * as React from 'react';
import MyImage from './assets/shubham2.jpg';
export default class AnimApp extends React.Component{
    constructor(props){
        super(props);
        this.setCanvasRef = this.setCanvasRef.bind(this);
        this.setImgRef = this.setImgRef.bind(this);
    }

    setCanvasRef(e){
        this.canvasRef = e;
    }

    setImgRef(e){
        this.imgRef = e;
    }

    componentDidMount(){
        let ctx = this.canvasRef.getContext("2d");
        this.imgRef.onload = () => {
            ctx.drawImage(this.imgRef, 0, 0,300,5,0,0,300,5);
        }
        // ctx.drawImage(this.imgRef, 10, 10);
        // img.onload = () => {
        //     ctx.drawImage(img, 10, 10);
        //     img.src = "dfs";
        // }
    }

    render(){
        return(
            <div>  
                <canvas ref={this.setCanvasRef} width={"300px"} height={"300px"}/>
                <img ref={this.setImgRef} height={"300px"} width={"300px"} src={MyImage}/>
            </div>
            );
    }
}