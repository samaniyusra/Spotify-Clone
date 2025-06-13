let url = "http://localhost:3000/competitions";

async function getData() {
  try {
    let result = await axios.get(url);
    console.log(result.data);
  } catch (err) {
    console.error("Error fetching data:", err.message);
  }
}

getData();