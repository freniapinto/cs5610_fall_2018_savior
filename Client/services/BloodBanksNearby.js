const URL = 'https://blooming-castle-18974.herokuapp.com/banks/'

export default class BloodBanksNearby {
    static findAllBloodBanks = keyword => {
        return fetch(URL+keyword, {
            method: 'GET',
            credentials: "include",
            body: null,
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(response => {
                return response.json()})
    }
    static findDetailsOfSelectedBloodBank = (city, placeId) => {
        return fetch(URL+city+'/'+placeId, {
            method: 'GET',
            credentials: "include",
            body: null,
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(response => {
                return response.json()})
    }
}