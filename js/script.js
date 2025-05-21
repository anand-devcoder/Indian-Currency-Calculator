let notesDenominations = [2000, 500, 200, 100, 50, 20, 10];
let coinsDenominations = [20, 10, 5, 2, 1];

function generateInputs(denominations, containerId) {
    let container = document.getElementById(containerId);
    denominations.forEach(denom => {
        container.innerHTML += `<label>${denom} ₹:</label>
                                <input type='number' id='denom_${denom}' placeholder='Enter count' min='0'><br>`;
    });
}

generateInputs(notesDenominations, "notesSection");
generateInputs(coinsDenominations, "coinsSection");

function calculateTotal() {
    let totalAmount = 0;
    let resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "";
    
    let breakdown = "<h3>Breakdown:</h3><ul>";
    
    [...notesDenominations, ...coinsDenominations].forEach(denom => {
        let count = parseInt(document.getElementById(`denom_${denom}`).value) || 0;
        if (count > 0) {
            totalAmount += denom * count;
            breakdown += `<li>${denom} ₹ x ${count} = ${denom * count} ₹</li>`;
        }
    });

    breakdown += `</ul><h3>Total Amount: ₹${totalAmount}</h3>`;
    resultDiv.innerHTML = breakdown;
}