
export default function getFoodFromApi(test)
{
    const url = 'https://coffee.alexflipnote.dev/random.json' + test

    return (
      fetch(url).then((response) =>
      response.json()).catch((error) => 
      console.error(error))
    )
    
}