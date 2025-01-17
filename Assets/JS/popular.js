function toggleSection() {
    const content = document.getElementById("expandable-content");

    if (content.style.display === "none" || content.style.display === "") {
      content.style.display = "block"; // Show content
    } else {
      content.style.display = "none"; // Hide content
    }
  }