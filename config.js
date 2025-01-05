const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA5VUSXOjOBj9L7ra3Sxms6tSNTZgQ/ASA16n+iCDWAwGLAkMpPzfp3CSSg7TPRlOKkBPT2/5XkGWxwRZqAGjV1DguIIUdUvaFAiMwKQMAoRBH/iQQjACRFvnGpwRMwu20D2T4Rjme3wW+BemUks+cLbMBZu3lTfVn8C9D4rylMbeHwDR0D4a+mJuplA4Er62pstj6yzOIl9bCeeyEZ1aDOQHm4nwBO4dIoxxnIV6EaELwjC1UPMCY/w9+uUy2QSG9zJUpQPfE8fuaUKHnBxdhgM2LKnJHW7hORYX5pT9Hv3QGa7KmMMLtGWrltjlzqpcnOpmEC6rVN0o5S5uPNlAhvJGn8RhhnzTRxmNafNt3c2FO9tvg9lM1zaJvVKbVlv7QeLuzqFsFG6wnVTJxqGnHud9jzjfJr3bori1x3JuHgomqZ+fE9dentLxeLaot8omcsXNOZnHh6/EX/BHVpL/ozv/Qpk5Vm9wZWgBkpvLdR/CJVydMz/RNFhXbE/hiGP3dsL36B8UytD1OreYNiynz0P3GF2VcizUrMU413lvnKlbscyGnCN80oe0xH9iGQjRcEptZTbki+2eP27O1sKp29w5z4tmyeA01Vp9pzyze6QuXsw5JL1V3sTV7qrhQ5AGu5oeaH46rNZ0PztwTrtNanX99LhRghrTByPu3gcYhTGhGNI4zx7vxEEfQL9ykIcRfcgLdLG0Q2p6jakuo+dN1uNEUZLOO5pUgrDP2W1hRO7V8oXp4gn0QYFzDxGCfCMmNMfNAhECQ0TA6O9ffZChmr4Z1x034PogiDGhm6ws0hz6H65+fISel5cZdZrMU7sFwmDEfr5GlMZZSDodywxiL4orpEaQEjAKYErQvQ98VMUe6vCAsoWqbmutE6tLPNPZCxbtxbqjHOXZ2y+S6CP+xEs/+EDwfgi+DH+cWAn94D1WPCnKSUKSBPogfu9Mt+e3FrKLdhpoe0th+Cnjin47ULjr+WR7w/HDhjftEUY+GFFcoj44QS8pCzdPUPYHXCNVG7q98ftqyA5xO10W3hWeNK2er7/gvnkKRq+fc0rN/Q5vsHbUpcTpoA8ujwjG3c0FVpY5VlA4RRzx8l/k563TERbFzwzRDvZd826DjyiMUwJGQF3KFg7Mqf6STSSZzGbjdThWwzH49Ogj7G9hem52ibfTZXvyfDXYm3qaaGubCVLu6tryFLtXI/SZ2fbU3MjTv4B0/eV1U1IZnPFa1UwDndE4J7Klc7SbrFxeaPOyytR0OFuQzIrjQy0JkUlW5p6ZNZOa64lCej5sjlEjyLXKoeWxyYKz1jXjIytfDyv5XMMz7hosfdjOW1emlrLviVNZR/Z8XrryXPNLYjZyxVlrV3reQMxQOz7K65I6W+gbznkysQjljI3Z67nlgDGINn6r4WMMpO/jN34U5PU9WUGMHtMsg51D/+HN14yz9/4XiPfx+JscTRwvLYxptGLXDoyGi/Hltmb1YCD6MGFRDVkpEoygTncKmYP7/VcfFCmkQY4vYARg5uM89kEfpJDQ8WdN3fiCCIWXAow4eSBxrMQLch9cmnFROBTSj3aDcfcYtgru/wCdCtO3+QcAAA==',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "Ibrahim Adams",
    NUMERO_OWNER : process.env.NUMERO_OWNER || " Ibrahim Adams",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'BMW_MD',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/h2ydge.jpg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.PM_CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ANTIDELETE1 : process.env.ANTIDELETE1 || 'yes',
    ANTIDELETE2 : process.env.ANTIDELETE2 || 'yes',
    MENUTYPE : process.env.MENUTYPE || 'yes',
    ANTICALL : process.env.ANTICALL || 'yes',
                  AUTO_REACT : process.env.AUTO_REACT || 'yes',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'yes',
                  AUTO_READ : process.env.AUTO_READ || 'yes',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'yes',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'yes',
                  AUTO_BIO : process.env.AUTO_BIO || 'yes',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'yes',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});

