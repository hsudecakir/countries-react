export default function Form(){
  function showOptions(){
    region.classList.toggle('show-options');
  };

  return(
    <form id="searchForm">
      <div className="search-input">
        <i className="fa-solid fa-magnifying-glass" />
        <input
          type="text"
          name="title"
          placeholder="Search for a country…"
          id="searchInput"
        />
      </div>
      <div className="region" id="region">
        <p id="selectedRegion" onClick={showOptions}>
          Filter by Region <i className="fa-solid fa-angle-down" />
        </p>
        <div className="region-options" id="regionOptions">
          <p data-region="Africa">Africa</p>
          <p data-region="Americas">America</p>
          <p data-region="Asia">Asia</p>
          <p data-region="Europe">Europe</p>
          <p data-region="Oceania">Oceania</p>
        </div>
      </div>
    </form>
  )
}