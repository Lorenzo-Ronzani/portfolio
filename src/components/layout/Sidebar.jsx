const Sidebar = () => {
  return (
    <div className="fixed">
      <header className="flex flex-col py-6">
        <div>
          <h1 className="mb-1 text-5xl/10">
            <a href="/">Lorenzo Ronzani</a>
          </h1>
          <h2 className="text-2xl/10">Software Development Student</h2>
          <p className="mt-2">I am constantly seeking for improve my skills</p>
          <nav className="mt-13">
            <ul className="space-y-6">
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#experience">Experience</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex">
          <ul className="mt-80 flex space-x-3">
            <li>
              <a href="">Linked In</a>
            </li>
            <li>
              <a href="">Github</a>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Sidebar;
