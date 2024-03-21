const characterId = document.getElementById('characterId')
const btnGo = document.getElementById('btn-go')
const content = document.getElementById('content')
const image = document.getElementById('img')

const fetchApi = (value) => {
  const result = fetch(`https://rickandmortyapi.com/api/character/${value}`)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    return data;
  });

  return result
}

const keys = ['name', 'status', 'species', 'gender', 'origin', 'image', 'episode'];

const buildResult = (result) => {
  const newObject = {};
  keys.map((key) => document.getElementById(key));
}

btnGo.addEventListener('click', async (e) => {
  e.preventDefault();
  const result = await fetchApi(characterId.value);
  content.textContent = `${JSON.stringify(result, undefined, 2)}`;
  image.src = `${result.image}`
});