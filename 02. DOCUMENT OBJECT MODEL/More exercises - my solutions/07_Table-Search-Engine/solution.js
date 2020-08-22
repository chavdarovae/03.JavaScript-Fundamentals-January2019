function solve() {
    document.getElementById('searchBtn').addEventListener('click', searchTheTable);

    function searchTheTable(e) {

        let searchField = document.getElementById('searchField');

        let searchRows = Array.from(document.querySelectorAll('#exercise tbody tr'));
        searchRows.forEach(row => row.classList.remove('select'));

        let searchCells = Array.from(document.querySelectorAll('#exercise tbody td'));
        searchCells
            .filter(cell => cell.textContent.toLowerCase().includes(searchField.value.toLowerCase()))
            .forEach(cell => cell.parentNode.classList.add('select'));

        searchField.value = ''
    }
}