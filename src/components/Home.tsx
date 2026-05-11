type SectionId = 'grammar' | 'vocabulary' | 'reading' | 'listening' | 'speaking' | 'writing' | 'pronunciation'

type NavItem = {
  id: SectionId
  title: string
  subtitle: string
}

import styles from './Home.module.css'
import ModuleCard from './UI/ModuleCard'

const icons: Record<SectionId, string> = {
  grammar: '📚',
  listening: '🎧',
  pronunciation: '🔊',
  reading: '📖',
  speaking: '🗣️',
  vocabulary: '🧠',
  writing: '✍️',
}

export default function Home({ navItems, onSelectSection }: { navItems: NavItem[]; onSelectSection: (id: SectionId) => void }) {
  const name = (typeof window !== 'undefined' && window.localStorage.getItem('userName')) || 'Guest'

  return (
    <main className={styles.home}>
      <header className={styles.hero}>
        <p className={styles.kicker}>English Studio</p>
        <h1 className={styles.title}>Welcome, {name}</h1>
        <p className={styles.description}>A compact English learning studio — pick a module to begin.</p>
      </header>

      <section className={styles.modulesSection}>
        <h2 className={styles.sectionTitle}>Modules</h2>
        <div className={styles.grid}>
          {navItems.map((item) => (
            <ModuleCard
              key={item.id}
              id={item.id}
              title={item.title}
              subtitle={item.subtitle}
              icon={icons[item.id]}
              onSelect={onSelectSection}
            />
          ))}
        </div>
      </section>
    </main>
  )
}
