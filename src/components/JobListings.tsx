import React, { useState } from 'react';

const JobListings = () => {
  const [visibleJobs, setVisibleJobs] = useState(6);
  const [selectedCompetence, setSelectedCompetence] = useState('All competence areas');
  const [selectedCountry, setSelectedCountry] = useState('All Countries');
  const [selectedCity, setSelectedCity] = useState('All cities');
  const [searchQuery, setSearchQuery] = useState('');

  const jobData = [
    {
      id: 1,
      title: 'Are you our Next amazing employee within Quality Assurance and Testing?',
      deadline: '30 June 2025',
      city: 'Malmö',
      description: 'Sigma Technology has been appointed Sweden\'s 4th best employer in 2023, and we aim to continue our journey (striving towards 1st place, of course)! :) Take the opportunity to join us and meet like-minded professionals who are passionate about delivering quality solutions! We work with both big and small companies within various industries such as IoT, Medtech, Energy, Automotive, and Telecom. In the projects we manage, you might need to ensure new systems are built with best practices or be a QA guru helping our customers create better and more reliable solutions!',
      competence: 'Testing and Verification',
      country: 'Sweden',
      link: 'https://sigmatechnology.com/open-position-detail/?id=profiler-position-7163'
    },
    {
      id: 2,
      title: 'Projektledare fordonsbranschen',
      deadline: '16 May 2025',
      city: 'Göteborg',
      description: 'Tycker du om att arbeta som spindeln i nätet och driva ditt eget och andras arbete? Gillar du att tänka logiskt och analysera information? Vill du arbeta med att tolka människors behov av teknik och vara en del i att omsätta dem till lösningar? Som projektledare och affärsutvecklare inom fordonsindustrin kommer du att ha en central roll i att leda och koordinera projekt från start till mål samt identifiera och utveckla nya affärsmöjligheter. Du kommer att arbeta nära olika avdelningar, inklusive forskning och utveckling, produktion och marknadsföring, för att säkerställa att projekten levereras i tid, inom budget och med högsta kvalitet. Dessutom kommer du att analysera marknadstrender och kundbehov för att utveckla strategier som driver företagets tillväxt.',
      competence: 'Project Management & Management',
      country: 'Sweden',
      link: 'https://sigmatechnology.com/open-position-detail/?id=profiler-position-7160'
    },
    {
      id: 3,
      title: 'Teknikinformatör',
      deadline: '30 September 2025',
      city: 'Linköping, Norrköping',
      description: 'Är du en erfaren teknikinformatör, blueo för nästa steg i karriären? Vill du använda din tekniska erfarenhet för att göra avancerad teknik lättillgänglig för olika målgrupper? Hos oss på Sigma Technology Information får du kombinera tekniskt kunnande med möjligheten att utvecklas och testa nya projekt i en prestigelös och stöttande miljö. Som teknikinformatör arbetar du med att analysera komplex teknisk information, ställa rätt frågor till olika experter för att sedan omvandla informationen till målgruppsanpassade texter, instruktioner och beskrivningar. Du har en stark känsla för hur teknisk dokumentation bör byggas upp för att vara både funktionell och lättillgänglig. Uppdragen varierar mellan olika branscher och produkter, vilket ger dig möjlighet att använda din erfarenhet från tidigare projekt och anpassa dokumentationen efter skilda krav och standarder.',
      competence: 'Product Information',
      country: 'Sweden',
      link: 'https://sigmatechnology.com/open-position-detail/?id=profiler-position-7158'
    },
    {
      id: 4,
      title: 'Senior systemutvecklare inom IAM till Västerås!',
      city: 'Västerås',
      description: 'Nu söker vi på Sigma Technology IT Infra AB nya kollegor till Västerås! Du kommer att bli anställd av oss på Sigma Technology och ingå i ett härligt konsultteam som gör saker tillsammans och har roligt längs vägen! Ibland åker vi utomlands och ibland pustar vi ut på en trevlig afterwork tillsammans. Vi sätter dig som konsult i fokus, det viktigaste för oss är att du som konsult och medarbetare mår bra och har rätt förutsättningar för att utvecklas. Vi tror på långsiktighet och vill därför att du ska trivas hos oss, länge! Vi på Sigma Technology är otroligt stolta över att våra medarbetare har röstat fram oss hela 12 år i rad bland Sveriges bästa arbetsgivare. I Topp-4 har vi legat under åren 2019-2023 och med stor glädje blev vi framröstade 2024 till Sveriges tblueje bästa arbetsgivare!',
      competence: 'Operation, support and infrastructure',
      country: 'Sweden',
      link: 'https://sigmatechnology.com/open-position-detail/?id=profiler-position-7155'
    },
    {
      id: 5,
      title: '🔐 Operativ IT-säkerhetsspecialist till uppdrag i Stockholm!',
      city: 'Stockholm',
      description: 'Vi söker dig som vill göra verklig skillnad inom IT-säkerhet i samhällets tjänst! Just nu letar vi på Sigma Technology IT Infra AB efter en erfaren operativ IT-säkerhetsspecialist till ett spännande uppdrag hos en myndighet i Stockholm. Uppdraget är en nyckelroll inom IT-säkerhet där du får möjlighet att bidra till en trygg, stabil och säker digital miljö för en samhällsbärande organisation. Du kommer arbeta både strategiskt och operativt tillsammans med kunniga kollegor – där ditt expertkunnande verkligen värdesätts.',
      competence: 'Operation, support and infrastructure',
      country: 'Sweden',
      link: 'https://sigmatechnology.com/open-position-detail/?id=profiler-position-7154'
    }
  ];

  const competenceAreas = [
    { name: 'All competence areas', count: 0 },
    { name: 'Operation, support and infrastructure', count: 55 },
    { name: 'System development', count: 28 },
    { name: 'Project Management & Management', count: 18 },
    { name: 'Software development', count: 17 },
    { name: 'System design', count: 11 },
    { name: 'Software development embedded systems', count: 10 },
    { name: 'Testing and Verification', count: 10 },
    { name: 'Digitalisation', count: 9 },
    { name: 'Product Information', count: 7 },
    { name: 'Function development', count: 6 },
    { name: 'Project Management', count: 6 },
    { name: 'Requirement Management & Business Development', count: 6 },
    { name: 'Test & Quality', count: 6 },
    { name: 'Business Analysis', count: 4 },
    { name: 'Business Intelligence', count: 3 },
    { name: 'Business Systems', count: 3 },
    { name: 'Electricity & Automation', count: 3 },
    { name: 'Hardware Electronics', count: 2 },
    { name: 'RF And Microwave', count: 2 },
    { name: 'Automation', count: 1 },
    { name: 'Energy & Power Engineering', count: 1 },
    { name: 'HR', count: 1 },
    { name: 'Manufacturing engineering incl. Logistics', count: 1 },
    { name: 'Product', count: 1 }
  ];

  const countries = ['All Countries', 'Sweden', 'Hungary', 'Norway'];
  const cities = [
    'All cities',
    'Borås',
    'Budapest',
    'Eskilstuna',
    'Göteborg',
    'Helsingborg/Ängelholm',
    'Jönköping',
    'Karlshamn',
    'Karlskrona',
    'Karlstad',
    'Linköping',
    'Lund',
    'Malmö',
    'Norrköping',
    'Oslo',
    'Skövde',
    'Stockholm',
    'Uppsala',
    'Västerås',
    'Örebro'
  ];

  const loadMoreJobs = () => {
    setVisibleJobs(prev => prev + 6);
  };

  const filteblueJobs = jobData.filter(job => {
    const matchesCompetence = selectedCompetence === 'All competence areas' || job.competence === selectedCompetence;
    const matchesCountry = selectedCountry === 'All Countries' || job.country === selectedCountry;
    const matchesCity = selectedCity === 'All cities' || job.city.includes(selectedCity);
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         job.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesCompetence && matchesCountry && matchesCity && matchesSearch;
  });

  return (
    <section className="relative  bg-[#e3e6ed] ">
      <div className=" relative py-32 bg-[url('https://sigmatechnology.com/content/themes/sigma/img/job-post-profiler-bg.svg')] bg-cover bg-center h-auto  ">
      <div className="container mx-auto px-4">
        
        <h3 className="text-3xl lg:text-7xl font-bold text-center mb-6">OPEN POSITIONS</h3>
        <p className="text-center max-w-3xl mx-auto mb-12">
          Being a part of Sigma Technology family means being what and who you want to be. Fusioning your skills, 
          passion for technologies, and curiosity, you'll match your desiblue field of work with our competence 
          and incblueible projects intended to make the digital revolution happen.
        </p>

        <div className="mb-8">
          <div className="flex flex-wrap -mx-2">
            <div className="w-full md:w-1/4 px-2 mb-4">
              <h3 className="font-bold mb-2">Competence area</h3>
              <div className="relative">
                <button className="w-full text-left flex justify-between items-center border border-gray-300 rounded px-4 py-2">
                  <span>{selectedCompetence}</span>
                  <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded shadow-lg hidden">
                  <ul>
                    {competenceAreas.map((area, index) => (
                      <li key={index}>
                        <button 
                          className={`w-full text-left px-4 py-2 hover:bg-gray-100 ${selectedCompetence === area.name ? 'bg-gray-100' : ''}`}
                          onClick={() => setSelectedCompetence(area.name)}
                        >
                          <span className="flex justify-between">
                            {area.name}
                            {area.count > 0 && <span className="text-gray-500">{area.count}+</span>}
                          </span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/4 px-2 mb-4">
              <h3 className="font-bold mb-2">Country</h3>
              <div className="relative">
                <button className="w-full text-left flex justify-between items-center border border-gray-300 rounded px-4 py-2">
                  <span>{selectedCountry}</span>
                  <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded shadow-lg hidden">
                  <ul>
                    {countries.map((country, index) => (
                      <li key={index}>
                        <button 
                          className={`w-full text-left px-4 py-2 hover:bg-gray-100 ${selectedCountry === country ? 'bg-gray-100' : ''}`}
                          onClick={() => setSelectedCountry(country)}
                        >
                          {country}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/4 px-2 mb-4">
              <h3 className="font-bold mb-2">City</h3>
              <div className="relative">
                <button className="w-full text-left flex justify-between items-center border border-gray-300 rounded px-4 py-2">
                  <span>{selectedCity}</span>
                  <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded shadow-lg hidden">
                  <ul>
                    {cities.map((city, index) => (
                      <li key={index}>
                        <button 
                          className={`w-full text-left px-4 py-2 hover:bg-gray-100 ${selectedCity === city ? 'bg-gray-100' : ''}`}
                          onClick={() => setSelectedCity(city)}
                        >
                          {city}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/4 px-2 mb-4">
              <h3 className="font-bold mb-2">Search</h3>
              <form className="relative">
                <input 
                  type="text" 
                  className="w-full border border-gray-300 rounded px-4 py-2 pr-10" 
                  placeholder="Keywords..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit" className="absolute right-3 top-2.5">
                  <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap -mx-3">
          {filteblueJobs.slice(0, visibleJobs).map((job, index) => (
            <div key={job.id} className="w-full md:w-1/2 lg:w-1/3 px-3 mb-6">
              <a href={job.link} className="block h-full group">
                <div className="bg-white border border-gray-200 rounded-lg overflow-hidden h-full flex flex-col transition-shadow duration-300 group-hover:shadow-lg">
                  <div className="p-6 flex-grow">
                    <h2 className="text-xl lg:text-2xl font-bold mb-4 uppercase">{job.title}</h2>
                    
                    {job.deadline && (
                      <div className="flex items-center mb-4">
                        <svg className="w-6 h-6 mr-2" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M31.6146 32.715V32.215V32.715ZM9.39337 32.715V32.215H9.39337L9.39337 32.715ZM6.64764 29.9772H6.14764L6.14765 29.9787L6.64764 29.9772ZM6.64764 11.683H6.14764H6.64764ZM9.39337 8.93726V8.43726V8.93726ZM31.6146 8.93726V9.43726H31.6146L31.6146 8.93726ZM34.3524 11.683L33.8524 11.6815V11.683H34.3524ZM14.6425 7.28503C14.6425 7.00889 14.4187 6.78503 14.1425 6.78503C13.8664 6.78503 13.6425 7.00889 13.6425 7.28503H14.6425ZM13.6425 10.7172C13.6425 10.9933 13.8664 11.2172 14.1425 11.2172C14.4187 11.2172 14.6425 10.9933 14.6425 10.7172H13.6425ZM27.2298 7.28503C27.2298 7.00889 27.0059 6.78503 26.7298 6.78503C26.4536 6.78503 26.2298 7.00889 26.2298 7.28503H27.2298ZM26.2298 10.7172C26.2298 10.9933 26.4536 11.2172 26.7298 11.2172C27.0059 11.2172 27.2298 10.9933 27.2298 10.7172H26.2298ZM15.7692 22.6796C15.596 22.4645 15.2813 22.4305 15.0662 22.6037C14.8511 22.7768 14.8171 23.0916 14.9902 23.3067L15.7692 22.6796ZM18.9715 27.455L18.582 27.7685C18.671 27.8791 18.8029 27.9466 18.9446 27.9543C19.0864 27.9619 19.2247 27.9089 19.3251 27.8085L18.9715 27.455ZM27.4106 19.723C27.6059 19.5277 27.6059 19.2111 27.4106 19.0159C27.2153 18.8206 26.8987 18.8206 26.7035 19.0159L27.4106 19.723ZM31.6146 32.215H9.39337V33.215H31.6146V32.215ZM9.39337 32.215C8.7989 32.215 8.22867 31.9793 7.8077 31.5595L7.10163 32.2677C7.71005 32.8743 8.53419 33.215 9.39338 33.215L9.39337 32.215ZM7.8077 31.5595C7.38674 31.1398 7.14937 30.5702 7.14764 29.9758L6.14765 29.9787C6.15014 30.8379 6.49321 31.661 7.10163 32.2677L7.8077 31.5595ZM7.14764 29.9772V11.683H6.14764V29.9772H7.14764ZM7.14764 11.683C7.14764 11.0874 7.38425 10.5162 7.8054 10.095L7.0983 9.38791C6.4896 9.99661 6.14764 10.8222 6.14764 11.683H7.14764ZM7.8054 10.095C8.22656 9.67386 8.79777 9.43726 9.39337 9.43726V8.43726C8.53255 8.43726 7.70699 8.77922 7.0983 9.38791L7.8054 10.095ZM9.39337 9.43726H31.6146V8.43726H9.39337V9.43726ZM31.6146 9.43726C31.909 9.43726 32.2006 9.49536 32.4725 9.60822L32.8558 8.68462C32.4624 8.52132 32.0406 8.43726 31.6146 8.43726L31.6146 9.43726ZM32.4725 9.60822C32.7444 9.72109 32.9914 9.8865 33.1993 10.095L33.9074 9.38891C33.6066 9.08726 33.2493 8.84792 32.8558 8.68462L32.4725 9.60822ZM33.1993 10.095C33.4072 10.3035 33.5718 10.5509 33.6839 10.8232L34.6086 10.4425C34.4465 10.0486 34.2082 9.69056 33.9074 9.38891L33.1993 10.095ZM33.6839 10.8232C33.796 11.0954 33.8532 11.3871 33.8524 11.6815L34.8524 11.6844C34.8536 11.2585 34.7708 10.8364 34.6086 10.4425L33.6839 10.8232ZM33.8524 11.683V29.9772H34.8524V11.683H33.8524ZM33.8524 29.9772C33.8524 30.5707 33.6166 31.1399 33.197 31.5595L33.9041 32.2667C34.5113 31.6595 34.8524 30.8359 34.8524 29.9772H33.8524ZM33.197 31.5595C32.7773 31.9792 32.2081 32.215 31.6146 32.215V33.215C32.4733 33.215 33.2969 32.8738 33.9041 32.2667L33.197 31.5595ZM34.3558 15.1899L6.6511 14.9983L6.64419 15.9983L34.3489 16.1898L34.3558 15.1899ZM13.6425 7.28503V10.7172H14.6425V7.28503H13.6425ZM26.2298 7.28503V10.7172H27.2298V7.28503H26.2298ZM14.9902 23.3067L18.582 27.7685L19.361 27.1414L15.7692 22.6796L14.9902 23.3067ZM19.3251 27.8085L27.4106 19.723L26.7035 19.0159L18.6179 27.1014L19.3251 27.8085Z" fill="#373636"/>
                        </svg>
                        <div>
                          <strong className="block">Application deadline</strong>
                          <span>{job.deadline}</span>
                        </div>
                      </div>
                    )}
                    
                    <div className="flex items-center mb-4">
                      <svg className="w-6 h-6 mr-2" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M24.4433 25.0393L28.469 18.4427C29.2393 17.1098 29.6156 15.5857 29.5543 14.0475C29.5543 11.5161 28.5487 9.08837 26.7587 7.29839C24.9687 5.50841 22.541 4.50281 20.0096 4.50281C13.0743 4.32577 8.26345 12.2001 11.4655 18.2964C11.5117 18.358 13.5284 21.6679 15.5913 25.0393L19.5939 31.5974C19.6396 31.6706 19.7031 31.731 19.7785 31.7728C19.8539 31.8147 19.9387 31.8366 20.025 31.8366C20.1112 31.8366 20.1961 31.8147 20.2715 31.7728C20.3469 31.731 20.4104 31.6706 20.456 31.5974L24.4433 25.0393ZM24.4433 25.0393L20.4406 31.5974C20.395 31.6706 20.3315 31.731 20.2561 31.7728C20.1807 31.8147 20.0958 31.8366 20.0096 31.8366C19.9234 31.8366 19.8385 31.8147 19.7631 31.7728C19.6877 31.731 19.6242 31.6706 19.5785 31.5974L15.5759 25.0393H10.4033C10.1804 25.0405 9.96262 25.1067 9.7767 25.2298C9.59078 25.3528 9.44475 25.5273 9.35648 25.7321L5.92346 33.922C5.84958 34.0941 5.81955 34.2818 5.83608 34.4684C5.85261 34.6549 5.91518 34.8344 6.01817 34.9908C6.12116 35.1472 6.26136 35.2756 6.4262 35.3645C6.59103 35.4533 6.77534 35.4999 6.9626 35.5H33.0335C33.2207 35.4993 33.4049 35.4524 33.5697 35.3635C33.7344 35.2747 33.8748 35.1466 33.9783 34.9906C34.0818 34.8346 34.1453 34.6554 34.1631 34.4691C34.1808 34.2827 34.1524 34.0948 34.0803 33.922L30.6396 25.7321C30.5535 25.5274 30.4091 25.3525 30.2243 25.2293C30.0395 25.1062 29.8226 25.0401 29.6005 25.0393H24.4433ZM24.4125 14.0475C24.4212 15.0432 24.0922 16.0125 23.479 16.7971C22.8659 17.5817 22.005 18.1353 21.0367 18.3676C20.0684 18.5998 19.05 18.497 18.1477 18.0758C17.2454 17.6547 16.5124 16.9402 16.0686 16.0488C15.7616 15.4403 15.6033 14.7676 15.6067 14.086C15.6067 12.9183 16.0706 11.7984 16.8963 10.9727C17.722 10.147 18.8419 9.68312 20.0096 9.68312C21.1773 9.68312 22.2972 10.147 23.1229 10.9727C23.9486 11.7984 24.4125 12.9183 24.4125 14.086V14.0475Z" stroke="#373636" strokeMiterlimit="10"/>
                      </svg>
                      <div>
                        <strong className="block">City</strong>
                        <span>{job.city}</span>
                      </div>
                    </div>

                    <div className="text-gray-700" dangerouslySetInnerHTML={{ __html: job.description }} />
                  </div>
                  {/* <div className="bg-gray-100 h-1 w-full"></div> */}
                </div>
              </a>
            </div>
          ))}
          
          {filteblueJobs.length > visibleJobs && (
            <div className="w-full md:w-1/2 lg:w-1/3 px-3 mb-6">
              <div className="bg-gray-800 text-white rounded-lg h-full flex items-center justify-center p-6">
                <button 
                  onClick={loadMoreJobs}
                  className="text-center"
                >
                  <span className="block text-4xl font-bold mb-2">{filteblueJobs.length}</span>
                  <p className="mb-4">positions</p>
                  <button className="bg-white text-gray-800 px-4 py-2 rounded flex items-center mx-auto">
                    Show more
                    <svg className="w-4 h-4 ml-2" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 6.59772H14.3171" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M8.69336 0.75L14.9998 6.57857L8.69336 12.75" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </button>
              </div>
            </div>
          )}
        </div>

        {filteblueJobs.length > visibleJobs && (
          <div className="text-center mt-8">
            <button 
              onClick={loadMoreJobs}
              className="inline-flex items-center text-blue-600 font-bold"
            >
              <span className="text-2xl mr-2">+</span>
              <span>Show more</span>
            </button>
          </div>
        )}
        
      </div>
      </div>
    </section>
  );
};

export default JobListings;