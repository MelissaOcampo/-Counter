import React from "react";

const SecondsCounter = (props) => {
	return (
		<div className="container ">
		<div className="d-flex bg-dark justify-content-center text-center" style={{height:"150px"}}>
		<div className="text-white bg-secondary m-2" style={{fontSize:"90px",width:"10%"}}><i className="far fa-clock"></i> </div>
		<div className="text-white bg-secondary m-2" style={{fontSize:"90px",width:"10%"}}>{props.numero1}</div>
		<div className="text-white bg-secondary m-2" style={{fontSize:"90px",width:"10%"}}>{props.numero2}</div>
		<div className="text-white bg-secondary m-2" style={{fontSize:"90px",width:"10%"}}>{props.numero3}</div>
		<div className="text-white bg-secondary m-2" style={{fontSize:"90px",width:"10%"}}>{props.numero4}</div>
		<div className="text-white bg-secondary m-2" style={{fontSize:"90px",width:"10%"}}>{props.numero5}</div>
		<div className="text-white bg-secondary m-2" style={{fontSize:"90px",width:"10%"}}>{props.numero6}</div>
		</div>
		</div>
	);
};

export default SecondsCounter;