const countries = [
  {
    ISO: 'AE',
    latitude: 23.424076,
    longitude: 53.847818,
    name: 'United Arab Emirates',
  },
  {
    ISO: 'AT',
    latitude: 47.516231,
    longitude: 14.550072,
    name: 'Austria',
  },
  {
    ISO: 'AU',
    latitude: -25.274398,
    longitude: 133.775136,
    name: 'Australia',
  },
  {
    ISO: 'BE', latitude: 50.503887, longitude: 4.469936, name: 'Belgium',
  },
  {
    ISO: 'CA', latitude: 56.130366, longitude: -106.346771, name: 'Canada',
  },
  {
    ISO: 'CH', latitude: 46.818188, longitude: 8.227512, name: 'Switzerland',
  },
  {
    ISO: 'CN', latitude: 35.86166, longitude: 104.195397, name: 'China',
  },
  {
    ISO: 'DE', latitude: 51.165691, longitude: 10.451526, name: 'Germany',
  },
  {
    ISO: 'DK', latitude: 56.26392, longitude: 9.501785, name: 'Denmark',
  },
  {
    ISO: 'ES', latitude: 40.463667, longitude: -3.74922, name: 'Spain',
  },
  {
    ISO: 'FI', latitude: 61.92411, longitude: 25.748151, name: 'Finland',
  },
  {
    ISO: 'FR', latitude: 46.227638, longitude: 2.213749, name: 'France',
  },
  {
    ISO: 'GB', latitude: 55.378051, longitude: -3.435973, name: 'United Kingdom',
  },
  {
    ISO: 'HK', latitude: 22.396428, longitude: 114.109497, name: 'Hong Kong',
  },
  {
    ISO: 'HU', latitude: 47.162494, longitude: 19.503304, name: 'Hungary',
  },
  {
    ISO: 'ID', latitude: -0.789275, longitude: 113.921327, name: 'Indonesia',
  },
  {
    ISO: 'IL', latitude: 31.046051, longitude: 34.851612, name: 'Israel',
  },
  {
    ISO: 'IN', latitude: 20.593684, longitude: 78.96288, name: 'India',
  },
  {
    ISO: 'IT', latitude: 41.87194, longitude: 12.56738, name: 'Italy',
  },
  {
    ISO: 'JP', latitude: 36.204824, longitude: 138.252924, name: 'Japan',
  },
  {
    ISO: 'KP', latitude: 40.339852, longitude: 127.510093, name: 'North Korea',
  },
  {
    ISO: 'KR', latitude: 35.907757, longitude: 127.766922, name: 'South Korea',
  },
  {
    ISO: 'LU', latitude: 49.815273, longitude: 6.129583, name: 'Luxembourg',
  },
  {
    ISO: 'MC', latitude: 43.750298, longitude: 7.412841, name: 'Monaco',
  },
  {
    ISO: 'MY', latitude: 4.210484, longitude: 101.975766, name: 'Malaysia',
  },
  {
    ISO: 'NL', latitude: 52.132633, longitude: 5.291266, name: 'Netherlands',
  },
  {
    ISO: 'NO', latitude: 60.472024, longitude: 8.468946, name: 'Norway',
  },
  {
    ISO: 'NZ', latitude: -40.900557, longitude: 174.885971, name: 'New Zealand',
  },
  {
    ISO: 'PH', latitude: 12.879721, longitude: 121.774017, name: 'Philippines',
  },
  {
    ISO: 'PT', latitude: 39.399872, longitude: -8.224454, name: 'Portugal',
  },
  {
    ISO: 'QA', latitude: 25.354826, longitude: 51.183884, name: 'Qatar',
  },
  {
    ISO: 'RU', latitude: 61.52401, longitude: 105.318756, name: 'Russia',
  },
  {
    ISO: 'SA', latitude: 23.885942, longitude: 45.079162, name: 'Saudi Arabia',
  },
  {
    ISO: 'SE', latitude: 60.128161, longitude: 18.643501, name: 'Sweden',
  },
  {
    ISO: 'SG', latitude: 1.352083, longitude: 103.819836, name: 'Singapore',
  },
  {
    ISO: 'SZ', latitude: -26.522503, longitude: 31.465866, name: 'Swaziland',
  },
  {
    ISO: 'TC', latitude: 21.694025, longitude: -71.797928, name: 'Turks and Caicos Islands',
  },
  {
    ISO: 'TH', latitude: 15.870032, longitude: 100.992541, name: 'Thailand',
  },
  {
    ISO: 'TJ', latitude: 38.861034, longitude: 71.276093, name: 'Tajikistan',
  },
  {
    ISO: 'US', latitude: 37.09024, longitude: -95.712891, name: 'United States',
  },
  {
    ISO: 'UY', latitude: -32.522779, longitude: -55.765835, name: 'Uruguay',
  },
  {
    ISO: 'UZ', latitude: 41.377491, longitude: 64.585262, name: 'Uzbekistan',
  },
  {
    ISO: 'VA', latitude: 41.902916, longitude: 12.453389, name: 'Vatican City',
  },
  {
    ISO: 'VC', latitude: 12.984305, longitude: -61.287228, name: 'Saint Vincent and the Grenadines',
  },
  {
    ISO: 'VE', latitude: 6.42375, longitude: -66.58973, name: 'Venezuela',
  },
  {
    ISO: 'VG', latitude: 18.420695, longitude: -64.639968, name: 'British Virgin Islands',
  },
  {
    ISO: 'VI', latitude: 18.335765, longitude: -64.896335, name: 'U.S. Virgin Islands',
  },
  {
    ISO: 'VN', latitude: 14.058324, longitude: 108.277199, name: 'Vietnam',
  },
  {
    ISO: 'VU', latitude: -15.376706, longitude: 166.959158, name: 'Vanuatu',
  },
  {
    ISO: 'WF', latitude: -13.768752, longitude: -177.156097, name: 'Wallis and Futuna',
  },
  {
    ISO: 'WS', latitude: -13.759029, longitude: -172.104629, name: 'Samoa',
  },
  {
    ISO: 'XK', latitude: 42.602636, longitude: 20.902977, name: 'Kosovo',
  },
  {
    ISO: 'YE', latitude: 15.552727, longitude: 48.516388, name: 'Yemen',
  },
  {
    ISO: 'YT', latitude: -12.8275, longitude: 45.166244, name: 'Mayotte',
  },
  {
    ISO: 'ZA', latitude: -30.559482, longitude: 22.937506, name: 'South Africa',
  },
];

console.log(countries);
export default countries;
