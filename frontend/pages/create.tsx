import React, { useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  VStack,
} from '@chakra-ui/react';

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

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <Box p={4} maxW="md" borderWidth="1px" borderRadius="lg" shadow="md">
      <form onSubmit={handleSubmit}>
        <VStack spacing={4}>
          <FormControl>
            <FormLabel>Channel Address</FormLabel>
            <Input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
            />
          </FormControl>

          <FormControl>
            <FormLabel>Channel Name</FormLabel>
            <Input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
          </FormControl>

          <FormControl>
            <FormLabel>Channel Title</FormLabel>
            <Input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
            />
          </FormControl>

          <FormControl>
            <FormLabel>Description</FormLabel>
            <Textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
            />
          </FormControl>

          <Button type="submit" colorScheme="teal">
            Submit
          </Button>
        </VStack>
      </form>
    </Box>
  );
};

// Example usage:
const App: React.FC = () => {
  const handleSubmit = (formData: ChannelFormData) => {
    console.log('Form submitted with data:', formData);
    // You can handle the form data submission logic here
  };

  return (
    <Box p={8}>
      <VStack spacing={4}>
        <h1>Channel Form</h1>
        <ChannelForm onSubmit={handleSubmit} />
      </VStack>
    </Box>
  );
};

export default App;

