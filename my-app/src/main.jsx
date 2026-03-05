export default function main(){
    return(
   <div className="main">
    <Header></Header>
   </div>
    )
}
function Header(){
    return (
        <header className="header">
            <div className="header-content">
            <h1 className="logo">BuyWatchs</h1>
            <nav className="nav-bar">
                 <ul>
                    <li>watches</li>
                    <li>wrranty & service</li>
                    <li>stores</li>
                 </ul>
            </nav>
            
            </div>
        </header>
    )
}