import moment from 'moment'

export const repoColumns = [
  {
    id: 'collapse',
    label: '',
    width: '5%'
  },
  {
    id: 'name', 
    label: 'Name',
    width: '15%'
  },
  {
    id: 'language',
    label: 'Lang',
    width: '5%'
  },
  {
    id: 'description',
    label: 'Description',
    width: '70%'
  },
  {
    id: 'stargazers_count',
    label: 'Stars',
    width: '5%'
  },
]

export const commitColumns = [
  {
    id: 'commit.author.name',
    label: 'Author',
    width: '30%'
  },
  {
    id: 'sha',
    label: 'Hash',
    width: '50%'
  },
  {
    id: 'commit.author.date',
    label: 'Date',
    format: (data) => moment(data).format('YYYY-MM-DD'),
    width: '20%'
  }
]
