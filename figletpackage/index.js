import figlet from "figlet";

async function doStuff() {
    const text = await figlet.text("M E S S I");
    console.log(text);
}

doStuff();