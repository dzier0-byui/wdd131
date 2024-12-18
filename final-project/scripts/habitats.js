const habitats = [
    {
        title: "Savannas",
        image: "images/lion.jpg",
        alt: "lion",
        description: "The iconic grasslands of Africa, home to lions, elephants, and zebras."
    },
    {
        title: "Rainforests",
        image: "images/gorilla.jpg",
        alt: "gorilla",
        description: "Dense forests teeming with life, including gorillas and vibrant bird species."
    },
    {
        title: "Deserts",
        image: "images/meerkat.png",
        alt: "meerkat",
        description: "Explore the arid beauty of the Kalahari and Namib deserts, where unique adaptations support incredible wildlife."
    },
    {
        title: "Regions",
        image: "images/kruger.jpg",
        alt: "elephant in kruger national park",
        description: "Experience safaris in renowned locations such as the Serengeti, Masai Mara, and Kruger National Park."
    },
];

function populateHabitats() {
    const habitatGrid = document.getElementById('habitatGrid');

    habitats.forEach(habitat => {
        const section = document.createElement('div');
        section.className = 'content-section';
        section.innerHTML = `
            <img src="${habitat.image}" alt="${habitat.alt}" loading="lazy">
            <h2>${habitat.title}</h2>
            <p>${habitat.description}</p>
        `;
        habitatGrid.appendChild(section);
    });
}

document.addEventListener('DOMContentLoaded', populateHabitats);