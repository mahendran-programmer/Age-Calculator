function calc() {
    const day = parseInt(document.getElementById('day').value);
    const month = parseInt(document.getElementById('month').value);
    const year = parseInt(document.getElementById('year').value);

    if (!day || !month || !year) return;

    const birthDate = new Date(year, month - 1, day);
    const today = new Date();

    let ageYears = today.getFullYear() - birthDate.getFullYear();
    let ageMonths = today.getMonth() - birthDate.getMonth();
    let ageDays = today.getDate() - birthDate.getDate();

    if (ageDays < 0) {
        ageMonths--;
        ageDays += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }

    if (ageMonths < 0) {
        ageYears--;
        ageMonths += 12;
    }

    document.getElementById('years').textContent = ageYears;
    document.getElementById('months').textContent = ageMonths;
    document.getElementById('days').textContent = ageDays;

    document.querySelector('.results').style.display = 'block';
    document.querySelector('.reset-btn').style.display = 'inline-block';
}

function resetForm() {
    document.getElementById('day').value = '';
    document.getElementById('month').value = '';
    document.getElementById('year').value = '';
    document.querySelector('.results').style.display = 'none';
    document.querySelector('.reset-btn').style.display = 'none';
}

function formatWithLeadingZero(value) {
    return value < 10 ? '0' + value : value;
}

function validateAndFormatDateInput() {
    const dayInput = document.getElementById('day');
    const monthInput = document.getElementById('month');

    dayInput.addEventListener('blur', () => {
        dayInput.value = formatWithLeadingZero(parseInt(dayInput.value, 10));
    });

    monthInput.addEventListener('blur', () => {
        monthInput.value = formatWithLeadingZero(parseInt(monthInput.value, 10));
    });
}

// Call this function on page load
validateAndFormatDateInput();