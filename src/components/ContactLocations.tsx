import { useState } from 'react';

const ContactLocations = () => {
  const [activeTab, setActiveTab] = useState('locations');
  const [activeCountry, setActiveCountry] = useState('Sweden');
  const [activeCity, setActiveCity] = useState('Helsingborg');
  const [activeCompany, setActiveCompany] = useState('All');

  // Sample data structure
  const locationsData = {
    Sweden: [
      { name: 'Eskilstuna', image: 'https://sigmatechnology.com/content/uploads/2022/04/sweden-contacts-scaled.jpeg' },
      { name: 'Gothenburg', image: 'https://sigmatechnology.com/content/uploads/2022/04/sweden-contacts-scaled.jpeg' },
      { name: 'Helsingborg', image: 'https://sigmatechnology.com/content/uploads/2022/04/sweden-contacts-scaled.jpeg' },
      // Add other Swedish cities...
    ],
    China: [
      { name: 'Beijing', image: 'https://sigmatechnology.com/content/uploads/2022/04/China.jpeg' },
      { name: 'Shanghai', image: 'https://sigmatechnology.com/content/uploads/2022/04/China.jpeg' },
    ],
    // Add other countries...
  };

  const companiesData = [
    {
      name: 'Sigma Technology Software Solutions',
      countries: [
        {
          name: 'Sweden',
          cities: [
            { name: 'Helsingborg', image: 'https://sigmatechnology.com/content/uploads/2022/04/sweden-contacts-scaled.jpeg' },
            { name: 'Karlshamn', image: 'https://sigmatechnology.com/content/uploads/2022/04/sweden-contacts-scaled.jpeg' },
          ]
        }
      ]
    },
    // Add other companies...
  ];

  const officeInfo = {
    'Helsingborg': {
      address: 'bluearegatan 48\nSE-252 36 Helsingborg',
      companies: [
        {
          name: 'Sigma Technology Software Solutions',
          manager: 'Jens Svantesson',
          phone: '+46 727 122 290',
          email: 'jens.svantesson@sigmatechnology.com',
          link: '/companies/sigma-technology-software-solutions/'
        }
      ]
    }
    // Add other office info...
  };

  return (
    <section className="py-36 min-h-[calc(100vh-200px)]">
      <div className="container mx-auto px-4 h-full">
        <div className="flex flex-col lg:flex-row gap-8 h-full">
          {/* Left Column - Tabs and Lists */}
          <div className="w-full lg:w-1/2 h-full">
            {/* Tabs */}
            <nav className="mb-4">
              <ul className="flex border-b border-gray-200">
                <li className={`mr-1 ${activeTab === 'locations' ? 'border-b-2 border-blue-500' : ''}`}>
                  <button 
                    onClick={() => setActiveTab('locations')}
                    className="py-2 px-4 lg:text-2xl uppercase font-medium text-gray-700 hover:text-blue-500  focus:outline-none"
                  >
                    Locations
                  </button>
                </li>
                <li className={`mr-1 ${activeTab === 'companies' ? 'border-b-2 border-blue-500' : ''}`}>
                  <button 
                    onClick={() => setActiveTab('companies')}
                    className="py-2 px-4 lg:text-2xl uppercase font-medium text-gray-700 hover:text-blue-500  focus:outline-none"
                  >
                    Companies
                  </button>
                </li>
              </ul>
            </nav>

            {/* Tab Content */}
            <div className="tab-content h-[calc(100%-52px)] overflow-y-auto">
              {activeTab === 'locations' ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {Object.entries(locationsData).map(([country, cities]) => (
                    <div key={country} className="mb-6">
                      <h3 className="font-bold text-lg mb-3 uppercase">{country}</h3>
                      <ul className="space-y-2">
                        {cities.map(city => (
                          <li key={city.name}>
                            <button
                              onClick={() => {
                                setActiveCountry(country);
                                setActiveCity(city.name);
                              }}
                              className={`text-left w-full py-1 px-2 rounded ${activeCity === city.name ? 'bg-[#086AD7] text-white' : 'hover:bg-gray-100'}`}
                            >
                              {city.name}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="h-full">
                  <ul className="space-y-4">
                    <li>
                      <button
                        onClick={() => setActiveCompany('All')}
                        className={`w-full text-left py-2 px-3 rounded  ${activeCompany === 'All' ? 'bg-[#086AD7] font-bold text-white'  : 'hover:bg-gray-100'}`}
                      >
                        All
                      </button>
                    </li>
                    {companiesData.map(company => (
                      <li key={company.name}>
                        <button
                          onClick={() => setActiveCompany(company.name)}
                          className={`w-full text-left py-2 px-3 rounded ${activeCompany === company.name ? 'bg-[#086AD7] font-bold text-white' : 'hover:bg-gray-100'}`}
                        >
                          {company.name}
                        </button>
                        {activeCompany === company.name && (
                          <div className="mt-2 ml-4">
                            {company.countries.map(country => (
                              <div key={country.name} className="mb-3">
                                <h4 className="font-semibold mb-2">{country.name}</h4>
                                <ul className="space-y-1">
                                  {country.cities.map(city => (
                                    <li key={city.name}>
                                      <button
                                        onClick={() => setActiveCity(city.name)}
                                        className={`text-left w-full py-1 px-2 rounded ${activeCity === city.name ? 'bg-blue-50 text-[#086AD7]' : 'hover:bg-gray-50'}`}
                                      >
                                        {city.name}
                                      </button>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Right Column - Office Information */}
          <div className="w-full lg:w-1/2 bg-white rounded-lg shadow-md p-6 h-[600px] lg:h-[calc(80vh-200px)] overflow-y-auto">
            {officeInfo[activeCity] ? (
              <div>
                <h1 className="text-2xl font-bold mb-4">{activeCity}</h1>
                <div className="mb-6">
                  <address className="not-italic whitespace-pre-line">
                    {officeInfo[activeCity].address}
                  </address>
                </div>

                <ul className="space-y-6">
                  {officeInfo[activeCity].companies.map(company => (
                    <li key={company.name}>
                      <strong className="block text-lg mb-2">
                        <a href={company.link} className="text-[#086AD7] hover:underline">
                          {company.name}
                        </a>
                      </strong>
                      <div className="space-y-1">
                        <p>Unit Manager: {company.manager}</p>
                        <p>Phone: <a href={`tel:${company.phone}`} className="text-[#086AD7] hover:underline">{company.phone}</a></p>
                        <p>Email: <a href={`mailto:${company.email}`} className="text-[#086AD7] hover:underline">{company.email}</a></p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <div className="text-center py-8 text-gray-500 h-full flex items-center justify-center">
                Select a location to view details
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactLocations;