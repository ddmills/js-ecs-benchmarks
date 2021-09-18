import * as libs from './libraries';
import * as suts from './suites';
import elegantSpinner from 'elegant-spinner';
import logUpdate from 'log-update';

const libraries = Object.values(libs);
const suites = Object.values(suts);

const now = () => {
    const hr = process.hrtime();

    return (hr[0] * 1e9 + hr[1]) / 1000;
};

const frame = elegantSpinner();

suites.forEach((suite) => {
    const output = [];

    libraries.forEach((library, libIdx) => {
        suite.setup(library);

        let sum = 0;

        for (let i = 0; i < suite.iterations; i++) {
            const start = now();

            suite.perform(library);

            sum += now() - start;

            if (i % 200 === 0) {
                const progress = (i / suite.iterations) * 100;
                const lib = `${libIdx}/${libraries.length}`;

                logUpdate(
                    `${frame()} ${suite.name} - ${lib} ${
                        library.name
                    } ${progress.toFixed(0)}%`
                );
            }
        }

        const updates = library.getMovementSystemUpdateCount();

        output.push({
            library,
            sum,
            updates,
        });

        library.cleanup();
    });

    logUpdate.clear();

    output.sort((o1, o2) => o1.sum - o2.sum);

    console.log(`Suite ${suite.name} (${suite.iterations} iterations)`);
    output.forEach((out) => {
        const avg = Math.round(out.sum / suite.iterations);
        const percent = (out.sum / output[0].sum) * 100 - 100;

        const nameTxt = out.library.name.padEnd(12, ' ');
        const sumTxt = `${Math.round(out.sum)}`.padStart(10, ' ') + 'ms';
        const avgText = `${avg}`.padStart(6, ' ') + 'ms';
        const updateText =
            out.updates > 0 ? `${out.updates} updates`.padStart(20) : '';

        let percentText = percent.toFixed(1).padStart(10, ' ') + '%';

        if (percent <= 0) {
            percentText += ' fastest';
        } else {
            percentText += ' slower';
        }

        console.log(
            `  - ${nameTxt}${avgText}${sumTxt}${updateText}${percentText}`
        );
    });
    console.log('');
});
