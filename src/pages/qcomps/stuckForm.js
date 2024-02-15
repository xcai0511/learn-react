import { useState } from 'react';

export default function Form() {
    const [firstName, setFirstName] = useState(''); // State for first name
    const [lastName, setLastName] = useState(''); // State for last name

    function handleFirstNameChange(e) {
        setFirstName(e.target.value); // Update first name state
    }

    function handleLastNameChange(e) {
        setLastName(e.target.value); // Update last name state
    }

    function handleReset() {
        setFirstName(''); // Reset first name state
        setLastName(''); // Reset last name state
    }

    return (
        <form onSubmit={e => e.preventDefault()}>
            <input
                placeholder="First name"
                value={firstName}
                onChange={handleFirstNameChange}
            />
            <input
                placeholder="Last name"
                value={lastName}
                onChange={handleLastNameChange}
            />
            <h1>Hi, {firstName} {lastName}</h1>
            <button type="button" onClick={handleReset}>Reset</button>
        </form>
    );
}