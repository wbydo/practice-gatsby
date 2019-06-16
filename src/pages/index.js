import React from "react"
import { Link } from "gatsby"

import Header from "../components/header"

export default () => (
  <div>
    <Header />
    <p>Go to <Link to="/about/">about page</Link>.</p>
  </div>
)
