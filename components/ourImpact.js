// components/ourImpact.js - Pixel Perfect Our Impact Component

function OurImpact({
  backgroundImage = "img/download.webp",
  leftImage = "img/udey.png",
  title = "Our Impact",
  description = "Our commitment to excellence and innovation has driven tangible results across industries and organizations.",
  stats = [],
  ctaText = "Get in Touch",
  ctaUrl = "HowtoReachUs.html",
  brandColor = "rgba(5, 5, 143, 1)",
}) {
  return `
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap');
      
      /* Prevent horizontal overflow on mobile */
      html, body {
        overflow-x: hidden;
        max-width: 100%;
      }
      
      .impact-section {
        font-family: 'Montserrat', sans-serif;
        position: relative;
        background-color: #f9f9f9;
        overflow-x: hidden;
        width: 100%;
      }
      
      /* Background with white overlay */
      .impact-section::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-image: url('${backgroundImage}');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        opacity: 0.35;
        z-index: 0;
      }
      
      .impact-content {
        position: relative;
        z-index: 1;
        max-width: 100%;
        overflow-x: hidden;
      }
      
      .impact-image {
        border-radius: 20px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
      }
      
      .stat-number {
        font-size: 2.75rem;
        font-weight: 700;
        color: ${brandColor};
        line-height: 1.1;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      
      .stat-label {
        font-size: 1rem;
        font-weight: 500;
        color: #333;
        margin-top: 0.75rem;
        line-height: 1.4;
        word-wrap: break-word;
        overflow-wrap: break-word;
      }
      
      .impact-cta {
        background-color: ${brandColor};
        color: white;
        font-weight: 600;
        font-size: 1.125rem;
        padding: 0.875rem 2.25rem;
        border-radius: 8px;
        transition: all 0.3s ease;
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
        text-decoration: none;
        white-space: nowrap;
      }
      
      .impact-cta:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 20px rgba(5, 5, 143, 0.3);
      }

      .impact-cta:active {
        transform: translateY(0);
      }
      
      .impact-title {
        color: ${brandColor};
        font-size: 2.5rem;
        font-weight: 700;
        margin-bottom: 0.75rem;
        text-align: center;
      }
      
      .impact-description {
        color: #333;
        font-size: 24px;
        line-height: 1.6;
        margin-bottom: 2rem;
        text-align: left;
      }

      /* Ensure stats grid fills space properly */
      .stats-grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 1.5rem;
        margin-bottom: 2rem;
        width: 100%;
      }

      .stat-item {
        text-align: center;
        min-width: 0;
        overflow: hidden;
      }
      
      /* Tablet breakpoint */
      @media (max-width: 1024px) {
        .stat-number {
          font-size: 2.25rem;
        }
        
        .stat-label {
          font-size: 0.9rem;
          margin-top: 0.625rem;
        }
        
        .impact-title {
          font-size: 2rem;
        }
        
        .impact-description {
          font-size: 0.95rem;
        }

        .stats-grid {
          grid-template-columns: repeat(2, 1fr);
          gap: 1.25rem;
        }

        .impact-cta {
          font-size: 1rem;
          padding: 0.75rem 2rem;
        }
      }
      
      /* Mobile breakpoint */
      @media (max-width: 768px) {
        .stat-number {
          font-size: 1.875rem;
        }
        
        .stat-label {
          font-size: 0.85rem;
          margin-top: 0.5rem;
        }
        
        .impact-title {
          font-size: 1.75rem;
        }
        
        .impact-description {
          text-align: center;
          font-size: 0.9rem;
        }

        .stats-grid {
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
        }

        .impact-cta {
          font-size: 0.95rem;
          padding: 0.75rem 1.75rem;
        }
      }

      /* Small mobile breakpoint */
      @media (max-width: 480px) {
        .impact-section {
          padding-left: 0.75rem;
          padding-right: 0.75rem;
        }

        .impact-content {
          padding-left: 0.75rem;
          padding-right: 0.75rem;
        }

        .stat-number {
          font-size: 1.5rem;
        }
        
        .stat-label {
          font-size: 0.75rem;
          margin-top: 0.5rem;
        }
        
        .impact-title {
          font-size: 1.5rem;
          margin-bottom: 0.5rem;
        }
        
        .impact-description {
          font-size: 0.85rem;
          margin-bottom: 1.5rem;
          line-height: 1.5;
        }

        .stats-grid {
          grid-template-columns: repeat(2, 1fr);
          gap: 0.75rem;
          margin-bottom: 1.5rem;
        }

        .impact-cta {
          font-size: 0.875rem;
          padding: 0.625rem 1.5rem;
          width: 100%;
          max-width: 280px;
          justify-content: center;
        }

        .impact-image {
          border-radius: 12px;
        }
      }

      /* Extra small mobile breakpoint */
      @media (max-width: 375px) {
        .stat-number {
          font-size: 1.25rem;
        }
        
        .stat-label {
          font-size: 0.7rem;
          margin-top: 0.375rem;
        }

        .impact-title {
          font-size: 1.375rem;
        }

        .impact-description {
          font-size: 0.8rem;
        }

        .stats-grid {
          gap: 0.625rem;
        }

        .impact-cta {
          font-size: 0.8rem;
          padding: 0.5rem 1.25rem;
        }
      }
    </style>
    
    <section class="impact-section py-12 lg:py-16">
      <div class="impact-content max-w-[1300px] mx-auto px-6">
        <div class="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr]  items-center">
          
          <!-- Left Column: Image -->
          <div class="flex justify-center ">
            <img 
              src="${leftImage}" 
              alt="Team collaboration" 
              class="impact-image w-full max-w-[550px] h-auto object-cover"
            />
          </div>
          
          <!-- Right Column: Content -->
          <div class="flex flex-col">
            <h2 class="impact-title">${title}</h2>
            <p class="impact-description">${description}</p>
            
            <!-- Stats Grid -->
            <div class="stats-grid">
              ${stats
                .map(
                  (stat) => `
                <div class="stat-item">
                  <div class="stat-number">${stat.number}</div>
                  <div class="stat-label">${stat.label}</div>
                </div>
              `
                )
                .join("")}
            </div>
            
            <!-- CTA Button -->
            <div class="flex justify-center mt-1">
              <a href="${ctaUrl}" class="impact-cta">
                ${ctaText}
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                </svg>
              </a>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  `;
}
