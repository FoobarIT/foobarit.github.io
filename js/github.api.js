axios.get('https://api.github.com/users/foobarit')
    .then(function (response) {
        // handle success
        console.log(response);
        $('#my_repos').text(response.data.public_repos)
        $('#my_follower').text(response.data.followers)
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
    .then(function () {
        // always executed
    });
