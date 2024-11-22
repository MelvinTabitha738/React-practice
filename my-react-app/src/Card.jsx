import profilepic from './assets/melvin.png'
function Card(){
return(
<div className="card">
    <img className="card-image"src={profilepic}alt="profile picture"></img>
    <h2 className="card-title">Dev Melvin Tabitha</h2>
    <p className="card-text">I am learning react.js</p>
</div>

);


}
export default Card