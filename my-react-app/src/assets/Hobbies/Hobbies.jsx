import styles from './Hobbies.module.css'
function Hobbies(props) {  // Correct spelling
  console.log(props);
    return (
      <div className={styles.hobbies}>
        <p>My hobbies are: {props.name}</p>
        <p>Age: {props.age}</p>
        <p>Is the hobby productive? {props.isProductive ? "Yes" : "No"}</p>
      </div>
    );
  }
  
  export default Hobbies;
  