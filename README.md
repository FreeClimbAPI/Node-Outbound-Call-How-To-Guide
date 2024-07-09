# Node - Make Outbound Call How-To Guide

This project serves as a guide to help you build an application with FreeClimb. View this how-to guide on [FreeClimb.com](https://docs.freeclimb.com/docs/how-to-make-an-outbound-call#section-nodejs). Specifically, the project will:

- Creates an outgoing call to the `to` number

## Setting up your new app within your FreeClimb account

To get started using a FreeClimb account, follow the instructions [here](https://docs.freeclimb.com/docs/getting-started-with-freeclimb).

## Setting up the how-to guide

1. Install the node packages necessary using command:

   ```bash
   $ yarn install
   ```

2. Configure environment variables (this tutorial uses the [dotenv package](https://www.npmjs.com/package/dotenv)).

   | ENV VARIABLE   | DESCRIPTION                                                                                                                           |
   | -------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
   | ACCOUNT_ID     | Account ID which can be found under [API credentials](https://www.freeclimb.com/dashboard/portal/account/authentication) in Dashboard |
   | API_KEY        | API key which can be found under [API credentials](https://www.freeclimb.com/dashboard/portal/account/authentication) in Dashboard    |
   | APPLICATION_ID | Appliction IDs can be found under [Apps](https://www.freeclimb.com/dashboard/portal/applications)                                     |

3. Provide a value for the variables `to` and `from` in makeACall.js. The `to` number is any phone number you wish to call. This number must be [verified](https://docs.freeclimb.com/docs/using-your-trial-account#section-verifying-outbound-numbers) (for trial users) and in E.164 format. `from` is a FreeClimb number that makes the call ([Incoming Numbers](https://www.freeclimb.com/dashboard/portal/numbers)).

4. [Configure your applications's endpoints](https://docs.freeclimb.com/docs/registering-and-configuring-an-application#configure-your-application) by adding a publicly accessible URL (we recommend an [ngrok](https://ngrok.com/download) URL) and the route reference `/incomingCall` to your App Config's Call Connect URL:

   ```bash
   https://YOUR-URL.ngrok.io/incomingCall
   ```

## Runnning the how-to guide

1. Run the application using command:

   ```bash
   $ yarn start
   ```

## Getting Help

If you are experiencing difficulties, [contact support](https://freeclimb.com/support).
