# Onboarding Botler
(Right from the Freedom Hack Day: November 18th 2015)
This is a PoC of the automatization of the onboarding process of new members of a company.

## Why are we doing this?  ლ(’Д’ლ)!!!
The Onboarding process is lenghty if the new member needs to be added to many comunication channels, sent documents and scheduled routinary meetings. Our solution is to have a software able to help new nearsoftians to set up their accounts, and to be introduced to key documentation. The Onboarding Botler will assist at setting up our new fellow as soon as possible.

## How does it work?
The new member is given a link to the Onboarding Botler, then its dashboard will ask him to fill in the data, including existing accounts (or make those) to add to the company's services.

Then, the user would submit their information and the server will connect to the API of each service in order to update the information. In case there's no API for a given service, a bot will do the job.

## Technical overview

- Node.js
- Phantom.js
- jQuery (for the dashboard)

Onboarding Botler is powered by Open-source frameworks. It consists on a server implemented on Node.js which will do a series of calls to the available APIs as well as the Phantom.js bots for filling the registration forms, reporting the status of the tasks to the user.

## Dependencies

- Node.js
- Phantom.js 1.9.8
- npm

## How to try the PoC?

![Botler Screenshoot](http://imageshack.com/a/img633/6219/UfJ9Qd.png)

1. On the project root run: `npm install`
2. Run the server> `node server.js`
3. On your web browser, go to `localhost:3000`
4. Enter a sample first and last name, it will formulate the email address for some sample company ;D
5. Enter your existing github account
6. Know that we set up a demo github account with user ´iram-aguirre´ and password ´iram123´. You can access on a private window.
7. Go to the test project (should be the only one), then to the project settings and look for the collaborators panel.
8. Submit the form and refresh the collaborators panel, welcome to our new member!



