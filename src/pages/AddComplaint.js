import React from "react";

function AddComplaint() {
    return(
        <div className="AddComplaint">
            <h1>Add Complaint</h1>
            <form>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required />
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />
                <label htmlFor="complaint">Complaint:</label>
                <textarea id="complaint" name="complaint" required></textarea>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default AddComplaint;