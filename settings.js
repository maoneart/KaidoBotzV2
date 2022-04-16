/*
 * Create By Dika Ardnt.
 * Contact Me on wa.me/6288292024190
 * Follow https://github.com/DikaArdnt
 */

const fs = require("fs");
const chalk = require("chalk");

// Website Api
global.APIs = {
  zenz: "https://zenzapi.xyz",
};

// Apikey Website Api
global.APIKeys = {
  "https://zenzapi.xyz": "4AD2E985D2", // Kalau habis beli sendiri
};

// Other
global.owner = ["6282122365620", "6282122365620", "6282122365620"];
global.premium = ["6282122365620"];
global.ownernomer = "6282122365620";
global.ownername = "Maone Electronic";
global.botname = "KaidoBotz";
global.footer = "Maone Electronic";
global.ig = "https://instagram.com/maone_art";
global.email = "maone.miui@gmail.com";
global.region = "Indonesia";
global.sc = "https://www.youtube.com/channel/UC4KlyK5G6l1lOHLWOxU15TQ";
global.myweb = "https://api-kaido.herokuapp.com/";
global.packname = "KaidoBotz";
global.author = "WhatsApp Bot";
global.sessionName = "MaoneArt";
global.prefa = ["", "!", ".", "🐦", "🐤", "🗿"];
global.sp = "⭔";
global.mess = {
  success: "✓ Success",
  admin: "Fitur Khusus Admin Group!",
  botAdmin: "Bot Harus Menjadi Admin Terlebih Dahulu!",
  owner: "Fitur Khusus Owner Bot",
  group: "Fitur Digunakan Hanya Untuk Group!",
  private: "Fitur Digunakan Hanya Untuk Private Chat!",
  bot: "Fitur Khusus Pengguna Nomor Bot",
  wait: "Loading...",
  endLimit: "Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12",
};
global.limitawal = {
  premium: "Infinity",
  free: 2,
  monayawal: 1000,
};
global.rpg = {
  darahawal: 100,
  besiawal: 15,
  goldawal: 10,
  emeraldawal: 5,
  umpanawal: 5,
  potionawal: 1,
};
global.thumb = fs.readFileSync("./media/logo.jpg");
global.flaming =
  "https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text=";
global.fluming =
  "https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text=";
global.flarun =
  "https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text=";
global.flasmurf =
  "https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text=";
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.redBright(`Update'${__filename}'`));
  delete require.cache[file];
  require(file);
});
