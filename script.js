js = r'''// The Winner School System - interactive features

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

// Open/close the mobile navigation menu.
if (menuToggle && navLinks)
    menuToggle.addEventListener"click", () =>
        t isOpen = n a vLinks.classList.toggle("open");
Toggle.setAttribute("aria-expanded", String(isOpen));
Toggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
Toggle.textContent = i s Open ? "✕" : "☰";


// Close the menu after choosing a navigation link.
navLinks.querySelectorAll("a").forEach((link) => 
        .addEventListener("click", () => {
            .classList.remove("open");
    le.setAttribute("aria-expanded", "false");
    le.setAttribute("aria-label", "Open menu");
    le.textContent = "☰";


}

// Keep the footer year current.
const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

// This static site does not have a server to store form submissions.
// Prepare an email draft instead, so enquiries are not silently lost.
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

if (contactForm)
    contactForm.addEventListener("submit", (event) =>
        t.preventDefault();

        t formData = n e w FormData(contactForm);
        t studentName = S t ring(formData.get("studentName") || "").trim();
        t phone = S t ring(formData.get("phone") || "").trim();
        t classChoice = S t ring(formData.get("classChoice") || "").trim();
        t message = S t ring(formData.get("message") || "").trim();

!stuentName || !phone || !classChoice) 
            formMessage) formMessage.textContent = " P lease complete all required fields.";
rn;
        

        t subject = e n codeURIComponent("School admission enquiry - " + studentName);
        t body = e n codeURIComponent("The Winner School System enquiry\n\n" + "Name: " + studentName + "\n" + "Phone: " + phone + "\n" + "Class of interest: " + classChoice + "\n" + "Message: " + (message || "Not provided"));

        pdate this email address to the school's real monitored email before publishing.
        t schoolEmail = " i nfo@thewinnerschoolsystem.com";

        formMessage) {
    Message.textContent = " O pening your email app with the enquiry. Please send the email to complete the enquiry.";


    ow.location.href = " m ailto:" + schoolEmail + "?subject=" + subject + "&body=" + body;

}

'''

readme = r'''THE WINNER SCHOOL SYSTEMWEBSITE
=======FILES - index.html : page structure and content - style.css : external styling and responsive layout - script.js : mobile menu,
current year,
and enquiry form email draft HOW TO PREVIEW 1. Keep all three files in the same folder. 2. Double-click index.html to open it in your browser. 3. Internet is only needed for the optional Google Fonts import in style.css. The page layout works without those fonts too. BEFORE PUBLISHING - Check the phone number and school address. - Verify that info@thewinnerschoolsystem.com is a real,
monitored email address. The contact form currently opens the visitor's email application; it does not
 save enquiries to a database. - Add your real school logo and genuine school photographs if desired. HOW TO PUBLISH FOR FREE WITH GITHUB PAGES 1. Sign up / sign in at https: //github.com/
2. Create a new public repository,
e.g. winner-school-website. 3. Upload index.html,
style.css,
and script.js to the repository's root.
 4. Open repository Settings ->Pages. 5. Under Build and deployment,
choose Deploy from a branch. 6. Choose branch main and folder /(root),
then Save. 7. Wait for the published link shown on the Pages settings screen. 8. Open that link to test the website on mobile and computer. A hosting URL may take a few minutes to become available. GitHub's interface
 can change;
follow the current Pages prompts if the labels differ. A custom domain is optional and usually costs extra. '''
(base/"index.html").write_text(html, encoding="utf-8") (base/"style.css").write_text(css, encoding="utf-8") (base/"script.js").write_text(js, encoding="utf-8") (base/"README.txt").write_text(readme, encoding="utf-8") zip_path=Path("/mnt/data/the_winner_school_website.zip") with zipfile.ZipFile(zip_path, "w", zipfile.ZIP_DEFLATED) as zf: for p in base.iterdir(): zf.write(p, arcname=p.name) print("Created files:") for p in base.iterdir(): print(p, p.stat().st_size) print("ZIP:", zip_path, zip_path.stat().st_sizee)