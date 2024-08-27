import { Outlet, useParams } from "react-router-dom"
import Navbar from "./Navbar"
import Links from "../../constants/Links"
import styles from "./RootLayout.module.scss"
import {useUser} from "../../context/UserContext"


const RootLayout = () => {
  const { user } = useUser();
  console.log("user", user)
  return (
    <>
    <Navbar links={Links} user={user}/>
    <section className={styles.container}>
    <Outlet />
    </section>
    </>
  )
}

export default RootLayout