function header(){
    // internal react css styling
    const styles={
        textDecoration:"none",
        fontSize:"large",
        color:"black",
        margin:"5px",
       
    }
    return(
<header >
    <h1>My website</h1>
    <nav>
        <ul style={{listStyleType:"none"}}>
            <li><a style={styles}href="#">Home</a></li>
            <li><a style={styles}href="#">About</a></li>
            <li><a  style={styles}href="#">Services</a></li>
            <li><a  style={styles}href="#">Contact</a></li>
        </ul>
    </nav>
    <hr style={{maxWidth:"60vw",margin:"20px",}}></hr>
</header>

    );
 
    

}
export default header