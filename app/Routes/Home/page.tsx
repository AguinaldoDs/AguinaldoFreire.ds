'use client'

// Bibliotecas React
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { useState, useEffect } from "react";

// Biblioteca externa
import { motion, AnimatePresence } from "framer-motion";

// Componentes
import AboutMe from "@/app/Components/AboutMe";
import AboutMePlus from "@/app/Components/AboutMePlus";
import HoverEffect from "@/app/Components/GhostDiv"
import Home from "../Test/page"


// Posição que o menu vai levar (Profile, About me, Jobs)
export default function HomePrincipal() {

  return (
   <Home/>
  );
}
