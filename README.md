# JIRA CLI

## Installation

`
npm install jirac -g
`

## Configuration

At first you need to pass your account info, but you also can specify by command arguments.

```sh
export JIRA_USER=hdemon
export JIRA_PASSWORD=xxxxx
# If you use in-house JIRA, you need to specify its origin.
export JIRA_ORIGIN=https://jira.hdemon.com
```

## Usage

```sh
jirac list --assignee=hdemon --project="JIRA CLI" --fixVersion="0.0.1"
```

or

```sh
jirac list -j 'assignee = hdemon AND project = "JIRA CLI" AND statusCategory != Done'
```

### Examples

Filter and browse issues by using an interactive filtering tool like peco or something like that.

```sh
jirac list -j 'assignee = "hdemon" AND project = "jirac" AND statusCategory != "Done"' | peco | awk '{print $1}' | xargs -I {} open https://jira.atlassian.com/browse/{}
```

TODO: add short video


## License

MIT License
