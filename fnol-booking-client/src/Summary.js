import React, { useState } from 'react';
import './Summary.css'

const Summary = ({ vybrane, reset }) => {

    const listItems = vybrane.map((number) =>
        <li>{number}</li>
    );

    const date = new Date()
    const expireDate = new Date(date);
    expireDate.setDate(date.getDate() + 1);

    const [progress, setProgress] = useState(0)

    if (progress == 0) {
        return (
            <div className="summary">
                <div className="title">
                    Vybrané vstupenky:
                </div>
                <ul>
                    {listItems}
                    <li>Celkem vstupenek: {vybrane.length}</li>
                </ul>
                <form action="">
                    <div class="form-example">
                        <label for="email">Váš e-mail: </label>
                        <br />
                        <input type="email" name="email" id="email" required />
                    </div>
                    <div class="form-example">
                        <input type="submit" value="Rezervovat" />
                    </div>
                    <button type="button" onClick={() => setProgress(1)}>DEBUG: dalsi obraz</button>
                </form>
            </div>

        )
    } else if (progress == 1) {
        return (
            <div className="summary">
                <div className="title">
                    Vstupenky jsou úspěšně rezervované!
                </div>
                <div className="icon">

                    <svg xmlns="http://www.w3.org/2000/svg" width="50%" fill="green" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                    </svg>
                </div>
                <div className="">
                    <strong>Vyzvedněte si je na pokladně FN Olomouc v budově WA v pracovní dny od 7 do 15.30, nejpozději {`${expireDate.toLocaleDateString()}`}.</strong> <br /> Po tomto datu bude vaše rezervace stornovaná.
                </div>
                <button type="button" onClick={() => setProgress(2)}>DEBUG: dalsi obraz</button>
            </div>
        )
    } else {
        reset();
        return (
            <div className="summary">
                <div className="title">
                    Vstupenky se nepodařilo rezervovat!
                </div>
                <div className="icon">

                    <svg xmlns="http://www.w3.org/2000/svg" width="50%" fill="red" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z" />
                    </svg>
                </div>
                <div className="">
                    Vyberte si nové vstupenky v plánu sálu.
                </div>
                <button type="button" onClick={() => setProgress(0)}>DEBUG: dalsi obraz</button>
            </div>
        )
    }
}

export default Summary