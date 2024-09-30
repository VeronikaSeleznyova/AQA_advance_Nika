class ApiReq {
    
    static fetchTodo() {
      return fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .catch(error => {
          console.error('Error in fetchTodo:', error);
          throw error;
        });
    }
  
    static fetchUser() {
      return fetch('https://jsonplaceholder.typicode.com/users/1')
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .catch(error => {
          console.error('Error in fetchUser:', error);
          throw error;
        });
    }
  }
  
  class ApiReqAsync {

    static async fetchTodo() {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
      } catch (error) {
        console.error('Error in fetchTodo:', error);
        throw error;
      }
    }
  
    static async fetchUser() {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
      } catch (error) {
        console.error('Error in fetchUser:', error);
        throw error;
      }
    }
  }
  
  ApiReq.fetchTodo().then(todo => console.log('Todo:', todo));
  ApiReq.fetchUser().then(user => console.log('User:', user));
  

  (async () => {
    const todo = await ApiReqAsync.fetchTodo();
    console.log('Todo:', todo);
  
    const user = await ApiReqAsync.fetchUser();
    console.log('User:', user);
  })();
  