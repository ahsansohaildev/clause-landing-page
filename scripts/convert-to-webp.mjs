import sharp from "sharp";
import fs from "fs";
import path from "path";

const assetsDir = "src/assets";

function getPngFiles(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((item) => {
    const fullPath = path.join(dir, item.name);
    if (item.isDirectory()) return getPngFiles(fullPath);
    return item.name.endsWith(".webp") ? [fullPath] : [];
  });
}

const files = getPngFiles(assetsDir);

for (const file of files) {
  const output = file.replace(".webp", ".webp");
  await sharp(file).webp({ quality: 80 }).toFile(output);
  console.log(`Converted: ${output}`);
}