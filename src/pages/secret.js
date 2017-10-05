import React from "react"
import Link from "gatsby-link"
import Auth from "../components/auth"


export default () => <div>
  <h2>This page is very secret</h2>
  <Auth/>
  <p>You need to be logged in to see this...</p>
  <Link to="/">Back home...</Link>
</div>
