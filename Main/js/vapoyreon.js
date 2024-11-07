document.addEventListener('DOMContentLoaded', () => {
    const vapoyronContainer = document.getElementById('vapoyronContainer');

    function addVapoyron() {
        const vapoyron = document.createElement('img');
        vapoyron.src = 'src/vaporeon.png';
        vapoyron.alt = 'Vapoyron';
        vapoyron.className = 'vapoyron';
        vapoyronContainer.appendChild(vapoyron);
        
        vapoyron.addEventListener('click', addVapoyron);
    }

    addVapoyron();
});