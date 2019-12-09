import * as React from 'react';
import styles from './StickyMenuBar.css';
import * as cx from 'classnames';

export default class StickyMenuBar extends React.Component{

    constructor(props){
        super(props);
        this.setHeaderRef = this.setHeaderRef.bind(this);
        this.resolveActiveMenuIdx = this.resolveActiveMenuIdx.bind(this);
        this.state = {
            isSticky: false,
            headerOffset: 0,
            activeMenuIdx: 0
        }
    }

    setHeaderRef(e){
        this.headerRef = e;
    }

    componentDidMount(){
        const offset = this.headerRef.offsetTop;
        let actionTimer;
        // console.log(offset);
        // this.setState({headerOffset:offset});
        window.addEventListener('scroll', () => {
            // console.log(this.props.sectionRefs[1].offsetTop);
            clearTimeout(actionTimer);
            actionTimer = setTimeout(this.resolveActiveMenuIdx,80);
            // if(window.pageYOffset > offset){
            //     if(!this.state.isSticky){
            //         this.setState({isSticky: true});
            //     }
            // }
            // else{
            //     if(this.state.isSticky){
            //         this.setState({isSticky: false});
            //     }
            // }
            // this.resolveActiveMenuIdx(window.pageYOffset);
        });
    }

    resolveActiveMenuIdx(){
        let currOffset = window.pageYOffset;
        const adjustedOffset = 85;
        currOffset = currOffset + adjustedOffset;
        if(currOffset < this.props.sectionRefs[1].offsetTop){
            this.setState({activeMenuIdx: 0});
        }
        else if(currOffset >= this.props.sectionRefs[1].offsetTop && currOffset < this.props.sectionRefs[2].offsetTop)
        {
            this.setState({activeMenuIdx: 1});
        }
        else if(currOffset >= this.props.sectionRefs[2].offsetTop && currOffset < this.props.sectionRefs[3].offsetTop)
        {
            this.setState({activeMenuIdx: 2});
        }
        else if(currOffset >= this.props.sectionRefs[3].offsetTop)
        {
            this.setState({activeMenuIdx: 3});
        }
    }

    handleMenuItemClick(key){
        return () => {
            // const scrollToVal = this.props.sectionRefs[key].offsetTop-55;
            // window.scroll({
            //     top: scrollToVal, 
            //     left: 0, 
            //     behavior: 'smooth'
            // });
            const elementY = this.props.sectionRefs[key].offsetTop-55;
            const duration = 300;
            let startingY = window.pageYOffset;
            let diff = elementY - startingY;
            let start;

            // Bootstrap our animation - it will get called right before next frame shall be rendered.
            window.requestAnimationFrame(function step(timestamp) {
                if (!start) start = timestamp;
                // Elapsed milliseconds since start of scrolling.
                var time = timestamp - start;
                // Get percent of completion in range [0, 1].
                var percent = Math.min(time / duration, 1);

                window.scrollTo(0, startingY + diff * percent);

                // Proceed with animation as long as we wanted it to.
                if (time < duration) {
                window.requestAnimationFrame(step);
                }
            })
        }
    }

    render(){
        const activeMenuIdx = this.state.activeMenuIdx;
        const menus = ['Section1','Section2','Section3','Section4'];

        return(
            <div ref={this.setHeaderRef} className = {cx([styles['header-bar']], {[styles['sticky']] : this.state.isSticky} )}>
                <div className={styles['active-indicator']} 
                     style={{left: `${activeMenuIdx*76}px`}}>
                </div>
                {
                    menus.map(
                        (menu,idx) =>
                        <div key={idx} onClick={this.handleMenuItemClick(idx)}
                            className={ styles['menu-item']} style={{color: (activeMenuIdx===idx)?'rgb(40, 40, 40)':'rgb(85, 85, 85)'}}>
                            {menu}
                        </div>
                    )
                }
            </div>
        )
    }
}

export const FuzzyData = () => {
    return(
        <div className={styles['fuzzy-data']}>
            {
            `Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, 
            maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. 
            Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.Some text to enable scrolling.. 
            Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur 
            ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint e
            Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, 
            maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. 
            Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.Some text to enable scrolling.. 
            Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur 
            ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint e
            Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, 
            maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. 
            Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.Some text to enable scrolling.. 
            Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur 
            ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint e
            Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, 
            maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. 
            Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.Some text to enable scrolling.. 
            Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur 
            ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint e`    
            }
        </div>
    );
}