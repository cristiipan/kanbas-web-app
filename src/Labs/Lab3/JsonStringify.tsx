import React from 'react';

export default function JsonStringify() {
  const squares = [1, 4, 16, 25, 36];

  return (
    <div className="wd-json-stringify">
      <h3>JSON Stringify</h3>
      squares = {JSON.stringify(squares)}  {/* 使用JSON.stringify将数组转为字符串 */}
      <hr />
    </div>
  );
}
