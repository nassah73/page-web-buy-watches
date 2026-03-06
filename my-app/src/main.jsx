import watchimag from "./watch1.png"
import objet from './data'
export default function main(){
    return(
   <div className="main">
    <Header></Header>
    <main>
        {
        objet.map((data)=>{
        return <Section
              {...data}
        />
        })
        }
        
        
    </main>
    
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

function Section(props){
    return(
    <div className="cards">
        <img src={props.img} alt="watch" width={"200px"} />
        <nav className="content">
            <section>
        <h3 className="head-content">{props.name}</h3>
        <p className="paragraph-content">{props.description}</p>
         </section>
         <p className="price">{props.price}</p>
        </nav>
    </div>
    )
}