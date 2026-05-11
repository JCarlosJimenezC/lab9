const rows = [
  "Aulas 5, 6, 7",
  "Apoyo Informático",
  "Servidores",
  "Laboratorio 1 y 2",
  "Coordinación Informática Empresarial",
];

const createSignRow = (text, index) => {
  const row = document.createElement("div");
  row.classList.add("sign-row");
  row.style.setProperty("--row-index", index);

  const label = document.createElement("span");
  label.classList.add("sign-text");
  label.textContent = text;

  const arrow = document.createElement("span");
  arrow.classList.add("sign-arrow");
  arrow.textContent = "→";

  row.append(label, arrow);
  return row;
};

export const renderRofuloAulas = () => {
  const container = document.querySelector(".signs-container");
  if (!container) return;

  const sign = document.createElement("article");
  sign.classList.add("sign");

  rows.forEach((text, i) => sign.append(createSignRow(text, i)));

  const footer = document.createElement("footer");
  footer.classList.add("sign-footer");

  const footerText = document.createElement("span");
  footerText.classList.add("sign-footer-text");
  footerText.textContent = "UCR";

  footer.append(footerText);
  sign.append(footer);
  container.append(sign);

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        sign.classList.add("is-visible");
        observer.disconnect();
      }
    },
    { threshold: 0.15 }
  );
  observer.observe(sign);
};
