document.addEventListener('DOMContentLoaded', function() {
    let total = 0; // Prix total initial
    const totalAmount = document.getElementById('totalAmount');
    const amount = document.querySelectorAll('.amount');
    const minusBtn = document.querySelectorAll('.minus');
    const plusBtn = document.querySelectorAll('.plus');
    const removeBtn = document.querySelectorAll('.remove');
    const likeBtn = document.querySelectorAll('.like');

    // Prix des articles
    const prices = [30, 40, 50]; // Prix des articles (ajoutez les prix des autres articles ici si nécessaire)

    // Fonction pour mettre à jour le prix total
    function updateTotal() {
        totalAmount.textContent = '$' + total.toFixed(2);
    }

    // Fonction pour calculer le prix total
    function calculateTotal() {
        total = 0;
        amount.forEach((item, index) => {
            total += parseInt(item.textContent) * prices[index];
        });
        updateTotal();
    }

    // Événement pour diminuer la quantité
    minusBtn.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            let quantity = parseInt(amount[index].textContent);
            if (quantity > 0) {
                amount[index].textContent = quantity - 1;
                calculateTotal();
            }
        });
    });

    // Événement pour augmenter la quantité
    plusBtn.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            let quantity = parseInt(amount[index].textContent);
            amount[index].textContent = quantity + 1;
            calculateTotal();
        });
    });

    // Événement pour supprimer un article
    removeBtn.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            total -= parseInt(amount[index].textContent) * prices[index];
            amount[index].textContent = 0;
            calculateTotal();
        });
    });

    // Événement pour aimer un article
    likeBtn.forEach(btn => {
        btn.addEventListener('click', () => {
            btn.classList.toggle('active');
        });
    });

    // Mettre à jour le prix total initial
    calculateTotal();
});
