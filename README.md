# Maldova Visa Check Portal

A professional visa status checking website built with HTML, CSS, and JavaScript. This portal allows users to check their visa application status online.

## Features

✨ **Key Features:**

- 🔍 **Visa Status Checker** - Check your visa application status using Application ID and Passport Number
- 📋 **Multiple Visa Types** - Support for Tourist, Student, Work, Business, Family, and Retirement visas
- 📱 **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- 🎨 **Modern UI** - Professional and intuitive user interface
- ❓ **FAQ Section** - Comprehensive answers to common questions
- 📞 **Contact Information** - Direct contact details for support
- 🔐 **Data Privacy** - Personal information is masked in results

## Visa Types Supported

1. **Tourist Visa** - For travel and tourism purposes
2. **Student Visa** - For educational programs
3. **Work Visa** - For employment opportunities
4. **Business Visa** - For business meetings and conferences
5. **Family Visa** - For family reunification
6. **Retirement Visa** - For retirees

## How to Use

### Step 1: Enter Your Details
Fill in the following information:
- **Application ID** (e.g., MALDOVA-2024-001234)
- **Passport Number**
- **Date of Birth**
- **Visa Type**
- **Email Address**

### Step 2: Click "Check Status"
Submit the form to check your visa status.

### Step 3: View Your Status
Your application status will be displayed with:
- Current status (Approved, Processing, Pending Review, etc.)
- Application details
- Next steps

## Visa Status Meanings

| Status | Meaning |
|--------|------|
| **Approved** | Your visa has been approved and is ready for pickup |
| **Processing** | Your application is being reviewed by immigration officials |
| **Pending Review** | Your application is waiting for review |
| **Rejected** | Your application has been rejected (reasons provided) |

## Project Structure

```
maldova-visa-check/
├── index.html          # Main HTML file
├── style.css           # Styling and layout
├── script.js           # Interactive functionality
└── README.md           # This file
```

## Technologies Used

- **HTML5** - Semantic structure
- **CSS3** - Modern styling with animations
- **JavaScript (Vanilla)** - No frameworks required
- **Responsive Design** - Mobile-first approach

## Features Breakdown

### Frontend
- Clean, professional interface
- Form validation
- Real-time input formatting
- Smooth animations
- Privacy protection (email/passport masking)

### Functionality
- Dynamic status generation based on application details
- Form submission handling
- Real-time form reset
- Smooth page scrolling
- Mobile responsive navigation

## Browser Compatibility

✅ Chrome (Latest)
✅ Firefox (Latest)
✅ Safari (Latest)
✅ Edge (Latest)
✅ Mobile browsers (iOS Safari, Chrome Mobile)

## Installation & Deployment

### Local Development

1. Clone the repository:
```bash
git clone https://github.com/maldovavisacheck/maldova-visa-check.git
cd maldova-visa-check
```

2. Open `index.html` in your browser:
   - Double-click the file, or
   - Right-click → Open with → Choose your browser

### GitHub Pages Deployment

This repository is configured for automatic deployment via GitHub Pages.

**Access your live site at:**
```
https://maldovavisacheck.github.io/maldova-visa-check
```

To enable GitHub Pages:
1. Go to repository Settings
2. Navigate to "Pages" section
3. Select "main" branch as source
4. Click Save

## Customization

### Change Colors
Edit the CSS variables in `style.css`:
```css
:root {
    --primary-color: #003d7a;
    --secondary-color: #0055b8;
    --accent-color: #ff6b35;
    /* ... other colors ... */
}
```

### Add More Visa Types
Edit the `<select>` element in `index.html`:
```html
<option value="newtype">New Visa Type</option>
```

### Modify Contact Information
Update the contact section in `index.html` with your details.

## Features to Add (Future Enhancements)

- 📧 Email notifications
- 💾 Application history storage
- 🗣️ Multi-language support
- 🔔 Real-time status updates
- 📊 Application statistics
- 🎫 Visa appointment booking
- 📄 Document upload system
- 🤖 Chatbot support

## Support & Contact

For issues, questions, or feedback:

- 📧 Email: support@maldovavisa.gov.md
- 📞 Phone: +960 123-4567
- 🌐 Website: https://www.maldovavisa.gov.md

## License

This project is created for educational and demonstration purposes.

## Disclaimer

This is a sample visa checking portal. The visa statuses shown are simulated for demonstration purposes. For actual visa status inquiries, please visit the official Maldova Immigration website.

---

**Made with ❤️ for Maldova Immigration Services**

Last Updated: 2024