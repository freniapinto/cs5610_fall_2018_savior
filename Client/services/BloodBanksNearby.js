const URL = 'https://blooming-castle-18974.herokuapp.com/banks/'
const herokuURL= 'https://blooming-castle-18974.herokuapp.com/savior/'
const bloodStocksURL = herokuURL+'bloodstock/'
const filterByBloodTypeURL = herokuURL + 'donor/type'
const allPostsURL = herokuURL+'post'
const postURL = herokuURL + 'admin/post/'

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
    static findDonorsNearMe = city => {
        return fetch(herokuURL+city, {
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

    static findBloodStocks = city => {
        return fetch(bloodStocksURL+city, {
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

    static filterByBloodTypes = (data) => {
        return fetch(filterByBloodTypeURL, {
            credentials: 'include',
            body: JSON.stringify(data),
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => {
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
    static findAllPosts =() => {
        return fetch(allPostsURL, {
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

    static deletePost = (id) => {
        return fetch(postURL+id, {
            credentials: 'include',
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => {
                return response.json()})
    }

    static editPost = (id, post) => {
        return fetch(postURL+id, {
            credentials: 'include',
            body: JSON.stringify(post),
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => {
                return response.json()})
    }
}