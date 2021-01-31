import * as libs from './libraries';
import * as suts from './suites';

const libraries = Object.values(libs);
const suites = Object.values(suts);

const now = () => {
    const hr = process.hrtime();

    return (hr[0] * 1e9 + hr[1]) / 1000;
};

suites.forEach((suite) => {
    console.log(`Suite ${suite.name} (${suite.iterations} iterations)`);

    libraries.forEach((library) => {
        suite.setup(library);

        let sum = 0;

        for (let i = 0; i < suite.iterations; i++) {
            const start = now();

            suite.perform(library);

            sum += now() - start;
        }

        const avg = Math.round(sum / suite.iterations);

        library.cleanup();

        const updates = library.geMovementSystemUpdateCount();
        const updateText = updates > 0 ? `\t${updates} updates.` : '';
        const avgText = `${avg}`.padStart(8, ' ');
        const sumText = `${Math.round(sum)}`.padStart(15, ' ');

        console.log(
            `  - ${library.name}\t\t${avgText}ms\t${sumText}ms${updateText}`
        );
    });

    console.log('');
});
