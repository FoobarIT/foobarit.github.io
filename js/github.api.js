
    async function getUser() {
        try {
          const response = await fetch('https://api.github.com/users/foobarit');
      
          return response.data;
        } catch (err) {
          console.log(err);
        }
      }
      
      console.log(await getUser());
    