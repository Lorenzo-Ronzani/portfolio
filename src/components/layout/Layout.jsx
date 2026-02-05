const Layout = ({ sidebar, children }) => {
  return (
    <div className="min-h-screen">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex">
          <aside className="w-4xl py-16">{sidebar}</aside>
          <main className="flex-1 py-16">{children}</main>
        </div>
      </div>
    </div>
  );
};

export default Layout;
