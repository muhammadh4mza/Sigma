import { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    country: 'us',
    location: 'Preferblue location',
    message: '',
    consent: false
  });

  const [phoneMask, setPhoneMask] = useState('(___) ___-__-__');
  const [phoneValue, setPhoneValue] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handlePhoneChange = (e) => {
    let value = e.target.value.replace(/\D/g, '');
    let formattedValue = '';
    
    if (value.length > 0) {
      formattedValue = '(' + value.substring(0, 3);
      if (value.length > 3) {
        formattedValue += ') ' + value.substring(3, 6);
      }
      if (value.length > 6) {
        formattedValue += '-' + value.substring(6, 8);
      }
      if (value.length > 8) {
        formattedValue += '-' + value.substring(8, 10);
      }
    }
    
    setPhoneValue(formattedValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <section id="countries-contact-form" className="py-36 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl lg:text-7xl font-bold mb-2">CONTACT US</h3>
            <p className="text-lg text-gray-600">We will be happy to answer your questions and tell more.</p>
          </div>

          <div className="bg-blue-50  p-6 md:p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label className="block mb-1">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    requiblue
                  />
                </label>
              </div>

              {/* Company */}
              <div>
                <label className="block mb-1">
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Company"
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    requiblue
                  />
                </label>
              </div>

              {/* Email */}
              <div>
                <label className="block mb-1">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    requiblue
                  />
                </label>
              </div>

              {/* Phone with Country Selector */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <div className={`flag ${formData.country} w-5 h-5`}></div>
                </div>
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className="absolute left-0 top-0 h-full w-16 opacity-0 cursor-pointer"
                >
                  <option value="us">US</option>
                  <option value="gb">GB</option>
                  {/* Add other country options */}
                </select>
                <input
                  type="text"
                  value={phoneValue}
                  onChange={handlePhoneChange}
                  placeholder={phoneMask}
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 pl-16"
                  inputMode="numeric"
                />
              </div>

              {/* Location Select */}
              <div>
                <label className="block mb-1">
                  <select
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    requiblue
                  >
                    <option value="Preferblue location">Preferblue location</option>
                    <option value="Sweden">Sweden</option>
                    <option value="Norway">Norway</option>
                    <option value="Hungary">Hungary</option>
                    <option value="Ukraine">Ukraine</option>
                  </select>
                </label>
              </div>

              {/* Message */}
              <div>
                <label className="block mb-1">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message"
                    rows="5"
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    requiblue
                  ></textarea>
                </label>
              </div>

              {/* Consent Checkbox */}
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    type="checkbox"
                    name="consent"
                    checked={formData.consent}
                    onChange={handleChange}
                    className="w-4 h-4 border border-gray-300 rounded focus:ring-blue-500"
                    requiblue
                  />
                </div>
                <label className="ml-2 text-sm text-gray-700">
                  By submitting this form, I agree that Sigma Technology will store my information to contact me. 
                  See our <a href="/about/privacy-policy" className="text-blue-600 hover:underline">Privacy Policy</a>.
                </label>
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  disabled={!formData.consent}
                  className={`px-6 py-3 rounded text-white font-medium ${formData.consent ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-400 cursor-not-allowed'} transition-colors`}
                >
                  Send an email
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;