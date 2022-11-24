const { readFile, writeFile } = require("fs/promises");

const filePath = "./package.json";

async function main() {
  try {
    const packageJsonStr = await readFile(filePath, "utf-8");
    const json = JSON.parse(packageJsonStr);
    json.version = json.version.replace(/\d+$/, (substring) => {
      return +substring + 1;
    });
    const { version } = json;
    await writeFile(filePath, JSON.stringify(json, null, 2), "utf-8");
    console.log(`Version number was successfully updated to <${version}>.`);
  } catch {
    console.error("Failed to update version number.");
  }
}

main();