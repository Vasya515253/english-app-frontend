import Home from './components/Home'

const navItems = [
  { id: 'grammar', title: 'Grammar', subtitle: 'Rules and structure' },
  { id: 'listening', title: 'Listening', subtitle: 'Audio and understanding' },
  { id: 'pronunciation', title: 'Pronunciation', subtitle: 'Sounds and clarity' },
  { id: 'reading', title: 'Reading', subtitle: 'Texts and topics' },
  { id: 'speaking', title: 'Speaking', subtitle: 'Questions and practice' },
  { id: 'vocabulary', title: 'Vocabulary', subtitle: 'Words and repetition' },
  { id: 'writing', title: 'Writing', subtitle: 'Tasks and feedback' },
] as const

export default function App() {
  return (
    <Home
      navItems={navItems as any}
      onSelectSection={() => {}}
    />
  )
}
