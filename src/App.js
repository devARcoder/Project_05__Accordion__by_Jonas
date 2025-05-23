import { useState } from "react";
import "./App.css";
// import Navbar from "./Navbar";
const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur! Reprehenderit, voluptate dolore officiis illum inventore nisi?",
  },
  {
    title: "How Long do i have to return my chair?",
    text: "Lorem ipsum dolor sit amet consectetur! Reprehenderit, voluptate dolore officiis illum inventore nisi?",
  },
  {
    title: "Do you ship to contries outside the PK?",
    text: "Lorem ipsum dolor sit amet consectetur! Reprehenderit, voluptate dolore officiis illum inventore nisi?",
  },
];
export default function App() {
  return (
    <div>
      <Accordion data={faqs} />
      {/* <Navbar/> */}
    </div>
  );
}

function Accordion({ data }) {
  const [curOpen, setCurOpen] = useState(null)
  return (
    <div className="accordion">
      {data.map((el, i) => (
        <AccordionItem curOpen={curOpen} onOpen={setCurOpen} title={el.title} num={i} key={el.title} >
          {el.text}
          </AccordionItem>
      ))}
    </div>
  );
}

function AccordionItem({ num, title, curOpen, onOpen, children }) {

  const isOpen = num === curOpen
  function handleToggle(){
    onOpen(isOpen ? null : num)
  }
  return (
    <>
    <div className={`item my-6 mx-4 bg-gray-100 px-3 py-4 shadow-lg cursor-pointer ${isOpen ? "border-t-4 border-green-500 shadow-xl shadow-green-200": ""}`} onClick={handleToggle}>
      <div className="flex justify-between items-center">
        <div className="flex space-x-8">
          <p className={`numbers text-2xl text-gray-500 ${isOpen ? "text-green-500": ""}`}>
            {num < 9 ? `0${num + 1}` : num + 1}
          </p>
          <p className={`text text-2xl ${isOpen ? "text-green-500": ""}`}>{title}</p>
        </div>
        <div className="">
          <p className="icon font-bold text-2xl">{isOpen ? "👆" : "👇"}</p>
        </div>
      </div>

      {isOpen && <div className="content-box text-lg px-14 py-6">{children}</div>}
    </div>
    
    </>
  );
}
