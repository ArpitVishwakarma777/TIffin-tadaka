import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { useState } from "react";

function ResetPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  

  return (
    <div>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handlePasswordReset}>Reset Password</button>
      {message && <p>{message}</p>}
    </div>
  );
}

export default ResetPassword;
