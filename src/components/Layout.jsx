import { Link, Outlet } from "react-router-dom"

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to={"/"}>Главная</Link>
          </li>
          <li>
            <Link to={"/posts"}>Посты</Link>
          </li>
          <li>
            <Link to={"/form"}>Форма</Link>
          </li>
        </ul>
      </nav>
      <Outlet/>
      <footer>
        Домашнее задание №1
      </footer>
    </>
  )
}

export default Layout