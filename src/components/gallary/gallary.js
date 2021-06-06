import React from 'react';
import './style.css'
import Imagecard from '../image/imagecard.js';

class gallary extends React.Component{
    constructor(props)
    {
        super(props);
        this.state={
            images:[],
            currentaddress:'',
        }
    }
    onaddresschange = (event)=>
    {

        this.setState({
            currentaddress: event.target.value
        })
    }
    onaddimage =()=>{
        if(this.state.currentaddress===''){
            return;
        }
        const newimages=[...this.state.images];
        newimages.push(this.state.currentaddress)
        this.setState({
            images:newimages,
            currentaddress:'',

        })

    }

    render =()=> {
        return(
            <div className="root-container">
                <p className="title">
                    ------- Image Gallary -------
                </p>
                <div className="input-box">
                    <input
                    onChange={this.onaddresschange}
                    value={this.state.currentaddress}
                     type="text"
                     placeholder="Enter image url"/>
                    <button onClick={this.onaddimage}>Add</button>
                </div>
                <div className="list-box">                {
                    this.state.images.map(  (url) =>{
                         return <Imagecard key={url} imageurl={url}/>
                         
    
                    })
                }
                </div>

            </div>
            
            

        );
    };
}
export default gallary;