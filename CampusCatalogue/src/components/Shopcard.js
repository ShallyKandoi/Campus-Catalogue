import React, {useState, useEffect} from "react";
import foodShop from '../assets/canteen.png';
import star from '../assets/star.svg';
import heart from '../assets/heart.svg'

function ShopCard(props) {
    const [active, setActive]=useState(false);
    const handleClick = () => {
        setActive(!active);
      };

    return (
            <div style={{position: "relative", width: "328px", height: "204px", marginLeft: "auto", marginRight: "auto", backgroundColor: "#FFFFFF", borderRadius: "16px", boxShadow: "0px 0px 15px -5px", display:"flex", flexDirection:"column"}}>
                
                <div style={{height: "132px", borderRadius: "0px 0px 12px 12px", overflow: "hidden"}}>
                    
                    <img src={foodShop} alt='' />

                    <div onClick={handleClick} style={{width:"36px", height:"36px",backgroundColor : active? "red" : "white" ,borderRadius:"24px",zIndex:"2", position:"absolute", top:"16px", right:"16px"}}>
                        <img src={heart} alt="" style={{ paddingTop:"12px",position:"relative"}}/>                    
                    </div>

                </div>
                
                <div style={{fontFamily: "General Sans", paddingLeft: "16px", textAlign: "left"}}>

                    <div style={{fontWeight: "500", fontSize: "16px", paddingTop: "16px", display: "inline-block"}}>
                        {props.line1}
                    </div>

                    <div style={{position:"relative",height: "20px", width: "35px", padding: "0px 6px 0px 8px", backgroundColor: "#55AE63", borderRadius: "8px", display: "flex",justifyContent:'space-between', alignItems:'center', flexDirection:'row', float: "right", marginTop: "15px", marginRight: "16px"}}>
                        
                        <div style={{fontSize: "12px", width: "fit-content", height: "fit-content", fontWeight: "500", color:"white"}}>
                            {props.rating}
                        </div>

                        <img src={star} alt='' style={{position:"relative"}}/>
                            
                    </div>

                    <div style={{fontWeight: "400", fontSize: "12px", paddingTop: "4px"}}>
                        {props.line2}
                    </div>

                </div> 

            </div>
    );
}

export default ShopCard;