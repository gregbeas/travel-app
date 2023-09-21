import React from "react";
import "./Questions.scss"

import { BsFillArrowDownCircleFill } from "react-icons/bs";




const Accordion = ({title, answer, active, setActive, id}) => {
  return (
    <div className="accordion-container">
      <span onClick={() => (active === id ? setActive('') : setActive(id))} className={(active === id ? ' title flex active-title' : 'title flex ')}>
        {title}
        <BsFillArrowDownCircleFill className={active === id ? "icon icon-active" : "icon"} color={active === id ? "var(--colorWhite" : "var(--colorGreen"} size={20}/>
      </span>
      <div className={active === id ? "answer-wrapper answer-wrapper_active "  : "answer-wrapper"}>
        <p className={active === id ? "answer show" : "answer"}>
          {answer}
        </p>
      </div>
    </div>
  )
}

export default Accordion