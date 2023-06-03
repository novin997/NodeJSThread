import Piscina from "piscina";

const piscina = new Piscina({
  filename: new URL('./sum.ts',import.meta.url).href
});

(async () => {
  const result = await piscina.run({a:4,b:6});
  console.log(result);
})(); 

