import React, { useContext, useState } from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCollapse,
} from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";
import { Mycontext } from "../context/Context";
import Search from "./products/Search";

function Nav() {
  const { username, setusername } = useContext(Mycontext);
  const [showBasic, setShowBasic] = useState(false);
  const [loggedIn, setLoggedIn] = useState(!!username); // Check if user is initially logged in
  const navigate = useNavigate();
  
  const navcart = () => {
    if (loggedIn) {
      navigate("/addcart");
    } else {
      alert("Login to your account");
    }
  };

  const handleLogout = () => {
    setusername(""); 
    setLoggedIn(false); // Set the login state to false
  };

  return (
    <>
    <MDBNavbar expand="lg" light bgColor="light" className="my-4">
      <MDBContainer fluid>
        <MDBNavbarBrand className="mb-lg-1 me-4">
          <h3 style={{ fontFamily: "revert-layer" }}>
            W<sub>OOD</sub> G<sub>ALLARY</sub>
          </h3>
        </MDBNavbarBrand>

        <MDBNavbarToggler
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setShowBasic(!showBasic)}
        >
          <MDBIcon icon="bars" fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar show={showBasic}>
          <MDBNavbarNav className="mr-auto mb-lg-1">
            <MDBNavbarItem>
              <MDBNavbarLink
                active
                aria-current="page"
                style={{ fontFamily: "cursive" }}
                onClick={() => navigate("/")}
                href="#home"
              >
                Home
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink onClick={() => navigate("/allproducts")}>
                Products
              </MDBNavbarLink>
            </MDBNavbarItem>

            <MDBNavbarItem>
  <MDBDropdown>
    <MDBDropdownToggle
      tag='a'
      className="nav-link"
      style={{ fontFamily: "cursive" }}
      role="button"
    >
      Categories
    </MDBDropdownToggle>
    <MDBDropdownMenu className="text-center">
      <MDBDropdownItem onClick={() => navigate("/table")}>
      <img
          src="https://img.icons8.com/?size=2x&id=30190&format=png"
          alt="icon"
          className="img-fluid " 
          style={{ maxWidth: '20px', height: 'auto' }}
        />
       
        Tables
      </MDBDropdownItem>
      <MDBDropdownItem onClick={() => navigate("/bed")}>
      <img
          src="https://img.icons8.com/?size=2x&id=zVuzYLxp4Euc&format=png"
          alt="icon"
          className="img-fluid " 
          style={{ maxWidth: '20px', height: 'auto' }}
        />
        Beds
      </MDBDropdownItem>
      <MDBDropdownItem onClick={() => navigate("/sofa")}>
      <img
          src="https://img.icons8.com/?size=2x&id=80481&format=png"
          alt="icon"
          className="img-fluid " 
          style={{ maxWidth: '20px', height: 'auto' }}
        />
        Sofas
      </MDBDropdownItem>
      <MDBDropdownItem onClick={() => navigate("/chair")}>
      <img
          src="https://img.icons8.com/?size=2x&id=kLCDEKFEmsPz&format=png"
          alt="icon"
          className="img-fluid " 
          style={{ maxWidth: '20px', height: 'auto' }}
        />
        Chairs
      </MDBDropdownItem>
      <MDBDropdownItem onClick={() => navigate("/wardrobe")}>
      <img
          src="https://img.icons8.com/?size=2x&id=81148&format=png"
          alt="icon"
          className="img-fluid " 
          style={{ maxWidth: '20px', height: 'auto' }}
        />
        Wardrobes
      </MDBDropdownItem>
    </MDBDropdownMenu>
  </MDBDropdown>
</MDBNavbarItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>

      <MDBContainer fluid className="justify-content-center me-5">
        <div>
          <Search />
        </div>
        {loggedIn ?
         (
          <MDBBtn
            outline
            rippleColor="secondary"
            color="secondary"
            onClick={handleLogout}
            className="me-2"
            type="button"
          >
            Logout
          </MDBBtn>
          ) : (
          <MDBBtn
            outline
            rippleColor="success"
            color="success"
            onClick={() => navigate("/login")}
            className="me-2"
            type="button"
          >
            Login
          </MDBBtn>
          )}
        <MDBBtn className="btn btn-white ">
          <img
            src="https://img.icons8.com/?size=2x&id=85750&format=png"
            alt="profile"
            className="img-fluid"
          />
          {username}
        </MDBBtn>
      </MDBContainer>
    </MDBNavbar>
    </>
  );
}

export default Nav;
