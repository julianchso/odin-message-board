import { useState } from 'react';
import { useQuery, useMutation } from '@tanstack/react-query';

import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

const FormComponent = () => {
  const [formData, setFormData] = useState({
    username: '',
    message: '',
    added: new Date(),
    id: uuidv4(),
  });

  const fetchMessages = async () => {
    const response = await axios.post('http://localhost:3000/messages', formData);
    console.log('Form data submitted successfully:', response.data);
    setFormData({ username: '', message: '', added: new Date(), id: uuidv4() });
  };

  const { mutation: addMessageMutation } = useMutation({
    mutationFn: (formData) => {
      return axios.post('http://localhost:3000/messages', formData);
    },
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(`username: ${formData.username}`);
    console.log(`message: ${formData.message}`);
    // console.log(formData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await addMessageMutation({ username, message, added, id });
      console.log(formData);
      console.log('Form data submitted successfully:', response.data);
      setFormData({ username: '', message: '', added: new Date(), id: uuidv4() });
    } catch (error) {
      console.log('Error submitting form data', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='username'>Username: </label>
      <input
        type='text'
        name='username'
        placeholder='username'
        value={formData.username}
        onChange={handleChange}
      />
      <label htmlFor='newMessage'>Message: </label>
      <textarea
        type='text'
        name='message'
        placeholder="What's on your mind?"
        value={formData.message}
        onChange={handleChange}
      />
      <button type='submit'>Post Message</button>
    </form>
  );
};

export default FormComponent;
