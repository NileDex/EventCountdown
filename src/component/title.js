import move from "./images/move.png";
const Title = () => {
    return ( 
        <div >
            <div className="gmovers">
            <div className="gm">
                <span className="bold">Gorilla</span>
                <span className="bold">Movers <span>PHC</span></span>
            </div>
            <button className="regbtn">REGISTER</button>
            </div>
            <div className="movement">
            <img className="movement1" src={move} alt="moveus blank" />
            </div>
        </div>
    );
};

export default Title;
