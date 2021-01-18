## Zoom-Retranslator

## Add API keys to `API_KEYS`

```
const API_KEYS = {
  apiKey: 'YOUR_ZOOM_API_KEY',
  apiSecret: 'YOUR_ZOOM_SECRET_KEY',
};

```

## Set config of meeting 

```
const MEET_CONFIG = {
  apiKey: API_KEYS.apiKey, // DO NOT CHANGE
  meetingNumber: '75098855333',
  userName: 'Example',
  userEmail: 'example@example.com',
  passWord: 'cZ3FJ4',
  role: 0, // role 1 (host) or 0 (guest)
};
```
  
## Development
1. Clone Repository `git clone https://github.com/Ktyby/Zoom-Retranslator.git`
2. Install npm `yarn`
3. Run project `yarn start`

Open [http://localhost:8080](http://localhost:8080) to view it in the browser.
  
## Support
When you have suggestions, you can open issues on github.
