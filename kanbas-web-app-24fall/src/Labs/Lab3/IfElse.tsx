const IfElse = () => {
    let true1 = true, false1 = false;
  
    return (
      <div id="wd-if-else">
        <h4>If Else</h4>
        {/* true1 为真时渲染 */}
        { true1 && <p>true1</p> }
  
        {/* !false1 为真时渲染，否则渲染 false1 */}
        { !false1 ? <p>!false1</p> : <p>false1</p> } 
  
        <hr/>
      </div>
    );
  }
  
  export default IfElse;