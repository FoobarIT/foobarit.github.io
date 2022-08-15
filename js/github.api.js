axios.get('https://api.github.com/users/foobarit')
    .then(function (response) {
        // handle success
        console.log(response.json());
        
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
    .then(function () {
        // always executed
    });
