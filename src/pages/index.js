import React from "react"
import Link from "gatsby-link"
import Auth from "../components/auth"

export default () => <div>
  <h2>Gatsby with Access Control</h2>
  <Auth/>
  <Link to="/secret/">Go to secret page</Link>
</div>
