import watchimag from "./watch1.png"
export default function main(){
    return(
   <div className="main">
    <Header></Header>
    <Section></Section>
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

function Section(){
    return(
    <div className="cards">
        <img src={watchimag} alt="watch" width={"200px"} />
        <h1 className="head-content">Lorem, ipsum.</h1>
        <p className="paragraph-content">Lorem, ipsum.</p>
    </div>
    )
}