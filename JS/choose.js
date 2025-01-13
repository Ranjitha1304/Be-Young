function toggleContent() {
    const content = document.getElementById("toggle-content");
    const readMoreLess = document.getElementById("read-more-less");

    if (content.style.display === "none" || content.style.display === "") {
      content.style.display = "block"; // Show content
      readMoreLess.style.display = "inline"; // Show 'Read More' link
    } else {
      content.style.display = "none"; // Hide content
      readMoreLess.style.display = "none"; // Hide 'Read More' link
      content.classList.remove("expanded"); // Reset expanded state
    }
  }

  function toggleReadMore() {
    const content = document.getElementById("toggle-content");
    const readMoreLess = document.getElementById("read-more-less");

    if (content.classList.contains("expanded")) {
      content.classList.remove("expanded"); // Collapse content
      readMoreLess.textContent = "Read More+"; // Change link to 'Read More'
    } else {
      content.classList.add("expanded"); // Expand content
      readMoreLess.textContent = "Read Less-"; // Change link to 'Read Less'
    }
  }