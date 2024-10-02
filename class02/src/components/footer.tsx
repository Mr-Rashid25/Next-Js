import Link from "next/link"
export default function Footer(){
  return(
      <div className="footer">
        <ul  className="footer-button">  
  <li>
    <Link href="./Company-Name">Company Name</Link>
    </li>
  <li>
    <Link href="./Useful-Links">Useful Links</Link>
    </li>
  <li>
    <Link href="./Contact-Us2">Contact Us</Link>
    </li>
  </ul>

    </div>
  )
}