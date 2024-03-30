"use client";
import React, { useState } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/assets/logo.png";
import Button from "@/components/Button";

const Navigation = () => {
  const [selected, setSelected] = useState("");

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
          onClick={() => setSelected("")}
        >
          <Image
            src={Logo}
            width={100}
            height={100}
            className="h-[7vh]"
            alt="HSP at UCR"
          />
          <div className="text-white text-3xl md:text-5xl font-montserrat font-bold">
            HSP
          </div>
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse id="navbar-nav bg-purple-500 mx-4">
        <Nav className="mb-2 w-full md:w-6/12 ml-auto no-underline text-2xl">
          <Nav.Link
            as={Link}
            eventkey="2"
            href="/board"
            onClick={() => setSelected("board")}
            className={`mb-0 py-2 no-underline ml-auto text-xl md:text-2xl whitespace-nowrap bg-winc-white w-full text-center text-white !font-montserrat !font-bold hover:!text-hsp-yellow hover:cursor-pointer ${
              selected === "board" ? "!text-hsp-yellow" : "text-white"
            }`}
          >
            board
          </Nav.Link>
          <Nav.Link
            as={Link}
            eventkey="3"
            href="/events"
            onClick={() => {
              setSelected("events");
            }}
            className={`mb-0 py-2 no-underline ml-auto text-xl md:text-2xl whitespace-nowrap bg-winc-white w-full text-center text-white !font-montserrat !font-bold hover:!text-hsp-yellow hover:cursor-pointer ${
              selected === "events" ? "!text-hsp-yellow" : "text-white"
            }`}
          >
            events
          </Nav.Link>
          <Nav.Link
            as={Link}
            eventkey="4"
            href="/donate"
            onClick={() => {
              setSelected("donate");
            }}
            className={`mb-0 py-2 no-underline ml-auto text-xl md:text-2xl whitespace-nowrap bg-winc-white w-full text-center text-white !font-montserrat !font-bold hover:!text-hsp-yellow hover:cursor-pointer ${
              selected === "donate" ? "!text-hsp-yellow" : "text-white"
            }`}
          >
            donate
          </Nav.Link>
          <Nav.Link
            as={Link}
            eventkey="5"
            href="/projects"
            onClick={() => {
              setSelected("projects");
            }}
            className={`mb-0 py-2 no-underline ml-auto text-xl md:text-2xl whitespace-nowrap bg-winc-white w-full text-center text-white !font-montserrat !font-bold hover:!text-hsp-yellow hover:cursor-pointer ${
              selected === "projects" ? "!text-hsp-yellow" : "text-white"
            }`}
          >
            projects
          </Nav.Link>
          <Nav.Link
            as={Link}
            eventkey="6"
            href="/join"
            onClick={() => {
              setSelected("");
            }}
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
