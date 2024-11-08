// App data
const apps = [
    {
        appId: "com.google.android.apps.messaging",
        appName: "Messages",
        appCategory: "Communication",
        safetyStatus: "Safe"
    },
    {
        appId: "com.zoho.crm",
        appName: "Zoho CRM - Sales & Marketing",
        appCategory: "Business",
        safetyStatus: "Unsafe"
    },
    {
        appId: "tsc.multipurposemirror.com",
        appName: "Makeup Mirror And Phone Charger : Shop Today",
        appCategory: "Shopping",
        safetyStatus: "Safe"
    },
    {
        appId: "com.donatos.phoenix",
        appName: "Donatos Pizza",
        appCategory: "Food & Drink",
        safetyStatus: "Unsafe"
    },
    {
        appId: "com.kyucon.ma",
        appName: "Tropical Fish Tank - Mini Aqua",
        appCategory: "Simulation",
        safetyStatus: "Safe"
    },
    {
        appId: "com.ups.mychoice",
        appName: "UPS Mobile",
        appCategory: "Productivity",
        safetyStatus: "Unsafe"
    },
    {
        appId: "com.king.candycrushsaga",
        appName: "Candy Crush Saga",
        appCategory: "Puzzle",
        safetyStatus: "Safe"
    },
    {
        appId: "com.sec.android.app.samsungapps",
        appName: "Galaxy Store",
        appCategory: "Tools",
        safetyStatus: "Safe"
    },
    {
        appId: "com.adobe.scan.android",
        appName: "Adobe Scan: PDF Scanner with OCR",
        appCategory: "Productivity",
        safetyStatus: "Unsafe"
    },
    {
        appId: "com.instagram.android",
        appName: "Instagram",
        appCategory: "Social",
        safetyStatus: "Safe"
    },
    {
        appId: "com.twitter.android",
        appName: "Twitter",
        appCategory: "Social",
        safetyStatus: "Unsafe"
    },
    {
        appId: "com.facebook.orca",
        appName: "Messenger",
        appCategory: "Communication",
        safetyStatus: "Safe"
    },
    {
        appId: "com.whatsapp",
        appName: "WhatsApp",
        appCategory: "Communication",
        safetyStatus: "Unsafe"
    },
    {
        appId: "com.google.android.youtube",
        appName: "YouTube",
        appCategory: "Video Players & Editors",
        safetyStatus: "Safe"
    },
    {
        appId: "com.spotify.music",
        appName: "Spotify:[Music and Podcasts]",
        appCategory: "Music & Audio",
        safetyStatus: "Unsafe"
    },
    {
        appId: "com.amazon.mShop.android.shopping",
        appName: "Amazon Shopping",
        appCategory: "Shopping",
        safetyStatus: "Safe"
    },
    {
        appId: "com.snapchat.android",
        appName: "Snapchat",
        appCategory: "Social",
        safetyStatus: "Unsafe"
    },
    {
        appId: "com.ubercab",
        appName: "Uber - Request a ride",
        appCategory: "Maps & Navigation",
        safetyStatus: "Safe"
    },
    {
        appId: "com.zhiliaoapp.musically",
        appName: "TickTock",
        appCategory: "Social",
        safetyStatus: "Unsafe"
    },
    {
        appId: "com.badoo.mobile",
        appName: "Date Chat - Meet & Video",
        appCategory: "Dating",
        safetyStatus: "Safe"
    },

    {
        appId: "com.snapchat.android",
        appName: "Snapchat",
        appCategory: "Social",
        safetyStatus: "Unsafe"
    },
    {
        appId: "com.airbnb.android",
        appName: "Airbnb",
        appCategory: "Travel & Local",
        safetyStatus: "Safe"
    },
    {
        appId: "com.google.android.calendar",
        appName: "Google Calendar",
        appCategory: "Productivity",
        safetyStatus: "Safe"
    },
    {
        appId: "com.facebook.lite",
        appName: "Facebook Lite",
        appCategory: "Social",
        safetyStatus: "Unsafe"
    },
    {
        appId: "com.tiktok",
        appName: "TikTok",
        appCategory: "Social",
        safetyStatus: "Unsafe"
    },
    {
        appId: "com.nike.android.sneakers",
        appName: "Nike SNKRS",
        appCategory: "Shopping",
        safetyStatus: "Safe"
    },
    {
        appId: "com.google.android.gm",
        appName: "Gmail",
        appCategory: "Communication",
        safetyStatus: "Safe"
    },
    {
        appId: "com.netflix.mediaclient",
        appName: "Netflix",
        appCategory: "Entertainment",
        safetyStatus: "Unsafe"
    },
    {
        appId: "com.whatsapp.w4b",
        appName: "WhatsApp Business",
        appCategory: "Business",
        safetyStatus: "Safe"
    },
    {
        appId: "com.dailymotion.dailymotion",
        appName: "Dailymotion",
        appCategory: "Video Players & Editors",
        safetyStatus: "Safe"
    },

    {
        appId: "com.spotify.music",
        appName: "Spotify",
        appCategory: "Music & Audio",
        safetyStatus: "Safe"
    },
    {
        appId: "com.microsoft.office.word",
        appName: "Microsoft Word",
        appCategory: "Productivity",
        safetyStatus: "Safe"
    },
    {
        appId: "com.snapchat.android",
        appName: "Snapchat",
        appCategory: "Social",
        safetyStatus: "Unsafe"
    },
    {
        appId: "com.nintendo.zara",
        appName: "Zara",
        appCategory: "Shopping",
        safetyStatus: "Safe"
    },
    {
        appId: "com.samsung.android.messaging",
        appName: "Samsung Messages",
        appCategory: "Communication",
        safetyStatus: "Safe"
    },
    {
        appId: "com.oracle.mobile.cloud",
        appName: "Oracle Cloud",
        appCategory: "Business",
        safetyStatus: "Safe"
    },
    {
        appId: "com.viber.voip",
        appName: "Viber",
        appCategory: "Communication",
        safetyStatus: "Unsafe"
    },
    {
        appId: "com.google.android.maps",
        appName: "Google Maps",
        appCategory: "Maps & Navigation",
        safetyStatus: "Safe"
    },
    {
        appId: "com.strava",
        appName: "Strava",
        appCategory: "Health & Fitness",
        safetyStatus: "Safe"
    },
    {
        appId: "com.facebook.orca",
        appName: "Facebook Messenger",
        appCategory: "Communication",
        safetyStatus: "Unsafe"
    },
    {
        appId: "com.yelp.android",
        appName: "Yelp",
        appCategory: "Food & Drink",
        safetyStatus: "Safe"
    },
    {
        appId: "com.slack",
        appName: "Slack",
        appCategory: "Productivity",
        safetyStatus: "Safe"
    },
    {
        appId: "com.netflix.mediaclient",
        appName: "Netflix",
        appCategory: "Entertainment",
        safetyStatus: "Unsafe"
    },
    {
        appId: "com.alibaba.android",
        appName: "AliExpress",
        appCategory: "Shopping",
        safetyStatus: "Safe"
    },
    {
        appId: "com.asana.app",
        appName: "Asana",
        appCategory: "Productivity",
        safetyStatus: "Safe"
    },
    {
        appId: "com.microsoft.launcher",
        appName: "Microsoft Launcher",
        appCategory: "Personalization",
        safetyStatus: "Safe"
    },
    {
        appId: "com.waze",
        appName: "Waze",
        appCategory: "Maps & Navigation",
        safetyStatus: "Safe"
    },
    {
        appId: "com.cnn.mobile.android",
        appName: "CNN",
        appCategory: "News & Magazines",
        safetyStatus: "Safe"
    },
    {
        appId: "com.spotify.android.podcast",
        appName: "Spotify Podcasts",
        appCategory: "Music & Audio",
        safetyStatus: "Unsafe"
    },
    {
        appId: "com.zoom.us",
        appName: "Zoom Cloud Meetings",
        appCategory: "Productivity",
        safetyStatus: "Safe"
    }
];


// Function to create app cards
function createAppCards() {
    const container = document.getElementById('app-container');
    apps.forEach(app => {
        const card = document.createElement('div');
        card.className = 'app-card';
        card.innerHTML = `
            <img src="thumbnails/${app.appId}.png" alt="${app.appName} Thumbnail">
            <div class="app-name">${app.appName}</div>
        `;
        card.addEventListener('click', () => openModal(app));
        container.appendChild(card);
    });
}

// Function to open modal and display app details with simulated delays
function openModal(app) {
    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modal-body');
    modal.style.display = 'block';
    modalBody.innerHTML = `<div class="loading">Fetching the category...</div>`;

    // Simulate delay for fetching category
    setTimeout(() => {
        modalBody.innerHTML = `<div><strong>Category:</strong> ${app.appCategory}</div>`;
        
        // Add delay for safety status
        setTimeout(() => {
            const safetyClass = app.safetyStatus.toLowerCase();
            modalBody.innerHTML += `<div><strong>Safety Status:</strong> <span class="${safetyClass}">${app.safetyStatus}</span></div>`;
        }, 1500); // 1.5 seconds delay
    }, 1500); // 1.5 seconds delay
}

// Function to close modal
function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}

// Event listener for closing the modal
document.getElementById('close-modal').addEventListener('click', closeModal);

// Close modal when clicking outside the modal content
window.addEventListener('click', (event) => {
    const modal = document.getElementById('modal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
});

// Initialize app cards on page load
window.onload = createAppCards;
