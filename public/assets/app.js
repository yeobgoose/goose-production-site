(() => {
  const config = window.GOOSE_CONFIG || {};

  document.querySelectorAll("[data-discord-link]").forEach((link) => {
    const url = config.discordInviteUrl || "#";
    link.setAttribute("href", url);
  });

  document.querySelectorAll("[data-contact-email]").forEach((node) => {
    const email = config.contactEmail || "contact@example.com";
    node.textContent = email;
    if (node.tagName === "A") {
      node.setAttribute("href", `mailto:${email}`);
    }
  });

  const tabs = [...document.querySelectorAll(".demo-tab")];
  const panels = [...document.querySelectorAll(".demo-panel")];

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const target = tab.dataset.target;

      tabs.forEach((item) => item.classList.toggle("active", item === tab));
      panels.forEach((panel) => {
        panel.classList.toggle("active", panel.id === target);
      });
    });
  });
})();
