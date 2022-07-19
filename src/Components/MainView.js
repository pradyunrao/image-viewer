import React from "react";
import "../App.css";

class MainView extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div className="mainView">
        <h2>Welcome Username</h2>
        <div className="albums">
         <img src="https://source.unsplash.com/random/300x300?v=1" alt="" className="album__artwork" />
         <img src="https://source.unsplash.com/random/300x300?v=2" alt="" className="album__artwork" />
         <img src="https://source.unsplash.com/random/300x300?v=3" alt="" className="album__artwork" />
         <img src="https://source.unsplash.com/random/300x300?v=4" alt="" className="album__artwork" />
         <img src="https://source.unsplash.com/random/300x300?v=5" alt="" className="album__artwork" />
         <img src="https://source.unsplash.com/random/300x300?v=6" alt="" className="album__artwork" />
         <img src="https://source.unsplash.com/random/300x300?v=7" alt="" className="album__artwork" />
         <img src="https://source.unsplash.com/random/300x300?v=8" alt="" className="album__artwork" />
         <img src="https://source.unsplash.com/random/300x300?v=9" alt="" className="album__artwork" />
      </div>
      </div>
    );
  }
}

export default MainView