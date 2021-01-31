import * as libs from './libraries';
import * as suts from './suites';

const libraries = Object.values(libs);
const suites = Object.values(suts);

const now = () => {
    const hr = process.hrtime();

    return (hr[0] * 1e9 + hr[1]) / 1000;
};

suites.forEach((suite) => {
    const output = [];

    libraries.forEach((library) => {
        suite.setup(library);

        let sum = 0;

        for (let i = 0; i < suite.iterations; i++) {
            const start = now();

            suite.perform(library);

            sum += now() - start;
        }

        const updates = library.geMovementSystemUpdateCount();

        output.push({
            library,
            sum,
            updates,
        });

        library.cleanup();
    });

    output.sort((o1, o2) => o1.sum - o2.sum);

    console.log(`Suite ${suite.name} (${suite.iterations} iterations)`);
    output.forEach((out) => {
        const avg = Math.round(out.sum / suite.iterations);
        const percent = (out.sum / output[0].sum) * 100 - 100;

        const nameTxt = out.library.name.padEnd(12, ' ');
        const sumTxt = `${Math.round(out.sum)}`.padStart(10, ' ') + 'ms';
        const avgText = `${avg}`.padStart(6, ' ') + 'ms';
        const updateText =
            out.updates > 0 ? `${out.updates} updates`.padStart(16) : '';

        let percentText = percent.toFixed(1).padStart(10, ' ') + '%';

        if (percent <= 0) {
            percentText += ' fastest';
        } else {
            percentText += ' slower';
        }

        console.log(
            `  - ${nameTxt}${avgText}${sumTxt}${updateText}${percentText}`
        );

        // const updates = library.geMovementSystemUpdateCount();
        // const updateText = updates > 0 ? `\t${updates} entity updates` : '';

        // console.log(
        //     `  - ${library.name}\t\t${avgText}ms\t${sumText}ms${updateText}`
        // );
    });
    console.log('');
});
