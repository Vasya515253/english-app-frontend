import styles from './ModuleCard.module.css'

type SectionId = 'grammar' | 'vocabulary' | 'reading' | 'listening' | 'speaking' | 'writing' | 'pronunciation'

type Props = {
  id: SectionId
  title: string
  subtitle: string
  icon: string
  onSelect: (id: SectionId) => void
}

export default function ModuleCard({ id, title, subtitle, icon, onSelect }: Props) {
  return (
    <article className={styles.card} onClick={() => onSelect(id)}>
      <div className={styles.cardIcon} aria-hidden>
        {icon}
      </div>
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardText}>{subtitle}</p>
      <button
        className={styles.cardButton}
        onClick={(e) => {
          e.stopPropagation()
          onSelect(id)
        }}
      >
        Open
      </button>
    </article>
  )
}
