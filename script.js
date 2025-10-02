// Theater Data Configuration
const theatersData = {
    theaters: [
        {
            id: 'opera',
            name: 'Дніпровський театр опери та балету',
            city: 'Дніпро',
            capacity: 1200,
            priceRange: '200-700 грн',
            performances: [
                {
                    id: 'carmina-burana',
                    title: 'Карміна Бурана',
                    date: '2024-12-15',
                    time: '18:00',
                    priceFrom: 200,
                    priceTo: 700,
                    description: 'Класична кантата Карла Орфа з хореографією та вокальними партіями',
                    image: 'fas fa-music'
                },
                {
                    id: 'don-quixote',
                    title: 'Дон Кіхот',
                    date: '2024-12-20',
                    time: '17:00',
                    priceFrom: 200,
                    priceTo: 700,
                    description: 'Балет за мотивами роману Мігеля де Сервантеса',
                    image: 'fas fa-dancing'
                },
                {
                    id: 'mister-x',
                    title: 'Містер Ікс',
                    date: '2024-12-25',
                    time: '17:00',
                    priceFrom: 200,
                    priceTo: 700,
                    description: 'Оперета Імре Кальмана',
                    image: 'fas fa-mask'
                }
            ]
        },
        {
            id: 'philharmonia',
            name: 'Дніпропетровська філармонія',
            city: 'Дніпро',
            capacity: 686,
            priceRange: '200-500 грн',
            performances: [
                {
                    id: 'anime-part1',
                    title: 'Anime Part 1',
                    date: '2024-12-18',
                    time: '18:00',
                    priceFrom: 200,
                    priceTo: 500,
                    description: 'Концерт музики з аніме та японської культури',
                    image: 'fas fa-headphones'
                },
                {
                    id: 'jazz-night',
                    title: 'Jazz Night',
                    date: '2024-12-22',
                    time: '19:00',
                    priceFrom: 150,
                    priceTo: 350,
                    description: 'Вечір джазової музики з відомими виконавцями',
                    image: 'fas fa-music'
                },
                {
                    id: 'rock-90x',
                    title: 'Rock 90x',
                    date: '2024-12-28',
                    time: '18:00',
                    priceFrom: 200,
                    priceTo: 500,
                    description: 'Концерт рок-музики 90-х років',
                    image: 'fas fa-guitar'
                }
            ]
        },
        {
            id: 'shevchenko',
            name: 'Театр драми ім. Шевченка',
            city: 'Кривий Ріг',
            capacity: 500,
            priceRange: '70-200 грн',
            performances: [
                {
                    id: 'za-dvoma-zaytsyamy',
                    title: 'За двома зайцями',
                    date: '2024-12-29',
                    time: '19:00',
                    priceFrom: 70,
                    priceTo: 200,
                    description: 'Класична українська комедія Михайла Старицького',
                    image: 'fas fa-laugh'
                }
            ]
        },
        {
            id: 'academy',
            name: 'Академія Руху',
            city: 'Кривий Ріг',
            capacity: 400,
            priceRange: '100-220 грн',
            performances: [
                {
                    id: 'modern-drama',
                    title: 'Сучасна драма',
                    date: '2024-12-30',
                    time: '18:00',
                    priceFrom: 100,
                    priceTo: 200,
                    description: 'Експериментальна театральна постановка',
                    image: 'fas fa-star'
                }
            ]
        }
    ]
};

// Available seats configuration for each performance
const availableSeats = {
    'carmina-burana': {
        categories: [
            {
                price: 100,
                section: 'Балкон',
                rows: [
                    { row: 13, seats: [15,16,17,18,19,20,21,22,23,24,25] }
                ]
            },
            {
                price: 200,
                section: 'Амфітеатр',
                rows: [
                    { row: 20, seats: [15,16,17,18,19,20,21,22,23,24,25] }
                ]
            },
            {
                price: 300,
                section: 'Партер',
                rows: [
                    { row: 16, seats: [15,16,17,18,19,20,21,22,23,24,25] }
                ]
            },
            {
                price: 400,
                section: 'Партер',
                rows: [
                    { row: 12, seats: [15,16,17,18,19,20,21,22,23,24,25] },
                    { row: 10, seats: [15,16,17,18,19,20,21,22,23,24,25] }
                ]
            },
            {
                price: 500,
                section: 'Партер',
                rows: [
                    { row: 7, seats: [15,16,17,18,19,20,21,22,23,24,25] }
                ]
            },
            {
                price: 600,
                section: 'Партер',
                rows: [
                    { row: 15, seats: [15,16,17,18,19,20,21,22,23,24,25] }
                ]
            },
            {
                price: 700,
                section: 'Партер',
                rows: [
                    { row: 3, seats: [15,16,17,18,19,20,21,22,23,24,25] }
                ]
            }
        ]
    },
    'don-quixote': {
        categories: [
            {
                price: 200,
                section: 'Партер',
                rows: [
                    { row: 18, seats: [10,11,12,13,14,15,16,17,18,19,20] }
                ]
            },
            {
                price: 300,
                section: 'Партер',
                rows: [
                    { row: 14, seats: [10,11,12,13,14,15,16,17,18,19,20] }
                ]
            },
            {
                price: 400,
                section: 'Партер',
                rows: [
                    { row: 10, seats: [10,11,12,13,14,15,16,17,18,19,20] }
                ]
            },
            {
                price: 450,
                section: 'Партер',
                rows: [
                    { row: 6, seats: [10,11,12,13,14,15,16,17,18,19,20] }
                ]
            }
        ]
    },
    'mister-x': {
        categories: [
            {
                price: 220,
                section: 'Партер',
                rows: [
                    { row: 16, seats: [8,9,10,11,12,13,14,15,16,17,18] }
                ]
            },
            {
                price: 300,
                section: 'Партер',
                rows: [
                    { row: 12, seats: [8,9,10,11,12,13,14,15,16,17,18] }
                ]
            },
            {
                price: 380,
                section: 'Партер',
                rows: [
                    { row: 8, seats: [8,9,10,11,12,13,14,15,16,17,18] }
                ]
            }
        ]
    },
    'anime-part1': {
        categories: [
            {
                price: 120,
                section: 'Балкон',
                rows: [
                    { row: 15, seats: [5,6,7,8,9,10,11,12,13,14,15] }
                ]
            },
            {
                price: 180,
                section: 'Партер',
                rows: [
                    { row: 12, seats: [5,6,7,8,9,10,11,12,13,14,15] }
                ]
            },
            {
                price: 250,
                section: 'Партер',
                rows: [
                    { row: 8, seats: [5,6,7,8,9,10,11,12,13,14,15] }
                ]
            }
        ]
    },
    'jazz-night': {
        categories: [
            {
                price: 150,
                section: 'Партер',
                rows: [
                    { row: 14, seats: [3,4,5,6,7,8,9,10,11,12,13] }
                ]
            },
            {
                price: 250,
                section: 'Партер',
                rows: [
                    { row: 10, seats: [3,4,5,6,7,8,9,10,11,12,13] }
                ]
            },
            {
                price: 300,
                section: 'Партер',
                rows: [
                    { row: 6, seats: [3,4,5,6,7,8,9,10,11,12,13] }
                ]
            }
        ]
    },
    'rock-90x': {
        categories: [
            {
                price: 180,
                section: 'Партер',
                rows: [
                    { row: 16, seats: [2,3,4,5,6,7,8,9,10,11,12] }
                ]
            },
            {
                price: 280,
                section: 'Партер',
                rows: [
                    { row: 12, seats: [2,3,4,5,6,7,8,9,10,11,12] }
                ]
            },
            {
                price: 350,
                section: 'Партер',
                rows: [
                    { row: 8, seats: [2,3,4,5,6,7,8,9,10,11,12] }
                ]
            }
        ]
    },
    'za-dvoma-zaytsyamy': {
        categories: [
            {
                price: 100,
                section: 'Балкон',
                rows: [
                    { row: 12, seats: [1,2,3,4,5,6,7,8,9,10] }
                ]
            },
            {
                price: 150,
                section: 'Партер',
                rows: [
                    { row: 8, seats: [1,2,3,4,5,6,7,8,9,10] }
                ]
            },
            {
                price: 200,
                section: 'Партер',
                rows: [
                    { row: 4, seats: [1,2,3,4,5,6,7,8,9,10] }
                ]
            }
        ]
    },
    'modern-drama': {
        categories: [
            {
                price: 80,
                section: 'Балкон',
                rows: [
                    { row: 8, seats: [1,2,3,4,5,6,7,8] }
                ]
            },
            {
                price: 120,
                section: 'Партер',
                rows: [
                    { row: 5, seats: [1,2,3,4,5,6,7,8] }
                ]
            },
            {
                price: 150,
                section: 'Партер',
                rows: [
                    { row: 2, seats: [1,2,3,4,5,6,7,8] }
                ]
            }
        ]
    }
};

// Global variables
let currentPerformance = null;
let selectedSeat = null;

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    loadPerformances();
    initializeEventListeners();
    initializeLanguageSwitcher();
});

// Load performances into the grid
function loadPerformances() {
    const performancesGrid = document.getElementById('performances-grid');
    if (!performancesGrid) return;

    performancesGrid.innerHTML = '';
    
    theatersData.theaters.forEach(theater => {
        theater.performances.forEach(performance => {
            const performanceCard = createPerformanceCard(theater, performance);
            performancesGrid.appendChild(performanceCard);
        });
    });
}

// Create performance card element
function createPerformanceCard(theater, performance) {
    const card = document.createElement('div');
    card.className = 'performance-card fade-in';
    card.onclick = () => openBookingModal(theater.id, performance.id);
    
    const date = new Date(performance.date);
    const formattedDate = date.toLocaleDateString('uk-UA', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
    });
    
    card.innerHTML = `
        <div class="performance-image">
            <i class="${performance.image}"></i>
        </div>
        <div class="performance-info">
            <h3 class="performance-title">${performance.title}</h3>
            <p class="performance-theater">${theater.name}</p>
            <p class="performance-date">${formattedDate}, ${performance.time}</p>
            <p class="performance-price">${performance.priceFrom}-${performance.priceTo} грн</p>
            <p class="performance-description">${performance.description}</p>
            <button class="btn btn-primary" onclick="event.stopPropagation(); openBookingModal('${theater.id}', '${performance.id}')">
                <i class="fas fa-ticket-alt"></i>
                Купити квиток
            </button>
        </div>
    `;
    
    return card;
}

// Open booking modal
function openBookingModal(theaterId, performanceId) {
    const theater = theatersData.theaters.find(t => t.id === theaterId);
    const performance = theater.performances.find(p => p.id === performanceId);
    
    if (!theater || !performance) return;
    
    currentPerformance = { theater, performance };
    
    const modal = document.getElementById('bookingModal');
    const content = document.getElementById('bookingContent');
    
    content.innerHTML = `
        <div class="booking-header">
            <h2>${performance.title}</h2>
            <p><strong>Театр:</strong> ${theater.name}</p>
            <p><strong>Дата:</strong> ${new Date(performance.date).toLocaleDateString('uk-UA')}, ${performance.time}</p>
            <p><strong>Ціни:</strong> ${performance.priceFrom}-${performance.priceTo} грн</p>
        </div>
        
        <div class="seats-selection">
            <h3>Виберіть місце</h3>
            <div class="scheme-reference">
                <p><i class="fas fa-info-circle"></i> Орієнтуйтесь на схему залу при виборі місць</p>
            </div>
            ${generateSeatsHTML(performanceId)}
        </div>
    `;
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Generate seats HTML
function generateSeatsHTML(performanceId) {
    const seats = availableSeats[performanceId];
    if (!seats) return '<p>Місця для цієї вистави тимчасово недоступні</p>';
    
    let html = '';
    
    seats.categories.forEach(category => {
        html += `
            <div class="price-category">
                <h3>Білети по ${category.price} грн</h3>
                <p><strong>${category.section}</strong></p>
        `;
        
        category.rows.forEach(rowData => {
            html += `<p>Ряд ${rowData.row} Місця: `;
            rowData.seats.forEach(seat => {
                html += `
                    <button class="seat-button" onclick="selectSeat('${category.section}', ${rowData.row}, ${seat}, ${category.price})">
                        ${seat}
                    </button>
                `;
            });
            html += '</p>';
        });
        
        html += '</div>';
    });
    
    return html;
}

// Select seat
function selectSeat(section, row, seat, price) {
    selectedSeat = { section, row, seat, price };
    
    const modal = document.getElementById('bookingModal');
    const content = document.getElementById('bookingContent');
    
    content.innerHTML = `
        <div class="booking-form">
            <h2>Замовлення квитка</h2>
            <div class="selected-seat-info">
                <h3>Вибране місце:</h3>
                <p><strong>${currentPerformance.performance.title}</strong></p>
                <p><strong>Театр:</strong> ${currentPerformance.theater.name}</p>
                <p><strong>Дата:</strong> ${new Date(currentPerformance.performance.date).toLocaleDateString('uk-UA')}, ${currentPerformance.performance.time}</p>
                <p><strong>Місце:</strong> ${section}, Ряд ${row}, Місце ${seat}</p>
                <p><strong>Ціна:</strong> ${price} грн</p>
            </div>
            
            <form id="bookingForm" onsubmit="submitBooking(event)">
                <div class="form-group">
                    <label for="customerName">ПІБ *</label>
                    <input type="text" id="customerName" required placeholder="Введіть ваше повне ім'я">
                </div>
                
                <div class="form-group">
                    <label for="customerPhone">Телефон *</label>
                    <input type="tel" id="customerPhone" required placeholder="+380 (XX) XXX-XX-XX">
                </div>
                
                <div class="form-group">
                    <label for="customerEmail">Email *</label>
                    <input type="email" id="customerEmail" required placeholder="your@email.com">
                </div>
                
                <div class="form-group">
                    <label for="customerComment">Коментар</label>
                    <textarea id="customerComment" rows="3" placeholder="Додаткові побажання або коментарі"></textarea>
                </div>
                
                <div class="payment-info">
                    <h3>Реквізити для оплати:</h3>
                    <div class="payment-details">
                        <p><strong>Карта:</strong> 5555 5555 5555 5555</p>
                        <p><strong>Отримувач:</strong> Ім'я Прізвище</p>
                        <p><strong>Призначення:</strong> Квиток на ${currentPerformance.performance.title}</p>
                    </div>
                </div>
                
                <div class="form-actions">
                    <button type="button" class="btn btn-secondary" onclick="goBackToSeats()">
                        <i class="fas fa-arrow-left"></i>
                        Назад до вибору місць
                    </button>
                    <button type="submit" class="btn btn-primary">
                        <i class="fas fa-check"></i>
                        Підтвердити замовлення
                    </button>
                </div>
            </form>
        </div>
    `;
}

// Go back to seats selection
function goBackToSeats() {
    if (!currentPerformance) return;
    
    const content = document.getElementById('bookingContent');
    content.innerHTML = `
        <div class="booking-header">
            <h2>${currentPerformance.performance.title}</h2>
            <p><strong>Театр:</strong> ${currentPerformance.theater.name}</p>
            <p><strong>Дата:</strong> ${new Date(currentPerformance.performance.date).toLocaleDateString('uk-UA')}, ${currentPerformance.performance.time}</p>
            <p><strong>Ціни:</strong> ${currentPerformance.performance.priceFrom}-${currentPerformance.performance.priceTo} грн</p>
        </div>
        
        <div class="seats-selection">
            <h3>Виберіть місце</h3>
            <div class="scheme-reference">
                <p><i class="fas fa-info-circle"></i> Орієнтуйтесь на схему залу при виборі місць</p>
            </div>
            ${generateSeatsHTML(currentPerformance.performance.id)}
        </div>
    `;
}

// Submit booking
function submitBooking(event) {
    event.preventDefault();
    
    const formData = {
        name: document.getElementById('customerName').value,
        phone: document.getElementById('customerPhone').value,
        email: document.getElementById('customerEmail').value,
        comment: document.getElementById('customerComment').value,
        performance: currentPerformance.performance.title,
        theater: currentPerformance.theater.name,
        date: new Date(currentPerformance.performance.date).toLocaleDateString('uk-UA'),
        time: currentPerformance.performance.time,
        seat: `${selectedSeat.section}, Ряд ${selectedSeat.row}, Місце ${selectedSeat.seat}`,
        price: selectedSeat.price
    };
    
    // Show success message
    alert(`Дякуємо за замовлення!\n\nВаші дані:\n${JSON.stringify(formData, null, 2)}\n\nМи зв'яжемося з вами найближчим часом для підтвердження замовлення.`);
    
    // Close modal
    closeBookingModal();
    
    // Reset form
    currentPerformance = null;
    selectedSeat = null;
}

// Close booking modal
function closeBookingModal() {
    const modal = document.getElementById('bookingModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
    
    // Reset variables
    currentPerformance = null;
    selectedSeat = null;
}

// Filter performances
function filterPerformances() {
    const cityFilter = document.getElementById('city-filter').value;
    const theaterFilter = document.getElementById('theater-filter').value;
    const dateFilter = document.getElementById('date-filter').value;
    
    const performancesGrid = document.getElementById('performances-grid');
    const cards = performancesGrid.querySelectorAll('.performance-card');
    
    cards.forEach(card => {
        let show = true;
        
        // City filter
        if (cityFilter) {
            const theaterName = card.querySelector('.performance-theater').textContent;
            if (cityFilter === 'dnipro' && !theaterName.includes('Дніпро')) show = false;
            if (cityFilter === 'kryvyi-rih' && !theaterName.includes('Кривий Ріг')) show = false;
        }
        
        // Theater filter
        if (theaterFilter) {
            const theaterName = card.querySelector('.performance-theater').textContent.toLowerCase();
            if (theaterFilter === 'opera' && !theaterName.includes('опери')) show = false;
            if (theaterFilter === 'philharmonia' && !theaterName.includes('філармонія')) show = false;
            if (theaterFilter === 'shevchenko' && !theaterName.includes('шевченка')) show = false;
            if (theaterFilter === 'academy' && !theaterName.includes('академія')) show = false;
        }
        
        // Date filter
        if (dateFilter) {
            const performanceDate = card.querySelector('.performance-date').textContent;
            // Simple date matching - in real app would be more sophisticated
            if (!performanceDate.includes(dateFilter.split('-')[2])) show = false;
        }
        
        card.style.display = show ? 'block' : 'none';
    });
}

// Open theater page
function openTheaterPage(theaterId) {
    // Redirect to specific theater page
    const theaterPages = {
        'opera': 'dnipro-opera.html',
        'philharmonia': 'dnipro-philharmonia.html',
        'shevchenko': 'kryvyi-rih-shevchenko.html',
        'academy': 'kryvyi-rih-academy.html'
    };
    
    const pageUrl = theaterPages[theaterId];
    if (pageUrl) {
        window.location.href = pageUrl;
    }
}

// Scroll to section
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Initialize event listeners
function initializeEventListeners() {
    // Close modal when clicking outside
    window.onclick = function(event) {
        const modal = document.getElementById('bookingModal');
        if (event.target === modal) {
            closeBookingModal();
        }
    };
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            scrollToSection(targetId);
            
            // Update active nav link
            document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // Filter form submission
    const searchForm = document.querySelector('.search-filters');
    if (searchForm) {
        searchForm.addEventListener('submit', function(e) {
            e.preventDefault();
            filterPerformances();
        });
    }
}

// Initialize language switcher
function initializeLanguageSwitcher() {
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // In a real app, this would change the language
            console.log('Language changed to:', this.dataset.lang);
        });
    });
}

// Add loading animation
function showLoading(element) {
    element.innerHTML = '<div class="loading"></div>';
}

// Add fade-in animation to elements
function addFadeInAnimation() {
    const elements = document.querySelectorAll('.performance-card, .theater-card');
    elements.forEach((element, index) => {
        setTimeout(() => {
            element.classList.add('fade-in');
        }, index * 100);
    });
}

// Initialize animations when page loads
window.addEventListener('load', function() {
    addFadeInAnimation();
});

// Handle window resize
window.addEventListener('resize', function() {
    // Responsive adjustments if needed
});

// Export functions for global access
window.openBookingModal = openBookingModal;
window.closeBookingModal = closeBookingModal;
window.selectSeat = selectSeat;
window.goBackToSeats = goBackToSeats;
window.submitBooking = submitBooking;
window.filterPerformances = filterPerformances;
window.openTheaterPage = openTheaterPage;
window.scrollToSection = scrollToSection;
