// Configuración de variables globales
const CONFIG = {
    // Reemplazar con la URL de tu API desplegada
    API_BASE_URL: 'http://localhost:3000',
    CLOUDINARY_CLOUD_NAME: 'tu_cloud_name',
    GOOGLE_CLIENT_ID: 'tu_google_client_id.apps.googleusercontent.com',
    APP_NAME: 'SupCrud by Crudzaso'
};

// Exportar para uso en otros scripts si fuera necesario
if (typeof module !== 'undefined') module.exports = CONFIG;