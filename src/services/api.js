import axios from "axios";

axios.defaults.baseURL = "https://62584f320c918296a49543e7.mockapi.io";

export const addMaterial = async (values) => {
    const res = await axios.post("/materials", values);
    return res.data;
}

export const getMaterials = async () => {
    const res = await axios.get("/materials");
    return res.data;
}

export const deleteMaterials = async (id) => {
    const res = await axios.delete(`/materials/${id}`,);
    return res.data;
}

export const updateMaterials = async (fields) => {
    const res = await axios.put(`/materials/${fields.id}`, fields);
    return res.data;
}
