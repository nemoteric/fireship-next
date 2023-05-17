// import PocketBase from "pocketbase";
import styles from '../Notes.module.css'

// export const dynamic = 'auto',
//   dynamicParams = true,
//   revalidate = 0,
//   fetchCache = 'auto',
//   runtime = 'nodejs',
//   preferredRegion = 'auto'

async function getNote(noteId: string) {
  //const db = new PocketBase('http://127.0.0.1:8090');
  //const data = await db.records.getList('notes');
  const res = await fetch(`http://127.0.0.1:8090/api/collections/notes/records/${noteId}`, {
    // Incremental Static Regeneration
    next: { revalidate: 10 },
  })
  const data = await res.json()
  return data
}

export default async function NotePage({ params }: any) {
  const note = await getNote(params.id)

  return (
    <div>
      <h1>notes/{note.id}</h1>
      <div className={styles.note}>
        <h3>{note.title}</h3>
        <h5>{note.content}</h5>
        <p>{note.created}</p>
      </div>
    </div>
  )
}
