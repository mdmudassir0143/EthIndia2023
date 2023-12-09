import React, { useState } from 'react';

const ChannelForm: React.FC = () => {
  const [channels, setChannels] = useState([
    { name: 'Channel 1', url: 'http://example.com/channel1', title: 'Title 1' },
    { name: 'Channel 2', url: 'http://example.com/channel2', title: 'Title 2' },
    { name: 'Channel 2', url: 'http://example.com/channel2', title: 'Title 2' },
    { name: 'Channel 2', url: 'http://example.com/channel2', title: 'Title 2' },
    { name: 'Channel 2', url: 'http://example.com/channel2', title: 'Title 2' },
    // Add more demo data as needed
  ]);

  const handleInputChange = (index: number, field: string, value: string) => {
    const updatedChannels = [...channels];
    updatedChannels[index] = { ...updatedChannels[index], [field]: value };
    setChannels(updatedChannels);
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Channel Name</th>
            <th>URL</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          {channels.map((channel, index) => (
            <tr key={index}>
              <td>
                <input
                  type="text"
                  value={channel.name}
                  onChange={(e) => handleInputChange(index, 'name', e.target.value)}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={channel.url}
                  onChange={(e) => handleInputChange(index, 'url', e.target.value)}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={channel.title}
                  onChange={(e) => handleInputChange(index, 'title', e.target.value)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ChannelForm;