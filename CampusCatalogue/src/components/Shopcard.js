import React, {useState} from "react";
import star from '../assets/star.svg';
import heart from '../assets/heart.svg';
import heartActive from '../assets/heartActive.svg'

function ShopCard(props) {
    const [active, setActive]=useState(false);
    const handleClick = () => {
        setActive(!active);
      };

    return (
            <div style={{position: "relative", width: "85%", height: "204px", margin:"20px auto 20px auto", backgroundColor: "#FFFFFF", borderRadius: "16px", boxShadow: "0px 0px 15px -5px", display:"flex", flexDirection:"column"}}>
                
                <div style={{height: "132px",width:'100%', borderRadius: "12px 12px 12px 12px", overflow: "hidden"}}>
                    
                    <img src={props.img} alt='' style={{width:"100%"}} />

                    <div onClick={handleClick} style={{width:"36px", height:"36px",backgroundColor : active? "red" : "white" ,borderRadius:"24px",zIndex:"2", position:"absolute", top:"16px", right:"16px"}}>
                        {
                            active? (<img src={heart} alt="" style={{position:"absolute",top:"12px",right:"10px"}}/>):(<img src={heartActive} alt="" style={{position:"absolute",top:"12px",right:"10px"}}/>)
                        }
                    </div>

                </div>
                
                <div style={{fontFamily: "Sans-serif", paddingLeft: "16px", textAlign: "left"}}>

                    <div style={{fontWeight: "500", fontSize: "16px", color:"#020314", paddingTop: "16px", display: "inline-block"}}>
                        {props.line1}
                    </div>

                    <div style={{position:"relative",height: "20px", width: "35px", padding: "0px 6px 0px 8px", backgroundColor: "#55AE63", borderRadius: "8px", display: "flex",justifyContent:'space-between', alignItems:'center', flexDirection:'row', float: "right", marginTop: "15px", marginRight: "16px"}}>
                        
                        <div style={{fontSize: "12px", width: "fit-content", height: "fit-content", fontWeight: "500", color:"white"}}>
                            {props.rating}
                        </div>

                        <img src={star} alt='' style={{position:"relative"}}/>
                            
                    </div>

                    <div style={{fontWeight: "400", fontSize: "12px", color:"#6F6F6F", paddingTop: "4px"}}>
                        {props.line2}
                    </div>

                </div> 

            </div>
    );
}

export default ShopCard;