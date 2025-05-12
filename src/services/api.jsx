import axios from "axios";

const apiClient = axios.create({
    baseURL: "http://localhost:3000/blog/v1",
    timeout: 5000,
    httpAgent: false,
});

export const getPublicationsTecnologia = async () => {
    try {
        const res = await apiClient.get("/publication/Tecnologia");
        return {data: res.data};
    } catch (error) {
        return {error: error.message};
    }
}

export const getPublicationsTaller = async () => {
    try {
        const res = await apiClient.get("/publication/Taller");
        return {data: res.data};
    } catch (error) {
        return {error: error.message};
    }
}

export const getPublicationsPractica = async () => {
    try {
        const res = await apiClient.get("/publication/Practica Supervisada");
        return {data: res.data};
    } catch (error) {
        return {error: error.message};
    }
}

export const getPublicationById = async (id) => {
    try {
        const res = await apiClient.get(`/publication/forById/${id}`);
        if (res.data && res.data.success) {
            return { data: res.data.publication };
        } else {
            return { error: "No se encontró la publicación o hubo un error en el servidor." };
        }
    } catch (error) {
        return { error: error.response?.data?.message || error.message };
    }
};

export const createComment = async (publicationId, text, user) => {
    try {
        const res = await apiClient.post(`/comment/createComment`, {
            text,
            publicationId,
            user,
        });
        if (res.data && res.data.success) {
            return { data: res.data.comment };
        } else {
            return { error: "No se pudo crear el comentario." };
        }
    } catch (error) {
        return { error: error.response?.data?.message || error.message };
    }
};

export const getNewPublicationsTecnologia = async () => {
    try {
        const res = await apiClient.get("/publication/new/Tecnologia");
        return {data: res.data};
    } catch (error) {
        return {error: error.message};
    }
}

export const getNewPublicationsTaller = async () => {
    try {
        const res = await apiClient.get("/publication/new/Taller");
        return {data: res.data};
    } catch (error) {
        return {error: error.message};
    }
}

export const getNewPublicationsPractica = async () => {
    try {
        const res = await apiClient.get("/publication/new/Practica Supervisada");
        return {data: res.data};
    } catch (error) {
        return {error: error.message};
    }
}