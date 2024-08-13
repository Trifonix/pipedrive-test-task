function openPopup() {
    document.getElementById("jobPopup").classList.add("show");
}
function closePopup() {
    document.getElementById("jobPopup").classList.remove("show");
}
async function createJob() {
    const formData = {
        title: document.getElementById("dealTitle").value,
        value: document.getElementById("dealValue").value || null,
        currency: document.getElementById("dealCurrency").value || null,
    };
    try {
        const response = await fetch(
            "https://api.pipedrive.com/v1/deals?api_token=MY_GREAT_TOKEN",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            }
        );
        const result = await response.json();
        if (response.ok) {
            document.getElementById("createJobButton").innerText =
                "Request is sent";
            document
                .getElementById("createJobButton")
                .classList.remove("button-yellow");
            document
                .getElementById("createJobButton")
                .classList.add("button-red");
            document.getElementById("popupMessage").style.display = "block";
            document.getElementById(
                "viewDeal"
            ).href = `https://somecompany.pipedrive.com/deal/${result.data.id}`;
        } else {
            alert("Error: " + result.error);
        }
    } catch (error) {
        console.error("Error:", error);
        alert("An error occurred");
    }
}
function saveInfo() {
    alert("Information saved.");
    closePopup();
}
