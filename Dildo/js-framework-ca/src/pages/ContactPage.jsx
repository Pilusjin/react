import { Layout } from "../components/Layout";
import { useState } from "react";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 50%;
  margin: 0 auto;
`;

const Input = styled.input`
  width: 100%;
  height: 30px; /* Set a fixed height */
  padding: 10px;
  margin: 10px 0;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

const TextArea = styled.textarea`
  width: 100%;
  min-height: 50px; /* Set a minimum height */
  padding: 10px;
  margin: 10px 0;
  border-radius: 5px;
  border: 1px solid #ccc;
  resize: vertical;
`;



const Button = styled.button`
  background-color: #ff5f6d;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #ffc371;
  }
`;

export function ContactPage({ shoppingCart }) {
  const defaultValues = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  const [formData, setFormData] = useState(defaultValues);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData(defaultValues);
    console.log(formData);
  };

  return (
    <Layout shoppingCart={shoppingCart}>
      <h1>Contact us:</h1>
      <Form onSubmit={handleSubmit}>
        <label>
          Full Name:
          <Input
            type="text"
            name="name"
            min={3}
            value={formData.name}
            onChange={handleChange}
          />
        </label>
        <label>
          Email:
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <label>
          Subject:
          <Input
            type="text"
            name="subject"
            min={3}
            value={formData.subject}
            onChange={handleChange}
          />
        </label>
        <label>
          Your message:
          <TextArea
            type="text"
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
        </label>
        <Button type="submit">Send</Button>
      </Form>
    </Layout>
  );
}
