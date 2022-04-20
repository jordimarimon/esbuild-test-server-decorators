import { playwrightLauncher } from '@web/test-runner-playwright';
import { esbuildPlugin } from '@web/dev-server-esbuild';

const browser = process.env.BROWSER;

let browsers;

if (browser) {

    if (!['chromium', 'firefox', 'webkit'].includes(browser)) {
        throw new Error('Invalid browser specified. Valid values can be: "chromium", "firefox" or "webkit"');
    }

    browsers = [playwrightLauncher({product: browser})];

} else {

    browsers = [
        playwrightLauncher({product: 'chromium'}),
        playwrightLauncher({product: 'firefox'}),
        playwrightLauncher({product: 'webkit'}),
    ];

}

export default {
    rootDir: './',
    port: 8000,
    files: ['src/test.ts'],
    nodeResolve: true,
    open: false,
    watch: false,
    browsers,
    plugins: [
        esbuildPlugin({
            ts: true,
            target: 'auto',
        }),
    ],
};
