const UserTable = {
    data() {
      return {
        users: []
      };
    },
    mounted() {
      this.fetchUsers();
    },
    methods: {
      fetchUsers() {
        // Fetch users from your API
        fetch('/api/users')
          .then(response => response.json())
          .then(data => this.users = data)
          .catch(error => console.error('Error:', error));
      },
      deleteUser(userId) {
        // Logic to delete a user
        fetch(`/api/users/${userId}`, { method: 'DELETE' })
          .then(() => {
            // Remove the user from the list after successful deletion
            this.users = this.users.filter(user => user.id !== userId);
          })
          .catch(error => console.error('Error:', error));
      }
    },
    template: `
      <div>
        <table>
          <tr v-for="user in users" :key="user.id">
            <td>{{ user.firstName }}</td>
            <td>{{ user.lastName }}</td>
            <td>{{ user.emailAddress }}</td>
            <td>
              <button @click="deleteUser(user.id)">Delete</button>
            </td>
          </tr>
        </table>
      </div>
    `
  };
  
  new Vue({
    el: '#app',
    components: {
      UserTable
    }
  });