import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom'; // URL se token lene ke liye
import { getAuth, confirmPasswordReset } from "firebase/auth";

function ResetPassword() {
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [searchParams] = useSearchParams();
  const oobCode = searchParams.get('oobCode'); // Email se aaya token

  const handleReset = async () => {
    const auth = getAuth();
    try {
      await confirmPasswordReset(auth, oobCode, password);
      setMessage("Password reset successful! ❤️");
    } catch (error) {
      setMessage(`Error: ${error.message}`);
    }
  };

  return (
    <div>
      <h1>Reset Password</h1>
      <input
        type="password"
        placeholder="New Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleReset}>Reset Password</button>
      <p>{message}</p>
    </div>
  );
}

export default ResetPassword;
