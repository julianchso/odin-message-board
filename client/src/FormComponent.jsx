import { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

import './FormComponent.css';

const FormComponent = () => {
  const queryClient = useQueryClient();
  const [formData, setFormData] = useState({
    username: '',
    message: '',
    added: new Date(),
    id: uuidv4(),
  });

  const addMessageMutation = useMutation({
    mutationFn: (formData) => {
      return axios.post('http://localhost:3000/messages', formData);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['messages']);
    },
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // const handleSubmit = (e) => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      addMessageMutation.mutate(formData);
      console.log('Form data submitted successfully');
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
