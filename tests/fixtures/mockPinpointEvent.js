const MOCK_PINPOINT_EVENT = {
  Records: [
    {
      EventSource: 'aws:sns',
      EventVersion: '1.0',
      EventSubscriptionArn:
        'arn:aws:sns:us-west-2:259562322670:pinpoint-sms-topic:611f3afe-3f0c-4cbf-a413-eda8d2a2468d',
      Sns: {
        Type: 'Notification',
        MessageId: '777fd264-5ec7-5c02-ba5c-8956fc5ab96f',
        TopicArn: 'arn:aws:sns:us-west-2:259562322670:pinpoint-sms-topic',
        Subject: null,
        Message:
          '{"originationNumber":"+15039333811","destinationNumber":"+18445760785","messageKeyword":"SERVER STATUS","messageBody":"SERVER START","previousPublishedMessageId":"06fd4036-8d5d-4d95-947e-1c61d298734e","inboundMessageId":"1a858bd8-f39d-43cf-960d-b56d0c7c80c7"}',
        Timestamp: '2022-06-26T18:07:25.140Z',
        SignatureVersion: '1',
        Signature:
          'd+a7DkAMjqJl5OYeIz5M6nftyvuwaGwHbyXbvMU8VYGZTUcysQq1pmFyZZ0TozYPHzM2hJ9hMW63KK06AlwheuW7sDf61VWOP1IdAP8GUZAHf86oSrG2qz7x6/57EFU5QpfNZ8/P8fjpCx+ddC+QPBX56N7uwcOSa3UmRAYnagT7jOEaE0K3Nnz34hqHHegi2mLM+LVJNZFuUS/i4Hbm/ZiXJFg702w4ufe2CO1XDFcGIFdrWIfbi1Wmh9Z1hU77wajgi2znoVl4fwyNTNVNfMG2Dg2X5bK9cjZunbWW1UKrfjQAzTPlfAySD+NJ/0x4odOTnrlbTifzVt/qwUlShg==',
        SigningCertUrl:
          'https://sns.us-west-2.amazonaws.com/SimpleNotificationService-7ff5318490ec183fbaddaa2a969abfda.pem',
        UnsubscribeUrl:
          'https://sns.us-west-2.amazonaws.com/?Action=Unsubscribe&SubscriptionArn=arn:aws:sns:us-west-2:259562322670:pinpoint-sms-topic:611f3afe-3f0c-4cbf-a413-eda8d2a2468d',
        MessageAttributes: {},
      },
    },
  ],
}

module.exports = { MOCK_PINPOINT_EVENT }
