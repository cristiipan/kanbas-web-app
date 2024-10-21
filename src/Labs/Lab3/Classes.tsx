import './Classes.css';

export default function Classes() {
  const color = 'blue';      // determine dynamic color
  const dangerous = true;

  return (
    <div>
      <h2>Classes</h2>
      
      {/* static bg color */}
      <div className="wd-bg-yellow wd-fg-black wd-padding-10px">
        Yellow background
      </div>
      <div className="wd-bg-blue wd-fg-black wd-padding-10px">
        Blue background
      </div>
      <div className="wd-bg-red wd-fg-black wd-padding-10px">
        Red background
      </div>
      <hr />
      
      {/* dynamic bg color */}
      <div id="wd-classes">
        <div className={`wd-bg-${color} wd-fg-black wd-padding-10px`}>
          Dynamic {color} background
        </div>
      </div>

      {/* conditional bg color */}
      <div className={`${dangerous ? 'wd-bg-red' : 'wd-bg-green'}
                                     wd-fg-black wd-padding-10px`}>
       Dangerous background
     </div>
    </div>
  );
}
