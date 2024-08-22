export const projects = [
    {
        name: "https://hxfeng.netlify.app/",
        url: "https://hxfeng.netlify.app/", 
        subtitle: "This Website!",
        description: "Used Astro with JavaScript, HTML, CSS to create this website. I'll be adding more content soon!",
        year: 2024,
        github: "https://github.com/hailenwashere/website"
    },
    {
        name: "Our Fridge",
        url: "https://docs.google.com/presentation/d/1S0mvZn8IOAFx1zNTJKhgl6p0fosIClARI3vkAeLVTZE/edit#slide=id.g93a1b1e5a5_0_328", 
        subtitle: "Simple ingredient sharing app to fight food waste",
        description: "A project created in Hack with a Pro 2024 that won 3rd place overall. OurFridge allows users to share leftover ingredients with their friends through a communal fridge which can be accessed through a unique code. ",
        details: [
            "Used React.js to implement ingredient requesting and fridge display (organized by food category)",
            "Uses email notifications to let a friend know that a user wants an ingredient",
            "Generates easy recipes that can use the leftover ingredients accumulated by the group.",
            "Shoutout to Yifan, Jacky, Warrick, Chanh, and Ellen for being a great team!"
        ],
        year: 2024,
        github: "https://github.com/hailenwashere/hackwapro"
    },
    {
        name: "FocusView",
        url: "https://docs.google.com/presentation/d/1DxxgkZjpErOBOf9MRxZmQdBL5_cyuvxsRUXvfZBGqf0/edit?usp=sharing", 
        subtitle: "A web app for combatting bad habits while working",
        description: "A project created with UCLA Creative Labs in Spring 2024. To help students control their bad working habits such as bad posture, phone usage, and more, FocusView tracks user eye movement and posture data in each session with a pomodoro timer. ",
        details: [
            "Used Firebase to implement a smooth user authentication experience",
            "Used React.js to create the frontend of the app, including the user profile, a session timer, and login pages."
        ],
        year: 2024,
        github: "https://github.com/ArjunNair17/FocusView"
    },
    {
        name: "Clearify",
        url: "https://chromewebstore.google.com/detail/clearify/dfngmknjomojmdmnockpdpmpnbbhibfi", 
        subtitle: "A skincare retail browser extension",
        description: "A project created with UCLA Creative Labs in Fall 2023/Winter 2024. Clearify is a cosmetic shopping browser extension that scans a product’s ingredients list as you shop and checks if a cosmetic is safe for your skin, e.g. silicone-free, alcohol-free, or FA-safe (fungal acne-safe), using the community-trusted EWG Skin Deep Database. ",
        details: [
            "Used Manifest V3, JavaScript, HTML, and CSS to add highlights and property counts to the extension that matched the sleek design and feel of Clearify."
        ],
        year: 2024,
        github: "https://github.com/ArjunNair17/FocusView",
    },
    {
        name: "UIRA @ UCLA Landing Page",
        url: "https://uiraatucla.s3.us-west-1.amazonaws.com/index.html", 
        subtitle: "Landing page for the UIRA @ UCLA",
        description: "A landing page created for the Undergraduate Interdiscipliinary Research Association, a club that I am webmaster for! The club hosts an annual poster day for undergraduates to share their research, and is advised by the Assistant Director of Undergraduate Resarch Center for Science at UCLA.",
        details: [
            "Used HTML, CSS, and JavaScript to create a website for the Undergraduate Interdisciplinary Research Association (UIRA) at UCLA, hosted on Amazon Web Services (AWS)",
            "Designed and prototyped website on Figma",
            "Had work presented to the Assistant Director of Undergraduate Research Center for Sciences at UCLA and provided over 60 participating research projects an opportunity to present their research"
        ],
        year: 2023,
        github: "https://github.com/ArjunNair17/FocusView",
    },
    {
        name: "My Terrarium",
        url: "", 
        subtitle: "Ambient noise and music mixer",
        description: "A web application created in a team for the class CS35L (Software Construction), taught by Professor Eggert in Spring 2023. My Terrarium allows users to mix Spotify playlists with uploaded background audio to create their ideal \"terrarium\" of sound. Developed with React, PostgreSQL, and Flask, ",
        details: [
            "Used Spotify API and PostgreSQL to fetch and store user listening data",
            "Used React.js to embed Spotify playlists and allow users to customize their audio experience",
            "Designed of UI of application (See presentation slides at: https://tinyurl.com/4bt6e6yc)"
        ],
        year: 2023,
        github: "https://github.com/ArjunNair17/FocusView",
    },
    {
        name: "Emotion Detector",
        url: "https://hailenwashere.github.io/BSE-EmotionDetector-Portfolio/", 
        subtitle: "An machine learning based emotion detector",
        description: "A project I developed during my time with the BlueStamp Engineering Summer Program in 2021. Originally just meant to be a smile detector, I wanted to see if a model I made was capable of detecting less obvious emotions, like fear. Developed with Python (scikit-learn, numpy, Pandas, and more).",
        details: [
            "Used Python and sklearn to train a model to detect emotions, which ended up having 80% accuracy (which was surprising given a very unevenly distributed dataset), with the SGD classifier object",
            "Used the Facial Expressions Dataset by muxspace to train model",
            "Used Histogram of Oriented Gradients for features and Support Vector Machine as a classifier (HOG-SVM)",
            "Deemed most technical project of the program that year by mentor"
        ],
        year: 2021,
        github: "https://github.com/hailenwashere/BSE-EmotionDetector-Portfolio",
    },
    {
        name: "Swear Jar Bot",
        subtitle: "A virtual swear jar in the form of a Discord bot",
        description: "A Discord bot made with Discord's Python API with friend during quarantine to count the number of times someone has texted a swear word in our groupchat. The bot ran independently by being hosted on a virtual server, and maintained a running tally of how much each person swore.",
        details: [
            "Used txt files for simple data maintenance",
            "Used Discord's Python API and asyncio to link our code to Discord",
            "Hosted bot on a DigitalOcean Droplet for it to run regardless of my computer being on/off"
        ],
        year: 2020,
        github: "https://github.com/hailenwashere/swearjar",
    },
    {
        name: "Among Us Bot",
        subtitle: "A Discord bot to resend Among Us game code",
        description: "My first project! Included here with the swear jar as part of the hall of fame. A Discord bot using Discord's Python API to resend the Among Us game code upon request, which often got buried under messages and other bot commands.",
        details: [
            "Used txt file to store the code",
            "Used Discord's Python API and asyncio to link code to Discord",
            "Hosted bot on a DigitalOcean Droplet for it to run regardless of my computer being on/off"
        ],
        year: 2020,
        github: "https://github.com/hailenwashere/amongusbot",
    },
]