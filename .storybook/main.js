module.exports = {
    stories: ['../src/lib/**/*.stories.js'],
    addons: [
        '@storybook/addon-a11y/register',
        '@storybook/addon-actions',
        '@storybook/addon-knobs',
        '@storybook/addon-links',
        '@storybook/addon-storysource',
        '@storybook/preset-create-react-app'
    ]
}
