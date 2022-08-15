
    async function getUser() {
        try {
          const response = await fetch('https://api.github.com/users/foobarit');
            const data = await response.json()
            console.log(data)
            document.getElementById('followers').innerHTML = data.followers;
            document.getElementById('following').innerHTML = data.following;
            document.getElementById('repos').innerHTML = data.public_repos;
            document.getElementById('gist').innerHTML = data.public_gists;
          
        } catch (err) {
          console.log(err);
        }
      }

      getUser();
    