import React, { Component } from "react"

import { motion } from "framer-motion"

class MyComponent extends Component {
  render() {
    return <motion.div animate={{ scale: 2 }} transition={{ duration: 0.5 }} />
  }
}

export default MyComponent
