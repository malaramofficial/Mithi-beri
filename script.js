import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-app.js"; // 0000000000

import { getDatabase, ref, set, get, onValue } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-database.js"; // 0000000000

// Firebase कॉन्फ़िगरेशन

const firebaseConfig = {

    apiKey: "AIzaSyAYQAK-c5-EBGDN2fuBiAWK17HnqSg058E",

    authDomain: "voting-app-f5d8b.firebaseapp.com",

    databaseURL: "https://voting-app-f5d8b-default-rtdb.firebaseio.com/",

    projectId: "voting-app-f5d8b",

    storageBucket: "voting-app-f5d8b.appspot.com",

    messagingSenderId: "572075489115",

    appId: "1:572075489115:web:30e506ae04806e8a128c7e"

};

// Firebase इनिशियलाइज़ करें

const app = initializeApp(firebaseConfig);

const db = getDatabase(app);

// बटन पर क्लिक इवेंट

document.getElementById("rameseButton").addEventListener("click", () => vote("ramese"));

document.getElementById("chandButton").addEventListener("click", () => vote("chand"));

// वोटिंग फंक्शन

function vote(choice) {

    const choiceRef = ref(db, 'votes/' + choice);

    get(choiceRef).then((snapshot) => {

        const currentVotes = snapshot.exists() ? snapshot.val().count : 0;

        set(choiceRef, { count: currentVotes + 1 });

        document.getElementById("message").innerText = "Vote submitted successfully!";

    });

}

// रियल-टाइम वोट अपडेट्स

onValue(ref(db, 'votes'), (snapshot) => {

    const data = snapshot.val() || {};

    const rameseCount = data.ramese ? data.ramese.count : 0;

    const chandCount = data.chand ? data.chand.count : 0;

    document.getElementById("rameseVotes").innerText = `रमेश पोटलिया: ${rameseCount} votes`;

    document.getElementById("chandVotes").innerText = `चंद सारण: ${chandCount} votes`;

    const totalVotes = rameseCount + chandCount;

    const ramesePercentage = totalVotes ? ((rameseCount / totalVotes) * 100).toFixed(2) : 0;

    const chandPercentage = totalVotes ? ((chandCount / totalVotes) * 100).toFixed(2) : 0;

    document.getElementById("votePercentage").innerText = `रमेश पोटलिया: ${ramesePercentage}% | चंद सारण: ${chandPercentage}%`;

});