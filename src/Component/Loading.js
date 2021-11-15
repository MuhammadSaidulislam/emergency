import React from 'react';
import '../pages/home.css'
import './Loading.css'


const Loading = () => {
  return (
    <>
      <div className="loader__wrap" role="alertdialog" aria-busy="true" aria-live="polite" aria-label="Loading…">
        <div className="loader" aria-hidden="true">
          <div className="loader__sq"></div>
          <div className="loader__sq"></div>
        </div>
      </div>
    </>
  )
}
export default Loading;