import { Button, Nav, NavItem } from "reactstrap";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const navigation = [
  {
    title: "Dashboard",
    path: "/starter",
    icon: "bi bi-speedometer2",
  },
  {
    title: "UserData",
    path: "/data",
    icon: "bi bi-person-workspace ",
  },
  {
    title: "Online User",
    path: "/online",
    icon: "bi bi-people",
  },
  {
    title: "festival list",
    path: "/favimg",
    icon: "bi bi-images",
  },
  {
    title: "Add emojis",
    path: "/Addemojis",
    icon: "bi bi-emoji-heart-eyes-fill",
  },
  {
    title: "Add Profile Frems",
    path: "/AddFrems",
    icon: "bi bi-app",
  },
  {
    title: "Coin transaction",
    path: "/coinData",
    icon: "bi bi-person-plus-fill",
  },
  {
    title: "CoinValue",
    path: "/coinValue",
    icon: "bi bi-person-plus-fill",
  },
];

const Sidebar = () => {
  const showMobilemenu = () => {
    document.getElementById("sidebarArea").classList.toggle('showSidebar');
  };

  const navigate = useNavigate();
  const location = useLocation();
  const [route, setRoute] = useState({ 
    to: location.pathname,
    from: location.pathname 
  });

  useEffect(() => {
  setRoute((prev) => {
    localStorage.setItem("data", JSON.stringify({ to: location.pathname, from: prev.to }));
    return { to: location.pathname, from: prev.to };
  });
}, [location]);


  if (route.to === route.from) {
  } else {
    window.location.reload();
    console.log("reloaddata");
  }

  return (
    <div className="bg-dark">
      <div className="d-flex">
        <Button
          color="white"
          className="ms-auto text-white d-lg-none"
          onClick={() => showMobilemenu()}
        >
          <i className="bi bi-x"></i>
        </Button>
      </div>
      <div className="p-3 mt-2">
        <Nav vertical className="sidebarNav">
          {navigation.map((navItem, index) => (
            <NavItem key={index} className="sidenav-bg">
              <div
                className={
                  location.pathname === navItem.path
                    ? "active nav-link py-3"
                    : "nav-link py-3"
                }
                onClick={() => navigate(navItem.path)}
              >
                <i className={navItem.icon}></i>
                <span className="ms-3 d-inline-block">{navItem.title}</span>
              </div>
            </NavItem>
          ))}
        </Nav>
      </div>
    </div>
  );
};

export default Sidebar;
