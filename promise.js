const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (emosi) =>
{
  let emosi_marah = 0;
  let emosi_tidak_marah = 0;

  await promiseTheaterIXX()
  .then((dataTheaterIXX) => 
  {
    dataTheaterIXX.map( (film) => 
    {
      if(film.hasil === 'marah')
      {
        emosi_marah += 1;
      }
      else
      {
        emosi_tidak_marah += 1;
      }
    });
  });

  await promiseTheaterVGC()
  .then((dataTheaterVGC) => 
  {
    dataTheaterVGC.map( (film) => 
    {
      if(film.hasil === 'marah')
      {
        emosi_marah += 1;
      }
      else
      {
        emosi_tidak_marah += 1;
      }
    });
  });

  return new Promise((resolve) => 
  {
    if(emosi == 'marah')
    {
      return resolve(emosi_marah);
    }
    else if (emosi == 'tidak marah')
    {
      return resolve(emosi_tidak_marah);
    }
  });
}

module.exports = {
  promiseOutput,
};
