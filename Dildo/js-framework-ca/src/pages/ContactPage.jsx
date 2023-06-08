import { Layout } from "../components/Layout";
import { useState } from "react";

export function ContactPage({shoppingCart}) {

    const defaultValues = {
        name: '',
        email: '',
        subject: '',
        message: '',
    }

    const [formData, setFormData] = useState(defaultValues);

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormData(defaultValues)
        console.log(formData);
    }
    
    return (
        <Layout shoppingCart={shoppingCart} >
            <h1>Contact:</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Full Name:
                    <input type="text" name="name" min={3} value={formData.name} onChange={handleChange} className="form-input" />
                </label>
                <label>
                    Email:
                    <input type="email" name="email" value={formData.email} onChange={handleChange} className="form-input" />
                </label>
                <label>
                    Subject:
                    <input type="text" name="subject" min={3} value={formData.subject} onChange={handleChange} className="form-input" />
                </label>
                <label>
                    Your message:
                    <textarea type="text" name="message" value={formData.message} onChange={handleChange} className="form-input" />
                </label>
                <button type="submit">Send</button>
            </form>
        </Layout>
    )
}
