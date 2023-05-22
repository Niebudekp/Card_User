async function fetchUsers() {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await response.json();
  
      const usersList = document.getElementById("users-list");
  
      data.forEach(user => {
        const fullName = user.name;
        const listItem = document.createElement("li");
        listItem.textContent = fullName;
        listItem.addEventListener("click", () => {
          showUserData(user);
        });
        usersList.appendChild(listItem);
      });
    } catch (error) {
      console.log("Wystąpił błąd podczas pobierania danych:", error);
    }
  }
  
  function showUserData(user) {
    const userDataContainer = document.getElementById("user-data-container");
    userDataContainer.innerHTML = `
      <h2>${user.name}</h2>
      <p><strong>Username:</strong> ${user.username}</p>
      <p><strong>Email:</strong> ${user.email}</p>
      <p><strong>Phone:</strong> ${user.phone}</p>
      <p><strong>Website:</strong> ${user.website}</p>
      <p><strong>Company:</strong> ${user.company.name}</p>
      <p><strong>Address:</strong> ${user.address.street}, ${user.address.city}, ${user.address.zipcode}</p>
    `;
  }
  fetchUsers() 