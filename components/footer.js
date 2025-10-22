// components/footer.js - Reusable Footer Component

function Footer({
  logo,
  description,
  portfolioLink,
  quickLinks = [],
  servicesLinks = [],
  contact = {},
  socialLinks = [],
  footerLinks = [],
  year = new Date().getFullYear(),
  brandColor = "rgba(5, 5, 143, 1)",
}) {
  return `
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap');
      .footer-font { font-family: 'Montserrat', sans-serif; }
      .footer-link { color: #A2A0FF; transition: color 0.2s; }
      .footer-link:hover { color: #ffffff; text-decoration: underline; }
      .footer-icon { color: rgba(255,255,255,0.5); transition: color 0.2s; }
      .footer-icon:hover { color: #fff; }
      .portfolio-btn {
        border: 1px solid white;
        color: #A2A0FF;
        transition: all 0.2s;
      }
      .portfolio-btn:hover {
        // background: #A2A0FF;
        // color: rgba(5, 5, 143, 1);
      }
      .footer-bottom-link { color: #A2A0FF; }
      .footer-bottom-link:hover { color: #fff; text-decoration: underline; }
    </style>
    
    <footer class="footer-font text-white pt-14 pb-6" style="background-color: ${brandColor};">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          
          <!-- Column 1: Logo & About -->
          <div class="flex flex-col gap-4">
            <img src="${logo}" alt="Moore Advice Logo" class="w-[250px] mb-2">
            <p class="text-[#A2A0FF] text-base leading-relaxed">${description}</p>
            
            <!-- Social Icons -->
            <div class="flex gap-5 mt-2">
              ${socialLinks
                .map(
                  (social) => `
                <a href="${social.url}" target="_blank" rel="noopener noreferrer" aria-label="${social.label}" class="footer-icon text-2xl">
                  ${social.icon}
                </a>
              `
                )
                .join("")}
            </div>
            
            <!-- Portfolio Button -->
            <a href="${portfolioLink}" class="portfolio-btn inline-flex items-center justify-center gap-2 rounded-lg py-3 px-6 font-medium mt-4 max-w-fit">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <rect x="3" y="3" width="7" height="7" rx="1" stroke-width="2"/>
                <rect x="14" y="3" width="7" height="7" rx="1" stroke-width="2"/>
                <rect x="3" y="14" width="7" height="7" rx="1" stroke-width="2"/>
                <rect x="14" y="14" width="7" height="7" rx="1" stroke-width="2"/>
              </svg>
              View Portfolio
            </a>
          </div>
          
          <!-- Column 2: Quick Links -->
          <div>
            <h3 class="font-semibold text-white mb-5 text-xl">Quick Links</h3>
            <ul class="flex flex-col gap-3">
              ${quickLinks
                .map(
                  (link) => `
                <li><a href="${link.url}" class="footer-link text-base">${link.text}</a></li>
              `
                )
                .join("")}
            </ul>
          </div>
          
          <!-- Column 3: Our Services -->
          <div>
            <h3 class="font-semibold text-white mb-5 text-xl">Our Services</h3>
            <ul class="flex flex-col gap-3">
              ${servicesLinks
                .map(
                  (link) => `
                <li><a href="${link.url}" class="footer-link text-base">${link.text}</a></li>
              `
                )
                .join("")}
            </ul>
          </div>
          
          <!-- Column 4: Contact US -->
          <div>
            <h3 class="font-semibold text-white mb-5 text-xl">Contact US</h3>
            <div class="flex flex-col gap-4 text-[#A2A0FF]">
              <!-- Address -->
              <div class="flex gap-3 items-start">
                <svg class="w-5 h-5 mt-0.5 flex-shrink-0 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
                <span class="text-base">${contact.address}</span>
              </div>
              
              <!-- Phone -->
              <div class="flex gap-3 items-center">
                <svg class="w-5 h-5 flex-shrink-0 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                <span class="text-base">${contact.phone}</span>
              </div>
              
              <!-- Email -->
              <div class="flex gap-3 items-center">
                <svg class="w-5 h-5 flex-shrink-0 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                <span class="text-base">${contact.email}</span>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Bottom Section -->
        <div class="mt-12 pt-8 border-t border-[#4444aa] text-center">
          <p class="text-[#A2A0FF] text-base mb-4">© ${year} Moore Advice. All rights reserved.</p>
          <div class="flex flex-wrap justify-center gap-6">
            ${footerLinks
              .map(
                (link) => `
              <a href="${link.url}" class="footer-bottom-link text-base">${link.text}</a>
            `
              )
              .join("")}
          </div>
        </div>
      </div>
    </footer>
  `;
}
