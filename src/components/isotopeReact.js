import React from 'react';
import Isotope from 'isotope-layout';

const IsotopeReact = () => {
    // store the isotope object in one state
    const [isotope, setIsotope] = React.useState(null);
    // store the filter keyword in another state
    const [filterKey, setFilterKey] = React.useState("*");
  
    // initialize an Isotope object with configs
    React.useEffect(() => {
      setIsotope(
        new Isotope(".filter-container", {
          itemSelector: ".filter-item",
          layoutMode: "fitRows",
          getSortData: {
              name:'.data'
          }
        })
      );
    }, []);
  
    // handling filter key change
    // React.useEffect(
    //   () => {
    //     if (isotope) {
    //       filterKey === "*"
    //         ? isotope.arrange({ filter: `*` })
    //         : isotope.sortBy('name')
    //     }
    //   },
    //   [isotope, filterKey]
    // );
  
    return (
        <>
        <ul>
            <li onClick={() => isotope.arrange({sortBy: 'name'})}>Show Both</li>
            <li onClick={() => setFilterKey("vege")}>Show Veges</li>
            <li onClick={() => setFilterKey("fruit")}>Show Fruits</li>
        </ul>
        <hr />
        <ul className="filter-container">
            <div className="filter-item vege">
            <span className='data'>Papaya</span>
            </div>
            <div className="filter-item fruit">
            <span className='data'>Apple</span>
            </div>
            <div className="filter-item fruit">
            <span className='data'>Orange</span>
            </div>
            <div className="filter-item fruit vege">
            <span className='data'>Tomato</span>
            </div>
        </ul>
        </>
    );
    };

export default IsotopeReact;