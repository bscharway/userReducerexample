import {Link} from "react-router-dom";
export default function Nav(){
    return<div>Nav
        <Link to="/">Home</Link>
        <Link to="./dashboard">Dashboard</Link>
    </div>
}