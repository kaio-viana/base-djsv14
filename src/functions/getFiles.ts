import fs from 'fs';
import path from 'path';

function getFiles(dir: string): string[] {
    let results: string[] = [];
    const list = fs.readdirSync(dir);

    list.forEach((file) => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);

        if (stat && stat.isDirectory()) {
            results = results.concat(getFiles(filePath));
        } else if (stat && (file.endsWith('.js') || file.endsWith('.ts'))) {
            results.push(filePath);
        }
    });

    return results;
}

export { getFiles };