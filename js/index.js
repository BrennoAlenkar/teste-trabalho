       const userForm = document.getElementById('userForm');
        const userContainer = document.getElementById('userContainer');
        const users = [];

        userForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const age = parseInt(document.getElementById('age').value.trim(), 10);

            if (!name || !email || !age || age <= 0) {
                alert('Todos os campos são obrigatórios e a idade deve ser maior que 0.');
                return;
            }

            const emailExists = users.some(user => user.email === email);
            if (emailExists) {
                alert('E-mail já cadastrado.');
                return;
            }

            const newUser = { name, email, age };
            users.push(newUser);

            updateUserList();
            userForm.reset();
        });

        function updateUserList() {
            userContainer.innerHTML = '';

            users.forEach(user => {
                const userDiv = document.createElement('div');
                userDiv.className = 'user';
                userDiv.textContent = `Nome: ${user.name}, E-mail: ${user.email}, Idade: ${user.age}`;
                userContainer.appendChild(userDiv);
            });
        }
        