class weatherData{
    constructor(api_id,city_name,country_name){
        this.api_id = api_id;
        this.city_name = city_name;
        this.country_name = country_name;
    }
    async getdata(){
        // fetch the data from the api
        let url = `https://api.weatherbit.io/v2.0/current?city=${this.city_name}&key=${this.api_id}`;
        let response = await fetch(url);
        return response.json();
    }
}