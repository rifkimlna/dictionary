document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.getElementById('searchInput');
    const listItems = document.querySelectorAll('#list li');

    searchInput.addEventListener('input', function() {
        const searchTerm = searchInput.value.trim().toLowerCase();

        listItems.forEach(item => {
            const text = item.textContent.toLowerCase();
            const isVisible = text.includes(searchTerm);
            item.style.display = isVisible ? 'block' : 'none';
        });
    });
});
