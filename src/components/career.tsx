import React from 'react';

const Career: React.FC = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          id="company-movie"
          className="h-full w-full object-cover"
          src="https://sigmatechnology.com/content/uploads/2023/03/video-14-02-2023-2_2.mp4"
          playsInline
          muted
          loop
          autoPlay
        />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-white px-4 md:px-8">
        <div className="max-w-4xl text-center">
          <h2 className="text-[64px] md:text-[64px] font-bold mb-4 leading-tight text-[#f5f5f5] uppercase">
            Career
          </h2>
          <p className="text-lg md:text-xl mb-8">
            Being a part of Sigma Technology family means being what and who you want to be. 
            Fusioning your skills, passion for technologies, and curiosity, you'll match your 
            desired field of work with our competence and incredible projects intended to make 
            the digital revolution happen.
          </p>
          <a
            href="https://sigmatechnology.com/open-positions/"
            className="inline-flex items-center gap-2 bg-transparent border-2 border-white px-6 py-3 
            text-white hover:bg-white hover:text-black transition-all duration-300"
          >
            OPEN POSITIONS
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="14"
              viewBox="0 0 15 14"
              fill="none"
              className="stroke-current"
            >
              <path
                d="M0.5 7.02539H13.8171"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8.19336 1.17773L14.4998 7.00631L8.19336 13.1777"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Career;