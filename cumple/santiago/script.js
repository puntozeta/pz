function openMap() {
    // Nombre del lugar
    const placeName = "Sweet Land Confiteria";

    // URL de Google Maps con el nombre del lugar
    const url = `https://www.google.com/maps?q=${encodeURIComponent(placeName)}`;

    // Abrir la URL en una nueva pestaña
    window.open(url, '_blank');
}