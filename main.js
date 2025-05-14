const apiKey = 'openuv-4bsirmao491va-io';

    const cities = {
      "Mumbai": { lat: 19.0760, lon: 72.8777 },
      "Pune": { lat: 18.5204, lon: 73.8567 },
      "Nagpur": { lat: 21.1458, lon: 79.0882 },
      "Nashik": { lat: 19.9975, lon: 73.7898 },
      "Aurangabad": { lat: 19.8762, lon: 75.3433 },
      "Solapur": { lat: 17.6599, lon: 75.9064 },
      "Thane": { lat: 19.2183, lon: 72.9781 },
      "Navi Mumbai": { lat: 19.0330, lon: 73.0297 },
      "Amravati": { lat: 20.9374, lon: 77.7796 },
      "Kolhapur": { lat: 16.7050, lon: 74.2433 },
      "Sangli": { lat: 16.8524, lon: 74.5815 },
      "Jalgaon": { lat: 21.0077, lon: 75.5626 },
      "AhilyaNagar": { lat: 19.0948, lon: 74.7480 },
      "Satara": { lat: 17.6805, lon: 74.0183 },
      "Ratnagiri": { lat: 16.9944, lon: 73.3000 },
      "Latur": { lat: 18.4088, lon: 76.5604 },
      "Chandrapur": { lat: 19.9704, lon: 79.3034 },
      "Hinjewadi, Pune": { lat: 18.5974, lon: 73.7181 },
      "Shivajinagar, Pune": { lat: 18.5308, lon: 73.8470 },
      "Kothrud, Pune": { lat: 18.5074, lon: 73.8077 },
      "Wakad, Pune": { lat: 18.5986, lon: 73.7619 },
      "Viman Nagar, Pune": { lat: 18.5679, lon: 73.9143 },
      "Hadapsar, Pune": { lat: 18.5018, lon: 73.9260 },
      "Kharadi, Pune": { lat: 18.5511, lon: 73.9407 },
      "Baner, Pune": { lat: 18.5590, lon: 73.7766 },
      "Delhi": { lat: 28.7041, lon: 77.1025 },
      "Bangalore": { lat: 12.9716, lon: 77.5946 },
      "Kolkata": { lat: 22.5726, lon: 88.3639 },
      "Chennai": { lat: 13.0827, lon: 80.2707 },
      "New York": { lat: 40.7128, lon: -74.0060 }
    };

    const selector = document.getElementById('citySelector');
    const resultDiv = document.getElementById('uvResult');

    // Populate city dropdown
    for (const city in cities) {
      const option = document.createElement('option');
      option.value = city;
      option.textContent = city;
      selector.appendChild(option);
    }

    selector.addEventListener('change', async () => {
      const city = selector.value;
      const { lat, lon } = cities[city];

      resultDiv.innerHTML = 'Loading...';

      try {
        const response = await fetch(`https://api.openuv.io/api/v1/uv?lat=${lat}&lng=${lon}`, {
          headers: {
            'x-access-token': apiKey
          }
        });
        const data = await response.json();
        const uv = data.result.uv;

        const level = getUVLevel(uv);
        const advice = getSunAdvice(uv);

        resultDiv.innerHTML = `
          <h2>${city}</h2>
          <p class="${level.class}">UV Index: <strong>${uv.toFixed(2)}</strong> (${level.label})</p>
          <p><strong>Advice:</strong> ${advice}</p>
        `;
      } catch (error) {
        resultDiv.innerHTML = 'Failed to fetch UV data. Try again.';
      }
    });

    function getUVLevel(uv) {
      if (uv < 3) return { label: 'Low', class: 'uv-low' };
      if (uv < 6) return { label: 'Moderate', class: 'uv-moderate' };
      if (uv < 8) return { label: 'High', class: 'uv-high' };
      if (uv < 11) return { label: 'Very High', class: 'uv-very-high' };
      return { label: 'Extreme', class: 'uv-extreme' };
    }

    function getSunAdvice(uv) {
      if (uv < 3) return 'Low risk. No protection needed.';
      if (uv < 6) return 'Wear sunglasses and use SPF 30+ if outside.';
      if (uv < 8) return 'Wear SPF 30+, hat, and limit midday sun exposure.';
      if (uv < 11) return 'Avoid sun from 10am–4pm. Use full protection.';
      return 'Extreme danger. Stay indoors if possible.';
    }