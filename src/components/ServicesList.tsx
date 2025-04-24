import React from 'react';

const services = [
  {
    category: "DIGITAL & ENGINEERING",
    items: [
      "Software Development",
      "Embedded Systems Development",
      "AI Development and Consulting",
      "DevOps & Infrastructure",
      "Digital strategy and transformation",
      "Cloud Services",
      "Test & Quality",
      "UX/UI, accessibility Services"
    ]
  },
  {
    category: "BUSINESS SOLUTIONS",
    items: [
      "Digital Transformation",
      "IT Consulting",
      "Enterprise Solutions",
      "Data Analytics",
      "Process Automation"
    ]
  },
  {
    category: "PRODUCT INFORMATION",
    items: [
      "Technical Documentation",
      "Content Management",
      "Translation Services",
      "UX Writing",
      "API Documentation"
    ]
  }
];

const ServicesList = () => {
  return (
    <div className="services-list">
      {services.map((service, index) => (
        <div key={index} className="service-category">
          <h3 className="service-category-title">{service.category}</h3>
          <ul className="service-items">
            {service.items.map((item, itemIndex) => (
              <li key={itemIndex} className="service-item">{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ServicesList;