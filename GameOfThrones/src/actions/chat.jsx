import React from 'react';
import axios from 'axios';
import { Text, RequestContext } from '@botonic/react';

const OPENAI_API_KEY = 'PRIVATE KEY';

export default class extends React.Component {
  static contextType = RequestContext;

  static async botonicInit({ input }) {
    const userMessage = input.data;

    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-4',
        messages: [{ role: 'user', content: `Respond as if you were Jon Snow to the following message: ${userMessage}` }],
      },
      {
        headers: {
          'Authorization': `Bearer ${OPENAI_API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );

    const botResponse = response.data.choices[0].message.content;
    return { botResponse };
  }

  render() {
    return (
      <>
        <Text>{this.props.botResponse}</Text>
      </>
    );
  }
}
