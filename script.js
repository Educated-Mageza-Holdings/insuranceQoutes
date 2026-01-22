// ==========================================
// InsureCompare SA - Main JavaScript
// ==========================================

document.addEventListener('DOMContentLoaded', function() {
    initNavbar();
    initCompareForm();
    initSmoothScroll();
    initAnimations();
    initFilterButtons();
});

// ==========================================
// South African Insurance Provider Data
// ==========================================
const insuranceProviders = {
    car: [
        {
            name: 'Discovery Insure',
            rating: 4.8,
            claimsRatio: 92,
            basePrice: 1245,
            features: ['Vitality Drive rewards', 'R0 excess option', '24/7 roadside assist'],
            excess: 3500,
            coverType: 'comprehensive',
            strengths: ['Best rewards program', 'Excellent app', 'Good driver discounts'],
            valueScore: 95
        },
        {
            name: 'King Price',
            rating: 4.7,
            claimsRatio: 93,
            basePrice: 1120,
            features: ['Decreasing premium', 'No excess option', 'Free car wash'],
            excess: 4000,
            coverType: 'comprehensive',
            strengths: ['Premium decreases monthly', 'Great value', 'Quirky service'],
            valueScore: 92
        },
        {
            name: 'Outsurance',
            rating: 4.6,
            claimsRatio: 94,
            basePrice: 1380,
            features: ['OUTbonus cashback', 'Extensive network', 'Quick claims'],
            excess: 3000,
            coverType: 'comprehensive',
            strengths: ['OUTbonus rewards', 'Fast claim payouts', 'Strong financials'],
            valueScore: 88
        },
        {
            name: 'MiWay',
            rating: 4.4,
            claimsRatio: 89,
            basePrice: 1050,
            features: ['Online discounts', 'Flexible cover', 'Budget-friendly'],
            excess: 4500,
            coverType: 'comprehensive',
            strengths: ['Affordable', 'Easy online management', 'Good for young drivers'],
            valueScore: 85
        },
        {
            name: 'Santam',
            rating: 4.5,
            claimsRatio: 91,
            basePrice: 1520,
            features: ['SA\'s largest insurer', 'Premium service', 'Wide broker network'],
            excess: 3500,
            coverType: 'comprehensive',
            strengths: ['Most experienced', 'Strong brand', 'Comprehensive cover'],
            valueScore: 82
        },
        {
            name: '1st for Women',
            rating: 4.5,
            claimsRatio: 90,
            basePrice: 1180,
            features: ['Women-focused benefits', 'Handbag cover', 'Personal safety'],
            excess: 3500,
            coverType: 'comprehensive',
            strengths: ['Tailored for women', 'Personal safety features', 'Good value'],
            valueScore: 86
        },
        {
            name: 'Budget Insurance',
            rating: 4.2,
            claimsRatio: 87,
            basePrice: 890,
            features: ['Lowest premiums', 'Basic cover', 'Simple process'],
            excess: 5500,
            coverType: 'comprehensive',
            strengths: ['Most affordable', 'No frills', 'Quick signup'],
            valueScore: 78
        },
        {
            name: 'Auto & General',
            rating: 4.3,
            claimsRatio: 88,
            basePrice: 1020,
            features: ['Flexible payments', 'Good cover options', 'Reliable'],
            excess: 4000,
            coverType: 'comprehensive',
            strengths: ['Flexible', 'Good middle ground', 'Solid reputation'],
            valueScore: 80
        }
    ],
    home: [
        {
            name: 'Santam',
            rating: 4.6,
            claimsRatio: 92,
            basePrice: 850,
            features: ['Building & contents', 'All-risk cover', 'Geyser protection'],
            excess: 2500,
            strengths: ['Market leader', 'Comprehensive cover', 'Trusted brand'],
            valueScore: 90
        },
        {
            name: 'Outsurance',
            rating: 4.5,
            claimsRatio: 93,
            basePrice: 780,
            features: ['OUTbonus rewards', 'Flexible excess', 'Power surge cover'],
            excess: 2000,
            strengths: ['Cashback rewards', 'Fast claims', 'Good value'],
            valueScore: 92
        },
        {
            name: 'Discovery Insure',
            rating: 4.7,
            claimsRatio: 91,
            basePrice: 920,
            features: ['Vitality rewards', 'Smart home discounts', 'Premium service'],
            excess: 3000,
            strengths: ['Tech integration', 'Reward program', 'Quality service'],
            valueScore: 88
        },
        {
            name: 'King Price',
            rating: 4.5,
            claimsRatio: 90,
            basePrice: 680,
            features: ['Decreasing premium', 'Sasria included', 'Theft cover'],
            excess: 2500,
            strengths: ['Price decreases', 'Great value', 'Simple claims'],
            valueScore: 94
        },
        {
            name: 'MiWay',
            rating: 4.3,
            claimsRatio: 88,
            basePrice: 620,
            features: ['Online management', 'Customizable', 'Affordable'],
            excess: 3000,
            strengths: ['Budget-friendly', 'Easy to manage', 'Flexible'],
            valueScore: 85
        },
        {
            name: 'Hollard',
            rating: 4.4,
            claimsRatio: 89,
            basePrice: 750,
            features: ['Portable possessions', 'Liability cover', 'Good network'],
            excess: 2500,
            strengths: ['Wide broker access', 'Flexible options', 'Reliable'],
            valueScore: 83
        }
    ],
    life: [
        {
            name: 'Discovery Life',
            rating: 4.8,
            claimsRatio: 98,
            basePrice: 450,
            features: ['Vitality integration', 'Premium payback', 'Comprehensive'],
            coverAmount: 1000000,
            strengths: ['Best rewards', 'Premium back option', 'Wellness focus'],
            valueScore: 95
        },
        {
            name: 'Sanlam',
            rating: 4.6,
            claimsRatio: 97,
            basePrice: 380,
            features: ['Flexible cover', 'Income protection', 'Legacy planning'],
            coverAmount: 1000000,
            strengths: ['SA\'s oldest', 'Strong payouts', 'Good advisors'],
            valueScore: 90
        },
        {
            name: 'Liberty',
            rating: 4.5,
            claimsRatio: 96,
            basePrice: 420,
            features: ['Evolve benefit', 'Critical illness', 'Disability cover'],
            coverAmount: 1000000,
            strengths: ['Flexible products', 'Good service', 'Strong brand'],
            valueScore: 88
        },
        {
            name: 'Momentum',
            rating: 4.5,
            claimsRatio: 95,
            basePrice: 350,
            features: ['Myriad options', 'Multiply rewards', 'Funeral add-on'],
            coverAmount: 1000000,
            strengths: ['Affordable', 'Multiply program', 'Flexible'],
            valueScore: 92
        },
        {
            name: 'Old Mutual',
            rating: 4.4,
            claimsRatio: 96,
            basePrice: 400,
            features: ['Greenlight cover', 'Rewards program', 'Investment link'],
            coverAmount: 1000000,
            strengths: ['Established brand', 'Good network', 'Reliable'],
            valueScore: 85
        },
        {
            name: 'FNB Life',
            rating: 4.3,
            claimsRatio: 94,
            basePrice: 320,
            features: ['Bank integration', 'Simple products', 'eBucks rewards'],
            coverAmount: 1000000,
            strengths: ['FNB integration', 'Simple', 'Good value'],
            valueScore: 86
        }
    ],
    health: [
        {
            name: 'Discovery Health',
            rating: 4.8,
            claimsRatio: 95,
            basePrice: 2850,
            features: ['Vitality program', 'Wide network', 'Gap cover included'],
            planType: 'comprehensive',
            strengths: ['Best rewards', 'Largest network', 'Premium service'],
            valueScore: 92
        },
        {
            name: 'Bonitas',
            rating: 4.4,
            claimsRatio: 92,
            basePrice: 2100,
            features: ['Good hospital cover', 'Affordable', 'Family-friendly'],
            planType: 'comprehensive',
            strengths: ['Value for money', 'Good benefits', 'Reliable'],
            valueScore: 90
        },
        {
            name: 'Momentum Health',
            rating: 4.5,
            claimsRatio: 93,
            basePrice: 2450,
            features: ['Multiply rewards', 'Flexible plans', 'Good chronic cover'],
            planType: 'comprehensive',
            strengths: ['Multiply rewards', 'Good options', 'Competitive'],
            valueScore: 88
        },
        {
            name: 'Medihelp',
            rating: 4.3,
            claimsRatio: 91,
            basePrice: 1890,
            features: ['Budget-friendly', 'Basic hospital', 'Day-to-day options'],
            planType: 'saver',
            strengths: ['Affordable', 'Good basics', 'Simple'],
            valueScore: 85
        },
        {
            name: 'Fedhealth',
            rating: 4.4,
            claimsRatio: 92,
            basePrice: 2200,
            features: ['flexiFED options', 'Good maternity', 'Chronic benefits'],
            planType: 'comprehensive',
            strengths: ['Flexible', 'Good family cover', 'Reliable'],
            valueScore: 86
        },
        {
            name: 'GEMS',
            rating: 4.2,
            claimsRatio: 94,
            basePrice: 1650,
            features: ['Government employees', 'Subsidized', 'Basic to comprehensive'],
            planType: 'hospital',
            strengths: ['Employer subsidy', 'Good basics', 'Affordable'],
            valueScore: 82
        }
    ]
};

// ==========================================
// Utility Functions
// ==========================================
function formatCurrency(amount) {
    return 'R' + amount.toLocaleString('en-ZA');
}

function calculatePremium(basePrice, factors) {
    let premium = basePrice;

    // Apply factors based on user input
    if (factors.vehicleValue) {
        const valueFactor = factors.vehicleValue / 200000;
        premium *= (0.7 + (valueFactor * 0.6));
    }

    if (factors.vehicleYear) {
        const age = 2024 - parseInt(factors.vehicleYear);
        premium *= (1 - (age * 0.02));
    }

    if (factors.coverType === 'thirdparty_fire_theft') {
        premium *= 0.6;
    } else if (factors.coverType === 'thirdparty') {
        premium *= 0.35;
    }

    if (factors.province === 'gauteng') {
        premium *= 1.15;
    } else if (factors.province === 'western_cape') {
        premium *= 1.05;
    }

    // Home insurance factors
    if (factors.buildingValue) {
        premium = (factors.buildingValue / 1000000) * basePrice * 0.8;
    }

    if (factors.contentsValue) {
        premium += (factors.contentsValue / 100000) * 150;
    }

    if (factors.securityFeatures === 'full') {
        premium *= 0.85;
    } else if (factors.securityFeatures === 'armed') {
        premium *= 0.9;
    } else if (factors.securityFeatures === 'alarm') {
        premium *= 0.95;
    }

    // Life insurance factors
    if (factors.age) {
        const ageFactor = 1 + ((factors.age - 30) * 0.02);
        premium *= ageFactor;
    }

    if (factors.smoker === 'yes') {
        premium *= 1.5;
    }

    if (factors.coverAmount) {
        premium = (factors.coverAmount / 1000000) * basePrice;
    }

    // Health factors
    if (factors.members) {
        const memberMultiplier = {
            '1': 1,
            '2': 1.8,
            '3': 2.2,
            '4': 2.5,
            '5': 2.8
        };
        premium *= memberMultiplier[factors.members] || 1;
    }

    if (factors.planType === 'premium') {
        premium *= 1.4;
    } else if (factors.planType === 'hospital') {
        premium *= 0.6;
    } else if (factors.planType === 'saver') {
        premium *= 0.75;
    }

    return Math.round(premium);
}

function calculateValueScore(provider, premium, factors) {
    let score = provider.valueScore;

    // Adjust score based on price-to-benefit ratio
    const avgPremium = premium;
    const priceScore = (1500 - avgPremium) / 10;
    score += priceScore;

    // Boost for high claims ratio
    score += (provider.claimsRatio - 85) * 0.5;

    // Boost for high rating
    score += (provider.rating - 4) * 5;

    return Math.min(100, Math.max(0, Math.round(score)));
}

function generateRecommendation(providers, factors) {
    const results = providers.map(provider => {
        const premium = calculatePremium(provider.basePrice, factors);
        const valueScore = calculateValueScore(provider, premium, factors);

        return {
            ...provider,
            calculatedPremium: premium,
            annualPremium: premium * 12,
            finalValueScore: valueScore
        };
    });

    // Sort by value score (best first)
    results.sort((a, b) => b.finalValueScore - a.finalValueScore);

    // Mark the best one as recommended
    if (results.length > 0) {
        results[0].recommended = true;
    }

    return results;
}

// ==========================================
// Navbar Functionality
// ==========================================
function initNavbar() {
    const navbar = document.querySelector('.navbar');
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.boxShadow = 'none';
        }
    });

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            this.classList.toggle('active');
            // Mobile menu logic here
        });
    }
}

// ==========================================
// Compare Form Functionality
// ==========================================
function initCompareForm() {
    const form = document.getElementById('compareForm');
    const typeRadios = form.querySelectorAll('input[name="insuranceType"]');
    const dynamicFields = form.querySelectorAll('.dynamic-fields');

    // Show/hide fields based on insurance type
    typeRadios.forEach(radio => {
        radio.addEventListener('change', function() {
            dynamicFields.forEach(field => {
                field.style.display = 'none';
            });

            const selectedFields = document.getElementById(this.value + 'Fields');
            if (selectedFields) {
                selectedFields.style.display = 'block';
            }
        });
    });

    // Form submission
    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const submitBtn = form.querySelector('button[type="submit"]');
        const btnText = submitBtn.querySelector('.btn-text');
        const btnLoading = submitBtn.querySelector('.btn-loading');

        // Show loading state
        btnText.style.display = 'none';
        btnLoading.style.display = 'inline-flex';
        submitBtn.disabled = true;

        // Gather form data
        const formData = new FormData(form);
        const factors = {};

        for (let [key, value] of formData.entries()) {
            factors[key] = value;
        }

        // Simulate API call delay
        setTimeout(() => {
            // Get quotes
            const insuranceType = factors.insuranceType;
            const providers = insuranceProviders[insuranceType] || insuranceProviders.car;
            const results = generateRecommendation(providers, factors);

            // Display results
            displayResults(results, insuranceType, factors);

            // Reset button
            btnText.style.display = 'inline';
            btnLoading.style.display = 'none';
            submitBtn.disabled = false;

            // Scroll to results
            document.getElementById('compareResults').scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }, 1500);
    });
}

// ==========================================
// Display Results
// ==========================================
function displayResults(results, insuranceType, factors) {
    const resultsContainer = document.getElementById('compareResults');
    const resultsList = document.getElementById('resultsList');
    const quotesCount = document.getElementById('quotesCount');
    const savingsAmount = document.getElementById('savingsAmount');

    // Show results container
    resultsContainer.style.display = 'block';

    // Calculate savings (difference between highest and lowest)
    const prices = results.map(r => r.calculatedPremium);
    const maxPrice = Math.max(...prices);
    const minPrice = Math.min(...prices);
    const potentialSavings = (maxPrice - minPrice) * 12;

    // Update summary
    quotesCount.textContent = results.length;
    savingsAmount.textContent = formatCurrency(potentialSavings) + '/year';

    // Store results globally for filtering
    window.currentResults = results;
    window.currentFactors = factors;

    // Render results
    renderResults(results, insuranceType);
}

function renderResults(results, insuranceType) {
    const resultsList = document.getElementById('resultsList');

    resultsList.innerHTML = results.map((result, index) => {
        const isRecommended = result.recommended;
        const stars = '&#9733;'.repeat(Math.floor(result.rating)) +
                     (result.rating % 1 >= 0.5 ? '&#9734;' : '');

        return `
            <div class="result-card ${isRecommended ? 'recommended' : ''}" data-index="${index}">
                <div class="result-rank">${index + 1}</div>
                <div class="result-provider">
                    <div class="result-provider-name">
                        ${result.name}
                        ${isRecommended ? '<span class="recommended-badge">Best Match</span>' : ''}
                    </div>
                    <div class="result-features">
                        ${result.features.slice(0, 3).map(f => `
                            <span class="result-feature positive">&#10003; ${f}</span>
                        `).join('')}
                    </div>
                </div>
                <div class="result-metrics">
                    <div class="result-rating">
                        <span class="stars">${stars}</span>
                        <span>${result.rating}/5</span>
                    </div>
                    <div class="result-claims">Claims paid: ${result.claimsRatio}%</div>
                    <div class="result-claims">Value score: ${result.finalValueScore}/100</div>
                </div>
                <div class="result-pricing">
                    <div class="result-price">${formatCurrency(result.calculatedPremium)}<span>/mo</span></div>
                    <div class="result-annual">${formatCurrency(result.annualPremium)}/year</div>
                    <button class="btn ${isRecommended ? 'btn-success' : 'btn-primary'} btn-sm" onclick="selectProvider('${result.name}')">
                        ${isRecommended ? 'Get This Quote' : 'Select'}
                    </button>
                </div>
            </div>
        `;
    }).join('');
}

// ==========================================
// Filter Buttons
// ==========================================
function initFilterButtons() {
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('filter-btn')) {
            const filterBtns = document.querySelectorAll('.filter-btn');
            filterBtns.forEach(btn => btn.classList.remove('active'));
            e.target.classList.add('active');

            const sortType = e.target.dataset.sort;
            sortResults(sortType);
        }
    });
}

function sortResults(sortType) {
    if (!window.currentResults) return;

    let sorted = [...window.currentResults];

    switch (sortType) {
        case 'recommended':
            sorted.sort((a, b) => b.finalValueScore - a.finalValueScore);
            break;
        case 'price-low':
            sorted.sort((a, b) => a.calculatedPremium - b.calculatedPremium);
            break;
        case 'price-high':
            sorted.sort((a, b) => b.calculatedPremium - a.calculatedPremium);
            break;
        case 'rating':
            sorted.sort((a, b) => b.rating - a.rating);
            break;
    }

    // Re-mark recommended based on original value score
    sorted.forEach(r => r.recommended = false);
    const bestValue = sorted.reduce((prev, current) =>
        prev.finalValueScore > current.finalValueScore ? prev : current
    );
    bestValue.recommended = true;

    renderResults(sorted, window.currentFactors?.insuranceType || 'car');
}

// ==========================================
// Select Provider
// ==========================================
function selectProvider(providerName) {
    const modal = document.createElement('div');
    modal.className = 'success-modal';

    modal.innerHTML = `
        <div class="modal-overlay"></div>
        <div class="modal-content">
            <div class="modal-icon">&#10003;</div>
            <h3>Great Choice!</h3>
            <p>You've selected <strong>${providerName}</strong>.</p>
            <p class="modal-detail">A consultant will contact you within 24 hours to finalize your quote and answer any questions.</p>
            <p class="modal-note">You can also call us directly at 0800 123 456</p>
            <button class="btn btn-primary modal-close">Close</button>
        </div>
    `;

    // Add styles
    modal.style.cssText = `
        position: fixed;
        inset: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
    `;

    const overlay = modal.querySelector('.modal-overlay');
    overlay.style.cssText = `
        position: absolute;
        inset: 0;
        background: rgba(0, 0, 0, 0.5);
    `;

    const content = modal.querySelector('.modal-content');
    content.style.cssText = `
        position: relative;
        background: white;
        padding: 3rem;
        border-radius: 1rem;
        text-align: center;
        max-width: 400px;
        margin: 1rem;
    `;

    const icon = modal.querySelector('.modal-icon');
    icon.style.cssText = `
        width: 64px;
        height: 64px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: linear-gradient(135deg, #10b981 0%, #059669 100%);
        color: white;
        font-size: 2rem;
        border-radius: 50%;
        margin: 0 auto 1.5rem;
    `;

    const heading = modal.querySelector('h3');
    heading.style.cssText = `margin-bottom: 1rem; color: #111827;`;

    modal.querySelectorAll('p').forEach(p => {
        p.style.cssText = `color: #6b7280; margin-bottom: 0.5rem;`;
    });

    modal.querySelector('.modal-detail').style.cssText = `
        font-weight: 600;
        color: #2563eb;
        margin: 1rem 0;
    `;

    modal.querySelector('.modal-note').style.cssText = `
        font-size: 0.875rem;
        color: #9ca3af;
        margin-bottom: 1.5rem;
    `;

    document.body.appendChild(modal);

    // Close handlers
    const closeBtn = modal.querySelector('.modal-close');
    closeBtn.addEventListener('click', () => modal.remove());
    overlay.addEventListener('click', () => modal.remove());
}

// ==========================================
// Smooth Scroll
// ==========================================
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));

            if (target) {
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = target.offsetTop - navbarHeight - 20;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ==========================================
// Scroll Animations
// ==========================================
function initAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll(
        '.type-card, .testimonial-card, .step-card, .provider-card'
    );

    animatedElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = `all 0.6s ease ${index * 0.1}s`;
        observer.observe(el);
    });

    // Add animate-in styles
    const style = document.createElement('style');
    style.textContent = `
        .animate-in {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);
}

// ==========================================
// Insurance Type Card Click Handlers
// ==========================================
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.type-card[data-type]').forEach(card => {
        card.addEventListener('click', function(e) {
            e.preventDefault();
            const type = this.dataset.type;

            // Map card types to form values
            const typeMap = {
                'car': 'car',
                'home': 'home',
                'life': 'life',
                'health': 'health',
                'business': 'car',
                'travel': 'car'
            };

            const formType = typeMap[type] || 'car';
            const radio = document.querySelector(`input[name="insuranceType"][value="${formType}"]`);

            if (radio) {
                radio.checked = true;
                radio.dispatchEvent(new Event('change'));
            }

            // Scroll to compare section
            document.getElementById('compare').scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });
});
