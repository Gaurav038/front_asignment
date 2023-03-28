import React, { useState } from 'react'
import "./MainSearch.css"


function MainSearch({changeWord}) {

  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    changeWord(searchWord);
 }

  return (
    <section className="hero">
    <div className="hero-container">
      <div className="hero-content">
        <h1>Upload High Quality Images </h1>
        <div className="hero-search-form">
          <form>
            <input type="text" placeholder="Search Images" value={wordEntered} onChange={handleFilter}/>
          </form>
        </div>
      </div>
    </div>
    <div className="hero-overlay"></div>
  </section>
  )
}

export default MainSearch