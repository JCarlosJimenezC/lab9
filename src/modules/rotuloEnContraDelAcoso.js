const animateLetters = (text, badgeIndex = 0) =>
  [...text].map((char, i) => {
    const span = document.createElement("span");
    span.classList.add("letter");
    span.style.setProperty("--i", i);
    span.style.setProperty("--badge-index", badgeIndex);
    span.textContent = char === " " ? "\u00A0" : char;
    return span;
  });

const createHeader = () => {
  const header = document.createElement("header");
  header.classList.add("campaign-header");

  const line1 = document.createElement("div");
  line1.classList.add("campaign-title-line");

  const excl1 = document.createElement("span");
  excl1.classList.add("campaign-excl", "campaign-excl--purple");
  excl1.textContent = "¡";

  const lasede = document.createElement("span");
  lasede.classList.add("campaign-badge", "campaign-badge--cyan");
  lasede.style.setProperty("--badge-index", 0);
  lasede.append(...animateLetters("LA SEDE", 0));

  line1.append(excl1, lasede);

  const line2 = document.createElement("div");
  line2.classList.add("campaign-title-line");

  const te = document.createElement("span");
  te.classList.add("campaign-badge", "campaign-badge--purple");
  te.style.setProperty("--badge-index", 1);
  te.append(...animateLetters("TE", 1));

  const acompana = document.createElement("span");
  acompana.classList.add("campaign-badge", "campaign-badge--purple");
  acompana.style.setProperty("--badge-index", 2);
  acompana.append(...animateLetters("ACOMPAÑA", 2));

  const excl2 = document.createElement("span");
  excl2.classList.add("campaign-excl", "campaign-excl--cyan", "excl-pulse");
  excl2.textContent = "!";

  line2.append(te, acompana, excl2);
  header.append(line1, line2);
  return header;
};

const createMessage = () => {
  const msg = document.createElement("p");
  msg.classList.add("campaign-message");

  const line1 = document.createTextNode("El respeto no se negocia");
  const br = document.createElement("br");
  const line2 = document.createElement("strong");
  line2.textContent = "¡Pará ya de acosar!";

  msg.append(line1, br, line2);
  return msg;
};

const createPeopleImage = () => {
  const wrapper = document.createElement("div");
  wrapper.classList.add("campaign-img-wrapper");

  const img = document.createElement("img");
  img.src = "./assets/images/cartel.png";
  img.alt = "Estudiantes UCR con gesto de alto al acoso";
  img.loading = "lazy";
  img.decoding = "async";

  wrapper.append(img);
  return wrapper;
};

const createFooter = () => {
  const footer = document.createElement("footer");
  footer.classList.add("campaign-footer");

  const logos = [
    { big: "UCR", small: "LIBRE\nACOSO" },
    { big: "UCR", small: "LIBRE DE\nACOSO SEXUAL" },
    { big: "SG",  small: "SEDE GUANACASTE\nEN CONTRA DEL\nACOSO SEXUAL" },
  ];

  logos.forEach(({ big, small }, i) => {
    if (i > 0) {
      const sep = document.createElement("div");
      sep.classList.add("campaign-footer-sep");
      footer.append(sep);
    }

    const item = document.createElement("div");
    item.classList.add("campaign-logo");
    item.style.setProperty("--logo-index", i);

    const bigEl = document.createElement("span");
    bigEl.classList.add("campaign-logo-big");
    bigEl.textContent = big;

    const smallEl = document.createElement("span");
    smallEl.classList.add("campaign-logo-small");
    smallEl.textContent = small;

    item.append(bigEl, smallEl);
    footer.append(item);
  });

  return footer;
};

export const renderRotuloEnContraDelAcoso = () => {
  const container = document.querySelector(".signs-container");
  if (!container) return;

  const sign = document.createElement("article");
  sign.classList.add("sign", "sign-campaign");

  sign.append(
    createHeader(),
    createMessage(),
    createPeopleImage(),
    createFooter(),
  );

  container.append(sign);
};
