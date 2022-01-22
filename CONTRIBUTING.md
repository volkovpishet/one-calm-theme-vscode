# Contributing

## Testing the theme

To run the theme, open the project in VS Code and run the
`Debug: Start Debugging` command. When you start debugging, a new VS Code test
instance \(heretofore referred to as the "test instance"\) will be launched with
all your extensions disabled and the One Dark theme enabled and selected. The
TypeScript compiler will also start in watch mode and compile any changes you
make to the theme. After making your changes, run the `Debug: Restart` command
to restart the test instance with the changes you made.

### Live reload using nodemon

This project is configured to allow live theme reloading using `nodemon`. This
will update the theme colors in the test instance to allow you to immediately
see how your changes will look without having to restart the test instance. To
utilize this feature, run the following command before you start debugging.

```bash
yarn run theme:watch
```
