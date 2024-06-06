
function getRandomHexColor() {
            return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
        }

        function createBoxes(amount) {
            const boxesContainer = document.getElementById('boxes');
            boxesContainer.innerHTML = '';
            const fragment = document.createDocumentFragment();
            let boxSize = 30;
            for (let i = 0; i < amount; i++) {
                const box = document.createElement('div');
                box.style.width = `${boxSize}px`;
                box.style.height = `${boxSize}px`;
                box.style.backgroundColor = getRandomHexColor();
                fragment.appendChild(box);
                boxSize += 10;
            }
            boxesContainer.appendChild(fragment);
        }

        function destroyBoxes() {
            const boxesContainer = document.getElementById('boxes');
            boxesContainer.innerHTML = '';
        }

        document.querySelector('[data-create]').addEventListener('click', function() {
            const input = document.querySelector('#controls input');
            const amount = parseInt(input.value, 10);
            if (amount >= 1 && amount <= 100) {
                createBoxes(amount);
                input.value = '';
            } else {
                alert('Please enter a number between 1 and 100');
            }
        });

        document.querySelector('[data-destroy]').addEventListener('click', destroyBoxes);
    </script>