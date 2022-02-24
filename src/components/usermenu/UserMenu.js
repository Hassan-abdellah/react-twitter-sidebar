import React, { useEffect, useState } from "react";
import "./usermenu.css";
import { motion, AnimatePresence } from "framer-motion";
import Person from '../../images/person.jpg';
const UserMenu = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);

  useEffect(() => {
    const getClickOutside = (e) => {
      if (isMenuActive && !e.target.classList.contains(".user-menu")) {
        setIsMenuActive(false);
      }
    };
    document.addEventListener("click", getClickOutside);
    return () => {
      document.removeEventListener("click", getClickOutside);
    };
  }, [isMenuActive]);

  return (
    <div className="user-data" onClick={() => setIsMenuActive(!isMenuActive)}>
      <img src={Person} alt="person" />
      <div className="user-name">
        <span>Mark Spenser</span>
        <span>@mark.spenser18</span>
      </div>
      <AnimatePresence>
        {isMenuActive && (
          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ type: "spring", stiffness: "100", ease: "easeInOut", duration: 0.75 }}
            className="user-menu"
          >
            <li className="user-menu-item">
              <div className="user-menu-data" onClick={() => setIsMenuActive(!isMenuActive)}>
                <img src={Person} alt="person" />
                <div className="user-name">
                  <span>Mark Spenser</span>
                  <span>@mark.spenser18</span>
                </div>
              </div>
            </li>
            <li className="user-menu-item">
              <span>Add an Existing account</span>
            </li>
            <li className="user-menu-item">
              <span>Log out as @mark.spenser18</span>
            </li>
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

export default UserMenu;
