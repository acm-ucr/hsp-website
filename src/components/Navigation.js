"use client";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/assets/logo.webp";
import Button from "@/components/Button";
import { FaBars } from "react-icons/fa";
import { usePathname } from "next/navigation";

const Navigation = () => {
  const pathname = usePathname();

  return (
    <Navbar
      collapseOnSelect
      className="py-0 font-montserrat w-full px-3 m-0 min-h-[9vh] bg-hsp-gray drop-shadow-lg flex justify-between items-center"
      expand="md"
      fixed="top"
    >
      <Navbar.Brand className="p-0">
        <Link
          eventkey="1"
          className="p-0 flex justify-center items-center"
          href="/"
        >
          <Image src={Logo} className="h-[7vh]" alt="HSP at UCR" />
          <div className="text-white text-3xl md:text-5xl font-montserrat font-bold">
            HSP
          </div>
        </Link>
      </Navbar.Brand>
      {/* <Navbar.Toggle aria-controls="navbar-nav" /> */}
      <Navbar.Toggle
        className="list-unstyled !text-transparent border-1 border-white mr-0"
        aria-controls="basic-navbar-nav"
      >
        <FaBars className="text-white text-2xl" />
      </Navbar.Toggle>
      <Navbar.Collapse id="navbar-nav mx-4">
        <Nav className="mb-2 w-full md:w-6/12 ml-auto no-underline text-2xl">
          <Nav.Link
            as={Link}
            eventkey="2"
            href="/board"
            className={`mb-0 py-2 no-underline ml-auto text-xl md:text-2xl whitespace-nowrap bg-winc-white w-full text-center text-white !font-montserrat !font-bold hover:!text-hsp-yellow hover:cursor-pointer ${
              pathname === "/board" ? "!text-hsp-yellow" : "text-white"
            }`}
          >
            board
          </Nav.Link>
          <Nav.Link
            as={Link}
            eventkey="3"
            href="/events"
            className={`mb-0 py-2 no-underline ml-auto text-xl md:text-2xl whitespace-nowrap bg-winc-white w-full text-center text-white !font-montserrat !font-bold hover:!text-hsp-yellow hover:cursor-pointer ${
              pathname === "/events" ? "!text-hsp-yellow" : "text-white"
            }`}
          >
            events
          </Nav.Link>
          <Nav.Link
            as={Link}
            eventkey="4"
            href="/donate"
            className={`mb-0 py-2 no-underline ml-auto text-xl md:text-2xl whitespace-nowrap bg-winc-white w-full text-center text-white !font-montserrat !font-bold hover:!text-hsp-yellow hover:cursor-pointer ${
              pathname === "/donate" ? "!text-hsp-yellow" : "text-white"
            }`}
          >
            donate
          </Nav.Link>
          <Nav.Link
            as={Link}
            eventkey="5"
            href="/projects"
            className={`mb-0 py-2 no-underline ml-auto text-xl md:text-2xl whitespace-nowrap bg-winc-white w-full text-center text-white !font-montserrat !font-bold hover:!text-hsp-yellow hover:cursor-pointer ${
              pathname === "/projects" ? "!text-hsp-yellow" : "text-white"
            }`}
          >
            projects
          </Nav.Link>
          <Nav.Link
            as={Link}
            eventkey="6"
            href="/join"
            className="flex justify-center items-center mb-0 w-full py-1 no-underline ml-auto text-xl md:text-2xl whitespace-nowrap"
          >
            <Button />
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
