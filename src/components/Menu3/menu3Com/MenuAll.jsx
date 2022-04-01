import { motion } from "framer-motion";
import chopstick from "../SVG/chopstick.svg"

const MenuAll = ({ all, items }) => {
  const itemContainer = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <>
      {all &&
        items.map((item, i) => (
          <motion.div
            className="menu-items"
            key={item.id}
            variants={itemContainer}
            transition={{ delay: i * 0.2 }}
          >
            <img src={chopstick} alt="chopstick" className="w-10 h-10"/>
            <motion.div className="item-content">
              <motion.div className="item-title-box">
                <motion.h5 className="item-title">{item.title}</motion.h5>
                <motion.h5 className="item-price">${item.price}</motion.h5>
              </motion.div>
              <motion.p className="item-desc">{item.desc}</motion.p>
            </motion.div>
          </motion.div>
        ))}
    </>
  );
};

export default MenuAll;
