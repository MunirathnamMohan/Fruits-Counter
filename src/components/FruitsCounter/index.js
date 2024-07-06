import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component{

    state={mango:0,banana:0}

    onMango=()=>{
        this.setState((prevState)=>(
            {mango:prevState.mango+1}
        ))

    }
    onBanana=()=>{
        this.setState((prevState)=>(
            {banana:prevState.banana+1}
        ))

    }


    render(){

        const{mango,banana}=this.state
        return(
            <div className="bg-container">
                <div className='card-container'>
                    <h1 className='header'>Bob ate <span className='span'>{mango}</span> mangoes <span className='span'>{banana}</span> bananas</h1>
                    <div className='img-con'>
                    <img src='https://assets.ccbp.in/frontend/react-js/mango-img.png' className='img'/>
                    <img src='https://assets.ccbp.in/frontend/react-js/banana-img.png' className='img'/>
                    </div>
                    <div className='btn-con'>
                        <button className='button' onClick={this.onMango}>Eat Mango</button>
                        <button className='button' onClick={this.onBanana}>Eat Banana</button>

                    </div>


                </div>

            </div>
        )
    }
}

export default FruitsCounter