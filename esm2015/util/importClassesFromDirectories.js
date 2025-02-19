import * as path from 'path';
/**
 * Loads all exported classes from the given directory.
 */
export function importClassesFromDirectories(directories, formats = ['.js', '.ts', '.tsx']) {
    const loadFileClasses = function (exported, allLoaded) {
        if (exported instanceof Function) {
            allLoaded.push(exported);
        }
        else if (exported instanceof Array) {
            exported.forEach((i) => loadFileClasses(i, allLoaded));
        }
        else if (exported instanceof Object || typeof exported === 'object') {
            Object.keys(exported).forEach(key => loadFileClasses(exported[key], allLoaded));
        }
        return allLoaded;
    };
    const allFiles = directories.reduce((allDirs, dir) => {
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        return allDirs.concat(require('glob').sync(path.normalize(dir)));
    }, []);
    const dirs = allFiles
        .filter(file => {
        const dtsExtension = file.substring(file.length - 5, file.length);
        return formats.indexOf(path.extname(file)) !== -1 && dtsExtension !== '.d.ts';
    })
        .map(file => {
        return require(file);
    });
    return loadFileClasses(dirs, []);
}
//# sourceMappingURL=importClassesFromDirectories.js.map