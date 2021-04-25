import { Core } from "odi";
import { join } from "path";

new Core({
  sources: __dirname,
  server: {
    socket: true,
    port: Number(process.env.APP_PORT || 8051),
    static: {
      root: join(__dirname, "../assets"),
      prefix: "/assets"
    }
  }
}).listen(() => console.log("Server successfully started!"));
