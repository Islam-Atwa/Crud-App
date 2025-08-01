import {Link} from "react-router-dom"


function Sidebar(){
    return (
        <>
            <ul >
                <li>
                    <Link  to={'/products'}>get All Products</Link>
                </li>       
                <li>
                    <a href="#">get All catteogries</a>
                </li>

            </ul>
        </>
    )
}
export default Sidebar;