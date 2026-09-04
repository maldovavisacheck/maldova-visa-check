// Scroll to check section
function scrollToCheck() {
    const checkSection = document.getElementById('check');
    checkSection.scrollIntoView({ behavior: 'smooth' });
}

// Form submission and visa status check
document.getElementById('visaForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const appId = document.getElementById('appId').value;
    const passport = document.getElementById('passport').value;
    const dob = document.getElementById('dob').value;
    const visaType = document.getElementById('visaType').value;
    const email = document.getElementById('email').value;
    
    // Validate inputs
    if (!appId || !passport || !dob || !visaType || !email) {
        alert('Please fill in all fields');
        return;
    }
    
    // Generate status based on application ID (simulated)
    const visaStatus = generateVisaStatus(appId, passport);
    
    // Display result
    displayResult(visaStatus, appId, passport, dob, visaType, email);
});

// Generate visa status based on application details
function generateVisaStatus(appId, passport) {
    // This is a simulation - in real system, this would query a database
    const lastDigit = parseInt(appId.slice(-1));
    const passportSum = passport.split('').reduce((sum, char) => sum + char.charCodeAt(0), 0);
    
    const statuses = [
        {
            status: 'Approved',
            statusClass: 'status-approved',
            message: 'Your visa application has been approved!',
            details: 'Your visa is ready for pickup at the nearest embassy.'
        },
        {
            status: 'Processing',
            statusClass: 'status-processing',
            message: 'Your application is being processed.',
            details: 'Your application is under review. Please check back soon for updates.'
        },
        {
            status: 'Pending Review',
            statusClass: 'status-pending',
            message: 'Your application is pending review.',
            details: 'Additional documents may be required. Please check your email for updates.'
        },
        {
            status: 'Approved',
            statusClass: 'status-approved',
            message: 'Your visa application has been approved!',
            details: 'You will receive your visa within 2-3 business days.'
        },
        {
            status: 'Processing',
            statusClass: 'status-processing',
            message: 'Your application is being processed.',
            details: 'Expected processing time: 5-7 business days.'
        }
    ];
    
    return statuses[lastDigit % statuses.length];
}

// Display result on page
function displayResult(visaStatus, appId, passport, dob, visaType, email) {
    const resultSection = document.getElementById('resultSection');
    const resultContent = document.getElementById('resultContent');
    
    // Format date
    const dateObj = new Date(dob);
    const formattedDOB = dateObj.toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    });
    
    // Get current date
    const currentDate = new Date().toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    });
    
    // Create result HTML
    const resultHTML = `
        <div style="text-align: center;">
            <h3>Visa Status Result</h3>
            <div class="status-badge ${visaStatus.statusClass}">
                ${visaStatus.status}
            </div>
            <p style="font-size: 1.1rem; margin: 15px 0; color: #333;">
                ${visaStatus.message}
            </p>
            <p style="color: #666; font-size: 0.95rem;">
                Last checked: ${currentDate}
            </p>
        </div>
        
        <div class="result-details">
            <h4 style="color: var(--primary-color); margin-bottom: 15px;">Application Details:</h4>
            <p>
                <span class="detail-label">Application ID:</span>
                <strong>${appId}</strong>
            </p>
            <p>
                <span class="detail-label">Passport Number:</span>
                <strong>${maskPassport(passport)}</strong>
            </p>
            <p>
                <span class="detail-label">Date of Birth:</span>
                <strong>${formattedDOB}</strong>
            </p>
            <p>
                <span class="detail-label">Visa Type:</span>
                <strong>${capitalizeVisaType(visaType)}</strong>
            </p>
            <p>
                <span class="detail-label">Notification Email:</span>
                <strong>${maskEmail(email)}</strong>
            </p>
            
            <div style="margin-top: 20px; padding-top: 20px; border-top: 2px solid var(--border-color);">
                <h4 style="color: var(--primary-color); margin-bottom: 10px;">Status Details:</h4>
                <p style="color: #555; line-height: 1.8;">
                    ${visaStatus.details}
                </p>
            </div>
            
            <div style="margin-top: 20px; padding: 15px; background-color: #f0f8ff; border-radius: 5px; border-left: 4px solid var(--secondary-color);">
                <p style="margin: 0; color: #0055b8;">
                    <strong>Note:</strong> For any inquiries about your application, please contact our support team via email or phone.
                </p>
            </div>
        </div>
    `;
    
    resultContent.innerHTML = resultHTML;
    resultSection.style.display = 'block';
    
    // Scroll to result
    resultSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Mask passport number for privacy
function maskPassport(passport) {
    if (passport.length < 4) return passport;
    return passport.slice(0, 2) + '*'.repeat(passport.length - 4) + passport.slice(-2);
}

// Mask email for privacy
function maskEmail(email) {
    const parts = email.split('@');
    const namePart = parts[0];
    const domainPart = parts[1];
    
    if (namePart.length < 3) {
        return '*'.repeat(namePart.length) + '@' + domainPart;
    }
    
    return namePart[0] + '*'.repeat(namePart.length - 2) + namePart[namePart.length - 1] + '@' + domainPart;
}

// Capitalize visa type
function capitalizeVisaType(visaType) {
    const types = {
        'tourist': 'Tourist Visa',
        'student': 'Student Visa',
        'work': 'Work Visa',
        'business': 'Business Visa',
        'family': 'Family Visa',
        'retirement': 'Retirement Visa'
    };
    return types[visaType] || visaType;
}

// Add input validation in real-time
document.getElementById('appId').addEventListener('input', function() {
    this.value = this.value.toUpperCase();
});

document.getElementById('passport').addEventListener('input', function() {
    this.value = this.value.toUpperCase();
});

document.getElementById('email').addEventListener('input', function() {
    this.value = this.value.toLowerCase();
});

// Clear result when form is reset
document.getElementById('visaForm').addEventListener('reset', function() {
    document.getElementById('resultSection').style.display = 'none';
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Add loading state to submit button
const submitBtn = document.querySelector('.submit-btn');
const originalText = submitBtn.textContent;

submitBtn.addEventListener('click', function() {
    this.textContent = 'Checking...';
    this.disabled = true;
    
    // Simulate processing time
    setTimeout(() => {
        this.textContent = originalText;
        this.disabled = false;
    }, 1500);
});