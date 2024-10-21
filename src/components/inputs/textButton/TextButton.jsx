import colors from "../../../appColours/ColourPalete";
import React from "react";

export default function TextButton(props) {
    const [hover, setHover] = React.useState(false)
    const [click, setClick] = React.useState(false)

  return (
  <div 
    onMouseEnter={()=>setHover(true)}
    onMouseLeave={()=>setHover(false)}
    onMouseDown={()=>setClick(true)}
    onMouseUp={()=>setClick(false)}
    onClick={props.onClick}
    style={ButtonStyle(props.highlight, props.primary, hover, click)}>
        {props.children}
  </div>
  );
}

const ButtonStyle = (highlight, primary, hover, click) => {
var text = primary? colors.text : colors.textSecondary;

return { 
    heigh:'17px',
    width: '17px',
    textAlign: 'center',
    padding: click? "6px": "4px",
    border:  click? `2px solid ${text}`: "4px solid transparent",
    borderRadius: "50px",
    color: highlight? colors.highlight : text,
    backgroundColor: hover? colors.dim: "transparent",
    
    transitionDuration: "200ms"
}};
