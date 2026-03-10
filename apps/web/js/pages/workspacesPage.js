/**
 * Módulo para operaciones de Workspaces (Usado por Owner y Admin)
 */
const workspaces = {
    async getAll() {
        return await api.get('/workspaces');
    },

    async toggleStatus(workspaceId, newStatus) {
        // newStatus: 'ACTIVE' | 'SUSPENDED'
        return await api.put(`/workspaces/${workspaceId}/status`, { status: newStatus });
    },

    async getAddons(workspaceId) {
        return await api.get(`/workspaces/${workspaceId}/addons`);
    },

    async updateIAConfig(workspaceId, config) {
        return await api.put(`/workspaces/${workspaceId}/ia-config`, config);
    }
};