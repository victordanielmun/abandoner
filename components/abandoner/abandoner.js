/**
 * Template Name: abandoner - v1.0
 * Updated: 2024-04-16
 * Author: Lemonk Studio
 */

(function () {
  "use strict";

  /** example to show the abandoner pop please delete this */
  window.addEventListener("load", function () {
    abandoner();
  });


function abandoner() {
  
// Create the <aside> element
  let aside = document.createElement("aside");
  aside.id = "abandoner";
  aside.className = "abandoner-bg";

  // Destination URL for the link
  const linkUrl = "https://www.example.com";

  //Create the internal structure of the abandoner
  aside.innerHTML = `
      <div class="abandoner-body">
        <div class="abandoner-content">
          <div class="abandoner-exit-btn" id="closeabandoner">
            X
          </div>
                <div class="abandoner-text-container">
                  <h3>Don't forget to 
                    finish subscribing!</h3>
                  <h2>Get 30% off a 
                    <span class="abandoner-span">
                    Britannica Premium 
                    </span>
                    Membership when you finish subscribing.
                    </h2>
                  <a href="${linkUrl}" target="_blank" class="abandoner-button">Subscribe!</a>
                </div>
                <div class="abandoner-img-banner">
                  <img
                    src="assets/img/abandoner/banner.svg"
                    alt="abandoner-image-banner"
                  />
                </div>
          </div>
        </div>
      </div>`;

  // Add the abandoner to the end of the document body
  document.body.appendChild(aside);

  // Remove the aside when the close button is clicked
  let closeBtn = document.getElementById("closeabandoner");
    closeBtn.addEventListener("click", function() {
        aside.remove(); 
    });
  
}
})();
