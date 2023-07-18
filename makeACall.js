require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const freeclimbSDK = require('@freeclimb/sdk')
const { PerclScript, Say, MakeCallRequest } = freeclimbSDK

const app = express()
app.use(bodyParser.json())

const port = process.env.PORT || 3000
// your freeclimb API key (available in the Dashboard) - be sure to set up environment variables to store these values
const accountId = process.env.ACCOUNT_ID
const apiKey = process.env.API_KEY
const freeclimbConfig = freeclimbSDK.createConfiguration({ accountId, apiKey })
const apiInstance = new freeclimbSDK.DefaultApi(freeclimbConfig)

// Invoke create method to initiate the asynchronous outdial request
const applicationId = process.env.APPLICATION_ID
apiInstance.makeACall(new MakeCallRequest({
  _from: '', // Your FreeClimb number
  to: '', // Your verified phone number
  applicationId: applicationId,
})).catch(console.log)

// Handles incoming calls. Set with 'Call Connect URL' in App Config
app.post('/incomingCall', (req, res) => {
  const script = new PerclScript({
    commands: [new Say({ text: 'You just made a call with the FreeClimb API' })]
  })
  res.status(200).json(script.build())
})

app.listen(port, () => {
  console.log(`started the server on port ${port}`)
})