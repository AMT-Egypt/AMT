import { FormEvent, useRef, useState } from "react";
import { toast } from "react-toastify";
import handImage from "../../assets/hand-holding.png";
import msgValidator from "../../utils/validate";
import "./style.css";

const ContactUs = () => {
  const fullNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const msgBoxRef = useRef<HTMLTextAreaElement>(null);

  const [userName, setUserName] = useState("");

  const getUserValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  };

  const apiUrl = `https://api.telegram.org/bot7220459065:AAGT2zMETQLZ9KTZUjiLFS_ubyzbm3TOnNo/sendMessage`;

  const handleContact = async (e: FormEvent) => {
    e.preventDefault();

    // Validate the form
    const isValid = msgValidator({
      fullName: fullNameRef.current?.value,
      email: emailRef.current?.value,
      phone: phoneRef.current?.value,
      message: msgBoxRef.current?.value,
    });

    if (isValid) {
      // Prepare the message
      const fullName = fullNameRef.current?.value;
      const email = emailRef.current?.value;
      const phone = phoneRef.current?.value;
      const message = msgBoxRef.current?.value;
      const textMessage = `New contact request:\n\nFull Name: ${fullName}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`;

      try {
        // Send the message via Telegram API
        const response = await fetch(
          `${apiUrl}?chat_id=-1002178208246&text=${encodeURIComponent(
            textMessage
          )}`,
          {
            method: "POST",
          }
        );

        if (response.ok) {
          toast.success("Thank you! We will contact you.");
          // Clear the form fields if necessary
          if (fullNameRef.current) fullNameRef.current.value = "";
          if (emailRef.current) emailRef.current.value = "";
          if (phoneRef.current) phoneRef.current.value = "";
          if (msgBoxRef.current) msgBoxRef.current.value = "";
        } else {
          throw new Error("Failed to send message");
        }
      } catch (error) {
        toast.error("An error occurred. Please try again.");
      }
    } else {
      toast.error("Please fill out all fields with valid data.");
    }
  };

  return (
    <section className="contact-us" id="contact">
      <div className="wrapper">
        <img src={handImage} alt="Hand Holding Telephone" />
      </div>
      <div className="form-area">
        <h4>Our Franchise team will contact you shortly</h4>
        <p>Submit the short form below</p>
        <form>
          <input
            onChange={getUserValue}
            type="text"
            placeholder="Full Name"
            required
            ref={fullNameRef}
          />
          <div className="form-group">
            <input type="email" placeholder="Email" required ref={emailRef} />
            <input type="phone" placeholder="Phone" required ref={phoneRef} />
          </div>
          <textarea placeholder="Message" required ref={msgBoxRef} />
          <button onClick={handleContact}>Get in touch</button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
