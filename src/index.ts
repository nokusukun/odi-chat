import { Core } from "odi";
import { join } from "path";

new Core({
  sources: __dirname,
  server: {
    socket: true,
    port: 8080,
    static: {
      root: join(__dirname, "../assets"),
      prefix: "/assets"
    }
  }
}).listen(() => console.log("Server successfully started!"));
