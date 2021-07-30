import { motion } from "framer-motion"

const MyComponent = ({ isVisible }) => (
  <motion.div animate={{ opacity: isVisible ? 1 : 0 }} />
)

export default MyComponent
