import axios from 'axios';

export default {
    getExhibitions : () => {
        return axios.get("/api/cafam");
    },
    getExhibitionById : (id) => {
        return axios.get("api/cafam/" + id);
    },
    getExhibitionFloor: (floor) => {
        return axios.get('api/cafam/exhibitionFloor' + floor);
    },
    updateLinks: (audioInput, pictureInput, itemToDelete, coverImg, position, floor) => {
        return axios.put('api/cafam/exhibitionFloor' + floor, 
        {"input": audioInput,
        "pictureInput": pictureInput,
        "itemToDelete": itemToDelete,
        "position": position,
        "coverImg": coverImg});
    },
    addImgToGallery: (pushedImg, floor) => {
        return axios.post('api/cafam/exhibitionFloor' + floor, {"pushedImg": pushedImg});
    },
    getPrograms: () => {
        return axios.get("api/cafamPrograms");
    },
    getProgramsById: (id) => {
        return axios.get('/api/cafamPrograms/' + id);
    },
    saveProgram: (programData) => {
        console.log(programData);
        return axios.post("/api/cafamPrograms", programData);
    },
    updateProgram: (programData, id) => {
        return axios.put("/api/cafamPrograms/" + id, programData);
    },
    removeProgram: (id) => {
        return axios.delete("/api/cafamPrograms/" + id);
    },
    getArtistConnect: () => {
        return axios.get('/api/cafamArtistConnect');
    },
    getArtistConnectFloor: (floor) => {
        return axios.get('/api/cafamArtistConnect/floor/' + floor);
    },
    getArtistConnectByFloor: (floor) => {
        return axios.get('/api/cafamArtistConnect/floor/' + floor);
    },
    updateArtistConnect: (data, id) => {
        return axios.put("/api/cafamArtistConnect/" + id, data);
    }
};