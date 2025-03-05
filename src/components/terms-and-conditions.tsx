"use client";
import { useState } from "react";

export default function TermsAndConditions() {
    const [isChecked, setIsChecked] = useState(false);

    return (
        <div>
            <h1>Terms & Conditions</h1>
            <p>lorem ipsum dolor, sit consecu masd fatme kales</p>
            <div>
                <label>
                    <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={() => setIsChecked(!isChecked)}
                    />
                    I accept the terms and conditions
                </label>
            </div>
            <button disabled={!isChecked}>Submit</button>
        </div>
    );
}
