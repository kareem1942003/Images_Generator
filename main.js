const api = "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";
const inp = document.getElementById("inp");
const images = document.querySelector(".images");

const getImage = async () => {
  const methods = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${api}`,
    },
    body: JSON.stringify({
      prompt: inp.value,
      n: 3,
      size: "1024x1024",
    }),
  };
  const res = await fetch(
    "https://api.openai.com/v1/images/generations",
    methods
  );
  images.innerHTML = "";
  inp.value = "";
  const data = await res.json();
  const listImages = data.data;
  listImages.map((photo) => {
    const container = document.createElement("div");
    images.append(container);
    const img = document.createElement("img");
    container.append(img);
    img.src = photo.url;
  });
};
