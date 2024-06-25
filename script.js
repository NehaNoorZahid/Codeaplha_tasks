document.getElementById('ageForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const date = parseInt(document.getElementById('date').value);
    const month = parseInt(document.getElementById('month').value) - 1; // JavaScript months are 0-11
    const year = parseInt(document.getElementById('year').value);

    const today = new Date();
    const birthDate = new Date(year, month, date);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    const dayDiff = today.getDate() - birthDate.getDate();

    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--;
    }

    const resultDiv = document.getElementById('result');
    resultDiv.textContent = `Your age is ${age} years.`;
});