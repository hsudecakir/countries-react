export default function Header(){
  function changeMode(){
    document.body.classList.toggle('dark-mode');
  }
  return(
    <div className="header">
      <div className="header__wrapper">
        <div className="logo">
          <h1>Where in the world?</h1>
        </div>
        <div className="mode-switch" id="modeSwitchBtn" onClick={changeMode}>
          <i className="fa-regular fa-moon" />
          <p>Dark Mode</p>
        </div>
      </div>
    </div>
  )
}