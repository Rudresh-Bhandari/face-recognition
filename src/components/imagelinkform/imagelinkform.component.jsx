import React from "react";
import './imagelinkform.component.css'
const ImageLinkForm = ({onInputChange,onButtonSumbit}) => {

    return (
        <div >
            <p className='f3'>
                {'This Will Detect faces in your picture'}
            </p>
            <div className="center">
                <div className="form center pa4 br3 shadow-5">
                <input className="f4 pa2 w-70 center"  type='tex' onChange={onInputChange}/>
                <button className="w-30 grow f4 link ph3 pv2 dib white bg-light-blue" onClick={onButtonSumbit}> 
                
                Detect </button>
                </div>
            </div>
        </div>
    );
}

export default ImageLinkForm;