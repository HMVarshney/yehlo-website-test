import React from 'react';

const Preloader = () => {
    return(
        <div className="preloader_area">
            <div className="spinner">
              <div className="double-bounce1" />
              <div className="double-bounce2" />
            </div>
          </div>
    );
}

export default Preloader;