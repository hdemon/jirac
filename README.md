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

## License

MIT License
