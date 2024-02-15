import { useState } from 'react';

export default function FeedbackForm() {
  const [isSent, setIsSent] = useState(false);
  const [message, setMessage] = useState(''); // Declare state variable at the top

  if (isSent) {
    return <h1>Thank you!</h1>;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Sending: "${message}"`);
    setIsSent(true);
  };

  return (
      <form onSubmit={handleSubmit}>
      <textarea
          placeholder="Message"
          value={message}
          onChange={e => setMessage(e.target.value)}
      />
        <br />
        <button type="submit">Send</button>
      </form>
  );
}