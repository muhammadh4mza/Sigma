import React from 'react';

const Footer = () => {
  return (
    <footer id="footer" className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8 mb-8">
          {/* Left Column */}
          <div className="w-full md:w-1/2">
            <div className="mb-6">
              <div className="text-2xl lg:text-3xl uppercase font-bold mb-4">Engineering the Digital Revolution</div>
              <div className="text-gray-300">
                <p className="mb-4">
                  Sigma Technology Group, part of the Sigma Group, is a privately-owned global technology consulting company with operations in Sweden, Hungary, China, Norway, Germany, Kosovo and Ukraine, and global delivery to Europe, the USA, and Asia. Sigma Technology Group offers cutting-edge expertise in software development, product information, embedded systems design & development, digital solutions, and IT infrastructure with expert consultants, offshore delivery, and development teams.
                </p>
                <a href="/contact/" className="inline-block bg-[#dc2626] text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-[#dc2626] transition-colors duration-300">Contact us</a>
              </div>
            </div>
          </div>

          {/* Middle Column - The Sigma Group */}
          <div className="w-full md:w-1/4">
            <div className="mb-6">
              <div className="text-xl font-bold mb-4">THE SIGMA GROUP</div>
              <ul className="space-y-2">
                <li><a href="/" className="text-gray-300 hover:text-white">Sigma Technology</a></li>
                <li><a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">Sigma AB</a></li>
                <li><a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">Sigma Civil</a></li>
                <li><a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">Sigma Connectivity</a></li>
                <li><a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">Sigma Industry East North</a></li>
                <li><a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">Sigma Industry South</a></li>
                <li><a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">Sigma Industry West</a></li>
                <li><a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">Sigma Software</a></li>
                <li><a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">Danir AB (Sigma Group owner)</a></li>
              </ul>
            </div>
          </div>

          {/* Right Column - Shortcuts */}
          <div className="w-full md:w-1/4">
            <div className="mb-6">
              <div className="text-xl font-bold mb-4">SHORTCUTS</div>
              <ul className="space-y-2">
                <li><a href="/about/" className="text-gray-300 hover:text-white">About us</a></li>
                <li><a href="/about/sustainability/" className="text-gray-300 hover:text-white">Sustainability</a></li>
                <li><a href="/services/" className="text-gray-300 hover:text-white">Our services</a></li>
                <li><a href="/companies/" className="text-gray-300 hover:text-white">Companies</a></li>
                <li><a href="/insights-library/" className="text-gray-300 hover:text-white">Insights library</a></li>
                <li><a href="/open-positions/" className="text-gray-300 hover:text-white">Open positions</a></li>
                <li><a href="/career/" className="text-gray-300 hover:text-white">Career</a></li>
                <li><a href="/media/" className="text-gray-300 hover:text-white">Media resources</a></li>
                <li><a href="/content/uploads/2024/04/Code-of-Conduct-and-Business-Ethics-1.pdf?x25367" className="text-gray-300 hover:text-white">Code of conduct</a></li>
                <li><a href="https://sigmatechnology.com/about/privacy-policy/" className="text-gray-300 hover:text-white">Privacy policy</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Partner Logos */}
        <div className="flex flex-wrap gap-6 items-center justify-center mb-8">
          <img src="https://sigmatechnology.com/content/uploads/2023/08/05_3.svg?x25367" alt="" className="h-8" />
          <img src="https://sigmatechnology.com/content/uploads/2023/08/BMC.svg?x25367" alt="" className="h-8" />
          <img src="https://sigmatechnology.com/content/uploads/2023/08/AWS.svg?x25367" alt="" className="h-12" />
          <img src="https://sigmatechnology.com/content/uploads/2023/08/MS_sol_partner.svg?x25367" alt="" className="h-8" />
          <img src="https://sigmatechnology.com/content/uploads/2023/08/03.svg?x25367" alt="" className="h-12" />
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-700">
          <div className="mb-6 md:mb-0">
            <a href="/">
              <img 
                src="https://sigmatechnology.com/content/themes/sigma/img/SIGMA_Logo_NEG_2021_Tagline_RGB.svg?x25367" 
                alt="Sigma Expect a better tomorrow" 
                className="h-12"
              />
            </a>
          </div>
          
          <div className="flex gap-4">
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <svg width="24" height="24" viewBox="0 0 37 37" fill="currentColor">
                <path d="M14.4172 3.10977C18.1555 3.10977 18.5978 3.12422 20.0744 3.19146C21.4392 3.2537 22.1805 3.48154 22.674 3.67326C23.3275 3.92722 23.7937 4.23064 24.2839 4.72022C24.774 5.21035 25.0774 5.67659 25.3308 6.33011C25.5225 6.82358 25.7504 7.5649 25.8126 8.92972C25.8799 10.4057 25.8943 10.8486 25.8943 14.5868C25.8943 18.3251 25.8799 18.7675 25.8126 20.244C25.7504 21.6088 25.5225 22.3501 25.3308 22.8436C25.0769 23.4971 24.7734 23.9633 24.2839 24.4535C23.7937 24.9436 23.3275 25.247 22.674 25.5004C22.1805 25.6922 21.4392 25.92 20.0744 25.9822C18.5984 26.0495 18.1555 26.0639 14.4172 26.0639C10.679 26.0639 10.2361 26.0495 8.76011 25.9822C7.39529 25.92 6.65397 25.6922 6.1605 25.5004C5.50698 25.2465 5.04074 24.9431 4.55061 24.4535C4.06047 23.9633 3.75705 23.4971 3.50365 22.8436C3.31193 22.3501 3.08409 21.6088 3.02185 20.244C2.95461 18.768 2.94016 18.3251 2.94016 14.5868C2.94016 10.8486 2.95461 10.4062 3.02185 8.92972C3.08409 7.5649 3.31193 6.82358 3.50365 6.33011C3.75761 5.67659 4.06103 5.21035 4.55061 4.72022C5.04019 4.23008 5.50698 3.92666 6.1605 3.67326C6.65397 3.48154 7.39529 3.2537 8.76011 3.19146C10.2361 3.12422 10.679 3.10977 14.4172 3.10977ZM14.4172 0.587402C10.6151 0.587402 10.1383 0.603518 8.64508 0.67187C7.15522 0.739667 6.13716 0.976399 5.24691 1.32261C4.3261 1.68048 3.54533 2.15895 2.76733 2.9375C1.98878 3.71605 1.51032 4.49627 1.15244 5.41708C0.806233 6.30732 0.569501 7.32539 0.501704 8.81524C0.433352 10.3084 0.417236 10.7852 0.417236 14.5874C0.417236 18.3896 0.433352 18.8664 0.501704 20.3596C0.569501 21.8494 0.806233 22.8675 1.15244 23.7577C1.51032 24.6785 1.98878 25.4593 2.76733 26.2373C3.54588 27.0159 4.3261 27.4943 5.24691 27.8522C6.13716 28.1984 7.15522 28.4351 8.64508 28.5029C10.1383 28.5713 10.6151 28.5874 14.4172 28.5874C18.2194 28.5874 18.6962 28.5713 20.1894 28.5029C21.6793 28.4351 22.6973 28.1984 23.5876 27.8522C24.5084 27.4943 25.2891 27.0159 26.0671 26.2373C26.8457 25.4588 27.3242 24.6785 27.682 23.7577C28.0282 22.8675 28.265 21.8494 28.3328 20.3596C28.4011 18.8664 28.4172 18.3896 28.4172 14.5874C28.4172 10.7852 28.4011 10.3084 28.3328 8.81524C28.265 7.32539 28.0282 6.30732 27.682 5.41708C27.3242 4.49627 26.8457 3.71549 26.0671 2.9375C25.2886 2.15895 24.5084 1.68048 23.5876 1.32261C22.6973 0.976399 21.6793 0.739667 20.1894 0.67187C18.6962 0.603518 18.2194 0.587402 14.4172 0.587402Z"></path>
                <path d="M14.4172 7.39818C10.4467 7.39818 7.22857 10.6169 7.22857 14.5868C7.22857 18.5568 10.4472 21.7755 14.4172 21.7755C18.3872 21.7755 21.6059 18.5568 21.6059 14.5868C21.6059 10.6169 18.3872 7.39818 14.4172 7.39818ZM14.4172 19.2537C11.8399 19.2537 9.75094 17.1642 9.75094 14.5874C9.75094 12.0106 11.8404 9.92111 14.4172 9.92111C16.9941 9.92111 19.0835 12.0106 19.0835 14.5874C19.0835 17.1642 16.9941 19.2537 14.4172 19.2537Z"></path>
                <path d="M21.8904 8.79357C22.8182 8.79357 23.5703 8.04145 23.5703 7.11366C23.5703 6.18587 22.8182 5.43375 21.8904 5.43375C20.9626 5.43375 20.2105 6.18587 20.2105 7.11366C20.2105 8.04145 20.9626 8.79357 21.8904 8.79357Z"></path>
              </svg>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <svg width="24" height="24" viewBox="0 0 37 37" fill="currentColor">
                <path d="M18.9171 3.62842C10.9647 3.62842 4.51709 10.076 4.51709 18.0284C4.51709 25.2476 9.83549 31.2092 16.7643 32.2508V21.8444H13.2015V18.0596H16.7643V15.5408C16.7643 11.3708 18.7959 9.54082 22.2615 9.54082C23.9211 9.54082 24.7995 9.66442 25.2147 9.71962V13.0232H22.8507C21.3795 13.0232 20.8659 14.4188 20.8659 15.9908V18.0596H25.1775L24.5931 21.8444H20.8659V32.2808C27.8943 31.328 33.3171 25.3184 33.3171 18.0284C33.3171 10.076 26.8695 3.62842 18.9171 3.62842Z"></path>
              </svg>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <svg width="24" height="24" viewBox="0 0 37 37" fill="currentColor">
                <path d="M29.7171 4.82812H8.1171C6.7911 4.82812 5.7171 5.90213 5.7171 7.22813V28.8281C5.7171 30.1541 6.7911 31.2281 8.1171 31.2281H29.7171C31.0431 31.2281 32.1171 30.1541 32.1171 28.8281V7.22813C32.1171 5.90213 31.0431 4.82812 29.7171 4.82812ZM14.0619 26.4281H10.5219V15.0377H14.0619V26.4281ZM12.2559 13.4093C11.1147 13.4093 10.1919 12.4841 10.1919 11.3453C10.1919 10.2065 11.1159 9.28253 12.2559 9.28253C13.3935 9.28253 14.3187 10.2077 14.3187 11.3453C14.3187 12.4841 13.3935 13.4093 12.2559 13.4093ZM27.3219 26.4281H23.7843V20.8889C23.7843 19.5677 23.7603 17.8685 21.9447 17.8685C20.1027 17.8685 19.8195 19.3073 19.8195 20.7929V26.4281H16.2819V15.0377H19.6779V16.5941H19.7259C20.1987 15.6989 21.3531 14.7545 23.0751 14.7545C26.6595 14.7545 27.3219 17.1137 27.3219 20.1809V26.4281Z"></path>
              </svg>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <svg width="24" height="24" viewBox="0 0 37 37" fill="currentColor">
                <path d="M33.244 10.4683C32.9571 8.88486 31.5902 7.73174 30.004 7.37174C27.6302 6.8683 23.2371 6.5083 18.484 6.5083C13.7336 6.5083 9.27021 6.8683 6.89365 7.37174C5.31021 7.73174 3.94053 8.81174 3.65365 10.4683C3.36396 12.2683 3.07709 14.7883 3.07709 18.0283C3.07709 21.2683 3.36396 23.7883 3.72396 25.5883C4.01365 27.1717 5.38053 28.3249 6.96396 28.6849C9.48396 29.1883 13.804 29.5483 18.5571 29.5483C23.3102 29.5483 27.6302 29.1883 30.1502 28.6849C31.7337 28.3249 33.1005 27.2449 33.3902 25.5883C33.6771 23.7883 34.0371 21.1952 34.1102 18.0283C33.964 14.7883 33.604 12.2683 33.244 10.4683ZM14.5971 23.0683V12.9883L23.3805 18.0283L14.5971 23.0683Z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;