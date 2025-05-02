import { ChangeEvent, useMemo, useState } from "react";
import "../styles/EmailScreen.scss";
import debounce from "lodash.debounce";

const validateEmail = (email: string) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

type EmailScreenProps = {
  selectedSkills: string[][];
};

const EmailScreen: React.FC<EmailScreenProps> = ({ selectedSkills }) => {
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isTouched, setIsTouched] = useState(false);
  const isErrorShown = !isValidEmail && isTouched;

  const updateValidation = (email: string) => {
    setIsValidEmail(validateEmail(email));
  };

  const debouncedValidateEmail = useMemo(
    () => debounce(updateValidation, 500),
    []
  );

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = e;
    setEmail(value);
    debouncedValidateEmail(value);
  };

  const handleSubmit = () => {
    if (isValidEmail) {
      console.log("Final data to submit:", {
        selectedSkills,
        email,
      });
      //fetch/axios POST
      console.log(selectedSkills);
      alert("Results submitted! Check console.");
    }
  };

  return (
    <div className="email-screen">
      <header className="email-screen__header">
        <img
          src="/images/logo.svg"
          alt="Affinity logo"
          className="email-screen__logo"
        />
      </header>

      <main className="email-screen__content">
        <h1 className="email-screen__title">You're almost done!</h1>
        <p className="email-screen__subtitle">
          Please enter your email to see results
        </p>

        <input
          type="email"
          placeholder="example@gmail.com"
          className={`email-input ${isErrorShown ? "email-input--error" : ""}`}
          value={email}
          onChange={handleEmailChange}
          onBlur={() => setIsTouched(true)}
        />
        {isErrorShown && (
          <p className="email-input__error-msg">Please enter a valid email</p>
        )}

        <button
          className={`submit-btn ${isValidEmail ? "" : "submit-btn--disabled"}`}
          disabled={!isValidEmail}
          onClick={handleSubmit}
        >
          Get results
        </button>
        <span className="email-screen__terms">
        <span className="email-screen__privacy-protected-image">
          <img
            src="/images/icon-park-outline_protect.svg"
            alt="Privacy protected Image"
          />
        </span>
        <span>
          <p>
            We respect your privacy and are committed to protecting your
            personal data. We’ll email you a copy of your results for convenient
            access.{" "}
          </p>
        </span>
      </span>
      </main>
    </div>
  );
};

export default EmailScreen;
