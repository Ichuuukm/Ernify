// Import Firestore functions
import { getFirestore, doc, setDoc, getDoc } 
from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";

// ✅ Import first
import { app, analytics } from "./firebase-config.js";

// Initialize Firestore
const db = getFirestore(app);


// ✅ Then add the rest of your code
document.getElementById("testBtn").addEventListener("click", function() {
    alert("Ernify is working!");
});

document.getElementById("testBtn").addEventListener("click", async () => {
    try {
        // Write test data
        await setDoc(doc(db, "testCollection", "testDoc"), {
            message: "Hello Firestore",
            timestamp: new Date()
        });
        alert("Test data saved to Firestore!");
    } catch (error) {
        console.error("Error writing to Firestore: ", error);
    }
});

    try {
        // Read test data
        const docRef = doc(db, "testCollection", "testDoc");
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
            alert("Read from Firestore: " + docSnap.data().message);
        } else {
            console.log("No such document!");
        }
    } catch (error) {
        console.error("Error reading from Firestore: ", error);
    }

