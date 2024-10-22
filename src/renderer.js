document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('add-user-modal');
  const addUserButton = document.getElementById('add-user-button');
  const userTable = document.getElementById('user-table');

  addUserButton.addEventListener('click', () => {
    modal.style.display = 'flex';
  });

  document
    .getElementById('add-user-form')
    .addEventListener('submit', (event) => {
      event.preventDefault();

      const name = document.getElementById('name').value;
      const role = document.getElementById('role').value;
      const password = document.getElementById('password').value;

      if (name && role && password) {
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
                <td>${userTable.rows.length}</td>
                <td>${name}</td>
                <td>${role}</td>
                <td>${password}</td>
            `;
        userTable.appendChild(newRow);

        document.getElementById('name').value = '';
        document.getElementById('role').value = '';
        document.getElementById('password').value = '';

        modal.style.display = 'none';
      }
    });

  modal.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });
});
