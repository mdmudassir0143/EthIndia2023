import React, { useState } from 'react';

interface ChannelFormProps {
  onSubmit: (formData: ChannelFormData) => void;
}

interface ChannelFormData {
  address: string;
  name: string;
  title: string;
  description: string;
}

const ChannelForm: React.FC<ChannelFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<ChannelFormData>({
    address: '',
    name: '',
    title: '',
    description: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Channel Address:
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Channel Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Channel Title:
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Description:
        <textarea
          name="description"
          value={formData.description}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

// Example usage:
const App: React.FC = () => {
  const handleSubmit = (formData: ChannelFormData) => {
    console.log('Form submitted with data:', formData);
    // You can handle the form data submission logic here
  };

  return (
    <div>
      <h1>Channel Form</h1>
      <ChannelForm onSubmit={handleSubmit} />
    </div>
  );
};

export default App;
