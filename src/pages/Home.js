import React, { useState, useEffect } from "react";
import supabase from "../config/supabaseClient"

const Home = () => {
  const [Name, setTitle] = useState('')
  const [Email, setMethod] = useState('')
  const [Message, setRating] = useState('')
  const [formError, setFormError] = useState(null)
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);


  const handleSubmit = async (e) => {
    e.preventDefault()

    const clearForm = () => {
      setTitle("");
      setMethod("");
      setRating("");
    };

    if (!Name || !Email || !Message) {
      setFormError('Please fill in all the fields correctly.')
      return
    }
    setIsLoading(true);

    const { data, error } = await supabase
    .from("Portfolio Message")
    .insert([{ Name, Email, Message }])
    .select();
    setIsLoading(false);
    if (error) {
      console.log(error)
      setFormError('Please fill in all the fields correctly.')
    }
    if (data) {
      console.log(data)
      setFormError(null)
        clearForm();
        setShowSuccess(true); 
        setTimeout(() => {
          setShowSuccess(false);
        }, 5000);
      }
    };
  
    useEffect(() => {
      if (showSuccess) {
        setTimeout(() => {
          setShowSuccess(false);
        }, 5000);
      }
    }, [showSuccess]);
  return (
    <div className="page create">
      <form onSubmit={handleSubmit}>
        <label htmlFor="Name">Name:</label>
        <input 
          type="text" 
          id="Name"
          value={Name}
          onChange={(e) => setTitle(e.target.value)}
        />
    <label htmlFor="Email">Email:</label>
        <input 
          type="text"
          id="Email"
          value={Email}
          onChange={(e) => setMethod(e.target.value)}
        />
        <label htmlFor="Message">Message:</label>
        <textarea
        className="textarea" 
          type="text"
          id="Message"
          value={Message}
          onChange={(e) => setRating(e.target.value)}
        />
        <button
          id="But"
          className={isLoading ? "loading" : ""}
          onClick={handleSubmit}
          disabled={isLoading}
        >
          {isLoading ? "Submitting..." : "Submit"}
          {formError && <p className="error">{formError}</p>}
        {showSuccess && <p className="success">Form submitted successfully!</p>}
        </button>       
      </form>
    </div>
  )
}

export default Home