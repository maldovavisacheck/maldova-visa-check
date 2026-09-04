// CAPTCHA generation
const captchaCodes = ['DEMZH', 'VXQRS', 'KPLMN', 'WXYZ9', 'BCDFG', 'HJKMN', 'PQRST', 'VWXYZ'];

function generateCaptcha() {
    return captchaCodes[Math.floor(Math.random() * captchaCodes.length)];
}

let currentCaptcha = generateCaptcha();

// Set initial captcha
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('captchaText').textContent = currentCaptcha;
});

// Refresh captcha
function refreshCaptcha() {
    currentCaptcha = generateCaptcha();
    document.getElementById('captchaText').textContent = currentCaptcha;
    document.getElementById('captcha').value = '';
    document.getElementById('captcha').focus();
}

// Form submission
document.getElementById('checkForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const fileNumber = document.getElementById('fileNumber').value.trim();
    const captchaInput = document.getElementById('captcha').value.trim().toUpperCase();
    
    // Validation
    if (!fileNumber) {
        alert('Please enter a file number');
        return;
    }
    
    if (!captchaInput) {
        alert('Please enter the verification code');
        return;
    }
    
    if (captchaInput !== currentCaptcha) {
        alert('Verification code is incorrect. Please try again.');
        document.getElementById('captcha').value = '';
        refreshCaptcha();
        return;
    }
    
    // Generate result
    const visaStatus = getVisaStatus(fileNumber);
    displayResult(visaStatus, fileNumber);
});

// Generate visa status
function getVisaStatus(fileNumber) {
    const fileHash = fileNumber.split('').reduce((sum, char) => sum + char.charCodeAt(0), 0);
    const rand = fileHash % 4;
    
    const statuses = [
        {
            status: 'Approved',
            statusClass: 'status-approved',
            message: 'Your visa has been approved!',
            details: 'Your visa is ready for collection at the embassy. Please bring your original passport and this notification.'
        },
        {
            status: 'Processing',
            statusClass: 'status-processing',
            message: 'Your application is being processed.',
            details: 'Your visa application is under review. Processing typically takes 5-10 business days. You will be notified once a decision has been made.'
        },
        {
            status: 'Pending',
            statusClass: 'status-pending',
            message: 'Your application is pending.',
            details: 'We are waiting for additional information. Please check your email for details on what documents are needed.'
        },
        {
            status: 'Rejected',
            statusClass: 'status-rejected',
            message: 'Your application has been rejected.',
            details: 'Unfortunately, your visa application could not be approved. You can contact the embassy for more information about the decision.'
        }
    ];
    
    return statuses[rand];
}

// Display result
function displayResult(visaStatus, fileNumber) {
    const resultSection = document.getElementById('resultSection');
    const resultContent = document.getElementById('resultContent');
    
    const currentDate = new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    
    const resultHTML = `
        <div class="result-title">Application Status</div>
        <div class="status-badge ${visaStatus.statusClass}">
            Status: ${visaStatus.status}
        </div>
        <p style="font-size: 1.05rem; margin-bottom: 20px; color: #333;">
            ${visaStatus.message}
        </p>
        
        <div class="result-details">
            <p>
                <span class="detail-label">File Number:</span>
                <strong>${maskFileNumber(fileNumber)}</strong>
            </p>
            <p>
                <span class="detail-label">Status:</span>
                <strong>${visaStatus.status}</strong>
            </p>
            <p>
                <span class="detail-label">Last Updated:</span>
                <strong>${currentDate}</strong>
            </p>
            
            <div style="margin-top: 25px; padding: 15px; background-color: #f5f5f5; border-left: 4px solid #0055b8; border-radius: 3px;">
                <h4 style="color: #003d7a; margin-bottom: 10px;">Details:</h4>
                <p style="color: #555; line-height: 1.8; margin: 0;">
                    ${visaStatus.details}
                </p>
            </div>
            
            <div style="margin-top: 20px; padding: 15px; background-color: #f9f9f9; border: 1px solid #ddd; border-radius: 3px;">
                <p style="margin: 0; color: #666; font-size: 0.9rem;">
                    <strong>For more information:</strong> Contact the Ministry of Foreign Affairs at evisa@mfa.gov.md or visit www.evisa.gov.md
                </p>
            </div>
        </div>
    `;
    
    resultContent.innerHTML = resultHTML;
    resultSection.style.display = 'block';
    
    // Scroll to result
    setTimeout(() => {
        resultSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 300);
}

// Mask file number
function maskFileNumber(fileNumber) {
    if (fileNumber.length <= 4) return fileNumber;
    return fileNumber.slice(0, 2) + '*'.repeat(fileNumber.length - 4) + fileNumber.slice(-2);
}

// Format input
document.getElementById('fileNumber').addEventListener('input', function() {
    this.value = this.value.toUpperCase();
});

document.getElementById('captcha').addEventListener('input', function() {
    this.value = this.value.toUpperCase();
});

// Clear results when changing file number
document.getElementById('fileNumber').addEventListener('focus', function() {
    document.getElementById('resultSection').style.display = 'none';
});