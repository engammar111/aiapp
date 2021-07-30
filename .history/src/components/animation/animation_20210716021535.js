import React, { Component } from "react"

import { motion } from "framer-motion"

class MyComponent extends Component {
  render() {
    return (
      <div>
        <motion.div animate={{ scale: 2 }} transition={{ duration: 0.5 }} />
      </div>
    )
  }
}

export default MyComponent
