import Nav from "./Navbar";

const Header = () => {
  return (
    <header class="header">
      <h1 className="headerTitle">PEPE GIODA</h1>
      <Nav 
      isHeader={true}/>

    </header>
  )
}

export default Header;