import Fastify from "fastify";
import app from "./app.js";

console.log("Fastify instance oluşturuluyor...");
const fastify = Fastify();

(async () => {
  console.log("App fonksiyonu çağrılıyor...");
  await app(fastify);

  try {
    console.log("Sunucu başlatılıyor...");
    const address = await fastify.listen({ port: 3000 });
    console.log(`Server listening at ${address}`);
  } catch (err) {
    console.error("Sunucu başlatılırken hata oluştu:", err);
    process.exit(1);
  }
})();