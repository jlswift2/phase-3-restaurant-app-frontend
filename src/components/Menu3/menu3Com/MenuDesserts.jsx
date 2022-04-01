import { motion } from "framer-motion";

const MenuDesserts = ({ desserts, items }) => {
  const itemContainer = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  return (
    <>
      {desserts &&
        items
          .filter((item) => item.category === "desserts")
          .map((item, i) => (
            <motion.div
              className="menu-items"
              key={item.id}
              variants={itemContainer}
              transition={{ delay: i * 0.2 }}
            >
              <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M3.114 11c-.066-.316-.104-.64-.112-.972-.062-2.402 1.452-4.495 3.595-5.262.307-2.606 2.574-4.766 5.403-4.766 2.199 0 4.258 1.336 5.082 3.504l2.918-2.918 1.413 1.413-5.94 5.94.001.001-.474.474-1.414-1.414 1.899-1.899c-.219-1.688-1.597-3.101-3.51-3.101-1.731 0-3.183 1.27-3.47 2.819 1.31.291 3.01 1.426 3.021 3.707-.982-2.06-3.533-2.36-4.846-1.604-1.252.721-1.682 1.839-1.679 3.056.001.357.06.7.167 1.022h13.648c.135-.396.2-.824.18-1.268-.041-.944-.402-1.705-.927-2.267l1.38-1.38c.965.988 1.551 2.337 1.551 3.804 0 .381-.039.753-.114 1.111h1.12c.007 3.956-2.216 7.735-7.069 9.206.086.568.96 1.558 1.531 1.794h.538c.611.015.991.413 1 1 .01.524-.439 1.002-1.006 1h-10c-.567.002-1.004-.476-.994-1 .009-.587.389-.985 1-1h.538c.571-.236 1.445-1.226 1.531-1.794-4.853-1.471-7.063-5.25-7.069-9.206h1.108zm16.688 2h-15.592l.002.008c.97 3.448 3.626 5.019 7 5.675.077.799-.014 2.497-.942 3.317h3.472c-.928-.82-1.019-2.518-.942-3.317 3.374-.656 6.03-2.227 7-5.675l.002-.008z"/></svg>
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

export default MenuDesserts;
