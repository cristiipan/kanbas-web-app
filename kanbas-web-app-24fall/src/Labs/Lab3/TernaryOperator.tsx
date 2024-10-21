const TernaryOperator = () => {
    let loggedIn = true;

    return(
        <div id="wd-ternary-operator">
        <h4>Logged In</h4>
        {/* use Ternary Operator (三元运算符) to determine to show "Welcome" or "Please login" */}
        { loggedIn ? <p>Welcome</p> : <p>Please login</p> } <hr/>
        </div> 
    );}

export default TernaryOperator;