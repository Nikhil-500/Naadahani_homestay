import { useState } from "react";
import emailjs from "emailjs-com";

export default function useEmailJS(serviceID, templateID, publicKey) {
  const [status, setStatus] = useState({ loading: false, success: null, message: "" });

  const sendEmail = (formData) => {
    setStatus({ loading: true, success: null, message: "" });

    return emailjs
      .send(serviceID, templateID, formData, publicKey)
      .then(
        (res) => {
          setStatus({ loading: false, success: true, message: "Email sent successfully!" });
          return res;
        },
        (err) => {
          setStatus({ loading: false, success: false, message: "Failed to send email." });
          console.error(err);
          throw err;
        }
      );
  };

  return { sendEmail, status };
}
