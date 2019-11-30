import * as React from 'react';
import styles from './StickyMenuBar.css';
import * as cx from 'classnames';

export default class StickyMenuBar extends React.Component{

    constructor(props){
        super(props);
        this.setHeaderRef = this.setHeaderRef.bind(this);
        this.state = {
            isSticky: false,
            headerOffset: 0
        }
    }

    setHeaderRef(e){
        this.headerRef = e;
    }

    componentDidMount(){
        const offset = this.headerRef.offsetTop;
        // console.log(offset);
        // this.setState({headerOffset:offset});
        window.addEventListener('scroll', () => {
            if(window.pageYOffset > offset){
                if(!this.state.isSticky){
                    this.setState({isSticky: true});
                }
            }
            else{
                if(this.state.isSticky){
                    this.setState({isSticky: false});
                }
            }
        });
    }

    render(){

        const menus = ['Menu1','Menu2','Menu3','Menu4'];

        return(
            <div ref={this.setHeaderRef} className = {cx([styles['header-bar']], {[styles['sticky']] : this.state.isSticky} )}>
                {
                    menus.map(
                        (menu,idx) =>
                        <div key={idx} className={styles['menu-item']}>{menu}</div>
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
            ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint e`    
            }
        </div>
    );
}