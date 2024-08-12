import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"
import Links from "../../constants/Links"
import styles from "./RootLayout.module.scss"

const RootLayout = () => {
  return (
    <>
    <Navbar links={Links}/>
    <section className={styles.container}>
    <Outlet />
    </section>
    </>
  )
}

export default RootLayout