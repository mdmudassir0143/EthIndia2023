import React, { useState } from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Input,
  ChakraProvider,
} from '@chakra-ui/react';

const ChannelForm: React.FC = () => {
  const [channels, setChannels] = useState([
    { name: 'Channel 1', url: 'http://example.com/channel1', title: 'Title 1' },
    { name: 'Channel 2', url: 'http://example.com/channel2', title: 'Title 2' },
    { name: 'Channel 3', url: 'http://example.com/channel3', title: 'Title 3' },
    { name: 'Channel 4', url: 'http://example.com/channel4', title: 'Title 4' },
    { name: 'Channel 5', url: 'http://example.com/channel5', title: 'Title 5' },
    // Add more demo data as needed
  ]);

  const handleInputChange = (index: number, field: string, value: string) => {
    const updatedChannels = [...channels];
    updatedChannels[index] = { ...updatedChannels[index], [field]: value };
    setChannels(updatedChannels);
  };

  return (
    <ChakraProvider>
      <div>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Channel Name</Th>
              <Th>URL</Th>
              <Th>Title</Th>
            </Tr>
          </Thead>
          <Tbody>
            {channels.map((channel, index) => (
              <Tr key={index}>
                <Td>
                  <Input
                    type="text"
                    value={channel.name}
                    onChange={(e) => handleInputChange(index, 'name', e.target.value)}
                  />
                </Td>
                <Td>
                  <Input
                    type="text"
                    value={channel.url}
                    onChange={(e) => handleInputChange(index, 'url', e.target.value)}
                  />
                </Td>
                <Td>
                  <Input
                    type="text"
                    value={channel.title}
                    onChange={(e) => handleInputChange(index, 'title', e.target.value)}
                  />
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </div>
    </ChakraProvider>
  );
};

export default ChannelForm;
