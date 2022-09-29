const Card = ({ name, description, url, topics }) => {
  return (
    <a className="card" href={url} target="_blank" rel="noreferrer">
      <div className="card__title">{name}</div>
      <div className="card__description">{description}</div>
      <div className="card__topics">
        {topics.map((topic, key) => (
          <div key={key} className="card__topics__topic">
            {topic}
          </div>
        ))}
      </div>
    </a>
  )
}

export default Card

export async function getServerSideProps(ctx) {
  return { props: { ...ctx.props } }
}
