import React, { Component } from 'react'
import {add ,remove } from '../../actions/wallets_actions'

import BTC from '../../../assets/images/logo/BTC.png'

export default class PriceItem extends Component {
    constructor(props){
        super(props);
        
        this.handleFollow = this.handleFollow.bind(this);
    }

    handleFollow(event){
        if(Object.keys(this.props.wallets).includes(this.props.symbol)){
            store.dispatch(remove(this.props.wallets[this.props.symbol].id));
            event.target.style.color = 'black';
        }
        else{
            event.target.style.color = '#F4C623';
            store.dispatch(add(this.props.symbol));
        }
    }

    star = () =>{
        const followed = {
            color: '#F4C623',
        };
        const style = {
            color: 'grey',
        }
        
        if (Object.keys(this.props.wallets).includes(this.props.symbol)){
            return followed;
        }else{
            return style;
        }
    }

    priceFormatter(price){
        
        const billion= 1e9;
        const million=1e6;
        let rank;

        if(price/billion>=1){
            rank='B'
            return ((price/billion).toFixed(1) + rank);
        }else if(price/million>=1){
            rank='M'
            return ((price/million).toFixed(1) + rank);
        }else{
            return price.toPrecision(3);
        }
        
    }



    render() {
        const divRed = { color: 'red' };
        const divGreen = { color: 'green' };
        const percentIsPos = (this.props.change > 0);

        return (
            <>
            <div className="price-element-border"> 
            <div className="price-header pad-correction">
                
                <div>
                    
                    <div style={{color:'grey'}}>{this.props.number + 1}</div>
                    <div className='price-name'>
                    <img src={BTC} alt="bitcoin" width='30px' height='30px'/>
                        {this.props.name}</div>
                       
                </div>
                <div>  
                    <div className='price-data'>${this.props.price.toFixed(2)}</div>
                    <div className='price-data' style={percentIsPos ? divGreen : divRed }>{this.props.change.toPrecision(2)}%</div>
                    <div className='price-data'>${this.priceFormatter(this.props.market)}</div>
                    <div className='price-data'><button className='btn btn-flat price-btn' disabled>Trade</button></div>
                    <div className='price-data'>
                        <i className="fa fa-3x fa-star" aria-hidden="true" style={this.star()} onClick={this.handleFollow}></i>
                    </div>
                </div> 
            </div>
            </div> 
            </>
        )
    }
}
