
    async function getUser() {
        try {
          const response = await fetch('https://api.github.com/users/foobarit');
            console.log(response);
          return response.data;
        } catch (err) {
          console.log(err);
        }
      }

      getUser();
    