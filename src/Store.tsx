import { BandData } from "./types";

class Store {
    data: any

    constructor() {
        this.data = {
            bands: [
                { id: 1, name: 'The Beatles', description: 'British rock band formed in Liverpool in 1960', image: 'the_beatles.jpg' },
                { id: 2, name: 'Led Zeppelin', description: 'English rock band formed in London in 1968', image: 'led_zeppelin.jpg' },
                { id: 3, name: 'Pink Floyd', description: 'British rock band formed in London in 1965', image: 'pink_floyd.jpg' },
                { id: 4, name: 'The Rolling Stones', description: 'English rock band formed in London in 1962', image: 'the_rolling_stones.jpg' },
                { id: 5, name: 'Black Sabbath', description: 'English rock band formed in Birmingham in 1968', image: 'black_sabbath.jpg' },
                { id: 6, name: 'AC/DC', description: 'Australian rock band formed in Sydney in 1973', image: 'acdc.jpg' },
                { id: 7, name: 'Metallica', description: 'American heavy metal band formed in Los Angeles in 1981', image: 'metallica.jpg' },
                { id: 8, name: 'Queen', description: 'British rock band formed in London in 1970', image: 'queen.jpg' },
                { id: 9, name: 'Aerosmith', description: 'American rock band formed in Boston in 1970', image: 'aerosmith.jpg' },
                { id: 10, name: 'The Doors', description: 'American rock band formed in Los Angeles in 1965', image: 'the_doors.jpg' }
            ]
        }
    }

    findAll(type: string) {
        return this.data[type];
    }

    findRecord(type: string, id: number) {
        return this.data[type].find((record: { id: number; }) => record.id === id);
    }
}

const store = new Store();

export default store;