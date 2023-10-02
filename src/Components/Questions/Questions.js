import React, {useState} from "react";
import "./Questions.scss";
import Accordion from "./Accordion"


const Questions = () => {
  const [active, setActive] = useState('')
  const [form, setForm] = useState({
    name: "",
    email:"",
    subject: "",
    text: ""
  })
  return <section className="scroll-padding section container" id="questions">
    <div className="secHeading">
      <p className="green-text">FREQUENTLY ASKED QUESTIONS</p>
    </div>
    <div className="secContainer">
      <div className="accordion" data-aos="fade-up">
        <Accordion
          title="How do I choose a travel destination?"
          answer="Different factors such as budget and desired experiences can affect destination decisions. Research vacation destinations that align with your personal preferences, or send us an inquiry your desired experiences and we can help find a destination for you with budget in mind!"
          active={active}
          setActive={setActive}
          id={0}
          />
        <Accordion
          title="What if I can't go on my trip?"
          answer="If you can't go on your trip fo any reason, we offer a 100% refund if you cancel 30 days before your departure, and a 50% refund if you cancel 14 days before your departure."
          active={active}
          setActive={setActive}
          id={1}
        />
        <Accordion
          title="What if I can't find my destination?"
          answer="If you can't find a specific destination you have in mind on our site, please contact one of our agents and we will research the destination to see if we can add it to our database."
          active={active}
          setActive={setActive}
          id={2}
        />
        <Accordion
          title="What if I need to come home early?"
          answer="If you need to cut your trip short for any reason, contact our 24/7 support team to arrange travel back to your home location."
          active={active}
          setActive={setActive}
          id={3}
        />
          <Accordion
          title="Do you have any deals?"
          answer="We do not currently offer any deals or sales of any kind. If you need help paying, please contact one of our agents for adventure financing options."
          active={active}
          setActive={setActive}
          id={4}
        />
      </div>
      <div className="form scroll-padding" id="contact-us">
        <div className="secHeading">
          <p className="green-text">CAN'T FIND THE ANSWER YOU NEED?</p>
          <h3>Ask a more specific question</h3>
        </div>
        <form
          className="form-content flex"
          onSubmit={(e) => {
            e.preventDefault()
            console.log(form)
            alert('Inquiry submitted! We will get back to you soon!')
            setForm({
              name: '',
              email: '',
              subject: '',
              text: ''
            })
          }}
        >
          <label htmlFor="name" data-aos="fade-up">Name</label>
          <input
              data-aos="fade-up"
              type="text"
              placeholder="John Smith"
              id="name"
              className="input"
              value={form.name}
              onChange={(e) =>
                setForm({...form, name: e.target.value})
              }
              required
            ></input>
          <label htmlFor="email" data-aos="fade-up">Email</label>
          <input
            type="email"
            data-aos="fade-up"
            id="email"
            placeholder="example@email.com"
            className="input"
            value={form.email}
            onChange={(e) =>
              setForm({...form, email: e.target.value})
            }
            required
          ></input>
          <label htmlFor="subject" data-aos="fade-up">Subject</label>
          <input
            type="text"
            data-aos="fade-up"
            placeholder="I have a question..."
            id="subject"
            className="input"
            value={form.subject}
            onChange={(e) =>
              setForm({...form, subject: e.target.value})
            }
            required
          ></input>
          <textarea
            placeholder="Ask away!"
            data-aos="fade-up"
            aria-label="inquiry body"
            rows="6"
            className="input"
            value={form.text}
            onChange={(e) =>
              setForm({...form, text: e.target.value})
            }
            required
          ></textarea>
          <button value="submit" className="btn"data-aos="fade-up">Submit Inquiry</button>
        </form>
      </div>
    </div>
  </section>;
}

export default Questions;