// ========================================
// WEATHER APP
// ========================================

async function getWeather() {

    const city = document.getElementById("city").value;


    if (city === "") {

        alert("Please enter a city name");

        return;

    }


    // Add your OpenWeather API key here

    const apiKey = "YOUR_WEATHER_API_KEY";


    const url =
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;


    try {

        const response = await fetch(url);


        if (!response.ok) {

            throw new Error("City not found");

        }


        const data = await response.json();


        document.getElementById("weatherResult").innerHTML = `

            <div class="weather-card">

                <h2>
                    ${data.name}
                </h2>

                <p>
                    🌡️ Temperature:
                    ${data.main.temp} °C
                </p>

                <p>
                    ☁️ Weather:
                    ${data.weather[0].description}
                </p>

                <p>
                    💧 Humidity:
                    ${data.main.humidity}%
                </p>

                <p>
                    💨 Wind Speed:
                    ${data.wind.speed} m/s
                </p>

            </div>

        `;

    }


    catch (error) {

        document.getElementById("weatherResult").innerHTML = `

            <div class="weather-card">

                <h2>
                    ❌ Error
                </h2>

                <p>
                    City not found.
                    Please enter a valid city name.
                </p>

            </div>

        `;

    }

}



// ========================================
// MOVIE SEARCH APP
// ========================================

async function searchMovie() {

    const movieName =
        document.getElementById("movieName").value;


    if (movieName === "") {

        alert("Please enter a movie name");

        return;

    }


    // Add your OMDb API key here

    const apiKey = "YOUR_OMDB_API_KEY";


    const url =
        `https://www.omdbapi.com/?t=${movieName}&apikey=${apiKey}`;


    try {

        const response = await fetch(url);


        const data = await response.json();


        if (data.Response === "False") {

            throw new Error("Movie not found");

        }


        document.getElementById("movieResult").innerHTML = `

            <div class="movie-card">

                <img
                    src="${data.Poster}"
                    alt="${data.Title}"
                >

                <h2>
                    ${data.Title}
                </h2>

                <p>
                    ⭐ Rating:
                    ${data.imdbRating}
                </p>

                <p>
                    📅 Release:
                    ${data.Year}
                </p>

                <p>
                    🎭 Genre:
                    ${data.Genre}
                </p>

                <p>
                    🎬 Director:
                    ${data.Director}
                </p>

                <p>
                    📝 ${data.Plot}
                </p>

            </div>

        `;

    }


    catch (error) {

        document.getElementById("movieResult").innerHTML = `

            <div class="movie-card">

                <h2>
                    ❌ Movie Not Found
                </h2>

                <p>
                    Please enter another movie name.
                </p>

            </div>

        `;

    }

}