
## Releasing Docs


Follow these instruction in the following order to releasing docs to production:

### Releasing XPLAT Docs To Production

- make sure [Releasing Samples to Production](./releasing-samples.md) is completed
- make sure [API Mapping Files](./api-links.md) are updated
- open [igniteui-xplat-docs](https://github.com/IgniteUI/igniteui-xplat-docs/pulls) repo
- click the **New Pull Request** button
- select the **master** branch as a **base** branch
- select the **vnext** branch as a **compare** branch
- click the **Create Pull Request** button
- set title to **Volume Release - [Current Month and Year]**
- add reviewer to the pull request
- wait for the pull request to be merged
- once merged a [new build](https://infragistics.visualstudio.com/NetAdvantage/_build?definitionId=225) will be queued that targets the **master** branch 


