# How to publish this library

Create a new version using `npm`:

```
npm version <major|minor|patch>
```

Publish the new version:

```
npm publish --public
```

Push the new tags to git as well:

```
git push origin/main --tags
```

