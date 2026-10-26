// База даних героїв та мешканців Бородянської громади
const heroesData = [
    {
        id: 1,
        name: "Микола Бернацький",
        type: "military",
        callsign: "",
        dates: "07.02.1983 - 04.11.2023",
        age: "40 років",
        unit: "Захисник України",
        motto: "Вічна слава, честь та шана герою-захиснику!",
        photo: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&q=80"
    },
    {
        id: 2,
        name: "Олексій Постнов",
        type: "military",
        callsign: "Пірат",
        dates: "21.10.1987 - 18.04.2023",
        age: "35 років",
        unit: "В/ч А4010 ЗСУ",
        motto: "Вічна слава, честь та шана герою-захиснику!",
        photo: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&q=80"
    },
    {
        id: 3,
        name: "Григорій Салій",
        type: "civilian",
        callsign: "",
        dates: "08.02.1959 - 18.03.2022",
        age: "63 роки",
        unit: "Цивільний мешканець",
        motto: "Світла памʼять! Громада не забуде!",
        photo: ""
    }
];

let currentFilter = 'all';

function renderCards(data) {
    const grid = document.getElementById('heroesGrid');
    const notFound = document.getElementById('notFound');
    grid.innerHTML = '';

    if (data.length === 0) {
        notFound.classList.remove('hidden');
        return;
    } else {
        notFound.classList.add('hidden');
    }

    data.forEach(hero => {
        const isMilitary = hero.type === 'military';
        const photoSrc = hero.photo ? hero.photo : 'https://via.placeholder.com/400x400/ededeb/777777?text=Фото+відсутнє';

        const cardHtml = `
            <div class="hero-card border rounded-2xl overflow-hidden flex flex-col justify-between p-5 relative shadow-sm">
                
                <!-- Значок -->
                <div class="absolute top-4 right-4 bg-[#f7f6f2] p-2 rounded-full border border-[#d8d6d0]">
                    ${isMilitary ? '⚔️' : '🕯️'}
                </div>

                <div>
                    <!-- Фото -->
                    <div class="w-28 h-28 mx-auto mb-4 rounded-full overflow-hidden border-2 ${isMilitary ? 'border-[#333333]' : 'border-[#888888]} bg-[#ededeb]">
                        <img src="${photoSrc}" alt="${hero.name}" class="w-full h-full object-cover grayscale contrast-125">
                    </div>

                    <!-- Інформація -->
                    <div class="text-center">
                        <h3 class="text-lg font-serif font-bold text-[#1a1a1a] mb-1">${hero.name}</h3>
                        ${hero.callsign ? `<p class="text-xs text-[#555555] font-semibold mb-2">Позивний «${hero.callsign}»</p>` : ''}
                        <p class="text-xs text-[#666666] font-medium mb-1">${hero.age} (${hero.dates})</p>
                        <p class="text-xs text-[#888888] mb-4">${hero.unit}</p>
                    </div>
                </div>

                <!-- Шана -->
                <div class="border-t border-[#ededeb] pt-3 text-center">
                    <span class="text-[11px] uppercase tracking-wider text-[#444444] font-semibold">
                        ${hero.motto}
                    </span>
                </div>
            </div>
        `;
        grid.innerHTML += cardHtml;
    });
}

// Пошук
document.getElementById('searchInput').addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().trim();
    filterAndSearch(query, currentFilter);
});

// Фільтрація
function filterCategory(category) {
    currentFilter = category;
    
    ['all', 'military', 'civilian'].forEach(cat => {
        const btn = document.getElementById(`btn-${cat}`);
        if (cat === category) {
            btn.className = 'px-4 py-2 text-xs md:text-sm font-medium rounded-lg bg-[#2c2c2c] text-white shadow-sm';
        } else {
            btn.className = 'px-4 py-2 text-xs md:text-sm font-medium rounded-lg bg-white text-[#444444] hover:bg-[#ededeb] border border-[#cccccc] transition-colors';
        }
    });

    const query = document.getElementById('searchInput').value.toLowerCase().trim();
    filterAndSearch(query, currentFilter);
}

function filterAndSearch(query, category) {
    const filtered = heroesData.filter(hero => {
        const matchesSearch = hero.name.toLowerCase().includes(query) || 
                             hero.callsign.toLowerCase().includes(query);
        const matchesCategory = category === 'all' || hero.type === category;
        return matchesSearch && matchesCategory;
    });
    renderCards(filtered);
}

// Ініціалізація
document.getElementById('year').textContent = new Date().getFullYear();
renderCards(heroesData);