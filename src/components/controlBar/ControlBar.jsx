import colors from "../../AppColours/ColourPalete";
export default function ControlBar(props) {
  return (
     <div style={barStyle}>{props.children}</div>
  );
}

const barStyle = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap:'20px',

    padding: '10px',
    margin: '20px',
    borderRadius: '50px', 
    height: "5vh",
    width: "70%",
    backgroundColor: colors.secondary,
    color: colors.dim,
    boxShadow:"rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px",
};
