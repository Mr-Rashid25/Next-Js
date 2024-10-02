import Link from "next/link"
export default function header(){
  return(
      <div className="header ">
        <ul  className="header-button">  
  <li>
    <Link href="./home">Home</Link>
    </li>
  <li>
    <Link href="./about-us">About us</Link>
    </li>
  <li>
    <Link href="./contact-us">Contact us</Link>
    </li>
  <li>
    <Link href="./jobs">Jobs</Link>
  </li>
  </ul>

    </div>
  )
}