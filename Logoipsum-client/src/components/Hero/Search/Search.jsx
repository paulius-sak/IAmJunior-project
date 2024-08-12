import styles from "./Search.module.scss"

const Search = ({...props}) => {
  return (
    <input className={styles.searchInput} placeholder="Search" {...props} />
  )
}

export default Search