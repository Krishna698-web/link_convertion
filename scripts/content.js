const div_links = document.querySelectorAll(".div-lead-column-dynamic");

const toAnchor = (link) => {
  const anchor = document.createElement("a");
  anchor.setAttribute("target", "_blank");
  anchor.setAttribute("href", link);
  anchor.innerHTML = link;
  return anchor;
};

const convertLinks = () => {
  for (let i = 0; i < div_links.length; i++) {
    if (div_links[i].innerHTML.slice(0, 8) === "https://") {
      let the_link = toAnchor(div_links[i].innerHTML);
      div_links[i].innerHTML = "";
      div_links[i].appendChild(the_link);
      console.log(div_links[i]);
    }
  }
};

convertLinks();
