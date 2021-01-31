import microtime from 'microtime';
import * as libs from './libraries';
import * as suts from './suites';

const libraries = Object.values(libs);
const suites = Object.values(suts);

suites.forEach((suite) => {
    console.log(`Suite ${suite.name} (${suite.iterations} iterations)`);

    libraries.forEach((library) => {
        suite.setup(library);

        let sum = 0;

        for (let i = 0; i < suite.iterations; i++) {
            const start = microtime.now();

            suite.perform(library);

            sum += microtime.now() - start;
        }

        const avg = sum / suite.iterations;

        library.cleanup();

        const updates = library.geMovementSystemUpdateCount();

        console.log(`  - ${library.name}\t${sum}ms (${avg.toFixed(0)}ms/iteration). ${updates} updates.`);
    });

    console.log('');
});
