import react from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Styles/NavigationStyles";

function NavigationMenu() {
  const rootMenuItems = [
    { path: "/Mobiles", label: "Mobiles" },
    { path: "/Laptop", label: "Laptop" },
    { path: "/TV", label: "TV" },
    { path: "/Appliances", label: "Appliances" },
    { path: "/Audio&Wearable", label: "Audio & Wearable" },
    { path: "/Accessories", label: "Accessories" },
    { path: "/News&Reviews", label: "News & Reviews" },
    { path: "/Recharge", label: "Recharge" },
    { path: "/Gaming", label: "Gaming" },
  ];

  return (
    <nav style={styles.nav}>
      <ul style={styles.navList}>
        {rootMenuItems.map((item, index) => (
          <li key={index} style={styles.navItem}>
            <Link to={item.path} style={styles.navLink}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavigationMenu;
