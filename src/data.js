import reykjavik from "./images/reykjavik.jpg"
import kyiv from "./images/kyiv.jpg"
import taghazout from "./images/taghazout.jpg"

export default [
    {
        id: 1,
        title: "Taghazout",
        location: "Morocco",
        googleMapsUrl: "https://goo.gl/maps/fesPbWS5QLjzBxnm6",
        startDate: "27 Jan, 2018",
        endDate: "3 Feb, 2018",
        description: "Surfing trip to Taghazout plus exploration of Agadir and 'Paradise Valley'",
        imageUrl: taghazout
    },
    {
        id: 2,
        title: "Chernobyl & Kyiv",
        location: "Ukraine",
        googleMapsUrl: "https://goo.gl/maps/YMRapcymcnQgQJ686",
        startDate: "25 Jan, 2016",
        endDate: "30 Jan, 2016",
        description: "Trip to Kyiv plus 48 hours in Chernobyl exclusion zone",
        imageUrl: kyiv
    },
    {
        id: 3,
        title: "Reykjavik",
        location: "Iceland",
        googleMapsUrl: "https://goo.gl/maps/oT3Zi2vBVsuSDedb7",
        startDate: "27 Jan, 2015",
        endDate: "1 Feb, 2015",
        description: "Trip to Reykjavik plus golden circle tour through Iceland",
        imageUrl: reykjavik
    }
]